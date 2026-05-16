---
lastReviewed: "2026-05-16"
---

# 9. modul · Lead magnet és email lista

> Egy hasznos PDF, egy feliratkozó form, és öt email a feliratkozás utáni két hétben — ez az alap email-funnel, amit a Kit-tel rakunk össze.

> **TL;DR** — Lead magnet PDF + Kit feliratkozó form + 5 emailes welcome a feliratkozás utáni 14 napra.
> - **Lead magnet**: 5-10 oldalas konkrét PDF (Markdown → Pandoc/headless Chrome), nem Canva, nem InDesign
> - **Kit (ConvertKit)** ingyenes 1000 feliratkozóig, form HTML beillesztve a webhelyre
> - **5 email**: PDF (azonnal), pivot-történet (2. nap), tévhit (4.), bonus tipp (7.), CTA (10.)

## A hét témája

A webhelyre érkezők 95%-a nem azonnal vásárol — nem azért, mert nem érdekli, hanem mert még nem áll készen. Az email lista nem „hírlevél" — bizalom-építés, és amikor készen állnak, te vagy az első, akire gondolnak. Az alap:

- értékes PDF (lead magnet)
- egyszerű feliratkozó form a webhelyen
- 5 emailes welcome-sorozat automatikusan

## 01. Lead magnet — 5-10 oldalas PDF Markdown-ból

Konkrét, hasznos dokumentum cserébe az email-címért — nem „kapsz heti tippeket", hanem „letöltheted a 7 lépéses XYZ útmutatót". Az 1. modul tudás-alapjából 5-10 oldal, gyakorlati, kicsit taktikus.

**Létrehozás**:
- Markdown fájl (vagy Claude Code generálja)
- PDF-re: Pandoc vagy headless Chrome
- Drive-ra teszed, Kit küldi automatikusan

Nincs Canva, InDesign, designer eszköz. Egyszerű, jól tördelt Markdown-PDF kezdőknél jobban hat, mint túldesignolt fájl.

## 02. Feliratkozó form — Kit (ConvertKit)

Kit = email-marketing eszköz, ingyenes 1000 feliratkozóig, egyszerűbb mint Mailchimp.

**Setup**:
1. Regisztráció Google Workspace-emaileddel
2. „Form" létrehozás (név, email, gomb-szöveg)
3. Form HTML másolva, Claude Code-dal a webhely lead magnet szekciójába

Feliratkozás után a Kit küldi a PDF-et és belép a welcome-sorozatba. A **sequence** automatizált email-folyamat — beállítod, melyik email mikor megy ki.

## 03. Öt emailes welcome sorozat

14 napban 5 email, mindegyik konkrét cél:

| # | Mikor | Tartalom |
|--|--|--|
| 1 | azonnal | „Itt a PDF-ed + 1 mondat rólam" |
| 2 | 2 nap múlva | A saját pivot-pontod (1. modul 02. lecke) — személyes történet |
| 3 | 4 nap múlva | Leggyakoribb tévhit a területeden + mit gondolsz |
| 4 | 7 nap múlva | Konkrét tipp, amit a PDF-ben nem írtál le |
| 5 | 10 nap múlva | Meghívó ingyenes konzultációra vagy konkrét ajánlat |

Hangnem: beszélgetős, nem marketing-szöveg — mintha ismerősödnek írnál. Sablonok a `prompts.md`-ben.

## Heti feladat

Írd meg és exportáld a lead magnet PDF-et, állítsd be a Kit form-ot a webhelyen, és írd meg az 5 emailes welcome sorozatot a Kit Sequences-ben.

## Eredmény

A hét végére van egy működő email-rendszered: ha valaki feliratkozik, automatikusan megkapja a PDF-et, és a következő két hétben öt jól időzített emailt is — innen kezdődik a passzív bizalom-építés.
