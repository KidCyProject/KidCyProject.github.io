// ---------------------------------------------------------------------------
// Authentication (AT) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Authentication module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentAT = {
  aim:
    'To provide core knowledge of authentication and identity management principles for protecting personal digital assets.',
  objectives: [
    'To stress the importance of secure identity management.',
    'To introduce the concept of authentication and its different authentication factors.',
    'To develop understanding of digital assets and access control awareness.',
    'To develop knowledge and skills for creating secure usernames and passwords following recommendations and good practices.',
    'To build skills for managing passwords securely.',
  ],
  outcomes: [
    'I can identify my personal digital assets and explain the risks they face in both physical and digital environments.',
    'I can explain what authentication is, why it is important, and list different types of authentications.',
    'I can distinguish between weak and strong usernames and passwords.',
    'I can demonstrate how to use a password manager to store passwords and justify why I made those choices.',
  ],
  parts: [
    {
      goal: 'Help students understand who they are online, what counts as a digital asset, and why these need protection.',
      bundle: {
        filename: 'Authentication Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 3.1.1
            kind: 'Image',
            name: 'Digital Identity',
            filename: 'Image - Digital Identity',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.1.3
            kind: 'Images',
            name: 'Examples of Personal Digital Assets',
            filename: 'Images - Examples of Personal Digital Assets',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.1.4
            kind: 'Worksheet',
            name: 'What Would Happen If…?',
            filename: 'Worksheet - What Would Happen If',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.1.5
            kind: 'Worksheet',
            name: 'My Digital Assets',
            filename: 'Worksheet - My Digital Assets',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'What is Digital Identity?',
          },
          {
            title: 'Understanding Digital Assets',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        title: 'What is Digital Identity?',
        supportText:
          'Use this video to help students understand that their digital identity is made up of the information and behaviours they share online. Pause to ask which parts of their digital identity they think they can control.',
        downloads: {
          video: {
            filename: 'What is Digital Identity',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What is Digital Identity - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal:
        'Help students understand what authentication is, why it is important, and how it helps protect their digital identity and digital assets by checking who is requesting access.',
      bundle: {
        filename: 'Authentication Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 3.2.1
            kind: 'Images',
            name: 'Real-World Authentication Examples',
            filename: 'Images - Real-World Authentication Examples',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.2.3
            kind: 'Image',
            name: 'Logging into a Digital System',
            filename: 'Image - Logging into a Digital System',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.2.4
            kind: 'Worksheet',
            name: 'Authentication in Everyday Life',
            filename: 'Worksheet - Authentication in Everyday Life',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Authentication',
          },
          {
            title: 'Understanding Types of Authentication',
          },
          {
            title: 'Applying Authentication to Digital Assets',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.2.2
        title: 'What is Authentication?',
        supportText:
          'Use this video to introduce authentication as the everyday mechanism that guards students\' digital accounts. Pause to ask how they currently prove their identity on the apps they use most.',
        downloads: {
          video: {
            filename: 'What is Authentication',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What is Authentication - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal:
        'Help students understand the difference between weak and strong usernames and passwords, recognise common password mistakes, and learn simple rules for creating secure passwords that protect their digital accounts and assets.',
      bundle: {
        filename: 'Authentication Part 3 Package',
       },
      included: {
        materials: [
          {
            // ID: 3.3.2
            kind: 'Image',
            name: 'Examples of Weak Passwords',
            filename: 'Image - Examples of Weak Passwords',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.3.3
            kind: 'Image',
            name: 'Examples of Strong Passwords',
            filename: 'Image - Examples of Strong Passwords',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.3.4
            kind: 'Cards',
            name: 'Create a Strong Password',
            filename: 'Cards - Create a Strong Password',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.3.5
            kind: 'Image',
            name: 'Check Your Password',
            filename: 'Image - Check Your Password',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.3.6
            kind: 'Worksheet',
            name: 'My Strong Password Rules',
            filename: 'Worksheet - My Strong Password Rules',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Passwords',
          },
          {
            title: 'Strong Versus Weak Passwords',
          },
          {
            title: 'Creating Strong Passwords Safely',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.3.1
        title: 'Strong and Weak Passwords',
        supportText:
          'Use this video to show students the difference between passwords that protect accounts and passwords that put them at risk. Invite them to reflect on whether their own passwords meet the criteria for strength.',
        downloads: {
          video: {
            filename: 'Strong and Weak Passwords',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'Strong and Weak Passwords - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal:
        'Help students understand the two-factor authentication process and learn about difficulties when managing many passwords. Help students understand what a password manager is and explain how password managers help protect digital identities and digital assets when used responsibly with support from a trusted adult.',
      bundle: {
        filename: 'Authentication Part 4 Package',
       },
      included: {
        materials: [
          {
            // ID: 3.4.1
            kind: 'Image',
            name: 'Two Different Types of Authentication Used Together',
            filename: 'Image - Two Different Types of Authentication Used Together',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.4.2
            kind: 'Schema',
            name: 'Set of Money Coins',
            filename: 'Schema - Set of Money Coins',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.4.3
            kind: 'Schema',
            name: 'Set of Groups',
            filename: 'Schema - Set of Groups',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.4.4
            kind: 'Schema',
            name: 'PIN Cards',
            filename: 'Schema - PIN Cards',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.4.6
            kind: 'Image',
            name: 'How to Use a Password Manager',
            filename: 'Image - How to Use a Password Manager',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.4.7
            kind: 'Image',
            name: 'Password Manager',
            filename: 'Image - Password Manager',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.4.8
            kind: 'Image',
            name: 'Steps of Saving Passwords',
            filename: 'Image - Steps of Saving Passwords',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.4.9
            kind: 'Worksheet',
            name: 'Password Problems and Solutions',
            filename: 'Worksheet - Password Problems and Solutions',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Password Managers',
          },
          {
            title: 'Password Managers',
          },
          {
            title: 'Applying Password Managers Safely',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.4.5
        title: 'What is a Password Manager?',
        supportText:
          'Use this video to introduce password managers as a practical solution for creating and storing strong, unique passwords for every account. Pause to ask students if they have heard of or used one before.',
        downloads: {
          video: {
            filename: 'What is a Password Manager',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What is a Password Manager - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal:
        'Help students understand how their choices and behaviour affect the security of their digital identity, and how acting responsibly helps protect their digital assets, themselves, and others in digital environments.',
      bundle: {
        filename: 'Authentication Part 5 Package',
       },
      included: {
        materials: [
          {
            // ID: 3.5.1
            kind: 'Image',
            name: 'Safe and Unsafe Online Behaviours',
            filename: 'Image - Safe and Unsafe Online Behaviours',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.5.3
            kind: 'Worksheet',
            name: 'Digital Identity and Authentication Scenarios',
            filename: 'Worksheet - Digital Identity and Authentication Scenarios',
            ariaLabel: 'Download material',
          },
          {
            // ID: 3.5.4
            kind: 'Worksheet',
            name: 'How I Protect My Digital Identity',
            filename: 'Worksheet - How I Protect My Digital Identity',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Protecting Digital Identity',
          },
          {
            title: 'Digital Identity and Authentication',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 3.5.2
        title: 'Protecting Your Digital Identity',
        supportText:
          'Use this video to bring together the strategies students have learned for keeping their digital identity safe. Encourage them to identify one specific habit they will change or start after watching.',
        downloads: {
          video: {
            filename: 'Protecting Your Digital Identity',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'Protecting Your Digital Identity - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
  ],
  otherModulesDivider: 'Explore Other Topics',
  otherModulesTitle: 'Other Modules',
  otherModulesSubtitle: 'Browse related modules and continue learning.',
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

export const challengeAT = {
  title: 'Password Lab',
  subtitle:
    'Build a stronger password one round at a time. Each level adds a new ingredient to your password recipe!',
  howItWorks: 'How it Works',
  instruction:
    "Each round introduces a new password requirement. Meet all the current round's criteria to advance — and watch your password become harder and harder to crack!",
  tipLabel: 'Tip',
  tip: 'Use the progress and tips panel next to the game (below it on a phone) to track your rounds and get password tips!',
  yourPassword: 'Your Password',
  realPasswordWarning: '🔒 Practice only! Never type your real passwords here — make up a new one for the game.',
  placeholder: 'Type your password here...',
  passwordInputAriaLabel: 'Password input',
  showPassword: 'Show password',
  strengthAriaLabel: 'Progress towards the round goal',
  roundBadgeTemplate: 'Round {n} of {total}',
  criteriaTitle: 'Password Recipe — Round {n}:',
  criterionLength: 'At least 15 characters',
  criterionPersonal: 'No facts about Alex (name, pet, birth year…)',
  criterionCommon: 'Not a common word or easy pattern',
  criterionWords: '4 or more different words',
  criterionUnique: 'Different from your earlier passwords',
  profileTitle: 'Facts about Alex — keep them out of your password!',
  profile: [
    { icon: '👤', label: 'Name', value: 'Alex' },
    { icon: '🐱', label: 'Pet', value: 'Whiskers' },
    { icon: '🎂', label: 'Born', value: '2008' },
    { icon: '🎮', label: 'Loves', value: 'Minecraft' },
  ],
  charCountTemplate: 'Characters: {n}',
  wordHelperTitle: 'Random word helper',
  wordHelperHint: 'Tap words to add them. Pick 4 that have nothing to do with each other.',
  wordHelperRoll: 'Roll new words',
  wordAddAriaTemplate: 'Add the word {word}',
  words: [
    'river', 'ribbon', 'turtle', 'castle', 'spoon', 'walnut',
    'trumpet', 'mango', 'island', 'pebble', 'maple', 'rocket',
    'tiger', 'planet', 'candle', 'garden', 'pillow', 'bridge',
    'thunder', 'marble', 'cactus', 'puzzle', 'harbor', 'feather',
    'orchid', 'canyon', 'biscuit', 'mirror', 'ladder', 'glacier',
    'pepper', 'whistle', 'saddle', 'compass', 'jungle', 'lemon',
    'blanket', 'dolphin', 'anchor', 'sketch', 'velvet', 'tunnel',
    'kettle', 'lagoon', 'hammock', 'popcorn', 'sunrise', 'crayon',
  ],
  commonWords: [],




  strengthWeak: 'Weak',
  strengthOkay: 'Getting there',
  strengthStrong: 'Goal met ✓',
  feedbackDefault: 'Start typing to see your password strength!',
  feedbackAllMet: '🎉 All requirements met! Hit Next Round to continue.',
  almostThereTemplate: 'Almost there! Try to {hint}.',
  hints: {
    length: 'make it longer (15+ characters)',
    personal: 'remove "{clue}" — it is a fact about Alex that others could guess',
    common: 'avoid easy patterns like "password", "1234" or a repeated word',
    words: 'use 4 or more different words, separated by spaces or dashes',
    unique: 'make it different from your earlier passwords',
  },
  keepGoing: 'Keep going!',
  nextRound: 'Next Round →',
  finish: 'Finish! 🏆',
  nextRoundAriaLabel: 'Proceed to next round',
  tryAgain: 'Try Again',
  tryAgainAriaLabel: 'Clear password and start over',
  completionTitle: 'Password Master!',
  completionText: 'You built four strong passwords: long, hard to guess, made of random words and different every time!',
  completionRounds: '4 / 4 Rounds Completed',
  completionTips: 'A strong password is long, unpredictable, secret and used only once. A password manager can remember all your passwords for you.',
  startOver: 'Start Over',
  roundProgressTitle: 'Round Progress',
  roundProgressDesc: 'Complete all 4 rounds to master passwords',
  rounds: [
    { 
      icon: '🎮', 
      title: 'Create a password for your game account',  
      description: 'Start with length. A long password is much harder to crack — use at least 15 characters!',                                         
      label: 'Round 1', 
      desc: 'Long' 
    },
    { 
      icon: '📧', 
      title: 'Create a password for your email',          
      description: 'Now make it hard to guess. Pretend you are Alex: no facts about Alex, and nothing easy like "password" or "1234".',                                        
      label: 'Round 2', 
      desc: '+ Hard to guess' 
    },
    { 
      icon: '📱', 
      title: 'Create a password for your social media',   
      description: 'Try a passphrase: 4 or more random words that have nothing to do with each other. Need ideas? Use the 🎲 helper!',                                   
      label: 'Round 3', 
      desc: '+ Random words' 
    },
    { 
      icon: '📔', 
      title: 'Create a password for your secret diary',   
      description: 'Final round! Use a brand-new password. Never reuse a password from another account.',               
      label: 'Round 4', 
      desc: '+ Unique' 
    },
  ],
  dosTitle: "✅ Do's",
  dos: [
    'Make it long: 15+ characters',
    'Use 4 or more random words (a passphrase)',
    'Use a different password for every account',
    'Let a password manager remember them',
    'Keep it secret — never share it',
  ],
  dontsTitle: "❌ Don'ts",
  donts: [
    'Use your name, birthday or pet\'s name',
    'Use "123456", "password" or keyboard patterns',
    'Repeat the same word or character',
    'Reuse one password on many accounts',
    'Tell your password to friends',
  ],
}
