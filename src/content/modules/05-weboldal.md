---
lastReviewed: "2026-06-09"
---

# 5. modul · Egyoldalas weboldal építése

> Beszélgetés az AI-jal, nem kódolás. HTML + Tailwind + Vercel — élesben, a saját domaineden, egy délután alatt.

> **TL;DR** — Ezen a héten egy élő, nyolc szekciós weboldalt építesz a saját domaineden, egy délután alatt. Ebben a modulban:
> - Megérted a nyolc szekciót és a kötött sorrendjüket: Hero, Problémák, Megoldás, Rólam, Eredmények, Garancia, FAQ, CTA + footer.
> - Megépíted az oldalt: vagy a kész `boilerplate.html`-t töltöd ki a saját szövegeiddel, vagy a Claude Code-dal generálod le.
> - Élesíted: feltöltöd GitHubra, kiteszed a Vercelre, és rákötöd a saját domained.
> - Fizetést teszel a CTA-gomb mögé Stripe-pal, hogy a vevő rögtön tudjon vásárolni.

## Hol tartasz

A 4. modulból fut a géped: Claude Code, saját domain, hivatalos email. Az 1-3. modulból megvan a nyersanyag: az egy mondatod, a vevőd fájdalmai, a csomagjaid. Ezen a héten ebből lesz publikus weboldal.

## Mit építesz meg ezen a héten

Egy élő, nyolc szekciós oldal a saját domaineden — mobil-barát, HTTPS-es. Cél: létezzen, és az ajánlatod 30 másodperc alatt érthető legyen róla. A legtöbb kezdő itt akad meg, mert a weboldal túlbonyolítva tűnik — pedig ma annyi, hogy az AI-nak elmondod, mi legyen rajta.

Tervezz vele egy délutánt — és számolj azzal, hogy a domain-rákötés után a DNS-propagáció 1-24 óra. Ne aznap estére időzítsd a „megmutatom mindenkinek" pillanatot.

## 01. A nyolc szekció

Egy fogalom előre: a **CTA** (call to action) a cselekvésre hívó gomb — „Foglalj időpontot", „Kérek ajánlatot". Minden szekció ide terel.

Kötött sorrendben:

1. **Hero** — egy mondatos ígéret + CTA gomb
2. **Problémák** — 3 fájdalom, amit a vevőd érez
3. **Megoldás** — mit csinálsz
4. **Rólam** — mini, 3-4 mondat
5. **Eredmények** — mit kap a vevő ténylegesen
6. **Garancia**
7. **FAQ** — 5-7 kérdés-válasz
8. **CTA + footer**

Mindegyik szekciónak EGY dolga van — egy érzés, egy felismerés, egy kattintás. Ne tölts mindent mindennel. Az 1-3. modulban már van anyagod: ajánlat 1 mondata adja a Herót, 3 probléma a vevő hangjából, 3 eredmény a csomagból. Ha a Rólam-mal indítasz, a látogató rólad olvas, mielőtt tudná, mit nyer vele — itt veszíted el.

Mielőtt építesz, nézz meg 2 mintát — [17. modul · Landing page minták](/modules/17-landing-mintak). Ott látod, hogyan néz ki ugyanez a szerkezet kész, működő oldalakon.

**Próbáld ki most:** írd fel a 8 szekció-címet, mindegyik mellé 1 mondatot a saját anyagaidból — ez a vázlat megy a gépbe.

## 02. HTML és Tailwind generálás Claude Code-dal

Három fogalom: a **HTML** a weboldal szövege és szerkezete egy fájlban. A **Tailwind** egy stílus-könyvtár — kész formázó osztályok, hogy ne kelljen design-kódot írnod. A **CDN** azt jelenti, hogy ezt a könyvtárat egyetlen sor tölti be az internetről — semmit nem kell telepítened.

Két út van, és mindkettő jó.

**A gyors út: a kész boilerplate.** A letölthetők között megtalálod a `boilerplate.html`-t — a teljes 8 szekciós oldal működő Tailwind-kóddal, magyar `[KITÖLTENDŐ: …]` placeholder-szövegekkel és kommentekkel szekciónként. Megnyitod VS Code-ban, kicseréled a placeholdereket a saját szövegeidre, és kész az első verzió. Böngészőben azonnal nézheted: kattints duplán a fájlra (Mac terminálban: `open index.html`).

**A generálós út.** A 4. modul setup-ja után üres mappa VS Code-ban, és a Claude Code-nak elmondod: „Készíts egy index.html-t Tailwind CDN-ről, ezekkel a szekciókkal: [lista]."

Második prompt-kör mindkét útnál: „A hero legyen csendesebb, a garancia más háttérszínnel, a FAQ legyen accordion." Az AI újragenerálja vagy átírja, te ránézel a böngészőben, visszaszólsz. 20-30 perc, kész.

## 03. GitHub és Vercel deploy + custom domain

Az `index.html` még a gépeden. **GitHub** = online tároló a fájljaidnak (a tárolóegység neve: repo). **Vercel** = ingyenes hoszting, vagyis szerver, ami az oldaladat kiszolgálja a látogatóknak. **Deploy** = az élesítés pillanata: a fájl a gépedről publikus weboldallá válik.

**Lépéssor**:
1. GitHub új repo, és a fájl feltöltése — a Claude Code lefuttatja neked: `git init` (verziókövetés indítása), `commit` (mentés-pont), `push` (feltöltés GitHub-ra)
2. Vercel.com, GitHub-login, „New Project", import repo, „Deploy" (30 mp, `tedneved.vercel.app`)
3. Custom domain: Vercel admin alatt Settings, majd Domains, írd be: `tedneved.hu`
4. Vercel ad 2 DNS-rekordot (A + CNAME — ezek irányítják a domained a Vercel szervereire), bemásolod a Sybell DNS-be
5. DNS-propagáció: jellemzően 1-2 óra, de akár 24 óra is lehet — utána automatikus HTTPS (a lakat-ikon a böngészőben)

A propagáció alatt a `tedneved.vercel.app` címen már él az oldal — a saját domain csak idő kérdése. Ezért ne estére időzítsd a domain-rákötést: csináld meg délután, és másnap reggel ellenőrizd.

A Vercel **Hobby** csomag ingyenes (személyes/non-commercial, 100 GB bandwidth/hó), kereskedelmi forgalomra $20/hó-tól a **Pro**.

Példa: Bence csütörtök délután deployolt, a `bencefoto.hu` péntek reggelre élt — addig a `bencefoto.vercel.app` linket küldte tesztre két ismerősének.

**Próbáld ki most:** ha a deploy lefutott, nyisd meg az oldalt a telefonodon is — nem csak a gépeden. A legtöbb látogatód mobilról jön majd.

## 04. Fizető-megoldás a CTA-gombra (Stripe HUF Checkout)

A **Foglalj most** / **Vásárolj** gomb mögé legegyszerűbb a **Stripe HUF Checkout** (`stripe.com`).

- Stripe-fiók, Products fül, Payment link, URL-t generálsz
- `<a href="https://buy.stripe.com/...">` gombra teszed
- Vevő bankkártyával vagy Apple/Google Pay-jel fizet
- ~2% + 50 Ft/tranzakció, magyar bankszámlára heti kifizetés
- **Stripe nem ad NAV-konform e-számlát** — Számlázz.hu-val párosítsd (manuálisan vagy webhook-on, ~1 óra Claude Code-dal)

Részletes Stripe + Wise setup és NAV-integráció: **12. modul**. Itt csak: a CTA-gomb mögé fizetési URL kell, Stripe Checkout 10 perc. Ha a gomb mögött csak egy email-cím van, a lendületben lévő vevő megáll, és ritkán jön vissza.

**Próbáld ki most:** kattints végig a saját CTA-gombodon vevőként, és fizess (teszt-módban) — ahol te elakadsz, ott a vevő is el fog.

## Én így csináltam

> *Build-in-public: ide a saját, valós számaim kerülnek — ezt a részt élesben, folyamatosan töltöm fel.*

## Heti feladat

Töltsd ki a `boilerplate.html`-t a saját szövegeiddel, vagy generáld le az `index.html`-t Claude Code-dal. Utána push-old GitHub-ra, deployold Vercel-re, és kösd rá a saját domaint — a DNS-propagációt számold bele az idődbe.

**Akkor vagy kész, ha** az oldal él a saját domaineden, telefonon is megnézted, és az egy-mondatod (1. modul) ott áll a hero-ban.

## Ha elakadtál

- **„Nem tudom, milyen szöveg menjen a szekciókba."** Nem írsz újat: az 1. modul adja a Herót, a 2. modul jegyzetei a Problémákat, a 3. modul csomagjai az Eredményeket.
- **„A saját domainen még nem él az oldal."** DNS-propagáció: 1-24 óra normális — addig a `tedneved.vercel.app` címen ellenőrizd, hogy maga az oldal jó-e.
- **„Telefonon szétesik a layout."** Mondd el a Claude Code-nak pontosan, mi csúszik el — a Tailwind reszponzív osztályokkal (`md:`, `lg:`) javítja.
- **„Csúnyának érzem."** Az első verziónak nem szépnek kell lennie, hanem érthetőnek — a 17. modul mintáiból lopj szerkezetet, ne díszítést.

## Letölthetők

- `boilerplate.html` — a teljes 8 szekciós oldal működő Tailwind-kóddal, kitöltendő placeholder-szövegekkel
- `prompts.md` — promptok a generáláshoz, finomításhoz és a deployhoz
- `reference.md` — lépéssor-referencia a GitHub + Vercel + domain folyamathoz
- `SKILL.md` — Claude Code skill a modulhoz
