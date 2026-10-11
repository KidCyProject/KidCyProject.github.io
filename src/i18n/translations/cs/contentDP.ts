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
  subtitle: 'Roztřiďte každou činnost do správné zóny a pak uklidíte jeden profil. Zjistěte, jaké stopy po sobě online zanecháváte — i ty, které nevidíte!',
  howItWorks: 'Jak to funguje',
  instruction: 'Přetáhněte každou kartu s činností do zóny, kam patří. Na mobilu nebo klávesnicí kartu vyberte a pod ní zvolte zónu. Pozor: některé činnosti vypadají offline, ale stopu zanechávají. Potom uklidíte profil, který sdílí příliš mnoho: u každé jeho části zvolíte, co s ní.',
  tip: 'Ptejte se: Zanechávám tu stopu schválně, nebo se potichu zaznamenává na pozadí? Nebo se online nezaznamenává vůbec nic?',
  tipLabel: 'Tip',
  tryAgain: 'Zkusit znovu',
  activitiesToSort: 'Činnosti k roztřídění',
  dragHere: 'Přetáhněte činnosti sem',
  zoneAriaTemplate: 'Zóna: {zone}',
  chooseZoneLabel: 'Kam tato činnost patří?',
  correctInTemplate: 'Správně! → {zone}',
  zones: {
    purpose: {
      icon: '✍️',
      title: 'Schválně (aktivní stopa)',
      hint: 'Sami zveřejníte, pošlete, olajkujete nebo se zaregistrujete',
    },
    background: { icon: '🕵️', title: 'V pozadí (pasivní stopa)', hint: 'Weby a aplikace to potichu zaznamenávají' },
    none: { icon: '🚫', title: 'Žádná digitální stopa', hint: 'Nic se online nezaznamenává' },
  },
  cheatTitle: 'Tahák ke stopám',
  cheatSubtitle: 'Dva druhy stop a jak je zmenšit',
  cheatItems: [
    {
      icon: '✍️',
      text: 'Aktivní stopa: zanecháváte ji schválně. Zveřejnění, komentář, lajk, zpráva, registrace.',
    },
    {
      icon: '🕵️',
      text: 'Pasivní stopa: shromažďuje se v pozadí. Navštívené stránky, hledání, sledovaná videa, doba na stránce, zařízení a poloha.',
    },
    {
      icon: '🧹',
      text: 'Jak ji zmenšit: sdílejte méně, po práci se odhlaste, místo „veřejné“ zvolte „jen přátelé“ a když si nejste jistí nastavením, zeptejte se dospělého.',
    },
  ],
  stage1Label: 'Krok 1 ze 2: Roztřiďte stopy',
  stage2Label: 'Krok 2 ze 2: Uklidíte profil',
  cleanupTitle: 'Uklidíme profil Emy',
  cleanupIntro: 'Emin profil sdílí příliš mnoho. U každé části zvolte, co by Ema měla udělat.',
  profileVisibleLabel: 'Vidí to',
  profileEveryone: 'Všichni',
  actions: { delete: '🗑️ Smazat nebo vypnout', hide: '🙈 Skrýt (jen přátelé)', change: '✏️ Upravit', keep: '✅ Nechat' },
  cleanupProgressTemplate: 'Část {n} z {total}',
  cleanupScoreLabel: 'Správně',
  chooseActionLabel: 'Co s touto částí profilu?',
  cleanupCorrect: 'Správně!',
  cleanupAlso: 'I to je dobrá volba!',
  cleanupWrong: 'Ne tak docela.',
  cleanupBestTemplate: 'Nejlepší volba: {action}',
  nextButton: 'Další →',
  toCleanupButton: 'Pokračovat krokem 2 →',
  resultsButton: 'Zobrazit výsledek →',
  stage1DoneTitle: 'Stopy roztříděny!',
  firstTryTemplate: '{n} z {total} napoprvé',
  winGreat: 'Poznáte každý druh stopy. Skvělá práce!',
  winGood: 'Dobrá práce! Podívejte se níže na to, co se nepovedlo.',
  winPractise: 'Cvičte dál. Než kliknete, zeptejte se: Zanechávám tu stopu schválně? Nebo se zaznamenává potichu?',
  reviewTitle: 'Zapamatujte si',
  profile: [
    {
      id: 1,
      icon: '📛',
      label: 'Jméno profilu',
      value: 'Ema Nováková',
      explanation: 'Celé skutečné jméno cizím lidem usnadní, aby vás našli. Změňte ho na přezdívku, která neprozrazuje vaše pravé jméno.',
    },
    {
      id: 2,
      icon: '🎂',
      label: 'Narozeniny',
      value: '12. 5. 2013',
      explanation: 'Podle data narození lze hádat hesla a vydávat se za vás. Skryjte ho, aby ho viděli jen přátelé, nebo ho odstraňte.',
    },
    {
      id: 3,
      icon: '📸',
      label: 'Fotka',
      value: 'Ema před svým domem. Na dveřích je vidět číslo domu.',
      explanation: 'Fotka může v pozadí ukázat soukromé údaje, třeba číslo domu. Smažte ji, nebo číslo před sdílením rozmažte.',
    },
    {
      id: 4,
      icon: '🏫',
      label: 'Škola',
      value: 'Základní škola Slunečná',
      explanation: 'Název školy cizím lidem prozradí, kde vás každý den najdou. Skryjte ho před veřejností, nebo ho odstraňte.',
    },
    {
      id: 5,
      icon: '⚽',
      label: 'O mně',
      value: 'Miluju fotbal a kreslení!',
      explanation: 'Koníčky můžete sdílet. Neprozrazují, kdo jste ani kde bydlíte. Nechte to tak.',
    },
    {
      id: 6,
      icon: '🏠',
      label: 'Adresa bydliště',
      value: 'Lipová 14',
      explanation: 'Adresu bydliště na profilu nikdo nepotřebuje. Smažte ji. Nikdy ji nesdílejte online.',
    },
    {
      id: 7,
      icon: '💢',
      label: 'Starý komentář',
      value: '„Ty jsi tak blbá!“ (napsáno spolužačce, když se Ema zlobila)',
      explanation: 'Nelaskavá slova na internetu zůstávají a mohou někoho zranit. Komentář smažte a pokud to jde, omluvte se osobně.',
    },
    {
      id: 8,
      icon: '📱',
      label: 'Telefonní číslo',
      value: '555-0123',
      explanation: 'Podle telefonního čísla vás mohou kontaktovat cizí lidé. Smažte ho z profilu. Kamarádům ho dáte napřímo.',
    },
    {
      id: 9,
      icon: '🐶',
      label: 'Fotka',
      value: 'Emin pes na zahradě',
      explanation: 'Fotka zvířete, na které není v pozadí nic soukromého, je v pořádku. Jen jeho jméno nepoužívejte v heslech.',
    },
    {
      id: 10,
      icon: '📍',
      label: 'Označení polohy',
      value: 'Každý příspěvek přesně ukazuje, kde Ema právě je',
      explanation: 'Poloha naživo cizím lidem prozradí, kde jste. Vypněte ji. Kde jste byli, můžete případně sdílet až později.',
    },
  ],
  tryOtherZone: 'Ne tak docela — zkuste jinou zónu!',
  winTitle: 'Hotovo!',
  playAgain: 'Hrát znovu',
  activities: [
    {
      id: 1,
      text: 'Zveřejnění fotky na Instagramu',
      emoji: '📸',
      explanation: 'Fotky, které sdílíte online, zůstávají na serverech a může je najít kdokoli — i po letech!',
    },
    {
      id: 2,
      text: 'Čtení papírové knihy doma',
      emoji: '📖',
      explanation: 'Bez připojení k internetu žádná digitální stopa nevzniká.',
    },
    {
      id: 3,
      text: 'Vyhledávání odpovědí na Googlu',
      emoji: '🔍',
      explanation: 'Hledání napíšete sami, ale vyhledávač si potichu zapisuje, co hledáte, a podle toho vám ukazuje přizpůsobené výsledky.',
    },
    {
      id: 4,
      text: 'Hraní fotbalu venku',
      emoji: '⚽',
      explanation: 'Činnosti venku bez telefonu nebo aplikace žádný digitální záznam nezanechávají.',
    },
    {
      id: 5,
      text: 'Odesílání zprávy na WhatsApp',
      emoji: '💬',
      explanation: 'Zprávy se ukládají na servery a vzniká tak trvalý záznam vašich konverzací.',
    },
    {
      id: 6,
      text: 'Kreslení obrázku pastelkami',
      emoji: '🖍️',
      explanation: 'Tvoření s papírem a pastelkami žádná online data nevytváří.',
    },
    {
      id: 7,
      text: 'Vytvoření účtu na herní webové stránce',
      emoji: '🎮',
      explanation: 'Při registraci se uloží vaše jméno, e-mail i každá činnost, kterou na webu uděláte.',
    },
    {
      id: 8,
      text: 'Jízda na kole po okolí',
      emoji: '🚲',
      explanation: 'Pokud nepoužíváte aplikaci na sledování trasy, je jízda na kole čistě offline činnost.',
    },
    {
      id: 9,
      text: 'Sledování videí na YouTube',
      emoji: '▶️',
      explanation: 'Jen se díváte, ale YouTube si potichu zapisuje každé video, které sledujete, a podle toho doporučuje další.',
    },
    {
      id: 10,
      text: 'Psaní do papírového deníku',
      emoji: '📓',
      explanation: 'Papírový deník nemá připojení k internetu — vaše myšlenky zůstanou opravdu soukromé.',
    },
    {
      id: 11,
      text: 'Lajkování TikTok videa kamaráda',
      emoji: '❤️',
      explanation: 'Každý lajk se zaznamená a spoluutváří váš online profil i doporučení, která dostáváte.',
    },
    {
      id: 12,
      text: 'Hraní deskové hry s rodinou',
      emoji: '🎲',
      explanation: 'Deskové hry jsou zábava offline — nevznikají u nich žádná data a nikde se nic neukládá.',
    },
    {
      id: 13,
      text: 'Vyplňování online kvízu',
      emoji: '📝',
      explanation: 'Weby si ukládají každou odpověď, kterou zadáte, a můžou ji předat dál.',
    },
    {
      id: 14,
      text: 'Povídání si s přáteli ve škole',
      emoji: '🗣️',
      explanation: 'Rozhovor tváří v tvář nezanechá vůbec žádnou digitální stopu.',
    },
    {
      id: 15,
      text: 'Zanechání komentáře na blogu',
      emoji: '💻',
      explanation: 'Komentáře jsou veřejné, spojené s vaším jménem a na webu zůstanou navždy.',
    },
    {
      id: 16,
      text: 'Čtení zpravodajského webu bez přihlášení',
      emoji: '🌐',
      explanation: 'Web potichu zaznamenává, které stránky otevřete a jak dlouho zůstanete, i když nic nezveřejníte.',
    },
    {
      id: 17,
      text: 'Připojení telefonu k veřejné Wi-Fi v kavárně',
      emoji: '📶',
      explanation: 'Wi-Fi síť zaznamená, že se vaše zařízení připojilo, a může si ukládat, jaké stránky navštěvujete.',
    },
    {
      id: 18,
      text: 'Placení oběda ve škole kartou',
      emoji: '💳',
      explanation: 'Vypadá to offline, ale platba se uloží digitálně: co jste koupili, kdy a kde.',
    },
    {
      id: 19,
      text: 'Cesta do školy se zapnutou polohou v telefonu',
      emoji: '📍',
      explanation: 'Telefon si může celou dobu zapisovat, kde jste, i když nic nezveřejníte.',
    },
    {
      id: 20,
      text: 'Nošení chytrých hodinek, které počítají kroky',
      emoji: '⌚',
      explanation: 'Chytré hodinky posílají vaše kroky a někdy i tep do aplikace. To je tichá stopa.',
    },
    {
      id: 21,
      text: 'Prohlížení tenisek online a pak reklamy na tenisky všude',
      emoji: '👟',
      explanation: 'Weby zaznamenávají, na co se díváte, a podle toho vám ukazují reklamy. Nic jste nezveřejnili, ale sledovaly vás.',
    },
    {
      id: 22,
      text: 'Poslání e-mailu učiteli',
      emoji: '✉️',
      explanation: 'Napíšete ho a odešlete schválně. E-mail zůstane ve vaší schránce i v schránce učitele.',
    },
    {
      id: 23,
      text: 'Nahrání domácího úkolu na školní platformu',
      emoji: '📤',
      explanation: 'Děláte to schválně a platforma si uloží váš soubor, jméno a čas.',
    },
    {
      id: 24,
      text: 'Sdílení odkazu na vtipné video v třídním chatu',
      emoji: '🔗',
      explanation: 'Sdílení je vaše vědomá volba. Zpráva zůstane v chatu a ostatní ji mohou přeposlat.',
    },
  ],
}
