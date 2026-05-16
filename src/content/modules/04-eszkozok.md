---
lastReviewed: "2026-05-16"
---

# 4. modul · Eszközök, Claude Code alapok és online jelenlét

> VS Code + Claude Code (alapok és haladó parancsok) + Sybell domain + Google Workspace — egy modulban a teljes setup, ami a következő nyolc hét gerincét adja.

## A hét témája

Az elmúlt időszakban tisztán látszott számomra: az AI nem külön szoftverben él, hanem a fejlesztőkörnyezetben — abban a pillanatban, ahogy ezt megérted, megváltozik a munkamódod. Ezen a héten négy alap-eszközt rakunk a helyére: az IDE-t (ahol az AI-jal dolgozol), a Claude Code-ot (a 02. lecke ezt mélyen átveszi — parancsok, plan mode, sub-agentek, skills, MCP), a Sybell domaint (ahol mások megtalálnak), és a Google Workspace-t (Gmail, Drive, Naptár, hivatalos email). A cél nem a tökéletes setup, hanem az, hogy a hét végére mindegyik eszközöd dolgozik, és tudod, melyikbe melyik feladat kerül. Ez a legtechnikaibb hét — egy kicsit hosszabb, mint a többi, mert itt jönnek a kulcs-eszközök, amikkel a többi modulban dolgozni fogsz.

## 01. VS Code és Claude Code telepítés

A Visual Studio Code egy ingyenes szövegszerkesztő, amibe integrálható a Claude Code — egy AI-asszisztens, ami a fájljaidat látja, és a parancssorba beszél vissza. Ez nem chat-ablak: ez egy fejlesztőeszköz, ami pontosan azt csinálja, amit a vállalkozásod létrehozásához kell — kódot ír, fájlokat szerkeszt, hibákat javít. Telepítés: VS Code letöltése (`code.visualstudio.com`), aztán a Claude Code előfizetés (~$20/hó — a saját tapasztalatom szerint az első hónapban már bejön az ára). A Claude Code telepítése egyetlen `npm install -g @anthropic-ai/claude-code` parancs (a Node.js-t előtte telepíted). Amit megtanultam: a pair programmer-érzés azt jelenti, hogy nem te dolgozol egyedül — az AI kiegészít: te tudod, MIT akarsz, ő tudja, HOGYAN. A telepítés egyszer egy óra, utána végig erre épül a kurzus minden technikai része.

## 02. Claude Code alapok — parancsok, plan mode, sub-agentek, skills, MCP

A Claude Code-ot nem mint chat-ablakot használod — mint egy programot, aminek vannak parancsai. Az alapparancsok: `claude` (új session indítása a saját mappádban), `/clear` (a kontextus tisztítása, ha lassul), `/compact` (összesűríti a kontextust, ha tele), `/rewind` (visszalép, ha rossz irányba ment), `/help` (parancslista). A **plan mode** (Shift+Tab + Tab) az, amikor Claude előbb megtervez valamit, mielőtt cselekedne — komplex feladatoknál kötelező használni, mert így nem ír el rosszat. A **sub-agentek** (Task tool) az, amikor egy feladatot delegál egy „másik Claude-nak", aki saját kontextus-ablakot kap — ezért a fő ablakod nem telik meg. A **skills** (lásd `obra/superpowers` GitHub és a Claude Marketplaces, `claudemarketplaces.com`) a Claude Code képességbővítései — például egy „session-handoff", ami tisztán átadja a kontextust egy új session-nek. Az **MCP** (Model Context Protocol) szerverek külső eszközöket csatlakoztatnak: Google Drive, Slack, Webflow, Excalidraw — én is sokat használok ilyet. Amit megtanultam: a Claude Code valódi ereje akkor jön ki, ha 95%-os bizonyossággal kérsz kódot — ha nem érted pontosan, mit akarsz, az AI kitalál valamit, ami nem jó. Mielőtt parancsot adsz, beszélgess vele 2-3 üzenetben a mit-és-miértről. **Ha az alapokon túl is mélyebbre akarsz menni** (a teljes parancslista, sub-agentek finomhangolása, ultrathink, Chrome DevTools MCP, Context7 MCP, engedély-kezelés stb.), a `21-claude-code-haladok/` bónusz-tár 20 productivity-trükköt sorol fel három szinten.

## 03. Sybell domain és hivatalos email

Azt vettem észre, hogy a saját domain (pl. `tedneved.hu`) az online identitásod alapja — ezen lesz majd a weboldalad, ezen kapsz hivatalos emailt. A Sybell egy magyar domain-szolgáltató, megbízható, és a DNS-rekordokat egyszerűen lehet rajta állítani (ezekre később, az 5. modul Vercel-deploy lépésénél lesz szükség). A domain regisztrációja 5-10 percet vesz igénybe és pár ezer forintba kerül évente. A hivatalos email (`te@tedneved.hu`) sokkal komolyabb pozíciót ad, mint egy gmailes cím — ezt a Google Workspace-szel kötjük majd hozzá a domainhez a következő leckében.

## 04. Google Workspace setup

A Google Workspace egy fizetős havidíjas csomag (~ 2000 Ft/hó induláskor a Business Starter csomagban), ami kínálja a hivatalos emailt, a Drive-ot (30 GB / felhasználó az alap-csomagban), a Naptárt, a Sheets-et és a Docs-ot. A setup részei: fiók-létrehozás, domain-igazolás (DNS-rekorddal), MX-rekordok beállítása a Sybell oldalán, és a felhasználó (te magad) létrehozása. A fontos lépés a domain-igazolás után az SPF, DKIM és DMARC rekordok beállítása — ezek nélkül a kimenő emailjeid spam-be kerülhetnek. Mindezek lépésről-lépésre a `prompts.md` és `reference.md` fájlokban — itt csak az érdekel, hogy a setup végére legyen egy működő `te@tedneved.hu` címed, amit később a Cal.com, Kit, Stripe és minden további szolgáltatáshoz kötsz.

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

A 17-19. tár-anyagok és a 22. bónusz tár (Expert Flow stack) több alternatívát is bemutat. Ne ragadj le az eszközválasztáson — két óra mérlegelés, döntés, indulás.

## Heti feladat

Telepítsd a VS Code-ot és a Claude Code-ot, gyakorold be a 6-8 alapparancsot egy üres mappában (legalább `/clear`, `/compact`, plan mode próba), regisztráld a domaint a Sybell-en, és állítsd be a Google Workspace-fiókodat a hivatalos email-címmel.

## Eredmény

A hét végére dolgozik az IDE-d, magabiztosan adsz parancsot a Claude Code-nak (alapokon és plan mode-on), megvan a saját domained, és van egy hivatalos email-címed — innen már építhető rá a weboldal és minden további szolgáltatás.
