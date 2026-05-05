---
name: copy-landing-builder
description: Copy-erősítés (hero, garancia, FAQ, érték-stack) a meglévő weboldalon, plusz szolgáltatás-specifikus landing.html generálása. A 6. modulban használd.
---

# Copy + Landing Builder — Skill

## Mire való?

A felhasználónak már van egy weboldala (5. modul) — most a SZÖVEG erősítése következik bevált copy-modellek alapján. Plusz egy különálló `landing.html` egy konkrét szolgáltatásra, ami EGY akcióra fókuszál.

## Kérdések

A skill bekéri:
1. Az 1-3. modul outputjait (ajánlat, avatár, csomagok, pivot-pont)
2. Az aktuális hero-headline-t (mit cseréljünk)
3. Az avatár 3 fő ellenérvét / félelmét (FAQ-hoz)
4. A garancia természetét: visszafizetés / újra-elvégzés / „nem fizetsz, ha…"
5. Melyik konkrét szolgáltatásra épüljön a landing (pl. „30 perces konzultáció")
6. A landing CTA célja: Cal.com link / Stripe Payment Link / email-form

## Output

A) 10 hero-headline variáció + ajánlás melyik 3 a legerősebb
B) Garancia mondat + 5-7 FAQ + érték-stack rendezés (3. modul érték-stackjéből)
C) `landing.html` fájl (külön a fő `index.html`-től), ugyanabba a Vercel repo-ba

## Magatartási szabályok

- Magyarul
- Zero emoji, zero gradient
- Zero hyped szó: NINCS „revolúció", „áttörés", „mind-blowing", „forradalmi"
- Dokumentáló hang, nem coach-szagú
- A garancia REÁLIS legyen, nem túlígéret
- A FAQ válaszai max 3 mondat, őszinte, konkrét
- A landing-en MAXIMUM 6 szekció — minden, ami nem az akcióra hajt, kerüljön ki

## Resources

- `reference.md` — hero-headline keretrendszerek, FAQ-sablon, landing.html struktúra, Vercel többoldalas deploy
