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

# HTML → PDF Chrome-mal (macOS-en a Chrome teljes elérési útjával)
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu \
  --print-to-pdf=lead-magnet.pdf lead-magnet.html
```

### Tipikus YAML metaadat-blokk a Markdown elejére

```yaml
---
title: "A 7 lépéses XYZ útmutató"
author: "[Saját név]"
date: "2026-06"
geometry: margin=2.5cm
mainfont: Inter
linkcolor: blue
---
```

## Feliratkozó form integrálása a webhelyre

A fő útvonal a MailerLite: a beágyazható form kódját másold a lenti webhely-váz form-helyére. Ha a Kit alternatívát választottad, a Kit „Embed" fülén ilyesmi HTML-t kapsz:

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

    <!-- IDE jön a MailerLite (vagy Kit) form beágyazó kódja -->

    <p class="text-xs text-gray-500 mt-4">
      Heti 1 email maximum, bármikor leiratkozhatsz.
    </p>
  </div>
</section>
```

## Az 5 emailes welcome sorozat — szövegsablon

A `prompts.md` 9.3 promptja generálja a saját verziódat. Az alábbi a vázsablon, amit a MailerLite Automation-ben (vagy Kit-ben a Sequences alatt) használhatsz.

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

Pár nap múlva küldök egy konkrét tippet, amit a PDF-be NEM tettem bele.

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
- A form gomb-szövege „feliratkozom" — pontosabb az „Kérem a PDF-et", mert konkrét cserét ír le
- A PDF Drive-link nem „bárki, akinek a linkje van" jogosultsággal megy — a feliratkozó nem éri el, és visszapattan

## Welcome-sorozat: kitöltött példa (az én listám)

A `prompts.md` 9.3 promptjának kitöltött verziója — a saját feliratkozóim ezt a szerkezetet kapják. Ne másold szó szerint: a te pivot-pontod és a te tévhited kell bele. Arra való, hogy lásd, milyen hosszú és milyen hangú egy kész levél. A `{{first_name}}` változót a MailerLite tölti ki, a többit te írod át.

**Csoport:** a lead magnet formhoz kötött csoport
**Trigger:** a feliratkozó belép a csoportba
**Küldési ütemezés:** 0., 2., 4., 7., 10. nap (a modul táblázata szerint)

### Email 1 — Day 0 (azonnal): a PDF + 1 mondat rólam

**Tárgy:** Itt az ígért PDF

```
Szia {{first_name}},

köszi, hogy feliratkoztál — itt a PDF, amit ígértem:
[letöltési link]

Rövid olvasmány, konkrét lépésekkel. Ha végigviszed, a hét végére
[konkrét eredmény, amit a PDF ígér].

Egy mondat rólam: Nagy Attila vagyok, AI-rendszereket építek magyar
egyéni vállalkozóknak — és közben nyilvánosan dokumentálom, mit tanulok.

A következő két hétben még négy levelet küldök, mindegyikben egy
konkrét dolog. Ha sok lenne, egy kattintással leiratkozhatsz.

Üdv,
Attila
```

### Email 2 — Day 2: a pivot-pontom

**Tárgy:** Amikor rájöttem, hogy fordítva csinálom

```
Szia {{first_name}},

egy rövid történet. Amikor elkezdtem AI-eszközökkel dolgozni, azt
hittem, a technika lesz a nehéz rész. Hónapokig eszközöket
építettem és próbálgattam — és közben egyetlen ügyfelem sem lett.

A fordulat az volt, amikor megfordítottam a sorrendet: előbb
beszélgetések valódi emberekkel, és csak utána rendszer. Azóta
minden, amit építek, egy konkrét beszélgetésből indul.

Ezt azért írom le, mert ha most ott tartasz, hogy eszközöket
gyűjtesz ügyfelek helyett — ismerős terep. Nem veled van baj,
csak fordítva van összerakva a sorrend.

A következő levélben egy tévhitről írok, amivel hetente találkozom.

Üdv,
Attila
```

### Email 3 — Day 4: a leggyakoribb tévhit

**Tárgy:** „Ehhez fejlesztőnek kell lenni" — nem

```
Szia {{first_name}},

a leggyakoribb mondat, amit vállalkozóktól hallok az AI-ról:
„ez nekem túl technikai, ehhez fejlesztőnek kell lenni."

Értem, honnan jön — a legtöbb AI-tartalom tényleg úgy néz ki,
mintha programozóknak írták volna.

Amit én látok a gyakorlatban: a munka nagyobb része nem technika,
hanem döntés. Mit automatizálj, mit ne, és hol maradjon ember a
folyamatban. Ezekre a kérdésekre egy könyvelő vagy egy fotós
pontosabban tud válaszolni a saját területén, mint egy fejlesztő.

A következő levélben küldök egy konkrét lépést, amit egy este
alatt ki tudsz próbálni — kód nélkül.

Üdv,
Attila
```

### Email 4 — Day 7: egy tipp, ami a PDF-ből kimaradt

**Tárgy:** Egy lépés, amit ma este meg tudsz csinálni

```
Szia {{first_name}},

egy konkrét tipp, ami a PDF-be nem fért bele:

mielőtt bármit automatizálnál, írd le egy listába, mire ment el
a múlt heted. Nem becslés — nézd végig a naptárad és a postaládád.

Hogyan csináld: nyiss egy üres dokumentumot, és írj össze minden
ismétlődő feladatot, ami 15 percnél többet vitt el. Email-típusok,
egyeztetések, adminisztráció. A lista vége felé általában ott a
2-3 tétel, amivel érdemes kezdeni.

Ha ma este 20 percet rászánsz, holnap reggel pontosan látod,
hol csúszik el az időd.

A következő levelemben — pár nap múlva — egy kérdéssel jövök.

Üdv,
Attila
```

### Email 5 — Day 10: meghívó beszélgetésre

**Tárgy:** Beszélgessünk 20 percet?

```
Szia {{first_name}},

az elmúlt két hétben küldtem neked egy PDF-et, egy történetet,
egy tévhitet és egy tippet. Ha bármelyik megszólított, érdekelne,
hol tartasz most.

Foglalj egy 20 perces beszélgetést itt:
https://cal.com/attila-nagy-8uefco/ingyenes-ismerkedo

Nincs előadás és nincs nyomás — kérdezek, hallgatok, és ha tudok
segíteni, megmondom, hogyan. Ha nem tudok, azt is megmondom.

Ha most nem alkalmas, semmi gond — időnként írok majd, és
bármikor válaszolhatsz erre a levélre.

Üdv,
Attila
```

## Kit (ConvertKit) setup-checklist — alternatíva

A fő útvonal a MailerLite (lépések a 9. modul 03. leckéjében: csoport → form → beágyazás → Automation csoport-triggerrel). Az alábbi checklist akkor kell, ha a Kit alternatívát választottad. A logika ugyanaz, csak a nevek mások: a csoportot itt tag-nek, az Automation-t Sequence + Automation párosnak hívják.

### 1. Sequence létrehozás

1. Kit dashboard → **Sequences** → **New Sequence**
2. Adj nevet (pl. „Welcome — [a lead magneted neve]")
3. Adj hozzá 5 emailt a fenti sablonból, a modul időzítésével:
   - Email 1: Day 0 (azonnal)
   - Email 2: Day 2
   - Email 3: Day 4
   - Email 4: Day 7
   - Email 5: Day 10

### 2. Tag létrehozás

Egy tag elég (pl. `welcome-pdf`) — ez köti össze a formot a sorozattal.

### 3. Automation szabály

Kit → **Automations** → **New Automation**

```
TRIGGER: Tag hozzáadva → welcome-pdf
ACTION: Add to Sequence → Welcome — [a lead magneted neve]
```

### 4. Form → Tag → Sequence összekapcsolás

A lánc: form kitöltése → tag hozzáadva → automation elindítja a sequence-t.

1. Kit → **Forms** → **New Form** → **Embed**
2. Adj nevet (pl. „Lead magnet form")
3. A form beállításainál add hozzá a tag-et
4. Másold ki az embed kódot, és illeszd a webhelyed lead magnet szekciójába (9.2 prompt)

### 5. Ellenőrzés élesítés előtt

- [ ] A PDF Drive-linkje „bárki, akinek a linkje van" jogosultságú
- [ ] Az 1. email letöltési linkje a valódi URL-re cserélve
- [ ] Az 5. email Cal.com linkje a sajátodra cserélve
- [ ] Tesztcímmel feliratkoztál, és megjött az 1. levél
