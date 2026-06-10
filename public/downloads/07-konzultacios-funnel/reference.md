# 7. modul — Technikai referencia

## Cal.com event type konfiguráció

### Alapadatok
- **Event name:** Stratégiai konzultáció — 30 perc
- **URL slug:** `/konzultacio` (saját Cal.com profilodon: cal.com/{username}/konzultacio)
- **Length:** 30 perc
- **Description (rövid, az olvasó látja a foglaláskor):**
  > „30 perces beszélgetés arról, hogy hol tartasz most, és milyen következő lépés lenne értelmes számodra. Nem értékesítés — őszinte feltérképezés."

### Időkeret (Availability)
- **Heti óra:** 4-6 óra (NE többet — kell idő felkészülésre, pihenésre)
- **Napok:** Hétfő-csütörtök (péntek hagyva más munkára)
- **Napszak:** 10:00-12:00 ÉS 14:00-16:00 (délelőtt és kora délután)
- **Időzóna:** Europe/Budapest
- **Buffer before:** 15 perc
- **Buffer after:** 15 perc
- **Minimum notice:** 24 óra (ne tudjanak aznap foglalni — ne kapkodj)
- **Time slot intervals:** 30 perc (pl. 10:00, 10:30, 11:00…)

### Helyszín (Location)
- **Primary:** Google Meet (Workspace integráció — automatikusan generál linket)
- **Alternative:** Zoom (manuálisan link generálódik a Cal.com Zoom-app-on keresztül)

### Előzetes kérdések (Booking questions)

3 kérdés, mindegyik kötelező:

```
1) Mi az a konkrét helyzet, amiben szeretnél előrelépni?
   Típus: Long text
   Placeholder: „Pl. évek óta tervezgetem, de még nincs weboldalam…"

2) Milyen szolgáltatást vagy eszközt használtál eddig erre?
   Típus: Long text
   Placeholder: „Pl. próbáltam Wix-szel, de feladtam…"

3) Mire szeretnél kijönni a beszélgetésből?
   Típus: Long text
   Placeholder: „Pl. egy konkrét következő lépésre, amit ezen a héten meg tudok tenni…"
```

### Notification (alapból)
- **Email confirmation:** ON
- **Email reminder 24h:** ON (custom Workflow felülírja)
- **Email reminder 1h:** ON (custom Workflow felülírja)

## Cal.com Workflows — 4+1 email automatika

A Workflows menüben minden email-szabály így épül fel:
1. **Trigger:** mikor küldjön (foglalás után / X órával előtte / X órával utána)
2. **Action:** Send email
3. **To:** Booker (a foglaló)
4. **Email subject + body:** custom

### 1) CONFIRMATION (azonnal a foglalás után)

**Trigger:** „New booking" — azonnal
**Subject:** Megerősítettem: {{EVENT_NAME}} — {{EVENT_DATE}}

**Body:**
```
Szia {{ATTENDEE_NAME}},

megerősítettem a foglalásod {{EVENT_DATE}} {{EVENT_TIME}}-ra. A találkozó linkje: {{MEETING_URL}}

Ha valami közbejön és módosítani kell, ezen a linken tudod átírni: {{RESCHEDULE_URL}}

A beszélgetésig nem kell készülnöd semmivel — az előzetes kérdéseidre adott válaszokat olvasom át, az alapján kezdünk.

Köszi, hogy időt szakítasz.

{{TE_NEVED}}
{{VALLALKOZAS_NEVE}}
```

### 2) 24H REMINDER (1 nappal előtte)

**Trigger:** „Before event" — 24 hours
**Subject:** Holnap találkozunk — {{EVENT_TIME}}

**Body:**
```
Szia {{ATTENDEE_NAME}},

holnap {{EVENT_TIME}}-kor találkozunk. A link: {{MEETING_URL}}

Mit hozzál magaddal:
- Egy konkrét helyzet, amit szeretnél átbeszélni
- Ha van, az eddigi próbálkozásaid (eszköz, szolgáltatás, ami nem vált be)
- Egy mondat arról, mire szeretnél kijönni a beszélgetésből

Nem kell ennél többet készülnöd. Holnap találkozunk.

{{TE_NEVED}}
```

### 3) 1H REMINDER (1 órával előtte)

**Trigger:** „Before event" — 1 hour
**Subject:** Egy óra múlva: {{EVENT_NAME}}

**Body:**
```
Szia {{ATTENDEE_NAME}},

egy óra múlva találkozunk. Itt a link: {{MEETING_URL}}

Ha bármi változik, írj egyet ide: {{REPLY_EMAIL}}

{{TE_NEVED}}
```

### 4) FOLLOW-UP (a beszélgetés után 2 órával)

**Trigger:** „After event" — 2 hours
**Subject:** Köszi a beszélgetést — a megbeszélt lépések

**Body:**
```
Szia {{ATTENDEE_NAME}},

köszi a mai beszélgetést. A megbeszélt konkrét lépések:

[ITT MANUÁLISAN MÓDOSÍTANDÓ a beszélgetés után — a Cal.com nem tudja a beszélgetés tartalmát]

- [Lépés 1]
- [Lépés 2]
- [Lépés 3]

Ha kérdésed van menet közben, írj egyet ide: {{REPLY_EMAIL}}

{{TE_NEVED}}
```

**Megjegyzés:** Ezt az emailt vagy 100%-ban automatikusan küldöd egy generikus szöveggel, vagy a Workflow helyett manuálisan írod meg a beszélgetés után. Én az utóbbit ajánlom — a személyre szabás többet ér ennél a kontaktnál.

### 5) NO-SHOW FOLLOW-UP (24 órával a no-show után)

**Trigger:** Manuális — a Cal.com naptárban a meetingot „No-show"-nak jelölöd, és egy külön Workflow elindul.
Vagy: 24 órával az event után, csak ha az event státusza „No-show".

**Subject:** Sajnálom, hogy elcsúszott — szabad új időpontot küldenem?

**Body:**
```
Szia {{ATTENDEE_NAME}},

úgy láttam, tegnap elcsúszott a beszélgetésünk — sok minden történhet egy nap alatt, ez teljesen rendben van.

Ha még mindig releváns számodra, itt a foglalási link: {{BOOKING_URL}}

Ha most nem időszerű, az is rendben — egyszerűen ne válaszolj, és nem foglak további emailekkel keresni.

{{TE_NEVED}}
```

**Szabály:** maximum 1 no-show follow-up email — a 2. no-show után már nem küldök új linket.

## A no-show mentális kerete

A no-show NEM személyes. Az iparági átlag durván:
- **Ingyenes konzultáció:** 20-30% no-show ráta
- **Kvalifikációs kérdésekkel szűrt ingyenes:** 10-20% no-show
- **Fizetős konzultáció (akár csak 5 000 Ft is):** 2-5% no-show

Mit teszek én magam, ha ez gyakori probléma lesz:
1. **Ne idegeskedj egy no-show miatt** — egy adat, nem támadás
2. **Nézd a rátát, ne az egyedi eseteket** — 10 foglalásból 2 no-show normális
3. **Ha 30% felett van a ráta:** lehet, hogy az event-en érdemes változtatni — pl. fizetős előleg, vagy kvalifikációs kérdések szigorítása
4. **Ne küldj 3 utánkövető emailt** — egy elég, utána a passzivitás a tisztelet jele

## Tipikus hibák

- **Túl szoros időkeret:** a Cal.com-ban 8 órát beállítasz egy napra — ez kiéget. Reálisan napi 2-3 óra konzultáció a maximum, hogy mindegyikre rendesen tudj figyelni.
- **Generikus follow-up:** a follow-up email ne legyen automatikus „köszi a beszélgetést" sablon — vagy személyes vagy nincs.
- **Hiányzó buffer time:** ha 30 perc meeting van 30 perc közökben, lefutsz. Minimum 15 perc buffer kell.
- **Coach-szagú szöveg:** „a magasabb verziód", „a megvalósult önmagad" — magyar piacon ez NEM működik.
- **Túl sok előzetes kérdés:** 5+ kérdés a foglalás előtt elriaszt. 2-3 kérdés a maximum.
- **Hiányzó reschedule link:** mindig kötelezően benne legyen a confirmation emailben — ez csökkenti a no-show-t.
- **Manuális Zoom-link:** ne te küldd a linket — a Cal.com Google Meet integrációja automatikusan generálja.

## A Funnelépítés 5 Alapmodellje

A konzultációs funnel nem önállóan létezik — egy nagyobb képletbe illeszkedik. Az elmúlt évek alatt kikristályosodott számomra, hogy a vállalkozói „funnel-káoszt" 5 alapmodellre lehet redukálni. Ha ezt az 5-öt érted, mindent értesz, és tudni fogod, miért pont a Call Funnel az elsődleges nálad.

### Miért zavaróak a funnelek a legtöbb vállalkozónak?

Mindenki mást mond, mást tanít, mást használ. A vállalkozók gyakran:
- túlbonyolítják a folyamatot,
- rossz funneltípust választanak,
- rossz sorrendben építik őket,
- olyan funnelre költenek, amit még nem lenne szabad elkészíteni.

A valóság sokkal egyszerűbb: **összesen 5 funneltípus létezik.**

### A különbség: weboldal vs. landing page vs. funnel

- **Weboldal = éttermi büfé.** Sok választási lehetőség, a látogató „kóborol", felfedezi, ami érdekli.
- **Funnel = egyetlen útvonal.** Egyetlen célja van. Lépésről lépésre viszi át az érdeklődőt A-ból B-be.
- **Landing page = egy oldal.** Önmagában nem funnel. Lehet weboldal része vagy funnel része.

A funnel maga a folyamat — egy koherens útvonal, nem egyetlen oldal.

### Az 5 funneltípus

#### 1) Capture Funnel (listaépítő funnel)
- **Cél:** lead-szerzés (email vagy DM)
- **Példák:** checklista, cheat sheet, eszközlista, sablon, mini videó
- **Megjegyzés:** a tipikus PDF-es lead magnet csak akkor működik, ha valóban hasznos. A „mindenki PDF-et ad" szakaszon már túl vagyunk — ennél többet kell adnod.

#### 2) Educate Funnel (oktató / edukációs funnel)
- **Cél:** először tanítasz, majd ajánlasz
- **Formátumok:** webinár, élő workshop, YouTube videó, masterclass, e-mailes tanulási sorozat
- **Variációk:**
  - **Opt-ines:** emailért cserébe (regisztráció kötelező)
  - **Opt-in nélküli:** nyitott — a YouTube az egyik legjobb edukáló funnel

#### 3) Sell Funnel (közvetlen értékesítő funnel)
- **Cél:** azonnali vásárlás
- **Felépítés:** értékesítési oldal → checkout → köszönő oldal
- **Mikor működik:** olcsó termékeknél, digitális csomagoknál, minikurzusoknál
- **Logika:** nincsenek fázisok, csak ajánlat → vásárlás

#### 4) Call Funnel (időpontfoglaló funnel)
**Ez a legfontosabb funnel.** Célja, hogy beszélgess a potenciális ügyféllel, megértsd őt, és lezárd.
- **Felépítés:** rövid landing (érték + miért érdemes csatlakozni) → naptár (Cal.com) → köszönő oldal
- **Kulcsmondat:** „A legtöbb vállalkozó az utolsó funnellel kezdi, pedig ez az első." Ha élőben nem tudsz lezárni, automatizálva sem fog menni.

#### 5) Grow Funnel (ügyfélértéket növelő — LTV funnel)
- **Cél:** ügyfélélmény javítása, upsell, ajánláskérés, review-gyűjtés, ismételt vásárlás
- **Példák:** onboarding sor, termék bevezető email-sor, upsell ajánlat, affiliate csatlakozó oldal, review-kérő üzenetsor
- **Megjegyzés:** ez a funnel felelős a profit nagy részéért — gyakran kihagyják, pedig itt termelődik a fenntartható bevétel.

### A leggyakoribb hiba: rossz funnel rossz időben

A vállalkozók többsége:
- először capture funnelt épít (PDF + email-sorozat),
- vagy egy webinar funnelt,
- vagy rögtön sales funnelt készít.

Ez a „hope marketing" — reménykedsz, hogy jó lesz az ajánlatod, miközben még nem validáltad emberi beszélgetésekkel.

### Az ajánlott kezdési pont: Call Funnel

Ha egyetlen funnel létezne, amit minden vállalkozónak építenie kellene, az a Call Funnel lenne. Miért?

- Emberekkel beszélsz közvetlenül.
- Megérted, mit akarnak valójában.
- Élőben hallod az ellenérveket.
- Tudod finomítani:
  - az ajánlatodat,
  - a kommunikációdat,
  - a pozicionálást,
  - az árképzést.

A call funnel kétféle célt kommunikál:
- **Elsődleges cél:** eladni a szolgáltatást vagy programot.
- **Másodlagos cél:** amit a felhasználó akar (audit, stratégia, segítség, diagnózis).

### A helyes építési sorrend

A funneleket NEM szabadon választott sorrendben építed. A logikus sorrend:

1. **Call Funnel** — validáció + gyors bevétel (ez a 7. modul)
2. **Capture Funnel** — listaépítés (ez a 9. modul)
3. **Educate Funnel** — bizalomépítés (workshop / webinár / minikurzus — 5. és 20. modul)
4. **Sell Funnel** — automatizált értékesítés (ez a 20. modul)
5. **Grow Funnel** — profitnövelés és élmény (ez későbbi szakasz)

Ez a sorrend illeszkedik a vállalkozói érettséghez:
- call → emberi validálás
- capture → közönségépítés
- educate → melegítés
- sell → automatizált bevétel
- grow → LTV-növelés

### Gyakorlati alkalmazás — mit tegyél most

1. **Fogalmazd meg az ajánlatodat** (3. modul anyaga): kinek segítesz, miben, milyen eredményt adsz.
2. **Építs Call Funnelt:** 1 landing + 1 naptár (Cal.com) + 1 köszönő oldal + 1 email-emlékeztető.
3. **Tarts 10-20 beszélgetést.** Ezek adják:
   - a sales-oldalaid szövegét,
   - a funneljeid ígéreteit,
   - a pozicionálásod alapját,
   - a termékfejlesztés irányát.
4. **Ebből építsd a Capture Funnelt** valódi értéket adó ingyenes anyaggal (9. modul).
5. **Készíts Educate Funneleket:** YouTube videók, workshopok, minikurzusok.
6. **Ha validáltad, jöhet a Sell Funnel:** automatizált eladások, low-ticket termékek (20. modul).
7. **Ha vannak már ügyfeleid, jöhet a Grow Funnel:** ügyfélérték-növelés, ajánláskérés, upsell.

### Záró gondolat

A jó funnel nem kreativitás kérdése — szerkezet kérdése. Ha jó a szerkezet, működik. A `funnel-lead-gen.txt` és `funnel-sales.txt` rövid, kiegészítő anyagok a Drive-ban, amik a Capture (lead gen) és Sell (sales) funnel közötti különbséget részletezik egy-egy mondatban: a lead gen funnel érdeklődőket gyűjt (még nem vásárolnak), a sales funnel azokat célozza, akik már vásárlási szándékkal érdeklődnek.
