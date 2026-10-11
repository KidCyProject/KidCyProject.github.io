// ---------------------------------------------------------------------------
// Data Privacy (DP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Data Privacy module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDP = {
  aim: 'Å gi grunnleggende kunnskap om hva personvern er, og om prinsipper for å beskytte private data i digitale miljøer.',
  objectives: [
    'Å introdusere hvilke typer data som er involvert når man deler innhold i digitale miljøer.',
    'Å understreke viktigheten av personvern i digitale miljøer.',
    'Å introdusere prinsippene for å beskytte personvernet i digitale miljøer.',
    'Å utvikle forståelse av hvordan digitale data brukes, og hvordan de kan slettes ved behov.',
  ],
  outcomes: [
    'Jeg kan beskrive hvilke typer data som er involvert når man deler innhold i digitale miljøer.',
    'Jeg kan forklare hvorfor personvern er viktig i digitale miljøer.',
    'Jeg kan demonstrere prinsippene for å beskytte personvernet i digitale miljøer i gitte scenarioer og begrunne valgene mine.',
    'Jeg kan gjenkjenne mønstre for datadeling som fører til brudd på personvernet i gitte scenarioer.',
    'Jeg kan forklare hvordan digitale data brukes, og hvordan de kan slettes ved behov.',
    'Jeg kan gjenkjenne eksempler på private data i gitte scenarioer.',
  ],
  parts: [
    {
      goal: 'Hjelpe elever til å forstå hva personopplysninger er, identifisere ulike typer sensitiv informasjon og gjenkjenne hvorfor det er viktig å beskytte dem.',
      bundle: {
        filename: 'Personvern - pakke - del 1',
      },
      included: {
        materials: [
          {
            // ID: 4.1.2
            kind: 'Sorteringskort',
            name: 'Privat eller offentlig',
            filename: 'Sorteringskort - Privat eller offentlig',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.1.3
            kind: 'Arbeidsark',
            name: 'Refleksjon: Offentlige vs. private data',
            filename: 'Arbeidsark - Refleksjon Offentlige vs. private data',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Hva er personopplysninger?',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.1.1
        title: 'Hva er private data?',
        supportText:
          'Bruk denne videoen til å introdusere konseptet med private data og starte en diskusjon om typer informasjon elever deler hver dag. Pause for å spørre elever hvilke detaljer de anser som private.',
        downloads: {
          video: {
            filename: 'Hva er private data',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hva er private data - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal: 'Hjelpe elever til å forstå hvordan og hvorfor data deles på nett, viktigheten av samtykke og hvordan man tar gjennomtenkte beslutninger før man deler personlig informasjon.',
      bundle: {
        filename: 'Personvern - pakke - del 2',
      },
      included: {
        materials: [
          {
            // ID: 4.2.1
            kind: 'Bilde',
            name: 'Del på nett: Trygt vs. risikabelt',
            filename: 'Bilde - Del på nett Trygt vs. risikabelt',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.2.2
            kind: 'Scenariokort',
            name: 'Rollespill',
            filename: 'Scenariokort - Rollespill',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.2.3
            kind: 'Arbeidsark',
            name: 'Del eller ikke del',
            filename: 'Arbeidsark - Del eller ikke del',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Scenarioer for datadeling',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
    },
    {
      goal: 'Hjelpe elever til å oppdage hva et digitalt fotavtrykk er, forstå hvordan hverdagslige nettaktiviteter etterlater varige spor, og vurdere den langsiktige innvirkningen av nettadferd.',
      bundle: {
        filename: 'Personvern - pakke - del 3',
      },
      included: {
        materials: [
          {
            // ID: 4.3.2
            kind: 'Bilde',
            name: 'Tegneseriehistorie: En dag i Sams nettliv',
            filename: 'Bilde - Tegneseriehistorie En dag i Sams nettliv',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.3.3
            kind: 'Arbeidsark',
            name: 'Spor Sams fotavtrykk',
            filename: 'Arbeidsark - Spor Sams fotavtrykk',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.3.4
            kind: 'Skjema',
            name: 'Spillebrett: Verdien av personvern',
            filename: 'Skjema - Spillebrett Verdien av personvern',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.3.5
            kind: 'Spillsett',
            name: 'Verdien av personvern',
            filename: 'Spillsett - Verdien av personvern',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Hva er et digitalt fotavtrykk?',
          },
          {
            title: 'Digitale spor',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.3.1
        title: 'Hva er et digitalt fotavtrykk?',
        supportText:
          'Bruk denne videoen til å hjelpe elever med å visualisere datasporen de etterlater på nett. Oppmuntre til refleksjon over hvilke av deres nylige aktiviteter som kan ha skapt et fotavtrykk.',
        downloads: {
          video: {
            filename: 'Hva er et digitalt fotavtrykk',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hva er et digitalt fotavtrykk - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal: 'Hjelpe elever til å lære praktiske strategier for å gjennomgå og administrere det digitale fotavtrykket sitt, inkludert hvordan man justerer personverninnstillinger og fjerner uønskede data.',
      bundle: {
        filename: 'Personvern - pakke - del 4',
      },
      included: {
        materials: [
          {
            // ID: 4.4.1
            kind: 'Bilde',
            name: 'Et eksempel på grunnleggende innstillinger',
            filename: 'Bilde - Et eksempel på grunnleggende innstillinger',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.4.2a
            kind: 'Arbeidsark',
            name: 'Fiks denne profilen!',
            filename: 'Arbeidsark - Fiks denne profilen',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.4.2b
            kind: 'Arbeidsark',
            name: 'Fiks denne profilen!',
            filename: 'Arbeidsark - Fiks denne profilen',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.4.3
            kind: 'Arbeidsark',
            name: 'Personverntips for barn',
            filename: 'Arbeidsark - Personverntips for barn',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.4.4
            kind: 'Arbeidsark',
            name: 'Plakatmal',
            filename: 'Arbeidsark - Plakatmal',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 4.4.6
            kind: 'Arbeidsark',
            name: 'Gåte: Bruk av digitale spor «Medlemmer av Brain Fights-laget»',
            filename: 'Arbeidsark - Gåte Bruk av digitale spor Medlemmer av Brain Fights-laget',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Beskytte private data på nett',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 4.4.5
        title: 'Beskytte personopplysningene dine på nett',
        supportText:
          'Bruk denne videoen til å introdusere konseptet med personopplysninger og starte en diskusjon om typer informasjon elever deler hver dag.',
        downloads: {
          video: {
            filename: 'Beskytte personopplysningene dine på nett',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Beskytte personopplysningene dine på nett - Undertekster',
            ariaLabel: 'Last ned undertekster',
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
  title: 'Digitalt fotavtrykk-sortering',
  subtitle: 'Sorter hver aktivitet i riktig sone, og rydd så opp i én profil. Finn ut hvilke spor du etterlater på nett — også dem du ikke ser!',
  howItWorks: 'Slik fungerer det',
  instruction: 'Dra hvert aktivitetskort inn i sonen det hører til. På mobil eller med tastatur velger du et kort og så en sone under det. Pass på: noen aktiviteter ser ut til å være uten nett, men etterlater likevel spor. Etterpå rydder du opp i en profil som deler for mye: for hver del velger du hva som skal skje med den.',
  tip: 'Spør deg selv: Etterlater jeg dette med vilje, eller blir det tatt opp stille i bakgrunnen? Eller blir ingenting tatt opp på nett?',
  tipLabel: 'Tips',
  tryAgain: 'Prøv igjen',
  activitiesToSort: 'Aktiviteter å sortere',
  dragHere: 'Dra aktiviteter hit',
  zoneAriaTemplate: 'Slippsone: {zone}',
  chooseZoneLabel: 'Hvor hører denne aktiviteten hjemme?',
  correctInTemplate: 'Riktig! → {zone}',
  zones: {
    purpose: { icon: '✍️', title: 'Med vilje (aktivt)', hint: 'Du legger ut, sender, liker eller registrerer deg selv' },
    background: { icon: '🕵️', title: 'I bakgrunnen (passivt)', hint: 'Nettsteder og apper tar det stille opp' },
    none: { icon: '🚫', title: 'Ingen digitalt fotavtrykk', hint: 'Ingenting tas opp på nett' },
  },
  cheatTitle: 'Jukselapp om fotavtrykk',
  cheatSubtitle: 'To slags spor og hvordan du gjør dem mindre',
  cheatItems: [
    {
      icon: '✍️',
      text: 'Aktivt fotavtrykk: Du etterlater det med vilje. Legge ut, kommentere, like, sende melding, registrere deg.',
    },
    {
      icon: '🕵️',
      text: 'Passivt fotavtrykk: Det samles inn i bakgrunnen. Sider du besøker, søk, videoer du ser, hvor lenge du blir, enheten og posisjonen din.',
    },
    {
      icon: '🧹',
      text: 'Slik gjør du det mindre: Del mindre, logg ut når du er ferdig, velg «bare venner» i stedet for «offentlig», og spør en pålitelig voksen hvis du ikke forstår en innstilling.',
    },
  ],
  stage1Label: 'Steg 1 av 2: Sorter fotavtrykkene',
  stage2Label: 'Steg 2 av 2: Rydd opp i en profil',
  cleanupTitle: 'Rydd opp i Emmas profil',
  cleanupIntro: 'Emmas profil deler for mye. For hver del velger du hva Emma bør gjøre.',
  profileVisibleLabel: 'Synlig for',
  profileEveryone: 'Alle',
  actions: { delete: '🗑️ Slett eller slå av', hide: '🙈 Skjul (bare venner)', change: '✏️ Endre', keep: '✅ Behold' },
  cleanupProgressTemplate: 'Del {n} av {total}',
  cleanupScoreLabel: 'Riktig',
  chooseActionLabel: 'Hva skal skje med denne delen?',
  cleanupCorrect: 'Riktig!',
  cleanupAlso: 'Det er også et bra valg!',
  cleanupWrong: 'Ikke helt.',
  cleanupBestTemplate: 'Beste valg: {action}',
  nextButton: 'Neste →',
  toCleanupButton: 'Fortsett til steg 2 →',
  resultsButton: 'Se resultatet →',
  stage1DoneTitle: 'Fotavtrykkene er sortert!',
  firstTryTemplate: '{n} av {total} på første forsøk',
  winGreat: 'Du kjenner igjen alle slags fotavtrykk. Flott jobba!',
  winGood: 'Bra jobba! Se under på det som ikke gikk helt riktig.',
  winPractise: 'Fortsett å øve. Spør deg selv før du klikker: Etterlater jeg dette sporet med vilje? Eller blir det tatt opp stille?',
  reviewTitle: 'Husk disse',
  profile: [
    {
      id: 1,
      icon: '📛',
      label: 'Profilnavn',
      value: 'Emma Rose Hansen',
      explanation: 'Et fullt, ekte navn gjør det lett for fremmede å finne deg. Endre det til et kallenavn som ikke viser det ekte navnet ditt.',
    },
    {
      id: 2,
      icon: '🎂',
      label: 'Bursdag',
      value: '12. mai 2013',
      explanation: 'Med bursdagen din kan man gjette passord og late som man er deg. Skjul den slik at bare venner ser den, eller fjern den.',
    },
    {
      id: 3,
      icon: '📸',
      label: 'Bilde',
      value: 'Emma foran huset sitt. Husnummeret står på døra.',
      explanation: 'Et bilde kan vise private ting i bakgrunnen, for eksempel et husnummer. Slett det, eller visk ut nummeret før du deler.',
    },
    {
      id: 4,
      icon: '🏫',
      label: 'Skole',
      value: 'Solbakken skole',
      explanation: 'Et skolenavn forteller fremmede hvor de finner deg hver dag. Skjul det for offentligheten, eller fjern det.',
    },
    {
      id: 5,
      icon: '⚽',
      label: 'Om meg',
      value: 'Jeg elsker fotball og tegning!',
      explanation: 'Du kan dele hobbyer. De viser ikke hvem du er eller hvor du bor. La det stå.',
    },
    {
      id: 6,
      icon: '🏠',
      label: 'Hjemmeadresse',
      value: 'Eikeveien 14',
      explanation: 'Ingen trenger hjemmeadressen din på en profil. Slett den. Del den aldri på nett.',
    },
    {
      id: 7,
      icon: '💢',
      label: 'Gammel kommentar',
      value: '«Du er så dum!» (skrevet til en klassekamerat da Emma var sint)',
      explanation: 'Slemme ord blir på nettet og kan såre noen. Slett kommentaren, og si unnskyld ansikt til ansikt hvis du kan.',
    },
    {
      id: 8,
      icon: '📱',
      label: 'Telefonnummer',
      value: '555-0123',
      explanation: 'Med telefonnummeret ditt kan fremmede kontakte deg. Slett det fra profilen. Venner kan få det direkte av deg.',
    },
    {
      id: 9,
      icon: '🐶',
      label: 'Bilde',
      value: 'Emmas hund i hagen',
      explanation: 'Et kjæledyrbilde uten noe privat i bakgrunnen er greit. Bare ikke bruk kjæledyrets navn i et passord.',
    },
    {
      id: 10,
      icon: '📍',
      label: 'Posisjonsmerke',
      value: 'Hvert innlegg viser nøyaktig hvor Emma er akkurat nå',
      explanation: 'En posisjon i sanntid forteller fremmede hvor du er. Slå den av. Hvor du var, kan du eventuelt dele senere.',
    },
  ],
  tryOtherZone: 'Ikke helt — prøv en annen sone!',
  winTitle: 'Ferdig!',
  playAgain: 'Spill igjen',
  activities: [
    {
      id: 1,
      text: 'Poste et bilde på Instagram',
      emoji: '📸',
      explanation: 'Bilder du deler på nett, forblir på servere og kan finnes av hvem som helst — til og med år senere!',
    },
    {
      id: 2,
      text: 'Lese en papirbok hjemme',
      emoji: '📖',
      explanation: 'Ingen internettforbindelse betyr at det ikke opprettes noe digitalt spor.',
    },
    {
      id: 3,
      text: 'Søke etter svar på Google',
      emoji: '🔍',
      explanation: 'Du skriver det inn med vilje, men søkemotoren tar stille opp hva du leter etter og bruker det til å vise deg tilpassede resultater.',
    },
    {
      id: 4,
      text: 'Spille fotball ute',
      emoji: '⚽',
      explanation: 'Utendørsaktiviteter uten telefon eller app etterlater ingen digital registrering.',
    },
    {
      id: 5,
      text: 'Sende en melding på WhatsApp',
      emoji: '💬',
      explanation: 'Meldinger lagres på servere og oppretter en permanent registrering av samtalene dine.',
    },
    {
      id: 6,
      text: 'Tegne et bilde med fargestifter',
      emoji: '🖍️',
      explanation: 'Tradisjonell kunst med fysiske materialer oppretter ingen nettdata.',
    },
    {
      id: 7,
      text: 'Opprette en konto på en spillnettside',
      emoji: '🎮',
      explanation: 'Registrering lagrer navnet ditt, e-postadressen og hver handling du utfører på siden.',
    },
    {
      id: 8,
      text: 'Sykle rundt i nabolaget',
      emoji: '🚲',
      explanation: 'Med mindre du bruker en sporingsapp, er sykling en rent frakoblet aktivitet.',
    },
    {
      id: 9,
      text: 'Se videoer på YouTube',
      emoji: '▶️',
      explanation: 'Du bare ser på, men YouTube tar stille opp hver video du ser og bruker det til å anbefale flere.',
    },
    {
      id: 10,
      text: 'Skrive i dagboken din på papir',
      emoji: '📓',
      explanation: 'En papirdagbok har ingen internettforbindelse — tankene dine forblir virkelig private.',
    },
    {
      id: 11,
      text: 'Like en venns TikTok-video',
      emoji: '❤️',
      explanation: 'Hvert like du gir, registreres og former din nettilstedeværelse og anbefalinger.',
    },
    {
      id: 12,
      text: 'Spille et brettspill med familien',
      emoji: '🎲',
      explanation: 'Brettspill er frakoblet moro — ingen data opprettes eller lagres noe sted.',
    },
    {
      id: 13,
      text: 'Fylle ut en nettquiz',
      emoji: '📝',
      explanation: 'Nettsteder samler hvert svar du skriver inn og kan dele det med andre.',
    },
    {
      id: 14,
      text: 'Snakke med venner på skolen',
      emoji: '🗣️',
      explanation: 'Ansikt-til-ansikt samtaler etterlater ingen digitalt spor i det hele tatt.',
    },
    {
      id: 15,
      text: 'Legge igjen en kommentar på en blogg',
      emoji: '💻',
      explanation: 'Kommentarer er offentlige, koblet til navnet ditt og forblir på nettstedet for alltid.',
    },
    {
      id: 16,
      text: 'Lese en nyhetsside uten å logge inn',
      emoji: '🌐',
      explanation: 'Nettstedet tar stille opp hvilke sider du åpner og hvor lenge du blir, selv om du ikke legger ut noe.',
    },
    {
      id: 17,
      text: 'Koble mobilen til det offentlige Wi-Fi-et på kafeen',
      emoji: '📶',
      explanation: 'Wi-Fi-nettet registrerer at enheten din koblet seg til, og kan lagre hvilke nettsteder du besøker.',
    },
    {
      id: 18,
      text: 'Betale for lunsj på skolen med kort',
      emoji: '💳',
      explanation: 'Det ser frakoblet ut, men betalingen lagres digitalt: hva du kjøpte, når og hvor.',
    },
    {
      id: 19,
      text: 'Gå til skolen med posisjonen slått på på mobilen',
      emoji: '📍',
      explanation: 'Mobilen din kan hele tiden ta opp hvor du er, uten at du legger ut noe.',
    },
    {
      id: 20,
      text: 'Bruke et smartur som teller skritt',
      emoji: '⌚',
      explanation: 'Et smartur sender skrittene dine og noen ganger pulsen til en app. Det er et stille fotavtrykk.',
    },
    {
      id: 21,
      text: 'Se på joggesko på nett og så få joggesko-reklame overalt',
      emoji: '👟',
      explanation: 'Nettsteder tar opp hva du ser på og viser deg reklame ut fra det. Du la ikke ut noe, men de så på.',
    },
    {
      id: 22,
      text: 'Sende en e-post til læreren',
      emoji: '✉️',
      explanation: 'Du skriver og sender den med vilje. E-posten blir liggende i innboksen din og i lærerens.',
    },
    {
      id: 23,
      text: 'Laste opp lekser på skolens plattform',
      emoji: '📤',
      explanation: 'Du gjør det med vilje, og plattformen lagrer filen din, navnet ditt og tidspunktet.',
    },
    {
      id: 24,
      text: 'Dele en lenke til en morsom video i klassechatten',
      emoji: '🔗',
      explanation: 'Å dele er et bevisst valg. Meldingen blir i chatten, og andre kan sende den videre.',
    },
  ],
}
