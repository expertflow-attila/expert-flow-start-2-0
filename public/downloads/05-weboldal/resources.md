# 5. modul — Hasznos linkek

## Eszközök

- **Vercel** — https://vercel.com (ingyenes hoszting, GitHub-ról egy kattintással deploy)
- **GitHub** — https://github.com (kódtárolás és verziókezelés)
- **Tailwind CSS** — https://tailwindcss.com (utility-first CSS framework, CDN-ről egy sorral betölthető)
- **VS Code** — https://code.visualstudio.com (a 4. modulból már megvan)
- **Sybell domain admin** — https://admin.sybell.hu (DNS-rekordok beállítása itt)

## Inspiráció — webdesign

Ezeken az oldalakon a legjobb modern webdesign példák. Mielőtt építeni kezdesz, nézz át 30-60 percet — ettől tisztább lesz a fejedben, milyen egyszerűségre törekszel.

- **Land-book.com** — https://land-book.com (landing page galéria, kategóriánként szűrhető)
- **OnePageLove** — https://onepagelove.com (egyoldalas weboldalak)
- **Lapa.ninja** — https://www.lapa.ninja (landing page galéria, modern stílusok)
- **Landingfolio** — https://www.landingfolio.com (modern landing-ek, sok minimalista)
- **Motion Sites** — https://motionsites.ai (animált, motion-alapú modern weboldalak galériája)
- **Design Arena** — https://www.designarena.ai (AI-alapú design generátor és galéria, gyors prototípusokhoz)
- **Awwwards** — https://www.awwwards.com (díjazott weboldalak — főleg ihletért)
- **Dribbble** — https://dribbble.com (designer közösség)

## Tailwind és komponens-források

- **Tailwind CSS Docs** — https://tailwindcss.com (osztály-keresés és teljes dokumentáció — v4 az aktuális)
- **shadcn/ui** — https://ui.shadcn.com/docs/installation (másolható komponens-rendszer Tailwind + Radix-alapon, NEM library, hanem letölthető komponensek)
- **Radix UI** — https://www.radix-ui.com (headless, accessible komponensek — a shadcn alapja)
- **TweakCN** — https://tweakcn.com (vizuális shadcn téma-editor, exportálható tokenekkel)
- **Heroicons** — https://heroicons.com (ingyenes SVG ikonok, Tailwind-stílushoz illik)
- **Tailwind UI Free Components** — https://tailwindui.com/components/preview

## MCP szerverek a weboldal-építéshez (haladóknak)

- 📄 **Chrome DevTools MCP** — https://github.com/ChromeDevTools/chrome-devtools-mcp (a Claude Code közvetlenül kinyitja a webhelyed Chrome-ban, screenshot-ot készít, console-log-ot olvas, performance-mérést végez — mindezt prompttal kérheted)
- 📄 **Context7 (Upstash)** — https://github.com/upstash/context7 (friss Tailwind és shadcn dokumentációt küld vissza a Claude-nak, így nem talál ki kitalált utility-osztályokat)
- A 4. modul `resources.md`-ben több MCP szerver is fel van sorolva

## Magyar referenciák

- **Stripe magyar oldala** — modern minimalista, jó hierarchia
- **Notion** — clean tipográfia, sok whitespace
- **Linear** — egyik legjobb SaaS-landing 2024-ben

## Vercel + GitHub tudásbázis

- **Vercel Get Started** — https://vercel.com/docs/getting-started-with-vercel
- **Vercel Custom Domains** — https://vercel.com/docs/projects/domains
- **GitHub Quickstart** — https://docs.github.com/en/get-started/quickstart

## Skill-tár és GitHub repos (haladóknak)

Ezek a Claude Code skill-keretek és GitHub repók, amik az 5. modul témájához (weboldal-építés, Tailwind v4, deploy) kapcsolódnak — ha mélyebbre akarsz menni a Claude Code automatizációival.

- 🔗 **webfactory skills** — saját skill-keret, ami a `taste-engine` ízlés-bírálattal párosított landing page generátort tartalmazza (taste-engine, builder, audit, redesign — a magyar AI-design-galériák, mint motionsites, designarena, land-book már be vannak építve referencia-forrásként)
- 🔗 **Tailwind v4 specifikus skill** — a CSS-first `@theme` config, oklch színek, `@utility` és `@custom-variant` használatára optimalizált Claude Code skill (NEM a régi `tailwind.config.js` stílus)
- 📄 **taste-skill (külső Claude Code skill)** — https://github.com/leonxlnx/taste-skill (anti-AI-slop ízlésbíráló skill: a Claude generált weboldalt automatikusan minőségi-szempontból bírálja, és újratervezi, ha tucsi-tucsi lenne. Telepíthető a `~/.claude/skills/`-be, és a webhely-építésnél bekapcsol. Nálam a Generálj — Bírálj — Iterálj ciklust gyorsította fel.)
- 📄 **Remotion AI Skills** — https://www.remotion.dev/docs/ai/skills és https://github.com/remotion-dev/skills (ha animált motion graphics-elemeket akarsz a webhelyedre — pl. animált hero, kinetic typography, scroll-vezérelt mozgó-elem — a Remotion React-alapú videó-keret AI-skilljei a Claude Code-ot képessé teszik ezeket programozni. A 20. bónusz videókurzus-építéséhez is hasznos.)

### Általános ajánlott repók (minden modulnál hasznos)
- **Superpowers** — https://github.com/obra/superpowers (skill-keret Claude Code-hoz)
- **Claude Marketplaces** — https://claudemarketplaces.com (skill-piactér)

## A modul saját anyagai

- 📄 [prompts.md](./prompts.md)
- 📄 [video-script.md](./video-script.md)
- 📄 SKILL.md
- 📄 reference.md
