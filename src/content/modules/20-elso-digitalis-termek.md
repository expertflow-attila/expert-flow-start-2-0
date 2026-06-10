---
lastReviewed: "2026-06-09"
---

# Bónusz · Az első fizetős terméked — videókurzus AI-vágással

> Ahogy ez a kurzus is készült. Az első digitális termék, amit egyedül és AI-vezérelt segédlettel összerakhatsz — három héten belül, 50-100 ezer forint eszköz-költséggel.

> **TL;DR** — Videókurzus AI-vezérelt vágással 3 hét alatt: OBS + Whisper + Claude Code + Mux/Vimeo + Stripe.
> - **Felvétel**: OBS Studio (ingyen) + USB mikrofon (Fifine/Samson, 15-20 ezer Ft), 1 lecke = 1 take
> - **Vágás**: Whisper transzkriptből Claude Code javasol jump cut-okat, te DaVinci Resolve-ban vagy FFmpeg-gel vágsz
> - **Hosztolás + értékesítés**: Mux (10-30 ezer Ft/hó) vagy Vimeo Pro (~10 ezer Ft/hó) + Stripe Payment Link + Kit küldi a belépőt
> - **Idő**: 1 hét felvétel + 1 hét vágás + 1 hét hosztolás-landing

## A hét témája

A bónusz a 12 hét után jön — amikor már van weboldalad, lead magneted, ügyfeleid, működő háttered. A skálázódás első lépése: a tudásodat egyszer felveszed, sokszor eladod = fizetős videókurzus.

Itt mutatom meg, hogyan készítettem el ezt a kurzust, amit olvasol — és hogyan alkalmazod a saját tudásodra. Kulcs: AI-vezérelt videovágás. Nem prémium szerkesztő-szoftver, hanem működő pipeline (Claude Code + Whisper).

## 01. Mit rögzíts? — curriculum a saját tudásod alapjából

A 12 hét után tudod a tudásod alapját (1. modul) — ebből 8-12 leckés videókurzus.

**Struktúra**: tréning-stílus (4 fázis × 3 lecke) vagy egy ív, ami a problémától a módszeren és lépéseken át az eredményig vezet.

**Felvétel**:
- **OBS Studio** (ingyenes) screen recording módban
- **USB mikrofon** (Fifine vagy Samson, 15-20 ezer Ft)
- Webkamera opcionális

1 lecke = EGY take, ne 5. Az imperfekció hitelesebb, mint túl-csiszolt — és gyorsabb. 8-12 lecke × 8-15 perc ≈ egy hét munka napi 1-2 leckével.

## Hogyan szervezz 8-12 leckét — curriculum-vázlat módszer

Ne a leckéknél kezdd, hanem a kimenetnél. Bontsd visszafelé, három lépésben:

1. **Mit tudjon a résztvevő a kurzus végén?** Egy mondat, konkrét képesség. Nem "értse meg", hanem "csinálja meg egyedül".
2. **Milyen mérföldkövek vezetnek oda?** 3-4 köztes állapot, amin át kell mennie. Mindegyik egy ellenőrizhető eredmény.
3. **Milyen leckék kellenek mérföldkövenként?** 2-3 lecke per mérföldkő — így jön ki a 8-12.

Példa Katával, a könyvelővel (1. modul). Kimenet: a kezdő egyéni vállalkozó egyedül, bírság nélkül kezeli az adózási határidőit. Mérföldkövek: érti a rá vonatkozó adónemeket → felépíti a saját határidő-táblázatát → beállítja az emlékeztetőit → végigvisz egy próbahónapot. Mérföldkövenként 2-3 lecke = 8-12 leckés curriculum, ahol minden lecke a kimenetet szolgálja.

Ami nem visz mérföldkő felé, az kimarad. Így nem lesz töltelék-lecke.

## 02. AI-vezérelt videovágás

A vágás az, amitől a kezdők megszaladnak — Claude Code + Whisper együtt megoldja.

**Folyamat**:
1. Nyers felvételből Whisper transzkripció (lokálisan MacWhisper, vagy OpenAI Whisper API), eredmény: időbélyeges szöveg
2. Transzkriptet Claude Code-nak adod, jump cut (ugró vágás: a felesleges részek kivágása) javaslat: hosszú csendek, ismétlések, „öhm"-ök, hibás mondatok
3. Vágási lista időbélyegekkel — utána DaVinci Resolve (ingyen, vizuális) vagy FFmpeg parancsok (Claude Code generálja)
4. Felirat (caption) szintén a Whisper-transzkripcióból, opcionális szín-kiemelés a fontos szavakon

10 perces nyers felvételből 20-30 perc vágás, nem 2 óra.

## 03. Hosztolás és értékesítés

**Videó-hoszting** (két opció):
- **Mux** — fejlesztőbarát, használat-alapú, ~10-30 ezer Ft/hó induláskor
- **Vimeo Pro** — kezdőbarát, fix díj ~10 ezer Ft/hó, egyszerű embed

**Értékesítés**: **Stripe Payment Link** (egyszeri vagy előfizetés), vásárlás után a **Kit** (9. modul) küldi a belépő-emailt a videók linkjével.

**Landing**: 6. modul mintája szerint (`landing.html` másolva, tartalom cserélve).

**Teljes pipeline 3 hét**: 1 hét felvétel + 1 hét vágás-feliratozás + 1 hét hosztolás-landing.

## Heti feladat

Készítsd el az első videókurzusod curriculum-vázlatát (8-12 lecke) a tudásod alapjából, vedd fel az első leckét OBS-szel, és próbáld ki rajta a Whisper + Claude Code vágási pipeline-t.

## Eredmény

A bónusz-modul végére van egy működő prototípus-leckéd, amit a saját Stripe-linken értékesíteni tudsz — ettől a perctől nem csak az időddel, hanem egy értékesíthető termékkel is jelen vagy a piacon.
