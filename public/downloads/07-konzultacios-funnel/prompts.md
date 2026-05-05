# 7. modul — Promptok

## 7.1 — Prompt a 01. leckéhez (Cal.com setup)

Ez a prompt megtervezi a Cal.com event type-od konfigurációját — időkeret, előzetes kérdések, Zoom-integráció. A választ használd a Cal.com admin felületén beállításhoz.

```
Cal.com event type-ot állítok be 30 perces ingyenes konzultációhoz.

Az ajánlatom (3. modul): [INPUT]
Az avatárom (2. modul): [INPUT]
A leggyakoribb előzetes kérdés, amit én feltennék az érdeklődőknek (mit szeretnél megtudni, mielőtt belefogtok): [INPUT]

Tervezz meg egy event type-ot:

A) ESEMÉNY ALAPADATOK
- Név (rövid, érthető — pl. „Stratégiai konzultáció — 30 perc")
- Hossz (30 / 45 / 60 perc — javasolj egyet, indokold)
- Helyszín (Google Meet / Zoom — javasolj egyet)
- Buffer time előtt és után (felkészülés, jegyzetelés)

B) ELÉRHETŐSÉGI IDŐKERET
- Heti hány óra (NE nyomd túl szorosan, javasolj reális mennyiséget)
- Mely napok (hétköznap reggel / délután / mindkettő — indokold)
- Időzóna: Europe/Budapest

C) ELŐZETES KÉRDÉSEK (2-3 db)
- Olyan kérdések, amik szűrnek és előkészítenek
- NE „hány alkalmazottad van" típusú general lead-form kérdések
- Inkább: konkrét probléma, eddigi próbálkozás, mire vágyik a beszélgetéstől
- Magyarul, dokumentáló hangon

D) NOTIFIKÁCIÓ AJÁNLÁS
- Foglaláskor melyik email-szabályok aktiválódjanak (4 email — lásd 7.2)
- Naptár-szinkronizáció (Google Calendar)

Add vissza a választ struktúrált formában, hogy a Cal.com admin felületén lépésről lépésre tudjam beállítani.
```

## 7.2 — Prompt a 02. leckéhez (Négy email automatika)

Ez a prompt megírja a négy email teljes szövegét — confirmation, 24h reminder, 1h reminder, follow-up. A Cal.com Workflows-ba másold be őket.

```
Négy automatikus emailre van szükségem a Cal.com Workflows-ban.

Az én vállalkozásom: [1 mondat]
Az ügyfél (avatár, 2. modul): [1 mondat]
Az event type: 30 perces stratégiai konzultáció
A Zoom / Google Meet link a Cal.com-ból automatikusan generálódik

Írd meg a négy email szövegét. Mindegyik:
- Magyar nyelvű
- Személyes, mintha ismerősnek írnád
- Zero coach-szag, zero hyped szöveg
- Maximum 6-8 mondat
- Aláírva: {{vállalkozás_neve}} / {{te_neved}}

1) CONFIRMATION (azonnal a foglalás után)
- Megerősítés: dátum, idő, link
- Mit hozzon magával / hogyan készüljön
- Ha módosítani kell, hogyan tudja
- A személyes hang: rövid „köszi" mondat a végén

2) 24H REMINDER (1 nappal előtte)
- Holnap találkozunk
- Konkrét lista: mit hozzál (1-3 pont, rövid)
- Link újra
- Egy-mondatos motiváció (NEM motivációs poszter típusú)

3) 1H REMINDER (1 órával előtte)
- Egy óra múlva
- Itt a link
- 1 mondat: ha valami változik, hogyan szólj
- Rövid, lényegre törő — mintha SMS lenne

4) FOLLOW-UP (a beszélgetés után 2 órával)
- Köszi a beszélgetést
- A megbeszélt lépések, 3-5 bullet (CSAK ami konkrét)
- Egy nyitott mondat: „ha kérdésed van, írj"
- NEM értékesítő szöveg, NEM „rendelj most" — őszinte utánkövetés

Mindegyik emailt válaszd el, és jelöld meg, melyik szöveget hova illeszthetem be a Cal.com Workflows „Custom email" mezőbe.
```

## 7.3 — Prompt a 03. leckéhez (No-show kezelés)

Ez a prompt egy 5. email-szabályt ír meg — a no-show utánkövetést. Plusz ad egy beszélgetés-forgatókönyvet arra az esetre, ha valaki váratlanul nem jelenik meg.

```
A Cal.com Workflows-ban szeretnék egy 5. email-szabályt: NO-SHOW FOLLOW-UP.

Trigger: a foglalt időpont után 24 órával, ha az event státusza „no-show" (a Cal.com naptárban manuálisan jelölhető).

Írd meg ennek az emailnek a szövegét:

- Magyar nyelvű, max 5-6 mondat
- Hang: őszinte, de NEM hibáztató („sajnálom, hogy elcsúszott", NEM „elmaradtál")
- Új foglalási link (ugyanaz a Cal.com event link)
- Maximum 2 alkalom: a 2. no-show után már nem küldök új linket
- Aláírva, személyes hang
- Zero passzív-agresszív tónus

Plusz: írj egy rövid bekezdést arról, hogyan kezeljem MENTÁLISAN a no-show-t:
- Miért NEM személyes
- Mi az iparági átlag (durván)
- Mikor érdemes az event-en változtatni (pl. fizetős konzultáció bevezetése)

Mindezt dokumentáló hangon — „én is tanulom, ezt csinálom most".
```
