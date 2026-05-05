---
---

# 11. modul · Mérés (Google Analytics 4)

> Öt alap esemény, egy egyszerű dashboard. A mérés ott kezdődik, ahol forgalom van — előbb beszerezzük, aztán nézzük.

## A hét témája

Amit megtanultam: a 11. modul azért van itt — és nem előbb —, mert mérni csak akkor van mit, ha van forgalom. A 9. modul után már működik a webhely, a lead magnet, az email lista; most jön az a réteg, hogy LÁSD, mi történik. A Google Analytics 4 (GA4) ingyenes, és pontosan azokat a kérdéseket tudja megválaszolni, amik egy kezdő vállalkozónak fontosak: hányan jönnek, mennyit maradnak, hová mennek tovább, ki kattint a CTA-ra. Ezen a héten elhelyezzük a mérőkódot, beállítunk öt mérendő eseményt (egy alapból megy, négy custom), és összerakunk egy heti riport-dashboardot.

## 01. gtag.js telepítés a webhelyre

A GA4 setup egyszerű: regisztrálsz a `analytics.google.com`-on (a Google Workspace-fiókoddal), létrehozol egy új property-t a domainedhez, és kapsz egy „mérőkódot" (gtag.js snippet, kb. 8 sor JavaScript). Ezt a snippet-et a webhelyed `<head>` szekciójába illeszted be — a Claude Code 30 másodperc alatt megcsinálja, ha odaadod neki a snippet-et és megkéred, hogy „tedd ezt a `index.html` és `landing.html` head-jébe". A telepítés után 24 órát várj, hogy az adatok megjelenjenek a GA4 dashboardon. Innen tovább a GA4 automatikusan rögzíti az alap-adatokat: oldal-megjelenítések, munkamenet-időtartam, eszközök, lokáció.

## 02. Öt alap esemény

Az alap-méréseken túl be lehet állítani „custom event"-eket — ezek azok a konkrét akciók, amiket a webhelyen mérni akarsz. Az öt fontos: (1) **page_view** (alapból megy, nem kell beállítani), (2) **scroll_depth** — milyen mélyen görgetnek le az oldalon (50%, 75%, 90%), (3) **cta_click** — a fő CTA gombokra kattintás, (4) **booking_click** — a Cal.com gombra kattintás, (5) **email_signup** — a Kit feliratkozás után. Az utóbbi háromhoz a HTML-be kell egy kis JavaScript-et illeszteni (a Claude Code megírja), ami a kattintáskor küld egy eseményt a GA4-nek. Egy hét adat után már látod, melyik gomb működik, melyiken haladnak el.

## 03. Dashboard és heti riport

Azt vettem észre, hogy a GA4 alapból bonyolultnak tűnik — sok adat, sok grafikon, és nem világos, mit kell nézni. Nálam ez jött be: érdemes egy egyszerű custom dashboardot építeni a „Reports" szekcióban: egy oldal, három mutatóval — heti látogatók száma, lead magnet feliratkozások száma, CTA-kattintások száma. Ezt a dashboardot heti egyszer (pl. minden hétfő reggel) megnyitod 5 percre, leírod a számokat egy Sheets-be (a 10. modul CRM-je mellé egy „Analytics" lap), és nyomon követed a trendet. Nem napi szintű figyelés — heti egyszer ránézel, és az alapján döntesz, mit változtass a webhelyen, a copy-n, vagy a lead magnet-en. Egy idő után rájöttem, hogy a mérés nem önmagában cél — a döntéseket informálja.

## Heti feladat

Telepítsd a GA4 mérőkódot a webhelyre, állítsd be a négy custom eseményt, és hozz létre egy heti riport-dashboardot a fenti három mutatóval.

## Eredmény

A hét végére tudsz arra a kérdésre válaszolni, hogy „mi történik a webhelyemen" — adatokkal, nem érzéssel. Innen kezdve minden változtatást ezekre a mutatókra építesz.
