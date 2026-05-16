---
lastReviewed: "2026-05-16"
---

# 6. modul · Értékesítési szövegírás és szolgáltatás-landing

> Copy-modellek, amiket olvastam — nem tanácsadás, hanem közvetítés. Plusz egy különálló landing oldal egy konkrét szolgáltatásra.

> **TL;DR** — Erős copy (Hero + garancia + FAQ + érték-stack) a meglévő weboldalra, plusz egy fókuszált landing.
> - **Hero-headline 10 variációban**: mit kap ő (nem mit csinálsz), különböző érzelmekből, swipefile-ba a maradék
> - **Garancia + FAQ + érték-stack** — ezek tartják ott az olvasót a Hero után
> - **Landing ≠ weboldal**: egy szolgáltatás = egy `/szolgaltatas-neve` (`landing.html`), nincs menü, csak CTA
> - **7-elemes sales-szerkezet** magas árú csomagra: headline, vizuális, benefit, mechanizmus, történet, GYIK, garancia

## A hét témája

A weboldal magában nem ad el — a SZÖVEG ad el. Átlagos design erős copy-val több ügyfelet hoz, mint gyönyörű design üres szöveggel. A meglévő weboldalat (5. modul) erősebb szöveggel töltjük, plusz egy különálló landing oldal — konkrét akció kérése.

A copy-szabályokat nem találtam ki — bevált modellek (copyhackers.com, swipefile, klasszikus direct response).

## 01. Hero-headline tíz variációban

A hero-headline (első mondat) egyedül dönti el, marad-e az olvasó. Szabály: ne azt írd, mit csinálsz — írd, mit kap ő.

- Rossz: „Webfejlesztő vagyok 10 év tapasztalattal"
- Jó: „Két hét alatt élesben lesz a webhelyed, vagy ingyen visszacsinálom"

Claude Code-dal 10 variációt, különböző érzelmekből (félelem, vágy, kíváncsiság, sürgősség, biztonság). Teszteld magadon — melyiket érted azonnal magyarázat nélkül. Nyertes a webhelyre, a 9 többit swipefile-ba (email-tárgy, hirdetés, közösségi poszt).

## 02. Garancia, FAQ, érték-stack

A copy nem csak Hero — a többi szekció is dolgozik.

- **Garancia** — kockázatfordítás: „Ha a hét végéig nincs az ígért output, visszafizetem." Nem a visszafizetés a lényeg — látják, hogy te BÍZOL a szolgáltatásodban.
- **FAQ** — nem véletlen kérdéslista, hanem ellenérvek lefogása: 5-7 leggyakoribb „de mi van ha…" + rövid őszinte válasz.
- **Érték-stack** (3. modulból) — minden mellék-tartalom külön bullet, külön piaci értékkel.

A három együtt tartja ott az olvasót.

## 03. Szolgáltatás-specifikus landing page

| | Weboldal | Landing |
|--|--|--|
| Célja | „ki vagyok / mit csinálok" | egy konkrét akció |
| Forgalom | ismeretlenek tévednek be | célzott |
| Menü, rólam, blog | van | nincs |

Egy szolgáltatás = egy landing. Egyik csomagodhoz építesz egy `/szolgaltatas-neve` URL-t (Vercel-en `landing.html` második fájlként). Copy logika ugyanaz, mint a Hero-nál — csak szigorúbb: minden szó a CTA-kattintásra hajt.

## 04. A 7-elemes sales-szerkezet — amikor erősebbre veszed

Konkrét sales-oldalra (fizetős tananyag, magas árú csomag) 7 elem dolgozik együtt:

1. **Headline** — max 6 szó, konkrét eredmény vagy ígéret (nem leírás)
2. **Vizuális** — kép/grafika közvetlenül a headline alatt, továbbgörgetésre ösztönöz
3. **Benefit stack** — előnyök, eredmények, változás (nem funkciók); milyen lesz a vevő élete utána
4. **Mechanizmus** — hogyan valósul meg az ígéret, bizalom-építés
5. **Történet** — személyes hiba, fordulópont vagy ügyfél-szituáció; érzelmi kapcsolat
6. **Kifogáskezelés / GYIK** — gyakori „de mi van ha…", rövid őszinte válaszok
7. **Garancia** — pénzvisszafizetés vagy elégedettségi, oldja a kockázatérzetet

A 03. leckében bemutatott szolgáltatás-landingnél nem kell mindezt beletenni — ott Cal.com foglalás a cél, nem közvetlen vásárlás. Konkrét digitális termékre vagy magas árú csomagra viszont ez a 7 elem hozza a konverziót.

## Heti feladat

Frissítsd a webhelyed Hero-headline-ját, garancia- és FAQ-szekcióját, és építsd meg a landing.html-t egy konkrét szolgáltatásra Vercel-en.

## Eredmény

A hét végére van egy weboldalad, ami nem leírja, hanem ÉRTI a vevődet, plusz egy különálló landing, amit konkrét akcióra használhatsz a következő hetekben.
