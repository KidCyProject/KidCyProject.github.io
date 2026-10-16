// ---------------------------------------------------------------------------
// Social Engineering (SE) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Social Engineering module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentSE = {
  aim: 'Å gi grunnleggende kunnskap om hva sosial manipulasjon er, med vekt på risikoene det medfører og prinsipper for å beskytte seg mot det.',
  objectives: [
    'Å introdusere begrepet sosial manipulasjon, med fokus på angripernes mål.',
    'Å forklare ulike former for sosial manipulasjon og situasjonene der de kan forekomme.',
    'Å utvikle ferdigheter i å gjenkjenne teknikker for sosial manipulasjon og måter å beskytte seg mot dem på.',
  ],
  outcomes: [
    'Jeg kan beskrive hva sosial manipulasjon er og hvilke typer som finnes.',
    'Jeg kan forklare hvorfor angripere bruker sosial manipulasjon.',
    'Jeg kan gi eksempler på situasjoner der angrep med sosial manipulasjon sannsynligvis vil forekomme.',
    'Jeg kan gjenkjenne angrep med sosial manipulasjon i gitte scenarioer.',
    'Jeg kan demonstrere måter å beskytte seg mot sosial manipulasjon på i gitte scenarioer og begrunne valgene mine.',
  ],
  parts: [
    {
      goal: 'Hjelpe elever til å forstå hva sosial manipulasjon er ved først å kjenne igjen hvordan mennesker kan bli påvirket eller manipulert i hverdagssituasjoner, og deretter koble denne forståelsen til digitale miljøer og angripernes atferd.',
      bundle: {
        filename: 'Sosial manipulasjon - pakke - del 1',
      },
      included: {
        materials: [
          {
            // ID: 5.1.2a
            kind: 'Bilde',
            name: 'Hacke systemer vs. lure mennesker',
            filename: 'Bilde - Hacke systemer vs. lure mennesker',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.1.2b
            kind: 'Bilder',
            name: 'Hacke systemer vs. lure mennesker',
            filename: 'Bilder - Hacke systemer vs. lure mennesker',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.1.3a
            kind: 'Bilde',
            name: 'En angripers mål',
            filename: 'Bilde - En angripers mål',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.1.3b
            kind: 'Bilder',
            name: 'En angripers mål',
            filename: 'Bilder - En angripers mål',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.1.4
            kind: 'Scenariokort',
            name: 'Hva vil en angriper ha?',
            filename: 'Scenariokort - Hva vil en angriper ha',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.1.5
            kind: 'Løsningskort',
            name: 'Hva vil en angriper ha?',
            filename: 'Løsningskort - Hva vil en angriper ha',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.1.6
            kind: 'Arbeidsark',
            name: 'Forstå sosial manipulasjon',
            filename: 'Arbeidsark - Forstå sosial manipulasjon',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Introduksjon til konseptet sosial manipulasjon',
          },
          {
            title: 'Hva vil angripere ha?',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 5.1.1
        title: 'Hva er sosial manipulasjon?',
        supportText:
          'Bruk denne videoen til å introdusere sosial manipulasjon som en teknikk som utnytter menneskelig tillit fremfor tekniske systemer. Pause for å spørre elever om de kan huske en situasjon der noen prøvde å lure dem på nett.',
        downloads: {
          video: {
            filename: 'Hva er sosial manipulasjon',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hva er sosial manipulasjon - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal: 'Hjelpe elever til å forstå hvorfor angripere bruker sosial manipulasjon ved å utforske de psykologiske og emosjonelle mekanismene som gjør mennesker sårbare, og øve på å tenke kritisk når de føler press.',
      bundle: {
        filename: 'Sosial manipulasjon - pakke - del 2',
      },
      included: {
        materials: [
          {
            // ID: 5.2.1
            kind: 'Scenariokort',
            name: 'Angripernes taktikker',
            filename: 'Scenariokort - Angripernes taktikker',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.2.2
            kind: 'Scenariokort',
            name: 'Puslespill om emosjonell manipulasjon',
            filename: 'Scenariokort - Puslespill om emosjonell manipulasjon',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.2.3
            kind: 'Arbeidsark',
            name: 'Hvorfor sosial manipulasjon virker',
            filename: 'Arbeidsark - Hvorfor sosial manipulasjon virker',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Tenke som en angriper',
          },
          {
            title: 'Hverdagssituasjoner der sosial manipulasjon kan skje',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
    },
    {
      goal: 'Hjelpe elever til å gjenkjenne forsøk på sosial manipulasjon ved å identifisere vanlige advarselstegn og forstå de ulike kontekstene der disse angrepene kan forekomme, både online og offline.',
      bundle: {
        filename: 'Sosial manipulasjon - pakke - del 3',
      },
      included: {
        materials: [
          {
            // ID: 5.3.2
            kind: 'Arbeidsark',
            name: 'Tegn prikk til prikk',
            filename: 'Arbeidsark - Tegn prikk til prikk',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Typer sosial manipulasjon',
          },
          {
            title: 'Øve på å gjenkjenne sosial manipulasjon',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 5.3.1
        title: 'Typer sosial manipulasjon',
        supportText:
          'Bruk denne videoen til å hjelpe elever med å gjenkjenne de ulike formene sosial manipulasjon kan ta, fra phishing-e-poster til telefonimitasjon. Pause for å diskutere hvilken type de tror ville være vanskeligst å oppdage og hvorfor.',
        downloads: {
          video: {
            filename: 'Typer sosial manipulasjon',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Typer sosial manipulasjon - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      goal: 'Hjelpe elever til å øve på å verifisere informasjon og velge trygge svar, og gi dem verktøy til å støtte andre når de møter forsøk på sosial manipulasjon.',
      bundle: {
        filename: 'Sosial manipulasjon - pakke - del 4',
      },
      included: {
        materials: [
          {
            // ID: 5.4.1
            kind: 'Bilde',
            name: 'Stopp, tenk, sjekk, spør',
            filename: 'Bilde - Stopp, tenk, sjekk, spør',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.4.2
            kind: 'Arbeidsark',
            name: 'Stopp, tenk, sjekk, spør',
            filename: 'Arbeidsark - Stopp, tenk, sjekk, spør',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.4.3
            kind: 'Scenariokort',
            name: 'Hva ville du gjort?',
            filename: 'Scenariokort - Hva ville du gjort',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.4.4
            kind: 'Rollekort',
            name: 'Prososial atferd eller tilskuereffekten',
            filename: 'Rollekort - Prososial atferd eller tilskuereffekten',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 5.4.5
            kind: 'Arbeidsark',
            name: 'Beskytte meg selv og andre',
            filename: 'Arbeidsark - Beskytte meg selv og andre',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'En enkel modell for trygge beslutninger',
          },
          {
            title: 'Øve på trygge svar',
          },
          {
            title: 'Beskytte andre og være en ansvarlig borger',
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

export const challengeSE = {
  title: 'Phishing-saksmapper',
  subtitle: 'Bli en meldingsdetektiv! Kan du avsløre svindel i e-poster, chatter, SMS-er, samtaler og til og med ansikt til ansikt? Bestem: Stol på den, Stopp og spør en voksen, eller Ignorer / Rapporter.',
  howItWorks: 'Slik fungerer det',
  instruction: 'Les hver sak. Kan du stole på den? Bør du stoppe og spørre en betrodd voksen? Eller bør du ignorere og rapportere? Se etter press, rare lenker og krav om privat informasjon. Så avslører du trikset angriperen brukte.',
  tip: 'Hvis du er usikker på en melding, sjekk Detektivnotatene med tips om hvordan du identifiserer svindel.',
  tipLabel: 'Tips',
  startTitle: 'Velkommen, detektiv!',
  startDescription: 'Du skal undersøke {n} saker: e-poster, chatter, SMS-er, telefonsamtaler og til og med besøkende. For hver av dem velger du: stol på den, stopp og spør en voksen, eller ignorer / rapporter. Så avslører du trikset. Lykke til!',
  startButton: 'Start etterforskning',
  caseProgress: 'Saksfremgang',
  trustButton: '👍 Stol på',
  ignoreButton: '⚠️ Ignorer / Rapporter',
  nextCase: 'Neste sak →',
  completedTitle: 'Etterforskning fullført!',
  completedDescription: 'Her er resultatet ditt:',
  casesIdentified: 'av {n} saker besvart på best mulig måte',
  detectiveRankLabel: 'Detektivrang',
  defaultRank: 'Nybegynnerdetektiv',
  defaultRankMessage: 'Fortsett å øve for å rykke opp!',
  performanceSummary: 'Ytelsesoppsummering',
  playAgain: 'Spill igjen',
  detectiveNotes: 'Detektivnotater',
  detectiveTipsTitle: 'Tips for å holde deg trygg online',
  redFlags: [
    '🚩 Ber om passord',
    '🚩 Falske e-postadresser',
    '🚩 Gevinster som er for gode til å være sanne',
    '🚩 Pressende frister og trusler',
    '🚩 Mistenkelige nedlastinger',
    '🚩 Emosjonell manipulasjon',
    '🚩 Rare meldinger fra folk du kjenner',
  ],
  proTip: 'Protips: Når du er i tvil, spør en betrodd voksen før du klikker på lenker eller deler informasjon!',
  caseLabel: 'Sak',
  ofLabel: 'av',
  fromLabel: 'Fra',
  subjectLabel: 'Emne',
  messageLabel: 'Melding',
  rankRookie: '🥉 Nybegynnerdetektiv',
  rankRookieMsg: 'Du er i gang med etterforskningen. Fortsett å øve for å lære deg å se røde flagg!',
  rankJunior: '🥈 Juniordetektiv',
  rankJuniorMsg: 'Du blir flinkere til å oppdage mistenkelige meldinger. Bra jobbet!',
  rankSenior: '🥇 Seniordetektiv',
  rankSeniorMsg: 'Du er flink til å identifisere phishing og svindel. Godt arbeid!',
  rankMaster: '👑 Mesterdetektiv',
  rankMasterMsg: 'Du er en phishing-ekspert! Du fanget nesten alle triksene. Enestående!',
  correctLabel: 'Riktig',
  incorrectLabel: 'Feil',
  emailBadge: 'E-post',
  chatBadge: 'Chat',
  smsBadge: 'SMS',
  callBadge: 'Telefonsamtale',
  personBadge: 'Ansikt til ansikt',
  checkButton: '🛑 Stopp og spør en voksen',
  actionTrust: 'Stol på den',
  actionCheck: 'Stopp og spør en voksen',
  actionReport: 'Ignorer / Rapporter',
  bestLabel: 'Beste svar!',
  safeLabel: 'Trygt valg',
  bestAnswerTemplate: 'Beste svar: {action}',
  safeNoteOverCautious: 'Det skader aldri å være forsiktig. Denne gangen var meldingen i orden, så du kunne stolt på den.',
  safeNoteAskOnScam: 'Å spørre en voksen er smart. Enda bedre her: ikke svar, og rapporter det.',
  safeNoteReportOnCheck: 'Å ignorere det er trygt. Enda bedre: be en voksen sjekke om det er ekte.',
  quizTitle: 'Avslør trikset! Hvilket triks bruker meldingen?',
  quizCorrectTemplate: '🔍 Ja! Trikset er: {tactic}.',
  quizWrongTemplate: '🔍 Ikke denne gangen. Trikset er: {tactic}.',
  trickLabel: 'Brukt triks',
  wantLabel: 'Hva angriperen ville ha',
  tricksSpottedTemplate: '🔍 Avslørte triks: {n} av {total}',
  safeCountTemplate: '🛡️ Trygge valg (ikke det beste svaret): {n}',
  stcaTitle: 'Stopp, tenk, sjekk, spør',
  stca: [
    { icon: '🛑', label: 'Stopp', text: 'Ta en pause før du svarer eller klikker.' },
    { icon: '🤔', label: 'Tenk', text: 'Hva vil de ha? Hvilken følelse prøver de å gi deg?' },
    { icon: '🔍', label: 'Sjekk', text: 'Se etter varselsignaler. Sjekk på en annen måte med den ekte personen eller nettsiden.' },
    { icon: '🧑‍🏫', label: 'Spør', text: 'Snakk med en forelder, lærer eller en annen betrodd voksen.' },
  ],
  tactics: {
    urgency: { label: 'Hastverk', desc: 'De vil at du skal skynde deg, så du ikke stopper og tenker.' },
    fear: { label: 'Frykt', desc: 'De skremmer deg så du handler før du tenker.' },
    trust: { label: 'Tillit og vennskap', desc: 'De oppfører seg som en venn eller hjelper, så du slipper vaktholdet.' },
    reward: { label: 'Premie eller nysgjerrighet', desc: 'En premie eller overraskelse gjør deg nysgjerrig eller grådig, så du klikker.' },
    authority: { label: 'Falsk autoritet', desc: 'De later som de bestemmer, så du adlyder.' },
    pity: { label: 'Medfølelse', desc: 'De får deg til å synes synd på noen, så du hjelper uten å sjekke.' },
  },
  wants: { information: 'Informasjon', access: 'Tilgang', money: 'Penger' },

  scenarios: [
    {
      id: 1,
      from: 'Prize Center <winner@free-prizes.net>',
      subject: 'Du vant 1 000 $!',
      message: 'Gratulerer! Du er valgt ut som vår heldige vinner! Klikk her for å hente din premie på 1 000 $. Bare oppgi foreldrenes bankdetaljer.',
      explanation: 'Dette er en klassisk svindel! Ekte premier ber aldri om bankdetaljer. E-postadressen ser også falsk ut.',
    },
    {
      id: 2,
      from: 'BestFriend_99',
      message: 'Hei! Sjekk ut denne kule nettsiden jeg fant: www.free-vbucks-4real.com — du kan få ubegrenset med V-Bucks!',
      explanation: 'Selv om det ser ut til å komme fra en venn, kan kontoen deres ha blitt hacket. Nettsteder med gratis V-Bucks er alltid svindel.',
    },
    {
      id: 3,
      from: 'School Admin <admin@your-school.edu>',
      subject: 'Påminnelse om lekser',
      message: 'Bare en påminnelse om at naturfagsprosjektet ditt har innleveringsfrist neste fredag. Sjekk klasseportalen for detaljer.',
      explanation: 'Dette er en vanlig skole-e-post. Den kommer fra en ekte skoleadresse, ber ikke om personlig informasjon og har ingen rare lenker.',
    },
    {
      id: 4,
      from: 'CoolGamer99',
      message: 'Jeg er spillutvikler! Send meg innloggingen din og jeg legger til 1000 mynter på kontoen din gratis!',
      explanation: 'Ekte spillutviklere ber aldri om passordet ditt. Denne personen prøver å stjele kontoen din!',
    },
    {
      id: 5,
      from: 'Security Team <alert@g00gle-security.com>',
      subject: 'HASTVERK: Kontoen din slettes!',
      message: 'Kontoen din vil bli permanent slettet om 24 timer med mindre du verifiserer passordet ditt NÅ!',
      explanation: 'Legg merke til det falske domenet \'g00gle\' (med nuller). Ekte selskaper truer aldri med å slette kontoen din via e-post eller ber om passord.',
    },
    {
      id: 6,
      from: 'Mamma 💕',
      message: 'Hei søtnos, kan du kjøpe melk på vei hjem? Glad i deg!',
      explanation: 'Dette er en vanlig melding fra et familiemedlem. Ingen rare lenker og ingen krav om personlig informasjon.',
    },
    {
      id: 7,
      from: 'Charity Helper <donate@kids-help-now.org>',
      subject: 'Hjelp barn i nød!',
      message: 'Vennligst doner nå! Barn lider! Send foreldrenes kredittkortnummer for å hjelpe umiddelbart!',
      explanation: 'Ekte veldedighetsorganisasjoner ber aldri om kredittkortnumre via e-post. Dette bruker følelser til å lure deg.',
    },
    {
      id: 8,
      from: 'Ukjent bruker',
      message: 'Hei! Jeg er ny på skolen din. Hva er hjemmeadressen din så jeg kan komme og henge?',
      explanation: 'Del aldri adressen din med fremmede online, selv om de hevder å kjenne deg. En ekte ny elev ville spurt på skolen.',
    },
    {
      id: 9,
      from: 'Cloud Drive Alerts <alerts@cloud-drive-help.com>',
      subject: 'Delt dokument låst',
      message: 'Noen prøvde å åpne filen din. Bekreft innloggingen din nå for å beholde tilgang til skydokumentene dine.',
      explanation: 'Denne meldingen skaper panikk og presser deg til å logge inn via en mistenkelig lenke. Åpne den ekte appen direkte i stedet.',
    },
    {
      id: 10,
      from: 'Skolens kontor',
      message: 'Påminnelse: skolen stenger tidlig kl. 13 i morgen for personalopplæring. Se varselet i foreldreportalen.',
      explanation: 'Dette er en vanlig skoleoppdatering og ber ikke om passord, penger eller private kontoinformasjon.',
    },
    {
      id: 11,
      from: 'App Store Security <security@app-store-verify.net>',
      subject: 'Kvitteringsproblem: bekreft kortet nå',
      message: 'Det siste kjøpet ditt mislyktes. Bekreft fullt kortnummer og CVV innen 10 minutter for å unngå kontosuspensjon.',
      explanation: 'Ekte appbutikker ber aldri om fullstendige kortdetaljer og CVV via e-post. Pressende frister er et vanlig svindeltriks.',
    },
    {
      id: 12,
      from: 'School Library <library@your-school.edu>',
      subject: 'Leseklubbmøte i morgen',
      message: 'Påminnelse: Leseclub møtes i morgen til lunsj i Rom 12. Ta med boken din om du kan.',
      explanation: 'Dette er en vanlig skolepåminnelse fra en pålitelig adresse. Den ber ikke om passord eller private kontoopplysninger.',
    },
    {
      id: 13,
      from: 'Coach Rivera',
      message: 'Trening starter 15 minutter senere i dag på grunn av vær. Ta med vannflasken.',
      explanation: 'Dette er en vanlig timeplanendring. Den ber ikke om privat informasjon eller noe rart.',
    },
    {
      id: 14,
      from: 'Student Portal <noreply@districtschools.org>',
      subject: 'Nye karakterer lagt ut',
      message: 'Nye karakterer er nå tilgjengelige i elevportalen. Åpne portalen fra det vanlige skolebokmerket ditt for å se dem.',
      explanation: 'Denne meldingen leder deg til den vanlige skoleportalen din. Den ber ikke om passord, betaling eller private data.',
    },
    {
      id: 15,
      from: 'Ukjent nummer',
      message: 'Pakkevarsel: Vi klarte ikke levere pakken din. Betal et gebyr på 19 kr innen 24 timer for å bestille ny levering: parcel-pay-now.net/fee',
      explanation: 'Du kan ikke vite om en pakke egentlig er på vei, og lenken går til en rar nettside. Ikke klikk og ikke betal. Be en voksen sjekke pakken på den ekte nettsiden eller appen til transportøren.',
    },
    {
      id: 16,
      from: 'Ukjent nummer (telefonsamtale)',
      message: '«Hei! Dette er spillstøtten. Kontoen din er hacket! For å redde den sender jeg deg en kode på SMS. Les opp koden for meg nå, fort, før hackerne kommer inn!»',
      explanation: 'Ekte spillstøtte ringer aldri og ber om en kode. Koden er nøkkelen til kontoen din. Legg på og si det til en voksen.',
    },
    {
      id: 17,
      from: 'En fremmed ved skoledøren',
      message: '«Hei! Jeg skal fikse Wi-Fi-en. Døren er låst. Kan du slippe meg inn? Fort, jeg er sen!»',
      explanation: 'Du kjenner ikke denne personen, og hen presser deg. Å slippe inn en fremmed er et triks som kalles tailgating. Ikke åpne. Si fra til en lærer, som kan sjekke om reparasjonsbesøket er ekte.',
    },
    {
      id: 18,
      from: 'IT-hjelp <helpdesk@your-school.edu>',
      subject: 'Skolepassordet ditt utløper om 2 dager',
      message: 'Hei, skolepassordet ditt utløper om 2 dager. For å beholde kontoen, velg et nytt passord her: your-school.edu/new-password',
      explanation: 'Dette kan være ekte, men du kan ikke være sikker, og meldingen presser deg til å klikke på en lenke. Ikke bruk lenken. Åpne skoleportalen fra det vanlige bokmerket ditt, eller spør en lærer om meldingen er ekte.',
    },
    {
      id: 19,
      from: 'Mia 😄 (klassevenn)',
      message: 'omg er dette deg i denne videoen?? 😂😂 se her: vid-clips-now.net/mia',
      explanation: 'Venner kan ha hackede kontoer. Meldingen gjør deg nysgjerrig så du klikker fort. Sjekk med Mia ansikt til ansikt eller i en annen app før du klikker på noe.',
    },
    {
      id: 20,
      from: 'Hr. Evans <evans@your-school.edu>',
      subject: 'Museumstur: samtykkeskjema',
      message: 'Hei alle sammen, be foreldrene dine signere samtykkeskjemaet for museumsturen og ta det med på skolen innen fredag. Vi kan ikke ta med noen uten. Takk!',
      explanation: 'En frist alene er ikke et varselsignal. Denne e-posten kommer fra en skoleadresse, ber om et skjema på papir og vil ikke ha passord, penger eller private opplysninger.',
    },
    {
      id: 21,
      from: 'Sam (klassevenn)',
      message: 'Hei! Er du ferdig med mattelekse? Jeg tar med notatene mine i morgen, så kan vi sammenligne 😊',
      explanation: 'Dette er en vanlig chat mellom venner. Den ber ikke om noe privat og har ingen rare lenker.',
    },
  ],
}
