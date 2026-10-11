// ---------------------------------------------------------------------------
// Social Engineering (SE) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Social Engineering module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentSE = {
  aim:
    'Poskytnout základní znalosti o tom, co je sociální inženýrství, s důrazem na rizika, která přináší, a na zásady ochrany před ním.',
  objectives: [
    'Představit pojem sociální inženýrství se zaměřením na cíle útočníků.',
    'Vysvětlit různé podoby sociálního inženýrství a situace, ve kterých se můžou objevit.',
    'Rozvinout dovednost rozpoznávat techniky sociálního inženýrství a způsoby ochrany před nimi.',
  ],
  outcomes: [
    'Umím popsat, co je sociální inženýrství a jaké jsou jeho typy.',
    'Umím vysvětlit, proč útočníci sociální inženýrství používají.',
    'Umím uvést příklady situací, ve kterých k útokům sociálního inženýrství pravděpodobně dojde.',
    'Umím v zadaných situacích rozpoznat útoky pomocí sociálního inženýrství.',
    'Umím v zadaných situacích předvést způsoby ochrany před sociálním inženýrstvím a zdůvodnit svoje rozhodnutí.',
  ],
  parts: [
    {
      goal: 'Pomoct žákům pochopit, co je sociální inženýrství: nejdřív rozpoznat, jak se dá člověk ovlivnit nebo zmanipulovat v běžných situacích, a potom to propojit s digitálním prostředím a s jednáním útočníků.',
      bundle: {
        filename: 'Sociální inženýrství - balíček - Část 1',
      },
      included: {
        materials: [
          {
            // ID: 5.1.2
            kind: 'Obrázek',
            name: 'Hackování systémů versus napálení lidí',
            filename: 'Obrázek - Hackování systémů versus napálení lidí',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.1.3
            kind: 'Obrázky',
            name: 'Cíle útočníka',
            filename: 'Obrázky - Cíle útočníka',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.1.4
            kind: 'Kartičky se situacemi',
            name: 'Co útočník chce?',
            filename: 'Kartičky se situacemi - Co útočník chce',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.1.5
            kind: 'Kartičky s řešením',
            name: 'Co útočník chce?',
            filename: 'Kartičky s řešením - Co útočník chce',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.1.6
            kind: 'Pracovní list',
            name: 'Porozumění sociálnímu inženýrství',
            filename: 'Pracovní list - Porozumění sociálnímu inženýrství',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Představení pojmu sociální inženýrství',
          },
          {
            title: 'Co útočníci chtějí?',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 5.1.1
        title: 'Co je sociální inženýrství?',
        supportText:
          'Použijte video k představení sociálního inženýrství jako techniky, která zneužívá lidskou důvěru, ne technické systémy. Zastavte se a zeptejte se žáků, jestli si vzpomenou na situaci, kdy je někdo online zkoušel napálit.',
        downloads: {
          video: {
            filename: 'Co je sociální inženýrství',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Co je sociální inženýrství - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal: 'Pomoct žákům pochopit, proč útočníci sociální inženýrství používají: prozkoumat psychologické a citové páky, které lidi činí zranitelnými, a nacvičit si kritické myšlení ve chvíli, kdy na ně někdo tlačí.',
      bundle: {
        filename: 'Sociální inženýrství - balíček - Část 2',
      },
      included: {
        materials: [
          {
            // ID: 5.2.1
            kind: 'Kartičky se situacemi',
            name: 'Taktiky útočníků',
            filename: 'Kartičky se situacemi - Taktiky útočníků',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.2.2
            kind: 'Kartičky se situacemi',
            name: 'Skládačka citové manipulace',
            filename: 'Kartičky se situacemi - Skládačka citové manipulace',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.2.3
            kind: 'Pracovní list',
            name: 'Proč sociální inženýrství funguje',
            filename: 'Pracovní list - Proč sociální inženýrství funguje',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Myslet jako útočník',
          },
          {
            title: 'Běžné situace, kdy k sociálnímu inženýrství může dojít',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
    },
    {
      goal: 'Pomoct žákům rozpoznat pokusy o sociální inženýrství – naučit je všímat si běžných varovných signálů a chápat, v jakých situacích k těmto útokům může dojít, online i offline.',
      bundle: {
        filename: 'Sociální inženýrství - balíček - Část 3',
      },
      included: {
        materials: [
          {
            // ID: 5.3.2
            kind: 'Pracovní list',
            name: 'Sociální inženýrství: Spojovačka',
            filename: 'Pracovní list - Sociální inženýrství - Spojovačka',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Typy sociálního inženýrství',
          },
          {
            title: 'Nácvik rozpoznávání sociálního inženýrství',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 5.3.1
        title: 'Typy sociálního inženýrství',
        supportText:
          'Použijte video, aby žáci rozpoznali různé podoby sociálního inženýrství – od phishingových e-mailů po vydávání se za někoho po telefonu. Zastavte se a proberte, který typ by se podle nich odhaloval nejhůř a proč.',
        downloads: {
          video: {
            filename: 'Typy sociálního inženýrství',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Typy sociálního inženýrství - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal: 'Pomoct žákům nacvičit si ověřování informací a volbu bezpečných reakcí a povzbudit je, aby při setkání se sociálním inženýrstvím podpořili i druhé.',
      bundle: {
        filename: 'Sociální inženýrství - balíček - Část 4',
      },
      included: {
        materials: [
          {
            // ID: 5.4.1
            kind: 'Obrázek',
            name: 'Stop, Přemýšlej, Zkontroluj, Zeptej se',
            filename: 'Obrázek - Stop, Přemýšlej, Zkontroluj, Zeptej se',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.4.2
            kind: 'Pracovní list',
            name: 'Stop, přemýšlej, zkontroluj, zeptej se',
            filename: 'Pracovní list - Stop, přemýšlej, zkontroluj, zeptej se',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.4.3
            kind: 'Kartičky se situacemi',
            name: 'Co byste udělali?',
            filename: 'Kartičky se situacemi - Co byste udělali',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.4.4
            kind: 'Kartičky rolí',
            name: 'Pomoc druhým, nebo lhostejnost přihlížejících',
            filename: 'Kartičky rolí - Pomoc druhým, nebo lhostejnost přihlížejících',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 5.4.5
            kind: 'Pracovní list',
            name: 'Jak chráním sebe i druhé',
            filename: 'Pracovní list - Jak chráním sebe i druhé',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Jednoduchý model pro bezpečné rozhodování',
          },
          {
            title: 'Nácvik bezpečných reakcí',
          },
          {
            title: 'Ochrana druhých a odpovědné občanství',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
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
  title: 'Spisy o phishingu',
  subtitle: 'Staňte se detektivem zpráv! Poznáte podvody v e-mailech, chatech, SMS, hovorech i osobně? Rozhodněte: Důvěřovat, Zastavit a zeptat se dospělého, nebo Ignorovat / Nahlásit.',
  howItWorks: 'Jak to funguje',
  instruction: 'Přečtěte si každý spis. Dá se mu důvěřovat? Máte se zastavit a zeptat dospělého, kterému věříte? Nebo to ignorovat a nahlásit? Všímejte si tlaku, podivných odkazů a žádostí o soukromé údaje. Pak odhalte trik, který útočník použil.',
  tip: 'Když si u nějaké zprávy nejste jistí, podívejte se do Zápisků detektiva, kde najdete tipy, jak podvod poznat.',
  tipLabel: 'Tip',
  startTitle: 'Vítejte, detektive!',
  startDescription: 'Čeká vás {n} případů: e-maily, chaty, SMS, telefonáty i návštěvníci. U každého zvolte: důvěřovat, zastavit se a zeptat se dospělého, nebo ignorovat / nahlásit. Pak odhalte trik. Hodně štěstí!',
  startButton: 'Zahájit vyšetřování',
  caseProgress: 'Průběh vyšetřování',
  trustButton: '👍 Důvěřovat',
  ignoreButton: '⚠️ Ignorovat / Nahlásit',
  nextCase: 'Další případ →',
  completedTitle: 'Vyšetřování dokončeno!',
  completedDescription: 'Tady je, jak ti to šlo:',
  casesIdentified: 'z {n} případů s nejlepší odpovědí',
  detectiveRankLabel: 'Hodnost detektiva',
  defaultRank: 'Detektiv začátečník',
  defaultRankMessage: 'Trénujte dál a posuňte se výš!',
  performanceSummary: 'Přehled výkonu',
  playAgain: 'Hrát znovu',
  detectiveNotes: 'Zápisky detektiva',
  detectiveTipsTitle: 'Tipy, jak zůstat online v bezpečí',
  redFlags: [
    '🚩 Žádá o hesla',
    '🚩 Falešné e-mailové adresy',
    '🚩 Výhry, které znějí až moc dobře',
    '🚩 Tlak na čas a výhrůžky',
    '🚩 Podezřelé stahování',
    '🚩 Citová manipulace',
    '🚩 Podivné zprávy od lidí, které znáte',
  ],
  proTip: 'Tip navíc: Když máte pochybnosti, zeptejte se dospělého, kterému věříte, dřív než na něco kliknete nebo něco sdílíte!',
  caseLabel: 'Případ',
  ofLabel: 'z',
  fromLabel: 'Od',
  subjectLabel: 'Předmět',
  messageLabel: 'Zpráva',
  rankRookie: '🥉 Detektiv začátečník',
  rankRookieMsg: 'S vyšetřováním teprve začínáte. Trénujte dál a naučíte se varovné signály poznat!',
  rankJunior: '🥈 Detektiv junior',
  rankJuniorMsg: 'V rozpoznávání podezřelých zpráv se lepšíte. Dobrá práce!',
  rankSenior: '🥇 Detektiv senior',
  rankSeniorMsg: 'V odhalování phishingu a podvodů jste skvělí. Pěkná práce!',
  rankMaster: '👑 Mistr detektiv',
  rankMasterMsg: 'Jste expert na phishing! Zachytili jste skoro všechny triky. Vynikající!',
  correctLabel: 'Správně',
  incorrectLabel: 'Špatně',
  emailBadge: 'E-mail',
  chatBadge: 'Chat',
  smsBadge: 'SMS',
  callBadge: 'Telefonní hovor',
  personBadge: 'Osobně',
  checkButton: '🛑 Zastavit a zeptat se dospělého',
  actionTrust: 'Důvěřovat',
  actionCheck: 'Zastavit a zeptat se dospělého',
  actionReport: 'Ignorovat / Nahlásit',
  bestLabel: 'To je nejlepší odpověď!',
  safeLabel: 'Bezpečná volba',
  bestAnswerTemplate: 'Nejlepší odpověď: {action}',
  safeNoteOverCautious: 'Opatrnost nikdy neškodí. Tentokrát byla zpráva v pořádku, takže jste jí mohli důvěřovat.',
  safeNoteAskOnScam: 'Zeptat se dospělého je chytrý krok. Tady je ještě lepší nereagovat a nahlásit to.',
  safeNoteReportOnCheck: 'Ignorovat to je bezpečný krok. Ještě lepší je požádat dospělého, ať ověří, jestli je to pravé.',
  quizTitle: 'Odhalte trik! Jaký trik ta zpráva používá?',
  quizCorrectTemplate: '🔍 Ano! Trik je: {tactic}.',
  quizWrongTemplate: '🔍 Tentokrát ne. Trik je: {tactic}.',
  trickLabel: 'Použitý trik',
  wantLabel: 'Co útočník chtěl',
  tricksSpottedTemplate: '🔍 Odhalených triků: {n} z {total}',
  safeCountTemplate: '🛡️ Bezpečné volby (ne nejlepší odpověď): {n}',
  stcaTitle: 'Stop, Přemýšlej, Zkontroluj, Zeptej se',
  stca: [
    { icon: '🛑', label: 'Stop', text: 'Zastavte se, než odpovíte nebo kliknete.' },
    { icon: '🤔', label: 'Přemýšlej', text: 'Co ten člověk chce? Jaký pocit ve vás chce vyvolat?' },
    { icon: '🔍', label: 'Zkontroluj', text: 'Hledejte varovné signály. Ověřte si to jinou cestou u skutečné osoby nebo na skutečném webu.' },
    { icon: '🧑‍🏫', label: 'Zeptej se', text: 'Promluvte si s rodičem, učitelem nebo jiným dospělým, kterému věříte.' },
  ],
  tactics: {
    urgency: { label: 'Tlak na čas', desc: 'Chtějí, abyste spěchali a nezastavili se k přemýšlení.' },
    fear: { label: 'Strach', desc: 'Vystraší vás, ať jednáte dřív, než se zamyslíte.' },
    trust: { label: 'Důvěra a přátelství', desc: 'Tváří se jako kamarád nebo pomocník, ať přestanete být ve střehu.' },
    reward: { label: 'Výhra nebo zvědavost', desc: 'Výhra nebo překvapení vás zláká nebo vyláká zvědavostí, tak kliknete.' },
    authority: { label: 'Falešná autorita', desc: 'Tváří se jako někdo důležitý, tak poslechnete.' },
    pity: { label: 'Soucit', desc: 'Vzbudí ve vás lítost, tak pomůžete bez ověření.' },
  },
  wants: { information: 'Informace', access: 'Přístup', money: 'Peníze' },

  scenarios: [
    {
      id: 1,
      from: 'Prize Center <winner@free-prizes.net>',
      subject: 'Vyhráli jste 25 000 Kč!',
      message: 'Gratulujeme! Byli jste vybráni jako náš šťastný výherce! Klikněte sem a vyzvedněte si výhru 25 000 Kč. Stačí zadat bankovní údaje vašich rodičů.',
      explanation: 'Klasický podvod! Skutečné výhry po vás bankovní údaje nechtějí. I e-mailová adresa vypadá falešně.',
    },
    {
      id: 2,
      from: 'BestFriend_99',
      message: 'Hele! Mrkni na tuhle super stránku, co jsem našel: www.free-vbucks-4real.com — dají se tam získat V-Bucks zadarmo!',
      explanation: 'I když to vypadá, že je to od kamaráda, jeho účet mohl někdo napadnout. Stránky s V-Bucks zdarma jsou vždycky podvod.',
    },
    {
      id: 3,
      from: 'School Admin <admin@your-school.edu>',
      subject: 'Připomínka domácího úkolu',
      message: 'Jen připomínám, že váš projekt z přírodovědy máte odevzdat příští pátek. Podrobnosti najdete na třídním portálu.',
      explanation: 'Běžný školní e-mail. Přišel ze skutečné školní adresy, nechce osobní údaje a neobsahuje podezřelé odkazy.',
    },
    {
      id: 4,
      from: 'CoolGamer99',
      message: 'Jsem herní vývojář! Pošli mi svoje přihlašovací údaje a přidám ti na účet 1 000 mincí zdarma!',
      explanation: 'Skuteční herní vývojáři vaše heslo nikdy nechtějí. Tenhle člověk se vám snaží ukrást účet!',
    },
    {
      id: 5,
      from: 'Security Team <alert@g00gle-security.com>',
      subject: 'NALÉHAVÉ: Váš účet bude smazán!',
      message: 'Váš účet bude do 24 hodin trvale smazán, pokud si HNED neověříte heslo!',
      explanation: 'Všimněte si falešné domény „g00gle“ (s nulami). Skutečné firmy vám smazáním účtu e-mailem nevyhrožují a hesla po vás nechtějí.',
    },
    {
      id: 6,
      from: 'Máma 💕',
      message: 'Ahoj miláčku, můžeš cestou domů koupit mléko? Mám tě ráda!',
      explanation: 'Běžná zpráva od někoho z rodiny. Žádné podezřelé odkazy ani žádosti o osobní údaje.',
    },
    {
      id: 7,
      from: 'Charity Helper <donate@kids-help-now.org>',
      subject: 'Pomozte dětem v nouzi!',
      message: 'Přispějte hned! Děti trpí! Pošlete číslo kreditní karty svých rodičů a pomozte okamžitě!',
      explanation: 'Skutečné charity čísla karet e-mailem nikdy nechtějí. Tohle na vás zkouší emoce.',
    },
    {
      id: 8,
      from: 'Neznámý uživatel',
      message: 'Ahoj! Jsem u vás ve škole nový. Jakou máte adresu, abych se mohl zastavit?',
      explanation: 'Adresu cizím lidem online nikdy neprozrazujte, ani když tvrdí, že vás znají. Skutečný nový spolužák by se zeptal ve škole.',
    },
    {
      id: 9,
      from: 'Cloud Drive Alerts <alerts@cloud-drive-help.com>',
      subject: 'Sdílený dokument je uzamčený',
      message: 'Někdo se pokusil otevřít váš soubor. Hned si ověřte přihlášení, ať si udržíte přístup ke svým dokumentům v cloudu.',
      explanation: 'Tahle zpráva vyvolává paniku a tlačí vás k přihlášení přes podezřelý odkaz. Místo toho si otevřete rovnou tu pravou aplikaci.',
    },
    {
      id: 10,
      from: 'Školní kancelář',
      message: 'Připomínka: zítra se škola zavírá už ve 13:00 kvůli školení zaměstnanců. Oznámení najdete v rodičovském portálu.',
      explanation: 'Běžná zpráva ze školy — nechce hesla, peníze ani soukromé údaje o účtu.',
    },
    {
      id: 11,
      from: 'App Store Security <security@app-store-verify.net>',
      subject: 'Problém s platbou: potvrďte kartu hned',
      message: 'Váš poslední nákup se nezdařil. Do 10 minut potvrďte celé číslo karty a CVV, jinak vám pozastavíme účet.',
      explanation: 'Skutečné obchody s aplikacemi po vás celé číslo karty ani CVV e-mailem nikdy nechtějí. Tlak na čas je běžný trik podvodníků.',
    },
    {
      id: 12,
      from: 'School Library <library@your-school.edu>',
      subject: 'Zítra schůzka čtenářského kroužku',
      message: 'Připomínka: Čtenářský kroužek se schází zítra o polední přestávce v učebně 12. Pokud můžete, vezměte si rozečtenou knihu.',
      explanation: 'Běžná školní připomínka z důvěryhodné adresy. Nechce hesla ani soukromé údaje k účtu.',
    },
    {
      id: 13,
      from: 'Coach Rivera',
      message: 'Trénink dneska kvůli počasí začíná o 15 minut později. Vezměte si láhev na pití.',
      explanation: 'Běžná zpráva o změně rozvrhu. Nechce soukromé údaje ani nic podezřelého.',
    },
    {
      id: 14,
      from: 'Student Portal <noreply@districtschools.org>',
      subject: 'Zveřejněny nové známky',
      message: 'V žákovském portálu jsou nové známky. Otevřete si portál přes záložku, kterou používáte běžně, a prohlédněte si je.',
      explanation: 'Tahle zpráva vás posílá na váš běžný školní portál. Nechce hesla, platby ani soukromé údaje.',
    },
    {
      id: 15,
      from: 'Neznámé číslo',
      message: 'Oznámení o zásilce: Nepodařilo se nám doručit váš balíček. Do 24 hodin zaplaťte poplatek 39 Kč za nové doručení: parcel-pay-now.net/fee',
      explanation: 'Nepoznáte, jestli vám nějaká zásilka opravdu jede, a odkaz vede na podivný web. Neklikejte ani neplaťte. Požádejte dospělého, ať zásilku zkontroluje na skutečném webu nebo v aplikaci dopravce.',
    },
    {
      id: 16,
      from: 'Neznámé číslo (telefonní hovor)',
      message: '„Dobrý den! Tady podpora hry. Váš účet byl nabourán! Abych ho zachránil, pošlu vám SMS s kódem. Řekněte mi ten kód hned, rychle, než se hackeři dostanou dovnitř!“',
      explanation: 'Skutečná podpora her nikdy nevolá a nežádá kód. Ten kód je klíč k vašemu účtu. Zavěste a řekněte to dospělému.',
    },
    {
      id: 17,
      from: 'Cizí člověk u školních dveří',
      message: '„Ahoj! Jdu opravit Wi-Fi. Dveře jsou zamčené. Pustíš mě dovnitř? Rychle, už jdu pozdě!“',
      explanation: 'Tohohle člověka neznáte a spěchá na vás. Pustit cizího dovnitř je trik, který se jmenuje tailgating. Neotvírejte. Řekněte to učiteli, který ověří, jestli opravář opravdu přijel.',
    },
    {
      id: 18,
      from: 'IT podpora <helpdesk@your-school.edu>',
      subject: 'Vašemu školnímu heslu za 2 dny vyprší platnost',
      message: 'Dobrý den, platnost vašeho školního hesla vyprší za 2 dny. Abyste účet neztratili, zvolte si nové heslo zde: your-school.edu/new-password',
      explanation: 'Může to být pravé, ale jistí si být nemůžete a zpráva vás tlačí ke kliknutí na odkaz. Odkaz nepoužívejte. Otevřete školní portál z obvyklé záložky, nebo se zeptejte učitele, jestli je zpráva pravá.',
    },
    {
      id: 19,
      from: 'Mia 😄 (spolužačka)',
      message: 'omg jsi to ty na tomhle videu?? 😂😂 mrkni: vid-clips-now.net/mia',
      explanation: 'Kamarádi mohou mít napadený účet. Zpráva vás láká, ať rychle kliknete. Než na cokoli kliknete, ověřte si to u Mii osobně nebo v jiné aplikaci.',
    },
    {
      id: 20,
      from: 'p. Dvořák <dvorak@your-school.edu>',
      subject: 'Výlet do muzea: souhlas rodičů',
      message: 'Ahoj všichni, požádejte rodiče, ať podepíšou souhlas s výletem do muzea, a přineste ho do školy do pátku. Bez něj vás nemůžeme vzít. Děkuji!',
      explanation: 'Termín sám o sobě není varovný signál. E-mail přišel ze školní adresy, chce papírový souhlas a nechce hesla, peníze ani soukromé údaje.',
    },
    {
      id: 21,
      from: 'Sam (spolužák)',
      message: 'Ahoj! Už máš hotové úkoly z matiky? Zítra přinesu poznámky, ať si je porovnáme 😊',
      explanation: 'Normální zpráva mezi kamarády. Nechce nic soukromého a nejsou v ní žádné podivné odkazy.',
    },
  ],
}
