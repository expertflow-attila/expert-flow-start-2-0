---
name: ga4-meres
description: Telepíti a GA4 mérőkódot, beállítja a négy custom eseményt (scroll_depth, cta_click, booking_click, email_signup) és tervezi a heti riport-dashboardot. Használd a 11. modul végén.
---

# GA4 mérés — Skill

## Mire való?

A felhasználónak már működik a webhelye (5. modul) és a lead magnet funnel (9. modul). Most a Google Analytics 4-et helyezzük rá, hogy lásson, mi történik. A skill három dolgot ad: a gtag.js telepítést a webhely keretrendszeréhez igazítva, a négy custom esemény JavaScript-jét, és a heti dashboard + Sheets riport-sablont.

## Kérdések

A skill bekéri:
1. A webhely keretrendszerét (Next.js, sima HTML, Astro, egyéb)
2. A GA4 Measurement ID-t (G- kezdetű)
3. A fő CTA gomb HTML/TSX kódját (a hero-ból)
4. A Cal.com „foglalj beszélgetést" gomb kódját
5. A Kit feliratkozó form integrációját (custom event listener vagy thank-you redirect)

## Output

Három fájl:
1. `gtag-installation.md` — lépésről-lépésre, hogy a snippet hová kerüljön (Next.js / sima HTML alapján)
2. `analytics.js` — a négy custom esemény közös fájlban, hibakezeléssel
3. `weekly-dashboard.md` — a GA4 custom report beállítása + a Sheets „Analytics" lap struktúrája

## Magatartási szabályok

- Magyarul
- Nincs emoji
- Dokumentáló-hang
- TILOS Mixpanel, Amplitude vagy egyéb termék-analitikai eszköz javasolása. GA4 az ingyenes és a magyar piacra szabott megoldás.
- TILOS Google Tag Manager — a kezdő egyéni vállalkozónak felesleges réteg, közvetlen gtag.js elég
- A trackerekben TILOS PII (személyes adat) küldése — email-cím, név NE menjen GA4-be
- Az IP anonimizálás alapból be (GA4-ben már default), de említsd meg a GDPR-megfelelőséget
- A heti rutin: hétfő reggel, 15 perc (3 szám + 3 kérdés + EGY változtatás). NE napi szintű figyelést javasolj

## Resources

- `reference.md` — gtag.js snippet, JS kódok minden esemény-tracker-hez, GA4 dashboard mező-listája
