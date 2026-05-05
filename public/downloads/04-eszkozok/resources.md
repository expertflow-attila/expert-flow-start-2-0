# 4. modul — Hasznos linkek

## Eszközök

- **VS Code** — https://code.visualstudio.com (ingyenes szerkesztő, 10 perc telepítés)
- **Node.js** — https://nodejs.org (a `npm install`-hoz kell, LTS verzió ajánlott)
- **Claude Code** — https://www.anthropic.com/claude-code (havi kb. $20 előfizetés, terminálból `npm install -g @anthropic-ai/claude-code` paranccsal telepíthető)
- **Sybell** — https://sybell.hu (magyar domain és hosting, évente pár ezer forint .hu-ért)
- **Google Workspace** — https://workspace.google.com (Business Starter ~2000 Ft/hó, 14 napos trial)

## DNS-ellenőrző eszközök

- 🔗 **MXToolbox** — https://mxtoolbox.com (MX-rekordok ellenőrzése propagáció után)
- 🔗 **DNS Checker** — https://dnschecker.org (globális DNS-propagáció státusz)
- 🔗 **Mail-Tester** — https://www.mail-tester.com (kimenő email spam-pontszám ellenőrzése)

## Claude Code haladó és skill-bővítés (a 02. leckéhez)

### GitHub repok és skill-keretek

- 📄 **Superpowers** — https://github.com/obra/superpowers (önmagát fejlesztő skill-keret Claude Code-hoz, a kurzusok írásához is használtam)
- 🔗 **Claude Marketplaces** — https://claudemarketplaces.com (skill-piactér és katalógus)
- 📄 **Claude Peers MCP** — https://github.com/louislva/claude-peers-mcp (Claude Code session-ök egymással kommunikálnak)
- 📄 **Auto-research (Karpathy)** — https://github.com/karpathy/autoresearch (autonóm kutatási pipeline AI-val)

### MCP szerverek (kötelezően ismerendő)

- 🔗 **Anthropic MCP docs** — https://modelcontextprotocol.io (a protokoll alapja)
- 📄 **MCP server lista** — https://github.com/modelcontextprotocol/servers
- 📄 **Chrome DevTools MCP** — https://github.com/ChromeDevTools/chrome-devtools-mcp (a Claude Code közvetlenül vezérli a Chrome böngészőt: console-log olvasás, performance audit, screenshot, DOM-inspect — a weboldal-tesztelésnél a saját tapasztalatom is az volt, hogy ez gyorsítja a hibakeresést)
- 📄 **Context7 (Upstash)** — https://github.com/upstash/context7 (friss, naprakész könyvtár-dokumentációt ad a Claude Code-nak — ha egy library frissült, és Claude tudása régi, ez a szerver elhozza a friss docs-ot, hogy ne találjon ki nem létező API-kat)
- Egyéb hasznos MCP-k: Google Drive MCP, Slack MCP, Webflow MCP, Excalidraw MCP, Playwright MCP

### A Claude Code dokumentáció

- 🔗 **Claude Code overview** — https://docs.claude.com/en/docs/claude-code/overview
- 🔗 **Claude Code Quickstart** — https://docs.claude.com/en/docs/claude-code/quickstart
- 🔗 **Best practices for Claude Code** — https://docs.claude.com/en/docs/claude-code/overview (mit érdemes a CLAUDE.md-be tenni)

## Tudásbázis

- 🔗 **Google Workspace Setup útmutató** — https://support.google.com/a/answer/9319378 (lépésenként végigvezet a domain-igazolástól az MX-rekordokig)
- 🔗 **Sybell tudásbázis** — https://sybell.hu/tudasbazis (DNS-beállítások, MX-rekordok kezelése magyar nyelven)

## Inspiráció

- 🔗 **Claude Code YouTube tutorialok** (angol, kezdőknek) — érdemes 2-3 órát rászánni az első hét végén; több készítő is részletesen átveszi a plan mode-ot, sub-agenteket és az MCP setup-ot

## Skill-tár és GitHub repos (haladóknak)

Ez a modul a központi referencia: a többi modul „Skill-tár és GitHub repos" szekciójából ide hivatkozom vissza, ha valaki az általános repókat keresi részletesen. A 4 darab kiemelt repó/skill-keret, amit minden Claude Code-ot használó vállalkozónak érdemes ismernie:

- 🔗 **Superpowers** — https://github.com/obra/superpowers (Jesse Lockwood skill-kerete, beépített plan-write/execute, code-review, brainstorming, debugging skill-ek; a kurzus írásához is ezt használtam)
- 🔗 **Claude Marketplaces** — https://claudemarketplaces.com (skill-piactér: kategorizált, kereshető Claude Code skill-ek és plugin-ek)
- 🔗 **claude-peers-mcp** — https://github.com/louislva/claude-peers-mcp (több Claude Code session közötti real-time üzenetváltás MCP szerveren keresztül — nem dolgoznak rá ugyanarra a fájlra)
- 🔗 **autoresearch (Karpathy-stílusú)** — https://github.com/karpathy/autoresearch (autonóm kutatási pipeline AI-val: kérdést tesz fel saját magának, válaszol, finomít)

### Általános ajánlott repók (minden modulnál hasznos)
- **Superpowers** — https://github.com/obra/superpowers (skill-keret Claude Code-hoz)
- **Claude Marketplaces** — https://claudemarketplaces.com (skill-piactér)

## A modul saját anyagai

- 📄 [prompts.md](./prompts.md)
- 📄 [video-script.md](./video-script.md)
- 📄 SKILL.md
- 📄 reference.md
