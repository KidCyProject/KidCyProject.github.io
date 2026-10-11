// ---------------------------------------------------------------------------
// Attacker Perspective (AP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Attacker Perspective module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentAP = {
  aim: 'Suteikti apžvalgą apie užpuoliko perspektyvą, padedant besimokantiesiems atpažinti užpuolikų technikas ir suprasti kibernetinių atakų motyvus.',
  objectives: [
    'Ugdyti supratimą apie užpuolikų motyvus, įskaitant psichologinius, socialinius ir ekonominius veiksnius.',
    'Stiprinti įgūdžius atpažinti įprastas užpuolikų technikas.',
  ],
  outcomes: [
    'Suprantu užpuolikų motyvus ir galiu pateikti pavyzdžių, susijusių su psichologiniais, socialiniais ir ekonominiais veiksniais.',
    'Galiu atpažinti užpuolikų technikas pateiktuose scenarijuose.',
  ],
  parts: [
    {
      goal:
        'Padėti vaikams įgyti žinių apie patikimo asmens konceptą ir ugdyti įgūdžius identifikuoti patikimų asmenų ratą.',
      bundle: {
        filename: 'Užpuoliko perspektyva - paketas - 1 dalis',
      },
      included: {
        materials: [
          {
            // ID: 2.1.1
            kind: 'Darbalapas',
            name: 'Patikimi asmenys: žmonės aplink mane',
            filename: 'Darbalapas - Patikimi asmenys žmonės aplink mane',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 2.1.2
            kind: 'Darbalapas',
            name: 'Pasitikėjimo ratai',
            filename: 'Darbalapas - Pasitikėjimo ratai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 2.1.3
            kind: 'Paveikslėlis',
            name: 'Situacija: Rasti pinigai',
            filename: 'Paveikslėlis - Situacija Rasti pinigai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 2.1.4
            kind: 'Paveikslėlis',
            name: 'Situacija: Pamatyta nuotrauka',
            filename: 'Paveikslėlis - Situacija Pamatyta nuotrauka',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Apibrėžti patikimų asmenų ratą',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
    },
    {
      goal: 'Pristatyti užpuoliko konceptą ir motyvaciją iš užpuoliko perspektyvos.',
      bundle: {
        filename: 'Užpuoliko perspektyva - paketas - 2 dalis',
      },
      included: {
        materials: [
          {
            // ID: 2.2.1
            kind: 'Scenarijų kortelės',
            name: 'Identifikuoti elgesį',
            filename: 'Scenarijų kortelės - Identifikuoti elgesį',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 2.2.2
            kind: 'Scenarijų kortelės',
            name: 'Atpažinti personažus',
            filename: 'Scenarijų kortelės - Atpažinti personažus',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 2.2.4
            kind: 'Paveikslėlis',
            name: 'Užpuolikų motyvacijos',
            filename: 'Paveikslėlis - Užpuolikų motyvacijos',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 2.2.5
            kind: 'Paveikslėlis',
            name: 'Žvilgsnis į pasaką: Užpuoliko motyvacija ir priemonės',
            filename: 'Paveikslėlis - Žvilgsnis į pasaką Užpuoliko motyvacija ir priemonės',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 2.2.6
            kind: 'Darbalapas',
            name: 'Atakos analizė',
            filename: 'Darbalapas - Atakos analizė',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Apibrėžti kibernetinio saugumo užpuoliką',
          },
          {
            title: 'Suprasti užpuoliko motyvaciją',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 2.2.3
        title: 'Kas slypi už kibernetinių atakų?',
        supportText:
          'Naudokite šį vaizdo įrašą, kad mokiniai galėtų įsivaizduoti tikrus žmones ir motyvus už kibernetinių atakų, peržengdami vieno hakerio stereotipą. Sustokite ir paklauskite, kas, jų manymu, yra atsakingas ir kodėl.',
        downloads: {
          video: {
            filename: 'Kas slypi už kibernetinių atakų',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Kas slypi už kibernetinių atakų - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal: 'Pristatyti pagrindines technikas (taktikas), aktualias vaikams, kurias užpuolikai naudoja savo tikslams pasiekti.',
      bundle: {
        filename: 'Užpuoliko perspektyva - paketas - 3 dalis',
      },
      included: {
        materials: [
          {
            // ID: 2.3.1
            kind: 'Skaitymas',
            name: 'Smišingas ir apsimetinėjimas',
            filename: 'Skaitymas - Smišingas ir apsimetinėjimas',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 2.3.2
            kind: 'Skaitymas',
            name: 'Višingas, sukčiavimas ir apsimetinėjimas',
            filename: 'Skaitymas - Višingas, sukčiavimas ir apsimetinėjimas',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 2.3.3
            kind: 'Skaitymas',
            name: 'Dažniausios kibernetinės grėsmės',
            filename: 'Skaitymas - Dažniausios kibernetinės grėsmės',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 2.3.4
            kind: 'Scenarijų kortelės',
            name: 'Įprastos priešininkų technikos',
            filename: 'Scenarijų kortelės - Įprastos priešininkų technikos',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 2.3.5
            kind: 'Kortelės',
            name: 'Užpuolikai ir jų planai',
            filename: 'Kortelės - Užpuolikai ir jų planai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 2.3.6
            kind: 'Darbalapas',
            name: 'Galvosūkis: Užpuolikų vakarėlis',
            filename: 'Darbalapas - Galvosūkis Užpuolikų vakarėlis',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Suprasti elgesio modelius',
          },
          {
            title: 'Suprasti atakos kelius',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
    },
  ],
  otherModulesDivider: 'Tyrinėkite kitas temas',
  otherModulesTitle: 'Kiti moduliai',
  otherModulesSubtitle: 'Naršykite susijusius modulius ir tęskite mokymąsi.',
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
  title: 'Hakerio mintyse',
  subtitle:
    'Esate etinis hakeris. Raskite silpnas vietas socialinio tinklo profilyje, suplanuokite ataką taip, kaip tai padarytų užpuolikas, ir sužinokite, kaip ją sustabdyti!',
  howItWorks: 'Kaip tai veikia',
  instruction:
    'Išnagrinėkite šį socialinių tinklų profilį tarsi hakeris, ieškantis silpnų vietų. Beveik viskas ekrane yra paspaudžiama – galvokite atidžiai, nes paspaudus tai, kas nėra tikra pažeidžiamoji vieta, prarandate gyvybę! Paskui suplanuosite ataką taip, kaip tai padarytų užpuolikas, ir sužinosite, kaip ją sustabdyti.',
  tipLabel: 'Patarimas',
  tip: 'Yra tiksliai 4 tikros pažeidžiamosios vietos, paslėptos tarp daugelio nekaltai atrodančių elementų. Ne viskas, ką galima spustelėti, yra saugumo spraga!',
  livesTitle: 'Gyvybės',
  livesDesc: '3 neteisingi paspaudimai – ir žaidimas baigtas',
  vulnerabilitiesFoundTitle: '🔍 Rastos pažeidžiamosios vietos',
  vulnerabilitiesEmpty: 'Dar nerasta…',
  vulnerabilitiesCount: '/ 4',
  attackerTargetsTitle: '🎯 Ką taikosi užpuolikai',
  attackerTargets: [
    '🚩 HTTP vietoj HTTPS',
    '🚩 Vietos dalijimasis realiuoju laiku',
    '🚩 Visa gimimo data viešai matoma',
    '🚩 Atsakymai į saugumo klausimus atskleisti',
  ],
  profile: {
    displayName: 'Alex Johnson',
    handle: '@alex123',
    statusActiveNow: 'Aktyvus dabar',
    bioText: '16 · Gamer 🎮 · Manga Fan',
    aboutTitle: 'Apie mane',
    statsFriendsLabel: 'Draugai',
    statsFollowingLabel: 'Seku',
    bornText: 'Gimęs/gimusi 2008 m. birželio 14 d.',
    emailText: 'alex.gamer@freemail.com',
    petNameText: 'Augintinio vardas: Whiskers',
    post1Time: '📍 Miesto centro prekybos centras · Ką tik',
    post1Body: 'Ką tik išgėriau kavą ☕ Ar kas nors šalia? Ateikite manęs rasti prie maisto kiosko! 😄',
    post1Badge: '🛍️ Centro mall — prisijungta',
    post2Time: 'Prieš 2 valandas',
    post2Body: 'Ką tik grįžau iš mokyklos! Valgome picą su šeima 🍕 Geriausias vakaras!',
    actionLike: 'Patinka',
    actionComment: 'Komentuoti',
    actionShare: 'Dalintis',
  },
  vulnFoundSuffix: '/ 4 pažeidžiamosios vietos rastos',
  tryAgain: 'Bandyti dar kartą',
  winTitle: 'Puikus darbas!',
  winMsg: 'Radote visas 4 pažeidžiamąsias vietas kaip tikras saugumo tyrėjas. Dabar žinote, kaip mąsto užpuolikai!',
  loseTitle: 'Žaidimas baigtas!',
  loseMsgTemplate:
    'Baigėsi gyvybės! Radote {found} iš {total} pažeidžiamųjų vietų. Praleistos dabar paryškintos raudonai.',
  attackerVoiceInitial: 'Įdomus profilis… leiskite man nuskaityti silpnas vietas.',
  attackerVoiceWin: '🏆 Įspūdinga! Radote visas {total} silpnas vietas. Mąstote kaip hakeris!',
  attackerVoiceLose: '💀 Per daug klaidų. Kitą kartą atidžiau išstudijuokite profilį.',
  attackerVoiceAlreadyTagged: 'Jau pažymėta: {label}.',
  attackerVoiceCorrect: '🔓 Rasta pažeidžiamoji vieta: {label}! {explain}',
  attackerVoiceWrong: 'Tai ne pažeidžiamoji vieta — {explain}',
  part1Label: 'Dalis 1 iš 3: išnagrinėkite profilį',
  part2Label: 'Dalis 2 iš 3: suplanuokite ataką',
  part3Label: 'Dalis 3 iš 3: kodėl ir kaip tai sustabdyti',
  continueButton: 'Tęsti: suplanuoti ataką →',
  planTitle: 'Užpuoliko planas',
  planIntro: 'Mažas pėdsakas pats savaime nėra pavojingas. Užpuolikai sudeda pėdsakus į planą. Prie kiekvieno pėdsako pasirinkite tikslą, kuriam jis padeda.',
  planTrayTitle: 'Profilio pėdsakai',
  planChooseLabel: 'Kuriam tikslui šis pėdsakas padeda?',
  planVoiceCorrect: '🧩 Gerai suderinta! {explain}',
  planVoiceWrong: '🤔 Ne šis tikslas. {explain}',
  planSummaryTitle: 'Maži pėdsakai sudedami',
  planSummaryText: 'Gimimo data, augintinio vardas ir nesaugus puslapis gali atverti paskyrą. Vieta realiu laiku ir įrašas apie mokyklą gali išduoti, kur žmogus yra. Užpuolikai tokius pėdsakus renka po vieną.',
  planScoreTemplate: '{n} iš {total} pėdsakų iš pirmo karto',
  toQuizButton: 'Tęsti: kodėl ir kaip tai sustabdyti →',
  goals: {
    account: { icon: '🔑', title: 'Įsilaužti į paskyrą', hint: 'Perimti profilį ar žaidimo paskyrą' },
    person: { icon: '🧭', title: 'Surasti žmogų tikrame gyvenime', hint: 'Žinoti, kur žmogus yra ir kada' },
    none: { icon: '🚫', title: 'Nenaudinga', hint: 'Užpuolikui labai nepadeda' },
  },
  clues: [
    {
      id: 'birthday',
      icon: '🎂',
      text: 'Visa gimimo data profilyje',
      explanation: 'Žmonės dažnai naudoja gimimo datą slaptažodžiuose ir saugumo atsakymuose. Užpuolikas ją išbando pirmiausia.',
    },
    {
      id: 'pet',
      icon: '🐱',
      text: 'Augintinio vardas profilyje',
      explanation: 'Augintinių vardai yra populiarūs slaptažodžiai ir saugumo atsakymai. Užpuolikas gali išbandyti vardą, kad patektų į paskyrą.',
    },
    {
      id: 'http',
      icon: '🔓',
      text: 'Puslapis naudoja http://, o ne https://',
      explanation: 'Puslapyje su http:// kiti tame pačiame tinkle gali perskaityti, ką rašote. Net slaptažodį.',
    },
    {
      id: 'location',
      icon: '📍',
      text: 'Vieta realiu laiku įraše',
      explanation: 'Vieta realiu laiku tiksliai parodo, kur žmogus yra dabar. Nepažįstamasis galėtų tuo piktnaudžiauti, kad jį surastų.',
    },
    {
      id: 'routine',
      icon: '🏫',
      text: 'Įrašas: „Ką tik grįžau iš mokyklos!“',
      explanation: 'Tai nepažįstamajam išduoda, kada žmogus dažniausiai kur būna. Smulkios detalės, kaip ši, gali susidėti į planą.',
    },
    {
      id: 'avatar',
      icon: '👤',
      text: 'Profilio nuotrauka',
      explanation: 'Profilio nuotrauka yra normali. Užpuolikui ji nepadeda nei įsilaužti į paskyrą, nei surasti žmogų.',
    },
    {
      id: 'bio',
      icon: '🎮',
      text: 'Aprašymas: žaidėjas ir mangos gerbėjas',
      explanation: 'Pomėgiai nėra paslaptis. Patys savaime užpuolikui labai nepadeda.',
    },
    {
      id: 'friends',
      icon: '👥',
      text: 'Draugų ir sekėjų skaičius',
      explanation: 'Skaičius yra tik skaičius. Užpuolikas iš jo nieko negali pasiimti.',
    },
  ],
  quizTitle: 'Kodėl ir kaip tai sustabdyti',
  quizProgressTemplate: 'Klausimas {n} iš {total}',
  motiveLabel: 'Kodėl užpuolikas taip daro?',
  defendLabel: 'Kas padeda labiausiai?',
  quizVoiceCorrect: '✅ {explain}',
  quizVoiceWrong: '❌ Ne visai. {explain}',
  nextButton: 'Toliau →',
  resultsButton: 'Peržiūrėti rezultatą →',
  motivationsTitle: 'Kodėl užpuolikai atakuoja',
  motivationsSubtitle: 'Aštuoni motyvai',
  motivations: {
    financial: { name: 'Finansinė nauda', desc: 'Parduoti pavogtus duomenis arba reikalauti išpirkos' },
    reputation: { name: 'Reputacija', desc: 'Norėti pasirodyti ir gauti pripažinimą' },
    revenge: { name: 'Kerštas', desc: 'Norėti kam nors atkeršyti' },
    espionage: { name: 'Šnipinėjimas', desc: 'Gauti slaptos informacijos valstybei ar bendrovei' },
    error: { name: 'Tiesiog klaida', desc: 'Nelaimingas atsitikimas, sukėlęs problemą' },
    experiment: { name: 'Eksperimentavimas', desc: 'Išbandyti dalykus dėl smagumo' },
    fear: { name: 'Baimė', desc: 'Daryti ką nors bloga dėl spaudimo ar grasinimų' },
    beliefs: { name: 'Įsitikinimai', desc: 'Kovoti už tikslą, kuriuo žmogus tiki' },
  },
  motiveCases: [
    {
      id: 1,
      text: 'Vyresnis mokinys įsilaužia į jaunesnio vaiko paskyrą ir paskelbia kvailysčių, kad visi pamatytų, koks jis gudrus.',
      explanation: 'Jis nori, kad juo žavėtųsi. Noras būti pripažintam ir pasirodyti vadinamas motyvu „reputacija“.',
    },
    {
      id: 2,
      text: 'Nepažįstamasis įsilaužia į šimtus paskyrų ir parduoda prisijungimo duomenis svetainėje.',
      explanation: 'Nepažįstamasis nori pinigų. Pavogtų duomenų pardavimas yra „finansinė nauda“.',
    },
    {
      id: 3,
      text: 'Mokinys įsilaužia į savo klasės draugo paskyrą, nes praėjusį mėnesį tas draugas su juo pasielgė nedraugiškai.',
      explanation: 'Mokinys nori kam nors atkeršyti. Šis motyvas vadinamas „kerštu“.',
    },
    {
      id: 4,
      text: 'Vaikas parsisiunčia įsilaužimo įrankį ir bando jį mokyklos kompiuteryje, tik norėdamas pamatyti, kas nutiks.',
      explanation: 'Jis nenori nieko įskaudinti. Tik išbando, kas bus. Tai vadinama „eksperimentavimu“, bet vis tiek gali padaryti tikros žalos.',
    },
    {
      id: 5,
      text: 'Vyresnis vaikas sako jaunesniam: „Gauk man savo draugo slaptažodį, kitaip visiems papasakosiu tavo paslaptį.“ Kodėl jaunesnis vaikas tai daro?',
      explanation: 'Jaunesnis vaikas bijo, ką padarys vyresnis. Daryti ką nors bloga dėl spaudimo ar grasinimų yra „baimė“.',
    },
  ],
  defendCases: [
    {
      id: 1,
      text: 'Užpuolikas nori atspėti slaptažodį. Koks įprotis jam sunkiausiai trukdo?',
      options: [
        'Ilgas slaptažodis iš atsitiktinių žodžių, nieko bendra su Jumis neturintis',
        'Augintinio vardas ir gimimo metai',
        'Tas pats trumpas slaptažodis visur',
      ],
      explanation: 'Ilgą slaptažodį iš atsitiktinių žodžių sunku atspėti. Gimimo datas ir augintinių vardus užpuolikas bando pirmiausia, o vienas slaptažodis visur kelia pavojų visoms paskyroms.',
    },
    {
      id: 2,
      text: 'Puslapis prasideda http://, neturi spynelės, bet prašo įvesti slaptažodį. Ką darote?',
      options: [
        'Neįvedate. Ieškote puslapio, prasidedančio https:// ir turinčio spynelę',
        'Greitai įvedate, kol niekas nepastebėjo',
        'Įvedate trumpesnį slaptažodį, kad būtų mažiau ką skaityti',
      ],
      explanation: 'Puslapyje su http:// kiti tinkle gali perskaityti, ką rašote. Slaptažodžius įvedinėkite tik https:// puslapiuose.',
    },
    {
      id: 3,
      text: 'Draugas nori, kad paskelbtumėte, kur dabar esate, kad visi ateitų. Kas saugiausia?',
      options: [
        'Išjungti vietą realiu laiku ir nuotrauką pasidalyti vėliau, kai jau išeisite',
        'Paskelbti ją tik 5 minutėms',
        'Paskelbti taip, kad matytų visi, net nepažįstamieji',
      ],
      explanation: 'Vieta realiu laiku nepažįstamiesiems išduoda, kur dabar esate. Nuotraukomis dalinkitės vėliau ir tik su žmonėmis, kuriuos pažįstate.',
    },
  ],
  finalTitle: 'Užpuoliko mąstymas atrakintas!',
  finalPart1Template: '1 dalis: rasta {n} iš {total} silpnų vietų',
  finalPart2Template: '2 dalis: {n} iš {total} pėdsakų iš pirmo karto',
  finalPart3Template: '3 dalis: {n} iš {total} klausimų iš pirmo karto',
  finalScoreTemplate: 'Iš viso {n} iš {total} taškų',
  rankGreat: 'Mąstote kaip užpuolikas ir elgiatės kaip gynėjas. Puikus darbas!',
  rankGood: 'Gerai padirbėta! Pakartokite dalis, kurios atrodė sunkios.',
  rankPractise: 'Treniruokitės toliau. Atkreipkite dėmesį į mažus pėdsakus ir klauskite: kaip kas nors galėtų juos sujungti?',
  hotspots: [
    {
      id: 'http',
      label: 'Nešifruotas ryšys (HTTP)',
      explain: 'Ši svetainė naudoja HTTP, o ne HTTPS. Tai, ką čia įvedate, net slaptažodžiai, nėra užšifruota. Bet kas tame pačiame tinkle gali tai perskaityti.'
    },
    { id: 'avatar',
      label: 'Profilio nuotrauka',
      explain: 'Profilio nuotraukos yra standartinė socialinių tinklų dalis. Savaime jos nėra saugumo rizika!'
    },
    {
      id: 'username',
      label: 'Rodomas vardas / naudotojo vardas',
      explain: 'Vardo ir @slapyvardžio rodymas socialiniuose tinkluose yra įprastas. Tai nėra pažeidžiamoji vieta.'
    },
    {
      id: 'online',
      label: 'Aktyvumo būsena',
      explain: 'Rodyti, kada esate prisijungę, yra įprasta funkcija. Tai nedidelis privatumo klausimas, bet ne tikra pažeidžiamoji vieta.'
    },
    {
      id: 'bio',
      label: 'Bio / Pomėgiai',
      explain: 'Bendrų pomėgių, tokių kaip žaidimai ar anime, sąrašas yra normalus dalykas. Tai neatskleidžia jautrių paskyros duomenų.'
    },
    {
      id: 'followers',
      label: 'Sekėjų / draugų skaičius',
      explain: 'Draugų ir sekėjų skaičius yra įprasta funkcija. Tai ne pažeidžiamoji vieta!'
    },
    {
      id: 'birthday',
      label: 'Visa gimimo data atskleista',
      explain: 'Parodyti visą gimimo datą pavojinga! Užpuolikai ją naudoja slaptažodžiams atspėti (pvz., \'alex2008\'), saugumo klausimams atsakyti ir patekti į paskyras.'
    },
    {
      id: 'email',
      label: 'El. paštas profilyje',
      explain: 'Viešas el. paštas gali pritraukti šlamšto, bet tai mažesnė problema nei atskleistas slaptažodis ar saugumo atsakymas.'
    },
    {
      id: 'petname',
      label: 'Augintinio vardas atskleistas',
      explain: 'Augintinio vardas dažnai būna saugumo klausimo atsakymas. Užpuolikai gali jį panaudoti patekti į paskyrą arba jus apgauti.'
    },
    {
      id: 'location',
      label: 'Vietos transliavimas realiuoju laiku',
      explain: 'Šis įrašas rodo, kur Aleksas yra būtent dabar! Tai mato visi, net nepažįstamieji ir užpuolikai. Dalytis vieta realiuoju laiku yra rimta saugumo rizika.'
    },
    {
      id: 'post2',
      label: 'Bendras įrašas',
      explain: 'Rašyti apie kasdienius dalykus, pavyzdžiui, picą, yra gerai. Tai neatskleidžia nieko jautraus!'
    },
    {
      id: 'like1',
      label: 'Mygtukas „Patinka"',
      explain: 'Pažymėti įrašus „Patinka“ yra normalu ir nekenksminga!'
    },
    {
      id: 'comment1',
      label: 'Komentaro mygtukas',
      explain: 'Komentarai yra įprasta funkcija. Tai ne pažeidžiamoji vieta!'
    },
    {
      id: 'share1',
      label: 'Dalijimosi mygtukas',
      explain: 'Įrašų dalijimasis yra pagrindinė socialinių tinklų funkcija. Pats mygtukas nėra saugumo problema!'
    },
    {
      id: 'like2',
      label: 'Mygtukas „Patinka"',
      explain: 'Pažymėti įrašus „Patinka“ yra normalu ir nekenksminga!'
    },
    {
      id: 'comment2',
      label: 'Komentaro mygtukas',
      explain: 'Komentarai yra standartinė socialinių tinklų funkcija!'
    },
  ],
}
