# 10. modul — Technikai referencia

## Google Sheets — a 4 munkalap oszlop-fejlécei

### 1. Prospects

| Oszlop | Típus | Példa |
|--------|-------|-------|
| name | Szöveg | Kovács Anna |
| email | Email | anna@cegnev.hu |
| source | Lista (referral, cold, organic, ad, ismerős) | referral |
| last_contact | Dátum | 2026-04-15 |
| status | Lista (new, contacted, replied, ghosted) | contacted |
| notes | Hosszú szöveg | Volt kolléga, kerületi ügyvéd |

### 2. Consultations

| Oszlop | Típus | Példa |
|--------|-------|-------|
| date | Dátum + idő | 2026-04-22 14:00 |
| name | Szöveg | Kovács Anna |
| email | Email | anna@cegnev.hu |
| calcom_event_id | Szöveg | uid-abc123 |
| topic | Szöveg | Számlázás-automatizálás |
| outcome | Lista (proposal_sent, no_fit, follow_up, ghosted) | proposal_sent |
| notes | Hosszú szöveg | Heti 5h-t veszít számlázásra |

### 3. Proposals

| Oszlop | Típus | Példa |
|--------|-------|-------|
| date | Dátum | 2026-04-23 |
| name | Szöveg | Kovács Anna |
| email | Email | anna@cegnev.hu |
| package | Lista (basic, standard, premium) | standard |
| price | Szám | 220000 |
| status | Lista (pending, won, lost, expired) | won |
| sent_via | Lista (email, drive_link, pdf) | drive_link |

### 4. Clients

| Oszlop | Típus | Példa |
|--------|-------|-------|
| start_date | Dátum | 2026-04-25 |
| name | Szöveg | Kovács Anna |
| email | Email | anna@cegnev.hu |
| package | Lista | standard |
| price | Szám | 220000 |
| payment_status | Lista (pending, paid, overdue) | paid |
| notes | Hosszú szöveg | Havi átutalással fizet |

### Conditional formatting javaslat

- Proposals.status = "won" → zöld háttér
- Proposals.status = "lost" → piros háttér
- Clients.payment_status = "overdue" → piros háttér
- Consultations.date < ma() → halványszürke háttér (lezárt)

## Apps Script 1 — Cal.com webhook fogadó

```javascript
// apps-script-webhook.gs
// Cal.com BOOKING_CREATED webhook fogadás → új sor a Consultations lapon

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);

    // Cal.com payload struktúra
    var booking = payload.payload || payload;
    var attendee = booking.attendees && booking.attendees[0];

    if (!attendee) {
      Logger.log('Hiányzó attendee adat');
      return ContentService.createTextOutput(JSON.stringify({error: 'no_attendee'}))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Consultations');
    if (!sheet) {
      Logger.log('Consultations lap nem található');
      return ContentService.createTextOutput(JSON.stringify({error: 'sheet_not_found'}))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Új sor összeállítása
    var newRow = [
      new Date(booking.startTime),     // date
      attendee.name || '',             // name
      attendee.email || '',            // email
      booking.uid || '',               // calcom_event_id
      booking.title || '',             // topic
      '',                              // outcome (üres, később töltöd)
      ''                               // notes (üres)
    ];

    sheet.appendRow(newRow);

    Logger.log('Új consultation: ' + attendee.email);

    return ContentService.createTextOutput(JSON.stringify({status: 'ok'}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log('Hiba: ' + err.toString());
    return ContentService.createTextOutput(JSON.stringify({error: err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Tesztre — manuálisan futtatható
function testDoPost() {
  var fakeEvent = {
    postData: {
      contents: JSON.stringify({
        payload: {
          uid: 'test-uid-123',
          title: 'Tesztelés',
          startTime: new Date().toISOString(),
          attendees: [{name: 'Teszt Elek', email: 'teszt@pelda.hu'}]
        }
      })
    }
  };
  doPost(fakeEvent);
}
```

### Deployment lépések

1. Sheets-ben: Extensions → Apps Script
2. A kódot bemásolod a fenti script-tel
3. Mentés (Ctrl/Cmd+S), név: „CRM Webhook"
4. Jobb felül: „Deploy" → „New deployment"
5. Type: „Web app", Execute as: „Me", Who has access: „Anyone"
6. Deploy → kapsz egy URL-t (a Web app URL)
7. Ezt az URL-t bemásolod a Cal.com Workflow „Webhook" sztring-jébe
8. Cal.com → Settings → Workflows → New → Trigger: „New booking" → Action: „Send webhook" → URL: a fenti

## Apps Script 2 — Proposals → Clients onEdit

```javascript
// apps-script-onedit.gs
// Ha a Proposals lapon valaki status = "won"-ra állít, automatikusan
// átmásolja a sort a Clients lapra.

function onEdit(e) {
  try {
    var sheet = e.range.getSheet();
    var sheetName = sheet.getName();

    if (sheetName !== 'Proposals') return;

    var col = e.range.getColumn();
    var row = e.range.getRow();
    var value = e.range.getValue();

    // Az oszlop-indexet a fenti táblázat alapján: status a 6. oszlop
    var STATUS_COL = 6;

    if (col !== STATUS_COL || value !== 'won') return;
    if (row === 1) return; // header sor

    // A teljes Proposals sort kiolvassuk
    var proposalRow = sheet.getRange(row, 1, 1, 7).getValues()[0];
    // [date, name, email, package, price, status, sent_via]

    var clientsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Clients');
    if (!clientsSheet) {
      Logger.log('Clients lap nem található');
      return;
    }

    // Új Clients sor: [start_date, name, email, package, price, payment_status, notes]
    var newClientRow = [
      new Date(),                  // start_date = ma
      proposalRow[1],              // name
      proposalRow[2],              // email
      proposalRow[3],              // package
      proposalRow[4],              // price
      'pending',                   // payment_status
      'Won proposal: ' + Utilities.formatDate(proposalRow[0], 'GMT+1', 'yyyy-MM-dd')
    ];

    clientsSheet.appendRow(newClientRow);

    Logger.log('Új klienssé tett ügyfél: ' + proposalRow[2]);

  } catch (err) {
    Logger.log('onEdit hiba: ' + err.toString());
  }
}
```

### Deployment

Az `onEdit` egy „simple trigger" — automatikusan fut, ha a fájlban valaki szerkeszt. Nem kell külön deployolnod, csak el kell mentened a script-et a Sheets dokumentumhoz tartozó Apps Script projektben.

## Gmail filter-szabályok — kész minták

### Cal.com email → 02-Consultations

- Settings → Filters and Blocked Addresses → Create a new filter
- From: `notifications@cal.com` OR `hello@cal.com`
- Apply the label: `02-Consultations`
- Skip the Inbox: igen (ha nem akarod, hogy az inboxod tele legyen)

### Számlázz.hu / Billingo → 05-Operations

- From: `noreply@szamlazz.hu` OR `noreply@billingo.hu`
- Apply the label: `05-Operations`
- Star it: igen (hogy könnyen megtaláld)

### NAV → 05-Operations

- Subject contains: `NAV`
- From contains: `nav.gov.hu`
- Apply the label: `05-Operations`

### Kit feliratkozó visszaigazolások → 01-Prospects

- Subject contains: `[Kit]` OR `[ConvertKit]`
- Apply the label: `01-Prospects`

## Drive mappa-fa

```
Vállalkozás — 2026/
├── 01-Prospects/
│   └── tracking-notes.md
├── 02-Consultations/
│   └── 2026-04-22-kovacs-anna/
│       ├── notes.md
│       └── recording.m4a (ha rögzíted)
├── 03-Proposals/
│   ├── kovacs-anna/
│   │   ├── proposal-2026-04-23.pdf
│   │   └── notes.md
│   └── nagy-bela/
├── 04-Clients/
│   ├── kovacs-anna/
│   │   ├── szerzodes.pdf
│   │   ├── szamlak/
│   │   │   ├── 2026-04-szamla.pdf
│   │   │   └── 2026-05-szamla.pdf
│   │   ├── delivery/
│   │   │   └── [a leszállított anyagok]
│   │   └── notes.md
│   └── nagy-bela/
└── 05-Operations/
    ├── szamlak/         ← saját bevétel-számlák
    ├── nav/             ← NAV-os dokumentumok
    └── szerzodes-sablonok/
```

## Tipikus hibák

- A Sheets-ben nem állítasz be data validation-t a státusz-mezőkre — pár hónap után tele van elgépelt értékkel („wonn", „WON", „won "), és a script nem találja
- Az Apps Script doPost URL-jét „Anyone with the link" helyett „Only myself" jogosultsággal deployolod — a Cal.com nem tud üzenetet küldeni
- A Drive mappákat nem a Vállalkozás Workspace-fiókjából hozod létre, hanem a privát Gmail-edből — később az ügyfél-mappa megosztáskor jogosultság-káosz lesz
- A Gmail filter-szabályoknál „Skip the Inbox"-ot bekapcsolod, és aztán nem nézed a label-eket — fontos email-ek elvesznek. Az első hónapban hagyd inboxban is, csak címkézd
- A `notes.md` fájlt nem a Drive-ban tárolod, hanem helyileg, és a Drive sosem szinkronizál
