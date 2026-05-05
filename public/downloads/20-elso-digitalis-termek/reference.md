# Videókurzus-vágás — Technikai referencia

## OBS Studio — felvételi preset (1080p screen recording)

A felvétel előtt egyszer beállítod, és minden lecke ezzel a profillal megy.

**Sources (OBS bal alsó panel):**
- `Display Capture` (a teljes képernyő, vagy egy konkrét monitor)
- `Audio Input Capture` (a USB mikrofonod — Fifine vagy Samson)
- *Opcionális:* `Video Capture Device` (webkamera kis ablakban a jobb alsó sarokba, 320x180-as méretben)

**Settings → Output → Recording:**
- Recording Format: `mp4`
- Encoder: `Hardware (Apple VT, H.264)` Mac-en, `Hardware (NVENC, H.264)` Windows-on
- Rate Control: `CBR` (Constant Bitrate) vagy `CQP` (CQ 20-23 között)
- Bitrate: 8000-10000 Kbps 1080p-hez

**Settings → Audio:**
- Sample Rate: `48 kHz`
- Channels: `Mono` a mikrofon-tracknek (kevesebb fájl-méret, jobban transzkribálható)

**Settings → Video:**
- Base Resolution: `1920x1080`
- Output Resolution: `1920x1080`
- FPS: `30`

**Hotkey** a felvétel indításához és leállításához: `Cmd+Shift+R` (Mac) vagy `Ctrl+Shift+R` (Windows). Az `OBS Studio Mode`-ot kapcsold ki — induláshoz nem kell.

## Whisper — transzkripció parancsok

### Helyi futás (whisper.cpp)

```bash
# Modell letöltése egyszer (~1.5 GB, large-v3)
bash ./models/download-ggml-model.sh large-v3

# Transzkripció — a lecke.mp4-ből WebVTT és SRT outputot is kérünk
./main \
  -m models/ggml-large-v3.bin \
  -f lecke-01.mp4 \
  -l hu \
  --output-vtt \
  --output-srt
```

### OpenAI Whisper API (Python snippet)

```python
from openai import OpenAI

client = OpenAI()

with open("lecke-01.mp4", "rb") as audio_file:
    transcript = client.audio.transcriptions.create(
        model="whisper-1",
        file=audio_file,
        language="hu",
        response_format="vtt",
        temperature=0,
    )

with open("lecke-01.vtt", "w", encoding="utf-8") as f:
    f.write(transcript)
```

### MacWhisper (GUI)

A felvétel-fájlt áthúzod az ablakra, kiválasztod a `Large v3` modellt, nyelvnek a magyart, és exportálod `.vtt` formátumban. Az időbélyegek mondatonkénti pontossággal érkeznek — ez elég a jump cut elemzéshez.

## FFmpeg — vágási sablonok

A három alábbi parancs lefedi az összes szükséges esetet. Mindegyik tesztelt, nem találgatott szintaxis.

### 1) Egyszerű időintervallum-vágás (csak elejét és végét vágod)

```bash
ffmpeg -i in.mp4 -ss 00:00:05 -to 00:08:30 -c copy out.mp4
```

A `-c copy` azt jelenti, hogy nem kódoljuk újra a streamet — gyors és veszteségmentes. Cserébe a vágás a legközelebbi keyframe-re igazítja a kezdést, így 1-2 másodperc pontatlanság előfordul. Tanításhoz ez bőven elég.

### 2) Több szakasz egybe-vágása `select` filterrel (pontos vágás, újrakódolás)

Ez az, amit a skill a `cut.sh`-ban generál. Példa: az 5-7 másodperces és a 22-24 másodperces csendet vágjuk ki, és a maradékot összefűzzük.

```bash
ffmpeg -i in.mp4 \
  -filter_complex "
    [0:v]select='not(between(t,5,7)+between(t,22,24))',setpts=N/FRAME_RATE/TB[v];
    [0:a]aselect='not(between(t,5,7)+between(t,22,24))',asetpts=N/SR/TB[a]
  " \
  -map "[v]" -map "[a]" \
  -c:v libx264 -preset medium -crf 18 \
  -c:a aac -b:a 192k \
  out.mp4
```

Megjegyzések:
- A `select` filter logikai kifejezést vár (`not(...)`), és az `+` operátor itt OR-t jelent a filter-szintaxisban
- A `setpts=N/FRAME_RATE/TB` és `asetpts=N/SR/TB` újrakalibrálja az időbélyegeket a vágás után — ez kötelező, különben szakad a videó
- `-crf 18` jó alapérték (17-23 közt mozogj — alacsonyabb = jobb minőség, nagyobb fájl)
- Tucatnyi vágáshoz a kifejezés hosszú lesz, de futtatható — a skill ezt automatikusan állítja össze

### 3) Felirat ráégetése (caption burn-in)

```bash
ffmpeg -i in.mp4 \
  -vf "subtitles=captions.srt:force_style='FontName=Arial,FontSize=22,PrimaryColour=&HFFFFFF&,BackColour=&H80000000&,BorderStyle=3,Outline=1,MarginV=60'" \
  -c:v libx264 -preset medium -crf 18 \
  -c:a copy \
  out_with_captions.mp4
```

Megjegyzések:
- A `subtitles=` szűrő a libass könyvtárat használja, ezért az ASS stílus-szintaxis működik
- `PrimaryColour=&HFFFFFF&` fehér betű, `BackColour=&H80000000&` félig-átlátszó fekete háttér
- `BorderStyle=3` opaque box stílust ad, `Outline=1` 1px körvonalat — ezzel a felirat olvasható minden hátteren
- `MarginV=60` 60 pixelre tolja fel a feliratot az aljától, hogy ne csússzon ki a lejátszó kontrolljaiból

Ha szín-kiemelést akarsz a fontos szavakon (a YouTube short-okon megszokott stílus), akkor a `.srt` helyett `.ass` fájllal dolgozz, és a `\c&HFFFF00&` inline tag-ekkel színezd a szavakat.

## Stripe Payment Link — konfigurációs lista

Manuális UI-folyamat a `dashboard.stripe.com → Payment Links → Új link` menüben:

1. **Termék létrehozása** (egyszer, az első linknél):
   - Név: pl. „Adminmentes vállalkozás 30 nap alatt"
   - Leírás: max 80 karakter, ami a checkout-on jelenik meg
   - Kép: 256x256 px JPG (a kurzus borító)

2. **Ár-modell:**
   - **Egyszeri** (`one_time`) — ajánlott induláshoz
   - **Subscription** — havi/negyedéves, ha hosszabb hozzáférést adsz

3. **Beállítások:**
   - Currency: `HUF`
   - Tax behavior: `inclusive` (magyar ÁFA)
   - Success URL: `https://[a-saját-domained]/koszonjuk?session_id={CHECKOUT_SESSION_ID}` — a `{CHECKOUT_SESSION_ID}` egy Stripe placeholder, futáskor cserélődik
   - Custom fields (opcionális): „Cégnév" és „Adószám" — ha céges vásárlókat is akarsz

4. **Webhook** (a Kit-be küldéshez):
   - Endpoint: `https://[saját domain]/api/stripe/webhook`
   - Events: `checkout.session.completed`
   - A webhook a Kit API-jának küldi tovább a vásárló email-címét, ami beindítja a sequence-et (lásd lent)

A Payment Link előnye, hogy NEM kell saját szerver az induláshoz — a Stripe hostolja a checkout oldalt, csak egy URL-t kapsz, amit a landing oldalad CTA gombjába teszel.

## A 6. modul `landing.html` — kurzus-specifikus módosítások

A 6. modul `landing.html` mintáját másolod, és sor-szinten cseréled. A változtatások listája:

```
LINE  CHANGE
----  ------
hero h1     -> kurzus-cím (max 60 karakter)
hero alcím  -> 1 mondat a kurzus-magról (1. modulból)
hero CTA    -> "Beiratkozom" + href = Stripe Payment Link
section #2  -> 3-5 bullet, MIT kap a vásárló
              (NE feature-list — eredmény-stílus:
               „X órát visszanyersz hetente",
               „Az adminban 80%-kal kevesebb időt töltesz")
section #3  -> 2-3 lecke-cím + 1-1 mondat (curriculum-előzetes)
section #4  -> 1 idézet a saját pivot-pontodból
              (autenticitás-bizonyíték, NE testimonial)
section #5  -> ár-blokk + CTA megismétlése
footer      -> impresszum link, GDPR link
              (mindkettő kötelező magyar piacon)
```

A `landing.html` szerkezetét a 6. modul reference.md-je részletezi — itt csak a kurzus-specifikus változások listáját adjuk.

## Kit (ConvertKit) — sequence sablon (3 email magyarul)

A `Sequences → New sequence` menüben hozz létre egy `Kurzus belépő` szekvenciát az alábbi 3 emaillel:

### Email #1 — Azonnali (vásárlás után 0 óra)

```
Tárgy: Üdv a [kurzus címe] kurzuson — itt a belépőd

Szia [Keresztnév],

köszönöm, hogy beiratkoztál a [kurzus címe] kurzusra.
Itt a belépő-link, amit bármikor használhatsz:

[KURZUS_LINK]

Az első leckét érdemes egyben végignézni — kb.
10-12 perc, és a végére már megvan az első
gyakorlati lépés, amit el tudsz végezni.

Ha bármi nem világos, válaszolj erre az emailre —
közvetlenül hozzám érkezik, és 24 órán belül
visszaírok.

Üdv,
[Saját név]
```

### Email #2 — 3 nap múlva

```
Tárgy: Hogy haladsz a kurzussal?

Szia [Keresztnév],

3 napja kezdted a [kurzus címe] kurzust.
Hol tartasz?

A leggyakoribb pont, ahol a tanulók megakadnak,
a [konkrét lecke neve] — ha most ott vagy és
valami nem tiszta, írd meg, mi az, és az
emailedre konkrét válasszal jövök vissza.

Egy tipp, ami az 1. lecke után érdemes:
[1 mondatos gyakorlati tipp, amit csak az 1.
lecke kontextusában érthet meg]

Üdv,
[Saját név]
```

### Email #3 — 7 nap múlva

```
Tárgy: Egy hét után — és egy kérés tőled

Szia [Keresztnév],

egy hete vagy a kurzuson. Mostanra már látnod
kell a saját adataidban a változást.

Két dolgot kérek tőled:

1) Ha valami nem áll össze, írd meg —
   most még a kurzus közben tudunk rajta finomítani.

2) Gondolkozz két emberen, akinek pont ott áll
   a feje, ahol Te álltál egy hete. Ha eszedbe
   jut valaki, küldd át nekik a kurzus-linkjét,
   vagy írj nekem — felveszem velük a kapcsolatot.

A kettes szám szándékos. Nem „valaki" — kettő
konkrét ember, akinek ez most tényleg fáj.

Üdv,
[Saját név]
```

## Tipikus hibák

- **Hangzaj a felvételen:** USB mikrofon 10-15 cm-re a szájtól, NE a billentyűzet előtt. Az OBS-ben `Noise Suppression (RNNoise)` filter felrakása az audio-trackre.
- **Túl gyors beszéd:** a Whisper magyar transzkripció minősége csökken 180+ szó/perc tempó felett. Ha túl gyorsan beszélsz, fékezz tudatosan — vagy a felvétel végén olvasd be a hosszabb listákat lassabban.
- **OBS source layout:** ha `Display Capture` és `Window Capture` keveredik, a felvétel becsomagolja a teljes képernyőt — ezt szándékosan szabd ki egy konkrét forrásra (Window Capture a böngészőre, ha azt mutatod).
- **FFmpeg formátum-konfliktus:** ha a `-c copy` és a `-filter_complex` ütközik (filter használat újrakódolást igényel), kifejezetten add meg az `-c:v libx264` és `-c:a aac` flag-eket. A skill mindig így generálja a parancsot.
- **Stripe success URL hiba:** ha a `success_url` placeholder-ját (`{CHECKOUT_SESSION_ID}`) elfelejted bekapcsolni, a köszönő-oldal nem fogja tudni, ki vásárolt. A Kit webhook ettől függetlenül elindul, de a köszönő-oldal nem tud személyre szabott üzenetet mutatni.
- **Felirat-burn-in fontméret:** 1080p-n a 22pt Arial olvasható mobilon és asztalon is — kisebb betűt ne használj, akkor sem, ha „elegánsabbnak" tűnik a desktop-előnézetben.

## A digitális kurzusok 4 típusa

Az első digitális termékednél a legnagyobb hiba, hogy túl nagy kurzussal indulsz. A tapasztalatom szerint elég egy kicsi, fókuszált megoldással kezdeni — és validálni, hogy van-e rá igény. Az alábbi 4 típus növekvő méretben mutatja, mi a logikus út.

### 1) Workshop Course — a leggyorsabb validáció
- **Időtartam:** 1-2 órás élő vagy felvett tréning
- **Ár:** 50-200 USD
- **Cél:** kideríteni, hogy az emberek valójában érdeklődnek-e a téma iránt
- **Tipikus eset:** egy 57 dolláros, mindössze 60 perces tréning 1383 dollárt hozott — ezzel validálta, hogy érdemes nagyobb kurzust építeni rá
- **Kulcsszó:** kísérleti labor, NEM „kicsi". Ha veszik → validált ötlet. Ha nem → ingyen kaptál piaci visszajelzést.

### 2) Starter Course — az „első 5 lépés"
- **Ár:** 100-200 USD
- **Cél:** valakit elindítani a témában, hogy ne vesszen el a részletekben
- **Tipikus eset:** egy 247 USD-os kurzus első launch-on 5858 USD bevételt hozott
- **Kulcsszó:** nem kell mindent tanítani — csak a kezdő lépésekre fókuszálsz, gyors készülés, gyors bevétel.

### 3) Spotlight Course — a legjobb első kurzus
- **Ár:** 200-500 USD
- **Cél:** egyetlen témát mélyen, részletesen kibontasz
- **Egyensúly:** elég nagy, hogy értékes legyen — elég kicsi, hogy gyorsan elkészülj — elég fókuszált, hogy könnyű legyen eladni
- **Példák:**
  - „Hogyan készíts flash fotóból természetes fény hatásút" (fotós, 12 000 USD)
  - „Hogyan újítsd fel a fürdőszobát" (NEM az egész házat, csak a fürdőt)
  - „Hogyan tanulj angolul YouTube-ról" (nyelvtanár anyuka, első év: 100 000 USD)
- **Megjegyzés:** a fókusz a barátod. A legtöbb sikeres kezdő ezzel indul.

### 4) Signature Course — a teljes rendszer (csak később)
- **Ár:** 500-5000 USD
- **Cél:** teljes transzformáció A-tól Z-ig
- **Mikor érdemes építeni:** miután már tudod, mit akar a közönséged, milyen eredményt érnek el, milyen témák hiányoznak nekik
- **Tipikus eset:** egy soft skill kurzus első launchja 26 000 USD volt
- **Kulcsszó:** ne ezzel kezdj. Ide akkor érsz el, amikor van tapasztalatod kisebb kurzusokkal.

## Hogyan épül fel egy sikeres digitális kurzus 2025-ben

A 2025-ös piacon már nem elég egy „szép kurzus". Olyat kell létrehoznod, ami valódi eredményt ad, fókuszált, és pontosan ott segít, ahol a tanítványaid elakadnak. A legtöbb online kurzus csak „beszélő fej" — ez ma már kevés.

### A 4 kulcselem, ami a legtöbb kurzusból hiányzik

#### 1) Roadmap — világos útvonal
Lépés 1 → Lépés 2 → Lépés 3. A tanuló sosem kérdezi: „OK, most mit csináljak?" Ha a kurzusod után az első kérdés ez, a tartalom rosszul van strukturálva.

#### 2) Implementáció — megmutatja a hogyan-t
Nem csak elmélet, hanem:
- sablonok,
- példák,
- képernyőmegosztás,
- checklistek.

A tanuló ne csak megértse, hanem el is tudja végezni a feladatot.

#### 3) Support — támogatás
A legtöbb kurzusban SEMMI sincs ezen a fronton. Itt nyersz te, ha adsz:
- 8 hét Q&A-alkalom,
- Facebook-csoport,
- Slack vagy Skool kérdés-csatorna,
- email-támogatás konkrét időkereten belül.

#### 4) Accountability — elszámoltathatóság
Kis „pep talk" videókat küldesz oda, ahol a tanulók elakadnak. Ezért haladnak végig → ezért kapnak eredményt → ezért mesélik tovább.

### Miért érdemes az első kurzust élőben tartani?

Az első verziót NE vedd fel előre — tartsd élőben (Zoomon vagy Meeten). Miért?
- nincs vágás → hetek helyett napok alatt elkészülsz,
- azonnali visszajelzés → tudod, mi működik és mi nem,
- nagyobb értékérzet → könnyebb eladni magasabb áron,
- emberibb → többet adsz, jobban kötődnek a tanulók,
- 30 nap alatt elindítható.

Ez csak az első kör. Utána bármikor felveheted videóra, és ezt árulod „Spotlight Course" formában.

### A presell logika — hogyan kerüld el a „senki sem vette meg" rémálmot

A legnagyobb félelem: „Mi van, ha megcsinálom a kurzust, és nem veszi meg senki?" A megoldás: **presell** — először eladod, aztán készíted el.

A presell folyamata:
1. Meghirdeted a kurzust
2. Lefekteted a tanmenetet (csak címszavakban)
3. Cél: 10 fizető tanuló (féláron vagy kedvezménnyel)
4. Ha megvannak → validált a téma
5. Elkezded megtartani az élő alkalmakat
6. A tanulók visszajelzése alapján finomítod

Ezzel:
- nincs kockázat,
- nincs felesleges munka,
- van bevétel még a kész kurzus előtt.

### Összefoglalás — a teljes 2025-ös logika

1. **Kicsiben indulj** (Workshop / Starter / Spotlight Course)
2. **Adj igazi segítséget** (roadmap + implementáció + support + accountability)
3. **Élőben tartsd az első verziót**
4. **Preselld** — legalább 10 fizető tanulóval validálsz
5. **Csak ezután építhetsz Signature Course-t** a teljes transzformációra

Ez a logika illeszkedik a 7. modul Funnel-sorrendjéhez is: a Call Funnel-ben validált ajánlat → Spotlight Course → későbbi Signature Course. Ha a 9. modul lead-magnetjén már van email-listád, a presell email-küldéssel indítható.
