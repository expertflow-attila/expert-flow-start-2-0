---
lastReviewed: "2026-05-16"
---

# 11. modul · Mérés (Google Analytics 4)

> Öt alap esemény, egy egyszerű dashboard. A mérés ott kezdődik, ahol forgalom van — előbb beszerezzük, aztán nézzük.

> **TL;DR** — GA4 telepítés + 5 alap esemény + heti 3-mutatós dashboard. Mérés a döntéseket informálja, nem önmagában cél.
> - **gtag.js** snippet (8 sor JS) a webhely `<head>`-jébe (Claude Code 30 mp)
> - **5 esemény**: page_view (auto), scroll_depth, cta_click, booking_click, email_signup
> - **Heti riport**: hétfő reggel 5 perc, 3 mutató Sheets-be — látogatók, feliratkozók, CTA-kattintások

## A hét témája

A 11. modul azért van itt — nem előbb —, mert mérni csak akkor van mit, ha van forgalom. A 9. modul után már működik a webhely, a lead magnet, az email lista. Most jön a LÁSD, mi történik réteg.

GA4 ingyenes, és pontosan azokra a kérdésekre válaszol, amik egy kezdő vállalkozónak fontosak: hányan jönnek, mennyit maradnak, hová mennek tovább, ki kattint a CTA-ra.

## 01. gtag.js telepítés a webhelyre

**Setup**:
1. `analytics.google.com` regisztráció (Google Workspace-fiókkal)
2. Új property a domainedhez
3. Mérőkód (gtag.js snippet, ~8 sor JS) a webhely `<head>`-jébe — Claude Code 30 mp-ben odateszi az `index.html` és `landing.html` head-jébe
4. 24 óra várakozás, hogy az adatok megjelenjenek

Onnan a GA4 automatikusan rögzíti: oldal-megjelenítések, munkamenet-időtartam, eszközök, lokáció.

## 02. Öt alap esemény

Az alapon túl „custom event"-ek — konkrét akciók:

1. **page_view** — alapból megy
2. **scroll_depth** — milyen mélyen görgetnek (50%, 75%, 90%)
3. **cta_click** — fő CTA-gombok
4. **booking_click** — Cal.com gomb
5. **email_signup** — Kit feliratkozás után

A 3-5-höz HTML-be kis JS (Claude Code megírja). Egy hét adat után látod, melyik gomb működik.

## 03. Dashboard és heti riport

A GA4 bonyolultnak tűnik — sok adat, sok grafikon. Egy egyszerű custom dashboard a „Reports" szekcióban, **3 mutatóval**:

- Heti látogatók
- Lead magnet feliratkozások
- CTA-kattintások

**Heti rutin**: hétfő reggel 5 perc, számok egy Sheets-be (10. modul CRM mellé „Analytics" lap), trend követése. Nem napi figyelés — heti egyszer ránézel, ez alapján döntesz: mit változtass a webhelyen, copy-n, lead magneten.

A mérés a döntéseket informálja, nem önmagában cél.

## Heti feladat

Telepítsd a GA4 mérőkódot a webhelyre, állítsd be a négy custom eseményt, és hozz létre egy heti riport-dashboardot a fenti három mutatóval.

## Eredmény

A hét végére tudsz arra a kérdésre válaszolni, hogy „mi történik a webhelyemen" — adatokkal, nem érzéssel. Innen kezdve minden változtatást ezekre a mutatókra építesz.
