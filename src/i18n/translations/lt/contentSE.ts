// ---------------------------------------------------------------------------
// Social Engineering (SE) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Social Engineering module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentSE = {
  aim: 'Suteikti pagrindinių žinių apie tai, kas yra socialinė inžinerija, ypač pabrėžiant jos keliamas rizikas ir apsaugos nuo jos principus.',
  objectives: [
    'Pristatyti socialinės inžinerijos sąvoką, daugiausia dėmesio skiriant užpuolikų tikslams.',
    'Paaiškinti įvairias socialinės inžinerijos formas ir situacijas, kuriose jos gali pasitaikyti.',
    'Ugdyti įgūdžius atpažinti socialinės inžinerijos technikas ir būdus apsisaugoti nuo jų.',
  ],
  outcomes: [
    'Galiu apibūdinti, kas yra socialinė inžinerija ir kokie yra jos tipai.',
    'Galiu paaiškinti, kodėl užpuolikai naudoja socialinę inžineriją.',
    'Galiu pateikti pavyzdžių situacijų, kuriose tikėtinos socialinės inžinerijos atakos.',
    'Galiu atpažinti socialinės inžinerijos atakas pateiktuose scenarijuose.',
    'Galiu pateiktuose scenarijuose parodyti, kaip apsisaugoti nuo socialinės inžinerijos, ir pagrįsti savo pasirinkimus.',
  ],
  parts: [
    {
      goal: 'Padėti mokiniams suprasti, kas yra socialinė inžinerija, pirmiausia atpažįstant, kaip žmonės gali būti veikiami ar manipuliuojami kasdienėse situacijose, o tada siejant šį supratimą su skaitmenine aplinka ir užpuolikų elgesiu.',
      bundle: {
        filename: 'Socialinė inžinerija - paketas - 1 dalis',
      },
      included: {
        materials: [
          {
            // ID: 5.1.2
            kind: 'Paveikslėlis',
            name: 'Sistemų įsilaužimas vs. žmonių apgaudinėjimas',
            filename: 'Paveikslėlis - Sistemų įsilaužimas vs. žmonių apgaudinėjimas',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.1.3
            kind: 'Paveikslėlis',
            name: 'Užpuoliko tikslai',
            filename: 'Paveikslėlis - Užpuoliko tikslai',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.1.4
            kind: 'Scenarijų kortelės',
            name: 'Ko nori užpuolikas?',
            filename: 'Scenarijų kortelės - Ko nori užpuolikas',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.1.5
            kind: 'Sprendimų kortelės',
            name: 'Ko nori užpuolikas?',
            filename: 'Sprendimų kortelės - Ko nori užpuolikas',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.1.6
            kind: 'Darbalapas',
            name: 'Socialinės inžinerijos supratimas',
            filename: 'Darbalapas - Socialinės inžinerijos supratimas',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Socialinės inžinerijos koncepto pristatymas',
          },
          {
            title: 'Ko nori užpuolikai?',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 5.1.1
        title: 'Kas yra socialinė inžinerija?',
        supportText:
          'Naudokite šį vaizdo įrašą, kad pristatytumėte socialinę inžineriją kaip techniką, išnaudojančią žmonių pasitikėjimą, o ne technines sistemas. Sustokite ir paklauskite mokinių, ar jie prisimena situaciją, kai kažkas bandė juos apgauti internete.',
        downloads: {
          video: {
            filename: 'Kas yra socialinė inžinerija',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Kas yra socialinė inžinerija - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal: 'Padėti mokiniams suprasti, kodėl užpuolikai naudoja socialinę inžineriją, tyrinėjant psichologinius ir emocinius svertus, dėl kurių žmonės tampa pažeidžiami, ir praktikuojant kritinį mąstymą, kai jaučiamas spaudimas.',
      bundle: {
        filename: 'Socialinė inžinerija - paketas - 2 dalis',
      },
      included: {
        materials: [
          {
            // ID: 5.2.1
            kind: 'Scenarijų kortelės',
            name: 'Užpuolikų taktikos',
            filename: 'Scenarijų kortelės - Užpuolikų taktikos',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.2.2
            kind: 'Scenarijų kortelės',
            name: 'Emocinės manipuliacijos dėlionė',
            filename: 'Scenarijų kortelės - Emocinės manipuliacijos dėlionė',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.2.3
            kind: 'Darbalapas',
            name: 'Kodėl socialinė inžinerija veikia',
            filename: 'Darbalapas - Kodėl socialinė inžinerija veikia',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Mąstyti kaip užpuolikas',
          },
          {
            title: 'Kasdienės situacijos, kuriose gali pasitaikyti socialinė inžinerija',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
    },
    {
      goal: 'Padėti mokiniams atpažinti socialinės inžinerijos bandymus identifikuojant dažnus įspėjimo ženklus ir suprantant skirtingus kontekstus, kuriuose šie išpuoliai gali įvykti, tiek internete, tiek ne.',
      bundle: {
        filename: 'Socialinė inžinerija - paketas - 3 dalis',
      },
      included: {
        materials: [
          {
            // ID: 5.3.2
            kind: 'Darbalapas',
            name: 'Sujunk taškus',
            filename: 'Darbalapas - Sujunk taškus',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Socialinės inžinerijos tipai',
          },
          {
            title: 'Socialinės inžinerijos atpažinimo praktika',
          },
          {
            title: 'Apibendrinimas – santrauka ir neoficialus vertinimas',
          },
        ],
      },
      featuredVideo: {
        // ID: 5.3.1
        title: 'Socialinės inžinerijos tipai',
        supportText:
          'Naudokite šį vaizdo įrašą, kad padėtumėte mokiniams atpažinti skirtingas socialinės inžinerijos formas: nuo sukčiavimo el. laiškais iki apsimetimo kitu telefonu. Sustokite aptarti, kurį tipą manytų sunkiausiai pastebimą ir kodėl.',
        downloads: {
          video: {
            filename: 'Socialinės inžinerijos tipai',
            ariaLabel: 'Atsisiųsti vaizdo įrašą',
          },
          subtitles: {
            filename: 'Socialinės inžinerijos tipai - Subtitrai',
            ariaLabel: 'Atsisiųsti subtitrus',
          },
        },
      },
    },
    {
      goal: 'Padėti mokiniams praktikuoti informacijos tikrinimą ir saugių atsakymų pasirinkimą bei įgalinti juos palaikyti kitus, kai susiduria su socialinės inžinerijos bandymais.',
      bundle: {
        filename: 'Socialinė inžinerija - paketas - 4 dalis',
      },
      included: {
        materials: [
          {
            // ID: 5.4.1
            kind: 'Paveikslėlis',
            name: 'Sustok, pagalvok, patikrink, paklausk',
            filename: 'Paveikslėlis - Sustok, pagalvok, patikrink, paklausk',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.4.2
            kind: 'Darbalapas',
            name: 'Sustok, pagalvok, patikrink, paklausk',
            filename: 'Darbalapas - Sustok, pagalvok, patikrink, paklausk',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.4.3
            kind: 'Scenarijų kortelės',
            name: 'Ką darytumei?',
            filename: 'Scenarijų kortelės - Ką darytumei',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.4.4
            kind: 'Vaidmenų kortelės',
            name: 'Prosocialus elgesys ar stebėtojo apatija',
            filename: 'Vaidmenų kortelės - Prosocialus elgesys ar stebėtojo apatija',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
          {
            // ID: 5.4.5
            kind: 'Darbalapas',
            name: 'Savęs ir kitų apsauga',
            filename: 'Darbalapas - Savęs ir kitų apsauga',
            ariaLabel: 'Atsisiųsti medžiagą',
          },
        ],
        activityPlan: [
          {
            title: 'Įvadas',
          },
          {
            title: 'Paprastas saugių sprendimų modelis',
          },
          {
            title: 'Saugių atsakymų praktika',
          },
          {
            title: 'Kitų apsauga ir atsakingas pilietiškumas',
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
  title: 'Sukčiavimo bylų rinkinys',
  subtitle: 'Tapk žinučių detektyvu! Ar sugebėsi atpažinti sukčiavimą el. laiškuose, pokalbiuose, SMS, skambučiuose ir net gyvai? Nuspręsk: Pasitikėti, Sustoti ir paklausti suaugusiojo arba Ignoruoti / Pranešti.',
  howItWorks: 'Kaip tai veikia',
  instruction: 'Perskaityk kiekvieną bylą. Ar galima pasitikėti? Ar turėtum sustoti ir paklausti patikimo suaugusiojo? O gal ignoruoti ir pranešti? Atkreipk dėmesį į spaudimą, keistas nuorodas ir prašymus pateikti privačią informaciją. Tada atpažink triuką, kurį panaudojo užpuolikas.',
  tip: 'Jei neesi tikras/tikra dėl kokios nors žinutės, peržvelk Detektyvo pastabas su patarimais, kaip atpažinti sukčiavimus.',
  tipLabel: 'Patarimas',
  startTitle: 'Sveiki, detektyve!',
  startDescription: 'Ištirsi {n} bylų: el. laiškus, pokalbius, SMS, skambučius ir net lankytojus. Kiekvienu atveju rinkis: pasitikėti, sustoti ir paklausti suaugusiojo arba ignoruoti / pranešti. Tada atpažink triuką. Sėkmės!',
  startButton: 'Pradėti tyrimą',
  caseProgress: 'Tyrimo eiga',
  trustButton: '👍 Pasitikėti',
  ignoreButton: '⚠️ Ignoruoti / Pranešti',
  nextCase: 'Kita byla →',
  completedTitle: 'Tyrimas baigtas!',
  completedDescription: 'Štai kaip sekėsi:',
  casesIdentified: 'iš {n} bylų atsakyta geriausiai',
  detectiveRankLabel: 'Detektyvo rangas',
  defaultRank: 'Pradedantysis detektyvas',
  defaultRankMessage: 'Toliau treniruokis, kad pakiltumei į aukštesnį lygį!',
  performanceSummary: 'Veiklos suvestinė',
  playAgain: 'Žaisti dar kartą',
  detectiveNotes: 'Detektyvo pastabos',
  detectiveTipsTitle: 'Patarimai, kaip išlikti saugiems internete',
  redFlags: [
    '🚩 Prašo slaptažodžių',
    '🚩 Netikri el. pašto adresai',
    '🚩 Per gerai, kad būtų tiesa – prizai',
    '🚩 Skubūs terminai ir grasinimai',
    '🚩 Įtartini atsisiuntimai',
    '🚩 Emocinė manipuliacija',
    '🚩 Keistos žinutės iš pažįstamų',
  ],
  proTip: 'Patarimas: Jei abejoji, prieš spausdamas(-a) nuorodas ar dalindamasis(-isi) informacija, paklausk patikimo suaugusiojo!',
  caseLabel: 'Byla',
  ofLabel: 'iš',
  fromLabel: 'Nuo',
  subjectLabel: 'Tema',
  messageLabel: 'Žinutė',
  rankRookie: '🥉 Pradedantysis detektyvas',
  rankRookieMsg: 'Tik pradedate savo tyrimą. Toliau treniruokitės, kad išmoktumėte atpažinti raudonas vėliavas!',
  rankJunior: '🥈 Jaunesnysis detektyvas',
  rankJuniorMsg: 'Geriau sekasi atpažinti įtartinas žinutes. Puiku!',
  rankSenior: '🥇 Vyresnysis detektyvas',
  rankSeniorMsg: 'Puikiai atpažįstate sukčiavimą ir apgaulę. Geras darbas!',
  rankMaster: '👑 Meistras detektyvas',
  rankMasterMsg: 'Esate sukčiavimo ekspertas(-ė)! Sugavote beveik visus triukus. Puiku!',
  correctLabel: 'Teisingai',
  incorrectLabel: 'Neteisingai',
  emailBadge: 'El. laiškas',
  chatBadge: 'Pokalbis',
  smsBadge: 'SMS',
  callBadge: 'Skambutis',
  personBadge: 'Gyvai',
  checkButton: '🛑 Sustoti ir paklausti suaugusiojo',
  actionTrust: 'Pasitikėti',
  actionCheck: 'Sustoti ir paklausti suaugusiojo',
  actionReport: 'Ignoruoti / Pranešti',
  bestLabel: 'Geriausias atsakymas!',
  safeLabel: 'Saugus pasirinkimas',
  bestAnswerTemplate: 'Geriausias atsakymas: {action}',
  safeNoteOverCautious: 'Atsargumas niekada nepakenkia. Šį kartą žinutė buvo tvarkinga, todėl galėjai ja pasitikėti.',
  safeNoteAskOnScam: 'Paklausti suaugusiojo – protingas žingsnis. Čia dar geriau neatsakyti ir pranešti.',
  safeNoteReportOnCheck: 'Ignoruoti – saugus žingsnis. Dar geriau paprašyti suaugusiojo patikrinti, ar tai tikra.',
  quizTitle: 'Atpažink triuką! Kokį triuką naudoja ši žinutė?',
  quizCorrectTemplate: '🔍 Taip! Triukas yra: {tactic}.',
  quizWrongTemplate: '🔍 Šįkart ne. Triukas yra: {tactic}.',
  trickLabel: 'Panaudotas triukas',
  wantLabel: 'Ko norėjo užpuolikas',
  tricksSpottedTemplate: '🔍 Atpažinta triukų: {n} iš {total}',
  safeCountTemplate: '🛡️ Saugūs pasirinkimai (ne geriausias atsakymas): {n}',
  stcaTitle: 'Sustok, pagalvok, patikrink, paklausk',
  stca: [
    { icon: '🛑', label: 'Sustok', text: 'Sustok prieš atsakant ar spaudžiant nuorodą.' },
    { icon: '🤔', label: 'Pagalvok', text: 'Ko jie nori? Kokį jausmą jie bando sukelti?' },
    { icon: '🔍', label: 'Patikrink', text: 'Ieškok įspėjamųjų ženklų. Pasitikrink kitu keliu pas tikrą žmogų ar tikroje svetainėje.' },
    { icon: '🧑‍🏫', label: 'Paklausk', text: 'Pasikalbėk su tėvais, mokytoju ar kitu patikimu suaugusiuoju.' },
  ],
  tactics: {
    urgency: { label: 'Skubėjimas', desc: 'Nori, kad skubėtum ir nepagalvotum.' },
    fear: { label: 'Baimė', desc: 'Išgąsdina, kad veiktum anksčiau nei pagalvosi.' },
    trust: { label: 'Pasitikėjimas ir draugystė', desc: 'Apsimeta draugu ar pagalbininku, kad nustotum saugotis.' },
    reward: { label: 'Prizas ar smalsumas', desc: 'Prizas ar staigmena sukelia smalsumą ar godumą, todėl paspaudi.' },
    authority: { label: 'Netikras autoritetas', desc: 'Apsimeta svarbiu asmeniu, todėl paklūsti.' },
    pity: { label: 'Gailestis', desc: 'Sukelia gailestį, todėl padedi be jokio patikrinimo.' },
  },
  wants: { information: 'Informacija', access: 'Prieiga', money: 'Pinigai' },

  scenarios: [
    {
      id: 1,
      from: 'Prize Center <winner@free-prizes.net>',
      subject: 'Laimėjote 1 000 $!',
      message: 'Sveikiname! Buvote atrinktas(-a) kaip mūsų laimingasis laimėtojas! Spauskite čia, kad gautumėte 1 000 $ prizą. Tiesiog įveskite savo tėvų banko duomenis.',
      explanation: 'Tai klasikinis sukčiavimas! Tikri prizai nereikalauja banko duomenų. El. pašto adresas taip pat atrodo netikras.',
    },
    {
      id: 2,
      from: 'BestFriend_99',
      message: 'Ei! Patikrink šią puikią svetainę, kurią radau: www.free-vbucks-4real.com — gali gauti neribotą kiekį V-Bucks!',
      explanation: 'Net jei atrodo, kad tai iš draugo, jo paskyra galėjo būti nulaužta. Nemokamų V-Bucks svetainės visada yra sukčiavimas.',
    },
    {
      id: 3,
      from: 'School Admin <admin@your-school.edu>',
      subject: 'Namų darbų priminimas',
      message: 'Tik priminimas, kad jūsų gamtos mokslų projektas turi būti pateiktas kitą penktadienį. Išsamesnę informaciją rasite klasės portale.',
      explanation: 'Tai įprastas mokyklos el. laiškas. Jis atsiųstas tikru mokyklos adresu, neprašo asmeninės informacijos ir neturi keistų nuorodų.',
    },
    {
      id: 4,
      from: 'CoolGamer99',
      message: 'Aš esu žaidimų kūrėjas! Atsiųskite man savo prisijungimo duomenis ir nemokamai pridėsiu 1000 monetų prie jūsų paskyros!',
      explanation: 'Tikri žaidimų kūrėjai niekada neprašo jūsų slaptažodžio. Šis asmuo bando pavogti jūsų paskyrą!',
    },
    {
      id: 5,
      from: 'Security Team <alert@g00gle-security.com>',
      subject: 'SKUBU: Jūsų paskyra bus ištrinta!',
      message: 'Jūsų paskyra bus visam laikui ištrinta per 24 valandas, jei DABAR nepatvirtinsite savo slaptažodžio!',
      explanation: 'Atkreipkite dėmesį į netikrą domeną \'g00gle\' (su nuliais). Tikros įmonės niekada negrasina ištrinti jūsų paskyrą el. paštu ar neprašo slaptažodžių.',
    },
    {
      id: 6,
      from: 'Mama 💕',
      message: 'Ei, mielas(-a), ar galėtum pakeliui namo užsukti pieno? Myliu tave!',
      explanation: 'Tai įprasta šeimos nario žinutė. Nėra keistų nuorodų ar prašymų asmeninės informacijos.',
    },
    {
      id: 7,
      from: 'Charity Helper <donate@kids-help-now.org>',
      subject: 'Padėkite stokojančioms vaikams!',
      message: 'Prašome paaukoti dabar! Vaikai kenčia! Atsiųskite savo tėvų kreditinės kortelės numerį, kad nedelsdami padėtumėte!',
      explanation: 'Tikros labdaros organizacijos niekada neprašo kreditinių kortelių numerių el. paštu. Čia emocijos naudojamos apgauti.',
    },
    {
      id: 8,
      from: 'Nežinomas naudotojas',
      message: 'Sveiki! Aš naujas(-a) jūsų mokykloje. Koks jūsų namų adresas, kad galėčiau atvykti ir pabendrauti?',
      explanation: 'Niekada nesidalinkite savo adresu su nepažįstamaisiais internete, net jei jie teigia jus pažįstą. Tikras naujas mokinys klausimų užduotų mokykloje.',
    },
    {
      id: 9,
      from: 'Cloud Drive Alerts <alerts@cloud-drive-help.com>',
      subject: 'Bendrinamas dokumentas užrakintas',
      message: 'Kažkas bandė atidaryti jūsų failą. Patvirtinkite prisijungimą dabar, kad išlaikytumėte prieigą prie savo debesies dokumentų.',
      explanation: 'Šis pranešimas sukelia paniką ir verčia prisijungti per įtartiną nuorodą. Vietoj to atidarykite tikrą programėlę tiesiogiai.',
    },
    {
      id: 10,
      from: 'Mokyklos biuras',
      message: 'Priminimas: rytoj mokykla baigia darbą anksčiau — 13:00 val. dėl darbuotojų mokymo. Žiūrėkite pranešimą tėvų portale.',
      explanation: 'Tai įprastas mokyklos atnaujinimas, kuris neprašo slaptažodžių, pinigų ar privačios paskyros informacijos.',
    },
    {
      id: 11,
      from: 'App Store Security <security@app-store-verify.net>',
      subject: 'Kvito problema: patvirtinkite kortelę dabar',
      message: 'Jūsų paskutinis pirkimas nepavyko. Patvirtinkite visą kortelės numerį ir CVV per 10 minučių, kad išvengtumėte paskyros sustabdymo.',
      explanation: 'Tikros programėlių parduotuvės niekada neprašo pilnų kortelių duomenų ir CVV el. paštu. Skubūs terminai yra įprastas sukčiavimo triukas.',
    },
    {
      id: 12,
      from: 'School Library <library@your-school.edu>',
      subject: 'Rytoj skaitytojų klubo susitikimas',
      message: 'Priminimas: Skaitytojų klubas susitinka rytoj per pietus 12 kambaryje. Jei galite, atneškite savo dabartinę knygą.',
      explanation: 'Tai įprastas mokyklos priminimas iš patikimo adreso. Jis neprašo slaptažodžių ar privačių paskyros duomenų.',
    },
    {
      id: 13,
      from: 'Coach Rivera',
      message: 'Šiandien treniruotė prasideda 15 minučių vėliau dėl oro sąlygų. Atsineškite gertuvę.',
      explanation: 'Tai įprastas tvarkaraščio pakeitimas. Jis neprašo privačios informacijos ir nereikalauja nieko keisto.',
    },
    {
      id: 14,
      from: 'Student Portal <noreply@districtschools.org>',
      subject: 'Paskelbti nauji pažymiai',
      message: 'Nauji pažymiai dabar pasiekiami studentų portale. Atidarykite portalą iš įprastos mokyklos žymelės, kad juos peržiūrėtumėte.',
      explanation: 'Ši žinutė nukreipia jus į įprastą mokyklos portalą. Ji neprašo slaptažodžių, mokėjimų ar privačių duomenų.',
    },
    {
      id: 15,
      from: 'Nežinomas numeris',
      message: 'Siuntos pranešimas: Nepavyko pristatyti tavo siuntos. Per 24 valandas sumokėk 1,99 € mokestį naujam pristatymui užsakyti: parcel-pay-now.net/fee',
      explanation: 'Negali žinoti, ar siunta tikrai pakeliui, o nuoroda veda į keistą svetainę. Nespausk ir nemokėk. Paprašyk suaugusiojo patikrinti siuntą tikroje pristatymo svetainėje ar programėlėje.',
    },
    {
      id: 16,
      from: 'Nežinomas numeris (skambutis)',
      message: '„Labas! Čia žaidimo pagalba. Tavo paskyra nulaužta! Kad ją išgelbėčiau, atsiųsiu tau kodą žinute. Perskaityk man jį tuoj pat, greitai, kol įsilaužėliai neįsiveržė!“',
      explanation: 'Tikra žaidimo pagalba niekada neskambina ir neprašo kodo. Tas kodas yra tavo paskyros raktas. Padėk ragelį ir pasakyk suaugusiajam.',
    },
    {
      id: 17,
      from: 'Nepažįstamasis prie mokyklos durų',
      message: '„Labas! Atėjau taisyti „Wi-Fi“. Durys užrakintos. Gali mane įleisti? Greičiau, vėluoju!“',
      explanation: 'Tu šio žmogaus nepažįsti, o jis tave skubina. Nepažįstamojo įleidimas – triukas, vadinamas tailgating. Neatidaryk. Pasakyk mokytojui, kuris gali patikrinti, ar taisymo vizitas tikras.',
    },
    {
      id: 18,
      from: 'IT pagalba <helpdesk@your-school.edu>',
      subject: 'Mokyklos slaptažodžio galiojimas baigsis po 2 dienų',
      message: 'Sveiki, jūsų mokyklos slaptažodžio galiojimas baigsis po 2 dienų. Kad išsaugotumėte paskyrą, čia pasirinkite naują slaptažodį: your-school.edu/new-password',
      explanation: 'Tai gali būti tiesa, bet tikras būti negali, o žinutė stumia spustelėti nuorodą. Nenaudok nuorodos. Atidaryk mokyklos portalą iš įprasto žymeklio arba paklausk mokytojo, ar žinutė tikra.',
    },
    {
      id: 19,
      from: 'Mia 😄 (klasės draugė)',
      message: 'omg ar čia tu šitame vaizdo įraše?? 😂😂 pažiūrėk: vid-clips-now.net/mia',
      explanation: 'Draugų paskyros gali būti nulaužtos. Žinutė sukelia smalsumą, kad greitai paspaustum. Prieš spaudžiant ką nors, pasitikrink su Mia gyvai arba kitoje programėlėje.',
    },
    {
      id: 20,
      from: 'p. Evansas <evans@your-school.edu>',
      subject: 'Išvyka į muziejų: tėvų sutikimas',
      message: 'Sveiki visi, paprašykite tėvų pasirašyti sutikimą dėl išvykos į muziejų ir atneškite jį į mokyklą iki penktadienio. Be jo negalėsime nieko pasiimti. Ačiū!',
      explanation: 'Vien terminas nėra įspėjamasis ženklas. Šis laiškas atsiųstas mokyklos adresu, prašo popierinio sutikimo ir neprašo slaptažodžių, pinigų ar privačių duomenų.',
    },
    {
      id: 21,
      from: 'Sam (klasės draugas)',
      message: 'Sveikas! Ar jau padarei matematikos namų darbus? Rytoj atnešiu užrašus, palyginsim 😊',
      explanation: 'Tai įprastas draugų pokalbis. Nieko privataus neprašoma ir nėra keistų nuorodų.',
    },
  ],
}
