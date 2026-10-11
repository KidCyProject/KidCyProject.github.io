// ---------------------------------------------------------------------------
// Digital Citizenship (DC) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Digital Citizenship module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDC = {
  aim: 'Suteikti supratimą apie tai, kas yra skaitmeninis pilietiškumas ir kaip laikytis jo pagrindinių principų.',
  objectives: [
    'Pabrėžti skaitmeninio pilietiškumo svarbą.',
    'Pristatyti skaitmeninio pilietiškumo koncepciją ir jos teisių, atsakomybės ir pagarbos principus skaitmeninėje aplinkoje.',
    'Ugdyti supratimą, kaip taikyti šiuos teisių, atsakomybės ir pagarbos principus skaitmeninėje aplinkoje – būti saugiems, protingiems ir socialiai aktyviems.',
  ],
  outcomes: [
    'Galiu paaiškinti, kas yra skaitmeninis pilietiškumas ir kodėl jis svarbus.',
    'Galiu aptarti teisių, atsakomybės ir pagarbos principus skaitmeninėje aplinkoje, įskaitant tai, kaip išlikti saugiems, elgtis protingai ir socialiai įsitraukti.',
  ],
  parts: [
    {
      goal: 'Padėti mokiniams suprasti, kas yra skaitmeninė aplinka ir kokie yra jos teigiami aspektai.',
      bundle: {
        filename: 'Skaitmeninis pilietiškumas - paketas - 1 dalis',
      },
      included: {
        materials: [
          {
            // ID: 1.1.1
            kind: 'Scenarijų kortelės',
            name: 'Fizinis ir skaitmeninis pasauliai',
            filename: 'Scenarijų kortelės - Fizinis ir skaitmeninis pasauliai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Kas yra skaitmeninė aplinka?',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.1.2
        title: 'Kas yra skaitmeninė aplinka ir skaitmeninės sistemos?',
        supportText:
          'Naudokite šį vaizdo įrašą diskusijai apie internetines erdves, kurias mokiniai jau naudoja – nuo mokymosi platformų iki žaidimų ir žinučių programėlių. Sustokite trumpam apmąstymui apie tai, kur mokiniai leidžia laiką internete.',
        downloads: {
          video: {
            filename: 'Kas yra skaitmeninė aplinka ir skaitmeninės sistemos',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Kas yra skaitmeninė aplinka ir skaitmeninės sistemos - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal: 'Padėti mokiniams suprasti, kas yra skaitmeninis pilietiškumas ir kodėl jis svarbus.',
      bundle: {
        filename: 'Skaitmeninis pilietiškumas - paketas - 2 dalis',
      },
      included: {
        materials: [
          {
            // ID: 1.2.1
            kind: 'Paveikslėlis',
            name: 'Atsakingas pilietis',
            filename: 'Paveikslėlis - Atsakingas pilietis',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 1.2.2
            kind: 'Darbalapas',
            name: 'Teisės, atsakomybės ir pagarba',
            filename: 'Darbalapas - Teisės, atsakomybės ir pagarba',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Skaitmeninis pilietiškumas',
          },
          {
            title: 'Teisės, pagarba ir atsakomybės skaitmeninėje aplinkoje',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
    },
    {
      goal:
        'Padėti mokiniams žinoti, kaip būti saugiems skaitmeninėje aplinkoje, kritiškai mąstant ir atsakingai naudojant privatumo nustatymus.',
      bundle: {
        filename: 'Skaitmeninis pilietiškumas - paketas - 3 dalis',
      },
      included: {
        materials: [
          {
            // ID: 1.3.1
            kind: 'Paveikslėlis',
            name: 'Saugumo jausmas',
            filename: 'Paveikslėlis - Saugumo jausmas',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 1.3.2
            kind: 'Paveikslėlis',
            name: 'Nesaugumo jausmas',
            filename: 'Paveikslėlis - Nesaugumo jausmas',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 1.3.4
            kind: 'Paveikslėlis',
            name: 'Privatumo nustatymų strategija',
            filename: 'Paveikslėlis - Privatumo nustatymų strategija',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 1.3.5
            kind: 'Paveikslėlis',
            name: 'Programėlių privatumo nustatymai',
            filename: 'Paveikslėlis - Programėlių privatumo nustatymai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Ryšių tarp fizinės ir skaitmeninės aplinkos supratimas',
          },
          {
            title: 'Privatumo nustatymai',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.3.3
        title: 'Kas yra privatumo nustatymai?',
        supportText:
          'Naudokite šį vaizdo įrašą pristatydami privatumo nustatymus kaip praktinį įrankį, kurį mokiniai gali valdyti programėlėse ir įrenginiuose, kuriuos jau turi. Sustokite ir paklauskite, kokius nustatymus jie jau patikrino ar pakeitė.',
        downloads: {
          video: {
            filename: 'Kas yra privatumo nustatymai',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Kas yra privatumo nustatymai - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal: 'Padėti mokiniams suprasti, kaip išmintingumas ir atsparumas gali padėti jiems būti protingiems skaitmeninėje aplinkoje.',
      bundle: {
        filename: 'Skaitmeninis pilietiškumas - paketas - 4 dalis',
      },
      included: {
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Iššūkiai skaitmeninėje aplinkoje',
          },
          {
            title: 'Supratimas, kaip ugdyti atsparumą',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 1.4.1
        title: 'Atsparumas skaitmeninėje aplinkoje',
        supportText:
          'Naudokite šį vaizdo įrašą tyrinėdami, kaip mokiniai gali atsigauti ir prisitaikyti, kai internete kažkas klostosi ne taip – nuo paskyros problemų iki nepageidaujamų kontaktų. Sustokite ir paklauskite, į ką mokiniai kreipiasi pagalbos tokiose situacijose.',
        downloads: {
          video: {
            filename: 'Atsparumas skaitmeninėje aplinkoje',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Atsparumas skaitmeninėje aplinkoje - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal:
        'Padėti mokiniams suprasti, kaip elgtis atsakingai, rodant pagarbą sau ir kitiems, socialiai įsitraukiant skaitmeninėje aplinkoje.',
      bundle: {
        filename: 'Skaitmeninis pilietiškumas - paketas - 5 dalis',
      },
      included: {
        materials: [
          {
            // ID: 1.5.1
            kind: 'Paveikslėlis',
            name: 'Skaitmeninis pėdsakas',
            filename: 'Paveikslėlis - Skaitmeninis pėdsakas',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 1.5.2
            kind: 'Scenarijų kortelės',
            name: 'Ką tinkama ir netinkama skelbti',
            filename: 'Scenarijų kortelės - Ką tinkama ir netinkama skelbti',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 1.5.3
            kind: 'Scenarijų kortelės',
            name: 'Socialinių tinklų įrašai',
            filename: 'Scenarijų kortelės - Socialinių tinklų įrašai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Atsakingas elgesys skaitmeninėje aplinkoje',
          },
          {
            title: 'Pagarbus elgesys skaitmeninėje aplinkoje',
          },
          {
            title: 'Teigiamo skaitmeninio pėdsako kūrimas',
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
  title: 'TINKAMAS ar NETINKAMAS turinys skelbti?',
  subtitle: 'Išrūšiuokite kiekvieną įrašą į tinkamą zoną. Sužinokite, ką saugu, malonu ir sąžininga skelbti internete!',
  howItWorks: 'Kaip tai veikia',
  instruction: 'Vilkite kiekvieną įrašo kortelę į jai priklausančią zoną. Telefone ar klaviatūra pasirinkite kortelę, o po ja – zoną. Kai kurie įrašai yra tinkami, kai kurie privatūs, kai kurie nemalonūs, o kitus pirmiausia reikia suderinti su draugu.',
  tip: 'Prieš ką nors paskelbdami, sustokite ir pagalvokite: Ar tai saugu? Ar tai maloni? Ar tai apie kitą žmogų?',
  tipLabel: 'Patarimas',
  tryAgain: 'Bandyti dar kartą',
  correctCountLabel: 'Teisingai',
  postsToSort: 'Įrašai rūšiavimui',
  dragHere: 'Vilkite įrašus čia',
  zoneAriaTemplate: 'Zona „{zone}“',
  chooseZoneLabel: 'Kur priklauso šis įrašas?',
  correctInTemplate: 'Teisingai! → {zone}',
  zones: {
    good: { icon: '✅', title: 'Gera skelbti', hint: 'Maloni, saugu ir apie jus pačius' },
    private: { icon: '🔒', title: 'Pasilikti sau', hint: 'Gali padėti nepažįstamajam jus rasti ar apgauti' },
    unkind: { icon: '💔', title: 'Nemalonu', hint: 'Gali ką nors įskaudinti, pažeminti ar atstumti' },
    ask: { icon: '🙋', title: 'Pirmiausia paklausti', hint: 'Apie kitą žmogų. Skelbkite tik jei jis sutinka' },
  },
  stopTitle: 'Sustokite ir pagalvokite prieš skelbdami',
  stopSubtitle: 'Trys klausimai, kuriuos verta užduoti kiekvieną kartą',
  stopQuestions: [
    { icon: '🔒', text: 'Ar tai saugu? Ar nepažįstamasis galėtų tai panaudoti, kad mane rastų ar apgautų?' },
    { icon: '💛', text: 'Ar tai maloni? Ar tai gali ką nors įskaudinti, pažeminti ar atstumti?' },
    {
      icon: '🙋',
      text: 'Ar tai apie kitą žmogų? Pirmiausia jo paklauskite. Jei jis sako ne, neskelbkite. Tai galioja ir privačiuose pokalbiuose.',
    },
  ],
  stopNote: 'Kai kas nors atsiduria internete, ne visada įmanoma tai atšaukti.',
  winSummaryTemplate: '{n} iš {total} iš pirmo karto',
  winGreat: 'Pagalvojate prieš paskelbdami. Puikus darbas!',
  winGood: 'Gerai padirbėta! Žemiau pažiūrėkite įrašus, kurie nepavyko.',
  winPractise: 'Treniruokitės toliau. Prieš skelbdami paklauskite: Ar tai saugu? Ar tai maloni? Ar tai apie kitą žmogų?',
  reviewTitle: 'Įrašai, kuriuos verta prisiminti',
  tryOtherZone: 'Ne visai – pabandykite kitą zoną!',
  winTitle: 'Viskas išrūšiuota!',
  playAgain: 'Žaisti dar kartą',
  posts: [
    {
      id: 1,
      text: 'Mano namų adresas yra Gatvės g. 123',
      emoji: '🏠',
      explanation: 'Jūsų namų adresas yra privatus – niekada jo nesidalykite internete! Nepažįstamieji gali jį panaudoti sužinoti, kur gyvenate.',
    },
    {
      id: 2,
      text: 'Aš mėgstu žaisti futbolą!',
      emoji: '⚽',
      explanation: 'Dalytis pomėgiais yra visiškai gerai ir puikus būdas užmegzti ryšį su kitais!',
    },
    {
      id: 3,
      text: 'Mano slaptažodis yra Fluffy123',
      emoji: '🔑',
      explanation: 'Niekada nesidalykite slaptažodžiais su niekuo internete – net su geriausiais draugais!',
    },
    {
      id: 4,
      text: 'Gavau penketą iš gamtos mokslų testo!',
      emoji: '🎉',
      explanation: 'Švęsti pasiekimus saugu dalytis – šauniai pasidaryta!',
    },
    {
      id: 5,
      text: 'Mano telefono numeris yra 555-0123',
      emoji: '📱',
      explanation: 'Telefono numeriai yra asmeniniai – laikykite juos privačius, kad nepažįstamieji negalėtų su jumis susisiekti.',
    },
    {
      id: 6,
      text: 'Esu vienas/viena namuose iki 18:00',
      emoji: '🏡',
      explanation: 'Niekada nesakykite niekam internete, kad esate namuose vieni – tai kelia pavojų jūsų saugumui!',
    },
    {
      id: 7,
      text: 'Mūsų mokyklos spektaklis bus kitą penktadienį!',
      emoji: '🎭',
      explanation: 'Mokyklos renginiais galima dalytis su draugais!',
    },
    {
      id: 8,
      text: 'Pažiūrėkite į mano naują piešinį!',
      emoji: '🎨',
      explanation: 'Dalytis kūrybiniais darbais yra puikus būdas išreikšti save!',
    },
    {
      id: 9,
      text: 'Mamos kreditinės kortelės numeris yra...',
      emoji: '💳',
      explanation: 'Finansinė informacija, pvz., kreditinių kortelių numeriai, visada turi likti privati!',
    },
    {
      id: 10,
      text: 'Mano mėgstamiausias filmas yra Žaislų istorija!',
      emoji: '🎬',
      explanation: 'Kalbėti apie filmus, kuriuos mėgstate, yra visiškai saugu ir smagu!',
    },
    {
      id: 11,
      text: 'Mano pilnas vardas yra Emily Rose Johnson',
      emoji: '📛',
      explanation: 'Dalydamiesi visu savo vardu internete galite padėti nepažįstamiesiems jus identifikuoti ir sekti.',
    },
    {
      id: 12,
      text: 'Ką tik išmokau važiuoti dviračiu!',
      emoji: '🚲',
      explanation: 'Dalytis etapiniais pasiekimais ir naujais įgūdžiais yra puiku skelbti!',
    },
    {
      id: 13,
      text: 'Mano mokyklos spintelės kodas yra 24-8-16',
      emoji: '🔒',
      explanation: 'Spintelių kodai yra privatūs – kas nors gali įsilaužti į jūsų spintelę!',
    },
    {
      id: 14,
      text: 'Gavome naują šuniuką!',
      emoji: '🐶',
      explanation: 'Dalytis informacija apie savo augintinį yra saugu ir smagu visiems – tik nenaudokite jo vardo slaptažodžiuose ar saugumo klausimuose!',
    },
    {
      id: 15,
      text: 'Grįžtu namo vienas/viena per parką 15:30',
      emoji: '🚶',
      explanation: 'Dalijimasis savo kasdieniu grafiku ir maršrutu tiksliai pasako nepažįstamiesiems, kur jus rasti.',
    },
    {
      id: 16,
      text: 'Išvykome dviem savaitėms atostogų. Namuose nieko nėra!',
      emoji: '🧳',
      explanation: 'Skelbti internete, kad namai tušti, rizikinga. Atostogų nuotraukomis dalykitės grįžę.',
    },
    {
      id: 17,
      text: 'Mano nuotrauka prie mokyklos, kurioje ant iškabos matosi mokyklos pavadinimas',
      emoji: '🏫',
      explanation: 'Mokyklos pavadinimas parodo nepažįstamiesiems, kur jus galima rasti kiekvieną dieną. Nerašykite jo viešuose įrašuose.',
    },
    {
      id: 18,
      text: 'Su gimtadieniu, Anna! Linkiu tau puikios dienos!',
      emoji: '🎂',
      explanation: 'Maloni žinutė draugei yra puikus dalykas, kurį verta paskelbti.',
    },
    {
      id: 19,
      text: 'Mūsų komanda sunkiai treniravosi ir laimėjome rungtynes!',
      emoji: '🏆',
      explanation: 'Dalytis komandos sėkme yra gerai. Tai maloni, saugu ir smagu skaityti.',
    },
    {
      id: 20,
      text: 'Perskaičiau puikią knygą. Rekomenduoju!',
      emoji: '📚',
      explanation: 'Dalytis tuo, kas jums patinka, yra puikus būdas užmegzti ryšį su kitais.',
    },
    {
      id: 21,
      text: 'Lilijos nauja šukuosena atrodo siaubingai 🤮',
      emoji: '💇',
      explanation: 'Žeminti žmogų internete skaudina, o tai mato daug žmonių. Prieš paskelbdami paklauskite savęs: ar tai pasakyčiau jai į akis?',
    },
    {
      id: 22,
      text: 'Visi ignoruokime naująjį grupės pokalbyje',
      emoji: '🙅',
      explanation: 'Tyčia ką nors atstumti yra patyčių forma. Kiekvienas nusipelno pagarbos, ir internete taip pat.',
    },
    {
      id: 23,
      text: 'Maksas man patikėjo paslaptį. Štai ji, tegul visi perskaito…',
      emoji: '🤫',
      explanation: 'Patikėta paslaptis nepriklauso jums. Ją išduoti reiškia sulaužyti pasitikėjimą ir galima Makso įskaudinti.',
    },
    {
      id: 24,
      text: 'Tavo piešinys siaubingas. Geriau meski!',
      emoji: '👎',
      explanation: 'Piktos pastabos gali sugriauti pasitikėjimą savimi. Maloni ir naudinga nuomonė yra geresnė.',
    },
    {
      id: 25,
      text: 'Susikurkime netikrą paskyrą ir pasityčiokime iš Elos',
      emoji: '🎭',
      explanation: 'Netikra paskyra, skirta iš kažko tyčiotis, yra patyčios internete. Tai nemalonu ir gali sukelti bėdų.',
    },
    {
      id: 26,
      text: 'Pikta pajuoka apie tai, kaip kalba mano klasiokas 😂',
      emoji: '🗣️',
      explanation: 'Tyčiotis iš to, kaip žmogus kalba, yra nemalonu. Skaudinantis juokelis nėra juokingas tam, apie ką jis.',
    },
    {
      id: 27,
      text: 'Mano ir draugų nuotrauka vakarėlyje',
      emoji: '📸',
      explanation: 'Jūsų draugai taip pat nuotraukoje. Pirmiausia paklauskite jų. Jei kas nors sako ne, neskelbkite.',
    },
    {
      id: 28,
      text: 'Juokingas vaizdo įrašas, kaip mano brolis šoka su pižama',
      emoji: '🕺',
      explanation: 'Jums gali būti juokinga, o jam – nemalonu. Pirmiausia jo paklauskite ir gerbkite atsakymą.',
    },
    {
      id: 29,
      text: 'Mūsų klasės nuotrauka iš mokyklos išvykos',
      emoji: '🚌',
      explanation: 'Joje daug žmonių. Pirmiausia paklauskite jų (ir mokytojo). Kai kurie gali nenorėti būti internete.',
    },
    {
      id: 30,
      text: 'Draugės nuotrauka su visu veidu spagečių padaže',
      emoji: '🍝',
      explanation: 'Jums juokinga akimirka jai gali būti nemaloni. Pirmiausia paklauskite ir neskelbkite, jei ji sako ne.',
    },
    {
      id: 31,
      text: 'Mano privataus pokalbio su Zoja ekrano nuotrauka',
      emoji: '💬',
      explanation: 'Zojos žinutės taip pat jos. Rodyti privatų pokalbį neprašius leidimo gali sugriauti jos pasitikėjimą.',
    },
    {
      id: 32,
      text: 'Vaizdo įrašas, kaip mano draugas įmuša įvartį į savus vartus',
      emoji: '🥅',
      explanation: 'Tai galėtų jį sugėdinti, o vaizdo įrašai plinta greitai. Pirmiausia paklauskite. Jei jis sako ne, neskelbkite.',
    },
  ],
}
