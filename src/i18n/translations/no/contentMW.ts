// ---------------------------------------------------------------------------
// Malware (MW) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Malware module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentMW = {
  aim: 'Å gi grunnleggende kunnskap om hva skadelig programvare er, hvilke risikoer den medfører, og prinsipper for å beskytte seg mot den.',
  objectives: [
    'Å introdusere hva skadelig programvare er og ulike typer skadelig programvare.',
    'Å forklare hvordan skadelig programvare oppfører seg, og tegn på at en enhet er infisert.',
    'Å utvikle ferdigheter i å beskytte seg mot risikoer knyttet til skadelig programvare.',
  ],
  outcomes: [
    'Jeg kan beskrive hva skadelig programvare er og gjenkjenne det i gitte scenarioer.',
    'Jeg kan forklare ulike typer skadelig programvare, hvordan de oppfører seg, og tegn på at enheten min er infisert.',
    'Jeg kan demonstrere måter å beskytte meg mot infeksjon med skadelig programvare på i gitte scenarioer og begrunne valgene mine.',
  ],
  parts: [
    {
      goal: 'Hjelpe elever med å forstå konseptet skadevare.',
      bundle: {
        filename: 'Skadelig programvare - pakke - del 1',
      },
      included: {
        materials: [
          {
            // ID: 6.1.1
            kind: 'Bilde',
            name: 'Ondsinnet + programvare = skadevare',
            filename: 'Bilde - Ondsinnet + programvare = skadevare',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 6.1.2
            kind: 'Bilde',
            name: 'Hva er ondsinnet?',
            filename: 'Bilde - Hva er ondsinnet',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 6.1.4
            kind: 'Arbeidsark',
            name: 'Relatert til skadevare eller ikke',
            filename: 'Arbeidsark - Relatert til skadevare eller ikke',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Definere skadevare',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.1.3
        title: 'Hva er skadevare?',
        supportText:
          'Bruk denne videoen til å introdusere skadevare som programvare designet for å forårsake skade, og gi elevene et grunnlag før de utforsker spesifikke typer mer i dybden. Ta pause og spør hva de allerede vet eller har hørt om datavirus.',
        downloads: {
          video: {
            filename: 'Hva er skadevare',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hva er skadevare - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal: 'Introdusere vanlige typer skadevare.',
      bundle: {
        filename: 'Skadelig programvare - pakke - del 2',
      },
      included: {
        materials: [
          {
            // ID: 6.2.2
            kind: 'Skjema',
            name: 'Myntsett',
            filename: 'Skjema - Myntsett',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 6.2.3
            kind: 'Skjema',
            name: 'Spillebrett: Knyt knutene',
            filename: 'Skjema - Spillebrett Knyt knutene',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Typer skadevare',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.2.1
        title: 'Introduksjon til typer skadevare',
        supportText:
          'Bruk denne videoen til å gi elevene en tydelig oversikt over de ulike kategoriene av skadevare og hva som gjør hver enkelt unik. Ta pause for en kort diskusjon om hvilken type de mener utgjør størst risiko og hvorfor.',
        downloads: {
          video: {
            filename: 'Introduksjon til typer skadevare',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Introduksjon til typer skadevare - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal: 'Gi en oversikt over kjennetegnene på skadevare for å gjenkjenne og oppdage den.',
      bundle: {
        filename: 'Skadelig programvare - pakke - del 3',
      },
      included: {
        materials: [
          {
            // ID: 6.3.1
            kind: 'Lesestoff',
            name: 'Gjenkjenne skadevare',
            filename: 'Lesestoff - Gjenkjenne skadevare',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 6.3.2
            kind: 'Plakat',
            name: 'Syv indikatorer',
            filename: 'Plakat - Syv indikatorer',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 6.3.3
            kind: 'Arbeidsark',
            name: 'Liste over indikatorer',
            filename: 'Arbeidsark - Liste over indikatorer',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Undersøke skadevare',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
    },
    {
      goal: 'Hjelpe elever med å forstå beskyttelsestiltak mot skadevare.',
      bundle: {
        filename: 'Skadelig programvare - pakke - del 4',
      },
      included: {
        materials: [
          {
            // ID: 6.4.1
            kind: 'Situasjon',
            name: 'Skadevare og datatyveri',
            filename: 'Situasjon - Skadevare og datatyveri',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 6.4.2
            kind: 'Plakat',
            name: 'HVA MAN BØR og IKKE BØR gjøre',
            filename: 'Plakat - HVA MAN BØR og IKKE BØR gjøre',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 6.4.3
            kind: 'Bilder',
            name: 'Assosiative bilder: Vær oppmerksom',
            filename: 'Bilder - Assosiative bilder Vær oppmerksom',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 6.4.4
            kind: 'Arbeidsark',
            name: 'Et skjold mot skadevare',
            filename: 'Arbeidsark - Et skjold mot skadevare',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Analysere omstendighetene rundt en skadevareinfeksjon',
          },
          {
            title: 'Lære grunnleggende beskyttelsestiltak',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
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
  title: 'Skadevare-detektiv',
  subtitle: 'Du er en cybersikkerhetsanalytiker. Du undersøker filer, leser e-poster, håndterer sprettoppvinduer og sjekker apptillatelser. Så navngir du typer skadevare, oppdager tegn på infeksjon og velger riktig beskyttelse — på 7 nivåer. Klarer du å holde systemet rent?',
  howItWorks: 'Slik fungerer det',
  instruction: 'Jobb deg gjennom 7 nivåer på din virtuelle datamaskin. På nivå 1–4 avgjør du om hver fil, e-post, sprettoppvindu eller app er trygg eller en trussel. På nivå 5 navngir du typen skadevare. På nivå 6 avgjør du om et datamaskinproblem er normalt eller et tegn på infeksjon. På nivå 7 velger du den beste beskyttelsen. Les forklaringen etter hvert svar.',
  tip: 'Skadevare forkler seg ofte som noe ufarlig. Se på hvor en fil eller melding kommer fra, ikke bare på hvordan den ser ut. Noe ufarlig kan se skummelt ut (for eksempel en nedtelling), og noe farlig kan se vennlig ut.',
  tipLabel: 'Tips',
  welcomeTitle: 'Velkommen, cyberanalytiker!',
  welcomeDescription: 'Datamaskinen din har mottatt mistenkelige filer, e-poster og sprettoppvinduer. Jobb deg gjennom 7 nivåer: finn truslene, navngi skadevaren, oppdag tegn på infeksjon og velg riktig beskyttelse.',
  levels: [
    '💻 Nivå 1 — Filskanner',
    '📧 Nivå 2 — E-postinnboks',
    '🌐 Nivå 3 — Nettlesersprettoppvinduer',
    '🔒 Nivå 4 — Apptillatelser',
    '🔬 Nivå 5 — Typer skadevare',
    '🩺 Nivå 6 — Tegn på infeksjon',
    '🛡️ Nivå 7 — Beskyttelse',
  ],
  bootButton: 'Start datamaskinen →',
  scoreLabel: 'Poeng',
  correctLabel: 'Riktig',
  threatsCaughtLabel: 'Trusler oppdaget',
  keepFile: '✓ Behold fil',
  quarantine: '🗑️ Karantene',
  safeKeep: '✓ Trygg / Behold',
  threatRemove: '⚠️ Trussel / Fjern',
  nextButton: 'Neste →',
  malwareTypesTitle: 'Typer skadevare',
  malwareTypesSubtitle: 'Vanlige typer skadevare du bør passe deg for',
  malwareTypes: [
    '🦠 Virus — fester seg til filer og sprer seg',
    '🪱 Orm — replikerer seg selv på tvers av nettverk',
    '🐴 Trojaner — forkledd som nyttig programvare',
    '🔐 Løsepengevirus — låser filer til du betaler',
    '👁️ Spionvare — overvåker aktivitet i hemmelighet',
    '📢 Reklamevare — oversvømmer deg med annonser',
  ],
  securityGuideTitle: 'Sikkerhetsveiledning',
  securityGuideSubtitle: 'Røde flagg du bør se etter',
  securityRedFlags: [
    '🚩 .exe, .bat, .vbs fra ukjente kilder',
    '🚩 Feilstavede eller falske avsenderdomener',
    '🚩 Falske virusvarsler i nettleseren',
    '🚩 Apper som ber om unødvendige tillatelser',
    '🚩 Premier, gratis penger eller pressende trusler',
    '🚩 Nedtellingstimere som skaper panikk',
    '🚩 Et filnavn med to endelser, som bilde.jpg.exe',
  ],
  goldenRule: 'Når du er i tvil, ikke klikk. Kontakt IT-støtte eller en pålitelig voksen i stedet.',
  levelCompleteTitle: 'Nivå fullført!',
  levelCompleteSubtitle: 'Fortsett!',
  levelResultLabel: 'Nivåresultat',
  correctDecisionsLabel: 'riktige avgjørelser',
  continueButton: 'Fortsett →',
  nextLevelButtonTemplate: 'Fortsett til nivå {n} →',
  viewResultsButton: 'Se sluttresultat →',
  itemProgressTemplate: 'Sak {n} av {total}',
  finalSummaryTemplate: 'poeng · {correct} av {total} riktige avgjørelser',
  permsRequestingLabel: 'Denne appen ber om følgende tillatelser:',
  correctFeedback: '✅ Riktig!',
  incorrectFeedback: '❌ Ikke helt!',
  markLegitimate: '✓ Merk som legitim',
  reportPhishing: '⚠️ Rapporter som phishing',
  allowInstall: '✓ Tillat og installer',
  denyRemove: '🚫 Avslå og fjern',
  closeDismiss: '✕ Lukk sprettoppvindu',
  fileSourceLabel: 'Kilde',
  fileSizeLabel: 'Størrelse',
  fileAddedLabel: 'Lagt til',
  folderInbox: '📥 Innboks',
  folderSent: '📤 Sendt',
  folderTrash: '🗑️ Papirkurv',
  levelDone: [
    { title: 'Filskanner — nivå 1 fullført!', sub: 'Du har skannet alle filene på skrivebordet.' },
    { title: 'E-postinnboks — nivå 2 fullført!', sub: 'Du har gjennomgått alle e-postene i innboksen.' },
    { title: 'Sprettoppvinduer — nivå 3 fullført!', sub: 'Du har håndtert alle sprettoppvinduene.' },
    { title: 'Apptillatelser — nivå 4 fullført!', sub: 'Du har gått gjennom alle tillatelsesforespørslene.' },
    { title: 'Typer skadevare — nivå 5 fullført!', sub: 'Du har navngitt typene skadevare.' },
    { title: 'Tegn på infeksjon — nivå 6 fullført!', sub: 'Du har sjekket alle enhetsproblemene.' },
    { title: 'Beskyttelse — nivå 7 fullført!', sub: 'Du har valgt beskyttelsen.' },
  ],
  resultsTitle: 'Systemet er sikret! 🛡️',
  resultsDescription: 'Cybersikkerhetsrapporten din er klar.',
  accuracyLabel: 'Nøyaktighet',
  threatsCaughtStat: 'Trusler oppdaget',
  threatsMissedStat: 'Trusler oversett',
  analystRankLabel: 'Analytikerrang',
  rankTrainee: '📘 Trainee',
  rankTraineeMsg: 'Fortsett å lære! Åpne hjelpeboksene og prøv igjen — du vil bli bedre!',
  rankJunior: '🔍 Junioranalytiker',
  rankJuniorMsg: 'Bra innsats! Du bygger solide ferdigheter i å oppdage skadevare. Øvelse gjør mester.',
  rankSenior: '🔐 Senioranalytiker',
  rankSeniorMsg: 'Godt jobbet! Du identifiserte de fleste truslene. Fortsett å skjerpe blikket for subtile røde flagg.',
  rankElite: '🛡️ Elite cyberanalytiker',
  rankEliteMsg: 'Fremragende arbeid! Du fanget nesten alle truslene. Din digitale sikkerhetsinstinkt er utmerket.',
  playAgain: 'Spill igjen',
  signNormal: '✓ Ser normalt ut',
  signWarning: '⚠️ Varselsignal',
  verdictSafe: 'Denne er trygg.',
  verdictThreat: 'Denne er en trussel.',
  verdictNormal: 'Dette er normalt.',
  verdictWarning: 'Dette er et varselsignal.',
  rightAnswerTemplate: 'Riktig svar: {answer}',
  typeNames: {
    virus: '🦠 Virus',
    worm: '🪱 Orm',
    trojan: '🐴 Trojaner',
    ransomware: '🔐 Løsepengevirus',
    spyware: '👁️ Spionvare',
    adware: '📢 Reklamevare',
  },
  measures: {
    links: {
      label: '🔗 Ikke klikk på rare lenker',
      why: 'En lenke kan føre til en falsk side eller starte en nedlasting.',
    },
    trusted: {
      label: '🏪 Last bare ned fra pålitelige steder',
      why: 'Bruk offisielle nettsider og appbutikker, aldri «gratis» kopier.',
    },
    update: { label: '🔄 Hold datamaskinen og appene oppdatert', why: 'Oppdateringer tetter hullene skadevare bruker.' },
    antivirus: { label: '🛡️ Installer antivirusprogramvare', why: 'Den leter etter skadevare og varsler deg.' },
    adult: {
      label: '🙋 Spør en voksen før du installerer noe',
      why: 'En pålitelig voksen kan hjelpe deg å sjekke om et program er trygt.',
    },
    attachment: {
      label: '📎 Vær forsiktig med e-postvedlegg',
      why: 'Åpne et vedlegg bare hvis du venter det og kjenner avsenderen.',
    },
  },
  measuresTitle: 'Sikkerhetstiltak',
  measuresSubtitle: 'Seks vaner som stopper mest skadevare',
  infectionSignsTitle: 'Tegn på infeksjon',
  infectionSignsSubtitle: 'Spor som tyder på at en enhet kan ha skadevare',
  infectionSigns: [
    '🪟 Sprettoppvinduer dukker opp av ingenting',
    '🐌 Skjermen blir supertreg',
    '❓ Rare nye ikoner eller programmer dukker opp',
    '🌀 Viften durer høyt eller datamaskinen lager rare lyder',
    '💥 Favorittspillet eller appen din lukker seg plutselig',
    '📂 Lekse-filer forsvinner eller lar seg ikke åpne',
    '✉️ Venner sier at de har fått e-poster fra deg',
  ],
  infectionSignsNote: 'Et tegn er et spor, ikke et bevis. En datamaskin kan også være treg fordi den installerer en oppdatering. Se på hele historien.',
  perLevelTitle: 'Resultatet ditt på hvert nivå',
  practiceTemplate: '💡 Øv mer på: {level}',
  practicePerfect: '🌟 En perfekt runde — alle nivåer!',
  typeCases: [
    {
      id: 1,
      icon: '🦠',
      text: 'Nina åpner en fil en venn sendte henne. Snart er andre filer på den bærbare datamaskinen hennes også ødelagt. Problemet sprer seg fra fil til fil, og bare når hun åpner dem.',
      explanation: 'Et virus gjemmer seg i en fil og kopierer seg inn i andre filer. Det trenger en vertsfil og noen som åpner den.',
      tip: 'Et virus starter først når du åpner den infiserte filen. Ikke åpne filer du ikke ventet.',
    },
    {
      id: 2,
      icon: '🪱',
      text: 'På skolen blir én datamaskin infisert. Ingen klikker på noe, men noen minutter senere er datamaskiner over hele Wi-Fi-nettverket infisert og trege.',
      explanation: 'En orm sprer seg av seg selv over nettverk. Den trenger ingen fil å gjemme seg i og ingen som åpner den.',
      tip: 'Oppdateringer tetter hullene ormer bruker for å komme inn.',
    },
    {
      id: 3,
      icon: '🐴',
      text: 'Leo installerer en gratis «spillturbo». Den ser nyttig ut, men åpner i hemmelighet en vei inn til datamaskinen hans for en hacker. Den kopierer ikke seg selv.',
      explanation: 'En trojaner later som den er nyttig programvare. Den sprer seg ikke selv. Du slipper den inn selv.',
      tip: 'Installer programmer bare fra offisielle steder. Og spør en voksen først.',
    },
    {
      id: 4,
      icon: '🔐',
      text: 'Evas bilder og lekser lar seg ikke åpne. En melding sier: «Filene dine er låst. Betal penger for å få dem tilbake.»',
      explanation: 'Løsepengevirus låser eller sletter filene dine og krever løsepenger. Å betale gir ingen garanti for at du får filene tilbake.',
      tip: 'Ta kopier (sikkerhetskopier) av viktige filer. Si fra til en voksen med en gang, og ikke betal.',
    },
    {
      id: 5,
      icon: '👁️',
      text: 'Et skjult program på Toms bærbare datamaskin tar stille opp alt han skriver, også passordene hans, og sender det til en fremmed.',
      explanation: 'Spionvare overvåker i hemmelighet hva du gjør og stjeler private opplysninger. Et program som tar opp hver tast du trykker, kalles en keylogger.',
      tip: 'Føler du deg overvåket? Si det til en voksen og kjør en antivirusskanning.',
    },
    {
      id: 6,
      icon: '📢',
      text: 'Etter at Mia har installert en gratis app, dukker det opp reklame hele dagen: på skrivebordet, i hvert vindu, selv når appen er lukket.',
      explanation: 'Reklamevare oversvømmer deg med annonser, ofte for at utvikleren skal tjene penger. Den er irriterende og kan føre deg til usikre sider.',
      tip: 'Les hva en gratis app vil installere. Fjern apper som fyller skjermen med reklame.',
    },
  ],
  signCases: [
    {
      id: 1,
      icon: '🪟',
      text: 'Vinduer med reklame og premier dukker stadig opp på Ninas skjerm. Hun har ikke åpnet noen av dem. De kommer tilbake selv når hun lukker nettleseren.',
      explanation: 'Sprettoppvinduer som dukker opp av ingenting, er et klassisk tegn på reklamevare eller annen skadevare.',
      tip: 'Ikke klikk på dem. Si det til en voksen og kjør en antivirusskanning.',
    },
    {
      id: 2,
      icon: '❓',
      text: 'Leo finner ikoner på skrivebordet for programmer han aldri har installert og aldri har sett før.',
      explanation: 'Programmer du ikke har installert, kan være skadevare som har satt seg selv der. Rare nye ikoner er et varselsignal.',
      tip: 'Ikke åpne ukjente programmer. Be en voksen sjekke dem.',
    },
    {
      id: 3,
      icon: '📂',
      text: 'Evas leksefiler har forsvunnet. De som er igjen, lar seg ikke åpne og viser en feil.',
      explanation: 'Slettede eller ødelagte filer du ikke har rørt, er et varselsignal. Løsepengevirus og noen virus ødelegger filer.',
      tip: 'Si fra til en voksen med en gang. Sikkerhetskopier av filene dine kan redde arbeidet ditt.',
    },
    {
      id: 4,
      icon: '✉️',
      text: 'Toms venner sier: «Vi fikk en rar e-post fra deg med en lenke!» Tom har aldri sendt den.',
      explanation: 'Hvis e-poster sendes fra kontoen din uten at du gjør det, kan noen andre styre den, eller skadevare på enheten din sender dem.',
      tip: 'Si til vennene dine at de ikke skal klikke. Si det så til en voksen og bytt passord.',
    },
    {
      id: 5,
      icon: '🌀',
      text: 'Mias bærbare datamaskin er treg og viften durer høyt, men hun har ingen programmer åpne. Det begynte etter at hun kjørte en fil fra en fremmed.',
      explanation: 'En datamaskin som jobber hardt når du ikke gjør noe, kan kjøre skadevare i bakgrunnen.',
      tip: 'Vær mistenksom når en treg, støyende datamaskin «ikke gjør noe». Be en voksen sjekke den.',
    },
    {
      id: 6,
      icon: '🐌',
      text: 'Sams bærbare datamaskin er veldig treg. Et vindu sier «Installerer oppdateringer… 63 %».',
      explanation: 'Dette er normalt. Tregheten har en klar grunn: datamaskinen installerer oppdateringer. En treg datamaskin alene er ikke bevis på skadevare.',
      tip: 'Vent til oppdateringen er ferdig. Tenk på hva annet som skjer før du blir redd.',
    },
    {
      id: 7,
      icon: '🎮',
      text: 'Ella spiller et stort 3D-spill i en time. Den bærbare datamaskinen blir varm og viften durer høyt.',
      explanation: 'Dette er normalt. Krevende spill får datamaskinen til å jobbe hardt, så den blir varm og viften går fort.',
      tip: 'Høy vifte og en klar grunn = normalt. Høy vifte og ingenting åpent = mistenkelig.',
    },
    {
      id: 8,
      icon: '🆕',
      text: 'Jens fikk hjelp av pappa til å installere en ny tegneapp fra den offisielle appbutikken. Nå er det et nytt ikon på skjermen.',
      explanation: 'Dette er normalt. Jens vet hvor ikonet kommer fra, for han installerte appen med hjelp fra en voksen.',
      tip: 'Et nytt ikon du kan forklare, er greit. Et nytt ikon du ikke kan forklare, bør sjekkes.',
    },
  ],
  shieldCases: [
    {
      id: 1,
      icon: '🔗',
      text: 'En fremmed skriver til deg: «Se hvem som har sett profilen din! Klikk her!»',
      explanation: 'Rare lenker kan føre til falske sider eller starte en nedlasting av skadevare. Den beste vanen er å ikke klikke på dem.',
      tip: 'Usikker på en lenke? Ikke klikk. Spør en voksen.',
    },
    {
      id: 2,
      icon: '🏪',
      text: 'Du vil ha et nytt spill. En nettside du aldri har hørt om, tilbyr det gratis, uten betaling.',
      explanation: 'Gratis kopier av betalte spill skjuler ofte skadevare. Hent spill bare fra den offisielle nettsiden eller en pålitelig appbutikk.',
      tip: '«Gratis» kopier av betalte ting er lokkemat.',
    },
    {
      id: 3,
      icon: '🔄',
      text: 'Nettbrettet ditt har sagt «Oppdateringer tilgjengelig» i flere uker. Du trykker alltid «Minn meg på det senere».',
      explanation: 'Oppdateringer tetter sikkerhetshull som skadevare bruker. Installer dem så fort du kan.',
      tip: 'Hvis en voksen sier ja, slå på automatiske oppdateringer.',
    },
    {
      id: 4,
      icon: '🙋',
      text: 'Et vindu på familiens bærbare datamaskin vil installere et program du ikke kjenner. Mamma er i rommet ved siden av.',
      explanation: 'Før du installerer noe, spør en voksen. Hen kan sjekke om programmet er trygt og kommer fra et pålitelig sted.',
      tip: 'Å spørre en voksen er aldri et dumt spørsmål.',
    },
    {
      id: 5,
      icon: '📎',
      text: 'En e-post sier at den er fra et fraktfirma. Den har en vedlagt fil: «faktura.zip». Du ventet ingen pakke.',
      explanation: 'Vedlegg du ikke ventet, kan skjule skadevare. Åpne et vedlegg bare hvis du venter det og kjenner avsenderen.',
      tip: 'Uventet vedlegg? Ikke åpne det. Spør avsenderen på en annen måte, eller spør en voksen.',
    },
    {
      id: 6,
      icon: '🛡️',
      text: 'Familiens datamaskin har ikke noe beskyttelsesprogram i det hele tatt. Du vil ha noe som skanner filer og varsler om skadevare.',
      explanation: 'Antivirusprogramvare leter etter skadevare og varsler deg. Det er ett av lagene som beskytter datamaskinen din.',
      tip: 'Antivirus hjelper, men erstatter ikke forsiktige vaner.',
    },
  ],
  levelMeta: [
    {
      title: 'Nivå 1 av 7 — Filskanner',
      short: 'Filskanner',
      task: 'Er denne filen trygg, eller skal den i karantene?',
      app: '📁 Filutforsker',
      msg: '🔍 Skanner fil…',
    },
    {
      title: 'Nivå 2 av 7 — E-postinnboks',
      short: 'E-postinnboks',
      task: 'Er denne e-posten ekte, eller er det phishing?',
      app: '📧 E-post',
      msg: '📧 Leser e-post…',
    },
    {
      title: 'Nivå 3 av 7 — Nettlesersprettoppvinduer',
      short: 'Sprettoppvinduer',
      task: 'Klikke på knappen, eller lukke vinduet?',
      app: '🌐 Nettleser',
      msg: '⚠️ Sprettoppvindu oppdaget!',
    },
    {
      title: 'Nivå 4 av 7 — Apptillatelser',
      short: 'Apptillatelser',
      task: 'Tillate denne appen, eller avslå den?',
      app: '⚙️ Appbehandler',
      msg: '⚙️ Gjennomgår tillatelser…',
    },
    {
      title: 'Nivå 5 av 7 — Typer skadevare',
      short: 'Typer skadevare',
      task: 'Hvilken type skadevare er dette?',
      app: '🔬 Skadevarelaboratorium',
      msg: '🔬 Studerer oppførselen…',
    },
    {
      title: 'Nivå 6 av 7 — Tegn på infeksjon',
      short: 'Tegn på infeksjon',
      task: 'Er dette normalt, eller et varselsignal om skadevare?',
      app: '🩺 Enhetssjekk',
      msg: '🩺 Sjekker enheten…',
    },
    {
      title: 'Nivå 7 av 7 — Beskyttelse',
      short: 'Beskyttelse',
      task: 'Hvilket sikkerhetstiltak passer best?',
      app: '🛡️ Sikkerhetssenter',
      msg: '🛡️ Velger beskyttelse…',
    },
  ],
  files: [
    {
      id: 1,
      icon: '⚙️',
      name: 'FreeMinecraft_Crack.exe',
      type: 'Kjørbar fil (.exe)',
      source: 'Lastet ned fra: crack-games-free.ru',
      size: '14,2 MB',
      date: 'I dag, 15:41',
      description: 'Et installasjonsprogram som hevder å gi deg gratis Minecraft. Lastet ned fra et uoffisielt russisk nettsted.',
      explanation: 'Crackede spillinstallatører skjuler ofte trojanske hester og løsepengevirus. .exe-filen, det rare nettstedet og løftet om "gratis crack" er røde flagg.',
      tip: 'Last bare ned programvare fra offisielle nettsteder.',
    },
    {
      id: 2,
      icon: '📄',
      name: 'History_Essay_Draft.docx',
      type: 'Word-dokument (.docx)',
      source: 'Opprettet lokalt på denne enheten',
      size: '48 KB',
      date: 'I går, 19:15',
      description: 'Et Word-dokument du selv opprettet til historiefaget.',
      explanation: 'Et lite Word-dokument du opprettet lokalt er trygt. Det har en standardendelse, liten filstørrelse og lokal opprinnelse.',
      tip: 'Vær forsiktig med .docx-filer mottatt fra fremmede — de kan inneholde ondsinnede makroer. Men selvopprettede filer er trygge.',
    },
    {
      id: 3,
      icon: '📜',
      name: 'speedup_your_pc.bat',
      type: 'Batchskript (.bat)',
      source: 'Mottatt via Discord DM fra: xX_h4ck3r_Xx',
      size: '3,1 KB',
      date: 'I dag, 11:02',
      description: 'Et batchskript sendt via Discord av en ukjent bruker, som hevder å gjøre PC-en din raskere.',
      explanation: '.bat-filer kan kjøre hvilken som helst kommando på datamaskinen din. De kan installere skadevare eller slette filer. Kjør aldri skript fra fremmede.',
      tip: 'Kjør aldri .bat- eller .vbs-skript fra personer du ikke kjenner og stoler fullt ut på, selv om de hevder det er ufarlig.',
    },
    {
      id: 4,
      icon: '🎵',
      name: 'Summer_Playlist.mp3',
      type: 'Lydfil (.mp3)',
      source: 'Lagret fra Spotify-skrivebordsappen',
      size: '8,7 MB',
      date: 'For 3 dager siden',
      description: 'En musikkfil lagret gjennom den offisielle Spotify-appen.',
      explanation: 'Dette er en vanlig musikkfil fra en pålitelig app. .mp3-filer kan ikke kjøre programmer, så de er trygge.',
      tip: 'Standard mediefiler (.mp3, .jpg, .mp4) er generelt trygge. Pass bare på filer som skjuler endelsen sin, f.eks. "song.mp3.exe".',
    },
    {
      id: 5,
      icon: '⚙️',
      name: 'RegFix_Pro_Setup.exe',
      type: 'Kjørbar fil (.exe)',
      source: 'Levert via nettlesersprettoppvinduannonse',
      size: '2,1 MB',
      date: 'I dag, 14:18',
      description: 'Et "registerreparasjonsverktøy" som ble tilbudt av en sprettoppannonse som hevdet at PC-en din er skadet.',
      explanation: 'Falske "PC-reparasjons"-verktøy fra sprettoppannonser skjuler ofte reklamevare og spionvare. Ekte reparasjonsverktøy blir ikke solgt slik.',
      tip: 'Ekte antivirusprogrammer blir aldri annonsert i tilfeldige sprettoppvinduer.',
    },
    {
      id: 6,
      icon: '📸',
      name: 'Birthday_Party.jpg',
      type: 'Bildefil (.jpg)',
      source: 'Mottatt via WhatsApp fra: Bestemor',
      size: '2,9 MB',
      date: 'Forrige uke',
      description: 'Et bilde fra bursdagsfesten din sendt av bestemoren din.',
      explanation: 'Et .jpg-bilde fra et kjent familiemedlem er trygt. Standard bilder fra pålitelige kontakter er ikke skadevare.',
      tip: 'Se opp for doble endelser som "photo.jpg.exe". Den siste delen viser den ekte filtypen.',
    },
    {
      id: 7,
      icon: '📜',
      name: 'FREE_ROBUX_GENERATOR.vbs',
      type: 'VBScript (.vbs)',
      source: 'Lenke fra en YouTube-kommentar',
      size: '1,8 KB',
      date: 'I dag, 09:55',
      description: 'Et skript fra en YouTube-kommentar som hevder å generere ubegrenset Robux for Roblox.',
      explanation: '"Gratis Robux"-generatorer finnes ikke. De er svindel. Et .vbs-skript kan kjøre skadelige kommandoer på datamaskinen din.',
      tip: 'Generatorer for gratis spillvaluta er alltid svindel. De eksisterer kun for å stjele kontoer, installere skadevare eller begge deler.',
    },
    {
      id: 8,
      icon: '📊',
      name: 'Science_Project_Data.xlsx',
      type: 'Excel-regneark (.xlsx)',
      source: 'Sendt på e-post fra: johnson.s@westridge-school.edu',
      size: '156 KB',
      date: 'I går, 10:33',
      description: 'En Excel-fil med naturfagsprosjektdata sendt av din verifiserte skolelærer.',
      explanation: 'Dette regnearket er fra læreren din, fra en ekte skoleadresse. Filtype og størrelse er normale.',
      tip: 'Office-filer fra fremmede kan skjule skadelige makroer. Sjekk hvem som sendte filen før du åpner den.',
    },
    {
      id: 9,
      icon: '📸',
      name: 'Feriebilder.jpg.exe',
      type: 'Program (.exe)',
      source: 'Sendt i en chat av en du bare kjenner på nettet',
      size: '1,4 MB',
      date: 'I dag, 16:07',
      description: 'Filen ser ut som et feriebilde. Navnet har to endelser: «.jpg» og «.exe».',
      explanation: 'Bare den siste endelsen teller. Denne filen slutter på .exe, så den er et program, ikke et bilde. Angripere setter «.jpg» først for at filen skal se ut som et bilde.',
      tip: 'Les hele filnavnet helt til slutt. Hvis det slutter på .exe, er det et program.',
    },
    {
      id: 10,
      icon: '⚙️',
      name: 'Minecraft_Launcher_Setup.exe',
      type: 'Installasjonsprogram (.exe)',
      source: 'Lastet ned fra: minecraft.net (den offisielle nettsiden)',
      size: '2,4 MB',
      date: 'I dag, 17:30',
      description: 'Installasjonsprogrammet til spillet. Pappa lastet det ned fra den offisielle nettsiden.',
      explanation: 'En .exe-fil er ikke alltid dårlig. Denne kommer fra produsentens offisielle nettside, og en voksen lastet den ned. Det som teller, er hvor en fil kommer fra.',
      tip: 'Selv med et trygt installasjonsprogram: spør en voksen før du installerer noe.',
    },
  ],
  emails: [
    {
      id: 1,
      fromName: 'IT-sikkerhetsteam',
      fromAddr: 'security-alert@school-itsupport.xyz',
      subject: 'HASTER: Skolekontoen din er blitt hacket — tilbakestill passordet NÅ',
      body: `Kjære elev,

Systemene våre oppdaget uautorisert tilgang til skolekontoen din fra en ukjent plassering.

Du må tilbakestille passordet UMIDDELBART ved å kjøre det vedlagte verktøyet. Hvis du ikke handler innen 30 minutter, vil kontoen bli permanent låst.

— IT-sikkerhetsavdelingen`,
      attachment: 'PasswordReset_Tool.exe',
      explanation: 'Mange røde flagg: en rar ".xyz"-adresse, hastverk og en .exe-fil. En ekte IT-avdeling sender en lenke til en påloggingsside, ikke et program.',
      tip: 'Fått en skummel sikkerhetsmelding? Ring IT på et nummer du allerede kjenner. Ikke bruk kontaktinfo fra e-posten.',
    },
    {
      id: 2,
      fromName: 'Ms. Johnson',
      fromAddr: 'johnson.s@westridge-school.edu',
      subject: 'Vitenskapsmesse — prosjektbeskrivelse vedlagt',
      body: `Hei klasse,

vedlagt finner dere den offisielle prosjektbeskrivelsen for den kommende vitenskapsmessen. Den dekker de nødvendige seksjonene, formateringsretningslinjer og innleveringsfristen.

Ta med det ferdige plakatet og rapporten til Rom 14 innen fredag.

Gi meg beskjed hvis dere har spørsmål!

Ms. Johnson
Naturfagsavdelingen, Westridge School`,
      attachment: 'Science_Fair_Project_Brief.docx',
      explanation: 'Dette er en ekte skole-e-post. Den kommer fra en skoleadresse, Word-dokumentet passer til temaet, og ingen ber om privat informasjon.',
      tip: 'En .docx-fil fra lærerens skoleadresse er trygg. Sjekk likevel alltid hele avsenderadressen før du åpner noe.',
    },
    {
      id: 3,
      fromName: 'Lucas (spillkompis)',
      fromAddr: 'lucas.gamer99@gmail.com',
      subject: 'kompis kjør dette det gir deg uendelig med mynter i spillet!!',
      body: `hei!!

fant dette syke skriptet på nett som gir deg ubegrensede mynter i Clash Royale. bare kjør .bat-filen og den patcher spillet automatisk lol

broren min prøvde det og det fungerte. ikke si det til noen

– Lucas`,
      attachment: 'coin_hack_v3_FINAL.bat',
      explanation: 'Selv en melding fra en venn kan inneholde skadevare. Lucas sin konto kan være hacket, eller han vet ikke at filen er skadelig. En .bat-fil som "hacker" et spill er et triks med trojanske hester. En angriper kan få kontroll over datamaskinen din.',
      tip: 'Kjør aldri .bat- eller .vbs-skript fra noen, inkludert venner. "Cheat"-skript for nettspill er nesten alltid skadevare i forkledning.',
    },
    {
      id: 4,
      fromName: 'Skolebiblioteket',
      fromAddr: 'library@westridge-school.edu',
      subject: 'Sommerleseprogram — leselisten din',
      body: `Hei,

takk for at du meldte deg på sommerleseprogrammet vårt! Vedlagt er din personlige leseliste basert på aldersgruppe og interesser.

Du kan låne hvilken som helst av disse titlene fra skolebiblioteket eller bestille dem via elevportalen.

God lesing!

Westridge School bibliotekteam`,
      attachment: 'Summer_Reading_List.pdf',
      explanation: 'En ekte e-post fra skolebiblioteket, sendt fra skoleadressen. .pdf-filen er en leseliste. Ingen ber om privat informasjon.',
      tip: 'PDF-er fra folk du kjenner er som regel trygge. Vær forsiktig med PDF-er fra fremmede. De kan skjule skript.',
    },
    {
      id: 5,
      fromName: 'PREMIEVARSLINGSSENTER',
      fromAddr: 'winner@free-prize-claim.net',
      subject: 'DU ER VALGT — KREV DIN iPhone NÅ!!!',
      body: `GRATULERER!!!

Du er tilfeldig valgt som vår heldige vinner! For å kreve din splitter nye iPhone, fyll ut og returner det vedlagte skjemaet med dine personlige opplysninger og et fraktgebyr på 4,99 USD.

Svar innen 12 TIMER ellers utløper premien din!

[KREV MIN PREMIE →]`,
      attachment: 'WINNER_ClaimForm_URGENT.html',
      explanation: 'Premiesvindel med en .html-fil. Når du åpner den, vises en falsk side som stjeler opplysningene og betalingsinformasjonen din. Røde flagg: en premie du aldri deltok i, hastverk, en rar adresse og STORE BOKSTAVER.',
      tip: 'En .html-fil i en e-post kan åpne en falsk innloggings- eller betalingsside rett på enheten din. Nettfiltre fanger den kanskje ikke opp.',
    },
  ],
  popups: [
    {
      id: 1,
      browserUrl: 'https://free-movies-unlimited.pirate',
      appName: 'SIKKERHETSVARSEL',
      icon: '🚨',
      message: '⚠️ VIRUS OPPDAGET! Datamaskinen din er infisert med 47 virus! Ring 1-800-FIX-NOW umiddelbart ellers vil systemet ditt bli permanent skadet!',
      subtext: 'Windows Defender har oppdaget kritiske trusler. Handle nå!',
      primaryBtnText: '📞 Ring nå og fiks',
      explanation: 'Dette er "skremmevare": et falskt virusvarsel som skremmer deg til å ringe en svindler eller installere falsk antivirus. Ekte sikkerhetsprogrammer varsler deg aldri på en nettside.',
      tip: 'Lukk mistenkelige nettlesersprettoppvinduer med X-knappen. Ring aldri telefonnumre vist i nettlesersprettoppvinduer — det er alltid svindeltelefoner.',
    },
    {
      id: 2,
      browserUrl: 'https://school-portal.edu',
      appName: 'Skoleportalen',
      icon: '🍪',
      message: 'Dette nettstedet bruker informasjonskapsler for å huske innloggingen din og forbedre opplevelsen din.',
      subtext: 'Vi bruker kun nødvendige informasjonskapsler. Ingen personlige data deles med tredjeparter.',
      primaryBtnText: '✓ Godta informasjonskapsler',
      explanation: 'Dette er et ekte informasjonskapsel-varsel fra skoleportalen din. Det sier hva informasjonskapslene brukes til og ber ikke om noe rart. Å godta nødvendige informasjonskapsler på et pålitelig nettsted er greit.',
      tip: 'Varsler om informasjonskapsler på nettsteder du kjenner og stoler på er normale. Mange land krever dem.',
    },
    {
      id: 3,
      browserUrl: 'https://gaming-news-blog.com',
      appName: 'Gratulerer!!!',
      icon: '🎉',
      message: 'DU ER DEN 1 000 000. BESØKENDE! Du har vunnet en GRATIS PlayStation 5! Klikk nedenfor for å kreve premien din umiddelbart!',
      subtext: '⏱️ Tilbudet utløper om: 00:59 — krev det før tiden renner ut!',
      primaryBtnText: '🎮 Krev GRATIS PS5!',
      explanation: 'Et falskt premievindu. Ingen nettside gir bort en gratis PlayStation 5. Knappen fører til en svindelside som vil ha opplysningene eller pengene dine. Nedtellingen skal få deg til å skynde deg.',
      tip: 'Nedtellingstimere i sprettoppvinduer finnes for å stoppe deg fra å tenke. Ekte premier distribueres aldri gjennom tilfeldige nettlesersprettoppvinduer.',
    },
    {
      id: 4,
      browserUrl: 'https://youtube.com',
      appName: 'YouTube',
      icon: '🔔',
      message: 'Vil du tillate YouTube å sende deg varsler om nye videoer fra kanaler du abonnerer på?',
      subtext: 'Du kan endre dette senere i nettleserinnstillingene.',
      primaryBtnText: 'Tillat varsler',
      explanation: 'YouTube er et ekte nettsted, men det tryggeste er å blokkere varsler, også fra pålitelige nettsteder. Når du først har tillatt dem, kan de misbrukes eller bli til spam.',
      tip: 'Tenk deg om før du tillater varsler. De fleste nettsteder fungerer fint uten.',
    },
    {
      id: 5,
      browserUrl: 'https://download-cracked-software.cc',
      appName: 'Nedlastingsbehandler',
      icon: '⬇️',
      message: 'Fil klar: "Adobe_Photoshop_FULL_CRACK.exe" (87 MB). Vår KI verifiserte denne filen som TRYGG.',
      subtext: 'Drevet av VirusSafe™ — skannet og godkjent. Klikk for å laste ned umiddelbart.',
      primaryBtnText: '✓ Last ned nå',
      explanation: 'Røde flagg: en rar ".cc"-adresse, et cracket (piratkopiert) program som nesten alltid skjuler skadevare, og et "TRYGG"-merke nettstedet har gitt seg selv. "VirusSafe™" er funnet på for å lure deg.',
      tip: 'Cracket eller piratkopiert programvare skjuler nesten alltid skadevare. Last bare ned programmer fra produsentens offisielle nettside.',
    },
    {
      id: 6,
      browserUrl: 'https://school-portal.edu',
      appName: 'Skoleportal',
      icon: '⏱️',
      message: 'Du blir logget ut om 2 minutter fordi du ikke har klikket på noe. Vil du forbli innlogget?',
      subtext: 'Dette beskytter kontoen din på delte datamaskiner.',
      primaryBtnText: 'Forbli innlogget',
      explanation: 'En nedtelling er ikke alltid et triks. Denne meldingen står i din egen skoleportal. Den spør bare om du vil forbli innlogget, og ber ikke om penger eller private opplysninger.',
      tip: 'Sjekk nettsiden og hva sprettoppvinduet ber deg gjøre, ikke bare om det har en timer.',
    },
    {
      id: 7,
      browserUrl: 'https://fast-news-today.net',
      appName: 'Oppdatering av spiller',
      icon: '🔄',
      message: 'Videospilleren din er utdatert! Installer oppdateringen nå for å fortsette å se.',
      subtext: 'Last ned VideoPlayer_Update.exe (1,2 MB). Det tar bare 10 sekunder!',
      primaryBtnText: 'Oppdater nå',
      explanation: 'Ekte oppdateringer kommer fra selve programmet eller fra innstillingene på enheten, ikke fra et sprettoppvindu på en nettside. En falsk «spilleroppdatering» er et vanlig triks for å få folk til å installere skadevare.',
      tip: 'Oppdater bare via enhetens innstillinger eller produsentens offisielle side. Aldri via et sprettoppvindu.',
    },
  ],
  permissions: [
    {
      id: 1,
      appIcon: '🔦',
      appName: 'Flashlight Pro',
      source: 'Utgiver: Ukjent utvikler · ⭐ 2,1 · 500 nedlastinger',
      description: 'En enkel lommelykteapp.',
      permissions: [
        { icon: '📷', name: 'Kamera', reason: 'For å aktivere blits-LED', suspicious: false },
        { icon: '📍', name: 'Nøyaktig plassering (GPS)', reason: 'Ingen grunn oppgitt', suspicious: true },
        { icon: '📞', name: 'Lese anropslogg', reason: 'Ingen grunn oppgitt', suspicious: true },
        { icon: '💾', name: 'Tilgang til alle filer', reason: 'Ingen grunn oppgitt', suspicious: true },
      ],
      explanation: 'En lommelykt-app trenger bare kameraet til lyset. Den trenger ikke posisjonen din, anropslisten eller alle filene dine. Spionvare ber om slikt for å samle inn dataene dine.',
      tip: 'Spør alltid: "Hvorfor trenger denne appen dette?" En lommelykt har ingen bruk for GPS-en eller kontaktene dine.',
    },
    {
      id: 2,
      appIcon: '📷',
      appName: 'School Photo Editor',
      source: 'Utgiver: Creative Tools Ltd · ⭐ 4,7 · 2M+ nedlastinger',
      description: 'Rediger og forbedre bilder til skoleprosjekter.',
      permissions: [
        { icon: '📷', name: 'Kamera', reason: 'For å ta nye bilder til redigering', suspicious: false },
        { icon: '🖼️', name: 'Tilgang til bilder', reason: 'For å åpne eksisterende bilder', suspicious: false },
        { icon: '💾', name: 'Lagre til lagring', reason: 'For å lagre redigerte bilder', suspicious: false },
      ],
      explanation: 'Alle tre tillatelsene passer til en bilderedigerer: kamera for å ta bilder, bilder å redigere, lagring for å lagre. Den ber ikke om mer.',
      tip: 'Hvis hver tillatelse passer til det appen gjør, er appen sannsynligvis ærlig.',
    },
    {
      id: 3,
      appIcon: '🎮',
      appName: 'SuperRun Adventure',
      source: 'Utgiver: FastGame Studio · ⭐ 4,1 · 800K nedlastinger',
      description: 'Et fartsfylt side-scrolling plattformspill.',
      permissions: [
        { icon: '🔊', name: 'Spill av lyd', reason: 'For lydeffekter i spillet', suspicious: false },
        { icon: '📳', name: 'Vibrasjon', reason: 'For haptisk tilbakemelding under spilling', suspicious: false },
        { icon: '📍', name: 'Nøyaktig GPS-plassering', reason: 'Ingen grunn oppgitt', suspicious: true },
        { icon: '📱', name: 'Les enhets-ID og info', reason: 'Ingen grunn oppgitt', suspicious: true },
      ],
      explanation: 'Lyd og vibrasjon er normalt i et spill. Men et plattformspill trenger ikke GPS eller enhets-ID. De brukes til å spore deg og selge data til annonsører.',
      tip: 'Selv apper med gode vurderinger kan be om unødvendige tillatelser. Avslå alltid tillatelser som ikke har en klar kobling til appens formål.',
    },
    {
      id: 4,
      appIcon: '📚',
      appName: 'CsHub Learning',
      source: 'Utgiver: CsHub Education · ⭐ 4,9 · 50K nedlastinger',
      description: 'Interaktiv cybersikkerhetslæring for elever.',
      permissions: [
        { icon: '🌐', name: 'Internettilgang', reason: 'For å laste inn leksjoner og quizer', suspicious: false },
        { icon: '💾', name: 'Lokal lagring', reason: 'For å lagre fremgangen din uten nett', suspicious: false },
      ],
      explanation: 'En læringsapp trenger internett for å laste leksjoner og lagring for å lagre fremgangen din. Den ber bare om det den trenger. Det er god personvernpraksis.',
      tip: 'Apper som bare ber om de tillatelsene de trenger, respekterer personvernet ditt.',
    },
  ],
}
