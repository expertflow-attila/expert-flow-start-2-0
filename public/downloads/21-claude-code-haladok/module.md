# Bónusz · Claude Code productivity-trükkök magyarul

> Húsz konkrét trükk három szinten — kezdő, köztes, haladó. A 4. modulban már megtanultad az alapokat; ez a referencia ott segít, amikor gyorsabb és olcsóbb akarsz lenni.

## Mire való ez a tár

A 4. modul 02. leckéje végigvitt a Claude Code alapokon (parancsok, plan mode, sub-agentek, skills, MCP). Ezzel együtt a Claude Code közössége (angol nyelvterületen) az elmúlt évben felgyűjtött ennél lényegesen több productivity-fogást — a teljes lista 32 darabból áll. Itt ennek a 20 leghasznosabb darabját adom át magyarul, három szintre bontva. Ami túl haladó vagy túl niche volt (pl. BigQuery-integráció, Agent Teams, git worktrees), azt szándékosan kihagytam — a kurzus végén a „Mit hagytam ki" szekció listázza, ha tovább akarsz menni.

A hangnem itt is átadó-tapasztalati: ezek a trükkök nálam dolgoznak, nem mindegyiket kell egyszerre bevezetned. Inkább 2-3-at hetente, és figyeld, melyik segít a saját ritmusodban.

## A. Alapok — 8 trükk, amit minden Claude Code-felhasználónak érdemes tudni

### 1. `/init` minden projektben

Egy új mappában az első parancsod legyen a `/init`. A Claude végigolvassa a fájlokat, és generál egy `CLAUDE.md` fájlt, amit minden további session betölt mint rendszerprompt. Ez azt jelenti, hogy a projekt konvencióit, szabályait, kulcs-fájljait nem kell minden alkalommal újra elmondanod. Ha új projektet indítasz, a Claude segíthet megírni — csak mondd el neki a projekt célját, a tech-stacket, a fő mappákat.

### 2. Status line a terminálban

A `/statusline` paranccsal beállíthatsz egy mini-dashboardot a terminál aljára: aktuális modell, kontextus százalék, költség. Egy kis script lesz, ami minden parancs után frissül. Hasznossága: látod, mikor kezd telve lenni a kontextus, így nem érnek meglepetések — időben tudsz `/compact`-ot vagy `/clear`-t nyomni.

### 3. Tartsd kicsiben a kontextust

Ne öntsd be az egész projekt-fájlt egy beszélgetésbe. Adj a Claude-nak csak annyi kontextust, amennyi az adott feladathoz szükséges. Bontsd a nagy problémát kis, fókuszált lépésekre. Minél kevesebb zaj a kontextus-ablakban, annál jobban dolgozik az AI — egyszerű, mégis a legtöbben figyelmen kívül hagyják.

### 4. `/context` — a token-fogyasztás röntgene

Ha lassul vagy bizonytalannak érzed magad, hogy mi eszi a tokenjeidet, a `/context` parancs pontosan megmutatja: mennyit foglal a rendszerprompt, a fájlok, az MCP-szerverek, a beszélgetés. Ezekből százalékos bontásban látod, hol van a baj — onnan tudod, mit kell visszafogni.

### 5. `/compact` 60%-nál, `/clear` témaváltáskor

Amikor a kontextus 60% körül jár, futtass `/compact`-ot — a Claude összesűríti a beszélgetést anélkül, hogy elveszítené a kulcsdöntéseket. Plusz: a parancsban előírhatsz, mit őrizzen meg konkrétan, pl. „/compact, de tartsd meg az API-döntéseket és a séma-leírást". Ha viszont teljesen új feladatra váltasz, használj `/clear`-t — a CLAUDE.md és a támogató fájlok megmaradnak, de a beszélgetés tiszta lap.

### 6. Mindig plan mode-ban kezdj

A Shift+Tab-bal ciklusként végigléptetheted a módokat, vagy manuálisan választhatsz plan mode-ot. Ebben a Claude olvas, kutat, kérdez vissza — de NEM ír egyetlen sort sem, amíg jóvá nem hagyod a tervet. Először a stratégia tisztázódik, utána mész végrehajtásra. Nálam ez jött be: 30%-kal kevesebbszer kell visszaszólni, hogy „nem így gondoltam".

### 7. Bánj Claude-dal junior fejlesztőként

Ne csak parancsokat adj („írj egy függvényt, ami X-et csinál"). Ehelyett adj problémát: „Hogyan kezeljük a növekedés-mérést?", és hagyd, hogy átgondolja a megközelítést. Ha a saját feltételezéseit elmagyarázza, többször is jobb lesz a végeredmény. Ez a plan mode mélyebb változata — a Claude megszünteti a nyilvánvaló rossz megoldásokat, mielőtt írni kezdene.

### 8. Önellenőrzés a teendő-listán

Amikor a Claude teendő-listát készít a feladathoz, építsd be a verifikációs lépéseket is. Például: (1) Építsd meg a webhelyet → (2) Készíts screenshotot és ellenőrizd, hogy jól néz ki → (3) Nyisd meg a Chrome DevTools-ot, és győződj meg róla, hogy nincs hiba. Plusz egy szabály: „Ne lépj a következő pontra, amíg nem vagy 95%-os bizonyossággal biztos, hogy az aktuális rendben". 90%-os egy-shot sokkal jobb, mint 60%-os.

---

## B. Köztes — 7 trükk, amikor már gyorsabban akarsz dolgozni

### 9. Sub-agentek párhuzamos munkára

A fő prompt-ban kérheted a Claude-tól, hogy komplex feladatra bontsa szét sub-agentekre. Mindegyik kap saját kontextus-ablakot, és (ha akarod) saját modellt is. Egyikük kutat, másik teszteket ír, harmadik más megközelítést próbál — utána mind visszajelez a fő agentnek. Ez kulcsfontosságú nagy projekteknél, mert a fő kontextusod tiszta marad.

### 10. Custom skills a `~/.claude/skills/` mappában

Készíts újra-felhasználható prompt-fájlokat a `.claude/skills/` mappában, mindegyikben egy `SKILL.md` frontmatter-rel. Példák, amiket én használok: `kontextus-tisztito.md`, `kod-ellenor.md`, `landing-generalo.md`. Ezeket aztán természetes nyelven vagy `/skill-nev` paranccsal hívod elő — minden alkalommal ugyanaz a workflow fut. A csapatodnak GitHub-ra commitolod, és mindenki ugyanazokat az SOP-kat használja.

### 11. CLAUDE.md folyamatos frissítése — de óvatosan

Amikor felfedezel egy új mintát, gotchát, vagy konvenciót, vedd bele a CLAUDE.md-be. Így a következő session-ben a Claude már tudja, és nem ismétled meg a hibát. **Vigyázat:** a CLAUDE.md minden beszélgetésben rendszerpromptként betöltődik, tehát a tokeneidet eszi. Tartsd 150-200 sor alatt — ha hosszabb lesz, vagy trim-eld, vagy linkeld kifelé másik fájlokra (pl. „a részletes architektúrához lásd az `ARCHITECTURE.md`-t").

### 12. Korai kilépés (Esc) és újrakérdezés

Ha észreveszed, hogy a Claude rossz irányba megy, NE várd meg, hogy befejezze. Nyomd meg az Esc-et, korrigáld, és kérdezd újra. Minden token, ami rossz irányba megy, elveszett kontextus. Steerelj korán és szorosan.

### 13. Kihívd a választ („scrap that, csinálj jobbat")

Ha a Claude valami csak „okés" választ ad, nyomj rá: „Dobd ki, csináld elegánsabban", vagy „Ez nem elég, próbáld teljesen más megközelítéssel". Sokszor a második próba drámaian jobb, mert a magasabb mércét most már ismeri. Plusz: amikor egy jobb verzió landol, kérd, hogy frissítse magát (akár a CLAUDE.md-et, akár egy skill-t), hogy ne ismételje meg a hibát.

### 14. `/rewind` az undo-hoz

Ha rossz fordulat volt, írd be `/rewind` — a Claude visszalép egy korábbi pontra a beszélgetésben. Nem kell újrakezdened, gyors és tiszta.

### 15. Screenshot self-check (kiemelten az 5-6. modulnál)

A Claude lát képeket — ez egy nagy feloldás. Adj neki hibaüzenetet, inspiráció-oldalt, design-referenciát. Önellenőrző hurok: „Csinálj screenshotot a webhelyről, és mondd meg, jól néz-e ki a layout". Vizuálisan elemzi az oldalt, és visszajelzi, mi nem stimmel. Az 5. modul weboldal-építésénél: 3 passz design-screenshot-implementálás-ciklus, mielőtt a V1-et kiadná — sokkal jobb V1 jön ki ezzel.

---

## C. Haladó — 5 trükk, ami komoly különbséget hoz

### 16. Chrome DevTools MCP

A `https://github.com/ChromeDevTools/chrome-devtools-mcp` MCP szerver telepítésével a Claude Code közvetlenül vezérli a Chrome böngészőt: console-log olvasás, performance audit, screenshot, DOM-inspect, form-kitöltés. Az 5. modul weboldal-tesztelésénél kötelező. Mondat-példa: „Nyisd meg a `localhost:3000`-et, kattints a foglalás-gombra, és nézd meg, kapunk-e hibát a console-ban." Ezt egy prompttal megcsinálja.

### 17. ultrathink — maximális gondolkodási büdzsé

Amikor a Claude-nak nehéz problémán kell átgondolkodnia (architektúra-döntés, komplex debug, nagy refactor), vagy ha pár prompt után még mindig nem ad jó választ, írd be a parancsba a `ultrathink` szót. A terminál színesre vált, és a Claude a maximális ~32.000 tokenes gondolkodási büdzsét kapja. Ne használd egyszerű hibákra — de igen olyan döntéseknél, amik az egész rendszert érintik.

### 18. Engedélyek finomhangolása (allow/deny lista)

Sokan a `--dangerously-skip-permissions` flag-et használják, hogy a Claude minden engedélyt megkapjon — gyors, de nevét nem véletlenül kapta. Az okosabb út: a `~/.claude/settings.json`-ban explicit engedélyezed a biztonságos parancsokat (pl. `git status`, `npm install`, `ls`), és explicit megtiltod a destruktívokat (pl. `rm -rf`, `DROP TABLE`). A deny-lista mindig elsőbbséget élvez. Eredmény: ugyanaz a sebesség, sokkal kisebb kockázat.

### 19. Context7 MCP — friss könyvtár-dokumentáció

A `https://github.com/upstash/context7` MCP szerver megoldja, hogy a Claude tudása régi. Mivel a modell training-cutoff-fal van, néha kitalál nem létező API-kat (átnevezett, deprecated funkciókat). A Context7 lekéri a friss, verzió-specifikus docs-ot a legtöbb népszerű könyvtárhoz (Tailwind, React, Next.js, MongoDB stb.), és beinjektálja a beszélgetésbe, mielőtt a Claude kódolna. Egy parancs telepítés, és minden további coding session jobb minőséggel megy.

### 20. Mobil távirányítás

Az újabb Claude Code-verziók támogatják, hogy a helyi session-t a telefonodról vagy bármely böngészőből irányítsd. A kódod nem hagyja el a saját géped — csak a vezérlő-kapcsolat fut a telefonon. Indítasz egy nehéz feladatot az asztalnál, elmész egy kávézni, és közben a telefonról steerelheted. Hasznos, ha a feladat hosszú futású, és nem akarsz a gép előtt ülni.

---

## Mit hagytam ki — és miért

Az eredeti 32 hack listából 12 kimaradt. Ha haladsz tovább, ezek vannak még:

- **Voice input (`/voice`)** — magyar nyelv-felismerés még gyenge
- **Haiku-sub-agentek** — modellválasztás finomhangolás, túl haladó kezdőnek
- **CLAUDE.md routing kifelé** — összevontam a #11-essel
- **`/hooks` notification** — opcionális, csak akkor érdemes, ha párhuzamos sok session-t futtatsz
- **Inspiráció-oldalak klónozása** — etikailag homályos, jobb saját design
- **Git worktrees (parallel sessions)** — komoly Git-tudás kell hozzá
- **API endpoint vs MCP** — token-mikrooptimalizálás
- **`/loop` recurring task** — 3 nap után lejár, korlátos
- **VPS always-on** — projekt-szintű döntés (a kurzusban: Sybell vagy Mac elég)
- **No-SQL data analytics (BigQuery)** — csak data-cégeknek
- **Agent Teams** — drága, lassú; sub-agentek többnyire elégek

Ha valamelyik felkeltette az érdeklődésedet, érdemes a Claude Code dokumentációt és a `claudemarketplaces.com`-ot átnézned — a teljes mélység ott van.

## A modul saját anyagai

- 📄 [resources.md](./resources.md) — linkek és további olvasmányok

## Kapcsolódó modulok

- 4. modul, 02. lecke — Claude Code alapok (a kötelező rész, mielőtt ide mész)
- 5. modul, 02-03. lecke — Chrome DevTools MCP a webhely-építéshez
- 9. modul — itt használhatod a sub-agenteket az 5 emailes welcome-sorozat generálásához
