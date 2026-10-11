// ---------------------------------------------------------------------------
// Digital Misuse (DM) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Digital Misuse module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDM = {
  aim: 'Å gi grunnleggende kunnskap om hva digitale overgrep og misbruk er, og prinsipper for hvordan man håndterer det.',
  objectives: [
    'Å introdusere begrepet digitale overgrep og misbruk i digitale miljøer.',
    'Å forklare motivene bak digitale overgrep og misbruk.',
    'Å bygge bevissthet om tilfeller av digitale overgrep og misbruk, teknikker som brukes av overgripere, og prinsipper for hvordan man håndterer det.',
  ],
  outcomes: [
    'Jeg kan definere digitale overgrep og misbruk, beskrive eksempler som handler om feilinformasjon, desinformasjon, nettmobbing, utrygg kontakt med fremmede og skadelig atferd fra influencere, og forklare mulige motiver bak disse eksemplene.',
    'Jeg kan gjenkjenne teknikker som brukes av overgripere og misbrukere i gitte scenarioer.',
    'Jeg kan foreslå og diskutere måter å håndtere digitale overgrep og misbruk på i gitte scenarioer.',
  ],
  parts: [
    {
      title: 'Feilinformasjon',
      goal: 'Hjelpe elever til å forstå hva feilinformasjon er, hva som motiverer folk til å spre det og hvordan man gjenkjenner det.',
      bundle: {
        filename: 'Digital misbruk - pakke - del 1',
      },
      included: {
        materials: [
          {
            // ID: 7.1.2
            kind: 'Spillkort',
            name: 'Sannhetsdetektivene',
            filename: 'Spillkort - Sannhetsdetektivene',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 7.1.3
            kind: 'Bilde',
            name: 'Kanelutfordringen',
            filename: 'Bilde - Kanelutfordringen',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Gjenkjenne feilinformasjon',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.1.1
        title: 'Hva er feilinformasjon?',
        supportText:
          'Bruk denne videoen til å introdusere feilinformasjon som falskt eller unøyaktig innhold som kan spre seg på nettet uten skadelig hensikt. Pause for å spørre elever om de noen gang har delt noe som senere viste seg å ikke stemme.',
        downloads: {
          video: {
            filename: 'Hva er feilinformasjon',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hva er feilinformasjon - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      title: 'Desinformasjon',
      goal: 'Hjelpe elever til å forstå hva desinformasjon er, motivasjonene bak det og hvordan man gjenkjenner det.',
      bundle: {
        filename: 'Digital misbruk - pakke - del 2',
      },
      included: {
        materials: [
          {
            // ID: 7.2.2
            kind: 'Arbeidsark',
            name: 'Avismal «Dele nyheter»',
            filename: 'Arbeidsark - Avismal Dele nyheter',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 7.2.3
            kind: 'Bilde',
            name: 'Algoritmer i sosiale medier',
            filename: 'Bilde - Algoritmer i sosiale medier',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Forstå desinformasjon',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.2.1
        title: 'Hva er desinformasjon?',
        supportText:
          'Bruk denne videoen til å hjelpe elever med å skille desinformasjon — bevisst villedende innhold — fra feilinformasjon. Pause for å diskutere hvordan hensikten endrer måten vi vurderer og reagerer på falsk informasjon.',
        downloads: {
          video: {
            filename: 'Hva er desinformasjon',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hva er desinformasjon - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      title: 'Nettmobbing',
      goal: 'Hjelpe elever til å forstå hva nettmobbing er, motivasjonene bak det og hvordan man gjenkjenner det.',
      bundle: {
        filename: 'Digital misbruk - pakke - del 3',
      },
      included: {
        materials: [
          {
            // ID: 7.3.1
            kind: 'Scenariokort',
            name: 'Spill det ut!',
            filename: 'Scenariokort - Spill det ut',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 7.3.3
            kind: 'Scenariokort',
            name: 'Er det bare dårlig oppførsel?',
            filename: 'Scenariokort - Er det bare dårlig oppførsel',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Dårlig oppførsel og nettmobbing',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.3.2
        title: 'Hva er nettmobbing?',
        supportText:
          'Bruk denne videoen til å hjelpe elever med å definere nettmobbing og forstå hvordan nettadferd kan forårsake reell emosjonell skade. Pause for å diskutere hvorfor tilskueres respons er viktig i disse situasjonene.',
        downloads: {
          video: {
            filename: 'Hva er nettmobbing',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Hva er nettmobbing - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      title: 'Fremmedes fare',
      goal: 'Hjelpe elever til å forstå hva fremmedes fare er, motivasjonene bak det og hvordan man gjenkjenner det.',
      bundle: {
        filename: 'Digital misbruk - pakke - del 4',
      },
      included: {
        materials: [
          {
            // ID: 7.4.1
            kind: 'Plakat',
            name: 'Farlige fremmede',
            filename: 'Plakat - Farlige fremmede',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 7.4.2
            kind: 'Scenariokort',
            name: 'Ekte eller falsk? Profildetektivspillet',
            filename: 'Scenariokort - Ekte eller falsk Profildetektivspillet',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 7.4.3
            kind: 'Arbeidsark',
            name: 'Mester på farlige fremmede',
            filename: 'Arbeidsark - Mester på farlige fremmede',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Forstå farer fra fremmede',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
    },
    {
      title: 'Influencere',
      goal: 'Hjelpe elever til å forstå hva influencere er og hva som motiverer dem.',
      bundle: {
        filename: 'Digital misbruk - pakke - del 5',
      },
      included: {
        materials: [
          {
            // ID: 7.5.2
            kind: 'Scenariokort',
            name: 'Influencer-innlegg',
            filename: 'Scenariokort - Influencer-innlegg',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Hvem er en influencer?',
          },
          {
            title: 'Plenum – Oppsummering og uformell vurdering',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.5.1
        title: 'Influencere på sosiale medier',
        supportText:
          'Bruk denne videoen til å utforske hvordan influencere former meninger og atferd på sosiale medier, og ansvaret som følger med den rekkevidden. Pause for å spørre elever hvilke influencere de følger og hva som gjør dem troverdige.',
        downloads: {
          video: {
            filename: 'Influencere på sosiale medier',
            ariaLabel: 'Last ned video',
          },
          subtitles: {
            filename: 'Influencere på sosiale medier - Undertekster',
            ariaLabel: 'Last ned undertekster',
          },
        },
      },
    },
    {
      title: 'Hvordan kan vi håndtere atferden til digitale overgripere?',
      goal: 'Hjelpe elever til å vite hva de kan gjøre for å beskytte seg mot digitalt misbruk.',
      bundle: {
        filename: 'Digital misbruk - pakke - del 6',
      },
      included: {
        materials: [
          {
            // ID: 7.6.1
            kind: 'Arbeidsark',
            name: 'Digital superhelt',
            filename: 'Arbeidsark - Digital superhelt',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 7.6.2
            kind: 'Arbeidsark',
            name: 'CyberDoku: Løs mysteriet',
            filename: 'Arbeidsark - CyberDoku Løs mysteriet',
            ariaLabel: 'Last ned materiell',
          },
          {
            // ID: 7.6.3
            kind: 'Bilde',
            name: 'CyberDoku: Kart over området',
            filename: 'Bilde - CyberDoku Kart over området',
            ariaLabel: 'Last ned materiell',
          },
        ],
        activityPlan: [
          {
            title: 'Introduksjon',
          },
          {
            title: 'Motstandskraft mot digitale overgrep og misbruk',
          },
          {
            title: 'Gjenkjenne og håndtere digitale overgrep og misbruk',
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
      moduleId: 'mw',
      brand: 'MW',
      href: '/learning-hub/malware/content',
      imageSrc: '/images/learning-hub/06_malware.webp',
    },
  ],
}

export const challengeDM = {
  title: 'Ekte historier',
  subtitle:
    'Ta valg. Se konsekvenser. Lær hvordan du håndterer nettmobbing, falske nyheter, risikable influencere og nettpress.',
  howItWorks: 'Slik fungerer det',
  instruction:
    'Gå gjennom virkelige historier om digitalt misbruk. I hvert nøkkeløyeblikk velger du hva du gjør — og ulike valg fører til ulike utfall. Tjen opptil 3 stjerner per historie ved å finne den tryggeste veien. Hvis du får en vanskelig slutt, prøv historien igjen for å oppdage en bedre rute!',
  tip: 'Hver historie forgrener seg i flere retninger. Det er alltid minst én vei som fører til et trygt, positivt utfall — men du må ta de riktige valgene for å finne den!',
  tipLabel: 'Tips',
  yourBestScore: 'Din beste poengsum',
  bestResultDesc: 'Beste resultat fra hver historie',
  storiesTitle: '📖 Historier',
  watchOutTitle: '🚩 Pass opp for',
  watchOutItems: [
    '🚩 Noen som ber om private bilder',
    '🚩 Noen som krever passordet ditt, også en venn',
    '🚩 Fremmede som spør om adressen din eller skolen din',
    '🚩 «Hold dette hemmelig»-press',
    '🚩 Slemme innlegg, skjermbilder, falske profiler',
    '🚩 «DEL DETTE NÅ»-meldinger og sjokkerende påstander',
    '🚩 Utfordringer på nettet som kan skade deg',
  ],
  welcomeDesc: 'Ta valgene dine nøye — forskjellige veier fører til svært forskjellige utfall.',
  startStory: 'Start historie →',
  whatWeLearned: '💡 Det vi lærte:',
  tryDifferentPath: '↩ Prøv en annen vei',
  nextStory: 'Neste historie →',
  storyOfTemplate: 'Historie {n} av {total}',
  storyLabelTemplate: 'Historie {n}:',
  topicLabel: 'Tema',
  pointsLabel: 'Poeng i denne runden',
  badgeGood: '✨ Flott resultat!',
  badgeOkay: '🌤️ Kunne vært bedre',
  badgeBad: '❌ Tøff lærdom',
  messagesAriaLabel: 'Meldinger i historien',
  seeFinalScore: '🎉 Se sluttpoengsum',
  allStoriesComplete: 'Alle historier fullført!',
  finalScoreDesc: 'Slik gikk det i alle historiene:',
  playAgain: 'Spill igjen',
  rankChampion: '🏆 Sikkerhets-mester',
  rankChampionMsg: 'Enestående! Du fant den tryggeste veien i nesten alle situasjoner.',
  rankDefender: '🛡️ Digital forsvarer',
  rankDefenderMsg: 'Flott arbeid! Du håndterte de fleste situasjoner klokt og trygt.',
  rankNavigator: '📚 Læringsnavigator',
  rankNavigatorMsg: 'Bra innsats! Spill noen historier på nytt for å finne bedre veier og tjene flere stjerner.',
  rankBeginning: '🌱 Kommer i gang',
  rankBeginningMsg: 'Fortsett å prøve forskjellige veier — hvert nytt spill lærer deg noe nytt!',
  sensitiveToggleLabel: 'Ta med sensitive historier',
  sensitiveToggleNote: 'To historier handler om private bilder og om fremmede som spør om adressen din. Spør en lærer eller en voksen du stoler på først.',
  sensitiveNoteTitle: '⚠️ Merknad',
  sensitiveNoteTemplate: 'Denne historien handler om: {topic}. Den kan føles ubehagelig. Du kan hoppe over den. Hvis noe slikt noen gang skjer deg, si det til en voksen du stoler på.',
  skipStory: 'Hopp over denne historien',
  skippedLabel: 'Hoppet over',
  scoreDenomTemplate: '/ {max} ★',
  stories: [
    {
      id: 1,
      title: 'Meme-problemet',
      emoji: '😟',
      topic: 'Nettmobbing',
      nodes: [
        {
          id: 'start',
          text: 'Du åpner telefonen og ser en gruppechat. Noen som heter Jake har postet et stygt meme om klassekameraten Emma din, som gjør narr av utseendet hennes. 23 personer har allerede likt det. Hva gjør du?',
          choices: [
            '👍 Like memet for å passe inn med alle',
            '📲 Scrolle forbi og ignorere det',
            '💬 Sende Emma en privat støttemelding',
          ],
        },
        {
          id: 'end_a',
          title: 'En del av problemet',
          text: 'Du likte memet. Jake poster mer, enda slemme. Emma ser navnet ditt i likesene og er knust. En lærer finner ut av det og kontakter foreldrene dine.',
          lesson: 'Å like slemt innhold er en form for nettmobbing. Ditt «liker» er aldri usynlig — målet ser alltid hvem som støttet det.',
        },
        {
          id: 'mid_b',
          text: 'Du scroller forbi, men innleggene fortsetter å komme. Neste dag sitter Emma alene til lunsj og ser veldig lei seg ut. Mobbingen har blitt verre.',
          choices: [
            '😶 Fortsette å ignorere — ikke ditt problem',
            '🏫 Fortelle en lærer hva som har skjedd',
          ],
        },
        {
          id: 'end_b1',
          title: 'Det tause vitnet',
          text: 'Uker går. Emma er borte fra skolen. Du føler deg skyldig, men sier ingenting. Mobbingen fortsetter uutfordret.',
          lesson: 'Å ignorere mobbing får det ikke til å stoppe. Tilskuere har reell makt til å hjelpe — å være stille er fortsatt et valg.',
        },
        {
          id: 'end_b2',
          title: 'Den modige melder',
          text: 'Læreren handler umiddelbart. Jake og foreldrene hans blir innkalt. Emma får støtte fra skolerådgiveren. Mobbingen stopper.',
          lesson: 'Å fortelle det til en betrodd voksen er noe av det sterkeste du kan gjøre. Det er ikke sladring. Du hjelper noen som trenger det.',
        },
        {
          id: 'mid_c',
          text: 'Emma svarer: «Tusen takk… det såret virkelig. Jeg visste ikke hva jeg skulle gjøre.» Hun er takknemlig, men redd. Innleggene er fortsatt oppe.',
          choices: [
            '📢 Hjelpe Emma med å rapportere hvert innlegg til plattformen',
            '🤷 Fortelle Emma å bare ignorere det, det vil gå over',
          ],
        },
        {
          id: 'end_c1',
          title: 'Den digitale forsvareren',
          text: 'Du og Emma rapporterer hvert innlegg sammen. De fleste fjernes i løpet av en dag. Dere oppsøker også skolerådgiveren, som støtter Emma videre. Mobbingen stopper.',
          lesson: 'Å ta kontakt med den som blir mobbet OG handle er det beste svaret på nettmobbing. Rapporter innleggene på nett og be betrodde voksne om hjelp.',
        },
        {
          id: 'end_c2',
          title: 'Snill, men ikke nok',
          text: 'Emma prøver å ignorere det, men innleggene fortsetter. Din snille melding hjalp, men uten rapportering eller voksenstøtte fortsetter mobbingen.',
          lesson: 'Vennlighet er en flott start. For at mobbingen virkelig skal stoppe, må du også rapportere den og be en betrodd voksen om hjelp.',
        },
      ],
    },
    {
      id: 2,
      title: 'Skjermbilde-fellen',
      emoji: '📸',
      topic: 'Personvern og svik',
      nodes: [
        {
          id: 'start',
          text: 'Du sendte en privat melding til venninnen Zoe om at du er forelsket i noen. Zoe tok et skjermbilde og delte det i en stor gruppechat uten å spørre deg. Alle kommenterer. Hva gjør du?',
          choices: [
            '😡 Poste en sint offentlig uthenging av hva Zoe gjorde',
            '📱 Konfrontere Zoe privat i en DM',
            '📸 Lagre bevisene og fortelle en betrodd voksen',
          ],
        },
        {
          id: 'end_a',
          title: 'Ild møter ild',
          text: 'Du poster offentlig og henger ut Zoe. Zoe slår tilbake. Dusinvis av mennesker blander seg inn i dramaet. Nå er det en fullstendig nettkrig og dere begge ser dårlige ut.',
          lesson: 'Offentlig uthenging på nett eskalerer nesten alltid. Det gir sjelden den løsningen du håper på.',
        },
        {
          id: 'mid_b',
          text: 'Du DM-er Zoe: «Hvorfor delte du det? Det var privat!» Zoe sier «Det var bare en spøk, slapp av.» Men hun har ikke slettet det.',
          choices: [
            '😔 Godta «unnskyldningen» hennes og gå videre stille',
            '🗣️ Be bestemt om at hun sletter det og involver en betrodd voksen',
          ],
        },
        {
          id: 'end_b1',
          title: 'Feid under teppet',
          text: 'Zoe forstår egentlig ikke hvorfor det var galt. Skjermbildet er fortsatt oppe. Du føler deg såret, men ingenting er virkelig løst.',
          lesson: '«Bare en spøk» er aldri en unnskyldning for å dele private meldinger. Hvis dårlig oppførsel ikke får konsekvenser, kan det skje igjen.',
        },
        {
          id: 'end_b2',
          title: 'Ekte løsning',
          text: 'Under press og med vokseninvolvering sletter Zoe det og har en ekte samtale om samtykke og personvern. Vennskapet ditt gjenopprettes på sunnere vilkår.',
          lesson: 'Å stå opp for personvernet sitt rolig, men bestemt, med hjelp fra voksne, gir ekte endring. Ikke bare kort ro.',
        },
        {
          id: 'mid_c',
          text: 'En betrodd voksen hjelper med å rapportere det til plattformen og kontakter Zoes foreldre. Skjermbildet fjernes. Zoe unnskylder seg.',
          choices: [
            '🤝 Godta unnskyldningen hennes og jobbe for å gjenoppbygge vennskapet',
            '🚫 Blokkere Zoe — du vil ikke ha henne som venn lenger',
          ],
        },
        {
          id: 'end_c1',
          title: 'Tillit gjenoppbygget',
          text: 'Med voksenstøtte og en ekte unnskyldning løser situasjonen seg skikkelig. Zoe forstår samtykke. Dere begge går videre.',
          lesson: 'Å lagre bevis, rapportere og gi en ekte sjanse til å si unnskyld kan gjøre en vond stund til en lærdom.',
        },
        {
          id: 'end_c2',
          title: 'Trygg avstand',
          text: 'Skjermbildet er borte og du er beskyttet. Blokkering er en gyldig grense når tillit er brutt. Et trygt utfall gjennom riktige handlinger.',
          lesson: 'Å beskytte deg selv er alltid greit. Å be voksne om hjelp var akkurat riktig.',
        },
      ],
    },
    {
      id: 3,
      title: 'Gaming-raseri',
      emoji: '🎮',
      topic: 'Trakassering i nettspill',
      nodes: [
        {
          id: 'start',
          text: 'Du spiller favoritt-nettspillet ditt og en annen spiller begynner å spamme hatefulle meldinger — kaller deg navn og fremsetter trusler. Andre i lobbyen ser på. Hva gjør du?',
          choices: [
            '💢 Slå tilbake med egne fornærmelser',
            '🙉 Ignorere meldingene og fortsette å spille',
            '🔇 Mute, ta skjermbilde og rapportere spilleren i spillet',
          ],
        },
        {
          id: 'end_a',
          title: 'Begge utestengt',
          text: 'Du krangler tilbake. Dere begge rapporteres. Systemet markerer kontoen din. Dere begge utestenges — den toksiske spilleren rapporterte deg først.',
          lesson: 'Å svare på hat med hat setter deg i fare også. Spillplattformer utestenger ofte begge sider av toksiske utvekslinger.',
        },
        {
          id: 'mid_b',
          text: 'Du ignorerer dem, men de eskalerer. Nå har de funnet den offentlige spillprofilen din og poster overgrep der for andre å se.',
          choices: [
            '🗑️ Slette profilen din for å få dem til å stoppe',
            '📢 Rapportere til plattformen og fortelle en betrodd voksen',
          ],
        },
        {
          id: 'end_b1',
          title: 'Å løpe unna',
          text: 'Å slette profilen din stopper denne trakassereren foreløpig. Men de går videre til neste mål. Ingen konsekvens, ingen reell endring.',
          lesson: 'Å beskytte deg selv er viktig. Men å rapportere sørger for at mobberen får konsekvenser og ikke kan gjøre det mot andre.',
        },
        {
          id: 'end_b2',
          title: 'Spiller utestengt',
          text: 'Plattformen undersøker og utestenger trakassererens konto. En betrodd voksen hjelper deg med å gjennomgå personverninnstillingene og du føler deg støttet.',
          lesson: 'Å rapportere mobbere i spill fungerer. Plattformer tar rapporter alvorlig, særlig når du har lagret skjermbilder som bevis.',
        },
        {
          id: 'mid_c',
          text: 'Du har muted og rapportert spilleren med skjermbilder. Rapporten er under gjennomgang. Men du er fortsatt rystet av det som ble sagt.',
          choices: [
            '🗣️ Fortelle en betrodd voksen hvordan opplevelsen gjorde deg følte',
            '😶 Holde det for deg selv — du har allerede håndtert det',
          ],
        },
        {
          id: 'end_c1',
          title: 'Rapporter og støtte',
          text: 'En betrodd voksen bekrefter følelsene dine og hjelper deg med å justere personverninnstillingene. Plattformen bekrefter at spilleren ble utestengt.',
          lesson: 'Rapportering er viktig, men det er like viktig å bearbeide hvordan nettovergrep får deg til å føle deg. Betrodde voksne kan hjelpe med begge deler.',
        },
        {
          id: 'end_c2',
          title: 'Halv løsning',
          text: 'Spilleren utestenges, men du bærer opplevelsen alene. Du føler deg tryggere på nett, men er fortsatt urolig.',
          lesson: 'Du håndterte den tekniske siden perfekt! Husk: å snakke med noen om hvordan nettovergrep føles er like viktig.',
        },
      ],
    },
    {
      id: 4,
      title: 'Falskt profil',
      emoji: '👤',
      topic: 'Identitetsforfalskning',
      nodes: [
        {
          id: 'start',
          text: 'Du oppdager en falsk sosiale medier-konto som bruker bildene til vennen Sam. Den poster pinlige ting og legger til klassekameratene til Sam. Sam vet det ikke ennå. Hva gjør du?',
          choices: [
            '💬 Melde den falske kontoen og si at de skal stoppe',
            '📞 Fortelle Sam umiddelbart så de vet',
            '🚩 Rapportere den falske kontoen OG fortelle Sam med en gang',
          ],
        },
        {
          id: 'end_a',
          title: 'Ikke mat trollet',
          text: 'Den falske kontoen blokkerer deg og øker postingen. Nå begynner den å målrette deg også. Å engasjere seg direkte gjorde ting verre.',
          lesson: 'Å kontakte en falsk eller misbrukende konto direkte gjør nesten alltid ting verre. Rapporter til plattformen i stedet.',
        },
        {
          id: 'mid_b',
          text: 'Sam er sjokkert og opprørt. Sam vil melde til alle for å forklare at det er falskt, men er ikke sikker på hva annet de skal gjøre. Kontoen er fortsatt aktiv.',
          choices: [
            '📢 Hjelpe Sam med å rapportere kontoen til plattformen',
            '🗣️ Foreslå at Sam bare forteller folk personlig at det er falskt',
          ],
        },
        {
          id: 'end_b1',
          title: 'Teamarbeid vinner',
          text: 'Du og Sam rapporterer kontoen sammen. Plattformen fjerner den i løpet av timer. Sam forteller også en betrodd voksen som hjelper med å overvåke fremtidige forsøk.',
          lesson: 'Å rapportere falske kontoer sammen fungerer veldig bra. Plattformer tar falske profiler alvorlig og handler raskt.',
        },
        {
          id: 'end_b2',
          title: 'Langsom respons',
          text: 'Sam forklarer til folk personlig, men den falske kontoen er oppe i dager og forårsaker mer pinlighet før noen andre til slutt rapporterer den.',
          lesson: 'Å rapportere en falsk konto til plattformen går mye raskere enn å forklare det for alle enkeltvis.',
        },
        {
          id: 'mid_c',
          text: 'Plattformen mottar rapporten din og begynner å gjennomgå kontoen. Sam er takknemlig for at du handlet så raskt.',
          choices: [
            '🏠 Også fortelle en betrodd voksen for å hjelpe Sam til å føle seg støttet',
            '⏳ Bare vente på at plattformen skal handle',
          ],
        },
        {
          id: 'end_c1',
          title: 'Full beskyttelse',
          text: 'Med voksenstøtte og plattformens handling fjernes kontoen. Sam føler seg genuint ivaretatt. Skolen varsles om å passe på fremtidige forsøk.',
          lesson: 'Å rapportere til plattformen OG fortelle det til en betrodd voksen gir best beskyttelse når noen later som de er deg eller vennen din.',
        },
        {
          id: 'end_c2',
          title: 'Rask handling',
          text: 'Plattformen fjerner kontoen. Sam er lettet. Et flott utfall gjennom rask, riktig handling.',
          lesson: 'Å rapportere en falsk konto med en gang er akkurat riktig. Jo raskere du rapporterer, jo raskere blir den fjernet.',
        },
      ],
    },
    {
      id: 5,
      title: 'Utestengt på nett',
      emoji: '😔',
      topic: 'Digital utestengning',
      nodes: [
        {
          id: 'start',
          text: 'Du oppdager at vennegjengen din opprettet en ny gruppechat uten deg. De planlegger en fest du ikke ble invitert til, og du kan se at de poster om det offentlig. Du føler deg såret og ydmyket.',
          choices: [
            '📣 Poste offentlig om å bli såret og holdt utenfor',
            '💬 Sende en sint melding til hele gruppen',
            '🤝 Melde til din nærmeste venn i gruppen privat',
          ],
        },
        {
          id: 'end_a',
          title: 'Offentlig sammenbrudd',
          text: 'Det offentlige innlegget ditt tiltrekker seg oppmerksomhet, men mest pinlighet. Vennegjengen blir defensiv. Dramaet sprer seg over hele skolen på nett.',
          lesson: 'Å klage offentlig på at du ble holdt utenfor hjelper sjelden. Det gjør som regel ting verre. En privat samtale virker mye bedre.',
        },
        {
          id: 'end_b',
          title: 'Gruppechat-drama',
          text: 'Gruppechatten blir ubehagelig. Noen venner føler seg skyldige; andre blir irriterte. Ingenting løses virkelig og spenningene varer i uker.',
          lesson: 'Å konfrontere en hel gruppe på en gang setter alle på defensiven. En-til-en private samtaler fungerer mye bedre.',
        },
        {
          id: 'mid_c',
          text: 'Din nærmeste venn Mia innrømmer at hun følte seg presset til å holde deg utenfor av noen andre i gruppen. Hun unnskylder seg og sier hun vil hjelpe med å rette opp tingene.',
          choices: [
            '🤝 Be Mia tale din sak til gruppen',
            '🏫 Fortelle en betrodd voksen om den bevisste utestengingen',
          ],
        },
        {
          id: 'end_c1',
          title: 'Ekte alliert',
          text: 'Mia taler. Du blir inkludert igjen og personen som holdt deg utenfor blir konfrontert. Vennegjengen blir sterkere gjennom ærlighet.',
          lesson: 'Når noen er villige til å hjelpe, la dem. Ekte venner taler for hverandre — selv når det er ubehagelig.',
        },
        {
          id: 'end_c2',
          title: 'Voksen alliert',
          text: 'Den betrodde voksne hjelper til med megling. Alle reflekterer over hvordan bevisst utestenging skader. Gruppedynamikken skifter til det bedre.',
          lesson: 'Å holde noen utenfor med vilje på nett er en type mobbing. En betrodd voksen kan hjelpe med å rette opp en usunn gruppe.',
        },
      ],
    },
    {
      id: 6,
      title: 'Private bilder',
      emoji: '📷',
      topic: 'Bildebasert press',
      nodes: [
        {
          id: 'start',
          text: 'Noen du har chattet med på nett i to uker sier de virkelig liker deg og ber om et privat bilde. De lover å sende ett først og sier du skal holde det hemmelig for alle.',
          choices: [
            '📸 Sende et bilde — de virker genuint snille',
            '😐 Si at du ikke er komfortabel, men fortsette å snakke med dem',
            '🚫 Nekte, slutte å snakke med dem og fortelle en betrodd voksen nå',
          ],
        },
        {
          id: 'end_a',
          title: 'Fellen',
          text: 'De sender aldri noe tilbake. I stedet krever de flere bilder, eller de deler dine med alle. Du er fanget. Dette kalles sextortion.',
          lesson: 'Å sende private bilder til noen du bare kjenner på nett er veldig farlig. Å true noen med bilder kalles sextortion, og det er en forbrytelse. Fortell det til en betrodd voksen med en gang.',
        },
        {
          id: 'mid_b',
          text: '«Hvis du ikke sender ett, stoler du åpenbart ikke på meg.» De sier hele greia er over hvis du nekter. Du føler deg forvirret og presset.',
          choices: [
            '📸 Gi etter og sende et bilde for å bevare freden',
            '🚫 Blokkere dem og fortelle en betrodd voksen umiddelbart',
          ],
        },
        {
          id: 'end_b1',
          title: 'Fellen (del 2)',
          text: 'Du sender bildet og utpressingen starter umiddelbart. Du innser at denne personen planla dette fra den aller første meldingen.',
          lesson: 'Sunne forhold har aldri ultimatum. «Send et bilde, ellers er det slutt» er et stort advarselstegn. Fortell det til en betrodd voksen hvis dette noen gang skjer.',
        },
        {
          id: 'end_b2',
          title: 'Gode instinkter',
          text: 'Du blokkerer kontoen og forteller en betrodd voksen. De hjelper med å rapportere det til plattformen og forklarer at dette er en klassisk groomingtaktikk brukt av kriminelle.',
          lesson: 'Å si nei til press og fortelle det til en betrodd voksen er alltid riktig. Du ble manipulert. Å se det og handle krever ekte mot.',
        },
        {
          id: 'mid_c',
          text: 'En betrodd voksen ser på samtalen og er svært bekymret. De forklarer at dette ser ut som grooming — noen som later som de er vennlige for å vinne tilliten din. De vil rapportere det.',
          choices: [
            '📋 Dele hele samtalehistorikken for å styrke rapporten',
            '😳 Utelate noen detaljer fordi du føler deg flau',
          ],
        },
        {
          id: 'end_c1',
          title: 'Full avsløring',
          text: 'Med fullt bevis iverksetter den voksne og plattformen sterke tiltak. Kontoen fjernes og rapporteres til myndighetene som kan etterforske skikkelig.',
          lesson: 'Fortell den betrodde voksne hele historien, også de pinlige delene. Da kan de beskytte deg best og stoppe den kriminelle.',
        },
        {
          id: 'end_c2',
          title: 'Delvis rapport',
          text: 'Noen beskyttende tiltak iverksettes med begrensede detaljer. Du er tryggere, men det fulle bildet ville ha hjulpet etterforskningen mye mer.',
          lesson: 'Det var modig å si fra. Når du forteller alle detaljene, også de pinlige, kan voksne beskytte deg og hindre at det skjer med andre.',
        },
      ],
    },
    {
      id: 7,
      title: 'Den hjelpfulle fremmede',
      emoji: '🕵️',
      topic: 'Online grooming',
      nodes: [
        {
          id: 'start',
          text: 'Noen i en spillchat sier de er 14 og har sendt deg meldinger i en uke. De spør nå hvor du går på skole, hjemmeadressen din og når du kommer hjem alene hver dag. Hva gjør du?',
          choices: [
            '💬 Svare på spørsmålene — de virker som et normalt barn',
            '🤔 Gi vage svar og fortsette å chatte',
            '🚫 Slutte å svare, blokkere dem og fortelle en betrodd voksen nå',
          ],
        },
        {
          id: 'end_a',
          title: 'For mye informasjon',
          text: 'I løpet av neste uke kjenner de skolen din, timeplanen din og adressen din. De foreslår å møtes personlig. Du innser at noe er veldig galt.',
          lesson: 'Noen som spør om adressen din, skolen din eller dagsrutinen din på nett, er et alvorlig faresignal, selv om de sier at de er på din alder.',
        },
        {
          id: 'mid_b',
          text: 'Du gir vage svar, men de presser hardere og ber nå om telefonnummeret ditt. Noe føles rart, men du vil ikke virke uhøflig.',
          choices: [
            '📱 Gi nummeret ditt — de har vært så snille',
            '🚫 Blokkere dem og fortelle en betrodd voksen',
          ],
        },
        {
          id: 'end_b1',
          title: 'For mye tilknyttet',
          text: 'De bruker nummeret ditt til å finne andre sosiale kontoer dine og spore aktiviteten din. En betrodd voksen finner ut av det og er svært alarmert.',
          lesson: 'Du skylder ingen telefonnummeret ditt eller personlige kontaktdetaljer på nett. Alle som presser på etter dem har dårlige hensikter.',
        },
        {
          id: 'end_b2',
          title: 'Betrodd instinkt',
          text: 'En betrodd voksen bekrefter at kontoen ser ut som en falsk profil brukt av en voksen. De hjelper deg med å rapportere det og gjennomgå personverninnstillingene dine sammen.',
          lesson: 'Stol på magefølelsen og fortell det til en betrodd voksen. Det er alltid riktig når noe føles galt på nett.',
        },
        {
          id: 'mid_c',
          text: 'En betrodd voksen gjennomgår samtalen og er svært bekymret. De forklarer at dette sannsynligvis er et groomingforsøk — en voksen som later som å være et barn for å vinne tilliten din.',
          choices: [
            '📋 Gi den fulle samtalen for en skikkelig rapport',
            '🤐 Be om å håndtere det stille uten å involvere myndighetene',
          ],
        },
        {
          id: 'end_c1',
          title: 'Beskyttet og sterk',
          text: 'Kontoen rapporteres til plattformen og politiet. Den betrodde voksne hjelper deg med å stramme opp personverninnstillingene. Du kan ha beskyttet deg selv og andre barn.',
          lesson: 'Grooming er en alvorlig forbrytelse. En rapport med alle bevis hjelper myndighetene med å beskytte andre barn.',
        },
        {
          id: 'end_c2',
          title: 'Tryggere, men ufullstendig',
          text: 'Kontoen blokkeres, men rapporteres ikke formelt. Du er tryggere, men personen kan rett og slett gå videre og målrette seg noen andre.',
          lesson: 'Grooming er for alvorlig til å håndtere alene. La voksne lage en skikkelig rapport. Det beskytter deg og andre barn.',
        },
      ],
    },
    {
      id: 8,
      title: 'Hat i kommentarfeltet',
      emoji: '💬',
      topic: 'Hatytringer',
      nodes: [
        {
          id: 'start',
          text: 'Du ser på en live gaming-strøm og chatten fylles med rasistiske og hatefulle kommentarer rettet mot en av spillerne. Kommentarene kommer raskt. Den targeterte spilleren ser tydelig opprørt ut.',
          choices: [
            '😂 Le av noen kommentarer — det er bare internetthumor',
            '😶 Se stille på uten å bli med',
            '🚩 Rapportere hatytringene og si fra i chatten',
          ],
        },
        {
          id: 'end_a',
          title: 'Ikke bare en spøk',
          text: 'Du lo. Spilleren forlater strømmen i tårer. Skjermbilder av kommentaren din dukker opp senere. Du føler deg skamfull og blir rapportert av andre seere.',
          lesson: 'Rasistiske skjellsord og hatytringer er aldri «bare internetthumor». Hvis du ler med, blir du en del av skaden.',
        },
        {
          id: 'mid_b',
          text: 'Du er stille. Den targeterte spilleren kobler fra strømmen. Chatten feirer at de jaget ham bort. Du er urolig over det du nettopp så.',
          choices: [
            '💬 Poste en støttemelding som forsvarer spilleren',
            '❌ Lukke strømmen og prøve å glemme det',
          ],
        },
        {
          id: 'end_b1',
          title: 'En stemme endrer alt',
          text: 'Andre seere ser meldingen din og begynner også å si fra. Stemningen i chatten skifter. Flere personer rapporterer de verste lovbryterne og noen kontoer utestenges.',
          lesson: 'Én person som sier fra i en fiendtlig chat kan endre stemningen. Tilskuere har reell makt.',
        },
        {
          id: 'end_b2',
          title: 'Stillhetens pris',
          text: 'Du går bort, men hatet fortsetter. Den targeterte spilleren streamer kanskje aldri igjen. Stillheten din føltes tryggere, men bidro til problemet.',
          lesson: 'Å gå bort beskytter deg, men rapporter hatytringer før du går. Det hjelper å stoppe dem.',
        },
        {
          id: 'mid_c',
          text: 'Du rapporterer de verste kommentarene og poster en støttemelding. Flere andre seere følger eksemplet ditt og rapporterer også. Spilleren legger merke til det og føler seg mindre alene.',
          choices: [
            '📣 Også snakke med en betrodd voksen eller lærer om det du så',
            '✅ Du har gjort nok — la resten opp til plattformen',
          ],
        },
        {
          id: 'end_c1',
          title: 'Ringvirkning',
          text: 'Flere rapporter behandles raskt. Å øke bevisstheten om hatytringer i gamingmiljøer hos en betrodd voksen hjelper med å skape bredere endring.',
          lesson: 'Å rapportere hatytringer OG si fra til betrodde voksne gjør plattformer tryggere for alle, nå og senere.',
        },
        {
          id: 'end_c2',
          title: 'God borger',
          text: 'Rapporter behandles og noen kontoer flagges. Spilleren takker deg senere for at du sa fra i chatten.',
          lesson: 'Å rapportere hatytringer OG si fra i øyeblikket er en kraftfull kombinasjon. Godt gjort for å handle!',
        },
      ],
    },
    {
      id: 9,
      title: 'Hengeut-innlegget',
      emoji: '📣',
      topic: 'Falske rykter på nett',
      nodes: [
        {
          id: 'start',
          text: 'Noen fra skolen poster helt falske rykter om deg på sosiale medier. Det sprer seg raskt — folk deler det og skriver slemme kommentarer. Du vet ikke hvem som startet det og er veldig opprørt.',
          choices: [
            '😡 Poste et sint svar for å forsvare deg offentlig',
            '💬 Melde til alle du kjenner for å fortelle dem sannheten',
            '📸 Ta skjermbilde av alt og fortelle en betrodd voksen med en gang',
          ],
        },
        {
          id: 'mid_a',
          text: 'Svaret ditt blir viralt. Folk krangler om det. Den opprinnelige posteren vet at de traff deg og poster enda mer, og nyter reaksjonen.',
          choices: [
            '💢 Fortsette å sloss for å rydde opp i ryktet',
            '🗑️ Slette svaret ditt og trekke deg unna',
          ],
        },
        {
          id: 'end_a1',
          title: 'Å spille spillet deres',
          text: 'Krangelen eskalerer ille. Lærere involveres. Dere begge møter skolekonsekvenser — selv om de startet det.',
          lesson: 'Å reagere sint på falske rykter mater dramaet og kan gi deg problemer også. Ikke gi dem reaksjonen de vil ha.',
        },
        {
          id: 'end_a2',
          title: 'Trekke seg unna',
          text: 'Å slette svaret ditt var smart. Dramaet dør sakte ned, men det opprinnelige innlegget er fortsatt oppe uten noen reell konsekvens for personen som postet det.',
          lesson: 'Å slette et sint innlegg er smart. Rapporter også det opprinnelige innlegget og be en betrodd voksen om hjelp, så det virkelig blir løst.',
        },
        {
          id: 'end_b',
          title: 'Skadekontroll',
          text: 'Du bruker timer på å melde til folk. Noen tror deg; andre gjør det ikke. Det er utmattende og innlegget er fortsatt oppe og når nye folk hele tiden.',
          lesson: 'Å skrive til alle enkeltvis er slitsomt og hjelper ofte ikke. Å rapportere innlegget og spørre en betrodd voksen er raskere og sterkere.',
        },
        {
          id: 'mid_c',
          text: 'Den betrodde voksne hjelper deg med å rapportere innlegget for trakassering. Det tas ned raskt. Sammen finner dere ut hvem som mest sannsynlig postet det.',
          choices: [
            '🤝 Gå med på en megling med personen som postet det',
            '🚫 Blokkere dem og gå videre nå som innlegget er nede',
          ],
        },
        {
          id: 'end_c1',
          title: 'Ekte løsning',
          text: 'En megling med voksenstøtte avdekker hva som lå bak ryktet. Den andre personen unnskylder seg. Skolen lager nye retningslinjer for å forhindre fremtidige hendelser.',
          lesson: 'Å lagre bevis, rapportere og, når det er trygt, finne den egentlige grunnen gir de beste og mest varige resultatene.',
        },
        {
          id: 'end_c2',
          title: 'Trygt og løst',
          text: 'Innlegget fjernes og du er beskyttet. Blokkering holder deg trygg fremover. Et sterkt utfall gjennom riktige handlinger.',
          lesson: 'Å få et skadelig innlegg fjernet raskt gjennom voksenhjelp er et flott utfall. Blokkering for å holde seg trygg er en smart grense.',
        },
      ],
    },
    {
      id: 10,
      title: 'Passordpress',
      emoji: '🔐',
      topic: 'Press fra en venn og passord',
      nodes: [
        {
          id: 'start',
          text: 'Din beste venn Jonas sier: «Hvis vi virkelig er bestevenner, må du gi meg passordet ditt. Venner har ingen hemmeligheter!» Du føler deg ukomfortabel. Hva gjør du?',
          choices: [
            '🔑 Gi Jonas passordet ditt — venner stoler på hverandre',
            '🤥 Gi et falskt passord for å stoppe krangelen',
            '🗣️ Si rolig at venner ikke trenger hverandres passord',
          ],
        },
        {
          id: 'end_a',
          text: 'Jonas leser meldingene dine og skriver til andre fra kontoen din. Jonas blir sint for ting som er misforstått. Snart sjekker Jonas deg hele tiden.',
          title: 'Kontrollen begynner',
          lesson: 'Et passord er privat. Ekte venner trenger det ikke. Hvis noen stadig ber om det, si fra til en voksen du stoler på, og bytt passord.',
        },
        {
          id: 'mid_b',
          text: 'Jonas finner ut at passordet er falskt og blir veldig sint: «Du lyver! Gi meg det ekte, ellers forteller jeg alle at du lyver!» Presset øker.',
          choices: [
            '🔑 Gi etter og gi det ekte passordet',
            '🗣️ Si nei og fortelle en voksen du stoler på om presset',
          ],
        },
        {
          id: 'end_b1',
          text: 'Når Jonas har passordet ditt, sjekker han hvem du snakker med og bestemmer hvem du får være venn med. Det blir verre og verre.',
          title: 'Fanget',
          lesson: 'Å gi etter stopper sjelden presset. Kontrollerende oppførsel vokser vanligvis. Bytt passord og si fra til en voksen du stoler på.',
        },
        {
          id: 'end_b2',
          text: 'Det er vanskelig å si nei til en nær venn. En voksen du stoler på sier at det var riktig valg. Den voksne hjelper deg å snakke med Jonas, eller ta en pause fra vennskapet.',
          title: 'Fri',
          lesson: 'Å se kontrollerende oppførsel og si nei krever mot. For din egen sikkerhet er det alltid riktig valg.',
        },
        {
          id: 'mid_c',
          text: 'Jonas sier: «Så du stoler ikke på meg!» Du holder deg rolig, men Jonas presser videre, og presset vokser.',
          choices: [
            '💪 Stå fast på grensen din og fortell en voksen du stoler på om presset',
            '😔 Gi passordet bare for å få fred',
          ],
        },
        {
          id: 'end_c1',
          text: 'En voksen du stoler på sier at å kreve passordet ditt er kontroll, ikke vennskap. Med hjelp forklarer du Jonas at du beholder passordene dine for deg selv. En god venn godtar det.',
          title: 'Sunne grenser',
          lesson: 'En god venn respekterer personvernet ditt. Tillit betyr ikke å dele passord. Du fortjener venner som respekterer grensene dine.',
        },
        {
          id: 'end_c2',
          text: 'Jonas er rolig noen dager. Så vil han ha mer: bildene dine, chattene dine. Presset starter på nytt.',
          title: 'Ga etter',
          lesson: 'Å gi fra seg et passord for å få fred hjelper bare en kort stund. Behold passordene dine for deg selv, og si fra til en voksen du stoler på hvis noen presser videre.',
        },
      ],
    },
    {
      id: 11,
      title: 'Del dette for å redde spillet!',
      emoji: '🚨',
      topic: 'Desinformasjon',
      nodes: [
        {
          id: 'start',
          text: 'Et innlegg sprer seg i spillmiljøet ditt. Det har logoen til spillet og sier: «Selskapet legger ned! Spillet stenger i morgen. DEL DETTE for å redde det!» Vennene dine deler det allerede. Hva gjør du?',
          choices: [
            '📤 Dele det med en gang — bedre trygt enn beklager',
            '🙈 Ignorere det og scrolle videre',
            '🔎 Sjekke spillselskapets offisielle nettside eller verifiserte konto',
          ],
        },
        {
          id: 'end_a',
          text: 'Delingen din hjelper innlegget å nå hundrevis av spillere. Så skriver det ekte selskapet: «Spillet er helt fint. Denne meldingen er falsk!» Mange ble redde for ingenting, og navnet ditt står på delingen.',
          title: 'Sprer falskheten',
          lesson: 'Et innlegg som roper «DEL DETTE» og får deg til å få panikk, er et faresignal. Å dele et falskt innlegg sprer det videre, selv om du ikke har laget det.',
        },
        {
          id: 'mid_b',
          text: 'Du ignorerer det, men innlegget vokser. En yngre spiller på laget ditt er lei seg fordi hun tror hun mister spillvennene sine. Hva gjør du?',
          choices: [
            '😶 Si ingenting — du delte det jo ikke',
            '🤝 Si til vennene dine at det ser falskt ut, og rapportere innlegget',
          ],
        },
        {
          id: 'end_b1',
          text: 'Du spredte det ikke, men det falske innlegget skremmer spillerne i flere dager. Vennene dine vet fortsatt ikke at det er falskt.',
          title: 'Stille, men ikke nok',
          lesson: 'Å la være å dele er bra. Å fortelle vennene dine og rapportere innlegget hjelper enda mer.',
        },
        {
          id: 'end_b2',
          text: 'Du viser vennene dine at selskapets offisielle side ikke sier noe om nedleggelse. Du rapporterer innlegget. Mange slutter å dele det, og det blir fjernet.',
          title: 'Faktasjekker',
          lesson: 'Å sjekke den offisielle kilden og rapportere et falskt innlegg beskytter også andre.',
        },
        {
          id: 'mid_c',
          text: 'På den offisielle siden står det ingenting om nedleggelse. Den verifiserte kontoen skriver til og med: «Ikke tro på falske innlegg!» Vennene dine deler det falske likevel.',
          choices: [
            '📣 Sende vennene dine den offisielle lenken og rapportere det falske innlegget',
            '🤐 Beholde det for deg selv — du vet jo sannheten nå',
          ],
        },
        {
          id: 'end_c1',
          text: 'Vennene dine leser den offisielle lenken og sletter delingene sine. Det falske innlegget blir rapportert og forsvinner.',
          title: 'Sannhetsspreder',
          lesson: 'Sjekk offisielle kilder først. Hjelp så andre ved å dele den sanne informasjonen. Hvis du er usikker, spør en voksen du stoler på.',
        },
        {
          id: 'end_c2',
          text: 'Du er trygg for falske nyheter, men vennene dine deler det videre, og flere spillere blir redde.',
          title: 'Smart, men stille',
          lesson: 'Å sjekke er et fint første steg. Å fortelle det til andre og rapportere hjelper mye mer.',
        },
      ],
    },
    {
      id: 12,
      title: 'Den virale utfordringen',
      emoji: '🤳',
      topic: 'Feilinformasjon',
      nodes: [
        {
          id: 'start',
          text: 'En video med en million visninger viser tenåringer som svelger en skje tørt pulver på 60 sekunder, uten vann. Alle i videoen ler. Vennen din sier: «La oss prøve det hjemme hos meg i dag!» Hva gjør du?',
          choices: [
            '🥄 Prøve det — alle ler, så det må være trygt',
            '👍 Si «kanskje senere» og bare like videoen',
            '✋ Si nei og spørre en voksen du stoler på om det er trygt',
          ],
        },
        {
          id: 'end_a',
          text: 'Det tørre pulveret kommer ned i halsen og lungene. Du hoster og får dårlig luft. En voksen tar deg med til legen. Nå ler ingen.',
          title: 'Ikke morsomt i det hele tatt',
          lesson: 'Videoer viser de morsomme delene, ikke risikoen. Mange deler trender uten å sjekke om de er trygge. Det kalles feilinformasjon.',
        },
        {
          id: 'mid_b',
          text: 'Du liker videoen. Vennen din tar utfordringen, og på grunn av likene prøver flere barn. En klassekamerat skriver at han ble skadet, men kommentarene sier bare «lol».',
          choices: [
            '👍 Fortsette å like — det er bare en trend',
            '🗣️ Fortelle det til en voksen du stoler på og advare vennen din',
          ],
        },
        {
          id: 'end_b1',
          text: 'Likene dine hjelper videoen å nå flere barn. Flere prøver, og noen blir syke.',
          title: 'En del av trenden',
          lesson: 'Likes og delinger gjør en video større. Hvis en trend kan skade noen, skal du ikke like den eller dele den.',
        },
        {
          id: 'end_b2',
          text: 'Den voksne sjekker fakta: Utfordringen kan gi kvelning og pustevansker. Vennen din slutter, og den voksne hjelper deg å rapportere videoen.',
          title: 'Trendstopper',
          lesson: 'Å si fra til en voksen du stoler på er smart. En morsom video er ikke bevis på at noe er trygt.',
        },
        {
          id: 'mid_c',
          text: 'Den voksne slår det opp sammen med deg. Leger sier at utfordringen kan gi kvelning og alvorlige pustevansker. Vennen din blir overrasket. En video med mange likes kan likevel ta feil.',
          choices: [
            '📲 Vise vennen din fakta og rapportere videoen',
            '🙅 Bare si nei selv — de andre kan bestemme selv',
          ],
        },
        {
          id: 'end_c1',
          text: 'Vennen din bestemmer seg for ikke å prøve. Dere rapporterer videoen sammen og deler fakta i klassechatten. Færre barn prøver utfordringen.',
          title: 'Sannhetsdetektiv',
          lesson: 'Sjekk fakta, spør en voksen og hjelp andre. Slik stopper du feilinformasjon, selv når de som deler den ikke mente noe vondt.',
        },
        {
          id: 'end_c2',
          text: 'Du er trygg, men vennen din og andre barn prøver likevel. Noen får en stygg hoste.',
          title: 'Trygg, men stille',
          lesson: 'Å si nei for deg selv er bra. Å dele fakta hjelper også andre å være trygge.',
        },
      ],
    },
    {
      id: 13,
      title: 'Influencerens utfordring',
      emoji: '⭐',
      topic: 'Skadelige influencere',
      nodes: [
        {
          id: 'start',
          text: 'Din favorittinfluencer har 2 millioner følgere. Dagens innlegg sier: «Ekte fans tar et bilde på skoletaket! Tagg 3 venner! Det beste bildet får en hilsen!» Vennene dine snakker om det i gruppechatten. Hva gjør du?',
          choices: [
            '📸 Bli med — ekte fans tar utfordringen',
            '🤔 Vente og se hva de andre gjør',
            '🛑 Stoppe og tenke: Er dette trygt? Så spørre en voksen du stoler på',
          ],
        },
        {
          id: 'end_a',
          text: 'Du klatrer opp sammen med vennene dine. En lærer ser dere, og skolen ringer foreldrene. Noen kunne ha falt ned. Influenceren ser aldri bildet ditt.',
          title: 'Farlig fan',
          lesson: 'Influencere tjener penger på oppmerksomhet. De er ikke ansvarlige hvis du blir skadet. En farlig utfordring er aldri verdt det.',
        },
        {
          id: 'mid_b',
          text: 'Noen klassekamerater poster bilder fra taket. Influenceren deler de beste. Vennene dine sier at du er en kylling hvis du ikke blir med.',
          choices: [
            '😬 Bli med så de ikke ler av deg',
            '🧠 Si nei — en ekte venn presser deg ikke inn i fare',
          ],
        },
        {
          id: 'end_b1',
          text: 'Du klatrer opp og er redd hele tiden. Etterpå får du bråk, og du er ikke engang stolt av bildet.',
          title: 'Presset vinner',
          lesson: 'Press fra følgere og venner er ikke en god grunn. Det er greit å si nei, og en ekte venn respekterer det.',
        },
        {
          id: 'end_b2',
          text: 'Du sier nei. To venner ler, men en sier: «Ærlig talt, jeg syntes det var rart jeg også.» Sammen sier dere fra til en lærer, og skolen advarer alle.',
          title: 'Sterkt valg',
          lesson: 'Å si nei krever mot. Andre kjenner ofte det samme, og når du sier fra, kan du beskytte dem også.',
        },
        {
          id: 'mid_c',
          text: 'Du stopper og tenker: Å klatre på et tak er farlig. En voksen du stoler på sier: «Influencere vil ha visninger, og noen tenker ikke på sikkerhet. La oss se om dette innlegget bryter appens regler.»',
          choices: [
            '🚩 Rapportere utfordringsinnlegget til plattformen',
            '😌 Bare holde deg unna og glemme det',
          ],
        },
        {
          id: 'end_c1',
          text: 'Plattformen fjerner utfordringen. Du slutter også å følge influenceren og forteller vennene dine hvorfor. Færre barn blir skadet.',
          title: 'Smart følger',
          lesson: 'Du kan slutte å følge noen som legger ut farlige innlegg. Rapporter risikable innlegg. Husk: Stopp – Tenk – Sjekk – Spør.',
        },
        {
          id: 'end_c2',
          text: 'Du er trygg, men utfordringen blir liggende på nettet, og andre barn kan prøve den.',
          title: 'Trygg for nå',
          lesson: 'Å holde seg unna er bra. Å rapportere et farlig innlegg hjelper å beskytte andre barn også.',
        },
      ],
    },
    {
      id: 14,
      title: 'Den endeløse strømmen',
      emoji: '📱',
      topic: 'Algoritmer og falske nyheter',
      nodes: [
        {
          id: 'start',
          text: 'I går kveld så du noen «sjokkerende nyhets»-videoer. Nå er strømmen din full av dem: sinte folk, skumle påstander, nedtellinger til katastrofe. Du er bekymret og klarer ikke slutte å scrolle. Hva gjør du?',
          choices: [
            '📲 Fortsette å scrolle — det må være viktige nyheter',
            '😰 Dele den skumleste videoen for å advare vennene dine',
            '🧭 Spørre deg selv: Hvorfor ser jeg så mange av disse? Så fortelle det til en voksen du stoler på',
          ],
        },
        {
          id: 'end_a',
          text: 'Du scroller i to timer, og videoene blir stadig skumlere. Du får ikke sove og er redd dagen etter.',
          title: 'Fanget i sløyfen',
          lesson: 'Apper viser deg mer av det du ser på. Sjokkvideoer holder deg fast, selv når de ikke er sanne eller bra for deg.',
        },
        {
          id: 'mid_b',
          text: 'Du deler den. Venner svarer: «Er dette ekte?» En venninne er så redd at hun ikke får sove. Så finner noen ut at videoen er gammel og fra et annet land.',
          choices: [
            '😳 Slette delingen din og fortelle vennene dine sannheten',
            '🤷 La det være — du delte den bare, du laget den ikke',
          ],
        },
        {
          id: 'end_b1',
          text: 'Du sletter delingen og forteller vennene dine at videoen er gammel. De fleste tror deg. Det krever mot å rette opp en feil.',
          title: 'Ærlig rettelse',
          lesson: 'Alle deler noe feil av og til. Å rette det raskt og være ærlig hjelper mye. Sjekk før du deler.',
        },
        {
          id: 'end_b2',
          text: 'Videoen sprer seg videre med navnet ditt på. Flere blir redde for noe som ikke engang er sant.',
          title: 'Rykte-maskin',
          lesson: 'Et falskt innlegg som blir liggende, sprer seg videre. Hvis du finner ut at det er feil, slett det og si fra.',
        },
        {
          id: 'mid_c',
          text: 'En voksen du stoler på forklarer: Apper lærer hva du ser på og viser deg mer av det. Sjokkvideoer får mange visninger, så appene dytter dem fram. Sammen ser dere at du kan endre strømmen din.',
          choices: [
            '⚙️ Trykke «Ikke interessert», følge morsomme og nyttige kontoer og ta en pause',
            '🔁 La strømmen være som den er — du kan ignorere de skumle delene',
          ],
        },
        {
          id: 'end_c1',
          text: 'Etter noen dager viser strømmen din mye mer bra innhold. Du føler deg roligere og sjekker fakta før du deler noe.',
          title: 'Sjef over strømmen',
          lesson: 'Du kan styre strømmen din: si «ikke interessert», velg hva du følger, og ta pauser. Sjekk fakta før du deler.',
        },
        {
          id: 'end_c2',
          text: 'De skumle videoene kommer fortsatt, og du er fortsatt litt bekymret.',
          title: 'Fortsatt fanget',
          lesson: 'Det er vanskelig å ignorere når strømmen stadig dytter. Når du endrer hva du følger og ser på, endrer det seg hva du ser.',
        },
      ],
    },
  ],
}
