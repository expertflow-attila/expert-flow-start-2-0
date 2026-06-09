# Eszközök — Technikai referencia

## VS Code telepítés (1 perc)

1. https://code.visualstudio.com → Download for [your OS]
2. Telepítés
3. Indítás → File → Open Folder → `~/Documents/vallalkozas/` (vagy hasonló mappa)

## Node.js + Claude Code telepítés (10 perc)

1. https://nodejs.org → LTS verzió letöltése és telepítése
2. Terminál (macOS-en: Terminal.app, Windows-on: PowerShell): `node -v` — ha verziót ír, megvan
3. Terminál: `npm install -g @anthropic-ai/claude-code`
4. https://www.anthropic.com/claude-code → Sign up (Pro plan, ~$20/hó)
5. Terminálban: `claude` — első indításkor megnyit egy bejelentkezési URL-t a böngészőben
6. Belépés Anthropic-fiókkal — utána a `claude` parancs a saját mappádban indítja a session-t

## CLAUDE.md kötelező mezők

```markdown
# Projekt: NÉV
## Mit építek
[1 mondat — az 1. modul mag-állításából]
## Célcsoportom
[1 mondat — a 2. modul avatár-portréjából]
## Nyelv
Magyar
## Stílus
[2-3 sor: dokumentáló, fenntartható, nem coach-szagú]
## Tiltott szavak
[lista — pl. „forradalmi", „transzformáció", „shortcut"]
## Kódírásnál
[3-4 utasítás]
```

A Claude Code minden új session-ben elolvassa ezt — emiatt KÖTELEZŐ a projekt gyökerében.

## Claude Code alap-parancsok

A leggyakrabban használt parancsok. A `/help` mindig kiírja a teljes listát az aktuális verzióhoz.

| Parancs | Mit csinál | Mikor használd |
|---------|------------|----------------|
| `claude` | Új session indítása az aktuális mappában | Minden munkakezdéskor |
| `/help` | Az összes parancs listája | Ha nem emlékszel valamire |
| `/context` | Megmutatja, hány tokennél tartasz a session-ben | Ha érzed, hogy lassul vagy ismétel |
| `/clear` | Új beszélgetés indítása ugyanabban a mappában (a kontextus tisztul) | Témaváltáskor, vagy ha túl tele a kontextus |
| `/compact` | A jelenlegi kontextust összegzi és lerövidíti, de a folytatást benn tartja | ~120K tokennél, mielőtt automatikusan megtenné |
| `/rewind` | Visszalépés egy korábbi állapotba (dupla Escape ugyanezt csinálja) | Ha rossz irányba ment a beszélgetés vagy egy fájlszerkesztés |
| `/model` | Modell-választás (Opus / Sonnet / Haiku) | Ha komplex elemzés kell vagy épp költséget akarsz spórolni |
| `/agents` | A telepített sub-agentek listája | Mielőtt egy nagy feladatot delegálsz |

A pontos parancslista verziónként változhat — ha valamelyiket nem ismeri fel a Claude Code, futtasd a `/help`-et.

## Plan mode workflow

A plan mode-ot a **Shift+Tab+Tab** billentyű-kombinációval kapcsolod be (a Tab-ot kétszer kell megnyomni a Shift lenyomva tartása mellett). A státusz a prompt-sor mellett megjelenik.

Mit csinál: a Claude előbb leírja, MIT akar tenni — fájlokat listáz, lépéseket sorol, kérdéseket tesz fel —, és csak a jóváhagyásod után írja meg a kódot vagy módosítja a fájlokat. Ezt használd:

- Komplex, többfájlos feladatnál (pl. „építs egy 3 oldalas weboldalt")
- Ha nem vagy biztos, hogy jól érted-e a kérésedet
- Új mappában / új projektnél, ahol könnyen elír valamit

A tapasztalatom szerint plan mode nélkül komplex feladatnál nagy a kockázata, hogy a Claude valamit elír — plan mode-dal a felénél meg tudod állítani, ha rossz irányba megy.

## Sub-agent (Task tool) használata

A sub-agent egy „másik Claude", amit te indítasz egy részfeladatra. Saját kontextus-ablakot kap, a saját session-öd nem telik meg az ő munkájával — csak az összefoglalóját kapod vissza.

Mikor érdemes használni:

- 3+ fájl elemzése (pl. „nézd át a 3 legfrissebb fájlt és írj egy `audit.md`-t")
- Hosszú web-keresés vagy dokumentáció-feldolgozás
- Repetitív feladat (pl. „minden `.tsx` fájlban cseréld ki az X-et Y-ra")

Hogyan indítsd: a Claude Code-nak mondd el, hogy „indíts egy sub-agentet", vagy adj olyan feladatot, ami egyértelműen több részből áll. Az Explore és a general-purpose sub-agentek a leggyakoribbak — az `/agents` paranccsal nézd meg, mi van telepítve.

Példa-prompt:

```
Indíts egy sub-agentet, ami átnézi a `src/components/` mappa
összes `.tsx` fájlját, és írjon egy rövid audit.md-t, hogy hol
nem konzisztens a kommentelési stílus. Csak az összefoglalót
add vissza, ne a részletes lista mind a 30 fájlról.
```

## Skill telepítés

A skillek a Claude Code képességbővítései — előre megírt utasítás-csomagok, amiket egy parancs-szóval aktiválsz. Telepítés (user scope, mindenhol elérhető):

```
~/.claude/skills/<skill-neve>/SKILL.md
```

A `SKILL.md` minimum-sablon:

```markdown
---
name: skill-neve
description: 1-2 mondat arról, mikor aktiválja önmagát a skill, és milyen kulcsszavakra reagál.
---

# Skill címe

## Mire való?
[mit csinál]

## Magatartási szabályok
[hangnem, formátum, korlátok]
```

Aktiválás: a Claude Code automatikusan beolvassa, és vagy maga aktiválja a leírás alapján, vagy te hivatkozhatsz rá a kérésedben (pl. „használd a skill-neve skillt").

A skill-piactérről (https://claudemarketplaces.com) érdemes 1-2 általánosat telepíteni az első héten — pl. egy `session-handoff` típusút, ami session-vég előtt rendezi a kontextust.

## MCP setup

Az MCP (Model Context Protocol) szerverek külső eszközöket csatlakoztatnak a Claude Code-hoz — pl. Google Drive olvasás, Slack üzenet-küldés, Webflow CMS-kezelés.

A projekt-mappában hozz létre egy `.mcp.json` fájlt:

```json
{
  "mcpServers": {
    "google-drive": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-gdrive"],
      "env": {
        "GOOGLE_DRIVE_CREDENTIALS_PATH": "/abszolút/útvonal/credentials.json"
      }
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
    }
  }
}
```

Néhány gyakori MCP szerver, amit érdemes ismerni:

- **Google Drive MCP** — fájl-olvasás, keresés, metaadatok a Drive-ban
- **Slack MCP** — üzenet-küldés, csatorna-listázás
- **Playwright MCP** — böngésző-automatizáció, screenshot, oldal-navigáció
- **Webflow MCP** — site-kezelés, collection-szerkesztés (ha Webflow-t használsz)
- **Excalidraw MCP** — diagram-generálás .excalidraw fájlokba

A teljes katalógus: https://github.com/modelcontextprotocol/servers

A Claude Code újraindítás után tölti be az `.mcp.json`-t — utána a Claude maga látja az új tool-okat, és aktiválja, amikor szükség van rá.

## Tipikus hibák Claude Code használatkor

- **Context overflow** — ha a session 150K+ token, a válaszok lassulnak és „hülyülnek". Megoldás: `/compact` 120K körül, vagy `/clear` és új session.
- **Lassulás, ismétlés** — ha érzed, hogy ugyanazt a fájlt 3-4-szer olvassa, vagy köröz egy hibán: `/rewind` a hibás döntés elé, és induljatok onnan tisztán.
- **Hibás irány** — ha a Claude rossz fájlt szerkeszt vagy félreérti a kérésedet: NE folytasd a beszélgetést, mert a hibás kontextus szennyezi a következő válaszokat is. `/rewind` (dupla Escape) a tévedés elé.
- **CLAUDE.md hiánya** — ha nem írsz CLAUDE.md-t, a Claude minden session-ben sablonosan válaszol. 2 perc megírni, hetekig megtérül.
- **Plan mode kihagyása komplex feladatnál** — ha egyből csinál valamit egy 5-fájlos kérésre, könnyen elír. Komplex feladatnál mindig Shift+Tab+Tab előbb.

## Sybell DNS — Google Workspace MX rekordok

Mielőtt másolsz, a négy rekord szerepe egyszerű nyelven: az MX mondja meg, hova érkezzenek a leveleid; az SPF és a DKIM bizonyítja a fogadó rendszernek, hogy tényleg te küldted; a DMARC szabályt ad arra, mi történjen a nevedben hamisított levelekkel.

A Google Workspace ezt az 5 MX-rekordot kéri (2026 óta a hagyományos struktúra; az új Google rendszerek egyetlen `smtp.google.com` MX-et is elfogadnak — a Google admin pontosan megmondja, melyik kell):

```
Type: MX  | Priority: 1   | Host: @ | Value: ASPMX.L.GOOGLE.COM.
Type: MX  | Priority: 5   | Host: @ | Value: ALT1.ASPMX.L.GOOGLE.COM.
Type: MX  | Priority: 5   | Host: @ | Value: ALT2.ASPMX.L.GOOGLE.COM.
Type: MX  | Priority: 10  | Host: @ | Value: ALT3.ASPMX.L.GOOGLE.COM.
Type: MX  | Priority: 10  | Host: @ | Value: ALT4.ASPMX.L.GOOGLE.COM.
```

A Sybell admin-jában: Domain → DNS-kezelés → MX-rekord hozzáadása. A pont a Value végén KÖTELEZŐ (a Sybell felülete néhol automatikusan hozzáteszi).

## SPF rekord

```
Type: TXT
Host: @
Value: v=spf1 include:_spf.google.com ~all
```

Ha már van SPF-rekordod (pl. egy másik szolgáltatótól), NE adj hozzá másodikat — egészítsd ki ugyanazt:
`v=spf1 include:_spf.google.com include:_spf.masiksolgaltato.com ~all`

## DKIM rekord

A DKIM-et a Google Workspace admin-jában generálod:

1. admin.google.com → Apps → Google Workspace → Gmail → Authenticate email
2. „Generate new record" — válassz 2048 bites kulcsot
3. A kapott Host (pl. `google._domainkey`) és Value (egy hosszú TXT-érték) párost bemásolod a Sybell DNS-be
4. Visszamész a Google admin-ba → „Start authentication"

## DMARC rekord

Indulásnál figyelő módban:

```
Type: TXT
Host: _dmarc
Value: v=DMARC1; p=none; rua=mailto:dmarc@domain.hu
```

A `p=none` figyelő mód — később, miután 2-4 hétig stabil a kimenő emailezés, kapcsolható `quarantine`-re vagy `reject`-re. A `rua` címre érkezik a heti riport — érdemes egy külön mailbox-ot csinálni rá (pl. `dmarc-reports@domain.hu`).

## Propagációs idő

Propagáció = amíg az új DNS-bejegyzés a világ összes névszerverére szétterjed. Addig a rekord beírva már jó lehet, csak még nem mindenki látja.

- MX rekordok: 1-24 óra (Sybell általában 30-60 perc)
- SPF / DMARC: 5-30 perc
- DKIM: 1-12 óra (a Google ellenőrzi az aktiválás előtt)

Tipp: használj https://mxtoolbox.com-t a státusz ellenőrzésére. Az „MX Lookup" megmutatja, hogy a rekordok publikusak-e már.

## Domain név — döntési szempontok

| Szempont | Súly | Példa |
|----------|------|-------|
| Memorizálható (rövid) | Magas | „expertflow.hu" |
| Magyar nyelven kimondható | Magas | NEM „xntechqq.hu" |
| Nincs ékezet (technikai) | Magas | „expertflow.hu", NEM „szakértő.hu" |
| .hu végződés | Közepes | magyar piacnak fontos |
| .com is elérhető | Alacsony | csak ha nemzetközi terv |
| SEO-érték | Alacsony | a brand jobban megéri |
| Telefonon mondható | Magas | ha kell betűzni, baj |

## Setup checklist sablon

```markdown
# Setup checklist — {{date}}

## 01. lecke — VS Code és Claude Code telepítés
- [ ] VS Code telepítve
- [ ] Projekt-mappa megnyitva (`~/Documents/vallalkozas/`)
- [ ] Node.js telepítve (`node -v` válaszol)
- [ ] Claude Code előfizetés aktív
- [ ] `npm install -g @anthropic-ai/claude-code` lefutott
- [ ] `claude` parancsra elindul a session, bejelentkezés sikeres
- [ ] CLAUDE.md kitöltve a projekt gyökerébe

## 02. lecke — Claude Code alapok
- [ ] `/help`, `/context`, `/clear`, `/compact`, `/rewind`, `/model`, `/agents` kipróbálva
- [ ] Plan mode (Shift+Tab+Tab) bekapcsolva egy összetett feladaton
- [ ] Sub-agent delegálás egyszer kipróbálva
- [ ] Legalább 1 skill telepítve (`~/.claude/skills/...`)
- [ ] Legalább 1 MCP szerver bekonfigurálva (`.mcp.json`)

## 03. lecke — Sybell domain
- [ ] Domain név lebrainstormolva (20 javaslat → 1 nyertes)
- [ ] Domain regisztrálva a Sybell-en

## 04. lecke — Google Workspace + DNS
- [ ] Google Workspace 14 napos trial aktív
- [ ] Domain-igazolási TXT-rekord beállítva Sybell-en
- [ ] Domain igazolva a Google admin-ban
- [ ] 5 MX-rekord beállítva
- [ ] SPF-rekord beállítva
- [ ] DKIM-rekord generálva és beállítva
- [ ] DMARC-rekord beállítva (p=none)
- [ ] hello@domain.hu működik (próba küldés és fogadás Gmail-ből)
- [ ] mxtoolbox.com pozitív státusz
```

## Tipikus hibák — domain és DNS

- **Aposztróf vagy különleges karakter a domain-ben** — soha
- **Nehezen leírható domain** — ha telefonon kell mondani, baj
- **Hosszú (15+ betű) domain** — memorizálhatatlan
- **Trendi szavak** („crypto", „web3", „meta") — gyorsan elavul
- **MX-rekord végéről hiányzó pont** — sok DNS-szolgáltatónál érvénytelenné teszi
- **Második SPF-rekord hozzáadása** — a két SPF egymást üti, mindkét rendszer spam-be kerül
- **DMARC `p=reject`-tel induláshoz** — ha valami nincs jól beállítva, a saját kimenő emailjeid is törlődnek
- **CLAUDE.md elhanyagolása** — a Claude Code minden session-ben olvassa, ha nem írod meg, sablonosan válaszol
