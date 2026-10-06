// ---------------------------------------------------------------------------
// Authentication (AT) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Authentication module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentAT = {
  aim:
    'Poskytnout základní znalosti o principech ověřování totožnosti a správy identity pro ochranu osobního digitálního majetku.',
  objectives: [
    'Zdůraznit důležitost bezpečné správy identity.',
    'Představit pojem ověřování totožnosti a jeho jednotlivé faktory.',
    'Rozvinout porozumění digitálnímu majetku a povědomí o řízení přístupu.',
    'Rozvinout znalosti a dovednosti pro vytváření bezpečných uživatelských jmen a hesel podle doporučení a osvědčených postupů.',
    'Vybudovat dovednosti pro bezpečnou správu hesel.',
  ],
  outcomes: [
    'Umím určit svůj osobní digitální majetek a vysvětlit, jaká rizika mu hrozí ve fyzickém i v digitálním prostředí.',
    'Umím vysvětlit, co je ověřování totožnosti, proč je důležité, a vyjmenovat různé typy ověřování.',
    'Umím rozlišit slabá a silná uživatelská jména a hesla.',
    'Umím ukázat, jak pomocí správce hesel ukládat hesla, a zdůvodnit svoje rozhodnutí.',
  ],
  parts: [
    {
      goal: 'Pomoct žákům vytvořit si silná hesla, která si zapamatují, a pochopit, proč je riskantní používat jedno heslo víckrát.',
      bundle: {
        filename: 'Ověřování totožnosti - balíček - Část 1',
      },
      included: {
        materials: [
          {
            // ID: 3.1.1
            kind: 'Obrázek',
            name: 'Digitální identita',
            filename: 'Obrázek - Digitální identita',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.1.3
            kind: 'Obrázky',
            name: 'Příklady osobního digitálního majetku',
            filename: 'Obrázky - Příklady osobního digitálního majetku',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.1.4
            kind: 'Pracovní list',
            name: 'Co by se stalo, kdyby…?',
            filename: 'Pracovní list - Co by se stalo, kdyby',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.1.5
            kind: 'Pracovní list',
            name: 'Můj digitální majetek',
            filename: 'Pracovní list - Můj digitální majetek',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Co je digitální identita?',
          },
          {
            title: 'Porozumění digitálnímu majetku',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        title: 'Co je digitální identita?',
        supportText:
          'Použijte video, aby žáci pochopili, že jejich digitální identitu tvoří informace a chování, které online sdílejí. Zastavte se a zeptejte se, které části své digitální identity můžou podle sebe ovlivnit.',
        downloads: {
          video: {
            filename: 'Co je digitální identita',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Co je digitální identita - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal:
        'Pomoct žákům pochopit, co je ověřování totožnosti, proč je důležité a jak pomáhá chránit jejich digitální identitu a digitální majetek tím, že prověřuje, kdo o přístup žádá.',
      bundle: {
        filename: 'Ověřování totožnosti - balíček - Část 2',
      },
      included: {
        materials: [
          {
            // ID: 3.2.1
            kind: 'Obrázky',
            name: 'Příklady ověřování totožnosti ze skutečného světa',
            filename: 'Obrázky - Příklady ověřování totožnosti ze skutečného světa',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.2.3
            kind: 'Obrázek',
            name: 'Přihlášení do digitálního systému',
            filename: 'Obrázek - Přihlášení do digitálního systému',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.2.4
            kind: 'Pracovní list',
            name: 'Ověřování totožnosti v běžném životě',
            filename: 'Pracovní list - Ověřování totožnosti v běžném životě',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Ověřování totožnosti',
          },
          {
            title: 'Porozumění typům ověřování',
          },
          {
            title: 'Uplatnění ověřování na digitální majetek',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.2.2
        title: 'Co je ověřování totožnosti?',
        supportText:
          'Použijte video k představení ověřování totožnosti jako každodenního mechanismu, který chrání digitální účty žáků. Zastavte se a zeptejte se, jak dnes prokazují svoji totožnost v aplikacích, které používají nejčastěji.',
        downloads: {
          video: {
            filename: 'Co je ověřování totožnosti',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Co je ověřování totožnosti - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal:
        'Pomoct žákům pochopit rozdíl mezi slabými a silnými uživatelskými jmény a hesly, rozpoznat časté chyby u hesel a naučit se jednoduchá pravidla pro vytváření bezpečných hesel, která chrání jejich digitální účty a majetek.',
      bundle: {
        filename: 'Ověřování totožnosti - balíček - Část 3',
       },
      included: {
        materials: [
          {
            // ID: 3.3.2
            kind: 'Obrázek',
            name: 'Příklady slabých hesel',
            filename: 'Obrázek - Příklady slabých hesel',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.3.3
            kind: 'Obrázek',
            name: 'Příklady silných hesel',
            filename: 'Obrázek - Příklady silných hesel',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.3.4
            kind: 'Kartičky',
            name: 'Vytvoř silné heslo',
            filename: 'Kartičky - Vytvoř silné heslo',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.3.5
            kind: 'Obrázek',
            name: 'Zkontroluj si heslo',
            filename: 'Obrázek - Zkontroluj si heslo',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.3.6
            kind: 'Pracovní list',
            name: 'Moje pravidla pro silné heslo',
            filename: 'Pracovní list - Moje pravidla pro silné heslo',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Hesla',
          },
          {
            title: 'Silná versus slabá hesla',
          },
          {
            title: 'Bezpečné vytváření silných hesel',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.3.1
        title: 'Silná a slabá hesla',
        supportText:
          'Použijte video, abyste žákům ukázali rozdíl mezi hesly, která účty chrání, a hesly, která je vystavují riziku. Vyzvěte je, ať se zamyslí, jestli jejich vlastní hesla kritéria silného hesla splňují.',
        downloads: {
          video: {
            filename: 'Silná a slabá hesla',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Silná a slabá hesla - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal:
        'Pomoct žákům pochopit, co je dvoufaktorové ověření a proč je správa mnoha hesel náročná, představit pojem správce hesel a vysvětlit, jak správci hesel pomáhají chránit digitální identitu a digitální majetek, když se používají odpovědně a s podporou dospělého, kterému žáci věří.',
      bundle: {
        filename: 'Ověřování totožnosti - balíček - Část 4',
       },
      included: {
        materials: [
          {
            // ID: 3.4.1
            kind: 'Obrázek',
            name: 'Dva různé typy ověřování použité společně',
            filename: 'Obrázek - Dva různé typy ověřování použité společně',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.4.2
            kind: 'Schéma',
            name: 'Sada mincí',
            filename: 'Schéma - Sada mincí',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.4.3
            kind: 'Schéma',
            name: 'Sada skupin',
            filename: 'Schéma - Sada skupin',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.4.4
            kind: 'Schéma',
            name: 'PIN karty',
            filename: 'Schéma - PIN karty',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.4.6
            kind: 'Obrázek',
            name: 'Jak používat správce hesel',
            filename: 'Obrázek - Jak používat správce hesel',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.4.7
            kind: 'Obrázek',
            name: 'Správce hesel',
            filename: 'Obrázek - Správce hesel',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.4.8
            kind: 'Obrázek',
            name: 'Kroky ukládání hesel',
            filename: 'Obrázek - Kroky ukládání hesel',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.4.9
            kind: 'Pracovní list',
            name: 'Problémy s hesly a jejich řešení',
            filename: 'Pracovní list - Problémy s hesly a jejich řešení',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Správci hesel',
          },
          {
            title: 'Správci hesel',
          },
          {
            title: 'Bezpečné používání správců hesel',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.4.5
        title: 'Co je správce hesel?',
        supportText:
          'Použijte video k představení správců hesel jako praktického řešení, jak vytvářet a ukládat silná a jedinečná hesla ke každému účtu. Zastavte se a zeptejte se žáků, jestli o správci hesel už slyšeli nebo ho někdy používali.',
        downloads: {
          video: {
            filename: 'Co je správce hesel',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Co je správce hesel - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal:
        'Pomoct žákům pochopit, jak jejich rozhodnutí a chování ovlivňují bezpečnost jejich digitální identity a jak odpovědné jednání pomáhá chránit jejich digitální majetek, je samotné i ostatní v digitálním prostředí.',
      bundle: {
        filename: 'Ověřování totožnosti - balíček - Část 5',
       },
      included: {
        materials: [
          {
            // ID: 3.5.1
            kind: 'Obrázek',
            name: 'Bezpečné a nebezpečné chování online',
            filename: 'Obrázek - Bezpečné a nebezpečné chování online',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.5.3
            kind: 'Pracovní list',
            name: 'Situace k digitální identitě a ověřování totožnosti',
            filename: 'Pracovní list - Situace k digitální identitě a ověřování totožnosti',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 3.5.4
            kind: 'Pracovní list',
            name: 'Jak chráním svoji digitální identitu',
            filename: 'Pracovní list - Jak chráním svoji digitální identitu',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Ochrana digitální identity',
          },
          {
            title: 'Digitální identita a ověřování totožnosti',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.5.2
        title: 'Jak chránit svoji digitální identitu',
        supportText:
          'Použijte video k shrnutí postupů, které se žáci naučili pro ochranu své digitální identity. Vyzvěte je, ať si po zhlédnutí určí jeden konkrétní návyk, který změní nebo si zavedou.',
        downloads: {
          video: {
            filename: 'Jak chránit svoji digitální identitu',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Jak chránit svoji digitální identitu - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
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
      moduleId: 'ap',
      brand: 'AP',
      href: '/learning-hub/attacker-perspective/content',
      imageSrc: '/images/learning-hub/02_attacker-perspective.webp',
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

export const challengeAT = {
  title: 'Laboratoř hesel',
  subtitle:
    'Budujte silnější heslo kolo po kole. Každé kolo přidá do vašeho receptu na heslo novou přísadu!',
  howItWorks: 'Jak to funguje',
  instruction:
    'Každé kolo přidá nový požadavek na heslo. Splňte všechna kritéria daného kola a postupte dál — a sledujte, jak je vaše heslo čím dál těžší prolomit!',
  tipLabel: 'Tip',
  tip: 'Podívejte se do panelu vpravo, kde sledujete postup v kolech a najdete tipy k heslům!',
  yourPassword: 'Vaše heslo',
  placeholder: 'Sem napište heslo…',
  passwordInputAriaLabel: 'Zadání hesla',
  showPassword: 'Zobrazit heslo',
  strengthAriaLabel: 'Síla hesla',
  roundBadgeTemplate: 'Kolo {n} z {total}',
  criteriaTitle: 'Recept na heslo — Kolo {n}:',
  criterionLength: 'Délka > 10 znaků',
  criterionNumber: 'Obsahuje číslo (0-9)',
  criterionSymbol: 'Obsahuje symbol (! @ # $ % ^ & * ?)',
  criterionUppercase: 'Obsahuje VELKÉ písmeno',
  criterionLowercase: 'Obsahuje malé písmeno',
  strengthWeak: 'Slabé',
  strengthOkay: 'Skoro tam',
  strengthStrong: 'Silné ✓',
  feedbackDefault: 'Začněte psát a uvidíte, jak je vaše heslo silné!',
  feedbackAllMet: '🎉 Všechny požadavky splněné! Pokračujte tlačítkem Další kolo.',
  almostThereTemplate: 'Skoro tam! Zkuste {hint}.',
  hints: {
    length: 'prodloužit ho (10+ znaků)',
    number: 'přidat číslo (0-9)',
    symbol: 'přidat symbol jako ! @ # $ %',
    upper: 'přidat VELKÉ písmeno',
    lower: 'přidat malé písmeno',
  },
  keepGoing: 'Pokračujte!',
  nextRound: 'Další kolo →',
  finish: 'Dokončit! 🏆',
  nextRoundAriaLabel: 'Přejít na další kolo',
  tryAgain: 'Zkusit znovu',
  tryAgainAriaLabel: 'Vymazat heslo a začít znovu',
  completionTitle: 'Mistr hesel!',
  completionText: 'Dokončili jste všechna 4 kola a naučili se vytvářet hesla, která nejde prolomit!',
  completionRounds: '4 / 4 kola dokončena',
  completionTips: 'Silná hesla chrání váš digitální život. Využijte tyhle dovednosti všude, kde si zakládáte účet!',
  startOver: 'Začít znovu',
  roundProgressTitle: 'Pokrok v kolech',
  roundProgressDesc: 'Dokončete všechna 4 kola a hesla si osvojíte',
  rounds: [
    {
      icon: '🎮',
      title: 'Vytvořte heslo pro herní účet',
      description: 'Začněte pořádnou délkou — aspoň 10 znaků!',
      label: 'Kolo 1',
      desc: 'Pouze délka'
    },
    {
      icon: '📧',
      title: 'Vytvořte heslo pro e-mail',
      description: 'Skvělý začátek! Teď přidejte číslo, aby se heslo hůř lámalo.',
      label: 'Kolo 2',
      desc: '+ Číslo'
    },
    {
      icon: '📱',
      title: 'Vytvořte heslo pro sociální sítě',
      description: 'Jde vám to! Teď přidejte symbol, ať je v hesle pořádný zmatek.',
      label: 'Kolo 3',
      desc: '+ Symbol'
    },
    {
      icon: '📔',
      title: 'Vytvořte heslo pro tajný deník',
      description: 'Poslední kolo! Přidejte VELKÁ i malá písmena a dokončete celý recept.',
      label: 'Kolo 4',
      desc: '+ Velká a malá písmena'
    },
  ],
  dosTitle: '✅ Co dělat',
  dos: [
    'Kombinovat VELKÁ a malá písmena',
    'Přidat čísla doprostřed',
    'Používat symboly jako ! @ # $ %',
    'Mít aspoň 12 znaků',
    'Volit náhodné kombinace',
  ],
  dontsTitle: '❌ Co nedělat',
  donts: [
    'Používat svoje skutečné jméno nebo datum narození',
    'Používat „123456“ nebo jednoduché vzory',
    'Opakovat pořád stejný znak',
    'Používat běžná slova ze slovníku',
    'Používat název školy nebo jméno mazlíčka',
  ],
}
