---
---

# 10. modul · CRM és belső rendezés

> Google Sheets a CRM, Gmail label-struktúra a kommunikációra, Drive struktúra a dokumentumokra — egyetlen logikai egység, ami nélkül a 8. modul ügyfél-szerzése káoszba fullad.

## A hét témája

A IV. fázis a háttér-rész — az első három fázisban (1-9. modul) elöl álltál és cselekedtél, most a hátadat fedezed. Amit megtanultam: a CRM nem egy „extra eszköz" — egyszerűen az a hely, ahol nyilvántartod, kivel mikor beszéltél, mit ígértél, mit várnak tőled. Azt vettem észre, hogy sokan ezt a fejükben tartják, és pár hét után elveszítik a fonalat. Ezen a héten egy nagyon egyszerű Google Sheets-alapú rendszert rakunk fel, plusz a Gmail-t és a Drive-ot rendezzük úgy, hogy minden adat a helyén legyen.

## 01. Google Sheets CRM — négy munkalap

Nálam ez jött be: a CRM-hez nem kell drága szoftver — egy Google Sheets dokumentum tökéletes. Hozz létre egy fájlt: „CRM — [év]", és benne négy munkalapot: (1) **Prospects** — a 8. modul ismerős-listája plusz minden új lehetséges ügyfél (oszlopok: név, email, miért érdekes, utolsó kapcsolat dátuma, státusz), (2) **Consultations** — a Cal.com-on lefoglalt beszélgetések (név, dátum, mit kérdezett, mi az ajánlat, mi lett a kimenet), (3) **Proposals** — a kiküldött ajánlatok (kinek, mikor, milyen csomag, milyen ár, status: pending/won/lost), (4) **Clients** — a fizető ügyfelek (név, csomag, kezdés dátuma, fizetés státusza, megjegyzések). Mindegyik munkalap egyetlen ránézésre megmutatja, mi a helyzet — nem kell több külön rendszer.

## 02. Apps Script automatizáció

A Google Sheets erőssége a beépített Apps Script (JavaScript-szerű kódolás), amivel az alap-műveleteket automatizálhatod. Egy egyszerű automatizáció: ha a Cal.com-on új konzultáció foglalódik (webhook küld egy üzenetet), automatikusan új sor jön létre a „Consultations" lapon. Egy másik: ha a „Proposals" lapon átállítasz egy státuszt „won"-ra, automatikusan átkerül a sor a „Clients" lapra. Nem kell programozónak lenned ehhez — a Claude Code-dal a script-ek 10-15 perc alatt megírhatók, és onnan magától dolgoznak. A `reference.md`-ben benne lesznek a kész Apps Script-ek, amiket csak bemásolsz a Sheets script-szerkesztőjébe.

## 03. Gmail label-struktúra és Drive rendszerezés

A Gmail-ben hozz létre 4-5 alap-label-t: `01-Prospects`, `02-Consultations`, `03-Proposals`, `04-Clients`, `05-Operations`. Minden bejövő email automatikusan vagy manuálisan a megfelelő label-be kerül — ez 30 másodperc, amikor megérkezik egy email, és cserébe egy hónap múlva pontosan vissza tudod keresni a beszélgetést. A Drive-on szintén egyszerű mappa-szerkezet: `01-Prospects/`, `02-Consultations/`, `03-Proposals/[ügyfél-név]/`, `04-Clients/[ügyfél-név]/`. Az ügyfél-mappákban tartod a szerződéseket, a számlákat, a delivery-fájlokat, és a `notes.md` fájlt, ahol jegyzeteled, mi történt. Egy idő után rájöttem, hogy ezek a struktúrák nem kreatív megoldások — egyszerű ismétlődő minták, amik nélkül három hónap után már nem találsz semmit.

## Heti feladat

Hozd létre a Google Sheets CRM-et a négy munkalappal, állítsd be a Gmail label-eket, és hozd létre a Drive mappa-szerkezetet a fenti minta szerint.

## Eredmény

A hét végére van egy működő nyilvántartó rendszered — minden ügyféllel kapcsolatos információ pontosan ott van, ahol kell, és innen tovább nem fogsz elveszteni egyetlen lehetőséget sem.
