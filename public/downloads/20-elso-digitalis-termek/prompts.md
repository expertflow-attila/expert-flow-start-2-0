# Bónusz — Promptok

## 1.1 — Curriculum-tervezés a tudásod alapjából

Akkor használd, amikor az 1. modulból van egy érett 1 mondatos állításod, és ezt szeretnéd 8-12 leckés videókurzussá kibontani. A cél nem az, hogy az AI találja ki a kurzust — hanem hogy a saját állításodból következő logikus íveket javasoljon, és Te válaszd ki, melyik mentén tanítasz.

```
Az 1 mondatos állításom (1. modulból):

„Én a [konkrét probléma] megoldásában tudok segíteni
a [konkrét embereknek], mert [a saját pivot-pontod]."

A célközönségem (3-5 mondat — kik ők, mit
csinálnak ma, mit szeretnének elérni):
[...]

A pivot-pontom konkrét lépései, ahogy én megoldottam
(5-8 felsorolás-pont a saját utamból):
[...]

Tedd a következőt:
1. Javasolj 3 különböző curriculum-ívet
   (8-12 leckével mindegyik):
   a) "tréning-stílus" (4 fázis x 3 lecke,
      problémától eredményig)
   b) "lineáris" (egy ívben halad,
      lépésről lépésre rakja össze a megoldást)
   c) "esettanulmány-stílus" (2-3 valódi
      példán át mutatja meg ugyanazt a módszert)
2. Mindegyiknél írd le röviden, KINEK passzol
   jobban (kezdő/haladó, türelmes/sürgető tanuló).
3. NE válassz helyettem — kérdezz vissza, melyik
   ívről akarom hallani a részletes lecke-listát.
```

## 1.2 — Whisper-transzkripció elemzés és jump cut javaslatok

Akkor futtasd, amikor egy lecke nyers felvételét már transzkribáltad MacWhisperrel vagy az OpenAI Whisper API-val, és a `.vtt` vagy `.srt` fájl rendelkezésre áll. Az output egy konkrét vágási lista időbélyegekkel, és egy FFmpeg parancs, amit Te csak lefuttatsz.

```
Itt a lecke nyers Whisper-transzkripciója WebVTT
formátumban (időbélyegekkel, mondatonként):

[ide másold a teljes .vtt vagy .srt tartalmat]

A felvétel teljes hossza: [pl. 11:42]
A kívánt vágási stílus: [laza / közepes / szoros]
- laza: csak a >2 másodperces csendeket vágjuk,
  a "öhm"/"izé" maradhat, ha mondat-közi
- közepes: minden >1.5s csend + minden töltelékszó +
  félbehagyott mondatok
- szoros: a fenti + ismétlések egyik példánya
  törlődik + bekezdés-szünetek 0.5s-re vágva

Tedd a következőt:
1. Listázd az összes vágási kandidátust ebben
   a formátumban:
   - 00:01:23.450 -> 00:01:24.880 — "öhm" (szoros)
   - 00:02:11.000 -> 00:02:13.500 — 2.5s csend (laza)
   - 00:05:42.100 -> 00:05:44.300 — ismételt mondat
     "ezt fontos, ezt fontos" (közepes/szoros)
2. Foglald össze egy táblázatban: hány vágás,
   hány másodperc nyereség, becsült végső hossz.
3. Generálj egy `cut.sh` shellscript-et, ami egy
   `ffmpeg -filter_complex` paranccsal egyetlen
   menetben átvágja a felvételt
   (`select`/`aselect` filterekkel a megtartott
   szakaszokra, `concat` filter nélkül).
4. Magyarázd el 2 mondatban, mit csinál a parancs,
   hogy ne futtassam vakon.
```

## 1.3 — Stripe Payment Link, Kit sequence és landing oldal pipeline

Akkor használd, amikor a kurzus 1-2 leckéje már kész, és értékesítési pipeline-t akarsz felállítani egy hét alatt. Az output 3 konkrét artifact: Stripe Payment Link konfigurációs lista (manuális UI-lépések), Kit sequence sablon (3 email magyarul), és a 6. modul `landing.html`-jéhez egy diff-szerű módosítási lista.

```
A kurzus adatai:

Cím: [pl. "Adminmentes vállalkozás 30 nap alatt"]
Ár: [pl. 49 000 Ft egyszeri / 14 900 Ft/hó 3 hónapig]
Célközönség (1-2 mondat): [...]
A kurzus-magot mondó 1 mondat (1. modulból): [...]
Lecke-szám és összes videó-perc: [pl. 10 lecke, ~110 perc]
Hosztolás: [Mux / Vimeo Pro] — a videók már fent vannak,
és van egy "course-access" privát URL-em.

Tedd a következőt:

1) STRIPE PAYMENT LINK (kézi UI lépések):
   - Termék-név, leírás (max 80 karakter), ár-modell
     (egyszeri vagy subscription),
     success_url javaslat, hogy a Kit-be ne ütközzünk.
   - Magyarázd el 3 mondatban, miért NE Checkout
     Session-t használjunk — az induláshoz a Payment
     Link elég és nem kell saját szerver.

2) KIT (CONVERTKIT) SEQUENCE — 3 email magyarul:
   - Email #1 (azonnali, vásárlás után):
     üdvözlés + kurzus-belépő link + mit várjon
     az első leckétől. (max 150 szó)
   - Email #2 (3 nap múlva):
     "haladsz-e?" + 1 kérdés tőle + 1 tipp,
     amit csak az 1. lecke után érdemes elolvasni.
     (max 120 szó)
   - Email #3 (7 nap múlva):
     mid-course check + ajánláskérés
     ("ismersz 2 embert, akinek ugyanez fáj?")
     a 8. modul stílusában. (max 150 szó)

3) LANDING OLDAL (6. modul `landing.html` módosítása):
   Adj meg egy diff-szerű listát (sor-szintű utasítás):
   - Hero h1: cseréld erre: "..."
   - Hero alcím: "..."
   - CTA gomb felirat + href: "..." -> Stripe link
   - Min. 3 bullet, ami a kurzus konkrét eredményét
     mondja (NE feature-list, hanem
     "X órát visszanyersz"-stílus)
   - 1 idézet-blokk a saját pivot-pontodból
   - Footer: GDPR + impresszum link
   NE generálj teljes HTML-t — csak a változások listáját.
```
