# 9. modul — Hasznos linkek

## Eszközök

- **Kit (ConvertKit)** — https://kit.com (email-marketing, 1000 feliratkozóig ingyenes, Sequences a sorozatokhoz)
- **Pandoc** — https://pandoc.org (Markdown → PDF konverter, parancssoros, ingyenes)
- **Google Drive** — https://drive.google.com (a generált PDF-et ide tedd, és a Kit innen küldje)
- **VS Code + Claude Code** — a Markdown-vázlat írásához
- **Google Fonts** — https://fonts.google.com (ha a PDF-hez egyedi tipográfia kell — pl. Inter, Lora)

## Inspiráció

- **Kit Sequences dokumentáció** — https://help.kit.com/en/articles/4076146-creating-a-sequence (a hivatalos guide, képernyőképekkel)
- **beehiiv példák** — https://blog.beehiiv.com (welcome-email sorozat sablonok, jó hangnem-példák)
- **Stripe.press** — https://press.stripe.com (példa, hogyan lehet egy egyszerű, jól tördelt PDF jobban hatni, mint a túldesignolt)
- **Justin Welsh — One-Person Business** — https://www.justinwelsh.me (egyszerű lead magnet + email funnel, dokumentáló-hang)
- **Ali Abdaal — Productivity Lab newsletter** — minta arra, hogyan néz ki egy hosszan tartó email-kapcsolat olvasóval

## Magyar referenciák

- **Magyar e-marketing blogok** (pl. e-ttp.hu, Maga.hu) — a magyar email-marketing szabályozás (GDPR + opt-in szabályok) megértéséhez
- **NMHH iránymutatás email-marketingről** — https://nmhh.hu (hivatalos magyar adatvédelmi keret)

## További email-sorozat példák (haladóknak)

A `reference.md` a saját, élesben futó welcome-sorozatomat tartalmazza részletesen. Ha kíváncsi vagy más jellegű, célzottabb sorozatokra is, három további saját sorozatot itt tartok minta-jelleggel a `content/email-sequences/` mappában — érdemes átfutni őket, ha túlléptél az alap welcome-funnelen:

- 🔗 **`02-ai-kihivas-5nap.md`** — 5 napos „AI Kihívás" challenge-formátum, napi 1 konkrét feladattal (15-25 perc/nap, ChatGPT-promptokkal). Akkor használd, ha a lead magnet egy gyakorlat-sorozat, nem PDF.
- 🔗 **`03-ugyfelszerzes-autopilot.md`** — szakosított B2B sorozat ügyfélszerzés-fókusszal, valódi esettanulmánnyal (23 lead 1 hét alatt). Akkor használd, ha a célközönséged szolgáltató vállalkozó és a fő fájdalompont az ügyfél-szerzés.
- 🔗 **`04-vallalkozas-indito.md`** — induló vállalkozóknak szóló mentor-jellegű sorozat („minimum szolgáltatás" formula, ötlet-validáció AI-val). Akkor használd, ha a feliratkozók még nem indították el a vállalkozásukat.

Ezeket a sablonokat nem azért teszem ide, hogy egy az egyben másold — a saját szakmádra szabva érdemes átírni a témát, a példákat és a hangnemet.

## Skill-tár és GitHub repos (haladóknak)

Ezek a Claude Code skill-keretek és GitHub repók, amik a 9. modul témájához (lead magnet PDF + email sorozat) kapcsolódnak — ha mélyebbre akarsz menni a Claude Code automatizációival.

- 🔗 **lead-magnet-generator skill** — a saját Claude Code skill-em, ami a 9.1 promptot futtatja egy validált fájdalompont alapján, és Markdown-vázlatot ad vissza
- 🔗 **email-sequence-skill** — 5-emailes welcome-sorozat generátor a `prompts.md` 9.3 promptja köré építve, magyar hangnemmel
- 🔗 **pandoc-pdf-pipeline** — az `lead-magnet.md → lead-magnet.pdf` átalakítást automatizáló skill (Pandoc + xelatex Inter fonttal), ahogy a `reference.md` mutatja

### Általános ajánlott repók (minden modulnál hasznos)
- **Superpowers** — https://github.com/obra/superpowers (skill-keret Claude Code-hoz)
- **Claude Marketplaces** — https://claudemarketplaces.com (skill-piactér)

## A modul saját anyagai

- 📄 [prompts.md](./prompts.md)
- 📄 [video-script.md](./video-script.md)
- 📄 SKILL.md
- 📄 reference.md

## Kurzus-platformok (Drive-tárból kivonat)

A Drive-tárban van egy 17 platformos részletes összehasonlítás (Wit & Wire forrás). A teljes anyag túl részletes a 9. modulhoz — a lead magnet email-sorozatának építéséhez nem feltétlenül kell platformot választani. Itt az 5 legrelevánsabb platformot foglaljuk össze, ha mégis fizetős kurzust vagy közösséget akarsz a magnet-tartalomra építeni:

### 1. Circle — közösségközpontú
- **Kategória:** szakosodott (Közösségközpontú)
- **Ár:** 89 USD/hó (kezdő) → 199 USD/hó (bővítés)
- **Jó hozzá:** programok, ahol a közösség központi elem. Fórum, kurzus (Pro csomaggal), eseménynaptár, élő videóhívás natívan.

### 2. Kajabi — mindent egyben
- **Kategória:** mindent egyben (All-In-One)
- **Ár:** 119 USD/hó (kezdő) → 159 USD/hó (bővítés)
- **Jó hozzá:** komplett online vállalkozás egy helyen — kurzusok, fizetés, e-mail marketing, membership, közösség. Felhasználóbarát, jól támogatott.

### 3. Stan — egyszerű, kezdőknek
- **Kategória:** mindent egyben
- **Ár:** 29 USD/hó (kezdő) → 99 USD/hó (bővítés)
- **Jó hozzá:** új vállalkozók, akik digitális termékeket, kurzust vagy 1:1 hívásokat adnak el. Korlátlan videótárhely, egyszerű felület — de nincs teljes weboldal.

### 4. Thinkific — kurzusfókusz
- **Kategória:** szakosodott (Kurzusplatform)
- **Ár:** 36 USD/hó (kezdő) → 74 USD/hó (bővítés)
- **Jó hozzá:** kurzusalapú projektek. Felhasználóbarát kurzuslétrehozás, ingyenes csomag (1 kurzus, tranzakciós díj nélkül). Zoom-integráció élő órákhoz.

### 5. Teachable — tananyagkészítő erős
- **Kategória:** szakosodott (Kurzusplatform)
- **Ár:** 39 USD/hó (kezdő) → 119 USD/hó (bővítés)
- **Jó hozzá:** legjobb tananyagkészítő, és az egyetlen Merchant of Record platform (ÁFA-számítás automata). Az árak emelkedtek az évek során — érdemes összehasonlítani Thinkific-kel.

### Teljes 17 platformos elemzés

A részletes összehasonlítás (videótárhely, alkalmazás, adószámítás, kvízek, Meta Ads kompatibilitás, élő óra integrációk, közösségi képesség platformonként) elérhető a Drive-tárban — a következő platformokat is tartalmazza: Podia, Systeme.io, ThriveCart, Heartbeat, Xperiencify, LearnDash, LearnWorlds, Membervault, Mighty Networks, SamCart, Skool, Squarespace.

A Wit & Wire kategóriái:
- **Közösségközpontú igények:** Circle, Heartbeat
- **Mindent egyben:** Kajabi, Stan, Podia, Systeme.io
- **Kurzusfókusz:** Thinkific, Teachable, ThriveCart, Xperiencify
- **Kerülendő / kevésbé ajánlott:** LearnDash, LearnWorlds, Membervault, Mighty Networks, SamCart, Skool, Squarespace

A 9. modul fő üzenete: a lead magnet és az 5-emailes welcome-sorozat indításához egyik platformra sincs szükséged — Kit (ConvertKit) + Google Drive PDF elég. Platformot akkor válassz, amikor már fizetős kurzust építesz (lásd 20. modul).
