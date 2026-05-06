---
---

# 9. modul · Lead magnet és email lista

> Egy hasznos PDF, egy feliratkozó form, és öt email a feliratkozás utáni két hétben — ez az alap email-funnel, amit a Kit-tel rakunk össze.

## A hét témája

Azt vettem észre, hogy az emberek 95%-a, aki a webhelyedre érkezik, nem fog azonnal vásárolni — nem azért, mert nem érdekli, hanem mert most még nem áll készen rá. Az email lista nem „hírlevél" — hanem az a hely, ahol idővel bizalmat építesz az olvasókkal, és amikor készen állnak, te leszel az első, akire gondolnak. Ezen a héten összerakjuk az alapot: egy értékes PDF (lead magnet), egy egyszerű feliratkozó form a webhelyen, és egy 5 emailes welcome-sorozat, ami a feliratkozás után automatikusan kimegy.

## 01. Lead magnet — 5-10 oldalas PDF Markdown-ból

Amit megtanultam: a lead magnet egy konkrét, hasznos dokumentum, amit cserébe adsz az email-címért — nem „kapsz heti tippeket", hanem „letöltheted a 7 lépéses XYZ útmutatót". Az 1. modulban már megtapasztaltad, mi a tudásod alapja — ebből születik a lead magnet: 5-10 oldalas, gyakorlati, kicsit taktikus tartalom. A létrehozás módja egyszerű: Markdown fájlban megírod (vagy a Claude Code-dal generálod), majd Pandoc-kal vagy headless Chrome-mal PDF-fé konvertálod. Nálam ez jött be: nincs szükség Canvára, InDesignra, semmilyen designer eszközre — egy egyszerű, jól tördelt Markdown-PDF a kezdőknél jobban hat, mint egy túldesignolt fájl. Tedd a Drive-ra, és a Kit majd ezt küldi automatikusan.

## 02. Feliratkozó form — Kit (ConvertKit)

A Kit (régen ConvertKit) egy email-marketing eszköz, ami ingyenesen indítható (1000 feliratkozóig), és sokkal egyszerűbb, mint a Mailchimp. A setup lépései: regisztráció a saját Google Workspace-emaileddel, „Form" létrehozása (név, email, gomb-szöveg), a form HTML-jét másolod, és a Claude Code-dal beilleszted a webhelyed lead magnet szekciójába. Ha valaki feliratkozik, a Kit automatikusan elküldi neki a PDF-et, és belép a welcome-sorozatba. A sequence (sorozat) a Kit-en belül egy automatizált email-folyamat — beállítod, hogy melyik email mikor megy ki, és onnan magától halad.

## 03. Öt emailes welcome sorozat

A saját utamon ezt láttam: a welcome-sorozat a feliratkozás utáni 14 napban összesen 5 emailt küld ki, mindegyik egy konkrét célt szolgál: (1) **Email 1 (azonnal)**: „Itt a PDF-ed + 1 mondat rólam"; (2) **Email 2 (2 nap múlva)**: a saját pivot-pontod (az 1. modul 02. leckéből) — egy személyes történet; (3) **Email 3 (4 nap múlva)**: a leggyakoribb tévhit a területeden, és mit gondolsz erről; (4) **Email 4 (7 nap múlva)**: egy konkrét tipp, amit a PDF-ben nem írtál le; (5) **Email 5 (10 nap múlva)**: meghívó egy ingyenes konzultációra, vagy egy konkrét ajánlatra. A hangja az emaileknek beszélgetős, nem marketing-szöveg — mintha egy ismerősödnek írnál. A `prompts.md`-ben benne lesz az öt sablon, csak átírod a saját hangodra.

## Heti feladat

Írd meg és exportáld a lead magnet PDF-et, állítsd be a Kit form-ot a webhelyen, és írd meg az 5 emailes welcome sorozatot a Kit Sequences-ben.

## Eredmény

A hét végére van egy működő email-rendszered: ha valaki feliratkozik, automatikusan megkapja a PDF-et, és a következő két hétben öt jól időzített emailt is — innen kezdődik a passzív bizalom-építés.
