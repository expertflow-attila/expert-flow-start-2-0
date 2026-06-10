# 5. modul — Technikai referencia

## A 8 szekció HTML váza

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{VALLALKOZAS}} — {{MEGOLDAS}}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#0a0a0a] text-[#e5e5e5] font-sans">

  <!-- 1. HERO -->
  <section class="max-w-3xl mx-auto px-6 pt-20 pb-16">
    <h1 class="text-4xl md:text-5xl font-bold">{{HERO_HEADLINE}}</h1>
    <p class="text-lg opacity-80 mt-4">{{HERO_SUBHEADLINE}}</p>
    <a href="{{CTA_LINK}}"
       class="inline-block mt-8 bg-[#7c3aed] text-white px-7 py-3 rounded">{{CTA_TEXT}}</a>
  </section>

  <!-- 2. PROBLÉMÁK -->
  <section class="max-w-5xl mx-auto px-6 py-16 border-t border-white/10">
    <h2 class="text-2xl md:text-3xl font-bold mb-8">{{PROBLEM_HEADLINE}}</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div><p class="opacity-80">{{P1}}</p></div>
      <div><p class="opacity-80">{{P2}}</p></div>
      <div><p class="opacity-80">{{P3}}</p></div>
    </div>
  </section>

  <!-- 3. MEGOLDÁS -->
  <section class="max-w-3xl mx-auto px-6 py-16 border-t border-white/10">
    <h2 class="text-2xl md:text-3xl font-bold mb-6">{{SOLUTION_HEADLINE}}</h2>
    <p class="text-lg opacity-80 leading-relaxed">{{SOLUTION_BODY}}</p>
  </section>

  <!-- 4. RÓLAM (mini) -->
  <section class="max-w-3xl mx-auto px-6 py-16 border-t border-white/10">
    <h2 class="text-2xl md:text-3xl font-bold mb-6">Rólam röviden</h2>
    <p class="text-base opacity-80 leading-relaxed">{{ABOUT_3_4_SENTENCES}}</p>
  </section>

  <!-- 5. OUTCOME-OK -->
  <section class="max-w-5xl mx-auto px-6 py-16 border-t border-white/10">
    <h2 class="text-2xl md:text-3xl font-bold mb-8">Mit kapsz</h2>
    <ul class="space-y-3 text-lg">
      <li>— {{OUTCOME_1}}</li>
      <li>— {{OUTCOME_2}}</li>
      <li>— {{OUTCOME_3}}</li>
    </ul>
  </section>

  <!-- 6. GARANCIA -->
  <section class="max-w-3xl mx-auto px-6 py-16 border-t border-white/10 bg-white/5 rounded">
    <h2 class="text-2xl md:text-3xl font-bold mb-6">Garancia</h2>
    <p class="text-lg opacity-90">{{GUARANTEE_SENTENCE}}</p>
  </section>

  <!-- 7. FAQ -->
  <section class="max-w-3xl mx-auto px-6 py-16 border-t border-white/10">
    <h2 class="text-2xl md:text-3xl font-bold mb-8">Gyakori kérdések</h2>
    <details class="py-3 border-b border-white/10">
      <summary class="cursor-pointer font-semibold">{{Q1}}</summary>
      <p class="opacity-80 mt-2">{{A1}}</p>
    </details>
    <!-- ismételd Q2-Q7-ig -->
  </section>

  <!-- 8. CTA + FOOTER -->
  <section class="max-w-3xl mx-auto px-6 py-20 border-t border-white/10 text-center">
    <h2 class="text-2xl md:text-3xl font-bold mb-6">{{CTA_HEADLINE}}</h2>
    <a href="{{CTA_LINK}}"
       class="inline-block bg-[#7c3aed] text-white px-7 py-3 rounded">{{CTA_TEXT}}</a>
  </section>

  <footer class="text-center py-8 text-sm opacity-60">
    © <span id="year"></span> {{VALLALKOZAS}}
  </footer>
  <script>document.getElementById('year').textContent = new Date().getFullYear();</script>

</body>
</html>
```

## Vercel deploy lépések részletesen

### 1. GitHub repo létrehozás

```bash
# A projekt mappában (ahol az index.html van):
git init
git add index.html
git commit -m "Initial commit"
git branch -M main

# GitHub-on (web UI): New repository → name megadása → Create
# Aztán a GitHub által kiírt parancsot futtasd:
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

### 2. Vercel projekt

1. https://vercel.com → Sign in (GitHub-fiókkal)
2. Add New → Project
3. Import a GitHub repo-t
4. Framework Preset: **Other** (vagy **Static**)
5. Build Command: üresen
6. Output Directory: üresen
7. Deploy — 30 másodperc múlva live URL: `repo-neve.vercel.app`

### 3. Custom domain Vercel-en

1. Project → Settings → Domains
2. Add → `tedneved.hu`
3. Vercel megmondja a 2 DNS-rekordot:
   - **A rekord:** `@` → `76.76.21.21`
   - **CNAME:** `www` → `cname.vercel-dns.com`
4. Sybell admin (https://admin.sybell.hu) → DNS-zóna kezelő → rekordok hozzáadása
5. Mentés
6. 1-2 óra propagáció (néha 10 perc)
7. HTTPS automatikusan bekapcsol Vercel-en

### 4. Ellenőrzés

A `dig` egy terminál-parancs, ami megmutatja, mit lát a világ a DNS-rekordjaidból (Mac/Linux alapból tudja; Windowson használd helyette a https://dnschecker.org oldalt):

```bash
# Terminálból:
dig tedneved.hu +short          # ki kell írja: 76.76.21.21
dig www.tedneved.hu +short      # ki kell írja: cname.vercel-dns.com
curl -I https://tedneved.hu     # letölti az oldal fejlécét — HTTP/2 200 = él
```

Vagy egyszerűen: nyisd meg böngészőben — ha él, kész.

## Tailwind utility-osztályok kezdőknek

| Mit akarsz | Osztály |
|-----------|---------|
| Sötét háttér | `bg-[#0a0a0a]` |
| Világos szöveg | `text-[#e5e5e5]` |
| Középre rendezés | `mx-auto` |
| Maximum szélesség | `max-w-3xl` |
| Padding minden oldalra | `p-6` |
| Margin felül-alul | `py-16` |
| Nagy cím | `text-4xl md:text-5xl font-bold` |
| Halvány alszöveg | `text-lg opacity-80` |
| Mobile-first grid | `grid md:grid-cols-3 gap-6` |
| Szekciók közti vonal | `border-t border-white/10` |
| Akcent gomb | `bg-[#7c3aed] text-white px-7 py-3 rounded` |

## Stílus-szabályok

- Minden h1: `text-4xl md:text-5xl font-bold`
- Minden h2: `text-2xl md:text-3xl font-bold mb-6`
- Minden bekezdés: `text-base md:text-lg opacity-80 leading-relaxed`
- CTA gomb: akcent háttér, fehér szöveg, padding 14px 28px, border-radius 6px
- Szekciók közti elválasztás: `border-t border-white/10`
- Maximum 60-70 karakter / sor olvashatósághoz

## Mobil-tesztelés

A Vercel deploy után:
1. Chrome DevTools → Toggle device toolbar (Cmd+Shift+M, Mac)
2. iPhone 12 Pro nézet
3. Görgetés végig — semmi ne legyen levágva
4. CTA gomb teljes szélességben mobilon (`w-full md:w-auto`)
5. Tap-target minimum 44×44px (Apple iránymutatás)

## Tipikus hibák

- **Túl sok szín:** maximum 2-3 szín az egész oldalon (háttér, szöveg, akcent)
- **Túl hosszú szövegek:** maximum 60-70 karakter / sor
- **Hiányzó CTA mobilon:** mindig sticky bottom vagy hero-ban
- **Lassú betöltés:** csak 1 db Tailwind CDN, ne legyen 3 különböző CSS link
- **Emoji a szövegekben:** zero emoji a tartalomban
- **Gradient háttér:** zero gradient (sima színek)
- **Hiányzó meta viewport:** mobilon ronda lesz nélküle
- **Domain nem propagált:** ha 2 óra után se él, ellenőrizd `dig`-gel a DNS-t

## 5 landing-típus felépítése (Drive-sablon)

A 8-szekciós alap-sablonon túl 5 landing-típus létezik, amiket az elmúlt évek során finomítottam. Mindegyik más célt szolgál, más ajánlat-szinttel működik, és más felépítést igényel. Az alábbi minták azt mutatják, mikor melyiket érdemes használni — ne másold le mindet egyben, hanem válaszd ki azt, ami a saját ajánlatodhoz illik.

### 1. Online Workshop értékesítő oldal
- **Cél:** regisztráció és azonnali részvétel
- **Ideális ajánlat:** minikurzus + konzultációs ajánlat (upsell)
- **Felépítés:**
  1. Hős szekció — workshop címe, erős ígéret, regisztráció gomb
  2. Probléma megfogalmazása — miért nehéz az adott témában előrelépni
  3. Ígéret + eredmény — mit fog tudni a résztvevő utána
  4. Workshop menetrendje — rövid agenda 3-5 pontban
  5. Bónusz / extra — sablon, letölthető munkafüzet
  6. Részletek — időpont, helyszín (Zoom), időtartam
  7. Instruktor bemutatása — rövid bizalomépítő sztori
  8. Call-to-Action — jelentkezés gomb (ismétlés)
  9. Upsell lehetőség — 1:1 konzultáció vagy mentorship felajánlása

### 2. Élő Workshop értékesítő oldal
- **Cél:** helyszíni részvétel biztosítása
- **Ideális ajánlat:** 3 hónapos mentorship + személyes coaching
- **Felépítés:**
  1. Hős szekció — kép az eseményről, cím, dátum, helyszín, regisztráció gomb
  2. Miért különleges az élő workshop — személyes jelenlét, közösség, networking
  3. Fő tanulságok — mit visz haza a résztvevő
  4. Agenda — napi program rövid pontokban
  5. Kinek szól — célcsoport (coachok, tanácsadók, trénerek)
  6. Részvételi díj — early bird + normál + VIP
  7. Bizalomépítés — szakértői háttér, eddigi résztvevők véleménye
  8. CTA — jegyvásárlás vagy helyfoglalás
  9. Upsell — VIP jegy tartalmazhat személyes konzultációt vagy coaching napot

### 3. Webinár előadás értékesítő oldal
- **Cél:** regisztráció + listagyűjtés
- **Ideális ajánlat:** 1:1 konzultáció (a webinár végén)
- **Felépítés:**
  1. Hős szekció — „Ingyenes élő webinár: …" + regisztráció
  2. Probléma — miért nem működnek a hagyományos módszerek
  3. Megoldás előzetes bemutatása — röviden a rendszer, amit tanítasz
  4. Mit tanul meg a résztvevő — 3-5 kulcseredmény
  5. Időpont, részletek — dátum, platform, időtartam
  6. Bemutatkozás — szakértői háttér, miért érdemes hallgatni rád
  7. CTA — regisztráció gomb
  8. Follow-up ajánlat — konzultáció felajánlása a webinár végén

### 4. Online tréning értékesítő oldal
- **Cél:** fizetett tréning értékesítése
- **Ideális ajánlat:** 3 hónapos mentorship (upsell)
- **Felépítés:**
  1. Hős szekció — tréning címe, erős ígéret, időkeret
  2. Probléma — jelenlegi kudarcok és nehézségek
  3. Megoldás — tréning struktúra (modulok felsorolása)
  4. Mit kapsz a tréningben — videók, munkafüzetek, sablonok, közösség
  5. Kinek szól / kinek nem szól — szűrés
  6. Instruktor bemutatása — miért hiteles
  7. Résztvevők véleménye — bizalomépítés
  8. Ár + csomagok — alap + prémium (prémium tartalmazhatja a mentorshipet)
  9. CTA — csatlakozás a tréninghez
  10. Upsell — mentorship program felajánlása

### 5. Minikurzus értékesítő oldal
- **Cél:** belépő szintű termék eladása vagy ingyenes lead magnet
- **Ideális ajánlat:** upsell konzultációra vagy coachingra
- **Felépítés:**
  1. Hős szekció — „Ingyenes minikurzus: …" + gomb
  2. Mit kapsz a minikurzusban — 3-5 rövid videó, gyors eredmény
  3. Probléma → megoldás — miért érdemes azonnal elvégezni
  4. Kinek szól — célcsoport meghatározása
  5. Instruktor bemutatása — röviden rólad
  6. CTA — regisztráció / vásárlás
  7. Upsell — „Ha befejezted, lépj szintet: konzultáció vagy mentorship"

### Összefoglaló — melyiket mikor

| Funnel-cél | Ajánlott landing-típusok |
|-----------|-------------------------|
| Listagyűjtés + konzultációra terelés | Online workshop + webinár |
| Fizetett ajánlat + mentorship eladás | Élő workshop + online tréning |
| Belépő termék + coaching upsell | Minikurzus |

A részletes copywriting-mintákat (hero szöveg, FAQ, vélemények) a 6. modul tartalmazza — ott találsz teljes példákat mind az 5 típushoz, az „Amy Porterfield-féle" story-driven hangon, magyarul.
