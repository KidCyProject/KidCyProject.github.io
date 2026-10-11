// ---------------------------------------------------------------------------
// Malware (MW) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Malware module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentMW = {
  aim: 'Suteikti pagrindinių žinių apie tai, kas yra kenkėjiška programinė įranga, kokias rizikas ji kelia ir kokie yra apsaugos nuo jos principai.',
  objectives: [
    'Pristatyti, kas yra kenkėjiška programinė įranga ir kokie yra jos tipai.',
    'Paaiškinti, kaip veikia kenkėjiška programinė įranga ir kokie požymiai rodo, kad įrenginys užkrėstas.',
    'Ugdyti įgūdžius apsisaugoti nuo su kenkėjiška programine įranga susijusių rizikų.',
  ],
  outcomes: [
    'Galiu apibūdinti, kas yra kenkėjiška programinė įranga, ir atpažinti ją pateiktuose scenarijuose.',
    'Galiu paaiškinti skirtingus kenkėjiškos programinės įrangos tipus, kaip jie veikia ir kokie požymiai rodo, kad mano įrenginys užkrėstas.',
    'Galiu pateiktuose scenarijuose parodyti, kaip apsisaugoti nuo kenkėjiškos programinės įrangos užkrėtimo, ir pagrįsti savo pasirinkimus.',
  ],
  parts: [
    {
      goal: 'Padėti mokiniams suprasti kenkėjiškos programos sąvoką.',
      bundle: {
        filename: 'Kenkėjiška programinė įranga - paketas - 1 dalis',
      },
      included: {
        materials: [
          {
            // ID: 6.1.1
            kind: 'Paveikslėlis',
            name: 'Kenkėjiška + programa = kenkėjiška programa',
            filename: 'Paveikslėlis - Kenkėjiška + programa = kenkėjiška programa',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 6.1.2
            kind: 'Paveikslėlis',
            name: 'Kas yra kenkėjiška?',
            filename: 'Paveikslėlis - Kas yra kenkėjiška',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 6.1.4
            kind: 'Darbalapas',
            name: 'Susiję su kenkėjiška programa ar ne',
            filename: 'Darbalapas - Susiję su kenkėjiška programa ar ne',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Kenkėjiškos programos apibrėžimas',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.1.3
        title: 'Kas yra kenkėjiška programa?',
        supportText:
          'Naudokite šį vaizdo įrašą, kad pristatytumėte kenkėjišką programą kaip programinę įrangą, skirtą padaryti žalą, suteikdami mokiniams pagrindą prieš gilinantis į konkrečius tipus. Padarykite pauzę ir paklauskite, ką jie jau žino ar girdėjo apie kompiuterinius virusus.',
        downloads: {
          video: {
            filename: 'Kas yra kenkėjiška programa',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Kas yra kenkėjiška programa - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal: 'Pristatyti įprastus kenkėjiškų programų tipus.',
      bundle: {
        filename: 'Kenkėjiška programinė įranga - paketas - 2 dalis',
      },
      included: {
        materials: [
          {
            // ID: 6.2.2
            kind: 'Schema',
            name: 'Monetų rinkinys',
            filename: 'Schema - Monetų rinkinys',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 6.2.3
            kind: 'Schema',
            name: 'Žaidimo lenta: Surišk mazgus',
            filename: 'Schema - Žaidimo lenta Surišk mazgus',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Kenkėjiškų programų tipai',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.2.1
        title: 'Kenkėjiškų programų tipų pristatymas',
        supportText:
          'Naudokite šį vaizdo įrašą, kad suteiktumėte mokiniams aiškią apžvalgą apie skirtingas kenkėjiškų programų kategorijas ir kas kiekvieną iš jų išskiria. Padarykite pauzę trumpai diskusijai, kuris tipas, jų manymu, kelia didžiausią riziką ir kodėl.',
        downloads: {
          video: {
            filename: 'Kenkėjiškų programų tipų pristatymas',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Kenkėjiškų programų tipų pristatymas - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal: 'Pateikti kenkėjiškų programų charakteristikų apžvalgą, kad būtų galima jas atpažinti ir aptikti.',
      bundle: {
        filename: 'Kenkėjiška programinė įranga - paketas - 3 dalis',
      },
      included: {
        materials: [
          {
            // ID: 6.3.1
            kind: 'Skaitymas',
            name: 'Kenkėjiškų programų atpažinimas',
            filename: 'Skaitymas - Kenkėjiškų programų atpažinimas',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 6.3.2
            kind: 'Plakatas',
            name: 'Septyni indikatoriai',
            filename: 'Plakatas - Septyni indikatoriai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 6.3.3
            kind: 'Darbalapas',
            name: 'Indikatorių sąrašas',
            filename: 'Darbalapas - Indikatorių sąrašas',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Kenkėjiškų programų tyrimas',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
    },
    {
      goal: 'Padėti mokiniams suprasti apsaugos priemones nuo kenkėjiškų programų.',
      bundle: {
        filename: 'Kenkėjiška programinė įranga - paketas - 4 dalis',
      },
      included: {
        materials: [
          {
            // ID: 6.4.1
            kind: 'Situacija',
            name: 'Kenkėjiška programa ir duomenų vagystė',
            filename: 'Situacija - Kenkėjiška programa ir duomenų vagystė',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 6.4.2
            kind: 'Plakatas',
            name: 'KĄ DARYTI ir KO NEDARYTI',
            filename: 'Plakatas - KĄ DARYTI ir KO NEDARYTI',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 6.4.3
            kind: 'Paveikslėliai',
            name: 'Asociatyvūs paveikslėliai: Būk budrus',
            filename: 'Paveikslėliai - Asociatyvūs paveikslėliai Būk budrus',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 6.4.4
            kind: 'Darbalapas',
            name: 'Skydas nuo kenkėjiškų programų',
            filename: 'Darbalapas - Skydas nuo kenkėjiškų programų',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Kenkėjiškų programų užkrėtimo aplinkybių analizė',
          },
          {
            title: 'Pagrindinių apsaugos priemonių mokymasis',
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
      moduleId: 'dm',
      brand: 'DM',
      href: '/learning-hub/digital-misuse/content',
      imageSrc: '/images/learning-hub/07_digital-misuse.webp',
    },
  ],
}

export const challengeMW = {
  title: 'Kenkėjiškos programos detektyvas',
  subtitle: 'Tu esi kibernetinio saugumo analitikas. Tikrini failus, skaitai el. laiškus, tvarkai iššokančius langus ir peržiūri programų leidimus. Tada įvardini kenkėjiškų programų rūšis, atpažįsti užsikrėtimo požymius ir pasirenki tinkamą apsaugą — 7 lygiuose. Ar sugebėsi išlaikyti sistemą švarią?',
  howItWorks: 'Kaip tai veikia',
  instruction: 'Įveik 7 lygius savo virtualiame kompiuteryje. 1–4 lygiuose nusprendi, ar failas, el. laiškas, iššokantis langas ar programa yra saugi, ar grėsmė. 5 lygyje įvardini kenkėjiškos programos rūšį. 6 lygyje nusprendi, ar kompiuterio problema yra įprasta, ar užsikrėtimo požymis. 7 lygyje pasirenki geriausią apsaugą. Po kiekvieno atsakymo perskaityk paaiškinimą.',
  tip: 'Kenkėjiška programa dažnai maskuojasi kaip kažkas nekenksmingo. Žiūrėk, iš kur failas ar žinutė atkeliavo, o ne vien kaip atrodo. Kai kas nekenksminga atrodo baisiai (pavyzdžiui, atgalinis skaičiavimas), o kai kas pavojinga – draugiškai.',
  tipLabel: 'Patarimas',
  welcomeTitle: 'Sveiki, kibernetinio saugumo analitike!',
  welcomeDescription: 'Tavo kompiuteris gavo įtartinų failų, el. laiškų ir iššokančių langų. Įveik 7 lygius: rask grėsmes, įvardink kenkėjiškas programas, atpažink užsikrėtimo požymius ir pasirink tinkamą apsaugą.',
  levels: [
    '💻 1 lygis — Failų skaitytuvas',
    '📧 2 lygis — El. pašto gautusis',
    '🌐 3 lygis — Naršyklės iššokantys langai',
    '🔒 4 lygis — Programų leidimai',
    '🔬 5 lygis — Kenkėjiškų programų rūšys',
    '🩺 6 lygis — Užsikrėtimo požymiai',
    '🛡️ 7 lygis — Apsauga',
  ],
  bootButton: 'Paleisti kompiuterį →',
  scoreLabel: 'Taškai',
  correctLabel: 'Teisingai',
  threatsCaughtLabel: 'Aptiktos grėsmės',
  keepFile: '✓ Palikti failą',
  quarantine: '🗑️ Karantinas',
  safeKeep: '✓ Saugu / Palikti',
  threatRemove: '⚠️ Grėsmė / Pašalinti',
  nextButton: 'Toliau →',
  malwareTypesTitle: 'Kenkėjiškų programų tipai',
  malwareTypesSubtitle: 'Įprasti kenkėjiškų programų tipai, kurių reikia saugotis',
  malwareTypes: [
    '🦠 Virusas — prisijungia prie failų ir plinta',
    '🪱 Kirminas — pats atkartojasi per tinklus',
    '🐴 Trojos arklys — maskuojasi kaip naudinga programa',
    '🔐 Išpirkos reikalaujanti programa — užrakina failus, kol sumokėsi',
    '👁️ Šnipinėjimo programa — slapta stebi veiklą',
    '📢 Reklaminė programa — užverčia tave reklamomis',
  ],
  securityGuideTitle: 'Saugumo vadovas',
  securityGuideSubtitle: 'Raudonos vėliavėlės, kurių reikia saugotis',
  securityRedFlags: [
    '🚩 .exe, .bat, .vbs iš nežinomų šaltinių',
    '🚩 Neteisingai parašytos arba suklastotos siuntėjo domeno',
    '🚩 Netikros viruso perspėjimai naršyklėje',
    '🚩 Programos, prašančios nereikalingų leidimų',
    '🚩 Prizai, nemokamos pinigų ar skubios grėsmės',
    '🚩 Atgaliniai skaičiavimo laikrodžiai, keliantys paniką',
    '🚩 Failo pavadinimas su dviem plėtiniais, pvz., nuotrauka.jpg.exe',
  ],
  goldenRule: 'Abejodamas nespausk. Kreipkis į IT palaikymą arba patikimą suaugusįjį.',
  levelCompleteTitle: 'Lygis baigtas!',
  levelCompleteSubtitle: 'Tęsk toliau!',
  levelResultLabel: 'Lygio rezultatas',
  correctDecisionsLabel: 'teisingi sprendimai',
  continueButton: 'Tęsti →',
  nextLevelButtonTemplate: 'Tęsti į {n} lygį →',
  viewResultsButton: 'Peržiūrėti galutinius rezultatus →',
  itemProgressTemplate: 'Atvejis {n} iš {total}',
  finalSummaryTemplate: 'taškų · {correct} iš {total} teisingų sprendimų',
  permsRequestingLabel: 'Ši programa prašo šių leidimų:',
  correctFeedback: '✅ Teisingai!',
  incorrectFeedback: '❌ Ne visai!',
  markLegitimate: '✓ Pažymėti kaip patikimą',
  reportPhishing: '⚠️ Pranešti apie sukčiavimą (phishing)',
  allowInstall: '✓ Leisti ir įdiegti',
  denyRemove: '🚫 Atmesti ir pašalinti',
  closeDismiss: '✕ Uždaryti iššokantį langą',
  fileSourceLabel: 'Šaltinis',
  fileSizeLabel: 'Dydis',
  fileAddedLabel: 'Pridėta',
  folderInbox: '📥 Gauti',
  folderSent: '📤 Išsiųsti',
  folderTrash: '🗑️ Šiukšlinė',
  levelDone: [
    { title: 'Failų skaitytuvas — 1 lygis baigtas!', sub: 'Peržiūrėjai visus darbalaukio failus.' },
    { title: 'El. pašto gautusis — 2 lygis baigtas!', sub: 'Peržiūrėjai visus gautųjų laiškus.' },
    {
      title: 'Naršyklės iššokantys langai — 3 lygis baigtas!',
      sub: 'Sutvarkei visus naršyklės iššokančius langus.',
    },
    { title: 'Programų leidimai — 4 lygis baigtas!', sub: 'Peržiūrėjai visas leidimų užklausas.' },
    { title: 'Kenkėjiškų programų rūšys — 5 lygis baigtas!', sub: 'Įvardijai kenkėjiškų programų rūšis.' },
    { title: 'Užsikrėtimo požymiai — 6 lygis baigtas!', sub: 'Patikrinai visas įrenginio problemas.' },
    { title: 'Apsauga — 7 lygis baigtas!', sub: 'Pasirinkai apsaugos priemones.' },
  ],
  resultsTitle: 'Sistema apsaugota! 🛡️',
  resultsDescription: 'Jūsų kibernetinio saugumo ataskaita paruošta.',
  accuracyLabel: 'Tikslumas',
  threatsCaughtStat: 'Aptiktos grėsmės',
  threatsMissedStat: 'Praleistos grėsmės',
  analystRankLabel: 'Analitiko rangas',
  rankTrainee: '📘 Praktikantas',
  rankTraineeMsg: 'Mokykis toliau! Atverk pagalbos skydelius ir bandyk dar kartą — pagerės!',
  rankJunior: '🔍 Jaunesnysis analitikas',
  rankJuniorMsg: 'Geras darbas! Kuri tvirtus kenkėjiškų programų aptikimo įgūdžius. Praktika tobulina.',
  rankSenior: '🔐 Vyresnysis analitikas',
  rankSeniorMsg: 'Puikus darbas! Nustatei daugumą grėsmių. Toliau aštrina akį subtilioms raudonoms vėliavėlėms.',
  rankElite: '🛡️ Elitinis kibernetinio saugumo analitikas',
  rankEliteMsg: 'Puikus darbas! Aptikai beveik kiekvieną grėsmę. Tavo skaitmeninio saugumo instinktai puikūs.',
  playAgain: 'Žaisti dar kartą',
  signNormal: '✓ Atrodo įprasta',
  signWarning: '⚠️ Įspėjamasis požymis',
  verdictSafe: 'Tai saugu.',
  verdictThreat: 'Tai grėsmė.',
  verdictNormal: 'Tai įprasta.',
  verdictWarning: 'Tai įspėjamasis požymis.',
  rightAnswerTemplate: 'Teisingas atsakymas: {answer}',
  typeNames: {
    virus: '🦠 Virusas',
    worm: '🪱 Kirminas',
    trojan: '🐴 Trojos arklys',
    ransomware: '🔐 Išpirkos programa',
    spyware: '👁️ Šnipinėjimo programa',
    adware: '📢 Reklaminė programa',
  },
  measures: {
    links: {
      label: '🔗 Nespausk keistų nuorodų',
      why: 'Nuoroda gali nuvesti į netikrą puslapį arba pradėti atsisiuntimą.',
    },
    trusted: {
      label: '🏪 Atsisiųsk tik iš patikimų vietų',
      why: 'Naudok oficialias svetaines ir programų parduotuves, niekada „nemokamų“ kopijų.',
    },
    update: {
      label: '🔄 Atnaujink kompiuterį ir programas',
      why: 'Atnaujinimai uždaro skyles, kurias naudoja kenkėjiškos programos.',
    },
    antivirus: { label: '🛡️ Įdiek antivirusinę programą', why: 'Ji ieško kenkėjiškų programų ir tave įspėja.' },
    adult: {
      label: '🙋 Prieš ką nors diegdamas paklausk suaugusiojo',
      why: 'Patikimas suaugusysis padeda patikrinti, ar programa saugi.',
    },
    attachment: {
      label: '📎 Būk atsargus su el. laiškų priedais',
      why: 'Priedą atidaryk tik jei jo tikėjaisi ir pažįsti siuntėją.',
    },
  },
  measuresTitle: 'Apsaugos priemonės',
  measuresSubtitle: 'Šeši įpročiai, sustabdantys daugumą kenkėjiškų programų',
  infectionSignsTitle: 'Užsikrėtimo požymiai',
  infectionSignsSubtitle: 'Užuominos, kad įrenginyje gali būti kenkėjiška programa',
  infectionSigns: [
    '🪟 Iš niekur atsiranda iššokantys langai',
    '🐌 Ekranas pasidaro labai lėtas',
    '❓ Atsiranda keistų naujų piktogramų ar programų',
    '🌀 Ventiliatorius garsiai ūžia arba kompiuteris skleidžia keistus garsus',
    '💥 Tavo mėgstamas žaidimas ar programa staiga užsidaro',
    '📂 Namų darbų failai dingsta arba neatsidaro',
    '✉️ Draugai sako, kad gavo iš tavęs el. laiškų',
  ],
  infectionSignsNote: 'Požymis yra užuomina, o ne įrodymas. Kompiuteris gali būti lėtas ir todėl, kad diegia atnaujinimą. Žiūrėk į visą istoriją.',
  perLevelTitle: 'Tavo rezultatas kiekviename lygyje',
  practiceTemplate: '💡 Kitą kartą pasitreniruok: {level}',
  practicePerfect: '🌟 Puikus žaidimas — visi lygiai!',
  typeCases: [
    {
      id: 1,
      icon: '🦠',
      text: 'Nina atidaro failą, kurį atsiuntė draugas. Netrukus pažeidžiami ir kiti jos nešiojamojo kompiuterio failai. Problema plinta iš failo į failą ir tik tada, kai ji juos atidaro.',
      explanation: 'Virusas slepiasi faile ir nusikopijuoja į kitus failus. Jam reikia failo šeimininko ir žmogaus, kuris jį atidarytų.',
      tip: 'Virusas pasileidžia tik tada, kai atidarai užkrėstą failą. Neatidarinėk failų, kurių nesitikėjai.',
    },
    {
      id: 2,
      icon: '🪱',
      text: 'Mokykloje užkrečiamas vienas kompiuteris. Niekas nieko nespaudžia, bet po kelių minučių visame „Wi-Fi“ tinkle kompiuteriai užkrėsti ir lėti.',
      explanation: 'Kirminas plinta pats per tinklus. Jam nereikia failo, kuriame slėptųsi, ir žmogaus, kuris jį atidarytų.',
      tip: 'Atnaujinimai uždaro skyles, pro kurias kirminai patenka į vidų.',
    },
    {
      id: 3,
      icon: '🐴',
      text: 'Leonas įdiegia nemokamą „žaidimų greitintuvą“. Jis atrodo naudingas, bet slapta atveria įsilaužėliui kelią į jo kompiuterį. Pats savęs nekopijuoja.',
      explanation: 'Trojos arklys apsimeta naudinga programa. Pats neplinta. Tu pats jį įleidi.',
      tip: 'Įdiek programas tik iš oficialių vietų. Ir pirmiausia paklausk suaugusiojo.',
    },
    {
      id: 4,
      icon: '🔐',
      text: 'Evos nuotraukos ir namų darbai neatsidaro. Pranešime parašyta: „Tavo failai užrakinti. Sumokėk pinigų, kad juos atgautum.“',
      explanation: 'Išpirkos reikalaujanti programa užrakina arba ištrina tavo failus ir reikalauja išpirkos. Sumokėjus nėra garantijos, kad failus atgausi.',
      tip: 'Daryk svarbių failų atsargines kopijas. Iškart pasakyk suaugusiajam ir nemokėk.',
    },
    {
      id: 5,
      icon: '👁️',
      text: 'Paslėpta programa Tomo nešiojamajame kompiuteryje tyliai užrašo viską, ką jis rašo, net slaptažodžius, ir siunčia nepažįstamajam.',
      explanation: 'Šnipinėjimo programa slapta stebi, ką darai, ir vagia asmeninius duomenis. Programa, kuri užrašo kiekvieną paspaustą klavišą, vadinama klavišų šnipu (keylogger).',
      tip: 'Jauti, kad tave stebi? Pasakyk suaugusiajam ir paleisk antivirusinę patikrą.',
    },
    {
      id: 6,
      icon: '📢',
      text: 'Mia įdiegė nemokamą programą, ir nuo to laiko visą dieną iššoka reklamos: darbalaukyje, kiekviename lange, net kai programa uždaryta.',
      explanation: 'Reklaminė programa užverčia tave reklamomis, dažnai kad jos kūrėjas uždirbtų pinigų. Ji erzina ir gali nuvesti į nesaugius puslapius.',
      tip: 'Skaityk, ką nemokama programa nori įdiegti. Pašalink programas, kurios užpildo ekraną reklamomis.',
    },
  ],
  signCases: [
    {
      id: 1,
      icon: '🪟',
      text: 'Ninos ekrane vis iššoka langai su reklamomis ir laimėjimais. Ji nė vieno neatidarė. Jie grįžta net uždarius naršyklę.',
      explanation: 'Iš niekur atsirandantys iššokantys langai yra klasikinis reklaminės ar kitos kenkėjiškos programos požymis.',
      tip: 'Jų nespausk. Pasakyk suaugusiajam ir paleisk antivirusinę patikrą.',
    },
    {
      id: 2,
      icon: '❓',
      text: 'Leonas darbalaukyje randa programų piktogramų, kurių niekada neįdiegė ir niekada anksčiau nematė.',
      explanation: 'Programos, kurių neįdiegei, gali būti kenkėjiškos, kurios pačios ten atsidūrė. Keistos naujos piktogramos yra įspėjamasis požymis.',
      tip: 'Neatidarinėk nežinomų programų. Paprašyk suaugusiojo jas patikrinti.',
    },
    {
      id: 3,
      icon: '📂',
      text: 'Evos namų darbų failai dingo. Likusieji neatsidaro ir rodo klaidą.',
      explanation: 'Ištrinti ar pažeisti failai, kurių nelietei, yra įspėjamasis požymis. Failus pažeidžia išpirkos reikalaujančios programos ir kai kurie virusai.',
      tip: 'Iškart pasakyk suaugusiajam. Atsarginės failų kopijos gali išgelbėti tavo darbą.',
    },
    {
      id: 4,
      icon: '✉️',
      text: 'Tomo draugai sako: „Gavome iš tavęs keistą el. laišką su nuoroda!“ Tomas jo niekada nesiuntė.',
      explanation: 'Jei el. laiškai iš tavo paskyros išeina be tavęs, ją gali valdyti kažkas kitas arba juos siunčia kenkėjiška programa tavo įrenginyje.',
      tip: 'Pasakyk draugams, kad nespaustų. Tada pasakyk suaugusiajam ir pakeisk slaptažodį.',
    },
    {
      id: 5,
      icon: '🌀',
      text: 'Mios nešiojamasis kompiuteris lėtas, o ventiliatorius labai garsiai ūžia, nors jokia programa neatidaryta. Taip prasidėjo, kai ji paleido nepažįstamojo atsiųstą failą.',
      explanation: 'Kompiuteris, kuris dirba sunkiai, nors tu nieko nedarai, gali fone vykdyti kenkėjišką programą.',
      tip: 'Būk įtarus, kai lėtas ir triukšmingas kompiuteris „nieko nedaro“. Paprašyk suaugusiojo jį patikrinti.',
    },
    {
      id: 6,
      icon: '🐌',
      text: 'Samo nešiojamasis kompiuteris labai lėtas. Lange rašoma „Diegiami atnaujinimai… 63 %“.',
      explanation: 'Tai įprasta. Lėtumas turi aiškią priežastį: kompiuteris diegia atnaujinimus. Vien lėtas kompiuteris nėra kenkėjiškos programos įrodymas.',
      tip: 'Palauk, kol atnaujinimas baigsis. Prieš nerimaudamas pagalvok, kas dar vyksta.',
    },
    {
      id: 7,
      icon: '🎮',
      text: 'Ela valandą žaidžia didelį 3D žaidimą. Jos nešiojamasis kompiuteris įkaista, o ventiliatorius garsiai ūžia.',
      explanation: 'Tai įprasta. Sudėtingi žaidimai verčia kompiuterį dirbti visu pajėgumu, todėl jis įkaista, o ventiliatorius sukasi greitai.',
      tip: 'Garsus ventiliatorius ir aiški priežastis = įprasta. Garsus ventiliatorius ir nieko neatidaryta = įtartina.',
    },
    {
      id: 8,
      icon: '🆕',
      text: 'Jonui tėtis padėjo įdiegti naują piešimo programą iš oficialios programų parduotuvės. Dabar ekrane yra nauja piktograma.',
      explanation: 'Tai įprasta. Jonas žino, iš kur ta piktograma, nes programą įdiegė su suaugusiojo pagalba.',
      tip: 'Nauja piktograma, kurią gali paaiškinti, yra gerai. Naują piktogramą, kurios paaiškinti negali, verta patikrinti.',
    },
  ],
  shieldCases: [
    {
      id: 1,
      icon: '🔗',
      text: 'Nepažįstamasis tau rašo: „Pažiūrėk, kas žiūrėjo tavo profilį! Spausk čia!“',
      explanation: 'Keistos nuorodos gali vesti į netikrus puslapius arba pradėti kenkėjiškos programos atsisiuntimą. Geriausias įprotis – jų nespausti.',
      tip: 'Nesi tikras dėl nuorodos? Nespausk. Paklausk suaugusiojo.',
    },
    {
      id: 2,
      icon: '🏪',
      text: 'Nori naujo žaidimo. Svetainė, apie kurią niekada negirdėjai, siūlo jį nemokamai, be mokėjimo.',
      explanation: 'Nemokamos mokamų žaidimų kopijos dažnai slepia kenkėjiškas programas. Žaidimus imk tik iš oficialios svetainės arba patikimos programų parduotuvės.',
      tip: '„Nemokamos“ mokamų dalykų kopijos yra jauka.',
    },
    {
      id: 3,
      icon: '🔄',
      text: 'Tavo planšetė jau savaites rodo „Yra atnaujinimų“. Visada paliesi „Priminti vėliau“.',
      explanation: 'Atnaujinimai ištaiso saugumo spragas, kurias naudoja kenkėjiškos programos. Įdiek juos kuo greičiau.',
      tip: 'Jei suaugusysis sutinka, įjunk automatinius atnaujinimus.',
    },
    {
      id: 4,
      icon: '🙋',
      text: 'Šeimos nešiojamajame kompiuteryje atsiranda langas, kuris nori įdiegti tau nežinomą programą. Mama yra gretimame kambaryje.',
      explanation: 'Prieš ką nors diegdamas paklausk suaugusiojo. Jis gali patikrinti, ar programa saugi ir iš patikimo šaltinio.',
      tip: 'Paklausti suaugusiojo niekada nėra kvailas klausimas.',
    },
    {
      id: 5,
      icon: '📎',
      text: 'El. laiške sakoma, kad jis iš siuntų bendrovės. Pridėtas failas „saskaita.zip“. Jokios siuntos nelaukei.',
      explanation: 'Netikėti priedai gali slėpti kenkėjiškas programas. Priedą atidaryk tik jei jo tikėjaisi ir pažįsti siuntėją.',
      tip: 'Netikėtas priedas? Neatidaryk. Paklausk siuntėjo kitu būdu arba suaugusiojo.',
    },
    {
      id: 6,
      icon: '🛡️',
      text: 'Šeimos kompiuteryje visiškai nėra apsaugos programos. Nori kažko, kas tikrintų failus ir įspėtų apie kenkėjiškas programas.',
      explanation: 'Antivirusinė programa ieško kenkėjiškų programų ir tave įspėja. Tai vienas iš sluoksnių, saugančių tavo kompiuterį.',
      tip: 'Antivirusas padeda, bet nepakeičia atsargių įpročių.',
    },
  ],
  levelMeta: [
    {
      title: '1 lygis iš 7 — Failų skaitytuvas',
      short: 'Failų skaitytuvas',
      task: 'Ar šis failas saugus, ar jį reikia perkelti į karantiną?',
      app: '📁 Failų naršyklė',
      msg: '🔍 Nuskaitomas failas…',
    },
    {
      title: '2 lygis iš 7 — El. pašto gautusis',
      short: 'El. pašto gautusis',
      task: 'Ar šis laiškas tikras, ar tai sukčiavimas (phishing)?',
      app: '📧 Paštas',
      msg: '📧 Skaitomas el. laiškas…',
    },
    {
      title: '3 lygis iš 7 — Naršyklės iššokantys langai',
      short: 'Iššokantys langai',
      task: 'Spausti mygtuką ar uždaryti langą?',
      app: '🌐 Naršyklė',
      msg: '⚠️ Aptiktas iššokantis langas!',
    },
    {
      title: '4 lygis iš 7 — Programų leidimai',
      short: 'Programų leidimai',
      task: 'Leisti šią programą ar jos atsisakyti?',
      app: '⚙️ Programų tvarkytuvė',
      msg: '⚙️ Peržiūrimi leidimai…',
    },
    {
      title: '5 lygis iš 7 — Kenkėjiškų programų rūšys',
      short: 'Kenkėjiškų programų rūšys',
      task: 'Kokia tai kenkėjiškos programos rūšis?',
      app: '🔬 Kenkėjiškų programų laboratorija',
      msg: '🔬 Tiriamas elgesys…',
    },
    {
      title: '6 lygis iš 7 — Užsikrėtimo požymiai',
      short: 'Užsikrėtimo požymiai',
      task: 'Ar tai įprasta, ar įspėjamasis kenkėjiškos programos požymis?',
      app: '🩺 Įrenginio patikra',
      msg: '🩺 Tikrinamas įrenginys…',
    },
    {
      title: '7 lygis iš 7 — Apsauga',
      short: 'Apsauga',
      task: 'Kuri apsaugos priemonė tinkamiausia?',
      app: '🛡️ Saugumo centras',
      msg: '🛡️ Renkamasi apsauga…',
    },
  ],
  files: [
    {
      id: 1,
      icon: '⚙️',
      name: 'FreeMinecraft_Crack.exe',
      type: 'Vykdomasis failas (.exe)',
      source: 'Atsisiųsta iš: crack-games-free.ru',
      size: '14,2 MB',
      date: 'Šiandien, 15:41',
      description: 'Diegimo programa, teigianti, kad suteiks nemokamą Minecraft. Atsisiųsta iš neoficialios rusų svetainės.',
      explanation: 'Nulaužtų žaidimų diegimo programose dažnai slepiasi Trojos arkliai ir išpirkos reikalaujančios programos. .exe failas, keista svetainė ir pažadas „nemokamas nulaužimas“ yra perspėjamieji ženklai.',
      tip: 'Programas atsisiųsk tik iš oficialių svetainių.',
    },
    {
      id: 2,
      icon: '📄',
      name: 'History_Essay_Draft.docx',
      type: 'Word dokumentas (.docx)',
      source: 'Sukurta vietoje šiame įrenginyje',
      size: '48 KB',
      date: 'Vakar, 19:15',
      description: 'Word dokumentas, kurį pats sukūrei istorijos pamokai.',
      explanation: 'Mažas, vietoje sukurtas Word dokumentas yra saugus. Jis turi standartinį plėtinį, mažą failo dydį ir vietinę kilmę.',
      tip: 'Būk atsargus su .docx failais iš nepažįstamų žmonių — jie gali turėti kenkėjiškų makrokomandų. Tačiau paties sukurti failai yra saugūs.',
    },
    {
      id: 3,
      icon: '📜',
      name: 'speedup_your_pc.bat',
      type: 'Paketo scenarijus (.bat)',
      source: 'Gauta per Discord DM iš: xX_h4ck3r_Xx',
      size: '3,1 KB',
      date: 'Šiandien, 11:02',
      description: 'Paketo scenarijus, išsiųstas per Discord nežinomo vartotojo, teigiančio, kad pagreitins tavo kompiuterį.',
      explanation: '.bat failai gali vykdyti bet kokią komandą tavo kompiuteryje. Jie gali įdiegti kenkėjiškų programų arba ištrinti failus. Niekada nevykdyk scenarijų iš nepažįstamų žmonių.',
      tip: 'Niekada nevykdyk .bat ar .vbs scenarijų iš žmonių, kurių nepažįsti ir kurias visiškai pasitiki, net jei jie teigia, kad tai nekenksinga.',
    },
    {
      id: 4,
      icon: '🎵',
      name: 'Summer_Playlist.mp3',
      type: 'Garso failas (.mp3)',
      source: 'Išsaugota iš „Spotify" darbalaukio programos',
      size: '8,7 MB',
      date: 'Prieš 3 dienas',
      description: 'Muzikos failas, išsaugotas per oficialią Spotify programą.',
      explanation: 'Tai įprastas muzikos failas iš patikimos programos. .mp3 failai nepaleidžia programų, todėl jie saugūs.',
      tip: 'Standartiniai medijos failai (.mp3, .jpg, .mp4) paprastai yra saugūs. Saugokis tik failų, kurie slepia savo plėtinį, pvz., „song.mp3.exe".',
    },
    {
      id: 5,
      icon: '⚙️',
      name: 'RegFix_Pro_Setup.exe',
      type: 'Vykdomasis failas (.exe)',
      source: 'Pristatyta per naršyklės iššokančią reklamą',
      size: '2,1 MB',
      date: 'Šiandien, 14:18',
      description: '„Registro taisymo įrankis", kurį pasiūlė iššokantis skelbimas, teigiąs, kad tavo kompiuteris yra pažeistas.',
      explanation: 'Netikri „kompiuterio taisymo“ įrankiai iš iššokančių skelbimų dažnai slepia reklamines ir šnipinėjimo programas. Tikri taisymo įrankiai taip neskelbiami.',
      tip: 'Tikros antivirusinės programos niekada neskelbiamos atsitiktiniuose iššokančiuose languose.',
    },
    {
      id: 6,
      icon: '📸',
      name: 'Birthday_Party.jpg',
      type: 'Vaizdo failas (.jpg)',
      source: 'Gauta per WhatsApp iš: Močiutės',
      size: '2,9 MB',
      date: 'Praėjusią savaitę',
      description: 'Gimtadienio vakarėlio nuotrauka, kurią išsiuntė tavo močiutė.',
      explanation: '.jpg nuotrauka iš žinomo šeimos nario yra saugi. Standartiniai vaizdai iš patikimų kontaktų nėra kenkėjiška programa.',
      tip: 'Saugokis dvigubų plėtinių, pavyzdžiui, „photo.jpg.exe“. Tikrąjį failo tipą rodo paskutinė dalis.',
    },
    {
      id: 7,
      icon: '📜',
      name: 'FREE_ROBUX_GENERATOR.vbs',
      type: 'VBScript scenarijus (.vbs)',
      source: 'Nuoroda iš YouTube komentaro',
      size: '1,8 KB',
      date: 'Šiandien, 09:55',
      description: 'Scenarijus iš YouTube komentaro, teigiančio, kad generuos neribotus Robux Roblox žaidimui.',
      explanation: '„Nemokamų Robux“ generatorių nėra. Tai sukčiavimas. .vbs scenarijus gali tavo kompiuteryje vykdyti žalingas komandas.',
      tip: 'Nemokamų žaidimo valiutos generatoriai visada yra sukčiavimas. Jie egzistuoja tik tam, kad pavogtų paskyras, įdiegtų kenkėjišką programą arba abu dalykus.',
    },
    {
      id: 8,
      icon: '📊',
      name: 'Science_Project_Data.xlsx',
      type: 'Excel skaičiuoklė (.xlsx)',
      source: 'Gauta el. paštu iš: johnson.s@westridge-school.edu',
      size: '156 KB',
      date: 'Vakar, 10:33',
      description: 'Excel failas su gamtos mokslų projekto duomenimis, atsiųstas patikrintos mokyklos mokytojos.',
      explanation: 'Ši skaičiuoklė – iš tavo mokytojos tikru mokyklos adresu. Failo tipas ir dydis yra įprasti.',
      tip: 'Office failai iš nepažįstamų žmonių gali slėpti žalingas makrokomandas. Prieš atidarant failą, patikrink, kas jį atsiuntė.',
    },
    {
      id: 9,
      icon: '📸',
      name: 'Atostogu_nuotraukos.jpg.exe',
      type: 'Programa (.exe)',
      source: 'Pokalbyje atsiuntė žmogus, kurį pažįsti tik internete',
      size: '1,4 MB',
      date: 'Šiandien, 16:07',
      description: 'Failas atrodo kaip atostogų nuotrauka. Jo pavadinime yra du plėtiniai: „.jpg“ ir „.exe“.',
      explanation: 'Svarbus tik paskutinis plėtinys. Šis failas baigiasi .exe, taigi tai programa, o ne nuotrauka. Užpuolikai „.jpg“ deda pirma, kad failas atrodytų kaip paveikslėlis.',
      tip: 'Perskaityk visą failo pavadinimą iki galo. Jei jis baigiasi .exe, tai programa.',
    },
    {
      id: 10,
      icon: '⚙️',
      name: 'Minecraft_Launcher_Setup.exe',
      type: 'Diegimo programa (.exe)',
      source: 'Atsisiųsta iš: minecraft.net (oficiali svetainė)',
      size: '2,4 MB',
      date: 'Šiandien, 17:30',
      description: 'Žaidimo diegimo programa. Tėtis ją atsisiuntė iš oficialios svetainės.',
      explanation: '.exe failas ne visada blogas. Šis gautas iš gamintojo oficialios svetainės, ir jį atsisiuntė suaugęs žmogus. Svarbu, iš kur failas atkeliavo.',
      tip: 'Net su saugia diegimo programa: prieš ką nors diegdamas paklausk suaugusiojo.',
    },
  ],
  emails: [
    {
      id: 1,
      fromName: 'IT saugumo komanda',
      fromAddr: 'security-alert@school-itsupport.xyz',
      subject: 'SKUBU: Jūsų mokyklos paskyra buvo nulaužta — iš karto nustatykite naują slaptažodį',
      body: `Mielas(-a) mokiny(-e),

Mūsų sistemos aptiko neteisėtą prieigą prie jūsų mokyklos paskyros iš nežinomos vietos.

Turite NEDELSIANT iš naujo nustatyti slaptažodį, paleisdami pridėtą įrankį. Jei nesiimsite veiksmų per 30 minučių, paskyra bus visam laikui užrakinta.

— IT saugumo skyrius`,
      attachment: 'PasswordReset_Tool.exe',
      explanation: 'Daug perspėjamųjų ženklų: keistas „.xyz“ adresas, skubėjimas ir .exe failas. Tikras IT skyrius atsiunčia nuorodą į prisijungimo puslapį, o ne programą.',
      tip: 'Gavai bauginantį saugumo pranešimą? Paskambink IT numeriu, kurį jau žinai. Nenaudok kontaktų iš laiško.',
    },
    {
      id: 2,
      fromName: 'Ms. Johnson',
      fromAddr: 'johnson.s@westridge-school.edu',
      subject: 'Mokslo mugė — projekto aprašymas pridėtas',
      body: `Sveiki, klase,

pridedamas oficialus projekto aprašymas artėjančiai mokslo mugei. Jame pateikiami reikalingi skyriai, formatavimo gairės ir pateikimo terminas.

Atneškite užbaigtą plakatą ir ataskaitą į 14 kabinetą iki penktadienio.

Jei turite klausimų, praneškite!

Ms. Johnson
Gamtos mokslų skyrius, Westridge School`,
      attachment: 'Science_Fair_Project_Brief.docx',
      explanation: 'Tai tikras mokyklos laiškas. Jis atsiųstas mokyklos adresu, Word dokumentas tinka temai ir niekas neprašo asmeninių duomenų.',
      tip: '.docx failas iš tavo mokytojos mokyklos adreso yra saugus. Vis tiek visada patikrink visą siuntėjo adresą, prieš ką nors atidarant.',
    },
    {
      id: 3,
      fromName: 'Lucas (žaidimų draugas)',
      fromAddr: 'lucas.gamer99@gmail.com',
      subject: 'draugas paleisk tai, tai duoda tau begalines monetas žaidime!!',
      body: `ei!!

radau internete šį puikų scenarijų, kuris suteikia neribotų monetų Clash Royale. tiesiog paleisk .bat failą ir jis automatiškai pataisys žaidimą lol

mano brolis išbandė ir veikė. bet niekam nesakyk

– Lucas`,
      attachment: 'coin_hack_v3_FINAL.bat',
      explanation: 'Net draugo žinutė gali turėti kenkėjiškų programų. Luko paskyra gali būti nulaužta arba jis nežino, kad failas žalingas. .bat failas, kuris „nulaužia“ žaidimą, yra Trojos arklio triukas. Užpuolikas galėtų perimti tavo kompiuterio valdymą.',
      tip: 'Niekada nevykdyk .bat ar .vbs scenarijų iš bet ko, įskaitant draugus. „Cheat" scenarijai interneto žaidimams beveik visada yra užmaskuota kenkėjiška programa.',
    },
    {
      id: 4,
      fromName: 'Mokyklos biblioteka',
      fromAddr: 'library@westridge-school.edu',
      subject: 'Vasaros skaitymo programa — jūsų skaitymo sąrašas',
      body: `Sveiki,

dėkojame, kad užsiregistravote į vasaros skaitymo programą! Pridedamas jūsų asmeninis skaitymo sąrašas pagal jūsų amžių ir interesus.

Bet kurią iš šių knygų galite pasiskolinti iš mokyklos bibliotekos arba užsisakyti per mokinių portalą.

Smagaus skaitymo!

Westridge School bibliotekos komanda`,
      attachment: 'Summer_Reading_List.pdf',
      explanation: 'Tikras mokyklos bibliotekos laiškas iš mokyklos adreso. .pdf failas yra skaitymo sąrašas. Niekas neprašo asmeninių duomenų.',
      tip: 'PDF failai iš žmonių, kuriuos pažįsti, dažniausiai saugūs. Elkis atsargiai su PDF iš nepažįstamų žmonių. Juose gali slėptis scenarijai.',
    },
    {
      id: 5,
      fromName: 'PRIZŲ PERSPĖJIMŲ CENTRAS',
      fromAddr: 'winner@free-prize-claim.net',
      subject: 'BUVAI ATRINKTAS — PAREIK SAVO iPHONE DABAR!!!',
      body: `SVEIKINAME!!!

Jūs buvote atsitiktinai atrinktas kaip mūsų laimingasis laimėtojas! Norėdami pareikalauti savo naują iPhone, užpildykite ir grąžinkite pridėtą reikalavimo formą su savo asmeniniais duomenimis ir 4,99 € siuntimo mokesčiu.

Atsakykite per 12 VALANDŲ arba jūsų prizas baigs galioti!

[PAREIKALAUTI SAVO PRIZO →]`,
      attachment: 'WINNER_ClaimForm_URGENT.html',
      explanation: 'Sukčiavimas su prizu ir .html failu. Atidarius pasirodo netikras puslapis, kuris pavagia tavo duomenis ir mokėjimo informaciją. Perspėjamieji ženklai: prizas, kuriame nedalyvavai, skubėjimas, keistas adresas ir DIDŽIOSIOS RAIDĖS.',
      tip: '.html failas laiške gali tavo įrenginyje atidaryti netikrą prisijungimo ar mokėjimo puslapį. Žiniatinklio filtrai jo gali nepastebėti.',
    },
  ],
  popups: [
    {
      id: 1,
      browserUrl: 'https://free-movies-unlimited.pirate',
      appName: 'SAUGUMO PERSPĖJIMAS',
      icon: '🚨',
      message: '⚠️ VIRUSAS APTIKTAS! Jūsų kompiuteris užkrėstas 47 virusais! Nedelsdami skambinkite 1-800-FIX-NOW arba jūsų sistema bus visam laikui pažeista!',
      subtext: '„Windows Defender" aptiko kritinių grėsmių. Veikite dabar!',
      primaryBtnText: '📞 Skambinti dabar ir taisyti',
      explanation: 'Tai „scareware“ – netikras viruso perspėjimas, kuris tave gąsdina, kad paskambintum sukčiui arba įdiegtum netikrą antivirusinę programą. Tikros saugumo programos tavęs neperspėja tinklalapyje.',
      tip: 'Uždarykite įtartinus naršyklės iššokančius langus naudodami mygtuką X. Niekada neskambinkite telefono numeriais, rodomais naršyklės iššokančiuose languose — tai visada sukčiavimo karštosios linijos.',
    },
    {
      id: 2,
      browserUrl: 'https://school-portal.edu',
      appName: 'Mokyklos portalas',
      icon: '🍪',
      message: 'Ši svetainė naudoja slapukus, kad prisimintų jūsų prisijungimą ir pagerintų jūsų patirtį.',
      subtext: 'Naudojame tik būtinus slapukus. Jokie asmeniniai duomenys nėra perduodami trečiosioms šalims.',
      primaryBtnText: '✓ Priimti slapukus',
      explanation: 'Tai tikras slapukų pranešimas tavo mokyklos portale. Jis sako, kam reikalingi slapukai, ir neprašo nieko keisto. Priimti būtinus slapukus patikimoje svetainėje yra gerai.',
      tip: 'Slapukų pranešimai svetainėse, kurias pažįsti ir kuriomis pasitiki, yra įprasti. Daugelyje šalių jų reikalauja įstatymas.',
    },
    {
      id: 3,
      browserUrl: 'https://gaming-news-blog.com',
      appName: 'Sveikiname!!!',
      icon: '🎉',
      message: 'JŪS ESATE 1 000 000-asis LANKYTOJAS! Jūs laimėjote NEMOKAMĄ PlayStation 5! Spustelėkite žemiau, kad nedelsdami pasiimtumėte prizą!',
      subtext: '⏱️ Pasiūlymas baigiasi po: 00:59 — pasiimkite, kol laikas nepasibaigė!',
      primaryBtnText: '🎮 Pasiimti NEMOKAMĄ PS5!',
      explanation: 'Netikras prizo langas. Jokia svetainė neatiduoda lankytojams nemokamo PlayStation 5. Mygtukas veda į sukčių puslapį, kuris nori tavo duomenų ar pinigų. Atgalinė atskaita skirta tave paskubinti.',
      tip: 'Atgalinės atskaitos laikrodžiai iššokančiuose languose egzistuoja tam, kad sustabdytų tave nuo mąstymo. Tikri prizai niekada neplatiname per atsitiktinius naršyklės iššokančius langus.',
    },
    {
      id: 4,
      browserUrl: 'https://youtube.com',
      appName: 'YouTube',
      icon: '🔔',
      message: 'Leisti YouTube siųsti jums pranešimus apie naujus vaizdo įrašus iš kanalų, kuriais prenumeruojate?',
      subtext: 'Galite tai pakeisti vėliau naršyklės nustatymuose.',
      primaryBtnText: 'Leisti pranešimus',
      explanation: '„YouTube“ yra tikra svetainė, bet saugiausia pranešimus blokuoti, net patikimose svetainėse. Kartą leidus, jais galima piktnaudžiauti arba jie gali virsti šlamštu.',
      tip: 'Pagalvok, prieš leidžiant pranešimus. Dauguma svetainių veikia ir be jų.',
    },
    {
      id: 5,
      browserUrl: 'https://download-cracked-software.cc',
      appName: 'Atsisiuntimų tvarkytuvė',
      icon: '⬇️',
      message: 'Failas paruoštas: „Adobe_Photoshop_FULL_CRACK.exe" (87 MB). Mūsų DI patvirtino šį failą kaip SAUGŲ.',
      subtext: 'Valdomos VirusSafe™ — nuskaitytas ir patvirtintas. Spustelėkite, kad nedelsdami atsisiųstumėte.',
      primaryBtnText: '✓ Atsisiųsti dabar',
      explanation: 'Perspėjamieji ženklai: keistas „.cc“ adresas, nulaužta (piratinė) programa, kurioje beveik visada slepiasi kenkėjiška programa, ir „SAUGU“ ženklelis, kurį svetainė pati sau davė. „VirusSafe™“ išgalvotas, kad tave apgautų.',
      tip: 'Nulaužtoje ar piratinėje programinėje įrangoje beveik visada slepiasi kenkėjiška programa. Programas atsisiųsk tik iš oficialios gamintojo svetainės.',
    },
    {
      id: 6,
      browserUrl: 'https://school-portal.edu',
      appName: 'Mokyklos portalas',
      icon: '⏱️',
      message: 'Po 2 minučių būsi atjungtas, nes nieko nespaudei. Likti prisijungus?',
      subtext: 'Taip apsaugoma tavo paskyra bendruose kompiuteriuose.',
      primaryBtnText: 'Likti prisijungus',
      explanation: 'Atgalinis skaičiavimas ne visada yra spąstai. Šis pranešimas rodomas tavo paties mokyklos portale. Jis tik klausia, ar nori likti prisijungęs, ir neprašo nei pinigų, nei asmeninių duomenų.',
      tip: 'Žiūrėk į svetainę ir į tai, ko langas prašo, o ne vien į tai, ar jame yra laikmatis.',
    },
    {
      id: 7,
      browserUrl: 'https://fast-news-today.net',
      appName: 'Grotuvo atnaujinimas',
      icon: '🔄',
      message: 'Tavo vaizdo grotuvas pasenęs! Įdiek atnaujinimą dabar, kad galėtum žiūrėti toliau.',
      subtext: 'Atsisiųsk VideoPlayer_Update.exe (1,2 MB). Užtrunka vos 10 sekundžių!',
      primaryBtnText: 'Atnaujinti dabar',
      explanation: 'Tikri atnaujinimai ateina iš pačios programos arba iš įrenginio nustatymų, o ne iš iššokančio lango svetainėje. Netikras „grotuvo atnaujinimas“ yra dažnas triukas, kad žmogus įdiegtų kenkėjišką programą.',
      tip: 'Atnaujink tik per įrenginio nustatymus arba oficialią gamintojo svetainę. Niekada per iššokantį langą.',
    },
  ],
  permissions: [
    {
      id: 1,
      appIcon: '🔦',
      appName: 'Flashlight Pro',
      source: 'Leidėjas: Nežinomas kūrėjas · ⭐ 2,1 · 500 atsisiuntimų',
      description: 'Paprasta žibintuvėlio programa.',
      permissions: [
        { icon: '📷', name: 'Kamera', reason: 'Įjungti blykstės LED', suspicious: false },
        { icon: '📍', name: 'Tiksli vieta (GPS)', reason: 'Priežastis nenurodyta', suspicious: true },
        { icon: '📞', name: 'Skaityti skambučių žurnalą', reason: 'Priežastis nenurodyta', suspicious: true },
        { icon: '💾', name: 'Prieiga prie visų failų', reason: 'Priežastis nenurodyta', suspicious: true },
      ],
      explanation: 'Žibintuvėlio programai kamera reikalinga tik šviesai. Jai nereikia tavo buvimo vietos, skambučių sąrašo ar visų failų. Šnipinėjimo programos to prašo, kad rinktų tavo duomenis.',
      tip: 'Visada klausk: „Kodėl šiai programai to reikia?“ Žibintuvėliui tavo GPS ar kontaktai visai nereikalingi.',
    },
    {
      id: 2,
      appIcon: '📷',
      appName: 'School Photo Editor',
      source: 'Leidėjas: Creative Tools Ltd · ⭐ 4,7 · 2 mln.+ atsisiuntimų',
      description: 'Redaguoti ir tobulinti nuotraukas mokyklos projektams.',
      permissions: [
        { icon: '📷', name: 'Kamera', reason: 'Fotografuoti naujas nuotraukas redagavimui', suspicious: false },
        { icon: '🖼️', name: 'Prieiga prie nuotraukų', reason: 'Atidaryti esamas nuotraukas', suspicious: false },
        { icon: '💾', name: 'Išsaugoti atmintyje', reason: 'Išsaugoti redaguotas nuotraukas', suspicious: false },
      ],
      explanation: 'Visi trys leidimai tinka nuotraukų redaktoriui: kamera fotografuoti, nuotraukos redaguoti, atmintis išsaugoti. Daugiau jis neprašo.',
      tip: 'Jei kiekvienas leidimas tinka tam, ką programa daro, ji greičiausiai sąžininga.',
    },
    {
      id: 3,
      appIcon: '🎮',
      appName: 'SuperRun Adventure',
      source: 'Leidėjas: FastGame Studio · ⭐ 4,1 · 800 tūkst. atsisiuntimų',
      description: 'Greitas šoninių slinkčių platforminis žaidimas.',
      permissions: [
        { icon: '🔊', name: 'Leisti garsą', reason: 'Žaidimo garso efektams', suspicious: false },
        { icon: '📳', name: 'Vibracija', reason: 'Haptiniu grįžtamajam ryšiui žaidžiant', suspicious: false },
        { icon: '📍', name: 'Tiksli GPS vieta', reason: 'Priežastis nenurodyta', suspicious: true },
        {
          icon: '📱',
          name: 'Skaityti įrenginio ID ir informaciją',
          reason: 'Priežastis nenurodyta',
          suspicious: true,
        },
      ],
      explanation: 'Garsas ir vibracija žaidime įprasti. Bet platforminiam žaidimui nereikia tavo GPS ar įrenginio ID. Jie naudojami tau sekti ir duomenims parduoti reklamuotojams.',
      tip: 'Net gerai įvertintos programos gali prašyti nereikalingų leidimų. Visada atsisakyk leidimų, kurie neturi aiškios sąsajos su programos tikslu.',
    },
    {
      id: 4,
      appIcon: '📚',
      appName: 'CsHub Learning',
      source: 'Leidėjas: CsHub Education · ⭐ 4,9 · 50 tūkst. atsisiuntimų',
      description: 'Interaktyvus kibernetinio saugumo mokymasis mokiniams.',
      permissions: [
        { icon: '🌐', name: 'Interneto prieiga', reason: 'Pamokoms ir viktorinoms įkelti', suspicious: false },
        { icon: '💾', name: 'Vietinė atmintis', reason: 'Jūsų pažangai išsaugoti neprisijungus', suspicious: false },
      ],
      explanation: 'Mokymo programai reikia interneto pamokoms įkelti ir atminties pažangai išsaugoti. Ji prašo tik to, ko jai reikia. Tai gera privatumo praktika.',
      tip: 'Programos, kurios prašo tik reikalingų leidimų, gerbia tavo privatumą.',
    },
  ],
}
