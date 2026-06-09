---
name: lead-magnet-generator
description: 5-10 oldalas lead magnet PDF-vázlatot ír a 9. modul szabályával — a téma a vevő-interjúkban leggyakrabban elhangzott kérdés, nem tipp, hanem adat. Akkor használd, amikor email-listát kezdesz építeni.
---

# Lead-magnet-generátor — Skill

## Mikor használd

- A 9. modulnál tartasz: kell egy konkrét, letölthető PDF az email-címért cserébe
- Már van lead magneted, de gyenge a feliratkozási arány, és új témával próbálkozol
- A 2. modul interjúi megvannak — a téma onnan jön, nem ötletelésből

NE használd, ha még nincs legalább 3 interjú-jegyzeted — a 9. modul szabálya szerint a téma visszakeresett adat, nem tipp.

## Bemenet

1. **Interjú-jegyzetek** — a 2. modul jegyzet-táblája, vagy legalább a leggyakrabban elhangzott kérdések listája
2. **A tudás-alapod** — az 1. modul fájdalom-térképe vagy 5-10 mondat arról, mit tudsz a témáról
3. **Célközönség** — az avatár egy mondatban (2. modul)
4. **A halk CTA** — mire hívod az olvasót az utolsó oldalon (jellemzően: konzultáció-foglalás)

## Lépések

1. A jegyzetekből megszámolja, melyik kérdés hangzott el a legtöbbször — ez a javasolt téma. Ha te mást választanál, jelez: a szabály szerint az adat dönt
2. Cím-javaslatok: konkrét, számos formátum ("7 lépéses…", "X napos…") — nem "hasznos tippek"
3. Vázlat: fedlap + 4-6 fejezet, fejezetenként 2-3 bullet arról, mi kerül bele a tudás-alapodból
4. Utolsó oldal: halk CTA — egy bekezdés, egy link, nem értékesítési oldal
5. Megadja a Pandoc-parancsot, amivel a kész markdown PDF-fé alakul (a 9. modul pipeline-ja)

## Kimenet

Egy markdown vázlat-fájl: cím (3 variáció) + fedlap-szöveg + fejezetenkénti bullet-vázlat + záró CTA + a PDF-konverzió parancsa. A fejezetek KIDOLGOZÁSA a te dolgod — a skill vázat ad, a tartalom a te tudásod.

## Korlátok

- 5-10 oldalra méretez — ha a vázlat ennél hosszabbra nőne, vágást javasol, nem dagaszt
- Nem ír a nevedben szakmai tartalmat, amit nem adtál meg — ahol hiányzik a tudás-input, [TE TÖLTÖD KI] jelölőt hagy
- A téma-választást nem bírálja felül: ha az adat mást mond, mint az ötleted, megmutatja mindkettőt és indokol
- Nem ígér eredményt a címben, amit a tartalom nem vált be

## Resources

- `reference.md` — egy kidolgozott példa-futtatás a téma-választástól a vázlatig
