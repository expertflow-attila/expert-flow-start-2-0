---
lastReviewed: "2026-05-16"
---

# 4. modul · Eszközök, Claude Code alapok és online jelenlét

> VS Code + Claude Code (alapok és haladó parancsok) + Sybell domain + Google Workspace — egy modulban a teljes setup, ami a következő nyolc hét gerincét adja.

> **TL;DR** — 4 alap-eszköz a helyére: IDE, Claude Code, domain, hivatalos email — 8 hét gerince.
> - **VS Code + Claude Code** (`npm install -g @anthropic-ai/claude-code`, ~$20/hó) — AI a fejlesztőkörnyezetben
> - **Claude Code alapok**: `/clear`, `/compact`, `/rewind`, plan mode (Shift+Tab+Tab), sub-agentek, skills, MCP
> - **Sybell domain** (~3-5 ezer Ft/év) + **Google Workspace** (~2000 Ft/hó, SPF/DKIM/DMARC kötelező)
> - Haladó Claude Code-trükkökért lásd a 21. modult

## A hét témája

Az AI nem külön szoftverben él, hanem a fejlesztőkörnyezetben — ahogy ezt megérted, megváltozik a munkamódod. Négy alap-eszközt rakunk a helyére:

- **IDE** — ahol az AI-jal dolgozol
- **Claude Code** — 02. lecke mélyen veszi (parancsok, plan mode, sub-agentek, skills, MCP)
- **Sybell domain** — ahol mások megtalálnak
- **Google Workspace** — Gmail, Drive, Naptár, hivatalos email

Ez a legtechnikaibb hét, kicsit hosszabb — itt jönnek a kulcs-eszközök.

## 01. VS Code és Claude Code telepítés

VS Code = ingyenes szövegszerkesztő. Claude Code = AI-asszisztens, ami a fájljaidat látja, a parancssorba beszél vissza. Nem chat-ablak — fejlesztőeszköz, ami kódot ír, fájlokat szerkeszt, hibákat javít.

- **Letöltés**: `code.visualstudio.com`
- **Claude Code előfizetés**: ~$20/hó (az első hónapban már bejön az ára)
- **Telepítés**: `npm install -g @anthropic-ai/claude-code` (Node.js előbb)

Pair programmer: nem te dolgozol egyedül — te tudod MIT, ő tudja HOGYAN. Egyszer egy óra setup, utána mindenre erre épül.

## 02. Claude Code alapok — parancsok, plan mode, sub-agentek, skills, MCP

A Claude Code nem chat-ablak, hanem program parancsokkal.

**Alapparancsok**:
- `claude` — új session a saját mappádban
- `/clear` — kontextus-tisztítás, ha lassul
- `/compact` — összesűríti a kontextust, ha tele
- `/rewind` — visszalép, ha rossz irányba ment
- `/help` — parancslista

**Kulcs-fogalmak**:
- **Plan mode** (Shift+Tab + Tab) — Claude előbb tervez, csak utána cselekszik. Komplex feladatoknál kötelező.
- **Sub-agentek** (Task tool) — feladatot delegálsz „másik Claude-nak" saját kontextus-ablakkal. A fő ablakod nem telik meg.
- **Skills** — Claude Code képességbővítések (lásd `obra/superpowers` GitHub, `claudemarketplaces.com`). Pl. „session-handoff" tisztán átad kontextust.
- **MCP** (Model Context Protocol) — külső eszközök csatlakoztatása: Google Drive, Slack, Webflow, Excalidraw.

A valódi erő 95%-os bizonyossággal kért kódnál jön ki. Ha nem érted pontosan, mit akarsz, az AI kitalál valamit. Mielőtt parancsot adsz, beszélgess vele 2-3 üzenetben a mit-és-miértről.

**Mélyebbre** (teljes parancslista, sub-agentek finomhangolása, ultrathink, Chrome DevTools MCP, Context7 MCP, engedély-kezelés): a `21-claude-code-haladok/` bónusz 20 trükköt sorol fel három szinten.

## 03. Sybell domain és hivatalos email

A saját domain (pl. `tedneved.hu`) az online identitásod alapja — itt lesz a weboldalad, innen kapsz hivatalos emailt.

- **Sybell**: magyar domain-szolgáltató, megbízható, egyszerű DNS-kezelés (az 5. modul Vercel-deployhoz kell)
- **Idő/költség**: 5-10 perc regisztráció, pár ezer Ft/év
- **Hivatalos email** (`te@tedneved.hu`): komolyabb pozíció, mint gmailes — Google Workspace-szel kötjük rá (köv. lecke)

## 04. Google Workspace setup

Fizetős havidíj (~2000 Ft/hó, Business Starter): hivatalos email, Drive (30 GB/felhasználó), Naptár, Sheets, Docs.

**Setup-lépések**:
1. Fiók-létrehozás
2. Domain-igazolás (DNS-rekorddal a Sybell oldalán)
3. MX-rekordok beállítása
4. Felhasználó (te) létrehozása
5. **SPF, DKIM, DMARC** rekordok — nélkülük a kimenő emailjeid spam-be kerülhetnek

Részletek a `prompts.md` és `reference.md` fájlokban. A setup végére legyen működő `te@tedneved.hu` címed — ezt köti minden további szolgáltatás (Cal.com, Kit, Stripe).

## Ha valami nem tetszik — alternatívák

A modul a saját stackemet írja le, de a kurzus filozófiája egyik konkrét szolgáltatóra sem épít. Ha bármelyik eszköz nem ülteti meg jól a kezedhez vagy nem fér a pénztárcádhoz, ezek a működő alternatívák:

- **VS Code helyett:** Cursor (saját AI-IDE), Zed (gyors, modern, ingyenes), JetBrains IDE-k (ha már megszoktad).
- **Claude Code helyett:** Cursor saját AI, GitHub Copilot, Codeium (ingyenes). A kurzus parancsai akkor a legtisztábban a Claude Code-on jönnek vissza, de a logika átvihető.
- **Vercel helyett:** Netlify (hasonló DX), Cloudflare Pages (ingyenes, gyors CDN), GitHub Pages (statikus oldalakhoz). A Vercel ingyenes csomag (Hobby plan) bőven elég egy 5-10 oldalas landingnek + custom domain rákötés és automatikus HTTPS jár hozzá.
- **Stripe HUF helyett:** Barion (magyar bankkártya-feldolgozó, MNB-szabályozott), SimplePay (OTP Mobil), PayPal (régi, magasabb díj). A Stripe 2024 óta hivatalosan kezeli a HUF-ot — ~2% + 50 Ft/tranzakció, részletes setup és NAV-számlázáshoz párosítás a 12. modulban.
- **Sybell helyett:** bármelyik magyar domain-szolgáltató (Domain.hu, Domainprofi), vagy nemzetközi: Porkbun, Cloudflare Registrar (utóbbi a legolcsóbb).
- **Google Workspace helyett:** Microsoft 365 (Outlook + OneDrive), Proton Mail (privacy-first), Zoho Mail (legolcsóbb saját-domain email).
- **Kit (volt ConvertKit) helyett:** MailerLite (ingyenes 1000 feliratkozóig), Substack (ha újságírói hangod van), Beehiiv (newsletter-fókuszú).
- **GA4 helyett:** Plausible (privacy-friendly, GDPR-tiszta, ~€9/hó), Fathom (hasonló), Umami (önhosztolt, ingyenes).

A 17-19. tár-anyagok és a 22. bónusz tár (Solo Business stack) több alternatívát is bemutat. Ne ragadj le az eszközválasztáson — két óra mérlegelés, döntés, indulás.

## Heti feladat

Telepítsd a VS Code-ot és a Claude Code-ot, gyakorold be a 6-8 alapparancsot egy üres mappában (legalább `/clear`, `/compact`, plan mode próba), regisztráld a domaint a Sybell-en, és állítsd be a Google Workspace-fiókodat a hivatalos email-címmel.

## Eredmény

A hét végére dolgozik az IDE-d, magabiztosan adsz parancsot a Claude Code-nak (alapokon és plan mode-on), megvan a saját domained, és van egy hivatalos email-címed — innen már építhető rá a weboldal és minden további szolgáltatás.
