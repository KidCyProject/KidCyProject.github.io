// ---------------------------------------------------------------------------
// Attacker Perspective (AP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Attacker Perspective module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentAP = {
  aim:
    'To provide an overview of the attacker perspective by helping learners recognise attacker techniques and understand the motivations behind cyber-attacks.',
  objectives: [
    'To develop understanding of attacker motivations, including psychological, social, and economic factors.',
    'To build skills in recognising common attacker techniques.',
  ],
  outcomes: [
    'I understand the attacker motivations and can give examples related to psychological, social and economic factors.',
    'I can recognise attacker techniques in given scenarios.',
  ],
  parts: [
    {
      goal:
        'Help students understand the concept of a trusted person and develop skills in identifying the circle of trusted persons.',
      bundle: {
        filename: 'Attacker Perspective Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.1.1
            kind: 'Worksheet',
            name: 'Trusted People Around Me',
            filename: 'Worksheet - Trusted People Around Me',
            ariaLabel: 'Download material',
          },
          {
            // ID: 2.1.2
            kind: 'Worksheet',
            name: 'Circles of Trust',
            filename: 'Worksheet - Circles of Trust',
            ariaLabel: 'Download material',
          },
          {
            // ID: 2.1.3
            kind: 'Image',
            name: 'Situation: Found Money',
            filename: 'Image - Situation Found Money',
            ariaLabel: 'Download material',
          },
          {
            // ID: 2.1.4
            kind: 'Image',
            name: 'Situation: Saw a Photo',
            filename: 'Image - Situation Saw a Photo',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Define the Circle of Trusted People',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
    },
    {
      goal: 'Help students understand the concept of an attacker and attacker motivation.',
      bundle: {
        filename: 'Attacker Perspective Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.2.1
            kind: 'Scenario Cards',
            name: 'Identify the Behaviour',
            filename: 'Scenario Cards - Identify the Behaviour',
            ariaLabel: 'Download material',
          },
          {
            // ID: 2.2.2
            kind: 'Scenario Cards',
            name: 'Recognise the Characters',
            filename: 'Scenario Cards - Recognise the Characters',
            ariaLabel: 'Download material',
          },
          {
            // ID: 2.2.4
            kind: 'Image',
            name: 'Attacker Motivations',
            filename: 'Image - Attacker Motivations',
            ariaLabel: 'Download material',
          },
          {
            // ID: 2.2.5
            kind: 'Image',
            name: 'Looking into the Fairytale: Attacker Motivation and Means',
            filename: 'Image - Looking into the Fairytale Attacker Motivation and Means',
            ariaLabel: 'Download material',
          },
          {
            // ID: 2.2.6
            kind: 'Worksheet',
            name: 'Attack Analysis',
            filename: 'Worksheet - Attack Analysis',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Define a Cybersecurity Attacker',
          },
          {
            title: "Understand the Attacker's Motivation",
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 2.2.3
        title: 'Who is Behind Cyber Attacks?',
        supportText:
          'Use this video to help students picture the real people and motives behind cyber attacks, moving beyond the stereotype of a lone hacker. Pause to ask who they imagine is responsible and why.',
        downloads: {
          video: {
            filename: 'Who is Behind Cyber Attacks',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'Who is Behind Cyber Attacks - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal: 'Help students understand the basic techniques (tactics) relevant to children that attackers use to achieve their goals and to recognise attacker techniques in given scenarios.',
      bundle: {
        filename: 'Attacker Perspective Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 2.3.1
            kind: 'Reading',
            name: 'Smishing and Impersonation',
            filename: 'Reading - Smishing and Impersonation',
            ariaLabel: 'Download material',
          },
          {
            // ID: 2.3.2
            kind: 'Reading',
            name: 'Vishing, Fraud, and Impersonation',
            filename: 'Reading - Vishing, Fraud, and Impersonation',
            ariaLabel: 'Download material',
          },
          {
            // ID: 2.3.3
            kind: 'Reading',
            name: 'Most Common Cyber Threats',
            filename: 'Reading - Most Common Cyber Threats',
            ariaLabel: 'Download material',
          },
          {
            // ID: 2.3.4
            kind: 'Scenario Cards',
            name: 'Common Adversary Techniques',
            filename: 'Scenario Cards - Common Adversary Techniques',
            ariaLabel: 'Download material',
          },
          {
            // ID: 2.3.5
            kind: 'Cards',
            name: 'Attackers and Their Plans',
            filename: 'Cards - Attackers and Their Plans',
            ariaLabel: 'Download material',
          },
          {
            // ID: 2.3.6
            kind: 'Worksheet',
            name: 'Puzzle for the Game Party of Attackers',
            filename: 'Worksheet - Puzzle for the Game Party of Attackers',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Understanding Behavioural Patterns',
          },
          {
            title: 'Understanding Attack Paths',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
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
  title: "In Hacker's Mind",
  subtitle:
    'You are an ethical hacker. Find the weak spots on a social media profile, plan the attack the way an attacker would, and learn how to stop it!',
  howItWorks: 'How it Works',
  instruction:
    'Examine this social media profile as if you were a hacker looking for weak spots. Almost everything on the screen is clickable, so think carefully: clicking something that is not a real vulnerability costs you a life! Then you plan the attack the way an attacker would, and find out how to stop it.',
  tipLabel: 'Tip',
  tip: "There are exactly 4 real vulnerabilities hidden among many innocent-looking elements. Not every clickable thing is a security flaw!",
  livesTitle: 'Lives',
  livesDesc: "3 wrong clicks and it's game over",
  vulnerabilitiesFoundTitle: '🔍 Vulnerabilities Found',
  vulnerabilitiesEmpty: 'None found yet…',
  vulnerabilitiesCount: '/ 4',
  attackerTargetsTitle: '🎯 What Attackers Target',
  attackerTargets: [
    '🚩 HTTP instead of HTTPS',
    '🚩 Real-time location sharing',
    '🚩 Full birthdate visible publicly',
    '🚩 Security question answers exposed',
  ],
  profile: {
    displayName: 'Alex Johnson',
    handle: '@alex123',
    statusActiveNow: 'Active now',
    bioText: '16 · Gamer 🎮 · Manga Fan',
    aboutTitle: 'About',
    statsFriendsLabel: 'Friends',
    statsFollowingLabel: 'Following',
    bornText: 'Born June 14, 2008',
    emailText: 'alex.gamer@freemail.com',
    petNameText: 'Pet Name: Whiskers',
    post1Time: '📍 Downtown Shopping Mall · Just now',
    post1Body: 'Just grabbed a coffee ☕ Anyone nearby? Come find me at the food court! 😄',
    post1Badge: '🛍️ Downtown Mall — checked in',
    post2Time: '2 hours ago',
    post2Body: 'Just got back from school! Having pizza with the family 🍕 Best evening ever!',
    actionLike: 'Like',
    actionComment: 'Comment',
    actionShare: 'Share',
    navSearch: 'Search people and posts',
    actionFollow: 'Follow',
    actionMessage: 'Message',
    badge1: '⭐ Level 42',
    badge2: '🏆 Top 10% player',
    badge3: '🔥 120-day streak',
    tabPosts: 'Posts',
    tabPhotos: 'Photos',
    tabFriends: 'Friends',
    statsPostsLabel: 'Posts',
    joinedText: 'Joined March 2021',
    interestsTitle: 'Interests',
    interest1: 'Minecraft',
    interest2: 'Manga',
    interest3: 'Football',
    interest4: 'Pizza',
    post3Time: 'Yesterday',
    post3Body: 'New high score! 🏆 Can anyone beat 48,200 points?',
    post3Score: '48,200',
  },
  vulnFoundSuffix: '/ 4 vulnerabilities found',
  tryAgain: 'Try Again',
  winTitle: 'Excellent Work!',
  winMsg: "You spotted all 4 vulnerabilities like a real security researcher. Now you know how attackers think!",
  loseTitle: 'Game Over!',
  loseMsgTemplate:
    "You ran out of lives! You found {found} out of {total} vulnerabilities. The missed ones are now highlighted in red.",
  attackerVoiceInitial: 'Interesting profile… let me scan for weaknesses.',
  attackerVoiceWin: '🏆 Impressive! You found all {total} weaknesses. You think like a hacker!',
  attackerVoiceLose: '💀 Too many mistakes. Study the profile more carefully next time.',
  attackerVoiceAlreadyTagged: 'Already tagged: {label}.',
  attackerVoiceCorrect: '🔓 Vulnerability found: {label}! {explain}',
  attackerVoiceWrong: 'Not a vulnerability — {explain}',
  part1Label: 'Part 1 of 3: Scan the profile',
  part2Label: 'Part 2 of 3: Plan the attack',
  part3Label: 'Part 3 of 3: Why, and how to stop it',
  continueButton: 'Continue: plan the attack →',
  planTitle: 'The attacker\'s plan',
  planIntro: 'A small clue is not a danger on its own. Attackers put clues together into a plan. For each clue, choose the goal it helps with.',
  planTrayTitle: 'Clues from the profile',
  planChooseLabel: 'Which goal does this clue help with?',
  planVoiceCorrect: '🧩 Good match! {explain}',
  planVoiceWrong: '🤔 Not that goal. {explain}',
  planSummaryTitle: 'Small clues add up',
  planSummaryText: 'Birthday, pet name and an unsafe page can open an account. A live location and a post about school can show where someone is. Attackers collect clues like these, one by one.',
  planScoreTemplate: '{n} of {total} clues on the first try',
  toQuizButton: 'Continue: why, and how to stop it →',
  goals: {
    account: { icon: '🔑', title: 'Break into the account', hint: 'Take over the profile or the game account' },
    person: { icon: '🧭', title: 'Find the person in real life', hint: 'Know where the person is, and when' },
    none: { icon: '🚫', title: 'Not useful', hint: 'Does not help an attacker much' },
  },
  clues: [
    {
      id: 'birthday',
      icon: '🎂',
      text: 'Full birthday on the profile',
      explanation: 'People often use their birthday in passwords and security answers. An attacker tries it first.',
    },
    {
      id: 'pet',
      icon: '🐱',
      text: 'Pet name on the profile',
      explanation: 'Pet names are popular passwords and security answers. An attacker can try the name to get into the account.',
    },
    {
      id: 'http',
      icon: '🔓',
      text: 'The page uses http:// and not https://',
      explanation: 'On an http:// page, what you type can be read by others on the same network. That includes a password.',
    },
    {
      id: 'location',
      icon: '📍',
      text: 'Live location in a post',
      explanation: 'A live location shows exactly where someone is right now. A stranger could misuse it to find the person.',
    },
    {
      id: 'routine',
      icon: '🏫',
      text: 'Post: "Just got back from school!"',
      explanation: 'This tells a stranger when the person is usually where. Small details like this can add up to a plan.',
    },
    {
      id: 'avatar',
      icon: '👤',
      text: 'Profile picture',
      explanation: 'A profile picture is normal. It does not help an attacker break in or find the person.',
    },
    {
      id: 'bio',
      icon: '🎮',
      text: 'Bio: gamer and manga fan',
      explanation: 'Hobbies are not a secret. On their own they do not help an attacker much.',
    },
    {
      id: 'friends',
      icon: '👥',
      text: 'Friend and follower counts',
      explanation: 'A count is only a number. It gives an attacker nothing to use.',
    },
  ],
  quizTitle: 'Why, and how to stop it',
  quizProgressTemplate: 'Question {n} of {total}',
  motiveLabel: 'Why would the attacker do this?',
  defendLabel: 'What helps most?',
  quizVoiceCorrect: '✅ {explain}',
  quizVoiceWrong: '❌ Not quite. {explain}',
  nextButton: 'Next →',
  resultsButton: 'See my results →',
  motivationsTitle: 'Why attackers attack',
  motivationsSubtitle: 'Eight motivations',
  motivations: {
    financial: { name: 'Financial gain', desc: 'Selling stolen data or asking for ransom' },
    reputation: { name: 'Reputation', desc: 'Showing off and wanting recognition' },
    revenge: { name: 'Revenge', desc: 'Getting back at someone' },
    espionage: { name: 'Espionage', desc: 'Getting secret information for a country or a company' },
    error: { name: 'Just an error', desc: 'An accident that causes a problem' },
    experiment: { name: 'Experimenting', desc: 'Trying things out for fun' },
    fear: { name: 'Fear', desc: 'Doing something bad because of pressure or threats' },
    beliefs: { name: 'Beliefs', desc: 'Fighting for a cause someone believes in' },
  },
  motiveCases: [
    {
      id: 1,
      text: 'An older student breaks into a younger kid\'s account and posts silly things, so everyone can see how clever he is.',
      explanation: 'He wants to be admired. Wanting recognition and showing off is the motivation called "reputation".',
    },
    {
      id: 2,
      text: 'A stranger breaks into hundreds of accounts and sells the logins on a website.',
      explanation: 'The stranger wants money. Selling stolen data is "financial gain".',
    },
    {
      id: 3,
      text: 'A student breaks into a classmate\'s account because the classmate was mean to them last month.',
      explanation: 'The student wants to get back at someone. This motivation is called "revenge".',
    },
    {
      id: 4,
      text: 'A kid downloads a hacking tool and tries it on a school computer, just to see what happens.',
      explanation: 'The kid does not want to hurt anyone and just tries things out. That is "experimenting", but it can still do real damage.',
    },
    {
      id: 5,
      text: 'An older kid tells a younger one: "Get me your friend\'s password, or I will tell everyone your secret." Why does the younger kid do it?',
      explanation: 'The younger kid is afraid of what the older one will do. Doing something bad because of pressure or threats is "fear".',
    },
  ],
  defendCases: [
    {
      id: 1,
      text: 'An attacker wants to guess a password. Which habit makes it hardest for them?',
      options: [
        'A long password of random words that has nothing to do with you',
        'Your pet\'s name and the year you were born',
        'The same short password for every account',
      ],
      explanation: 'A long password of random words is hard to guess. Birthdays and pet names are the first things an attacker tries, and one password for everything puts all your accounts at risk.',
    },
    {
      id: 2,
      text: 'A page starts with http:// and has no padlock, but it asks you to type your password. What do you do?',
      options: [
        'Do not type it. Look for a page that starts with https:// and has a padlock',
        'Type it quickly, before anyone notices',
        'Type a shorter password, so there is less to read',
      ],
      explanation: 'On an http:// page, others on the network can read what you type. Only enter passwords on https:// pages.',
    },
    {
      id: 3,
      text: 'A friend wants you to post where you are right now, so everyone can come. What is the safest choice?',
      options: [
        'Turn off live location, and share the photo later, after you have left',
        'Post it, but only for 5 minutes',
        'Post it so that everyone, even strangers, can see it',
      ],
      explanation: 'A live location tells strangers where you are right now. Share photos later, and only with people you know.',
    },
  ],
  finalTitle: 'Attacker mind: unlocked!',
  finalPart1Template: 'Part 1: {n} of {total} weak spots found',
  finalPart2Template: 'Part 2: {n} of {total} clues on the first try',
  finalPart3Template: 'Part 3: {n} of {total} questions on the first try',
  finalScoreTemplate: 'Score: {n} of {total}',
  rankGreat: 'You think like an attacker and act like a defender. Great work!',
  rankGood: 'Good work! Replay the parts you found tricky.',
  rankPractise: 'Keep practising. Look at small clues and ask: how could someone put them together?',
  hotspots: [
    { 
      id: 'http',      
      label: 'Unencrypted Connection (HTTP)',    
      explain: 'This site uses HTTP, not HTTPS. What you type here, even passwords, is not scrambled. Anyone on the same network can read it.' 
    },
    { id: 'avatar',    
      label: 'Profile Picture',                  
      explain: "Profile photos are a standard part of social media. They're not a security risk on their own!" 
    },
    { 
      id: 'username',  
      label: 'Display Name / Username',          
      explain: 'Showing your name and @handle is normal on social sites. It is not a vulnerability.' 
    },
    { 
      id: 'online',    
      label: 'Active Status',                    
      explain: 'Showing when you are online is a common feature. It is a small privacy matter, but not a real vulnerability.' 
    },
    { 
      id: 'bio',       
      label: 'Bio / Interests',                  
      explain: "Listing general hobbies like gaming or anime is fine. This doesn't expose sensitive account data." 
    },
    { 
      id: 'followers', 
      label: 'Follower / Friend Count',          
      explain: 'Friend and follower counts are a normal feature. Not a vulnerability!' 
    },
    { 
      id: 'birthday',  
      label: 'Full Birthday Exposed',            
      explain: 'Showing your full birthday is dangerous! Attackers use it to guess passwords (like \'alex2008\'), answer security questions and get into accounts.' 
    },
    { 
      id: 'email',     
      label: 'Email on Profile',                 
      explain: 'A public email can bring spam, but it is a smaller problem than an exposed password or security answer.' 
    },
    { 
      id: 'petname',   
      label: 'Pet Name Exposed',                 
      explain: 'Your pet\'s name is often a security answer. Attackers can use it to get into accounts or to trick you.' 
    },
    { 
      id: 'location',  
      label: 'Real-time Location Broadcast',    
      explain: 'This post shows exactly where Alex is right now! Anyone, even strangers and attackers, can see it. Sharing your live location is a serious safety risk.' 
    },
    { 
      id: 'post2',     
      label: 'Generic Post',                     
      explain: 'Posting about everyday things like pizza is fine. It gives away nothing sensitive!' 
    },
    { 
      id: 'like1',     
      label: 'Like Button',                      
      explain: 'Liking posts is normal and harmless!' 
    },
    { 
      id: 'comment1',  
      label: 'Comment Button',                   
      explain: 'Comments are a normal feature. Not a vulnerability!' 
    },
    { 
      id: 'share1',    
      label: 'Share Button',                     
      explain: "Sharing posts is a basic social media feature. The button itself isn't a security issue!" 
    },
    { 
      id: 'like2',     
      label: 'Like Button',                      
      explain: 'Liking posts is normal and harmless!' 
    },
    { 
      id: 'comment2',  
      label: 'Comment Button',                   
      explain: "Comments are a standard social media feature!" 
    },
    { id: 'navbar', label: 'Site Menu Bar', explain: 'The logo, search box and menu icons look the same on every site. Nothing private is shown here.' },
    { id: 'cover', label: 'Cover Photo', explain: 'A cover picture is just decoration. It gives away nothing about your accounts.' },
    { id: 'followbtn', label: 'Follow and Message Buttons', explain: 'These are normal features of every social network. The buttons themselves are not a weakness.' },
    { id: 'badges', label: 'Game Badges', explain: 'Showing a game level or a streak of days is harmless. It is just a little bragging!' },
    { id: 'tabs', label: 'Profile Tabs', explain: 'Tabs like Posts, Photos and Friends only help you move around the profile. They are not a vulnerability.' },
    { id: 'joined', label: 'Join Date', explain: 'When someone joined a site does not help to guess a password or to find the person. It is harmless.' },
    { id: 'interests', label: 'Interest Tags', explain: 'Sharing hobbies like games or football is fine. Just do not use them as your password!' },
    { id: 'friendsPreview', label: 'Friends Preview', explain: 'Showing a few friends is a normal feature. A good habit is to accept only people you really know.' },
    { id: 'post3', label: 'Gaming Post', explain: 'A post about a game score shares a hobby, not a secret. It does not show where Alex is, or any account data.' },
  ],
}
