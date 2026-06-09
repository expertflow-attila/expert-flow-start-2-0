# 8. modul — Heti tracking-tábla

> Ez a 10. modul CRM Prospects-lapjának mini-verziója. Az első 10-20 megkereséshez ennyi elég — ne építs CRM-katedrálist 3 névre. A lényeg: minden sorban legyen kitöltve a „Következő lépés" — ha az üres, az a sor halott.

## A tábla szerkezete

| Név | Kapcsolat típusa | Csatorna | Üzenet dátuma | Válasz | Következő lépés | Jegyzet |
|---|---|---|---|---|---|---|
| Kovács Petra | volt kolléga | hangüzenet | 2026-06-10 | érdeklődik, kérdezte az árat | Cal.com link elküldve, várom a foglalást | a régi csapatból ő ismeri legjobban a témát |
| Szabó Márk | szakmai csoporttárs | írott üzenet | 2026-06-10 | nincs válasz | follow-up 2026-06-16 (1 db, több nincs) | a [csoport]-ban aktív, ott írtam neki privátban |

**Oszlop-magyarázat röviden:**

- **Kapcsolat típusa** — a 10 szituáció egyike (üzenet-sablonok letölthető); ebből következik a csatorna.
- **Csatorna** — telefon / személyes / hangüzenet / írott.
- **Válasz** — szó szerint röviden, mit mondott: „érdeklődik", „kérdez: ár", „hallgat", „nem aktuális". A 07. szakasz diagnózisához ez az alapanyag.
- **Következő lépés** — mindig konkrét és dátumozott: „follow-up 06-16", „link kiment, várom", „ajánlást kértem". Soha ne maradjon üres.
- **Jegyzet** — közös pont, ajánló neve, bármi, ami a következő üzenethez kell.

## Hogyan vidd át Google Sheets-be

Nyiss egy új táblázatot (sheets.new), és az első sorba írd be a hét oszlopnevet: Név, Kapcsolat típusa, Csatorna, Üzenet dátuma, Válasz, Következő lépés, Jegyzet. A „Kapcsolat típusa" és a „Csatorna" oszlopra érdemes legördülőt tenni (Adatok → Adatérvényesítés → Legördülő lista), így gyorsabb a kitöltés és nem gépelsz elírást. Az „Üzenet dátuma" oszlopot formázd dátumnak, a „Következő lépés" oszlopot pedig színezd feltételes formázással: ha üres, legyen piros — így ránézésre látod a halott sorokat. Amikor a 10. modulban felépíted a CRM-et, ezt a lapot egy az egyben behúzod Prospects-lapnak.
