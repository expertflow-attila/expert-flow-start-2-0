# Ár-kalkulátor munkalap — 3. modul

Ezzel a munkalappal számolod ki a minimum óradíjadat és a csomagáradat. Töltsd ki a „Te számod" oszlopot felülről lefelé. Kata, a könyvelő (az 1. modul példa-szereplője) sora mutatja, hogyan néz ki kitöltve.

| # | Mező | Hogyan számold | Te számod | Kata példája |
|---|------|----------------|-----------|--------------|
| 1 | Cél havi bevétel (Ft) | Döntés: ebből fizetsz adót, költséget, és ebből élsz | | 600 000 |
| 2 | Számlázható óra hetente | Reálisan — admin, tanulás, ügyfélszerzés nem számlázható | | 20 |
| 3 | Számlázott hetek havonta | Szabadsággal, ünnepekkel, kieséssel számolj | | 4 |
| 4 | Havi kapacitás (óra) | 2. sor × 3. sor | | 80 |
| 5 | Minimum effektív óradíj (Ft) | 1. sor ÷ 4. sor | | 7 500 |
| 6 | A csomag munkaóra-igénye (óra) | Becsüld meg: ennyi munkád van benne ügyfelenként | | 5 |
| 7 | A csomag minimum ára (Ft) | 5. sor × 6. sor — ez a padló | | 37 500 |
| 8 | Listaár (Ft) | 7. sor + tartalék hibára és extra körökre, a piaci sávhoz igazítva | | 45 000 |
| 9 | Alapító ár (Ft) | 8. sor mínusz 20-30% — csak az első 3-5 ügyfélnek | | 35 000 |

Két ellenőrzés kitöltés után. Ha az 5. sor a szakmád sávja alatt van, a listaárat a sávhoz igazítsd, ne a padlóhoz. Ha a 7. sor magasabb, mint amit a vevőd kifizetne, csökkentsd a csomag munkaóra-igényét — ne az óradíjadat.

## Így viszed át Google Sheets-be

Nyiss egy üres Sheets-et. Az A oszlopba írd a mezőneveket, a B oszlopba a számokat — az 1. sor legyen a fejléc, így az 1. mező a B2 cellába kerül. Három cellába képlet megy szám helyett: `B5: =B3*B4` (havi kapacitás), `B6: =B2/B5` (minimum óradíj), `B8: =B6*B7` (csomag-padló). A 9. mezőhöz írhatod: `B10: =B9*0,75` (alapító ár 25% kedvezménnyel). Így bármelyik bemenetet átírod, a teljes kalkuláció azonnal újraszámol.
