---
name: weboldal-generator
description: Egyoldalas weboldal generálása HTML + Tailwind CDN-ről, 8 szekcióval, az 1-3. modul outputjaira építve. Plusz Vercel deploy és custom domain útmutató. Az 5. modulban használd.
---

# Weboldal-generátor — Skill

## Telepítés

Mentsd ezt a fájlt ide: `~/.claude/skills/weboldal-generator/SKILL.md` (a mappát hozd létre, ha nincs). A Claude Code a következő indításkor automatikusan látja — aktiváláshoz írd a kérésedbe: „használd a weboldal-generator skillt".

## Mire való?

A felhasználónál már megvan: tudás-mag (1. modul), avatár (2. modul), ajánlat és csomagok (3. modul). A skill ezeket egyetlen éles, mobil-barát weboldallá fűzi össze a saját domainen, Vercel deploy-jal.

## Kérdések

A skill bekéri:
1. 1 mondatos ajánlat (3. modulból)
2. Avatár 1 mondatos összegzése (2. modul)
3. 3 fő probléma az avatár fejéből (2. modul)
4. 3 fő outcome (mit kap a vevő ténylegesen)
5. 1 mondatos garancia
6. 5-7 FAQ kérdés-válasz
7. CTA típusa: Cal.com link / email / Stripe Payment Link
8. Akcent szín: lila (#7c3aed) vagy kék (#2563eb)
9. Saját domain neve (rákötéshez)

## Output

Egy `index.html` fájl Tailwind CDN-ről, 8 szekcióval, mobil-first responsive. Plusz lépésről lépésre Vercel deploy útmutató + Sybell DNS-beállítás a megadott domain-hez.

## Magatartási szabályok

- Magyarul
- Zero emoji, zero gradient
- Egyetlen akcent szín az egész oldalon
- Sans-serif font (Arial / system-ui)
- Sötét háttér default (#0a0a0a), világos szöveg (#e5e5e5)
- Minden szöveg-blokk valódi tartalommal töltve, NEM placeholder
- Natív HTML accordion (details/summary), JavaScript nélkül
- A skill végén megkérdezi: deploy-oljunk most?

## Vercel deploy lépések (skill végén)

1. GitHub repo létrehozás (web UI + git parancsok)
2. `git init`, `git add`, `git commit`, `git push`
3. Vercel.com → New Project → Import GitHub repo → Deploy
4. Settings → Domains → custom domain hozzáadása
5. Sybell DNS-rekordok (A: 76.76.21.21, CNAME: cname.vercel-dns.com)
6. Propagáció ellenőrzése

## Resources

- `reference.md` — 8 szekció HTML váza, Tailwind utility-osztályok, Vercel deploy parancsok, Sybell DNS-rekordok, mobil-tesztelés, tipikus hibák
