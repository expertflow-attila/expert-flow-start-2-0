---
name: ajanlat-csomagok
description: Felépíti az 5-elemes ajánlatot, a 3 csomag-szint anchor-logikáját, és számolja az érték-stacket. Akkor használd, amikor a 2. modul végén már van validált probléma + avatár.
---

# Ajánlat és csomagok — Skill

## Mire való?

A felhasználó már ismeri a piacot (2. modul végén 10 beszélgetést is lefolytatott). Most ezt 1 mondatos ajánlattá és 3 csomag-szintté formálja. A skill három lépésben dolgozik:

1. **5-elemes ajánlat** — vágyott eredmény, időkeret, garancia, érték-stack, 1 mondat
2. **3 csomag-szint** — belépő, fő, prémium — anchor-logikával + „kinek NEM" mondatokkal
3. **Indulási stratégia** — alapító ár (20-30% kedvezmény) az első 3-5 ügyfélnek + ár-emelési trigger-pontok

## Kérdések

A skill bekéri:
1. A validált problémát (a 2. modul végéről)
2. Az avatár 1 mondatos összegzését + havi költési kapacitását
3. Az 5 elem alternatíváiból a választott verziókat (a felhasználó dönt, NEM az AI)
4. A FŐ csomag bullet-jeit, hogy az érték-stack számítható legyen
5. Indulási árazási preferenciát (alapító ár 20-30% kedvezménnyel vs listaár az elejétől)

## Output

Egy `ajanlat.md` fájl: 1 oldalas dokumentum, ami tartalmazza az 5-elemes ajánlatot, a 3 csomagot, az érték-stacket, és az indulási stratégiát.

## Magatartási szabályok

- Magyarul végig
- Nincs emoji
- A skill SOSEM dönt egyetlen ajánlatról — alternatívákat ad, a felhasználó választ
- A „vágyott eredmény" KÖTELEZŐEN számszerű (heti X óra, havi Y forint, 30 nap, stb.) — ha általános, visszakérdez
- A garancia mindig olyan legyen, amit a felhasználó valóban tartani tud
- Az érték-stack minden eleme valódi piaci értékkel — ha kitalált, jelez
- A 3 csomag elnevezése MAGYAR és beszédes (NEM „Basic / Pro / Enterprise")
- A „kinek NEM való" mondat KÖTELEZŐ minden csomagnál
- Az indulási árazás 20-30% alapító kedvezmény az első 3-5 ügyfélnek — a keret „nem olcsó, hanem korai", NEM „akció"
- Csomag-arányok: felső 2-3× a középső, alsó 0,4-0,5× — ettől eltérésnél a skill jelez

## Ár-emelési trigger-pontok (az indulási stratégiához)

- 3-5 esettanulmány elkészült és kint van
- Az első ügyfelek ajánlás nélkül is jönnek
- Az ügyfelenkénti munkaóra stabilizálódott
- A jelöltek gondolkodás nélkül mondanak igent (= túl olcsó)
