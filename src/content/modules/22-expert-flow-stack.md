---
lastReviewed: "2026-05-16"
---

# Bónusz · Az Expert Flow technológiai stack — mit használtam én

> Egy referencia-tár arról, milyen szolgáltatásokat használok ma az Expert Flow rendszerben. Nem azt mondja, hogy ezeket Neked is használnod kell — csak megmutatja, hova lehet eljutni, ha tovább építkezel a 12 modul után.

## Mire való ez a tár

A 12 építő modul egy minimális, kezdőbarát stack-re épül: Vercel, Cal.com, Kit, Google Workspace, Sheets, GA4, Stripe Payment Link. Ez bőven elég az első 5-10 ügyfélig. **Az Expert Flow rendszer mögött ennél lényegesen több szolgáltatás dolgozik** — nem mert szükséges, hanem mert menet közben fokozatosan kiderült, hogy hol mire van szükség. Ez a tár arra való, hogy lásd a teljes lehetőség-térképet, és ha valamelyik kategória érdekel, tudj utána olvasni.

**Fontos figyelmeztetés:** ne kezdj el most ezeket telepíteni. A 12 modulos alaprendszer hoz neked vásárlókat, ezek a szolgáltatások utána, fokozatosan jönnek be — egyszerre 1-2-t, ahogy a saját rendszered növekszik. Az Expert Flow stack-jét kb. 18 hónap alatt építettem fel — nem 18 nap alatt.

A csoportosítás 11 kategóriába rendezi a szolgáltatásokat, mindegyikhez 1-3 mondat magyarázattal.

---

## 1. Az alap stack — a kurzusban már megtanultad

Ezeket az első 12 hét alatt mind beépítetted a saját rendszeredbe:

- **Vercel** — weboldal-hoszting (5. modul)
- **GitHub** — kódtárolás (5. modul)
- **Sybell** — domain (4. modul)
- **Google Workspace** — Gmail, Drive, Sheets, Naptár, Docs (4. modul)
- **Cal.com** — konzultáció-foglalás + email automatika (7. modul)
- **Kit (ConvertKit)** — lead magnet form + welcome-sorozat (9. modul)
- **Google Sheets** — egyszerű CRM (10. modul)
- **Google Analytics 4** — webhely-mérés (11. modul)
- **Stripe Payment Link** — egyszerű fizetés (20. bónusz, videókurzus értékesítés)
- **Számlázz.hu** — magyar számlázás (12. modul)

Ez egy kezdő szolgáltató szakértőnek **bőven elég havi 1-3 millió Ft bevételig**. A többi kategória csak azoknak releváns, akik ezt túlhaladták.

---

## 2. AI-modellek és multi-model routing

A Claude egyetlen modell, de néha más modellt is érdemes meghívni — vagy mert olcsóbb (egyszerű feladatra), vagy mert van valami, amit jobban tud.

- **Anthropic Claude** — a fő modell, amivel a kurzus is készült (Sonnet, Opus, Haiku)
- **OpenAI GPT** — másodlagos modell, néha jobb hosszú szövegekre, plusz a Whisper transzkripció (20. bónusz, videovágás)
- **Google Gemini** — multimodális (kép + hang + szöveg), olcsó nagy mennyiségű adatra
- **OpenRouter** — egyetlen API, amin keresztül **200+ modell hívható** (Claude, GPT, Gemini, Llama, Mistral). Az Expert Flow Orchestrator-a ezt használja a model-routingra (egyszerű feladat → Gemini Flash, közepes → Haiku, komplex → Sonnet/Opus)

Amit megtanultam: az „egy modell mindenre" gondolkodás drága. A Haiku 10x olcsóbb az Opusnál, és sok feladatra elég.

---

## 3. Lead-kutatás és web scraping

A Scout-ügynök ezekkel a szolgáltatásokkal keres új potenciális ügyfeleket:

- **Apify** — multi-platform scraper (Google Maps, LinkedIn, Instagram, Facebook). Egy feladatot indítasz, megkapod 500-1000 lead adatát.
- **Exa** — AI-vezérelt webes keresés (Google CSE alternatíva, jobb minőségű találatok)
- **Google CSE (Custom Search Engine)** — domain-szűrt Google-keresés API-ból
- **Browser Use** — AI vezérel egy headless böngészőt (űrlap-kitöltés, login mögötti adat-leszedés)
- **Playwright** — szintén headless böngésző-vezérlés (deterministic, lassabb, de stabilabb)

Erre az 1-3 ügyfélnél még nincs szükség — a 8. modul ismerős-listája hozza az első néhányat. A Scout-rendszer a havi 5-10+ konzultációnál kezd értéket adni.

---

## 4. Tartalom-generálás (kép, videó, hang)

Amikor saját marketinghez vagy YouTube-csatornához kezdesz, ezek belépnek:

- **fal.ai** — gyors AI képgenerálás. Konkrét eszköz: **Nano Banana 2 face-swap** YouTube-thumbnail-ekhez (~$0.08/kép)
- **kie.ai** — Excalidraw-stílusú vizuális generálás (~$0.02-0.09/kép, jó vizuálisan oktató ábrákhoz)
- **ElevenLabs** — text-to-speech voice agent (használatban a kurzus weboldalán mint hang-asszisztens)
- **21st.dev (Magic MCP)** — AI-generált React/Tailwind UI komponensek
- **ViewCreator** — videó-feldolgozó pipeline (transzkripció + automatizmus)
- **Gemini 3.1 Flash Live** — real-time hang-agent (a kurzus oldalon)

A 20. bónuszban (videókurzus AI-vágással) az ElevenLabs és a Whisper a fő eszközök.

---

## 5. Email — két különböző cél

- **Kit (ConvertKit)** — marketing-email, sorozatok, automatizmusok (9. modul)
- **Resend** — tranzakciós email (pl. „köszönjük, hogy feliratkoztál" jellegű egy-darabos emailek, amit a kódból küldünk). Hasznosabb, ha saját app-ot építesz.

A különbség: a Kit a folyamatos kapcsolatra (newsletter, welcome-sorozat), a Resend a 1-1 alkalmi tranzakciós küldésre.

---

## 6. Adat-tárolás — kétféle szint

- **Google Sheets** — egyszerű CRM (10. modul). Az első 50-100 ügyfélig bőven elég.
- **Supabase** — PostgreSQL adatbázis felhőben (Expert Flow agent-rendszerének fő adatbázisa). Akkor érdemes átállni, amikor sok automatizmus dolgozik egyszerre, vagy real-time adat-szinkron kell több ügynök között.

A 12 modul csak Sheets-szel megy. Ha tovább építkezel skill-ekkel és AI-ügynökökkel, ott jön be a Supabase.

---

## 7. Kommunikáció és közösség

- **Skool** — közösségi platform (kurzus, posztok, beszélgetések, beépített előfizetés egy helyen). Ha kurzusod körül közösséget építenél, ide érdemes nézni.
- **Telegram** — admin-bot (én magamnak küldök vele üzeneteket: pipeline-státusz, bejövő foglalások, riasztások). Egyetlen ember számára hasznos, mert mobil-egyszerű.

---

## 8. CRM és projekt-menedzsment

- **ClickUp** — projekt-menedzsment (Trello/Asana alternatíva). Az Expert Flow Manager-ügynöke a ClickUp-on tart számon minden ügyfél-projektet. Akkor releváns, ha 10+ aktív ügyfeled van egyszerre.

---

## 9. Form-szűrés és webhookok

- **Typeform** — szépen tervezett szűrőkérdés-űrlapok a konzultáció előtt. A Cal.com kérdéseinek alternatívája, ha a tanuló sokat akar tudni az ügyfélről, mielőtt időpontot adna.

---

## 10. Analytics — két szint

- **Google Analytics 4** — kezdő-szintű webhely-mérés (11. modul). Ingyenes, elég.
- **PostHog** — termék-analitika (event-tracking, funnel-analízis, session-recording). Akkor jön be, ha saját webapp-od van, és az ügyfél-utat akarod látni a kattintás-szintig. Az Expert Flow tanácsadó ügyfeleinek dashboard-jain ez fut.

---

## 11. CMS és weboldal-eszközök

- **Webflow** — no-code CMS-rendszer (vizuális szerkesztő). Akkor releváns, ha az ügyfeleknek építesz blog-ot, marketingoldalt, és nem akarsz mindent kódból írni. Az Expert Flow ezzel az MCP-vel automatizál.
- **Vercel** — fejlesztőbarát hoszting (5. modul) + saját webapp-deploy.
- **Bitly** — link rövidítő, követéssel. Hasznos, ha social mediában osztasz meg sok linket, és tudni akarod, melyik kattintást hozta.

---

## 12. Külső integrációk

- **YouTube Data API** — videó-feltöltés és statisztika automatizálás. Ha saját YouTube-csatornád lesz a 20. bónuszból, érdemes nézni.

---

## A teljes kép

A `.env` fájlomban most kb. 52 szolgáltatás kulcsa fut. Ezek 11 kategóriába esnek, és **a kategóriák egymásra épülnek**:
- Az 1. kategória (alap stack) → a 12. hét végén már a kezedben van
- A 2-4. kategóriák → akkor jönnek, amikor saját AI-rendszer építésébe kezdesz
- Az 5-10. kategóriák → 20-50 aktív ügyfél után válnak relevánssá
- A 11-12. → ha másoknak is építesz (ügynökségi modell)

**Amit megtanultam:** a túl korai stack-növelés ELLENSÉG. Minden új szolgáltatás 5-15 perc setupot, havi költséget, integrációs munkát hoz. Inkább 18 hónapig dolgozz a 7 alapszolgáltatással, mint hogy 18 napon belül 25-öt összelegózz.

## Mit NEM tartalmaz ez a tár

A `.env`-ben pár olyan kulcs is szerepel, ami a Expert Flow saját ügynöki rendszerének belső azonosítója (pl. `CRON_SECRET`, `EXPERT_FLOW_BOT_TOKEN`). Ezek nem külső szolgáltatások, hanem az én belső authentikációm — a kurzus szempontjából nincs jelentőségük.

## Resources

- 📄 [resources.md](./resources.md) — minden szolgáltatás közvetlen linkje és árazási gyors-referencia

## Kapcsolódó modulok

- 4. modul · Eszközök, Claude Code alapok és online jelenlét
- 9. modul · Lead magnet és email lista (Kit alapok)
- 10. modul · CRM és belső rendezés (Google Sheets alapok)
- 20. bónusz · Videókurzus AI-vágással (Whisper, ElevenLabs, Stripe)
- 21. bónusz · Claude Code productivity-trükkök (Context7, Chrome DevTools MCP)
