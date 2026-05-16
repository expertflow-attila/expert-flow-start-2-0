# 9. modul — Technikai referencia

## Markdown → PDF konverzió Pandoc-kal

### Telepítés (macOS)

```bash
brew install pandoc
brew install --cask basictex   # LaTeX motor a PDF-hez
```

### Alap-konverzió

```bash
pandoc lead-magnet.md -o lead-magnet.pdf
```

### Szebb tipográfiával (Inter font, A4, margók)

```bash
pandoc lead-magnet.md \
  -o lead-magnet.pdf \
  --pdf-engine=xelatex \
  -V mainfont="Inter" \
  -V geometry:margin=2.5cm \
  -V papersize=a4 \
  -V fontsize=11pt \
  -V linkcolor=blue
```

### Headless Chrome-mal (alternatíva, ha LaTeX bonyolult)

```bash
# Markdown → HTML
pandoc lead-magnet.md -o lead-magnet.html --standalone --css=style.css

# HTML → PDF Chrome-mal
google-chrome --headless --disable-gpu --print-to-pdf=lead-magnet.pdf lead-magnet.html
```

### Tipikus YAML metaadat-blokk a Markdown elejére

```yaml
---
title: "A 7 lépéses XYZ útmutató"
author: "[Saját név]"
date: "2026-04"
geometry: margin=2.5cm
mainfont: Inter
linkcolor: blue
---
```

## Kit Form HTML-jének integrálása

A Kit „Embed" fülén kapsz egy HTML-t, ami valahogy így néz ki:

```html
<form action="https://app.kit.com/forms/XXXXXXX/subscriptions"
      class="seva-form formkit-form"
      method="post"
      data-sv-form="XXXXXXX"
      data-uid="abc123"
      data-format="inline">
  <div class="formkit-field">
    <input class="formkit-input"
           name="email_address"
           placeholder="email@pelda.hu"
           required
           type="email" />
  </div>
  <button class="formkit-submit" type="submit">
    Kérem a PDF-et
  </button>
</form>
```

A webhelyen (Tailwind-es példa):

```html
<section id="lead-magnet" class="py-16">
  <div class="max-w-2xl mx-auto px-6 text-center">
    <h2 class="text-2xl font-bold mb-4">
      Töltsd le: A 7 lépéses XYZ útmutató
    </h2>
    <p class="text-gray-600 mb-6">
      5 perc olvasás, 7 konkrét lépés. Add meg az email-címedet, és perceken belül a postaládádban.
    </p>

    <!-- IDE jön a Kit form HTML-je -->

    <p class="text-xs text-gray-500 mt-4">
      Heti 1 email maximum, bármikor leiratkozhatsz.
    </p>
  </div>
</section>
```

## Az 5 emailes welcome sorozat — szövegsablon

A `prompts.md` 9.3 promptja generálja a saját verziódat. Az alábbi a vázsablon, amit a Kit Sequences-ben használhatsz.

### Email 1 — azonnal (feliratkozás után)

**Tárgysor:** „Itt a [PDF cím]"

```
Szia,

Köszönöm, hogy feliratkoztál — itt a PDF, amit ígértem:
[link a Drive-ra]

5 perc olvasás, 7 lépés. Ha végigviszed, a hét végére [konkrét eredmény].

Pár szó rólam: [1 mondat — ki vagy, mit csinálsz, miért te írod ezt].

A következő napokban néhány emailt küldök még — amiket a [PDF-ben]
nem fért bele. Ha bármikor sok lesz, egy kattintással leiratkozhatsz.

Üdv,
[Név]
```

### Email 2 — 2 nap múlva (saját pivot-pont)

**Tárgysor:** „Amikor rájöttem, hogy [konkrét helyzet]"

```
Szia,

Egy rövid történet — pár éve [konkrét helyzet]. Hónapokig próbáltam
[mit próbáltál], és [mi nem működött].

Aztán [konkrét felismerés]. Ez volt az a pillanat, amikor [mi változott meg].

Ezt azért írom le, mert ha most ott állsz, ahol én álltam akkor —
nem te vagy a hibás. A módszer, amit eddig használtál, nem rád lett tervezve.

A következő emailben arról írok, mi a leggyakoribb tévhit a [területeden],
és mit gondolok erről.

Üdv,
[Név]
```

### Email 3 — 4 nap múlva (leggyakoribb tévhit)

**Tárgysor:** „A legtöbben azt hiszik, [tévhit] — pedig"

```
Szia,

A [területeden] van egy elterjedt tévhit: [konkrét állítás].

Ezt látom napi szinten — [konkrét helyzet, amikor találkozol vele].

Ami a valóság: [a saját álláspontod, 2-3 mondat]. Ez nem mindenkinek
kellemes hír — de aki elfogadja, [konkrét eredmény].

Holnapután küldök egy konkrét tippet, amit a PDF-be NEM tettem bele.

Üdv,
[Név]
```

### Email 4 — 7 nap múlva (konkrét tipp)

**Tárgysor:** „Egy lépés, amit ma este meg tudsz csinálni"

```
Szia,

Egy konkrét tipp, amit a PDF-be nem fért bele:

[1 mondatos tipp].

Hogyan csináld: [3-5 sor konkrét lépés].

Ha ma este 20 percet rászánsz, [konkrét eredmény holnap reggelre].

A következő emailben — ami pár nap múlva jön — felteszek egy kérdést.

Üdv,
[Név]
```

### Email 5 — 10 nap múlva (meghívó konzultációra)

**Tárgysor:** „Beszélgessünk 20 percet?"

```
Szia,

Az elmúlt két hétben küldtem neked négy emailt — a PDF-et, a sajátomat,
egy tévhitet és egy tippet. Ha bármelyik megszólított, érdekelne, hol tartasz.

Foglalj egy 20 perces beszélgetést itt: [Cal.com link]

Nincs előadás, nincs prezentáció — kérdezek, hallgatok, és ha tudok
segíteni, mondom, hogyan. Ha nem tudok, azt is megmondom.

Vagy ha most nem alkalmas, semmi baj — a heti emailek mennek tovább,
és bármikor visszaírhatsz.

Üdv,
[Név]
```

## Tipikus hibák

- A PDF túl design-os: Canva-szerű képek, sok színes elem — egyszerű, jól tördelt szöveg jobban hat
- A welcome-emailek HTML-template-tel mennek (gomb, kép, aláírás-blokk) — egyszerű plain-text email magasabb megnyitási rátát ad kezdő listáknál
- A vég-CTA túl nyomulós („foglalj MOST", „limitált helyek") — kérdés-jellegű meghívás működik jobban
- A Kit form gomb-szövege „feliratkozom" — pontosabb az „Kérem a PDF-et", mert konkrét cserét ír le
- A PDF Drive-link nem „bárki, akinek a linkje van" jogosultsággal megy — a feliratkozó nem éri el, és visszapattan

## Welcome-sorozat: konkrét sablon

Ez a sorozat élesben fut a Solo Business listán — minden landing page-ről érkező feliratkozó ezt kapja. A `prompts.md` 9.3 promptjának „kitöltött" verziója, magyar piacra hangolva. Másold a Kit Sequences-be, írd át a `{{first_name}}`, `{{lead_magnet_neve}}`, `{{download_link}}` és `{{survey_link}}` változókat a saját értékeidre.

**Tag:** `expert-flow-welcome`
**Cél:** általános welcome, lead magnet kézbesítés, bizalomépítés
**Trigger:** bármely landing page-ről érkező feliratkozás
**Küldési ütemezés:** 0., 2., 4., 6., 8. nap

### Email 1 — Day 0 (azonnal)

**Tárgy:** Tessék, itt a {{lead_magnet_neve}} + egy meglepetés
**Preview:** Köszönöm, hogy csatlakoztál — indulhat a közös munka!

```
Szia {{first_name}}!

Nagyon örülök, hogy itt vagy.

Nem húzom az időt — tessék, amit ígértem:

[{{lead_magnet_neve}} letöltése]({{download_link}})

De mielőtt megnyitnád, hadd mutatkozzak be 30 másodpercben:

Nagy Attila vagyok, a Solo Business alapítója. Olyan AI rendszereket
építek, amik a vállalkozók helyett dolgoznak — miközben ők az
ügyfelekre koncentrálhatnak.

Nem vagyok AI guru és nem ígérek csodát. Amit csinálok:
- Ügyfélszerzés autopilot módban — a rendszer keres, szűr, kapcsolatot teremt
- Ügyfélkezelés — automatikus follow-up, emlékeztetők, számlázás
- Háttérműveletek — riportok, adminisztráció, elemzés — emberi beavatkozás nélkül

A következő napokban küldök neked pár praktikus tippet, amit azonnal
használni tudsz a vállalkozásodban. Semmi elmélet — csak ami működik.

Ha bármi kérdésed van, válaszolj erre az emailre. Tényleg olvasom.

Üdv,
Attila

P.S. — Ha a {{lead_magnet_neve}} hasznos volt, a következő emailben
mutatok valamit, amivel még több időt spórolhatsz.
```

### Email 2 — Day 2

**Tárgy:** 3 AI trükk amivel ma 2 órát spórolsz
**Preview:** Ezeket bárki beállíthatja 15 perc alatt — mutatom hogyan.

```
Szia {{first_name}}!

Tegnap elkezdtél ismerkedni az AI automatizációval. Ma mutatok
3 dolgot, amit azonnal kipróbálhatsz — és mindegyik működik:

1. Automatikus emailválasz-vázlat (2 perc beállítás)
Ha kapsz egy ügyfél emailt, az AI feldolgozza és javasol egy
választ. Te csak jóváhagyod.
Eszköz: ChatGPT + Gmail, vagy egy egyszerű Make.com automatizáció

2. Meeting összefoglaló percek alatt (5 perc beállítás)
Rögzíted a hívást, az AI kivonatol: ki mondott mit, mik a teendők,
mikor a következő lépés.
Eszköz: Otter.ai vagy Fireflies (ingyenes verzió is van)

3. Social media poszt ötletek a piaci trendekből (10 perc beállítás)
Az AI figyeli az iparágadat és javasol posztokat, amik rezonálnak
a célközönségeddel.
Eszköz: Perplexity + Canva AI

Ezek egyenként apróságok — de együtt heti 8-10 órát spórolnak.

A következő emailben megmutatom, hogyan kapcsoltam össze ezeket
egy rendszerré a saját vállalkozásomban. Az eredmény meglepő volt.

Üdv,
Attila
```

### Email 3 — Day 4

**Tárgy:** Hogyan csinálom: a teljes AI rendszerem belülről
**Preview:** Átlátható, nem bonyolult — és te is felépítheted.

```
Szia {{first_name}}!

Megígértem, hogy megmutatom a saját rendszeremet. Tessék:

Reggel 8:00 — Ügyfélszerzés (emberi beavatkozás nélkül)
Amíg alszom, a rendszerem:
- Átnézi a LinkedIn-t és a Google-t a célközönségemben
- Kiválogatja azokat, akik passzolnak a szolgáltatásaimhoz
- Személyre szabott üzenetet készít elő mindegyiknek

Délelőtt — Ügyfélkezelés (automatikus)
- Az új érdeklődők automatikusan kapnak egy üdvözlő emailt
- A meglévő ügyfelek emlékeztetőt a következő lépésekről
- A CRM frissül: ki hol tart, kivel kell foglalkozni

Este — Háttérműveletek (riportok és elemzés)
- Napi összegzés: hány lead jött, hány ajánlat ment ki, mennyi bevétel
- Pénzügyi áttekintés: számlák, előfizetések, kintlévőségek
- Javaslatok: mit kellene holnap másképp csinálni

Ez nem science fiction. Ez 6 AI ügynök, akik együtt dolgoznak.

Nem azt mondom, hogy neked is pontosan ezt kell csinálnod. De
a gondolkodásmód — hogy a rendszer dolgozik helyetted — az
bármelyik vállalkozásra alkalmazható.

A következő emailben szeretnék valamit kérni tőled. Cserébe
adok valamit, ami szerintem nagyon hasznos lesz.

Üdv,
Attila
```

### Email 4 — Day 6

**Tárgy:** Segíts 2 percben — cserébe küldök valamit értékeset
**Preview:** 3 kérdés + egy meglepetés, ami megéri

```
Szia {{first_name}}!

Van egy kérésem — 2 percet vesz igénybe, cserébe küldök neked
valamit, amit nem osztok meg nyilvánosan:

[Töltsd ki ezt a 3 kérdéses felmérést]({{survey_link}})

Miért? Mert szeretném pontosan tudni, mivel küzdesz — hogy a
tartalmaimat, szolgáltatásaimat neked szabhassam.

Cserébe küldök:
„AI Automatizációs Roadmap" — egy személyre szabott útmutató,
ami megmutatja, milyen sorrendben érdemes automatizálni a
vállalkozásod területeit. Nem általános — a te válaszaid alapján
készül.

A 3 kérdés:
1. Mi a legnagyobb időrabló a vállalkozásodban?
2. Melyik területen szeretnél először automatizálni?
   (ügyfélszerzés / ügyfélkezelés / háttérműveletek)
3. Mi a legnagyobb félelmed az AI-val kapcsolatban?

{{survey_link}}

A válaszaid bizalmasak és kizárólag arra használom, hogy jobb
tartalmat készítsek neked.

Holnapután jön az utolsó emailem ebben a sorozatban — és szeretném
megköszönni, hogy itt voltál.

Üdv,
Attila
```

### Email 5 — Day 8

**Tárgy:** Köszönöm — és egy meghívás
**Preview:** Ha eddig hasznos volt, ami jön, az még jobb lesz.

```
Szia {{first_name}}!

Köszönöm, hogy végigolvastad ezt az 5 emailt. Remélem, hasznos
volt — és talán egy-két dolgot már kipróbáltál.

Rövid összefoglaló, amit tanultál:
- 3 AI trükk amivel azonnal időt spórolhatsz
- Hogyan épül fel egy teljes AI automatizációs rendszer
- A gondolkodásmód: a rendszer dolgozik — te stratégiát alkotsz

Mi a következő lépés?

Ha úgy érzed, hogy a vállalkozásodban is lenne helye az
automatizációnak — beszélgessünk róla.

Nem sales pitch — egy 15 perces ingyenes konzultáció, ahol:
- Megnézzük, hol áll most a vállalkozásod
- Azonosítjuk, hol lehetne automatizálni
- Készítünk egy tervet a következő 30 napra

Foglalj egy időpontot itt:
https://cal.com/attila-nagy-8uefco/ingyenes-ismerkedo

Ha most nem aktuális, semmi gond. Maradunk kapcsolatban — időnként
küldök hasznos tippeket és frissítéseket.

Bármikor írhatsz erre az emailre, ha kérdésed van.

Sok sikert a vállalkozásodhoz!

Üdv,
Attila

Solo Business — AI automatizáció vállalkozóknak
```

## Kit (ConvertKit) setup-checklist

Ez az élő setup-folyamat, amit követtem, amikor a 4 sorozatot beállítottam Kit-ben. Akkor használd, amikor a sablonjaidat tényleg fel akarod tölteni.

### 1. Sequence létrehozás (minden sorozathoz)

1. Kit dashboard → **Sequences** → **New Sequence**
2. Adj nevet (pl. „Solo Business Welcome — Üdvözlő sorozat")
3. Adj hozzá 5 emailt a megfelelő sablonból:
   - Email 1: Day 0 (azonnal)
   - Email 2: Day 2
   - Email 3: Day 4
   - Email 4: Day 6
   - Email 5: Day 8

### 2. Tag-ek (sorozatonként egy)

A 4 sorozathoz 4 külön tag, hogy a landing page form melyik sequence-be küldje a feliratkozót:

- `expert-flow-welcome`
- `ai-kihivas-5nap`
- `ugyfelszerzes-autopilot`
- `vallalkozas-indito`

### 3. Automation szabályok (minden sorozathoz)

Kit → **Automations** → **New Automation**

```
TRIGGER: Tag hozzáadva → [sorozat tag neve]
ACTION: Add to Sequence → [sorozat neve]
```

### 4. Landing page → Tag → Sequence összekapcsolás

A landing page form submit → tag hozzáadva → automation trigger → sequence elindul.

Minden landing page-nek saját embed form kell:

1. Kit → **Forms** → **New Form** → **Embed**
2. Adj nevet (pl. „Solo Business Welcome Form")
3. A form action-ben állítsd be a tag-et
4. Másold ki az embed kódot, illeszd be a landing page-be

### 5. Kérdőív integrálás

A 4. emailben lévő kérdőívekhez 3 opció:

- **Opció A:** Google Forms → válaszok Google Sheets-be → Apps Script script
- **Opció B:** Typeform → webhook → saját endpoint
- **Opció C:** Saját form a landing page-en → Sheets vagy egyedi tárolás

A `{{survey_link}}` változót cseréld ki a valódi kérdőív URL-re.

### 6. Lead magnet fájlok

Minden sorozathoz egy letölthető PDF (a 9. modul promptjaival generálva):

- [ ] Welcome: általános bemutatkozó PDF
- [ ] AI Kihívás: AI Automatizációs Starter Kit (prompt gyűjtemény + checklist)
- [ ] Ügyfélszerzés: Ügyfélszerzési Checklist (15 lépés)
- [ ] Vállalkozás Indító: Blueprint PDF (10 lépés)

A `{{download_link}}` változót cseréld ki a valódi URL-re (Google Drive megosztott link, vagy saját hosting). Ellenőrizd, hogy a Drive-link „bárki, akinek a linkje van" jogosultsággal van megosztva.

### 7. Cal.com integráció

Az utolsó email Cal.com linkjét cseréld a sajátodra:

- Welcome és Vállalkozás Indító sorozat: ingyenes ismerkedő (15 perc)
- Ügyfélszerzés sorozat: hosszabb konzultáció (30 perc)

### 8. Lista-takarítás (ha már van Kit fiókod)

Ha régebbi Kit fiókod van, érdemes először rendet tenni:

- **Megtartani:** üdvözlő email, evergeen hírlevél, kurzus-érdeklődő sequence-ek
- **Archiválni:** minden „Copy of Example..." sablonból maradt sequence
- **Törölni:** teszt sequence-ek

A tageknél is csak a fenti 4 + egy „prospect" tag szükséges induláshoz.
