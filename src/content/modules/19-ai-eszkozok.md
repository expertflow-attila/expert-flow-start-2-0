---
lastReviewed: "2026-06-09"
---

# Referencia-tár · AI eszközök / Skill-ek

> **TL;DR** — Ez a modul 6 kész Claude Code skillt ad konkrét vállalkozási feladatokra, és megmutatja, hogyan használd őket.
> - Megismered a 6 skillt: email-írás, landing copy, lead magnet, CRM-összefoglaló, content, avatár
> - Megérted, mi az a skill, és hogyan aktiválod (egy mappa a projektedben, `/skill-név` paranccsal hívod)
> - Letöltöd és telepíted a kész skilleket, majd a saját stílusodra szabod
> - Megtanulod, hogyan írj saját skillt nulláról, kb. 30 perc alatt

## Modul áttekintés

6 Claude Code skill, mindegyik egy konkrét vállalkozási feladatot automatizál:

- email-írás
- landing copy generálás
- lead magnet PDF-vázlat
- CRM heti összefoglaló
- content-pipeline
- avatár-építés

Mindegyikhez letölthető `SKILL.md` + `reference.md` telepítési útmutatóval. Bármikor visszanyúlhatsz hozzá.

## Melyik skillt töltsd le először?

Egy perc döntés: keresd meg a leggyakoribb heti feladatodat.

| Ha ez a leggyakoribb feladatod | Ezt töltsd le |
|---|---|
| Hetente írsz emailt a listádra vagy egy érdeklődőnek | `email-iro` |
| Landing oldalt építesz, vagy a copy-dat erősítenéd | `landing-generator` |
| Email-listát kezdesz építeni, kell egy letölthető PDF | `lead-magnet-generator` |
| Sok a párhuzamos érdeklődő, és elveszted a fonalat | `crm-dashboard` |
| Rendszeresen posztolsz, egy ötletből többet hoznál ki | `content-pipeline` |
| Új beszélgetések után frissítenéd, kinek dolgozol | `avatar-builder` |

Egy skillt válassz elsőnek — azt, amelyik a legtöbb heti idődet viszi. A többi marad referencia.

## Videó

[VIDEO PLACEHOLDER]

## Fejezetek

- 0:00 — Bevezető: skill-ek mint újra-felhasználható munkafolyamatok
- 1:00 — A `.claude/skills/` mappa szerkezete
- 2:00 — 1. Email-író skill
- 3:00 — 2. Landing copy generátor skill
- 4:00 — 3. Lead magnet generátor skill
- 5:00 — 4. CRM heti összefoglaló skill
- 6:00 — 5. Content pipeline skill
- 7:00 — 6. Avatár-építő skill
- 8:00 — Hogyan importálj egy meglévő skillt saját projektre
- 9:00 — Hogyan írj saját skillt 30 perc alatt

## A `.claude/skills/` mappa szerkezete

Egy skill = egy mappa a projektgyökeredben, `.claude/skills/skill-name/` útvonalon. A Claude Code automatikusan beolvassa, és a `/skill-name` paranccsal hívhatóvá teszi. Tipikus tartalom:

```
.claude/
└── skills/
    └── email-iro/
        ├── SKILL.md          ← a fő prompt (mit csinál, hogyan használd)
        ├── reference.md      ← részletes példák, edge case-ek
        ├── templates/        ← (opcionális) sablon-fájlok
        │   ├── welcome.md
        │   └── followup.md
        └── examples/         ← (opcionális) példa-outputok
```

- A `SKILL.md` **kötelező** — egy frontmatter (`name`, `description`) + a fő prompt-leírás.
- A `reference.md` opcionális — részletes példák, hogy a modell a saját kontextusába tudja húzni a stílust.
- A skill **automatikusan** aktiválódik, ha a prompted illeszkedik a `description`-höz, vagy expliciten `/skill-name` paranccsal hívható.

## A 6 skill röviden

### 1. `/email-iro` — Email-író skill

Emailt ír a saját hangodon — a listádra vagy egy konkrét embernek. Bemenet: téma + címzett-kontextus + cél + 1-2 korábbi emailed hangmintának. Kimenet: 2 tárgy-variáció + törzs + zárás, másolható Gmail-be vagy a hírlevél-eszközödbe. **Heti 2-3 órát spórol meg**, ha rendszeresen írsz emailt.

### 2. `/landing-generator` — Landing copy generátor

Landing-szekciók szövegét írja a 6. modul módszerével: 10 hero-headline variáció, garancia, FAQ, érték-stack. Bemenet: az ajánlatod egy mondata (3. modul) + legalább 3 interjú-idézet (2. modul) + a landing célja. Kimenet: szekciónkénti copy markdownban — beillesztheted a landing sablonokba vagy az Astro-oldaladba. Idézetek nélkül nem fut: a copy a piac nyelvéből épül, nem a te fejedből.

### 3. `/lead-magnet-generator` — Lead magnet vázlat + PDF-pipeline

PDF-vázlatot ír a 9. modul szabályával: a témát az interjúkban leggyakrabban elhangzott kérdés adja. Kimenet: cím-variációk + fedlap + fejezetenkénti bulletek + halk CTA + a `pandoc` PDF-konverziós parancs. A fejezetek kidolgozása a te dolgod — a skill vázat ad, a szakmai tartalom a te tudásod.

### 4. `/crm-dashboard` — Heti CRM-összefoglaló

A 10. modul Google Sheets CRM-jéből készít heti áttekintést. Bemenet: a négy munkalap beillesztett sorai + a heti kapacitásod. Kimenet: számok munkalaponként + elakadás-lista + 3-7 priorizált következő lépés. Nem nyúl a Sheets-edbe — csak azt olvassa, amit beillesztesz.

### 5. `/content-pipeline` — Tartalmi pipeline

Heti egy tartalom-ötletből készít platformonként egy posztváltozatot. Bemenet: 3-10 mondatos nyers jegyzet + a platformok, ahová ténylegesen posztolsz. Kimenet: mag-állítás + vázlat + platformonkénti változat, dokumentáló hangon. **Heti 1 jó tartalom több formában** — nem napi 5 üres poszt.

### 6. `/avatar-builder` — Avatár-építő

A 2. modul interjú-jegyzeteiből frissíti az avatár-portrédat. Bemenet: a jelenlegi portré + minimum 3 beszélgetés jegyzete. Kimenet: frissített 1 oldalas portré + copy-nyersanyag lista a legerősebb szó szerinti idézetekkel. Új landing vagy lead magnet előtt futtasd — friss avatárból erősebb a copy.

## Hogyan telepítsd a letöltött skill-eket

A letöltések listájában minden skill két lapos fájlként szerepel: `skill-neve.SKILL.md` + `skill-neve.reference.md` (a lista fájlonként működik, ezért nincsenek mappák). Telepítéskor te rendezed őket a `.claude/skills/` szerkezetbe:

1. **Töltsd le** a két fájlt — pl. `email-iro.SKILL.md` és `email-iro.reference.md`.
2. **Hozd létre a mappát** a projektgyökeredben: `mkdir -p .claude/skills/email-iro`
3. **Másold be és nevezd át** — a fájlnévből a skill-név előtag lekerül:
   - `email-iro.SKILL.md` → `.claude/skills/email-iro/SKILL.md`
   - `email-iro.reference.md` → `.claude/skills/email-iro/reference.md`
4. **Nyisd meg** Claude Code-ban a projektet (`cd /path/to/project && claude`), és teszteld: `/email-iro` + add meg a bemeneteket.
5. **Szabd testre** — szerkeszd a `SKILL.md`-t a saját stílusodra (név, célközönség, példák).
6. (Opcionális) **Commit-old** Git-be — így minden gépeden ugyanaz a skill-készlet vár.

Ugyanez a hat lépés mind a 6 skillre: `email-iro`, `landing-generator`, `lead-magnet-generator`, `crm-dashboard`, `content-pipeline`, `avatar-builder`.

## Saját skill 30 perc alatt — teljes walkthrough

Ha egy feladatot 3+ alkalommal csináltál ugyanúgy, érdemes skill-be foglalni. Itt egy teljes példa nulláról: az `ajanlat-iro` skill, ami a 3. modul ajánlat-szerkezetéből ír testreszabott ajánlat-emailt egy konkrét érdeklődőnek.

**1. lépés — mappa létrehozása (2 perc).** A projektgyökeredben:

```
mkdir -p .claude/skills/ajanlat-iro
```

**2. lépés — a SKILL.md megírása (15 perc).** Hozd létre a `.claude/skills/ajanlat-iro/SKILL.md` fájlt:

```markdown
---
name: ajanlat-iro
description: Ajánlat-emailt ír egy konkrét érdeklődőnek a 3
  csomag-szintemből, a konzultáción elhangzottak alapján. Akkor
  használd, amikor konzultáció után 24 órán belül ajánlatot küldesz.
---

# Ajánlat-író

## Bemenet
1. Az érdeklődő neve + mit mondott a konzultáción (jegyzeteid)
2. Melyik csomagot ajánlod és miért

## Lépések
1. A konzultációs jegyzetből kiemeli a kimondott problémát
2. Megírja az emailt: probléma visszaidézve az ő szavaival +
   a csomag tartalma + ár + következő lépés
3. Ellenőrzi: egy email, egy csomag, egy kérdés a végén

## Korlátok
- Nem talál ki árat — a 3. modul csomag-dokumentumából dolgozik
- Nem küld emailt, csak vázlatot ír
```

A `description` a legfontosabb mező: a Claude Code ebből dönti el, mikor aktiválja a skillt automatikusan. Ezért NE azt írd bele, hogy „ajánlatokat ír" — írd bele, MIKOR kell használni („konzultáció után 24 órán belül") és MIBŐL dolgozik („a 3 csomag-szintemből"). Minél konkrétabb a helyzet-leírás, annál pontosabban talál be.

**3. lépés — első teszt-futtatás (8 perc).** Nyisd meg a projektet Claude Code-ban, és futtasd egy VALÓDI esetre: `/ajanlat-iro`, majd illeszd be egy tényleges konzultáció jegyzetét. Ne teszt-adattal próbáld — éles bemeneten látszik, hol gyenge a prompt.

**4. lépés — finomítás (5 perc).** Nézd meg az outputot, és minden hibát szabályként írj vissza a `SKILL.md`-be. Túl hosszú az email? Írd be: „max 150 szó". Angol szavakat kevert? Írd be: „magyarul végig". Kitalált határidőt írt? Írd be a Korlátok alá: „határidőt csak tőlem kérdezve ír". A skill ettől lesz a tiéd: minden futtatás után egy-két sorral pontosabb.

Ennyi — körülbelül 30 perc, és a következő ajánlatnál már nem nulláról írsz. A Claude Code haladó bónusz-modul innen visz tovább: sablon-fájlok, több-lépéses skill-ek, skill-ek kombinálása.

## Fő pontok

- Egy skill = egy `.claude/skills/skill-name/` mappa, benne `SKILL.md` és `reference.md`. Ennyi.
- A skill-eket a `/skill-name` paranccsal aktiválod a Claude Code-ban.
- Mindegyik skill **magyarul** dolgozik végig, és illeszkedik a Business Start kurzus hangneméhez.
- A skill-ek **kombinálhatók**: pl. `/landing-generator` után `/email-iro` ugyanahhoz a kampányhoz.
- Te magad is csinálhatsz új skill-eket — ha egy feladatot 3+ szor csináltál ugyanúgy, érdemes skill-be foglalni.
- A Claude Code haladó bónusz-modul megmutatja a teljes skill-írási folyamatot.

## Források

Mind a 6 skill letölthető a modul letöltései közül, skillenként két fájl:

- `email-iro.SKILL.md` + `email-iro.reference.md`
- `landing-generator.SKILL.md` + `landing-generator.reference.md`
- `lead-magnet-generator.SKILL.md` + `lead-magnet-generator.reference.md`
- `crm-dashboard.SKILL.md` + `crm-dashboard.reference.md`
- `content-pipeline.SKILL.md` + `content-pipeline.reference.md`
- `avatar-builder.SKILL.md` + `avatar-builder.reference.md`
- [Claude Code skill dokumentáció](https://code.claude.com/docs/en/skills)
- [Learning Agents — 4 AI karakter oktatáshoz](https://learning-agents-landing.vercel.app)

## Heti feladat

Válassz egy skillt a 6-ból, ami a leggyakoribb manuális feladatod automatizálná, és 45 percben importáld, teszteld, szabd a saját stílusodra — egy valódi outputtal a héten.

- Válaszd ki: ha hetente írsz emailt, az `/email-iro`; ha új landinget építesz, a `/landing-generator`; ha tartalmat posztolsz, a `/content-pipeline`
- Töltsd le a két fájlt, rendezd a `.claude/skills/skill-neve/` mappába (lásd a telepítési lépéseket fent), és futtasd egy valós feladatra
- Szerkeszd a `SKILL.md`-t a saját hangodra (név, célközönség, példák) — és írd le 3 mondatban, mit változtatnál a következő futtatáskor

