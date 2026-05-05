# 5. modul — Promptok

## 5.1 — Prompt a 01. leckéhez (A nyolc szekció)

Ez a prompt megtervezi a weboldalad nyolc szekciójának tartalmát az 1-3. modul outputjaira építve. Mielőtt HTML-t generálnál, először a STRUKTÚRA legyen meg — mit írsz hova, milyen érzelemmel.

```
Az 1-3. modul output-jaim:
- Tudásom magja (1 mondat): [1. modul output]
- Avatárom (1 mondat): [2. modul output]
- Ajánlatom (1 mondat) és 3 csomag: [3. modul output]

Tervezz meg egy egyoldalas weboldalt 8 szekcióval.
Mindegyiknél add meg:
- Szekció neve
- Célja (mit érezzen vagy tegyen a látogató)
- Tartalom-elemek (3-5 bullet, magyarul)
- 1 mondatos „mit ér el" cél

Sorrend kötött:
1. Hero (headline + subheadline + CTA)
2. Problémák (3 fájdalom az avatár hangján)
3. Megoldás (mit csinálsz)
4. Rólam mini (3-4 mondat)
5. Outcome-ok (mit kap a vevő)
6. Garancia
7. FAQ (5-7 kérdés-válasz)
8. CTA + footer

Magyar nyelven, zero emoji, zero gradient, dokumentáló hangon.
```

## 5.2 — Prompt a 02. leckéhez (HTML és Tailwind generálás Claude Code-dal)

Ez a prompt generálja az `index.html`-t Tailwind CDN-ről. Az 5.1 prompt eredményét másold be a `[STRUKTÚRA]` helyére. Két körben dolgozz: először az alap fájl, aztán finomítás.

```
Készíts egy egyoldalas index.html-t Tailwind CDN-ről, ezekkel a szekciókkal:

[STRUKTÚRA — az 5.1 prompt eredménye]

Követelmények:
- Mobil-first responsive
- Sötét háttér (#0a0a0a), világos szöveg (#e5e5e5)
- Sans-serif (Arial, system-ui)
- Egy akcent szín az egész oldalon (lila #7c3aed VAGY kék #2563eb)
- Zero emoji, zero gradient
- Csak natív HTML accordion (details/summary), JavaScript nélkül
- Minimális animáció (csak scroll-fade)
- Egyetlen CTA szín
- A fájl végén kommenteld a fő szekciókat

A fájlt úgy add vissza, hogy egyetlen index.html legyen — semmi külön CSS, semmi külön JS.
```

Második kör — esztétikai finomítás (ha az alap fájl megvan):

```
Az index.html létezik. Most:
1. A hero legyen csendesebb (kisebb padding, halkabb hang)
2. A Problémák szekció legyen 3 oszlopos asztali nézetben
3. A Garancia legyen kiemelve más háttérszínnel (NEM gradient)
4. A FAQ-nál a details/summary legyen tisztább (chevron ikon nyitásnál)

Csináld meg, és írd ki, melyik sort módosítottad.
```

## 5.3 — Prompt a 03. leckéhez (GitHub és Vercel deploy + custom domain)

Ez a prompt végigvezet a deploy-on. Konkrét parancsokat ad, amit a Claude Code terminál-jában futtatsz. Ha még sose használtál GitHub-ot, ez az első alkalom — nyugodtan, lépésről lépésre.

```
Most készen van index.html egy helyi mappában. Soha nem használtam még GitHub-ot vagy Vercel-t.

Lépésről lépésre vezess végig:

1. GitHub repo létrehozása (web UI)
2. git init, git add, git commit, git push parancsok a terminálban
3. Vercel.com regisztráció GitHub-fiókkal
4. New Project → Import GitHub repo
5. Framework Preset választás (Other / Static)
6. Deploy
7. Saját domain rákötése Vercel admin → Settings → Domains
8. Sybell DNS-rekordok beállítása (A: 76.76.21.21, CNAME: cname.vercel-dns.com)
9. Hogyan ellenőrzöm, hogy a domain él

Mindegyik lépéshez konkrét parancs vagy konkrét képernyő-utasítás. Ha valamit a GitHub web UI-ban kell csinálni, írd le, hová kattintsak.
```
