// ---------------------------------------------------------------------------
// Social Engineering (SE) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Social Engineering module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentSE = {
  aim:
    'Poskytnout základní znalosti o tom, co je sociální inženýrství, s důrazem na rizika, která přináší, a na zásady ochrany před ním.',
  objectives: [
    'Představit pojem sociální inženýrství se zaměřením na cíle útočníků.',
    'Vysvětlit různé podoby sociálního inženýrství a situace, ve kterých se můžou objevit.',
    'Rozvinout dovednost rozpoznávat techniky sociálního inženýrství a způsoby ochrany před nimi.',
  ],
  outcomes: [
    'Umím popsat, co je sociální inženýrství a jaké jsou jeho typy.',
    'Umím vysvětlit, proč útočníci sociální inženýrství používají.',
    'Umím uvést příklady situací, ve kterých k útokům sociálního inženýrství pravděpodobně dojde.',
    'Umím v zadaných situacích rozpoznat útoky pomocí sociálního inženýrství.',
    'Umím v zadaných situacích předvést způsoby ochrany před sociálním inženýrstvím a zdůvodnit svoje rozhodnutí.',
  ],
  parts: [
    {
      goal: 'Pomoct žákům pochopit, co je sociální inženýrství: nejdřív rozpoznat, jak se dá člověk ovlivnit nebo zmanipulovat v běžných situacích, a potom to propojit s digitálním prostředím a s jednáním útočníků.',
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
            kind: 'Obrázek',
            name: 'Cíle útočníka',
            filename: 'Obrázek - Cíle útočníka',
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
            kind: 'Kartičky s řešením',
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
            title: 'Úvod: ovlivňování a přesvědčování v běžném životě',
          },
          {
            title: 'Představení pojmu sociální inženýrství',
          },
          {
            title: 'Co útočníci chtějí?',
          },
          {
            title: 'Závěr: shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 5.1.1
        title: 'Co je sociální inženýrství?',
        supportText:
          'Použijte video k představení sociálního inženýrství jako techniky, která zneužívá lidskou důvěru, ne technické systémy. Zastavte se a zeptejte se žáků, jestli si vzpomenou na situaci, kdy je někdo online zkoušel napálit.',
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
      goal: 'Pomoct žákům pochopit, proč útočníci sociální inženýrství používají: prozkoumat psychologické a citové páky, které lidi činí zranitelnými, a nacvičit si kritické myšlení ve chvíli, kdy na ně někdo tlačí.',
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
            title: 'Úvod: lidé versus systémy',
          },
          {
            title: 'Myslet jako útočník',
          },
          {
            title: 'Běžné situace, kdy k sociálnímu inženýrství může dojít',
          },
          {
            title: 'Závěr: shrnutí a neformální hodnocení',
          },
        ],
      },
    },
    {
      goal: 'Pomoct žákům rozpoznat pokusy o sociální inženýrství – naučit je všímat si běžných varovných signálů a chápat, v jakých situacích k těmto útokům může dojít, online i offline.',
      bundle: {
        filename: 'Sociální inženýrství - balíček - Část 3',
      },
      included: {
        materials: [
          {
            // ID: 5.3.2
            kind: 'Pracovní list',
            name: 'Spojovačka',
            filename: 'Pracovní list - Spojovačka',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod: kde k sociálnímu inženýrství může dojít?',
          },
          {
            title: 'Typy sociálního inženýrství',
          },
          {
            title: 'Nácvik rozpoznávání sociálního inženýrství',
          },
          {
            title: 'Závěr: shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 5.3.1
        title: 'Typy sociálního inženýrství',
        supportText:
          'Použijte video, aby žáci rozpoznali různé podoby sociálního inženýrství – od phishingových e-mailů po vydávání se za někoho po telefonu. Zastavte se a proberte, který typ by se podle nich odhaloval nejhůř a proč.',
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
      goal: 'Pomoct žákům nacvičit si ověřování informací a volbu bezpečných reakcí a povzbudit je, aby při setkání se sociálním inženýrstvím podpořili i druhé.',
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
            name: 'Jak chráním sebe i druhé',
            filename: 'Pracovní list - Jak chráním sebe i druhé',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod: od rozpoznání k reakci',
          },
          {
            title: 'Jednoduchý model pro bezpečné rozhodování',
          },
          {
            title: 'Nácvik bezpečných reakcí',
          },
          {
            title: 'Ochrana druhých',
          },
          {
            title: 'Závěr: shrnutí a neformální hodnocení',
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
  title: 'Spisy o phishingu',
  subtitle: 'Staňte se detektivem zpráv! Poznáte podvody a phishingové triky? Přečtěte si každou zprávu a rozhodněte: Důvěřovat, nebo Ignorovat / Nahlásit.',
  howItWorks: 'Jak to funguje',
  instruction: 'Přečtěte si každý spis se zprávou a rozhodněte, jestli je důvěryhodná, nebo jestli ji ignorovat a nahlásit. Všímejte si tlaku na čas, podezřelých odkazů a žádostí o soukromé údaje.',
  tip: 'Když si u nějaké zprávy nejste jistí, podívejte se do Zápisků detektiva, kde najdete tipy, jak podvod poznat.',
  tipLabel: 'Tip',
  startTitle: 'Vítejte, detektive!',
  startDescription: 'Čeká vás 14 podezřelých zpráv. Vaším úkolem je u každé rozhodnout, jestli je důvěryhodná, nebo jestli ji ignorovat a nahlásit. Hodně štěstí!',
  startButton: 'Zahájit vyšetřování',
  caseProgress: 'Průběh vyšetřování',
  trustButton: '👍 Důvěřovat',
  ignoreButton: '⚠️ Ignorovat / Nahlásit',
  nextCase: 'Další případ →',
  completedTitle: 'Vyšetřování dokončeno!',
  completedDescription: 'Tady je, jak ti to šlo:',
  casesIdentified: 'ze 14 případů určeno správně',
  detectiveRankLabel: 'Hodnost detektiva',
  defaultRank: 'Detektiv začátečník',
  defaultRankMessage: 'Trénujte dál a posuňte se výš!',
  performanceSummary: 'Přehled výkonu',
  playAgain: 'Hrát znovu',
  detectiveNotes: 'Zápisky detektiva',
  detectiveTipsTitle: 'Tipy, jak zůstat online v bezpečí',
  redFlags: [
    '🚩 Žádá o hesla',
    '🚩 Falešné e-mailové adresy',
    '🚩 Výhry, které znějí až moc dobře',
    '🚩 Tlak na čas a výhrůžky',
    '🚩 Podezřelé stahování',
    '🚩 Citová manipulace',
  ],
  proTip: 'Tip navíc: Když máte pochybnosti, zeptejte se dospělého, kterému věříte, dřív než na něco kliknete nebo něco sdílíte!',
  caseLabel: 'Případ',
  ofLabel: 'z',
  fromLabel: 'Od',
  subjectLabel: 'Předmět',
  messageLabel: 'Zpráva',
  rankRookie: '🥉 Detektiv začátečník',
  rankRookieMsg: 'S vyšetřováním teprve začínáte. Trénujte dál a naučíte se varovné signály poznat!',
  rankJunior: '🥈 Detektiv junior',
  rankJuniorMsg: 'V rozpoznávání podezřelých zpráv se lepšíte. Dobrá práce!',
  rankSenior: '🥇 Detektiv senior',
  rankSeniorMsg: 'V odhalování phishingu a podvodů jste skvělí. Pěkná práce!',
  rankMaster: '👑 Mistr detektiv',
  rankMasterMsg: 'Jste expert na phishing! Zachytili jste skoro všechny triky. Vynikající!',
  correctLabel: 'Správně',
  incorrectLabel: 'Špatně',
  scenarios: [
    {
      id: 1,
      type: 'email',
      from: 'Prize Center <winner@free-prizes.net>',
      subject: 'Vyhráli jste 25 000 Kč!',
      message: 'Gratulujeme! Byli jste vybráni jako náš šťastný výherce! Klikněte sem a vyzvedněte si výhru 25 000 Kč. Stačí zadat bankovní údaje vašich rodičů.',
      correct: 'ignore-report',
      explanation: 'Klasický podvod! Skutečné výhry po vás bankovní údaje nechtějí. I e-mailová adresa vypadá falešně.',
      tactic: 'Lákadlo a tlak na čas',
    },
    {
      id: 2,
      type: 'chat',
      from: 'BestFriend_2024',
      message: 'Hele! Mrkni na tuhle super stránku, co jsem našel: www.free-vbucks-4real.com — dají se tam získat V-Bucks zadarmo!',
      correct: 'ignore-report',
      explanation: 'I když to vypadá, že je to od kamaráda, jeho účet mohl někdo napadnout. Stránky s V-Bucks zdarma jsou vždycky podvod.',
      tactic: 'Zneužití důvěry',
    },
    {
      id: 3,
      type: 'email',
      from: 'School Admin <admin@your-school.edu>',
      subject: 'Připomínka domácího úkolu',
      message: 'Jen připomínám, že váš projekt z přírodovědy máte odevzdat příští pátek. Podrobnosti najdete na třídním portálu.',
      correct: 'trust',
      explanation: 'Běžný školní e-mail. Přišel ze skutečné školní domény, nechce osobní údaje a neobsahuje podezřelé odkazy.',
      tactic: 'Žádný — je v pořádku',
    },
    {
      id: 4,
      type: 'chat',
      from: 'CoolGamer99',
      message: 'Jsem herní vývojář! Pošli mi svoje přihlašovací údaje a přidám ti na účet 1 000 mincí zdarma!',
      correct: 'ignore-report',
      explanation: 'Skuteční herní vývojáři vaše heslo nikdy nechtějí. Tenhle člověk se vám snaží ukrást účet!',
      tactic: 'Vydávání se za autoritu',
    },
    {
      id: 5,
      type: 'email',
      from: 'Security Team <alert@g00gle-security.com>',
      subject: 'NALÉHAVÉ: Váš účet bude smazán!',
      message: 'Váš účet bude do 24 hodin trvale smazán, pokud si HNED neověříte heslo!',
      correct: 'ignore-report',
      explanation: 'Všimněte si falešné domény „g00gle“ (s nulami). Skutečné firmy vám smazáním účtu e-mailem nevyhrožují a hesla po vás nechtějí.',
      tactic: 'Strach a tlak na čas',
    },
    {
      id: 6,
      type: 'chat',
      from: 'Máma 💕',
      message: 'Ahoj miláčku, můžeš cestou domů koupit mléko? Mám tě ráda!',
      correct: 'trust',
      explanation: 'Běžná zpráva od někoho z rodiny. Žádné podezřelé odkazy ani žádosti o osobní údaje.',
      tactic: 'Žádný — je v pořádku',
    },
    {
      id: 7,
      type: 'email',
      from: 'Charity Helper <donate@kids-help-now.org>',
      subject: 'Pomozte dětem v nouzi!',
      message: 'Přispějte hned! Děti trpí! Pošlete číslo kreditní karty svých rodičů a pomozte okamžitě!',
      correct: 'ignore-report',
      explanation: 'Skutečné charity čísla karet e-mailem nikdy nechtějí. Tohle na vás zkouší emoce.',
      tactic: 'Citová manipulace',
    },
    {
      id: 8,
      type: 'chat',
      from: 'Neznámý uživatel',
      message: 'Ahoj! Jsem u vás ve škole nový. Jakou máte adresu, abych se mohl zastavit?',
      correct: 'ignore-report',
      explanation: 'Adresu cizím lidem online nikdy neprozrazujte, ani když tvrdí, že vás znají. Skutečný nový spolužák by se zeptal ve škole.',
      tactic: 'Pretexting',
    },
    {
      id: 9,
      type: 'email',
      from: 'Cloud Drive Alerts <alerts@cloud-drive-help.com>',
      subject: 'Sdílený dokument je uzamčený',
      message: 'Někdo se pokusil otevřít váš soubor. Hned si ověřte přihlášení, ať si udržíte přístup ke svým dokumentům v cloudu.',
      correct: 'ignore-report',
      explanation: 'Tahle zpráva vyvolává paniku a tlačí vás k přihlášení přes podezřelý odkaz. Místo toho si otevřete rovnou tu pravou aplikaci.',
      tactic: 'Strach a tlak na čas',
    },
    {
      id: 10,
      type: 'chat',
      from: 'Školní kancelář',
      message: 'Připomínka: zítra se škola zavírá už ve 13:00 kvůli školení zaměstnanců. Oznámení najdete v rodičovském portálu.',
      correct: 'trust',
      explanation: 'Běžná zpráva ze školy — nechce hesla, peníze ani soukromé údaje o účtu.',
      tactic: 'Žádný — je v pořádku',
    },
    {
      id: 11,
      type: 'email',
      from: 'App Store Security <security@app-store-verify.net>',
      subject: 'Problém s platbou: potvrďte kartu hned',
      message: 'Váš poslední nákup se nezdařil. Do 10 minut potvrďte celé číslo karty a CVV, jinak vám pozastavíme účet.',
      correct: 'ignore-report',
      explanation: 'Skutečné obchody s aplikacemi po vás celé číslo karty ani CVV e-mailem nikdy nechtějí. Tlak na čas je běžný trik podvodníků.',
      tactic: 'Krádež peněz',
    },
    {
      id: 12,
      type: 'email',
      from: 'School Library <library@your-school.edu>',
      subject: 'Zítra schůzka čtenářského kroužku',
      message: 'Připomínka: Čtenářský kroužek se schází zítra o polední přestávce v učebně 12. Pokud můžete, vezměte si rozečtenou knihu.',
      correct: 'trust',
      explanation: 'Běžná školní připomínka z důvěryhodné domény, bez žádosti o hesla nebo soukromé údaje k účtu.',
      tactic: 'Žádný — je v pořádku',
    },
    {
      id: 13,
      type: 'chat',
      from: 'Coach Rivera',
      message: 'Trénink dneska kvůli počasí začíná o 15 minut později. Vezměte si láhev na pití.',
      correct: 'trust',
      explanation: 'Běžná zpráva o změně rozvrhu — nechce citlivé údaje ani žádnou podezřelou akci.',
      tactic: 'Žádný — je v pořádku',
    },
    {
      id: 14,
      type: 'email',
      from: 'Student Portal <noreply@districtschools.org>',
      subject: 'Zveřejněny nové známky',
      message: 'V žákovském portálu jsou nové známky. Otevřete si portál přes záložku, kterou používáte běžně, a prohlédněte si je.',
      correct: 'trust',
      explanation: 'Tahle zpráva vás posílá na váš běžný školní portál a nechce po vás ve zprávě hesla, platby ani soukromé údaje.',
      tactic: 'Žádný — je v pořádku',
    },
  ],
}
