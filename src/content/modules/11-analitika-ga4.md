---
lastReviewed: "2026-06-09"
---

# 11. modul · Mérés (Google Analytics 4)

> Öt alap esemény, egy egyszerű dashboard. A mérés ott kezdődik, ahol forgalom van — előbb beszerezzük, aztán nézzük.

> **TL;DR** — Ebben a modulban beállítod a látogatottság-mérést, és megtanulsz heti pár perc alatt döntést hozni belőle. A mérés a döntéseidet segíti, nem önmagában cél.
> - Felteszed a Google Analytics 4 mérőkódját a webhelyedre.
> - Beállítasz 5 alap eseményt: oldalmegtekintés, görgetés-mélység, gombkattintás, időpontfoglalás, feliratkozás.
> - Megérted, milyen arányok számítanak jó kezdésnek (látogatóból feliratkozó, feliratkozóból foglalás) — és miért nem érdemes kis számokból következtetni.
> - Bevezetsz egy heti riport-rutint: minden hétfőn ránézel 3 számra, és eldöntöd, mit változtatsz a következő héten.

## Hol tartasz

A 9. modul után már működik a webhely, a lead magnet, az email lista, a 10. modulban rendet raktál a háttérben. A 11. modul azért van itt — nem előbb —, mert mérni csak akkor van mit, ha van forgalom. Most jön a LÁSD, mi történik réteg.

A GA4 (Google Analytics 4) a Google ingyenes látogatottság-mérője. Pontosan azokra a kérdésekre válaszol, amik egy kezdő vállalkozónak fontosak: hányan jönnek, mennyit maradnak, hová mennek tovább, ki kattint a CTA-ra (a cselekvésre hívó gombra).

Mérés nélkül érzésből döntesz: átírod a főcímet, lecseréled a gombot — és sosem tudod meg, használt-e. Heti 15 percért cserébe ezt a vakrepülést szünteted meg.

## Mit építesz meg ezen a héten

Egy működő mérőrendszer: GA4 a webhelyen, 5 esemény, egy 3 mutatós dashboard — és egy heti 15 perces riport-rutin, amit minden hétfőn lefuttatsz.

## 01. gtag.js telepítés a webhelyre

**Setup**:
1. `analytics.google.com` regisztráció (Google Workspace-fiókkal)
2. Új property a domainedhez — a property a webhelyed saját mérő-fiókja a GA4-en belül
3. Mérőkód (a gtag.js snippet — egy ~8 soros JavaScript-darab) a webhely `<head>`-jébe; Claude Code 30 mp-ben odateszi az `index.html` (és ha van külön szolgáltatás-landinged, a `landing.html`) fejlécébe
4. 24 óra várakozás, hogy az adatok megjelenjenek

Onnan a GA4 automatikusan rögzíti: oldal-megjelenítések, az oldalon töltött idő, eszközök, földrajzi hely.

**Próbáld ki most:** regisztrálj az `analytics.google.com`-on, és hozd létre a property-t — a mérőkód-beillesztés mehet a heti feladatban.

## 02. Öt alap esemény

Az alapon túl „custom event"-ek jönnek — saját események, ahol te döntöd el, milyen konkrét akciót számoljon a GA4:

1. **page_view** — alapból megy
2. **scroll_depth** — milyen mélyen görgetnek (50%, 75%, 90%)
3. **cta_click** — fő CTA-gombok
4. **booking_click** — Cal.com gomb
5. **email_signup** — MailerLite feliratkozás után (vagy Kit, ha azt választottad a 9. modulban)

A scroll-sávok nem véletlenek: az 50% azt jelzi, hogy a látogató elolvasta a probléma-szekciót, a 90% azt, hogy látta a CTA-t. A 3-5-höz HTML-be kis JS kell (Claude Code megírja). Egy hét adat után látod, melyik gomb működik.

Bence, a fotós két helyre tette ki ugyanazt a „Kérek árajánlatot" gombot. A cta_click egy hét után megmutatta: a galéria alatti hozza a kattintások kétharmadát — a fejlécben lévő alig kell. Ilyen döntést érzésből nem tudsz meghozni.

## 03. Benchmark-sávok — mihez mérd magad

A konverzió a látogatóknak az a hányada, aki megteszi, amit kérsz — feliratkozik, foglal. Két arányt érdemes figyelni, tájékozódó sávval:

- **Látogató → feliratkozó**: 2-5% jó kezdés egy lead magnet landing-en. Kata landingjére egy héten 80-an jönnek, 3-an iratkoznak fel — ez 3,75%, a sávon belül van.
- **Feliratkozó → hívás-foglalás**: 1-3% reális induláskor.

**Ezek tájékozódó sávok, nem ígéret.** Kis forgalomnál — heti pár tucat látogató alatt — a százalék vadul ingadozik: 3 látogatóból 1 feliratkozó nem 33%-os konverzió, hanem zaj. Egy hét adatából ne vonj le következtetést, négy hét trendjéből igen. A sáv alatti szám sem ítélet — diagnózis-irány: a 06. modul copy-jához vagy a 09. modul lead magnetjéhez küld vissza.

## 04. Dashboard és a heti 15 perces riport-rutin

A GA4 bonyolultnak tűnik — sok adat, sok grafikon. Neked egy egyszerű dashboard kell (egyetlen áttekintő nézet, ahol a számaid egy helyen látszanak) a „Reports" szekcióban, **3 mutatóval**:

- Heti látogatók
- Lead magnet feliratkozások
- CTA-kattintások

A heti rutin forgatókönyve, hétfő reggel, 15 perc:

1. **Nézd meg a 3 számot** a dashboardon (látogatók, feliratkozók, CTA-kattintások).
2. **Írd be őket** a CRM-munkafüzeted „Analytics" lapjára (a 10. modul Sheets-fájlja mellé), dátummal.
3. **Tedd fel a három kérdést**: Nőtt vagy csökkent? Miért — mit csináltam múlt héten, ami magyarázza? Mit változtatok **EGYET** a jövő héten?

Az „egyet" a kulcs: ha egyszerre három dolgot változtatsz, sosem tudod meg, melyik működött. Nem napi figyelés — heti egyszer ránézel, ez alapján döntesz: mit változtass a webhelyen, copy-n, lead magneten. A mérés a döntéseket segíti, nem önmagában cél.

**Próbáld ki most:** írd be a naptáradba ismétlődő eseményként: hétfő reggel, 15 perc, „riport-rutin". A rutin fele az, hogy van ideje.

## Én így csináltam

> *Build-in-public: ide a saját, valós számaim kerülnek — ezt a részt élesben, folyamatosan töltöm fel.*

## Heti feladat

Telepítsd a GA4 mérőkódot a webhelyre, állítsd be a négy custom eseményt (a page_view automatikus, ezért marad négy), hozz létre egy riport-dashboardot a fenti három mutatóval, és futtasd le először a 15 perces rutint — akkor is, ha a számok még kicsik.

**Akkor vagy kész, ha** a GA4 Realtime nézetében (az élő nézet, ami az éppen ott lévő látogatókat mutatja) látod a saját látogatásodat, és az „Analytics" lapodon ott az első kitöltött sor a három számmal és a jövő heti EGY változtatással.

A hét végére tudsz arra a kérdésre válaszolni, hogy „mi történik a webhelyemen" — adatokkal, nem érzéssel. Innen kezdve minden változtatást ezekre a mutatókra építesz.

## Ha elakadtál

- **„Nem jelennek meg az adatok."** Várj 24 órát a telepítés után. Utána: Realtime nézet + saját látogatás; ha ott sincs semmi, a mérőkód rossz helyen van, vagy adblocker (reklámblokkoló böngésző-bővítmény) szűri — nézd inkognitó ablakból.
- **„Minden számom nulla vagy egy számjegyű."** Ez induláskor normális — a forgalom a 8-9. modul munkájából jön, nem a mérésből. A rutint attól még futtasd le hetente: a tábla üres sorai is azt mutatják, hogy a szűk keresztmetszet a forgalom.
- **„A számaim a sáv alatt vannak."** Először ellenőrizd a mintát: négy hét és legalább pár száz látogató kell egy értelmes százalékhoz. Ha tartósan alacsony, a látogató→feliratkozó ág a 06. és 09. modulhoz, a feliratkozó→hívás ág a 07. modulhoz küld vissza.
- **„Elveszek a GA4 felületén."** Nem kell a teljes felület — csak a 3 mutatód és a Realtime nézet. Minden mást nyugodtan hagyj figyelmen kívül az első hónapokban.

## Letölthetők

- `prompts.md` — promptok a gtag-telepítéshez és a custom eseményekhez Claude Code-dal
- `reference.md` — gtag.js snippet + az 5 esemény kész JS-kódja bemásolásra
- `SKILL.md` — Claude Code skill a modulhoz
