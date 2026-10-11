// ---------------------------------------------------------------------------
// Digital Misuse (DM) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Digital Misuse module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentDM = {
  aim: 'Grundlegende Kenntnisse darüber zu vermitteln, was digitale Übergriffe und digitaler Missbrauch sind und nach welchen Prinzipien man damit umgeht.',
  objectives: [
    'Das Konzept digitaler Übergriffe und digitalen Missbrauchs in digitalen Umgebungen einzuführen.',
    'Die Motive hinter digitalen Übergriffen und digitalem Missbrauch zu erklären.',
    'Das Bewusstsein für Fälle digitaler Übergriffe und digitalen Missbrauchs, für die Techniken der Täterinnen und Täter und für Prinzipien im Umgang damit zu stärken.',
  ],
  outcomes: [
    'Ich kann digitale Übergriffe und digitalen Missbrauch definieren, Beispiele zu Fehlinformation, Desinformation, Cybermobbing, unsicheren Kontakten mit Fremden und schädlichem Verhalten von Influencern beschreiben und mögliche Motive hinter diesen Beispielen erklären.',
    'Ich kann in gegebenen Szenarien Techniken erkennen, die Täterinnen und Täter einsetzen.',
    'Ich kann in gegebenen Szenarien Wege vorschlagen und diskutieren, wie man mit digitalen Übergriffen und digitalem Missbrauch umgeht.',
  ],
  parts: [
    {
      title: 'Fehlinformation',
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, was Fehlinformation ist, was Menschen dazu motiviert und wie man sie erkennt.',
      bundle: {
        filename: 'Digitaler Missbrauch - Paket - Teil 1',
      },
      included: {
        materials: [
          {
            // ID: 7.1.2
            kind: 'Spielkarten',
            name: 'Wahrheitsdetektive',
            filename: 'Spielkarten - Wahrheitsdetektive',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 7.1.3
            kind: 'Bild',
            name: 'Die Zimt-Challenge',
            filename: 'Bild - Die Zimt-Challenge',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Fehlinformationen erkennen',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.1.1
        title: 'Was ist Fehlinformation?',
        supportText:
          'Verwenden Sie dieses Video, um Fehlinformation als falsche oder ungenaue Inhalte einzuführen, die sich online ohne schädliche Absicht verbreiten können. Halten Sie inne und fragen Sie die Schülerinnen und Schüler, ob sie jemals etwas geteilt haben, das sich später als unwahr herausstellte.',
        downloads: {
          video: {
            filename: 'Was ist Fehlinformation',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Was ist Fehlinformation - Untertitel',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      title: 'Desinformation',
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, was Desinformation ist, die Motivationen dahinter und wie man sie erkennt.',
      bundle: {
        filename: 'Digitaler Missbrauch - Paket - Teil 2',
      },
      included: {
        materials: [
          {
            // ID: 7.2.2
            kind: 'Arbeitsblatt',
            name: 'Zeitungsvorlage „Nachrichten teilen“',
            filename: 'Arbeitsblatt - Zeitungsvorlage Nachrichten teilen',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 7.2.3
            kind: 'Bild',
            name: 'Social-Media-Algorithmen',
            filename: 'Bild - Social-Media-Algorithmen',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Desinformation verstehen',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.2.1
        title: 'Was ist Desinformation?',
        supportText:
          'Verwenden Sie dieses Video, um Schülerinnen und Schüler darin zu unterstützen, Desinformation — absichtlich täuschende Inhalte — von Fehlinformation zu unterscheiden. Halten Sie inne, um zu besprechen, wie die Absicht die Art und Weise verändert, wie wir falsche Informationen bewerten und darauf reagieren.',
        downloads: {
          video: {
            filename: 'Was ist Desinformation',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Was ist Desinformation - Untertitel',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      title: 'Cybermobbing',
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, was Cybermobbing ist, die Motivationen dahinter und wie man es erkennt.',
      bundle: {
        filename: 'Digitaler Missbrauch - Paket - Teil 3',
      },
      included: {
        materials: [
          {
            // ID: 7.3.1
            kind: 'Szenariokarten',
            name: 'Zeig es!',
            filename: 'Szenariokarten - Zeig es',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 7.3.3
            kind: 'Szenariokarten',
            name: 'Ist das nur schlechtes Benehmen?',
            filename: 'Szenariokarten - Ist das nur schlechtes Benehmen',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Schlechtes Benehmen und Cybermobbing',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.3.2
        title: 'Was ist Cybermobbing?',
        supportText:
          'Verwenden Sie dieses Video, um Schülerinnen und Schülern zu helfen, Cybermobbing zu definieren und zu verstehen, wie Online-Verhalten echten emotionalen Schaden verursachen kann. Halten Sie inne, um zu besprechen, warum die Reaktion von Zuschauern in diesen Situationen wichtig ist.',
        downloads: {
          video: {
            filename: 'Was ist Cybermobbing',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Was ist Cybermobbing - Untertitel',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      title: 'Fremde Gefahr',
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, was Fremde Gefahr ist, die Motivationen dahinter und wie man sie erkennt.',
      bundle: {
        filename: 'Digitaler Missbrauch - Paket - Teil 4',
      },
      included: {
        materials: [
          {
            // ID: 7.4.1
            kind: 'Poster',
            name: 'Vorsicht vor Fremden',
            filename: 'Poster - Vorsicht vor Fremden',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 7.4.2
            kind: 'Szenariokarten',
            name: 'Echt oder Fake? Das Profil-Detektiv-Spiel',
            filename: 'Szenariokarten - Echt oder Fake Das Profil-Detektiv-Spiel',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 7.4.3
            kind: 'Arbeitsblatt',
            name: 'Champion gegen Gefahren durch Fremde',
            filename: 'Arbeitsblatt - Champion gegen Gefahren durch Fremde',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Gefahren durch Fremde verstehen',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
    },
    {
      title: 'Influencer',
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, was Influencer sind und was sie motiviert.',
      bundle: {
        filename: 'Digitaler Missbrauch - Paket - Teil 5',
      },
      included: {
        materials: [
          {
            // ID: 7.5.2
            kind: 'Szenariokarten',
            name: 'Influencer-Beiträge',
            filename: 'Szenariokarten - Influencer-Beiträge',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Wer ist ein Influencer?',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 7.5.1
        title: 'Social-Media-Influencer',
        supportText:
          'Verwenden Sie dieses Video, um zu erkunden, wie Influencer Meinungen und Verhaltensweisen in sozialen Medien beeinflussen, und welche Verantwortung mit dieser Reichweite einhergeht. Halten Sie inne und fragen Sie die Schülerinnen und Schüler, welchen Influencern sie folgen und was sie vertrauenswürdig macht.',
        downloads: {
          video: {
            filename: 'Social-Media-Influencer',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Social-Media-Influencer - Untertitel',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      title: 'Wie können wir mit dem Verhalten digitaler Täter umgehen?',
      goal: 'Den Schülerinnen und Schülern helfen zu wissen, was sie tun können, um sich vor digitalem Missbrauch zu schützen.',
      bundle: {
        filename: 'Digitaler Missbrauch - Paket - Teil 6',
      },
      included: {
        materials: [
          {
            // ID: 7.6.1
            kind: 'Arbeitsblatt',
            name: 'Digitaler Superheld',
            filename: 'Arbeitsblatt - Digitaler Superheld',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 7.6.2
            kind: 'Arbeitsblatt',
            name: 'CyberDoku: Das Rätsel lösen',
            filename: 'Arbeitsblatt - CyberDoku Das Rätsel lösen',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 7.6.3
            kind: 'Bild',
            name: 'CyberDoku: Die Karte der Umgebung',
            filename: 'Bild - CyberDoku Die Karte der Umgebung',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Resilienz gegenüber digitalen Übergriffen und digitalem Missbrauch',
          },
          {
            title: 'Digitale Übergriffe und digitalen Missbrauch erkennen und damit umgehen',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
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
  title: 'Echte Geschichten',
  subtitle:
    'Triff Entscheidungen. Erlebe Konsequenzen. Lerne, wie du mit Cybermobbing, Fake News, riskanten Influencern und Online-Druck umgehst.',
  howItWorks: 'So funktioniert es',
  instruction:
    'Arbeite dich durch Geschichten über digitalen Missbrauch aus dem echten Leben. In jedem Schlüsselmoment entscheidest du, was zu tun ist — und verschiedene Entscheidungen führen zu unterschiedlichen Ergebnissen. Verdiene bis zu 3 Sterne pro Geschichte, indem du den sichersten Weg findest. Wenn du ein schwieriges Ende erhältst, versuche die Geschichte erneut, um einen besseren Weg zu entdecken!',
  tip: 'Jede Geschichte verzweigt sich in mehrere Richtungen. Es gibt immer mindestens einen Weg, der zu einem sicheren, positiven Ergebnis führt — aber du musst die richtigen Entscheidungen treffen, um ihn zu finden!',
  tipLabel: 'Tipp',
  yourBestScore: 'Dein bestes Ergebnis',
  bestResultDesc: 'Bestes Ergebnis aus jeder Geschichte',
  storiesTitle: '📖 Geschichten',
  watchOutTitle: '🚩 Achte auf',
  watchOutItems: [
    '🚩 Jemanden, der nach privaten Fotos fragt',
    '🚩 Jemanden, der dein Passwort verlangt, auch einen Freund',
    '🚩 Fremde, die nach deiner Adresse oder Schule fragen',
    '🚩 „Halt das geheim“-Druck',
    '🚩 Gemeine Beiträge, Screenshots, gefälschte Profile',
    '🚩 „JETZT TEILEN“-Nachrichten und schockierende Behauptungen',
    '🚩 Mutproben im Netz, die dir schaden könnten',
  ],
  welcomeDesc: 'Triff deine Entscheidungen sorgfältig — verschiedene Wege führen zu sehr unterschiedlichen Ergebnissen.',
  startStory: 'Geschichte starten →',
  whatWeLearned: '💡 Was wir gelernt haben:',
  tryDifferentPath: '↩ Einen anderen Weg ausprobieren',
  nextStory: 'Nächste Geschichte →',
  storyOfTemplate: 'Geschichte {n} von {total}',
  storyLabelTemplate: 'Geschichte {n}:',
  topicLabel: 'Thema',
  pointsLabel: 'Punkte in diesem Durchgang',
  badgeGood: '✨ Tolles Ergebnis!',
  badgeOkay: '🌤️ Geht besser',
  badgeBad: '❌ Harte Lektion',
  messagesAriaLabel: 'Nachrichten der Geschichte',
  seeFinalScore: '🎉 Endergebnis anzeigen',
  allStoriesComplete: 'Alle Geschichten abgeschlossen!',
  finalScoreDesc: 'So hast du in allen Geschichten abgeschnitten:',
  playAgain: 'Nochmal spielen',
  rankChampion: '🏆 Sicherheits-Champion',
  rankChampionMsg: 'Hervorragend! Du hast in fast jeder Situation den sichersten Weg gefunden.',
  rankDefender: '🛡️ Digitaler Verteidiger',
  rankDefenderMsg: 'Gute Arbeit! Du hast die meisten Situationen weise und sicher gemeistert.',
  rankNavigator: '📚 Lern-Navigator',
  rankNavigatorMsg: 'Gute Bemühungen! Spiele einige Geschichten erneut, um bessere Wege zu finden und mehr Sterne zu verdienen.',
  rankBeginning: '🌱 Erste Schritte',
  rankBeginningMsg: 'Probiere weiterhin verschiedene Wege — jedes Wiederholungsspiel lehrt dich etwas Neues!',
  sensitiveToggleLabel: 'Sensible Geschichten einbeziehen',
  sensitiveToggleNote: 'Zwei Geschichten handeln von privaten Fotos und von Fremden, die nach deiner Adresse fragen. Frag zuerst eine Lehrkraft oder eine erwachsene Person, der du vertraust.',
  sensitiveNoteTitle: '⚠️ Hinweis',
  sensitiveNoteTemplate: 'Diese Geschichte handelt von: {topic}. Sie kann sich unangenehm anfühlen. Du kannst sie überspringen. Wenn dir so etwas jemals passiert, sag es einer erwachsenen Person, der du vertraust.',
  skipStory: 'Diese Geschichte überspringen',
  skippedLabel: 'Übersprungen',
  scoreDenomTemplate: '/ {max} ★',
  stories: [
    {
      id: 1,
      title: 'Das Meme-Problem',
      emoji: '😟',
      topic: 'Cybermobbing',
      nodes: [
        {
          id: 'start',
          text: 'Du öffnest dein Handy und siehst einen Gruppenchat. Jemand namens Jake hat ein gemeines Meme über deine Klassenkameradin Emma gepostet, das sich über ihr Aussehen lustig macht. 23 Personen haben es bereits geliked. Was machst du?',
          choices: [
            '👍 Das Meme liken, um dazuzugehören',
            '📲 Vorbei scrollen und es ignorieren',
            '💬 Emma eine private unterstützende Nachricht senden',
          ],
        },
        {
          id: 'end_a',
          title: 'Teil des Problems',
          text: 'Du hast das Meme geliked. Jake postet mehr, noch gemeinere. Emma sieht deinen Namen in den Likes und ist am Boden. Ein Lehrer erfährt davon und kontaktiert deine Eltern.',
          lesson: 'Gemeinen Inhalten zu liken ist eine Form von Cybermobbing. Dein „Like" ist nie unsichtbar — das Ziel sieht immer, wer es unterstützt hat.',
        },
        {
          id: 'mid_b',
          text: 'Du scrollst vorbei, aber die Beiträge kommen weiter. Am nächsten Tag sitzt Emma allein beim Mittagessen und sieht sehr aufgewühlt aus. Das Mobbing hat sich verschlimmert.',
          choices: [
            '😶 Weiter ignorieren — nicht dein Problem',
            '🏫 Einem Lehrer erzählen, was passiert ist',
          ],
        },
        {
          id: 'end_b1',
          title: 'Der schweigende Zeuge',
          text: 'Wochen vergehen. Emma fehlt in der Schule. Du fühlst dich schuldig, sagst aber nichts. Das Mobbing geht ungehindert weiter.',
          lesson: 'Mobbing zu ignorieren lässt es nicht aufhören. Zuschauer haben echte Macht zu helfen — zu schweigen ist trotzdem eine Entscheidung.',
        },
        {
          id: 'end_b2',
          title: 'Der mutige Melder',
          text: 'Der Lehrer handelt sofort. Jake und seine Eltern werden hereingerufen. Emma erhält Unterstützung vom Schulberater. Das Mobbing hört auf.',
          lesson: 'Einer Vertrauensperson davon zu erzählen ist eines der stärksten Dinge, die du tun kannst. Das ist kein Petzen. Du hilfst jemandem, der Hilfe braucht.',
        },
        {
          id: 'mid_c',
          text: 'Emma antwortet: „Vielen Dank… es hat wirklich wehgetan. Ich wusste nicht, was ich tun soll." Sie ist dankbar, aber verängstigt. Die Beiträge sind noch online.',
          choices: [
            '📢 Emma helfen, jeden Beitrag der Plattform zu melden',
            '🤷 Emma sagen, sie soll es einfach ignorieren, es wird sich legen',
          ],
        },
        {
          id: 'end_c1',
          title: 'Der digitale Verteidiger',
          text: 'Du und Emma melden jeden Beitrag gemeinsam. Die meisten werden innerhalb eines Tages entfernt. Ihr besucht auch den Schulberater, der Emma weiter unterstützt. Das Mobbing hört auf.',
          lesson: 'Dich bei der betroffenen Person zu melden UND zu handeln ist die beste Antwort auf Cybermobbing. Melde die Beiträge online und bitte Vertrauenspersonen um Hilfe.',
        },
        {
          id: 'end_c2',
          title: 'Nett, aber nicht genug',
          text: 'Emma versucht es zu ignorieren, aber die Beiträge kommen weiter. Deine freundliche Nachricht hat geholfen, aber ohne Meldung oder Erwachsenenunterstützung geht das Mobbing weiter.',
          lesson: 'Freundlichkeit ist ein toller Anfang. Damit Mobbing wirklich aufhört, musst du es auch melden und eine Vertrauensperson um Hilfe bitten.',
        },
      ],
    },
    {
      id: 2,
      title: 'Screenshot-Falle',
      emoji: '📸',
      topic: 'Privatsphäre & Verrat',
      nodes: [
        {
          id: 'start',
          text: 'Du hast deiner Freundin Zoe eine private Nachricht geschickt, dass du jemanden magst. Zoe hat einen Screenshot davon gemacht und ihn ohne deine Erlaubnis in einem großen Gruppenchat geteilt. Alle kommentieren. Was machst du?',
          choices: [
            '😡 Einen wütenden öffentlichen Beitrag über das veröffentlichen, was Zoe getan hat',
            '📱 Zoe privat in einer DM konfrontieren',
            '📸 Die Beweise sichern und einer Vertrauensperson erzählen',
          ],
        },
        {
          id: 'end_a',
          title: 'Feuer trifft Feuer',
          text: 'Du postest öffentlich und stellst Zoe bloß. Zoe schlägt zurück. Dutzende Personen mischen sich ein. Jetzt ist es ein vollständiger Online-Krieg und ihr beide seht schlecht aus.',
          lesson: 'Öffentliche Bloßstellungen online eskalieren fast immer. Sie bringen selten die erhoffte Lösung.',
        },
        {
          id: 'mid_b',
          text: 'Du schreibst Zoe: „Warum hast du das geteilt? Es war privat!" Zoe sagt „Es war doch nur ein Witz, chill mal." Aber sie hat es nicht gelöscht.',
          choices: [
            '😔 Ihre „Entschuldigung" akzeptieren und leise weitermachen',
            '🗣️ Fest darum bitten, es zu löschen, und eine Vertrauensperson einbeziehen',
          ],
        },
        {
          id: 'end_b1',
          title: 'Unter den Teppich gekehrt',
          text: 'Zoe versteht nicht wirklich, warum es falsch war. Der Screenshot bleibt online. Du fühlst dich verletzt, aber nichts ist wirklich gelöst.',
          lesson: '„Nur ein Witz“ ist nie eine Entschuldigung dafür, private Nachrichten zu teilen. Wenn schlechtes Verhalten keine Folgen hat, kann es wieder passieren.',
        },
        {
          id: 'end_b2',
          title: 'Echte Lösung',
          text: 'Unter Druck und mit Erwachsenenbeteiligung löscht Zoe es und führt ein echtes Gespräch über Zustimmung und Privatsphäre. Eure Freundschaft erholt sich unter gesünderen Bedingungen.',
          lesson: 'Ruhig, aber bestimmt für deine Privatsphäre einzustehen, mit Hilfe von Erwachsenen, bringt echte Veränderung. Nicht nur kurze Ruhe.',
        },
        {
          id: 'mid_c',
          text: 'Eine Vertrauensperson hilft, es der Plattform zu melden und kontaktiert Zoes Eltern. Der Screenshot wird entfernt. Zoe entschuldigt sich.',
          choices: [
            '🤝 Ihre Entschuldigung akzeptieren und versuchen, die Freundschaft wiederherzustellen',
            '🚫 Zoe blockieren — du willst sie nicht mehr als Freundin',
          ],
        },
        {
          id: 'end_c1',
          title: 'Vertrauen wiederhergestellt',
          text: 'Mit Erwachsenenunterstützung und einer echten Entschuldigung löst sich die Situation richtig. Zoe versteht Zustimmung. Ihr beide geht weiter.',
          lesson: 'Beweise sichern, melden und eine echte Chance zur Entschuldigung geben kann einen schmerzhaften Moment in eine Lehre verwandeln.',
        },
        {
          id: 'end_c2',
          title: 'Sichere Distanz',
          text: 'Der Screenshot ist weg und du bist geschützt. Blockieren ist eine gültige Grenze, wenn das Vertrauen gebrochen ist. Ein sicheres Ergebnis durch die richtigen Handlungen.',
          lesson: 'Dich selbst zu schützen ist immer okay. Erwachsene um Hilfe zu bitten war genau richtig.',
        },
      ],
    },
    {
      id: 3,
      title: 'Gaming-Wut',
      emoji: '🎮',
      topic: 'Online-Gaming-Belästigung',
      nodes: [
        {
          id: 'start',
          text: 'Du spielst dein Lieblings-Online-Spiel und ein anderer Spieler beginnt, hastige Nachrichten zu spammen — ruft dich Namen und macht Drohungen. Andere in der Lobby schauen zu. Was machst du?',
          choices: [
            '💢 Mit eigenen Beleidigungen zurückschlagen',
            '🙉 Die Nachrichten ignorieren und weiterspielen',
            '🔇 Stummschalten, Screenshot machen und den Spieler im Spiel melden',
          ],
        },
        {
          id: 'end_a',
          title: 'Beide gesperrt',
          text: 'Du streitest zurück. Ihr beide werdet gemeldet. Das System markiert dein Konto. Ihr beide werdet gesperrt — der toxische Spieler hat dich zuerst gemeldet.',
          lesson: 'Mit Hass auf Hass zu reagieren setzt auch dich ins Risiko. Spieleplattformen sperren oft beide Seiten toxischer Auseinandersetzungen.',
        },
        {
          id: 'mid_b',
          text: 'Du ignorierst sie, aber sie eskalieren. Jetzt haben sie dein öffentliches Spielprofil gefunden und posten dort Beleidigungen für andere zum Sehen.',
          choices: [
            '🗑️ Dein Profil löschen, um sie zum Aufhören zu bringen',
            '📢 Der Plattform melden und einer Vertrauensperson erzählen',
          ],
        },
        {
          id: 'end_b1',
          title: 'Davonlaufen',
          text: 'Dein Profil zu löschen stoppt diesen Belästiger zunächst. Aber er zieht zum nächsten Ziel weiter. Keine Konsequenzen, keine echte Veränderung.',
          lesson: 'Dich zu schützen ist wichtig. Aber Melden sorgt dafür, dass der Täter Folgen spürt und es anderen nicht antun kann.',
        },
        {
          id: 'end_b2',
          title: 'Spieler gesperrt',
          text: 'Die Plattform untersucht und sperrt das Konto des Belästigers. Eine Vertrauensperson hilft dir, deine Datenschutzeinstellungen zu überprüfen, und du fühlst dich unterstützt.',
          lesson: 'Gaming-Mobber zu melden funktioniert. Plattformen nehmen Meldungen ernst, besonders wenn du Screenshots als Beweis gespeichert hast.',
        },
        {
          id: 'mid_c',
          text: 'Du hast den Spieler stummgeschaltet und mit Screenshots gemeldet. Der Bericht wird überprüft. Aber du bist immer noch erschüttert von dem, was gesagt wurde.',
          choices: [
            '🗣️ Einer Vertrauensperson erzählen, wie die Erfahrung sich angefühlt hat',
            '😶 Es für dich behalten — du hast es bereits erledigt',
          ],
        },
        {
          id: 'end_c1',
          title: 'Melden und Unterstützung',
          text: 'Eine Vertrauensperson bestätigt deine Gefühle und hilft dir, deine Datenschutzeinstellungen anzupassen. Die Plattform bestätigt, dass der Spieler gesperrt wurde.',
          lesson: 'Melden ist wichtig, aber genauso wichtig ist es zu verarbeiten, wie Online-Missbrauch dich fühlen lässt. Vertrauenspersonen können bei beidem helfen.',
        },
        {
          id: 'end_c2',
          title: 'Halbe Lösung',
          text: 'Der Spieler wird gesperrt, aber du trägst die Erfahrung allein. Du fühlst dich online sicherer, aber bist immer noch beunruhigt.',
          lesson: 'Du hast die technische Seite perfekt gehandhabt! Denk daran: mit jemandem über das Gefühl von Online-Missbrauch zu sprechen ist genauso wichtig.',
        },
      ],
    },
    {
      id: 4,
      title: 'Falsches Profil',
      emoji: '👤',
      topic: 'Identitätsdiebstahl',
      nodes: [
        {
          id: 'start',
          text: 'Du entdeckst ein gefälschtes Social-Media-Konto, das Fotos deines Freundes Sam verwendet. Es postet peinliche Dinge und fügt Sams Klassenkameraden hinzu. Sam weiß es noch nicht. Was machst du?',
          choices: [
            '💬 Das gefälschte Konto anschreiben und ihm sagen, es soll aufhören',
            '📞 Sam sofort erzählen, damit er es weiß',
            '🚩 Das gefälschte Konto melden UND Sam sofort erzählen',
          ],
        },
        {
          id: 'end_a',
          title: 'Den Troll nicht füttern',
          text: 'Das gefälschte Konto blockiert dich und beschleunigt das Posten. Jetzt beginnt es, auch dich anzugreifen. Direktes Eingreifen hat die Dinge verschlimmert.',
          lesson: 'Ein gefälschtes oder missbräuchliches Konto direkt zu kontaktieren macht die Dinge fast immer schlimmer. Stattdessen der Plattform melden.',
        },
        {
          id: 'mid_b',
          text: 'Sam ist schockiert und aufgewühlt. Sam möchte alle anschreiben, um zu erklären, dass es fake ist, weiß aber nicht, was er sonst tun soll. Das Konto ist noch online.',
          choices: [
            '📢 Sam helfen, das Konto der Plattform zu melden',
            '🗣️ Vorschlagen, dass Sam es nur persönlich erklärt, dass es fake ist',
          ],
        },
        {
          id: 'end_b1',
          title: 'Teamarbeit gewinnt',
          text: 'Du und Sam melden das Konto gemeinsam. Die Plattform entfernt es innerhalb von Stunden. Sam erzählt es auch einer Vertrauensperson, die hilft, auf zukünftige Versuche zu achten.',
          lesson: 'Gefälschte Konten gemeinsam zu melden funktioniert sehr gut. Plattformen nehmen falsche Profile ernst und handeln schnell.',
        },
        {
          id: 'end_b2',
          title: 'Langsame Reaktion',
          text: 'Sam erklärt es persönlich den Leuten, aber das gefälschte Konto bleibt tagelang online und verursacht mehr Peinlichkeit, bevor jemand anderes es schließlich meldet.',
          lesson: 'Ein gefälschtes Konto der Plattform zu melden geht viel schneller, als es jedem einzeln zu erklären.',
        },
        {
          id: 'mid_c',
          text: 'Die Plattform erhält deinen Bericht und beginnt mit der Überprüfung des Kontos. Sam ist dankbar, dass du so schnell gehandelt hast.',
          choices: [
            '🏠 Auch einer Vertrauensperson erzählen, um Sam zu unterstützen',
            '⏳ Einfach warten, bis die Plattform handelt',
          ],
        },
        {
          id: 'end_c1',
          title: 'Vollständiger Schutz',
          text: 'Mit Erwachsenenunterstützung und der Aktion der Plattform wird das Konto entfernt. Sam fühlt sich wirklich umsorgt. Die Schule wird darauf aufmerksam gemacht, auf weitere Versuche zu achten.',
          lesson: 'Der Plattform melden UND eine Vertrauensperson einbeziehen schützt am besten, wenn sich jemand als du oder dein Freund ausgibt.',
        },
        {
          id: 'end_c2',
          title: 'Schnelles Handeln',
          text: 'Die Plattform entfernt das Konto. Sam ist erleichtert. Ein großartiges Ergebnis durch schnelles, richtiges Handeln.',
          lesson: 'Ein gefälschtes Konto sofort zu melden ist genau richtig. Je schneller du meldest, desto schneller verschwindet es.',
        },
      ],
    },
    {
      id: 5,
      title: 'Online ausgeschlossen',
      emoji: '😔',
      topic: 'Online-Ausgrenzung',
      nodes: [
        {
          id: 'start',
          text: 'Du entdeckst, dass deine Freundesgruppe einen neuen Gruppenchat ohne dich erstellt hat. Sie planen eine Party, zu der du nicht eingeladen wurdest, und du kannst sehen, wie sie öffentlich darüber posten. Du fühlst dich verletzt und gedemütigt.',
          choices: [
            '📣 Öffentlich über den Schmerz und die Ausgrenzung posten',
            '💬 Eine wütende Nachricht an die ganze Gruppe senden',
            '🤝 Deinem engsten Freund in der Gruppe privat schreiben',
          ],
        },
        {
          id: 'end_a',
          title: 'Öffentlicher Ausbruch',
          text: 'Dein öffentlicher Beitrag erregt Aufmerksamkeit, hauptsächlich Peinlichkeit. Die Freundesgruppe wird defensiv. Das Drama verbreitet sich über die ganze Schule online.',
          lesson: 'Öffentlich zu klagen, dass man ausgeschlossen wurde, hilft selten. Meist wird es schlimmer. Ein privates Gespräch wirkt viel besser.',
        },
        {
          id: 'end_b',
          title: 'Gruppenchat-Drama',
          text: 'Der Gruppenchat wird unangenehm. Einige Freunde fühlen sich schuldig; andere werden ärgerlich. Nichts wird wirklich gelöst und Spannungen bleiben wochenlang.',
          lesson: 'Eine ganze Gruppe auf einmal zu konfrontieren versetzt alle in die Defensive. Persönliche Einzelgespräche funktionieren viel besser.',
        },
        {
          id: 'mid_c',
          text: 'Deine engste Freundin Mia gibt zu, dass sie sich unter Druck gesetzt fühlte, dich von jemand anderem in der Gruppe auszuschließen. Sie entschuldigt sich und sagt, sie möchte helfen, die Dinge zu verbessern.',
          choices: [
            '🤝 Mia bitten, für dich in der Gruppe zu sprechen',
            '🏫 Einer Vertrauensperson über den absichtlichen Ausschluss erzählen',
          ],
        },
        {
          id: 'end_c1',
          title: 'Echte Verbündete',
          text: 'Mia spricht. Du wirst wieder eingeschlossen und die Person, die dich ausgeschlossen hat, wird zur Rede gestellt. Die Freundschaftsgruppe wird durch Ehrlichkeit stärker.',
          lesson: 'Wenn jemand bereit ist zu helfen, lass es zu. Echte Freunde setzen sich füreinander ein — auch wenn es unangenehm ist.',
        },
        {
          id: 'end_c2',
          title: 'Erwachsene Verbündete',
          text: 'Die Vertrauensperson hilft zu vermitteln. Alle reflektieren darüber, wie absichtlicher Ausschluss verletzt. Die Gruppendynamik verbessert sich.',
          lesson: 'Jemanden online absichtlich auszuschließen ist eine Art von Mobbing. Eine Vertrauensperson kann helfen, eine ungesunde Gruppe wieder in Ordnung zu bringen.',
        },
      ],
    },
    {
      id: 6,
      title: 'Private Fotos',
      emoji: '📷',
      topic: 'Bildbezogener Druck',
      nodes: [
        {
          id: 'start',
          text: 'Jemand, mit dem du zwei Wochen online gechattet hast, sagt, er mag dich wirklich, und bittet um ein privates Foto. Er verspricht, zuerst eines zu senden, und sagt, du sollst es vor allen geheim halten.',
          choices: [
            '📸 Ein Foto senden — er scheint wirklich nett zu sein',
            '😐 Sagen, dass du dich nicht wohl fühlst, aber weiter mit ihm reden',
            '🚫 Ablehnen, aufhören mit ihm zu reden und sofort einer Vertrauensperson erzählen',
          ],
        },
        {
          id: 'end_a',
          title: 'Die Falle',
          text: 'Er schickt nie etwas zurück. Stattdessen fordert er mehr Fotos oder er wird deine mit allen teilen. Du bist gefangen. Das nennt man Sextortion.',
          lesson: 'Private Fotos an jemanden zu schicken, den du nur online kennst, ist sehr gefährlich. Wenn jemand dich mit Fotos erpresst, heißt das Sextortion. Das ist eine Straftat. Sag es sofort einer Vertrauensperson.',
        },
        {
          id: 'mid_b',
          text: '„Wenn du keines sendest, vertraust du mir offensichtlich nicht." Er sagt, die ganze Sache ist vorbei, wenn du dich weigerst. Du fühlst dich verwirrt und unter Druck gesetzt.',
          choices: [
            '📸 Nachgeben und ein Foto senden, um den Frieden zu wahren',
            '🚫 Blockieren und sofort einer Vertrauensperson erzählen',
          ],
        },
        {
          id: 'end_b1',
          title: 'Die Falle (Teil 2)',
          text: 'Du sendest das Foto und die Erpressung beginnt sofort. Du erkennst, dass diese Person das von der ersten Nachricht an geplant hat.',
          lesson: 'Gesunde Beziehungen haben nie Ultimaten. „Schick ein Foto, sonst ist Schluss“ ist ein großes Warnsignal. Sag es einer Vertrauensperson, wenn das jemals passiert.',
        },
        {
          id: 'end_b2',
          title: 'Gute Instinkte',
          text: 'Du blockierst das Konto und erzählst es einer Vertrauensperson. Sie hilft dabei, es der Plattform zu melden und erklärt, dass dies eine klassische Grooming-Taktik von Kriminellen ist.',
          lesson: 'Nein zu Druck zu sagen und eine Vertrauensperson einzubeziehen ist immer richtig. Du wurdest manipuliert. Das zu erkennen und zu handeln braucht echten Mut.',
        },
        {
          id: 'mid_c',
          text: 'Eine Vertrauensperson sieht sich das Gespräch an und ist sehr besorgt. Sie erklärt, dass dies wie Grooming aussieht — jemand, der vorgibt, freundlich zu sein, um dein Vertrauen zu gewinnen. Sie möchte es melden.',
          choices: [
            '📋 Den vollständigen Gesprächsverlauf teilen, um den Bericht zu stärken',
            '😳 Einige Details weglassen, weil du dich schämst',
          ],
        },
        {
          id: 'end_c1',
          title: 'Vollständige Offenlegung',
          text: 'Mit vollständigen Beweisen ergreifen die Vertrauensperson und die Plattform starke Maßnahmen. Das Konto wird entfernt und den Behörden gemeldet, die ordnungsgemäß ermitteln können.',
          lesson: 'Erzähle der Vertrauensperson die ganze Geschichte, auch die peinlichen Teile. Dann kann sie dich am besten schützen und den Täter stoppen.',
        },
        {
          id: 'end_c2',
          title: 'Teilbericht',
          text: 'Einige Schutzmaßnahmen werden mit begrenzten Details getroffen. Du bist sicherer, aber das vollständige Bild hätte der Untersuchung viel mehr geholfen.',
          lesson: 'Du warst mutig, es zu sagen. Wenn du alle Einzelheiten erzählst, auch peinliche, können Erwachsene dich schützen und verhindern, dass es anderen passiert.',
        },
      ],
    },
    {
      id: 7,
      title: 'Der hilfreiche Fremde',
      emoji: '🕵️',
      topic: 'Online-Grooming',
      nodes: [
        {
          id: 'start',
          text: 'Jemand in einem Spielchat sagt, er ist 14 und schreibt dir seit einer Woche. Jetzt fragt er, wo du zur Schule gehst, deine Heimatadresse und wann du täglich allein nach Hause kommst. Was machst du?',
          choices: [
            '💬 Die Fragen beantworten — er wirkt wie ein normales Kind',
            '🤔 Vage Antworten geben und weiter chatten',
            '🚫 Aufhören zu antworten, ihn blockieren und sofort einer Vertrauensperson erzählen',
          ],
        },
        {
          id: 'end_a',
          title: 'Zu viele Informationen',
          text: 'In der nächsten Woche kennt er deine Schule, deinen Zeitplan und deine Adresse. Er schlägt vor, sich persönlich zu treffen. Du erkennst, dass etwas sehr falsch ist.',
          lesson: 'Wer online nach deiner Adresse, deiner Schule oder deinem Tagesablauf fragt, ist ein ernstes Warnsignal, auch wenn er sagt, er sei in deinem Alter.',
        },
        {
          id: 'mid_b',
          text: 'Du gibst vage Antworten, aber er drängt immer mehr und fragt jetzt nach deiner Telefonnummer. Etwas fühlt sich komisch an, aber du willst nicht unhöflich wirken.',
          choices: [
            '📱 Deine Nummer geben — er war so nett',
            '🚫 Blockieren und einer Vertrauensperson erzählen',
          ],
        },
        {
          id: 'end_b1',
          title: 'Zu viel verbunden',
          text: 'Er verwendet deine Nummer, um deine anderen sozialen Konten zu finden und deine Aktivität zu verfolgen. Eine Vertrauensperson erfährt davon und ist sehr alarmiert.',
          lesson: 'Du schuldest niemandem online deine Telefonnummer oder persönliche Kontaktdaten. Wer danach drängt, hat schlechte Absichten.',
        },
        {
          id: 'end_b2',
          title: 'Vertrautem Instinkt folgen',
          text: 'Eine Vertrauensperson bestätigt, dass das Konto wie ein gefälschtes Profil eines Erwachsenen aussieht. Sie hilft dir, es zu melden und deine Datenschutzeinstellungen gemeinsam zu überprüfen.',
          lesson: 'Hör auf dein Bauchgefühl und sag es einer Vertrauensperson. Das ist immer richtig, wenn sich online etwas komisch anfühlt.',
        },
        {
          id: 'mid_c',
          text: 'Eine Vertrauensperson überprüft das Gespräch und ist sehr besorgt. Sie erklärt, dass dies wahrscheinlich ein Grooming-Versuch ist — ein Erwachsener, der vorgibt, ein Kind zu sein, um dein Vertrauen zu gewinnen.',
          choices: [
            '📋 Das vollständige Gespräch für einen ordentlichen Bericht bereitstellen',
            '🤐 Darum bitten, es ruhig ohne Behörden zu handhaben',
          ],
        },
        {
          id: 'end_c1',
          title: 'Geschützt und stark',
          text: 'Das Konto wird der Plattform und der Polizei gemeldet. Die Vertrauensperson hilft dir, deine Datenschutzeinstellungen zu verschärfen. Du hast möglicherweise dich selbst und andere Kinder geschützt.',
          lesson: 'Grooming ist eine schwere Straftat. Eine Meldung mit allen Beweisen hilft den Behörden, andere Kinder zu schützen.',
        },
        {
          id: 'end_c2',
          title: 'Sicherer aber unvollständig',
          text: 'Das Konto wird blockiert, aber nicht formal gemeldet. Du bist sicherer, aber die Person kann einfach weitermachen und jemand anderen zum Ziel machen.',
          lesson: 'Grooming ist zu ernst, um es allein zu lösen. Lass Erwachsene eine richtige Meldung machen. Das schützt dich und andere Kinder.',
        },
      ],
    },
    {
      id: 8,
      title: 'Hass in den Kommentaren',
      emoji: '💬',
      topic: 'Hassrede',
      nodes: [
        {
          id: 'start',
          text: 'Du schaust dir einen Live-Gaming-Stream an und der Chat füllt sich mit rassistischen und hasserfüllten Kommentaren, die einen der Spieler angreifen. Die Kommentare kommen schnell. Der angegriffene Spieler sieht sichtlich aufgewühlt aus.',
          choices: [
            '😂 Über einige Kommentare lachen — es ist nur Internet-Humor',
            '😶 Ruhig zuschauen, ohne mitzumachen',
            '🚩 Die Hassrede melden und im Chat das Wort ergreifen',
          ],
        },
        {
          id: 'end_a',
          title: 'Kein Witz',
          text: 'Du hast gelacht. Der Spieler verlässt den Stream in Tränen. Screenshots deines Kommentars tauchen später auf. Du schämst dich und wirst von anderen Zuschauern gemeldet.',
          lesson: 'Rassistische Beleidigungen und Hassrede sind nie „nur Internet-Humor“. Wenn du mitlachst, wirst du Teil des Schadens.',
        },
        {
          id: 'mid_b',
          text: 'Du bleibst still. Der angegriffene Spieler trennt sich vom Stream. Der Chat feiert, ihn vertrieben zu haben. Du bist unbehaglich über das, was du gerade gesehen hast.',
          choices: [
            '💬 Eine unterstützende Nachricht zur Verteidigung des Spielers posten',
            '❌ Den Stream schließen und versuchen, es zu vergessen',
          ],
        },
        {
          id: 'end_b1',
          title: 'Eine Stimme ändert alles',
          text: 'Andere Zuschauer sehen deine Nachricht und beginnen ebenfalls, sich zu erheben. Die Stimmung im Chat ändert sich. Mehrere Personen melden die schlimmsten Täter und einige Konten werden gesperrt.',
          lesson: 'Eine Person, die sich in einem feindlichen Chat zu Wort meldet, kann die Stimmung ändern. Zuschauer haben echte Macht.',
        },
        {
          id: 'end_b2',
          title: 'Der Preis des Schweigens',
          text: 'Du gehst weg, aber der Hass geht weiter. Der angegriffene Spieler streamt vielleicht nie wieder. Dein Schweigen fühlte sich sicherer an, hat aber zum Problem beigetragen.',
          lesson: 'Wegzugehen schützt dich, aber melde Hassrede, bevor du gehst. Das hilft, sie zu stoppen.',
        },
        {
          id: 'mid_c',
          text: 'Du meldest die schlimmsten Kommentare und postest eine unterstützende Nachricht. Mehrere andere Zuschauer folgen deinem Beispiel und melden ebenfalls. Der Spieler bemerkt es und fühlt sich weniger allein.',
          choices: [
            '📣 Auch mit einer Vertrauensperson oder einem Lehrer über das Gesehene sprechen',
            '✅ Du hast genug getan — lass den Rest der Plattform überlassen',
          ],
        },
        {
          id: 'end_c1',
          title: 'Welleneffekt',
          text: 'Mehrere Berichte werden schnell umgesetzt. Das Bewusstsein für Hassrede in Gaming-Bereichen bei einer Vertrauensperson zu schärfen hilft, breiteren Wandel zu schaffen.',
          lesson: 'Hassrede zu melden UND Vertrauenspersonen Bescheid zu sagen macht Plattformen für alle sicherer, jetzt und später.',
        },
        {
          id: 'end_c2',
          title: 'Guter Bürger',
          text: 'Berichte werden umgesetzt und einige Konten werden markiert. Der Spieler bedankt sich später bei dir, dass du im Chat das Wort ergriffen hast.',
          lesson: 'Hassrede zu melden UND im Moment das Wort zu ergreifen ist eine mächtige Kombination. Gut gemacht, dass du gehandelt hast!',
        },
      ],
    },
    {
      id: 9,
      title: 'Der Anprangerungs-Post',
      emoji: '📣',
      topic: 'Falsche Gerüchte online',
      nodes: [
        {
          id: 'start',
          text: 'Jemand aus der Schule postet völlig falsche Gerüchte über dich auf sozialen Medien. Es verbreitet sich schnell — Menschen teilen es und schreiben gemeine Kommentare. Du weißt nicht, wer es gestartet hat, und du bist sehr aufgewühlt.',
          choices: [
            '😡 Eine wütende Antwort posten, um dich öffentlich zu verteidigen',
            '💬 Jeden, den du kennst, anschreiben, um ihm die Wahrheit zu sagen',
            '📸 Alles sichern und sofort einer Vertrauensperson erzählen',
          ],
        },
        {
          id: 'mid_a',
          text: 'Deine Antwort wird viral. Die Leute streiten darüber. Der ursprüngliche Poster weiß, dass er dich getroffen hat, und postet noch mehr und genießt die Reaktion.',
          choices: [
            '💢 Weiter kämpfen, um deinen Namen zu reinigen',
            '🗑️ Deine Antwort löschen und einen Schritt zurücktreten',
          ],
        },
        {
          id: 'end_a1',
          title: 'Ihr Spiel spielen',
          text: 'Das Argument eskaliert schlimm. Lehrer werden einbezogen. Ihr beide habt schulische Konsequenzen — obwohl sie es angefangen haben.',
          lesson: 'Wütend auf falsche Gerüchte zu reagieren füttert das Drama und kann auch dir Ärger einbringen. Gib ihnen nicht die Reaktion, die sie wollen.',
        },
        {
          id: 'end_a2',
          title: 'Zurücktreten',
          text: 'Deine Antwort zu löschen war klug. Das Drama legt sich langsam, aber der ursprüngliche Beitrag bleibt ohne echte Konsequenz für die Person, die ihn gepostet hat.',
          lesson: 'Einen wütenden Beitrag zu löschen ist klug. Melde außerdem den ursprünglichen Beitrag und bitte eine Vertrauensperson um Hilfe, damit es wirklich gelöst wird.',
        },
        {
          id: 'end_b',
          title: 'Schadensbegrenzung',
          text: 'Du verbringst Stunden damit, Leute anzuschreiben. Einige glauben dir; andere nicht. Es ist erschöpfend und der Beitrag ist immer noch online und erreicht ständig neue Leute.',
          lesson: 'Jedem einzeln zu schreiben ist anstrengend und hilft oft nicht. Den Beitrag zu melden und eine Vertrauensperson zu fragen ist schneller und stärker.',
        },
        {
          id: 'mid_c',
          text: 'Die Vertrauensperson hilft dir, den Beitrag wegen Belästigung zu melden. Er wird schnell entfernt. Gemeinsam findet ihr heraus, wer ihn wahrscheinlich gepostet hat.',
          choices: [
            '🤝 Einem vermittelten Gespräch mit der Person, die ihn gepostet hat, zustimmen',
            '🚫 Sie blockieren und jetzt weitermachen, da der Beitrag entfernt ist',
          ],
        },
        {
          id: 'end_c1',
          title: 'Echte Lösung',
          text: 'Ein vermitteltes Gespräch mit Erwachsenenunterstützung deckt auf, was hinter dem Gerücht steckte. Die andere Person entschuldigt sich. Die Schule erstellt neue Richtlinien, um zukünftige Vorfälle zu verhindern.',
          lesson: 'Beweise sichern, melden und, wenn es sicher ist, den wahren Grund finden, bringt die besten und dauerhaften Ergebnisse.',
        },
        {
          id: 'end_c2',
          title: 'Sicher und gelöst',
          text: 'Der Beitrag wird entfernt und du bist geschützt. Blockieren hält dich sicher in Zukunft. Ein starkes Ergebnis durch die richtigen Handlungen.',
          lesson: 'Einen schädlichen Beitrag schnell durch Erwachsenenunterstützung entfernen zu lassen ist ein großartiges Ergebnis. Blockieren für die Sicherheit ist eine kluge Grenze.',
        },
      ],
    },
    {
      id: 10,
      title: 'Passwortdruck',
      emoji: '🔐',
      topic: 'Druck durch Freunde & Passwörter',
      nodes: [
        {
          id: 'start',
          text: 'Dein bester Freund Jonas sagt: „Wenn wir wirklich beste Freunde sind, musst du mir dein Passwort geben. Freunde haben keine Geheimnisse!“ Du fühlst dich unwohl. Was tust du?',
          choices: [
            '🔑 Jonas dein Passwort geben — Freunde vertrauen einander',
            '🤥 Ein falsches Passwort geben, um den Streit zu beenden',
            '🗣️ Ruhig sagen, dass Freunde die Passwörter der anderen nicht brauchen',
          ],
        },
        {
          id: 'end_a',
          text: 'Jonas liest deine Nachrichten und schreibt von deinem Konto aus an andere Leute. Jonas ärgert sich über Dinge, die er falsch verstanden hat. Bald kontrolliert er dich ständig.',
          title: 'Die Kontrolle beginnt',
          lesson: 'Ein Passwort ist privat. Echte Freunde brauchen es nicht. Wenn jemand immer wieder danach fragt, sag es einer erwachsenen Person, der du vertraust, und ändere dein Passwort.',
        },
        {
          id: 'mid_b',
          text: 'Jonas merkt, dass das Passwort falsch ist, und wird sehr wütend: „Du lügst mich an! Gib mir das echte, sonst erzähle ich allen, dass du lügst!“ Der Druck wächst.',
          choices: [
            '🔑 Nachgeben und das echte Passwort verraten',
            '🗣️ Nein sagen und einer erwachsenen Person, der du vertraust, vom Druck erzählen',
          ],
        },
        {
          id: 'end_b1',
          text: 'Sobald Jonas dein Passwort hat, kontrolliert er, mit wem du schreibst, und bestimmt, mit wem du befreundet sein darfst. Es wird immer schlimmer.',
          title: 'In der Falle',
          lesson: 'Nachgeben beendet den Druck selten. Kontrollierendes Verhalten wird meist stärker. Ändere dein Passwort und sag es einer erwachsenen Person, der du vertraust.',
        },
        {
          id: 'end_b2',
          text: 'Es ist schwer, einem engen Freund Nein zu sagen. Eine erwachsene Person, der du vertraust, sagt dir, dass es die richtige Entscheidung war. Sie hilft dir, mit Jonas zu reden oder eine Pause von der Freundschaft zu machen.',
          title: 'Befreit',
          lesson: 'Kontrollierendes Verhalten zu erkennen und Nein zu sagen, braucht Mut. Für deine Sicherheit ist es immer die richtige Wahl.',
        },
        {
          id: 'mid_c',
          text: 'Jonas sagt: „Also vertraust du mir nicht!“ Du bleibst ruhig, aber Jonas drängt weiter, und der Druck steigt.',
          choices: [
            '💪 Bei deiner Grenze bleiben und einer erwachsenen Person, der du vertraust, vom Druck erzählen',
            '😔 Dein Passwort verraten, nur damit Ruhe ist',
          ],
        },
        {
          id: 'end_c1',
          text: 'Eine erwachsene Person, der du vertraust, sagt dir, dass ein Passwort zu verlangen Kontrolle ist, keine Freundschaft. Mit ihrer Hilfe erklärst du Jonas, dass du deine Passwörter für dich behältst. Ein guter Freund akzeptiert das.',
          title: 'Gesunde Grenzen',
          lesson: 'Ein guter Freund respektiert deine Privatsphäre. Vertrauen heißt nicht, Passwörter zu teilen. Du verdienst Freunde, die deine Grenzen achten.',
        },
        {
          id: 'end_c2',
          text: 'Jonas ist ein paar Tage ruhig. Dann will er mehr: deine Fotos, deine Chats. Der Druck beginnt von vorn.',
          title: 'Nachgegeben',
          lesson: 'Ein Passwort zu verraten, um Ruhe zu haben, hilft nur kurz. Behalte deine Passwörter für dich und sag es einer erwachsenen Person, der du vertraust, wenn jemand weiter drängt.',
        },
      ],
    },
    {
      id: 11,
      title: 'Teile das, um das Spiel zu retten!',
      emoji: '🚨',
      topic: 'Desinformation',
      nodes: [
        {
          id: 'start',
          text: 'In deiner Spiele-Community verbreitet sich ein Beitrag. Er hat das Logo des Spiels und sagt: „Die Firma macht dicht! Das Spiel endet morgen. TEILE DAS, um es zu retten!“ Deine Freunde teilen ihn schon. Was tust du?',
          choices: [
            '📤 Sofort teilen — sicher ist sicher',
            '🙈 Ignorieren und weiterscrollen',
            '🔎 Die offizielle Website oder das verifizierte Konto der Spielefirma prüfen',
          ],
        },
        {
          id: 'end_a',
          text: 'Dein Teilen hilft dem Beitrag, Hunderte Spielerinnen und Spieler zu erreichen. Dann schreibt die echte Firma: „Mit dem Spiel ist alles in Ordnung. Diese Nachricht ist falsch!“ Viele hatten umsonst Angst, und dein Name steht beim Teilen.',
          title: 'Die Fälschung verbreiten',
          lesson: 'Ein Beitrag, der „TEILE DAS“ schreit und dir Panik macht, ist ein Warnzeichen. Wer einen falschen Beitrag teilt, verbreitet ihn weiter, auch wenn er nicht von ihm stammt.',
        },
        {
          id: 'mid_b',
          text: 'Du ignorierst ihn, aber der Beitrag wächst weiter. Eine jüngere Spielerin aus deinem Team ist traurig, weil sie glaubt, ihre Spielfreunde zu verlieren. Was tust du?',
          choices: [
            '😶 Nichts sagen — du hast ihn nicht geteilt',
            '🤝 Deinen Freunden sagen, dass er falsch aussieht, und den Beitrag melden',
          ],
        },
        {
          id: 'end_b1',
          text: 'Du hast ihn nicht verbreitet, aber der falsche Beitrag macht den Spielern noch tagelang Angst. Deine Freunde wissen immer noch nicht, dass er falsch ist.',
          title: 'Still, aber nicht genug',
          lesson: 'Nicht zu teilen ist gut. Deinen Freunden Bescheid zu sagen und den Beitrag zu melden, hilft noch mehr.',
        },
        {
          id: 'end_b2',
          text: 'Du zeigst deinen Freunden, dass auf der offiziellen Seite der Firma nichts von einer Schließung steht. Du meldest den Beitrag. Viele hören auf, ihn zu teilen, und er wird gelöscht.',
          title: 'Faktenprüfer',
          lesson: 'Die offizielle Quelle zu prüfen und einen falschen Beitrag zu melden, schützt auch andere.',
        },
        {
          id: 'mid_c',
          text: 'Auf der offiziellen Seite steht nichts von einer Schließung. Das verifizierte Konto schreibt sogar: „Glaubt keinen gefälschten Beiträgen!“ Deine Freunde teilen den falschen trotzdem weiter.',
          choices: [
            '📣 Deinen Freunden den offiziellen Link schicken und den falschen Beitrag melden',
            '🤐 Es für dich behalten — du kennst ja jetzt die Wahrheit',
          ],
        },
        {
          id: 'end_c1',
          text: 'Deine Freunde lesen den offiziellen Link und löschen ihre Beiträge. Der falsche Beitrag wird gemeldet und verschwindet.',
          title: 'Wahrheitsverbreiter',
          lesson: 'Prüfe zuerst offizielle Quellen. Dann hilf anderen, indem du die wahre Information teilst. Wenn du unsicher bist, frag eine erwachsene Person, der du vertraust.',
        },
        {
          id: 'end_c2',
          text: 'Du bist vor der Falschmeldung sicher, aber deine Freunde teilen sie weiter, und noch mehr Spieler bekommen Angst.',
          title: 'Klug, aber still',
          lesson: 'Prüfen ist ein toller erster Schritt. Anderen Bescheid zu sagen und zu melden, hilft viel mehr.',
        },
      ],
    },
    {
      id: 12,
      title: 'Die Viral-Challenge',
      emoji: '🤳',
      topic: 'Falschinformation',
      nodes: [
        {
          id: 'start',
          text: 'Ein Video mit einer Million Aufrufen zeigt Jugendliche, die in 60 Sekunden einen Löffel trockenes Pulver ohne Wasser schlucken. Alle im Video lachen. Dein Freund sagt: „Das probieren wir heute bei mir zu Hause aus!“ Was tust du?',
          choices: [
            '🥄 Mitmachen — alle lachen, also ist es sicher',
            '👍 „Vielleicht später“ sagen und das Video nur liken',
            '✋ Nein sagen und eine erwachsene Person, der du vertraust, fragen, ob es sicher ist',
          ],
        },
        {
          id: 'end_a',
          text: 'Das trockene Pulver gerät in deinen Hals und in die Lunge. Du hustest und bekommst schlecht Luft. Eine erwachsene Person bringt dich zum Arzt. Jetzt lacht niemand mehr.',
          title: 'Gar nicht lustig',
          lesson: 'Videos zeigen die lustigen Teile, nicht die Risiken. Viele teilen Trends, ohne zu prüfen, ob sie sicher sind. Das nennt man Falschinformation.',
        },
        {
          id: 'mid_b',
          text: 'Du likest das Video. Dein Freund macht die Challenge, und wegen der Likes probieren es mehr Kinder aus. Ein Klassenkamerad schreibt, dass er sich verletzt hat, aber die Kommentare sagen nur „lol“.',
          choices: [
            '👍 Weiter liken — es ist nur ein Trend',
            '🗣️ Es einer erwachsenen Person, der du vertraust, sagen und deinen Freund warnen',
          ],
        },
        {
          id: 'end_b1',
          text: 'Deine Likes helfen dem Video, mehr Kinder zu erreichen. Mehr von ihnen probieren es aus, und manche werden krank.',
          title: 'Teil des Trends',
          lesson: 'Likes und Shares machen ein Video größer. Wenn ein Trend jemandem schaden kann, like und teile ihn nicht.',
        },
        {
          id: 'end_b2',
          text: 'Die erwachsene Person prüft die Fakten: Die Challenge kann Verschlucken und Atemprobleme verursachen. Dein Freund hört auf, und sie hilft dir, das Video zu melden.',
          title: 'Trend-Stopper',
          lesson: 'Eine erwachsene Person, der du vertraust, einzuweihen, ist klug. Ein lustiges Video ist kein Beweis dafür, dass etwas sicher ist.',
        },
        {
          id: 'mid_c',
          text: 'Die erwachsene Person recherchiert mit dir. Ärztinnen und Ärzte sagen, die Challenge kann Verschlucken und ernste Atemprobleme verursachen. Dein Freund ist überrascht. Ein Video mit vielen Likes kann trotzdem falsch liegen.',
          choices: [
            '📲 Deinem Freund die Fakten zeigen und das Video melden',
            '🙅 Nur selbst Nein sagen — die anderen können selbst entscheiden',
          ],
        },
        {
          id: 'end_c1',
          text: 'Dein Freund beschließt, es nicht zu probieren. Ihr meldet das Video zusammen und teilt die Fakten im Klassenchat. Weniger Kinder probieren die Challenge aus.',
          title: 'Wahrheitsdetektiv',
          lesson: 'Prüfe die Fakten, frag eine erwachsene Person und hilf anderen. So stoppst du Falschinformation, auch wenn die, die sie teilen, es nicht böse meinten.',
        },
        {
          id: 'end_c2',
          text: 'Du bleibst sicher, aber dein Freund und andere Kinder probieren es trotzdem. Manche bekommen einen fiesen Husten.',
          title: 'Sicher, aber still',
          lesson: 'Für dich selbst Nein zu sagen ist gut. Die Fakten zu teilen hilft auch anderen, sicher zu bleiben.',
        },
      ],
    },
    {
      id: 13,
      title: 'Die Mutprobe des Influencers',
      emoji: '⭐',
      topic: 'Schädliche Influencer',
      nodes: [
        {
          id: 'start',
          text: 'Dein Lieblings-Influencer hat 2 Millionen Follower. Heute steht im Beitrag: „Echte Fans machen ein Foto auf dem Schuldach! Markiere 3 Freunde! Das beste Foto bekommt einen Shout-out!“ Deine Freunde reden im Gruppenchat darüber. Was tust du?',
          choices: [
            '📸 Mitmachen — echte Fans nehmen die Mutprobe an',
            '🤔 Abwarten, was die anderen tun',
            '🛑 Anhalten und nachdenken: Ist das sicher? Dann eine erwachsene Person, der du vertraust, fragen',
          ],
        },
        {
          id: 'end_a',
          text: 'Du kletterst mit deinen Freunden hinauf. Eine Lehrkraft sieht euch, und die Schule ruft eure Eltern an. Jemand hätte abstürzen können. Der Influencer sieht dein Foto nicht einmal.',
          title: 'Gefährlicher Fan',
          lesson: 'Influencer verdienen mit Aufmerksamkeit Geld. Sie sind nicht verantwortlich, wenn du dich verletzt. Eine gefährliche Mutprobe ist es nie wert.',
        },
        {
          id: 'mid_b',
          text: 'Einige Klassenkameraden posten Dachfotos. Der Influencer teilt die besten. Deine Freunde sagen, du bist ein Feigling, wenn du nicht mitmachst.',
          choices: [
            '😬 Mitmachen, damit sie dich nicht auslachen',
            '🧠 Nein sagen — ein echter Freund drängt dich nicht in Gefahr',
          ],
        },
        {
          id: 'end_b1',
          text: 'Du kletterst hinauf und hast die ganze Zeit Angst. Danach bekommst du Ärger, und auf das Foto bist du nicht einmal stolz.',
          title: 'Der Druck gewinnt',
          lesson: 'Druck von Followern und Freunden ist kein guter Grund. Nein zu sagen ist okay, und ein echter Freund respektiert das.',
        },
        {
          id: 'end_b2',
          text: 'Du sagst Nein. Zwei Freunde lachen, aber einer sagt: „Ehrlich gesagt, mir war das auch komisch.“ Zusammen sagt ihr es einer Lehrkraft, und die Schule warnt alle.',
          title: 'Starke Entscheidung',
          lesson: 'Nein zu sagen braucht Mut. Andere fühlen oft genauso, und wenn du etwas sagst, kannst du sie auch schützen.',
        },
        {
          id: 'mid_c',
          text: 'Du hältst an und denkst nach: Auf ein Dach zu klettern ist gefährlich. Eine erwachsene Person, der du vertraust, sagt: „Influencer wollen Aufrufe, und manche denken nicht an Sicherheit. Schauen wir, ob dieser Beitrag gegen die Regeln der App verstößt.“',
          choices: [
            '🚩 Den Mutprobe-Beitrag der Plattform melden',
            '😌 Einfach nicht mitmachen und es vergessen',
          ],
        },
        {
          id: 'end_c1',
          text: 'Die Plattform entfernt die Mutprobe. Du entfolgst dem Influencer außerdem und sagst deinen Freunden, warum. Weniger Kinder verletzen sich.',
          title: 'Kluger Follower',
          lesson: 'Du kannst jemandem entfolgen, dessen Beiträge gefährlich sind. Melde riskante Beiträge. Denk dran: Stopp – Denk nach – Prüfe – Frag.',
        },
        {
          id: 'end_c2',
          text: 'Du bist sicher, aber die Mutprobe bleibt online, und andere Kinder könnten sie ausprobieren.',
          title: 'Erst mal sicher',
          lesson: 'Nicht mitzumachen ist gut. Einen gefährlichen Beitrag zu melden, schützt auch andere Kinder.',
        },
      ],
    },
    {
      id: 14,
      title: 'Der endlose Feed',
      emoji: '📱',
      topic: 'Algorithmen & Fake News',
      nodes: [
        {
          id: 'start',
          text: 'Gestern Abend hast du ein paar „Schock-Nachrichten“-Videos gesehen. Jetzt ist dein Feed voll davon: wütende Leute, beängstigende Behauptungen, Countdowns bis zur Katastrophe. Du machst dir Sorgen und kannst nicht aufhören zu scrollen. Was tust du?',
          choices: [
            '📲 Weiterscrollen — das müssen wichtige Nachrichten sein',
            '😰 Das gruseligste Video teilen, um deine Freunde zu warnen',
            '🧭 Dich fragen: Warum sehe ich so viele davon? Dann einer erwachsenen Person, der du vertraust, davon erzählen',
          ],
        },
        {
          id: 'end_a',
          text: 'Du scrollst zwei Stunden, und die Videos werden immer gruseliger. Du kannst nicht schlafen und bist am nächsten Tag ängstlich.',
          title: 'Gefangen in der Schleife',
          lesson: 'Apps zeigen dir mehr von dem, was du ansiehst. Schockvideos halten dich fest, auch wenn sie nicht wahr oder nicht gut für dich sind.',
        },
        {
          id: 'mid_b',
          text: 'Du teilst es. Freunde antworten: „Ist das echt?“ Eine Freundin hat so viel Angst, dass sie nicht schlafen kann. Dann findet jemand heraus, dass das Video alt ist und aus einem anderen Land stammt.',
          choices: [
            '😳 Dein Teilen löschen und deinen Freunden die Wahrheit sagen',
            '🤷 Es lassen — du hast es nur geteilt, nicht gemacht',
          ],
        },
        {
          id: 'end_b1',
          text: 'Du löschst den Beitrag und sagst deinen Freunden, dass das Video alt ist. Die meisten glauben dir. Es braucht Mut, einen Fehler zu korrigieren.',
          title: 'Ehrliche Korrektur',
          lesson: 'Jeder teilt manchmal etwas Falsches. Schnell korrigieren und ehrlich sein hilft sehr. Prüfe, bevor du teilst.',
        },
        {
          id: 'end_b2',
          text: 'Das Video verbreitet sich weiter, mit deinem Namen dran. Noch mehr Leute haben Angst vor etwas, das nicht einmal wahr ist.',
          title: 'Gerüchte-Maschine',
          lesson: 'Ein falscher Beitrag, der online bleibt, verbreitet sich weiter. Wenn du merkst, dass er falsch ist, lösche ihn und sag es.',
        },
        {
          id: 'mid_c',
          text: 'Eine erwachsene Person, der du vertraust, erklärt: Apps lernen, was du ansiehst, und zeigen dir mehr davon. Schockvideos bekommen viele Aufrufe, deshalb schieben Apps sie nach vorn. Gemeinsam seht ihr, dass du deinen Feed ändern kannst.',
          choices: [
            '⚙️ „Nicht interessiert“ tippen, lustigen und nützlichen Accounts folgen und eine Pause machen',
            '🔁 Den Feed lassen, wie er ist — du kannst die gruseligen Teile ignorieren',
          ],
        },
        {
          id: 'end_c1',
          text: 'Nach ein paar Tagen zeigt dein Feed viel mehr Gutes. Du fühlst dich ruhiger und prüfst Fakten, bevor du etwas teilst.',
          title: 'Chef des Feeds',
          lesson: 'Du kannst deinen Feed lenken: „nicht interessiert“ sagen, wählen, wem du folgst, und Pausen machen. Prüfe Fakten, bevor du teilst.',
        },
        {
          id: 'end_c2',
          text: 'Die gruseligen Videos kommen weiter, und du machst dir immer noch ein bisschen Sorgen.',
          title: 'Immer noch gefangen',
          lesson: 'Ignorieren ist schwer, wenn der Feed ständig drängt. Wenn du änderst, wem du folgst und was du ansiehst, ändert sich auch, was du siehst.',
        },
      ],
    },
  ],
}
