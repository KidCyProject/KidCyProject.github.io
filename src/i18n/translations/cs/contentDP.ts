// ---------------------------------------------------------------------------
// Data Privacy (DP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Data Privacy module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDP = {
  aim:
    'Poskytnout základní znalosti o tom, co je soukromí dat, a o zásadách ochrany soukromých údajů v digitálním prostředí.',
  objectives: [
    'Představit, jaké typy dat se objevují při sdílení obsahu v digitálním prostředí.',
    'Zdůraznit důležitost soukromí dat v digitálním prostředí.',
    'Představit zásady ochrany soukromí dat v digitálním prostředí.',
    'Rozvinout porozumění tomu, jak se digitální data používají a jak je lze v případě potřeby smazat.',
  ],
  outcomes: [
    'Umím popsat, jaké typy dat se objevují při sdílení obsahu v digitálním prostředí.',
    'Umím vysvětlit, proč je soukromí dat v digitálním prostředí důležité.',
    'Umím v zadaných situacích předvést zásady ochrany soukromí dat v digitálním prostředí a zdůvodnit svoje rozhodnutí.',
    'Umím v zadaných situacích rozpoznat způsoby sdílení dat, které vedou k narušení soukromí.',
    'Umím vysvětlit, jak se digitální data používají a jak je lze v případě potřeby smazat.',
    'Umím v zadaných situacích rozpoznat příklady soukromých údajů.',
  ],
  parts: [
    {
      goal: 'Pomoct žákům pochopit, co jsou osobní údaje, rozpoznat různé typy citlivých informací a uvědomit si, proč na jejich ochraně záleží.',
      bundle: {
        filename: 'Soukromí dat - balíček - Část 1',
      },
      included: {
        materials: [
          {
            // ID: 4.1.2
            kind: 'Třídicí kartičky',
            name: 'Soukromé, nebo veřejné',
            filename: 'Třídicí kartičky - Soukromé, nebo veřejné',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.1.3
            kind: 'Pracovní list',
            name: 'Zamyšlení: Veřejné versus soukromé údaje',
            filename: 'Pracovní list - Zamyšlení - Veřejné versus soukromé údaje',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Co jsou osobní údaje?',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.1.1
        title: 'Co jsou soukromé údaje?',
        supportText:
          'Použijte video k představení pojmu soukromé údaje a k rozproudění diskuse o tom, jaké informace žáci každý den sdílejí. Zastavte se a zeptejte se jich, co považují za soukromé.',
        downloads: {
          video: {
            filename: 'Co jsou soukromé údaje',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Co jsou soukromé údaje - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal: 'Pomoct žákům pochopit, jak a proč se data online sdílejí, proč je důležitý souhlas a jak se rozhodovat s rozmyslem, než osobní údaje sdělí.',
      bundle: {
        filename: 'Soukromí dat - balíček - Část 2',
      },
      included: {
        materials: [
          {
            // ID: 4.2.1
            kind: 'Obrázek',
            name: 'Sdílení online: Bezpečné versus riskantní',
            filename: 'Obrázek - Sdílení online - Bezpečné versus riskantní',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.2.2
            kind: 'Kartičky se situacemi',
            name: 'Hraní rolí',
            filename: 'Kartičky se situacemi - Hraní rolí',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.2.3
            kind: 'Pracovní list',
            name: 'Sdílet, nebo nesdílet',
            filename: 'Pracovní list - Sdílet, nebo nesdílet',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Situace při sdílení dat',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
    },
    {
      goal: 'Pomoct žákům zjistit, co je digitální stopa, pochopit, jak běžná online činnost zanechává trvalé stopy, a zamyslet se nad dlouhodobým dopadem jejich chování online.',
      bundle: {
        filename: 'Soukromí dat - balíček - Část 3',
      },
      included: {
        materials: [
          {
            // ID: 4.3.2
            kind: 'Obrázek',
            name: 'Komiks: Den v Samově online životě',
            filename: 'Obrázek - Komiks - Den v Samově online životě',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.3.3
            kind: 'Pracovní list',
            name: 'Vystopuj Samovu digitální stopu',
            filename: 'Pracovní list - Vystopuj Samovu digitální stopu',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.3.4
            kind: 'Schéma',
            name: 'Herní plán: Hodnota soukromí',
            filename: 'Schéma - Herní plán - Hodnota soukromí',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.3.5
            kind: 'Herní sada',
            name: 'Hodnota soukromí',
            filename: 'Herní sada - Hodnota soukromí',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Co je digitální stopa?',
          },
          {
            title: 'Digitální stopy',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.3.1
        title: 'Co je digitální stopa?',
        supportText:
          'Použijte video, aby si žáci dokázali představit stopu dat, kterou po sobě online nechávají. Nechte je zamyslet se, po kterých jejich nedávných činnostech nějaká stopa zůstala.',
        downloads: {
          video: {
            filename: 'Co je digitální stopa',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Co je digitální stopa - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal: 'Pomoct žákům osvojit si praktické postupy, jak si digitální stopu projít a spravovat, včetně toho, jak upravit nastavení soukromí a odstranit nežádoucí údaje.',
      bundle: {
        filename: 'Soukromí dat - balíček - Část 4',
      },
      included: {
        materials: [
          {
            // ID: 4.4.1
            kind: 'Obrázek',
            name: 'Příklad základního nastavení',
            filename: 'Obrázek - Příklad základního nastavení',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.4.2a
            kind: 'Pracovní list',
            name: 'Oprav tenhle profil!',
            filename: 'Pracovní list - Oprav tenhle profil',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.4.2b
            kind: 'Pracovní list',
            name: 'Oprav tenhle profil!',
            filename: 'Pracovní list - Oprav tenhle profil',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.4.3
            kind: 'Pracovní list',
            name: 'Tipy na soukromí pro děti',
            filename: 'Pracovní list - Tipy na soukromí pro děti',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.4.4
            kind: 'Pracovní list',
            name: 'Předloha plakátu',
            filename: 'Pracovní list - Předloha plakátu',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 4.4.6
            kind: 'Pracovní list',
            name: 'Hlavolam: Využití digitálních stop „Členové týmu Souboje mozků“',
            filename: 'Pracovní list - Hlavolam - Využití digitálních stop - Členové týmu Souboje mozků',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Jak chránit svoje osobní údaje online',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.4.5
        title: 'Jak chránit svoje osobní údaje online',
        supportText:
          'Použijte video k představení pojmu osobní údaje a k rozproudění diskuse o tom, jaké informace žáci každý den sdílejí.',
        downloads: {
          video: {
            filename: 'Jak chránit svoje osobní údaje online',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Jak chránit svoje osobní údaje online - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
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

export const challengeDP = {
  title: 'Třídění digitální stopy',
  subtitle: 'Roztřiďte každou činnost do správné kategorie. Zjistěte, po kterých vašich každodenních činnostech zůstává online stopa!',
  howItWorks: 'Jak to funguje',
  instruction: 'Přetáhněte každou kartičku s činností do zóny, kam patří. Na mobilu kartičku vyberte klepnutím a potom klepněte na zónu.',
  tip: 'Zamyslete se, jestli je u té činnosti ve hře internet, aplikace nebo webová stránka. Pokud ano, nejspíš po sobě zanechává digitální stopu!',
  tipLabel: 'Tip',
  tryAgain: 'Zkusit znovu',
  activitiesToSort: 'Činnosti k roztřídění',
  leavesFootprint: 'Zanechává stopu',
  dragOnlineHere: 'Sem přetáhněte online činnosti',
  noFootprint: 'Žádná stopa',
  dragOfflineHere: 'Sem přetáhněte offline činnosti',
  correct: 'Správně! 🎯',
  tryOtherZone: 'Ne tak docela — zkuste jinou zónu!',
  winTitle: 'Skvěle! Roztřídili jste je všechny!',
  winMessage: 'Teď víte, po kterých činnostech zůstává digitální stopa. Pamatujte: každé kliknutí, hledání i příspěvek po sobě online nechává stopu!',
  playAgain: 'Hrát znovu',
  activities: [
    {
      text: 'Zveřejnění fotky na Instagramu',
      category: 'footprint',
      emoji: '📸',
      explanation: 'Fotky, které sdílíte online, zůstávají na serverech a může je najít kdokoli — i po letech!',
    },
    {
      text: 'Čtení papírové knihy doma',
      category: 'no-footprint',
      emoji: '📖',
      explanation: 'Bez připojení k internetu žádná digitální stopa nevzniká.',
    },
    {
      text: 'Vyhledávání odpovědí na Googlu',
      category: 'footprint',
      emoji: '🔍',
      explanation: 'Vyhledávače si zaznamenávají, co hledáte, a podle toho vám pak zobrazují výsledky na míru.',
    },
    {
      text: 'Hraní fotbalu venku',
      category: 'no-footprint',
      emoji: '⚽',
      explanation: 'Činnosti venku bez telefonu nebo aplikace žádný digitální záznam nezanechávají.',
    },
    {
      text: 'Odesílání zprávy na WhatsApp',
      category: 'footprint',
      emoji: '💬',
      explanation: 'Zprávy se ukládají na servery a vzniká tak trvalý záznam vašich konverzací.',
    },
    {
      text: 'Kreslení obrázku pastelkami',
      category: 'no-footprint',
      emoji: '🖍️',
      explanation: 'Tvoření s papírem a pastelkami žádná online data nevytváří.',
    },
    {
      text: 'Vytvoření účtu na herní webové stránce',
      category: 'footprint',
      emoji: '🎮',
      explanation: 'Při registraci se uloží vaše jméno, e-mail i každá činnost, kterou na webu uděláte.',
    },
    {
      text: 'Jízda na kole po okolí',
      category: 'no-footprint',
      emoji: '🚲',
      explanation: 'Pokud nepoužíváte aplikaci na sledování trasy, je jízda na kole čistě offline činnost.',
    },
    {
      text: 'Sledování videí na YouTube',
      category: 'footprint',
      emoji: '▶️',
      explanation: 'YouTube sleduje každé video, které si pustíte, a podle toho vám doporučuje další obsah.',
    },
    {
      text: 'Psaní do papírového deníku',
      category: 'no-footprint',
      emoji: '📓',
      explanation: 'Papírový deník nemá připojení k internetu — vaše myšlenky zůstanou opravdu soukromé.',
    },
    {
      text: 'Lajkování TikTok videa kamaráda',
      category: 'footprint',
      emoji: '❤️',
      explanation: 'Každý lajk se zaznamená a spoluutváří váš online profil i doporučení, která dostáváte.',
    },
    {
      text: 'Hraní deskové hry s rodinou',
      category: 'no-footprint',
      emoji: '🎲',
      explanation: 'Deskové hry jsou zábava offline — nevznikají u nich žádná data a nikde se nic neukládá.',
    },
    {
      text: 'Vyplňování online kvízu',
      category: 'footprint',
      emoji: '📝',
      explanation: 'Weby si ukládají každou odpověď, kterou zadáte, a můžou ji předat dál.',
    },
    {
      text: 'Povídání si s přáteli ve škole',
      category: 'no-footprint',
      emoji: '🗣️',
      explanation: 'Rozhovor tváří v tvář nezanechá vůbec žádnou digitální stopu.',
    },
    {
      text: 'Zanechání komentáře na blogu',
      category: 'footprint',
      emoji: '💻',
      explanation: 'Komentáře jsou veřejné, spojené s vaším jménem a na webu zůstanou navždy.',
    },
  ],
}
