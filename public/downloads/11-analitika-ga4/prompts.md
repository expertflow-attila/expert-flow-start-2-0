# 11. modul — Promptok

> Használat: a szögletes zárójeles részeket írd át a saját adataidra, majd másold be a teljes promptot Claude Code-ba (vagy bármelyik AI-asszisztensbe).

## 11.1 — Prompt a 01. leckéhez (gtag.js telepítés a webhelyre)

A GA4 mérőkódot a webhelyed head szekciójába illesztjük. A prompt segít a Claude Code-nak, hogy a meglévő HTML-t ne törje el.

```
A GA4 property-mhez kaptam egy Measurement ID-t: [G-XXXXXXXXXX].

A webhelyem (Vercel-en hostolt, Next.js / sima HTML / [megfelelő keret]):
[a projekt struktúra rövid leírása — pl. „Next.js 16 app router, layout.tsx-ben
van a head" vagy „sima index.html és landing.html, mindkettőben külön head"]

Kérlek:
1. Illeszd be a GA4 gtag.js snippetet a webhely MINDEN oldalának <head> szekciójába.
2. Ha Next.js: a layout.tsx-be tedd, a Script komponensbe (next/script-szel),
   strategy="afterInteractive".
3. Ha sima HTML: minden .html fájl <head>-jébe egyszer.
4. NE legyen duplikált — egy oldalon egy snippet.
5. NE töltődjön be a fejlesztői (localhost) környezetben — csak production-ön.
   Erre a Next.js NEXT_PUBLIC_GA_ID env-et használj, vagy HTML-nél
   tedd egy if (window.location.hostname !== 'localhost') feltétel mögé.

A Measurement ID-t env változóból olvasd, ne hardkódold.
```

## 11.2 — Prompt a 02. leckéhez (Öt alap esemény)

A négy custom eseményhez (scroll_depth, cta_click, booking_click, email_signup) a JavaScript trackinghez szükséges kódot generáljuk.

```
A webhelyemen GA4 telepítve (Measurement ID: [G-XXXXXXXXXX]).
Most négy custom eseményt akarok beállítani.

A jelenlegi HTML / TSX részlet, amit használok:
[1] CTA gomb a hero-ban: [HTML/TSX a gombra]
[2] „Foglalj 20 perces beszélgetést" Cal.com gomb: [HTML/TSX]
[3] Kit feliratkozó form: [HTML/TSX a form-ra]

Adj nekem 4 JavaScript kódot, amit a webhelyhez illesztek:

ESEMÉNY 1 — scroll_depth
Egy IIFE, ami figyeli a scroll-t, és ha az oldal 50%, 75% vagy 90%-áig
ér a felhasználó, küld egy gtag('event', 'scroll_depth', {percent: 50/75/90}) eseményt.
Ne küldjön duplán ugyanahhoz a felhasználóhoz egy oldal-betöltésen belül.

ESEMÉNY 2 — cta_click
Az [1] gombra rákerül egy onClick / addEventListener, ami küld egy
gtag('event', 'cta_click', {label: 'hero_primary', text: a gomb szövege}) eseményt.

ESEMÉNY 3 — booking_click
A [2] Cal.com gombra ugyanúgy. Az event neve booking_click,
paraméter: {source: 'header' / 'footer' / 'inline' attól függően,
hol van a gomb}.

ESEMÉNY 4 — email_signup
A Kit form successful submission után. A Kit egy custom event-et
dispatch-el az ablakra (`window.dispatchEvent(new Event('formkit_subscribed'))`),
vagy a Kit „thank you" oldalra redirect-el. Adj két verziót:
(a) listener a custom event-re,
(b) thank-you oldalra page_view + event a betöltéskor.

Mindegyik kódhoz:
- Magyar kommentet
- Hibakezelést (typeof gtag === 'function' check)
- Tedd egy közös analytics.js fájlba, amit egyszer betöltünk
```

## 11.3 — Prompt a 03. leckéhez (Dashboard és heti riport)

A GA4 Reports szekciójában egy egyszerű dashboardot építünk, és a heti riport-mintát generáljuk.

```
A GA4-ben be akarom állítani egy egyszerű heti dashboardot, és egy
Sheets-szel követem a trendet.

A dashboard 3 mutatója:
1. Heti látogatók (egyedi felhasználók) — Users metric, Date range: last 7 days
2. Lead magnet feliratkozások — email_signup event count, last 7 days
3. CTA-kattintások — cta_click event count, last 7 days

Adj nekem:
1. A GA4 „Library" → „Custom report" lépésről-lépésre, hogy ezt a 3 mutatót
   egy „Heti összefoglaló" nevű custom report-ban lássam.
2. A „Reports snapshot" testreszabását — milyen card-okat tegyek a felső sávra.
3. A custom dimensions / events beállítását (cta_click és email_signup-ot
   regisztrálni kell mint „Custom event" a Configure → Events alatt,
   hogy a riportban szerepeljenek).

Plusz: készíts egy Google Sheets sablont „Analytics" néven
(a 10. modul CRM Sheets-en belül egy új lap), oszlopokkal:
het_szama, datum, latogatok, feliratkozasok, cta_kattintasok,
booking_clicks, megjegyzes (mit változtattam).

A heti rutin: hétfő 9:00, 15 perc. Megnyitom a GA4 dashboardot,
átírom a 3-4 számot a Sheets-be, felteszem a 3 kérdést
(nőtt vagy csökkent? miért? mit változtatok EGYET?), és a
változtatást a megjegyzés oszlopba írom.
Ne jegyezzek minden napot — csak hetente egyszer.
```
