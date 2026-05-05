# 4. modul — Videó-szöveg

**Hossz:** 4–5 perc

## 0:00 — Hook

> „Az AI nem külön szoftverben él, hanem a fejlesztőkörnyezetben. Abban a pillanatban, ahogy ezt megérted, megváltozik a munkamódod. Nem chat-ablak — pair programmer. Ez a hét egy kicsit hosszabb lesz, mert itt jönnek a kulcs-eszközök, amikkel a következő nyolc hétben dolgozni fogsz."

## 0:30 — A 01. lecke átvezetése: VS Code és Claude Code telepítés

> „Az első lecke az IDE-ről szól. A VS Code egy ingyenes szövegszerkesztő — innen indul minden. Belerakjuk a Claude Code-ot, ami egy AI-asszisztens: a fájljaidat látja, a parancssorba beszél vissza, és pontosan azt csinálja, amit a vállalkozásod létrehozásához kell. A telepítés egy `npm install -g @anthropic-ai/claude-code` parancs, miután a Node.js felment. Az előfizetés körülbelül havi 20 dollár, és nálam ez 5x megtérül az első hónapban, mert egy egész embernyi munkát visz le a vállamról. Amit megtanultam: a pair programmer-érzés azt jelenti, hogy te tudod, MIT akarsz, ő tudja, HOGYAN."

## 1:30 — A 02. lecke átvezetése: Claude Code alapok — parancsok, plan mode, sub-agentek, skills, MCP

> „A második lecke a leghosszabb, és ez a hét gerince. A Claude Code-ot nem chat-ablakként használod, hanem mint egy programot, aminek vannak parancsai. Az alap-parancsok: `/clear` ha lassul, `/compact` ha tele a kontextus, `/rewind` ha rossz irányba ment a beszélgetés, `/help` a parancslistához, és `/context` hogy lásd, mennyi tokennél tartasz. A plan mode — Shift+Tab+Tab — az, amikor Claude előbb megtervez egy összetett feladatot, mielőtt kódolna. A tapasztalatom szerint komplex munkánál ezt mindig kapcsold be, mert így nem ír el rosszat. A sub-agentek olyanok, mintha egy másik Claude-ra delegálnál egy részfeladatot — saját kontextus-ablakot kap, a tied nem telik meg. A skills és az MCP szerverek külső képességeket adnak: én magát ezt a kurzust is a `superpowers` skill-kerettel írtam, és sokat használom a Google Drive és Slack MCP-ket. Ez a lecke fél nap nyugodt gyakorlás — csinálj egy üres mappát, indíts egy session-t, és menj végig minden parancson."

## 3:00 — A 03. lecke átvezetése: Sybell domain és hivatalos email

> „A harmadik lecke a saját domain. Ez az online identitásod alapja — ezen lesz a weboldalad, ezen kapsz hivatalos emailt. A Sybell egy magyar domain-szolgáltató, megbízható, és a DNS-rekordokat egyszerűen lehet rajta állítani — ezekre a következő modulban, a Vercel-deploynál is szükség lesz. A regisztráció 5-10 perc, évente pár ezer forint. A hivatalos email — `te@tedneved.hu` — sokkal komolyabb pozíciót ad, mint egy gmailes cím, és a 04. leckében kötjük a Google Workspace-szel a domainhez."

## 3:45 — A 04. lecke átvezetése: Google Workspace setup

> „A negyedik lecke a Google Workspace beállítása. Havidíjas csomag — Business Starter induláskor körülbelül 2000 forint havonta. Tartalmazza a hivatalos emailt, a Drive-ot, a Naptárt, a Sheets-et és a Docs-ot. A setup részei: fiók-létrehozás, domain-igazolás DNS-rekorddal, MX-rekordok beállítása a Sybell oldalán, és a saját felhasználó létrehozása. A fontos lépés a SPF, DKIM és DMARC rekordok beállítása — enélkül a kimenő emailjeid spam-be kerülhetnek."

## 4:30 — Heti feladat + Eredmény

> „A heti feladat: telepített VS Code és Claude Code, gyakorold be a 6-8 alapparancsot egy üres mappában, regisztrált domain a Sybell-en, és működő hivatalos email a Google Workspace-en keresztül. A hét végére dolgozik az IDE-d, magabiztosan adsz parancsot a Claude Code-nak, megvan a saját domained, és van egy `hello@tedneved.hu` címed."

## 4:50 — Lezárás

> „Innen már építhető rá a weboldal — ez következik az 5. modulban Vercel-deploy-jal."
