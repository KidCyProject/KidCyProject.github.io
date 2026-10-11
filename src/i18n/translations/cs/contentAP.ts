// ---------------------------------------------------------------------------
// Attacker Perspective (AP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Attacker Perspective module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentAP = {
  aim:
    'Poskytnout přehled o pohledu útočníka – pomoct žákům rozpoznat techniky útočníků a pochopit motivace, které za kybernetickými útoky stojí.',
  objectives: [
    'Rozvinout porozumění motivacím útočníků, včetně psychologických, sociálních a ekonomických faktorů.',
    'Vybudovat dovednost rozpoznávat běžné techniky útočníků.',
  ],
  outcomes: [
    'Rozumím motivacím útočníků a umím uvést příklady spojené s psychologickými, sociálními a ekonomickými faktory.',
    'Umím v zadaných situacích rozpoznat techniky útočníků.',
  ],
  parts: [
    {
      goal:
        'Pomoct žákům pochopit pojem důvěryhodný člověk a rozvinout dovednost vymezit si okruh lidí, kterým věří.',
      bundle: {
        filename: 'Pohled útočníka - balíček - Část 1',
      },
      included: {
        materials: [
          {
            // ID: 2.1.1
            kind: 'Pracovní list',
            name: 'Lidé, kterým věřím, kolem mě',
            filename: 'Pracovní list - Lidé, kterým věřím, kolem mě',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.1.2
            kind: 'Pracovní list',
            name: 'Kruhy důvěry',
            filename: 'Pracovní list - Kruhy důvěry',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.1.3
            kind: 'Obrázek',
            name: 'Situace: Nález peněz',
            filename: 'Obrázek - Situace - Nález peněz',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.1.4
            kind: 'Obrázek',
            name: 'Situace: Viděl jsem fotku',
            filename: 'Obrázek - Situace - Viděl jsem fotku',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Vymezit okruh lidí, kterým věříme',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
    },
    {
      goal: 'Představit pojem útočník a motivace z pohledu útočníka.',
      bundle: {
        filename: 'Pohled útočníka - balíček - Část 2',
      },
      included: {
        materials: [
          {
            // ID: 2.2.1
            kind: 'Kartičky se situacemi',
            name: 'Rozpoznej chování',
            filename: 'Kartičky se situacemi - Rozpoznej chování',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.2.2
            kind: 'Kartičky se situacemi',
            name: 'Poznej postavy',
            filename: 'Kartičky se situacemi - Poznej postavy',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.2.4
            kind: 'Obrázek',
            name: 'Motivace útočníků',
            filename: 'Obrázek - Motivace útočníků',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.2.5
            kind: 'Obrázek',
            name: 'Pohled do pohádky: motivace a prostředky útočníka',
            filename: 'Obrázek - Pohled do pohádky - motivace a prostředky útočníka',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.2.6
            kind: 'Pracovní list',
            name: 'Rozbor útoku',
            filename: 'Pracovní list - Rozbor útoku',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Poznáváme kybernetického útočníka',
          },
          {
            title: 'Pochopit motivaci útočníka',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 2.2.3
        title: 'Kdo stojí za kybernetickými útoky?',
        supportText:
          'Použijte video, aby si žáci dokázali představit skutečné lidi a motivace, které za kybernetickými útoky stojí, a dostali se za stereotyp osamělého hackera. Zastavte se a zeptejte se, kdo za tím podle nich je a proč.',
        downloads: {
          video: {
            filename: 'Kdo stojí za kybernetickými útoky',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Kdo stojí za kybernetickými útoky - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal: 'Představit základní techniky (taktiky), které jsou pro děti relevantní a které útočníci používají k dosažení svých cílů.',
      bundle: {
        filename: 'Pohled útočníka - balíček - Část 3',
      },
      included: {
        materials: [
          {
            // ID: 2.3.1
            kind: 'Text ke čtení',
            name: 'Smishing a vydávání se za někoho',
            filename: 'Text ke čtení - Smishing a vydávání se za někoho',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.3.2
            kind: 'Text ke čtení',
            name: 'Vishing, podvod a vydávání se za někoho',
            filename: 'Text ke čtení - Vishing, podvod a vydávání se za někoho',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.3.3
            kind: 'Text ke čtení',
            name: 'Nejčastější kybernetické hrozby',
            filename: 'Text ke čtení - Nejčastější kybernetické hrozby',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.3.4
            kind: 'Kartičky se situacemi',
            name: 'Běžné techniky útočníků',
            filename: 'Kartičky se situacemi - Běžné techniky útočníků',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.3.5
            kind: 'Kartičky',
            name: 'Útočníci a jejich plány',
            filename: 'Kartičky - Útočníci a jejich plány',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.3.6
            kind: 'Pracovní list',
            name: 'Hlavolam: Sešlost útočníků',
            filename: 'Pracovní list - Hlavolam - Sešlost útočníků',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Porozumět vzorcům chování',
          },
          {
            title: 'Porozumět průběhu útoku',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
    },
  ],
  otherModulesDivider: 'Prozkoumejte další témata',
  otherModulesTitle: 'Další moduly',
  otherModulesSubtitle: 'Procházejte příbuzné moduly a pokračujte v učení.',
  relatedModuleCards: [
    {
      moduleId: 'dc',
      brand: 'DC',
      href: '/learning-hub/digital-citizenship/content',
      imageSrc: '/images/learning-hub/01_digital-citizenship.webp',
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
      moduleId: 'mw',
      brand: 'MW',
      href: '/learning-hub/malware/content',
      imageSrc: '/images/learning-hub/06_malware.webp',
    },
    {
      moduleId: 'dm',
      brand: 'DM',
      href: '/learning-hub/digital-misuse/content',
      imageSrc: '/images/learning-hub/07_digital-misuse.webp',
    },
  ],
}

export const challengeAP = {
  title: 'V mysli hackera',
  subtitle:
    'Jste etický hacker. Najděte slabá místa na profilu sociální sítě, naplánujte útok tak, jak by to udělal útočník, a zjistěte, jak ho zastavit!',
  howItWorks: 'Jak to funguje',
  instruction:
    'Prohlédněte si tenhle profil na sociální síti očima hackera, který hledá slabá místa. Kliknout se dá skoro na všechno na obrazovce — přemýšlejte pořádně, protože kliknutí na něco, co skutečná zranitelnost není, vás stojí jeden život! Potom naplánujete útok tak, jak by to udělal útočník, a zjistíte, jak ho zastavit.',
  tipLabel: 'Tip',
  tip: 'Mezi spoustou nevinně vypadajících prvků se skrývají přesně 4 skutečné zranitelnosti. Ne všechno, na co se dá kliknout, je bezpečnostní slabina!',
  livesTitle: 'Životy',
  livesDesc: '3 špatná kliknutí a je konec',
  vulnerabilitiesFoundTitle: '🔍 Nalezené zranitelnosti',
  vulnerabilitiesEmpty: 'Zatím žádné…',
  vulnerabilitiesCount: '/ 4',
  attackerTargetsTitle: '🎯 Na co útočníci cílí',
  attackerTargets: [
    '🚩 HTTP místo HTTPS',
    '🚩 Sdílení polohy v reálném čase',
    '🚩 Celé datum narození veřejně viditelné',
    '🚩 Odhalené odpovědi na bezpečnostní otázky',
  ],
  profile: {
    displayName: 'Martin Novák',
    handle: '@martin123',
    statusActiveNow: 'Nyní aktivní',
    bioText: '16 · Hráč 🎮 · Manga fanoušek',
    aboutTitle: 'O mně',
    statsFriendsLabel: 'Přátelé',
    statsFollowingLabel: 'Sledování',
    bornText: 'Datum narození: 14. června 2008',
    emailText: 'martin.novak@seznam.cz',
    petNameText: 'Jméno mazlíčka: Pepe',
    post1Time: '📍 Nákupní centrum Hladovka · Právě teď',
    post1Body: 'Zrovna si dávám skvělý burger. Je někdo poblíž? Přijďte za mnou ke stánkům s jídlem! 😄',
    post1Badge: '🛍️ Nákupní centrum Hladovka — přihlášeno',
    post2Time: 'Před 2 hodinami',
    post2Body: 'Zrovna jsem doma ze školy! Dáváme si s rodinou pizzu 🍕 Nejlepší večer!',
    actionLike: 'To se mi líbí',
    actionComment: 'Komentář',
    actionShare: 'Sdílet',
  },
  vulnFoundSuffix: '/ 4 nalezených zranitelností',
  tryAgain: 'Zkusit znovu',
  winTitle: 'Výborně!',
  winMsg: 'Odhalili jste všechny 4 zranitelnosti jako skutečný bezpečnostní výzkumník. Teď víte, jak útočníci uvažují!',
  loseTitle: 'Konec hry!',
  loseMsgTemplate:
    'Došly vám životy! Našli jste {found} ze {total} zranitelností. Ty, které jste přehlédli, jsou teď zvýrazněné červeně.',
  attackerVoiceInitial: 'Zajímavý profil… mrknu se po slabinách.',
  attackerVoiceWin: '🏆 Působivé! Našli jste všechny {total} slabiny. Uvažujete jako hacker!',
  attackerVoiceLose: '💀 Příliš mnoho chyb. Příště si profil prohlédněte pozorněji.',
  attackerVoiceAlreadyTagged: 'Už označeno: {label}.',
  attackerVoiceCorrect: '🔓 Nalezena zranitelnost: {label}! {explain}',
  attackerVoiceWrong: 'Není to zranitelnost — {explain}',
  part1Label: 'Část 1 ze 3: Prohlédněte profil',
  part2Label: 'Část 2 ze 3: Naplánujte útok',
  part3Label: 'Část 3 ze 3: Proč a jak to zastavit',
  continueButton: 'Pokračovat: naplánovat útok →',
  planTitle: 'Plán útočníka',
  planIntro: 'Malá stopa sama o sobě nebezpečná není. Útočníci skládají stopy do plánu. U každé stopy vyberte cíl, kterému pomáhá.',
  planTrayTitle: 'Stopy z profilu',
  planChooseLabel: 'Kterému cíli tato stopa pomáhá?',
  planVoiceCorrect: '🧩 Dobrá shoda! {explain}',
  planVoiceWrong: '🤔 Tenhle cíl ne. {explain}',
  planSummaryTitle: 'Malé stopy se sčítají',
  planSummaryText: 'Datum narození, jméno mazlíčka a nezabezpečená stránka mohou otevřít účet. Poloha naživo a příspěvek o škole mohou prozradit, kde někdo je. Útočníci takové stopy sbírají jednu po druhé.',
  planScoreTemplate: '{n} z {total} stop napoprvé',
  toQuizButton: 'Pokračovat: proč a jak to zastavit →',
  goals: {
    account: { icon: '🔑', title: 'Vloupat se do účtu', hint: 'Převzít profil nebo herní účet' },
    person: { icon: '🧭', title: 'Najít člověka v reálném životě', hint: 'Vědět, kde dotyčný je a kdy' },
    none: { icon: '🚫', title: 'K ničemu', hint: 'Útočníkovi to moc nepomůže' },
  },
  clues: [
    {
      id: 'birthday',
      icon: '🎂',
      text: 'Celé datum narození na profilu',
      explanation: 'Lidé často používají datum narození v heslech a bezpečnostních odpovědích. Útočník to zkusí jako první.',
    },
    {
      id: 'pet',
      icon: '🐱',
      text: 'Jméno mazlíčka na profilu',
      explanation: 'Jména mazlíčků jsou oblíbená hesla a bezpečnostní odpovědi. Útočník může jméno zkusit, aby se dostal do účtu.',
    },
    {
      id: 'http',
      icon: '🔓',
      text: 'Stránka používá http:// a ne https://',
      explanation: 'Na stránce s http:// mohou ostatní ve stejné síti přečíst, co píšete. I heslo.',
    },
    {
      id: 'location',
      icon: '📍',
      text: 'Poloha naživo v příspěvku',
      explanation: 'Poloha naživo ukazuje přesně, kde někdo právě je. Cizí člověk by ji mohl zneužít, aby dotyčného našel.',
    },
    {
      id: 'routine',
      icon: '🏫',
      text: 'Příspěvek: „Zrovna jsem doma ze školy!“',
      explanation: 'Cizímu člověku to prozradí, kdy bývá dotyčný kde. Drobné údaje jako tenhle se mohou složit v plán.',
    },
    {
      id: 'avatar',
      icon: '👤',
      text: 'Profilový obrázek',
      explanation: 'Profilový obrázek je normální. Útočníkovi nepomůže ani se vloupat do účtu, ani najít člověka.',
    },
    {
      id: 'bio',
      icon: '🎮',
      text: 'Bio: hráč a fanoušek mangy',
      explanation: 'Koníčky nejsou tajemství. Samy o sobě útočníkovi moc nepomůžou.',
    },
    {
      id: 'friends',
      icon: '👥',
      text: 'Počet přátel a sledujících',
      explanation: 'Počet je jen číslo. Útočník s ním nic nezmůže.',
    },
  ],
  quizTitle: 'Proč a jak to zastavit',
  quizProgressTemplate: 'Otázka {n} z {total}',
  motiveLabel: 'Proč by to útočník dělal?',
  defendLabel: 'Co pomůže nejvíc?',
  quizVoiceCorrect: '✅ {explain}',
  quizVoiceWrong: '❌ Ne tak docela. {explain}',
  nextButton: 'Další →',
  resultsButton: 'Zobrazit výsledek →',
  motivationsTitle: 'Proč lidé útočí',
  motivationsSubtitle: 'Osm motivací',
  motivations: {
    financial: { name: 'Finanční zisk', desc: 'Prodávat ukradená data nebo chtít výkupné' },
    reputation: { name: 'Pověst', desc: 'Chtít se předvést a získat uznání' },
    revenge: { name: 'Pomsta', desc: 'Chtít se někomu pomstít' },
    espionage: { name: 'Špionáž', desc: 'Získat tajné informace pro stát nebo firmu' },
    error: { name: 'Prostě chyba', desc: 'Nehoda, která způsobí problém' },
    experiment: { name: 'Experimentování', desc: 'Zkoušet věci pro zábavu' },
    fear: { name: 'Strach', desc: 'Udělat něco špatného kvůli tlaku nebo vyhrožování' },
    beliefs: { name: 'Přesvědčení', desc: 'Bojovat za věc, v kterou člověk věří' },
  },
  motiveCases: [
    {
      id: 1,
      text: 'Starší žák se nabourá do účtu mladšího dítěte a píše tam hlouposti, aby všichni viděli, jak je chytrý.',
      explanation: 'Chce být obdivovaný. Touze po uznání a předvádění se říká motivace „pověst“.',
    },
    {
      id: 2,
      text: 'Cizí člověk se nabourá do stovek účtů a prodává přihlašovací údaje na webu.',
      explanation: 'Cizí člověk chce peníze. Prodávat ukradená data je „finanční zisk“.',
    },
    {
      id: 3,
      text: 'Žák se nabourá do účtu spolužáka, protože na něj byl spolužák minulý měsíc zlý.',
      explanation: 'Žák se chce někomu pomstít. Této motivaci se říká „pomsta“.',
    },
    {
      id: 4,
      text: 'Dítě si stáhne hackerský nástroj a zkouší ho na školním počítači, jen aby vidělo, co se stane.',
      explanation: 'Nikoho nechce zranit. Jen si zkouší, co to udělá. Tomu se říká „experimentování“, i tak ale může způsobit skutečnou škodu.',
    },
    {
      id: 5,
      text: 'Starší kluk řekne mladšímu: „Sežeň mi heslo svého kamaráda, nebo všem prozradím tvoje tajemství.“ Proč to mladší kluk udělá?',
      explanation: 'Mladší kluk se bojí, co starší udělá. Udělat něco špatného kvůli tlaku nebo vyhrožování je „strach“.',
    },
  ],
  defendCases: [
    {
      id: 1,
      text: 'Útočník chce uhodnout heslo. Jaký zvyk mu to nejvíc ztíží?',
      options: [
        'Dlouhé heslo z náhodných slov, které s vámi nemá nic společného',
        'Jméno mazlíčka a rok narození',
        'Stejné krátké heslo všude',
      ],
      explanation: 'Dlouhé heslo z náhodných slov se hádá těžko. Datum narození a jména mazlíčků útočník zkouší jako první a jedno heslo všude ohrožuje všechny účty.',
    },
    {
      id: 2,
      text: 'Stránka začíná na http://, nemá zámeček, a přesto chce, abyste napsali heslo. Co uděláte?',
      options: [
        'Nenapíšete ho. Hledáte stránku, která začíná na https:// a má zámeček',
        'Napíšete ho rychle, než si toho někdo všimne',
        'Napíšete kratší heslo, aby bylo méně k přečtení',
      ],
      explanation: 'Na stránce s http:// mohou ostatní v síti přečíst, co píšete. Heslo zadávejte jen na stránkách s https://.',
    },
    {
      id: 3,
      text: 'Kamarád chce, abyste zveřejnili, kde právě jste, ať se všichni přidají. Co je nejbezpečnější?',
      options: [
        'Vypnout polohu naživo a fotku sdílet později, až budete pryč',
        'Zveřejnit ji jen na 5 minut',
        'Zveřejnit ji tak, aby ji viděl každý, i cizí lidé',
      ],
      explanation: 'Poloha naživo prozradí cizím lidem, kde právě jste. Fotky sdílejte později a jen s lidmi, které znáte.',
    },
  ],
  finalTitle: 'Myšlení útočníka odemčeno!',
  finalPart1Template: 'Část 1: nalezeno {n} z {total} slabých míst',
  finalPart2Template: 'Část 2: {n} z {total} stop napoprvé',
  finalPart3Template: 'Část 3: {n} z {total} otázek napoprvé',
  finalScoreTemplate: 'Celkem {n} z {total} bodů',
  rankGreat: 'Přemýšlíte jako útočník a jednáte jako obránce. Skvělá práce!',
  rankGood: 'Dobrá práce! Zopakujte si části, které se vám zdály těžké.',
  rankPractise: 'Cvičte dál. Všímejte si malých stop a ptejte se: jak by je někdo mohl složit dohromady?',
  hotspots: [
    {
      id: 'http',
      label: 'Nešifrované připojení (HTTP)',
      explain: 'Tahle stránka používá HTTP, ne HTTPS. Co sem napíšete, i hesla, není zašifrované. Přečíst to může kdokoli ve stejné síti.'
    },
    { id: 'avatar',
      label: 'Profilový obrázek',
      explain: 'Profilové fotky jsou běžnou součástí sociálních sítí. Samy o sobě bezpečnostní riziko nejsou!'
    },
    {
      id: 'username',
      label: 'Zobrazované jméno / uživatelské jméno',
      explain: 'Zobrazit jméno a @přezdívku je na sociálních sítích normální. Zranitelnost to není.'
    },
    {
      id: 'online',
      label: 'Stav aktivity',
      explain: 'Zobrazit, kdy jste online, je běžná funkce. Je to malá věc pro soukromí, ale skutečná zranitelnost to není.'
    },
    {
      id: 'bio',
      label: 'Bio / Zájmy',
      explain: 'Uvádět obecné koníčky, jako je hraní her nebo anime, je v pořádku. Citlivé údaje o účtu to neprozradí.'
    },
    {
      id: 'followers',
      label: 'Počet sledujících / přátel',
      explain: 'Počty přátel a sledujících jsou běžná funkce. Zranitelnost to není!'
    },
    {
      id: 'birthday',
      label: 'Odhalené celé datum narození',
      explain: 'Zveřejnit celé datum narození je nebezpečné! Útočníci ho používají k hádání hesel (třeba „martin2008“), k odpovědím na bezpečnostní otázky a k průniku do účtů.'
    },
    {
      id: 'email',
      label: 'E-mail v profilu',
      explain: 'Veřejný e-mail může přilákat spam, ale je to menší problém než odhalené heslo nebo odpověď na bezpečnostní otázku.'
    },
    {
      id: 'petname',
      label: 'Odhalené jméno mazlíčka',
      explain: 'Jméno mazlíčka bývá odpovědí na bezpečnostní otázku. Útočníci ho mohou využít k průniku do účtu nebo k vašemu oklamání.'
    },
    {
      id: 'location',
      label: 'Vysílání polohy v reálném čase',
      explain: 'Tenhle příspěvek prozrazuje, kde přesně Martin právě je! Vidí to kdokoli, i cizí lidé a útočníci. Sdílení polohy naživo je vážné bezpečnostní riziko.'
    },
    {
      id: 'post2',
      label: 'Obecný příspěvek',
      explain: 'Psát o běžných věcech, třeba o pizze, je v pořádku. Nic citlivého to neprozradí!'
    },
    {
      id: 'like1',
      label: 'Tlačítko To se mi líbí',
      explain: 'Dávat příspěvkům lajk je normální a neškodné!'
    },
    {
      id: 'comment1',
      label: 'Tlačítko Komentář',
      explain: 'Komentáře jsou běžná funkce. Zranitelnost to není!'
    },
    {
      id: 'share1',
      label: 'Tlačítko Sdílet',
      explain: 'Sdílení příspěvků je základní funkce sociálních sítí. Samotné tlačítko bezpečnostní problém není!'
    },
    {
      id: 'like2',
      label: 'Tlačítko To se mi líbí',
      explain: 'Dávat příspěvkům lajk je normální a neškodné!'
    },
    {
      id: 'comment2',
      label: 'Tlačítko Komentář',
      explain: 'Komentáře jsou běžná funkce sociálních sítí!'
    },
  ],
}
