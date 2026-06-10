# 12. modul — Promptok

> Használat: a szögletes zárójeles részeket írd át a saját adataidra, majd másold be a teljes promptot Claude Code-ba (vagy bármelyik AI-asszisztensbe).

> **Fontos figyelmeztetés a teljes modulra:** Az alábbi promptok ORIENTÁCIÓS jellegűek — segítenek strukturálni a gondolkodást. A jogi és adózási döntéseid előtt KÖTELEZŐ könyvelővel és/vagy ügyvéddel egyeztetni. Az AI nem helyettesíti a szakmai tanácsadást. Konkrét számok és szabályok évente változhatnak — mindig ellenőrizd a NAV.hu-n.

## 12.1 — Prompt a 01. leckéhez (KATA / EV / Kft. — melyik forma?)

A választás-segítő prompt — az AI nem dönt helyetted, hanem strukturálja a kérdéseket, amiket a könyvelővel meg kell beszélned.

```
Kezdő egyéni vállalkozóként választanom kell a vállalkozási formát.
A magyar jelenlegi szabályozás (2026) alapján három fő opcióm van:
1. Egyéni vállalkozó (EV) + KATA
2. Egyéni vállalkozó (EV) + átalányadó / normál adózás
3. Kft.

A helyzetem:
- Várható éves árbevétel az első évben: [konkrét összeg vagy intervallum]
- Ügyfél-típus: [magánszemélyek / kkv-k / nagyvállalatok / vegyes]
- Foglalkoztatok-e másokat: [igen/nem; ha igen, hányat]
- Van-e másik bevételem (alkalmazotti viszony — heti hány órában —, más vállalkozás): [igen/nem, ha igen: mi]
- A szakmám: [konkrét szakma]

Kérlek:
1. Foglald össze 1 bekezdésben a 3 opció lényegét — adózás-mértékkel,
   mit jelent havonta a számlázás, ki lehet partner.
2. Adj egy táblázatot, ami az én helyzetemre szabottan összehasonlítja a 3-at
   (előny / hátrány a saját adataim alapján).
3. Mondd meg, melyik tűnik a legokosabbnak az adataim alapján — DE
   hangsúlyozd, hogy ez nem szakmai tanácsadás, és a végső döntés előtt
   egy könyvelővel kell egyeztetni.
4. Adj egy 5-pontos kérdés-listát, amit a könyvelői konzultáción
   konkrétan fel kell tennem.

NE találj ki összegeket, ha nem vagy biztos. Ha egy szabály változott
a tudásod óta, mondd, hogy „ezt ellenőrizd a NAV.hu-n".
```

## 12.2 — Prompt a 02. leckéhez (Számlázz.hu (vagy Billingo) + NAV bejelentkezés)

A setup-folyamat strukturálása — az AI a hivatalos lépéseket gyűjti össze, nem találja ki őket.

```
Szeretném beállítani a Számlázz.hu-t (vagy Billingo-t) az új egyéni
vállalkozásomhoz. Adj egy lépésről-lépésre listát.

Az adataim:
- Vállalkozási forma: [EV / Kft.]
- Adószám: [most kapom meg / már megvan]
- ÁFA-státusz: [alanyi mentes / ÁFA-s / KATA]
- Webhelyem: [van / nincs]
- A szolgáltatásom típusa: [konkrét szakma]

Kérlek:
1. Hasonlítsd össze röviden a Számlázz.hu-t és a Billingo-t (árazás,
   funkcionalitás, magyar piaci elterjedtség). NE találj ki árakat,
   ha nem vagy biztos — mondd, hogy „ellenőrizd a hivatalos oldalon".
2. Számlázz.hu setup — pontos lépések:
   - Regisztráció
   - Vállalkozási adatok megadása
   - Számla-sablon (logo, fejléc, lábléc, ÁSZF-link)
   - NAV Online Számla integráció — pontosan hova kattints, mit kérsz,
     hova írod be a „technikai felhasználó" adatait
3. Az első teszt-számla: hogyan állítok ki egyet, ami stornózva van,
   és nem zavarja a könyvelést, de látom, hogy a folyamat működik
4. A számla-sablonban legyenek-e benne az ÁSZF-re és Adatvédelmi
   nyilatkozatra mutató linkek? Ha igen, hogyan illesztem?

NE adj jogi tanácsot. NE találj ki összegeket. Csak a hivatalos lépéseket
strukturáld. Ha egy lépésben bizonytalan vagy, írd, hogy „a Számlázz.hu
súgójában (tudasbazis.szamlazz.hu) ellenőrizd".
```

## 12.3 — Prompt a 03. leckéhez (ÁSZF + Adatvédelmi nyilatkozat a webhelyre)

KRITIKUS: Az AI NE generáljon jogi szöveget. A prompt csak a struktúrát és a választási opciókat segít.

```
A webhelyemre fel kell tennem két kötelező jogi szöveget:
1. ÁSZF (Általános Szerződési Feltételek)
2. Adatvédelmi nyilatkozat (GDPR-konform)

FONTOS: NEM kérek tőled kész jogi szöveget. Két opcióm van:
A) Szabályos jogi sablon vásárlása (jogiportal.hu, vagy hasonló — 5-10.000 Ft)
B) Online jogi tanácsadó szolgáltatás (egyedi szöveg a saját webhelyemhez)

Kérlek:
1. Foglald össze, milyen elemeknek KELL benne lenniük az ÁSZF-ben
   és az Adatvédelmi nyilatkozatban — magyar jogi kontextusban,
   2026-os szabályozás szerint, struktúra-vázlat formájában (NEM kész szöveg).

   Az ÁSZF-vázlatban: a szolgáltató adatai, a szolgáltatás leírása,
   árak, fizetési feltételek, a szerződés létrejötte, elállási jog,
   panaszkezelés stb. — fejezet-címek listája.

   Az Adatvédelmi nyilatkozat-vázlatban: az adatkezelő adatai,
   milyen adatokat gyűjtesz, miért, jogalap (GDPR cikk),
   meddig tárolod, kihez kerülhetnek, érintett jogai stb. —
   fejezet-címek listája.

2. Adj egy összehasonlító táblázatot az A) és B) opcióról
   (előny / hátrány / költség / kinek ajánlott).

3. Mondd meg, mit gondolsz, melyik a logikus első lépés egy
   most induló egyéni vállalkozónak — DE hangsúlyozd, hogy
   ezekkel a dokumentumokkal hibázni komoly következményekkel jár,
   és egy ügyvéd-konzultáció (vagy egy hivatalos sablon-portál)
   sokat ér.

4. Add meg, hogyan linkeljük a két dokumentumot a webhelyen
   (footer, /aszf és /adatvedelem külön oldal, vagy PDF-link).

KRITIKUS SZABÁLY: NE GENERÁLJ KÉSZ JOGI SZÖVEGET. Csak struktúrát.
Ha mégis erre kér valaki, mondd, hogy ez a felelősséged, nem a tied,
és irányítsd egy hivatalos forráshoz.
```
