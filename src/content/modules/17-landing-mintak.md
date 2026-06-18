---
lastReviewed: "2026-06-09"
---

# Referencia-tár · Landing page minták

> **TL;DR** — Ez a modul egy referencia-tár: 6 kész landing oldal sablon, mindegyik más helyzetre. Nem sorban kell végigmenni rajta, akkor nyúlsz hozzá, amikor új ajánlatot vagy kampányt indítasz.
> - Megnézed, melyik a 6 típus, és melyik helyzethez melyik kell
> - Letöltöd a hozzá tartozó kész HTML fájlt, és a saját adataidra szabod
> - Minden sablon mobilra is jól néz ki, és magyar útmutató-kommentek vannak benne, hogy mit írj hova
> - Megérted, mikor melyik landinget érdemes használni, és mikor NE

## Modul áttekintés

Ettől a modultól már nem építünk sorrendben — referencia-tár. 6 landing sablon, mindegyik egyetlen letölthető HTML fájl, teljes Tailwind kóddal. Bármikor használhatók új szolgáltatás vagy kampány indításkor. Stílusuk szándékosan tiszta és minimalista: szürke kép-placeholderek, semleges színek, magyar `[KITÖLTENDŐ]` jelölések — Claude Code-dal szabod a saját adataidra, az 5. modul módszerével.

> A 6 wireframe-magyarázat alul a [Marketing Skiccfüzet](https://marketing-skiccfuzet.vercel.app) testvér-anyagra mutat — ott megnézheted a teljes vázlatot egy A4-es nyomtatható lapon. A funnel-szintű összefüggésekért nézd a [Funnel Tananyagot](https://funnel-tananyag.vercel.app).

## Melyik sablon kell neked?

Egy perc döntés: keresd meg a helyzetedet, töltsd le a hozzá tartozó fájlt.

| Ha ez a helyzeted | Ezt töltsd le |
|---|---|
| Hívással adod el a szolgáltatásod (új vagy magas árú ajánlat) | `konzultacios-landing.html` |
| Email-listát építesz ingyenes PDF-ért vagy sablonért cserébe | `lead-magnet-landing.html` |
| Élő online előadást hirdetsz, konkrét dátummal | `webinar-landing.html` |
| Bevált, referenciás szolgáltatásod van, projektet adsz el | `szolgaltatas-landing.html` |
| A terméked még készül, előzetes érdeklődést mérnél | `coming-soon-landing.html` |
| Validált, 300 ezer Ft+ ajánlatod van, hívás nélkül adnád el | `longform-sales-landing.html` |

Ha bizonytalan vagy, kezdd a konzultációs landinggel — kezdőként szinte mindig az visz az első ügyfélig.

## Videó

[VIDEO PLACEHOLDER]

## Fejezetek

- 0:00 — Bevezető: a 6 landing-típus mikor kell
- 1:00 — 1. Konzultációs landing (legtöbbet használt)
- 2:30 — 2. Lead magnet landing
- 4:00 — 3. Online előadás landing (webinar)
- 5:30 — 4. Szolgáltatás landing (érték-stack vizuálisan)
- 7:00 — 5. Coming soon landing (waitlist)
- 8:30 — 6. Long-form sales landing (Hormozi-stack)

## Almodulok

1. **Konzultációs landing** — Cal.com integrációval, leggyakoribb használat
2. **Lead magnet landing** — form + PDF küldés
3. **Online előadás landing** — webinar regisztráció, élő esemény
4. **Szolgáltatás landing** — érték-stack vizuálisan, fő szolgáltatásra
5. **Coming soon landing** — waitlist, email gyűjtés terméklaunch előtt
6. **Long-form sales landing** — komplett Hormozi-style ajánlat-oldal magas árú szolgáltatáshoz

## A 6 wireframe részletesen

### 1. Konzultációs landing — Lead Generation funnel

A leggyakrabban használt landing. Egy hosszú görgetés: hero + USP, mit kapsz a hívásban, kinek nem való, social proof, FAQ, beágyazott Cal.com widget. **Egyetlen CTA-gomb** ismétlődik 3-4 helyen ("Foglalj 25 perces hívást"). Konverziós cél: a látogató kalibrálja, hogy valóban illik-e hozzá a szolgáltatás, mielőtt időt foglal.

- **Mikor használd:** új szolgáltatást indítasz, vagy magas árú (>200 ezer Ft) ajánlatot kínálsz, ami discovery-call típusú értékesítést igényel
- **Mikor NE használd:** ha alacsony árú (<50 ezer Ft) terméket árulsz, ahol a hívás idő-pazarlás — ott közvetlenül Stripe payment link a CTA
- **Letölthető sablon:** `konzultacios-landing.html` — a modul oldalán, a letöltések között
- A sablon kommentjei megmondják, melyik szekcióba mit írj — a szövegeket a 6. modul módszerével írd meg.
- Részletes minta + wireframe: [Marketing Skiccfüzet — Konzultációs landing](https://marketing-skiccfuzet.vercel.app)

### 2. Lead magnet landing — Webinar / PDF registration

Rövid landing, egy célra: email-cím cseréje értékért. Hero + 3 bullet (mit kapsz a PDF-ben), beágyazott form, az "után" oldal pedig a fájl és egy első köszönő email. **Egy mező** kérdezz csak (email), max kettő (név is). Konverziós cél: email-lista építés, későbbi drip kampányhoz.

- **Mikor használd:** lista-építéskor, social mediából érkező hideg-forgalomra, vagy "Top 10 hiba" típusú edukáló tartalomhoz
- **Mikor NE használd:** ha a PDF nem old meg konkrét problémát — egy érdektelen lead magnetet nem javít fel a landing
- **Letölthető sablon:** `lead-magnet-landing.html` — a modul oldalán, a letöltések között
- A sablon kommentjei megmondják, melyik szekcióba mit írj — a szövegeket a 6. modul módszerével írd meg.
- Wireframe: [Marketing Skiccfüzet — Lead magnet](https://marketing-skiccfuzet.vercel.app) · funnel-folytatás: [Funnel Tananyag — Lead magnet drip](https://funnel-tananyag.vercel.app)

### 3. Online előadás landing — Webinar registration

Élő eseményre regisztráló oldal. Hero + dátum/idő nagyban, 3 pont amit megtanulsz, "Ezt akkor nézd meg ha…", regisztrációs form. Időzítő ha 7 napon belüli az esemény. Konverziós cél: élő részvétel előkészítése, ahol pitch is lesz.

- **Mikor használd:** havonta 1-2 alkalommal csinálsz élő tanítást, vagy launch előtt egy szolgáltatást készítesz elő
- **Mikor NE használd:** ha még nem építettél listát, és senki sem fog megjelenni — előbb egy lead magnet kell
- **Letölthető sablon:** `webinar-landing.html` — a modul oldalán, a letöltések között
- A sablon kommentjei megmondják, melyik szekcióba mit írj — a szövegeket a 6. modul módszerével írd meg.
- Webinar funnel teljes lépéssor: [Funnel Tananyag — Webinar funnel](https://funnel-tananyag.vercel.app)

### 4. Szolgáltatás landing — Service landing (érték-stack)

Egy konkrét szolgáltatáshoz: hero + outcome ("mi lesz utána"), 3 pillér (hogyan dolgozol), bemutatkozás (ki vagy), referenciák, érték-stack (anchor-logika), FAQ, CTA. **Hosszabb, mint a konzultációs** — itt nem 25 perces hívást kell eladni, hanem egy 3-6 hónapos projektet.

- **Mikor használd:** van 1-2 bevált esettanulmányod, és a fő szolgáltatásod köré rendezed a marketing-anyagot
- **Mikor NE használd:** új vagy a piacon, nincsenek referenciák — ekkor először konzultációs landinget építs, és ott szerezz visszajelzést
- **Letölthető sablon:** `szolgaltatas-landing.html` — a modul oldalán, a letöltések között
- A sablon kommentjei megmondják, melyik szekcióba mit írj — a szövegeket a 6. modul módszerével írd meg.
- Wireframe-tár: [Marketing Skiccfüzet — Szolgáltatás landing](https://marketing-skiccfuzet.vercel.app)

### 5. Coming soon landing — Waitlist

Egyetlen kép, mottó, email-form. "Valami készül, írj fel a listára, ha készen van értesítelek." Konverziós cél: kíváncsiság-építés egy launch előtt, és minőségi lista, akik kifejezetten ezt várják.

- **Mikor használd:** új terméket / kurzust építesz 4-8 hetes ciklusban, és előzetes érdeklődést szeretnél mérni (és listát építeni)
- **Mikor NE használd:** ha még a termék-ötlet sincs kalibrálva — akkor először 5 interjút csinálj a célközönséggel, ne weboldalt
- **Letölthető sablon:** `coming-soon-landing.html` — a modul oldalán, a letöltések között
- A sablon kommentjei megmondják, melyik szekcióba mit írj — a szövegeket a 6. modul módszerével írd meg.
- Példa: az [Expert Flow Library](https://expert-flow-school.vercel.app) launch coming-soon fázisa

### 6. Long-form sales landing — Hormozi-style ajánlat-oldal

Hosszú görgetés, magas árú (300 ezer Ft+) szolgáltatáshoz. Hero + ígéret, probléma-elhatárolás (kinek nem való), megoldás, érték-stack 8-12 elemmel, **3 árazási csomag** anchor-logikával, garancia, FAQ, CTA × 4-5 (Stripe vagy Cal.com). Konverziós cél: a látogató önállóan eljusson a vásárlásig, hívás nélkül — vagy minőségi hívás-előminősítéssel.

- **Mikor használd:** validált termék, 5+ referencia, és skálázni szeretnéd hívás-mentes értékesítéssel
- **Mikor NE használd:** ha új vagy a piacon, vagy a copy-d még nem kalibrált — előbb konzultációs landinggel teszteld a hookot
- **Letölthető sablon:** `longform-sales-landing.html` — a modul oldalán, a letöltések között
- A sablon kommentjei megmondják, melyik szekcióba mit írj — a szövegeket a 6. modul módszerével írd meg.
- Copy-keret + példák: [Copywriting tananyag — 10 lecke](https://copywriting-ef.vercel.app)

## Fő pontok

- Mindegyik típushoz van **letölthető HTML fájl** — egyetlen szöveges fájl, amit `index.html`-nek nevezel át és módosítasz.
- Mindegyik **mobilra optimalizálva**, **Tailwind CDN-ről** húzva — nincs build-folyamat, az 5. modul deploy-lépéssora változatlanul működik rá.
- A form-os sablonokban (lead magnet, webinar, coming soon) **kötelező hozzájárulás-checkbox** van — ne vedd ki, a GDPR miatt kell.
- Minden szekció elején **HTML komment** mondja meg, mi a szekció célja, mit írj bele, és mit ne — a kitöltendő helyeket `[KITÖLTENDŐ: ...]` jelöli.
- Egy landing önmagában nem elég — a Funnel típusok referencia-modul mutatja, hogyan kötöd be funnelbe.

## Források

- `konzultacios-landing.html` — Konzultációs landing sablon
- `lead-magnet-landing.html` — Lead magnet landing sablon
- `webinar-landing.html` — Online előadás (webinar) landing sablon
- `szolgaltatas-landing.html` — Szolgáltatás landing sablon (érték-stack)
- `coming-soon-landing.html` — Coming soon (waitlist) landing sablon
- `longform-sales-landing.html` — Long-form sales landing sablon
- [Marketing Skiccfüzet — 43 vázlat](https://marketing-skiccfuzet.vercel.app)
- [Funnel Tananyag — 23 funnel típus](https://funnel-tananyag.vercel.app)
- [Copywriting tananyag — 10 lecke](https://copywriting-ef.vercel.app)

## Heti feladat

Válassz ki a 6 mintából egyet, ami a következő ajánlatodhoz illik, és 45 perc alatt értsd meg a hozzá tartozó wireframe-logikát. A cél nem az implementáció — hanem hogy lásd, miért működik.

- Nyisd meg a [Marketing Skiccfüzet](https://marketing-skiccfuzet.vercel.app)-et, és válassz egy mintát, ami a következő szolgáltatásod / kampányod ajánlatához illik
- Töltsd le a hozzá tartozó HTML sablont, olvasd át a szerkezetét felülről lefelé, és írj le 5 mondatban, mi a hero / érték-stack / CTA-logikája
- Nyisd meg a saját jelenlegi landing-edet (vagy a 6. modul outputját), és jegyzeteld le 3 pontban, mit kell ehhez igazítanod

