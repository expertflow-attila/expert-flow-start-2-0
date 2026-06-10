---
name: crm-dashboard
description: Heti CRM-összefoglalót készít a 10. modul Google Sheets szerkezetéből — beillesztett sorokból státusz-kép és következő lépések. Akkor használd, amikor heti áttekintést akarsz a pipeline-odról.
---

# CRM-dashboard — Skill

## Mikor használd

- Hetente egyszer (javasolt: hétfő reggel) átnézed, hol állnak az érdeklődőid és ügyfeleid
- Konzultáció vagy ajánlat után tudni akarod, kinél van nálad a labda
- A 8. modul ügyfél-szerzése fut, és sok a párhuzamos beszélgetés

NE használd a 10. modul CRM-je nélkül — a skill a négy munkalap (Prospects, Consultations, Proposals, Clients) szerkezetére épül.

## Bemenet

1. **Beillesztett sorok** — másold ki a Sheets-ből a négy munkalap sorait (vagy csak azokat, amik változtak). Tab-bal vagy vesszővel tagolt szöveg is jó
2. **Az előző heti összefoglaló** (opcionális) — ha megadod, a skill a változásokat is kiemeli
3. **Heti kapacitásod** — hány óra jut ezen a héten ügyfél-munkán túli követésre

## Lépések

1. Beolvassa a sorokat és munkalaponként csoportosítja (Prospects / Consultations / Proposals / Clients)
2. Számol: hány aktív prospect, hány lezáratlan konzultáció, hány függő ajánlat (pending), hány aktív ügyfél
3. Megkeresi az elakadásokat: kinél nincs "utolsó kapcsolat" dátum az elmúlt 7+ napban, melyik ajánlat áll válasz nélkül
4. Következő lépéseket javasol prioritás-sorrendben, a kapacitásodhoz méretezve — a függő ajánlatok előrébb, mint az új megkeresések
5. Ha az előző heti összefoglalót megadtad, kiírja a változást: új sorok, státusz-váltások, lezárások

## Kimenet

Egy heti összefoglaló markdown-ban: számok munkalaponként + elakadás-lista + 3-7 konkrét következő lépés (kinek, mit, miért most). Bemásolhatod a CRM mellé jegyzetnek.

## Korlátok

- Nem nyúl a Sheets-edbe — csak a beillesztett szöveget olvassa, írni nem tud bele
- Nem dönt ügyfél-ügyekben: javasol, de hogy kit hívsz fel, a te döntésed
- A számai csak annyira pontosak, amennyire a CRM-ed naprakész — ha a dátumok hiányoznak, jelzi, nem becsül
- Follow-up szöveget nem ír — arra az `email-iro` skill való, kombináld a kettőt

## Kapcsolódó fájl

- `reference.md` — egy kidolgozott példa-futtatás minta-sorokkal
