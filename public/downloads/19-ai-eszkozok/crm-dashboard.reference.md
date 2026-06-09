# CRM-dashboard — példa-futtatás

Egy minta-futtatás kitalált példa-sorokkal, a 10. modul négy-munkalapos szerkezetében. A saját futtatásodnál a valódi CRM-sorok kerülnek ide.

## Bemenet (minta)

```
PROSPECTS
Tóth Gábor	gabor@pelda.hu	volt kolléga, webshopja van	2026-05-28	megkeresve
Kiss Éva	eva@pelda.hu	FB-csoportból, áfáról panaszkodott	—	új

CONSULTATIONS
Szabó Dóra	2026-06-02	áfa-határidők	negyedéves csomag	ajánlatot kért

PROPOSALS
Szabó Dóra	2026-06-03	negyedéves csomag	45 000 Ft/negyedév	pending

CLIENTS
Nagy Péter	havi csomag	2026-05-15	fizetve	elégedett, ajánlót ígért
```

- **Előző heti összefoglaló:** nincs (első futtatás)
- **Heti kapacitás:** 3 óra

## Elvárt kimenet-szerkezet

```
## Heti CRM-összefoglaló — [dátum]

### Számok
- Prospects: 2 (1 megkeresve, 1 még érintetlen)
- Consultations: 1 lezárt, ajánlat kiment
- Proposals: 1 pending (Szabó Dóra, 45 000 Ft/negyedév, 6 napja)
- Clients: 1 aktív, fizetve

### Elakadások
- Tóth Gábor: utolsó kapcsolat 12 napja — follow-up esedékes
- Kiss Éva: nincs dátum — még nem kereste meg senki

### Következő lépések (3 óra kapacitásra)
1. Szabó Dóra follow-up — 6 napja pending ajánlat, ez a
   legközelebb a pénzhez [email-iro skill-lel megírható]
2. Tóth Gábor rövid jelentkezés — 12 nap csend után
3. Nagy Péter: kérd el az ígért ajánlást — elégedett ügyfél,
   a 8. modul szerint az ajánlás a legolcsóbb új lead
4. Kiss Éva első megkeresés — ha marad idő
```

## Mire figyelj az eredménynél

- A prioritás-sorrend a pénzhez közelséget követi-e: pending ajánlat > meleg prospect > új megkeresés
- Minden javaslat visszavezethető-e egy beillesztett sorra — ha a skill olyan nevet említ, amit nem adtál meg, az hiba
- A hiányzó dátumokat jelzi-e ahelyett, hogy kitalálná
