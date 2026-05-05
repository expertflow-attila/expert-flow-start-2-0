# Bónusz — Hasznos linkek

## Eszközök — felvétel
- 🔗 **OBS Studio** — https://obsproject.com (ingyenes screen recording, Mac/Windows/Linux, ezzel készítettem ezt a kurzust)
- 🔗 **Fifine USB mikrofon** — https://fifinemicrophone.com (15-20 ezer Ft, kezdőbarát, plug-and-play)
- 🔗 **Samson Q2U** — https://www.samsontech.com (USB + XLR, 25-30 ezer Ft, ha hosszabb távra gondolsz)
- 🔗 **MacWhisper** — https://goodsnooze.gumroad.com/l/macwhisper (helyi Whisper Mac-en, egyszeri ~$50, internet nélkül is megy)
- 🔗 **OpenAI Whisper API** — https://platform.openai.com/docs/guides/speech-to-text (~$0.006/perc, kis felvételhez bőven elég)
- 🔗 **Whisper.cpp** — https://github.com/ggerganov/whisper.cpp (ingyenes, parancssoros, lokális futás CPU-n is)

## Eszközök — vágás
- 🔗 **DaVinci Resolve** — https://www.blackmagicdesign.com/products/davinciresolve (ingyenes, GUI-s vágó, ha vizuálisan akarsz dolgozni)
- 🔗 **FFmpeg** — https://ffmpeg.org (parancssor, Claude Code-dal jól vezérelhető — nálam ez jött be)
- 🔗 **FFmpeg dokumentáció — filter\_complex** — https://ffmpeg.org/ffmpeg-filters.html (a `select`/`aselect` filterek itt vannak részletezve)

## Eszközök — hosztolás és értékesítés
- 🔗 **Mux** — https://mux.com (fejlesztőbarát videó-hosztolás, használat-alapú árazás, ~10-30 ezer Ft/hó induláskor)
- 🔗 **Vimeo Pro** — https://vimeo.com/upgrade (~10 ezer Ft/hó fix, kezdőbarát, beágyazható videók)
- 🔗 **Stripe Payment Links** — https://stripe.com/docs/payments/payment-links (egy kattintásos fizetési oldal, nem kell hozzá saját szerver)
- 🔗 **Stripe Payment Links — magyar dokumentáció** — https://stripe.com/docs/payments/payment-links/customize (success URL, lokalizáció)
- 🔗 **Kit (ConvertKit)** — https://kit.com (a 9. modul email-szolgáltatója, sequence-ekkel a vásárlás utáni emailek automatizálva)

## Inspiráció — kurzus-platformok mintáknak
- 🔗 **Maven.com** — https://maven.com (cohort-kurzusok, jó látni a UI-mintázatokat)
- 🔗 **Jay Clouse — Creator Science** — https://creatorscience.com (egy ember kurzus-üzlet példa, hogyan kommunikál a saját közönségével)
- 🔗 **Ali Abdaal — Part-Time YouTuber Academy** — https://academy.aliabdaal.com (kurzus-curriculum mintázatok, hogyan strukturál egy 8-12 leckés kurzust)
- 🔗 **Kajabi demók** — https://kajabi.com (fizetős kurzus-platform UI-jának nézegetése — mi NEM ezt használjuk, de a layoutból lehet tanulni)

## Magyar referenciák
- 🔗 **Magyar online kurzus-piac áttekintése** — keress rá magyar kurzus-platformokra (pl. SkillTrainer, TanulMa) és nézd, milyen árakkal dolgoznak ugyanabban a témakörben, ahol Te tanítasz
- 🔗 **NAV — egyéni vállalkozó számlázás** — https://nav.gov.hu (a Stripe-ról érkező bevételhez számlázási kérdések; a 11. modul foglalkozott ezzel részletesen)

## Skill-tár és GitHub repos (haladóknak)

Ezek a Claude Code skill-keretek és GitHub repók, amik a 20. bónusz-modul témájához (videókurzus felvétel, vágás, Whisper transzkripció, hosztolás) kapcsolódnak — ha mélyebbre akarsz menni a Claude Code automatizációival.

- 🔗 **Whisper + ffmpeg vágási skill** — saját Claude Code skill, ami a `whisper.cpp` transzkripciójából automatikusan kivágja a töltelékszavakat, ismétléseket és csendes részeket az `ffmpeg select` filterrel (parancssoros, NEM GUI-s vágás)
- 🔗 **video-editor-scripter skill** — a Kallaway-módszertan szerinti scriptelést (hook, BUT/THEREFORE, dopamine ladder) támogató Claude Code skill, ami a felvett anyagból Markdown-scriptet és vágási tervet készít
- 🔗 **screen-recording skills** — OBS Studio profil-sablonok (Source Record több jelből), automatikus indítás-leállítás Claude Code-ból, headset-mikrofon kalibráció
- 📄 **Remotion AI Skills** — https://www.remotion.dev/docs/ai/skills és https://github.com/remotion-dev/skills (Remotion = programozott videó-készítés React-tel. Az AI-skillek a Claude Code-ot képessé teszik intro-outro animációt, animált lower thirds-t, kinetic typography-t programozni a videókurzushoz. A Mux/Vimeo embed mellé pluszként.)

### Általános ajánlott repók (minden modulnál hasznos)
- **Superpowers** — https://github.com/obra/superpowers (skill-keret Claude Code-hoz)
- **Claude Marketplaces** — https://claudemarketplaces.com (skill-piactér)

## A modul saját anyagai

- 📄 [prompts.md](./prompts.md)
- 📄 [video-script.md](./video-script.md)
- 📄 SKILL.md
- 📄 reference.md
