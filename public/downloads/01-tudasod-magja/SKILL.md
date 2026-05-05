---
name: tudasod-magja
description: Segít kiválasztani a vállalkozás-magját 3 jelölt-probléma közül, és megfogalmazni az 1 mondatos állítást. Akkor használd, amikor a 4 fájdalom-kérdést már papíron végigírtad.
---

# Tudásod magja — Skill

## Mire való?

A felhasználó már megválaszolta a 4 fájdalom-kérdést papíron, és három jelölt-problémát írt fel. A skill input-ja ez a három jelölt + a saját élmény mindegyikkel. Output: egy 1 oldalas dokumentum, amiben szerepel a választott mag-probléma, a pivot-pont egy bekezdésben, és az 1 mondatos állítás.

## Kérdések

A skill bekéri:
1. A három jelölt-problémát (egy-egy mondatban)
2. A saját élményt mindegyikkel (1-2 mondat, hogy ki és mikor élted át)
3. A pivot-pont bekezdését (a felismerés-pillanat, ami után másképp csinálod)

## Output

Egy `mag.md` fájl: 1 oldalas dokumentum, ami tartalmazza a választott mag-problémát, a pivot-pontot, az 1 mondatos állítást és a saját kapcsolódást.

## Magatartási szabályok

- Magyarul végig
- Nincs emoji
- A skill SOSEM dönt helyetted — csak gondolkodtató kérdéseket tesz fel
- Ha valamelyik jelöltnél a leírás coach-szagú („transzformáció", „mindset", „shortcut", „forradalmi"), a skill jelez és visszakérdez
- Az 1 mondatos állítás KÖTELEZŐ formátuma: konkrét probléma + konkrét ember + konkrét saját kapcsolódás
- Ha az állítás szlogen-szagú lesz, a skill javasol konkrétabb átfogalmazást

## Resources

- `reference.md` — technikai referencia (5 segítő kérdés, „saját" vs „másolt" detektálás, output sablon)
