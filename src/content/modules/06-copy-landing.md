---
lastReviewed: "2026-05-16"
---

# 6. modul · Értékesítési szövegírás és szolgáltatás-landing

> Copy-modellek, amiket olvastam — nem tanácsadás, hanem közvetítés. Plusz egy különálló landing oldal egy konkrét szolgáltatásra.

## A hét témája

Amit megtanultam: a weboldal magában nem ad el — a SZÖVEG ad el. Egy átlagos design erős copy-val több ügyfelet hoz, mint egy gyönyörű design üres marketing-szöveggel. Ezen a héten a meglévő weboldaladat (5. modul) erősebb szöveggel töltjük fel, és építünk hozzá egy különálló landing oldalt — ami nem a „rólam" üzenet, hanem egy konkrét akció kérése. A copy-szabályokat itt nem találtam ki — ezek bevált modellek, amiket olvastam (copyhackers.com, swipefile, klasszikus direct response anyagok), és most átadom neked azt, ami nekem is segített.

## 01. Hero-headline tíz variációban

Azt vettem észre, hogy a hero-headline (a weboldal első mondata) az egyetlen sor, ami eldönti, hogy az olvasó marad-e. A szabály, ami nálam is bevált: ne azt írd, mit csinálsz — írd azt, mit kap ő, ha veled dolgozik. „Webfejlesztő vagyok 10 év tapasztalattal" rossz; „Két hét alatt élesben lesz a webhelyed, vagy ingyen visszacsinálom" jó. Generálj tíz variációt a Claude Code-dal, különböző érzelmekből (félelem, vágy, kíváncsiság, sürgősség, biztonság), és teszteld magadon — melyiket érted azonnal, anélkül hogy magyaráznod kellene. A nyertest tedd a webhelyre, a maradék kilencet tedd el a swipefile-odba — később még jól jönnek email-tárgyba, hirdetésbe, közösségi posztokba.

## 02. Garancia, FAQ, érték-stack

Nálam ez jött be: a copy nemcsak a Hero-ból áll — a többi szekció is dolgozik. A garancia szekció a kockázatot fordítja meg: „Ha a hét végéig nincs az ígért output, visszafizetem." Ez az emberek 95%-ának nem azért fontos, mert visszakérik a pénzt — hanem mert látják, hogy te BÍZOL a saját szolgáltatásodban. Azt vettem észre, hogy a FAQ nem véletlenszerű kérdéslista — az ellenérvek lefogása: az 5-7 leggyakoribb „de mi van ha…" kérdés, és arra rövid, őszinte válasz. Az érték-stack (a 3. modulból) megjelenik a webhelyen is: minden, amit a fő csomag mellé kapnak, külön bullet-pontban, külön piaci értékkel feltüntetve. A három együtt: garancia + FAQ + érték-stack — ezek azok a szövegblokkok, amik a Hero után tartják ott az olvasót.

## 03. Szolgáltatás-specifikus landing page

A „weboldal" és a „landing oldal" nem ugyanaz. A weboldal a „ki vagyok" és „mit csinálok" — ide tévednek be az ismeretlenek. A landing egy konkrét akcióra hajt: foglalj konzultációt, töltsd le a PDF-et, fizess elő. Egyetlen célja van, és minden, ami nem azt szolgálja, leveszel róla — nincs menü, nincs „rólam", nincs „blog". Egy szolgáltatás = egy landing. Az egyik csomagodhoz (pl. a fő csomag) építesz egy `/szolgaltatas-neve` URL-t (Vercel-en második fájlként, `landing.html`), ahol csak ez az egy ügylet van fókuszban. A copy logika ugyanaz, mint a Hero-nál — csak még szigorúbb: minden szó arra hajt, hogy az olvasó kattintson a CTA-ra.

## 04. A 7-elemes sales-szerkezet — amikor erősebbre veszed

Volt egy szerkezet, amit megnéztem egy videóban, és nálam is megerősített: amikor nem szolgáltatás-bemutatót, hanem konkrét sales-oldalt építesz (pl. egy fizetős tananyagra vagy magas árú csomagra), 7 elem dolgozik együtt. (1) **Headline** — maximum 6 szavas főcím, ami egy konkrét eredményt vagy ígéretet közvetít, nem leírást. (2) **Vizuális** — közvetlenül a headline alatt egy kép vagy grafika; ha rövid a szöveg, ez ingerli az érdeklődőt és továbbgörgetésre ösztönöz. (3) **Benefit stack** — előnyök, eredmények, változás. Nem funkciókat sorolsz, hanem azt, milyen lesz a vevő élete utána. (4) **Mechanizmus** — hogyan valósul meg a megígért eredmény? Ez építi a bizalmat és érthetővé teszi a mögöttes logikát. (5) **Történet** — egy személyes hiba, fordulópont, vagy egy ügyfél szituációja. Ez érzelmi kapcsolatot épít, ami a tisztán racionális érveknél erősebb. (6) **Kifogáskezelés / GYIK** — a leggyakoribb „de mi van ha…" kérdések, rövid őszinte válaszokkal. (7) **Garancia** — pénzvisszafizetés, elégedettségi garancia, vagy bármilyen biztosíték, ami oldja a vevő kockázatérzetét és megmutatja, hogy te is hiszel a szolgáltatásban. Azt vettem észre, hogy a 3. leckében bemutatott szolgáltatás-landingnél nem kell mindezt beletenni — ott a Cal.com foglalás a cél, nem közvetlen vásárlás. Viszont amikor egy konkrét digitális termékre vagy magas árú csomagra építesz oldalt, ez a 7 elem hozza a konverziót.

## Heti feladat

Frissítsd a webhelyed Hero-headline-ját, garancia- és FAQ-szekcióját, és építsd meg a landing.html-t egy konkrét szolgáltatásra Vercel-en.

## Eredmény

A hét végére van egy weboldalad, ami nem leírja, hanem ÉRTI a vevődet, plusz egy különálló landing, amit konkrét akcióra használhatsz a következő hetekben.
