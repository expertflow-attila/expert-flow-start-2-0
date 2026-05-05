# 4. modul — Promptok

## 4.1 — Prompt a 01. leckéhez (VS Code + Claude Code telepítés)

A CLAUDE.md sablon, amit a projekt gyökerébe másolsz az első Claude Code session előtt. Ez a „cégbemutató" a virtuális munkatársadnak — itt tudja meg, ki vagy, mit csinálsz, milyen hangon beszéljen veled. Akkor futtasd, miután a `npm install -g @anthropic-ai/claude-code` lefutott, és bejelentkeztél Anthropic-fiókkal.

```markdown
# Projekt: [vállalkozás neve]

## Mit építek
[1 mondat arról, mit csinál a vállalkozás — az 1. modul mag-állításából]

## Célcsoportom
[1 mondat a 2. modul avatár-portréjából]

## Nyelv
Mindig magyarul kommunikálj velem. A kód- és technikai nevek lehetnek angolul.

## Stílus
- Nyugodt, dokumentáló hang, nem coach-szagú
- Nem ígérek shortcut-ot, csak tisztánlátást
- Minden konkrét: nevek, számok, dátumok

## Tiltott szavak
- „forradalmi", „transzformáció", „mindset"
- „gyorsan meggazdagodsz", „1 hét alatt"
- „shortcut", „lerövidítem", „életmódváltás"

## Kódírásnál
- Magyarázd el, miért ezt csináltad
- Kommentezd ki a fontos sorokat
- Kérdezz vissza, ha valami nem egyértelmű
- Ne hozz létre Python venv-et vagy node_modules-t a git-tracking alá
```

A bemutatkozó beszélgetés az első Claude Code session-ben:

```
Szia Claude. Most kezdek egy vállalkozást építeni az
Expert Flow Start kurzus alapján. Én [név] vagyok, [kor],
[foglalkozás].

Még soha nem használtam IDE-t és Claude Code-ot. Kérlek:
1. 3 mondatban magyarázd el, mire jó a terminál és a chat-felület
   közötti különbség
2. 3 mondatban, mire jó a fájlok megnyitása vs. új fájl írása
3. 3 mondatban, mikor használjak `/clear`-t és mikor `/compact`-ot
4. Tegyél fel 3 kérdést, amit tudnod kell rólam,
   hogy jobban tudj segíteni
```

## 4.2 — Prompt a 02. leckéhez (Claude Code alapok — parancs-tréning)

Ezt akkor futtasd, amikor először mész végig az alapparancsokon. A cél nem az, hogy elsőre megjegyezd, hanem hogy minden parancsot egyszer kipróbálj egy biztonságos üres mappában, és lásd, mit csinál.

Hozz létre egy `~/Documents/claude-tanulas/` mappát, indíts ott egy `claude` parancsot, és menj végig az alábbi listán.

```
Szia Claude. Most tanulok egy új eszközt — segíts gyakorolni.

A célom, hogy 6-8 alapparancsot kipróbáljak egy biztonságos
üres mappában, és lássam, mit csinál mindegyik. Kérlek:

1. Először magyarázd el 1-1 mondatban, mit csinál ezek
   közül mindegyik:
   - /help
   - /context
   - /clear
   - /compact
   - /rewind
   - /model
   - /agents
   - Shift+Tab+Tab (plan mode)

2. Adj egy egyszerű feladatot, amin gyakorolhatok ezekkel:
   pl. „írj egy 3 fájlos, statikus HTML weboldalt 'Bemutatkozás'
   címmel, amin lesz egy fejléc, egy „Rólam" szakasz, és
   egy „Kapcsolat" rész".

3. Először tervezd meg plan mode-ban (kapcsold be Shift+Tab+Tab-bal),
   mutasd meg, mit csinálnál — én jóváhagyom, és csak utána írd meg.

4. A fájlok elkészülte után magyarázd el, mit csináltál,
   és mi a különbség plan mode és sima mode között.

5. A végén kérdezd meg, próbáljam-e ki a `/rewind`-ot
   (visszalépés egy hibás döntés után) és a `/clear`-t
   (új beszélgetés indítása ugyanabban a mappában).
```

A sub-agent gyakorlás külön prompt — ezt akkor futtasd, ha az alapparancsok már megvannak:

```
Most gyakoroljuk a sub-agent (Task tool) használatot.

Adj egy olyan feladatot, ami 2 részfeladatra bontható:
pl. „elemezd a most elkészült 3 HTML fájlt, és írj
egy `audit.md`-t a hibákról".

Kérlek:
1. Bontsd 2 sub-task-ra
2. Mindkettőt indítsd el a Task tool-lal (egy „explore"-jellegű
   és egy „plan"-jellegű sub-agent)
3. A végén magyarázd el, miért volt jó delegálni —
   mit nyertem token-takarékosság szempontjából
```

## 4.3 — Prompt a 03. leckéhez (Sybell domain és hivatalos email)

Domain név brainstorm — 20 javaslat 4 kategóriában. Akkor futtasd, mielőtt a Sybell-en regisztrálsz.

```
Vállalkozásom: [1 mondatos leírás az 1. modulból]
Avatárom: [1 mondat a 2. modulból]
Fő kulcsszavak: [3-5 szó]

20 domain név javaslat:
- 5 a saját nevemből
- 5 a szakmából / tematikus
- 5 érzelmet idéző (de NEM coach-szagú)
- 5 rövid, memorizálható szó

Mindegyiknél:
- .hu és .com elérhetőség (becsléssel — pontos
  ellenőrzés a Sybell-en)
- Milyen érzést kelt
- Milyen korlátokat hoz (pl. „túl szűk fókusz",
  „nehéz telefonon mondani")
- 1-10 pontszám memorizálhatóságra

A nyertes javaslat:
- Magyar nyelven kimondható
- Nincs ékezet (technikai)
- 15 betűnél rövidebb
- .hu végződéssel induljunk (a magyar piacnak fontos)
```

## 4.4 — Prompt a 04. leckéhez (Google Workspace + DNS Sybell-ről)

A DNS-rekordok beállítása lépésről lépésre. Akkor futtasd, amikor a Google Workspace 14 napos trial már aktív, és a domain-igazolási kódot megkaptad.

```
Domain: [domain.hu] — Sybell-en regisztrálva
Google Workspace trial: aktív
Domain-igazolási TXT-rekord, amit a Google adott:
[google-site-verification=...]

Vezess végig lépésről lépésre. Feltételezd, hogy ezt
először csinálom:

1. Hogyan jutok be a Sybell DNS-beállításokhoz?
2. Hova illesztem be a Google domain-igazolási TXT-rekordot?
3. Az 5 MX-rekord pontos értéke (Google-spec, prioritásokkal)
4. SPF-rekord pontos szövege (Type, Host, Value)
5. DKIM-rekord — hol generálom a Google admin-jában,
   és hova illesztem a Sybell-en?
6. DMARC-rekord pontos szövege (induláshoz p=none mód)
7. Propagációs idő — mire számítsak?
8. Hogyan ellenőrzöm a működést? (mxtoolbox.com vagy
   dnschecker.org pontos URL-jei)
9. Tipikus hibák: mit nézzek, ha 24 óra után sem
   működik a kimenő email?

Adj egy `setup-checklist.md` fájlt is, ahol kipipálhatom
mind a 4 lépést (telepítés, Claude Code alapok, domain, Workspace).
```
