---
lastReviewed: "2026-06-09"
---

# 10. modul · CRM és belső rendezés

> Google Sheets a CRM, Gmail label-struktúra a kommunikációra, Drive struktúra a dokumentumokra — egyetlen logikai egység, ami nélkül a 8. modul ügyfél-szerzése káoszba fullad.

> **TL;DR** — Google Sheets CRM (4 munkalap) + Gmail labelek + Drive mappa-struktúra — egy logikai egység.
> - **Minimál-verzió**: az első 10 ügyfél-jelöltig elég a 8. modul tracking-táblája — ne építs CRM-katedrálist 3 névre
> - **Sheets CRM**: Prospects, Consultations, Proposals, Clients — egy ránézésre minden státusz; másolható sablonból indulsz
> - **Apps Script** (opcionális): Cal.com webhookból új sor, „won" státusz után a sor átkerül a Clients-be (Claude Code generálja)
> - **Gmail labelek**: `01-Prospects` … `05-Operations`, Drive mappák ugyanezzel a számozással + `[ügyfél-név]/`

## Hol tartasz

A 8. modulban kiküldted az első megkereséseket, a 9.-ben elindult a lead magnet és az email lista. A IV. fázis a háttér-rész — az 1-9. modulban elöl álltál és cselekedtél, most a hátadat fedezed. A CRM nem „extra eszköz" — az a hely, ahol nyilvántartod, kivel mikor beszéltél, mit ígértél, mit várnak tőled. Sokan ezt a fejükben tartják, és pár hét után elveszítik a fonalat.

## Mit építesz meg ezen a héten

Egy egyszerű Google Sheets-alapú nyilvántartó rendszer + Gmail és Drive rendezés — a saját méretedre szabva. Ha kevés a neved, csak rendben tartod, amid van. Ha már zsúfolt, felépíted a 4 munkalapos rendszert.

## 01. A minimál-verzió — mikor elég egy munkalap

Az első 10 ügyfél-jelöltig **egy munkalap elég**: a 8. modul tracking-táblája ([8. modul](/modules/08-elso-ugyfelek)). Név, csatorna, üzenet dátuma, válasz, következő lépés — ennyi. Ne építs CRM-katedrálist 3 névre.

A 4 munkalapos rendszer akkor kell, amikor a tábla zsúfolt lesz. A jelek: 10-nél több név, párhuzamosan futó beszélgetések, kiküldött ajánlat, az első fizető ügyfél. Akkor a tracking-táblád lényegében a Prospects-lap lesz — a többi három e köré épül.

A heti feladatod is e szerint ágazik el: a minimál-ágat a feladatnál külön kiírom.

## 02. Google Sheets CRM — négy munkalap

Nem kell drága szoftver — egy Sheets dokumentum tökéletes. „CRM — [év]" fájl, 4 munkalap:

1. **Prospects** — 8. modul ismerős-listája + új lehetséges ügyfél. Oszlopok: név, email, miért érdekes, utolsó kapcsolat dátuma, státusz.
2. **Consultations** — Cal.com foglalások. Név, dátum, mit kérdezett, mi az ajánlat, mi lett a kimenet.
3. **Proposals** — kiküldött ajánlatok. Kinek, mikor, milyen csomag, ár, status (pending/won/lost).
4. **Clients** — fizető ügyfelek. Név, csomag, kezdés dátuma, fizetés státusza, megjegyzések.

Egy ránézésre minden státusz látszik — nem kell több külön rendszer.

Nem kell kézzel felépítened — másold le a kész sablont, és írd át a saját szakmádra:

> **[ATTILA TÖLTI KI: a másolható Google Sheets sablon linkje — Fájl → Másolat készítése]**

Az oszlop-fejlécek listája a `reference.md`-ben is megvan, ha mégis nulláról építenéd.

## 03. Apps Script automatizáció — opcionális

**Ez a szakasz opcionális.** A CRM enélkül is teljes értékű — kézzel frissíteni napi 2 perc. Csak akkor nyúlj hozzá, ha a kézi munka már ténylegesen zavar.

Sheets erőssége: beépített Apps Script (JavaScript-szerű), amivel automatizálsz.

**Példák**:
- Cal.com új foglalás (webhook) után új sor a „Consultations" lapon
- „Proposals" státusz „won"-ra váltása után a sor átkerül a „Clients" lapra

Nem kell programozó lenni — Claude Code-dal 10-15 perc/script. Kész script-ek a `reference.md`-ben, csak bemásolod a Sheets script-szerkesztőjébe.

**Ha elrontottad**: a Google Sheets minden változtatást ment. Fájl → Verzióelőzmények → Verzióelőzmények megtekintése — itt visszaállítod a script futtatása előtti állapotot egy kattintással. Az adataid tehát nem vesznek el. Legrosszabb esetben töröld a scriptet a szerkesztőből, és a tábla kézi módban működik tovább.

## 04. Gmail label-struktúra és Drive rendszerezés

**Gmail labelek**:
- `01-Prospects`
- `02-Consultations`
- `03-Proposals`
- `04-Clients`
- `05-Operations`

Bejövő email a megfelelő label-be (automatikusan vagy 30 mp manuálisan). Egy hónap múlva pontosan visszakereshető.

**Drive mappa-szerkezet** ugyanezzel a számozással:

```
01-Prospects/
02-Consultations/
03-Proposals/[ügyfél-név]/
04-Clients/[ügyfél-név]/
```

Az ügyfél-mappákban: szerződések, számlák, delivery-fájlok, `notes.md` (mi történt). Ezek nem kreatív megoldások — ismétlődő minták, amik nélkül 3 hónap után nem találsz semmit.

## Én így csináltam

> **[ATTILA TÖLTI KI: a saját nyilvántartásod jelenlegi állapota — hány név van benne, mikor léptél (vagy lépsz) 1 munkalapról a 4 lapos rendszerre, és mit automatizáltál ténylegesen]**

## Heti feladat

Először döntsd el, melyik ágon vagy:

- **Minimál-ág** (10-nél kevesebb jelölt): tartsd naprakészen a 8. modul tracking-tábláját, és állítsd be a Gmail label-eket. A 4 lapos rendszert hagyd későbbre.
- **Teljes ág** (zsúfolt a táblád): másold le a Sheets CRM-sablont, töltsd fel a meglévő neveiddel, állítsd be a Gmail label-eket, és hozd létre a Drive mappa-szerkezetet a fenti minta szerint.

**Akkor vagy kész, ha** minden ügyféllel kapcsolatos információ pontosan ott van, ahol kell: bármelyik nevedről 30 másodperc alatt megmondod, mi volt az utolsó kontakt és mi a következő lépés.

## Ha elakadtál

- **„Nem tudom, melyik ág vagyok."** Számold meg a neveidet. 10 alatt: minimál-ág, és kész. A 4 lapos rendszer nem előny, ha üresen áll — karbantartási teher.
- **„Elkezdtem a 4 lapot, de nem vezetem."** Túl korán léptél, vagy túl sok az oszlop. Menj vissza az egy munkalapra, és csak a „következő lépés" oszlopot tartsd szentnek.
- **„Az Apps Script hibát dob."** Először: Fájl → Verzióelőzmények, állítsd vissza a táblát. Utána másold be a hibaüzenetet Claude Code-ba a script mellé — jellemzően egy engedély vagy egy elgépelt tartomány-név a gond.
- **„A Gmail label-ezés nem áll kézre."** Kezdd két label-lel: `01-Prospects` és `04-Clients`. A többit akkor vedd fel, amikor ténylegesen van mit beléjük tenni.

## Letölthetők

- `prompts.md` — promptok a CRM-struktúra saját szakmára szabásához és az automatizációhoz
- `reference.md` — a 4 munkalap oszlop-fejlécei + kész Apps Script-ek bemásolásra
- `SKILL.md` — Claude Code skill a modulhoz
