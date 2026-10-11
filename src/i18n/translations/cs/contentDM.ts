// ---------------------------------------------------------------------------
// Digital Misuse (DM) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Digital Misuse module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDM = {
  aim:
    'Poskytnout základní znalosti o tom, co je ubližování a zneužívání v digitálním prostředí a jaké jsou zásady, jak se s tím vypořádat.',
  objectives: [
    'Představit pojem ubližování a zneužívání v digitálním prostředí.',
    'Vysvětlit motivace, které za ubližováním a zneužíváním v digitálním prostředí stojí.',
    'Vybudovat povědomí o případech ubližování a zneužívání v digitálním prostředí, o technikách, které útočníci používají, a o zásadách, jak se s tím vypořádat.',
  ],
  outcomes: [
    'Umím vymezit, co je ubližování a zneužívání v digitálním prostředí, popsat příklady týkající se misinformací, dezinformací, kyberšikany, nebezpečného kontaktu s cizími lidmi a škodlivého chování influencerů a vysvětlit možné motivace za těmito příklady.',
    'Umím v zadaných situacích rozpoznat techniky, které používají ti, kdo ubližují nebo zneužívají digitální prostředí.',
    'Umím navrhnout a probrat způsoby, jak se v zadaných situacích vypořádat s ubližováním a zneužíváním v digitálním prostředí.',
  ],
  parts: [
    {
      title: 'Misinformace',
      goal: 'Pomoct žákům pochopit, co je misinformace, co lidi vede k jejímu šíření a jak ji rozpoznat.',
      bundle: {
        filename: 'Zneužívání digitálního prostředí - balíček - Část 1',
      },
      included: {
        materials: [
          {
            // ID: 7.1.2
            kind: 'Herní kartičky',
            name: 'Detektivové pravdy',
            filename: 'Herní kartičky - Detektivové pravdy',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 7.1.3
            kind: 'Obrázek',
            name: 'Skořicová výzva',
            filename: 'Obrázek - Skořicová výzva',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Co je misinformace?',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.1.1
        title: 'Co je misinformace?',
        supportText:
          'Použijte toto video k představení misinformace jako nepravdivého nebo nepřesného obsahu, který se může šířit online bez škodlivého úmyslu. Pozastavte a zeptejte se žáků, zda někdy sdíleli něco, co se později ukázalo jako nepravdivé.',
        downloads: {
          video: {
            filename: 'Co je misinformace',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Co je misinformace - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      title: 'Dezinformace',
      goal: 'Pomoct žákům pochopit, co je dezinformace, jaké motivace za ní stojí a jak ji rozpoznat.',
      bundle: {
        filename: 'Zneužívání digitálního prostředí - balíček - Část 2',
      },
      included: {
        materials: [
          {
            // ID: 7.2.2
            kind: 'Pracovní list',
            name: 'Předloha novin: Sdílení zpráv',
            filename: 'Pracovní list - Předloha novin - Sdílení zpráv',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 7.2.3
            kind: 'Obrázek',
            name: 'Algoritmy sociálních sítí',
            filename: 'Obrázek - Algoritmy sociálních sítí',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Porozumění dezinformaci',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.2.1
        title: 'Co je dezinformace?',
        supportText:
          'Použijte toto video, aby žáci dokázali rozlišit dezinformaci – záměrně klamný obsah – od misinformace. Pozastavte a diskutujte o tom, jak úmysl mění způsob, jakým hodnotíme nepravdivé informace a reagujeme na ně.',
        downloads: {
          video: {
            filename: 'Co je dezinformace',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Co je dezinformace - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      title: 'Kyberšikana',
      goal: 'Pomoct žákům pochopit, co je kyberšikana, jaké motivace za ní stojí a jak ji rozpoznat.',
      bundle: {
        filename: 'Zneužívání digitálního prostředí - balíček - Část 3',
      },
      included: {
        materials: [
          {
            // ID: 7.3.1
            kind: 'Kartičky se situacemi',
            name: 'Zahraj to!',
            filename: 'Kartičky se situacemi - Zahraj to',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 7.3.3
            kind: 'Kartičky se situacemi',
            name: 'Je to jen neslušnost?',
            filename: 'Kartičky se situacemi - Je to jen neslušnost',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Co je kyberšikana?',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.3.2
        title: 'Co je kyberšikana?',
        supportText:
          'Použijte toto video, aby žáci definovali kyberšikanu a pochopili, jak online chování může způsobit skutečnou emocionální újmu. Pozastavte a diskutujte o tom, proč je reakce přihlížejícího v těchto situacích důležitá.',
        downloads: {
          video: {
            filename: 'Co je kyberšikana',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Co je kyberšikana - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      title: 'Nebezpečí od cizích lidí',
      goal: 'Pomoct žákům pochopit, co je nebezpečí od cizích lidí, jaké motivace za ním stojí a jak ho rozpoznat.',
      bundle: {
        filename: 'Zneužívání digitálního prostředí - balíček - Část 4',
      },
      included: {
        materials: [
          {
            // ID: 7.4.1
            kind: 'Plakát',
            name: 'Nebezpečí od cizích lidí',
            filename: 'Plakát - Nebezpečí od cizích lidí',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 7.4.2
            kind: 'Kartičky se situacemi',
            name: 'Pravý, nebo falešný? Detektivní hra s profily',
            filename: 'Kartičky se situacemi - Pravý, nebo falešný - Detektivní hra s profily',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 7.4.3
            kind: 'Pracovní list',
            name: 'Mistr v ochraně před cizími lidmi',
            filename: 'Pracovní list - Mistr v ochraně před cizími lidmi',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Porozumění nebezpečí od cizích lidí',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
    },
    {
      title: 'Influenceři',
      goal: 'Pomoct žákům pochopit, kdo jsou influenceři a co je k jejich práci vede.',
      bundle: {
        filename: 'Zneužívání digitálního prostředí - balíček - Část 5',
      },
      included: {
        materials: [
          {
            // ID: 7.5.2
            kind: 'Kartičky se situacemi',
            name: 'Příspěvky influencerů',
            filename: 'Kartičky se situacemi - Příspěvky influencerů',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Influenceři na sociálních sítích',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.5.1
        title: 'Influenceři na sociálních sítích',
        supportText:
          'Použijte toto video k prozkoumání toho, jak influenceři formují názory a chování na sociálních sítích, a jaká odpovědnost s tímto dosahem přichází. Pozastavte a zeptejte se žáků, které influencery sledují a co je dělá důvěryhodné.',
        downloads: {
          video: {
            filename: 'Influenceři na sociálních sítích',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Influenceři na sociálních sítích - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      title: 'Jak se vypořádat s těmi, kdo digitální prostředí zneužívají?',
      goal: 'Pomoct žákům vědět, co můžou udělat pro ochranu sebe i druhých před ubližováním online.',
      bundle: {
        filename: 'Zneužívání digitálního prostředí - balíček - Část 6',
      },
      included: {
        materials: [
          {
            // ID: 7.6.1
            kind: 'Pracovní list',
            name: 'Digitální superhrdina',
            filename: 'Pracovní list - Digitální superhrdina',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 7.6.2
            kind: 'Pracovní list',
            name: 'CyberDoku – Rozlousknutí záhady',
            filename: 'Pracovní list - CyberDoku - Rozlousknutí záhady',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 7.6.3
            kind: 'Obrázek',
            name: 'CyberDoku – Mapa okolí',
            filename: 'Obrázek - CyberDoku - Mapa okolí',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Odolnost vůči ubližování a zneužívání v digitálním prostředí',
          },
          {
            title: 'Jak rozpoznat a řešit zneužívání a ubližování v digitálním prostředí',
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
      moduleId: 'mw',
      brand: 'MW',
      href: '/learning-hub/malware/content',
      imageSrc: '/images/learning-hub/06_malware.webp',
    },
  ],
}

export const challengeDM = {
  title: 'Příběhy ze skutečného života',
  subtitle:
    'Rozhoduj se. Sleduj důsledky. Nauč se, jak zvládnout kyberšikanu, falešné zprávy, rizikové influencery a online tlak.',
  howItWorks: 'Jak to funguje',
  instruction:
    'Projdi příběhy o zneužívání digitálního prostředí ze skutečného života. V každém klíčovém okamžiku si vyber, co dělat – a různé volby vedou k různým výsledkům. Získej až 3 hvězdičky za každý příběh tím, že najdeš nejbezpečnější cestu. Pokud dostaneš těžký konec, zkus příběh znovu a objev lepší cestu!',
  tip: 'Každý příběh se větví mnoha směry. Vždy existuje alespoň jedna cesta, která vede k bezpečnému, pozitivnímu výsledku – ale musíš se rozhodovat správně, aby se ti ji podařilo najít!',
  tipLabel: 'Tip',
  yourBestScore: 'Tvé nejlepší skóre',
  bestResultDesc: 'Nejlepší výsledek z každého příběhu',
  storiesTitle: '📖 Příběhy',
  watchOutTitle: '🚩 Dávej pozor na',
  watchOutItems: [
    '🚩 Kohokoli, kdo žádá o soukromé fotografie',
    '🚩 Kohokoli, kdo chce tvoje heslo, i kamaráda',
    '🚩 Cizince, kteří se ptají na tvou adresu nebo školu',
    '🚩 Tlak „Drž to v tajnosti“',
    '🚩 Zlomyslné příspěvky, screenshoty, falešné profily',
    '🚩 Zprávy „SDÍLEJ TOHLE HNED“ a šokující tvrzení',
    '🚩 Internetové výzvy, které by ti mohly ublížit',
  ],
  welcomeDesc: 'Rozhoduj se pečlivě – různé cesty vedou k velmi odlišným výsledkům.',
  startStory: 'Začít příběh →',
  whatWeLearned: '💡 Co jsme se naučili:',
  tryDifferentPath: '↩ Zkus jinou cestu',
  nextStory: 'Další příběh →',
  storyOfTemplate: 'Příběh {n} z {total}',
  storyLabelTemplate: 'Příběh {n}:',
  topicLabel: 'Téma',
  pointsLabel: 'Body v tomto průchodu',
  badgeGood: '✨ Skvělý výsledek!',
  badgeOkay: '🌤️ Šlo by to lépe',
  badgeBad: '❌ Tvrdá lekce',
  messagesAriaLabel: 'Zprávy příběhu',
  seeFinalScore: '🎉 Zobrazit konečné skóre',
  allStoriesComplete: 'Všechny příběhy dokončeny!',
  finalScoreDesc: 'Takto ti to šlo ve všech příbězích:',
  playAgain: 'Hrát znovu',
  rankChampion: '🏆 Šampion bezpečnosti',
  rankChampionMsg: 'Skvělé! Téměř v každé situaci se ti podařilo najít nejbezpečnější cestu.',
  rankDefender: '🛡️ Digitální obránce',
  rankDefenderMsg: 'Výborná práce! Většinu situací se ti podařilo zvládnout moudře a bezpečně.',
  rankNavigator: '📚 Navigátor učení',
  rankNavigatorMsg: 'Dobrá snaha! Zopakuj si některé příběhy, ať objevíš lepší cesty a získáš víc hvězdiček.',
  rankBeginning: '🌱 Začínám',
  rankBeginningMsg: 'Zkoušej různé cesty – každé opakování tě naučí něco nového!',
  sensitiveToggleLabel: 'Zahrnout citlivé příběhy',
  sensitiveToggleNote: 'Dva příběhy jsou o soukromých fotkách a o cizích lidech, kteří se ptají na tvou adresu. Zeptej se nejdřív učitele nebo dospělého, kterému věříš.',
  sensitiveNoteTitle: '⚠️ Upozornění',
  sensitiveNoteTemplate: 'Tento příběh je o tématu: {topic}. Může být nepříjemný. Můžeš ho přeskočit. Kdyby se ti něco podobného stalo, řekni to dospělému, kterému věříš.',
  skipStory: 'Přeskočit tento příběh',
  skippedLabel: 'Přeskočeno',
  scoreDenomTemplate: '/ {max} ★',
  stories: [
    {
      id: 1,
      title: 'Problém s memem',
      emoji: '😟',
      topic: 'Kyberšikana',
      nodes: [
        {
          id: 'start',
          text: 'Otevřeš telefon a uvidíš skupinový chat. Někdo jménem Jake tam zveřejnil zlý mem o tvé spolužačce Emě, který si dělá legraci z jejího vzhledu. Už ho lajklo 23 lidí. Co uděláš?',
          choices: [
            '👍 Lajkni mem, ať nejsi mimo',
            '📲 Přejeď dál a ignoruj to',
            '💬 Pošli Emě soukromou podpůrnou zprávu',
          ],
        },
        {
          id: 'end_a',
          title: 'Součást problému',
          text: 'U memu je teď i tvůj lajk. Jake zveřejňuje další, ještě horší. Ema vidí tvé jméno v lajcích a je zničená. Učitel se to dozví a kontaktuje tvé rodiče.',
          lesson: 'Lajkování zlého obsahu je formou kyberšikany. Tvůj „lajk“ není nikdy neviditelný – oběť vždycky vidí, kdo ho dal.',
        },
        {
          id: 'mid_b',
          text: 'Přejedeš dál, ale příspěvky přibývají. Druhý den Ema sedí sama u oběda a vypadá velmi rozrušeně. Šikana se zhoršila.',
          choices: [
            '😶 Dál to ignoruj – není to tvůj problém',
            '🏫 Řekni učiteli, co se děje',
          ],
        },
        {
          id: 'end_b1',
          title: 'Tichý svědek',
          text: 'Uplyne několik týdnů. Ema chybí ve škole. Cítíš vinu, ale nic neřekneš. Šikana pokračuje dál bez povšimnutí.',
          lesson: 'Ignorování šikany ji nezastaví. Přihlížející mají skutečnou moc pomoct – mlčet je taky volba.',
        },
        {
          id: 'end_b2',
          title: 'Statečné oznámení',
          text: 'Učitel okamžitě jedná. Jake a jeho rodiče jsou přivoláni. Ema dostane podporu od školního poradce. Šikana přestane.',
          lesson: 'Říct to dospělé osobě, které věříš, je jedna z nejsilnějších věcí, které můžeš udělat. Není to práskání. Pomáháš tomu, kdo to potřebuje.',
        },
        {
          id: 'mid_c',
          text: 'Ema odpovídá: „Moc díky… opravdu to bolelo. Nevěděla jsem, co dělat.“ Je vděčná, ale vystrašená. Příspěvky jsou stále nahoře.',
          choices: [
            '📢 Pomoz Emě nahlásit každý příspěvek na platformě',
            '🤷 Řekni Emě, aby to ignorovala, samo to přejde',
          ],
        },
        {
          id: 'end_c1',
          title: 'Digitální obránce',
          text: 'Ty a Ema nahlásíte každý příspěvek společně. Většina je odstraněna do jednoho dne. Navštívíte také školního poradce, který Emmu dál podpoří. Šikana přestane.',
          lesson: 'Oslovit oběť A jednat je nejlepší odpověď na kyberšikanu. Nahlas příspěvky online a požádej o pomoc dospělé, kterým věříš.',
        },
        {
          id: 'end_c2',
          title: 'Laskavost nestačí',
          text: 'Ema se snaží to ignorovat, ale příspěvky přibývají. Tvá laskavá zpráva pomohla, ale bez nahlášení nebo podpory dospělých šikana pokračuje.',
          lesson: 'Laskavost je skvělý začátek. Aby šikana skutečně přestala, musíš ji ještě nahlásit a požádat o pomoc dospělou osobu, které věříš.',
        },
      ],
    },
    {
      id: 2,
      title: 'Past screenshotů',
      emoji: '📸',
      topic: 'Soukromí a zrada',
      nodes: [
        {
          id: 'start',
          text: 'V soukromé zprávě se kamarádce Zoe svěříš, že se ti někdo líbí. Zoe si z ní udělá screenshot a bez tvého svolení ho sdílí ve velkém skupinovém chatu. Všichni komentují. Co uděláš?',
          choices: [
            '😡 Zveřejni rozzlobený veřejný příspěvek o tom, co Zoe udělala',
            '📱 Konfrontuj Zoe soukromě v DM',
            '📸 Ulož důkazy a řekni to dospělé osobě, které věříš',
          ],
        },
        {
          id: 'end_a',
          title: 'Oheň na oheň',
          text: 'Veřejně Zoe zkritizuješ. Zoe se brání. Desítky lidí se zapojí do dramatu. Teď je to plnohodnotná online válka a oba vypadáte špatně.',
          lesson: 'Veřejné pranýřování online téměř vždy věci eskaluje. Zřídka přináší řešení, které hledáš.',
        },
        {
          id: 'mid_b',
          text: 'Pošleš Zoe DM: „Proč jsi to sdílela? Bylo to soukromé!“ Zoe říká: „To byl jen vtip, zklidni se.“ Ale screenshot ještě nesmazala.',
          choices: [
            '😔 Přijmi její „omluvu“ a tiše jdi dál',
            '🗣️ Pevně ji požádej, aby to smazala, a zapoj dospělou osobu, které věříš',
          ],
        },
        {
          id: 'end_b1',
          title: 'Zameteno pod koberec',
          text: 'Zoe vlastně nechápe, proč to bylo špatné. Screenshot zůstává nahoře. Cítíš se ublíženě, ale nic se skutečně nevyřeší.',
          lesson: '„Byl to jen vtip“ není omluva za sdílení soukromých zpráv. Když špatné chování nemá následky, může se opakovat.',
        },
        {
          id: 'end_b2',
          title: 'Skutečné řešení',
          text: 'Pod tlakem a se zapojením dospělé osoby Zoe screenshot smaže a proběhne skutečný rozhovor o souhlasu a soukromí. Vaše přátelství se obnoví na zdravějších základech.',
          lesson: 'Postavit se za své soukromí klidně, ale pevně, s pomocí dospělého, přináší skutečnou změnu. Ne jen krátký klid.',
        },
        {
          id: 'mid_c',
          text: 'Důvěryhodná dospělá osoba pomůže nahlásit příspěvek na platformě a kontaktuje rodiče Zoe. Screenshot je odstraněn. Zoe se omluví.',
          choices: [
            '🤝 Přijmi její omluvu a pracuj na obnově přátelství',
            '🚫 Zablokuj Zoe – nechceš ji jako kamarádku',
          ],
        },
        {
          id: 'end_c1',
          title: 'Obnovená důvěra',
          text: 'S podporou dospělé osoby a upřímnou omluvou se situace správně vyřeší. Zoe chápe souhlas. Oba jdete dál.',
          lesson: 'Uložit důkazy, nahlásit to a dát druhému šanci se opravdu omluvit může změnit bolestnou chvíli v ponaučení.',
        },
        {
          id: 'end_c2',
          title: 'Bezpečná vzdálenost',
          text: 'Screenshot je pryč a ty jsi v bezpečí. Blokování je platná hranice, když je důvěra narušena. Bezpečný výsledek správnými kroky.',
          lesson: 'Chránit sebe je vždycky v pořádku. Požádat dospělé o pomoc byl přesně správný krok.',
        },
      ],
    },
    {
      id: 3,
      title: 'Herní vztek',
      emoji: '🎮',
      topic: 'Online herní obtěžování',
      nodes: [
        {
          id: 'start',
          text: 'Hraješ svou oblíbenou online hru a jiný hráč začne spamovat nenávistné zprávy – nadává ti a vyhrožuje. Ostatní v lobby to sledují. Co uděláš?',
          choices: [
            '💢 Odplať mu to vlastními urážkami',
            '🙉 Ignoruj zprávy a hraj dál',
            '🔇 Umlč ho, pořiď screenshot a nahlas ho ve hře',
          ],
        },
        {
          id: 'end_a',
          title: 'Oba zabanováni',
          text: 'Hádáš se s ním. Oba jste nahlášeni. Systém označí tvůj účet. Oba dostanete ban – toxický hráč tě nahlásil jako první.',
          lesson: 'Reagovat nenávistí na nenávist tě také vystavuje riziku. Herní platformy často banují obě strany toxických výměn.',
        },
        {
          id: 'mid_b',
          text: 'Ignoruješ ho, ale eskaluje. Teď našel tvůj veřejný herní profil a zveřejňuje tam urážky, aby je viděli ostatní.',
          choices: [
            '🗑️ Smaž svůj profil, aby přestal',
            '📢 Nahlas to platformě a řekni to dospělé osobě, které věříš',
          ],
        },
        {
          id: 'end_b1',
          title: 'Útěk',
          text: 'Smazání profilu tohoto obtěžovatele prozatím zastaví. Ale najde si další oběť. Žádné důsledky, žádná skutečná změna.',
          lesson: 'Chránit sebe je důležité. Nahlášení ale zařídí, že šikanující nese následky a nemůže to dělat ostatním.',
        },
        {
          id: 'end_b2',
          title: 'Hráč zabanován',
          text: 'Platforma to prošetří a zabanuje účet obtěžovatele. Důvěryhodná dospělá osoba ti pomůže zkontrolovat nastavení soukromí a budeš mít oporu.',
          lesson: 'Nahlášení hráčů, kteří šikanují, funguje. Platformy berou hlášení vážně, hlavně když máš uložené screenshoty jako důkaz.',
        },
        {
          id: 'mid_c',
          text: 'Hráče máš umlčeného a nahlášeného se screenshoty. Hlášení je v přezkumu. Ale to, co ti napsal, s tebou stále otřásá.',
          choices: [
            '🗣️ Řekni dospělé osobě, které věříš, jak tě ta zkušenost zasáhla',
            '😶 Nech si to pro sebe – už to máš vyřešené',
          ],
        },
        {
          id: 'end_c1',
          title: 'Nahlášení a podpora',
          text: 'Důvěryhodná dospělá osoba potvrdí tvé pocity a pomůže ti upravit nastavení soukromí. Platforma potvrdí, že hráč byl zabanován.',
          lesson: 'Nahlášení je důležité, ale stejně důležité je zpracovat to, jak tě online zneužívání zasáhlo. Důvěryhodné dospělé osoby mohou pomoci s obojím.',
        },
        {
          id: 'end_c2',
          title: 'Půl řešení',
          text: 'Hráč dostane ban, ale ten zážitek si necháváš pro sebe. Cítíš se online bezpečněji, ale stále neklidně.',
          lesson: 'Technickou stránku máš zvládnutou dokonale! Pamatuj: mluvit s někým o tom, jak se po online zneužití cítíš, je stejně důležité.',
        },
      ],
    },
    {
      id: 4,
      title: 'Falešný profil',
      emoji: '👤',
      topic: 'Vydávání se za někoho jiného',
      nodes: [
        {
          id: 'start',
          text: 'Všimneš si falešného účtu na sociálních sítích používajícího fotky tvého kamaráda Sama. Zveřejňuje trapné věci a přidává Samovy spolužáky. Sam o tom ještě neví. Co uděláš?',
          choices: [
            '💬 Napiš falešnému účtu, ať přestane',
            '📞 Okamžitě to řekni Samovi, ať to ví',
            '🚩 Nahlas falešný účet A hned to řekni Samovi',
          ],
        },
        {
          id: 'end_a',
          title: 'Nekrm trolla',
          text: 'Falešný účet tě zablokuje a zrychlí zveřejňování. Teď začne cílit i na tebe. Přímé zapojení věci zhoršilo.',
          lesson: 'Kontaktovat falešný nebo zneužívající účet přímo věci téměř vždy zhorší. Nahlas to raději platformě.',
        },
        {
          id: 'mid_b',
          text: 'Sam je v šoku a rozrušený. Chce napsat všem, aby vysvětlil, že je to falešné, ale neví, co dál. Účet je stále aktivní.',
          choices: [
            '📢 Pomoz Samovi nahlásit účet na platformě',
            '🗣️ Navrhni Samovi, aby lidem osobně řekl, že je to falešné',
          ],
        },
        {
          id: 'end_b1',
          title: 'Týmová práce vítězí',
          text: 'Ty a Sam nahlásíte účet společně. Platforma ho odstraní během několika hodin. Sam to navíc řekne dospělé osobě, které věří, a ta pomůže sledovat další pokusy.',
          lesson: 'Společné nahlášení falešných účtů funguje velmi dobře. Platformy berou falešné profily vážně a jednají rychle.',
        },
        {
          id: 'end_b2',
          title: 'Pomalá reakce',
          text: 'Sam lidem osobně vysvětluje, ale falešný účet zůstává aktivní několik dní a působí další trapasy, než ho někdo jiný nakonec nahlásí.',
          lesson: 'Nahlásit falešný účet platformě je mnohem rychlejší než to vysvětlovat každému zvlášť.',
        },
        {
          id: 'mid_c',
          text: 'Platforma obdrží tvé hlášení a začne účet přezkoumávat. Sam je vděčný za tvou rychlou reakci.',
          choices: [
            '🏠 Řekni to také dospělé osobě, které věříš, aby Sam cítil podporu',
            '⏳ Prostě počkej, až platforma zasáhne',
          ],
        },
        {
          id: 'end_c1',
          title: 'Plná ochrana',
          text: 'S podporou dospělé osoby a zásahem platformy je účet odstraněn. Sam cítí, že se o něj někdo skutečně stará. Škola je upozorněna, aby sledovala další pokusy.',
          lesson: 'Nahlásit to platformě A říct to dospělé osobě, které věříš, je nejlepší ochrana, když se někdo vydává za tebe nebo za tvého kamaráda.',
        },
        {
          id: 'end_c2',
          title: 'Rychlá akce',
          text: 'Platforma účet odstraní. Samovi se uleví. Skvělý výsledek díky rychlé a správné akci.',
          lesson: 'Okamžité nahlášení falešného účtu je přesně správné. Čím dřív to nahlásíš, tím dřív zmizí.',
        },
      ],
    },
    {
      id: 5,
      title: 'Mimo skupinu',
      emoji: '😔',
      topic: 'Online vyloučení',
      nodes: [
        {
          id: 'start',
          text: 'Zjistíš, že tvá parta vytvořila nový skupinový chat bez tebe. Plánují párty, na kterou tě nikdo nepozval, a ty vidíš, jak o tom veřejně píšou. Cítíš se ublíženě a poníženě.',
          choices: [
            '📣 Zveřejni příspěvek o tom, jak tě to vyloučení bolí',
            '💬 Pošli rozzlobenou zprávu celé skupině',
            '🤝 Napiš soukromě svému nejbližšímu příteli ve skupině',
          ],
        },
        {
          id: 'end_a',
          title: 'Veřejné zhroucení',
          text: 'Tvůj veřejný příspěvek přitáhne pozornost, ale hlavně trapas. Parta se postaví do obrany. Drama se šíří po celé škole online.',
          lesson: 'Veřejné stěžování si, že tě nechali stranou, málokdy pomůže. Obvykle to věci zhorší. Soukromý rozhovor funguje mnohem líp.',
        },
        {
          id: 'end_b',
          title: 'Drama ve skupinovém chatu',
          text: 'Ve skupinovém chatu je nepříjemné ticho. Někteří přátelé se cítí vinní, jiní se naštvou. Nic se skutečně nevyřeší a napětí přetrvává týdny.',
          lesson: 'Konfrontace celé skupiny najednou staví každého do obrany. Soukromé rozhovory jeden na jednoho fungují mnohem lépe.',
        },
        {
          id: 'mid_c',
          text: 'Tvá nejbližší kamarádka Mia přizná, že ji k tvému vyloučení někdo jiný ve skupině přinutil. Omluví se a říká, že chce pomoct věci napravit.',
          choices: [
            '🤝 Požádej Miu, aby se za tebe ve skupině ozvala',
            '🏫 Řekni dospělé osobě, které věříš, o záměrném vyloučení',
          ],
        },
        {
          id: 'end_c1',
          title: 'Skutečný spojenec',
          text: 'Mia se ozve. Jsi zpátky ve skupině a ten, kdo tě vylučoval, dostane jasnou zpětnou vazbu. Parta se díky upřímnosti posílí.',
          lesson: 'Když je někdo ochotný pomoct, nech ho. Skuteční přátelé se za sebe navzájem postaví – i když je to nepříjemné.',
        },
        {
          id: 'end_c2',
          title: 'Dospělý spojenec',
          text: 'Důvěryhodná dospělá osoba pomůže zprostředkovat. Každý přemýšlí o tom, jak záměrné vyloučení bolí. Dynamika skupiny se mění k lepšímu.',
          lesson: 'Schválně někoho vyloučit online je druh šikany. Dospělá osoba, které věříš, může pomoct napravit nezdravou partu.',
        },
      ],
    },
    {
      id: 6,
      title: 'Soukromé fotografie',
      emoji: '📷',
      topic: 'Tlak na základě obrázků',
      nodes: [
        {
          id: 'start',
          text: 'Někdo, s kým chatuješ online dva týdny, říká, že tě má opravdu rád, a žádá o soukromou fotografii. Slibuje, že svou pošle první, a chce, ať to před všemi tajíš.',
          choices: [
            '📸 Pošli fotografii – působí opravdu mile',
            '😐 Řekni, že ti to není příjemné, ale pokračuj v chatování',
            '🚫 Odmítni, přestaň s nimi mluvit a okamžitě řekni dospělé osobě, které věříš',
          ],
        },
        {
          id: 'end_a',
          title: 'Past',
          text: 'Nikdy nic nepošlou zpět. Místo toho požadují další fotografie, jinak tu tvou sdílí se všemi. Jsi v pasti. Tomu se říká sextortion.',
          lesson: 'Posílat soukromé fotky někomu, koho znáš jen online, je velmi nebezpečné. Vydírání fotkami se jmenuje sextortion a je to trestný čin. Okamžitě to řekni dospělé osobě, které věříš.',
        },
        {
          id: 'mid_b',
          text: '„Když mi žádnou nepošleš, je jasné, že mi nevěříš.“ Říkají, že je se vším konec, pokud odmítneš. Cítíš zmatek a tlak.',
          choices: [
            '📸 Ustup a pošli fotografii, aby byl klid',
            '🚫 Zablokuj ho a okamžitě řekni dospělé osobě, které věříš',
          ],
        },
        {
          id: 'end_b1',
          title: 'Past (část 2)',
          text: 'Pošleš fotografii a vydírání začne okamžitě. Uvědomíš si, že tahle osoba to plánovala od první zprávy.',
          lesson: 'Zdravé vztahy nikdy nemají ultimáta. „Pošli fotku, nebo je konec“ je velký varovný signál. Pokud se to někdy stane, řekni to dospělé osobě, které věříš.',
        },
        {
          id: 'end_b2',
          title: 'Dobrý instinkt',
          text: 'Zablokuješ účet a řekneš to dospělé osobě, které věříš. Ta pomůže účet nahlásit platformě a vysvětlí, že jde o klasickou taktiku groomingu, kterou zločinci používají.',
          lesson: 'Říct ne nátlaku a svěřit se dospělé osobě, které věříš, je vždy správné. Někdo tebou manipuloval. Poznat to a jednat vyžaduje skutečnou odvahu.',
        },
        {
          id: 'mid_c',
          text: 'Důvěryhodná dospělá osoba se podívá na konverzaci a je velmi znepokojená. Vysvětlí, že to vypadá na grooming – někdo předstírá přátelství, aby získal tvou důvěru. Chce to nahlásit.',
          choices: [
            '📋 Sdílej celou historii konverzace, aby bylo hlášení silnější',
            '😳 Vynech některé detaily, protože se stydíš',
          ],
        },
        {
          id: 'end_c1',
          title: 'Úplné přiznání',
          text: 'S úplnými důkazy dospělá osoba a platforma podniknou razantní kroky. Účet je odstraněn a nahlášen úřadům, které mohou řádně vyšetřovat.',
          lesson: 'Řekni dospělé osobě, které věříš, celý příběh, i ty trapné části. Pak tě může nejlépe ochránit a zastavit zločince.',
        },
        {
          id: 'end_c2',
          title: 'Částečné hlášení',
          text: 'S omezenými detaily se přijmou jen dílčí ochranná opatření. Jsi ve větším bezpečí, ale celkový obraz by vyšetřování pomohl mnohem víc.',
          lesson: 'Bylo odvážné to říct. Když vyprávíš všechny podrobnosti, i trapné, pomůžeš dospělým tě chránit a zabránit tomu, aby se to stalo ostatním.',
        },
      ],
    },
    {
      id: 7,
      title: 'Nápomocný cizinec',
      emoji: '🕵️',
      topic: 'Online grooming',
      nodes: [
        {
          id: 'start',
          text: 'Někdo v herním chatu říká, že je mu 14 let, a píše ti už týden. Teď se ptá, kam chodíš do školy, na tvou domácí adresu a v kolik hodin se každý den vracíš domů bez rodičů. Co uděláš?',
          choices: [
            '💬 Odpověz na otázky – působí jako normální dítě',
            '🤔 Dej vágní odpovědi a pokračuj v chatování',
            '🚫 Přestaň reagovat, zablokuj ho a okamžitě řekni dospělé osobě, které věříš',
          ],
        },
        {
          id: 'end_a',
          title: 'Příliš mnoho informací',
          text: 'Během dalšího týdne znají tvou školu, rozvrh i adresu. Navrhnou osobní setkání. Uvědomíš si, že je něco hodně špatně.',
          lesson: 'Kdokoli, kdo se ptá na tvou domácí adresu, název školy nebo denní rozvrh, je vážný varovný signál, i když tvrdí, že je stejně starý jako ty.',
        },
        {
          id: 'mid_b',
          text: 'Dáváš vágní odpovědi, ale tlačí stále víc a teď žádají tvé telefonní číslo. Něco ti na tom nesedí, ale nechceš vypadat nezdvořile.',
          choices: [
            '📱 Dej jim číslo – byli na tebe tak milí',
            '🚫 Zablokuj ho a řekni to dospělé osobě, které věříš',
          ],
        },
        {
          id: 'end_b1',
          title: 'Příliš propojeni',
          text: 'Použijí tvé číslo k nalezení tvých ostatních účtů na sociálních sítích a ke sledování tvé aktivity. Důvěryhodná dospělá osoba se to dozví a je velmi znepokojená.',
          lesson: 'Nikomu online nemusíš dávat telefonní číslo ani osobní kontaktní údaje. Kdokoli, kdo je vymáhá, má špatné úmysly.',
        },
        {
          id: 'end_b2',
          title: 'Důvěryhodný instinkt',
          text: 'Důvěryhodná dospělá osoba potvrdí, že účet vypadá jako falešný profil dospělého. Pomůže ti ho nahlásit a společně zkontrolujete nastavení soukromí.',
          lesson: 'Věř svému pocitu a řekni to dospělé osobě, které věříš. Je to vždy správné, když se ti něco online nezdá.',
        },
        {
          id: 'mid_c',
          text: 'Důvěryhodná dospělá osoba si konverzaci přečte a je velmi znepokojená. Vysvětlí, že jde pravděpodobně o pokus o grooming – dospělý předstírá, že je dítě, aby získal tvou důvěru.',
          choices: [
            '📋 Poskytni celou konverzaci pro řádné hlášení',
            '🤐 Požádej, aby to bylo vyřízeno tiše bez zapojení úřadů',
          ],
        },
        {
          id: 'end_c1',
          title: 'V bezpečí a s podporou',
          text: 'Účet je nahlášen platformě a policii. Dospělá osoba ti pomůže zpřísnit nastavení soukromí. Možná tím chráníš sebe i ostatní děti.',
          lesson: 'Grooming je závažný trestný čin. Nahlášení se všemi důkazy pomáhá úřadům chránit další děti.',
        },
        {
          id: 'end_c2',
          title: 'Bezpečnější, ale neúplné',
          text: 'Účet je zablokovaný, ale formálně nenahlášený. Jsi ve větším bezpečí, ale ta osoba si může jednoduše najít další oběť.',
          lesson: 'Grooming je příliš vážný na to, aby se řešil bez pomoci. Nech dospělé podat řádné hlášení. Chrání to tebe i další děti.',
        },
      ],
    },
    {
      id: 8,
      title: 'Nenávist v komentářích',
      emoji: '💬',
      topic: 'Nenávistné projevy',
      nodes: [
        {
          id: 'start',
          text: 'Sleduješ živý herní stream a chat se plní rasistickými a nenávistnými komentáři zaměřenými na jednoho z hráčů. Komentáře přicházejí rychle. Napadený hráč vypadá viditelně rozrušeně.',
          choices: [
            '😂 Zasměj se některým komentářům – je to jen internetový humor',
            '😶 Sleduj tiše bez zapojení',
            '🚩 Nahlas nenávistné projevy a ozvi se v chatu',
          ],
        },
        {
          id: 'end_a',
          title: 'Ne jen vtip',
          text: 'Zasměješ se. Hráč opustí stream v slzách. Screenshoty tvého komentáře se objeví později. Je ti to trapné a ostatní diváci tě nahlásí.',
          lesson: 'Rasistické urážky a nenávistné projevy nikdy nejsou „jen internetový humor“. Když se zasměješ s nimi, stáváš se součástí té újmy.',
        },
        {
          id: 'mid_b',
          text: 'Mlčíš. Napadený hráč se odpojí od streamu. Chat slaví, že ho odtamtud vyštval. Není ti z toho, co se právě stalo, dobře.',
          choices: [
            '💬 Zveřejni podpůrnou zprávu na obranu hráče',
            '❌ Zavři stream a zkus na to zapomenout',
          ],
        },
        {
          id: 'end_b1',
          title: 'Jeden hlas mění věci',
          text: 'Ostatní diváci uvidí tvou zprávu a začnou se ozývat taky. Nálada v chatu se změní. Několik lidí nahlásí ty nejhorší útočníky a některé účty dostanou ban.',
          lesson: 'Jeden člověk, který se v nepřátelském chatu ozve, může změnit náladu. Přihlížející mají skutečnou moc.',
        },
        {
          id: 'end_b2',
          title: 'Cena mlčení',
          text: 'Odejdeš, ale nenávist pokračuje. Napadený hráč už možná nikdy streamovat nebude. Tvé mlčení bylo bezpečnější, ale přispělo k problému.',
          lesson: 'Odejít tě ochrání, ale než odejdeš, nahlas nenávistné projevy. Pomůže to zastavit je.',
        },
        {
          id: 'mid_c',
          text: 'Nahlásíš nejhorší komentáře a zveřejníš podpůrnou zprávu. Několik dalších diváků následuje tvůj příklad a nahlásí je taky. Hráč si toho všimne a cítí se méně sám.',
          choices: [
            '📣 Promluv si taky s dospělou osobou, které věříš, nebo s učitelem o tom, co se stalo',
            '✅ To je z tvé strany dost – zbytek nech na platformě',
          ],
        },
        {
          id: 'end_c1',
          title: 'Řetězová reakce',
          text: 'Několik hlášení je rychle vyřízeno. Když o nenávistných projevech v herním prostředí řekneš dospělé osobě, které věříš, pomáhá to i k širší změně.',
          lesson: 'Nahlásit nenávistné projevy A říct to dospělým, kterým věříš, dělá platformy bezpečnější pro všechny, teď i později.',
        },
        {
          id: 'end_c2',
          title: 'Dobrý občan',
          text: 'Hlášení jsou vyřízena a některé účty jsou označeny. Hráč ti později poděkuje za tvou podporu v chatu.',
          lesson: 'Nahlásit nenávistné projevy A ozvat se přímo v tu chvíli je mocná kombinace. Výborně – takhle se to dělá!',
        },
      ],
    },
    {
      id: 9,
      title: 'Příspěvek s obviněním',
      emoji: '📣',
      topic: 'Falešné fámy online',
      nodes: [
        {
          id: 'start',
          text: 'Někdo ze školy o tobě zveřejní na sociálních sítích úplně nepravdivé fámy. Rychle se to šíří – lidé to sdílejí a píšou zlé komentáře. Nevíš, kdo to začal, a je ti hrozně.',
          choices: [
            '😡 Zveřejni rozzlobenou odpověď na svou veřejnou obranu',
            '💬 Napiš každému, koho znáš, a řekni jim pravdu',
            '📸 Vyfoť vše a okamžitě řekni dospělé osobě, které věříš',
          ],
        },
        {
          id: 'mid_a',
          text: 'Tvá odpověď se stane virální. Lidé se o ní hádají. Původní pisatel ví, že tě zasáhl, a zveřejňuje ještě víc, protože si reakce užívá.',
          choices: [
            '💢 Pokračuj v boji a očisti své jméno',
            '🗑️ Smaž svou odpověď a odstup',
          ],
        },
        {
          id: 'end_a1',
          title: 'Hraješ jejich hru',
          text: 'Hádka se rychle vymkne kontrole. Učitelé se do toho zapojí. Oba čelíte školním důsledkům – i když to začali oni.',
          lesson: 'Zlostná reakce na falešné fámy živí drama a můžeš se kvůli ní dostat do potíží i ty. Nedávej jim reakci, kterou chtějí.',
        },
        {
          id: 'end_a2',
          title: 'Odstoupit',
          text: 'Smazat odpověď byl chytrý tah. Drama se pomalu uklidní, ale původní příspěvek zůstává nahoře bez jakéhokoli skutečného důsledku pro toho, kdo ho zveřejnil.',
          lesson: 'Smazat nazlobený příspěvek je chytré. Nahlas ještě původní příspěvek a požádej dospělou osobu, které věříš, o pomoc, aby se to opravdu vyřešilo.',
        },
        {
          id: 'end_b',
          title: 'Kontrola škod',
          text: 'Strávíš hodiny psaním lidem. Někteří ti věří, jiní ne. Je to vyčerpávající a příspěvek je stále nahoře a dostává se k dalším lidem.',
          lesson: 'Psát každému zvlášť je únavné a často to nepomůže. Nahlásit příspěvek a požádat dospělou osobu, které věříš, je rychlejší a silnější.',
        },
        {
          id: 'mid_c',
          text: 'Důvěryhodná dospělá osoba ti pomůže nahlásit příspěvek jako obtěžování. Rychle ho stáhnou. Společně přijdete na to, kdo ho nejspíš zveřejnil.',
          choices: [
            '🤝 Souhlas se zprostředkovaným rozhovorem s tím, kdo to zveřejnil',
            '🚫 Zablokuj ho a jdi dál, když je příspěvek smazaný',
          ],
        },
        {
          id: 'end_c1',
          title: 'Skutečné řešení',
          text: 'Zprostředkovaný rozhovor s podporou dospělé osoby odhalí, co za tou fámou stálo. Druhá osoba se omluví. Škola vytvoří nová pravidla, aby se to už neopakovalo.',
          lesson: 'Uložit důkazy, nahlásit a, když je to bezpečné, najít skutečnou příčinu vede k nejlepším a trvalým výsledkům.',
        },
        {
          id: 'end_c2',
          title: 'Bezpečně a vyřešeno',
          text: 'Příspěvek je odstraněn a ty jsi v bezpečí. Blokování tě chrání i do budoucna. Silný výsledek správnými kroky.',
          lesson: 'Rychlé odstranění škodlivého příspěvku s pomocí dospělé osoby je skvělý výsledek. Blokovat kvůli bezpečí je chytrá hranice.',
        },
      ],
    },
    {
      id: 10,
      title: 'Tlak na heslo',
      emoji: '🔐',
      topic: 'Tlak kamaráda a hesla',
      nodes: [
        {
          id: 'start',
          text: 'Tvůj nejlepší kamarád Honza říká: „Jestli jsme opravdu nejlepší kamarádi, musíš mi dát heslo. Kamarádi nemají tajemství!“ Je ti to nepříjemné. Co uděláš?',
          choices: [
            '🔑 Dej Honzovi heslo – kamarádi si přece věří',
            '🤥 Dej falešné heslo, aby hádka přestala',
            '🗣️ Klidně řekni, že kamarádi heslo jeden druhého nepotřebují',
          ],
        },
        {
          id: 'end_a',
          text: 'Honza ti čte zprávy a z tvého účtu píše jiným lidem. Zlobí se kvůli věcem, které pochopil špatně. Brzy tě kontroluje pořád.',
          title: 'Začíná kontrola',
          lesson: 'Heslo je soukromé. Praví kamarádi ho nepotřebují. Když o něj někdo pořád žádá, řekni to dospělému, kterému věříš, a změň si heslo.',
        },
        {
          id: 'mid_b',
          text: 'Honza zjistí, že heslo je falešné, a hrozně se naštve: „Ty mi lžeš! Dej mi to pravé heslo, nebo všem řeknu, že lžeš!“ Tlak sílí.',
          choices: [
            '🔑 Ustoupit a dát mu pravé heslo',
            '🗣️ Říct ne a svěřit se dospělému, kterému věříš',
          ],
        },
        {
          id: 'end_b1',
          text: 'Jakmile má Honza tvoje heslo, kontroluje, s kým si píšeš, a určuje ti, s kým se smíš kamarádit. Je to čím dál horší.',
          title: 'Past',
          lesson: 'Ustoupení tlak málokdy ukončí. Kontrolování obvykle sílí. Změň si heslo a řekni to dospělému, kterému věříš.',
        },
        {
          id: 'end_b2',
          text: 'Je těžké říct ne blízkému kamarádovi. Dospělý, kterému věříš, ti potvrdí, že to bylo správné rozhodnutí. Pomůže ti s Honzou promluvit, nebo si od kamarádství dát pauzu.',
          title: 'Osvobození',
          lesson: 'Rozpoznat kontrolující chování a říct ne chce odvahu. Pro tvou bezpečnost je to vždy správná volba.',
        },
        {
          id: 'mid_c',
          text: 'Honza říká: „Takže mi nevěříš!“ Zůstaneš v klidu, ale Honza tlačí dál a tlak sílí.',
          choices: [
            '💪 Držet svou hranici a říct o tlaku dospělému, kterému věříš',
            '😔 Dát heslo, jen aby byl klid',
          ],
        },
        {
          id: 'end_c1',
          text: 'Dospělý, kterému věříš, ti řekne, že chtít heslo je kontrola, ne kamarádství. S jeho pomocí Honzovi vysvětlíš, že si hesla necháváš pro sebe. Dobrý kamarád to přijme.',
          title: 'Zdravé hranice',
          lesson: 'Dobrý kamarád respektuje tvé soukromí. Důvěra neznamená sdílet hesla. Zasloužíš si kamarády, kteří respektují tvé hranice.',
        },
        {
          id: 'end_c2',
          text: 'Pár dní je klid. Pak Honza chce víc: tvoje fotky, tvoje chaty. Tlak začíná znovu.',
          title: 'Ustoupení',
          lesson: 'Heslo vyzrazené kvůli klidu pomůže jen na chvíli. Hesla si nechávej pro sebe a když někdo tlačí dál, řekni to dospělému, kterému věříš.',
        },
      ],
    },
    {
      id: 11,
      title: 'Sdílej to a zachráníš hru!',
      emoji: '🚨',
      topic: 'Dezinformace',
      nodes: [
        {
          id: 'start',
          text: 'Ve vaší herní komunitě se šíří příspěvek. Má logo hry a píše: „Firma končí! Hra se zítra vypíná. SDÍLEJ TOHLE a zachráníš ji!“ Kamarádi ho už sdílejí. Co uděláš?',
          choices: [
            '📤 Hned ho sdílet – radši pro jistotu',
            '🙈 Ignorovat ho a scrollovat dál',
            '🔎 Zkontrolovat oficiální web nebo ověřený účet herní firmy',
          ],
        },
        {
          id: 'end_a',
          text: 'Tvé sdílení pomůže příspěvku dostat se ke stovkám hráčů. Pak se ozve skutečná firma: „S hrou je všechno v pořádku. Ta zpráva je falešná!“ Mnoho hráčů se zbytečně bálo a pod sdílením je tvoje jméno.',
          title: 'Šíření podvrhu',
          lesson: 'Příspěvek, který křičí „SDÍLEJ TOHLE“ a nutí tě panikařit, je varovný signál. Sdílením nepravdivého příspěvku ho šíříš dál, i když to nebyl tvůj nápad.',
        },
        {
          id: 'mid_b',
          text: 'Ignoruješ ho, ale příspěvek roste dál. Mladší hráčka z tvého týmu je smutná, protože si myslí, že přijde o kamarády ze hry. Co uděláš?',
          choices: [
            '😶 Nic neřekneš – tebe se to netýká',
            '🤝 Řekneš kamarádům, že to vypadá falešně, a příspěvek nahlásíš',
          ],
        },
        {
          id: 'end_b1',
          text: 'Příspěvek dál nešíříš, ale ten falešný straší hráče ještě několik dní. Kamarádi pořád nevědí, že je nepravdivý.',
          title: 'Ticho nestačí',
          lesson: 'Nešířit je dobře. Říct to kamarádům a příspěvek nahlásit pomůže ještě víc.',
        },
        {
          id: 'end_b2',
          text: 'Ukážeš kamarádům, že oficiální stránka firmy o žádném konci nepíše. Příspěvek nahlásíš. Spousta hráčů ho přestane sdílet a nakonec zmizí.',
          title: 'Ověřovatel faktů',
          lesson: 'Když zkontroluješ oficiální zdroj a nepravdivý příspěvek nahlásíš, chráníš i další lidi.',
        },
        {
          id: 'mid_c',
          text: 'Na oficiálním webu o žádném konci není ani slovo. Ověřený účet dokonce píše: „Nevěřte falešným příspěvkům!“ Kamarádi ale sdílejí ten falešný dál.',
          choices: [
            '📣 Poslat kamarádům oficiální odkaz a falešný příspěvek nahlásit',
            '🤐 Nechat si to pro sebe – pravdu už přece znáš',
          ],
        },
        {
          id: 'end_c1',
          text: 'Kamarádi si přečtou oficiální odkaz a své sdílení smažou. Falešný příspěvek je nahlášen a zmizí.',
          title: 'Šiřitel pravdy',
          lesson: 'Nejdřív zkontroluj oficiální zdroje. Pak pomoz ostatním tím, že sdílíš pravdivé informace. Pokud váháš, zeptej se dospělého, kterému věříš.',
        },
        {
          id: 'end_c2',
          text: 'Před falešnou zprávou jsi v bezpečí, ale kamarádi ji sdílejí dál a další hráči se bojí.',
          title: 'Chytrý, ale potichu',
          lesson: 'Zkontrolovat je skvělý první krok. Říct to ostatním a nahlásit příspěvek pomůže mnohem víc.',
        },
      ],
    },
    {
      id: 12,
      title: 'Virální výzva',
      emoji: '🤳',
      topic: 'Misinformace',
      nodes: [
        {
          id: 'start',
          text: 'Video s milionem zhlédnutí ukazuje, jak teenageři za 60 vteřin spolknou lžíci suchého prášku bez vody. Všichni ve videu se smějí. Tvůj kamarád říká: „Dneska to u mě doma zkusíme!“ Co uděláš?',
          choices: [
            '🥄 Zkusit to – všichni se smějí, takže je to jistě bezpečné',
            '👍 Říct „možná někdy“ a video jen olajkovat',
            '✋ Říct ne a zeptat se dospělého, kterému věříš, jestli je to bezpečné',
          ],
        },
        {
          id: 'end_a',
          text: 'Suchý prášek se ti dostane do krku a do plic. Kašleš a špatně se ti dýchá. Dospělý tě veze k lékaři. Nikdo se teď nesměje.',
          title: 'Vůbec ne k smíchu',
          lesson: 'Videa ukazují vtipné části, ne rizika. Spousta lidí sdílí trendy a nezkontroluje, jestli jsou bezpečné. Tomu se říká misinformace.',
        },
        {
          id: 'mid_b',
          text: 'Video olajkuješ. Kamarád výzvu udělá a kvůli lajkům ji zkouší další děti. Spolužák píše, že se zranil, ale komentáře říkají jen „lol“.',
          choices: [
            '👍 Dál lajkovat – je to přece jen trend',
            '🗣️ Říct to dospělému, kterému věříš, a varovat kamaráda',
          ],
        },
        {
          id: 'end_b1',
          text: 'Tvé lajky pomáhají videu dostat se k dalším dětem. Další to zkoušejí a některým je zle.',
          title: 'Součást trendu',
          lesson: 'Lajky a sdílení video zvětšují. Když trend může někomu ublížit, nelajkuj ho ani nesdílej.',
        },
        {
          id: 'end_b2',
          text: 'Dospělý zkontroluje fakta: výzva může způsobit dušení a potíže s dýcháním. Kamarád přestane a dospělý ti pomůže video nahlásit.',
          title: 'Zastavení trendu',
          lesson: 'Říct to dospělému, kterému věříš, je chytré. Vtipné video není důkaz, že je něco bezpečné.',
        },
        {
          id: 'mid_c',
          text: 'Dospělý to s tebou vyhledá. Lékaři říkají, že výzva může způsobit dušení a vážné potíže s dýcháním. Kamarád je překvapený. Video s mnoha lajky se přesto může mýlit.',
          choices: [
            '📲 Ukázat kamarádovi fakta a video nahlásit',
            '🙅 Jen sám říct ne – ostatní se mohou rozhodnout sami',
          ],
        },
        {
          id: 'end_c1',
          text: 'Kamarád se rozhodne to nezkoušet. Video nahlásíte spolu a fakta pošlete do třídního chatu. Méně dětí výzvu zkusí.',
          title: 'Detektiv pravdy',
          lesson: 'Zkontroluj fakta, zeptej se dospělého a pomoz ostatním. Tak zastavíš misinformaci, i když ji lidé šířili bez zlého úmyslu.',
        },
        {
          id: 'end_c2',
          text: 'Jsi v bezpečí, ale kamarád a další děti to přesto zkusí. Některé skončí s ošklivým kašlem.',
          title: 'V bezpečí, ale potichu',
          lesson: 'Říct ne za sebe je dobře. Sdílet fakta pomáhá, aby byli v bezpečí i ostatní.',
        },
      ],
    },
    {
      id: 13,
      title: 'Výzva od influencera',
      emoji: '⭐',
      topic: 'Škodliví influenceři',
      nodes: [
        {
          id: 'start',
          text: 'Tvůj oblíbený influencer má 2 miliony sledujících. Dnešní příspěvek říká: „Praví fanoušci se vyfotí na střeše školy! Označ 3 kamarády! Nejlepší fotka dostane pozdrav!“ Kamarádi to řeší ve skupinovém chatu. Co uděláš?',
          choices: [
            '📸 Přidat se – praví fanoušci výzvu splní',
            '🤔 Počkat, co udělají ostatní',
            '🛑 Zastavit se a přemýšlet: je to bezpečné? Pak se zeptat dospělého, kterému věříš',
          ],
        },
        {
          id: 'end_a',
          text: 'Vylezete s kamarády nahoru. Učitel vás uvidí a škola volá rodičům. Někdo mohl spadnout. Influencer tvou fotku ani neuvidí.',
          title: 'Nebezpečný fanoušek',
          lesson: 'Influenceři vydělávají na pozornosti. Nenesou odpovědnost, když se zraníš. Nebezpečná výzva za to nestojí.',
        },
        {
          id: 'mid_b',
          text: 'Pár spolužáků dává na net fotky ze střechy. Influencer sdílí ty nejlepší. Kamarádi říkají, že jsi posera, když se nepřidáš.',
          choices: [
            '😬 Přidat se, aby se ti nesmáli',
            '🧠 Říct ne – pravý kamarád tě do nebezpečí netlačí',
          ],
        },
        {
          id: 'end_b1',
          text: 'Vylezeš nahoru a celou dobu se bojíš. Potom máš potíže a z té fotky nemáš ani radost.',
          title: 'Vyhrál tlak',
          lesson: 'Tlak sledujících a kamarádů není dobrý důvod. Je v pořádku říct ne a pravý kamarád to respektuje.',
        },
        {
          id: 'end_b2',
          text: 'Řekneš ne. Dva kamarádi se smějí, ale jeden řekne: „Popravdě, mně to taky nepřišlo dobré.“ Společně to řeknete učiteli a škola všechny varuje.',
          title: 'Silné rozhodnutí',
          lesson: 'Říct ne chce odvahu. Ostatní to často cítí stejně a když promluvíš, můžeš je ochránit.',
        },
        {
          id: 'mid_c',
          text: 'Zastavíš se a přemýšlíš: lézt na střechu je nebezpečné. Dospělý, kterému věříš, říká: „Influenceři chtějí zhlédnutí a někteří na bezpečnost nemyslí. Pojďme se podívat, jestli příspěvek neporušuje pravidla aplikace.“',
          choices: [
            '🚩 Příspěvek s výzvou nahlásit platformě',
            '😌 Prostě se nezúčastnit a zapomenout na to',
          ],
        },
        {
          id: 'end_c1',
          text: 'Platforma výzvu odstraní. Influencera taky přestaneš sledovat a kamarádům řekneš proč. Méně dětí se zraní.',
          title: 'Chytrý sledující',
          lesson: 'Můžeš přestat sledovat někoho, kdo dává nebezpečné příspěvky. Riskantní příspěvky nahlaš. Pamatuj: Stop – Přemýšlej – Zkontroluj – Zeptej se.',
        },
        {
          id: 'end_c2',
          text: 'Jsi v bezpečí, ale výzva na internetu zůstane a další děti ji mohou zkusit.',
          title: 'Zatím v bezpečí',
          lesson: 'Nezúčastnit se je dobře. Nahlásit nebezpečný příspěvek pomáhá chránit i další děti.',
        },
      ],
    },
    {
      id: 14,
      title: 'Nekonečný feed',
      emoji: '📱',
      topic: 'Algoritmy a falešné zprávy',
      nodes: [
        {
          id: 'start',
          text: 'Včera večer ti naskočilo pár videí se „šokujícími zprávami“. Teď je tvůj feed plný podobných: rozzlobení lidé, děsivá tvrzení, odpočty do katastrof. Máš strach a nemůžeš přestat scrollovat. Co uděláš?',
          choices: [
            '📲 Scrollovat dál – musí to být důležité zprávy',
            '😰 Sdílet nejděsivější video, aby kamarády varovalo',
            '🧭 Zeptat se sám sebe: proč vidím tolik takových videí? Pak to říct dospělému, kterému věříš',
          ],
        },
        {
          id: 'end_a',
          text: 'Scrolluješ dvě hodiny a videa jsou čím dál děsivější. Nemůžeš spát a další den máš úzkost.',
          title: 'Smyčka bez konce',
          lesson: 'Aplikace ti ukazují víc toho, na co se díváš. Šokující videa tě drží u obrazovky, i když nejsou pravdivá nebo ti nedělají dobře.',
        },
        {
          id: 'mid_b',
          text: 'Video sdílíš. Kamarádi odpovídají: „Je to pravda?“ Jedna kamarádka se bojí tak, že nemůže spát. Pak někdo zjistí, že video je staré a z jiné země.',
          choices: [
            '😳 Smazat své sdílení a říct kamarádům pravdu',
            '🤷 Nechat to být – video je přece cizí',
          ],
        },
        {
          id: 'end_b1',
          text: 'Sdílení smažeš a kamarádům řekneš, že video je staré. Většina ti uvěří. Opravit chybu chce odvahu.',
          title: 'Poctivá oprava',
          lesson: 'Každý občas sdílí něco nepravdivého. Rychlá oprava a upřímnost hodně pomůže. Zkontroluj, než sdílíš.',
        },
        {
          id: 'end_b2',
          text: 'Video se šíří dál s tvým jménem. Další lidé se bojí něčeho, co ani není pravda.',
          title: 'Stroj na fámy',
          lesson: 'Když necháš nepravdivý příspěvek na místě, šíří se dál. Když zjistíš, že je špatně, smaž ho a řekni to.',
        },
        {
          id: 'mid_c',
          text: 'Dospělý, kterému věříš, vysvětlí: aplikace se učí, na co se díváš, a ukazují ti toho víc. Šokující videa mají hodně zhlédnutí, takže je aplikace posiluje. Společně vidíte, že svůj feed můžeš změnit.',
          choices: [
            '⚙️ Klepnout na „Nezajímá mě“, sledovat zábavné a užitečné účty a dát si pauzu',
            '🔁 Nechat feed být – děsivé části prostě přeskočíš',
          ],
        },
        {
          id: 'end_c1',
          text: 'Za pár dní ukazuje feed mnohem víc dobrých věcí. Cítíš se klidněji a než něco sdílíš, ověříš si fakta.',
          title: 'Pán feedu',
          lesson: 'Svůj feed můžeš řídit: říkej „nezajímá mě“, vybírej, koho sleduješ, a dělej si pauzy. Než sdílíš, ověř fakta.',
        },
        {
          id: 'end_c2',
          text: 'Děsivá videa pořád přicházejí a pořád máš trochu strach.',
          title: 'Pořád ve smyčce',
          lesson: 'Ignorovat je těžké, když feed pořád tlačí. Když změníš, koho sleduješ a na co se díváš, změní se i to, co vidíš.',
        },
      ],
    },
  ],
}
