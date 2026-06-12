---
lastReviewed: "2026-06-09"
---

# 4. modul · Eszközök, Claude Code alapok és online jelenlét

> VS Code + Claude Code + Sybell domain + Google Workspace — egy modulban a teljes setup, ami a következő nyolc hét gerincét adja.

> **TL;DR** — Ebben a modulban beállítod a teljes munkakörnyezetet, ami a következő nyolc hét alapja lesz. A hetet kettéosztjuk: hétfő–szerda a fejlesztés, csütörtök–péntek az online jelenlét.
> - Telepíted a VS Code szövegszerkesztőt és a Claude Code AI-asszisztenst, és megérted, hogyan dolgozol velük együtt
> - Megtanulod a Claude Code alapparancsait és kulcs-fogalmait (plan mode, sub-agentek, skills, MCP)
> - Regisztrálsz egy saját domaint a Sybellen, és beállítasz egy hivatalos email-címet Google Workspace-szel
> - Hitelesíted az emailedet (MX, SPF, DKIM, DMARC), hogy a leveleid ne ragadjanak spambe

## Hol tartasz

Az 1-3. modulból megvan az egy mondatod, a vevőd hangja és a három csomagod — minden papíron. Ezen a héten kapsz hozzá gépet: ettől a héttől minden, amit építesz, ezeken az eszközökön fut.

## Mit építesz meg ezen a héten

Egy működő munkakörnyezetet: VS Code, amiben magabiztosan adsz parancsot a Claude Code-nak, plusz egy saját domain és egy hitelesített `te@tedneved.hu` email-cím. A jövő héten erre kerül rá a weboldal.

Kezdőnek ez a legijesztőbb hét, ezért kettéosztottuk: két kisebb hegy jobb, mint egy nagy.

## 4a · Hétfő–szerda: VS Code + Claude Code

Az első hegy a fejlesztőkörnyezet. Az AI nem külön szoftverben él, hanem itt — ahogy ezt megérted, megváltozik a munkamódod.

## 01. VS Code és Claude Code telepítés

Három fogalom, mielőtt bármit telepítesz. **VS Code** = ingyenes szövegszerkesztő, ebben nyitod meg a fájljaidat. **Terminál** = szöveges ablak, ahova parancsokat gépelsz a gépednek — a VS Code-ban beépítve megtalálod (Terminal menü). **Claude Code** = AI-asszisztens, ami a terminálban fut, a fájljaidat látja, kódot ír és hibát javít. Nem chat-ablak — fejlesztőeszköz.

- **Letöltés**: `code.visualstudio.com`
- **Claude Code előfizetés**: ~$20/hó (az első hónapban már bejön az ára)
- **Node.js telepítés előbb**: ez egy futtatókörnyezet, ami a Claude Code-ot a gépeden működteti — `nodejs.org`, LTS verzió
- **Telepítés**: `npm install -g @anthropic-ai/claude-code` — az `npm` a Node.js csomagtelepítője, a `-g` azt jelenti, hogy bármelyik mappából elérhető lesz

Pair programmer: nem te dolgozol egyedül — te tudod MIT, ő tudja HOGYAN. Egyszer egy óra setup, utána mindenre erre épül.

**Próbáld ki most:** nyisd meg a terminált, gépeld be: `node -v`. Ha verziószámot ír ki, a Node.js él — jöhet a Claude Code.

## 02. Claude Code alapok — parancsok, plan mode, sub-agentek, skills, MCP

A Claude Code nem chat-ablak, hanem program parancsokkal. Egy fogalom előre: a **kontextus** a Claude munkamemóriája — minden, amit a beszélgetésben eddig látott. Ha megtelik, a válaszok lassulnak és pontatlanodnak.

**Alapparancsok**:
- `claude` — új session (munkamenet) a saját mappádban
- `/clear` — üres lappal indít: törli a kontextust, a fájljaid maradnak
- `/compact` — összesűríti a kontextust, ha tele — a lényeg marad, a sallang megy
- `/rewind` — visszalép egy korábbi pontra, ha rossz irányba ment; jobb, mint a hibás beszélgetést folytatni
- `/help` — parancslista, ha bármelyik kiesett

**Kulcs-fogalmak**:
- **Plan mode** (Shift+Tab + Tab) — Claude előbb tervez, csak utána cselekszik. Komplex feladatoknál kötelező.
- **Sub-agentek** (Task tool) — feladatot delegálsz „másik Claude-nak" saját kontextus-ablakkal. A fő ablakod nem telik meg.
- **Skills** — Claude Code képességbővítések (lásd `obra/superpowers` GitHub, `claudemarketplaces.com`). Pl. „session-handoff" tisztán átad kontextust.
- **MCP** (Model Context Protocol) — külső eszközök csatlakoztatása: Google Drive, Slack, Webflow, Excalidraw.

A valódi erő 95%-os bizonyossággal kért kódnál jön ki. Ha nem érted pontosan, mit akarsz, az AI kitalál valamit. Mielőtt parancsot adsz, beszélgess vele 2-3 üzenetben a mit-és-miértről.

Ha a plan mode-ot kihagyod egy összetett feladatnál, a Claude azonnal nekiáll — és a feladat felénél derül ki, hogy mást értett. Plan mode-dal ugyanez két perc terv-olvasás, és még a kódírás előtt javítasz.

**Próbáld ki most:** hozz létre egy üres mappát, indítsd el benne a `claude` parancsot, és kérd meg: „Magyarázd el egy mondatban, mit látsz ebben a mappában."

Ha a parancsok mennek, nézd meg a kész skilleket — [19. modul · AI eszközök / Skill-ek](/modules/19-ai-eszkozok). Hat előre megírt skill vár konkrét vállalkozási feladatokra.

**Mélyebbre** (teljes parancslista, sub-agentek finomhangolása, ultrathink, Chrome DevTools MCP, Context7 MCP, engedély-kezelés): a `21-claude-code-haladok/` bónusz 20 trükköt sorol fel három szinten.

## 4b · Csütörtök–péntek: domain + Google Workspace

A második hegy az online identitás. Itt nem kódolsz — regisztrálsz, DNS-rekordokat másolsz, és várod a propagációt. A **DNS** az internet telefonkönyve: megmondja, hogy a domained melyik szerverre mutasson, és hova menjenek az emailjeid. A **propagáció** az az idő, amíg az új bejegyzés világszerte szétterjed — ezért kell néha órákat várni.

## 03. Sybell domain és hivatalos email

A saját domain (pl. `tedneved.hu`) az online identitásod alapja — itt lesz a weboldalad, innen kapsz hivatalos emailt.

- **Sybell**: magyar domain-szolgáltató, megbízható, egyszerű DNS-kezelés (az 5. modul Vercel-deployhoz kell)
- **Idő/költség**: 5-10 perc regisztráció, pár ezer Ft/év
- **Hivatalos email** (`te@tedneved.hu`): komolyabb pozíció, mint gmailes — Google Workspace-szel kötjük rá (köv. lecke)

Példa: Kata, a könyvelő a `katakonyveles.hu`-t választja — rövid, ékezet nélküli, telefonon is lediktálható. A `kissné-könyvelés.hu` mindhárom szemponton elbukna.

**Próbáld ki most:** írj fel 3 domain-jelöltet, és nézd meg a Sybell keresőjében, melyik szabad. A `prompts.md` 4.3 promptja 20 javaslatot generál, ha elakadtál.

## 04. Google Workspace setup

Fizetős havidíj (~2000 Ft/hó, Business Starter): hivatalos email, Drive (30 GB/felhasználó), Naptár, Sheets, Docs.

**Setup-lépések**:
1. Fiók-létrehozás
2. Domain-igazolás (DNS-rekorddal bizonyítod a Google-nek, hogy a domain a tiéd)
3. MX-rekordok beállítása (ezek mondják meg, hogy a leveleid a Google szervereire érkezzenek)
4. Felhasználó (te) létrehozása
5. Email-hitelesítés: SPF, DKIM, DMARC — ez a következő lecke

A setup végére legyen működő `te@tedneved.hu` címed — ezt köti minden további szolgáltatás (Cal.com, Kit, Stripe).

**Próbáld ki most:** ha a fenti 4 lépés megvan, küldj egy emailt az új címedről a régi gmailes címedre, és válaszolj rá vissza. Ha mindkét irány megy, élsz.

## 05. Email-hitelesítési checklist — MX, SPF, DKIM, DMARC

Hitelesítés nélkül a kimenő emailjeid spam-be kerülhetnek — és ezt sosem tudod meg, mert a vevő nem szól. Egyszerű nyelven: az MX a postaláda címe, az SPF és a DKIM bizonyítja a fogadó rendszernek, hogy tényleg te küldted a levelet, a DMARC pedig szabályt ad arra, mi történjen, ha valaki a nevedben hamisít. Négy rekord kell a Sybell DNS-be (Domain → DNS-kezelés):

| Rekord | Hova írod (Sybell) | Mit írsz be |
|---|---|---|
| **MX** | MX-rekord, Host: `@` | A Google 5 MX-rekordja (`ASPMX.L.GOOGLE.COM.` stb.) — a Value végén a pont kötelező |
| **SPF** | TXT-rekord, Host: `@` | `v=spf1 include:_spf.google.com ~all` — csak EGY SPF-rekordod lehet |
| **DKIM** | TXT-rekord, Host: `google._domainkey` | A Google Admin generálja (Apps → Gmail → Hitelesítés) — a hosszú értéket bemásolod |
| **DMARC** | TXT-rekord, Host: `_dmarc` | `v=DMARC1; p=none; rua=mailto:dmarc@tedneved.hu` — `p=none` figyelő móddal indulsz |

A pontos értékek, a propagációs idők és a tipikus hibák a `reference.md` letölthetőben vannak — onnan másolj, ne fejből.

**Önellenőrzés**: küldj egy emailt a `mail-tester.com` által adott címre, és nézd meg a pontszámod. A cél 9/10 vagy fölötte — ha kevesebb, a riport megmondja, melyik rekord hibás.

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

## Én így csináltam

> *Build-in-public: ide a saját, valós számaim kerülnek — ezt a részt élesben, folyamatosan töltöm fel.*

## Heti feladat

**4a (hétfő–szerda):** telepítsd a VS Code-ot és a Claude Code-ot, és gyakorold be a 6-8 alapparancsot egy üres mappában — legalább `/clear`, `/compact` és egy plan mode próba.

**4b (csütörtök–péntek):** regisztráld a domaint a Sybell-en, állítsd be a Google Workspace-fiókodat, és vidd végig az email-hitelesítési checklistet (MX, SPF, DKIM, DMARC).

**Akkor vagy kész, ha** a Claude Code-nak magabiztosan adsz parancsot a saját mappádban, ÉS a `te@tedneved.hu` címedről küldött teszt-email 9/10-et hoz a mail-tester.com-on.

## Ha elakadtál

- **„`claude` parancsot nem találja a terminál."** PATH-probléma: zárd be és nyisd újra a terminált, vagy futtasd a telepítő által kiírt PATH-frissítő sort.
- **„Permission denied az npm install-nál."** Jogosultsági hiba: Mac/Linux alatt `sudo` nélkül, Node version managerrel (pl. `nvm`) telepíts — a `sudo npm install -g` később több bajt okoz.
- **„Beírtam a DNS-rekordot, de nem történik semmi."** DNS-propagáció: 30 perctől 24 óráig tarthat — várj, és a `mxtoolbox.com`-on ellenőrizd, publikus-e már a rekord.
- **„A Google nem fogadja el a domain-igazolást."** GWS-verifikáció: a TXT-rekordot pontosan a Google Admin által mutatott Host/Value párossal másold be, és adj neki 30-60 percet.
- **„A Claude Code nem enged be."** Bejelentkezési hiba: futtasd a `claude` parancsot újra, és a böngészős loginnál azzal a fiókkal lépj be, amin az előfizetés él.

## Letölthetők

- `prompts.md` — promptok a telepítéshez és a Google Workspace setuphoz
- `reference.md` — a teljes DNS-referencia: az 5 MX-rekord, SPF/DKIM/DMARC pontos értékek, propagációs idők, tipikus hibák
- `SKILL.md` — Claude Code skill a modulhoz
