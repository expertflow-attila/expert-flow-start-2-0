---
lastReviewed: "2026-06-09"
---

# 7. modul · Konzultációs funnel

> Cal.com + négy automatikus email. A rendszer dolgozik, te beszélgetsz — ezért fontos, hogy a háttér nélküled is működjön.

> **TL;DR** — Ebben a modulban rendszert építesz a „Foglalj konzultációt" gomb mögé, hogy a foglalástól a beszélgetésig minden magától menjen.
> - Beállítod a Cal.com foglalót, és 2-3 szűrő-kérdést teszel a foglalási űrlapra.
> - Bemásolod a négy automatikus emailt: visszaigazolás, két emlékeztető és egy követő levél.
> - Felkészülsz a no-show-ra (amikor lefoglalt, de nem jött el): emlékeztetők és egy újrafoglaló email.
> - Megérted, hová illik ez a funnel a teljes képben — a többi típus a 18. modulban jön.

## Hol tartasz

A 6. modulból él a landinged, rajta a „Foglalj konzultációt" CTA (call to action — a cselekvésre hívó gomb). A 3. modulból tudod, mit adsz el a beszélgetésen. Ezen a héten a gomb mögé rendszert építesz.

## Mit építesz meg ezen a héten

Ha valaki kattint a „Foglalj konzultációt" gombra, sok apró lépés következik: időpont-egyeztetés, visszaigazolás, emlékeztetők. Ezeket nem akarod kézzel intézni — elfelejted, és pont a fontos pillanatban. A konzultációs funnel az a 4-5 automatikus lépés foglalás és beszélgetés között:

- visszaigazoló email
- 24 órás emlékeztető
- 1 órás emlékeztető
- follow-up (vagy no-show kezelés)

A Cal.com-ot beállítod, az emaileket bemásolod és személyre szabod, aztán idegen szemszögéből teszteled.

## 01. Cal.com setup

Ez az alap: amíg nincs foglalható naptárad, a landinged gombja zsákutca. Cal.com = ingyenes konzultáció-foglaló (Calendly-alternatíva), rugalmasabb, mert az emailekbe (Workflows) is belenyúlsz.

**Lépéssor**:
1. Regisztráció Google Workspace-fiókkal (naptár-szinkronizáció)
2. Event type — vagyis foglalható alkalom-típus — létrehozása (pl. „30 perces ingyenes konzultáció")
3. Időkeret beállítás (ne nyomd túl szorosan, kell felkészülési idő)
4. 2-3 szűrő-kérdés a foglalási űrlapra — ez a következő lecke

A teljes konfiguráció mezőről mezőre a `reference.md`-ben van — benne a buffer (védőidő két foglalás között) és a minimum notice (mennyivel előre lehet foglalni) is.

## 02. A szűrő-kérdések — ezért csökken a no-show

No-show = lefoglalta az időpontot, de nem jelent meg. Ez ellen a legjobb védelem nem az emlékeztető, hanem a szűrő-kérdés. A szűrő-kérdés ugyanis nem adminisztráció, hanem elköteleződés. Aki foglalás előtt kitölt 3 kérdést, az már időt fektetett a beszélgetésbe — sokkal valószínűbb, hogy el is jön. Aki a kérdéseknél kilép, az nagy eséllyel úgysem jött volna el. A kérdés tehát nem akadály: kiszűri a komolytalan foglalást, mielőtt a naptáradba kerülne.

Három jó szűrő-kérdés (mindhárom hosszú szöveges, kötelező):

1. **„Mi az a konkrét helyzet, amiben szeretnél előrelépni?"** — placeholder: „Pl. évek óta tervezgetem, de még nincs weboldalam…"
2. **„Milyen szolgáltatást vagy eszközt használtál eddig erre?"** — placeholder: „Pl. próbáltam Wix-szel, de feladtam…"
3. **„Mire szeretnél kijönni a beszélgetésből?"** — placeholder: „Pl. egy konkrét következő lépésre, amit ezen a héten meg tudok tenni…"

A válaszokból a beszélgetés előtt látod, kit kapsz — és onnan indulhat a beszélgetés, nem nulláról. Kata, a könyvelő (1. modul) az első kérdést így szabta magára: „Melyik adózási forma körül bizonytalankodsz most?" — a sablon-kérdést mindig a saját területedre fordítsd. Felső határ: 2-3 kérdés. Öt vagy több kérdés már elriaszt, az ellenkező hatást éri el.

## 03. A négy automatikus email — teljes szövegek

A foglalás és a beszélgetés között napok telhetnek el — ennyi idő alatt az emberek felejtenek. Ezt a négy email hidalja át. Cal.com Workflows, 4 email-szabály. Mindegyik így épül fel: trigger (mikor küldjön) + Send email + címzett a foglaló + saját tárgy és szöveg. Az alábbi blokkok másolhatók — a `{{...}}` változókat a Cal.com tölti ki, a `[SZEMÉLYRE SZABD: …]` részeket te írod át.

### 1) Visszaigazolás — azonnal a foglalás után

**Trigger:** „New booking" — azonnal
**Tárgy:** Megerősítettem: {{EVENT_NAME}} — {{EVENT_DATE}}

```
Szia {{ATTENDEE_NAME}},

megerősítettem a foglalásod {{EVENT_DATE}} {{EVENT_TIME}}-ra. A találkozó linkje: {{MEETING_URL}}

Ha valami közbejön és módosítani kell, ezen a linken tudod átírni: {{RESCHEDULE_URL}}

A beszélgetésig nem kell készülnöd semmivel — az előzetes kérdéseidre adott válaszokat olvasom át, az alapján kezdünk.

Köszi, hogy időt szakítasz.

[SZEMÉLYRE SZABD: a neved]
[SZEMÉLYRE SZABD: a vállalkozásod neve]
```

A reschedule-link kötelező elem — aki át tud időpontot tenni, az nem tűnik el szó nélkül.

### 2) 24 órás emlékeztető — egy nappal előtte

**Trigger:** „Before event" — 24 hours
**Tárgy:** Holnap találkozunk — {{EVENT_TIME}}

```
Szia {{ATTENDEE_NAME}},

holnap {{EVENT_TIME}}-kor találkozunk. A link: {{MEETING_URL}}

Mit hozzál magaddal:
- Egy konkrét helyzet, amit szeretnél átbeszélni
- Ha van, az eddigi próbálkozásaid (eszköz, szolgáltatás, ami nem vált be)
- Egy mondat arról, mire szeretnél kijönni a beszélgetésből

[SZEMÉLYRE SZABD: ha a te konzultációdhoz más előkészület kell, írd át a fenti listát]

Nem kell ennél többet készülnöd. Holnap találkozunk.

[SZEMÉLYRE SZABD: a neved]
```

### 3) 1 órás emlékeztető — egy órával előtte

**Trigger:** „Before event" — 1 hour
**Tárgy:** Egy óra múlva: {{EVENT_NAME}}

```
Szia {{ATTENDEE_NAME}},

egy óra múlva találkozunk. Itt a link: {{MEETING_URL}}

Ha bármi változik, írj egyet ide: [SZEMÉLYRE SZABD: az email-címed]

[SZEMÉLYRE SZABD: a neved]
```

### 4) Follow-up — a beszélgetés után 2 órával

**Trigger:** „After event" — 2 hours
**Tárgy:** Köszi a beszélgetést — a megbeszélt lépések

```
Szia {{ATTENDEE_NAME}},

köszi a mai beszélgetést. A megbeszélt konkrét lépések:

[SZEMÉLYRE SZABD: a beszélgetés után kézzel írod be — a Cal.com nem tudja, miről beszéltetek]
- [Lépés 1]
- [Lépés 2]
- [Lépés 3]

Ha kérdésed van menet közben, írj egyet ide: [SZEMÉLYRE SZABD: az email-címed]

[SZEMÉLYRE SZABD: a neved]
```

A follow-upnál döntened kell: vagy generikus szöveggel megy automatikusan, vagy a Workflow helyett kézzel írod meg a beszélgetés után. Az utóbbit ajánlom — a személyre szabás ennél a kontaktnál többet ér, mint az automatizálás.

A hangnem mind a négynél ugyanaz: egyszerű, személyes, nem coach-szagú — mintha ismerősödnek írnál. Promptok a saját változataidhoz a `prompts.md`-ben.

## 04. No-show playbook

A no-show elkerülhetetlen és nem személyes — a foglalás napján sok minden történhet. Ne idegeskedj, a rendszer kezelje. A playbook három részből áll.

**1) Az emlékeztető-lánc időzítése.** Visszaigazolás azonnal → 24 órás emlékeztető → 1 órás emlékeztető → follow-up 2 órával utána. Ez a lánc önmagában csökkenti a no-show-t: aki kétszer kapott emlékeztetőt linkkel, ritkábban felejt el. A szűrő-kérdések (02. lecke) és a fizetős konzultáció tovább csökkentik a rátát.

**2) A „lemaradtál" újrafoglaló email.** Ha nem jelent meg, jelöld a foglalást no-show-nak, és 24 órával később menjen ez:

**Tárgy:** Sajnálom, hogy elcsúszott — szabad új időpontot küldenem?

```
Szia {{ATTENDEE_NAME}},

úgy láttam, tegnap elcsúszott a beszélgetésünk — sok minden történhet egy nap alatt, ez teljesen rendben van.

Ha még mindig releváns számodra, itt a foglalási link: [SZEMÉLYRE SZABD: a foglalási linked]

Ha most nem időszerű, az is rendben — egyszerűen ne válaszolj, és nem foglak további emailekkel keresni.

[SZEMÉLYRE SZABD: a neved]
```

**3) A szabály: 1 újrafoglalási kör, utána engedd el.** Egy újrafoglaló email megy ki, nem három. Ha a második foglalást is kihagyja, nem küldesz új linket — a passzivitás itt a tisztelet jele. A rátát nézd, ne az egyedi eseteket: 10 foglalásból 2 no-show normális. Ha ennél jóval rosszabb, az event-en változtass — szigorúbb szűrő-kérdések vagy fizetős előleg.

Ezt a 8. modulnál fogod élesben alkalmazni, ahol az első konkrét beszélgetések jönnek.

## 05. A nagyobb kép — az 5 funnel-típus

A konzultációs funnel egy az 5 fő funnel-típusból — és nem véletlenül ezzel kezdesz. Élő beszélgetésekben validálod az ajánlatod, mielőtt bármit automatizálnál: hallod a kifogásokat, a szóhasználatot, az árreakciót.

A másik négy típus (lead magnet, tripwire, kvíz és application funnel) és a helyes építési sorrend a [18. modulban](/modules/18-funnel-tipusok) van. Ha a heti rendszered él, nézd meg ott, mi jön ezután — de csak utána.

## Én így csináltam

> *Build-in-public: ide a saját, valós számaim kerülnek — ezt a részt élesben, folyamatosan töltöm fel.*

## Heti feladat

Állítsd be a Cal.com event type-ot a 2-3 szűrő-kérdéssel. Másold be a 4 emailt a Workflows-ba, és szabd személyre a `[SZEMÉLYRE SZABD]` részeket. Utána tesztelj idegenként: foglalj próbaidőpontot egy másik email-címről, és nézd végig a teljes láncot.

**Akkor vagy kész, ha** a próbafoglalás után megérkezett a visszaigazoló email a reschedule-linkkel, és mind a négy Workflow aktív.

## Ha elakadtál

- **„Nem jönnek ki az emailek."** Ellenőrizd a Workflow triggert és hogy aktív-e. Nézd meg a spam mappát, és tesztelj olyan címről, ami nem a sajátod.
- **„Nem tudom, mit írjak át a sablonokban."** Csak a `[SZEMÉLYRE SZABD]` részeket írd át — név, email-cím, foglalási link. A többi szándékosan általános, működik így.
- **„Sok a no-show."** Előbb a rátát nézd: 10-ből 2 normális. Ha rosszabb, tedd kötelezővé mindhárom szűrő-kérdést, és ellenőrizd, hogy a visszaigazolóban benne van-e a reschedule-link.
- **„Cal.com vagy Calendly?"** Cal.com — ingyenes, és a Workflows-ban az emailek szövegébe is belenyúlsz. A Calendly ingyenes csomagja ezt nem engedi.

## Letölthetők

- `prompts.md` — 3 prompt a Cal.com setuphoz, az email-automatikákhoz és a no-show kezeléshez
- `reference.md` — teljes Cal.com konfiguráció mezőről mezőre, a no-show mentális kerete, plusz az 5 funnel-típus részletesen
- `SKILL.md` — Claude Code skill a modulhoz
