# 10. modul — Promptok

## 10.1 — Prompt a 01. leckéhez (Google Sheets CRM — négy munkalap)

A Claude Code-dal egy konkrét munkalap-struktúrát tervezünk meg — oszlop-fejlécekkel, példa-sorokkal, és a saját szakmádra szabott mezőkkel.

```
Tervezzünk meg egy Google Sheets CRM-et négy munkalappal.
Egyéni vállalkozó vagyok, [konkrét szakma — pl. ügyvéd / könyvelő / fotós].
Évente max 30-50 ügyfelem lesz.

A négy munkalap:
1. Prospects — minden lehetséges ügyfél
2. Consultations — Cal.com-on lefoglalt 20-30 perces beszélgetések
3. Proposals — kiküldött ajánlatok
4. Clients — fizető ügyfelek

Minden munkalaphoz adj meg:
- A pontos oszlop-fejléceket (max 8-10 oszlop munkalaponként)
- 2 példa-sort, ami a [szakmám]-hoz illik
- A státusz-mezőhöz az engedélyezett értékek listáját (data validation-höz)

Plusz: javasolj 1-2 conditional formatting szabályt munkalaponként
(pl. zöld háttér ha won, piros ha lost), de ne túl díszesen.

A cél: egyetlen ránézésre lássam, mi a helyzet. NEM HubSpot,
csak egy egyszerű, jól strukturált Sheets.
```

## 10.2 — Prompt a 02. leckéhez (Apps Script automatizáció)

A Cal.com → Sheets webhook automatizációhoz és a Proposals → Clients áthelyezéshez szükséges Apps Script-eket generáljuk.

```
Írj két Apps Script-et a Google Sheets CRM-emhez.

A Sheets struktúra:
- „Prospects" lap: name, email, source, last_contact, status, notes (oszlopok)
- „Consultations" lap: date, name, email, calcom_event_id, topic, outcome, notes
- „Proposals" lap: date, name, email, package, price, status, sent_via
- „Clients" lap: start_date, name, email, package, price, payment_status, notes

Script 1 — Cal.com webhook fogadása:
A Cal.com BOOKING_CREATED webhookot küld POST-tal egy URL-re.
Az Apps Script doGet/doPost függvénye fogadja a JSON payloadot, és
új sort ír a „Consultations" lapra: date (a meeting kezdő ideje),
name (attendees[0].name), email (attendees[0].email),
calcom_event_id (uid), topic (title), outcome (üres),
notes (üres). A script `Webhook deployment` URL-jét a Cal.com
Workflow webhook URL-jéhez tudom illeszteni.

Script 2 — Proposals → Clients automatizáció:
onEdit trigger: ha a „Proposals" lapon valaki a status oszlopban
átállít egy értéket „won"-ra, akkor:
1. Másold a sort a „Clients" lapra (ahol a megfelelő oszlopok azonosak)
2. A „Clients" sorban a start_date legyen a mai dátum
3. A payment_status legyen „pending"
4. A „Proposals" lapon hagyd meg a sort (ne töröld) — csak loggold

Mindkét script-hez:
- Adj egy `setup.gs` fájlt, ami a triggereket telepíti
- Magyar kommenteket
- Hibakezelést (try-catch + Logger.log)
- A Webhook URL-hez deployment instrukciót lépésről-lépésre
```

## 10.3 — Prompt a 03. leckéhez (Gmail label-struktúra és Drive rendszerezés)

A Gmail filter-szabályokat és a Drive mappa-struktúrát egyszerre generáljuk, hogy az email és a fájl összhangban legyen.

```
Tervezzünk egy Gmail label + Drive mappa rendszert egyéni vállalkozónak.

A 5 alap Gmail label:
- 01-Prospects
- 02-Consultations
- 03-Proposals
- 04-Clients
- 05-Operations (számla, NAV, könyvelő, banki dolgok)

Adj nekem:
1. Gmail filter-szabályok (Gmail Settings → Filters and Blocked Addresses)
   automatikus címkézéshez:
   - Cal.com email-ek → 02-Consultations
   - „[Számlázz.hu]" tárgy-prefix → 05-Operations
   - „NAV" tárgy → 05-Operations
   - Saját Kit-domain visszajelzések → automatikus címke

2. Drive mappa-szerkezet (parent folder: „Vállalkozás — [év]"):
   - 01-Prospects/
   - 02-Consultations/
   - 03-Proposals/[ügyfél-név]/
   - 04-Clients/[ügyfél-név]/
   - 05-Operations/szamlak/, /nav/, /szerzodesek-sablonok/

3. Az ügyfél-mappa belseje (Clients/[név]/):
   - szerzodes.pdf
   - szamlak/ (havi alkönyvtár vagy fájl-prefix?)
   - delivery/ (a leszállított anyagok)
   - notes.md (jegyzetek a beszélgetésekről, dátum-prefixszel)

Adj egy kész mappa-fa diagramot ASCII-ban, és egy 5-10 lépéses
„hogyan állítsd be" listát, amit egy reggel végig tudok csinálni.
```
