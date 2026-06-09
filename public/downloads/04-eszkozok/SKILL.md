---
name: eszkoz-setup
description: Végigvezet a VS Code + Claude Code telepítésen, a Claude Code alapparancsok gyakorlásán (clear, compact, rewind, plan mode, sub-agentek, skills, MCP), Sybell domain regisztráción és Google Workspace + DNS bekötésen. Akkor használd, amikor a 4. modul elejére érkeztél.
---

# Eszközök — Skill

## Telepítés

Mentsd ezt a fájlt ide: `~/.claude/skills/eszkoz-setup/SKILL.md` (a mappát hozd létre, ha nincs). A Claude Code a következő indításkor automatikusan látja — aktiváláshoz írd a kérésedbe: „használd az eszkoz-setup skillt".

## Mire való?

A felhasználó most kezdi az IDE-t, a Claude Code-ot és a saját domain-jét beállítani. A skill 4 lecke szerint segít:

1. **VS Code + Claude Code telepítés** ellenőrzése (Node.js, `npm install -g @anthropic-ai/claude-code`, bejelentkezés, CLAUDE.md létrehozás)
2. **Claude Code alapok gyakorlása** — 6-8 alapparancs egy biztonságos üres mappában, plan mode próba, sub-agent delegálás próba, opcionálisan egy skill és egy MCP szerver bekapcsolása
3. **Domain név-választás** (20 javaslat 4 kategóriában) és regisztráció a Sybell-en
4. **Google Workspace + DNS-rekordok** beállítása Sybell-ről

## Kérdések

A skill bekéri:

1. Hogy a Node.js és a Claude Code telepítve van-e (ha nem, ad telepítési útmutatót)
2. A vállalkozás 1 mondatos leírását, célcsoportját, hangnem-preferenciáját (a CLAUDE.md-hez)
3. Hogy a 02. lecke parancs-tréningjét végigcsinálta-e — ha nem, indít egy gyakorló session-t egy üres mappában
4. A domain-jelölteket (vagy fő kulcsszavakat, ha még nincs jelölt)
5. A Google Workspace trial státuszát (aktív-e)
6. A domain-igazolási TXT-rekordot, amit a Google ad

## Output

Két fájl keletkezik:

- `CLAUDE.md` — a projekt gyökerébe (a virtuális munkatárs „cégbemutatója")
- `setup-checklist.md` — mind a 4 lépés státuszával, kipipálhatóan (telepítés, Claude Code alapok, domain, Workspace + DNS)

## Magatartási szabályok

- Magyarul végig
- Nincs emoji a kimenetben
- Feltételezi, hogy a felhasználó ezt először csinálja (pontos lépéssor, NEM rövidített)
- A 02. leckénél a parancsokat egyenként, példán keresztül mutatja be — nem vár előzetes ismeretet
- Plan mode-ot magyarázza el (Shift+Tab+Tab) az első összetett feladatnál
- Sub-agent delegálást egy konkrét, hétköznapi feladaton (pl. fájl-elemzés, audit) szemléltet
- A DNS-rekordoknál PONTOS, másolható szövegeket ad (Type / Host / Value / Priority)
- Ha valamelyik lépés sikertelen, hibaelhárító kérdéseket tesz fel
- A domain-jelölteknél magyar nyelven kimondhatóságot, ékezet-mentességet és 15 betű alatti hosszt preferál
- A domain-szolgáltató kötelezően Sybell, a deploy-platform Vercel — más kombinációt ne ajánljon

## Resources

- `reference.md` — Claude Code alapparancs-katalógus, plan mode workflow, sub-agent példák, skill telepítési minta, `.mcp.json` minta, VS Code telepítés, CLAUDE.md kötelező mezők, Sybell DNS sablonok (MX, SPF, DKIM, DMARC), propagációs idők, tipikus hibák
