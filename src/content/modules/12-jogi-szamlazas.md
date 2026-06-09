---
lastReviewed: "2026-06-09"
---

# 12. modul · Jogi és számlázási minimum

> KATA, EV, Számlázz.hu, NAV, ÁSZF — a magyar jogi környezet kötelező alapja, ami nélkül az első fizető ügyfél nem szállítható.

> **TL;DR** — Vállalkozási forma + magyar számlázás + fizetés + ÁSZF/GDPR — az első fizető ügyfél előtti minimum.
> - **Forma**: csak magánszemély ügyfélnél KATA; vegyes (céges is) ügyfélkörnél EV átalányadó; több alapító és nagy forgalom esetén Kft.
> - **Számlázás**: Számlázz.hu vagy Billingo + NAV Online Számla regisztráció (kötelező)
> - **Fizetés**: belföldön Stripe HUF (~2% + 50 Ft), külföldön Wise Business multi-currency, számlázás külön
> - **Könyvelő**: 6 kérdéses választó-lista + induló költség-összesítő az első 3 hónapra
> - **Kötelező jogi**: ÁSZF + Adatvédelmi nyilatkozat — NE AI-val generáld, jogi sablon (5-10 ezer Ft) vagy tanácsadó

**Utoljára ellenőrizve: 2026-05-15.** A magyar adózási szabályok változnak (a KATA-küszöbtől az ÁFA-szabályokig). Ellenőrizd a NAV oldalán mindig — ez a modul tájékoztató, nem könyvelői tanácsadás.

## Hol tartasz

A 10. modulban rendet raktál a háttérben, a 11.-ben mérsz — ez az utolsó építőelem a 12 hétből. Nem inspiráló modul — jogi és adózási minimum, ami nélkül vállalkozni nem lehet Magyarországon. Sok kezdő tolja maga előtt hónapokig („majd ha lesz pénz"), és az első ügyfél előtt kerül bajba.

Három alap-kérdés:
1. Vállalkozási forma (KATA, EV, Kft.)
2. Számlázó-rendszer (Számlázz.hu vagy Billingo)
3. Kötelező jogi szövegek (ÁSZF, Adatvédelmi nyilatkozat)

## Mit építesz meg ezen a héten

A vállalkozásod jogi minimuma: kiválasztott forma, működő számlázó NAV-bekötéssel, fizetési megoldás, ÁSZF és adatvédelmi nyilatkozat a webhelyen — és egy könyvelő, akivel beszéltél.

## 01. KATA / EV / Kft. — melyik forma?

Magyarországon kezdő szolgáltatóknak három alap-forma jön szóba. A **2022 szeptemberi KATA-reform** óta a választás logikája megváltozott: ma az számít, kinek számlázol (magánszemély vagy cég), nem csak az, hogy mennyit. **Nem vagyok könyvelő**, és a magyar adójogi szabályok évente változnak — a `resources.md`-ben benne lesznek a friss NAV-források, plusz egy ajánlott könyvelő-irány, ahol kérdezhetsz.

### KATA (Kisadózó vállalkozók tételes adója)

**Kinek érdemes**: kis- és középvállalkozó, aki **kizárólag magánszemélyeknek** számláz (pl. coach, masszőr, designer közvetlen ügyfeleknek). 2022 szeptember óta a KATA jelentősen szigorodott:

- **Csak magánszemélyeknek számlázhatsz**. Ha egy cégtől, EV-től, más vállalkozótól származó bevétel érkezik (NAV nyelvén: „kifizetőtől származó bevétel"), a **KATA-alanyiságod megszűnik**.
- Éves bevételi keret: **18 millió Ft**. E felett **40% különadó** terheli a túlfolyót.
- **Havi adó**: 50 000 Ft tételes adó. Csak főfoglalkozású egyéni vállalkozó választhatja — mellékállás vagy heti 36 órás munkaviszony mellett ez a forma nem megfelelő.
- Egyszerű, kevés adminisztráció.

**NEM jó**: ha céges ügyfeleid is vannak (akár csak 1 céges szerződés is megszünteti a KATA-alanyiságot).

**Konkrét lépések**:
1. NAV ÁNYK / OBM-en jelentkezés be
2. Havi befizetés: 50 000 Ft tételes adó (csak főfoglalkozású EV)
3. Ha céges ügyfél is jön: válts át EV-re (átalányadó vagy VSZJA)

**Mindig ellenőrizd a NAV oldalán**: https://nav.gov.hu/ado/katas-voltam/gyakran-ismetelt-kerdesek

### Egyéni vállalkozó (EV) — átalányadó vagy tételes (VSZJA)

**Kinek érdemes**: ha **vegyes az ügyfélkörod** (magánszemély + cég), vagy ha B2B szolgáltató vagy (ügynökség, tanácsadó, fejlesztő, akinek céges ügyfelei vannak). A KATA-reform óta a legtöbb online egyéni vállalkozónak ez a logikus választás.

- **Átalányadó**: a bevétel egy fix %-át veszi a NAV költségátalánynak (szolgáltatóknál általában 40%, így a bevétel 60%-a az adóalap), és erre fizetsz SZJA-t + járulékot. Egyszerűbb mint a tételes, de bevételi plafonja van (jelenleg a minimálbér tízszerese, évente változik — ellenőrizd).
- **Tételes (VSZJA)**: tényleges költségekkel számolsz, bonyolultabb adminisztráció, de magasabb költséghányadnál előnyösebb.
- Cégeknek és magánszemélyeknek is számlázhatsz, nincs „kifizetői" korlát.

### Kft. (Korlátolt felelősségű társaság)

**Kinek érdemes**: ha **nagyobb forgalomra** terveznél, ha **több tulajdonos** közösen indít, vagy ha a felelősséget el akarod választani a magánvagyontól. Magasabb adminisztrációs teher (kötelező könyvelő, mérleg, beszámoló), de profi imázs és skálázhatóság.

### Mit válassz indulásnál?

A saját utamon ezt láttam: ha **csak magánszemélyeknek** szolgáltatsz és nem terveznél céges ügyfelet, akkor **KATA** a jó. Ha **céges ügyfeleid (is) lesznek**, akkor **EV átalányadóval** indulj. Ha **több alapító és nagy forgalom** jön, akkor **Kft.** Mielőtt döntesz, ülj le egy könyvelővel 30 percre — a könyvelői költség (5-15 000 Ft/hó) sokszor megéri a fejtörés árán, és a NAV-szabályok évente változnak.

**Kötelező NAV-források a döntéshez**:
- https://nav.gov.hu/ado/katas-voltam/gyakran-ismetelt-kerdesek
- https://nav.gov.hu/ugyfeliranytu/valaszol-a-nav/uj-kata/az-adoalanyisag-megszunese

## 02. Hogyan válassz könyvelőt — 6 kérdés

Ez nem könyvelő-ajánlás — kérdéslista, amivel te magad szűrsz. Az első beszélgetésen (a legtöbb könyvelő ad 20-30 perces bemutatkozó hívást) ezt a hatot tedd fel:

1. **Hány egyéni vállalkozó ügyfele van most?** Ha főleg Kft.-kkel dolgozik, a te ügyed mellékes lesz.
2. **Dolgozik-e online szolgáltatás-értékesítőkkel** — tanácsadó, kurzus, digitális termék? Az online számlázási helyzeteket nem minden könyvelő ismeri.
3. **Van-e tapasztalata Stripe-os vagy külföldi (EUR/USD) bevétellel?** Ha Wise-t és Stripe-ot terveznél, ez nem lehet neki újdonság.
4. **Mennyi a tipikus válaszideje** egy emailes kérdésre? Egy konkrét szám kell, nem „hamar".
5. **Mi a havi díjsávja** egy induló, egyszerű egyéni vállalkozásnál? Így összehasonlíthatóvá válik a piac.
6. **Intézi-e a NAV-ügyeket** — bevallások beadása, ügyfélkapus levelezés —, vagy csak könyvel, és a NAV-kontakt rajtad marad?

Két-három könyvelővel beszélj, mielőtt döntesz. Nem a legolcsóbbat keresed — azt, akinek a te ügyfél-profilod ismerős terep.

## 03. Számlázz.hu (vagy Billingo) + NAV bejelentkezés

A magyar számlázás 2021 óta digitális — papír-számla már nem működik. Két nagy szolgáltató:

- **Számlázz.hu** — a legelterjedtebb, ingyenes alap-csomag, kb. 5000 Ft/év a fizetős verzió
- **Billingo** — modernebb felület, hasonló árazás

Mindkettő automatikusan küldi az adatokat a NAV-nak (Online Számla rendszer, kötelező).

**Setup-lépések**:
1. Regisztráció
2. Vállalkozás-adatok (adószám, székhely)
3. Számla-sablon (logo, fejléc)
4. NAV Online Számla regisztráció külön a `onlineszamla.nav.gov.hu`-n — kell egy „technikai felhasználó", amit a Számlázz.hu/Billingo automatikusan kezel

Az első számla előtt teszteld egy sztornózott teszt-számlával — ne az első élő ügyfélnél derüljön ki, hogy valami nem stimmel.

## 04. Fizetési megoldások (Stripe HUF / Wise)

Amikor az első éles ügyfél fizet, két alap-kérdést kell letenned: **(1) belföldi HUF-fizetés**, ha magyar magánszemélyeknek vagy cégeknek számlázol, és **(2) nemzetközi fizetés**, ha külföldről jön a bevétel (EUR/USD/GBP). Mindkettőre van egy aktuális, 2026-ban használható, gyors-fiók-aktiválású opció.

### Stripe HUF (belföldi bankkártya)

A Stripe **2024 óta hivatalosan kezeli a magyar forintot** — magyar bankszámlára fizet ki HUF-ben, és a magyar vevő bankkártyával (Visa/Mastercard, Apple/Google Pay) fizet közvetlenül a webhelyeden. Amit tudnod kell:

- **Díj**: ~2% + 50 Ft fix tranzakciónként (európai kártyákra), nem-EU kártyára +1%.
- **Kifizetés**: heti (default) magyar IBAN-ra, vagy napi (kérésre).
- **Setup**: `stripe.com` oldalon fiók-aktiválás (vállalkozás-adatok, adószám, IBAN), KYC/AML (személyi igazolvány + cégadatok), 1-2 nap alatt élesedik.
- **Két integráció-szint**:
  - **Stripe Checkout** (no-code): egy URL-t generálsz a Stripe-fiókodban, kiteszed a weboldaladra („Foglalj most" gomb), a vevő a Stripe-on fizet, te a kész tranzakcióról emailt kapsz. Nincs kód, 10 perc setup.
  - **Payment Intent API** (custom): saját landing-on a Stripe Elements form, teljes brand-kontroll, kb. egy óra Claude Code-dal.
- **Magyar számlázás**: a Stripe **nem ad NAV-konform e-számlát** — ezt párosítsd a Számlázz.hu-val (vagy Billingo-val), és minden Stripe-fizetésre kézzel vagy webhook-on át állítsd ki a magyar számlát. A webhook-integrációhoz a Számlázz.hu API + Stripe webhook + egy 20-soros Vercel Function elég.

### Wise (nemzetközi átutalás és multi-currency)

A **Wise Business** (`wise.com/business`) a Stripe párja, ha **külföldi ügyfeled is van**, vagy ha EUR-ban (US-ban USD-ben) szeretnél árazni:

- **Multi-currency számla**: digitális IBAN EUR, USD, GBP, AUD és további 9 devizában — saját nevedben kapod meg ezeket, vevő úgy fizet, mintha helyi átutalás lenne (európai IBAN EUR-ban, US ACH USD-ben).
- **Valós árfolyam (mid-market)** + ~0.5-1% váltási díj — sokkal kedvezőbb, mint a magyar bank devizaszámla (ott 2-4% szokott lenni).
- **Kifizetés**: az EUR/USD bevételt onnan átutalod a magyar HUF-számládra mid-market árfolyamon.
- **Setup**: `wise.com` oldalon Business fiók (vállalkozás-adatok, KYC, 1-3 nap), ingyenes az alap, csak a tényleges átutalási/váltási díjat fizeted.
- **NAV-szempont**: a Wise-on érkező EUR/USD bevétel is **magyar bevétel** (a magyar adójogban), magyar e-számlát kell rá kiállítani (Számlázz.hu-n EUR-ban), és a HUF-ra átszámolt összeg után KATA/SZJA/ÁFA fizetendő.

### Mit válassz?

- **Csak magyar magánszemély ügyfél, KATA esetén** — Stripe HUF + Számlázz.hu, Wise nem kell.
- **Magyar + nemzetközi vegyes ügyfélkörnél** — Stripe HUF (HUF) + Wise (EUR/USD) + Számlázz.hu.
- **Csak nemzetközi (külföldi vevők) esetén** — Stripe (EUR/USD) + Wise multi-currency + magyar EV/Kft.

Alternatívák magyar piacon (ha a Stripe nem fér be): **Barion** (magyar feldolgozó, SimplePay, Apple/Google Pay), **SimplePay** (OTP Mobil), **PayPal** (régóta van, magasabb díj).

## 05. ÁSZF + Adatvédelmi nyilatkozat a webhelyre

Két kötelező jogi szöveg a webhely lábához:

- **ÁSZF (Általános Szerződési Feltételek)** — kötelező, ha online szolgáltatásokat értékesítesz. Tartalmazza: mit szolgáltatsz, milyen feltételekkel, milyen árakon, panaszkezelés, felmondási feltétel.
- **Adatvédelmi nyilatkozat (GDPR)** — kötelező, ha email-címet, nevet vagy bármilyen személyes adatot gyűjtesz (Kit feliratkozás, Cal.com foglalás). Tartalmazza: milyen adatokat gyűjtesz, miért, mennyi ideig, kihez kerülhet, hogyan lehet kérni a törlést.

**Ezeket NE generáld egyedül AI-val** — jogi dokumentumok, amiknél hibázni következményekkel jár. Két opció:

1. Szabályos jogi sablon (5-10 ezer Ft, pl. `jogiportal.hu` vagy hasonló)
2. Online jogi tanácsadó szolgáltatás, saját webhelyhez szabott szöveg

A két fájlt PDF-ként vagy HTML-szövegként a webhely láb-szekciójához linkeled.

## 06. Mennyibe kerül az indulás — az első 3 hónap

Összerakva az eddigieket: ennyi pénz kell ahhoz, hogy jogilag rendben elindulj. **Tájékozódó összegek, nem árajánlat. Utoljára ellenőrizve: 2026-06-09.**

| Tétel | Első 3 hónap | Megjegyzés |
|---|---|---|
| EV indítás (Webes Ügysegéd) | 0 Ft | online bejelentés, Ügyfélkapu kell hozzá |
| Kamarai hozzájárulás | 0 Ft | a korábbi évi 5 000 Ft-os kötelező hozzájárulást 2025-től eltörölték — ellenőrizd a területi kamaránál |
| Könyvelő (3 hónap) | 15 000 – 45 000 Ft | 5-15 ezer Ft/hó induló egyéni vállalkozásnál |
| Eszközök (a 0. modul stackje) | 15 000 – 30 000 Ft | éves szinten 50-100 ezer Ft; a domain és a számlázó éves díja előre esedékes |
| Jogi sablonok (ÁSZF + GDPR) | 5 000 – 10 000 Ft | egyszeri kiadás |
| **Összesen** | **kb. 35 000 – 85 000 Ft** | **adó és járulék nélkül** |

Az adó és a járulék azért nincs a táblában, mert formafüggő. KATA-nál fix 50 000 Ft/hó tételes adó — három hónapra 150 000 Ft, bevételtől függetlenül. Főállású EV-nél átalányadóban akkor is van havi járulékminimum, ha még nincs bevételed — mellékállás mellett nincs ilyen minimum. Pontos összeget a könyvelőddel számolj, mielőtt bejelentkezel: ez az egyik fő ok, amiért a 02. szakasz beszélgetése előzi meg a regisztrációt.

## Én így csináltam

> **[ATTILA TÖLTI KI: a saját vállalkozási formád, mennyibe került ténylegesen az indulásod (könyvelő, sablonok, eszközök), és mit csinálnál ma máshogy]**

## Heti feladat

1. Beszélj legalább egy könyvelővel a 02. szakasz 6 kérdésével, és dönts a vállalkozási formáról (KATA, EV vagy más).
2. Regisztrálj a Számlázz.hu-n vagy Billingo-n a NAV Online Számla bekötéssel együtt, és állíts ki egy sztornózott teszt-számlát.
3. Tedd ki az ÁSZF-et és az Adatvédelmi nyilatkozatot a webhelyed láblécébe.

**Akkor vagy kész, ha** a teszt-számla megjelent a NAV Online Számla rendszerben, a két jogi dokumentum linkje él a láblécben, és le tudod írni egy mondatban, melyik formával és miért indulsz.

A 12 hét végén állsz egy működő vállalkozással: van mondatod, vevőd, ajánlatod, weboldalad, lead magneted, CRM-ed, méréseid, és jogilag is rendben vagy. Innentől már nem építesz tovább alapot — innentől csinálod. Hogy pontosan hogyan, arról a 13. modul szól: az első 90 nap a program után.

## Ha elakadtál

- **„Nem tudom eldönteni a formát."** Az első szűrő egyetlen kérdés: kinek számlázol — csak magánszemélynek, vagy cégnek is? Utána a könyvelős 30 perc dönt. Ez a 30 perc a program egyik legjobban megtérülő ideje.
- **„Még nincs bevételem, minek már most könyvelő?"** Mert a forma-választást utólag javítani drágább, mint előre megkérdezni. És főállású EV-ként a járulék akkor is megy, ha bevétel még nincs — ezt előre kell tudnod.
- **„Sokallom az ÁSZF-sablon árát."** Az 5-10 ezer Ft egyszeri kiadás — a hibás vagy AI-generált jogi szöveg kockázata ennél nagyobb. A költség-táblában benne van: ne ezen a tételen spórolj.
- **„Félek, hogy elrontok valamit a NAV felé."** Pont ezért van a teszt-számla: a számlázód automatikusan jelent a NAV-nak, és a sztornózott próbán látod, hogy a bekötés működik. A bevallásokat pedig a könyvelőd viszi — a 02. szakasz 6. kérdése pont erről szól.

## Letölthetők

- `prompts.md` — orientációs promptok a forma-döntéshez és a setup-lépésekhez (könyvelőt nem helyettesít)
- `reference.md` — KATA/EV/Kft. összehasonlító tábla + NAV-linkek + setup-referencia
- `SKILL.md` — Claude Code skill a modulhoz
