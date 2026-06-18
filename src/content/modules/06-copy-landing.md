---
lastReviewed: "2026-06-09"
---

# 6. modul · Értékesítési szövegírás és szolgáltatás-landing

> Copy-modellek, amiket olvastam — nem tanácsadás, hanem közvetítés. Plusz egy különálló landing oldal egy konkrét szolgáltatásra.

> **TL;DR** — Ezen a héten megírod azt a szöveget, ami valójában eladja a szolgáltatásodat, és építesz egy külön oldalt egy konkrét ajánlatra.
> - Megtanulod, miért a vevő saját mondataiból indul a legjobb főcím, és hogyan szeded ki ezeket a 2. modul jegyzeteiből
> - Megírod a weboldalad eladó szekcióit: a nyitó főcímet, a garanciát, a gyakori kérdéseket és az árad mögötti érték felsorolását
> - Építesz egy külön oldalt (landing) egyetlen szolgáltatásra, ahol nincs menü, csak egy gomb a következő lépésre
> - Egy egyszerű teszttel ellenőrzöd, hogy a szöveg érthető-e: 5 embernek megmutatod 10 másodpercre, és visszakérdezed, mit értettek

## Hol tartasz

Az 5. modulból él a weboldalad a saját domaineden, a hero-ban az egy-mondatoddal. A 2. modulból megvannak az interjú-jegyzeteid, a 3.-ból a csomagjaid. Ezen a héten a szöveg kezd el eladni.

## Mit építesz meg ezen a héten

A weboldal magában nem ad el — a SZÖVEG ad el. Ezt hívják **copy**-nak: értékesítési céllal írt szöveg, aminek egy dolga van — hogy az olvasó megtegye a következő lépést. Átlagos design erős copy-val több ügyfelet hoz, mint gyönyörű design üres szöveggel. A meglévő weboldalt (5. modul) erősebb szöveggel töltöd fel, plusz építesz egy különálló landing oldalt — konkrét akció kérésére.

A copy-szabályokat nem találtam ki — bevált modellek (copyhackers.com, swipefile, klasszikus direct response).

## 01. Vedd elő a 2. modul jegyzeteit

A hero-d legjobb mondata nem a tiéd — a vevőd mondta. Vedd elő az interjú-jegyzeteket (2. modul), és keresd a szó szerinti mondatokat.

Mit keresel bennük:

- **Fájdalom-mondatok** — „minden hónapban rettegek a NAV-tól", „nem merem kirakni a képet magamról"
- **Vágy-mondatok** — mit szeretne, a saját szavaival, nem a te szakzsargonoddal
- **Kifogás-mondatok** — „de mi van, ha…" — ezek mennek majd a FAQ-ba

Húzd ki a 3-5 legerősebbet egy külön listába. Ez a nyersanyagod a hét minden leckéjéhez. A vevő szavai mindig erősebbek, mint a te megfogalmazásod — ő a saját nyelvén ismeri fel magát. Ha ezt a lépést kihagyod, és fejből írod a hero-t, szinte biztosan a saját szakzsargonod jön ki — amit a vevő nem mond, és nem is keres.

**Próbáld ki most:** nyisd ki az interjú-jegyzeteidet, és húzd ki az első 3 mondatot, amiben idézőjelbe tehető vevő-megfogalmazás van.

## 02. Hero-headline tíz variációban

A hero-headline (első mondat) egyedül dönti el, marad-e az olvasó. Szabály: ne azt írd, mit csinálsz — írd, mit kap ő.

- Rossz: „Webfejlesztő vagyok 10 év tapasztalattal"
- Jó: „Két hét alatt élesben lesz a webhelyed, vagy ingyen visszacsinálom"

Claude Code-dal 10 variációt írsz, különböző érzelmekből (félelem, vágy, kíváncsiság, sürgősség, biztonság). A promptba másold be az 01. leckében kihúzott vevő-mondatokat — abból dolgozzon, ne a levegőből. Teszteld magadon — melyiket érted azonnal, magyarázat nélkül. A nyertes a webhelyre megy, a 9 többi a **swipefile**-odba — egy sima jegyzetfájl, ahova a jó mondatokat gyűjtöd későbbi email-tárgyhoz, hirdetéshez, poszthoz.

**Próbáld ki most:** futtasd le a `prompts.md` 6.1 promptját a kihúzott vevő-mondataiddal, és jelöld be a 3 jelöltedet.

## 03. Három példa-hero — Kata, Bence és Márk

Az 1. modul három szereplője így fordítja a saját egy-mondatát hero-szekcióvá. Mindhárom blokk: headline + alcím + CTA-gomb.

**Kata, könyvelő:**

> **Egyetlen NAV-határidőd sem csúszik el többé.**
>
> Havi könyvelés kezdő egyéni vállalkozóknak — minden bevallásod előre jelezve, határidőre beadva. Az ügyfeleim évek óta bírság nélkül dolgoznak.
>
> [Kérek egy 60 perces átvilágítást]

**Bence, fotós:**

> **Profilkép, amit végre ki is mersz rakni.**
>
> A fotózás előtti 30 perces beszélgetéssel kezdjük — a kamera csak utána jön elő. Ezért ismered fel magad a kész képen.
>
> [Időpontot foglalok]

**Márk, automatizálási tanácsadó:**

> **Heti egy munkanap megy el kézi másolgatásra?**
>
> Automatizálom az ismétlődő adminisztrációt egyéni vállalkozóknak és kis csapatoknak. A számla, a riport, az ügyfél-email magától összeáll, te a tényleges munkáddal foglalkozol.
>
> [Megnézzük, mit lehet automatizálni]

Figyeld meg: egyik sem mondja, hogy „könyvelő vagyok" vagy „fotós vagyok". Mindhárom a vevő mondatából indul — a NAV-félelemből, a „nem merem kirakni"-ból, a riport-másolásból. Pontosan ezért kellettek a 2. modul jegyzetei.

## 04. Garancia, FAQ, érték-stack

A copy nem csak Hero — a többi szekció is dolgozik.

- **Garancia** — kockázatfordítás: „Ha a hét végéig nincs az ígért output, visszafizetem." Nem a visszafizetés a lényeg — látják, hogy te BÍZOL a szolgáltatásodban.
- **FAQ** — nem véletlen kérdéslista, hanem ellenérvek lefogása: 5-7 leggyakoribb „de mi van ha…" + rövid őszinte válasz. Az interjú-jegyzetek kifogás-mondatai (01. lecke) ide kerülnek.
- **Érték-stack** (3. modulból) — minden mellék-tartalom külön bullet, külön piaci értékkel. Így a vevő látja: a csomagár kevesebb, mint a részek összértéke.

A három együtt tartja ott az olvasót. Ha a Hero után üres a folytatás, az olvasó az első kétségénél bezárja az oldalt — a FAQ pont ezeket a kétségeket fogja le, mielőtt kérdezne.

**Próbáld ki most:** írd meg a garancia-mondatodat egyetlen mondatban, és olvasd fel hangosan — ha magadnak sem mernéd kimondani egy vevőnek, túl nagy az ígéret.

## 05. Szolgáltatás-specifikus landing page

| | Weboldal | Landing |
|--|--|--|
| Célja | „ki vagyok / mit csinálok" | egy konkrét akció |
| Forgalom | ismeretlenek tévednek be | célzott |
| Menü, rólam, blog | van | nincs |

Egy szolgáltatás = egy landing. Egyik csomagodhoz építesz egy `/szolgaltatas-neve` URL-t (Vercel-en `landing.html` második fájlként). A copy-logika ugyanaz, mint a Hero-nál — csak szigorúbb: minden szó a CTA-kattintásra hajt. Ha célzott forgalmat — például egy posztból érkezőket — a fő weboldalra küldesz landing helyett, a látogató a menüben elkalandozik, és a konkrét akció elmarad.

Példa: Márk, az automatizálási tanácsadó a `/automatizalas-audit` landingre tereli a LinkedIn-posztjai olvasóit — egy gomb, egy Cal.com-foglalás, semmi más.

## 06. A 7-elemes sales-szerkezet — amikor erősebbre veszed

Konkrét sales-oldalra (fizetős tananyag, magas árú csomag) 7 elem dolgozik együtt:

1. **Headline** — max 6 szó, konkrét eredmény vagy ígéret (nem leírás)
2. **Vizuális** — kép/grafika közvetlenül a headline alatt, továbbgörgetésre ösztönöz
3. **Benefit stack** — előnyök, eredmények, változás (nem funkciók); milyen lesz a vevő élete utána
4. **Mechanizmus** — hogyan valósul meg az ígéret, bizalom-építés
5. **Történet** — személyes hiba, fordulópont vagy ügyfél-szituáció; érzelmi kapcsolat
6. **Kifogáskezelés / GYIK** — gyakori „de mi van ha…", rövid őszinte válaszok
7. **Garancia** — pénzvisszafizetés vagy elégedettségi, oldja a kockázatérzetet

A 05. leckében bemutatott szolgáltatás-landingnél nem kell mindezt beletenni — ott Cal.com foglalás a cél, nem közvetlen vásárlás. Konkrét digitális termékre vagy magas árú csomagra viszont ez a 7 elem hozza a konverziót.

## 07. A „működik-e" teszt — A/B-tesztelés helyett

Kezdőnek nem A/B-teszt kell, hanem türelem. Az A/B-teszthez forgalom kell — neked még nincs annyi, hogy a számok bármit jelentsenek.

Helyette a „működik-e" teszt:

1. Mutasd meg az oldalt 5 embernek, fejenként 10 másodpercre.
2. Csukasd le, és kérdezd meg: MIT kínálok, és KINEK?
3. Ha 5-ből legalább 3 mindkettőt vissza tudja mondani, a headline működik.
4. 3 alatt: újraírás. Nem finomítás — újraírás, másik vevő-mondatból.

Plusz egy szabály: egy változat 2 hétig él. Cserélni akkor cserélsz, ha a GA4-adatok (11. modul) mást mutatnak. Aki naponta cserélget, sosem tudja meg, melyik változat működött.

## Én így csináltam

> *Build-in-public: ide a saját, valós számaim kerülnek — ezt a részt élesben, folyamatosan töltöm fel.*

## Heti feladat

Húzd ki a 3-5 legerősebb vevő-mondatot a 2. modul jegyzeteiből. Generálj 10 hero-variációt, válassz nyertest, és frissítsd a webhelyed Hero-, garancia- és FAQ-szekcióját. Építsd meg a `landing.html`-t egy konkrét szolgáltatásra Vercel-en. Végül futtasd le a „működik-e" tesztet 5 emberrel.

**Akkor vagy kész, ha** a frissített oldal él, a landing a saját URL-jén elérhető, és a tesztben 5-ből legalább 3 ember megmondja, mit kínálsz és kinek.

## Ha elakadtál

- **„Nincsenek interjú-jegyzeteim."** Menj vissza a 2. modulhoz — két rövid beszélgetés már elég nyersanyag. Vevő-mondat nélkül a hero csak találgatás.
- **„Mind a 10 variáció egyformán hangzik."** Más-más érzelemből indíts: a `reference.md` 10 keretrendszert ad (eredmény, kérdés, sürgősség, félelem, kontraszt…). Egy keretrendszer = egy variáció.
- **„Nem megy át a teszten."** A headline valószínűleg túl okos. A szellemes szöveg jólesik írni, de a konkrét, már-már unalmas mondat megy át — írd konkrétabbra.
- **„Naponta átírnám a headline-t."** Ne tedd. Két hét, aztán GA4-adat (11. modul), aztán döntés. A türelem itt mérőeszköz.

## Letölthetők

- `prompts.md` — 3 prompt a hero-variációkhoz, a garancia/FAQ/érték-stackhez és a landinghez
- `reference.md` — 10 hero-keretrendszer, FAQ-sablon, `landing.html` struktúra, 2 boncolható workshop-landing példa
- `SKILL.md` — Claude Code skill a modulhoz
