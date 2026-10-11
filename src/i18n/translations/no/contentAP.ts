// ---------------------------------------------------------------------------
// Attacker Perspective (AP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Attacker Perspective module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentAP = {
  aim: 'Å gi en oversikt over angriperperspektivet ved å hjelpe elever å gjenkjenne angriperteknikker og forstå motivene bak cyberangrep.',
  objectives: [
    'Å utvikle forståelse av angriperes motiver, inkludert psykologiske, sosiale og økonomiske faktorer.',
    'Å bygge ferdigheter i å gjenkjenne vanlige angriperteknikker.',
  ],
  outcomes: [
    'Jeg forstår angriperes motiver og kan gi eksempler knyttet til psykologiske, sosiale og økonomiske faktorer.',
    'Jeg kan gjenkjenne angriperteknikker i gitte scenarioer.',
  ],
  parts: [
    {
      goal:
        'Hjelpe barn til å tilegne seg kunnskap om konseptet med en betrodd person og utvikle ferdigheter i å identifisere kretsen av betrodde personer.',
      bundle: {
        filename: 'Angriperperspektiv - pakke - del 1',
      },
      included: {
        materials: [
          {
            // ID: 2.1.1
            kind: 'Arbeidsark',
            name: 'Betrodde personer: mennesker rundt meg',
            filename: 'Arbeidsark - Betrodde personer mennesker rundt meg',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 2.1.2
            kind: 'Arbeidsark',
            name: 'Tillitssirkler',
            filename: 'Arbeidsark - Tillitssirkler',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 2.1.3
            kind: 'Bilde',
            name: 'Situasjon: Fant penger',
            filename: 'Bilde - Situasjon Fant penger',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 2.1.4
            kind: 'Bilde',
            name: 'Situasjon: Så et bilde',
            filename: 'Bilde - Situasjon Så et bilde',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Definer kretsen av betrodde personer',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
    },
    {
      goal: 'Introdusere konseptet med en angriper og motivasjon fra angriperperspektivet.',
      bundle: {
        filename: 'Angriperperspektiv - pakke - del 2',
      },
      included: {
        materials: [
          {
            // ID: 2.2.1
            kind: 'Scenariokort',
            name: 'Identifiser atferden',
            filename: 'Scenariokort - Identifiser atferden',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 2.2.2
            kind: 'Scenariokort',
            name: 'Gjenkjenn karakterene',
            filename: 'Scenariokort - Gjenkjenn karakterene',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 2.2.4
            kind: 'Bilde',
            name: 'Angripermotivasjoner',
            filename: 'Bilde - Angripermotivasjoner',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 2.2.5
            kind: 'Bilde',
            name: 'Et blikk inn i eventyret: Angriperens motivasjon og midler',
            filename: 'Bilde - Et blikk inn i eventyret Angriperens motivasjon og midler',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 2.2.6
            kind: 'Arbeidsark',
            name: 'Angrepsanalyse',
            filename: 'Arbeidsark - Angrepsanalyse',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Definer en cybersikkerhetsangriper',
          },
          {
            title: 'Forstå angriperens motivasjon',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 2.2.3
        title: 'Hvem står bak cyberangrep?',
        supportText:
          'Bruk denne videoen til å hjelpe elever med å se for seg de virkelige menneskene og motivene bak cyberangrep, utover stereotypen med den ensomme hackeren. Pause for å spørre hvem de forestiller seg er ansvarlig og hvorfor.',
        downloads: {
          video: {
            filename: 'Hvem står bak cyberangrep',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hvem står bak cyberangrep - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal: 'Introdusere de grunnleggende teknikkene (taktikkene) som er relevante for barn og som angripere bruker for å nå sine mål.',
      bundle: {
        filename: 'Angriperperspektiv - pakke - del 3',
      },
      included: {
        materials: [
          {
            // ID: 2.3.1
            kind: 'Lesestoff',
            name: 'Smishing og etterligning',
            filename: 'Lesestoff - Smishing og etterligning',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 2.3.2
            kind: 'Lesestoff',
            name: 'Vishing, svindel og etterligning',
            filename: 'Lesestoff - Vishing, svindel og etterligning',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 2.3.3
            kind: 'Lesestoff',
            name: 'De vanligste cybertruslene',
            filename: 'Lesestoff - De vanligste cybertruslene',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 2.3.4
            kind: 'Scenariokort',
            name: 'Vanlige angriperteknikker',
            filename: 'Scenariokort - Vanlige angriperteknikker',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 2.3.5
            kind: 'Kort',
            name: 'Angripere og planene deres',
            filename: 'Kort - Angripere og planene deres',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 2.3.6
            kind: 'Arbeidsark',
            name: 'Gåte: Angripernes fest',
            filename: 'Arbeidsark - Gåte - Angripernes fest',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Forstå atferdsmønstre',
          },
          {
            title: 'Forstå angrepsveier',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
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
  title: 'I hackerens sinn',
  subtitle:
    'Du er en etisk hacker. Finn svakhetene på en sosial medieprofil, planlegg angrepet slik en angriper ville gjort det, og lær hvordan du stopper det!',
  howItWorks: 'Slik fungerer det',
  instruction:
    'Undersøk denne sosiale medieprofilen som om du var en hacker på jakt etter svake punkter. Nesten alt på skjermen kan klikkes – tenk nøye, for å klikke på noe som ikke er en ekte sårbarhet koster deg et liv! Etterpå planlegger du angrepet slik en angriper ville gjort det, og finner ut hvordan du stopper det.',
  tipLabel: 'Tips',
  tip: 'Det er nøyaktig 4 ekte sårbarheter skjult blant mange uskyldige elementer. Ikke alt som kan klikkes er en sikkerhetsfeil!',
  livesTitle: 'Liv',
  livesDesc: '3 feil klikk og spillet er over',
  vulnerabilitiesFoundTitle: '🔍 Oppdagede sårbarheter',
  vulnerabilitiesEmpty: 'Ingen funnet ennå…',
  vulnerabilitiesCount: '/ 4',
  attackerTargetsTitle: '🎯 Hva angripere er ute etter',
  attackerTargets: [
    '🚩 HTTP i stedet for HTTPS',
    '🚩 Sanntidsdeling av posisjon',
    '🚩 Full fødselsdato synlig offentlig',
    '🚩 Svar på sikkerhetsspørsmål eksponert',
  ],
  profile: {
    displayName: 'Alex Johnson',
    handle: '@alex123',
    statusActiveNow: 'Aktiv nå',
    bioText: '16 · Gamer 🎮 · Manga Fan',
    aboutTitle: 'Om meg',
    statsFriendsLabel: 'Venner',
    statsFollowingLabel: 'Følger',
    bornText: 'Født 14. juni 2008',
    emailText: 'alex.gamer@freemail.com',
    petNameText: 'Kjæledyrnavn: Whiskers',
    post1Time: '📍 Sentrum kjøpesenter · Akkurat nå',
    post1Body: 'Tok meg nettopp en kaffe ☕ Er noen i nærheten? Finn meg ved foodcourtene! 😄',
    post1Badge: '🛍️ Sentrum mall — sjekket inn',
    post2Time: 'For 2 timer siden',
    post2Body: 'Kom akkurat hjem fra skolen! Spiser pizza med familien 🍕 Beste kveld noensinne!',
    actionLike: 'Liker',
    actionComment: 'Kommenter',
    actionShare: 'Del',
  },
  vulnFoundSuffix: '/ 4 sårbarheter funnet',
  tryAgain: 'Prøv igjen',
  winTitle: 'Utmerket jobbet!',
  winMsg: 'Du oppdaget alle 4 sårbarhetene som en ekte sikkerhetsanalytiker. Nå vet du hvordan angripere tenker!',
  loseTitle: 'Spillet er over!',
  loseMsgTemplate:
    'Du gikk tom for liv! Du fant {found} av {total} sårbarheter. De du gikk glipp av er nå uthevet i rødt.',
  attackerVoiceInitial: 'Interessant profil… la meg skanne etter svakheter.',
  attackerVoiceWin: '🏆 Imponerende! Du fant alle {total} svakheter. Du tenker som en hacker!',
  attackerVoiceLose: '💀 For mange feil. Studer profilen mer nøye neste gang.',
  attackerVoiceAlreadyTagged: 'Allerede merket: {label}.',
  attackerVoiceCorrect: '🔓 Sårbarhet funnet: {label}! {explain}',
  attackerVoiceWrong: 'Ikke en sårbarhet — {explain}',
  part1Label: 'Del 1 av 3: Undersøk profilen',
  part2Label: 'Del 2 av 3: Planlegg angrepet',
  part3Label: 'Del 3 av 3: Hvorfor, og hvordan du stopper det',
  continueButton: 'Fortsett: planlegg angrepet →',
  planTitle: 'Angriperens plan',
  planIntro: 'Et lite spor er ikke farlig i seg selv. Angripere setter spor sammen til en plan. For hvert spor velger du målet det hjelper med.',
  planTrayTitle: 'Spor fra profilen',
  planChooseLabel: 'Hvilket mål hjelper dette sporet med?',
  planVoiceCorrect: '🧩 Bra match! {explain}',
  planVoiceWrong: '🤔 Ikke det målet. {explain}',
  planSummaryTitle: 'Små spor summerer seg',
  planSummaryText: 'Fødselsdato, kjæledyrnavn og en usikker side kan åpne en konto. En live-posisjon og et innlegg om skolen kan avsløre hvor noen er. Angripere samler slike spor, ett av gangen.',
  planScoreTemplate: '{n} av {total} spor på første forsøk',
  toQuizButton: 'Fortsett: hvorfor, og hvordan du stopper det →',
  goals: {
    account: { icon: '🔑', title: 'Bryte seg inn i kontoen', hint: 'Ta over profilen eller spillkontoen' },
    person: { icon: '🧭', title: 'Finne personen i virkeligheten', hint: 'Vite hvor personen er, og når' },
    none: { icon: '🚫', title: 'Ikke nyttig', hint: 'Hjelper en angriper lite' },
  },
  clues: [
    {
      id: 'birthday',
      icon: '🎂',
      text: 'Full fødselsdato på profilen',
      explanation: 'Folk bruker ofte fødselsdatoen i passord og sikkerhetssvar. En angriper prøver den først.',
    },
    {
      id: 'pet',
      icon: '🐱',
      text: 'Kjæledyrnavn på profilen',
      explanation: 'Kjæledyrnavn er populære passord og sikkerhetssvar. En angriper kan prøve navnet for å komme inn i kontoen.',
    },
    {
      id: 'http',
      icon: '🔓',
      text: 'Siden bruker http:// og ikke https://',
      explanation: 'På en http://-side kan andre på samme nettverk lese det du skriver. Også et passord.',
    },
    {
      id: 'location',
      icon: '📍',
      text: 'Live-posisjon i et innlegg',
      explanation: 'En live-posisjon viser nøyaktig hvor noen er akkurat nå. En fremmed kunne misbruke den for å finne personen.',
    },
    {
      id: 'routine',
      icon: '🏫',
      text: 'Innlegg: «Kom akkurat hjem fra skolen!»',
      explanation: 'Dette forteller en fremmed når personen vanligvis er hvor. Små detaljer som dette kan summere seg til en plan.',
    },
    {
      id: 'avatar',
      icon: '👤',
      text: 'Profilbilde',
      explanation: 'Et profilbilde er normalt. Det hjelper ikke en angriper med å bryte seg inn eller finne personen.',
    },
    {
      id: 'bio',
      icon: '🎮',
      text: 'Bio: gamer og mangafan',
      explanation: 'Hobbyer er ikke en hemmelighet. Alene hjelper de en angriper lite.',
    },
    {
      id: 'friends',
      icon: '👥',
      text: 'Antall venner og følgere',
      explanation: 'Et antall er bare et tall. En angriper kan ikke bruke det til noe.',
    },
  ],
  quizTitle: 'Hvorfor, og hvordan du stopper det',
  quizProgressTemplate: 'Spørsmål {n} av {total}',
  motiveLabel: 'Hvorfor ville angriperen gjøre dette?',
  defendLabel: 'Hva hjelper mest?',
  quizVoiceCorrect: '✅ {explain}',
  quizVoiceWrong: '❌ Ikke helt. {explain}',
  nextButton: 'Neste →',
  resultsButton: 'Se resultatet →',
  motivationsTitle: 'Hvorfor angripere angriper',
  motivationsSubtitle: 'Åtte motiver',
  motivations: {
    financial: { name: 'Økonomisk vinning', desc: 'Selge stjålne data eller kreve løsepenger' },
    reputation: { name: 'Omdømme', desc: 'Vil vise seg frem og få anerkjennelse' },
    revenge: { name: 'Hevn', desc: 'Vil ta igjen mot noen' },
    espionage: { name: 'Spionasje', desc: 'Skaffe hemmelig informasjon til en stat eller et selskap' },
    error: { name: 'Bare en feil', desc: 'En ulykke som skaper et problem' },
    experiment: { name: 'Eksperimentering', desc: 'Prøve ting for moro skyld' },
    fear: { name: 'Frykt', desc: 'Gjøre noe galt på grunn av press eller trusler' },
    beliefs: { name: 'Overbevisning', desc: 'Kjempe for en sak man tror på' },
  },
  motiveCases: [
    {
      id: 1,
      text: 'En eldre elev bryter seg inn i kontoen til et yngre barn og poster tull, så alle kan se hvor smart han er.',
      explanation: 'Han vil bli beundret. Ønsket om anerkjennelse og om å vise seg frem kalles motivet «omdømme».',
    },
    {
      id: 2,
      text: 'En fremmed bryter seg inn i hundrevis av kontoer og selger påloggingene på en nettside.',
      explanation: 'Den fremmede vil ha penger. Å selge stjålne data er «økonomisk vinning».',
    },
    {
      id: 3,
      text: 'En elev bryter seg inn i kontoen til en klassekamerat fordi klassekameraten var slem mot eleven forrige måned.',
      explanation: 'Eleven vil ta igjen mot noen. Dette motivet kalles «hevn».',
    },
    {
      id: 4,
      text: 'Et barn laster ned et hackerverktøy og prøver det på en skoledatamaskin, bare for å se hva som skjer.',
      explanation: 'Barnet vil ikke skade noen og prøver bare. Det kalles «eksperimentering», men det kan likevel gjøre ekte skade.',
    },
    {
      id: 5,
      text: 'Et eldre barn sier til et yngre: «Skaff meg passordet til vennen din, ellers forteller jeg alle hemmeligheten din.» Hvorfor gjør det yngre barnet det?',
      explanation: 'Det yngre barnet er redd for hva det eldre vil gjøre. Å gjøre noe galt på grunn av press eller trusler er «frykt».',
    },
  ],
  defendCases: [
    {
      id: 1,
      text: 'En angriper vil gjette et passord. Hvilken vane gjør det vanskeligst for ham?',
      options: [
        'Et langt passord av tilfeldige ord som ikke har noe med deg å gjøre',
        'Navnet på kjæledyret og fødselsåret ditt',
        'Det samme korte passordet på alle kontoer',
      ],
      explanation: 'Et langt passord av tilfeldige ord er vanskelig å gjette. Fødselsdatoer og kjæledyrnavn prøver en angriper først, og ett passord overalt setter alle kontoene i fare.',
    },
    {
      id: 2,
      text: 'En side begynner med http://, har ikke noe hengelås, men ber om passordet ditt. Hva gjør du?',
      options: [
        'Du skriver det ikke. Du leter etter en side som begynner med https:// og har hengelås',
        'Du skriver det fort, før noen merker det',
        'Du skriver et kortere passord så det er mindre å lese',
      ],
      explanation: 'På en http://-side kan andre på nettverket lese det du skriver. Skriv bare passord på https://-sider.',
    },
    {
      id: 3,
      text: 'En venn vil at du skal poste hvor du er akkurat nå, så alle kan komme. Hva er tryggest?',
      options: [
        'Slå av live-posisjon og del bildet senere, når du har gått',
        'Poste den bare i 5 minutter',
        'Poste den slik at alle kan se den, også fremmede',
      ],
      explanation: 'En live-posisjon forteller fremmede hvor du er akkurat nå. Del bilder senere, og bare med folk du kjenner.',
    },
  ],
  finalTitle: 'Angriper-tenkning låst opp!',
  finalPart1Template: 'Del 1: {n} av {total} svakheter funnet',
  finalPart2Template: 'Del 2: {n} av {total} spor på første forsøk',
  finalPart3Template: 'Del 3: {n} av {total} spørsmål på første forsøk',
  finalScoreTemplate: 'Totalt {n} av {total} poeng',
  rankGreat: 'Du tenker som en angriper og handler som en forsvarer. Flott jobba!',
  rankGood: 'Bra jobba! Spill de delene du syntes var vanskelige om igjen.',
  rankPractise: 'Fortsett å øve. Se etter små spor og spør: Hvordan kunne noen satt dem sammen?',
  hotspots: [
    {
      id: 'http',
      label: 'Ukryptert tilkobling (HTTP)',
      explain: 'Denne siden bruker HTTP, ikke HTTPS. Det du skriver her, også passord, er ikke kryptert. Alle på samme nettverk kan lese det.'
    },
    { id: 'avatar',
      label: 'Profilbilde',
      explain: 'Profilbilder er en standarddel av sosiale medier. De er ikke en sikkerhetsrisiko i seg selv!'
    },
    {
      id: 'username',
      label: 'Visningsnavn / brukernavn',
      explain: 'Å vise navn og @handle er normalt på sosiale plattformer. Det er ikke en sårbarhet.'
    },
    {
      id: 'online',
      label: 'Aktivitetsstatus',
      explain: 'Å vise når du er online er en vanlig funksjon. Det er en liten personvernsak, men ikke en ekte sårbarhet.'
    },
    {
      id: 'bio',
      label: 'Bio / Interesser',
      explain: 'Å liste opp generelle hobbyer som gaming eller anime er greit. Det eksponerer ikke sensitiv kontoinformasjon.'
    },
    {
      id: 'followers',
      label: 'Antall følgere / venner',
      explain: 'Antall venner og følgere er en vanlig funksjon. Ikke en sårbarhet!'
    },
    {
      id: 'birthday',
      label: 'Full fødselsdato eksponert',
      explain: 'Å vise hele fødselsdatoen er farlig! Angripere bruker den til å gjette passord (f.eks. \'alex2008\'), svare på sikkerhetsspørsmål og komme seg inn på kontoer.'
    },
    {
      id: 'email',
      label: 'E-post i profilen',
      explain: 'En offentlig e-postadresse kan gi spam, men det er et mindre problem enn et avslørt passord eller sikkerhetssvar.'
    },
    {
      id: 'petname',
      label: 'Kjæledyrnavn eksponert',
      explain: 'Navnet på kjæledyret er ofte et svar på et sikkerhetsspørsmål. Angripere kan bruke det til å komme seg inn på kontoer eller lure deg.'
    },
    {
      id: 'location',
      label: 'Sanntidsposisjon kringkastet',
      explain: 'Dette innlegget viser nøyaktig hvor Alex er akkurat nå! Alle kan se det, også fremmede og angripere. Å dele posisjonen sin live er en alvorlig sikkerhetsrisiko.'
    },
    {
      id: 'post2',
      label: 'Generelt innlegg',
      explain: 'Å legge ut om hverdagslige ting som pizza er greit. Det avslører ikke noe sensitivt!'
    },
    {
      id: 'like1',
      label: 'Liker-knapp',
      explain: 'Å like innlegg er normalt og ufarlig!'
    },
    {
      id: 'comment1',
      label: 'Kommenter-knapp',
      explain: 'Kommentarer er en vanlig funksjon. Ikke en sårbarhet!'
    },
    {
      id: 'share1',
      label: 'Del-knapp',
      explain: 'Å dele innlegg er en grunnleggende sosial mediefunksjon. Selve knappen er ikke et sikkerhetsproblem!'
    },
    {
      id: 'like2',
      label: 'Liker-knapp',
      explain: 'Å like innlegg er normalt og ufarlig!'
    },
    {
      id: 'comment2',
      label: 'Kommenter-knapp',
      explain: 'Kommentarer er en standard sosial mediefunksjon!'
    },
  ],
}
