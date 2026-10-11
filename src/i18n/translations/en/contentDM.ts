// ---------------------------------------------------------------------------
// Digital Misuse (DM) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Digital Misuse module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDM = {
  aim:
    'To provide core knowledge of what digital abuse and misuse are and principles for dealing with it.',
  objectives: [
    'To introduce the concept of digital abuse and misuse in digital environments.',
    'To explain motivations behind digital abuse and misuse.',
    'To build awareness of digital abuse and misuse cases, techniques used by abusers, and principles for dealing with it.',
  ],
  outcomes: [
    'I can define digital abuse and misuse, describe examples involving misinformation, disinformation, cyberbullying, unsafe interactions with strangers and harmful influencer behaviour, and explain possible motivations behind these examples.',
    'I can recognise techniques used by abusers and misusers in given scenarios.',
    'I can suggest and discuss ways to deal with digital abuse and misuse in given scenarios.',
  ],
  parts: [
    {
      title: 'Misinformation',
      goal: 'Help students understand what misinformation is, what motivates people to do it and how to recognise and deal with misinformation in given scenarios.',
      bundle: {
        filename: 'Digital Misuse Part 1 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.1.2
            kind: 'Game Cards',
            name: 'Truth Detectives',
            filename: 'Game Cards - Truth Detectives',
            ariaLabel: 'Download material',
          },
          {
            // ID: 7.1.3
            kind: 'Image',
            name: 'The Cinnamon Challenge',
            filename: 'Image - The Cinnamon Challenge',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Identifying Misinformation',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.1.1
        title: 'What is Misinformation?',
        supportText:
          'Use this video to introduce misinformation as false or inaccurate content that can spread online without harmful intent. Pause to ask students if they have ever shared something that later turned out not to be true.',
        downloads: {
          video: {
            filename: 'What is Misinformation',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What is Misinformation - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      title: 'Disinformation',
      goal: 'Help students understand what disinformation is, the motivations behind it and how to recognise it and deal with disinformation in given scenarios.',
      bundle: {
        filename: 'Digital Misuse Part 2 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.2.2
            kind: 'Worksheet',
            name: 'Newspaper Template - Sharing News',
            filename: 'Worksheet - Newspaper Template Sharing News',
            ariaLabel: 'Download material',
          },
          {
            // ID: 7.2.3
            kind: 'Image',
            name: 'Social Media Algorithms',
            filename: 'Image - Social Media Algorithms',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Understanding Disinformation',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.2.1
        title: 'What is Disinformation?',
        supportText:
          'Use this video to help students distinguish disinformation — deliberately deceptive content — from misinformation. Pause to discuss how intent changes the way we evaluate and respond to false information.',
        downloads: {
          video: {
            filename: 'What is Disinformation',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What is Disinformation - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      title: 'Cyberbullying',
      goal: 'Help students understand what cyberbullying is, the motivations behind it and how to recognise it and deal with cyberbullying in given scenarios.',
      bundle: {
        filename: 'Digital Misuse Part 3 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.3.1
            kind: 'Scenario Cards',
            name: 'Act it Out!',
            filename: 'Scenario Cards - Act it Out',
            ariaLabel: 'Download material',
          },
          {
            // ID: 7.3.3
            kind: 'Scenario Cards',
            name: 'Is it Just Bad Manners?',
            filename: 'Scenario Cards - Is it Just Bad Manners',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Bad Manners and Cyberbullying',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.3.2
        title: 'What is Cyberbullying?',
        supportText:
          'Use this video to help students define cyberbullying and understand how online behaviour can cause real emotional harm. Pause to discuss what makes a bystander\'s response important in these situations.',
        downloads: {
          video: {
            filename: 'What is Cyberbullying',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'What is Cyberbullying - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      title: 'Stranger Danger',
      goal: 'Help students understand what stranger danger is, the motivations behind it and how to recognise it and deal with stranger danger in given scenarios.',
      bundle: {
        filename: 'Digital Misuse Part 4 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.4.1
            kind: 'Poster',
            name: 'Stranger Danger',
            filename: 'Poster - Stranger Danger',
            ariaLabel: 'Download material',
          },
          {
            // ID: 7.4.2
            kind: 'Scenario Cards',
            name: 'Real or Fake? The Profile Detective Game',
            filename: 'Scenario Cards - Real or Fake The Profile Detective Game',
            ariaLabel: 'Download material',
          },
          {
            // ID: 7.4.3
            kind: 'Worksheet',
            name: 'Stranger Danger Champion',
            filename: 'Worksheet - Stranger Danger Champion',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Understanding Stranger Danger',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
    },
    {
      title: 'Influencers',
      goal: 'Help students understand what influencers are, what motivates them and how to deal with influencers in given scenarios.',
      bundle: {
        filename: 'Digital Misuse Part 5 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.5.2
            kind: 'Scenario Cards',
            name: 'Influencer Posts',
            filename: 'Scenario Cards - Influencer Posts',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Who is an Influencer?',
          },
          {
            title: 'Plenary – Summary and Informal Assessment',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.5.1
        title: 'Social Media Influencers',
        supportText:
          'Use this video to explore how influencers shape opinions and behaviours on social media, and the responsibilities that come with that reach. Pause to ask students which influencers they follow and what makes them trustworthy.',
        downloads: {
          video: {
            filename: 'Social Media Influencers',
            ariaLabel: 'Download video',
          },
          subtitles: {
            filename: 'Social Media Influencers - Subtitles',
            ariaLabel: 'Download subtitles',
          },
        },
      },
    },
    {
      title: 'Dealing with Digital Misusers',
      goal: 'Help students understand the concepts of digital abuse and misuse and to know what they can do to protect themselves and others from digital abuse.',
      bundle: {
        filename: 'Digital Misuse Part 6 Package',
      },
      included: {
        materials: [
          {
            // ID: 7.6.1
            kind: 'Worksheet',
            name: 'Digital Superhero',
            filename: 'Worksheet - Digital Superhero',
            ariaLabel: 'Download material',
          },
          {
            // ID: 7.6.2
            kind: 'Worksheet',
            name: 'CyberDoku - Solving the Mystery',
            filename: 'Worksheet - CyberDoku Solving the Mystery',
            ariaLabel: 'Download material',
          },
          {
            // ID: 7.6.3
            kind: 'Image',
            name: 'CyberDoku - The Map of the Area',
            filename: 'Image - CyberDoku The Map of the Area',
            ariaLabel: 'Download material',
          },
        ],
        activityPlan: [
          {
            title: 'Introduction',
          },
          {
            title: 'Resilience Against Digital Abuse and Misuse',
          },
          {
            title: 'Recognising and Dealing with Digital Misuse and Abuse',
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
      moduleId: 'mw',
      brand: 'MW',
      href: '/learning-hub/malware/content',
      imageSrc: '/images/learning-hub/06_malware.webp',
    },
  ],
}

export const challengeDM = {
  title: 'Real Talk Stories',
  subtitle:
    'Make choices. See consequences. Learn how to handle cyberbullying, fake news, risky influencers and online pressure.',
  howItWorks: 'How it Works',
  instruction:
    'Work through real-life digital misuse stories. At each key moment you choose what to do, and different choices lead to different outcomes. Earn up to 3 stars per story by finding the safest path. If you get a tough ending, retry the story to discover a better route!',
  tip: 'Each story branches in multiple directions. There is always at least one path that leads to a safe, positive outcome — but you have to make the right calls to find it!',
  tipLabel: 'Tip',
  yourBestScore: 'Your Best Score',
  bestResultDesc: 'Best result from each story',
  storiesTitle: '📖 Stories',
  watchOutTitle: '🚩 Watch Out For',
  watchOutItems: [
    '🚩 Anyone asking for private photos',
    '🚩 Anyone demanding your password, even a friend',
    '🚩 Strangers asking your address or school',
    '🚩 "Keep this a secret" pressure',
    '🚩 Mean posts, screenshots, fake profiles',
    '🚩 "SHARE THIS NOW" messages and shocking claims',
    '🚩 Online dares that could hurt you',
  ],
  welcomeDesc: 'Make your choices carefully — different paths lead to very different outcomes.',
  startStory: 'Start Story →',
  whatWeLearned: '💡 What we learned:',
  tryDifferentPath: '↩ Try a Different Path',
  nextStory: 'Next Story →',
  storyOfTemplate: 'Story {n} of {total}',
  storyLabelTemplate: 'Story {n}:',
  topicLabel: 'Topic',
  pointsLabel: 'Points this run',
  badgeGood: '✨ Great Outcome!',
  badgeOkay: '🌤️ Could Be Better',
  badgeBad: '❌ Tough Lesson',
  messagesAriaLabel: 'Story messages',
  seeFinalScore: '🎉 See Final Score',
  allStoriesComplete: 'All Stories Complete!',
  finalScoreDesc: 'Here\'s how you did across all the stories:',
  playAgain: 'Play Again',
  rankChampion: '🏆 Safety Champion',
  rankChampionMsg: 'Outstanding! You found the safest path in nearly every situation.',
  rankDefender: '🛡️ Digital Defender',
  rankDefenderMsg: 'Great work! You handled most situations wisely and safely.',
  rankNavigator: '📚 Learning Navigator',
  rankNavigatorMsg: 'Good effort! Replay some stories to find the better paths and earn more stars.',
  rankBeginning: '🌱 Getting Started',
  rankBeginningMsg: 'Keep trying different paths — every replay teaches you something new!',
  sensitiveToggleLabel: 'Include sensitive stories',
  sensitiveToggleNote: 'Two stories are about private photos and about strangers asking for your address. Ask a teacher or a trusted adult before you turn them on.',
  sensitiveNoteTitle: '⚠️ Content note',
  sensitiveNoteTemplate: 'This story is about: {topic}. It can feel uncomfortable. You can skip it. If something like this ever happens to you, tell a trusted adult.',
  skipStory: 'Skip this story',
  skippedLabel: 'Skipped',
  scoreDenomTemplate: '/ {max} ★',
  stories: [
    {
      id: 1,
      title: 'The Meme Problem',
      emoji: '😟',
      topic: 'Cyberbullying',
      nodes: [
        {
          id: 'start',
          text: 'You open your phone and see a group chat. Someone named Jake posted a mean meme about your classmate Emma, making fun of her appearance. 23 people already liked it. What do you do?',
          choices: [
            '👍 Like the meme to fit in with everyone',
            '📲 Scroll past and ignore it',
            '💬 Send Emma a private supportive message',
          ],
        },
        {
          id: 'end_a',
          title: 'Part of the Problem',
          text: 'You liked the meme. Jake posts more, even meaner ones. Emma sees your name in the likes and is devastated. A teacher finds out and contacts your parents.',
          lesson: 'Liking mean content is a form of cyberbullying. Your "like" is never invisible — the target always sees who supported it.',
        },
        {
          id: 'mid_b',
          text: 'You scroll past, but the posts keep coming. The next day, Emma sits alone at lunch looking very upset. The bullying has gotten worse.',
          choices: [
            '😶 Keep ignoring it — not your problem',
            '🏫 Tell a teacher what has been happening',
          ],
        },
        {
          id: 'end_b1',
          title: 'The Silent Witness',
          text: 'Weeks pass. Emma misses school. You feel guilty but say nothing. The bullying continues unchallenged.',
          lesson: 'Ignoring bullying does not make it stop. Bystanders have real power to help — staying silent is still a choice.',
        },
        {
          id: 'end_b2',
          title: 'The Brave Reporter',
          text: 'The teacher acts immediately. Jake and his parents are called in. Emma gets support from the school counsellor. The bullying stops.',
          lesson: 'Telling a trusted adult is one of the strongest things you can do. It is not snitching. It is helping someone who needs it.',
        },
        {
          id: 'mid_c',
          text: 'Emma replies: "Thank you so much… it really hurt. I didn\'t know what to do." She is grateful but scared. The posts are still up.',
          choices: [
            '📢 Help Emma report every post to the platform',
            '🤷 Tell Emma to just ignore it, it will blow over',
          ],
        },
        {
          id: 'end_c1',
          title: 'The Digital Defender',
          text: 'You and Emma report every post together. Most are removed within a day. You also visit the school counsellor, who supports Emma further. The bullying stops.',
          lesson: 'Reaching out AND taking action is the best answer to cyberbullying. Report the posts online and ask trusted adults to help.',
        },
        {
          id: 'end_c2',
          title: 'Kind but Not Enough',
          text: 'Emma tries to ignore it but the posts keep coming. Your kind message helped, but without reporting or adult support the bullying continues.',
          lesson: 'Kindness is a great start. But to really stop bullying, you also need to report it and ask a trusted adult to help.',
        },
      ],
    },
    {
      id: 2,
      title: 'Screenshot Trap',
      emoji: '📸',
      topic: 'Privacy & Betrayal',
      nodes: [
        {
          id: 'start',
          text: 'You sent a private message to your friend Zoe about having a crush on someone. Zoe screenshotted it and shared it in a big group chat without asking you. Everyone is commenting. What do you do?',
          choices: [
            '😡 Post an angry public callout about what Zoe did',
            '📱 Confront Zoe privately in a DM',
            '📸 Save the evidence and tell a trusted adult',
          ],
        },
        {
          id: 'end_a',
          title: 'Fire Meets Fire',
          text: 'You post publicly calling Zoe out. Zoe fights back. Dozens of people join the drama. Now it is a full online war and you both look bad.',
          lesson: 'Public call-outs online almost always escalate things. They rarely bring the resolution you are hoping for.',
        },
        {
          id: 'mid_b',
          text: 'You DM Zoe: "Why did you share that? It was private!" Zoe says "It was just a joke, chill out." But she has not deleted it.',
          choices: [
            '😔 Accept her "apology" and move on quietly',
            '🗣️ Firmly ask her to delete it and involve a trusted adult',
          ],
        },
        {
          id: 'end_b1',
          title: 'Swept Under the Rug',
          text: 'Zoe does not really understand why it was wrong. The screenshot stays up. You feel hurt but nothing is truly resolved.',
          lesson: '"Just a joke" is never an excuse for sharing private messages. If bad behaviour has no consequences, it can happen again.',
        },
        {
          id: 'end_b2',
          title: 'Real Resolution',
          text: 'Under pressure and with adult involvement, Zoe deletes it and has a real conversation about consent and privacy. Your friendship recovers on healthier terms.',
          lesson: 'Standing up for your privacy calmly but firmly, with an adult\'s help, brings real change. Not just a short calm.',
        },
        {
          id: 'mid_c',
          text: 'A trusted adult helps report it to the platform and contacts Zoe\'s parents. The screenshot is removed. Zoe apologises.',
          choices: [
            '🤝 Accept her apology and work to rebuild the friendship',
            '🚫 Block Zoe — you do not want her as a friend anymore',
          ],
        },
        {
          id: 'end_c1',
          title: 'Trust Rebuilt',
          text: 'With adult support and a genuine apology, the situation resolves properly. Zoe understands consent. You both move forward.',
          lesson: 'Saving proof, reporting it and giving a real chance to say sorry can turn a painful moment into a lesson.',
        },
        {
          id: 'end_c2',
          title: 'Safe Distance',
          text: 'The screenshot is gone and you are protected. Blocking is a valid boundary when trust is broken. A safe outcome through the right actions.',
          lesson: 'Protecting yourself is always okay. Asking adults for help was exactly the right move.',
        },
      ],
    },
    {
      id: 3,
      title: 'Gaming Rage',
      emoji: '🎮',
      topic: 'Online Gaming Harassment',
      nodes: [
        {
          id: 'start',
          text: 'You are playing your favourite online game and another player starts spamming hateful messages — calling you names and making threats. Others in the lobby are watching. What do you do?',
          choices: [
            '💢 Fight back with insults of your own',
            '🙉 Ignore the messages and keep playing',
            '🔇 Mute, screenshot, and report the player in-game',
          ],
        },
        {
          id: 'end_a',
          title: 'Both Banned',
          text: 'You argue back. Both of you get reported. The system flags your account. You both get banned — the toxic player reported you first.',
          lesson: 'Responding to hate with hate puts you at risk too. Game platforms often ban both sides of toxic exchanges.',
        },
        {
          id: 'mid_b',
          text: 'You ignore them, but they escalate. Now they have found your public game profile and are posting abuse there for others to see.',
          choices: [
            '🗑️ Delete your profile to make them stop',
            '📢 Report to the platform and tell a trusted adult',
          ],
        },
        {
          id: 'end_b1',
          title: 'Running Away',
          text: 'Deleting your profile stops this harasser for now. But they move on to the next target. No consequence, no real change.',
          lesson: 'Protecting yourself matters. But reporting makes sure the bully faces consequences and cannot do it to others.',
        },
        {
          id: 'end_b2',
          title: 'Player Banned',
          text: 'The platform investigates and bans the harasser\'s account. A trusted adult helps you review your privacy settings and feel supported.',
          lesson: 'Reporting gaming bullies works. Platforms take reports seriously, especially when you saved screenshots as proof.',
        },
        {
          id: 'mid_c',
          text: 'You have muted and reported the player with screenshots. The report is under review. But you are still shaken by what was said.',
          choices: [
            '🗣️ Tell a trusted adult how the experience made you feel',
            '😶 Keep it to yourself — you already handled it',
          ],
        },
        {
          id: 'end_c1',
          title: 'Report and Support',
          text: 'A trusted adult validates your feelings and helps you adjust privacy settings. The platform confirms the player was banned.',
          lesson: 'Reporting is important, but so is processing how online abuse makes you feel. Trusted adults can help with both.',
        },
        {
          id: 'end_c2',
          title: 'Half the Solution',
          text: 'The player gets banned but you carry the experience alone. You feel safer online but still unsettled.',
          lesson: 'You handled the technical side perfectly! Remember: talking to someone about how online abuse feels is just as important.',
        },
      ],
    },
    {
      id: 4,
      title: 'Fake Profile',
      emoji: '👤',
      topic: 'Impersonation',
      nodes: [
        {
          id: 'start',
          text: 'You spot a fake social media account using your friend Sam\'s photos. It is posting embarrassing things and adding Sam\'s classmates. Sam does not know yet. What do you do?',
          choices: [
            '💬 Message the fake account and tell them to stop',
            '📞 Tell Sam immediately so they know',
            '🚩 Report the fake account AND tell Sam straight away',
          ],
        },
        {
          id: 'end_a',
          title: 'Do Not Feed the Troll',
          text: 'The fake account blocks you and speeds up posting. Now it starts targeting you too. Engaging directly made things worse.',
          lesson: 'Contacting a fake or abusive account directly almost always makes things worse. Report to the platform instead.',
        },
        {
          id: 'mid_b',
          text: 'Sam is shocked and upset. Sam wants to message everyone to explain it is fake, but is not sure what else to do. The account is still live.',
          choices: [
            '📢 Help Sam report the account to the platform',
            '🗣️ Suggest Sam just tell people in person it is fake',
          ],
        },
        {
          id: 'end_b1',
          title: 'Teamwork Wins',
          text: 'You and Sam report the account together. The platform removes it within hours. Sam also tells a trusted adult who helps monitor for future attempts.',
          lesson: 'Reporting fake accounts together works very well. Platforms take fake profiles seriously and act fast.',
        },
        {
          id: 'end_b2',
          title: 'Slow Response',
          text: 'Sam explains to people in person, but the fake account stays up for days causing more embarrassment before someone else finally reports it.',
          lesson: 'Reporting a fake account to the platform is much faster than explaining it to everyone one by one.',
        },
        {
          id: 'mid_c',
          text: 'The platform receives your report and begins reviewing the account. Sam is grateful you acted so quickly.',
          choices: [
            '🏠 Also tell a trusted adult to help Sam feel supported',
            '⏳ Just wait for the platform to act',
          ],
        },
        {
          id: 'end_c1',
          title: 'Full Protection',
          text: 'With adult support and the platform\'s action, the account is removed. Sam feels genuinely cared for. The school is alerted to watch for further attempts.',
          lesson: 'Reporting to the platform AND telling a trusted adult gives the best protection when someone pretends to be you or your friend.',
        },
        {
          id: 'end_c2',
          title: 'Swift Action',
          text: 'The platform removes the account. Sam is relieved. A great outcome through quick, correct action.',
          lesson: 'Reporting a fake account right away is exactly right. The faster you report, the faster it is removed.',
        },
      ],
    },
    {
      id: 5,
      title: 'Left Out Online',
      emoji: '😔',
      topic: 'Online Exclusion',
      nodes: [
        {
          id: 'start',
          text: 'You discover your friend group created a new group chat without you. They are planning a party you were not invited to, and you can see them posting about it publicly. You feel hurt and humiliated.',
          choices: [
            '📣 Post publicly about being hurt and left out',
            '💬 Send an angry message to the whole group',
            '🤝 Message your closest friend in the group privately',
          ],
        },
        {
          id: 'end_a',
          title: 'Public Meltdown',
          text: 'Your public post attracts attention but mostly embarrassment. The friend group gets defensive. The drama spreads across the whole school online.',
          lesson: 'Complaining in public about being left out rarely helps. It usually makes things worse. A private talk works much better.',
        },
        {
          id: 'end_b',
          title: 'Group Chat Drama',
          text: 'The group chat gets awkward. Some friends feel guilty; others get annoyed. Nothing is really resolved and tensions remain for weeks.',
          lesson: 'Confronting a whole group at once puts everyone on the defensive. One-to-one private conversations work much better.',
        },
        {
          id: 'mid_c',
          text: 'Your closest friend Mia admits she felt pressured to leave you out by someone else in the group. She apologises and says she wants to help fix things.',
          choices: [
            '🤝 Ask Mia to speak up for you to the group',
            '🏫 Tell a trusted adult about the deliberate exclusion',
          ],
        },
        {
          id: 'end_c1',
          title: 'True Ally',
          text: 'Mia speaks up. You are included again and the person who was excluding you is called out. The friendship group gets stronger through honesty.',
          lesson: 'When someone is willing to help, let them. Real friends speak up for each other — even when it is uncomfortable.',
        },
        {
          id: 'end_c2',
          title: 'Adult Ally',
          text: 'The trusted adult helps mediate. Everyone reflects on how deliberate exclusion hurts. The group dynamic shifts for the better.',
          lesson: 'Leaving someone out on purpose online is a kind of bullying. A trusted adult can help fix an unhealthy group.',
        },
      ],
    },
    {
      id: 6,
      title: 'Private Photos',
      emoji: '📷',
      topic: 'Image-Based Pressure',
      nodes: [
        {
          id: 'start',
          text: 'Someone you have been chatting with online for two weeks says they really like you and asks for a private photo. They promise to send one first and say to keep it secret from everyone.',
          choices: [
            '📸 Send a photo — they seem genuinely nice',
            '😐 Say you are not comfortable but keep talking to them',
            '🚫 Refuse, stop talking to them, and tell a trusted adult now',
          ],
        },
        {
          id: 'end_a',
          title: 'The Trap',
          text: 'They never send anything back. Instead they demand more photos or they will share yours with everyone. You are trapped. This is called sextortion.',
          lesson: 'Sending private photos to someone you only know online is very dangerous. Blackmailing someone with photos is called sextortion, and it is a crime. Tell a trusted adult right away.',
        },
        {
          id: 'mid_b',
          text: '"If you do not send one, you obviously do not trust me." They say the whole thing is over if you refuse. You feel confused and pressured.',
          choices: [
            '📸 Give in and send a photo to keep the peace',
            '🚫 Block them and tell a trusted adult immediately',
          ],
        },
        {
          id: 'end_b1',
          title: 'The Trap (Part 2)',
          text: 'You send the photo and the blackmail starts immediately. You realise this person planned this from the very first message.',
          lesson: 'Healthy relationships never come with ultimatums. "Send a photo or we are done" is a big warning sign. Tell a trusted adult if this ever happens.',
        },
        {
          id: 'end_b2',
          title: 'Good Instincts',
          text: 'You block the account and tell a trusted adult. They help report it to the platform and explain this is a classic grooming tactic used by criminals.',
          lesson: 'Saying no to pressure and telling a trusted adult is always right. You were being manipulated. Spotting it and acting took real courage.',
        },
        {
          id: 'mid_c',
          text: 'A trusted adult looks at the conversation and is very concerned. They explain this looks like grooming — someone pretending to be friendly to gain your trust. They want to report it.',
          choices: [
            '📋 Share the full conversation history to strengthen the report',
            '😳 Leave out some details because you feel embarrassed',
          ],
        },
        {
          id: 'end_c1',
          title: 'Full Disclosure',
          text: 'With full evidence, the adult and platform take strong action. The account is removed and reported to authorities who can investigate properly.',
          lesson: 'Tell the trusted adult the whole story, even the embarrassing parts. Then they can protect you best and stop the criminal.',
        },
        {
          id: 'end_c2',
          title: 'Partial Report',
          text: 'Some protective action is taken with limited details. You are safer, but the full picture would have helped the investigation much more.',
          lesson: 'You were brave to speak up. Telling all the details, even embarrassing ones, helps adults protect you and stop it from happening to others.',
        },
      ],
    },
    {
      id: 7,
      title: 'The Helpful Stranger',
      emoji: '🕵️',
      topic: 'Online Grooming',
      nodes: [
        {
          id: 'start',
          text: 'Someone in a game chat says they are 14 and has been messaging you for a week. They now ask where you go to school, your home address, and what time you get home alone each day. What do you do?',
          choices: [
            '💬 Answer the questions — they seem like a normal kid',
            '🤔 Give vague answers and keep chatting',
            '🚫 Stop responding, block them, and tell a trusted adult now',
          ],
        },
        {
          id: 'end_a',
          title: 'Too Much Information',
          text: 'Over the next week they know your school, your schedule, and your address. They suggest meeting up in person. You realise something is very wrong.',
          lesson: 'Someone who asks for your home address, school name or daily routine is a serious danger sign, even if they say they are your age.',
        },
        {
          id: 'mid_b',
          text: 'You give vague answers but they keep pushing harder and now ask for your phone number. Something feels off, but you do not want to seem rude.',
          choices: [
            '📱 Give your number — they have been so kind',
            '🚫 Block them and tell a trusted adult',
          ],
        },
        {
          id: 'end_b1',
          title: 'Connected Too Much',
          text: 'They use your number to find your other social accounts and track your activity. A trusted adult finds out and is very alarmed.',
          lesson: 'You do not owe anyone your phone number or personal contact details online. Anyone pushing for them has bad intentions.',
        },
        {
          id: 'end_b2',
          title: 'Trusted Instinct',
          text: 'A trusted adult confirms the account looks like a fake profile used by an adult. They help you report it and review your privacy settings together.',
          lesson: 'Trust your gut feeling and tell a trusted adult. That is always right when something online feels wrong.',
        },
        {
          id: 'mid_c',
          text: 'A trusted adult reviews the conversation and is very worried. They explain this is likely a grooming attempt — an adult pretending to be a child to gain your trust.',
          choices: [
            '📋 Provide the full conversation for a proper report',
            '🤐 Ask to handle it quietly without involving authorities',
          ],
        },
        {
          id: 'end_c1',
          title: 'Protected and Strong',
          text: 'The account is reported to the platform and to the police. The adult helps you tighten your privacy settings. You may have protected yourself and other children.',
          lesson: 'Grooming is a serious crime. Reporting with all the proof helps the authorities protect other children.',
        },
        {
          id: 'end_c2',
          title: 'Safer but Incomplete',
          text: 'The account is blocked but not formally reported. You are safer, but the person may simply move on and target someone else.',
          lesson: 'Grooming is too serious to handle alone. Let adults make a proper report. It protects you and other children.',
        },
      ],
    },
    {
      id: 8,
      title: 'Hate in the Comments',
      emoji: '💬',
      topic: 'Hate Speech',
      nodes: [
        {
          id: 'start',
          text: 'You are watching a live gaming stream and the chat fills with racist and hateful comments targeting one of the players. The comments are coming fast. The targeted player looks visibly upset.',
          choices: [
            '😂 Laugh at some comments — it is just internet humour',
            '😶 Watch quietly without joining in',
            '🚩 Report the hate speech and speak up in the chat',
          ],
        },
        {
          id: 'end_a',
          title: 'Not Just a Joke',
          text: 'You laughed. The player leaves the stream in tears. Screenshots of your comment surface later. You feel ashamed and are reported by other viewers.',
          lesson: 'Racist insults and hate speech are never "just internet humour". If you laugh along, you become part of the harm.',
        },
        {
          id: 'mid_b',
          text: 'You stay quiet. The targeted player disconnects from the stream. The chat celebrates chasing them away. You feel uneasy about what you just witnessed.',
          choices: [
            '💬 Post a supportive message defending the player',
            '❌ Close the stream and try to forget about it',
          ],
        },
        {
          id: 'end_b1',
          title: 'One Voice Changes Things',
          text: 'Other viewers see your message and start standing up too. The mood shifts in the chat. Multiple people report the worst offenders and some accounts get banned.',
          lesson: 'One person who speaks up in a hostile chat can change the mood. Bystanders have real power.',
        },
        {
          id: 'end_b2',
          title: 'The Cost of Silence',
          text: 'You walk away, but the hate continues. The targeted player may never stream again. Your silence felt safer but contributed to the problem.',
          lesson: 'Walking away protects you, but report hate speech before you go. That helps stop it.',
        },
        {
          id: 'mid_c',
          text: 'You report the worst comments and post a supportive message. Several other viewers follow your lead and report too. The player notices and feels less alone.',
          choices: [
            '📣 Also talk to a trusted adult or teacher about what you saw',
            '✅ You have done enough — leave the rest to the platform',
          ],
        },
        {
          id: 'end_c1',
          title: 'Ripple Effect',
          text: 'Multiple reports are actioned quickly. Raising awareness with a trusted adult about hate speech in gaming spaces helps create broader change.',
          lesson: 'Reporting hate speech AND telling trusted adults makes platforms safer for everyone, now and later.',
        },
        {
          id: 'end_c2',
          title: 'Good Citizen',
          text: 'Reports are actioned and some accounts are flagged. The player later thanks you for standing up in the chat.',
          lesson: 'Reporting hate speech AND speaking up in the moment is a powerful combination. Well done for taking action!',
        },
      ],
    },
    {
      id: 9,
      title: 'The Call-Out Post',
      emoji: '📣',
      topic: 'False Rumours Online',
      nodes: [
        {
          id: 'start',
          text: 'Someone from school posts completely false rumours about you on social media. It is spreading fast — people are sharing it and writing mean comments. You do not know who started it and you are very upset.',
          choices: [
            '😡 Post an angry response to publicly defend yourself',
            '💬 Message every person you know to tell them the truth',
            '📸 Screenshot everything and tell a trusted adult straight away',
          ],
        },
        {
          id: 'mid_a',
          text: 'Your response goes viral. People argue about it. The original poster knows they got to you and posts even more, enjoying the reaction.',
          choices: [
            '💢 Keep fighting back to clear your name',
            '🗑️ Delete your response and step away',
          ],
        },
        {
          id: 'end_a1',
          title: 'Playing Their Game',
          text: 'The argument spirals badly. Teachers get involved. Both of you face school consequences — even though they started it.',
          lesson: 'Reacting angrily to false rumours feeds the drama and can get you into trouble too. Do not give them the reaction they want.',
        },
        {
          id: 'end_a2',
          title: 'Step Away',
          text: 'Deleting your response was smart. The drama slowly dies down, but the original post stays up without any real consequence for the person who posted it.',
          lesson: 'Deleting an angry post is smart. Also report the original post and ask a trusted adult for help to really solve it.',
        },
        {
          id: 'end_b',
          title: 'Damage Control',
          text: 'You spend hours messaging people. Some believe you; others do not. It is exhausting and the post is still up, reaching new people all the time.',
          lesson: 'Writing to everyone one by one is tiring and often does not work. Reporting the post and asking a trusted adult is faster and stronger.',
        },
        {
          id: 'mid_c',
          text: 'The trusted adult helps you report the post for harassment. It gets taken down quickly. Together you figure out who most likely posted it.',
          choices: [
            '🤝 Agree to a mediated conversation with the person who posted it',
            '🚫 Block them and move on now the post is down',
          ],
        },
        {
          id: 'end_c1',
          title: 'Real Resolution',
          text: 'A mediated conversation with adult support uncovers what was behind the rumour. The other person apologises. The school creates new guidelines to prevent future incidents.',
          lesson: 'Saving proof, reporting and, when it is safe, finding the real reason leads to the best results that last.',
        },
        {
          id: 'end_c2',
          title: 'Safe and Resolved',
          text: 'The post is removed and you are protected. Blocking keeps you safe going forward. A strong outcome through the right actions.',
          lesson: 'Getting a harmful post removed quickly through adult help is a great outcome. Blocking to stay safe is a smart boundary.',
        },
      ],
    },
    {
      id: 10,
      title: 'Password Pressure',
      emoji: '🔐',
      topic: 'Friend Pressure & Passwords',
      nodes: [
        {
          id: 'start',
          text: 'Your best friend Alex says: "If we are really best friends, you must give me your password. Friends have no secrets!" You feel uncomfortable. What do you do?',
          choices: [
            '🔑 Give Alex your password — friends trust each other',
            '🤥 Give a fake password to end the argument',
            '🗣️ Say calmly that friends do not need each other\'s passwords',
          ],
        },
        {
          id: 'end_a',
          text: 'Alex reads your messages and uses your account to write to other people. Alex gets angry about things that were misunderstood. Soon Alex checks on you all the time.',
          title: 'The Control Begins',
          lesson: 'A password is private. Real friends do not need it. If someone keeps asking for it, tell a trusted adult and change your password.',
        },
        {
          id: 'mid_b',
          text: 'Alex finds out the password is fake and gets very angry: "You lied! Give me the real one, or I will tell everyone you are a liar!" The pressure grows.',
          choices: [
            '🔑 Give in and share the real password',
            '🗣️ Say no and tell a trusted adult about the pressure',
          ],
        },
        {
          id: 'end_b1',
          text: 'Once Alex has your password, Alex checks who you talk to and tells you who you can be friends with. It gets worse and worse.',
          title: 'Trapped',
          lesson: 'Giving in rarely ends the pressure. Controlling behaviour usually grows. Change your password and tell a trusted adult.',
        },
        {
          id: 'end_b2',
          text: 'It is hard to say no to a close friend. A trusted adult tells you that you did the right thing. They help you talk to Alex, or take a break from the friendship.',
          title: 'Breaking Free',
          lesson: 'Spotting controlling behaviour and saying no takes courage. It is always the right choice for your safety.',
        },
        {
          id: 'mid_c',
          text: 'Alex says: "So you do not trust me!" You stay calm, but Alex keeps pushing, and the pressure is building.',
          choices: [
            '💪 Hold your boundary and tell a trusted adult about the pressure',
            '😔 Share your password just to calm things down',
          ],
        },
        {
          id: 'end_c1',
          text: 'A trusted adult says that wanting your password is control, not friendship. With their help, you explain that you keep your passwords private. A good friend accepts that.',
          title: 'Healthy Boundaries',
          lesson: 'A good friend respects your privacy. Trust does not mean sharing passwords. You deserve friends who respect your limits.',
        },
        {
          id: 'end_c2',
          text: 'Alex is calm for a few days. Then Alex asks for more: your photos, your chats. The pressure starts again.',
          title: 'Giving In',
          lesson: 'Sharing a password to keep the peace only works for a short time. Keep your passwords private, and tell a trusted adult if someone keeps pushing.',
        },
      ],
    },
    {
      id: 11,
      title: 'Share This to Save the Game!',
      emoji: '🚨',
      topic: 'Disinformation',
      nodes: [
        {
          id: 'start',
          text: 'A post is spreading in your game community. It has the game\'s logo and says: "The company is closing! The game ends tomorrow. SHARE THIS to save it!" Your friends are already sharing it. What do you do?',
          choices: [
            '📤 Share it right away — better safe than sorry',
            '🙈 Ignore it and keep scrolling',
            '🔎 Check the game company\'s official website or verified account',
          ],
        },
        {
          id: 'end_a',
          text: 'Your share helps the post reach hundreds of players. Then the real company writes: "The game is fine. This message is fake!" Many players were scared for nothing, and your name is on the share.',
          title: 'Spreading the Fake',
          lesson: 'A post that shouts "SHARE THIS" and makes you panic is a warning sign. Sharing a false post spreads it, even if you did not make it.',
        },
        {
          id: 'mid_b',
          text: 'You ignore it, but the post keeps growing. A younger player in your team is upset because she thinks she will lose her game friends. What do you do?',
          choices: [
            '😶 Say nothing — you did not share it',
            '🤝 Tell your friends it looks fake, and report the post',
          ],
        },
        {
          id: 'end_b1',
          text: 'You did not spread it, but the fake post keeps scaring players for days. Your friends still do not know it is false.',
          title: 'Quiet, but Not Enough',
          lesson: 'Not sharing is good. Telling your friends and reporting the post helps even more.',
        },
        {
          id: 'end_b2',
          text: 'You show your friends that the company\'s official page says nothing about closing. You report the post. Many players stop sharing it, and it is removed.',
          title: 'Fact Checker',
          lesson: 'Checking the official source and reporting a false post protects other people too.',
        },
        {
          id: 'mid_c',
          text: 'On the official site there is no news about closing. The verified account even says: "Do not believe fake posts!" Your friends are still sharing the fake one.',
          choices: [
            '📣 Send your friends the official link and report the fake post',
            '🤐 Keep it to yourself — you know the truth now',
          ],
        },
        {
          id: 'end_c1',
          text: 'Your friends read the official link and delete their shares. The fake post is reported and disappears.',
          title: 'Truth Spreader',
          lesson: 'Check official sources first. Then help others by sharing the true information. If you are not sure, ask a trusted adult.',
        },
        {
          id: 'end_c2',
          text: 'You are safe from the fake news, but your friends keep sharing it and more players get scared.',
          title: 'Smart but Silent',
          lesson: 'Checking is a great first step. Telling others and reporting makes the fix much bigger.',
        },
      ],
    },
    {
      id: 12,
      title: 'The Viral Challenge',
      emoji: '🤳',
      topic: 'Misinformation',
      nodes: [
        {
          id: 'start',
          text: 'A video with a million views shows teens swallowing a spoonful of dry powder in 60 seconds, with no water. Everyone in the video laughs. Your friend says: "Let\'s try it at my house today!" What do you do?',
          choices: [
            '🥄 Try it — everyone is laughing, so it must be safe',
            '👍 Say "maybe later" and just like the video',
            '✋ Say no, and ask a trusted adult if it is safe',
          ],
        },
        {
          id: 'end_a',
          text: 'The dry powder gets into your throat and lungs. You cough and cannot breathe well. An adult takes you to the doctor. Nobody is laughing now.',
          title: 'Not Funny at All',
          lesson: 'Videos show the funny parts, not the risks. Many people share trends without checking if they are safe. That is called misinformation.',
        },
        {
          id: 'mid_b',
          text: 'You like the video. Your friend does the challenge, and more kids try it because of the likes. A classmate says he got hurt, but the comments only say "lol".',
          choices: [
            '👍 Keep liking — it is just a trend',
            '🗣️ Tell a trusted adult and warn your friend',
          ],
        },
        {
          id: 'end_b1',
          text: 'Your likes help the video reach more kids. More of them try it, and some get sick.',
          title: 'Part of the Trend',
          lesson: 'Likes and shares make a video bigger. If a trend can hurt someone, do not like it or share it.',
        },
        {
          id: 'end_b2',
          text: 'The adult checks the facts: the challenge can cause choking and breathing problems. Your friend stops, and the adult helps you report the video.',
          title: 'Trend Stopper',
          lesson: 'Telling a trusted adult is smart. A funny video is not proof that something is safe.',
        },
        {
          id: 'mid_c',
          text: 'The adult looks it up with you. Doctors say the challenge can cause choking and serious breathing problems. Your friend is surprised. A video with lots of likes can still be wrong.',
          choices: [
            '📲 Show your friend the facts and report the video',
            '🙅 Just say no yourself — others can decide for themselves',
          ],
        },
        {
          id: 'end_c1',
          text: 'Your friend decides not to try it. You report the video together and share the facts in your class chat. Fewer kids try the challenge.',
          title: 'Truth Detective',
          lesson: 'Check the facts, ask an adult and help others. That is how you stop misinformation, even when the people sharing it meant no harm.',
        },
        {
          id: 'end_c2',
          text: 'You stay safe, but your friend and other kids try it anyway. Some end up with a nasty cough.',
          title: 'Safe but Silent',
          lesson: 'Saying no for yourself is good. Sharing the facts helps others stay safe too.',
        },
      ],
    },
    {
      id: 13,
      title: 'The Influencer\'s Dare',
      emoji: '⭐',
      topic: 'Harmful Influencers',
      nodes: [
        {
          id: 'start',
          text: 'Your favourite influencer has 2 million followers. Today\'s post says: "Real fans take a photo on the school roof! Tag 3 friends! The best photo gets a shout-out!" Your friends are talking about it in the group chat. What do you do?',
          choices: [
            '📸 Join in — real fans take the dare',
            '🤔 Wait and see what the others do',
            '🛑 Stop and think: is this safe? Then ask a trusted adult',
          ],
        },
        {
          id: 'end_a',
          text: 'You climb up with your friends. A teacher sees you, and the school calls your parents. Someone could have fallen. The influencer never even sees your photo.',
          title: 'Dangerous Fan',
          lesson: 'Influencers earn money from attention. They are not responsible if you get hurt. A dangerous dare is never worth it.',
        },
        {
          id: 'mid_b',
          text: 'Some classmates post roof photos. The influencer shares the best ones. Your friends say you are a chicken if you do not join.',
          choices: [
            '😬 Join in so they do not laugh at you',
            '🧠 Say no — a real friend does not push you into danger',
          ],
        },
        {
          id: 'end_b1',
          text: 'You climb up and feel scared the whole time. Afterwards you get into trouble, and you are not even proud of the photo.',
          title: 'Pressure Wins',
          lesson: 'Pressure from followers and friends is not a good reason. It is okay to say no, and a real friend respects it.',
        },
        {
          id: 'end_b2',
          text: 'You say no. Two friends laugh, but one says: "Honestly, I felt weird about it too." Together you tell a teacher, and the school warns everyone.',
          title: 'Strong Choice',
          lesson: 'Saying no takes courage. Others often feel the same, and speaking up can protect them too.',
        },
        {
          id: 'mid_c',
          text: 'You stop and think: climbing on a roof is dangerous. A trusted adult says: "Influencers want views, and some do not think about safety. Let us see if this post breaks the app\'s rules."',
          choices: [
            '🚩 Report the dare post to the platform',
            '😌 Just stay out of it and forget about it',
          ],
        },
        {
          id: 'end_c1',
          text: 'The platform removes the dare. You also unfollow the influencer and tell your friends why. Fewer kids get hurt.',
          title: 'Smart Follower',
          lesson: 'You can stop following someone whose posts are dangerous. Report risky posts. Remember: Stop – Think – Check – Ask.',
        },
        {
          id: 'end_c2',
          text: 'You are safe, but the dare stays online and other kids may try it.',
          title: 'Safe for Now',
          lesson: 'Staying out is good. Reporting a dangerous post helps protect other kids too.',
        },
      ],
    },
    {
      id: 14,
      title: 'The Endless Feed',
      emoji: '📱',
      topic: 'Algorithms & Fake News',
      nodes: [
        {
          id: 'start',
          text: 'Last night you watched a few "shocking news" videos. Now your feed is full of them: angry people, scary claims, countdowns to disaster. You feel worried and cannot stop scrolling. What do you do?',
          choices: [
            '📲 Keep scrolling — it must be important news',
            '😰 Share the scariest video to warn your friends',
            '🧭 Ask yourself: why do I see so many of these? Then tell a trusted adult',
          ],
        },
        {
          id: 'end_a',
          text: 'You scroll for two hours, and the videos get scarier. You cannot sleep and feel anxious the next day.',
          title: 'Stuck in the Loop',
          lesson: 'Apps show you more of what you watch. Shocking videos keep you watching, even when they are not true or not good for you.',
        },
        {
          id: 'mid_b',
          text: 'You share it. Friends reply: "Is this real?" One friend is so worried that she cannot sleep. Then someone finds out that the video is old and from another country.',
          choices: [
            '😳 Delete your share and tell your friends the truth',
            '🤷 Leave it — you only shared it, you did not make it',
          ],
        },
        {
          id: 'end_b1',
          text: 'You delete the share and tell your friends the video is old. Most believe you. It takes courage to fix a mistake.',
          title: 'Honest Fix',
          lesson: 'Everyone shares something wrong sometimes. Fixing it fast and being honest helps a lot. Check before you share.',
        },
        {
          id: 'end_b2',
          text: 'The video keeps spreading with your name on it. More people get scared of something that is not even true.',
          title: 'Rumour Machine',
          lesson: 'A false post that stays up keeps spreading. If you find out it is wrong, delete it and say so.',
        },
        {
          id: 'mid_c',
          text: 'A trusted adult explains: apps learn what you watch and show you more of it. Shocking videos get lots of views, so apps push them. Together you see that you can change your feed.',
          choices: [
            '⚙️ Tap "Not interested", follow some fun and useful accounts, and take a break',
            '🔁 Keep your feed as it is — you can ignore the scary parts',
          ],
        },
        {
          id: 'end_c1',
          text: 'After a few days your feed shows much more good stuff. You feel calmer, and you check facts before you share anything.',
          title: 'Feed Boss',
          lesson: 'You can steer your feed: say "not interested", choose what you follow, and take breaks. Check facts before you share.',
        },
        {
          id: 'end_c2',
          text: 'The scary videos keep coming, and you still feel a little worried.',
          title: 'Still Stuck',
          lesson: 'Ignoring is hard when the feed keeps pushing. Changing what you follow and watch changes what you see.',
        },
      ],
    },
  ],
}
