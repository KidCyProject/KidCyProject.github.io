// ---------------------------------------------------------------------------
// Malware (MW) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Malware module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentMW = {
  aim:
    'Poskytnout základní znalosti o tom, co je malware, jaká přináší rizika a jaké jsou zásady ochrany před ním.',
  objectives: [
    'Představit, co je malware a jaké jsou jeho typy.',
    'Vysvětlit, jak se malware chová a podle čeho poznáme, že je zařízení nakažené.',
    'Rozvinout dovednosti pro ochranu před riziky spojenými s malwarem.',
  ],
  outcomes: [
    'Umím popsat, co je malware, a rozpoznat ho v zadaných situacích.',
    'Umím vysvětlit různé typy malwaru, jak se chovají a podle čeho poznám, že je moje zařízení nakažené.',
    'Umím v zadaných situacích předvést způsoby ochrany před nákazou malwarem a zdůvodnit svoje rozhodnutí.',
  ],
  parts: [
    {
      goal: 'Pomoct žákům pochopit pojem malware.',
      bundle: {
        filename: 'Malware - balíček - Část 1',
      },
      included: {
        materials: [
          {
            // ID: 6.1.1
            kind: 'Obrázek',
            name: 'Malicious + software = malware',
            filename: 'Obrázek - Malicious + software = malware',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.1.2
            kind: 'Obrázek',
            name: 'Co je škodlivé?',
            filename: 'Obrázek - Co je škodlivé',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.1.4
            kind: 'Pracovní list',
            name: 'Souvisí s malwarem, nebo ne?',
            filename: 'Pracovní list - Souvisí s malwarem, nebo ne',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Poznáváme malware',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.1.3
        title: 'Co je malware?',
        supportText:
          'Použijte video k představení malwaru jako softwaru, který je vytvořený tak, aby škodil. Dáte tím žákům základ, než se pustí do jednotlivých typů. Zastavte se a zeptejte se, co už o počítačových virech vědí nebo slyšeli.',
        downloads: {
          video: {
            filename: 'Co je malware',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Co je malware - Titulky',
            ariaLabel: 'Stáhnout titulky',
          },
        },
      },
    },
    {
      goal: 'Představit běžné typy malwaru.',
      bundle: {
        filename: 'Malware - balíček - Část 2',
      },
      included: {
        materials: [
          {
            // ID: 6.2.2
            kind: 'Schéma',
            name: 'Sada mincí',
            filename: 'Schéma - Sada mincí',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.2.3
            kind: 'Schéma',
            name: 'Herní plán: Uzly',
            filename: 'Schéma - Herní plán - Uzly',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Typy malwaru',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.2.1
        title: 'Seznámení s typy malwaru',
        supportText:
          'Použijte video, aby žáci získali jasný přehled o jednotlivých typech malwaru a o tom, čím se každý liší. Zastavte se a krátce proberte, který typ podle nich představuje největší riziko a proč.',
        downloads: {
          video: {
            filename: 'Seznámení s typy malwaru',
            ariaLabel: 'Stáhnout video',
          },
          subtitles: {
            filename: 'Seznámení s typy malwaru - Titulky',
            ariaLabel: 'Stáhnout titulky' },
        },
      },
    },
    {
      goal: 'Poskytnout přehled vlastností malwaru, podle kterých ho lze rozpoznat a odhalit.',
      bundle: {
        filename: 'Malware - balíček - Část 3',
      },
      included: {
        materials: [
          {
            // ID: 6.3.1
            kind: 'Text ke čtení',
            name: 'Jak poznat malware',
            filename: 'Text ke čtení - Jak poznat malware',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.3.2
            kind: 'Plakát',
            name: 'Sedm příznaků',
            filename: 'Plakát - Sedm příznaků',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.3.3
            kind: 'Pracovní list',
            name: 'Seznam příznaků',
            filename: 'Pracovní list - Seznam příznaků',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Pátrání po malwaru',
          },
          {
            title: 'Závěr – shrnutí a neformální hodnocení',
          },
        ],
      },
    },
    {
      goal: 'Pomoct žákům pochopit ochranná opatření proti malwaru.',
      bundle: {
        filename: 'Malware - balíček - Část 4',
      },
      included: {
        materials: [
          {
            // ID: 6.4.1
            kind: 'Situace',
            name: 'Malware a krádež dat',
            filename: 'Situace - Malware a krádež dat',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.4.2
            kind: 'Plakát',
            name: 'Co dělat a co nedělat',
            filename: 'Plakát - Co dělat a co nedělat',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.4.3
            kind: 'Obrázky',
            name: 'Doprovodné obrázky: Dávej pozor',
            filename: 'Obrázky - Doprovodné obrázky - Dávej pozor',
            ariaLabel: 'Stáhnout materiál',
          },
          {
            // ID: 6.4.4
            kind: 'Pracovní list',
            name: 'Štít proti malwaru',
            filename: 'Pracovní list - Štít proti malwaru',
            ariaLabel: 'Stáhnout materiál',
          },
        ],
        activityPlan: [
          {
            title: 'Úvod',
          },
          {
            title: 'Rozbor okolností nákazy malwarem',
          },
          {
            title: 'Základní ochranná opatření',
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
  title: 'Malwarový detektiv',
  subtitle: 'Jste analytik kyberbezpečnosti. Prohlížíte soubory, čtete e-maily, řešíte vyskakovací okna a kontrolujete oprávnění aplikací. Pak pojmenujete typy malwaru, odhalíte příznaky nákazy a vyberete správnou ochranu — celkem v 7 úrovních. Udržíte systém čistý?',
  howItWorks: 'Jak to funguje',
  instruction: 'Projděte 7 úrovní na svém virtuálním počítači. V úrovních 1–4 rozhodujete, jestli je soubor, e-mail, vyskakovací okno nebo aplikace bezpečná, nebo hrozba. V úrovni 5 pojmenujete typ malwaru. V úrovni 6 rozhodnete, jestli je problém s počítačem normální, nebo příznak nákazy. V úrovni 7 vyberete nejlepší ochranu. Po každé odpovědi si přečtěte vysvětlení.',
  tip: 'Malware se často maskuje jako něco neškodného. Všímejte si, odkud soubor nebo zpráva pochází, ne jen jak vypadá. Něco neškodného může vypadat strašidelně (třeba odpočet) a něco nebezpečného přátelsky.',
  tipLabel: 'Tip',
  welcomeTitle: 'Vítejte, analytiku!',
  welcomeDescription: 'Do vašeho počítače dorazily podezřelé soubory, e-maily a vyskakovací okna. Projděte 7 úrovní: najděte hrozby, pojmenujte malware, odhalte příznaky nákazy a vyberte správnou ochranu.',
  levels: [
    '💻 Úroveň 1 — Skener souborů',
    '📧 Úroveň 2 — E-mailová schránka',
    '🌐 Úroveň 3 — Vyskakovací okna prohlížeče',
    '🔒 Úroveň 4 — Oprávnění aplikací',
    '🔬 Úroveň 5 — Typy malwaru',
    '🩺 Úroveň 6 — Příznaky nákazy',
    '🛡️ Úroveň 7 — Ochrana',
  ],
  bootButton: 'Spustit počítač →',
  scoreLabel: 'Skóre',
  correctLabel: 'Správně',
  threatsCaughtLabel: 'Zachycené hrozby',
  keepFile: '✓ Ponechat soubor',
  quarantine: '🗑️ Karanténa',
  safeKeep: '✓ Bezpečné / Ponechat',
  threatRemove: '⚠️ Hrozba / Odstranit',
  nextButton: 'Další →',
  malwareTypesTitle: 'Typy malwaru',
  malwareTypesSubtitle: 'Běžné typy malwaru, na které si dát pozor',
  malwareTypes: [
    '🦠 Virus — připojuje se k souborům a šíří se',
    '🪱 Červ — sám se množí a šíří se sítěmi',
    '🐴 Trojský kůň — maskuje se jako užitečný program',
    '🔐 Ransomware — zamkne soubory, dokud nezaplatíte',
    '👁️ Spyware — tajně sleduje, co děláte',
    '📢 Adware — zahltí vás reklamami',
  ],
  securityGuideTitle: 'Bezpečnostní příručka',
  securityGuideSubtitle: 'Varovné signály, kterých si všímat',
  securityRedFlags: [
    '🚩 .exe, .bat, .vbs z neznámých zdrojů',
    '🚩 Špatně napsané nebo falešné domény odesílatele',
    '🚩 Falešná upozornění na viry v prohlížeči',
    '🚩 Aplikace požadující zbytečná oprávnění',
    '🚩 Výhry, peníze zdarma nebo naléhavé hrozby',
    '🚩 Odpočet, který vyvolává paniku',
    '🚩 Název souboru se dvěma příponami, např. foto.jpg.exe',
  ],
  goldenRule: 'Když máte pochybnosti, neklikejte. Obraťte se radši na IT podporu nebo na dospělého, kterému věříte.',
  levelCompleteTitle: 'Úroveň dokončena!',
  levelCompleteSubtitle: 'Pokračujte!',
  levelResultLabel: 'Výsledek úrovně',
  correctDecisionsLabel: 'správných rozhodnutí',
  continueButton: 'Pokračovat →',
  nextLevelButtonTemplate: 'Pokračovat na úroveň {n} →',
  viewResultsButton: 'Zobrazit celkové výsledky →',
  itemProgressTemplate: 'Případ {n} z {total}',
  finalSummaryTemplate: 'bodů · {correct} z {total} správných rozhodnutí',
  permsRequestingLabel: 'Tato aplikace žádá o následující oprávnění:',
  correctFeedback: '✅ Správně!',
  incorrectFeedback: '❌ Ne tak docela!',
  markLegitimate: '✓ Označit jako legitimní',
  reportPhishing: '⚠️ Nahlásit jako phishing',
  allowInstall: '✓ Povolit a nainstalovat',
  denyRemove: '🚫 Zamítnout a odstranit',
  closeDismiss: '✕ Zavřít vyskakovací okno',
  fileSourceLabel: 'Zdroj',
  fileSizeLabel: 'Velikost',
  fileAddedLabel: 'Přidáno',
  folderInbox: '📥 Doručené',
  folderSent: '📤 Odeslané',
  folderTrash: '🗑️ Koš',
  levelDone: [
    { title: 'Skener souborů — úroveň 1 dokončena!', sub: 'Zkontrolovali jste všechny soubory na ploše.' },
    { title: 'E-mailová schránka — úroveň 2 dokončena!', sub: 'Prošli jste všechny e-maily ve schránce.' },
    { title: 'Vyskakovací okna prohlížeče — úroveň 3 dokončena!', sub: 'Vyřešili jste všechna vyskakovací okna.' },
    { title: 'Oprávnění aplikací — úroveň 4 dokončena!', sub: 'Zkontrolovali jste všechny žádosti o oprávnění.' },
    { title: 'Typy malwaru — úroveň 5 dokončena!', sub: 'Pojmenovali jste typy malwaru.' },
    { title: 'Příznaky nákazy — úroveň 6 dokončena!', sub: 'Prověřili jste všechny problémy se zařízením.' },
    { title: 'Ochrana — úroveň 7 dokončena!', sub: 'Vybrali jste ochranná opatření.' },
  ],
  resultsTitle: 'Systém zabezpečen! 🛡️',
  resultsDescription: 'Vaše zpráva o kyberbezpečnosti je připravená.',
  accuracyLabel: 'Přesnost',
  threatsCaughtStat: 'Zachycené hrozby',
  threatsMissedStat: 'Přehlédnuté hrozby',
  analystRankLabel: 'Hodnost analytika',
  rankTrainee: '📘 Praktikant',
  rankTraineeMsg: 'Učte se dál! Otevřete si nápovědu a zkuste to znovu — zlepšíte se!',
  rankJunior: '🔍 Analytik junior',
  rankJuniorMsg: 'Dobrá snaha! Budujete si solidní schopnost malware odhalit. Cvik dělá mistra.',
  rankSenior: '🔐 Analytik senior',
  rankSeniorMsg: 'Skvělá práce! Většinu hrozeb jste odhalili. Trénujte oko dál na jemné varovné signály.',
  rankElite: '🛡️ Elitní kyberanalytik',
  rankEliteMsg: 'Vynikající práce! Zachytili jste skoro každou hrozbu. Instinkt pro digitální bezpečnost máte výborný.',
  playAgain: 'Hrát znovu',
  signNormal: '✓ Vypadá to normálně',
  signWarning: '⚠️ Varovný příznak',
  verdictSafe: 'Tohle je bezpečné.',
  verdictThreat: 'Tohle je hrozba.',
  verdictNormal: 'Tohle je normální.',
  verdictWarning: 'Tohle je varovný příznak.',
  rightAnswerTemplate: 'Správná odpověď: {answer}',
  typeNames: {
    virus: '🦠 Virus',
    worm: '🪱 Červ',
    trojan: '🐴 Trojský kůň',
    ransomware: '🔐 Ransomware',
    spyware: '👁️ Spyware',
    adware: '📢 Adware',
  },
  measures: {
    links: {
      label: '🔗 Neklikejte na podivné odkazy',
      why: 'Odkaz může vést na falešnou stránku nebo spustit stahování.',
    },
    trusted: {
      label: '🏪 Stahujte jen z důvěryhodných míst',
      why: 'Používejte oficiální weby a obchody s aplikacemi, ne kopie „zdarma“.',
    },
    update: { label: '🔄 Mějte aktualizovaný počítač i aplikace', why: 'Aktualizace zacelí díry, které malware využívá.' },
    antivirus: { label: '🛡️ Nainstalujte antivirus', why: 'Hledá malware a varuje vás.' },
    adult: {
      label: '🙋 Před instalací čehokoli se zeptejte dospělého',
      why: 'Důvěryhodný dospělý pomůže posoudit, jestli je program bezpečný.',
    },
    attachment: {
      label: '📎 Dejte si pozor na přílohy e-mailů',
      why: 'Přílohu otevřete jen tehdy, když ji čekáte a odesílatele znáte.',
    },
  },
  measuresTitle: 'Ochranná opatření',
  measuresSubtitle: 'Šest návyků, které zastaví většinu malwaru',
  infectionSignsTitle: 'Příznaky nákazy',
  infectionSignsSubtitle: 'Stopy, že zařízení může mít malware',
  infectionSigns: [
    '🪟 Z ničeho nic se objevují vyskakovací okna',
    '🐌 Obrazovka je hrozně pomalá',
    '❓ Objeví se podivné nové ikony nebo programy',
    '🌀 Hlasitě se roztočí ventilátor nebo počítač vydává divné zvuky',
    '💥 Vaše oblíbená hra nebo aplikace se najednou zavře',
    '📂 Domácí úkoly zmizí nebo se nedají otevřít',
    '✉️ Kamarádi říkají, že jim přišly e-maily od vás',
  ],
  infectionSignsNote: 'Příznak je stopa, ne důkaz. Počítač může být pomalý i proto, že instaluje aktualizaci. Dívejte se na celý příběh.',
  perLevelTitle: 'Váš výsledek v jednotlivých úrovních',
  practiceTemplate: '💡 Příště si procvičte: {level}',
  practicePerfect: '🌟 Dokonalý průchod — všechny úrovně!',
  typeCases: [
    {
      id: 1,
      icon: '🦠',
      text: 'Nina otevře soubor, který jí poslal kamarád. Brzy jsou poškozené i další soubory v jejím notebooku. Problém se šíří ze souboru na soubor, a to jen tehdy, když je otevře.',
      explanation: 'Virus se schová v souboru a kopíruje se do dalších souborů. Potřebuje soubor, ve kterém se skrývá, a někoho, kdo ho otevře.',
      tip: 'Virus se spustí, až když otevřete nakažený soubor. Neotevírejte soubory, které jste nečekali.',
    },
    {
      id: 2,
      icon: '🪱',
      text: 'Ve škole se nakazí jeden počítač. Nikdo na nic neklikne, ale za pár minut jsou nakažené a pomalé počítače v celé síti Wi-Fi.',
      explanation: 'Červ se šíří sám po sítích. Nepotřebuje soubor, ve kterém by se skryl, ani člověka, který by ho otevřel.',
      tip: 'Aktualizace zacelují díry, kterými se červi dostávají dovnitř.',
    },
    {
      id: 3,
      icon: '🐴',
      text: 'Leo nainstaluje „zrychlovač her“ zdarma. Vypadá užitečně, ale tajně otevře hackerovi cestu do jeho počítače. Sám se nekopíruje.',
      explanation: 'Trojský kůň předstírá, že je užitečný program. Sám se nešíří. Pustíte ho dovnitř sami.',
      tip: 'Programy instalujte jen z oficiálních míst. A nejdřív se zeptejte dospělého.',
    },
    {
      id: 4,
      icon: '🔐',
      text: 'Evě se nedají otevřít fotky ani domácí úkoly. Na obrazovce stojí: „Vaše soubory jsou zamčené. Zaplaťte a dostanete je zpět.“',
      explanation: 'Ransomware zamkne nebo smaže vaše soubory a žádá výkupné. Zaplacení nezaručí, že soubory dostanete zpět.',
      tip: 'Důležité soubory zálohujte. Hned to řekněte dospělému a neplaťte.',
    },
    {
      id: 5,
      icon: '👁️',
      text: 'Skrytý program v Tomášově notebooku nenápadně zaznamenává všechno, co píše, i hesla, a posílá to cizímu člověku.',
      explanation: 'Spyware tajně sleduje, co děláte, a krade soukromé údaje. Program, který zaznamenává každou stisknutou klávesu, se nazývá keylogger.',
      tip: 'Máte pocit, že vás někdo sleduje? Řekněte to dospělému a spusťte antivirovou kontrolu.',
    },
    {
      id: 6,
      icon: '📢',
      text: 'Poté, co si Míša nainstaluje aplikaci zdarma, vyskakují reklamy celý den: na ploše, v každém okně, i když je aplikace zavřená.',
      explanation: 'Adware vás zahlcuje reklamami, často aby si jeho autor vydělal. Je otravný a může vás zavést na nebezpečné stránky.',
      tip: 'Čtěte, co si aplikace zdarma chce nainstalovat. Aplikace, které zaplavují obrazovku reklamami, odstraňte.',
    },
  ],
  signCases: [
    {
      id: 1,
      icon: '🪟',
      text: 'Na Ninině obrazovce vyskakují okna s reklamami a výhrami. Žádné z nich neotevřela. Vracejí se, i když zavře prohlížeč.',
      explanation: 'Okna, která se objevují z ničeho nic, jsou typickým příznakem adwaru nebo jiného malwaru.',
      tip: 'Neklikejte na ně. Řekněte to dospělému a spusťte antivirovou kontrolu.',
    },
    {
      id: 2,
      icon: '❓',
      text: 'Leo najde na ploše ikony programů, které nikdy neinstaloval a nikdy předtím je neviděl.',
      explanation: 'Programy, které jste neinstalovali, mohou být malware, který se tam dostal sám. Podivné nové ikony jsou varovný příznak.',
      tip: 'Neznámé programy neotevírejte. Požádejte dospělého, ať je zkontroluje.',
    },
    {
      id: 3,
      icon: '📂',
      text: 'Evě zmizely domácí úkoly. Ty, které zbyly, se nedají otevřít a hlásí chybu.',
      explanation: 'Smazané nebo poškozené soubory, na které jste nesáhli, jsou varovný příznak. Soubory poškozuje třeba ransomware a některé viry.',
      tip: 'Hned to řekněte dospělému. Záloha souborů může zachránit vaši práci.',
    },
    {
      id: 4,
      icon: '✉️',
      text: 'Tomášovi kamarádi říkají: „Přišel nám od tebe divný e-mail s odkazem!“ Tomáš nic takového neposlal.',
      explanation: 'Když z vašeho účtu odcházejí e-maily bez vás, může ho ovládat někdo jiný, nebo je rozesílá malware ve vašem zařízení.',
      tip: 'Řekněte kamarádům, ať neklikají. Pak to oznamte dospělému a změňte si heslo.',
    },
    {
      id: 5,
      icon: '🌀',
      text: 'Míšin notebook je pomalý a ventilátor hlasitě hučí, ale žádný program nemá otevřený. Začalo to po spuštění souboru od cizího člověka.',
      explanation: 'Počítač, který se hodně namáhá, i když nic neděláte, může na pozadí spouštět malware.',
      tip: 'Buďte podezřívaví, když pomalý a hlučný počítač „nic nedělá“. Požádejte dospělého, ať ho zkontroluje.',
    },
    {
      id: 6,
      icon: '🐌',
      text: 'Adamův notebook je hodně pomalý. V okně stojí „Instaluji aktualizace… 63 %“.',
      explanation: 'Tohle je normální. Pomalost má jasný důvod: notebook instaluje aktualizace. Pomalý počítač sám o sobě není důkaz malwaru.',
      tip: 'Počkejte, až se aktualizace dokončí. Než začnete mít strach, zamyslete se, co se děje ještě.',
    },
    {
      id: 7,
      icon: '🎮',
      text: 'Ela hodinu hraje velkou 3D hru. Notebook se zahřeje a ventilátor hlasitě hučí.',
      explanation: 'Tohle je normální. Náročné hry nutí počítač pracovat naplno, takže se zahřívá a ventilátor se točí rychle.',
      tip: 'Hlasitý ventilátor a jasný důvod = normální. Hlasitý ventilátor a nic otevřeného = podezřelé.',
    },
    {
      id: 8,
      icon: '🆕',
      text: 'Honzovi pomohl tatínek nainstalovat novou kreslicí aplikaci z oficiálního obchodu. Na ploše je teď nová ikona.',
      explanation: 'Tohle je normální. Honza ví, odkud ikona pochází, protože aplikaci nainstaloval s pomocí dospělého.',
      tip: 'Nová ikona, kterou umíte vysvětlit, je v pořádku. Novou ikonu, kterou vysvětlit neumíte, nechte zkontrolovat.',
    },
  ],
  shieldCases: [
    {
      id: 1,
      icon: '🔗',
      text: 'Napíše vám cizí člověk: „Podívej se, kdo si prohlížel tvůj profil! Klikni sem!“',
      explanation: 'Podivné odkazy mohou vést na falešné stránky nebo spustit stahování malwaru. Nejlepší návyk je na ně neklikat.',
      tip: 'Nejste si jistí odkazem? Neklikejte. Zeptejte se dospělého.',
    },
    {
      id: 2,
      icon: '🏪',
      text: 'Chcete novou hru. Web, o kterém jste nikdy neslyšeli, ji nabízí zdarma, bez placení.',
      explanation: 'Kopie placených her zdarma často ukrývají malware. Hry získávejte jen z oficiálního webu nebo z důvěryhodného obchodu s aplikacemi.',
      tip: 'Kopie placených věcí „zdarma“ jsou návnada.',
    },
    {
      id: 3,
      icon: '🔄',
      text: 'Váš tablet už týdny hlásí „Jsou k dispozici aktualizace“. Vždycky klepnete na „Připomenout později“.',
      explanation: 'Aktualizace opravují bezpečnostní díry, které malware využívá. Nainstalujte je, jakmile to jde.',
      tip: 'Pokud dospělý souhlasí, zapněte automatické aktualizace.',
    },
    {
      id: 4,
      icon: '🙋',
      text: 'Na rodinném notebooku se objeví okno, které chce nainstalovat neznámý program. Maminka je ve vedlejším pokoji.',
      explanation: 'Než cokoli nainstalujete, zeptejte se dospělého. Pomůže posoudit, jestli je program bezpečný a z důvěryhodného zdroje.',
      tip: 'Zeptat se dospělého není hloupá otázka.',
    },
    {
      id: 5,
      icon: '📎',
      text: 'E-mail tvrdí, že je od doručovací firmy. Má přiložený soubor „faktura.zip“. Žádný balík jste nečekali.',
      explanation: 'Nečekané přílohy mohou ukrývat malware. Přílohu otevřete jen tehdy, když ji čekáte a odesílatele znáte.',
      tip: 'Nečekaná příloha? Neotvírejte ji. Zeptejte se odesílatele jinou cestou, nebo dospělého.',
    },
    {
      id: 6,
      icon: '🛡️',
      text: 'Rodinný počítač nemá žádný ochranný program. Chcete něco, co kontroluje soubory a varuje před malwarem.',
      explanation: 'Antivirus hledá malware a varuje vás. Je jednou z vrstev, které chrání váš počítač.',
      tip: 'Antivirus pomáhá, ale nenahradí opatrné návyky.',
    },
  ],
  levelMeta: [
    {
      title: 'Úroveň 1 ze 7 — Skener souborů',
      short: 'Skener souborů',
      task: 'Je tento soubor bezpečný, nebo ho dát do karantény?',
      app: '📁 Průzkumník souborů',
      msg: '🔍 Kontroluji soubor…',
    },
    {
      title: 'Úroveň 2 ze 7 — E-mailová schránka',
      short: 'E-mailová schránka',
      task: 'Je tento e-mail skutečný, nebo jde o phishing?',
      app: '📧 Pošta',
      msg: '📧 Čtu e-mail…',
    },
    {
      title: 'Úroveň 3 ze 7 — Vyskakovací okna prohlížeče',
      short: 'Vyskakovací okna',
      task: 'Kliknout na tlačítko, nebo okno zavřít?',
      app: '🌐 Prohlížeč',
      msg: '⚠️ Zachyceno vyskakovací okno!',
    },
    {
      title: 'Úroveň 4 ze 7 — Oprávnění aplikací',
      short: 'Oprávnění aplikací',
      task: 'Povolit tuto aplikaci, nebo ji zamítnout?',
      app: '⚙️ Správce aplikací',
      msg: '⚙️ Kontroluji oprávnění…',
    },
    {
      title: 'Úroveň 5 ze 7 — Typy malwaru',
      short: 'Typy malwaru',
      task: 'Který typ malwaru to je?',
      app: '🔬 Laboratoř malwaru',
      msg: '🔬 Zkoumám chování…',
    },
    {
      title: 'Úroveň 6 ze 7 — Příznaky nákazy',
      short: 'Příznaky nákazy',
      task: 'Je to normální, nebo varovný příznak malwaru?',
      app: '🩺 Kontrola zařízení',
      msg: '🩺 Kontroluji zařízení…',
    },
    {
      title: 'Úroveň 7 ze 7 — Ochrana',
      short: 'Ochrana',
      task: 'Které ochranné opatření sedí nejlépe?',
      app: '🛡️ Centrum zabezpečení',
      msg: '🛡️ Vybírám ochranu…',
    },
  ],
  files: [
    {
      id: 1,
      icon: '⚙️',
      name: 'FreeMinecraft_Crack.exe',
      type: 'Spustitelný soubor (.exe)',
      source: 'Staženo z: crack-games-free.ru',
      size: '14.2 MB',
      date: 'Dnes, 15:41',
      description: 'Instalátor, který slibuje Minecraft zdarma. Stažený z neoficiálního ruského webu.',
      explanation: 'Cracknuté instalátory her často ukrývají trojské koně a ransomware. Soubor .exe, podivný web a slib „cracku zdarma“ jsou varovné signály.',
      tip: 'Software stahujte jen z oficiálních webů.',
    },
    {
      id: 2,
      icon: '📄',
      name: 'History_Essay_Draft.docx',
      type: 'Dokument Word (.docx)',
      source: 'Vytvořeno lokálně na tomto zařízení',
      size: '48 KB',
      date: 'Včera, 19:15',
      description: 'Dokument Word, který jste si sami vytvořili do hodiny dějepisu.',
      explanation: 'Malý dokument Word vytvořený přímo v počítači je bezpečný. Má běžnou příponu, malou velikost a místní původ.',
      tip: 'U souborů .docx od cizích lidí buďte opatrní — můžou obsahovat škodlivá makra. Vlastní soubory jsou ale v pořádku.',
    },
    {
      id: 3,
      icon: '📜',
      name: 'speedup_your_pc.bat',
      type: 'Dávkový skript (.bat)',
      source: 'Přijato přes Discord DM od: xX_h4ck3r_Xx',
      size: '3.1 KB',
      date: 'Dnes, 11:02',
      description: 'Dávkový skript poslaný přes Discord neznámým uživatelem, který slibuje zrychlení počítače.',
      explanation: 'Soubory .bat umí spustit jakýkoli příkaz v počítači. Mohou nainstalovat malware nebo smazat soubory. Skripty od cizích lidí nikdy nespouštějte.',
      tip: 'Skripty .bat nebo .vbs nikdy nespouštějte od lidí, které neznáte a plně jim nevěříte, i když tvrdí, že jsou neškodné.',
    },
    {
      id: 4,
      icon: '🎵',
      name: 'Summer_Playlist.mp3',
      type: 'Zvukový soubor (.mp3)',
      source: 'Uloženo z desktopové aplikace Spotify',
      size: '8.7 MB',
      date: 'Před 3 dny',
      description: 'Hudební soubor uložený přes oficiální aplikaci Spotify.',
      explanation: 'Tohle je obyčejný hudební soubor z důvěryhodné aplikace. Soubory .mp3 nespouštějí programy, takže jsou bezpečné.',
      tip: 'Běžné mediální soubory (.mp3, .jpg, .mp4) jsou většinou bezpečné. Pozor dávejte jen na soubory, které svoji příponu maskují, třeba „song.mp3.exe“.',
    },
    {
      id: 5,
      icon: '⚙️',
      name: 'RegFix_Pro_Setup.exe',
      type: 'Spustitelný soubor (.exe)',
      source: 'Dodáno vyskakovací reklamou prohlížeče',
      size: '2.1 MB',
      date: 'Dnes, 14:18',
      description: '„Nástroj na opravu registru“, který nabídla vyskakovací reklama tvrdící, že máte poškozený počítač.',
      explanation: 'Falešné „opravy počítače“ z vyskakovacích reklam často skrývají adware a spyware. Skutečné opravné nástroje se takhle neprodávají.',
      tip: 'Skutečný antivirus se nikdy neinzeruje v náhodných vyskakovacích oknech.',
    },
    {
      id: 6,
      icon: '📸',
      name: 'Birthday_Party.jpg',
      type: 'Obrázkový soubor (.jpg)',
      source: 'Přijato přes WhatsApp od: babičky',
      size: '2.9 MB',
      date: 'Minulý týden',
      description: 'Fotka z vaší narozeninové oslavy, kterou poslala babička.',
      explanation: 'Fotka .jpg od někoho z rodiny, koho znáte, je bezpečná. Běžné obrázky od důvěryhodných kontaktů malware nejsou.',
      tip: 'Pozor na dvojité přípony jako „photo.jpg.exe“. Skutečný typ souboru ukazuje ta poslední část.',
    },
    {
      id: 7,
      icon: '📜',
      name: 'FREE_ROBUX_GENERATOR.vbs',
      type: 'Skript VBScript (.vbs)',
      source: 'Odkaz z komentáře na YouTube',
      size: '1.8 KB',
      date: 'Dnes, 9:55',
      description: 'Skript z komentáře na YouTube, který slibuje neomezené Robuxy do Robloxu.',
      explanation: 'Generátory „Robuxů zdarma“ neexistují. Jsou to podvody. Skript .vbs umí v počítači spustit škodlivé příkazy.',
      tip: 'Generátory herní měny zdarma jsou vždycky podvod. Existují jen proto, aby kradly účty, instalovaly malware, nebo obojí.',
    },
    {
      id: 8,
      icon: '📊',
      name: 'Science_Project_Data.xlsx',
      type: 'Tabulka Excel (.xlsx)',
      source: 'E-mail od: johnson.s@westridge-school.edu',
      size: '156 KB',
      date: 'Včera, 10:33',
      description: 'Soubor Excel s daty ke školnímu projektu, který poslal ověřený učitel.',
      explanation: 'Tahle tabulka je od vašeho učitele ze skutečné školní adresy. Typ i velikost souboru jsou běžné.',
      tip: 'Kancelářské soubory od cizích lidí mohou skrývat škodlivá makra. Než soubor otevřete, ověřte, kdo ho poslal.',
    },
    {
      id: 9,
      icon: '📸',
      name: 'Prazdninove_foto.jpg.exe',
      type: 'Program (.exe)',
      source: 'Poslal ho v chatu někdo, koho znáte jen z internetu',
      size: '1,4 MB',
      date: 'Dnes, 16:07',
      description: 'Soubor vypadá jako fotka z dovolené. Jeho název má dvě přípony: „.jpg“ a „.exe“.',
      explanation: 'Platí jen poslední přípona. Tento soubor končí na .exe, takže je to program, ne fotka. Útočníci dávají „.jpg“ dopředu, aby soubor vypadal jako obrázek.',
      tip: 'Čtěte název souboru až do konce. Pokud končí na .exe, je to program.',
    },
    {
      id: 10,
      icon: '⚙️',
      name: 'Minecraft_Launcher_Setup.exe',
      type: 'Instalátor (.exe)',
      source: 'Staženo z: minecraft.net (oficiální web)',
      size: '2,4 MB',
      date: 'Dnes, 17:30',
      description: 'Instalátor hry. Táta ho stáhl z oficiálního webu.',
      explanation: 'Soubor .exe není vždy špatný. Tento pochází z oficiálního webu výrobce a stáhl ho dospělý. Rozhoduje, odkud soubor je.',
      tip: 'I u bezpečného instalátoru platí: před instalací čehokoli se zeptejte dospělého.',
    },
  ],
  emails: [
    {
      id: 1,
      fromName: 'Tým IT bezpečnosti',
      fromAddr: 'security-alert@school-itsupport.xyz',
      subject: 'NALÉHAVÉ: Váš školní účet byl napaden — heslo si resetujte OKAMŽITĚ',
      body: `Milý žáku,

naše systémy zaznamenaly neoprávněný přístup k vašemu školnímu účtu z neznámého místa.

Heslo si musíte OKAMŽITĚ resetovat spuštěním přiloženého nástroje. Pokud do 30 minut nezareagujete, dojde k trvalému uzamčení účtu.

— Oddělení IT bezpečnosti`,
      attachment: 'PasswordReset_Tool.exe',
      explanation: 'Varovných signálů je hodně: divná adresa „.xyz“, spěch a soubor .exe. Skutečné IT oddělení pošle odkaz na přihlašovací stránku, ne program.',
      tip: 'Přišlo vám strašidelné bezpečnostní upozornění? Zavolejte IT na číslo, které už znáte. Kontakty z e-mailu nepoužívejte.',
    },
    {
      id: 2,
      fromName: 'Ms. Johnson',
      fromAddr: 'johnson.s@westridge-school.edu',
      subject: 'Přírodovědná soutěž — zadání projektu v příloze',
      body: `Ahoj třído,

v příloze najdete oficiální zadání projektu k nadcházející přírodovědné soutěži. Najdete v něm požadované části, pokyny k úpravě a termín odevzdání.

Hotový plakát a zprávu přineste do učebny 14 do pátku.

Kdyby cokoli, ozvěte se!

paní učitelka Johnsonová
Přírodovědná sekce, škola Westridge`,
      attachment: 'Science_Fair_Project_Brief.docx',
      explanation: 'Tohle je skutečný školní e-mail. Pochází ze školní adresy, dokument Word odpovídá tématu a nikdo nechce osobní údaje.',
      tip: 'Soubor .docx ze školní adresy vašeho učitele je bezpečný. Přesto si vždy ověřte celou adresu odesílatele, než něco otevřete.',
    },
    {
      id: 3,
      fromName: 'Lukáš (kamarád ze hry)',
      fromAddr: 'lucas.gamer99@gmail.com',
      subject: 'kámo spusť tohle, dá ti to nekonečný mince ve hře!!',
      body: `čau!!

našel jsem na netu tenhle šílenej skript, dá ti neomezený mince v Clash Royale. prostě spusť ten .bat a automaticky ti to hru upraví lol

brácha to zkoušel a fungovalo to. ale nikomu to neříkej

– Lukáš`,
      attachment: 'coin_hack_v3_FINAL.bat',
      explanation: 'I zpráva od kamaráda může nést malware. Lukášův účet může být napadený, nebo neví, že je soubor škodlivý. Soubor .bat, který „hackuje“ hru, je trik s trojským koněm. Útočník by mohl převzít kontrolu nad vaším počítačem.',
      tip: 'Skripty .bat ani .vbs nespouštějte od nikoho, ani od kamarádů. „Cheat“ skripty do online her jsou skoro vždycky přestrojený malware.',
    },
    {
      id: 4,
      fromName: 'Školní knihovna',
      fromAddr: 'library@westridge-school.edu',
      subject: 'Letní čtenářský program — váš seznam četby',
      body: `Ahoj,

děkujeme za přihlášení do našeho Letního čtenářského programu! V příloze najdete seznam četby sestavený podle vašeho věku a zájmů.

Kterýkoli z těchto titulů si můžete půjčit ve školní knihovně nebo si o něj napsat přes žákovský portál.

Příjemné čtení!

Tým školní knihovny Westridge`,
      attachment: 'Summer_Reading_List.pdf',
      explanation: 'Skutečný e-mail ze školní knihovny, poslaný ze školní adresy. Soubor .pdf je seznam četby. Nikdo nechce osobní údaje.',
      tip: 'Soubory PDF od lidí, které znáte, jsou většinou bezpečné. U PDF od cizích lidí buďte opatrní. Mohou skrývat skripty.',
    },
    {
      id: 5,
      fromName: 'CENTRUM UPOZORNĚNÍ NA VÝHRU',
      fromAddr: 'winner@free-prize-claim.net',
      subject: 'BYLI JSTE VYBRÁNI — VYZVEDNĚTE SI iPHONE HNED!!!',
      body: `GRATULUJEME!!!

Byli jste náhodně vybráni jako náš šťastný výherce! Pro vyzvednutí nového iPhonu vyplňte a odešlete přiložený formulář se svými osobními údaji a poplatkem za dopravu 129 Kč.

Odpovězte do 12 HODIN, jinak výhra propadne!

[VYZVEDNOUT VÝHRU →]`,
      attachment: 'WINNER_ClaimForm_URGENT.html',
      explanation: 'Podvod s výhrou a souborem .html. Po otevření se objeví falešná stránka, která ukradne vaše údaje a platební informace. Varovné signály: výhra, do které jste se nepřihlásili, spěch, divná adresa a VELKÁ PÍSMENA.',
      tip: 'Soubor .html v e-mailu může otevřít falešné přihlášení nebo platbu přímo ve vašem zařízení. Webové filtry ho nemusí zachytit.',
    },
  ],
  popups: [
    {
      id: 1,
      browserUrl: 'https://free-movies-unlimited.pirate',
      appName: 'BEZPEČNOSTNÍ UPOZORNĚNÍ',
      icon: '🚨',
      message: '⚠️ NALEZEN VIRUS! Váš počítač je nakažený 47 viry! Okamžitě volejte 1-800-FIX-NOW, jinak se váš systém trvale poškodí!',
      subtext: 'Windows Defender zjistil kritické hrozby. Jednejte hned!',
      primaryBtnText: '📞 Zavolat a opravit',
      explanation: 'Tohle je „scareware“: falešné upozornění na virus, které vás vystraší, abyste zavolali podvodníkovi nebo si nainstalovali falešný antivirus. Skutečné bezpečnostní programy vás nevarují přímo na webové stránce.',
      tip: 'Podezřelá vyskakovací okna zavírejte křížkem. Na telefonní čísla z vyskakovacích oken nikdy nevolejte — vždycky jde o podvodné linky.',
    },
    {
      id: 2,
      browserUrl: 'https://school-portal.edu',
      appName: 'Školní portál',
      icon: '🍪',
      message: 'Tento web používá cookies, aby si zapamatoval vaše přihlášení a web se vám lépe používal.',
      subtext: 'Používáme jen nezbytné cookies. Žádné osobní údaje nepředáváme třetím stranám.',
      primaryBtnText: '✓ Přijmout cookies',
      explanation: 'Tohle je skutečné upozornění na cookies ze školního portálu. Říká, k čemu cookies slouží, a nechce nic divného. Přijmout nutné cookies na důvěryhodném webu je v pořádku.',
      tip: 'Upozornění na cookies na webech, které znáte a kterým věříte, jsou běžná. V mnoha zemích je vyžaduje zákon.',
    },
    {
      id: 3,
      browserUrl: 'https://gaming-news-blog.com',
      appName: 'Gratulujeme!!!',
      icon: '🎉',
      message: 'JSTE 1 000 000. NÁVŠTĚVNÍK! Vyhráli jste PlayStation 5 ZDARMA! Klikněte níže a hned si výhru vyzvedněte!',
      subtext: '⏱️ Nabídka vyprší za: 00:59 — vyzvedněte si ji, než vyprší čas!',
      primaryBtnText: '🎮 Získat PS5 ZDARMA!',
      explanation: 'Falešné okno s výhrou. Žádný web nerozdává návštěvníkům PlayStation 5 zdarma. Tlačítko vede na podvodnou stránku, která chce vaše údaje nebo peníze. Odpočet má jen uspěchat.',
      tip: 'Odpočet ve vyskakovacím okně tam je proto, aby vám zabránil přemýšlet. Skutečné výhry se přes náhodná vyskakovací okna nikdy nerozdávají.',
    },
    {
      id: 4,
      browserUrl: 'https://youtube.com',
      appName: 'YouTube',
      icon: '🔔',
      message: 'Povolit YouTube posílat upozornění na nová videa z kanálů, které odebíráte?',
      subtext: 'Později to můžete změnit v nastavení prohlížeče.',
      primaryBtnText: 'Povolit oznámení',
      explanation: 'YouTube je skutečný web, ale nejbezpečnější je oznámení blokovat, i u důvěryhodných webů. Když je jednou povolíte, mohou se zneužít nebo se z nich stane spam.',
      tip: 'Než oznámení povolíte, rozmyslete se. Většina webů funguje i bez nich.',
    },
    {
      id: 5,
      browserUrl: 'https://download-cracked-software.cc',
      appName: 'Správce stahování',
      icon: '⬇️',
      message: 'Soubor připraven: „Adobe_Photoshop_FULL_CRACK.exe“ (87 MB). Naše AI soubor ověřila jako BEZPEČNÝ.',
      subtext: 'Používá VirusSafe™ — zkontrolováno a schváleno. Klikněte a stáhněte ihned.',
      primaryBtnText: '✓ Stáhnout nyní',
      explanation: 'Varovné signály: divná adresa „.cc“, cracknutý (pirátský) program, který skoro vždy ukrývá malware, a odznak „BEZPEČNÉ“, který si web dal sám. „VirusSafe™“ je vymyšlené, aby vás oklamalo.',
      tip: 'Cracknutý nebo pirátský software skoro vždy skrývá malware. Programy stahujte jen z oficiálního webu jejich výrobce.',
    },
    {
      id: 6,
      browserUrl: 'https://school-portal.edu',
      appName: 'Školní portál',
      icon: '⏱️',
      message: 'Za 2 minuty vás odhlásíme, protože jste na nic neklikli. Zůstat přihlášen?',
      subtext: 'Tím se chrání váš účet na sdílených počítačích.',
      primaryBtnText: 'Zůstat přihlášen',
      explanation: 'Odpočet není vždy past. Tato zpráva je na vašem vlastním školním portálu. Jen se ptá, jestli chcete zůstat přihlášeni, a nechce žádné peníze ani soukromé údaje.',
      tip: 'Všímejte si webu a toho, co okno chce, ne jen toho, jestli má odpočet.',
    },
    {
      id: 7,
      browserUrl: 'https://fast-news-today.net',
      appName: 'Aktualizace přehrávače',
      icon: '🔄',
      message: 'Váš video přehrávač je zastaralý! Nainstalujte aktualizaci hned, abyste mohli dál sledovat.',
      subtext: 'Stáhněte VideoPlayer_Update.exe (1,2 MB). Zabere to jen 10 sekund!',
      primaryBtnText: 'Aktualizovat',
      explanation: 'Skutečné aktualizace přicházejí z programu samotného nebo z nastavení zařízení, ne z vyskakovacího okna na webu. Falešná „aktualizace přehrávače“ je častý trik, jak někoho přimět nainstalovat malware.',
      tip: 'Aktualizujte jen v nastavení zařízení nebo na oficiálním webu výrobce. Nikdy přes vyskakovací okno.',
    },
  ],
  permissions: [
    {
      id: 1,
      appIcon: '🔦',
      appName: 'Flashlight Pro',
      source: 'Vydavatel: Neznámý vývojář · ⭐ 2,1 · 500 stažení',
      description: 'Jednoduchá aplikace svítilny.',
      permissions: [
        { icon: '📷', name: 'Fotoaparát', reason: 'Pro rozsvícení LED blesku', suspicious: false },
        { icon: '📍', name: 'Přesná poloha (GPS)', reason: 'Důvod neuveden', suspicious: true },
        { icon: '📞', name: 'Čtení protokolu hovorů', reason: 'Důvod neuveden', suspicious: true },
        { icon: '💾', name: 'Přístup ke všem souborům', reason: 'Důvod neuveden', suspicious: true },
      ],
      explanation: 'Aplikace svítilny potřebuje fotoaparát jen pro své světlo. Nepotřebuje vaši polohu, seznam hovorů ani všechny soubory. Spyware si o takové věci říká, aby sbíral vaše data.',
      tip: 'Vždy se ptejte: „Proč to tahle aplikace potřebuje?“ Svítilna nemá s vaší GPS ani kontakty nic společného.',
    },
    {
      id: 2,
      appIcon: '📷',
      appName: 'School Photo Editor',
      source: 'Vydavatel: Creative Tools Ltd · ⭐ 4,7 · 2M+ stažení',
      description: 'Úprava a vylepšování fotek na školní projekty.',
      permissions: [
        { icon: '📷', name: 'Fotoaparát', reason: 'Na pořizování nových fotek k úpravě', suspicious: false },
        {
          icon: '🖼️',
          name: 'Přístup k fotografiím',
          reason: 'Na otevření vašich stávajících fotek',
          suspicious: false,
        },
        { icon: '💾', name: 'Uložit do úložiště', reason: 'Na uložení upravených fotek', suspicious: false },
      ],
      explanation: 'Všechna tři oprávnění sedí k editoru fotek: fotoaparát na focení, fotky k úpravě, úložiště k uložení. Nechce nic víc.',
      tip: 'Když každé oprávnění odpovídá tomu, co aplikace dělá, je pravděpodobně poctivá.',
    },
    {
      id: 3,
      appIcon: '🎮',
      appName: 'SuperRun Adventure',
      source: 'Vydavatel: FastGame Studio · ⭐ 4,1 · 800 tisíc stažení',
      description: 'Rychlá plošinovka s bočním pohledem.',
      permissions: [
        { icon: '🔊', name: 'Přehrávání zvuku', reason: 'Na zvukové efekty ve hře', suspicious: false },
        { icon: '📳', name: 'Vibrace', reason: 'Na vibrace při hraní', suspicious: false },
        { icon: '📍', name: 'Přesná poloha GPS', reason: 'Důvod neuveden', suspicious: true },
        { icon: '📱', name: 'Čtení ID zařízení a informací', reason: 'Důvod neuveden', suspicious: true },
      ],
      explanation: 'Zvuk a vibrace jsou u hry normální. Plošinovka ale nepotřebuje vaši GPS ani ID zařízení. Ty slouží ke sledování a k prodeji dat inzerentům.',
      tip: 'I aplikace s dobrým hodnocením můžou chtít zbytečná oprávnění. Oprávnění, která s účelem aplikace jasně nesouvisí, vždycky odmítněte.',
    },
    {
      id: 4,
      appIcon: '📚',
      appName: 'CsHub Learning',
      source: 'Vydavatel: CsHub Education · ⭐ 4,9 · 50 tisíc stažení',
      description: 'Interaktivní výuka kyberbezpečnosti pro žáky.',
      permissions: [
        { icon: '🌐', name: 'Přístup k internetu', reason: 'Na načítání lekcí a kvízů', suspicious: false },
        { icon: '💾', name: 'Místní úložiště', reason: 'Pro uložení pokroku offline', suspicious: false },
      ],
      explanation: 'Vzdělávací aplikace potřebuje internet pro načtení lekcí a úložiště pro uložení pokroku. Žádá jen o to, co potřebuje. To je dobrá ochrana soukromí.',
      tip: 'Aplikace, které žádají jen o potřebná oprávnění, respektují vaše soukromí.',
    },
  ],
}
