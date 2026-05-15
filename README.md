# Expert Flow Start 2.0 — Landing page

> 21 modul (12 építő alapmodul + 4 referencia tár + 4 bónusz modul + intro + outro), 21 diasor. Magyar szolgáltató szakértőknek szóló építő program landing oldala — az [EV-AIOS](https://github.com/attilanagy23/EV-AIOS) repo-val mint élő AI Operációs Rendszer.

## Mi ez

Az `expert-flow-start-kurzus.netlify.app` 2.0 verziója. Az új pozicionálás: **építő program**, nem tájékoztató kurzus. 21 modul (12 építő alapmodul + 4 referencia tár + 4 bónusz modul + intro + outro), és minden modulhoz tartozik egy diasor — a 12 alapmodulhoz egy másolható Claude Code prompt, a 38 nemzetközi esettanulmány pedig elosztva jelenik meg modulonként.

## Stack

- [Astro](https://astro.build) v6 — statikus site, minimal templátum
- Tiszta CSS (nincs Tailwind) — design system a `src/styles/global.css`-ben
- Vercel deploy
- Playfair Display + system font stack

## Helyi futtatás

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # production build → dist/
npm run preview      # build kipróbálása
```

## Struktúra

```
src/
├── layouts/Layout.astro          # közös HTML váz (header, footer, OG meta)
├── pages/index.astro             # a landing oldal egyetlen route-ja
├── components/
│   ├── Module.astro              # 12 modul accordion-elem
│   └── PromptBlock.astro         # másolható prompt copy-gombbal
├── data/
│   ├── modules.json              # 12 modul tartalma + promptok + case ID-k
│   └── case-studies.json         # 37 nemzetközi landing-elemzés
└── styles/global.css             # design system (cream / ink / sage)
```

## Tartalom-adat módosítása

A modulok és esettanulmányok a `src/data/*.json` fájlokban élnek. A `caseStudyIds` mezővel kötjük az eseteket modulokhoz — egy eset több modulnál is megjelenhet.

Új prompt vagy modul felvételéhez csak a JSON-t kell szerkeszteni; a komponensek nem változnak.

## Deploy

A repo Vercelhez kötött (`vercel.json`). Push a `main`-re → automatikus deploy.

```bash
vercel --prod
```

### Build környezet

- Node: **22.x** (lásd `.nvmrc` és `package.json` `engines`)
- Install: `npm ci` (lockfile-alapú, reproducible — `vercel.json:installCommand`)

### Biztonsági headerek (`vercel.json`)

- **Clickjacking**: `X-Frame-Options: DENY` + CSP `frame-ancestors 'none'` — konzisztens, a site sehova nem ágyazható
- **CSP `'unsafe-inline'`**: az Astro inline kritikus CSS-t és script-et generál (Layout `<style>` és hydration). Ennek eltávolításához nonce-alapú CSP-re kellene áttérni, ami Astro static buildnél jelenleg nem out-of-the-box megoldható. Ez tudatos kompromisszum: a többi CSP-direktíva (`default-src 'self'`, `frame-ancestors 'none'`, `base-uri 'self'`, `form-action 'self'`) erős védelmet ad XSS és clickjacking ellen.

## Forrás

A modul-tartalmak az `~/Desktop/Expert Flow Start/01-...` → `12-...` mappákban élő `module.md` és `prompts.md` fájlokból kerültek ki. A 38 esettanulmány a `23-esettanulmanyok/module.md`-ből jön.

A live AI Operációs Rendszer: [github.com/attilanagy23/EV-AIOS](https://github.com/attilanagy23/EV-AIOS)

## Licenc

Forráskód: MIT. A kurzus-tartalom (modul-szövegek, promptok) © Expert Flow / Attila Nagy.
