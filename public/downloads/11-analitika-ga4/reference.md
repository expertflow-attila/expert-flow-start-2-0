# 11. modul — Technikai referencia

## gtag.js snippet (hivatalos GA4)

A GA4 property létrehozása után a Data Streams → Web → Tagging instructions alatt kapsz egy snippetet. Így néz ki:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Ezt a `<head>` szekció tetejére tedd, MINDEN oldalon.

### Sima HTML-en

Minden `.html` fájl `<head>`-jébe:

```html
<head>
  <meta charset="UTF-8" />
  <title>...</title>

  <!-- GA4 — itt -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    if (window.location.hostname !== 'localhost') {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX', {
        anonymize_ip: true,
        send_page_view: true
      });
    }
  </script>
  <!-- /GA4 -->
</head>
```

### Next.js 16 (app router) — `app/layout.tsx`

```tsx
import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
```

A `.env.local`-ba:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

A Vercel-en a project Settings → Environment Variables-ben is állítsd be.

## A négy custom event — `analytics.js`

```javascript
// analytics.js — közös tracker fájl, egyszer betöltődik az oldalon
// Az oldal HTML-jébe: <script src="/analytics.js" defer></script>

(function() {
  'use strict';

  // Biztonsági ellenőrzés — ha nincs gtag, kilépünk
  function safeGtag() {
    if (typeof window.gtag === 'function') {
      window.gtag.apply(null, arguments);
    }
  }

  // -------------------------------------------------------
  // ESEMÉNY 1: scroll_depth (50%, 75%, 90%)
  // -------------------------------------------------------
  (function trackScrollDepth() {
    var thresholds = [50, 75, 90];
    var fired = {};

    function getScrollPercent() {
      var doc = document.documentElement;
      var body = document.body;
      var scrollTop = (doc.scrollTop || body.scrollTop);
      var scrollHeight = (doc.scrollHeight || body.scrollHeight) - doc.clientHeight;
      if (scrollHeight === 0) return 0;
      return Math.round((scrollTop / scrollHeight) * 100);
    }

    function onScroll() {
      var percent = getScrollPercent();
      thresholds.forEach(function(t) {
        if (percent >= t && !fired[t]) {
          fired[t] = true;
          safeGtag('event', 'scroll_depth', { percent: t });
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  })();

  // -------------------------------------------------------
  // ESEMÉNY 2: cta_click — minden [data-track="cta"] elemre
  // -------------------------------------------------------
  document.addEventListener('click', function(e) {
    var target = e.target.closest('[data-track="cta"]');
    if (!target) return;

    safeGtag('event', 'cta_click', {
      label: target.dataset.label || 'unknown',
      text: target.textContent.trim().substring(0, 50)
    });
  });

  // -------------------------------------------------------
  // ESEMÉNY 3: booking_click — Cal.com gombra
  // -------------------------------------------------------
  document.addEventListener('click', function(e) {
    var target = e.target.closest('[data-track="booking"]');
    if (!target) return;

    safeGtag('event', 'booking_click', {
      source: target.dataset.source || 'unknown'
    });
  });

  // -------------------------------------------------------
  // ESEMÉNY 4: email_signup — Kit form sikeres beküldés után
  // -------------------------------------------------------
  // Verzió A: a Kit egy custom event-et dispatch-el (ha van rá hookod)
  window.addEventListener('formkit_subscribed', function() {
    safeGtag('event', 'email_signup', { source: 'kit_form' });
  });

  // Verzió B: ha thank-you oldalra megy, akkor a thank-you HTML-be
  // egyszer hívd: safeGtag('event', 'email_signup', { source: 'thank_you' });

})();
```

### Hogyan jelöld a HTML-ben

```html
<!-- CTA gomb -->
<a href="#kapcsolat"
   class="btn btn-primary"
   data-track="cta"
   data-label="hero_primary">
  Kérek egy beszélgetést
</a>

<!-- Cal.com booking gomb -->
<a href="https://cal.com/sajat-nev/20perc"
   class="btn btn-primary"
   data-track="booking"
   data-source="hero">
  Foglalj 20 perces beszélgetést
</a>
```

A `data-track` attribútum az, ami a kattintást elkapja. Egy `analytics.js` fájl figyel az egész oldalon — nem kell minden gombra külön kód.

## GA4 dashboard — heti riport beállítás

### 1. Custom események regisztrálása

A GA4-ben a custom események automatikusan rögzülnek, de hogy a riportban mint „dimenzió" megjelenjenek, ezt is be kell állítani:

1. Admin (bal alsó fogaskerék) → Property settings
2. Events → „Create event" — itt nem kell külön létrehoznod, mert a `gtag('event', 'cta_click', {...})` automatikusan megjelenik
3. „Custom definitions" → „Create custom dimension"
   - Dimension name: `cta_label`
   - Scope: Event
   - Event parameter: `label`
4. Hasonlóan: `scroll_percent` (param: `percent`), `booking_source` (param: `source`)

### 2. Custom report

1. Reports → Library → „Create new report" → „Detail report"
2. Technique: „Free form"
3. Dimensions: Event name, Country
4. Metrics: Event count, Total users, Sessions
5. Filters: Event name = `cta_click | booking_click | email_signup | scroll_depth`
6. Save as: „Heti összefoglaló"
7. A „Reports" navigation-ben pin-eld be (három pont mellette)

### 3. Sheets „Analytics" lap

A 10. modul CRM Sheets-en belül egy új lap, „Analytics":

| het_szama | datum | latogatok | feliratkozasok | cta_kattintasok | booking_clicks | megjegyzes |
|-----------|-------|-----------|----------------|-----------------|----------------|------------|
| 17 | 2026-04-22 | 142 | 8 | 23 | 5 | Új CTA copy a hero-n |
| 18 | 2026-04-29 | 167 | 11 | 31 | 7 | — |

A heti rutin: hétfő 9:00, 15 perc. Megnyitod a GA4 „Heti összefoglaló" report-ját, last 7 days range, leírod a 4 számot, válaszolsz a 3 kérdésre (nőtt vagy csökkent? miért? mit változtatok EGYET?), és a változtatást a megjegyzés oszlopba írod.

## Tipikus hibák

- A GA4 az első 24 órában nem mutat adatot — ez normális, ne ess pánikba
- A custom esemény paramétereit (`label`, `source`, `percent`) nem regisztrálod „Custom dimension"-ként → az adat ott van, csak a riportban nem jelenik meg
- Adblockerek (uBlock Origin, Brave) blokkolják a GA4-et — a saját számaid alábecsültek lesznek 10-30%-kal. Ez normális, ne menj utána
- A thank-you oldalon a `email_signup` event kétszer fut, mert a Kit redirect-el ÉS a custom event is dispatch-elődik → válaszd egyik módszert, ne mindkettőt
- A `data-track` attribútumot egy ID-re tévesztetted („id" helyett „data-track"), és nem lőnek az események — a Tag Assistant Chrome extension percek alatt kimutatja
- A Cookie-tájékoztató (GDPR-konform) hiányzik a webhelyről — a magyar piacon kötelező, az NAIH iránymutatása alapján
