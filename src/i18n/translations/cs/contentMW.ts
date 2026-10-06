// ---------------------------------------------------------------------------
// Malware (MW) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Malware module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentMW = {
  aim:
    'Poskytnout základní znalosti o tom, co je malware, jaká přináší rizika a jaké jsou zásady ochrany před ním.',
  objectives: [
    'Představit, co je malware a jaké jsou jeho typy.',
    'Vysvětlit, jak se malware chová a podle čeho poznáme, že je zařízení nakažené.',
    'Rozvinout dovednosti pro ochranu před riziky spojenými s malwarem.',
  ],
  outcomes: [
    'Umím popsat, co je malware, a rozpoznat ho v zadaných situacích.',
    'Umím vysvětlit různé typy malwaru, jak se chovají a podle čeho poznám, že je moje zařízení nakažené.',
    'Umím v zadaných situacích předvést způsoby ochrany před nákazou malwarem a zdůvodnit svoje rozhodnutí.',
  ],
  parts: [
    {
      goal: 'Pomoct žákům pochopit pojem malware.',
      bundle: {
        filename: 'Malware - balíček - Část 1',
      },
      included: {
        materials: [
          {
            // ID: 6.1.1
            kind: 'Obrázek',
            name: 'Malicious + software = malware',
            filename: 'Obrázek - Malicious + software = malware',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.1.2
            kind: 'Obrázek',
            name: 'Co je škodlivé?',
            filename: 'Obrázek - Co je škodlivé',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.1.4
            kind: 'Pracovní list',
            name: 'Souvisí s malwarem, nebo ne?',
            filename: 'Pracovní list - Souvisí s malwarem, nebo ne',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Poznáváme malware',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.1.3
        title: 'Co je malware?',
        supportText:
          'Použijte video k představení malwaru jako softwaru, který je vytvořený tak, aby škodil. Dáte tím žákům základ, než se pustí do jednotlivých typů. Zastavte se a zeptejte se, co už o počítačových virech vědí nebo slyšeli.',
        downloads: {
          video: {
            filename: 'Co je malware',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Co je malware - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal: 'Představit běžné typy malwaru.',
      bundle: {
        filename: 'Malware - balíček - Část 2',
      },
      included: {
        materials: [
          {
            // ID: 6.2.2
            kind: 'Schéma',
            name: 'Sada mincí',
            filename: 'Schéma - Sada mincí',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.2.3
            kind: 'Schéma',
            name: 'Herní plán: Uzly',
            filename: 'Schéma - Herní plán - Uzly',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Typy malwaru',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.2.1
        title: 'Seznámení s typy malwaru',
        supportText:
          'Použijte video, aby žáci získali jasný přehled o jednotlivých typech malwaru a o tom, čím se každý liší. Zastavte se a krátce proberte, který typ podle nich představuje největší riziko a proč.',
        downloads: {
          video: {
            filename: 'Seznámení s typy malwaru',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Seznámení s typy malwaru - Titulky',
            ariaLabel: 'Stáhnout titulky' },
        },
      },
    },
    {
      goal: 'Poskytnout přehled vlastností malwaru, podle kterých ho lze rozpoznat a odhalit.',
      bundle: {
        filename: 'Malware - balíček - Část 3',
      },
      included: {
        materials: [
          {
            // ID: 6.3.1
            kind: 'Text ke čtení',
            name: 'Jak poznat malware',
            filename: 'Text ke čtení - Jak poznat malware',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.3.2
            kind: 'Plakát',
            name: 'Sedm příznaků',
            filename: 'Plakát - Sedm příznaků',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.3.3
            kind: 'Pracovní list',
            name: 'Seznam příznaků',
            filename: 'Pracovní list - Seznam příznaků',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Pátrání po malwaru',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
    },
    {
      goal: 'Pomoct žákům pochopit ochranná opatření proti malwaru.',
      bundle: {
        filename: 'Malware - balíček - Část 4',
      },
      included: {
        materials: [
          {
            // ID: 6.4.1
            kind: 'Situace',
            name: 'Malware a krádež dat',
            filename: 'Situace - Malware a krádež dat',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.4.2
            kind: 'Plakát',
            name: 'Co dělat a co nedělat',
            filename: 'Plakát - Co dělat a co nedělat',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.4.3
            kind: 'Obrázky',
            name: 'Doprovodné obrázky: Dávej pozor',
            filename: 'Obrázky - Doprovodné obrázky - Dávej pozor',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.4.4
            kind: 'Pracovní list',
            name: 'Štít proti malwaru',
            filename: 'Pracovní list - Štít proti malwaru',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Rozbor okolností nákazy malwarem',
          },
          {
            title: 'Základní ochranná opatření',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
    },
  ],
  relatedModuleCards: [
    {
      moduleId: 'dc',
      brand: 'DC',
      href: '/learning-hub/digital-citizenship/content',
      imageSrc: '/images/learning-hub/01_digital-citizenship.webp',
    },
    {
      moduleId: 'ap',
      brand: 'AP',
      href: '/learning-hub/attacker-perspective/content',
      imageSrc: '/images/learning-hub/02_attacker-perspective.webp',
    },
    {
      moduleId: 'at',
      brand: 'AT',
      href: '/learning-hub/authentication/content',
      imageSrc: '/images/learning-hub/03_authentication.webp',
    },
    {
      moduleId: 'dp',
      brand: 'DP',
      href: '/learning-hub/data-privacy/content',
      imageSrc: '/images/learning-hub/04_data-privacy.webp',
    },
    {
      moduleId: 'se',
      brand: 'SE',
      href: '/learning-hub/social-engineering/content',
      imageSrc: '/images/learning-hub/05_social-engineering.webp',
    },
    {
      moduleId: 'dm',
      brand: 'DM',
      href: '/learning-hub/digital-misuse/content',
      imageSrc: '/images/learning-hub/07_digital-misuse.webp',
    },
  ],
}

export const challengeMW = {
  title: 'Detektiv na malware',
  subtitle: 'Jste analytik kyberbezpečnosti. Prohlédněte si soubory na svém virtuálním počítači, projděte doručenou poštu, vyřešte podezřelá vyskakovací okna a zkontrolujte oprávnění aplikací ve 4 interaktivních úrovních. Udržíte systém čistý?',
  howItWorks: 'Jak to funguje',
  instruction: 'Projděte 4 úrovně na svém virtuálním počítači. Každá úroveň představuje jinou situaci z kyberbezpečnosti. Každý případ si pozorně prohlédněte a rozhodněte, jestli je bezpečný, nebo jde o hrozbu — a pak si přečtěte vysvětlení.',
  tip: 'Malware se často maskuje jako něco neškodného. Všímejte si podezřelých přípon souborů, překlepů v doménách, zbytečných oprávnění a slibů, které znějí až moc dobře.',
  tipLabel: 'Tip',
  welcomeTitle: 'Vítejte, analytiku!',
  welcomeDescription: 'Do vašeho počítače dorazily podezřelé soubory, e-maily a vyskakovací okna. Projděte 4 úrovně, odhalte hrozby a ochraňte systém.',
  levels: [
    '💻 Úroveň 1 — Skener souborů',
    '📧 Úroveň 2 — E-mailová schránka',
    '🌐 Úroveň 3 — Vyskakovací okna prohlížeče',
    '🔒 Úroveň 4 — Oprávnění aplikací',
  ],
  bootButton: 'Spustit počítač →',
  scoreLabel: 'Skóre',
  correctLabel: 'Správně',
  threatsCaughtLabel: 'Zachycené hrozby',
  keepFile: '✓ Ponechat soubor',
  quarantine: '🗑️ Karanténa',
  safeKeep: '✓ Bezpečné / Ponechat',
  threatRemove: '⚠️ Hrozba / Odstranit',
  nextButton: 'Další →',
  malwareTypesTitle: 'Typy malwaru',
  malwareTypesSubtitle: 'Běžné typy malwaru, na které si dát pozor',
  malwareTypes: [
    '🦠 Virus — připojuje se k souborům a šíří se',
    '🪱 Červ — sám se množí a šíří se sítěmi',
    '🐴 Trojský kůň — maskuje se jako užitečný program',
    '🔐 Ransomware — zamkne soubory, dokud nezaplatíte',
    '👁️ Spyware — tajně sleduje, co děláte',
    '📢 Adware — zahltí vás reklamami',
  ],
  securityGuideTitle: 'Bezpečnostní příručka',
  securityGuideSubtitle: 'Varovné signály, kterých si všímat',
  securityRedFlags: [
    '🚩 .exe, .bat, .vbs z neznámých zdrojů',
    '🚩 Špatně napsané nebo falešné domény odesílatele',
    '🚩 Falešná upozornění na viry v prohlížeči',
    '🚩 Aplikace požadující zbytečná oprávnění',
    '🚩 Výhry, peníze zdarma nebo naléhavé hrozby',
    '🚩 Odpočet, který vyvolává paniku',
  ],
  goldenRule: 'Když máte pochybnosti, neklikejte. Obraťte se radši na IT podporu nebo na dospělého, kterému věříte.',
  levelCompleteTitle: 'Úroveň dokončena!',
  levelCompleteSubtitle: 'Pokračujte!',
  levelResultLabel: 'Výsledek úrovně',
  correctDecisionsLabel: 'správných rozhodnutí',
  continueButton: 'Pokračovat →',
  resultsTitle: 'Systém zabezpečen! 🛡️',
  resultsDescription: 'Vaše zpráva o kyberbezpečnosti je připravená.',
  accuracyLabel: 'Přesnost',
  threatsCaughtStat: 'Zachycené hrozby',
  threatsMissedStat: 'Přehlédnuté hrozby',
  analystRankLabel: 'Hodnost analytika',
  rankTrainee: '📘 Praktikant',
  rankTraineeMsg: 'Učte se dál! Projděte si Bezpečnostní příručku vpravo a zkuste to znovu — zlepšíte se!',
  rankJunior: '🔍 Analytik junior',
  rankJuniorMsg: 'Dobrá snaha! Budujete si solidní schopnost malware odhalit. Cvik dělá mistra.',
  rankSenior: '🔐 Analytik senior',
  rankSeniorMsg: 'Skvělá práce! Většinu hrozeb jste odhalili. Trénujte oko dál na jemné varovné signály.',
  rankElite: '🛡️ Elitní kyberanalytik',
  rankEliteMsg: 'Vynikající práce! Zachytili jste skoro každou hrozbu. Instinkt pro digitální bezpečnost máte výborný.',
  playAgain: 'Hrát znovu',
  levelMeta: [
    { title: 'Úroveň 1 ze 4 — Skener souborů', app: '📁 Průzkumník souborů', msg: '🔍 Kontroluji soubor…' },
    { title: 'Úroveň 2 ze 4 — E-mailová schránka', app: '📧 Pošta', msg: '📧 Čtu e-mail…' },
    { title: 'Úroveň 3 ze 4 — Vyskakovací okna prohlížeče', app: '🌐 Prohlížeč', msg: '⚠️ Zachyceno vyskakovací okno!' },
    { title: 'Úroveň 4 ze 4 — Oprávnění aplikací', app: '⚙️ Správce aplikací', msg: '⚙️ Kontroluji oprávnění…' },
  ],
  files: [
    {
      icon: '💀', name: 'FreeMinecraft_Crack.exe', type: 'Spustitelný soubor (.exe)',
      source: 'Staženo z: crack-games-free.ru', size: '14.2 MB', date: 'Dnes, 15:41',
      description: 'Instalátor, který slibuje Minecraft zdarma. Stažený z neoficiálního ruského webu.',
      isThreat: true,
      explanation: 'Cracknuté instalátory her jsou klasický způsob, jak šířit trojské koně a ransomware. Přípona .exe, podezřelá doména i slib „cracku zdarma“ jsou závažné varovné signály.',
      tip: 'Software stahujte jen z oficiálních, ověřených stránek.',
    },
    {
      icon: '📄', name: 'History_Essay_Draft.docx', type: 'Dokument Word (.docx)',
      source: 'Vytvořeno lokálně na tomto zařízení', size: '48 KB', date: 'Včera, 19:15',
      description: 'Dokument Word, který jste si sami vytvořili do hodiny dějepisu.',
      isThreat: false,
      explanation: 'Malý dokument Word vytvořený přímo v počítači je bezpečný. Má běžnou příponu, malou velikost a místní původ.',
      tip: 'U souborů .docx od cizích lidí buďte opatrní — můžou obsahovat škodlivá makra. Vlastní soubory jsou ale v pořádku.',
    },
    {
      icon: '⚡', name: 'speedup_your_pc.bat', type: 'Dávkový skript (.bat)',
      source: 'Přijato přes Discord DM od: xX_h4ck3r_Xx', size: '3.1 KB', date: 'Dnes, 11:02',
      description: 'Dávkový skript poslaný přes Discord neznámým uživatelem, který slibuje zrychlení počítače.',
      isThreat: true,
      explanation: 'Soubory .bat můžou spustit jakýkoli systémový příkaz — včetně instalace malwaru, otevření zadních vrátek nebo mazání souborů. Skripty od cizích lidí nikdy nespouštějte.',
      tip: 'Skripty .bat nebo .vbs nikdy nespouštějte od lidí, které neznáte a plně jim nevěříte, i když tvrdí, že jsou neškodné.',
    },
    {
      icon: '🎵', name: 'Summer_Playlist.mp3', type: 'Zvukový soubor (.mp3)',
      source: 'Uloženo z desktopové aplikace Spotify', size: '8.7 MB', date: 'Před 3 dny',
      description: 'Hudební soubor uložený přes oficiální aplikaci Spotify.',
      isThreat: false,
      explanation: 'Běžný zvukový soubor z důvěryhodného zdroje. Soubory .mp3 nejde spustit a z legitimních aplikací žádné skutečné riziko nepředstavují.',
      tip: 'Běžné mediální soubory (.mp3, .jpg, .mp4) jsou většinou bezpečné. Pozor dávejte jen na soubory, které svoji příponu maskují, třeba „song.mp3.exe“.',
    },
    {
      icon: '🔧', name: 'RegFix_Pro_Setup.exe', type: 'Spustitelný soubor (.exe)',
      source: 'Dodáno vyskakovací reklamou prohlížeče', size: '2.1 MB', date: 'Dnes, 14:18',
      description: '„Nástroj na opravu registru“, který nabídla vyskakovací reklama tvrdící, že máte poškozený počítač.',
      isThreat: true,
      explanation: 'Falešné „nástroje na opravu počítače“ z vyskakovacích reklam jsou běžný způsob, jak se šíří adware a spyware. Skutečné systémové nástroje se takhle neinzerují.',
      tip: 'Skutečný antivirový nebo opravný program se nikdy nešíří přes náhodné vyskakovací reklamy v prohlížeči.',
    },
    {
      icon: '📸', name: 'Birthday_Party_2024.jpg', type: 'Obrázkový soubor (.jpg)',
      source: 'Přijato přes WhatsApp od: babičky', size: '2.9 MB', date: 'Minulý týden',
      description: 'Fotka z vaší narozeninové oslavy, kterou poslala babička.',
      isThreat: false,
      explanation: 'Fotka .jpg od někoho z rodiny, koho znáte, je bezpečná. Běžné obrázky od důvěryhodných kontaktů malware nejsou.',
      tip: 'Pozor na obrázky s dvojitou příponou, jako „photo.jpg.exe“ — ty skutečný, nebezpečný typ souboru skrývají.',
    },
    {
      icon: '💎', name: 'FREE_ROBUX_GENERATOR.vbs', type: 'Skript VBScript (.vbs)',
      source: 'Odkaz z komentáře na YouTube', size: '1.8 KB', date: 'Dnes, 9:55',
      description: 'Skript z komentáře na YouTube, který slibuje neomezené Robuxy do Robloxu.',
      isThreat: true,
      explanation: 'Generátory „Robuxů zdarma“ neexistují — jsou to stoprocentně podvody. Skripty .vbs umí spouštět mocné systémové příkazy. Tohle je učebnicový způsob, jak se šíří malware.',
      tip: 'Generátory herní měny zdarma jsou vždycky podvod. Existují jen proto, aby kradly účty, instalovaly malware, nebo obojí.',
    },
    {
      icon: '📊', name: 'Science_Project_Data.xlsx', type: 'Tabulka Excel (.xlsx)',
      source: 'E-mail od: johnson.s@westridge-school.edu', size: '156 KB', date: 'Včera, 10:33',
      description: 'Soubor Excel s daty ke školnímu projektu, který poslal ověřený učitel.',
      isThreat: false,
      explanation: 'Tahle tabulka je od ověřeného učitele z oficiální školní domény. Typ souboru odpovídá a velikost je přiměřená.',
      tip: 'Kancelářské soubory od neznámých odesílatelů můžou obsahovat škodlivá makra. Před otevřením přílohy si odesílatele vždycky ověřte.',
    },
  ],
  emails: [
    {
      fromName: 'Tým IT bezpečnosti', fromAddr: 'security-alert@school-itsupport.xyz', avatarLetter: '🔐',
      subject: 'NALÉHAVÉ: Váš školní účet byl napaden — heslo si resetujte OKAMŽITĚ',
      body: `Milý žáku,

naše systémy zaznamenaly neoprávněný přístup k vašemu školnímu účtu z neznámého místa.

Heslo si musíte OKAMŽITĚ resetovat spuštěním přiloženého nástroje. Pokud do 30 minut nezareagujete, dojde k trvalému uzamčení účtu.

— Oddělení IT bezpečnosti`,
      attachment: 'PasswordReset_Tool.exe',
      isThreat: true,
      explanation: 'Hned několik varovných signálů: podezřelá doména „.xyz“ (ne skutečná doména vaší školy), extrémní tlak na čas a příloha .exe. Skutečná IT oddělení nástroje na reset hesla jako spustitelné soubory neposílají — odkážou vás na pořádnou přihlašovací stránku.',
      tip: 'Když vám přijde bezpečnostní upozornění, ozvěte se IT přímo na číslo, které už znáte — kontaktům z podezřelého e-mailu nikdy nevěřte.',
    },
    {
      fromName: 'Ms. Johnson', fromAddr: 'johnson.s@westridge-school.edu', avatarLetter: 'J',
      subject: 'Přírodovědná soutěž — zadání projektu v příloze',
      body: `Ahoj třído,

v příloze najdete oficiální zadání projektu k nadcházející přírodovědné soutěži. Najdete v něm požadované části, pokyny k úpravě a termín odevzdání.

Hotový plakát a zprávu přineste do učebny 14 do pátku.

Kdyby cokoli, ozvěte se!

paní učitelka Johnsonová
Přírodovědná sekce, škola Westridge`,
      attachment: 'Science_Fair_Project_Brief.docx',
      isThreat: false,
      explanation: 'Běžný školní e-mail. Odesílatel používá ověřenou školní doménu .edu, příloha je běžný dokument Word odpovídající obsahu e-mailu a nikdo po vás nechce osobní údaje ani vám nevyhrožuje.',
      tip: 'Soubor .docx od učitele, kterého znáte, z oficiální školní domény je bezpečný. Před otevřením jakékoli přílohy si vždycky ověřte celou adresu odesílatele.',
    },
    {
      fromName: 'Lukáš (kamarád ze hry)', fromAddr: 'lucas.gamer99@gmail.com', avatarLetter: 'L',
      subject: 'kámo spusť tohle, dá ti to nekonečný mince ve hře!!',
      body: `čau!!

našel jsem na netu tenhle šílenej skript, dá ti neomezený mince v Clash Royale. prostě spusť ten .bat a automaticky ti to hru upraví lol

brácha to zkoušel a fungovalo to. ale nikomu to neříkej

– Lukáš`,
      attachment: 'coin_hack_v3_FINAL.bat',
      isThreat: true,
      explanation: 'I zprávy od skutečných kamarádů můžou šířit malware — Lukášův účet může být napadený, nebo sám nemusí vědět, že je soubor nebezpečný. Skript .bat, který slibuje, že hru „zhackuje“, je klasický způsob, jak se doručuje trojský kůň. Když ho spustíte, útočník může získat plnou kontrolu nad vaším systémem.',
      tip: 'Skripty .bat ani .vbs nespouštějte od nikoho, ani od kamarádů. „Cheat“ skripty do online her jsou skoro vždycky přestrojený malware.',
    },
    {
      fromName: 'Školní knihovna', fromAddr: 'library@westridge-school.edu', avatarLetter: '📚',
      subject: 'Letní čtenářský program — váš seznam četby',
      body: `Ahoj,

děkujeme za přihlášení do našeho Letního čtenářského programu! V příloze najdete seznam četby sestavený podle vašeho věku a zájmů.

Kterýkoli z těchto titulů si můžete půjčit ve školní knihovně nebo si o něj napsat přes žákovský portál.

Příjemné čtení!

Tým školní knihovny Westridge`,
      attachment: 'Summer_Reading_List_2024.pdf',
      isThreat: false,
      explanation: 'Běžný e-mail ze školní knihovny z oficiální domény .edu. Příloha .pdf je seznam četby — přesně to, co k e-mailu patří. Nikdo po vás nechce osobní údaje a žádný odkaz není podezřelý.',
      tip: 'Soubory PDF od známých, důvěryhodných odesílatelů jsou většinou bezpečné. U PDF od neznámých odesílatelů buďte opatrnější — někdy můžou obsahovat vložené skripty.',
    },
    {
      fromName: 'CENTRUM UPOZORNĚNÍ NA VÝHRU', fromAddr: 'winner@free-prize-claim-2024.net', avatarLetter: '🏆',
      subject: 'BYLI JSTE VYBRÁNI — VYZVEDNĚTE SI iPHONE 15 HNED!!!',
      body: `GRATULUJEME!!!

Byli jste náhodně vybráni jako náš šťastný výherce! Pro vyzvednutí iPhonu 15 Pro Max vyplňte a odešlete přiložený formulář se svými osobními údaji a poplatkem za dopravu 129 Kč.

Odpovězte do 12 HODIN, jinak výhra propadne!

[VYZVEDNOUT VÝHRU →]`,
      attachment: 'WINNER_ClaimForm_URGENT.html',
      isThreat: true,
      explanation: 'Klasický podvod s výhrou a přílohou .html — po otevření se načte falešná stránka, která má ukrást vaše osobní a platební údaje. Varovné signály: výhra v soutěži, do které jste se nepřihlásili, extrémní tlak na čas, podezřelá doména odesílatele a spousta velkých písmen.',
      tip: 'E-mailové přílohy .html, které otevírají „formuláře“, jsou běžný způsob, jak přesvědčivou falešnou přihlašovací nebo platební stránku načíst rovnou ve vašem zařízení a obejít tak webové filtry.',
    },
  ],
  popups: [
    {
      browserUrl: 'https://free-movies-unlimited.pirate',
      appName: 'BEZPEČNOSTNÍ UPOZORNĚNÍ',
      icon: '🚨',
      message: '⚠️ NALEZEN VIRUS! Váš počítač je nakažený 47 viry! Okamžitě volejte 1-800-FIX-NOW, jinak se váš systém trvale poškodí!',
      subtext: 'Windows Defender zjistil kritické hrozby. Jednejte hned!',
      primaryBtnText: '📞 Zavolat a opravit',
      isThreat: true,
      explanation: 'Tohle je „scareware“ — falešné upozornění na virus, které vás má přimět zavolat na podvodné číslo nebo si nainstalovat falešný antivirus. Skutečné bezpečnostní nástroje upozornění ve vyskakovacím okně prohlížeče nikdy nezobrazují.',
      tip: 'Podezřelá vyskakovací okna zavírejte křížkem. Na telefonní čísla z vyskakovacích oken nikdy nevolejte — vždycky jde o podvodné linky.',
    },
    {
      browserUrl: 'https://school-portal.edu',
      appName: 'Školní portál',
      icon: '🍪',
      message: 'Tento web používá cookies, aby si zapamatoval vaše přihlášení a web se vám lépe používal.',
      subtext: 'Používáme jen nezbytné cookies. Žádné osobní údaje nepředáváme třetím stranám.',
      primaryBtnText: '✓ Přijmout cookies',
      isThreat: false,
      explanation: 'Běžné oznámení o souhlasu s cookies ze školního portálu. Otevřeně říká, k čemu cookies slouží, a nechce nic neobvyklého. Přijmout nezbytné cookies na důvěryhodném webu je v pořádku.',
      tip: 'Lišty se souhlasem s cookies na známých, důvěryhodných webech vyžaduje v mnoha zemích zákon a jsou úplně běžné.',
    },
    {
      browserUrl: 'https://gaming-news-blog.com',
      appName: 'Gratulujeme!!!',
      icon: '🎉',
      message: 'JSTE 1 000 000. NÁVŠTĚVNÍK! Vyhráli jste PlayStation 5 ZDARMA! Klikněte níže a hned si výhru vyzvedněte!',
      subtext: '⏱️ Nabídka vyprší za: 00:59 — vyzvedněte si ji, než vyprší čas!',
      primaryBtnText: '🎮 Získat PS5 ZDARMA!',
      isThreat: true,
      explanation: 'Falešné vyskakovací okno s výhrou — žádný web návštěvníkům náhodně nerozdává PlayStation 5. Kliknutí vede na podvodnou stránku, která chce osobní údaje nebo platbu. Odpočet je nátlaková taktika.',
      tip: 'Odpočet ve vyskakovacím okně tam je proto, aby vám zabránil přemýšlet. Skutečné výhry se přes náhodná vyskakovací okna nikdy nerozdávají.',
    },
    {
      browserUrl: 'https://youtube.com',
      appName: 'YouTube',
      icon: '🔔',
      message: 'Povolit YouTube posílat upozornění na nová videa z kanálů, které odebíráte?',
      subtext: 'Později to můžete změnit v nastavení prohlížeče.',
      primaryBtnText: 'Povolit oznámení',
      isThreat: false,
      explanation: 'I když je YouTube samo o sobě v pořádku, bezpečnější a čistší je oznámení v prohlížeči zakázat — i u důvěryhodných webů. Jednou udělené oprávnění k oznámením se dá zneužít nebo z něj může být spam.',
      tip: 'Než povolíte oznámení v prohlížeči, dobře si to rozmyslete. Většina webů to oprávnění ke svému fungování nepotřebuje.',
    },
    {
      browserUrl: 'https://download-cracked-software.cc',
      appName: 'Správce stahování',
      icon: '⬇️',
      message: 'Soubor připraven: „Adobe_Photoshop_FULL_CRACK_2024.exe“ (87 MB). Naše AI soubor ověřila jako BEZPEČNÝ.',
      subtext: 'Používá VirusSafe™ — zkontrolováno a schváleno. Klikněte a stáhněte ihned.',
      primaryBtnText: '✓ Stáhnout nyní',
      isThreat: true,
      explanation: 'Hned několik varovných signálů: podezřelá doména „.cc“, cracknutý (pirátský) software, který skoro vždycky obsahuje malware, a falešný odznak „BEZPEČNÉ“, který si web udělil sám. Značka „VirusSafe™“ je vymyšlená, aby vámi zmanipulovala.',
      tip: 'Cracknutý nebo pirátský software skoro vždycky obsahuje skrytý malware. Programy stahujte jen z oficiálního webu jejich vydavatele.',
    },
  ],
  permissions: [
    {
      appIcon: '🔦',
      appName: 'Flashlight Pro',
      source: 'Vydavatel: Neznámý vývojář · ⭐ 2,1 · 500 stažení',
      description: 'Jednoduchá aplikace svítilny.',
      permissions: [
        {
          icon: '📷',
          name: 'Fotoaparát',
          reason: 'Pro rozsvícení LED blesku',
          suspicious: false
        },
        {
          icon: '📍',
          name: 'Přesná poloha (GPS)',
          reason: 'Důvod neuveden',
          suspicious: true
        },
        {
          icon: '📞',
          name: 'Čtení protokolu hovorů',
          reason: 'Důvod neuveden',
          suspicious: true
        },
        {
          icon: '💾',
          name: 'Přístup ke všem souborům',
          reason: 'Důvod neuveden',
          suspicious: true
        },
      ],
      isThreat: true,
      explanation: 'Aplikace svítilny potřebuje k rozsvícení LED jen přístup k fotoaparátu. Poloha, protokoly hovorů a přístup ke všem souborům jsou úplně zbytečné — to jsou typické znaky spywaru, který tiše sbírá vaše data.',
      tip: 'Vždycky se ptejte: „Proč tahle aplikace potřebuje tohle oprávnění?“ Svítilna nemá k vaší GPS ani kontaktům jediný rozumný důvod.',
    },
    {
      appIcon: '📷',
      appName: 'School Photo Editor',
      source: 'Vydavatel: Creative Tools Ltd · ⭐ 4,7 · 2M+ stažení',
      description: 'Úprava a vylepšování fotek na školní projekty.',
      permissions: [
        {
          icon: '📷',
          name: 'Fotoaparát',
          reason: 'Na pořizování nových fotek k úpravě',
          suspicious: false
        },
        {
          icon: '🖼️',
          name: 'Přístup k fotografiím',
          reason: 'Na otevření vašich stávajících fotek',
          suspicious: false
        },
        {
          icon: '💾',
          name: 'Uložit do úložiště',
          reason: 'Na uložení upravených fotek',
          suspicious: false
        },
      ],
      isThreat: false,
      explanation: 'Všechna tři oprávnění mají jasný, logický důvod přímo spojený s úpravou fotek. Přístup k fotoaparátu, ke knihovně fotek a ukládání souborů je přesně to, co editor fotek potřebuje — nic víc.',
      tip: 'Když má každé požadované oprávnění jasný účel spojený s hlavní funkcí aplikace, je to znak poctivého a dobře navrženého programu.',
    },
    {
      appIcon: '🎮',
      appName: 'SuperRun Adventure',
      source: 'Vydavatel: FastGame Studio · ⭐ 4,1 · 800 tisíc stažení',
      description: 'Rychlá plošinovka s bočním pohledem.',
      permissions: [
        {
          icon: '🔊',
          name: 'Přehrávání zvuku',
          reason: 'Na zvukové efekty ve hře',
          suspicious: false
        },
        {
          icon: '📳',
          name: 'Vibrace',
          reason: 'Na vibrace při hraní',
          suspicious: false
        },
        {
          icon: '📍',
          name: 'Přesná poloha GPS',
          reason: 'Důvod neuveden',
          suspicious: true
        },
        {
          icon: '📱',
          name: 'Čtení ID zařízení a informací',
          reason: 'Důvod neuveden',
          suspicious: true
        },
      ],
      isThreat: true,
      explanation: 'Zvuk a vibrace jsou u hry normální. GPS a ID zařízení ale v plošinovce žádný rozumný důvod nemají — slouží k tomu, aby vás sledovaly a identifikovaly pro reklamní překupníky dat nebo si o vás vytvořily profil.',
      tip: 'I aplikace s dobrým hodnocením můžou chtít zbytečná oprávnění. Oprávnění, která s účelem aplikace jasně nesouvisí, vždycky odmítněte.',
    },
    {
      appIcon: '📚',
      appName: 'CsHub Learning',
      source: 'Vydavatel: CsHub Education · ⭐ 4,9 · 50 tisíc stažení',
      description: 'Interaktivní výuka kyberbezpečnosti pro žáky.',
      permissions: [
        {
          icon: '🌐',
          name: 'Přístup k internetu',
          reason: 'Na načítání lekcí a kvízů',
          suspicious: false
        },
        {
          icon: '💾',
          name: 'Místní úložiště',
          reason: 'Pro uložení pokroku offline',
          suspicious: false
        },
      ],
      isThreat: false,
      explanation: 'Přístup k internetu a místní úložiště jsou pro vzdělávací aplikaci, která načítá online obsah a ukládá tvůj pokrok, jasně nezbytné. Je požadováno pouze to, co je nutné — dobrá praxe ochrany soukromí.',
      tip: 'Aplikace, které požadují pouze minimální oprávnění potřebná pro jejich základní funkci, jsou příklady designu respektujícího soukromí.',
    },
  ],
}
