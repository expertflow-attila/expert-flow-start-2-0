# Ajánlat és csomagok — Technikai referencia

## Az 5 elem mélyebben (a 01. leckéhez)

### 1. Vágyott eredmény
**Jó:** „Heti 8 óra visszanyert admin-idő"
**Rossz:** „Több szabadság"

**Jó:** „30 nap alatt élesben működő ügyfélszerző rendszer"
**Rossz:** „Sikeresebb vállalkozás"

**Jó:** „Havi 3 új konzultáció, ami fizet"
**Rossz:** „Több ügyfél"

A számszerűség kötelező. Ha nem tudsz számot adni, a vágyott eredmény még nem tisztázott.

### 2. Időkeret
- **Rövid (7-30 nap):** sürgősebb érzés, magasabb konverzió, de szigorúbb teljesítés
- **Közepes (30-90 nap):** reális, kényelmes, alapértelmezett választás kezdőknek
- **Hosszú (3-12 hónap):** csak komolyabb szolgáltatásnál, akkor is bontva milestone-okra

### 3. Kockázat-visszafordítás (garancia)

| Verzió | Mit ígérsz | Saját kockázat | Erősség |
|--------|-----------|----------------|---------|
| Teljes pénz-vissza | „Ha nem éred el X-et, visszaadom 100%-ot" | Magas | 9/10 |
| Eredmény-alapú | „Ha nem éred el Y-t, kapsz Z-t plusz" | Közepes | 7/10 |
| Hibrid (időarányos) | „Az első 14 napon belül teljes visszatérítés" | Alacsony | 5/10 |
| Szolgáltatás-hosszabbítás | „Ingyen folytatom, amíg nem érted el" | Időbeli | 8/10 |
| Teljes vállalás | „Én vállalok minden kockázatot" | Mindig | 10/10 (nehéz) |

A garancia legyen olyan, amit valóban tartani tudsz. Ne ígérj 100%-os pénz-vissza-t, ha pénzügyileg ez kockázatos.

### 4. Látható érték (érték-stack)
A FŐ csomag minden eleme számszerű piaci értékkel. Iránymutatás: ha a látható érték 2-5x az ár, „erős ajánlat". Ha 10x, „no-brainer".

Példa Expert Flow:
- AI-ügynök 24/7 lead fogadás → 35 000 Ft/hó
- Email automatika → 25 000 Ft/hó
- Onboarding rendszer → 20 000 Ft/hó
- Inbox aggregátor → 15 000 Ft/hó
- Content pipeline → 30 000 Ft/hó
- Számlázás integráció → 10 000 Ft/hó
- Havi riport → 15 000 Ft/hó
- Stratégia call → 25 000 Ft/hó

**Összes érték: 175 000 Ft/hó.** Ár: 80 000 Ft/hó. **Arány: 2.2x — erős.**

### 5. Egy mondat
Az 5 elem összegyúrva:

> „[Vágyott eredmény] [időkereten] belül, [garanciával]. [Látható érték rövid összegzés] havi/egyszeri [ár]-ért."

Példa: „Szolgáltató vállalkozás AI-csapatát építem fel a lead-szerzésre, kommunikációra és háttérre — havi 80 ezerért, 30 napos garanciával."

## A 3 szint pszichológiája (a 02. leckéhez)

| Szint | Funkció | Várható arány |
|-------|---------|----------------|
| Belépő | Anchor alulról, „minimum" | 10-20% választja |
| Fő | A profitközpont, ár-érték optimum | 60-70% választja |
| Prémium | Anchor felülről, „csúcs" | 10-20% választja |

## Csomag-elnevezés magyarul

**Jó:** beszédes, magyar nyelvű
- „Indulás" / „Növekedés" / „Skála"
- „Alap" / „Profi" / „Csapat"
- „Kezdő" / „Haladó" / „Mester"

**Rossz:** angol, üres
- „Basic" / „Pro" / „Enterprise"
- „Lite" / „Plus" / „Premium"
- „Bronze" / „Silver" / „Gold"

## Érték-stack komponensek típusai

A FŐ csomag elemei általában 3 kategóriába esnek:

### 1. AI / automatizáció (gép csinálja)
- Email automatika
- AI lead-szűrés
- Automatikus számlázás
- Content pipeline

### 2. Hozzáférés (te biztosítod)
- Havi 1 stratégia call (30 perc)
- Inbox közvetlen elérés (48h SLA)
- Tudásbázis-hozzáférés

### 3. Fizikai eredmény (kézzelfogható)
- Havi PDF-riport
- Egyedi lead magnet / landing
- Onboarding csomag

A 3 kategória mindegyikéből legyen elem. Ha csak az egyik van — gyenge a stack.

## Az „indulási stratégia" pszichológiája (a 03. leckéhez)

Az első 5 ügyfél féláron NEM kedvezmény — **csere**:
- Ők kapnak: féláron alapcsomagot
- Te kapsz: esettanulmányt + visszajelzést

Ezt kifejezetten kommunikáld. NEM „akció" — „beta program".

A bemutatkozó email így hangzik:

> „Új szolgáltatást indítok, és keresem az első 5 ügyfelet, akivel féláron dolgozom — cserébe esettanulmányt írhatok és visszajelzést kérek tőlük. Ha érdekel, beszéljünk."

## Mikor emelj árat — konkrét triggerek

1. **5 ügyfél után** (féláras → alapár):
   - 5 esettanulmány készen
   - Mindegyiknél mérhető eredmény
   - Webhelyen feltüntetve

2. **10 ügyfél után** (+25%):
   - Olyan eset, ahol a vevő jövőre is fizet (recurring stable)
   - Ajánláskérés sikeres (5+ új ügyfél jött ajánlásból)

3. **20 ügyfél után** (újragondolás):
   - A munka-óra/ügyfél stabil
   - Lehet-e új csomag-szint felül?
   - Tudsz-e drágábbat eladni anélkül, hogy több munka legyen?

## Output sablon — `ajanlat.md`

```markdown
# Ajánlat és csomagok (1.0 verzió) — {{date}}

## Egy mondatos ajánlat
[mondat]

## Az 5 elem
1. Vágyott eredmény: ...
2. Időkeret: ...
3. Garancia: ...
4. Érték-stack: [5-8 elem listája Ft-értékkel]
5. Összegzés: a teljes mondat

## Belépő — [Név]
- Ár: [Ft]
- Tartalom: [5-8 bullet]
- Kinek: [1 mondat]
- Kinek NEM: [1 mondat]

## Fő — [Név] (legnépszerűbb)
[ugyanaz]

## Prémium — [Név]
[ugyanaz]

## Érték-stack a Fő csomagra

| Elem | Piaci érték (Ft/hó) |
|------|--------------------|
| ... | ... |

**Összes érték:** [Ft] · **Ár:** [Ft] · **Arány:** [Nx]

## Indulási stratégia
- Első 5 ügyfél: [50% áron]
- 5 után: alapár
- 10 után: +25%
- 20 után: ajánlat újraértékelés
```

## Tipikus hibák

- **Túl sok variáció:** 5+ csomag, mindegyik 2-3 kiegészítővel — döntés-bénulás
- **Túl olcsó indulás:** havi 10 ezer forint nem méltó áru
- **Drágulási félelem:** féléve nem emelsz, miközben a hitelességed nőtt
- **Egységes ár, eltérő munka:** egyedi projektnél fix ár — kalkuláld időre
- **Általános vágyott eredmény:** „több szabadság" — vissza a számhoz
- **Hiányzó „kinek NEM való":** a vevő nem tud dönteni, hogy ő-e a célközönség

## 7-lépéses ajánlat-építő útmutató (Drive-tárból)

Ezt az útmutatót az elmúlt évek alatt finomítottam — egyfajta receptet ad ahhoz, hogyan állíts össze olyan ajánlatot, amire az ideális ügyfeled nehezen mond nemet. Hét lépés, mindegyik egy konkrét cselekvési ponttal.

### 1. Ismerd a közönséged, mint a tenyered
A teljes ajánlat ezen áll vagy bukik. Tudd:
- a legnagyobb fájdalompontokat és frusztrációkat (mi tartja őket ébren),
- a legmélyebb vágyakat és törekvéseket (mit akarnak valójában elérni),
- a tudásszintet (kezdő, haladó, szakértő),
- a saját nyelvüket (az ő szavaikkal beszélj — ne szakzsargonnal),
- a motivációkat és félelmeket (mi hajtja, mitől félnek elveszíteni).

**Cselekvési lépés:** Készíts részletes vevőavatart. Beszélgess korábbi ügyfelekkel, olvass online fórumokat és közösségi csoportokat.

### 2. Világosan határozd meg az átalakulást
Az ajánlatod nem termék — egy út egy jobb állapot felé. Menj túl a funkciókon, és fókuszálj az előnyökre.
- **Funkció:** „10 videóleckét tartalmaz."
- **Előny:** „Bizonyított stratégiákat tanulsz, amivel megduplázod a termelékenységed 10 nap alatt."

**Cselekvési lépés:** Írj egy meggyőző címet AIDA-keretben (Figyelem → Érdeklődés → Vágy → Cselekvés), ami világosan kijelenti az átalakulást.

### 3. Csomagold össze maximális értékre
Itt kötöd össze a fő ajánlatot bónuszokkal, erőforrásokkal, támogatással, hogy az ajánlat hihetetlenül értékesnek tűnjön.
- **Fő ajánlat:** a fő termék vagy szolgáltatás.
- **Bónuszok:** kapcsolódó fájdalompontokra adott extra elemek, vagy átalakulást gyorsító kiegészítők.
- **Támogatás:** Q&A-alkalmak, közösségi hozzáférés, személyre szabott visszajelzés.
- **Hiány és sürgősség (okosan):** korlátozott idő, korlátozott helyek, dátumig elérhető bónuszok — csak ha hiteles, ne hamisítsd a hiányérzetet.

**Cselekvési lépés:** Sorold fel az ajánlat összes összetevőjét, és minden elemnél magyarázd el az előnyt.

### 4. Stratégiailag árazz
Az árad nem a költségeidet tükrözi, hanem a nyújtott értéket. Vedd figyelembe:
- az érzékelt értéket (mennyit ér nekik az átalakulás),
- a célközönség költségvetését,
- a versenytársak árazását,
- az árazási modellt (egyszeri, előfizetés, többszintű).

**Cselekvési lépés:** Olyan árat határozz meg, ami számodra nyereséges, de a vevőnek hihetetlen üzletnek tűnik. Indokold a megtérüléssel.

### 5. Alkoss meggyőző sales szöveget, ami kezeli a kifogásokat
A jó szöveg:
- felkelti a figyelmet (fájdalompont vagy vágy),
- kapcsolatot teremt (megérted a helyzetet),
- kiemeli az átalakulást és előnyöket („mi haszna van nekem"),
- proaktívan kezeli a kifogásokat,
- társadalmi bizonyítékot ad (vélemények, esettanulmányok),
- világos CTA-val zár.

**Cselekvési lépés:** Írj egy sales szöveget történetalapon, és könyörtelenül szerkeszd a tisztaságra.

### 6. Adj kockázatcsökkentést (garancia)
A kockázat elvétele megkönnyíti az „igen"-t.
- **Pénzvisszafizetési garancia** — a leggyakoribb.
- **Elégedettségi garancia** — boldogok az eredménnyel, vagy helyrehozod.
- **Eredménygarancia** — meghatározott eredményt vállalsz, ha követik az útmutatást.

**Cselekvési lépés:** Kínálj nagylelkű, könnyen érthető garanciát, és világosan add meg a feltételeket.

### 7. Tesztelj, mérj és finomíts
Az első verzió ritkán tökéletes. A folyamatos optimalizálás adatok alapján működik.
- A/B-teszt: különböző címek, szövegek, árak, bónuszok.
- Konverziós ráta követése (hányan látják, hányan vásárolnak).
- Visszajelzés gyűjtése a vásárlóktól.

**Cselekvési lépés:** Állíts be analitikát, és készülj fel változtatásokra az adatok és a visszajelzések alapján.
