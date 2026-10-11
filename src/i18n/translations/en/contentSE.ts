// ---------------------------------------------------------------------------
// Social Engineering (SE) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Social Engineering module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentSE = {
  aim:
    'To provide core knowledge of what social engineering is, with emphasis on the risks it poses and principles for protecting against it.',
  objectives: [
    'To introduce the concept of social engineering, focusing on attacker goals.',
    'To explain various forms of social engineering and the contexts in which they may occur.',
    'To develop skills in identifying social engineering techniques and ways to protect against them.',
  ],
  outcomes: [
    'I can describe what social engineering is and types of social engineering.',
    'I can explain why social engineering is used by attackers.',
    'I can give examples of contexts in which social engineering attacks are likely to occur.',
    'I can recognise socially engineered attacks in given scenarios.',
    'I can demonstrate ways to protect against social engineering in given scenarios and justify why I made those choices.',
  ],
  parts: [
    {
      goal: 'Help students understand what social engineering is and why social engineering is used by attackers.',
      bundle: {
        filename: 'Social Engineering Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.1.2
            kind: 'Image',
            name: 'Hacking Systems Versus Tricking People',
            filename: 'Image - Hacking Systems Versus Tricking People',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.1.3
            kind: 'Image',
            name: 'Goals of an Attacker',
            filename: 'Image - Goals of an Attacker',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.1.4
            kind: 'Scenario Cards',
            name: 'What Does an Attacker Want?',
            filename: 'Scenario Cards - What Does an Attacker Want',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.1.5
            kind: 'Solution Cards',
            name: 'What Does an Attacker Want?',
            filename: 'Solution Cards - What Does an Attacker Want',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.1.6
            kind: 'Worksheet',
            name: 'Understanding Social Engineering',
            filename: 'Worksheet - Understanding Social Engineering',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Introducing the Concept of Social Engineering',
          },
          {
            title: 'What Do Attackers Want?',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 5.1.1
        title: 'What is Social Engineering?',
        supportText:
          'Use this video to introduce social engineering as a technique that exploits human trust rather than technical systems. Pause to ask students if they can recall a situation where someone tried to trick them online.',
        downloads: {
          video: {
            filename: 'What is Social Engineering',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What is Social Engineering - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal: 'Help students understand why social engineering is used by attackers and to recognise contexts in which social engineering attacks are likely to occur, emphasising that the attackers exploit human emotions.',
      bundle: {
        filename: 'Social Engineering Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.2.1
            kind: 'Scenario Cards',
            name: 'Attacker Tactics',
            filename: 'Scenario Cards - Attacker Tactics',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.2.2
            kind: 'Scenario Cards',
            name: 'Emotional Manipulation Puzzle',
            filename: 'Scenario Cards - Emotional Manipulation Puzzle',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.2.3
            kind: 'Worksheet',
            name: 'Why Social Engineering Works',
            filename: 'Worksheet - Why Social Engineering Works',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Thinking Like an Attacker',
          },
          {
            title: 'Everyday Situations Where Social Engineering Can Happen',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
    },
    {
      goal: 'Help students recognise techniques and contexts in which social engineering attacks are likely to occur in given scenarios, both online and offline.',
      bundle: {
        filename: 'Social Engineering Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.3.2
            kind: 'Worksheet',
            name: 'Social Engineering: Dot-to-Dot Challenge',
            filename: 'Worksheet - Social Engineering Dot-to-Dot Challenge',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Types of Social Engineering',
          },
          {
            title: 'Practising Recognition of Social Engineering',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 5.3.1
        title: 'Types of Social Engineering',
        supportText:
          'Use this video to help students recognise the different forms social engineering can take, from phishing emails to phone impersonation. Pause to discuss which type they think would be hardest to spot and why.',
        downloads: {
          video: {
            filename: 'Types of Social Engineering',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'Types of Social Engineering - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      goal: 'Help students learn ways to protect themselves and others against social engineering in given scenarios and to be able to explain why they made those choices.',
      bundle: {
        filename: 'Social Engineering Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 5.4.1
            kind: 'Image',
            name: 'Stop, Think, Check, Ask',
            filename: 'Image - Stop, Think, Check, Ask',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.4.2
            kind: 'Worksheet',
            name: 'Stop, Think, Check, Ask',
            filename: 'Worksheet - Stop, Think, Check, Ask',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.4.3
            kind: 'Scenario Cards',
            name: 'What Would You Do?',
            filename: 'Scenario Cards - What Would You Do',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.4.4
            kind: 'Role Cards',
            name: 'Prosocial Behaviour or Bystander Apathy',
            filename: 'Role Cards - Prosocial Behaviour or Bystander Apathy',
            ariaLabel: 'Download material',
          },
          {
            // ID: 5.4.5
            kind: 'Worksheet',
            name: 'Protecting Myself and Others',
            filename: 'Worksheet - Protecting Myself and Others',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'A Simple Model for Safe Decisions',
          },
          {
            title: 'Practising Safe Responses',
          },
          {
            title: 'Protecting Others and Being a Responsible Citizen',
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
  title: 'Phishing Case Files',
  subtitle: 'Become a Message Detective! Can you spot scams in emails, chats, texts, calls and even in person? Decide: Trust it, Stop & ask an adult, or Ignore / Report.',
  howItWorks: 'How it Works',
  instruction: 'Read each case file. Is it safe to trust? Should you stop and ask a trusted adult? Or should you ignore and report it? Watch for pressure, strange links and requests for private information. Then spot the trick the attacker used.',
  tip: 'If you are unsure about some message, check the Detective Notes with some tips about how to identify scams.',
  tipLabel: 'Tip',
  startTitle: 'Welcome, Detective!',
  startDescription: 'You are about to investigate {n} cases: emails, chats, texts, phone calls and even visitors. For each one, choose: trust it, stop and ask an adult, or ignore / report. Then spot the trick. Good luck!',
  startButton: 'Start Investigation',
  caseProgress: 'Case Progress',
  trustButton: '👍 Trust',
  ignoreButton: '⚠️ Ignore / Report',
  nextCase: 'Next Case →',
  completedTitle: 'Investigation Complete!',
  completedDescription: 'Here\'s how you did:',
  casesIdentified: 'out of {n} cases answered in the best way',
  detectiveRankLabel: 'Detective Rank',
  defaultRank: 'Rookie Detective',
  defaultRankMessage: 'Keep practising to level up!',
  performanceSummary: 'Performance Summary',
  playAgain: 'Play Again',
  detectiveNotes: 'Detective Notes',
  detectiveTipsTitle: 'Tips to stay safe online',
  redFlags: [
    '🚩 Asks for passwords',
    '🚩 Fake email addresses',
    '🚩 Too-good-to-be-true prizes',
    '🚩 Urgent deadlines & threats',
    '🚩 Suspicious downloads',
    '🚩 Emotional manipulation',
    '🚩 Odd messages from people you know',
  ],
  proTip: 'Pro Tip: When in doubt, ask a trusted adult before clicking links or sharing info!',
  caseLabel: 'Case',
  ofLabel: 'of',
  fromLabel: 'From',
  subjectLabel: 'Subject',
  messageLabel: 'Message',
  rankRookie: '🥉 Rookie Detective',
  rankRookieMsg: 'You\'re just starting your investigation. Keep practising to spot the red flags!',
  rankJunior: '🥈 Junior Detective',
  rankJuniorMsg: 'You\'re getting better at spotting suspicious messages. Well done!',
  rankSenior: '🥇 Senior Detective',
  rankSeniorMsg: 'You\'re great at identifying phishing and scams. Nice work!',
  rankMaster: '👑 Master Detective',
  rankMasterMsg: 'You\'re a phishing expert! You caught almost all the tricks. Outstanding!',
  correctLabel: 'Correct',
  incorrectLabel: 'Incorrect',
  emailBadge: 'Email',
  chatBadge: 'Chat',
  smsBadge: 'Text message',
  callBadge: 'Phone call',
  personBadge: 'In person',
  checkButton: '🛑 Stop & ask an adult',
  actionTrust: 'Trust it',
  actionCheck: 'Stop & ask an adult',
  actionReport: 'Ignore / Report',
  bestLabel: 'Best answer!',
  safeLabel: 'Safe choice',
  bestAnswerTemplate: 'Best answer: {action}',
  safeNoteOverCautious: 'Being careful is never a bad idea. This time the message was fine, so you could have trusted it.',
  safeNoteAskOnScam: 'Asking an adult is a smart move. Even better here: do not reply, and report it.',
  safeNoteReportOnCheck: 'Ignoring it is a safe move. Even better: ask an adult to check if it is real.',
  quizTitle: 'Spot the trick! Which trick is this message using?',
  quizCorrectTemplate: '🔍 Yes! The trick is: {tactic}.',
  quizWrongTemplate: '🔍 Not this time. The trick is: {tactic}.',
  trickLabel: 'Trick used',
  wantLabel: 'What the attacker wanted',
  tricksSpottedTemplate: '🔍 Tricks spotted: {n} of {total}',
  safeCountTemplate: '🛡️ Safe choices (not the best answer): {n}',
  stcaTitle: 'Stop, Think, Check, Ask',
  stca: [
    { icon: '🛑', label: 'Stop', text: 'Pause before you answer or click.' },
    { icon: '🤔', label: 'Think', text: 'What do they want? What feeling are they trying to give you?' },
    { icon: '🔍', label: 'Check', text: 'Look for warning signs. Check with the real person or website in another way.' },
    { icon: '🧑‍🏫', label: 'Ask', text: 'Talk to a parent, teacher or other trusted adult.' },
  ],
  tactics: {
    urgency: { label: 'Urgency', desc: 'They want you to rush, so you do not stop to think.' },
    fear: { label: 'Fear', desc: 'They scare you so you act before you think.' },
    trust: { label: 'Trust & friendship', desc: 'They act like a friend or a helper so you lower your guard.' },
    reward: { label: 'Prize or curiosity', desc: 'A prize or a surprise makes you curious or greedy, so you click.' },
    authority: { label: 'Fake authority', desc: 'They pretend to be someone in charge, so you obey.' },
    pity: { label: 'Pity', desc: 'They make you feel sorry for someone, so you help without checking.' },
  },
  wants: { information: 'Information', access: 'Access', money: 'Money' },

  scenarios: [
    {
      id: 1,
      from: 'Prize Center <winner@free-prizes.net>',
      subject: 'You Won $1,000!',
      message: 'Congratulations! You\'ve been selected as our lucky winner! Click here to claim your $1,000 prize. Just enter your parent\'s bank details.',
      explanation: 'This is a classic scam! Real prizes don\'t ask for bank details. The email address looks fake too.',
    },
    {
      id: 2,
      from: 'BestFriend_99',
      message: 'Hey! Check out this cool website I found: www.free-vbucks-4real.com — you can get unlimited V-Bucks!',
      explanation: 'Even if it looks like it\'s from a friend, their account might be hacked. Free V-Bucks sites are always scams.',
    },
    {
      id: 3,
      from: 'School Admin <admin@your-school.edu>',
      subject: 'Homework reminder',
      message: 'Just a reminder that your science project is due next Friday. Please check the class portal for details.',
      explanation: 'This is a normal school email. It comes from a real school address, does not ask for personal info, and has no strange links.',
    },
    {
      id: 4,
      from: 'CoolGamer99',
      message: 'I\'m a game developer! Send me your login and I\'ll add 1000 coins to your account for free!',
      explanation: 'Real game developers never ask for your password. This person is trying to steal your account!',
    },
    {
      id: 5,
      from: 'Security Team <alert@g00gle-security.com>',
      subject: 'URGENT: Your account will be deleted!',
      message: 'Your account will be permanently deleted in 24 hours unless you verify your password NOW!',
      explanation: 'Notice the fake domain \'g00gle\' (with zeros). Real companies never threaten to delete your account via email or ask for passwords.',
    },
    {
      id: 6,
      from: 'Mom 💕',
      message: 'Hey sweetie, can you pick up some milk on the way home? Love you!',
      explanation: 'This is a normal message from a family member. No strange links and no requests for personal information.',
    },
    {
      id: 7,
      from: 'Charity Helper <donate@kids-help-now.org>',
      subject: 'Help children in need!',
      message: 'Please donate now! Children are suffering! Send your parent\'s credit card number to help immediately!',
      explanation: 'Real charities never ask for credit card numbers via email. This is using emotions to trick you.',
    },
    {
      id: 8,
      from: 'Unknown User',
      message: 'Hi! I\'m new at your school. What\'s your home address so I can come over and hang out?',
      explanation: 'Never share your address with strangers online, even if they claim to know you. A real new student would ask at school.',
    },
    {
      id: 9,
      from: 'Cloud Drive Alerts <alerts@cloud-drive-help.com>',
      subject: 'Shared document locked',
      message: 'Someone tried to open your file. Verify your login now to keep access to your cloud documents.',
      explanation: 'This message creates panic and pushes you to log in through a suspicious link. Open the real app directly instead.',
    },
    {
      id: 10,
      from: 'School Office',
      message: 'Reminder: school closes early at 1 PM tomorrow for staff training. See the notice in the parent portal.',
      explanation: 'This is a normal school update and doesn\'t ask for passwords, money, or private account info.',
    },
    {
      id: 11,
      from: 'App Store Security <security@app-store-verify.net>',
      subject: 'Receipt problem: confirm card now',
      message: 'Your last purchase failed. Confirm your full card number and CVV in 10 minutes to avoid account suspension.',
      explanation: 'Real app stores never ask for full card details and CVV by email. Urgent deadlines are a common scam trick.',
    },
    {
      id: 12,
      from: 'School Library <library@your-school.edu>',
      subject: 'Reading club meeting tomorrow',
      message: 'Reminder: Reading Club meets tomorrow at lunch in Room 12. Bring your current book if you can.',
      explanation: 'This is a normal school reminder from a trusted address. It asks for no passwords or private account details.',
    },
    {
      id: 13,
      from: 'Coach Rivera',
      message: 'Practice starts 15 minutes later today because of weather. Bring your water bottle.',
      explanation: 'This is a routine schedule update. It does not ask for private information or for anything odd.',
    },
    {
      id: 14,
      from: 'Student Portal <noreply@districtschools.org>',
      subject: 'New grades posted',
      message: 'New grades are now available in the student portal. Open the portal from your usual school bookmark to review them.',
      explanation: 'This message points you to your usual school portal. It does not ask for passwords, payments or private data.',
    },
    {
      id: 15,
      from: 'Unknown number',
      message: 'Parcel notice: We could not deliver your package. Pay a $1.99 fee within 24 hours to book a new delivery: parcel-pay-now.net/fee',
      explanation: 'You cannot tell if a parcel is really on its way, and the link leads to an odd website. Do not click or pay. Ask an adult to check the real delivery website or app.',
    },
    {
      id: 16,
      from: 'Unknown number (phone call)',
      message: '"Hello! This is Game Support. Your account has been hacked! To save it, I will text you a code. Read the code out to me now, quickly, before the hackers get in!"',
      explanation: 'Real game support never calls to ask for a code. That code is the key to your account. Hang up and tell an adult.',
    },
    {
      id: 17,
      from: 'A stranger at the school door',
      message: '"Hi! I\'m here to fix the Wi-Fi. The door is locked. Can you let me in? Quick, I\'m late!"',
      explanation: 'You do not know this person, and they are rushing you. Letting a stranger in is a trick called tailgating. Do not open the door. Tell a teacher, who can check if the repair visit is real.',
    },
    {
      id: 18,
      from: 'IT Helpdesk <helpdesk@your-school.edu>',
      subject: 'Your school password expires in 2 days',
      message: 'Hello, your school password will expire in 2 days. To keep your account, choose a new password here: your-school.edu/new-password',
      explanation: 'This could be real, but you cannot be sure, and it pushes you to click a link. Do not use the link. Open the school portal from your usual bookmark, or ask a teacher if the message is real.',
    },
    {
      id: 19,
      from: 'Mia 😄 (classmate)',
      message: 'omg is this you in this video?? 😂😂 look: vid-clips-now.net/mia',
      explanation: 'Friends can have hacked accounts. This message makes you curious so you click fast. Check with Mia in person or in another app before you click anything.',
    },
    {
      id: 20,
      from: 'Mr. Evans <evans@your-school.edu>',
      subject: 'Museum trip: permission slip',
      message: 'Hi everyone, please ask your parents to sign the permission slip for the museum trip and bring it to school by Friday. We cannot take anyone without it. Thank you!',
      explanation: 'A deadline alone is not a warning sign. This email comes from a school address, asks for a paper slip, and wants no passwords, money or private details.',
    },
    {
      id: 21,
      from: 'Sam (classmate)',
      message: 'Hey! Did you finish the maths homework? I\'ll bring my notes tomorrow so we can compare 😊',
      explanation: 'This is a normal chat between friends. It asks for nothing private and has no strange links.',
    },
  ],
}
