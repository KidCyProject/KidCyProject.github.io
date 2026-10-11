// ---------------------------------------------------------------------------
// Malware (MW) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Malware module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentMW = {
  aim:
    'To provide core knowledge of what malware is, its risks, and principles for protecting against it.',
  objectives: [
    'To introduce what malware is and types of malware.',
    'To explain malware behaviour, and signs that a device has been infected.',
    'To develop skills to protect against malware-related risks.',
  ],
  outcomes: [
    'I can describe what malware is and identify it in given scenarios.',
    'I can explain different malware types, their behaviour, and signs that my device has been infected.',
    'I can demonstrate ways to protect against malware infections in given scenarios and justify why I made those choices.',
  ],
  parts: [
    {
      goal: 'Help students understand what malware is and identify it in given scenarios.',
      bundle: {
        filename: 'Malware Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.1.1
            kind: 'Image',
            name: 'Malicious + Software = Malware',
            filename: 'Image - Malicious + Software = Malware',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.1.2
            kind: 'Image',
            name: 'What is Malicious?',
            filename: 'Image - What is Malicious',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.1.4
            kind: 'Worksheet',
            name: 'Related to Malware or Not',
            filename: 'Worksheet - Related to Malware or Not',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Defining Malware',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.1.3
        title: 'What is Malware?',
        supportText:
          'Use this video to introduce malware as software designed to cause harm, giving students a foundation before they explore specific types in more depth. Pause to ask what they already know or have heard about computer viruses.',
        downloads: {
          video: {
            filename: 'What is Malware',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What is Malware - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal: 'Help students understand different malware types, their behaviour, and signs that a device has been infected.',
      bundle: {
        filename: 'Malware Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.2.2
            kind: 'Schema',
            name: 'Set of Coins',
            filename: 'Schema - Set of Coins',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.2.3
            kind: 'Schema',
            name: 'Knot Ties Board',
            filename: 'Schema - Knot Ties Board',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Malware Types',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.2.1
        title: 'Introducing Malware Types',
        supportText:
          'Use this video to give students a clear overview of the different categories of malware and what makes each one distinct. Pause for a brief discussion on which type they think poses the greatest risk and why.',
        downloads: {
          video: {
            filename: 'Introducing Malware Types',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'Introducing Malware Types - Subtitles',
            ariaLabel: 'Download subtitles' },
        },
      },
    },
    {
      goal: 'Help students recognise and detect different types of malware.',
      bundle: {
        filename: 'Malware Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.3.1
            kind: 'Reading',
            name: 'Recognising Malware',
            filename: 'Reading - Recognising Malware',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.3.2
            kind: 'Poster',
            name: 'Seven Indicators',
            filename: 'Poster - Seven Indicators',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.3.3
            kind: 'Worksheet',
            name: 'List of Indicators',
            filename: 'Worksheet - List of Indicators',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Investigating Malware',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
    },
    {
      goal: 'Help students identify ways to protect against malware infections in given scenarios and justify why they made those choices.',
      bundle: {
        filename: 'Malware Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 6.4.1
            kind: 'Situation',
            name: 'Malware and Data Theft',
            filename: 'Situation - Malware and Data Theft',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.4.2
            kind: 'Poster',
            name: 'DOs and DON\'Ts',
            filename: 'Poster - DOs and DON\'Ts',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.4.3
            kind: 'Images',
            name: 'Associative Pictures: Be Aware',
            filename: 'Images - Associative Pictures be Aware',
            ariaLabel: 'Download material',
          },
          {
            // ID: 6.4.4
            kind: 'Worksheet',
            name: 'A Shield Against Malware',
            filename: 'Worksheet - A Shield Against Malware',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Analysing the Context of Malware Infection',
          },
          {
            title: 'Learning Basic Protection Measures',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
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
  title: 'Malware Detective',
  subtitle: 'You are a cybersecurity analyst. Inspect files, read emails, handle pop-ups and check app permissions. Then name malware types, spot signs of infection and choose the right protection, across 7 levels. Can you keep the system clean?',
  howItWorks: 'How it Works',
  instruction: 'Work through 7 levels on your virtual computer. In levels 1–4, decide if each file, email, pop-up or app is safe or a threat. In level 5, name the type of malware. In level 6, decide if a computer problem is normal or a sign of infection. In level 7, choose the best protection. After every answer, read the explanation.',
  tip: 'Malware often disguises itself as something harmless. Look at where a file or message comes from, not only at how it looks. Some harmless things look scary (like a countdown), and some dangerous things look friendly.',
  tipLabel: 'Tip',
  welcomeTitle: 'Welcome, Cyber Analyst!',
  welcomeDescription: 'Your computer has received suspicious files, emails and pop-ups. Work through 7 levels: find the threats, name the malware, spot the signs of infection and choose the right protection.',
  levels: [
    '💻 Level 1 — File Scanner',
    '📧 Level 2 — Email Inbox',
    '🌐 Level 3 — Browser Pop-ups',
    '🔒 Level 4 — App Permissions',
    '🔬 Level 5 — Malware Types',
    '🩺 Level 6 — Signs of Infection',
    '🛡️ Level 7 — Protection',
  ],
  bootButton: 'Boot Up Computer →',
  scoreLabel: 'Score',
  correctLabel: 'Correct',
  threatsCaughtLabel: 'Threats Caught',
  keepFile: '✓ Keep File',
  quarantine: '🗑️ Quarantine',
  safeKeep: '✓ Safe / Keep',
  threatRemove: '⚠️ Threat / Remove',
  nextButton: 'Next →',
  malwareTypesTitle: 'Malware Types',
  malwareTypesSubtitle: 'Common types of malware to watch out for',
  malwareTypes: [
    '🦠 Virus — attaches to files and spreads',
    '🪱 Worm — self-replicates across networks',
    '🐴 Trojan — disguised as useful software',
    '🔐 Ransomware — locks files until you pay',
    '👁️ Spyware — secretly monitors activity',
    '📢 Adware — floods you with ads',
  ],
  securityGuideTitle: 'Security Guide',
  securityGuideSubtitle: 'Red flags to watch for',
  securityRedFlags: [
    '🚩 .exe, .bat, .vbs from unknown sources',
    '🚩 Misspelled or fake sender domains',
    '🚩 Fake virus alerts in your browser',
    '🚩 Apps requesting unneeded permissions',
    '🚩 Prizes, free money, or urgent threats',
    '🚩 Countdown timers creating panic',
    '🚩 A file name with two endings, like photo.jpg.exe',
  ],
  goldenRule: 'When in doubt, don\'t click. Contact IT support or a trusted adult instead.',
  levelCompleteTitle: 'Level Complete!',
  levelCompleteSubtitle: 'Keep going!',
  levelResultLabel: 'Level Result',
  correctDecisionsLabel: 'correct decisions',
  continueButton: 'Continue →',
  nextLevelButtonTemplate: 'Continue to Level {n} →',
  viewResultsButton: 'View Final Results →',
  itemProgressTemplate: 'Item {n} of {total}',
  finalSummaryTemplate: 'points · {correct} of {total} correct decisions',
  permsRequestingLabel: 'This app is requesting the following permissions:',
  correctFeedback: '✅ Correct!',
  incorrectFeedback: '❌ Not quite!',
  markLegitimate: '✓ Mark as Legitimate',
  reportPhishing: '⚠️ Report as Phishing',
  allowInstall: '✓ Allow & Install',
  denyRemove: '🚫 Deny & Remove',
  closeDismiss: '✕ Close / Dismiss Pop-up',
  fileSourceLabel: 'Source',
  fileSizeLabel: 'Size',
  fileAddedLabel: 'Added',
  folderInbox: '📥 Inbox',
  folderSent: '📤 Sent',
  folderTrash: '🗑️ Trash',
  levelDone: [
    { title: 'File Scanner — Level 1 Done!', sub: 'You\'ve scanned all desktop files.' },
    { title: 'Email Inbox — Level 2 Done!', sub: 'You\'ve reviewed every email in the inbox.' },
    { title: 'Browser Pop-ups — Level 3 Done!', sub: 'You\'ve handled all browser pop-ups.' },
    { title: 'App Permissions — Level 4 Done!', sub: 'You\'ve reviewed all app permission requests.' },
    { title: 'Malware Types — Level 5 Done!', sub: 'You\'ve named the malware types.' },
    { title: 'Signs of Infection — Level 6 Done!', sub: 'You\'ve checked every device problem.' },
    { title: 'Protection — Level 7 Done!', sub: 'You\'ve chosen your protection.' },
  ],
  resultsTitle: 'System Secured! 🛡️',
  resultsDescription: 'Your cybersecurity report is ready.',
  accuracyLabel: 'Accuracy',
  threatsCaughtStat: 'Threats Caught',
  threatsMissedStat: 'Threats Missed',
  analystRankLabel: 'Analyst Rank',
  rankTrainee: '📘 Trainee',
  rankTraineeMsg: 'Keep learning! Open the help panels and try again — you\'ll improve!',
  rankJunior: '🔍 Junior Analyst',
  rankJuniorMsg: 'Good effort! You\'re building solid malware detection skills. Practice makes perfect.',
  rankSenior: '🔐 Senior Analyst',
  rankSeniorMsg: 'Great job! You identified most threats. Keep sharpening your eye for subtle red flags.',
  rankElite: '🛡️ Elite Cyber Analyst',
  rankEliteMsg: 'Outstanding work! You caught nearly every threat. Your digital security instincts are excellent.',
  playAgain: 'Play Again',
  signNormal: '✓ Looks normal',
  signWarning: '⚠️ Warning sign',
  verdictSafe: 'This one is safe.',
  verdictThreat: 'This one is a threat.',
  verdictNormal: 'This is normal.',
  verdictWarning: 'This is a warning sign.',
  rightAnswerTemplate: 'Right answer: {answer}',
  typeNames: {
    virus: '🦠 Virus',
    worm: '🪱 Worm',
    trojan: '🐴 Trojan',
    ransomware: '🔐 Ransomware',
    spyware: '👁️ Spyware',
    adware: '📢 Adware',
  },
  measures: {
    links: { label: '🔗 Don\'t click strange links', why: 'A link can lead to a fake page or start a download.' },
    trusted: {
      label: '🏪 Download only from trusted places',
      why: 'Use official websites and app stores, never "free" copies.',
    },
    update: { label: '🔄 Keep your computer and apps updated', why: 'Updates close the holes that malware uses.' },
    antivirus: { label: '🛡️ Install antivirus software', why: 'It looks for malware and warns you.' },
    adult: {
      label: '🙋 Ask an adult before installing anything',
      why: 'A trusted adult can help check if a program is safe.',
    },
    attachment: {
      label: '📎 Be careful with email attachments',
      why: 'Open an attachment only if you expect it and know the sender.',
    },
  },
  measuresTitle: 'Protection Measures',
  measuresSubtitle: 'Six habits that stop most malware',
  infectionSignsTitle: 'Signs of Infection',
  infectionSignsSubtitle: 'Clues that a device may have malware',
  infectionSigns: [
    '🪟 Pop-up windows appear out of nowhere',
    '🐌 The screen gets super slow',
    '❓ Strange new icons or programs appear',
    '🌀 The fan spins loudly or the computer makes weird noises',
    '💥 Your favourite game or app suddenly closes',
    '📂 Homework files disappear or will not open',
    '✉️ Friends say they got emails from you',
  ],
  infectionSignsNote: 'A sign is a clue, not proof. A computer can also be slow because it is installing an update. Look at the whole story.',
  perLevelTitle: 'Your result in each level',
  practiceTemplate: '💡 Practise next: {level}',
  practicePerfect: '🌟 A perfect run — every level!',
  typeCases: [
    {
      id: 1,
      icon: '🦠',
      text: 'Nina opens a file a friend sent her. Soon other files on her laptop are damaged too. The problem spreads from file to file, and only when she opens them.',
      explanation: 'A virus hides inside a file and copies itself into other files. It needs a host file and someone to open it.',
      tip: 'A virus can only start when you open the infected file. Do not open files you did not expect.',
    },
    {
      id: 2,
      icon: '🪱',
      text: 'At school, one computer gets infected. Nobody clicks anything, but a few minutes later computers all over the Wi-Fi network are infected and slow.',
      explanation: 'A worm spreads by itself across networks. It needs no file to hide in and nobody to open it.',
      tip: 'Updates close the holes that worms use to get in.',
    },
    {
      id: 3,
      icon: '🐴',
      text: 'Leo installs a free "game booster". It looks useful, but it secretly opens a way into his computer for a hacker. It does not copy itself.',
      explanation: 'A trojan pretends to be useful software. It does not spread by itself. You let it in yourself.',
      tip: 'Install programs only from official places. And ask an adult first.',
    },
    {
      id: 4,
      icon: '🔐',
      text: 'Eva\'s photos and homework will not open. A message says: "Your files are locked. Pay money to get them back."',
      explanation: 'Ransomware locks or deletes your files and asks for a ransom. Paying does not promise that you get your files back.',
      tip: 'Keep copies (backups) of important files. Tell an adult at once and do not pay.',
    },
    {
      id: 5,
      icon: '👁️',
      text: 'A hidden program on Tom\'s laptop quietly records everything he types, even his passwords, and sends it to a stranger.',
      explanation: 'Spyware secretly watches what you do and steals private data. A program that records every key you press is called a keylogger.',
      tip: 'If you feel watched, tell an adult and run an antivirus scan.',
    },
    {
      id: 6,
      icon: '📢',
      text: 'After Mia installs a free app, ads pop up all day: on the desktop, in every window, even when the app is closed.',
      explanation: 'Adware floods you with ads, often to earn money for its maker. It is annoying and it can lead you to unsafe pages.',
      tip: 'Read what a free app wants to install. Remove apps that fill your screen with ads.',
    },
  ],
  signCases: [
    {
      id: 1,
      icon: '🪟',
      text: 'Windows with ads and prizes keep popping up on Nina\'s screen. She did not open any of them. They come back even after she closes the browser.',
      explanation: 'Pop-ups that appear out of nowhere are a classic sign of adware or other malware.',
      tip: 'Do not click them. Tell an adult and run an antivirus scan.',
    },
    {
      id: 2,
      icon: '❓',
      text: 'Leo finds icons on his desktop for programs he never installed and has never seen before.',
      explanation: 'Programs you did not install can be malware that put itself there. Strange new icons are a warning sign.',
      tip: 'Do not open unknown programs. Ask an adult to check them.',
    },
    {
      id: 3,
      icon: '📂',
      text: 'Eva\'s homework files have disappeared. The ones that are left will not open and show an error.',
      explanation: 'Deleted or damaged files that you did not touch are a warning sign. Ransomware and some viruses damage files.',
      tip: 'Tell an adult at once. Backups of your files can save your work.',
    },
    {
      id: 4,
      icon: '✉️',
      text: 'Tom\'s friends say: "We got a strange email from you with a link!" Tom never sent it.',
      explanation: 'If emails go out from your account without you, someone else may control it, or malware on your device is sending them.',
      tip: 'Tell your friends not to click. Then tell an adult and change your password.',
    },
    {
      id: 5,
      icon: '🌀',
      text: 'Mia\'s laptop is slow and its fan is very loud, but she has no programs open. It started after she ran a file from a stranger.',
      explanation: 'A computer that works hard when you do nothing may be running malware in the background.',
      tip: 'Be suspicious when a slow, loud computer is "doing nothing". Ask an adult to check it.',
    },
    {
      id: 6,
      icon: '🐌',
      text: 'Sam\'s laptop is very slow. A window says "Installing updates… 63%".',
      explanation: 'This is normal. The slowness has a clear reason: the laptop is installing updates. A slow computer alone is not proof of malware.',
      tip: 'Wait until the update is finished. Think about what else is going on before you worry.',
    },
    {
      id: 7,
      icon: '🎮',
      text: 'Ella plays a big 3D game for an hour. Her laptop gets warm and the fan spins loudly.',
      explanation: 'This is normal. Demanding games make a computer work hard, so it gets warm and the fan spins fast.',
      tip: 'Loud fan and a clear reason = normal. Loud fan and nothing open = suspicious.',
    },
    {
      id: 8,
      icon: '🆕',
      text: 'Jack\'s dad helped him install a new drawing app from the official app store. Now there is a new icon on the screen.',
      explanation: 'This is normal. Jack knows where the icon comes from, because he installed the app with an adult\'s help.',
      tip: 'A new icon you can explain is fine. A new icon you cannot explain should be checked.',
    },
  ],
  shieldCases: [
    {
      id: 1,
      icon: '🔗',
      text: 'A stranger writes to you: "See who looked at your profile! Click here!"',
      explanation: 'Strange links can lead to fake pages or start a download of malware. The best habit is not to click them.',
      tip: 'Not sure about a link? Do not click. Ask an adult.',
    },
    {
      id: 2,
      icon: '🏪',
      text: 'You want a new game. A website you have never heard of offers it for free, with no payment.',
      explanation: 'Free copies of paid games often hide malware. Get games only from the official website or a trusted app store.',
      tip: '"Free" copies of paid things are bait.',
    },
    {
      id: 3,
      icon: '🔄',
      text: 'Your tablet has said "Updates available" for weeks. You always tap "Remind me later".',
      explanation: 'Updates fix security holes that malware uses. Install them as soon as you can.',
      tip: 'If an adult agrees, turn on automatic updates.',
    },
    {
      id: 4,
      icon: '🙋',
      text: 'A window on the family laptop asks to install a program you do not know. Your mum is in the next room.',
      explanation: 'Before you install anything, ask an adult. They can check if the program is safe and from a trusted place.',
      tip: 'Asking an adult is never a silly question.',
    },
    {
      id: 5,
      icon: '📎',
      text: 'An email says it is from a delivery company. It has a file attached: "invoice.zip". You were not expecting a parcel.',
      explanation: 'Attachments you did not expect can hide malware. Open an attachment only if you expect it and you know the sender.',
      tip: 'Unexpected attachment? Do not open it. Ask the sender another way, or ask an adult.',
    },
    {
      id: 6,
      icon: '🛡️',
      text: 'Your family\'s computer has no protection program at all. You want something that scans files and warns about malware.',
      explanation: 'Antivirus software looks for malware and warns you. It is one of the layers that protect your computer.',
      tip: 'Antivirus helps, but it does not replace careful habits.',
    },
  ],
  levelMeta: [
    {
      title: 'Level 1 of 7 — File Scanner',
      short: 'File Scanner',
      task: 'Is this file safe to keep, or should it go into quarantine?',
      app: '📁 File Explorer',
      msg: '🔍 Scanning file…',
    },
    {
      title: 'Level 2 of 7 — Email Inbox',
      short: 'Email Inbox',
      task: 'Is this email real, or is it phishing?',
      app: '📧 Mail',
      msg: '📧 Reading email…',
    },
    {
      title: 'Level 3 of 7 — Browser Pop-ups',
      short: 'Browser Pop-ups',
      task: 'Click the button, or close the pop-up?',
      app: '🌐 Browser',
      msg: '⚠️ Pop-up detected!',
    },
    {
      title: 'Level 4 of 7 — App Permissions',
      short: 'App Permissions',
      task: 'Allow this app, or deny it?',
      app: '⚙️ App Manager',
      msg: '⚙️ Reviewing permissions…',
    },
    {
      title: 'Level 5 of 7 — Malware Types',
      short: 'Malware Types',
      task: 'Which type of malware is this?',
      app: '🔬 Malware Lab',
      msg: '🔬 Studying behaviour…',
    },
    {
      title: 'Level 6 of 7 — Signs of Infection',
      short: 'Signs of Infection',
      task: 'Is this normal, or a warning sign of malware?',
      app: '🩺 Device Check',
      msg: '🩺 Checking the device…',
    },
    {
      title: 'Level 7 of 7 — Protection',
      short: 'Protection',
      task: 'Which protection measure fits best?',
      app: '🛡️ Security Center',
      msg: '🛡️ Choosing protection…',
    },
  ],
  files: [
    {
      id: 1,
      icon: '⚙️',
      name: 'FreeMinecraft_Crack.exe',
      type: 'Executable (.exe)',
      source: 'Downloaded from: crack-games-free.ru',
      size: '14.2 MB',
      date: 'Today, 3:41 PM',
      description: 'An installer claiming to give you free Minecraft. Downloaded from an unofficial Russian website.',
      explanation: 'Cracked game installers often hide trojans and ransomware. The .exe file, the odd website and the "free crack" promise are red flags.',
      tip: 'Only download software from official websites.',
    },
    {
      id: 2,
      icon: '📄',
      name: 'History_Essay_Draft.docx',
      type: 'Word Document (.docx)',
      source: 'Created locally on this device',
      size: '48 KB',
      date: 'Yesterday, 7:15 PM',
      description: 'A Word document you created yourself for your history class.',
      explanation: 'A small Word document you created locally is safe. It has a standard extension, tiny file size, and a local origin.',
      tip: 'Be cautious with .docx files received from strangers — they can contain malicious macros. But self-created files are fine.',
    },
    {
      id: 3,
      icon: '📜',
      name: 'speedup_your_pc.bat',
      type: 'Batch Script (.bat)',
      source: 'Received via Discord DM from: xX_h4ck3r_Xx',
      size: '3.1 KB',
      date: 'Today, 11:02 AM',
      description: 'A batch script sent via Discord by an unknown user, claiming to speed up your PC.',
      explanation: '.bat files can run any command on your computer. They can install malware or delete files. Never run scripts from strangers.',
      tip: 'Never run .bat or .vbs scripts from people you do not know and fully trust, even if they claim it is harmless.',
    },
    {
      id: 4,
      icon: '🎵',
      name: 'Summer_Playlist.mp3',
      type: 'Audio File (.mp3)',
      source: 'Saved from Spotify desktop app',
      size: '8.7 MB',
      date: '3 days ago',
      description: 'A music file saved through the official Spotify app.',
      explanation: 'This is a normal music file from a trusted app. .mp3 files cannot run programs, so they are safe.',
      tip: 'Standard media files (.mp3, .jpg, .mp4) are generally safe. Watch out only for files that disguise their extension, e.g. "song.mp3.exe".',
    },
    {
      id: 5,
      icon: '⚙️',
      name: 'RegFix_Pro_Setup.exe',
      type: 'Executable (.exe)',
      source: 'Delivered by browser pop-up advertisement',
      size: '2.1 MB',
      date: 'Today, 2:18 PM',
      description: 'A "registry repair tool" that was pushed by a pop-up ad claiming your PC is damaged.',
      explanation: 'Fake "PC repair" tools from pop-up ads often hide adware and spyware. Real repair tools are not sold this way.',
      tip: 'Real antivirus programs are never advertised in random pop-ups.',
    },
    {
      id: 6,
      icon: '📸',
      name: 'Birthday_Party.jpg',
      type: 'Image File (.jpg)',
      source: 'Received via WhatsApp from: Grandma',
      size: '2.9 MB',
      date: 'Last week',
      description: 'A photo from your birthday party sent by your grandmother.',
      explanation: 'A .jpg photo from a known family member is safe. Standard images from trusted contacts are not malware.',
      tip: 'Watch out for double endings like "photo.jpg.exe". The last part shows the real file type.',
    },
    {
      id: 7,
      icon: '📜',
      name: 'FREE_ROBUX_GENERATOR.vbs',
      type: 'VBScript (.vbs)',
      source: 'Link from a YouTube comment',
      size: '1.8 KB',
      date: 'Today, 9:55 AM',
      description: 'A script from a YouTube comment claiming to generate unlimited Robux for Roblox.',
      explanation: '"Free Robux" generators do not exist. They are scams. A .vbs script can run harmful commands on your computer.',
      tip: 'Free in-game currency generators are always scams. They exist only to steal accounts, install malware, or both.',
    },
    {
      id: 8,
      icon: '📊',
      name: 'Science_Project_Data.xlsx',
      type: 'Excel Spreadsheet (.xlsx)',
      source: 'Emailed from: johnson.s@westridge-school.edu',
      size: '156 KB',
      date: 'Yesterday, 10:33 AM',
      description: 'An Excel file with science project data sent by your verified school teacher.',
      explanation: 'This spreadsheet comes from your teacher at a real school address. The file type and size are normal.',
      tip: 'Office files from strangers can hide harmful macros. Check who sent a file before you open it.',
    },
    {
      id: 9,
      icon: '📸',
      name: 'Holiday_Photos.jpg.exe',
      type: 'Program (.exe)',
      source: 'Sent in a chat by a person you only know online',
      size: '1.4 MB',
      date: 'Today, 4:07 PM',
      description: 'The file looks like a photo from a holiday. Its name has two endings: ".jpg" and ".exe".',
      explanation: 'Only the last ending counts. This file ends in .exe, so it is a program, not a photo. Attackers put ".jpg" first so that it looks like a picture.',
      tip: 'Read the whole file name to the very end. If it ends in .exe, it is a program.',
    },
    {
      id: 10,
      icon: '⚙️',
      name: 'Minecraft_Launcher_Setup.exe',
      type: 'Installer (.exe)',
      source: 'Downloaded from: minecraft.net (the official website)',
      size: '2.4 MB',
      date: 'Today, 5:30 PM',
      description: 'The game installer. Your dad downloaded it from the official website.',
      explanation: 'An .exe file is not always bad. This one comes from the maker\'s official website, and an adult downloaded it. What counts is where a file comes from.',
      tip: 'Even a safe installer: ask an adult before you install anything.',
    },
  ],
  emails: [
    {
      id: 1,
      fromName: 'IT Security Team',
      fromAddr: 'security-alert@school-itsupport.xyz',
      subject: 'URGENT: Your school account has been hacked — reset password NOW',
      body: `Dear Student,

Our systems detected unauthorised access to your school account from an unknown location.

You must reset your password IMMEDIATELY by running the attached tool. Failure to act within 30 minutes will result in permanent account lockout.

— IT Security Department`,
      attachment: 'PasswordReset_Tool.exe',
      explanation: 'Many red flags: a strange ".xyz" address, a rush to act fast, and an .exe file. A real IT team sends a link to a login page, not a program.',
      tip: 'Got a scary security message? Call IT on a number you already know. Do not use the contacts in the email.',
    },
    {
      id: 2,
      fromName: 'Ms. Johnson',
      fromAddr: 'johnson.s@westridge-school.edu',
      subject: 'Science Fair — project brief attached',
      body: `Hi class,

Please find attached the official project brief for the upcoming science fair. It covers the required sections, formatting guidelines, and the submission deadline.

Bring your completed poster and report to Room 14 by Friday.

Let me know if you have any questions!

Ms. Johnson
Science Department, Westridge School`,
      attachment: 'Science_Fair_Project_Brief.docx',
      explanation: 'This is a real school email. It comes from a school address, the Word file fits the topic, and nobody asks for private details.',
      tip: 'A .docx file from your teacher\'s school address is safe. Still check the full sender address before you open any file.',
    },
    {
      id: 3,
      fromName: 'Lucas (Gaming Buddy)',
      fromAddr: 'lucas.gamer99@gmail.com',
      subject: 'dude run this it gives you infinite coins in the game!!',
      body: `hey!!

found this sick script online that gives you unlimited coins in Clash Royale. just run the .bat file and it patches the game automatically lol

my brother tried it and it worked. don't tell anyone tho

– Lucas`,
      attachment: 'coin_hack_v3_FINAL.bat',
      explanation: 'Even a friend\'s message can carry malware. Lucas\'s account may be hacked, or he may not know the file is harmful. A .bat file that "hacks" a game is a trojan trick. It could give an attacker control of your computer.',
      tip: 'Never run .bat or .vbs scripts from anyone, including friends. "Cheat" scripts for online games are almost always malware in disguise.',
    },
    {
      id: 4,
      fromName: 'School Library',
      fromAddr: 'library@westridge-school.edu',
      subject: 'Summer Reading Programme — your reading list',
      body: `Hi there,

Thank you for signing up for our Summer Reading Programme! Attached is your personalised reading list based on your age group and interests.

You can borrow any of these titles from the school library or request them via the student portal.

Happy reading!

Westridge School Library Team`,
      attachment: 'Summer_Reading_List.pdf',
      explanation: 'A real email from the school library, sent from the school address. The .pdf is a reading list. Nobody asks for private details.',
      tip: 'PDFs from people you know are usually safe. Be careful with PDFs from strangers. They can hide scripts.',
    },
    {
      id: 5,
      fromName: 'PRIZE ALERT CENTER',
      fromAddr: 'winner@free-prize-claim.net',
      subject: 'YOU HAVE BEEN SELECTED — CLAIM YOUR iPHONE NOW!!!',
      body: `CONGRATULATIONS!!!

You have been randomly selected as our lucky winner! To claim your brand-new iPhone, complete and return the attached claim form with your personal details and a $4.99 shipping fee.

Respond within 12 HOURS or your prize expires!

[CLAIM MY PRIZE →]`,
      attachment: 'WINNER_ClaimForm_URGENT.html',
      explanation: 'A prize scam with an .html file. Opening it shows a fake page that steals your details and payment info. Red flags: a prize you never entered, a rush to act, a strange address and SHOUTING.',
      tip: 'An .html file in an email can open a fake login or payment page right on your own device. Web filters may not catch it.',
    },
  ],
  popups: [
    {
      id: 1,
      browserUrl: 'https://free-movies-unlimited.pirate',
      appName: 'SECURITY ALERT',
      icon: '🚨',
      message: '⚠️ VIRUS DETECTED! Your computer is infected with 47 viruses! Call 1-800-FIX-NOW immediately or your system will be permanently damaged!',
      subtext: 'Windows Defender has detected critical threats. Act now!',
      primaryBtnText: '📞 Call Now & Fix',
      explanation: 'This is "scareware": a fake virus alert that scares you into calling a scammer or installing fake antivirus. Real security tools never warn you inside a web page.',
      tip: 'Close suspicious browser pop-ups using the X button. Never call phone numbers shown in browser pop-ups — those are always scam hotlines.',
    },
    {
      id: 2,
      browserUrl: 'https://school-portal.edu',
      appName: 'School Portal',
      icon: '🍪',
      message: 'This website uses cookies to remember your login and improve your experience.',
      subtext: 'We only use essential cookies. No personal data is shared with third parties.',
      primaryBtnText: '✓ Accept Cookies',
      explanation: 'This is a real cookie notice from your school portal. It says what the cookies are for and asks for nothing odd. Accepting the necessary cookies on a trusted site is fine.',
      tip: 'Cookie notices on websites you know and trust are normal. Many countries require them.',
    },
    {
      id: 3,
      browserUrl: 'https://gaming-news-blog.com',
      appName: 'Congratulations!!!',
      icon: '🎉',
      message: 'YOU ARE THE 1,000,000th VISITOR! You have won a FREE PlayStation 5! Click below to claim your prize immediately!',
      subtext: '⏱️ Offer expires in: 00:59 — Claim before time runs out!',
      primaryBtnText: '🎮 Claim FREE PS5!',
      explanation: 'A fake prize pop-up. No website gives visitors a free PlayStation 5. The button leads to a scam page that wants your details or money. The countdown is meant to rush you.',
      tip: 'Countdown timers in pop-ups exist to stop you from thinking. Real prizes are never distributed through random browser pop-ups.',
    },
    {
      id: 4,
      browserUrl: 'https://youtube.com',
      appName: 'YouTube',
      icon: '🔔',
      message: 'Allow YouTube to send you notifications about new videos from channels you subscribe to?',
      subtext: 'You can change this later in your browser settings.',
      primaryBtnText: 'Allow Notifications',
      explanation: 'YouTube is a real site, but it is safest to block notifications, even from trusted sites. Once you allow them, they can be abused or turn into spam.',
      tip: 'Think before you allow notifications. Most websites work fine without them.',
    },
    {
      id: 5,
      browserUrl: 'https://download-cracked-software.cc',
      appName: 'Download Manager',
      icon: '⬇️',
      message: 'File ready: "Adobe_Photoshop_FULL_CRACK.exe" (87 MB). Our AI verified this file as SAFE.',
      subtext: 'Powered by VirusSafe™ — scanned and approved. Click to download instantly.',
      primaryBtnText: '✓ Download Now',
      explanation: 'Red flags: an odd ".cc" address, a cracked (pirated) program that nearly always hides malware, and a "SAFE" badge the site gave itself. "VirusSafe™" is made up to trick you.',
      tip: 'Cracked or pirated software almost always hides malware. Download programs only from the maker\'s official website.',
    },
    {
      id: 6,
      browserUrl: 'https://school-portal.edu',
      appName: 'School Portal',
      icon: '⏱️',
      message: 'You will be logged out in 2 minutes because you have not clicked anything. Stay logged in?',
      subtext: 'This protects your account on shared computers.',
      primaryBtnText: 'Stay Logged In',
      explanation: 'A countdown is not always a trick. This message is on your own school portal. It only asks if you want to stay logged in, and it wants no money or private details.',
      tip: 'Check the website and what the pop-up asks you to do, not only whether it has a timer.',
    },
    {
      id: 7,
      browserUrl: 'https://fast-news-today.net',
      appName: 'Player Update',
      icon: '🔄',
      message: 'Your video player is out of date! Install the update now to keep watching.',
      subtext: 'Download VideoPlayer_Update.exe (1.2 MB). It takes only 10 seconds!',
      primaryBtnText: 'Update Now',
      explanation: 'Real updates come from the program itself or from your device settings, not from a pop-up on a website. A fake "player update" is a common way to trick people into installing malware.',
      tip: 'Update only through your device settings or the maker\'s official site. Never through a pop-up.',
    },
  ],
  permissions: [
    {
      id: 1,
      appIcon: '🔦',
      appName: 'Flashlight Pro',
      source: 'Publisher: Unknown Developer · ⭐ 2.1 · 500 downloads',
      description: 'A simple flashlight utility app.',
      permissions: [
        { icon: '📷', name: 'Camera', reason: 'To activate the flash LED', suspicious: false },
        { icon: '📍', name: 'Precise Location (GPS)', reason: 'No reason given', suspicious: true },
        { icon: '📞', name: 'Read Call Logs', reason: 'No reason given', suspicious: true },
        { icon: '💾', name: 'Access All Files', reason: 'No reason given', suspicious: true },
      ],
      explanation: 'A flashlight app only needs the camera for its light. It does not need your location, call list or all your files. Spyware asks for such things to collect your data.',
      tip: 'Always ask: "Why does this app need this?" A flashlight has no use for your GPS or contacts.',
    },
    {
      id: 2,
      appIcon: '📷',
      appName: 'School Photo Editor',
      source: 'Publisher: Creative Tools Ltd · ⭐ 4.7 · 2M+ downloads',
      description: 'Edit and enhance photos for school projects.',
      permissions: [
        { icon: '📷', name: 'Camera', reason: 'To take new photos to edit', suspicious: false },
        { icon: '🖼️', name: 'Access Photos', reason: 'To open your existing photos', suspicious: false },
        { icon: '💾', name: 'Save to Storage', reason: 'To save your edited photos', suspicious: false },
      ],
      explanation: 'All three permissions fit a photo editor: camera to take photos, photos to edit, storage to save. It asks for nothing more.',
      tip: 'If every permission fits what the app does, the app is probably honest.',
    },
    {
      id: 3,
      appIcon: '🎮',
      appName: 'SuperRun Adventure',
      source: 'Publisher: FastGame Studio · ⭐ 4.1 · 800K downloads',
      description: 'A fast-paced side-scrolling platformer game.',
      permissions: [
        { icon: '🔊', name: 'Play Audio', reason: 'For in-game sound effects', suspicious: false },
        { icon: '📳', name: 'Vibration', reason: 'For haptic feedback in gameplay', suspicious: false },
        { icon: '📍', name: 'Precise GPS Location', reason: 'No reason given', suspicious: true },
        { icon: '📱', name: 'Read Device ID & Info', reason: 'No reason given', suspicious: true },
      ],
      explanation: 'Sound and vibration are normal for a game. But a platformer does not need your GPS or device ID. They are used to track you and to sell data to advertisers.',
      tip: 'Even apps with good ratings can request unnecessary permissions. Always deny permissions that have no clear link to the app\'s purpose.',
    },
    {
      id: 4,
      appIcon: '📚',
      appName: 'CsHub Learning',
      source: 'Publisher: CsHub Education · ⭐ 4.9 · 50K downloads',
      description: 'Interactive cybersecurity learning for students.',
      permissions: [
        { icon: '🌐', name: 'Internet Access', reason: 'To load lessons and quizzes', suspicious: false },
        { icon: '💾', name: 'Local Storage', reason: 'To save your progress offline', suspicious: false },
      ],
      explanation: 'An education app needs the internet to load lessons and storage to save your progress. It asks for only what it needs. That is good privacy practice.',
      tip: 'Apps that ask only for the permissions they need respect your privacy.',
    },
  ],
}
