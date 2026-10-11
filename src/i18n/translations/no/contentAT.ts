// ---------------------------------------------------------------------------
// Authentication (AT) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Authentication module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentAT = {
  aim: 'Å gi grunnleggende kunnskap om autentisering og prinsipper for identitetsstyring for å beskytte personlige digitale eiendeler.',
  objectives: [
    'Å understreke viktigheten av sikker identitetsstyring.',
    'Å introdusere konseptet autentisering og ulike autentiseringsfaktorer.',
    'Å utvikle forståelse av digitale eiendeler og bevissthet om tilgangskontroll.',
    'Å utvikle kunnskap og ferdigheter for å opprette sikre brukernavn og passord i tråd med anbefalinger og god praksis.',
    'Å bygge ferdigheter for sikker håndtering av passord.',
  ],
  outcomes: [
    'Jeg kan identifisere mine personlige digitale eiendeler og forklare risikoene de møter i både fysiske og digitale miljøer.',
    'Jeg kan forklare hva autentisering er, hvorfor det er viktig, og liste opp ulike typer autentisering.',
    'Jeg kan skille mellom svake og sterke brukernavn og passord.',
    'Jeg kan demonstrere hvordan jeg bruker en passordbehandler til å lagre passord og begrunne valgene mine.',
  ],
  parts: [
    {
      goal: 'Hjelpe elever med å opprette sterke, minneverdige hemmeligheter og forstå hvorfor gjenbruk er risikabelt.',
      bundle: {
        filename: 'Autentisering - pakke - del 1',
      },
      included: {
        materials: [
          {
            // ID: 3.1.1
            kind: 'Bilde',
            name: 'Digital identitet',
            filename: 'Bilde - Digital identitet',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.1.3
            kind: 'Bilder',
            name: 'Eksempler på personlige digitale eiendeler',
            filename: 'Bilder - Eksempler på personlige digitale eiendeler',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.1.4
            kind: 'Arbeidsark',
            name: 'Hva ville skje hvis...?',
            filename: 'Arbeidsark - Hva ville skje hvis',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.1.5
            kind: 'Arbeidsark',
            name: 'Mine digitale eiendeler',
            filename: 'Arbeidsark - Mine digitale eiendeler',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Hva er digital identitet?',
          },
          {
            title: 'Forstå digitale eiendeler',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        title: 'Hva er digital identitet?',
        supportText:
          'Bruk denne videoen til å hjelpe elever med å forstå at deres digitale identitet består av informasjonen og atferden de deler på nett. Pause for å spørre hvilke deler av deres digitale identitet de tror de kan kontrollere.',
        downloads: {
          video: {
            filename: 'Hva er digital identitet',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hva er digital identitet - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal:
        'Hjelpe elever med å forstå hva autentisering er, hvorfor det er viktig, og hvordan det bidrar til å beskytte deres digitale identitet og digitale eiendeler ved å kontrollere hvem som får tilgang.',
      bundle: {
        filename: 'Autentisering - pakke - del 2',
      },
      included: {
        materials: [
          {
            // ID: 3.2.1
            kind: 'Bilder',
            name: 'Eksempler på autentisering fra den virkelige verden',
            filename: 'Bilder - Eksempler på autentisering fra den virkelige verden',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.2.3
            kind: 'Bilde',
            name: 'Logge inn på et digitalt system',
            filename: 'Bilde - Logge inn på et digitalt system',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.2.4
            kind: 'Arbeidsark',
            name: 'Autentisering i hverdagen',
            filename: 'Arbeidsark - Autentisering i hverdagen',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Autentisering',
          },
          {
            title: 'Forstå typer autentisering',
          },
          {
            title: 'Anvende autentisering på digitale eiendeler',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.2.2
        title: 'Hva er autentisering?',
        supportText:
          'Bruk denne videoen til å introdusere autentisering som den daglige mekanismen som beskytter elevenes digitale kontoer. Pause for å spørre hvordan de for øyeblikket bekrefter identiteten sin i appene de bruker mest.',
        downloads: {
          video: {
            filename: 'Hva er autentisering',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hva er autentisering - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal:
        'Hjelpe elever med å forstå hva autentisering er, hvorfor det er viktig, og hvordan det bidrar til å beskytte deres digitale identitet og digitale eiendeler ved å kontrollere hvem som får tilgang.',
      bundle: {
        filename: 'Autentisering - pakke - del 3',
       },
      included: {
        materials: [
          {
            // ID: 3.3.2
            kind: 'Bilde',
            name: 'Eksempler på svake passord',
            filename: 'Bilde - Eksempler på svake passord',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.3.3
            kind: 'Bilde',
            name: 'Eksempler på sterke passord',
            filename: 'Bilde - Eksempler på sterke passord',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.3.4
            kind: 'Kort',
            name: 'Lag et sterkt passord',
            filename: 'Kort - Lag et sterkt passord',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.3.5
            kind: 'Bilde',
            name: 'Sjekk passordet ditt',
            filename: 'Bilde - Sjekk passordet ditt',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.3.6
            kind: 'Arbeidsark',
            name: 'Mine regler for sterke passord',
            filename: 'Arbeidsark - Mine regler for sterke passord',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Passord',
          },
          {
            title: 'Sterke vs. svake passord',
          },
          {
            title: 'Lage sterke passord på en trygg måte',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.3.1
        title: 'Sterke og svake passord',
        supportText:
          'Bruk denne videoen til å vise elever forskjellen mellom passord som beskytter kontoer og passord som setter dem i fare. Inviter dem til å reflektere over om deres egne passord oppfyller kriteriene for styrke.',
        downloads: {
          video: {
            filename: 'Sterke og svake passord',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Sterke og svake passord - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal:
        'Hjelpe elever med å forstå hva tofaktorautentisering er og hvorfor det er vanskelig å håndtere mange passord, introdusere konseptet passordbehandler, og forklare hvordan passordbehandlere bidrar til å beskytte digitale identiteter og digitale eiendeler når de brukes ansvarlig med støtte fra en betrodd voksen.',
      bundle: {
        filename: 'Autentisering - pakke - del 4',
       },
      included: {
        materials: [
          {
            // ID: 3.4.1
            kind: 'Bilde',
            name: 'To ulike typer autentisering brukt sammen',
            filename: 'Bilde - To ulike typer autentisering brukt sammen',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.4.2
            kind: 'Skjema',
            name: 'Sett med mynter',
            filename: 'Skjema - Sett med mynter',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.4.3
            kind: 'Skjema',
            name: 'Sett med grupper',
            filename: 'Skjema - Sett med grupper',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.4.4
            kind: 'Skjema',
            name: 'PIN-kort',
            filename: 'Skjema - PIN-kort',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.4.6
            kind: 'Bilde',
            name: 'Slik bruker du en passordbehandler',
            filename: 'Bilde - Slik bruker du en passordbehandler',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.4.7
            kind: 'Bilde',
            name: 'Passordbehandler',
            filename: 'Bilde - Passordbehandler',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.4.8
            kind: 'Bilde',
            name: 'Trinn for lagring av passord',
            filename: 'Bilde - Trinn for lagring av passord',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.4.9
            kind: 'Arbeidsark',
            name: 'Passordproblemer og løsninger',
            filename: 'Arbeidsark - Passordproblemer og løsninger',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Passordbehandlere',
          },
          {
            title: 'Passordbehandlere',
          },
          {
            title: 'Bruke passordbehandlere på en trygg måte',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.4.5
        title: 'Hva er en passordbehandler?',
        supportText:
          'Bruk denne videoen til å introdusere passordbehandlere som en praktisk løsning for å opprette og lagre sterke, unike passord for hver konto. Pause for å spørre elever om de har hørt om eller brukt en passordbehandler før.',
        downloads: {
          video: {
            filename: 'Hva er en passordbehandler',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hva er en passordbehandler - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal:
        'Hjelpe elever med å forstå hvordan deres valg og atferd påvirker sikkerheten til deres digitale identitet, og hvordan ansvarlig atferd bidrar til å beskytte deres digitale eiendeler, dem selv og andre i digitale miljøer.',
      bundle: {
        filename: 'Autentisering - pakke - del 5',
       },
      included: {
        materials: [
          {
            // ID: 3.5.1
            kind: 'Bilde',
            name: 'Trygg og utrygg nettadferd',
            filename: 'Bilde - Trygg og utrygg nettadferd',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.5.3
            kind: 'Arbeidsark',
            name: 'Scenarioer for digital identitet og autentisering',
            filename: 'Arbeidsark - Scenarioer for digital identitet og autentisering',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 3.5.4
            kind: 'Arbeidsark',
            name: 'Slik beskytter jeg min digitale identitet',
            filename: 'Arbeidsark - Slik beskytter jeg min digitale identitet',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Beskytte digital identitet',
          },
          {
            title: 'Digital identitet og autentisering',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.5.2
        title: 'Beskytte din digitale identitet',
        supportText:
          'Bruk denne videoen til å samle strategiene elevene har lært for å holde sin digitale identitet trygg. Oppmuntre dem til å identifisere én spesifikk vane de vil endre eller starte etter å ha sett den.',
        downloads: {
          video: {
            filename: 'Beskytte din digitale identitet',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Beskytte din digitale identitet - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
  ],
  otherModulesDivider: 'Utforsk andre emner',
  otherModulesTitle: 'Andre moduler',
  otherModulesSubtitle: 'Bla gjennom relaterte moduler og fortsett å lære.',
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
  title: 'Passordlab',
  subtitle:
    'Bygg et sterkere passord én runde om gangen. Hvert nivå legger til en ny ingrediens i passordoppskriften din!',
  howItWorks: 'Slik fungerer det',
  instruction:
    'Hver runde introduserer et nytt passordkrav. Oppfyll alle kriteriene for gjeldende runde for å komme videre — og se passordet ditt bli vanskeligere og vanskeligere å knekke!',
  tipLabel: 'Tips',
  tip: 'Fremdrift og passordtips finner du i panelet ved siden av spillet (under spillet på mobil).',
  yourPassword: 'Ditt passord',
  realPasswordWarning: '🔒 Bare for øving! Skriv aldri inn de ekte passordene dine her — finn på et nytt til spillet.',
  placeholder: 'Skriv passordet ditt her...',
  passwordInputAriaLabel: 'Passordinndata',
  showPassword: 'Vis passord',
  strengthAriaLabel: 'Fremdrift mot rundens mål',
  roundBadgeTemplate: 'Runde {n} av {total}',
  criteriaTitle: 'Passordoppskrift — Runde {n}:',
  criterionLength: 'Minst 15 tegn',
  criterionPersonal: 'Ingen fakta om Alex (navn, kjæledyr, fødselsår …)',
  criterionCommon: 'Ikke et vanlig ord eller enkelt mønster',
  criterionWords: '4 eller flere ulike ord',
  criterionUnique: 'Annerledes enn de forrige passordene dine',
  profileTitle: 'Fakta om Alex — hold dem utenfor passordet!',
  profile: [
    { icon: '👤', label: 'Navn', value: 'Alex' },
    { icon: '🐱', label: 'Kjæledyr', value: 'Whiskers' },
    { icon: '🎂', label: 'Født', value: '2008' },
    { icon: '🎮', label: 'Elsker', value: 'Minecraft' },
  ],
  charCountTemplate: 'Tegn: {n}',
  wordHelperTitle: 'Hjelper for tilfeldige ord',
  wordHelperHint: 'Trykk på ord for å legge dem til. Velg 4 som ikke har noe med hverandre å gjøre.',
  wordHelperRoll: 'Trill nye ord',
  wordAddAriaTemplate: 'Legg til ordet {word}',
  words: [
    'elv', 'bånd', 'skilpadde', 'slott', 'skje', 'valnøtt',
    'trompet', 'mango', 'fjell', 'småstein', 'lønn', 'rakett',
    'tiger', 'planet', 'lys', 'hage', 'pute', 'bro',
    'torden', 'marmor', 'kaktus', 'puslespill', 'havn', 'fjær',
    'orkidé', 'canyon', 'kjeks', 'speil', 'stige', 'isbre',
    'paprika', 'fløyte', 'sal', 'kompass', 'jungel', 'sitron',
    'teppe', 'delfin', 'anker', 'skisse', 'fløyel', 'tunnel',
    'vannkoker', 'lagune', 'hengekøye', 'popcorn', 'soloppgang', 'fargestift',
  ],
  commonWords: ['passord', 'hei', 'fotball', 'kjaerlighet', 'sommer', 'skole', 'hemmelig'],




  strengthWeak: 'Svakt',
  strengthOkay: 'På vei',
  strengthStrong: 'Målet nådd ✓',
  feedbackDefault: 'Begynn å skrive for å se passordstyrken din!',
  feedbackAllMet: '🎉 Alle krav oppfylt! Trykk Neste runde for å fortsette.',
  almostThereTemplate: 'Nesten der! Prøv å {hint}.',
  hints: {
    length: 'gjøre det lengre (minst 15 tegn)',
    personal: 'fjerne «{clue}» — det er et faktum om Alex som er lett å gjette',
    common: 'unngå enkle mønstre som «passord», «1234» eller et ord som gjentas',
    words: 'bruke 4 eller flere forskjellige ord, skilt med mellomrom eller bindestrek',
    unique: 'gjøre det annerledes enn de forrige passordene dine',
  },
  keepGoing: 'Fortsett!',
  nextRound: 'Neste runde →',
  finish: 'Fullfør! 🏆',
  nextRoundAriaLabel: 'Gå til neste runde',
  tryAgain: 'Prøv igjen',
  tryAgainAriaLabel: 'Tøm passordet og start på nytt',
  completionTitle: 'Passordmester!',
  completionText: 'Du har laget fire sterke passord: lange, vanskelige å gjette, av tilfeldige ord og ulike hver gang!',
  completionRounds: '4 / 4 runder fullført',
  completionTips: 'Et sterkt passord er langt, uforutsigbart, hemmelig og brukes bare én gang. En passordbehandler kan huske alle passordene dine.',
  startOver: 'Start på nytt',
  roundProgressTitle: 'Rundefremgang',
  roundProgressDesc: 'Fullfør alle 4 rundene for å mestre passord',
  rounds: [
    {
      icon: '🎮',
      title: 'Lag et passord for spillkontoen din',
      description: 'Start med lengde. Et langt passord er mye vanskeligere å knekke — bruk minst 15 tegn!',
      label: 'Runde 1',
      desc: 'Langt'
    },
    {
      icon: '📧',
      title: 'Lag et passord for e-posten din',
      description: 'Nå skal det være vanskelig å gjette. Lat som du er Alex: ingen fakta om Alex og ingenting enkelt som «passord» eller «1234».',
      label: 'Runde 2',
      desc: '+ Vanskelig å gjette'
    },
    {
      icon: '📱',
      title: 'Lag et passord for sosiale medier',
      description: 'Prøv en passordfrase: 4 eller flere tilfeldige ord som ikke har noe med hverandre å gjøre. Trenger du ideer? Bruk 🎲-hjelperen!',
      label: 'Runde 3',
      desc: '+ Tilfeldige ord'
    },
    {
      icon: '📔',
      title: 'Lag et passord for den hemmelige dagboken din',
      description: 'Siste runde! Bruk et helt nytt passord. Gjenbruk aldri et passord fra en annen konto.',
      label: 'Runde 4',
      desc: '+ Unikt'
    },
  ],
  dosTitle: '✅ Gjør dette',
  dos: [
    'Gjør det langt: 15+ tegn',
    'Bruk 4 eller flere tilfeldige ord (en passordfrase)',
    'Bruk et ulikt passord for hver konto',
    'La en passordbehandler huske dem',
    'Hold det hemmelig — ikke si det til noen',
  ],
  dontsTitle: '❌ Unngå dette',
  donts: [
    'Ikke bruk navn, fødselsdato eller kjæledyrnavn',
    'Ikke bruk «123456», «passord» eller tastaturmønstre',
    'Ikke gjenta samme ord eller tegn',
    'Ikke bruk samme passord på flere kontoer',
    'Ikke si passordet til venner',
  ],
}
