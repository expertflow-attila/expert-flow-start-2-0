# 6. modul — Technikai referencia

## Hero-headline keretrendszerek

### 1. Eredmény-fókuszú állítás
> „[Konkrét eredmény] [konkrét időkereten belül], [biztonsági feltétel]."
>
> Példa: „Két hét alatt élesben lesz a webhelyed, vagy ingyen visszacsinálom."

### 2. Kérdés-stílus
> „[Az olvasó belső kérdése a saját fejéből]?"
>
> Példa: „Évek óta tervezgeted, de még mindig nincs weboldalad?"

### 3. Sürgősség (időbeli keret)
> „[Konkrét időtáv] alatt [konkrét output] — [miért most]."
>
> Példa: „12 hét alatt élő vállalkozás — mire a piac megint megváltozik."

### 4. Biztonság (kockázat-megfordítás)
> „[Konkrét outcome], [garancia-elem] — [mi a kockázatod nulla]."
>
> Példa: „Élesben lesz a rendszered, vagy nem fizetsz semmit."

### 5. Kíváncsiság (info-gap)
> „A módszer, [amivel valami nem várt eredményt értem el / ahogy az X dolgot Y-ra cseréltük]."
>
> Példa: „A módszer, ahogy az ügyvédek 4 óra alatt élesítik a saját rendszerüket."

### 6. Félelem (mi történik, ha nem)
> „[Az olvasó jelen állapota] — [konkrét következmény, ha így marad]."
>
> Példa: „Még egy év szervezgetés ugyanazokkal a tools-okkal, ugyanaz az eredmény."

### 7. Vágy (a kívánt jövő-állapot)
> „[A kívánt állapot egy mondatban, jelen időben, az olvasó hangján]."
>
> Példa: „Reggel megnyitod a Gmail-t, és három új konzultáció-foglalás van."

### 8. Kontraszt
> „Nem [amitől félnek], hanem [amit valójában akarnak]."
>
> Példa: „Nem coach-utak. Egy működő rendszer."

### 9. Konkrét szám
> „[Mérhető szám] [konkrét egységben] — [konkrét outcome]."
>
> Példa: „8 szekció, 1 oldalon, 2 óra alatt — éles webhely."

### 10. Egyszerűség
> „[Ami komplikáltnak tűnik] — [egyetlen egyszerű dologra redukálva]."
>
> Példa: „Egy A4-es lap elég, hogy elkezdj vállalkozni."

## FAQ-sablon (5-7 kérdés)

A FAQ NEM filler — minden kérdés egy igazi ellenérv lefogása. Az alábbi sablon az 5-7 leggyakoribb mintát adja:

```
1. Ár-kérdés
   K: „Mennyibe kerül?"
   V: [Konkrét összeg, vagy „a csomagok az alábbi szekcióban"]

2. Időkeret-kérdés
   K: „Mennyi idő, mire látom az eredményt?"
   V: [Konkrét időkeret, dokumentáló hangon — „a tapasztalatom szerint"]

3. Kockázat-kérdés
   K: „Mi van, ha nem működik nekem?"
   V: [A garancia mondat, plusz 1 mondat — „ezt szerződésben rögzítjük"]

4. Alkalmasság-kérdés
   K: „Nekem is való ez, ha még csak gondolkodom a vállalkozáson?"
   V: [Konkrét válasz, kinek IGEN, kinek NEM — őszinte]

5. Verseny-kérdés
   K: „Miben különbözik [hasonló szolgáltatás]-tól?"
   V: [1 konkrét megkülönböztető tényező, NEM lekicsinylés]

6. Folytatás-kérdés
   K: „Mi van utána? Kell további támogatás?"
   V: [Tiszta válasz az utánkövetésről, ne ígérj túl]

7. Technikai-kérdés
   K: „Kell előzetes tudás / eszköz / fiók?"
   V: [Konkrét lista, mit hozzon magával]
```

## Érték-stack felépítés

Az érték-stack a 3. modulból jön — a webhelyre az alábbi formátumban kerül:

```
A [csomag neve] csomag tartalma:

1. [Fő szolgáltatás] — piaci érték: [Ft]
2. [Bónusz 1] — piaci érték: [Ft]
3. [Bónusz 2] — piaci érték: [Ft]
4. [Sablon / dokumentum / oktatóanyag] — piaci érték: [Ft]
5. [Utánkövetés / támogatás] — piaci érték: [Ft]

Összérték: [összeg] Ft
A te ára: [csomagár] Ft
```

A piaci értékek REÁLISAK legyenek — az olvasó fejben ellenőrzi, és ha túlzónak érzi, az egész oldal hitelét vesztheti.

## Landing.html struktúra (különálló oldal)

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{SZOLGALTATAS}} — {{VALLALKOZAS}}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#0a0a0a] text-[#e5e5e5] font-sans">

  <!-- 1. HERO (CSAK ennyi a fold-ben) -->
  <section class="max-w-2xl mx-auto px-6 pt-20 pb-12 text-center">
    <h1 class="text-3xl md:text-5xl font-bold">{{HERO_HEADLINE}}</h1>
    <p class="text-lg opacity-80 mt-4">{{HERO_SUB_1_MONDAT}}</p>
    <a href="{{CTA_LINK}}"
       class="inline-block mt-8 bg-[#7c3aed] text-white px-8 py-4 rounded text-lg">
      {{CTA_TEXT}}
    </a>
  </section>

  <!-- 2. MIT KAPSZ -->
  <section class="max-w-2xl mx-auto px-6 py-12 border-t border-white/10">
    <h2 class="text-2xl font-bold mb-6">Mit kapsz</h2>
    <ul class="space-y-3 text-lg opacity-90">
      <li>— {{OUTCOME_1}}</li>
      <li>— {{OUTCOME_2}}</li>
      <li>— {{OUTCOME_3}}</li>
      <li>— {{OUTCOME_4}}</li>
    </ul>
  </section>

  <!-- 3. MINI BIZALOM -->
  <section class="max-w-2xl mx-auto px-6 py-12 border-t border-white/10">
    <p class="text-base opacity-80 leading-relaxed">{{1_MONDAT_ROLAD}} {{1_REFERENCIA_VAGY_SZAM}}</p>
  </section>

  <!-- 4. GARANCIA -->
  <section class="max-w-2xl mx-auto px-6 py-12 border-t border-white/10 bg-white/5 rounded">
    <h2 class="text-xl font-bold mb-4">Garancia</h2>
    <p class="opacity-90">{{GUARANTEE_1_MONDAT}}</p>
  </section>

  <!-- 5. FAQ (csak 3-5 kérdés, ami a kattintás előtti utolsó ellenérv) -->
  <section class="max-w-2xl mx-auto px-6 py-12 border-t border-white/10">
    <h2 class="text-xl font-bold mb-6">Mielőtt foglalsz</h2>
    <details class="py-3 border-b border-white/10">
      <summary class="cursor-pointer">{{Q1}}</summary>
      <p class="opacity-80 mt-2">{{A1}}</p>
    </details>
    <!-- 3-5x ismételd -->
  </section>

  <!-- 6. ZÁRÓ CTA -->
  <section class="max-w-2xl mx-auto px-6 py-16 border-t border-white/10 text-center">
    <h2 class="text-2xl font-bold mb-6">{{CTA_HEADLINE_ZARO}}</h2>
    <a href="{{CTA_LINK}}"
       class="inline-block bg-[#7c3aed] text-white px-8 py-4 rounded text-lg">
      {{CTA_TEXT}}
    </a>
  </section>

  <!-- Sticky bottom CTA mobilon -->
  <div class="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#0a0a0a] border-t border-white/10">
    <a href="{{CTA_LINK}}"
       class="block w-full bg-[#7c3aed] text-white py-3 rounded text-center">
      {{CTA_TEXT}}
    </a>
  </div>

</body>
</html>
```

## Vercel többoldalas deploy

A landing.html ugyanabba a GitHub repo-ba megy, mint az index.html. Vercel automatikusan deploy-olja:

```
repo-mappa/
├── index.html        → tedneved.hu
├── konzultacio.html  → tedneved.hu/konzultacio
└── szolgaltatas.html → tedneved.hu/szolgaltatas
```

Push után 30 másodperc, és élesben van. Nem kell külön config.

## Tipikus copy-hibák

- **Túl sok jelző:** „a legjobb, leggyorsabb, legprofibb" — egy konkrét bizonyíték többet ér mint három jelző
- **Hyped szavak:** „revolúció", „áttörés", „forradalmi" — magyaros hangon kerüld
- **„Mi" helyett „te":** ne „mi segítünk neked", hanem „te elkészíted a saját…"
- **Általánosság:** „segítünk vállalkozóknak" rossz; „magyar szolgáltató egyéni vállalkozóknak" jó
- **Coach-szag:** „a megvalósult önmagad" típusú szövegek nem működnek a magyar piacon
- **Túl sok CTA:** egy oldalon legfeljebb 2 különböző CTA — több zavaró
- **Hosszú FAQ:** 5-7 kérdés elég; 15 kérdés azt jelenti, hogy a fenti szöveg gyenge

## Saját landing-példák — workshop-stílus

Ez a két landing-vázlat a saját toll-am — ezeket workshop-formátumra építettem (egyórás online esemény, 100 USD részvételi díj, konkrét sablonnal mint bónusz). Azért teszem ide őket, mert konkrétan láthatod, hogyan néz ki egy magyar nyelvű workshop-landing struktúrája, és ez hitelesebb, mintha „Amy Porterfield-fordítást" mutatnék. A tapasztalatom szerint a négy szekció (workshop előnyei → átalakulás → kifogások → CTA + részletek) magyarul jobban működik, mint a 8-szekciós klasszikus felépítés, mert egy 1 órás eseményre az olvasó nem akar 4 képernyőnyit görgetni a döntés előtt.

### Példa 1 — Weboldalkészítés workshop

**Cím + szlogen:**
> Hogyan készíts bizalomépítő weboldalt technikai tudás nélkül
>
> Egy hétvége alatt elindíthatod saját profi szakértői oldaladat.

**A workshop előnyei — Miről szól?**

Ebben az egyórás online workshopban végre megmutatom neked:
- Hogyan tervezz egyszerű, letisztult, szakmai hitelességet sugárzó weboldalt, kódolás nélkül.
- Milyen szakaszokra van feltétlenül szükséged, hogy látogatóból ügyfelet csinálj.
- Konkrét sablonokat kapsz, amivel órák helyett percek alatt elkészülhetsz.

**Milyen átalakulást kapnak a résztvevők?**

Készen állsz arra, hogy:
- Többé ne kelljen technikai akadályok miatt halogatnod?
- Egy hétvége alatt kész, ügyfélszerző weboldalad legyen?
- Magabiztosan oszd meg az oldaladat az érdeklődőiddel?
- Profi első benyomást kelts minden látogatódban?

**Milyen kifogásokat kell kezelned?**

- „Nem értek a technikához." → Nem kell értened. Könnyen érthető sablonokat kapsz, amikkel percek alatt dolgozhatsz.
- „Nincs rá időm." → Pont azt tanulod meg, hogyan készülhetsz el egyetlen hétvége alatt.
- „Túl bonyolultnak tűnik." → Lépésről lépésre mutatom meg, egyszerűen és érthetően.

**CTA + gyakorlati részletek**

- Időpont: február 1., csütörtök, 19:00 (Zoom)
- Részvételi díj: 100 USD
- Bónusz: azonnal használható weboldalsablon

> „Ez volt az első workshop, ami tényleg segített végre elkészíteni a weboldalam. Profi és egyszerű volt." — Anikó, Budapest

CTA: **Biztosítom a helyem a workshopra!**

### Példa 2 — Ügyfélszerző rendszer workshop

**Cím + szlogen:**
> Hogyan építs automatizált ügyfélszerző rendszert posztolás helyett
>
> Mindössze egy órában megmutatom, hogyan szerzel folyamatosan ügyfeleket.

**A workshop előnyei — Miről szól?**

Ebben az egyórás online workshopban megmutatom neked:
- Hogyan alakíts ki egyszerű ügyfélszerző rendszert, ami posztolás helyett dolgozik helyetted.
- Milyen konkrét lépésekkel automatizáld a folyamatokat a háttérben.
- Hogyan lesz az egyszeri érdeklődőkből rendszeres vásárló.

**Milyen átalakulást kapnak a résztvevők?**

Készen állsz arra, hogy:
- Soha többé ne kelljen egész nap a social medián posztolnod?
- Folyamatosan érkezzenek új érdeklődők a háttérből?
- Stabil, kiszámítható bevételed legyen?
- Rendszeresen juss el ideális ügyfeleidhez automatikusan?

**Milyen kifogásokat kell kezelned?**

- „Túl technikai." → Minden lépést mutatok, automatizált sablonokkal, hogy egyszerű legyen.
- „Sok idő kell hozzá." → Mindössze egy óra alatt át tudod látni a teljes rendszert, és másnap már használhatod is.
- „Nem vagyok technikai ember." → Nem baj. Pont azt tanulod meg, hogyan építhetsz könnyedén, technikai tudás nélkül rendszert.

**CTA + gyakorlati részletek**

- Időpont: február 1., csütörtök, 19:00 (Zoom)
- Részvételi díj: 100 USD
- Bónusz: ügyfélszerző automatizált rendszer-sablon

> „Hihetetlenül egyszerű volt felépíteni a rendszert. Másnaptól jöttek az új érdeklődők!" — Zoltán, Győr

CTA: **Biztosítom a helyem a workshopra!**

### Mit tanulj ezekből a saját mintákból

A 4-blokkos workshop-landing akkor működik, ha:
- Az ajánlat egyetlen 60-90 perces esemény, NEM egy nagy kurzus
- Az ár alacsony (50-200 USD között, „nem túl olcsó, de nem is komoly elköteleződés")
- A bónusz konkrét, letölthető tárgy (sablon, munkafüzet, checklist) — NEM „még egy videó"
- A vélemény egyetlen mondat + név + város — magyaros, hihető, NEM 5 csillagos amerikai stílus
- A CTA-szöveg cselekvő, első személyű („Biztosítom a helyem"), NEM utasító („Jelentkezz most")

Ha hosszabb kurzust vagy mentorshipet adsz el, NE ezt a 4-blokkos vázat használd — térj át a 8-szekciós klasszikus landing.html struktúrára, amit a fenti `landing.html` minta mutat.
