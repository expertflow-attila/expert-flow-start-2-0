---
lastReviewed: "2026-05-16"
---

# 10. modul · CRM és belső rendezés

> Google Sheets a CRM, Gmail label-struktúra a kommunikációra, Drive struktúra a dokumentumokra — egyetlen logikai egység, ami nélkül a 8. modul ügyfél-szerzése káoszba fullad.

> **TL;DR** — Google Sheets CRM (4 munkalap) + Gmail labelek + Drive mappa-struktúra — egy logikai egység.
> - **Sheets CRM**: Prospects, Consultations, Proposals, Clients — egy ránézésre minden státusz
> - **Apps Script**: Cal.com webhook → új sor, „won" státusz → átkerül a Clients-be (Claude Code generálja)
> - **Gmail labelek**: `01-Prospects` … `05-Operations`, Drive mappák ugyanezzel a számozással + `[ügyfél-név]/`

## A hét témája

A IV. fázis a háttér-rész — az 1-9. modulban elöl álltál és cselekedtél, most a hátadat fedezed. A CRM nem „extra eszköz" — az a hely, ahol nyilvántartod, kivel mikor beszéltél, mit ígértél, mit várnak tőled. Sokan ezt a fejükben tartják, és pár hét után elveszítik a fonalat. Egy egyszerű Google Sheets-alapú rendszer + Gmail és Drive rendezés.

## 01. Google Sheets CRM — négy munkalap

Nem kell drága szoftver — egy Sheets dokumentum tökéletes. „CRM — [év]" fájl, 4 munkalap:

1. **Prospects** — 8. modul ismerős-listája + új lehetséges ügyfél. Oszlopok: név, email, miért érdekes, utolsó kapcsolat dátuma, státusz.
2. **Consultations** — Cal.com foglalások. Név, dátum, mit kérdezett, mi az ajánlat, mi lett a kimenet.
3. **Proposals** — kiküldött ajánlatok. Kinek, mikor, milyen csomag, ár, status (pending/won/lost).
4. **Clients** — fizető ügyfelek. Név, csomag, kezdés dátuma, fizetés státusza, megjegyzések.

Egy ránézésre minden státusz látszik — nem kell több külön rendszer.

## 02. Apps Script automatizáció

Sheets erőssége: beépített Apps Script (JavaScript-szerű), amivel automatizálsz.

**Példák**:
- Cal.com új foglalás (webhook) → új sor a „Consultations" lapon
- „Proposals" státusz „won" → sor átkerül a „Clients" lapra

Nem kell programozó lenni — Claude Code-dal 10-15 perc/script. Kész script-ek a `reference.md`-ben, csak bemásolod a Sheets script-szerkesztőjébe.

## 03. Gmail label-struktúra és Drive rendszerezés

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

## Heti feladat

Hozd létre a Google Sheets CRM-et a négy munkalappal, állítsd be a Gmail label-eket, és hozd létre a Drive mappa-szerkezetet a fenti minta szerint.

## Eredmény

A hét végére van egy működő nyilvántartó rendszered — minden ügyféllel kapcsolatos információ pontosan ott van, ahol kell, és innen tovább nem fogsz elveszteni egyetlen lehetőséget sem.
