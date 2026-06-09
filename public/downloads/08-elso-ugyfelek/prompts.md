# 8. modul — Promptok

> Ezek a promptok dokumentáló hangon vannak megírva — nem tanácsadnak, hanem segítenek leírni, amit én magam is most próbálok. Ha valami furcsának érződik, az lehet, hogy csak mert ezeket még én sem teszteltem ezerszer. Használd inspirációként, nem szabályként.

## 8.1 — Prompt a 01. leckéhez (Az ismerős-lista)

Ez a prompt segít összeírni a 10 nevet — nem üres listával ülsz neki, hanem AI-jal beszélgetsz, amíg eszedbe jutnak az emberek. Én is így csináltam először, mert nehéz volt elindulni.

```
Próbálom összeírni a 10 nevet, akiket az elmúlt 5 évben szakmailag ismertem meg, és valamilyen szinten megbíznak bennem. Nem tudom, hol kezdjem.

A vállalkozásom 1 mondatban (3. modul ajánlat): [INPUT]
A célközönségem (2. modul avatár): [INPUT]

Tegyél fel nekem 6-8 kérdést, ami segít fokozatosan eszembe juttatni a neveket. Például:
- Az utolsó 3 munkahelyem kollégái
- Korábbi ügyfeleim, akikkel már nem dolgozom együtt
- Konferenciákon, eventeken megismert emberek
- Korábbi business mentoraim, partnereim
- Volt kollégák, akik közben másik céghez kerültek
- Családi vagy baráti körből, akik vállalkozók
- Online (LinkedIn, közösségi csoportok) megismert emberek

A kérdéseket egyenként tedd fel, ne egyszerre — várd meg a válaszomat, és csak akkor folytasd. A célom: a végére legyen 10 név, mindegyikhez egy 1 mondatos megjegyzés (kicsoda, miért ő, mire emlékszem közös pontunkról) ÉS a kapcsolat típusa a 10 szituáció egyikéből (volt kolléga / ismerős, aki tudja, mit csinálok / ismerős, aki nem tudja / régi ügyfél-kapcsolat / ajánlott idegen / szakmai csoporttárs / volt főnök / képzéstárs / szolgáltatóm, aki ismer / baráti kapcsolat). A típusból választom majd a csatornát és a sablont.

Hangulat: ne sürgess, ne motiválj — csak segíts emlékezni.
```

## 8.2 — Prompt a 02. leckéhez (A személyes üzenet)

Ez a prompt segít személyre szabni az üzenetet — a 10 szituációs sablon (üzenet-sablonok letölthető) egyikéből indul, NEM nulláról. Én magam is így írom most, és minden levél kicsit más lesz.

```
Egy konkrét embernek küldök személyes üzenetet a 10-fős ismerős-listámról. Sablonból indulok, és személyre szabom.

Az illető: [név, hogyan ismerem, közös pontunk]
A kapcsolat típusa: [a 10 szituáció egyike, pl. volt kolléga / képzéstárs / ajánlott idegen]
A választott csatorna: [telefon / személyes / hangüzenet / írott — minél melegebb a kapcsolat, annál közvetlenebb]
A kiinduló sablon (másold be az üzenet-sablonok fájlból): [SABLON]
Mit tudok róla most: [szakmája, helyzete, mire reagálhat ez az ajánlat]
Az én vállalkozásom 1 mondatban: [INPUT]

Szabd személyre a sablont úgy, hogy:

- Maximum 3-4 mondat marad
- Mindhárom elem benne van: mit csinálok most + miért pont rá gondoltam + alacsony tétű kérés (20 perc, vélemény)
- NEM kezdődik azzal, hogy „van egy új szolgáltatásom"
- Konkrét utalás közös pontunkra (1 mondat — emlékezz arra, AMI tényleg volt köztünk; ezt a mondatot ÉN adom, te csak simítod)
- A vége: ajánlat egy beszélgetésre, NEM egy szolgáltatás eladására
- Ha a csatorna telefon: ne kész szöveget írj, hanem 3 pontos hívás-vázlatot

Magyar nyelvű, magyaros hang (nem coach-szöveg, nem hyped, nem „a magasabb verziód").

Plusz: írj 2 alternatív verziót is — más-más tónussal (egy közvetlenebb, egy formálisabb), hogy lássam, melyiket érzem magaménak.

Megjegyzés magamnak: ne küldd ki, mielőtt kétszer át nem olvastad. Ha érzed, hogy „eladószag" van rajta, írd át. Inkább kevesebb és jobb, mint több és rossz.
```

## 8.3 — Prompt a 03. leckéhez (Ajánláskérés)

Ez a prompt egy ajánláskérés-szöveget ír — NEM érzelmi zsarolás, hanem konkrét cselekvésre váltó kérés. Az első elégedett ügyfél után használd. Én is majd akkor látom, mennyire működik, ha lesz pár ügyfelem.

```
Az első ügyfelemmel sikerült együtt dolgozni, és elégedett a munkával. Szeretnék ajánláskérést írni.

Az ügyfél: [név, mivel dolgoztunk, mi volt a konkrét eredmény]
Az ő avatárja (kihez hasonlít): [INPUT]
A szolgáltatás 1 mondatban: [INPUT]

Írj nekem egy üzenetet, ami:

- Magyar nyelvű, max 5-6 mondat
- KEZDŐDIK egy őszinte köszönettel a közös munkáért (1 mondat, KONKRÉT — ne általános „köszi a bizalmat")
- A kérés KONKRÉT: „gondolkozz két emberen, akinek most pont ott áll, ahol te álltál egy hónapja"
- A specifikus szám (kettő, NEM „valaki") és a konkrét időkeret (most, NEM „valamikor majd") fontos
- „Ha eszedbe jut valaki, küldj nekem üzenetet, és én felveszem vele a kapcsolatot"
- Zero érzelmi zsarolás („te lennél nagyon nagy segítség"), zero sürgető hang
- Aláírva, személyes hang

Plusz: írd le egy 2-3 mondatos belső jegyzetben, hogy NEKEM mit érdemes dokumentálnom az ajánlás után — pl. melyik ügyfél hányat ajánl, milyen szövegre reagál legjobban, mi a sikerráta. Ezt a saját Google Sheets CRM-be vezetem (10. modul).

Megjegyzés a hangnemhez: ez egy KÉRÉS, nem egy elvárás. Ha az ügyfél nem jut eszébe senki, vagy nem reagál, az TELJESEN rendben van. Ne folytasd 3 emlékeztetővel — az már nyomulás.
```
