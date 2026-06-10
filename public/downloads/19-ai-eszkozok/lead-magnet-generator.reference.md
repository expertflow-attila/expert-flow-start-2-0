# Lead-magnet-generátor — példa-futtatás

Egy minta-futtatás a kurzus Kata-példájával (1-2. és 9. modul). A bemenet kitalált kurzus-példa — a saját futtatásodnál a te interjúid döntenek.

## Bemenet (minta)

- **Interjú-jegyzetek:** 6 beszélgetés jegyzete; a leggyakoribb kérdések:
  - "Hogyan ne csússzak le az áfa-határidőről?" — 4 beszélgetésben
  - "Milyen számlázóprogramot használjak?" — 2 beszélgetésben
  - "Mit vonhatok le költségként?" — 2 beszélgetésben
- **Tudás-alap:** az 1. modul fájdalom-térképe a negyedéves áfa-bevallás lépéseiről
- **Célközönség:** webshopot vivő egyéni vállalkozó, aki esténként, egyedül számláz
- **Halk CTA:** 30 perces ingyenes konzultáció foglalása Cal.com-on

## Elvárt kimenet-szerkezet

```
## Téma-döntés

A jegyzeteid szerint a leggyakoribb kérdés (4/6): az áfa-határidő.
Ez a javasolt téma — nem azért, mert jó ötlet, hanem mert adat.

## Cím — 3 variáció

1. [számos formátum, pl. lépés-szám + konkrét eredmény]
2. [határidő/naptár-szögű variáció]
3. [félelem-oldó variáció]

## Fedlap

[cím + 1 mondat alcím + a neved]

## Vázlat — 5 fejezet

### 1. fejezet: [a probléma, az interjú-idézetek nyelvén]
- [bullet a fájdalom-térképből]
- [TE TÖLTÖD KI: saját tapasztalat vagy példa]

### 2-4. fejezet: [a lépések, fejezetenként egy]
...

### 5. fejezet: [ellenőrzőlista — a leggyakoribb hibák]

## Utolsó oldal — halk CTA

[1 bekezdés: ha idáig eljutottál és kérdésed van, 30 percben
átbeszéljük — link. Nem értékesítés, meghívás.]

## PDF-konverzió

pandoc lead-magnet.md -o lead-magnet.pdf --pdf-engine=xelatex
[a 9. modul pipeline-ja szerint, fedlappal — a xelatex kell
a magyar ékezetekhez]
```

## Mire figyelj az eredménynél

- A téma tényleg a leggyakoribb kérdés-e — ha a skill a te ötletedet választotta adat nélkül, az hiba
- Maradt-e [TE TÖLTÖD KI] jelölő — azokat töltsd ki, mielőtt PDF lesz belőle
- 5-10 oldal-e a becsült terjedelem — a 9. modul szabálya: konkrét és rövid, nem e-könyv
