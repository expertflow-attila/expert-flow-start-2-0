# Tudásod magja — Technikai referencia

## A 4 fájdalom-kérdés (papíron, AI nélkül)

A 01. lecke kötelező inputja. A felhasználó papíron végigírja:

1. Miben kérdeznek tőled tanácsot ismerőseid?
2. Mit próbálsz évek óta megoldani magadnak vagy a környezetednek?
3. Milyen hibákat kerülnél el ma, ha visszamehetnél a saját szakmád indulásához?
4. Miért fizetnél te magad is valaki másnak, ha most kezdenéd?

A skill **nem teszi fel ezeket** — feltételezi, hogy a felhasználó már megválaszolta papíron, és három jelölt-problémát hozott magával.

A papír azért kötelező, mert lassít — az AI túl gyorsan ad „okos" választ, ami nem a tied. Az első válasz mindig sablonos lesz; a második és harmadik kör már a saját szavaiddal érkezik.

## Az 5 segítő kérdés a választáshoz

A skill ezeket a kérdéseket teszi fel a 3 jelölt-problémára:

1. **Megszállottság-teszt:** Melyik foglalkoztat éjszaka, amikor nem akarod?
2. **20 perc-teszt:** Melyikről beszélnél megszakítás nélkül szenvedéllyel?
3. **Saját fizetés-teszt:** Melyikben fizetnél te magad, ha valaki más megoldaná?
4. **Kereslet-teszt:** Melyikre van magyar piaci keresés (Google + magyar Facebook-csoportok)?
5. **Konkrét ember-teszt:** Melyikről tudsz egy valódi emberre gondolni, akinek ez fáj?

Egy jelöltnek legalább 3-ra kell pozitív választ adnia, hogy az legyen a mag.

## „Saját" vs „másolt" detektálás (a pivot-pont validációjához)

**Másolt-gyanús szavak** (ezeket a skill jelzi):
- „forradalmi" / „transzformáció" / „mindset"
- „shortcut" / „lerövidítem"
- „életmódváltás" / „kibontakozás"
- „digitális szabadság" / „skálázás" (ha nem konkrét számhoz kötött)

**Saját hangú** (ezeket NEM jelzi):
- „nem tudok aludni, mert..."
- „minden héten 4 órát megy el azzal, hogy..."
- „eddig 3 különböző tanácsadót próbáltam, és..."
- „a szomszédom is ezt mondta múlt héten..."

## Az 1 mondatos állítás formátuma

Kötelező sablon:

> „Én a [konkrét probléma] megoldásában tudok segíteni a [konkrét embereknek], mert [a saját pivot-pontod röviden]."

**Jó:**
> „Én a heti 8-10 óra adminra elment idő visszanyerésében tudok segíteni magyar egyéni vállalkozóknak, mert magamnak építettem fel egy AI-csapatot 14 hónap alatt, ami most ezt megoldja."

**Rossz** (szlogen-szagú, általános):
> „Én vállalkozóknak segítek, hogy megéljék a digitális szabadságot."

## Ha a felhasználó elakad

Ha a 3 jelöltből egyik sem áll meg az 5 teszten, a skill javaslata:

> „Lehet, hogy még nem találtál a magra. Maradj egy nappal a 4 kérdésnél — beszélj egy ismerősöddel, hogy ő mit lát rajtad. Ne találj ki — várd meg, amíg felismered."

## Output sablon (`mag.md`)

```markdown
# Vállalkozás-mag — {{date}}

## 1 mondatos állítás
„Én a [...] megoldásában tudok segíteni a [...]-nak/-nek,
mert [a saját pivot-pontom röviden]."

## A 3 jelölt-probléma
1. ...
2. ...
3. ...

## A választott (mag) — és miért

[2-3 mondat indoklás, miért ez a legmélyebb élményből jövő]

## A pivot-pont (a felismerés-pillanat)

[1 bekezdés a saját szavaiddal: hol és mikor változott meg
valami, és azóta mit csinálsz másképp]

## Az 5 teszt eredménye
- Megszállottság: igen / nem
- 20 perc: igen / nem
- Saját fizetés: igen / nem
- Kereslet: igen / nem
- Konkrét ember: igen / nem
```

## Tipikus hibák

- A 4 kérdést gépen válaszolja meg → sablonos válaszok, nem a saját hangja
- A 3 jelöltnél túl szakmai megfogalmazás („B2B SaaS-ok onboarding folyamatának optimalizálása")
- A pivot-pont nem konkrét pillanat, hanem általános („sokat tanultam")
- Az 1 mondat túl tág („vállalkozóknak segítek")
