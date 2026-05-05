# 21. bónusz · Hasznos linkek

## Claude Code dokumentáció

- 🔗 **Claude Code Overview** — https://docs.claude.com/en/docs/claude-code/overview
- 🔗 **Claude Code Quickstart** — https://docs.claude.com/en/docs/claude-code/quickstart
- 🔗 **Slash commands referencia** — https://docs.claude.com/en/docs/claude-code/slash-commands (a teljes parancslista: `/init`, `/context`, `/compact`, `/clear`, `/rewind`, `/statusline`, `/voice`, stb.)
- 🔗 **Plan mode + sub-agent docs** — https://docs.claude.com/en/docs/claude-code/sub-agents
- 🔗 **Hooks dokumentáció** — https://docs.claude.com/en/docs/claude-code/hooks (notification + automatizmus)

## MCP szerverek (a 16. és 19. trükkhöz)

- 📄 **Anthropic MCP docs** — https://modelcontextprotocol.io
- 📄 **Chrome DevTools MCP** — https://github.com/ChromeDevTools/chrome-devtools-mcp (16. trükk: böngésző-vezérlés Claude-ból)
- 📄 **Context7 (Upstash)** — https://github.com/upstash/context7 (19. trükk: friss könyvtár-dokumentáció)
- 📄 **MCP server lista** — https://github.com/modelcontextprotocol/servers (több száz szerver kategóriánként)

## Skill-keretek és katalógus (a 10. trükkhöz)

- 📄 **Superpowers** — https://github.com/obra/superpowers (Jesse Lockwood skill-kerete: brainstorming, debugging, code-review, plan-write/execute beépített skill-ekkel)
- 🔗 **Claude Marketplaces** — https://claudemarketplaces.com (skill-piactér: kategorizált, kereshető Claude Code skill-ek)
- 📄 **Karpathy autoresearch** — https://github.com/karpathy/autoresearch (autonóm kutatási pipeline példa, ahogy egy skill is megírható)
- 📄 **taste-skill** — https://github.com/leonxlnx/taste-skill (anti-AI-slop ízlésbíráló skill: a Claude generált weboldalt minőségi-szempontból bírálja és újratervezi, ha tucsi-tucsi lenne. Az 5-6. modulban érdemes telepíteni a webhely-építéshez.)
- 📄 **Remotion AI Skills** — https://www.remotion.dev/docs/ai/skills és https://github.com/remotion-dev/skills (Remotion-alapú motion graphics-skillek — animált hero, kinetic typography, lower thirds programozva React-tel. A weboldal vagy a videókurzus animált elemeihez.)

## A többi inter-agent / multi-session megoldáshoz

- 📄 **claude-peers-mcp** — https://github.com/louislva/claude-peers-mcp (több Claude Code session egymással kommunikál — sub-agentek alternatívája, ha mindegyiknek külön session kell)

## Engedély-kezelés (a 18. trükkhöz)

- 🔗 **settings.json dokumentáció** — https://docs.claude.com/en/docs/claude-code/settings (allow/deny lista, env vars, hooks konfiguráció)

## Mobil-vezérléshez (a 20. trükkhöz)

- 🔗 **Claude Code remote control docs** — https://docs.claude.com/en/docs/claude-code/remote (a mobil-vezérlés és böngésző-vezérlés aktiválása)

## Kapcsolódó modulok

- 📄 [4. modul · Eszközök, Claude Code alapok és online jelenlét](../04-eszkozok/) — itt tanulod meg az alapokat, mielőtt erre a tárra mész
- 📄 [5. modul · Egyoldalas weboldal építése](../05-weboldal/) — itt használod a Chrome DevTools MCP-t és a screenshot self-checket
- 📄 [20. bónusz · Az első fizetős terméked — videókurzus AI-vágással](../20-elso-digitalis-termek/) — itt használod a sub-agenteket a videovágási pipeline-ban

## A modul saját anyagai

- 📄 [module.md](./module.md) — a 20 trükk magyar leírással
