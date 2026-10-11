// ---------------------------------------------------------------------------
// Digital Misuse (DM) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Digital Misuse module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDM = {
  aim: 'Suteikti pagrindinių žinių apie tai, kas yra skaitmeninė prievarta ir piktnaudžiavimas, ir apie principus, kaip su tuo susidoroti.',
  objectives: [
    'Pristatyti skaitmeninės prievartos ir piktnaudžiavimo skaitmeninėje aplinkoje sąvoką.',
    'Paaiškinti skaitmeninės prievartos ir piktnaudžiavimo motyvus.',
    'Ugdyti sąmoningumą apie skaitmeninės prievartos ir piktnaudžiavimo atvejus, smurtautojų naudojamas technikas ir principus, kaip su tuo susidoroti.',
  ],
  outcomes: [
    'Galiu apibrėžti skaitmeninę prievartą ir piktnaudžiavimą, apibūdinti pavyzdžius, susijusius su klaidinformacija, dezinformacija, kibernetiniu patyčiavimusi, nesaugiu bendravimu su nepažįstamaisiais ir žalingu influencerių elgesiu, ir paaiškinti galimus šių pavyzdžių motyvus.',
    'Galiu pateiktuose scenarijuose atpažinti technikas, kurias naudoja smurtautojai ir piktnaudžiautojai.',
    'Galiu pateiktuose scenarijuose pasiūlyti ir aptarti būdus, kaip susidoroti su skaitmenine prievarta ir piktnaudžiavimu.',
  ],
  parts: [
    {
      title: 'Klaidinformacija',
      goal: 'Padėti mokiniams suprasti, kas yra klaidinformacija, kas motyvuoja žmones tai daryti ir kaip ją atpažinti.',
      bundle: {
        filename: 'Skaitmeninis piktnaudžiavimas - paketas - 1 dalis',
      },
      included: {
        materials: [
          {
            // ID: 7.1.2
            kind: 'Žaidimo kortelės',
            name: 'Tiesos detektyvai',
            filename: 'Žaidimo kortelės - Tiesos detektyvai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 7.1.3
            kind: 'Paveikslėlis',
            name: 'Cinamono iššūkis',
            filename: 'Paveikslėlis - Cinamono iššūkis',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Klaidinformacijos atpažinimas',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.1.1
        title: 'Kas yra klaidinga informacija?',
        supportText:
          'Naudokite šį vaizdo įrašą, kad supažindintumėte su klaidinformacija kaip klaidingais ar netiksliais turinio fragmentais, kurie gali plisti internete be žalingos intencijos. Sustokite ir paklauskite mokinių, ar jie kada nors pasidalino kuo nors, kas vėliau pasirodė esąs netiesa.',
        downloads: {
          video: {
            filename: 'Kas yra klaidinga informacija',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Kas yra klaidinga informacija - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      title: 'Dezinformacija',
      goal: 'Padėti mokiniams suprasti, kas yra dezinformacija, motyvacijas už jos ir kaip ją atpažinti.',
      bundle: {
        filename: 'Skaitmeninis piktnaudžiavimas - paketas - 2 dalis',
      },
      included: {
        materials: [
          {
            // ID: 7.2.2
            kind: 'Darbalapas',
            name: 'Laikraščio šablonas „Dalijimasis naujienomis“',
            filename: 'Darbalapas - Laikraščio šablonas Dalijimasis naujienomis',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 7.2.3
            kind: 'Paveikslėlis',
            name: 'Socialinių tinklų algoritmai',
            filename: 'Paveikslėlis - Socialinių tinklų algoritmai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Dezinformacijos supratimas',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.2.1
        title: 'Kas yra dezinformacija?',
        supportText:
          'Naudokite šį vaizdo įrašą, kad padėtumėte mokiniams atskirti dezinformaciją — tyčia apgaulingą turinį — nuo klaidinformacijos. Sustokite aptarti, kaip intencija keičia tai, kaip mes vertiname ir reaguojame į melagingą informaciją.',
        downloads: {
          video: {
            filename: 'Kas yra dezinformacija',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Kas yra dezinformacija - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      title: 'Kibernetinis patyčiavimasis',
      goal: 'Padėti mokiniams suprasti, kas yra kibernetinis patyčiavimasis, motyvacijas už jo ir kaip jį atpažinti.',
      bundle: {
        filename: 'Skaitmeninis piktnaudžiavimas - paketas - 3 dalis',
      },
      included: {
        materials: [
          {
            // ID: 7.3.1
            kind: 'Scenarijų kortelės',
            name: 'Suvaidink tai!',
            filename: 'Scenarijų kortelės - Suvaidink tai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 7.3.3
            kind: 'Scenarijų kortelės',
            name: 'Ar tai tik blogos manieros?',
            filename: 'Scenarijų kortelės - Ar tai tik blogos manieros',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Blogos manieros ir kibernetinės patyčios',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.3.2
        title: 'Kas yra kibernetinis patyčiavimasis?',
        supportText:
          'Naudokite šį vaizdo įrašą, kad padėtumėte mokiniams apibrėžti kibernetinį patyčiavimąsi ir suprasti, kaip elgesys internete gali sukelti tikrą emocinę žalą. Sustokite aptarti, kodėl stebėtojų reakcija šiose situacijose yra svarbi.',
        downloads: {
          video: {
            filename: 'Kas yra kibernetinis patyčiavimasis',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Kas yra kibernetinis patyčiavimasis - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      title: 'Nepažįstamųjų pavojus',
      goal: 'Padėti mokiniams suprasti, kas yra nepažįstamųjų pavojus, motyvacijas už jo ir kaip jį atpažinti.',
      bundle: {
        filename: 'Skaitmeninis piktnaudžiavimas - paketas - 4 dalis',
      },
      included: {
        materials: [
          {
            // ID: 7.4.1
            kind: 'Plakatas',
            name: 'Nepažįstamųjų pavojus',
            filename: 'Plakatas - Nepažįstamųjų pavojus',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 7.4.2
            kind: 'Scenarijų kortelės',
            name: 'Tikras ar netikras? Profilių detektyvo žaidimas',
            filename: 'Scenarijų kortelės - Tikras ar netikras Profilių detektyvo žaidimas',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 7.4.3
            kind: 'Darbalapas',
            name: 'Nepažįstamųjų pavojaus čempionas',
            filename: 'Darbalapas - Nepažįstamųjų pavojaus čempionas',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Nepažįstamųjų keliamo pavojaus supratimas',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
    },
    {
      title: 'Influenceriai',
      goal: 'Padėti mokiniams suprasti, kas yra influenceriai ir kas juos motyvuoja.',
      bundle: {
        filename: 'Skaitmeninis piktnaudžiavimas - paketas - 5 dalis',
      },
      included: {
        materials: [
          {
            // ID: 7.5.2
            kind: 'Scenarijų kortelės',
            name: 'Influencerių įrašai',
            filename: 'Scenarijų kortelės - Influencerių įrašai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Kas yra influenceris?',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.5.1
        title: 'Socialinių medijų influenceriai',
        supportText:
          'Naudokite šį vaizdo įrašą, kad ištirtumėte, kaip influenceriai formuoja nuomones ir elgesį socialiniuose tinkluose, ir kokia atsakomybė kyla dėl šios pasiekiamumo galios. Sustokite ir paklauskite mokinių, kuriuos influencerius jie seka ir kas daro juos patikimais.',
        downloads: {
          video: {
            filename: 'Socialinių medijų influenceriai',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Socialinių medijų influenceriai - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      title: 'Kaip galime susidoroti su skaitmeninių nusikaltėlių elgesiu?',
      goal: 'Padėti mokiniams žinoti, ką jie gali padaryti, kad apsisaugotų nuo skaitmeninio smurto.',
      bundle: {
        filename: 'Skaitmeninis piktnaudžiavimas - paketas - 6 dalis',
      },
      included: {
        materials: [
          {
            // ID: 7.6.1
            kind: 'Darbalapas',
            name: 'Skaitmeninis superherojus',
            filename: 'Darbalapas - Skaitmeninis superherojus',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 7.6.2
            kind: 'Darbalapas',
            name: 'CyberDoku: Paslapties įminimas',
            filename: 'Darbalapas - CyberDoku Paslapties įminimas',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 7.6.3
            kind: 'Paveikslėlis',
            name: 'CyberDoku: Vietovės žemėlapis',
            filename: 'Paveikslėlis - CyberDoku Vietovės žemėlapis',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Atsparumas skaitmeninei prievartai ir piktnaudžiavimui',
          },
          {
            title: 'Skaitmeninės prievartos ir piktnaudžiavimo atpažinimas ir susidorojimas su jais',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
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
  title: 'Tikros istorijos',
  subtitle:
    'Priimk sprendimus. Patirk pasekmes. Išmok, kaip susidoroti su kibernetiniu patyčiavimusi, netikromis naujienomis, rizikingais influenceriais ir spaudimu internete.',
  howItWorks: 'Kaip tai veikia',
  instruction:
    'Peržiūrėk tikras skaitmeninio smurto istorijas. Kiekvienu svarbiu momentu pasirinksi, ką daryti — ir skirtingi pasirinkimai lemia skirtingus rezultatus. Uždirbk iki 3 žvaigždžių už kiekvieną istoriją, radęs saugiausią kelią. Jei gauni sunkią pabaigą, bandyk istoriją iš naujo, kad atrastum geresnį kelią!',
  tip: 'Kiekviena istorija šakojasi keliomis kryptimis. Visada yra bent vienas kelias, vedantis į saugų, teigiamą rezultatą — bet turi priimti teisingus sprendimus jį rasti!',
  tipLabel: 'Patarimas',
  yourBestScore: 'Tavo geriausias rezultatas',
  bestResultDesc: 'Geriausias rezultatas iš kiekvienos istorijos',
  storiesTitle: '📖 Istorijos',
  watchOutTitle: '🚩 Atkreipk dėmesį',
  watchOutItems: [
    '🚩 Bet kas, prašantis privačių nuotraukų',
    '🚩 Kas nors, reikalaujantis tavo slaptažodžio, net draugas',
    '🚩 Nepažįstamieji, klausiantys tavo adreso ar mokyklos',
    '🚩 Spaudimas „Laikyk tai paslaptyje“',
    '🚩 Negeri įrašai, ekrano kopijos, netikri profiliai',
    '🚩 Žinutės „DALIJKIS DABAR“ ir šokiruojantys teiginiai',
    '🚩 Iššūkiai internete, kurie gali tau pakenkti',
  ],
  welcomeDesc: 'Priimk sprendimus atsargiai — skirtingi keliai veda į labai skirtingus rezultatus.',
  startStory: 'Pradėti istoriją →',
  whatWeLearned: '💡 Ką išmokome:',
  tryDifferentPath: '↩ Išbandyti kitą kelią',
  nextStory: 'Kita istorija →',
  storyOfTemplate: 'Istorija {n} iš {total}',
  storyLabelTemplate: 'Istorija {n}:',
  topicLabel: 'Tema',
  pointsLabel: 'Taškai šiame bandyme',
  badgeGood: '✨ Puikus rezultatas!',
  badgeOkay: '🌤️ Galėjo būti geriau',
  badgeBad: '❌ Skaudi pamoka',
  messagesAriaLabel: 'Istorijos žinutės',
  seeFinalScore: '🎉 Žiūrėti galutinį rezultatą',
  allStoriesComplete: 'Visos istorijos baigtos!',
  finalScoreDesc: 'Štai kaip sekėsi visose istorijose:',
  playAgain: 'Žaisti dar kartą',
  rankChampion: '🏆 Saugos čempionas',
  rankChampionMsg: 'Puiku! Beveik kiekvienoje situacijoje radai saugiausią kelią.',
  rankDefender: '🛡️ Skaitmeninis gynėjas',
  rankDefenderMsg: 'Puikus darbas! Didžiąją dalį situacijų suvaldei išmintingai ir saugiai.',
  rankNavigator: '📚 Mokymosi navigatorius',
  rankNavigatorMsg: 'Geros pastangos! Iš naujo žaisk kai kurias istorijas, kad rastum geresnius kelius ir uždirbk daugiau žvaigždžių.',
  rankBeginning: '🌱 Pradedantysis',
  rankBeginningMsg: 'Toliau bandyk skirtingus kelius — kiekvienas pakartojimas moko ką nors naujo!',
  sensitiveToggleLabel: 'Įtraukti jautrias istorijas',
  sensitiveToggleNote: 'Dvi istorijos yra apie privačias nuotraukas ir apie nepažįstamuosius, kurie klausia tavo adreso. Pirma paklausk mokytojo ar patikimo suaugusiojo.',
  sensitiveNoteTitle: '⚠️ Pastaba',
  sensitiveNoteTemplate: 'Ši istorija apie: {topic}. Ji gali kelti nemalonius jausmus. Gali ją praleisti. Jei tau kada nors nutiktų kas nors panašaus, pasakyk patikimam suaugusiajam.',
  skipStory: 'Praleisti šią istoriją',
  skippedLabel: 'Praleista',
  scoreDenomTemplate: '/ {max} ★',
  stories: [
    {
      id: 1,
      title: 'Memo problema',
      emoji: '😟',
      topic: 'Kibernetinis patyčiavimasis',
      nodes: [
        {
          id: 'start',
          text: 'Atidarei telefoną ir matai grupinį pokalbį. Kažkas vardu Jake paskelbė negražų memą apie tavo klasioką Emma, šaipydamasis iš jos išvaizdos. 23 žmonės jau patiko. Ką darai?',
          choices: [
            '👍 Patikti memą, kad priklausytum grupei',
            '📲 Praslinkti pro šalį ir ignoruoti',
            '💬 Nusiųsti Emma privačią palaikomąją žinutę',
          ],
        },
        {
          id: 'end_a',
          title: 'Problemos dalis',
          text: 'Patikote memą. Jake skelbia daugiau, dar negražesnių. Emma mato tavo vardą tarp mylinčių ir yra sudaužyta. Mokytojas sužino ir susisiekia su tavo tėvais.',
          lesson: 'Negražaus turinio patikimas yra kibernetinio patyčiavimosi forma. Tavo „patinka" niekada nematomas — tikslas visada mato, kas jį palaikė.',
        },
        {
          id: 'mid_b',
          text: 'Praslinksti pro šalį, bet įrašai tęsiasi. Kitą dieną Emma sėdi viena per pietus ir atrodo labai nusiminusi. Patyčiavimasis pablogėjo.',
          choices: [
            '😶 Toliau ignoruoti — ne tavo problema',
            '🏫 Pasakyti mokytojui, kas vyko',
          ],
        },
        {
          id: 'end_b1',
          title: 'Tylus stebėtojas',
          text: 'Praeina savaitės. Emma praleidžia mokyklą. Jautiesi kaltas, bet nieko nesakai. Patyčiavimasis tęsiasi be pasipriešinimo.',
          lesson: 'Patyčiavimosi ignoravimas jo nesustabdo. Stebėtojai turi tikrą galią padėti — tylėjimas vis tiek yra pasirinkimas.',
        },
        {
          id: 'end_b2',
          title: 'Drąsus pranešėjas',
          text: 'Mokytojas veikia nedelsiant. Jake ir jo tėvai iškviečiami. Emma gauna paramą iš mokyklos konsultanto. Patyčiavimasis sustoja.',
          lesson: 'Pasakyti patikimam suaugusiajam yra vienas stipriausių dalykų, kuriuos gali padaryti. Tai ne skundimas. Tu padedi tam, kam reikia pagalbos.',
        },
        {
          id: 'mid_c',
          text: 'Emma atsako: „Labai ačiū… tai tikrai skaudėjo. Nežinojau, ką daryti." Ji dėkinga, bet išsigandusi. Įrašai vis dar yra.',
          choices: [
            '📢 Padėti Emma pranešti kiekvieną įrašą platformai',
            '🤷 Pasakyti Emma tiesiog ignoruoti, praeis',
          ],
        },
        {
          id: 'end_c1',
          title: 'Skaitmeninis gynėjas',
          text: 'Tu ir Emma kartu praneši kiekvieną įrašą. Dauguma pašalinami per dieną. Taip pat lankote mokyklos konsultantą, kuris toliau palaiko Emma. Patyčiavimasis sustoja.',
          lesson: 'Susisiekti su nukentėjusiuoju IR veikti – geriausias atsakas į patyčias internete. Pranešk apie įrašus ir paprašyk pagalbos patikimų suaugusiųjų.',
        },
        {
          id: 'end_c2',
          title: 'Malonus, bet nepakankamai',
          text: 'Emma bando ignoruoti, bet įrašai tęsiasi. Tavo maloni žinutė padėjo, bet be pranešimo ar suaugusiųjų palaikymo patyčiavimasis tęsiasi.',
          lesson: 'Gerumas yra puiki pradžia. Kad patyčios tikrai liautųsi, dar reikia apie jas pranešti ir paprašyti pagalbos patikimo suaugusiojo.',
        },
      ],
    },
    {
      id: 2,
      title: 'Ekrano kopijos spąstai',
      emoji: '📸',
      topic: 'Privatumas ir išdavystė',
      nodes: [
        {
          id: 'start',
          text: 'Išsiuntei draugei Zoe privačią žinutę apie simpatiją. Zoe padarė ekrano kopiją ir be leidimo pasidalijo didelėje grupinėje pokalbyje. Visi komentuoja. Ką darai?',
          choices: [
            '😡 Paskelbti piktą viešą įrašą apie tai, ką Zoe padarė',
            '📱 Susisiekti su Zoe privačiai',
            '📸 Išsaugoti įrodymus ir pasakyti patikimam suaugusiajam',
          ],
        },
        {
          id: 'end_a',
          title: 'Ugnis susitinka ugnį',
          text: 'Skelbi viešai, apkaltindamas Zoe. Zoe atsako. Dešimtys žmonių prisijungia prie dramos. Dabar tai visiškas interneto karas ir abu atrodote blogai.',
          lesson: 'Viešas apkaltinimas internete beveik visada eskaluoja situaciją. Jis retai atneša sprendimą, kurio tikiesi.',
        },
        {
          id: 'mid_b',
          text: 'Rašai Zoe: „Kodėl pasidalinai? Tai buvo privatu!" Zoe sako „Tai buvo tik pokštas, nusiramink." Bet ji neištrynė.',
          choices: [
            '😔 Priimti jos „atsiprašymą" ir tyliai tęsti',
            '🗣️ Tvirtai paprašyti ištrinti ir įtraukti patikimą suaugusįjį',
          ],
        },
        {
          id: 'end_b1',
          title: 'Nušluota po kilimu',
          text: 'Zoe iš tikrųjų nesupranta, kodėl tai buvo neteisinga. Ekrano kopija lieka. Jautiesi įskaudintas, bet nieko iš tikrųjų neišspręsta.',
          lesson: '„Tik pokštas“ niekada nėra pasiteisinimas dalintis privačiomis žinutėmis. Jei blogas elgesys neturi pasekmių, jis gali pasikartoti.',
        },
        {
          id: 'end_b2',
          title: 'Tikrasis sprendimas',
          text: 'Veikiama spaudimo ir su suaugusiųjų įtraukimu Zoe ją ištrina ir veda tikrą pokalbį apie sutikimą ir privatumą. Jūsų draugystė atsigauna sveikesniais pagrindais.',
          lesson: 'Ramiai, bet tvirtai ginti savo privatumą, padedant suaugusiesiems, atneša tikrą pokytį. Ne tik trumpą ramybę.',
        },
        {
          id: 'mid_c',
          text: 'Patikimas suaugusysis padeda pranešti platformai ir susisiekia su Zoe tėvais. Ekrano kopija pašalinama. Zoe atsiprašo.',
          choices: [
            '🤝 Priimti jos atsiprašymą ir stengtis atkurti draugystę',
            '🚫 Blokuoti Zoe — nebenori jos kaip draugės',
          ],
        },
        {
          id: 'end_c1',
          title: 'Pasitikėjimas atkurtas',
          text: 'Su suaugusiųjų parama ir tikru atsiprašymu situacija tinkamai išsprendžiama. Zoe supranta sutikimą. Abi judite į priekį.',
          lesson: 'Išsaugoti įrodymus, pranešti ir duoti tikrą šansą atsiprašyti gali paversti skausmingą akimirką pamoka.',
        },
        {
          id: 'end_c2',
          title: 'Saugi distancija',
          text: 'Ekrano kopija pašalinta ir esi apsaugotas. Blokavimas yra tinkama riba, kai pasitikėjimas sulaužytas. Saugus rezultatas teisingų veiksmų dėka.',
          lesson: 'Apsaugoti save visada gerai. Paprašyti suaugusiųjų pagalbos buvo būtent tai, ko reikėjo.',
        },
      ],
    },
    {
      id: 3,
      title: 'Žaidimų įniršis',
      emoji: '🎮',
      topic: 'Priekabiavimas žaidžiant internete',
      nodes: [
        {
          id: 'start',
          text: 'Žaidi mėgstamiausią internetinį žaidimą ir kitas žaidėjas pradeda siuntinėti neapykantingas žinutes — vadina pravardėmis ir grasina. Kiti lobilyje stebi. Ką darai?',
          choices: [
            '💢 Atsakyti savo įžeidimais',
            '🙉 Ignoruoti žinutes ir toliau žaisti',
            '🔇 Nutildyti, padaryti ekrano kopiją ir pranešti apie žaidėją žaidime',
          ],
        },
        {
          id: 'end_a',
          title: 'Abu užblokuoti',
          text: 'Ginčijiesi atgal. Abu pranešate vienas apie kitą. Sistema pažymi tavo paskyrą. Abu užblokuojami — toksiškas žaidėjas pranešė apie tave pirmas.',
          lesson: 'Neapykanta atsakant į neapykantą kelia riziką ir tau. Žaidimų platformos dažnai blokuoja abi toksinio keitimosi puses.',
        },
        {
          id: 'mid_b',
          text: 'Ignoruoji juos, bet jie eskaluoja. Dabar rado tavo viešą žaidimo profilį ir skelbia ten įžeidimus kitiems matyti.',
          choices: [
            '🗑️ Ištrinti profilį, kad sustabdytum juos',
            '📢 Pranešti platformai ir pasakyti patikimam suaugusiajam',
          ],
        },
        {
          id: 'end_b1',
          title: 'Bėgimas',
          text: 'Profilio ištrynimas kol kas sustabdo šį priekabiavimą. Bet jis pereina prie kito taikinio. Jokių pasekmių, jokio tikro pokyčio.',
          lesson: 'Apsaugoti save svarbu. Bet pranešimas užtikrina, kad skriaudėjas patirtų pasekmes ir negalėtų taip elgtis su kitais.',
        },
        {
          id: 'end_b2',
          title: 'Žaidėjas užblokuotas',
          text: 'Platforma tiria ir blokuoja priekabiautojo paskyrą. Patikimas suaugusysis padeda peržiūrėti privatumo nustatymus ir jautiesi palaikomas.',
          lesson: 'Pranešti apie žaidimų skriaudėjus veikia. Platformos rimtai žiūri į pranešimus, ypač kai išsaugotos ekrano kopijos kaip įrodymas.',
        },
        {
          id: 'mid_c',
          text: 'Nutildei ir pranešei apie žaidėją su ekrano kopijomis. Pranešimas peržiūrimas. Bet vis dar esi sukrėstas to, kas buvo pasakyta.',
          choices: [
            '🗣️ Pasakyti patikimam suaugusiajam, kaip patirtis privertė tave jaustis',
            '😶 Pasilikti sau — jau susitvarkei',
          ],
        },
        {
          id: 'end_c1',
          title: 'Pranešimas ir palaikymas',
          text: 'Patikimas suaugusysis patvirtina tavo jausmus ir padeda sureguliuoti privatumo nustatymus. Platforma patvirtina, kad žaidėjas buvo užblokuotas.',
          lesson: 'Pranešimas svarbus, bet taip pat svarbu apdoroti, kaip internetinis smurtas verčia tave jaustis. Patikimi suaugusieji gali padėti abiem.',
        },
        {
          id: 'end_c2',
          title: 'Pusinis sprendimas',
          text: 'Žaidėjas užblokuojamas, bet tu pats nešioji patirtį. Jautiesi saugesnis internete, bet vis dar nerimauji.',
          lesson: 'Puikiai susitvarkai su technine puse! Prisimink: kalbėjimasis su kuo nors apie tai, kaip internetinis smurtas verčia jaustis, yra lygiai taip pat svarbu.',
        },
      ],
    },
    {
      id: 4,
      title: 'Netikras profilis',
      emoji: '👤',
      topic: 'Apsimetimas kitu asmeniu',
      nodes: [
        {
          id: 'start',
          text: 'Pastebėjai netikrą socialinių medijų paskyrą, naudojančią draugo Sam nuotraukas. Ji skelbia gėdinančius dalykus ir prideda Sam klasiokus. Sam dar nežino. Ką darai?',
          choices: [
            '💬 Parašyti netikrai paskyrai ir liepti jai sustoti',
            '📞 Nedelsiant pasakyti Sam, kad jis žinotų',
            '🚩 Pranešti apie netikrą paskyrą IR nedelsiant pasakyti Sam',
          ],
        },
        {
          id: 'end_a',
          title: 'Nekurstyk trolio',
          text: 'Netikra paskyra tave blokuoja ir pagreitina skelbimus. Dabar pradeda taikytis ir į tave. Tiesioginis įsikišimas padėtį pablogino.',
          lesson: 'Tiesioginis susisiekimas su netikra ar piktnaudžiaujančia paskyra beveik visada padaro dalykus blogiau. Vietoj to pranešk platformai.',
        },
        {
          id: 'mid_b',
          text: 'Sam šokiruotas ir nusiminęs. Sam nori parašyti visiems, kad paaiškintų, jog tai netikra, bet nežino, ką dar daryti. Paskyra vis dar veikia.',
          choices: [
            '📢 Padėti Sam pranešti apie paskyrą platformai',
            '🗣️ Pasiūlyti Sam tik asmeniškai paaiškinti, kad tai netikra',
          ],
        },
        {
          id: 'end_b1',
          title: 'Komandinis darbas laimi',
          text: 'Tu ir Sam kartu pranešate apie paskyrą. Platforma ją pašalina per kelias valandas. Sam taip pat pasako patikimam suaugusiajam, kuris padeda stebėti būsimus bandymus.',
          lesson: 'Kartu pranešti apie netikras paskyras veikia labai gerai. Platformos rimtai žiūri į netikrus profilius ir veikia greitai.',
        },
        {
          id: 'end_b2',
          title: 'Lėta reakcija',
          text: 'Sam asmeniškai paaiškina žmonėms, bet netikra paskyra lieka dienų dienas, sukeldama daugiau gėdos, kol galų gale kažkas kitas ją praneša.',
          lesson: 'Pranešti platformai apie netikrą paskyrą daug greičiau nei aiškinti kiekvienam atskirai.',
        },
        {
          id: 'mid_c',
          text: 'Platforma gauna tavo pranešimą ir pradeda tikrinti paskyrą. Sam dėkingas, kad taip greitai veikei.',
          choices: [
            '🏠 Taip pat pasakyti patikimam suaugusiajam, kad Sam jaustųsi palaikomas',
            '⏳ Tiesiog laukti, kol platforma veiks',
          ],
        },
        {
          id: 'end_c1',
          title: 'Visapusiška apsauga',
          text: 'Su suaugusiųjų parama ir platformos veiksmais paskyra pašalinama. Sam jaučiasi tikrai rūpinamasi. Mokykla įspėjama stebėti tolesnius bandymus.',
          lesson: 'Pranešti platformai IR pasakyti patikimam suaugusiajam – geriausia apsauga, kai kažkas apsimeta tavimi ar tavo draugu.',
        },
        {
          id: 'end_c2',
          title: 'Greiti veiksmai',
          text: 'Platforma pašalina paskyrą. Sam palengvėja. Puikus rezultatas greito, teisingo veikimo dėka.',
          lesson: 'Nedelsiant pranešti apie netikrą paskyrą yra būtent tai, ko reikia. Kuo greičiau praneši, tuo greičiau ji pašalinama.',
        },
      ],
    },
    {
      id: 5,
      title: 'Išstumtas internete',
      emoji: '😔',
      topic: 'Atskirtis internete',
      nodes: [
        {
          id: 'start',
          text: 'Sužinai, kad tavo draugų grupė sukūrė naują grupinį pokalbį be tavęs. Jie planuoja vakarėlį, į kurį nepakvietė tavęs, ir gali matyti, kaip jie viešai apie tai skelbia. Jautiesi įskaudintas ir pažemintas.',
          choices: [
            '📣 Viešai skelbti apie skausmą ir atskirtį',
            '💬 Siųsti piktą žinutę visai grupei',
            '🤝 Privačiai parašyti artimiausiam draugui grupėje',
          ],
        },
        {
          id: 'end_a',
          title: 'Viešas protrūkis',
          text: 'Tavo viešas įrašas sulaukia dėmesio, daugiausia gėdos. Draugų grupė apsigina. Drama plinta po visą mokyklą internete.',
          lesson: 'Viešas skundimasis, kad tave paliko nuošalyje, retai padeda. Dažniausiai tik pablogina. Privatus pokalbis veikia daug geriau.',
        },
        {
          id: 'end_b',
          title: 'Grupinio pokalbio drama',
          text: 'Grupinis pokalbis tampa nejaukus. Kai kurie draugai jaučiasi kalti; kiti susierzina. Nieko iš tikrųjų neišsprendžiama ir įtampa išlieka savaitėmis.',
          lesson: 'Konfrontuoti visą grupę iš karto pastato visus į gynybinę poziciją. Asmeniniai pokalbiai akis į akį veikia daug geriau.',
        },
        {
          id: 'mid_c',
          text: 'Artimiausia draugė Mia prisipažįsta, kad jautėsi spaudžiama tave pašalinti kažkieno kito iš grupės. Ji atsiprašo ir sako, kad nori padėti ištaisyti situaciją.',
          choices: [
            '🤝 Paprašyti Mia kalbėti už tave grupėje',
            '🏫 Pasakyti patikimam suaugusiajam apie tyčinę atskirtį',
          ],
        },
        {
          id: 'end_c1',
          title: 'Tikrasis sąjungininkas',
          text: 'Mia kalba. Tu vėl įtraukiamas ir asmuo, kuris tave šalino, prikalbinamas. Draugų grupė tampa stipresnė per sąžiningumą.',
          lesson: 'Kai kas nors nori padėti, leisk. Tikri draugai stoja vieni už kitus — net kai tai nepatogu.',
        },
        {
          id: 'end_c2',
          title: 'Suaugusiojo sąjungininkas',
          text: 'Patikimas suaugusysis padeda tarpininkauti. Visi apmąsto, kaip tyčinė atskirtis skaudo. Grupės dinamika keičiasi į gerąją pusę.',
          lesson: 'Tyčia ką nors išskirti internete yra patyčių rūšis. Patikimas suaugusysis gali padėti sutvarkyti nesveiką kompaniją.',
        },
      ],
    },
    {
      id: 6,
      title: 'Privačios nuotraukos',
      emoji: '📷',
      topic: 'Spaudimas dėl nuotraukų',
      nodes: [
        {
          id: 'start',
          text: 'Kažkas, su kuriuo dvi savaites bendrauji internete, sako, kad tikrai tau patinka, ir prašo privačios nuotraukos. Jis žada pirmiausia nusiųsti savo ir sako laikyti tai paslaptyje nuo visų.',
          choices: [
            '📸 Nusiųsti nuotrauką — jis atrodo tikrai malonus',
            '😐 Pasakyti, kad jautiesi nepatogiai, bet toliau su juo kalbėti',
            '🚫 Atsisakyti, nustoti su juo bendrauti ir nedelsiant pasakyti patikimam suaugusiajam',
          ],
        },
        {
          id: 'end_a',
          title: 'Spąstai',
          text: 'Jis niekada nieko neatsiunčia atgal. Vietoj to reikalauja daugiau nuotraukų arba pasidalins tavo su visais. Esi įkliuvęs. Tai vadinama sekstorsionu.',
          lesson: 'Siųsti privačias nuotraukas kam nors, ką pažįsti tik internete, labai pavojinga. Šantažas nuotraukomis vadinamas sekstorsionu ir yra nusikaltimas. Nedelsiant pasakyk patikimam suaugusiajam.',
        },
        {
          id: 'mid_b',
          text: '„Jei nesiųsi, akivaizdu, kad manimi nepasitiki." Jis sako, viskas baigta, jei atsisakysi. Jautiesi sutrikęs ir spaudžiamas.',
          choices: [
            '📸 Nusileisti ir nusiųsti nuotrauką, kad išsaugotum taiką',
            '🚫 Blokuoti jį ir nedelsiant pasakyti patikimam suaugusiajam',
          ],
        },
        {
          id: 'end_b1',
          title: 'Spąstai (2 dalis)',
          text: 'Nusiųsti nuotrauką ir šantažas prasideda iš karto. Supranti, kad šis asmuo tai planavo nuo pirmosios žinutės.',
          lesson: 'Sveiki santykiai niekada neturi ultimatumų. „Atsiųsk nuotrauką, arba viskas baigta“ yra didelis įspėjamasis ženklas. Jei taip kada nors nutiks, pasakyk patikimam suaugusiajam.',
        },
        {
          id: 'end_b2',
          title: 'Geri instinktai',
          text: 'Bloguoji paskyrą ir pasakai patikimam suaugusiajam. Jis padeda pranešti platformai ir paaiškina, kad tai klasikinė nusikaltėlių naudojama groominingo taktika.',
          lesson: 'Pasakyti ne spaudimui ir kreiptis į patikimą suaugusįjį visada teisinga. Tavimi manipuliavo. Tai atpažinti ir veikti reikia tikros drąsos.',
        },
        {
          id: 'mid_c',
          text: 'Patikimas suaugusysis peržiūri pokalbį ir yra labai susirūpinęs. Jis paaiškina, kad tai atrodo kaip groomingąs — kažkas apsimetantis draugišku, siekiant laimėti tavo pasitikėjimą. Jis nori pranešti.',
          choices: [
            '📋 Pateikti visą pokalbio istoriją, kad pranešimas būtų stipresnis',
            '😳 Praleisti kai kurias detales, nes jautiesi sugėdintas',
          ],
        },
        {
          id: 'end_c1',
          title: 'Visiškas atskleidimas',
          text: 'Turėdami visus įrodymus, suaugusysis ir platforma imasi ryžtingų veiksmų. Paskyra pašalinama ir perduodama valdžios institucijoms, kurios gali tinkamai tirti.',
          lesson: 'Papasakok patikimam suaugusiajam visą istoriją, net gėdingas dalis. Tada jis geriausiai gali tave apsaugoti ir sustabdyti nusikaltėlį.',
        },
        {
          id: 'end_c2',
          title: 'Dalinis pranešimas',
          text: 'Imamasi kai kurių apsaugos priemonių su ribotomis detalėmis. Esi saugesnis, bet visa informacija būtų labai padėjusi tyrimui.',
          lesson: 'Buvo drąsu apie tai pasakyti. Papasakojus visas smulkmenas, net gėdingas, suaugusieji gali tave apsaugoti ir neleisti tam nutikti kitiems.',
        },
      ],
    },
    {
      id: 7,
      title: 'Naudingas nepažįstamasis',
      emoji: '🕵️',
      topic: 'Vaiko tvirkinimas internete',
      nodes: [
        {
          id: 'start',
          text: 'Kažkas žaidimo pokalbyje sako esąs 14 metų ir rašo tau savaitę. Dabar klausia, kur eini į mokyklą, tavo namų adreso ir kada kasdien grįžti namo vienas. Ką darai?',
          choices: [
            '💬 Atsakyti į klausimus — jis atrodo kaip normalus vaikas',
            '🤔 Duoti neaiškius atsakymus ir toliau kalbėtis',
            '🚫 Nustoti atsakyti, jį blokuoti ir nedelsiant pasakyti patikimam suaugusiajam',
          ],
        },
        {
          id: 'end_a',
          title: 'Per daug informacijos',
          text: 'Per kitą savaitę jis žino tavo mokyklą, tvarkaraštį ir adresą. Jis siūlo susitikti asmeniškai. Supranti, kad kažkas labai negerai.',
          lesson: 'Kas nors, kas klausia tavo namų adreso, mokyklos pavadinimo ar dienotvarkės, yra rimtas pavojaus ženklas, net jei sako esąs tavo amžiaus.',
        },
        {
          id: 'mid_b',
          text: 'Duodi neaiškius atsakymus, bet jis spaudžia vis labiau ir dabar prašo tavo telefono numerio. Kažkas atrodo keistai, bet nenori būti nemandagus.',
          choices: [
            '📱 Duoti savo numerį — jis buvo toks malonus',
            '🚫 Jį blokuoti ir pasakyti patikimam suaugusiajam',
          ],
        },
        {
          id: 'end_b1',
          title: 'Per daug susijęs',
          text: 'Jis naudoja tavo numerį, kad rastų kitas tavo socialines paskyras ir sektų tavo veiklą. Patikimas suaugusysis sužino ir yra labai sunerimęs.',
          lesson: 'Niekam nesiskolini telefono numerio ar asmeninių kontaktinių duomenų internete. Kas jų reikalauja, turi blogų ketinimų.',
        },
        {
          id: 'end_b2',
          title: 'Patikimas instinktas',
          text: 'Patikimas suaugusysis patvirtina, kad paskyra atrodo kaip suaugusiojo naudojamas netikras profilis. Jis padeda pranešti ir kartu peržiūrėti privatumo nustatymus.',
          lesson: 'Paklausyk nuojautos ir pasakyk patikimam suaugusiajam. Tai visada teisinga, kai internete kažkas atrodo negerai.',
        },
        {
          id: 'mid_c',
          text: 'Patikimas suaugusysis peržiūri pokalbį ir yra labai susirūpinęs. Jis paaiškina, kad tai greičiausiai groomingo bandymas — suaugusysis apsimeta vaiku, siekdamas laimėti tavo pasitikėjimą.',
          choices: [
            '📋 Pateikti visą pokalbį tinkamam pranešimui',
            '🤐 Paprašyti tyliai sutvarkyti be valdžios institucijų',
          ],
        },
        {
          id: 'end_c1',
          title: 'Apsaugotas ir stiprus',
          text: 'Paskyra pranešama platformai ir policijai. Patikimas suaugusysis padeda sustiprinti privatumo nustatymus. Galbūt apsaugojai save ir kitus vaikus.',
          lesson: 'Groomingas yra sunkus nusikaltimas. Pranešimas su visais įrodymais padeda institucijoms apsaugoti kitus vaikus.',
        },
        {
          id: 'end_c2',
          title: 'Saugesnis, bet nebaigta',
          text: 'Paskyra blokuojama, bet oficialiai nepranešama. Esi saugesnis, bet asmuo gali tiesiog tęsti ir taikytis į kitą.',
          lesson: 'Groomingas per rimtas, kad jį spręstum vienas. Leisk suaugusiems pateikti tinkamą pranešimą. Tai apsaugo tave ir kitus vaikus.',
        },
      ],
    },
    {
      id: 8,
      title: 'Neapykanta komentaruose',
      emoji: '💬',
      topic: 'Neapykantos kalba',
      nodes: [
        {
          id: 'start',
          text: 'Žiūri tiesioginį žaidimų srautą ir pokalbis prisipildo rasistinių ir neapykantingų komentarų, nukreiptų prieš vieną iš žaidėjų. Komentarai ateina greitai. Taikomas žaidėjas atrodo akivaizdžiai nusiminęs.',
          choices: [
            '😂 Juoktis iš kai kurių komentarų — tai tik interneto humoras',
            '😶 Tyliai stebėti nesijungiant',
            '🚩 Pranešti apie neapykantos kalbą ir pasisakyti pokalbyje',
          ],
        },
        {
          id: 'end_a',
          title: 'Ne tik pokštas',
          text: 'Juokeisi. Žaidėjas palieka srautą ašarodamas. Tavo komentaro ekrano kopijos iškyla vėliau. Jautiesi sugėdintas ir kiti žiūrovai apie tave praneša.',
          lesson: 'Rasistiniai įžeidimai ir neapykantos kalba niekada nėra „tik interneto humoras“. Jei juokiesi kartu, tampi žalos dalimi.',
        },
        {
          id: 'mid_b',
          text: 'Lieki tylus. Taikomas žaidėjas atsijungia nuo srauto. Pokalbis švenčia jį išvijęs. Jautiesi nepatogiai dėl to, ką ką tik matei.',
          choices: [
            '💬 Paskelbti palaikomąją žinutę ginant žaidėją',
            '❌ Uždaryti srautą ir stengtis pamiršti',
          ],
        },
        {
          id: 'end_b1',
          title: 'Vienas balsas keičia viską',
          text: 'Kiti žiūrovai mato tavo žinutę ir pradeda taip pat stoti. Pokalbio nuotaika keičiasi. Keli žmonės praneša apie blogiausius nusikaltėlius ir kai kurios paskyros užblokuojamos.',
          lesson: 'Vienas žmogus, kuris pasisako priešiškame pokalbyje, gali pakeisti nuotaiką. Stebėtojai turi tikrą galią.',
        },
        {
          id: 'end_b2',
          title: 'Tylos kaina',
          text: 'Išeini, bet neapykanta tęsiasi. Taikomas žaidėjas galbūt niekada daugiau nestreamins. Tavo tyla atrodė saugiau, bet prisidėjo prie problemos.',
          lesson: 'Išėjimas apsaugo tave, bet prieš išeinant pranešk apie neapykantos kalbą. Tai padeda ją sustabdyti.',
        },
        {
          id: 'mid_c',
          text: 'Praneši apie blogiausius komentarus ir paskelbti palaikomąją žinutę. Keli kiti žiūrovai seka tavo pavyzdžiu ir taip pat praneša. Žaidėjas pastebi ir jaučiasi mažiau vienas.',
          choices: [
            '📣 Taip pat pasikalbėti su patikimu suaugusiuoju ar mokytoju apie tai, ką matei',
            '✅ Padarei pakankamai — leisk likusiam platformai',
          ],
        },
        {
          id: 'end_c1',
          title: 'Bangos efektas',
          text: 'Keli pranešimai greitai imami sprendžiami. Informuojant patikimą suaugusįjį apie neapykantos kalbą žaidimų erdvėse padeda kurti platesnį pokytį.',
          lesson: 'Pranešti apie neapykantos kalbą IR pasakyti patikimiems suaugusiesiems daro platformas saugesnes visiems, dabar ir vėliau.',
        },
        {
          id: 'end_c2',
          title: 'Geras pilietis',
          text: 'Pranešimai imami sprendžiami ir kai kurios paskyros pažymimos. Žaidėjas vėliau dėkoja tau, kad pasisakei pokalbyje.',
          lesson: 'Pranešimas apie neapykantos kalbą IR pasisakymas tuo metu yra galinga kombinacija. Puikiai padaryta, kad ėmeisi veiksmų!',
        },
      ],
    },
    {
      id: 9,
      title: 'Apkaltinantis įrašas',
      emoji: '📣',
      topic: 'Melagingi gandai internete',
      nodes: [
        {
          id: 'start',
          text: 'Kažkas iš mokyklos socialiniuose tinkluose paskelbia visiškai melagingus gandus apie tave. Tai sparčiai plinta — žmonės dalinasi ir rašo negražius komentarus. Nežinai, kas tai pradėjo, ir esi labai nusiminęs.',
          choices: [
            '😡 Paskelbti piktą atsakymą, kad viešai apsigintum',
            '💬 Parašyti kiekvienam, kurį pažįsti, kad pasakytum tiesą',
            '📸 Išsaugoti viską ir nedelsiant pasakyti patikimam suaugusiajam',
          ],
        },
        {
          id: 'mid_a',
          text: 'Tavo atsakymas tampa virusinis. Žmonės ginčijasi dėl jo. Pradinis autorius žino, kad jį paveikei, ir skelbia dar daugiau, mėgaudamasis reakcija.',
          choices: [
            '💢 Toliau kovoti, kad išvalytum savo vardą',
            '🗑️ Ištrinti savo atsakymą ir atsitraukti',
          ],
        },
        {
          id: 'end_a1',
          title: 'Jų žaidimo žaidimas',
          text: 'Ginčas labai eskaluoja. Mokytojai įsitraukia. Jūs abu susiduriate su mokyklos pasekmėmis — nors jie tai pradėjo.',
          lesson: 'Piktas atsakas į melagingus gandus maitina dramą ir gali sukelti bėdų ir tau. Neduok jiems reakcijos, kurios jie nori.',
        },
        {
          id: 'end_a2',
          title: 'Atsitraukimas',
          text: 'Atsakymo ištrynimas buvo protingas. Drama lėtai rimsta, bet pradinis įrašas lieka be tikrų pasekmių jį paskelbusiam asmeniui.',
          lesson: 'Ištrinti piktą įrašą yra protinga. Dar pranešk apie pirminį įrašą ir paprašyk patikimo suaugusiojo pagalbos, kad tikrai viskas išsispręstų.',
        },
        {
          id: 'end_b',
          title: 'Žalos kontrolė',
          text: 'Praleidi valandas rašydamas žmonėms. Kai kurie tiki; kiti ne. Tai išsekina ir įrašas vis dar internete, pasiekdamas naujus žmones.',
          lesson: 'Rašyti kiekvienam atskirai vargina ir dažnai nepadeda. Pranešti apie įrašą ir paprašyti patikimo suaugusiojo pagalbos yra greičiau ir stipriau.',
        },
        {
          id: 'mid_c',
          text: 'Patikimas suaugusysis padeda pranešti apie įrašą dėl priekabiavimo. Jis greitai pašalinamas. Kartu išsiaiškinate, kas greičiausiai jį paskelbė.',
          choices: [
            '🤝 Sutikti su tarpininkautu pokalbiu su asmeniu, kuris jį paskelbė',
            '🚫 Jį blokuoti ir judėti toliau, kai įrašas pašalintas',
          ],
        },
        {
          id: 'end_c1',
          title: 'Tikrasis sprendimas',
          text: 'Tarpininkaujamas pokalbis su suaugusiųjų parama atskleidžia, kas buvo už gando. Kitas asmuo atsiprašo. Mokykla sukuria naujas gaires, kad būtų išvengta būsimų incidentų.',
          lesson: 'Išsaugoti įrodymus, pranešti ir, kai saugu, surasti tikrąją priežastį duoda geriausių ir ilgalaikių rezultatų.',
        },
        {
          id: 'end_c2',
          title: 'Saugus ir išspręstas',
          text: 'Įrašas pašalinamas ir esi apsaugotas. Blokavimas laikys tave saugų ateityje. Stiprus rezultatas teisingų veiksmų dėka.',
          lesson: 'Greitai pašalinti žalingą įrašą suaugusiųjų pagalba yra puikus rezultatas. Blokavimas saugumui yra protinga riba.',
        },
      ],
    },
    {
      id: 10,
      title: 'Slaptažodžio spaudimas',
      emoji: '🔐',
      topic: 'Draugo spaudimas ir slaptažodžiai',
      nodes: [
        {
          id: 'start',
          text: 'Tavo geriausias draugas Jonas sako: „Jei tikrai esame geriausi draugai, privalai man duoti savo slaptažodį. Draugai neturi paslapčių!“ Jautiesi nepatogiai. Ką darai?',
          choices: [
            '🔑 Duoti Jonui slaptažodį — draugai pasitiki vienas kitu',
            '🤥 Duoti netikrą slaptažodį, kad ginčas baigtųsi',
            '🗣️ Ramiai pasakyti, kad draugams vienas kito slaptažodžių nereikia',
          ],
        },
        {
          id: 'end_a',
          text: 'Jonas skaito tavo žinutes ir iš tavo paskyros rašo kitiems žmonėms. Jonas pyksta dėl dalykų, kuriuos suprato neteisingai. Netrukus jis tave tikrina nuolat.',
          title: 'Prasideda kontrolė',
          lesson: 'Slaptažodis yra privatus. Tikriems draugams jo nereikia. Jei kas nors vis jo prašo, pasakyk patikimam suaugusiajam ir pasikeisk slaptažodį.',
        },
        {
          id: 'mid_b',
          text: 'Jonas sužino, kad slaptažodis netikras, ir labai supyksta: „Tu man meluoji! Duok tikrąjį, o jei ne, visiems pasakysiu, kad meluoji!“ Spaudimas didėja.',
          choices: [
            '🔑 Nusileisti ir duoti tikrąjį slaptažodį',
            '🗣️ Pasakyti ne ir papasakoti patikimam suaugusiajam apie spaudimą',
          ],
        },
        {
          id: 'end_b1',
          text: 'Kai tik Jonas gauna tavo slaptažodį, jis tikrina, su kuo bendrauji, ir sako, su kuo gali draugauti. Darosi vis blogiau.',
          title: 'Spąstuose',
          lesson: 'Nusileidimas retai sustabdo spaudimą. Kontroliuojantis elgesys paprastai stiprėja. Pasikeisk slaptažodį ir pasakyk patikimam suaugusiajam.',
        },
        {
          id: 'end_b2',
          text: 'Sunku pasakyti ne artimam draugui. Patikimas suaugusysis sako, kad apsisprendei teisingai. Jis padeda pasikalbėti su Jonu arba padaryti draugystėje pertrauką.',
          title: 'Išsilaisvinimas',
          lesson: 'Atpažinti kontroliuojantį elgesį ir pasakyti ne reikia drąsos. Tavo saugumui tai visada teisingas pasirinkimas.',
        },
        {
          id: 'mid_c',
          text: 'Jonas sako: „Vadinasi, manimi nepasitiki!“ Išlaikai ramybę, bet Jonas spaudžia toliau, ir spaudimas auga.',
          choices: [
            '💪 Laikytis savo ribos ir papasakoti patikimam suaugusiajam apie spaudimą',
            '😔 Duoti slaptažodį, kad tik būtų ramu',
          ],
        },
        {
          id: 'end_c1',
          text: 'Patikimas suaugusysis pasako, kad slaptažodžio reikalavimas yra kontrolė, o ne draugystė. Su jo pagalba paaiškini Jonui, kad savo slaptažodžius pasilieki sau. Geras draugas tai priima.',
          title: 'Sveikos ribos',
          lesson: 'Geras draugas gerbia tavo privatumą. Pasitikėjimas nereiškia dalytis slaptažodžiais. Nusipelnai draugų, kurie gerbia tavo ribas.',
        },
        {
          id: 'end_c2',
          text: 'Kelias dienas Jonas ramus. Paskui jis nori daugiau: tavo nuotraukų, tavo pokalbių. Spaudimas prasideda iš naujo.',
          title: 'Nusileidimas',
          lesson: 'Slaptažodžio atidavimas dėl ramybės padeda tik trumpam. Saugok slaptažodžius sau ir pasakyk patikimam suaugusiajam, jei kas nors toliau spaudžia.',
        },
      ],
    },
    {
      id: 11,
      title: 'Pasidalink, kad išgelbėtum žaidimą!',
      emoji: '🚨',
      topic: 'Dezinformacija',
      nodes: [
        {
          id: 'start',
          text: 'Tavo žaidimo bendruomenėje plinta įrašas. Jame žaidimo logotipas ir parašyta: „Bendrovė užsidaro! Žaidimas baigiasi rytoj. PASIDALINK ŠIUO ĮRAŠU ir išgelbėk jį!“ Draugai jau dalijasi. Ką darai?',
          choices: [
            '📤 Iš karto pasidalinti — geriau saugiai nei gailėtis',
            '🙈 Nekreipti dėmesio ir slinkti toliau',
            '🔎 Patikrinti oficialią žaidimo bendrovės svetainę ar patvirtintą paskyrą',
          ],
        },
        {
          id: 'end_a',
          text: 'Tavo pasidalijimas padeda įrašui pasiekti šimtus žaidėjų. Paskui tikroji bendrovė parašo: „Su žaidimu viskas gerai. Ši žinutė netikra!“ Daug žaidėjų be reikalo išsigando, o po pasidalijimu yra tavo vardas.',
          title: 'Netikro plitimas',
          lesson: 'Įrašas, kuris šaukia „PASIDALINK“ ir kelia paniką, yra įspėjamasis ženklas. Dalydamasis melagingu įrašu jį plati toliau, net jei jo nesukūrei.',
        },
        {
          id: 'mid_b',
          text: 'Nekreipi dėmesio, bet įrašas vis auga. Jaunesnė žaidėja iš tavo komandos liūdna, nes mano, kad neteks žaidimo draugų. Ką darai?',
          choices: [
            '😶 Nieko nesakyti — juk tu nesidalijai',
            '🤝 Pasakyti draugams, kad atrodo netikra, ir pranešti apie įrašą',
          ],
        },
        {
          id: 'end_b1',
          text: 'Tu jo neplatinai, bet netikras įrašas dar kelias dienas gąsdina žaidėjus. Draugai vis dar nežino, kad jis melagingas.',
          title: 'Tyliai, bet nepakanka',
          lesson: 'Nesidalyti yra gerai. Pasakyti draugams ir pranešti apie įrašą padeda dar labiau.',
        },
        {
          id: 'end_b2',
          text: 'Parodai draugams, kad oficialiame bendrovės puslapyje apie uždarymą nieko nėra. Praneši apie įrašą. Daug žaidėjų nustoja juo dalytis, ir jis pašalinamas.',
          title: 'Faktų tikrintojas',
          lesson: 'Patikrinti oficialų šaltinį ir pranešti apie melagingą įrašą saugo ir kitus.',
        },
        {
          id: 'mid_c',
          text: 'Oficialioje svetainėje apie uždarymą nieko nėra. Patvirtinta paskyra net rašo: „Netikėkite netikrais įrašais!“ Draugai vis tiek dalijasi netikru.',
          choices: [
            '📣 Nusiųsti draugams oficialią nuorodą ir pranešti apie netikrą įrašą',
            '🤐 Pasilikti tai sau — juk dabar žinai tiesą',
          ],
        },
        {
          id: 'end_c1',
          text: 'Draugai perskaito oficialią nuorodą ir ištrina savo pasidalijimus. Apie netikrą įrašą pranešta, ir jis dingsta.',
          title: 'Tiesos skleidėjas',
          lesson: 'Pirmiausia patikrink oficialius šaltinius. Paskui padėk kitiems dalydamasis tikra informacija. Jei abejoji, paklausk patikimo suaugusiojo.',
        },
        {
          id: 'end_c2',
          text: 'Nuo netikros žinios esi saugus, bet draugai ja dalijasi toliau ir vis daugiau žaidėjų išsigąsta.',
          title: 'Gudrus, bet tylus',
          lesson: 'Patikrinti yra puikus pirmas žingsnis. Pasakyti kitiems ir pranešti padeda dar daugiau.',
        },
      ],
    },
    {
      id: 12,
      title: 'Virusinis iššūkis',
      emoji: '🤳',
      topic: 'Klaidinga informacija',
      nodes: [
        {
          id: 'start',
          text: 'Vaizdo įraše su milijonu peržiūrų paaugliai per 60 sekundžių be vandens nuryja šaukštą sauso miltelių. Visi įraše juokiasi. Draugas sako: „Šiandien išbandykime pas mane namuose!“ Ką darai?',
          choices: [
            '🥄 Išbandyti — visi juokiasi, vadinasi, saugu',
            '👍 Pasakyti „gal vėliau“ ir tik pamėgti vaizdo įrašą',
            '✋ Pasakyti ne ir paklausti patikimo suaugusiojo, ar tai saugu',
          ],
        },
        {
          id: 'end_a',
          text: 'Sausi milteliai patenka į gerklę ir plaučius. Kosti ir sunku kvėpuoti. Suaugusysis nuveža tave pas gydytoją. Dabar niekas nesijuokia.',
          title: 'Visai nejuokinga',
          lesson: 'Vaizdo įrašuose rodomos juokingos dalys, o ne rizika. Daugelis dalijasi tendencijomis netikrinę, ar jos saugios. Tai vadinama klaidinga informacija.',
        },
        {
          id: 'mid_b',
          text: 'Pamėgsti vaizdo įrašą. Draugas atlieka iššūkį, o dėl patiktukų jį bando daugiau vaikų. Klasiokas rašo, kad susižeidė, bet komentaruose tik „lol“.',
          choices: [
            '👍 Toliau mėgti — tai tik tendencija',
            '🗣️ Pasakyti patikimam suaugusiajam ir įspėti draugą',
          ],
        },
        {
          id: 'end_b1',
          text: 'Tavo patiktukai padeda įrašui pasiekti daugiau vaikų. Daugiau jų bando, ir kai kurie suserga.',
          title: 'Tendencijos dalis',
          lesson: 'Patiktukai ir pasidalijimai didina vaizdo įrašą. Jei tendencija gali kam nors pakenkti, nemėgink jos ir nesidalyk.',
        },
        {
          id: 'end_b2',
          text: 'Suaugusysis patikrina faktus: iššūkis gali sukelti springimą ir kvėpavimo sunkumų. Draugas liaujasi, o suaugusysis padeda pranešti apie įrašą.',
          title: 'Tendencijos stabdytojas',
          lesson: 'Pasakyti patikimam suaugusiajam yra išmintinga. Juokingas vaizdo įrašas nėra įrodymas, kad kas nors saugu.',
        },
        {
          id: 'mid_c',
          text: 'Suaugusysis kartu su tavimi ieško informacijos. Gydytojai sako, kad iššūkis gali sukelti springimą ir rimtų kvėpavimo sunkumų. Draugas nustemba. Vaizdo įrašas su daug patiktukų vis tiek gali klysti.',
          choices: [
            '📲 Parodyti draugui faktus ir pranešti apie įrašą',
            '🙅 Pats pasakyti ne — kiti gali spręsti patys',
          ],
        },
        {
          id: 'end_c1',
          text: 'Draugas nusprendžia neišbandyti. Kartu pranešate apie įrašą ir pasidalijate faktais klasės pokalbyje. Mažiau vaikų išbando iššūkį.',
          title: 'Tiesos detektyvas',
          lesson: 'Patikrink faktus, paklausk suaugusiojo ir padėk kitiems. Taip sustabdai klaidingą informaciją, net jei ja dalijosi nenorėdami pakenkti.',
        },
        {
          id: 'end_c2',
          text: 'Tu saugus, bet draugas ir kiti vaikai vis tiek bando. Kai kuriems prasideda nemalonus kosulys.',
          title: 'Saugus, bet tylus',
          lesson: 'Pasakyti ne sau yra gerai. Pasidalijus faktais ir kiti išlieka saugūs.',
        },
      ],
    },
    {
      id: 13,
      title: 'Influencerio iššūkis',
      emoji: '⭐',
      topic: 'Žalingi influenceriai',
      nodes: [
        {
          id: 'start',
          text: 'Tavo mėgstamiausias influenceris turi 2 milijonus sekėjų. Šiandienos įraše parašyta: „Tikri gerbėjai nusifotografuoja ant mokyklos stogo! Pažymėk 3 draugus! Geriausia nuotrauka gaus pagarbą!“ Draugai tai aptarinėja grupės pokalbyje. Ką darai?',
          choices: [
            '📸 Prisijungti — tikri gerbėjai priima iššūkį',
            '🤔 Palaukti, ką darys kiti',
            '🛑 Sustoti ir pagalvoti: ar tai saugu? Tada paklausti patikimo suaugusiojo',
          ],
        },
        {
          id: 'end_a',
          text: 'Su draugais užlipi aukštyn. Mokytojas jus pamato, ir mokykla skambina tėvams. Kažkas galėjo nukristi. Influenceris tavo nuotraukos net nepamato.',
          title: 'Pavojingas gerbėjas',
          lesson: 'Influenceriai uždirba iš dėmesio. Jie neatsako, jei tu susižeisi. Pavojingas iššūkis niekada nėra to vertas.',
        },
        {
          id: 'mid_b',
          text: 'Keli klasiokai paskelbia nuotraukas nuo stogo. Influenceris dalijasi geriausiomis. Draugai sako, kad esi bailys, jei neprisijungsi.',
          choices: [
            '😬 Prisijungti, kad nesijuoktų',
            '🧠 Pasakyti ne — tikras draugas nestumia į pavojų',
          ],
        },
        {
          id: 'end_b1',
          text: 'Užlipi aukštyn ir visą laiką bijai. Paskui turi nemalonumų, ir dėl tos nuotraukos net nesidžiaugi.',
          title: 'Spaudimas nugali',
          lesson: 'Sekėjų ir draugų spaudimas nėra geras pagrindas. Pasakyti ne yra gerai, o tikras draugas tai gerbia.',
        },
        {
          id: 'end_b2',
          text: 'Pasakai ne. Du draugai pasijuokia, bet vienas sako: „Tiesą sakant, ir man tai atrodė keista.“ Kartu pasakote mokytojui, ir mokykla įspėja visus.',
          title: 'Stiprus pasirinkimas',
          lesson: 'Pasakyti ne reikia drąsos. Kiti dažnai jaučia tą patį, o prabilęs gali juos apsaugoti.',
        },
        {
          id: 'mid_c',
          text: 'Sustoji ir pagalvoji: lipti ant stogo pavojinga. Patikimas suaugusysis sako: „Influenceriai nori peržiūrų, o kai kurie negalvoja apie saugumą. Pažiūrėkime, ar šis įrašas nepažeidžia programėlės taisyklių.“',
          choices: [
            '🚩 Pranešti platformai apie iššūkio įrašą',
            '😌 Tiesiog nedalyvauti ir pamiršti',
          ],
        },
        {
          id: 'end_c1',
          text: 'Platforma pašalina iššūkį. Be to, nustoji sekti influencerį ir pasakai draugams kodėl. Mažiau vaikų susižeidžia.',
          title: 'Išmintingas sekėjas',
          lesson: 'Gali nustoti sekti tą, kurio įrašai pavojingi. Pranešk apie rizikingus įrašus. Atmink: Sustok – Pagalvok – Patikrink – Paklausk.',
        },
        {
          id: 'end_c2',
          text: 'Esi saugus, bet iššūkis lieka internete ir kiti vaikai gali jį išbandyti.',
          title: 'Kol kas saugu',
          lesson: 'Nedalyvauti yra gerai. Pranešimas apie pavojingą įrašą padeda apsaugoti ir kitus vaikus.',
        },
      ],
    },
    {
      id: 14,
      title: 'Begalinis srautas',
      emoji: '📱',
      topic: 'Algoritmai ir netikros naujienos',
      nodes: [
        {
          id: 'start',
          text: 'Vakar vakare pažiūrėjai kelis „šokiruojančių naujienų“ vaizdo įrašus. Dabar tavo srautas pilnas panašių: pikti žmonės, baugūs teiginiai, atgaliniai skaičiavimai iki nelaimės. Nerimauji ir negali liautis slinkti. Ką darai?',
          choices: [
            '📲 Slinkti toliau — tai turi būti svarbios naujienos',
            '😰 Pasidalinti baisiausiu vaizdo įrašu, kad įspėtum draugus',
            '🧭 Paklausti savęs: kodėl matau tiek daug tokių? Tada pasakyti patikimam suaugusiajam',
          ],
        },
        {
          id: 'end_a',
          text: 'Slenki dvi valandas, o vaizdo įrašai darosi vis baisesni. Negali užmigti ir kitą dieną jauti nerimą.',
          title: 'Užstrigai kilpoje',
          lesson: 'Programėlės rodo vis daugiau to, ką žiūri. Šokiruojantys vaizdo įrašai laiko tave prie ekrano, net jei jie netikri ar tau nepadeda.',
        },
        {
          id: 'mid_b',
          text: 'Pasidalini. Draugai atsako: „Ar tai tiesa?“ Viena draugė taip nerimauja, kad negali užmigti. Paskui kažkas išsiaiškina, kad vaizdo įrašas senas ir iš kitos šalies.',
          choices: [
            '😳 Ištrinti savo pasidalijimą ir pasakyti draugams tiesą',
            '🤷 Palikti — juk tu tik pasidalinai, nesukūrei',
          ],
        },
        {
          id: 'end_b1',
          text: 'Ištrini pasidalijimą ir pasakai draugams, kad vaizdo įrašas senas. Dauguma tau tiki. Reikia drąsos pataisyti klaidą.',
          title: 'Sąžiningas pataisymas',
          lesson: 'Kartais visi pasidalija kuo nors netiesos. Greitas pataisymas ir sąžiningumas labai padeda. Patikrink, prieš dalydamasis.',
        },
        {
          id: 'end_b2',
          text: 'Vaizdo įrašas plinta toliau su tavo vardu. Dar daugiau žmonių bijo to, kas net nėra tiesa.',
          title: 'Gandų mašina',
          lesson: 'Paliktas melagingas įrašas plinta toliau. Jei sužinai, kad jis klaidingas, ištrink ir pasakyk apie tai.',
        },
        {
          id: 'mid_c',
          text: 'Patikimas suaugusysis paaiškina: programėlės išmoksta, ką žiūri, ir rodo daugiau. Šokiruojantys vaizdo įrašai gauna daug peržiūrų, todėl programėlės juos stumia. Kartu pamatote, kad savo srautą gali pakeisti.',
          choices: [
            '⚙️ Paspausti „Nedomina“, sekti smagias ir naudingas paskyras ir padaryti pertrauką',
            '🔁 Palikti srautą kaip yra — baisias dalis tiesiog praleisi',
          ],
        },
        {
          id: 'end_c1',
          text: 'Po kelių dienų srautas rodo daug daugiau gerų dalykų. Jautiesi ramiau ir prieš dalydamasis patikrini faktus.',
          title: 'Srauto šeimininkas',
          lesson: 'Gali valdyti savo srautą: sakyti „nedomina“, rinktis, ką sekti, ir daryti pertraukas. Patikrink faktus, prieš dalydamasis.',
        },
        {
          id: 'end_c2',
          text: 'Baisūs vaizdo įrašai vis ateina, ir tu vis dar šiek tiek nerimauji.',
          title: 'Vis dar kilpoje',
          lesson: 'Ignoruoti sunku, kai srautas nuolat stumia. Pakeitus, ką seki ir ką žiūri, pasikeičia ir tai, ką matai.',
        },
      ],
    },
  ],
}
