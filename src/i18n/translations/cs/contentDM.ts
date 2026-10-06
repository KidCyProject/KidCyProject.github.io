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
    'Rozhoduj se. Sleduj důsledky. Nauč se, jak zvládnout kyberšikanu, online tlak a zneužívání digitálního prostředí.',
  howItWorks: 'Jak to funguje',
  instruction:
    'Projdi 10 scénářů zneužívání digitálního prostředí ze skutečného života. V každém klíčovém okamžiku si vyber, co dělat – a různé volby vedou k opravdu různým výsledkům. Získej až 3 hvězdičky za každý příběh tím, že najdeš nejbezpečnější cestu. Pokud dostaneš těžký konec, zkus příběh znovu a objev lepší cestu!',
  tip: 'Každý příběh se větví mnoha směry. Vždy existuje alespoň jedna cesta, která vede k bezpečnému, pozitivnímu výsledku – ale musíš se rozhodovat správně, aby se ti ji podařilo najít!',
  tipLabel: 'Tip',
  yourBestScore: 'Tvé nejlepší skóre',
  bestResultDesc: 'Nejlepší výsledek z každého příběhu',
  storiesTitle: '📖 Příběhy',
  watchOutTitle: '🚩 Dávej pozor na',
  watchOutItems: [
    '🚩 Kohokoli, kdo žádá o soukromé fotografie',
    '🚩 Požadavky na heslo od partnera',
    '🚩 Cizince, kteří se ptají na tvou adresu nebo školu',
    '🚩 Tlak „Drž to v tajnosti“',
    '🚩 Zlomyslné příspěvky, screenshoty, falešné profily',
  ],
  welcomeDesc: 'Rozhoduj se pečlivě – různé cesty vedou k velmi odlišným výsledkům.',
  startStory: 'Začít příběh →',
  whatWeLearned: '💡 Co jsme se naučili:',
  tryDifferentPath: '↩ Zkus jinou cestu',
  nextStory: 'Další příběh →',
  seeFinalScore: '🎉 Zobrazit konečné skóre',
  allStoriesComplete: 'Všechny příběhy dokončeny!',
  finalScoreDesc: 'Takto ti to šlo ve všech 10 příbězích:',
  playAgain: 'Hrát znovu',
  rankChampion: '🏆 Šampion bezpečnosti',
  rankChampionMsg: 'Skvělé! Téměř v každé situaci se ti podařilo najít nejbezpečnější cestu.',
  rankDefender: '🛡️ Digitální obránce',
  rankDefenderMsg: 'Výborná práce! Většinu situací se ti podařilo zvládnout moudře a bezpečně.',
  rankNavigator: '📚 Navigátor učení',
  rankNavigatorMsg: 'Dobrá snaha! Zopakuj si některé příběhy, ať objevíš lepší cesty a získáš víc hvězdiček.',
  rankBeginning: '🌱 Začínám',
  rankBeginningMsg: 'Zkoušej různé cesty – každé opakování tě naučí něco nového!',
  stories: [
    {
      id: 1, title: 'Problém s memem', emoji: '😟', topic: 'Kyberšikana',
      nodes: [
        {
          id: 'start',
          text: 'Otevřeš telefon a uvidíš skupinový chat. Někdo jménem Jake tam zveřejnil zlý mem o tvé spolužačce Emmě, který si dělá legraci z jejího vzhledu. Už ho lajklo 23 lidí. Co uděláš?',
          choices: ['👍 Lajkni mem, ať nejsi mimo', '📲 Přejeď dál a ignoruj to', '💬 Pošli Emmě soukromou podpůrnou zprávu']
        },
        {
          id: 'end_a',
          title: 'Součást problému',
          text: 'U memu je teď i tvůj lajk. Jake zveřejňuje další, ještě horší. Emma vidí tvé jméno v lajcích a je zničená. Učitel se to dozví a kontaktuje tvé rodiče.',
          lesson: 'Lajkování zlého obsahu je formou kyberšikany. Tvůj „lajk“ není nikdy neviditelný – oběť vždycky vidí, kdo ho dal.'
        },
        {
          id: 'mid_b',
          text: 'Přejedeš dál, ale příspěvky přibývají. Druhý den Emma sedí sama u oběda a vypadá velmi rozrušeně. Šikana se zhoršila.',
          choices: ['😶 Dál to ignoruj – není to tvůj problém', '🏫 Řekni učiteli, co se děje']
        },
        {
          id: 'end_b1',
          title: 'Tichý svědek',
          text: 'Uplyne několik týdnů. Emma chybí ve škole. Cítíš vinu, ale nic neřekneš. Šikana pokračuje dál bez povšimnutí.',
          lesson: 'Ignorování šikany ji nezastaví. Přihlížející mají skutečnou moc pomoct – mlčet je taky volba.'
        },
        {
          id: 'end_b2',
          title: 'Statečné oznámení',
          text: 'Učitel okamžitě jedná. Jake a jeho rodiče jsou přivoláni. Emma dostane podporu od školního poradce. Šikana přestane.',
          lesson: 'Říct to dospělé osobě, které věříš, je jedna z nejmocnějších věcí, které můžeš udělat. Není to práskání – je to ochrana někoho, kdo potřebuje pomoc.'
        },
        {
          id: 'mid_c',
          text: 'Emma odpovídá: „Moc díky… opravdu to bolelo. Nevěděla jsem, co dělat.“ Je vděčná, ale vystrašená. Příspěvky jsou stále nahoře.',
          choices: ['📢 Pomoz Emmě nahlásit každý příspěvek na platformě', '🤷 Řekni Emmě, aby to ignorovala, samo to přejde']
        },
        {
          id: 'end_c1',
          title: 'Digitální obránce',
          text: 'Ty a Emma nahlásíte každý příspěvek společně. Většina je odstraněna do jednoho dne. Navštívíte také školního poradce, který Emmu dál podpoří. Šikana přestane.',
          lesson: 'Oslovit PLUS podniknout kroky – nahlásit to online a zapojit dospělé, kterým věříš – je zlatý standard reakce na kyberšikanu.'
        },
        {
          id: 'end_c2',
          title: 'Laskavost nestačí',
          text: 'Emma se snaží to ignorovat, ale příspěvky přibývají. Tvá laskavá zpráva pomohla, ale bez nahlášení nebo podpory dospělých šikana pokračuje.',
          lesson: 'Laskavost je skvělý začátek, ale to, co šikanu skutečně zastaví, je nahlášení a zapojení důvěryhodných dospělých.'
        },
      ],
    },
    {
      id: 2, title: 'Past screenshotů', emoji: '📸', topic: 'Soukromí a zrada',
      nodes: [
        {
          id: 'start',
          text: 'V soukromé zprávě se kamarádce Zoe svěříš, že se ti někdo líbí. Zoe si z ní udělá screenshot a bez tvého svolení ho sdílí ve velkém skupinovém chatu. Všichni komentují. Co uděláš?',
          choices: ['😡 Zveřejni rozzlobený veřejný příspěvek o tom, co Zoe udělala', '📱 Konfrontuj Zoe soukromě v DM', '📸 Ulož důkazy a řekni to dospělé osobě, které věříš']
        },
        {
          id: 'end_a',
          title: 'Oheň na oheň',
          text: 'Veřejně Zoe zkritizuješ. Zoe se brání. Desítky lidí se zapojí do dramatu. Teď je to plnohodnotná online válka a oba vypadáte špatně.',
          lesson: 'Veřejné pranýřování online téměř vždy věci eskaluje. Zřídka přináší řešení, které hledáš.'
        },
        {
          id: 'mid_b',
          text: 'Pošleš Zoe DM: „Proč jsi to sdílela? Bylo to soukromé!“ Zoe říká: „To byl jen vtip, zklidni se.“ Ale screenshot ještě nesmazala.',
          choices: ['😔 Přijmi její „omluvu“ a tiše jdi dál', '🗣️ Pevně ji požádej, aby to smazala, a zapoj dospělou osobu, které věříš']
        },
        {
          id: 'end_b1',
          title: 'Zameteno pod koberec',
          text: 'Zoe vlastně nechápe, proč to bylo špatné. Screenshot zůstává nahoře. Cítíš se ublíženě, ale nic se skutečně nevyřeší.',
          lesson: '„Byl to jen vtip“ nikdy není omluva za sdílení soukromých zpráv. Přijmout špatné chování bez následků znamená, že se to může opakovat.'
        },
        {
          id: 'end_b2',
          title: 'Skutečné řešení',
          text: 'Pod tlakem a se zapojením dospělé osoby Zoe screenshot smaže a proběhne skutečný rozhovor o souhlasu a soukromí. Vaše přátelství se obnoví na zdravějších základech.',
          lesson: 'Klidná, ale pevná obhajoba soukromí – s podporou dospělé osoby – vede ke skutečné změně, nejen dočasnému klidu.'
        },
        {
          id: 'mid_c',
          text: 'Důvěryhodná dospělá osoba pomůže nahlásit příspěvek na platformě a kontaktuje rodiče Zoe. Screenshot je odstraněn. Zoe se omluví.',
          choices: ['🤝 Přijmi její omluvu a pracuj na obnově přátelství', '🚫 Zablokuj Zoe – nechceš ji jako kamarádku']
        },
        {
          id: 'end_c1',
          title: 'Obnovená důvěra',
          text: 'S podporou dospělé osoby a upřímnou omluvou se situace správně vyřeší. Zoe chápe souhlas. Oba jdete dál.',
          lesson: 'Zdokumentování, nahlášení a prostor pro skutečnou omluvu proměňuje bolestnou zkušenost ve skutečný moment učení.'
        },
        {
          id: 'end_c2',
          title: 'Bezpečná vzdálenost',
          text: 'Screenshot je pryč a ty jsi v bezpečí. Blokování je platná hranice, když je důvěra narušena. Bezpečný výsledek správnými kroky.',
          lesson: 'Chránit sebe je vždy platné. Zapojení dospělé osoby k řešení situace byl přesně správný tah.'
        },
      ],
    },
    {
      id: 3, title: 'Herní vztek', emoji: '🎮', topic: 'Online herní obtěžování',
      nodes: [
        {
          id: 'start',
          text: 'Hraješ svou oblíbenou online hru a jiný hráč začne spamovat nenávistné zprávy – nadává ti a vyhrožuje. Ostatní v lobby to sledují. Co uděláš?',
          choices: ['💢 Odplať mu to vlastními urážkami', '🙉 Ignoruj zprávy a hraj dál', '🔇 Umlč ho, pořiď screenshot a nahlas ho ve hře']
        },
        {
          id: 'end_a',
          title: 'Oba zabanováni',
          text: 'Hádáš se s ním. Oba jste nahlášeni. Systém označí tvůj účet. Oba dostanete ban – toxický hráč tě nahlásil jako první.',
          lesson: 'Reagovat nenávistí na nenávist tě také vystavuje riziku. Herní platformy často banují obě strany toxických výměn.'
        },
        {
          id: 'mid_b',
          text: 'Ignoruješ ho, ale eskaluje. Teď našel tvůj veřejný herní profil a zveřejňuje tam urážky, aby je viděli ostatní.',
          choices: ['🗑️ Smaž svůj profil, aby přestal', '📢 Nahlas to platformě a řekni to dospělé osobě, které věříš']
        },
        {
          id: 'end_b1',
          title: 'Útěk',
          text: 'Smazání profilu tohoto obtěžovatele prozatím zastaví. Ale najde si další oběť. Žádné důsledky, žádná skutečná změna.',
          lesson: 'Chránit sebe je důležité, ale nahlášení zajistí, že obtěžovatel bude čelit důsledkům a nemůže to dělat ostatním.'
        },
        {
          id: 'end_b2',
          title: 'Hráč zabanován',
          text: 'Platforma to prošetří a zabanuje účet obtěžovatele. Důvěryhodná dospělá osoba ti pomůže zkontrolovat nastavení soukromí a budeš mít oporu.',
          lesson: 'Nahlášení herního obtěžování funguje. Platformy berou tato hlášení vážně, zejména když jsou screenshoty uloženy jako důkaz.'
        },
        {
          id: 'mid_c',
          text: 'Hráče máš umlčeného a nahlášeného se screenshoty. Hlášení je v přezkumu. Ale to, co ti napsal, s tebou stále otřásá.',
          choices: ['🗣️ Řekni dospělé osobě, které věříš, jak tě ta zkušenost zasáhla', '😶 Nech si to pro sebe – už to máš vyřešené']
        },
        {
          id: 'end_c1',
          title: 'Nahlášení a podpora',
          text: 'Důvěryhodná dospělá osoba potvrdí tvé pocity a pomůže ti upravit nastavení soukromí. Platforma potvrdí, že hráč byl zabanován.',
          lesson: 'Nahlášení je důležité, ale stejně důležité je zpracovat to, jak tě online zneužívání zasáhlo. Důvěryhodné dospělé osoby mohou pomoci s obojím.'
        },
        {
          id: 'end_c2',
          title: 'Půl řešení',
          text: 'Hráč dostane ban, ale ten zážitek si necháváš pro sebe. Cítíš se online bezpečněji, ale stále neklidně.',
          lesson: 'Technickou stránku máš zvládnutou dokonale! Pamatuj: mluvit s někým o tom, jak se po online zneužití cítíš, je stejně důležité.'
        },
      ],
    },
    {
      id: 4, title: 'Falešný profil', emoji: '👤', topic: 'Vydávání se za někoho jiného',
      nodes: [
        {
          id: 'start',
          text: 'Všimneš si falešného účtu na sociálních sítích používajícího fotky tvého kamaráda Sama. Zveřejňuje trapné věci a přidává Samovy spolužáky. Sam o tom ještě neví. Co uděláš?',
          choices: ['💬 Napiš falešnému účtu, ať přestane', '📞 Okamžitě to řekni Samovi, ať to ví', '🚩 Nahlas falešný účet A hned to řekni Samovi']
        },
        {
          id: 'end_a',
          title: 'Nekrm trolla',
          text: 'Falešný účet tě zablokuje a zrychlí zveřejňování. Teď začne cílit i na tebe. Přímé zapojení věci zhoršilo.',
          lesson: 'Kontaktovat falešný nebo zneužívající účet přímo věci téměř vždy zhorší. Nahlas to raději platformě.'
        },
        {
          id: 'mid_b',
          text: 'Sam je v šoku a rozrušený. Chce napsat všem, aby vysvětlil, že je to falešné, ale neví, co dál. Účet je stále aktivní.',
          choices: ['📢 Pomoz Samovi nahlásit účet na platformě', '🗣️ Navrhni Samovi, aby lidem osobně řekl, že je to falešné']
        },
        {
          id: 'end_b1',
          title: 'Týmová práce vítězí',
          text: 'Ty a Sam nahlásíte účet společně. Platforma ho odstraní během několika hodin. Sam to navíc řekne dospělé osobě, které věří, a ta pomůže sledovat další pokusy.',
          lesson: 'Společné nahlášení falešných účtů je velmi účinné. Platformy berou vydávání se za někoho jiného velmi vážně a jednají rychle.'
        },
        {
          id: 'end_b2',
          title: 'Pomalá reakce',
          text: 'Sam lidem osobně vysvětluje, ale falešný účet zůstává aktivní několik dní a působí další trapasy, než ho někdo jiný nakonec nahlásí.',
          lesson: 'Přímé nahlášení falešných účtů platformě je mnohem rychlejší a účinnější než snaha vysvětlit to každému individuálně.'
        },
        {
          id: 'mid_c',
          text: 'Platforma obdrží tvé hlášení a začne účet přezkoumávat. Sam je vděčný za tvou rychlou reakci.',
          choices: ['🏠 Řekni to také dospělé osobě, které věříš, aby Sam cítil podporu', '⏳ Prostě počkej, až platforma zasáhne']
        },
        {
          id: 'end_c1',
          title: 'Plná ochrana',
          text: 'S podporou dospělé osoby a zásahem platformy je účet odstraněn. Sam cítí, že se o něj někdo skutečně stará. Škola je upozorněna, aby sledovala další pokusy.',
          lesson: 'Nahlášení platformě A zapojení dospělé osoby, které věříš, poskytuje nejlepší možnou ochranu, když se někdo za někoho vydává.'
        },
        {
          id: 'end_c2',
          title: 'Rychlá akce',
          text: 'Platforma účet odstraní. Samovi se uleví. Skvělý výsledek díky rychlé a správné akci.',
          lesson: 'Okamžité nahlášení falešných účtů platformě je přesně správný tah. Rychlé nahlášení znamená rychlejší odstranění.'
        },
      ],
    },
    {
      id: 5, title: 'Mimo skupinu', emoji: '😔', topic: 'Online vyloučení',
      nodes: [
        {
          id: 'start',
          text: 'Zjistíš, že tvá parta vytvořila nový skupinový chat bez tebe. Plánují párty, na kterou tě nikdo nepozval, a ty vidíš, jak o tom veřejně píšou. Cítíš se ublíženě a poníženě.',
          choices: ['📣 Zveřejni příspěvek o tom, jak tě to vyloučení bolí', '💬 Pošli rozzlobenou zprávu celé skupině', '🤝 Napiš soukromě svému nejbližšímu příteli ve skupině']
        },
        {
          id: 'end_a',
          title: 'Veřejné zhroucení',
          text: 'Tvůj veřejný příspěvek přitáhne pozornost, ale hlavně trapas. Parta se postaví do obrany. Drama se šíří po celé škole online.',
          lesson: 'Veřejné ventilování pocitů z vyloučení zřídka pomáhá a obvykle věci zhorší. Přímé soukromé rozhovory jsou mnohem účinnější.'
        },
        {
          id: 'end_b',
          title: 'Drama ve skupinovém chatu',
          text: 'Ve skupinovém chatu je nepříjemné ticho. Někteří přátelé se cítí vinní, jiní se naštvou. Nic se skutečně nevyřeší a napětí přetrvává týdny.',
          lesson: 'Konfrontace celé skupiny najednou staví každého do obrany. Soukromé rozhovory jeden na jednoho fungují mnohem lépe.'
        },
        {
          id: 'mid_c',
          text: 'Tvá nejbližší kamarádka Mia přizná, že ji k tvému vyloučení někdo jiný ve skupině přinutil. Omluví se a říká, že chce pomoct věci napravit.',
          choices: ['🤝 Požádej Miu, aby se za tebe ve skupině ozvala', '🏫 Řekni dospělé osobě, které věříš, o záměrném vyloučení']
        },
        {
          id: 'end_c1',
          title: 'Skutečný spojenec',
          text: 'Mia se ozve. Jsi zpátky ve skupině a ten, kdo tě vylučoval, dostane jasnou zpětnou vazbu. Parta se díky upřímnosti posílí.',
          lesson: 'Když je někdo ochotný pomoct, nech ho. Skuteční přátelé se za sebe navzájem postaví – i když je to nepříjemné.'
        },
        {
          id: 'end_c2',
          title: 'Dospělý spojenec',
          text: 'Důvěryhodná dospělá osoba pomůže zprostředkovat. Každý přemýšlí o tom, jak záměrné vyloučení bolí. Dynamika skupiny se mění k lepšímu.',
          lesson: 'Záměrné sociální vyloučení online je formou šikany. Důvěryhodná dospělá osoba může pomoci resetovat nezdravou dynamiku skupiny.'
        },
      ],
    },
    {
      id: 6, title: 'Soukromé fotografie', emoji: '📷', topic: 'Tlak na základě obrázků',
      nodes: [
        {
          id: 'start',
          text: 'Někdo, s kým chatuješ online dva týdny, říká, že tě má opravdu rád, a žádá o soukromou fotografii. Slibuje, že svou pošle první, a chce, ať to před všemi tajíš.',
          choices: ['📸 Pošli fotografii – působí opravdu mile', '😐 Řekni, že ti to není příjemné, ale pokračuj v chatování', '🚫 Odmítni, přestaň s nimi mluvit a okamžitě řekni dospělé osobě, které věříš']
        },
        {
          id: 'end_a',
          title: 'Past',
          text: 'Nikdy nic nepošlou zpět. Místo toho požadují další fotografie, jinak tu tvou sdílí se všemi. Jsi v pasti. Tomu se říká sextortion.',
          lesson: 'Posílání soukromých fotografií někomu, koho znáš pouze online, je extrémně nebezpečné. Sextortion – vydírání s obrázky – je trestný čin. Pokud se to stane, okamžitě řekni dospělé osobě, které věříš.'
        },
        {
          id: 'mid_b',
          text: '„Když mi žádnou nepošleš, je jasné, že mi nevěříš.“ Říkají, že je se vším konec, pokud odmítneš. Cítíš zmatek a tlak.',
          choices: ['📸 Ustup a pošli fotografii, aby byl klid', '🚫 Zablokuj ho a okamžitě řekni dospělé osobě, které věříš']
        },
        {
          id: 'end_b1',
          title: 'Past (část 2)',
          text: 'Pošleš fotografii a vydírání začne okamžitě. Uvědomíš si, že tahle osoba to plánovala od první zprávy.',
          lesson: 'Zdravé vztahy nikdy nezahrnují ultimáta. „Pošli fotku, nebo je konec“ je hlavní varovný signál predátora. Pokud se to kdy stane, řekni to dospělé osobě, které věříš.'
        },
        {
          id: 'end_b2',
          title: 'Dobrý instinkt',
          text: 'Zablokuješ účet a řekneš to dospělé osobě, které věříš. Ta pomůže účet nahlásit platformě a vysvětlí, že jde o klasickou taktiku groomingu, kterou zločinci používají.',
          lesson: 'Odmítnout tlak a zapojit dospělou osobu, které věříš, je vždy správné. Byla to manipulace – rozpoznat ji a jednat vyžaduje skutečnou odvahu.'
        },
        {
          id: 'mid_c',
          text: 'Důvěryhodná dospělá osoba se podívá na konverzaci a je velmi znepokojená. Vysvětlí, že to vypadá na grooming – někdo předstírá přátelství, aby získal tvou důvěru. Chce to nahlásit.',
          choices: ['📋 Sdílej celou historii konverzace, aby bylo hlášení silnější', '😳 Vynech některé detaily, protože se stydíš']
        },
        {
          id: 'end_c1',
          title: 'Úplné přiznání',
          text: 'S úplnými důkazy dospělá osoba a platforma podniknou razantní kroky. Účet je odstraněn a nahlášen úřadům, které mohou řádně vyšetřovat.',
          lesson: 'Sdílet s dospělou osobou, které věříš, celý příběh – i ty trapné části – jí dává nejlepší šanci tě chránit a zastavit zločince.'
        },
        {
          id: 'end_c2',
          title: 'Částečné hlášení',
          text: 'S omezenými detaily se přijmou jen dílčí ochranná opatření. Jsi ve větším bezpečí, ale celkový obraz by vyšetřování pomohl mnohem víc.',
          lesson: 'Promluvit o tom byla odvaha. Sdílet všechny detaily – i ty trapné – pomáhá dospělým tě plně chránit a zabránit tomu, aby se to stalo ostatním.'
        },
      ],
    },
    {
      id: 7, title: 'Nápomocný cizinec', emoji: '🕵️', topic: 'Online grooming',
      nodes: [
        {
          id: 'start',
          text: 'Někdo v herním chatu říká, že je mu 14 let, a píše ti už týden. Teď se ptá, kam chodíš do školy, na tvou domácí adresu a v kolik hodin se každý den vracíš domů bez rodičů. Co uděláš?',
          choices: ['💬 Odpověz na otázky – působí jako normální dítě', '🤔 Dej vágní odpovědi a pokračuj v chatování', '🚫 Přestaň reagovat, zablokuj ho a okamžitě řekni dospělé osobě, které věříš']
        },
        {
          id: 'end_a',
          title: 'Příliš mnoho informací',
          text: 'Během dalšího týdne znají tvou školu, rozvrh i adresu. Navrhnou osobní setkání. Uvědomíš si, že je něco hodně špatně.',
          lesson: 'Kdokoli, kdo se tě online ptá na domácí adresu, název školy nebo denní rozvrh, je vážný varovný signál – i když tvrdí, že je tvého věku.'
        },
        {
          id: 'mid_b',
          text: 'Dáváš vágní odpovědi, ale tlačí stále víc a teď žádají tvé telefonní číslo. Něco ti na tom nesedí, ale nechceš vypadat nezdvořile.',
          choices: ['📱 Dej jim číslo – byli na tebe tak milí', '🚫 Zablokuj ho a řekni to dospělé osobě, které věříš']
        },
        {
          id: 'end_b1',
          title: 'Příliš propojeni',
          text: 'Použijí tvé číslo k nalezení tvých ostatních účtů na sociálních sítích a ke sledování tvé aktivity. Důvěryhodná dospělá osoba se to dozví a je velmi znepokojená.',
          lesson: 'Nikomu online nemusíš dávat telefonní číslo ani osobní kontaktní údaje. Kdokoli, kdo je vymáhá, má špatné úmysly.'
        },
        {
          id: 'end_b2',
          title: 'Důvěryhodný instinkt',
          text: 'Důvěryhodná dospělá osoba potvrdí, že účet vypadá jako falešný profil dospělého. Pomůže ti ho nahlásit a společně zkontrolujete nastavení soukromí.',
          lesson: 'Jednat podle instinktu a zapojit dospělou osobu, které věříš, je vždy správný krok, když se něco online zdá divné.'
        },
        {
          id: 'mid_c',
          text: 'Důvěryhodná dospělá osoba si konverzaci přečte a je velmi znepokojená. Vysvětlí, že jde pravděpodobně o pokus o grooming – dospělý předstírá, že je dítě, aby získal tvou důvěru.',
          choices: ['📋 Poskytni celou konverzaci pro řádné hlášení', '🤐 Požádej, aby to bylo vyřízeno tiše bez zapojení úřadů']
        },
        {
          id: 'end_c1',
          title: 'V bezpečí a s podporou',
          text: 'Účet je nahlášen platformě a policii. Dospělá osoba ti pomůže zpřísnit nastavení soukromí. Možná tím chráníš sebe i ostatní děti.',
          lesson: 'Grooming je závažný trestný čin. Nahlášení s úplnými důkazy pomáhá úřadům zabránit tomu, aby se to stalo ostatním dětem.'
        },
        {
          id: 'end_c2',
          title: 'Bezpečnější, ale neúplné',
          text: 'Účet je zablokovaný, ale formálně nenahlášený. Jsi ve větším bezpečí, ale ta osoba si může jednoduše najít další oběť.',
          lesson: 'Grooming je příliš závažný, než aby se řešil bez pomoci. Nechat dospělou osobu, které věříš, podat řádné hlášení chrání tebe i možné budoucí oběti.'
        },
      ],
    },
    {
      id: 8, title: 'Nenávist v komentářích', emoji: '💬', topic: 'Nenávistné projevy',
      nodes: [
        {
          id: 'start',
          text: 'Sleduješ živý herní stream a chat se plní rasistickými a nenávistnými komentáři zaměřenými na jednoho z hráčů. Komentáře přicházejí rychle. Napadený hráč vypadá viditelně rozrušeně.',
          choices: ['😂 Zasměj se některým komentářům – je to jen internetový humor', '😶 Sleduj tiše bez zapojení', '🚩 Nahlas nenávistné projevy a ozvi se v chatu']
        },
        {
          id: 'end_a',
          title: 'Ne jen vtip',
          text: 'Zasměješ se. Hráč opustí stream v slzách. Screenshoty tvého komentáře se objeví později. Je ti to trapné a ostatní diváci tě nahlásí.',
          lesson: 'Rasistické urážky a cílené nenávistné projevy nikdy nejsou „jen internetový humor“. Když se člověk směje s nimi, stává se součástí té újmy.'
        },
        {
          id: 'mid_b',
          text: 'Mlčíš. Napadený hráč se odpojí od streamu. Chat slaví, že ho odtamtud vyštval. Není ti z toho, co se právě stalo, dobře.',
          choices: ['💬 Zveřejni podpůrnou zprávu na obranu hráče', '❌ Zavři stream a zkus na to zapomenout']
        },
        {
          id: 'end_b1',
          title: 'Jeden hlas mění věci',
          text: 'Ostatní diváci uvidí tvou zprávu a začnou se ozývat taky. Nálada v chatu se změní. Několik lidí nahlásí ty nejhorší útočníky a některé účty dostanou ban.',
          lesson: 'Jeden člověk, který se v nepřátelském chatu ozve, může změnit celou dynamiku. Přihlížející mají skutečnou moc změnit náladu v prostoru.'
        },
        {
          id: 'end_b2',
          title: 'Cena mlčení',
          text: 'Odejdeš, ale nenávist pokračuje. Napadený hráč už možná nikdy streamovat nebude. Tvé mlčení bylo bezpečnější, ale přispělo k problému.',
          lesson: 'Odejít chrání tvoji pohodu, ale nahlásit nenávistné projevy, než odejdeš, pomáhá zabránit jejich pokračování.'
        },
        {
          id: 'mid_c',
          text: 'Nahlásíš nejhorší komentáře a zveřejníš podpůrnou zprávu. Několik dalších diváků následuje tvůj příklad a nahlásí je taky. Hráč si toho všimne a cítí se méně sám.',
          choices: ['📣 Promluv si taky s dospělou osobou, které věříš, nebo s učitelem o tom, co se stalo', '✅ To je z tvé strany dost – zbytek nech na platformě']
        },
        {
          id: 'end_c1',
          title: 'Řetězová reakce',
          text: 'Několik hlášení je rychle vyřízeno. Když o nenávistných projevech v herním prostředí řekneš dospělé osobě, které věříš, pomáhá to i k širší změně.',
          lesson: 'Nahlásit nenávistné projevy A zvyšovat povědomí u důvěryhodných dospělých dělá platformy bezpečnější pro všechny – teď i v budoucnu.'
        },
        {
          id: 'end_c2',
          title: 'Dobrý občan',
          text: 'Hlášení jsou vyřízena a některé účty jsou označeny. Hráč ti později poděkuje za tvou podporu v chatu.',
          lesson: 'Nahlásit nenávistné projevy A ozvat se přímo v tu chvíli je mocná kombinace. Výborně – takhle se to dělá!'
        },
      ],
    },
    {
      id: 9, title: 'Příspěvek s obviněním', emoji: '📣', topic: 'Falešné fámy online',
      nodes: [
        {
          id: 'start',
          text: 'Někdo ze školy o tobě zveřejní na sociálních sítích úplně nepravdivé fámy. Rychle se to šíří – lidé to sdílejí a píšou zlé komentáře. Nevíš, kdo to začal, a je ti hrozně.',
          choices: ['😡 Zveřejni rozzlobenou odpověď na svou veřejnou obranu', '💬 Napiš každému, koho znáš, a řekni jim pravdu', '📸 Vyfoť vše a okamžitě řekni dospělé osobě, které věříš']
        },
        {
          id: 'mid_a',
          text: 'Tvá odpověď se stane virální. Lidé se o ní hádají. Původní pisatel ví, že tě zasáhl, a zveřejňuje ještě víc, protože si reakce užívá.',
          choices: ['💢 Pokračuj v boji a očisti své jméno', '🗑️ Smaž svou odpověď a odstup']
        },
        {
          id: 'end_a1',
          title: 'Hraješ jejich hru',
          text: 'Hádka se rychle vymkne kontrole. Učitelé se do toho zapojí. Oba čelíte školním důsledkům – i když to začali oni.',
          lesson: 'Rozzlobená reakce na falešné fámy online živí drama a vystavuje riziku i tebe. Nedávej jim reakci, kterou chtějí.'
        },
        {
          id: 'end_a2',
          title: 'Odstoupit',
          text: 'Smazat odpověď byl chytrý tah. Drama se pomalu uklidní, ale původní příspěvek zůstává nahoře bez jakéhokoli skutečného důsledku pro toho, kdo ho zveřejnil.',
          lesson: 'Smazat reaktivní příspěvek je chytrý tah. Doplň ho nahlášením původního obsahu a zapojením dospělé osoby, které věříš, ať se to vyřeší doopravdy.'
        },
        {
          id: 'end_b',
          title: 'Kontrola škod',
          text: 'Strávíš hodiny psaním lidem. Někteří ti věří, jiní ne. Je to vyčerpávající a příspěvek je stále nahoře a dostává se k dalším lidem.',
          lesson: 'Psát každému zvlášť je vyčerpávající a často neúčinné. Nahlásit příspěvek a zapojit dospělou osobu, které věříš, je rychlejší a účinnější.'
        },
        {
          id: 'mid_c',
          text: 'Důvěryhodná dospělá osoba ti pomůže nahlásit příspěvek jako obtěžování. Rychle ho stáhnou. Společně přijdete na to, kdo ho nejspíš zveřejnil.',
          choices: ['🤝 Souhlas se zprostředkovaným rozhovorem s tím, kdo to zveřejnil', '🚫 Zablokuj ho a jdi dál, když je příspěvek smazaný']
        },
        {
          id: 'end_c1',
          title: 'Skutečné řešení',
          text: 'Zprostředkovaný rozhovor s podporou dospělé osoby odhalí, co za tou fámou stálo. Druhá osoba se omluví. Škola vytvoří nová pravidla, aby se to už neopakovalo.',
          lesson: 'Dokumentování, nahlášení a – když je to bezpečné – řešení základní příčiny vede k nejlepším a nejtrvalejším výsledkům.'
        },
        {
          id: 'end_c2',
          title: 'Bezpečně a vyřešeno',
          text: 'Příspěvek je odstraněn a ty jsi v bezpečí. Blokování tě chrání i do budoucna. Silný výsledek správnými kroky.',
          lesson: 'Rychlé odstranění škodlivého příspěvku s pomocí dospělé osoby je skvělý výsledek. Blokovat kvůli bezpečí je chytrá hranice.'
        },
      ],
    },
    {
      id: 10, title: 'Tlak na heslo', emoji: '🔐', topic: 'Zneužívání digitálního prostředí ve vztahu',
      nodes: [
        {
          id: 'start',
          text: 'Jsi ve vztahu dva měsíce. Tvůj partner říká: „Kdyby ti na mně opravdu záleželo, dáš mi heslo, abych si mohl přečíst tvoje zprávy.“ Cítíš se nepříjemně. Co uděláš?',
          choices: ['🔑 Dej mu heslo – nemáš co skrývat', '🤥 Dej falešné heslo, aby hádka přestala', '🗣️ Klidně vysvětli, že zdravé vztahy nepotřebují sdílení hesel']
        },
        {
          id: 'end_a',
          title: 'Kontrola začíná',
          text: 'Partner čte všechny tvé zprávy a z tvých účtů píše tvým přátelům. Obviňuje tě z věcí, které si vyložil špatně. Kontrola se stupňuje.',
          lesson: 'Partner vyžadující hesla je formou zneužívání digitálního prostředí ve vztahu. Žádný zdravý vztah to nevyžaduje. Pokud se to stane tobě, promluv si s dospělou osobou, které věříš.'
        },
        {
          id: 'mid_b',
          text: 'Tvůj partner přijde na to, že heslo je falešné, a hodně se rozzlobí – obviňuje tě ze lhaní. Tlak se zdvojnásobí a požaduje to skutečné.',
          choices: ['🔑 Ustup a sdílej skutečné heslo', '🚪 Ukonči vztah a řekni dospělé osobě, které věříš, o tom tlaku']
        },
        {
          id: 'end_b1',
          title: 'V pasti',
          text: 'Jakmile mají přístup, používají ho ke kontrole toho, s kým mluvíš. Tenhle vzorec kontrolujícího chování se stále stupňuje.',
          lesson: 'Podvolit se digitální kontrole problém zřídka ukončí – obvykle se kontrolující chování v čase ještě vystupňuje.'
        },
        {
          id: 'end_b2',
          title: 'Osvobození',
          text: 'Opustit kontrolující vztah je těžké, ale správné. Důvěryhodná dospělá osoba potvrdí, že se jedná o zneužívání digitálního prostředí, a pomůže ti pochopit, jak vypadají zdravé hranice ve vztahu.',
          lesson: 'Rozpoznat kontrolující chování a odejít od něj – i ve vztahu – vyžaduje skutečnou odvahu. Pro tvou bezpečnost je to vždy správné rozhodnutí.'
        },
        {
          id: 'mid_c',
          text: 'Tvůj partner reaguje špatně a říká, že ti na něm očividně nezáleží. Držíš si svou hranici, ale tlačí dál a tlak se stupňuje.',
          choices: ['💪 Drž si svou hranici a promluv si s dospělou osobou, které věříš, o tom tlaku', '😔 Nakonec sdílej heslo, jen aby byl klid']
        },
        {
          id: 'end_c1',
          title: 'Zdravé hranice',
          text: 'Důvěryhodná dospělá osoba potvrdí, že vyžadování hesel je kontrola, ne láska. S její podporou uděláš o vztahu jasné rozhodnutí podle sebe.',
          lesson: 'Dobrý partner respektuje tvé soukromí. Vyžadování hesel je varovný signál kontrolujícího vztahu. Zasloužíš si vztah postavený na důvěře, ne na dohledu.'
        },
        {
          id: 'end_c2',
          title: 'Dočasný klid',
          text: 'Krátkodobě pocítíš úlevu, ale kontrolující chování pokračuje – teď to od tebe budou očekávat i dál. Požadavek na větší přístup roste.',
          lesson: 'Podvolit se tlaku na heslo problém kontroly nevyřeší. Vytváří precedens. Kontrolující chování je třeba řešit, ne tolerovat.'
        },
      ],
    },
  ],
}
