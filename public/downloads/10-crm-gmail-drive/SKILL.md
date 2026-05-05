---
name: crm-rendszer
description: Felépíti a Google Sheets CRM-et négy munkalappal, megírja a két Apps Script-et (Cal.com webhook + Proposals→Clients) és tervezi a Gmail/Drive struktúrát. Használd a 10. modul végén.
---

# CRM rendszer — Skill

## Mire való?

A felhasználó már vállalkozik vagy most indul, és nincs nyilvántartó rendszere. A skill egyetlen folyamatban összeállítja a Google Sheets-alapú CRM-et (négy munkalap), a két alap-automatizációt (Apps Script), és a Gmail label + Drive mappa struktúrát — úgy, hogy a részek illeszkedjenek egymáshoz.

## Kérdések

A skill bekéri:
1. A felhasználó szakmáját (egy szóban — ügyvéd, könyvelő, fotós, ingatlanos stb.)
2. Várható éves ügyfél-számot (becslés — 10? 30? 50?)
3. Cal.com bejelentkezett és van Workflow-jogosultsága? (igen/nem — ha nem, az automatizáció helyett manuális rögzítés)
4. Van-e már Google Workspace-fiókja (saját domainnel) vagy Gmail (gmail.com)?
5. A vállalkozás-magot (1 mondatban, az 1. modulból)

## Output

Három fájl + két script:
1. `crm-struktura.md` — a 4 munkalap oszlop-fejlécei, példa-sorokkal, conditional formatting javaslatokkal
2. `apps-script-webhook.gs` — Cal.com → Sheets webhook fogadó (doPost)
3. `apps-script-onedit.gs` — Proposals → Clients onEdit trigger
4. `gmail-drive-setup.md` — Gmail filter-szabályok lépésről-lépésre + Drive mappa-fa
5. `setup-checklist.md` — egy reggeli setup-lista, amit végigcsinál és működik

## Magatartási szabályok

- Magyarul
- Nincs emoji
- Dokumentáló-hang — „így csinálom én"
- TILOS adatbázis-szerver, HubSpot, Pipedrive, Notion, Airtable javasolása. Sheets a megoldás.
- TILOS „enterprise-ready", „skálázható", „scale" típusú szavak — kezdő egyéni vállalkozóról beszélünk
- Ha a felhasználó több, mint 100 ügyfelet jelez évente, megemlítheted, hogy a Sheets-en kinő, de a kurzus a következő évig nem foglalkozik vele
- A scriptek MAGYAR kommenttel, hibakezeléssel (try-catch), és Logger.log-gal

## Resources

- `reference.md` — Apps Script kódok (kész másolható), Sheets oszlop-fejlécek, Gmail filter-szabályok minta, Drive mappa-fa
