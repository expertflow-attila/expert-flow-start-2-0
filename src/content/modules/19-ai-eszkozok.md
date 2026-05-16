---
lastReviewed: "2026-05-16"
---

# 6. modul — AI eszközök / Skill-ek

## Modul áttekintés

A 6. modul 6 darab Claude Code skill-t tartalmaz, amelyeket a saját projekt-mappádba telepíthetsz. Mindegyik skill egy konkrét vállalkozási feladatot automatizál — email-írást, landing page generálást, lead magnet PDF-készítést, CRM dashboard generálást, content-pipeline-t, és avatár-építést. Mindegyik skill-hez letölthető `SKILL.md` és `reference.md` fájlok, telepítési útmutatóval. Ez a referencia-tár utolsó eleme — bármikor visszanyúlhatsz hozzá, amikor egy konkrét feladatra hatékonyabb eszköz kell.

## Videó

[VIDEO PLACEHOLDER]

## Fejezetek

- 0:00 — Bevezető: skill-ek mint újra-felhasználható kódrészletek
- 1:00 — A `.claude/skills/` mappa szerkezete
- 2:00 — 6.1 Email-író skill
- 3:00 — 6.2 Landing page generátor skill
- 4:00 — 6.3 Lead magnet generátor skill
- 5:00 — 6.4 CRM dashboard generátor skill
- 6:00 — 6.5 Content pipeline skill
- 7:00 — 6.6 Avatár-építő skill
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

- A `SKILL.md` **kötelező** — egy frontmatter (`name`, `description`, `triggers`) + a fő prompt-leírás.
- A `reference.md` opcionális — részletes példák, hogy a modell a saját kontextusába tudja húzni a stílust.
- A skill **automatikusan** aktiválódik, ha a prompted illeszkedik a `description`-höz, vagy expliciten `/skill-name` paranccsal hívható.

## A top 5 skill röviden

### 6.1 `/email-iro` — Email-író skill

Magyar nyelvű értékesítési és ügyfél-kommunikációs email-sablonok generálása. Bemenet: ki vagy + kinek írsz + milyen célhoz (welcome, follow-up, ajánlat, visszajelzés-kérés). Kimenet: tárgy + 3 verzió (rövid, közepes, hosszú). Dokumentáló-hang, magyar Á-N. **Heti 2-3 órát spórol meg**, ha rendszeresen írsz emailt új érdeklődőknek.

### 6.2 `/landing-generator` — Landing page generátor

Tailwind boilerplate + Hormozi-copy egy promptból. Bemenet: szolgáltatás neve, USP, célközönség, ár. Kimenet: teljes `index.html` (Tailwind CDN), hero + 3 pillér + érték-stack + CTA. **Alternatíva:** ha már van weboldalad Astro-ban (5. modul), generálj komponenseket helyette.

### 6.3 `/lead-magnet-generator` — Lead magnet PDF

Markdown → PDF pipeline `pandoc`-kal. Bemenet: téma + 5-7 fejezet vázlata + célközönség. Kimenet: 8-15 oldalas PDF, fedlap + tartalomjegyzék + szakaszok + záró CTA. **Egy hetes munka 2 órára** csökken — érdemes 3-5 lead magnetet ezzel készíteni, és A/B tesztelni.

### 6.4 `/crm-dashboard` — CRM dashboard generátor

Google Sheets formula-tervező. Bemenet: hány státuszt szeretnél, milyen mezőkkel. Kimenet: kész Sheets fájl + Apps Script kód (automatikus follow-up reminder, lead-státusz változások loggolása). A 10. modulban manuálisan építjük; ez az automatizált verzió.

### 6.5 `/content-pipeline` — Tartalmi pipeline

Egy videóból 3 platformra (YouTube leírás + Instagram poszt + LinkedIn poszt). Bemenet: videó-szöveg vagy transkript. Kimenet: 3 platform-specifikus tartalom, mindegyik a megfelelő hosszúsággal és tónussal. **Kritikus, ha hetente posztolsz** — ezzel egyetlen videóból 4-5 db tartalmat csinálsz.

## Hogyan importálj egy meglévő skillt saját projektre

1. **Másold** a teljes `.claude/skills/skill-name/` mappát a saját projektgyökeredbe.
2. **Nyisd meg** Claude Code-ban a projektet (`cd /path/to/project && claude`).
3. **Teszteld** a skillt: gépeld be `/skill-name` és add meg a paramétereket.
4. **Szabd testre** — szerkeszd a `SKILL.md` promptot a saját stílusodra (név, célközönség, példák).
5. (Opcionális) **Commit-old** Git-be — így csapattagok is használhatják.

## Fő pontok

- Egy skill = egy `.claude/skills/skill-name/` mappa, benne `SKILL.md` és `reference.md`. Ennyi.
- A skill-eket a `/skill-name` paranccsal aktiválod a Claude Code-ban.
- Mindegyik skill **magyarul** dolgozik végig, és illeszkedik a Business Start kurzus hangneméhez.
- A skill-ek **kombinálhatók**: pl. `/landing-generator` után `/email-iro` ugyanahhoz a kampányhoz.
- Te magad is csinálhatsz új skill-eket — ha egy feladatot 3+ szor csináltál ugyanúgy, érdemes skill-be foglalni.
- A 21. modul (Claude Code haladó) megmutatja a teljes skill-írási folyamatot.

## Források

- 📁 6-1-email-iro/
- 📁 6-2-landing-generator/
- 📁 6-3-lead-magnet-generator/
- 📁 6-4-crm-dashboard/
- 📁 6-5-content-pipeline/
- 📁 6-6-avatar-builder/
- 🔗 [Claude Code skill dokumentáció](https://docs.claude.com/claude-code/skills)
- 🔗 [Learning Agents — 4 AI karakter oktatáshoz](https://learning-agents-landing.vercel.app)
