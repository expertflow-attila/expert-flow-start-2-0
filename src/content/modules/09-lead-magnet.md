---
lastReviewed: "2026-06-09"
---

# 9. modul · Lead magnet és email lista

> Egy hasznos PDF, egy feliratkozó form, és öt email a feliratkozás utáni két hétben — ez az alap email-funnel, amit a MailerLite-tal rakunk össze.

> **TL;DR** — Lead magnet PDF + MailerLite feliratkozó form + 5 emailes welcome a feliratkozás utáni 14 napra.
> - **Téma**: a 2. modul interjúiban leggyakrabban elhangzott kérdés — nem tipp, hanem adat
> - **Lead magnet**: 5-10 oldalas konkrét PDF (Markdownból Pandoc vagy headless Chrome segítségével), nem Canva, nem InDesign
> - **MailerLite** ingyenes 1000 feliratkozóig, form beágyazva a webhelyre, Automation küldi a leveleket
> - **5 email**: PDF (azonnal), pivot-történet (2. nap), tévhit (4.), bonus tipp (7.), CTA (10.)

## Hol tartasz

A webhelyed él (5. modul), a konzultációs funneled áll (7. modul), és megszólítottad az első ügyfél-jelölteket (8. modul). A webhelyre érkezők 95%-a viszont nem azonnal vásárol — nem azért, mert nem érdekli, hanem mert még nem áll készen.

## Mit építesz meg ezen a héten

Egy email-rendszert, ami a „még nem most" látogatókat megtartja: PDF cserébe az email-címért, plusz öt automatikus levél két hét alatt. Az email lista nem „hírlevél" — bizalom-építés, és amikor készen állnak, te vagy az első, akire gondolnak.

## 01. Téma-választás — a 2. modul interjúiból

A lead magnet témáját nem kitalálod, hanem visszakeresed. Nyisd ki a 2. modul interjú-jegyzeteit.

**A szabály:** a lead magnet témája = az a kérdés, ami az interjúidban a leggyakrabban elhangzott. Ha három beszélgetésből kettőben előjött ugyanaz a probléma, arról szól a PDF-ed.

Így nem azt írod meg, amit te tartasz érdekesnek, hanem amire bizonyítottan kíváncsiak. A cím is onnan jön: a kérdés átfogalmazva ígéretté („Hogyan árazzam be magam?" → „Árazási útmutató 7 lépésben").

## 02. Lead magnet — 5-10 oldalas PDF Markdown-ból

Konkrét, hasznos dokumentum cserébe az email-címért — nem „kapsz heti tippeket", hanem „letöltheted a 7 lépéses XYZ útmutatót". Az 1. modul tudás-alapjából 5-10 oldal, gyakorlati, kicsit taktikus.

**Létrehozás**:
- Markdown fájl (vagy Claude Code generálja — prompt a letölthetőkben)
- PDF-re: Pandoc vagy headless Chrome
- Drive-ra teszed, az 1. welcome-email linkeli

Nincs Canva, InDesign, designer eszköz. Egyszerű, jól tördelt Markdown-PDF kezdőknél jobban hat, mint túldesignolt fájl.

## 03. Feliratkozó form — MailerLite

A MailerLite email-marketing eszköz: ingyenes 1000 feliratkozóig, és a formtól az automatikus sorozatig mindent tud, ami most kell. Én MailerLite-ot használok élesben — azt mutatom, amit magam csinálok.

**Setup** (a pontos gombnevek változhatnak, a logika stabil):
1. Regisztrálj a Google Workspace-emaileddel
2. Hozz létre egy csoportot (Group) — ide kerül mindenki, aki a formon feliratkozik
3. Hozz létre egy beágyazható formot, és kösd a csoporthoz
4. Másold ki a form beágyazó kódját, és Claude Code-dal illeszd a webhely lead magnet szekciójába

A feliratkozó a form kitöltése után belép a csoportba. Ez a csoportba lépés indítja majd a welcome-sorozatot — a MailerLite-ban a sorozat neve **Automation**.

> **Alternatíva: Kit (ConvertKit).** Ugyanez a funnel Kit-tel is összerakható — ott a sorozat neve Sequence, és tag + automation köti a formhoz. A letölthető `reference.md`-ben a Kit setup-checklist is megmaradt, ha azt választod.

## 04. Öt emailes welcome sorozat — Automation

14 napban 5 email, mindegyik konkrét cél:

| # | Mikor | Tartalom |
|--|--|--|
| 1 | azonnal | „Itt a PDF-ed + 1 mondat rólam" |
| 2 | 2 nap múlva | A saját pivot-pontod (1. modul 02. lecke) — személyes történet |
| 3 | 4 nap múlva | Leggyakoribb tévhit a területeden + mit gondolsz |
| 4 | 7 nap múlva | Konkrét tipp, amit a PDF-ben nem írtál le |
| 5 | 10 nap múlva | Meghívó ingyenes konzultációra vagy konkrét ajánlat |

Az Automation felépítése: trigger = a feliratkozó belép a csoportba, utána 5 email-lépés, közöttük várakozás. Az 1. levél viszi a PDF-linket — így a kézbesítés is automatikus.

Hangnem: beszélgetős, nem marketing-szöveg — mintha ismerősödnek írnál. Sablonok a `prompts.md`-ben és a `reference.md`-ben.

## Én így csináltam

A saját email-listám MailerLite-on fut: beágyazott form, csoport-trigger, automatikus sorozat — ezért ezt tanítom, nem mást. A welcome-sorozat kitöltött, magyar piacra hangolt sablonja a letölthető `reference.md`-ben van.

> **[ATTILA TÖLTI KI: a saját lead magneted címe + linkje, boncolható példaként]**

Ha letöltöd, ne másold — boncold: nézd meg a címet, a fejezet-tagolást és az utolsó oldal halk CTA-ját.

## Heti feladat

Válaszd ki a témát a 2. modul jegyzeteiből, és írd meg + exportáld a lead magnet PDF-et. Utána állítsd be a MailerLite formot a webhelyen, és időzítsd az 5 levelet az Automation-ben.

**Akkor vagy kész, ha:**
- a form él a webhelyeden, és ki lehet tölteni
- te magad feliratkoztál egy saját tesztcímmel
- mind az 5 levél időzítve van az Automation-ben
- a tesztcímedre megérkezett az 1. levél, benne a működő PDF-linkkel

## Ha elakadtál

- **Nem érkezik meg a teszt-email** — először a spam mappát nézd, utána a domain DNS-beállításait, amiket a 4. modulban raktál össze.
- **A form nem jelenik meg a webhelyen** — ellenőrizd, hogy a teljes beágyazó kód bekerült-e, és nem szűri-e ki egy reklámblokkoló.
- **A sorozat nem indul el** — nézd meg, hogy a form tényleg a jó csoporthoz van-e kötve, és megerősítetted-e a feliratkozást, ha kétlépcsős (double opt-in).
- **A PDF-link nem nyílik** — a Drive-megosztás legyen „bárki, akinek a linkje van" jogosultságú.
