// ---------------------------------------------------------------------------
// Attacker Perspective (AP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Attacker Perspective module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentAP = {
  aim:
    'Poskytnout přehled o pohledu útočníka – pomoct žákům rozpoznat techniky útočníků a pochopit motivace, které za kybernetickými útoky stojí.',
  objectives: [
    'Rozvinout porozumění motivacím útočníků, včetně psychologických, sociálních a ekonomických faktorů.',
    'Vybudovat dovednost rozpoznávat běžné techniky útočníků.',
  ],
  outcomes: [
    'Rozumím motivacím útočníků a umím uvést příklady spojené s psychologickými, sociálními a ekonomickými faktory.',
    'Umím v zadaných situacích rozpoznat techniky útočníků.',
  ],
  parts: [
    {
      goal:
        'Pomoct žákům pochopit pojem důvěryhodný člověk a rozvinout dovednost vymezit si okruh lidí, kterým věří.',
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
            filename: 'Obrázek - Situace Nález peněz',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.1.4
            kind: 'Obrázek',
            name: 'Situace: Viděl jsem fotku',
            filename: 'Obrázek - Situace Viděl jsem fotku',
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
            title: 'Závěr: shrnutí a neformální hodnocení',
          },
        ],
      },
    },
    {
      goal: 'Představit pojem útočník a motivace z pohledu útočníka.',
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
            name: 'Pohled do pohádky: motivace a prostředky útočníka',
            filename: 'Obrázek - Pohled do pohádky motivace a prostředky útočníka',
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
            title: 'Vymezení kybernetického útočníka',
          },
          {
            title: 'Pochopit motivaci útočníka',
          },
          {
            title: 'Závěr: shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 2.2.3
        title: 'Kdo stojí za kybernetickými útoky?',
        supportText:
          'Použijte video, aby si žáci dokázali představit skutečné lidi a motivace, které za kybernetickými útoky stojí, a dostali se za stereotyp osamělého hackera. Zastavte se a zeptejte se, kdo za tím podle nich je a proč.',
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
      goal: 'Představit základní techniky (taktiky), které jsou pro děti relevantní a které útočníci používají k dosažení svých cílů.',
      bundle: {
        filename: 'Pohled útočníka - balíček - Část 3',
      },
      included: {
        materials: [
          {
            // ID: 2.3.1
            kind: 'Text ke čtení',
            name: 'Smishing a vydávání se za někoho',
            filename: 'Text ke čtení - Smishing a vydávání se za někoho',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.3.2
            kind: 'Text ke čtení',
            name: 'Vishing, podvod a vydávání se za někoho',
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
            name: 'Útočníci a jejich plány',
            filename: 'Kartičky - Útočníci a jejich plány',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 2.3.6
            kind: 'Pracovní list',
            name: 'Hlavolam: Sešlost útočníků',
            filename: 'Pracovní list - Hlavolam Sešlost útočníků',
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
            title: 'Závěr: shrnutí a neformální hodnocení',
          },
        ],
      },
    },
  ],
  otherModulesDivider: 'Prozkoumejte další témata',
  otherModulesTitle: 'Další moduly',
  otherModulesSubtitle: 'Procházejte příbuzné moduly a pokračujte v učení.',
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
  title: 'V mysli hackera',
  subtitle:
    'Jste etický hacker a prohlížíte si profil na sociální síti. Klikněte na všechno, co vypadá jako bezpečnostní slabina — ale hlídejte si životy!',
  howItWorks: 'Jak to funguje',
  instruction:
    'Prohlédněte si tenhle profil na sociální síti očima hackera, který hledá slabá místa. Kliknout se dá skoro na všechno na obrazovce — přemýšlejte pořádně, protože kliknutí na něco, co skutečná zranitelnost není, vás stojí jeden život!',
  tipLabel: 'Tip',
  tip: 'Mezi spoustou nevinně vypadajících prvků se skrývají přesně 4 skutečné zranitelnosti. Ne všechno, na co se dá kliknout, je bezpečnostní slabina!',
  livesTitle: 'Životy',
  livesDesc: '3 špatná kliknutí a je konec',
  vulnerabilitiesFoundTitle: '🔍 Nalezené zranitelnosti',
  vulnerabilitiesEmpty: 'Zatím žádné…',
  vulnerabilitiesCount: '/ 4',
  attackerTargetsTitle: '🎯 Na co útočníci cílí',
  attackerTargets: [
    '🚩 Slabá nebo odhalená hesla',
    '🚩 HTTP místo HTTPS',
    '🚩 Sdílení polohy v reálném čase',
    '🚩 Celé datum narození veřejně viditelné',
    '🚩 Odhalené odpovědi na bezpečnostní otázky',
  ],
  profile: {
    displayName: 'Martin Novák',
    handle: '@martin123',
    statusActiveNow: 'Nyní aktivní',
    bioText: '16 · Hráč 🎮 · Manga fanoušek',
    aboutTitle: 'O mně',
    statsFriendsLabel: 'Přátelé',
    statsFollowingLabel: 'Sledování',
    bornText: 'Datum narození: 14. června 2008',
    emailText: 'martin.novak@seznam.cz',
    petNameText: 'Jméno mazlíčka: Pepe',
    post1Time: '📍 Nákupní centrum Hladovka · Právě teď',
    post1Body: 'Zrovna si dávám skvělý burger. Je někdo poblíž? Přijďte za mnou ke stánkům s jídlem! 😄',
    post1Badge: '🛍️ Nákupní centrum Hladovka — přihlášeno',
    post2Time: 'Před 2 hodinami',
    post2Body: 'Zrovna jsem doma ze školy! Dáváme si s rodinou pizzu 🍕 Nejlepší večer!',
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
  hotspots: [
    {
      id: 'http',
      label: 'Nešifrované připojení (HTTP)',
      explain: 'Tahle stránka používá HTTP místo HTTPS. Všechno, co sem napíšete — včetně hesel — putuje úplně nešifrovaně a může to zachytit kdokoli ve stejné síti.'
    },
    { id: 'avatar',
      label: 'Profilový obrázek',
      explain: 'Profilové fotky jsou běžnou součástí sociálních sítí. Samy o sobě bezpečnostní riziko nejsou!'
    },
    {
      id: 'username',
      label: 'Zobrazované jméno / uživatelské jméno',
      explain: 'Zobrazovat jméno a @přezdívku je na sociálních sítích úplně normální. Zranitelnost to není.'
    },
    {
      id: 'online',
      label: 'Stav aktivity',
      explain: 'Zobrazovat, kdy jste online, je běžná funkce. Ze strany soukromí to stojí za zamyšlení, ale o kritickou bezpečnostní zranitelnost nejde.'
    },
    {
      id: 'bio',
      label: 'Bio / Zájmy',
      explain: 'Uvádět obecné koníčky, jako je hraní her nebo anime, je v pořádku. Citlivé údaje o účtu to neprozradí.'
    },
    {
      id: 'followers',
      label: 'Počet sledujících / přátel',
      explain: 'Počty přátel a sledujících jsou běžnou funkcí sociálních sítí. Bezpečnostní zranitelnost to není!'
    },
    {
      id: 'birthday',
      label: 'Odhalené celé datum narození',
      explain: "Prozradit celé datum narození je nebezpečné! Útočníci narozeniny využívají k hádání hesel (třeba „martin2008“), k odpovědím na bezpečnostní otázky a k obcházení obnovy účtu."
    },
    {
      id: 'email',
      label: 'E-mail v profilu',
      explain: 'Zobrazený e-mail může přilákat spam, ale ve srovnání s odhaleným heslem nebo odpovědí na bezpečnostní otázku jde o menší problém.'
    },
    {
      id: 'petname',
      label: 'Odhalené jméno mazlíčka',
      explain: 'Odhalené jméno mazlíčka můžou útočníci využít k uhodnutí odpovědí na bezpečnostní otázky nebo k přesvědčivějším útokům sociálního inženýrství.'
    },
    {
      id: 'location',
      label: 'Vysílání polohy v reálném čase',
      explain: 'Tenhle příspěvek prozrazuje, kde přesně Martin právě je! Kdokoli — včetně cizích lidí a útočníků — vidí, kde se v tuhle chvíli nachází. Sdílet polohu v reálném čase je vážné bezpečnostní riziko.'
    },
    {
      id: 'post2',
      label: 'Obecný příspěvek',
      explain: 'Psát o běžných věcech, jako je pizza k večeři, je úplně v pořádku. Žádné citlivé bezpečnostní údaje to neprozradí!'
    },
    {
      id: 'like1',
      label: 'Tlačítko To se mi líbí',
      explain: 'Dávat příspěvkům lajk je úplně normální a neškodná věc!'
    },
    {
      id: 'comment1',
      label: 'Tlačítko Komentář',
      explain: 'Možnost komentovat je běžná funkce sociálních sítí. Zranitelnost to není!'
    },
    {
      id: 'share1',
      label: 'Tlačítko Sdílet',
      explain: 'Sdílení příspěvků je základní funkce sociálních sítí. Samotné tlačítko bezpečnostní problém není!'
    },
    {
      id: 'like2',
      label: 'Tlačítko To se mi líbí',
      explain: 'Dávat příspěvkům lajk je úplně normální a neškodné!'
    },
    {
      id: 'comment2',
      label: 'Tlačítko Komentář',
      explain: 'Komentáře jsou běžná funkce sociálních sítí!'
    },
  ],
}
