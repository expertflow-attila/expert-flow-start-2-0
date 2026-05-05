# 3. modul — Promptok

## 3.1 — Prompt a 01. leckéhez (Az 5-elemes ajánlat-modell)

Ezt akkor futtasd, amikor a 2. modul végéről már van egy validált probléma + avatár-profilod. A prompt 3-3 alternatívát ad mind az 5 elemre — TE választasz, NEM az AI dönt.

```
Validált probléma (a 2. modul végéről): [1 mondat]
Avatárom (a 2. modul 1 mondatos összegzéséből): [1 mondat]

5-elemes ajánlat-modell. Ne dönts helyettem — adj 3-3 alternatívát:

1. VÁGYOTT EREDMÉNY (3 verzió, mindegyik SZÁMSZERŰ ígérettel —
   pl. „heti X óra", „30 napra Y", „havi Z forint")
2. IDŐKERET (3 verzió: rövid 7-30 nap / közepes 30-90 nap / hosszú 3-12 hónap)
3. KOCKÁZAT-VISSZAFORDÍTÁS / GARANCIA (3 garancia-verzió,
   amit én valóban tartani tudok)
4. LÁTHATÓ ÉRTÉK / ÉRTÉK-STACK (5-8 elem, mindegyikhez
   becsült Ft-érték — mit fizetne a vevő külön-külön)
5. EGY MONDAT (a fenti négy összegyúrva egyetlen mondatba)

Mindegyiknél magyarázd meg, melyik verzió kinek való.
A „vágyott eredmény" SOSEM lehet általános („több szabadság",
„sikeresebb vállalkozás") — mindig konkrét szám.
```

## 3.2 — Prompt a 02. leckéhez (Három csomag, anchor-logikával)

A 3 csomag-szint felépítése. Akkor futtasd, amikor a 3.1-ből már van egy 1 mondatos ajánlatod. A prompt egyszerre tervezi a 3 csomagot az anchor-logika szerint.

```
Fő ajánlatom (a 3.1-ből): [1 mondat]
Avatár havi költési kapacitása (a 2. modulból): [becsült Ft/hó]

3 csomag, anchor-logikával:

- BELÉPŐ — kinek, mit kap, miért NE ezt válassza alapból
  (cél: 10-20% választja, anchor alulról)
- FŐ — kinek, mit kap, miért EZT válassza
  (cél: 60-70% választja — itt van a profitközpont)
- PRÉMIUM — kinek, mit kap, miért egy részük válassza
  (cél: 10-20% választja, anchor felülről)

Mindegyikhez:
- Név (MAGYAR, beszédes — NEM „Basic / Pro / Enterprise",
  hanem pl. „Indulás / Növekedés / Skála")
- Havi díj + egyszeri díj (ha van, Ft-ban)
- 5-8 bullet (mit tartalmaz)
- 1 mondat: kinek való
- 1 mondat: kinek NEM való (KÖTELEZŐ — ez erősíti a hitelességet)

Felső csomag ára 2-3x a középsőé. Alsó 0.4-0.5x.

A FŐ csomagra építsd rá az érték-stacket: minden eleme kapjon
becsült piaci értéket Ft-ban (mit fizetne külön-külön egy
freelancernek vagy SaaS-nak). Cél: az érték-stack 2-5x az ár.
Ha gyengébb mint 2x — javasolj plusz elemet, ami nem növeli
számottevően a munkaterhet.
```

## 3.3 — Prompt a 03. leckéhez (Mikor és hogyan frissítsd)

Az indulási stratégia és iteráció. Akkor futtasd, amikor már van 3 csomagod, és el kell mondanod az első ügyfél-jelölteknek.

```
A fő csomag listaára: [Ft]

Indulási stratégia: az első 5 ügyfél féláron — cserébe:
- Esettanulmány a saját webhelyemre
- 1-2 mondatos visszajelzés
- 30 napos elérhetőség kérdésekre

Tedd a következőt:
1. Írj egy 3-4 mondatos szöveget, amivel ezt elmondom egy
   első ügyfél-jelöltnek. NEM sales hang. Egyenes, dokumentáló:
   „új szolgáltatást indítok, keresem az első 5 ügyfelet,
   akivel féláron dolgozom — cserébe esettanulmányt írhatok."

2. Adj 5 trigger-pontot, ami jelzi, mikor érdemes árat emelni
   (pl. „5 esettanulmány készen", „ajánláskérés sikeres",
   „munka-óra/ügyfél stabil"). Mindegyikhez konkrét Ft-szám
   az új árra.

3. Légy őszinte: az ajánlatom első verziója valószínűleg ROSSZ
   lesz. Mit mérjek az első 5 ügyfélnél, hogy a 6. ügyfélnél
   már jobbat tudjak? (pl. „melyik bullet-re kérdeznek vissza",
   „mit hagynak ki a használatból")
```
