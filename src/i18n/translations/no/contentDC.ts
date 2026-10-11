// ---------------------------------------------------------------------------
// Digital Citizenship (DC) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Digital Citizenship module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDC = {
  aim: 'Å gi en forståelse av hva digitalt medborgerskap er og hvordan man følger kjerneprinsippene.',
  objectives: [
    'Å understreke viktigheten av digitalt medborgerskap.',
    'Å introdusere konseptet digitalt medborgerskap og dets prinsipper om rettigheter, ansvar og respekt i digitale miljøer.',
    'Å utvikle forståelse av hvordan man anvender disse prinsippene om rettigheter, ansvar og respekt i digitale miljøer – å være trygg, klok og sosial.',
  ],
  outcomes: [
    'Jeg kan forklare hva digitalt medborgerskap er og hvorfor det er viktig.',
    'Jeg kan diskutere prinsippene om rettigheter, ansvar og respekt i digitale miljøer, inkludert hvordan man holder seg trygg, opptrer klokt og engasjerer seg sosialt.',
  ],
  parts: [
    {
      goal: 'Hjelpe elever til å forstå hva et digitalt miljø er og positive aspekter ved dette.',
      bundle: {
        filename: 'Digitalt medborgerskap - pakke - del 1',
      },
      included: {
        materials: [
          {
            // ID: 1.1.1
            kind: 'Scenariokort',
            name: 'Fysiske og digitale verdener',
            filename: 'Scenariokort - Fysiske og digitale verdener',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Hva er et digitalt miljø?',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.1.2
        title: 'Hva er et digitalt miljø og digitale systemer?',
        supportText:
          'Bruk denne videoen til å starte en diskusjon om nettrom elevene allerede bruker, fra læringsplattformer til spill og meldingsapper. Pause for raske refleksjoner om hvor elever tilbringer tid på nettet.',
        downloads: {
          video: {
            filename: 'Hva er et digitalt miljø og digitale systemer',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hva er et digitalt miljø og digitale systemer - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal: 'Hjelpe elever til å forstå hva digitalt medborgerskap er og hvorfor det er viktig.',
      bundle: {
        filename: 'Digitalt medborgerskap - pakke - del 2',
      },
      included: {
        materials: [
          {
            // ID: 1.2.1
            kind: 'Bilde',
            name: 'Ansvarlig borger',
            filename: 'Bilde - Ansvarlig borger',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 1.2.2
            kind: 'Arbeidsark',
            name: 'Rettigheter, ansvar og respekt',
            filename: 'Arbeidsark - Rettigheter, ansvar og respekt',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Digitalt medborgerskap',
          },
          {
            title: 'Rettigheter, respekt og ansvar i digitale miljøer',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
    },
    {
      goal:
        'Hjelpe elever til å vite hvordan de kan være trygge i digitale miljøer ved å tenke kritisk og handle ansvarlig med personverninnstillinger.',
      bundle: {
        filename: 'Digitalt medborgerskap - pakke - del 3',
      },
      included: {
        materials: [
          {
            // ID: 1.3.1
            kind: 'Bilde',
            name: 'Følelse av trygghet',
            filename: 'Bilde - Følelse av trygghet',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 1.3.2
            kind: 'Bilde',
            name: 'Følelse av utrygghet',
            filename: 'Bilde - Følelse av utrygghet',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 1.3.4
            kind: 'Bilde',
            name: 'Strategi for personverninnstillinger',
            filename: 'Bilde - Strategi for personverninnstillinger',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 1.3.5
            kind: 'Bilde',
            name: 'Personverninnstillinger for apper',
            filename: 'Bilde - Personverninnstillinger for apper',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Forstå forbindelsene mellom det fysiske og digitale miljøet',
          },
          {
            title: 'Personverninnstillinger',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.3.3
        title: 'Hva er personverninnstillinger?',
        supportText:
          'Bruk denne videoen til å introdusere personverninnstillinger som et praktisk verktøy elevene kan kontrollere på appene og enhetene de allerede eier. Pause for å spørre hvilke innstillinger de har sjekket eller endret tidligere.',
        downloads: {
          video: {
            filename: 'Hva er personverninnstillinger',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hva er personverninnstillinger - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal: 'Hjelpe elever til å forstå hvordan visdom og motstandskraft kan hjelpe dem å være kloke i digitale miljøer.',
      bundle: {
        filename: 'Digitalt medborgerskap - pakke - del 4',
      },
      included: {
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Utfordringer i digitale miljøer',
          },
          {
            title: 'Forstå hvordan man utvikler motstandskraft',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.4.1
        title: 'Motstandskraft i digitale miljøer',
        supportText:
          'Bruk denne videoen til å utforske hvordan elever kan komme seg og tilpasse seg når ting går galt på nettet, fra kontoproblemer til uønsket kontakt. Pause for å spørre hvem elever henvender seg til for hjelp i slike situasjoner.',
        downloads: {
          video: {
            filename: 'Motstandskraft i digitale miljøer',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Motstandskraft i digitale miljøer - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal:
        'Hjelpe elever til å forstå hvordan de handler ansvarlig, viser respekt for seg selv og andre når de engasjerer seg sosialt i digitale miljøer.',
      bundle: {
        filename: 'Digitalt medborgerskap - pakke - del 5',
      },
      included: {
        materials: [
          {
            // ID: 1.5.1
            kind: 'Bilde',
            name: 'Digitalt fotavtrykk',
            filename: 'Bilde - Digitalt fotavtrykk',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 1.5.2
            kind: 'Scenariokort',
            name: 'Godt og dårlig å dele',
            filename: 'Scenariokort - Godt og dårlig å dele',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 1.5.3
            kind: 'Scenariokort',
            name: 'Innlegg på sosiale medier',
            filename: 'Scenariokort - Innlegg på sosiale medier',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Handle ansvarlig i digitale miljøer',
          },
          {
            title: 'Handle respektfullt i digitale miljøer',
          },
          {
            title: 'Skape et positivt digitalt fotavtrykk',
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
    {
      moduleId: 'dm',
      brand: 'DM',
      href: '/learning-hub/digital-misuse/content',
      imageSrc: '/images/learning-hub/07_digital-misuse.webp',
    },
  ],
}

export const challengeDC = {
  title: 'GODT eller DÅRLIG innhold å dele?',
  subtitle: 'Sorter hvert innlegg i riktig sone. Lær hva som er trygt, snilt og rettferdig å dele på nettet!',
  howItWorks: 'Slik fungerer det',
  instruction: 'Dra hvert innleggskort inn i sonen det hører til. På mobil eller med tastatur velger du et kort og så en sone under det. Noen innlegg er greie, noen er private, noen er slemme, og noen må du spørre en venn om lov til først.',
  tip: 'Stopp og tenk før du legger ut noe: Er det trygt? Er det snilt? Handler det om noen andre?',
  tipLabel: 'Tips',
  tryAgain: 'Prøv igjen',
  correctCountLabel: 'Riktig',
  postsToSort: 'Innlegg å sortere',
  dragHere: 'Dra innlegg hit',
  zoneAriaTemplate: 'Slippsone: {zone}',
  chooseZoneLabel: 'Hvor hører dette innlegget hjemme?',
  correctInTemplate: 'Riktig! → {zone}',
  zones: {
    good: { icon: '✅', title: 'Greit å legge ut', hint: 'Snilt, trygt og om deg selv' },
    private: { icon: '🔒', title: 'Hold privat', hint: 'Kan hjelpe en fremmed med å finne eller lure deg' },
    unkind: { icon: '💔', title: 'Ikke snilt', hint: 'Kan såre, skamme ut eller holde noen utenfor' },
    ask: { icon: '🙋', title: 'Spør først', hint: 'Handler om noen andre. Legg ut bare hvis de sier ja' },
  },
  stopTitle: 'Stopp og tenk før du legger ut noe',
  stopSubtitle: 'Tre spørsmål du bør stille hver gang',
  stopQuestions: [
    { icon: '🔒', text: 'Er det trygt? Kan en fremmed bruke det til å finne eller lure meg?' },
    { icon: '💛', text: 'Er det snilt? Kan det såre, skamme ut eller holde noen utenfor?' },
    {
      icon: '🙋',
      text: 'Handler det om noen andre? Spør dem først. Hvis de sier nei, skal du ikke legge det ut. Det gjelder også i private chatter.',
    },
  ],
  stopNote: 'Når noe først er på nettet, kan du ikke alltid ta det tilbake.',
  winSummaryTemplate: '{n} av {total} på første forsøk',
  winGreat: 'Du tenker før du legger ut. Flott jobba!',
  winGood: 'Bra jobba! Se under på innleggene du bommet på.',
  winPractise: 'Fortsett å øve. Spør deg selv før du legger ut: Er det trygt? Er det snilt? Handler det om noen andre?',
  reviewTitle: 'Innlegg å huske',
  tryOtherZone: 'Ikke helt – prøv en annen sone!',
  winTitle: 'Alt er sortert!',
  playAgain: 'Spill igjen',
  posts: [
    {
      id: 1,
      text: 'Hjemmeadressen min er Hovedgaten 123',
      emoji: '🏠',
      explanation: 'Hjemmeadressen din er privat – del den aldri på nettet! Fremmede kan bruke den til å finne ut hvor du bor.',
    },
    {
      id: 2,
      text: 'Jeg elsker å spille fotball!',
      emoji: '⚽',
      explanation: 'Å dele hobbyer er helt greit og en fin måte å knytte kontakt med andre!',
    },
    {
      id: 3,
      text: 'Passordet mitt er Fluffy123',
      emoji: '🔑',
      explanation: 'Del aldri passord med noen på nettet – ikke engang med bestevennen din!',
    },
    {
      id: 4,
      text: 'Jeg fikk toppkarakter på naturfagsprøven!',
      emoji: '🎉',
      explanation: 'Å feire prestasjoner er trygt å dele – bra jobba!',
    },
    {
      id: 5,
      text: 'Telefonnummeret mitt er 555-0123',
      emoji: '📱',
      explanation: 'Telefonnumre er personlige – hold dem private så fremmede ikke kan kontakte deg.',
    },
    {
      id: 6,
      text: 'Jeg er alene hjemme til klokken 18',
      emoji: '🏡',
      explanation: 'Fortell aldri noen på nettet at du er alene hjemme – det setter sikkerheten din i fare!',
    },
    {
      id: 7,
      text: 'Skolestykket vårt er neste fredag!',
      emoji: '🎭',
      explanation: 'Skolearrangementer er greit å dele med venner!',
    },
    {
      id: 8,
      text: 'Se på den nye tegningen min!',
      emoji: '🎨',
      explanation: 'Å dele kreativt arbeid er en fin måte å uttrykke deg på!',
    },
    {
      id: 9,
      text: 'Mammaens kredittkortnummer er...',
      emoji: '💳',
      explanation: 'Finansiell informasjon som kredittkortnumre må alltid forbli privat!',
    },
    {
      id: 10,
      text: 'Favorittfilmen min er Toy Story!',
      emoji: '🎬',
      explanation: 'Å snakke om filmer du liker er helt trygt og morsomt!',
    },
    {
      id: 11,
      text: 'Hele navnet mitt er Emily Rose Johnson',
      emoji: '📛',
      explanation: 'Å dele ditt fulle navn på nettet kan hjelpe fremmede med å identifisere og spore deg.',
    },
    {
      id: 12,
      text: 'Jeg lærte nettopp å sykle!',
      emoji: '🚲',
      explanation: 'Å dele milepæler og nye ferdigheter er en fin ting å legge ut!',
    },
    {
      id: 13,
      text: 'Skapkoden min på skolen er 24-8-16',
      emoji: '🔒',
      explanation: 'Skapkoder er private – noen kan bryte seg inn i skapet ditt!',
    },
    {
      id: 14,
      text: 'Vi fikk en ny valp!',
      emoji: '🐶',
      explanation: 'Å dele om kjæledyrene dine er trygt og morsomt for alle – bare ikke bruk navnet deres i passord eller sikkerhetsspørsmål!',
    },
    {
      id: 15,
      text: 'Jeg går hjem alene gjennom parken klokken 15:30',
      emoji: '🚶',
      explanation: 'Å dele din daglige rutine og rute forteller fremmede nøyaktig hvor de kan finne deg.',
    },
    {
      id: 16,
      text: 'Vi er på ferie i to uker. Ingen er hjemme!',
      emoji: '🧳',
      explanation: 'Å si til hele verden at huset er tomt er risikabelt. Del feriebilder først når du er tilbake.',
    },
    {
      id: 17,
      text: 'Et bilde av meg utenfor skolen, der skolenavnet står på skiltet',
      emoji: '🏫',
      explanation: 'Skolenavnet viser fremmede hvor du finnes hver dag. La det stå utenfor offentlige innlegg.',
    },
    {
      id: 18,
      text: 'Gratulerer med dagen, Anna! Håper du får en fin dag!',
      emoji: '🎂',
      explanation: 'En snill melding til en venn er fint å legge ut.',
    },
    {
      id: 19,
      text: 'Laget vårt trente hardt og vi vant kampen!',
      emoji: '🏆',
      explanation: 'Å dele en lagseier er greit. Det er snilt, trygt og morsomt å lese.',
    },
    {
      id: 20,
      text: 'Jeg leste ferdig en kjempefin bok. Jeg anbefaler den!',
      emoji: '📚',
      explanation: 'Å dele det du liker er en fin måte å komme i kontakt med andre på.',
    },
    {
      id: 21,
      text: 'Lilys nye frisyre ser så stygg ut 🤮',
      emoji: '💇',
      explanation: 'Å fornærme noen på nettet sårer, og mange kan se det. Spør deg selv først: Ville jeg sagt dette rett til henne?',
    },
    {
      id: 22,
      text: 'La oss alle ignorere den nye eleven i gruppechatten',
      emoji: '🙅',
      explanation: 'Å holde noen utenfor med vilje er en form for mobbing. Alle fortjener respekt, også på nettet.',
    },
    {
      id: 23,
      text: 'Max fortalte meg en hemmelighet. Her kan alle lese den …',
      emoji: '🤫',
      explanation: 'En hemmelighet som er betrodd deg, er ikke din å dele. Å dele den bryter tilliten og kan såre Max.',
    },
    {
      id: 24,
      text: 'Tegningen din er forferdelig. Bare gi opp!',
      emoji: '👎',
      explanation: 'Slemme kommentarer kan ødelegge selvtilliten til noen. Snille og nyttige tilbakemeldinger er bedre.',
    },
    {
      id: 25,
      text: 'La oss lage en falsk konto for å gjøre narr av Ella',
      emoji: '🎭',
      explanation: 'En falsk konto for å håne noen er nettmobbing. Det er slemt og kan gi deg problemer.',
    },
    {
      id: 26,
      text: 'En slem vits om hvordan klassekameraten min snakker 😂',
      emoji: '🗣️',
      explanation: 'Å gjøre narr av hvordan noen snakker, er slemt. En vits som sårer, er ikke morsom for den den handler om.',
    },
    {
      id: 27,
      text: 'Et bilde av meg og vennene mine på festen',
      emoji: '📸',
      explanation: 'Vennene dine er også med på bildet. Spør dem først. Hvis noen sier nei, skal du ikke legge det ut.',
    },
    {
      id: 28,
      text: 'En morsom video av broren min som danser i pysjamas',
      emoji: '🕺',
      explanation: 'Det kan være morsomt for deg, men flaut for ham. Spør ham først, og respekter svaret hans.',
    },
    {
      id: 29,
      text: 'Klassebildet vårt fra skoleturen',
      emoji: '🚌',
      explanation: 'Mange er med på det. Spør dem (og læreren) først. Noen vil kanskje ikke være på nettet.',
    },
    {
      id: 30,
      text: 'Et bilde av venninnen min med spagetti over hele ansiktet',
      emoji: '🍝',
      explanation: 'Et morsomt øyeblikk for deg kan være et flaut øyeblikk for henne. Spør først, og ikke legg det ut hvis hun sier nei.',
    },
    {
      id: 31,
      text: 'Et skjermbilde av den private chatten min med Zoe',
      emoji: '💬',
      explanation: 'Zoes meldinger er også hennes. Å vise en privat chat uten å spørre kan bryte tilliten hennes.',
    },
    {
      id: 32,
      text: 'En video av vennen min som scorer selvmål',
      emoji: '🥅',
      explanation: 'Det kan gjøre ham flau, og videoer sprer seg fort. Spør først. Hvis han sier nei, skal du ikke legge den ut.',
    },
  ],
}
