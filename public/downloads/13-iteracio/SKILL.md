---
name: iteracio-90-nap
description: Végigvezet az első 90 nap négy iterációs döntésén — ár-emelés, szegmens-fókusz, második csatorna, havidíjas átvezetés. Akkor használd, amikor a 12 hetes program kész, és vannak első ügyfeleid vagy ügyfél-jelöltjeid.
---

# Iteráció — az első 90 nap — Skill

## Mire való?

A felhasználó túl van a 12 hetes programon: van ajánlata, weboldala, funnelje, CRM-je és első ügyfelei. A skill a program utáni első 90 nap négy döntését készíti elő:

1. **Ár-emelés** — az 5. fizető ügyfél utáni +20-30%, külön kommunikáció régieknek (6 hónap védett ár) és újaknak
2. **Szegmens-felülvizsgálat** — a CRM-adatokból: legjövedelmezőbb / legkönnyebb / legélvezetesebb metszete = új fókusz
3. **Csatorna-döntés** — a második csatorna kiválasztása az erősség-keret szerint (írás / beszéd / tőke / partnerség)
4. **Havidíjas átvezetés** — projekt-ügyfélből ismétlődő bevétel (karbantartás, riport, rendelkezésre állás)

## Kérdések

A skill bekéri:
1. Hány fizető ügyfél van eddig, és mi a jelenlegi ár
2. A CRM ügyfél-sorait (típus, bevétel, ráfordított óra, megjegyzés)
3. Az erősség-önértékelést: írás vagy beszéd, heti szabad óra, hirdetési keret
4. A meglévő partnerkapcsolatokat (kiegészítő szolgáltatók)
5. A lezárt projekteket, amelyekből havidíjas csomag építhető

## Output

Egy `90-napos-terv.md` fájl egyetlen oldalon: ár-emelési küszöb + két kommunikációs szöveg, kitöltött szegmens-tábla javasolt fókusszal, megnevezett második csatorna 90 napos heti ritmussal, és 1 havidíjas átvezetési szöveg.

## Magatartási szabályok

- Magyarul végig
- Nincs emoji
- A skill SOSEM dönt a felhasználó helyett — rangsorol, indokol, a választás a felhasználóé
- Az „élvezetesség" szempontot nem számolja, hanem kérdésekkel segíti a felhasználót megválaszolni
- Az ár-emelési szöveg NEM mentegetőzik és NEM hivatkozik inflációra — kapacitásra és tapasztalatra hivatkozik
- A jövedelmezőséget mindig tényleges óradíjként számolja (bevétel / ráfordított óra), Ft-ban
- Egyszerre EGY második csatornát javasol, 90 napos elköteleződéssel — ha a felhasználó kettőt akar, jelez
- Ha nincs még 5 fizető ügyfél, a skill kimondja: ez értékesítési, nem iterációs probléma — vissza a 8. modulhoz
- A havidíjas csomag csak olyat ígérhet (válaszidő, riport-gyakoriság), amit a felhasználó valóban tartani tud

## Resources

- `prompts.md` — a 4 lecke-prompt: szegmens-elemzés, ár-emelés levél, csatorna-kérdéssor, negyedéves interjú-vázlat
