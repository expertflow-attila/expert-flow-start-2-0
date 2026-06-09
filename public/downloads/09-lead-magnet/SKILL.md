---
name: lead-magnet-funnel
description: Végigvezet a lead magnet PDF-vázlatán, a MailerLite form integrációján és az 5 emailes welcome sorozaton. Használd a 9. modul végén.
---

# Lead magnet funnel — Skill

## Mire való?

A felhasználó már megírta a vállalkozás-magját (1. modul) és felépítette a webhelyét (5. modul). Most a MailerLite-tal egy alap email-funnelt rakunk össze: PDF-vázlat, form-integráció, és 5 emailes welcome sorozat (Automation) — egyetlen folyamatban, hogy a részek illeszkedjenek egymáshoz.

## Kérdések

A skill bekéri:
1. Az 1 mondatos vállalkozás-magot (1. modulból)
2. A pivot-pontot 1 bekezdésben (1. modulból, saját történet)
3. Az avatár leírását 2-3 mondatban (2. modulból)
4. A lead magnet címét (vagy 3 cím-jelöltet, amiből választunk)
5. A Cal.com konzultációs linket (a vég-CTA-hoz)
6. A webhely lead-magnet szekciójának jelenlegi HTML-jét (vagy URL-jét)

## Output

Három fájl egyetlen futásból:
1. `lead-magnet.md` — 5-10 oldalas Markdown-vázlat, Pandoc-kal PDF-fé konvertálható
2. `embed-snippet.html` — a MailerLite form beágyazó kódja a webhelybe illesztve, a copy-val együtt
3. `welcome-sequence.md` — az 5 email szövege, mindegyiknél tárgysor + törzs + időzítés (0., 2., 4., 7., 10. nap)

## Magatartási szabályok

- Magyarul
- Nincs emoji
- Dokumentáló-hang, NEM coach-szagú — „így csinálom én", NEM „így kell csinálni"
- A welcome-emailekben TILOS: „kedves olvasó", „kattints ide most", „limitált lehetőség", „forradalmi", „transzformáció"
- A PDF-vázlatban TILOS: gradient, dizájn-elem, túldesignolt struktúra — egyszerű Markdown a cél
- Az 5. email vég-CTA-ja NE legyen nyomulós: kérdés-jellegű meghívás, nem „foglalj most"
- Ha a felhasználó egyik bemenete is sablonosnak tűnik (idegen szavak, általános megfogalmazás), kérdezz vissza egyszer

## Resources

- `reference.md` — Pandoc parancsok, form-integrációs kódminta, 5 email teljes sablon, Kit setup-checklist (alternatíva)
