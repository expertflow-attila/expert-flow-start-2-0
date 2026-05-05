# 12. modul — Technikai referencia

> **Disclaimer:** Az itt szereplő információk tájékoztató jellegűek és 2026-os állapotot tükröznek. A magyar adózási és jogi szabályozás évente változik. A vállalkozási formával, adózással és jogi dokumentumokkal kapcsolatos végső döntésed ELŐTT egyeztess egy könyvelővel és/vagy ügyvéddel. Ez a fájl NEM jogi tanácsadás.

## KATA / EV / Kft. — összehasonlító táblázat

> **Mindig ellenőrizd a friss adatokat a NAV.hu-n.** A KATA-szabályozás 2022-ben jelentősen változott, és további változások előfordulhatnak.

| Szempont | EV + KATA | EV + átalányadó | Kft. |
|----------|-----------|-----------------|------|
| Tételes adó | havi tételes (a 2026-os összeget ellenőrizd a NAV.hu-n) | nincs (százalékos) | nincs (a Kft. társasági adó alá esik) |
| Bevétel-keret | éves felső határ van (2022-es változás után — ellenőrizd a NAV-on) | nincs konkrét felső plafon | nincs |
| Ki lehet partner | csak magánszemélyek (a 2022-es szigorítás óta) | bárki (magánszemély, cég) | bárki |
| Indítási költség | regisztrációs díj (alacsony) | regisztrációs díj (alacsony) | jegyzett tőke + ügyvédi alapító okirat (százezres nagyságrend) |
| Könyvelési igény | minimális (egyszerű) | közepes (átalányadó-számítás) | magas (kettős könyvelés) |
| Felelősség | korlátlan (személyes vagyon felel) | korlátlan | korlátolt (a Kft. saját vagyonáig) |
| Adminisztráció | havi átalányadó-bevallás + KATA-bevallás | negyedéves bevallás | havi/negyedéves komplex bevallások |
| Kinek ajánlott | egyszerű, kis-közepes szolgáltatás magánszemélyeknek | vegyes ügyfélkör, közepes árbevétel | nagyobb forgalom, közös tulajdonosok, magas felelősség-kockázat |

### Forrás-hivatkozások a NAV.hu-n

- KATA aktuális szabályozása: nav.gov.hu — keresd a „kisadózó vállalkozások tételes adója" tájékoztatót
- Átalányadó: nav.gov.hu — „átalányadózás egyéni vállalkozóknak"
- Kft. alapítás: e-cegjegyzek.hu

### 5-pontos kérdés-lista a könyvelői konzultációhoz

1. Az én árbevétel-becslésemmel és ügyfél-típusommal melyik forma az adóhatékonyabb az első évben? És a 3. évben?
2. Ha KATA-val indulok, milyen kockázatok vannak (pl. ha véletlenül egy kkv-tól is bejön bevétel — mi a következménye)?
3. Az ÁFA-státusz: alanyi mentes legyek-e (12 millió Ft alatti bevétel-tervnél), vagy már most ÁFA-s? Mi a szakmád miatt a logikus?
4. Mennyibe kerül a havi könyvelés a 3 forma esetén? Mit kapok ezért a pénzért?
5. Ha 1-2 év múlva váltani szeretnék (pl. EV-ből Kft.-be), milyen lépések, milyen költség?

## Számlázz.hu setup — lépésről-lépésre

> **Mindig a tudasbazis.szamlazz.hu hivatalos súgójában ellenőrizd az aktuális lépéseket.**

### 1. Regisztráció

1. szamlazz.hu → Regisztráció
2. Email + jelszó (a Workspace-emaileddel — ne privát Gmail!)
3. Email-megerősítés

### 2. Vállalkozási adatok

A „Beállítások" → „Cégadatok" alatt:
- Cégnév (EV esetén: „[Saját név] e.v." formátum)
- Adószám (a NAV-tól kapod a vállalkozás-bejelentkezés után — 8 számjegy + ÁFA-kód + megyekód, pl. 12345678-1-42)
- Székhely (lakcímed, ha EV)
- Bank számlaszám
- KATA / átalányadós / ÁFA-s kapcsoló (a forma alapján)

### 3. Számla-sablon

A „Beállítások" → „Számla-sablon":
- Logo (PNG, 300x100 pixel körül)
- Fejléc (cégnév, adószám)
- Lábléc — IDE jönnek az ÁSZF és Adatvédelmi linkek:
  - „ÁSZF: [webhely]/aszf"
  - „Adatvédelem: [webhely]/adatvedelem"
- Nyelv: magyar (külföldi ügyfeleknek angol verzió is kapcsolható)

### 4. NAV Online Számla integráció

1. onlineszamla.nav.gov.hu — bejelentkezés Ügyfélkapuval
2. „Felhasználók" → „Új technikai felhasználó"
3. A technikai felhasználó adatait (felhasználónév, jelszó, XML kulcs) bemásolod a Számlázz.hu „Beállítások" → „NAV adatszolgáltatás" mezőibe
4. Tesztelés: a Számlázz.hu egy ellenőrző hívást küld a NAV-hoz, és visszaigazol

### 5. Első teszt-számla

Mielőtt élesben kiállítasz egy számlát ügyfélnek:

1. Számlák → Új számla
2. Vevő: a saját neved (vagy egy fiktív teszt-vevő)
3. Tétel: „TESZT — sztornózásra"
4. Mentés és kiállítás
5. Ellenőrizd a NAV Online Számla portálon, hogy megérkezett
6. Sztornózd a számlát (Számlák → adott számla → Sztornózás)
7. Ellenőrizd, hogy a sztornó is megjelent a NAV-on

Ha mindkét lépés rendben — a setup működik.

### Hiányzó opciók

- Külföldi ügyfél (EU): külön „közösségi adószám" igénylése (NAV)
- Külföldi ügyfél (EU-n kívül): ÁFA-mentes számlázás megfelelő jogcímmel
- Cégauto, üzleti útiköltség: külön számlázási logika — a könyvelővel beszéld

## ÁSZF — fejezet-vázlat (NEM kész szöveg!)

> **Ezt csak STRUKTÚRA-ként használd. A konkrét szöveget VAGY hivatalos sablon-portálról vásárold (5-10 ezer Ft), VAGY ügyvéddel írasd. Ne generáld AI-val.**

Egy átlagos magyar online szolgáltató ÁSZF tartalma:

1. **Bevezető rendelkezések** — a dokumentum célja, hatálya, érvénybe lépés dátuma
2. **A szolgáltató adatai** — cégnév, székhely, adószám, cégjegyzékszám / nyilvántartási szám, kapcsolat
3. **Fogalmak** — ügyfél, fogyasztó, szerződés, szolgáltatás definíciók
4. **A szolgáltatás leírása** — mit kínálsz, milyen formában (online, személyes konzultáció stb.)
5. **A szerződés létrejötte** — hogyan jön létre (megrendelés, díjfizetés), mikor kezdődik a teljesítés
6. **Árak és díjazás** — listaárak, fizetési módok, fizetési határidő, késedelmi kamat
7. **A felek jogai és kötelezettségei** — mit ad a szolgáltató, mit kell tennie az ügyfélnek
8. **Felelősség, szavatosság** — a szolgáltató felelősségi köre, korlátok
9. **Elállási jog** (fogyasztó esetén) — 14 napos elállási jog, a vissza-fizetés folyamata
10. **Panaszkezelés** — hová fordulhat a panaszos, határidők
11. **Adatvédelem** — utalás az Adatvédelmi nyilatkozatra (külön dokumentum)
12. **Vegyes és záró rendelkezések** — alkalmazandó jog, illetékes bíróság, módosítás joga

## Adatvédelmi nyilatkozat — fejezet-vázlat (NEM kész szöveg!)

> **Ugyanaz a figyelmeztetés: NE generáld AI-val. Sablon vagy ügyvéd.**

GDPR-konform Adatvédelmi nyilatkozat tartalma:

1. **Az adatkezelő adatai** — ki vagy te (a vállalkozás), elérhetőség
2. **Az adatkezelés célja** — miért kéred a személyes adatokat (Kit feliratkozás, Cal.com foglalás, számlázás)
3. **A kezelt adatok köre** — pontosan milyen adatokat gyűjtesz (név, email, telefon, IP, cookie-k)
4. **A jogalap** — GDPR 6. cikk szerinti jogalap minden adatkezelésnél (hozzájárulás, szerződés teljesítése, jogos érdek stb.)
5. **Az adatkezelés időtartama** — meddig tárolod az adatokat (pl. számlázási adat — 8 év, marketing — visszavonásig)
6. **Adatfeldolgozók** — kihez kerülnek az adatok (Kit, Cal.com, Stripe, Google Workspace stb.)
7. **Az érintett jogai** — hozzáférés, helyesbítés, törlés, adathordozhatóság, panasz NAIH-hoz
8. **Cookie-tájékoztató** — milyen cookie-kat használ a webhely (analytical, functional, marketing)
9. **Adatbiztonság** — hogyan védd az adatokat
10. **Módosítás** — mikor jogosult a nyilatkozat megváltoztatására

## Sablon-vásárlás vs ügyvéd-konzultáció — összevetés

| Szempont | Sablon-vásárlás (jogiportal.hu vagy hasonló) | Ügyvéd-konzultáció |
|----------|---------------------------------------------|--------------------|
| Költség | 5-15 ezer Ft (egyszeri) | 15-50 ezer Ft (1 órás konzultáció) |
| Idő | 1-2 nap (testreszabás) | 1-2 hét (időpont + szöveg-kidolgozás) |
| Egyediség | általános, magadhoz kell igazítanod | a saját vállalkozásodra szabott |
| Felelősség | a sablon-szolgáltatónál (korlátozott) | az ügyvédnél (szakmai felelősség) |
| Kinek ajánlott | egyszerű egyéni vállalkozó, sztenderd szolgáltatás | összetett szolgáltatás, magas kockázat, vagy ha kifejezetten egyedi szabályaid vannak |

A logikus első lépés az induló egyéni vállalkozónak a **sablon-vásárlás**, és ha 1-2 év múlva változik a helyzet (új szolgáltatás-típus, partnerek, stb.), akkor egy ügyvéd-konzultáció a frissítéshez.

## Linkelés a webhelyen

A két dokumentumot kétféle módon teheted ki:

### A) Külön HTML-oldalak

- `[domain]/aszf` — a teljes ÁSZF szöveg HTML-ben
- `[domain]/adatvedelem` — a teljes Adatvédelmi nyilatkozat HTML-ben

A footer-ben:
```html
<footer>
  <a href="/aszf">ÁSZF</a> ·
  <a href="/adatvedelem">Adatvédelmi nyilatkozat</a>
</footer>
```

### B) PDF-ek

- `/dokumentumok/aszf.pdf`
- `/dokumentumok/adatvedelem.pdf`

A footer-ben:
```html
<footer>
  <a href="/dokumentumok/aszf.pdf" target="_blank">ÁSZF (PDF)</a> ·
  <a href="/dokumentumok/adatvedelem.pdf" target="_blank">Adatvédelmi nyilatkozat (PDF)</a>
</footer>
```

A HTML-verzió jobb SEO-szempontból és mobilon is olvashatóbb. A PDF tisztább, ha hivatalos formában akarod.

A számlázó (Számlázz.hu, Billingo) számla-láblécébe is illeszd be a két linket — így minden számlán ott van.

## Tipikus hibák

- Az ÁSZF-et és Adatvédelmi nyilatkozatot egy korábbi cég sablonjából „lopod" — jogi következménye lehet (szerzői jogi sértés, hibás adatkezelési alapok)
- A NAV Online Számla integrációt nem teszteled élesben az első ügyfél előtt → az első valós számla elakad, az ügyfél ideges
- A KATA-feltételek megsértése (kkv-tól rendszeres bevétel) — komoly utólagos adóhátralék
- A számlázó sablon-láblécébe nem illeszted az ÁSZF/Adatvédelem linket — a számla nem tükrözi a hivatalos dokumentumokat
- Az Adatvédelmi nyilatkozat nem nevezi meg az adatfeldolgozókat (Kit, Cal.com, Stripe) — ez GDPR-megsértés, NAIH-bírság kockázata
- Cookie-tájékoztató nélkül futtatod a Google Analyticset — szintén GDPR-probléma
