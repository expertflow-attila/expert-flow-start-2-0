---
lastReviewed: "2026-05-16"
---

# 5. modul · Egyoldalas weboldal építése

> Beszélgetés az AI-jal, nem kódolás. HTML + Tailwind + Vercel — élesben, a saját domaineden, két óra alatt.

## A hét témája

Azt vettem észre, hogy a legtöbb kezdő itt akad meg: a weboldal túlbonyolítva tűnik. Pedig egy lead-magnetes, egyoldalas weboldal felépítése ma annyi, hogy az AI-nak elmondod, mi legyen rajta — és ő megírja a HTML-t. Ezen a héten ezt csináljuk meg: egy nyolc szekciós oldal a saját domaineden, mobil-barát, HTTPS-es, és nem olyan, mint egy ingyenes sablon. A cél nem a látvány — hanem hogy létezzen, és az ajánlatod 30 másodperc alatt érthető legyen róla.

## 01. A nyolc szekció

Nálam ez jött be: egy egyoldalas oldal nyolc szekcióból áll, kötött sorrendben: (1) Hero (egy mondatos ígéret + CTA gomb), (2) Problémák (3 fájdalom, amit a vevőd érez), (3) Megoldás (mit csinálsz), (4) Rólam (mini, 3-4 mondat), (5) Outcome-ok (mit kap a vevő ténylegesen), (6) Garancia, (7) FAQ (5-7 kérdés-válasz), (8) CTA + footer. Mindegyik szekciónak EGY dolga van — egy érzés, egy felismerés, egy kattintás. Egy idő után rájöttem, hogy ne töltsd tele mindent mindennel — ha egy szekció két dologról próbál szólni, már bonyolult. Az 1-3. modulban már van anyagod mindhez: az ajánlat 1 mondata a Hero-ba kerül, a 3 problémát a vevő hangjából emeled át, a 3 outcome a csomagból jön.

## 02. HTML és Tailwind generálás Claude Code-dal

A 04. modul setup-ja után megnyitsz egy üres mappát a VS Code-ban, és a Claude Code-nak elmondod: „Készíts egy index.html-t Tailwind CDN-ről, ezekkel a szekciókkal: [lista]." A Tailwind egy utility-first CSS framework, ami CDN-ről egyetlen sorral betölthető — nem kell külön build-folyamat, ami a kezdőknek általában a leggyakoribb akadály. A prompt második körében finomítasz: „A hero legyen csendesebb, a garancia legyen kiemelve más háttérszínnel, a FAQ legyen accordion." Az AI generálja az új verziót — te ránézel a böngészőben (`open index.html`), ha valami nem stimmel, visszaszólsz. 20-30 perc, és kész a fájl.

## 03. GitHub és Vercel deploy + custom domain

Az `index.html` a gépeden — még nem nyilvános. A Vercel egy ingyenes hoszting-szolgáltatás, ami GitHub-ról deployol egy kattintással. Lépéssor: GitHub-on új repo (a Claude Code segít a `git init`, `commit`, `push` parancsokkal), Vercel.com-on bejelentkezés GitHub-bal, „New Project", import a repo-t, „Deploy" — 30 másodperc, és van egy `tedneved.vercel.app` URL-ed. Aztán a saját domain rákötése: Vercel admin → Settings → Domains → `tedneved.hu` hozzáadása. Vercel ad két DNS-rekordot (egy A, egy CNAME), ezeket a Sybell DNS-be bemásolod (a 04. modul beállításán keresztül). 1-2 óra propagáció, és a saját domaineden van a webhely, automatikus HTTPS-szel.

## Heti feladat

Generáld le az `index.html`-t Claude Code-dal, push-old GitHub-ra, deployold Vercel-re, és kösd rá a saját domaint.

## Eredmény

A hét végére van egy éles weboldalad a saját domaineden — fotózd le a böngésző URL-jét, ez fontos pillanat, mert ettől a perctől nyilvánosan létezel.
