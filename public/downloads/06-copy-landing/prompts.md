# 6. modul — Promptok

## 6.1 — Prompt a 01. leckéhez (Hero-headline tíz variációban)

Ez a prompt tíz hero-headline variációt generál, különböző érzelmi keretekben. Tedd be az 1-3. modul outputjait a megjelölt helyekre. A nyertest a webhelyre, a maradékot a swipefile-odba (későbbi email-tárgyba, hirdetésbe).

```
Az ajánlatom (3. modul, 1 mondat): [INPUT]
Az avatárom (2. modul, 1 mondat): [INPUT]
A pivot-pontom (1. modul, 1 mondat): [INPUT]

Generálj 10 hero-headline variációt magyarul, mindegyik más érzelmi keretben:

1. Eredmény-fókuszú állítás (mit kap az olvasó konkrétan)
2. Kérdés-stílus (az olvasó saját kérdése a fejéből)
3. Sürgősség (időbeli keret, miért most)
4. Biztonság (kockázat-megfordítás, garancia-érzet)
5. Kíváncsiság (info-gap, „a módszer, amiről…")
6. Félelem (mi történik, ha nem cselekszik)
7. Vágy (a kívánt jövő-állapot egy mondatban)
8. Kontraszt („nem X, hanem Y")
9. Konkrét szám (mérhető eredmény)
10. Egyszerűség („egy A4 elég" / „2 óra alatt")

Mindegyik headline maximum 12 szó. Zero emoji, zero hyped szó (revolúció, áttörés, mind-blowing).
A végén jelöld meg, melyik 3 kerete szerinted a legerősebb az adott avatárhoz, és miért.
```

## 6.2 — Prompt a 02. leckéhez (Garancia, FAQ, érték-stack)

Ez a prompt megírja a garancia mondatot, a FAQ-t, és újrarendezi az érték-stacket weboldalra. Az `index.html`-edet vagy másold be, vagy add meg az aktuális szövegeket.

```
Az aktuális weboldalam szekciói:
- Ajánlat 1 mondatban: [INPUT]
- A 3 csomag és tartalmuk (3. modul output): [INPUT]
- Az avatár 3 fő ellenérve / félelme: [INPUT]

Írj nekem:

A) GARANCIA (1 mondat):
- Konkrét, nem általános („visszafizetem", „ingyen visszacsinálom", „nem fizetsz, ha…")
- A te szolgáltatásodnak megfelelően reális, NEM túlígéret
- Magyaros hang, nem coach-szagú

B) FAQ (5-7 kérdés-válasz):
- Csak az igazi ellenérvek, NEM filler („mennyi az ára" jó, „mi a véleményed az AI-ról" rossz)
- Válaszok max 3 mondat, őszinte, konkrét
- Egy kérdés legyen az árról, egy az időkeretről, egy a kockázatról

C) ÉRTÉK-STACK (a fő csomaghoz):
- Minden tétel külön bullet-pontban
- Mindegyik mellett konkrét piaci érték (Ft) ÉS hogy a csomagban benne van
- Összeadva érzékeltesse, hogy a csomagár alatta van a stack-értéknek
- 5-8 tétel maximum (több már spam-érzés)

Magyarul, dokumentáló hangon (nem hyped sales).
```

## 6.3 — Prompt a 03. leckéhez (Szolgáltatás-specifikus landing page)

Ez a prompt épít egy különálló `landing.html`-t Vercel-re, ami EGY konkrét szolgáltatásra fókuszál — egy konkrét akcióra hajt, és minden, ami nem azt szolgálja, lekerül.

```
Egy konkrét szolgáltatásomra építek külön landing oldalt:
- Szolgáltatás neve: [INPUT, pl. „30 perces ingyenes konzultáció"]
- A konkrét akció: [INPUT, pl. Cal.com foglalás]
- Cél-avatár (1 mondat): [INPUT]
- Az ígéret (mit kap az olvasó a CTA-ra kattintás után): [INPUT]

Készíts egy landing.html-t Tailwind CDN-ről, EGY oldalas, EGY akcióra fókuszáló:

Szekciók (kötött sorrend, NINCS menü, NINCS „rólam", NINCS „blog"):
1. Hero (headline + 1 mondatos sub + CTA gomb — semmi más a hero-ban)
2. „Mit kapsz" (3-4 bullet, konkrét outcome-okkal)
3. Egy mini-bizalom-szekció (1 mondat rólad + 1 referencia VAGY egy konkrét eredmény-szám)
4. Garancia (1 mondat)
5. FAQ (3-5 kérdés, csak ami a CTA-ra kattintás előtti utolsó ellenérv)
6. Második CTA (ugyanaz a gomb, ugyanaz a szín, mint a hero-ban)

Stílus:
- Sötét háttér, világos szöveg, egyetlen akcent szín
- Mobil-first, max-w-2xl (még szűkebb mint a fő weboldal — fókusz)
- Zero emoji, zero gradient
- A CTA gomb mindig látható: a hero-ban ÉS sticky bottom mobilon

A landing.html ugyanabba a GitHub repo-ba megy, és Vercel automatikusan deploy-olja a /landing-szolgaltatas-neve URL-re (ha a fájl neve pl. `szolgaltatas-neve.html`, akkor /szolgaltatas-neve URL-en érhető el).
```
