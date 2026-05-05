# Bónusz · Az első fizetős terméked — videókurzus AI-vágással

> Ahogy ez a kurzus is készült. Az első digitális termék, amit egyedül és AI-vezérelt segédlettel összerakhatsz — három héten belül, 50-100 ezer forint eszköz-költséggel.

## A hét témája

Ez a bónusz-modul a 12 hét után jön — amikor már van weboldalad, lead magneted, ügyfeleid és működő hátterend. Amit megtanultam: a skálázódás első igazi lépése, hogy a saját tudásodat egyetlenegyszer felveszed, és sokszor el tudod adni: ez egy fizetős videókurzus. Ezen a héten azt mutatom meg, hogyan készítettem el én ezt a kurzust, amit éppen olvasol — és hogyan tudod ugyanezt a folyamatot a saját tudásodra alkalmazni. A kulcs az AI-vezérelt videovágás: nem prémium szerkesztő-szoftverre van szükséged, hanem egy működő pipeline-ra, amiben a Claude Code és a Whisper segít.

## 01. Mit rögzíts? — curriculum a saját tudásod magjából

A 12 hét lezárása után tudod, mi a tudásod magja (1. modul) — ebből lesz az első videókurzus, kibontva 8-12 leckére. A struktúra a tréningek-stílust követheti (4 fázis × 3 lecke), vagy egyetlen ívben halad: probléma → módszer → lépések → eredmény. A felvétel technikai része egyszerű: OBS Studio (ingyenes) screen recording módban, USB mikrofon (Fifine vagy Samson, 15-20 ezer Ft), webkamera opcionális. Amit megtanultam: 1 leckét EGY menetben érdemes felvenni, ne 5 take-ben. Az imperfekció hitelesebb, mint a túl-csiszolt felvétel — és sokkal gyorsabban végzel. 8-12 lecke × 8-15 perc felvétel ≈ egy hét munka, ha napi 1-2 leckét rögzítesz.

## 02. AI-vezérelt videovágás

Azt vettem észre, hogy a vágás az, amitől a kezdők megszaladnak — pedig a Claude Code és a Whisper együtt itt is dolgozik. A folyamat: a nyers felvételt Whisperrel transzkriptálod (lokálisan MacWhisperrel vagy az OpenAI Whisper API-jával), és időbélyeges szöveget kapsz. A transzkripciót a Claude Code-nak odaadod, és megkéred, hogy javasoljon jump cut-okat: hosszú csendek, ismétlések, „öhm"-ök, hibásan elindított mondatok. Az AI visszaad egy konkrét vágási listát időbélyegekkel — ezt vagy DaVinci Resolve-ban (ingyenes, vizuális) követed, vagy FFmpeg parancsokkal automatikusan végrehajtod (a Claude Code generálja a parancsot is). A felirat (caption) szintén a Whisper-transzkripcióból készül, opcionálisan szín-kiemeléssel a fontos szavakon. Egy 10 perces nyers felvétel vágása így 20-30 perc, nem 2 óra.

## 03. Hosztolás és értékesítés

A kész videókat tárolni kell valahol, ahonnan a vásárlók megnézhetik. Két logikus opció: a **Mux** (fejlesztőbarát, használat-alapú árazás, kb. 10-30 ezer Ft/hó induláskor) vagy a **Vimeo Pro** (kezdőbarát, fix díj, ~10 ezer Ft/hó, a videók egyszerűen embed-elhetők). Az értékesítés a **Stripe Payment Link**-kel történik: létrehozol egy egyszeri vagy előfizetéses fizetési linket, és a vásárlás után a Kit (a 9. modul email-szolgáltatója) automatikusan elküldi a kurzus belépő-emailjét, benne a videók linkjével. A landing oldalt a 6. modul mintája szerint építed (a `landing.html`-t másolod, kicseréled a tartalmat). A teljes pipeline körülbelül 3 hét munka: 1 hét a felvétel, 1 hét a vágás és feliratozás, 1 hét a hosztolás és értékesítési oldal felállítása.

## Heti feladat

Készítsd el az első videókurzusod curriculum-vázlatát (8-12 lecke) a tudásod magjából, vedd fel az első leckét OBS-szel, és próbáld ki rajta a Whisper + Claude Code vágási pipeline-t.

## Eredmény

A bónusz-modul végére van egy működő prototípus-leckéd, amit a saját Stripe-linken értékesíteni tudsz — ettől a perctől nem csak az időddel, hanem egy értékesíthető termékkel is jelen vagy a piacon.
