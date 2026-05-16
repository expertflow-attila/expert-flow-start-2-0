---
lastReviewed: "2026-05-16"
---

# 5. modul · Egyoldalas weboldal építése

> Beszélgetés az AI-jal, nem kódolás. HTML + Tailwind + Vercel — élesben, a saját domaineden, két óra alatt.

> **TL;DR** — 8 szekciós oldal Claude Code-dal generálva, Vercel-re deployolva, saját domainen, 2 óra alatt.
> - **8 szekció kötött sorrendben**: Hero, Problémák, Megoldás, Rólam, Outcome-ok, Garancia, FAQ, CTA+footer
> - **HTML + Tailwind CDN** Claude Code-dal, finomítás 2-3 prompt körrel — 20-30 perc
> - **Vercel deploy**: GitHub → Vercel → custom domain (Sybell A+CNAME), 1-2 óra propagáció, ingyen HTTPS
> - **CTA mögött Stripe HUF Checkout** (~2% + 50 Ft, NAV-számlát Számlázz.hu-val párosítsd — 12. modul)

## A hét témája

A legtöbb kezdő itt akad meg: a weboldal túlbonyolítva tűnik. Pedig egyoldalas weboldal felépítése ma annyi, hogy az AI-nak elmondod, mi legyen rajta — és ő megírja a HTML-t. Egy nyolc szekciós oldal a saját domaineden, mobil-barát, HTTPS-es. Cél: létezzen, és az ajánlatod 30 mp alatt érthető legyen róla.

## 01. A nyolc szekció

Kötött sorrendben:

1. **Hero** — egy mondatos ígéret + CTA gomb
2. **Problémák** — 3 fájdalom, amit a vevőd érez
3. **Megoldás** — mit csinálsz
4. **Rólam** — mini, 3-4 mondat
5. **Outcome-ok** — mit kap a vevő ténylegesen
6. **Garancia**
7. **FAQ** — 5-7 kérdés-válasz
8. **CTA + footer**

Mindegyik szekciónak EGY dolga van — egy érzés, egy felismerés, egy kattintás. Ne tölts mindent mindennel. Az 1-3. modulban már van anyagod: ajánlat 1 mondata → Hero, 3 probléma → vevő hangjából, 3 outcome → csomagból.

## 02. HTML és Tailwind generálás Claude Code-dal

A 4. modul setup-ja után üres mappa VS Code-ban, és a Claude Code-nak elmondod: „Készíts egy index.html-t Tailwind CDN-ről, ezekkel a szekciókkal: [lista]." Tailwind CDN egyetlen sorral betölthető — nincs build-folyamat (a kezdők leggyakoribb akadálya).

Második prompt-kör: „A hero legyen csendesebb, a garancia más háttérszínnel, a FAQ legyen accordion." Az AI újragenerálja, te ránézel a böngészőben (`open index.html`), visszaszólsz. 20-30 perc, kész.

## 03. GitHub és Vercel deploy + custom domain

Az `index.html` még a gépeden. Vercel = ingyenes hoszting, GitHub-ról deployol egy kattintással.

**Lépéssor**:
1. GitHub új repo (Claude Code segít: `git init`, `commit`, `push`)
2. Vercel.com → GitHub-login → „New Project" → import repo → „Deploy" (30 mp, `tedneved.vercel.app`)
3. Custom domain: Vercel admin → Settings → Domains → `tedneved.hu`
4. Vercel ad 2 DNS-rekordot (A + CNAME), bemásolod a Sybell DNS-be
5. 1-2 óra propagáció, automatikus HTTPS

A Vercel **Hobby** csomag ingyenes (személyes/non-commercial, 100 GB bandwidth/hó), kereskedelmi forgalomra $20/hó-tól a **Pro**.

## 04. Fizető-megoldás a CTA-gombra (Stripe HUF Checkout)

A **Foglalj most** / **Vásárolj** gomb mögé legegyszerűbb a **Stripe HUF Checkout** (`stripe.com`).

- Stripe-fiók → Products → Payment link, URL-t generálsz
- `<a href="https://buy.stripe.com/...">` gombra teszed
- Vevő bankkártyával vagy Apple/Google Pay-jel fizet
- ~2% + 50 Ft/tranzakció, magyar bankszámlára heti kifizetés
- **Stripe nem ad NAV-konform e-számlát** — Számlázz.hu-val párosítsd (manuálisan vagy webhook-on, ~1 óra Claude Code-dal)

Részletes Stripe + Wise setup és NAV-integráció: **12. modul**. Itt csak: a CTA-gomb mögé fizetési URL kell, Stripe Checkout 10 perc.

## Heti feladat

Generáld le az `index.html`-t Claude Code-dal, push-old GitHub-ra, deployold Vercel-re, és kösd rá a saját domaint.

## Eredmény

A hét végére van egy éles weboldalad a saját domaineden — fotózd le a böngésző URL-jét, ez fontos pillanat, mert ettől a perctől nyilvánosan létezel.
