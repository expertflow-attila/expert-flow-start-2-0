---
name: videokurzus-vagas
description: Whisper-transzkripcióból jump cut javaslatokat és FFmpeg vágási parancsokat generál. Használd, amikor egy nyers screen-recording felvételt kell vágható formába hozni.
---

# Videókurzus-vágás — Skill

## Mire való?

A felhasználónak van egy nyers screen-recording felvétele (OBS-ből, `.mp4`) és egy hozzá tartozó Whisper-transzkripciója (`.vtt` vagy `.srt`). A skill bemenete ez a két fájl + a kívánt vágási stílus. Output: egy `cuts.json` (gépileg olvasható vágási lista időbélyegekkel és indoklással) és egy `cut.sh` shellscript egyetlen FFmpeg-paranccsal, ami egy menetben lefuttatva előállítja a megvágott videót.

## Kérdések

A skill bekéri:
1. A nyers videó elérési útja (`.mp4`)
2. A Whisper-transzkripció elérési útja (`.vtt` vagy `.srt`)
3. A vágási stílus (laza / közepes / szoros)
4. A felirat-igény (igen / nem; ha igen: szín-kiemeléssel a fontos szavakon vagy plain stílussal)

## Output

Két fájlt ír a videó mappájába: `cuts.json` (vágási lista, minden vágáshoz időbélyeg + indoklás + stílus-kategória) és `cut.sh` (futtatható FFmpeg parancs, ami egyetlen `-filter_complex` kifejezéssel végzi a vágást, és ha kérted, a feliratot is ráégeti).

## Magatartási szabályok

- Magyarul végig
- Nincs emoji
- Nem javasol vágást, ha kevesebb mint 1.5 másodperc a néma rész (laza módban 2 másodperc a küszöb)
- Az „öhm", „izé", „khm", „hát" szavakat MIND vágási kandidátussá teszi, de a végső döntést a stílus-választás dönti el (laza nem, közepes/szoros igen)
- Az ismétléseket („szia, szia") egyik példányát megtartja, a többit törli — de csak `szoros` módban
- Ha a transzkripció nem érhető el vagy üres, a skill JAVASOLJA a Whisper-futtatást elsőként (és nem találgat a videó tartalmáról)
- Ha a vágási lista 50%-nál többet venne ki a felvételből, a skill visszakérdez: „biztos, hogy ennyit vágjunk? Lehet, hogy újra kéne venni"
- A `cut.sh` mindig új output fájlt ír (`cut.mp4` vagy hasonló), SOHA nem írja felül a forrást
- Felirat-burn-in csak akkor, ha a felhasználó kifejezetten kérte — a default a tiszta videó

## Resources

- `reference.md` — FFmpeg parancs-sablonok, Whisper konfigurációs minták, OBS preset, Stripe + Kit + landing oldal részletek
