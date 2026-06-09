# 9. modul — Promptok

## 9.1 — Prompt a 01. leckéhez (Lead magnet — 5-10 oldalas PDF Markdown-ból)

A Claude Code-dal egy 5-10 oldalas, gyakorlati PDF-vázlatot készítünk Markdown-ban a tudásod alapjából. Az AI ne találjon ki — a saját pivot-pontodból építsen.

```
Készítsünk egy 5-10 oldalas lead magnet PDF-vázlatot Markdown-ban.

A vállalkozás-mag (1. modulból):
„Én a [konkrét probléma] megoldásában tudok segíteni a [konkrét embereknek],
mert [a saját pivot-pontod]."

A célcsoport (2. modulból):
[avatár leírás 2-3 mondatban]

A lead magnet címe:
„[a cím — pl. A 7 lépéses XYZ útmutató]"
(Ha még nincs címem, írd ide: „javasolj 3 konkrét, ígéretes címet, és én választok.")

Struktúra (Markdown-ban):
# Cím
## Bevezető (1 oldal): kinek szól, mit kap meg
## 5-7 lépés / fejezet (egyenként 1 oldal): konkrét, gyakorlati lépés
## Záró (1 oldal): következő lépés, link a webhelyre

Hangnem: dokumentáló, NEM coach-szagú. NE használj „transzformáció",
„forradalom", „shortcut" típusú szavakat. Hétköznapi, konkrét magyar nyelv.
Az utolsó oldalon legyen egy halk CTA: „Ha kérdésed van, foglalj 20 perces
beszélgetést: [Cal.com link]."

Adj egy 5-10 oldalas Markdown-vázlatot, amit Pandoc-kal PDF-fé tudok konvertálni.
```

## 9.2 — Prompt a 02. leckéhez (Feliratkozó form — MailerLite)

A MailerLite form beágyazó kódját a webhely lead magnet szekciójába illesztjük. A prompt segít megírni a form körüli copy-t és integrálni a meglévő HTML-be.

```
A MailerLite-ban létrehoztam egy beágyazható formot — itt a kód, amit a MailerLite ad:
[a MailerLite form beágyazó kódja]

A webhelyem (Vercel-en hostolva, a `index.html` head-jében és body-jában):
[a webhely jelenlegi lead-magnet szekciójának HTML-je]

Kérlek:
1. Illeszd be a MailerLite form kódját a meglévő lead-magnet szekcióba úgy,
   hogy ne törje el a stílust (Tailwind / saját CSS).
2. Írj a form FÖLÉ egy 2-3 mondatos copy-t, ami konkrétan ígéri a PDF-et
   („Töltsd le a [konkrét cím] útmutatót — 5 perc olvasás, 7 lépés.").
3. A gomb-szöveg legyen: „Kérem a PDF-et" — NEM „feliratkozom".
4. A form ALATT egy halk sor: „Heti 1 email maximum, bármikor leiratkozhatsz."

Ne használj gradient-et, ne adj hozzá animációt, tartsd minimalistán.
```

## 9.3 — Prompt a 03. leckéhez (Öt emailes welcome sorozat)

Az 5 email teljes szövegét generáljuk, a saját pivot-pontod és a célcsoport alapján. Az AI vázol — te beszéddé alakítod.

```
Írj egy 5 emailes welcome-sorozatot a MailerLite Automation-be.

Vállalkozás-mag (1. modulból): „[1 mondatos állítás]"
Pivot-pontom (1. modulból): „[1 bekezdés a saját történetemből]"
Célcsoport (2. modulból): „[avatár 2-3 mondatban]"
Lead magnet címe: „[a PDF címe]"
A vég-CTA: 20 perces ingyenes konzultáció [Cal.com link]

Az 5 email:
1. Email 1 (azonnal, feliratkozás után): „Itt a PDF-ed + 1 mondat rólam."
   - Tárgysor: max 50 karakter, nem clickbait
   - Törzs: 80-120 szó, link a PDF-re, 1 mondat rólam
2. Email 2 (2 nap múlva): a pivot-pontom története
   - Tárgysor: kérdés vagy konkrét helyzet
   - Törzs: 150-200 szó, személyes történet, NEM tanács
3. Email 3 (4 nap múlva): a leggyakoribb tévhit a területemen
   - Tárgysor: meglepő állítás
   - Törzs: 150-200 szó, a tévhit + amit ÉN gondolok
4. Email 4 (7 nap múlva): egy konkrét tipp, amit a PDF-ben NEM írtam le
   - Tárgysor: konkrét ígéret
   - Törzs: 150-200 szó, 1 cselekvési lépés
5. Email 5 (10 nap múlva): meghívó konzultációra
   - Tárgysor: nem nyomulós, kérdés-jellegű
   - Törzs: 100-150 szó, miért érdemes elbeszélgetni, link

Hangnem: beszélgetős, mintha egy ismerősödnek írnál.
NE használj „kedves olvasó", „kattints ide most", „limitált lehetőség" típusú frázisokat.
NE legyen aláírás-blokk dizájnnal — egyszerű „Üdv, [név]" elég.
```
