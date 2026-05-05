---
name: konzultacios-funnel-builder
description: Cal.com event type beállítás 2-3 előzetes kérdéssel, plusz 4+1 automatikus email (confirmation, 24h, 1h, follow-up, no-show) Cal.com Workflows-ban. A 7. modulban használd.
---

# Konzultációs Funnel Builder — Skill

## Mire való?

A felhasználónak már van egy weboldala CTA-val (5-6. modul) — most a CTA mögötti FUNNEL-t építjük: Cal.com event type + email-automatizálás. Cél: az ember kattint a Foglalj konzultációt-ra, és onnan minden lépés magától halad, a felhasználó csak a beszélgetésen jelenik meg.

## Kérdések

A skill bekéri:
1. Az ajánlat 1 mondatban (3. modul)
2. Az avatár 1 mondatban (2. modul)
3. Event type neve és hossza (pl. „30 perces stratégiai konzultáció")
4. Heti hány órát szán beszélgetésre (reális mennyiség)
5. Mely napok és napszakok elérhetőek
6. Helyszín-preferencia: Google Meet vagy Zoom
7. Aláírás-formátum (vállalkozás_neve / saját_név)

## Output

A) Cal.com event type konfiguráció struktúrált formában (admin felületen lépésről lépésre beállítható)
B) 4 email teljes szövege (confirmation, 24h reminder, 1h reminder, follow-up)
C) +1 email a no-show-hoz
D) Cal.com Workflows beállítási útmutató (melyik email mikor triggereljen)

## Magatartási szabályok

- Magyarul minden szöveg
- Zero coach-szag, zero hyped szöveg
- Email-ek max 6-8 mondat, személyes hang
- Az 1h reminder LEGYEN rövid (mintha SMS lenne)
- A no-show email NE legyen passzív-agresszív
- A foglalási előzetes kérdések szűrjenek, NE legyenek lead-form jellegűek
- Event type buffer time: minimum 15 perc előtte ÉS utána (felkészülés és jegyzetelés)

## Resources

- `reference.md` — Cal.com event type konfig sablon, 4+1 email teljes sablon, Workflows beállítások, no-show kezelés mentális keret, tipikus hibák
