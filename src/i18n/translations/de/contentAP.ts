// ---------------------------------------------------------------------------
// Attacker Perspective (AP) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Attacker Perspective module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentAP = {
  aim: 'Einen Überblick über die Angreiferperspektive zu geben, indem Lernenden geholfen wird, Angreifertechniken zu erkennen und die Motive hinter Cyberangriffen zu verstehen.',
  objectives: [
    'Das Verständnis für die Motive von Angreifern zu entwickeln, einschließlich psychologischer, sozialer und wirtschaftlicher Faktoren.',
    'Fähigkeiten im Erkennen gängiger Angreifertechniken aufzubauen.',
  ],
  outcomes: [
    'Ich verstehe die Motive von Angreifern und kann Beispiele zu psychologischen, sozialen und wirtschaftlichen Faktoren nennen.',
    'Ich kann Angreifertechniken in gegebenen Szenarien erkennen.',
  ],
  parts: [
    {
      goal:
        'Kindern Wissen über das Konzept einer Vertrauensperson vermitteln und Fähigkeiten zur Identifizierung des Kreises der Vertrauenspersonen entwickeln.',
      bundle: {
        filename: 'Angreifer-Perspektive - Paket - Teil 1',
      },
      included: {
        materials: [
          {
            // ID: 2.1.1
            kind: 'Arbeitsblatt',
            name: 'Vertrauenspersonen: Menschen um mich herum',
            filename: 'Arbeitsblatt - Vertrauenspersonen Menschen um mich herum',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 2.1.2
            kind: 'Arbeitsblatt',
            name: 'Vertrauenskreise',
            filename: 'Arbeitsblatt - Vertrauenskreise',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 2.1.3
            kind: 'Bild',
            name: 'Situation: Gefundenes Geld',
            filename: 'Bild - Situation Gefundenes Geld',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 2.1.4
            kind: 'Bild',
            name: 'Situation: Ein Foto gesehen',
            filename: 'Bild - Situation Ein Foto gesehen',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Den Kreis der Vertrauenspersonen definieren',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
    },
    {
      goal: 'Das Konzept eines Angreifers und die Motivation aus der Angreiferperspektive einführen.',
      bundle: {
        filename: 'Angreifer-Perspektive - Paket - Teil 2',
      },
      included: {
        materials: [
          {
            // ID: 2.2.1
            kind: 'Szenariokarten',
            name: 'Das Verhalten identifizieren',
            filename: 'Szenariokarten - Das Verhalten identifizieren',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 2.2.2
            kind: 'Szenariokarten',
            name: 'Die Charaktere erkennen',
            filename: 'Szenariokarten - Die Charaktere erkennen',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 2.2.4
            kind: 'Bild',
            name: 'Angreifermotivationen',
            filename: 'Bild - Angreifermotivationen',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 2.2.5
            kind: 'Bild',
            name: 'Ein Blick ins Märchen: Motivation und Mittel von Angreifern',
            filename: 'Bild - Ein Blick ins Märchen Motivation und Mittel von Angreifern',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 2.2.6
            kind: 'Arbeitsblatt',
            name: 'Angriffsanalyse',
            filename: 'Arbeitsblatt - Angriffsanalyse',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Einen Cybersicherheitsangreifer definieren',
          },
          {
            title: 'Die Motivation des Angreifers verstehen',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 2.2.3
        title: 'Wer steckt hinter Cyberangriffen?',
        supportText:
          'Verwenden Sie dieses Video, damit Schülerinnen und Schüler sich die echten Menschen und Motive hinter Cyberangriffen vorstellen können, über das Stereotyp des einsamen Hackers hinaus. Pausieren Sie, um zu fragen, wer ihrer Meinung nach verantwortlich ist und warum.',
        downloads: {
          video: {
            filename: 'Wer steckt hinter Cyberangriffen',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Wer steckt hinter Cyberangriffen - Untertitel',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      goal: 'Die grundlegenden Techniken (Taktiken) einführen, die für Kinder relevant sind und die Angreifer zur Erreichung ihrer Ziele einsetzen.',
      bundle: {
        filename: 'Angreifer-Perspektive - Paket - Teil 3',
      },
      included: {
        materials: [
          {
            // ID: 2.3.1
            kind: 'Lektüre',
            name: 'Smishing und Vortäuschung falscher Identität',
            filename: 'Lektüre - Smishing und Vortäuschung falscher Identität',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 2.3.2
            kind: 'Lektüre',
            name: 'Vishing, Betrug und Vortäuschung falscher Identität',
            filename: 'Lektüre - Vishing, Betrug und Vortäuschung falscher Identität',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 2.3.3
            kind: 'Lektüre',
            name: 'Die häufigsten Cyberbedrohungen',
            filename: 'Lektüre - Die häufigsten Cyberbedrohungen',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 2.3.4
            kind: 'Szenariokarten',
            name: 'Häufige Angreifertechniken',
            filename: 'Szenariokarten - Häufige Angreifertechniken',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 2.3.5
            kind: 'Karten',
            name: 'Angreifer und ihre Pläne',
            filename: 'Karten - Angreifer und ihre Pläne',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 2.3.6
            kind: 'Arbeitsblatt',
            name: 'Rätsel: Die Party der Angreifer',
            filename: 'Arbeitsblatt - Rätsel Die Party der Angreifer',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Verhaltensmuster verstehen',
          },
          {
            title: 'Angriffspfade verstehen',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
    },
  ],
  otherModulesDivider: 'Weitere Themen erkunden',
  otherModulesTitle: 'Weitere Module',
  otherModulesSubtitle: 'Verwandte Module durchsuchen und weiterlernen.',
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
  title: 'Im Kopf des Hackers',
  subtitle:
    'Sie sind ein ethischer Hacker. Finden Sie die Schwachstellen auf einem Social-Media-Profil, planen Sie den Angriff so, wie es ein Angreifer tun würde, und lernen Sie, wie man ihn stoppt!',
  howItWorks: 'So funktioniert es',
  instruction:
    'Untersuchen Sie dieses Social-Media-Profil, als wären Sie ein Hacker, der nach Schwachstellen sucht. Fast alles auf dem Bildschirm ist anklickbar – denken Sie sorgfältig nach, denn ein Klick auf etwas, das keine echte Schwachstelle ist, kostet Sie ein Leben! Danach planen Sie den Angriff so, wie es ein Angreifer tun würde, und finden heraus, wie man ihn stoppt.',
  tipLabel: 'Tipp',
  tip: 'Es gibt genau 4 echte Schwachstellen, die unter vielen harmlos aussehenden Elementen versteckt sind. Nicht jedes anklickbare Element ist eine Sicherheitslücke!',
  livesTitle: 'Leben',
  livesDesc: '3 falsche Klicks und das Spiel ist vorbei',
  vulnerabilitiesFoundTitle: '🔍 Gefundene Schwachstellen',
  vulnerabilitiesEmpty: 'Noch keine gefunden…',
  vulnerabilitiesCount: '/ 4',
  attackerTargetsTitle: '🎯 Was Angreifer anvisieren',
  attackerTargets: [
    '🚩 HTTP statt HTTPS',
    '🚩 Echtzeit-Standortfreigabe',
    '🚩 Vollständiges Geburtsdatum öffentlich sichtbar',
    '🚩 Antworten auf Sicherheitsfragen offengelegt',
  ],
  profile: {
    displayName: 'Alex Johnson',
    handle: '@alex123',
    statusActiveNow: 'Jetzt aktiv',
    bioText: '16 · Gamer 🎮 · Manga Fan',
    aboutTitle: 'Über mich',
    statsFriendsLabel: 'Freunde',
    statsFollowingLabel: 'Folge ich',
    bornText: 'Geboren am 14. Juni 2008',
    emailText: 'alex.gamer@freemail.com',
    petNameText: 'Name des Haustieres: Whiskers',
    post1Time: '📍 Einkaufszentrum Innenstadt · Gerade eben',
    post1Body: 'Habe mir gerade einen Kaffee geholt ☕ Ist jemand in der Nähe? Findet mich am Foodcourt! 😄',
    post1Badge: '🛍️ Innenstadt-Mall — eingecheckt',
    post2Time: 'Vor 2 Stunden',
    post2Body: 'Gerade von der Schule zurück! Pizza mit der Familie 🍕 Bester Abend aller Zeiten!',
    actionLike: 'Gefällt mir',
    actionComment: 'Kommentieren',
    actionShare: 'Teilen',
    navSearch: 'Personen und Beiträge suchen',
    actionFollow: 'Folgen',
    actionMessage: 'Nachricht',
    badge1: '⭐ Level 42',
    badge2: '🏆 Top 10 % der Spieler',
    badge3: '🔥 120 Tage in Folge',
    tabPosts: 'Beiträge',
    tabPhotos: 'Fotos',
    tabFriends: 'Freunde',
    statsPostsLabel: 'Beiträge',
    joinedText: 'Beigetreten im März 2021',
    interestsTitle: 'Interessen',
    interest1: 'Minecraft',
    interest2: 'Manga',
    interest3: 'Fußball',
    interest4: 'Pizza',
    post3Time: 'Gestern',
    post3Body: 'Neuer Highscore! 🏆 Kann jemand 48.200 Punkte knacken?',
    post3Score: '48.200',
  },
  vulnFoundSuffix: '/ 4 Schwachstellen gefunden',
  tryAgain: 'Erneut versuchen',
  winTitle: 'Ausgezeichnete Arbeit!',
  winMsg: 'Sie haben alle 4 Schwachstellen wie ein echter Sicherheitsforscher entdeckt. Jetzt wissen Sie, wie Angreifer denken!',
  loseTitle: 'Spiel vorbei!',
  loseMsgTemplate:
    'Ihnen sind die Leben ausgegangen! Sie haben {found} von {total} Schwachstellen gefunden. Die verpassten sind jetzt rot hervorgehoben.',
  attackerVoiceInitial: 'Interessantes Profil… lass mich nach Schwachstellen scannen.',
  attackerVoiceWin: '🏆 Beeindruckend! Sie haben alle {total} Schwachstellen gefunden. Sie denken wie ein Hacker!',
  attackerVoiceLose: '💀 Zu viele Fehler. Studieren Sie das Profil beim nächsten Mal sorgfältiger.',
  attackerVoiceAlreadyTagged: 'Bereits markiert: {label}.',
  attackerVoiceCorrect: '🔓 Schwachstelle gefunden: {label}! {explain}',
  attackerVoiceWrong: 'Keine Schwachstelle — {explain}',
  part1Label: 'Teil 1 von 3: Das Profil untersuchen',
  part2Label: 'Teil 2 von 3: Den Angriff planen',
  part3Label: 'Teil 3 von 3: Warum, und wie man es stoppt',
  continueButton: 'Weiter: den Angriff planen →',
  planTitle: 'Der Plan des Angreifers',
  planIntro: 'Ein kleiner Hinweis ist allein noch keine Gefahr. Angreifer setzen Hinweise zu einem Plan zusammen. Wählen Sie bei jedem Hinweis das Ziel, dem er hilft.',
  planTrayTitle: 'Hinweise vom Profil',
  planChooseLabel: 'Welchem Ziel hilft dieser Hinweis?',
  planVoiceCorrect: '🧩 Gute Zuordnung! {explain}',
  planVoiceWrong: '🤔 Nicht dieses Ziel. {explain}',
  planSummaryTitle: 'Kleine Hinweise summieren sich',
  planSummaryText: 'Geburtstag, Haustiername und eine unsichere Seite können ein Konto öffnen. Ein Live-Standort und ein Beitrag über die Schule können verraten, wo jemand ist. Angreifer sammeln solche Hinweise Stück für Stück.',
  planScoreTemplate: '{n} von {total} Hinweisen im ersten Versuch',
  toQuizButton: 'Weiter: warum, und wie man es stoppt →',
  goals: {
    account: { icon: '🔑', title: 'In das Konto einbrechen', hint: 'Das Profil oder das Spielkonto übernehmen' },
    person: { icon: '🧭', title: 'Die Person im echten Leben finden', hint: 'Wissen, wo die Person ist und wann' },
    none: { icon: '🚫', title: 'Nicht nützlich', hint: 'Hilft einem Angreifer kaum' },
  },
  clues: [
    {
      id: 'birthday',
      icon: '🎂',
      text: 'Vollständiges Geburtsdatum im Profil',
      explanation: 'Menschen nutzen ihr Geburtsdatum oft in Passwörtern und Sicherheitsantworten. Ein Angreifer probiert es zuerst.',
    },
    {
      id: 'pet',
      icon: '🐱',
      text: 'Name des Haustiers im Profil',
      explanation: 'Haustiernamen sind beliebte Passwörter und Sicherheitsantworten. Ein Angreifer kann den Namen probieren, um ins Konto zu kommen.',
    },
    {
      id: 'http',
      icon: '🔓',
      text: 'Die Seite nutzt http:// und nicht https://',
      explanation: 'Auf einer http://-Seite können andere im selben Netzwerk lesen, was Sie tippen. Auch ein Passwort.',
    },
    {
      id: 'location',
      icon: '📍',
      text: 'Live-Standort in einem Beitrag',
      explanation: 'Ein Live-Standort zeigt genau, wo jemand gerade ist. Ein Fremder könnte ihn missbrauchen, um die Person zu finden.',
    },
    {
      id: 'routine',
      icon: '🏫',
      text: 'Beitrag: „Gerade von der Schule zurück!“',
      explanation: 'Das verrät einem Fremden, wann die Person meistens wo ist. Kleine Details wie dieses können sich zu einem Plan summieren.',
    },
    {
      id: 'avatar',
      icon: '👤',
      text: 'Profilbild',
      explanation: 'Ein Profilbild ist normal. Es hilft einem Angreifer weder beim Einbruch ins Konto noch beim Finden der Person.',
    },
    {
      id: 'bio',
      icon: '🎮',
      text: 'Bio: Gamer und Manga-Fan',
      explanation: 'Hobbys sind kein Geheimnis. Allein helfen sie einem Angreifer kaum.',
    },
    {
      id: 'friends',
      icon: '👥',
      text: 'Anzahl der Freunde und Follower',
      explanation: 'Eine Anzahl ist nur eine Zahl. Ein Angreifer kann damit nichts anfangen.',
    },
  ],
  quizTitle: 'Warum, und wie man es stoppt',
  quizProgressTemplate: 'Frage {n} von {total}',
  motiveLabel: 'Warum würde der Angreifer das tun?',
  defendLabel: 'Was hilft am meisten?',
  quizVoiceCorrect: '✅ {explain}',
  quizVoiceWrong: '❌ Nicht ganz. {explain}',
  nextButton: 'Weiter →',
  resultsButton: 'Ergebnis ansehen →',
  motivationsTitle: 'Warum Angreifer angreifen',
  motivationsSubtitle: 'Acht Beweggründe',
  motivations: {
    financial: { name: 'Finanzieller Gewinn', desc: 'Gestohlene Daten verkaufen oder Lösegeld verlangen' },
    reputation: { name: 'Ansehen', desc: 'Angeben und Anerkennung wollen' },
    revenge: { name: 'Rache', desc: 'Es jemandem heimzahlen' },
    espionage: { name: 'Spionage', desc: 'Geheime Informationen für einen Staat oder eine Firma beschaffen' },
    error: { name: 'Nur ein Fehler', desc: 'Ein Versehen, das ein Problem verursacht' },
    experiment: { name: 'Ausprobieren', desc: 'Aus Spaß Dinge testen' },
    fear: { name: 'Angst', desc: 'Etwas Schlechtes tun wegen Druck oder Drohungen' },
    beliefs: { name: 'Überzeugungen', desc: 'Für eine Sache kämpfen, an die man glaubt' },
  },
  motiveCases: [
    {
      id: 1,
      text: 'Ein älterer Schüler bricht in das Konto eines jüngeren Kindes ein und postet Unsinn, damit alle sehen, wie clever er ist.',
      explanation: 'Er will bewundert werden. Der Wunsch nach Anerkennung und Angeberei heißt Motivation „Ansehen“.',
    },
    {
      id: 2,
      text: 'Ein Fremder bricht in Hunderte Konten ein und verkauft die Zugangsdaten auf einer Website.',
      explanation: 'Der Fremde will Geld. Gestohlene Daten zu verkaufen ist „finanzieller Gewinn“.',
    },
    {
      id: 3,
      text: 'Ein Schüler bricht in das Konto eines Klassenkameraden ein, weil dieser letzten Monat gemein zu ihm war.',
      explanation: 'Der Schüler will es jemandem heimzahlen. Diese Motivation heißt „Rache“.',
    },
    {
      id: 4,
      text: 'Ein Kind lädt ein Hacker-Programm herunter und probiert es an einem Schulcomputer aus, nur um zu sehen, was passiert.',
      explanation: 'Es will niemandem schaden und probiert einfach aus. Das heißt „Ausprobieren“, kann aber trotzdem echten Schaden anrichten.',
    },
    {
      id: 5,
      text: 'Ein älteres Kind sagt zu einem jüngeren: „Besorg mir das Passwort deines Freundes, sonst erzähle ich allen dein Geheimnis.“ Warum tut das jüngere Kind es?',
      explanation: 'Das jüngere Kind hat Angst, was das ältere tut. Etwas Schlechtes wegen Druck oder Drohungen zu tun, ist „Angst“.',
    },
  ],
  defendCases: [
    {
      id: 1,
      text: 'Ein Angreifer will ein Passwort erraten. Welche Gewohnheit macht es ihm am schwersten?',
      options: [
        'Ein langes Passwort aus zufälligen Wörtern, das nichts mit Ihnen zu tun hat',
        'Der Name Ihres Haustiers und Ihr Geburtsjahr',
        'Dasselbe kurze Passwort für jedes Konto',
      ],
      explanation: 'Ein langes Passwort aus zufälligen Wörtern ist schwer zu erraten. Geburtstage und Haustiernamen probiert ein Angreifer zuerst, und ein Passwort für alles gefährdet alle Konten.',
    },
    {
      id: 2,
      text: 'Eine Seite beginnt mit http://, hat kein Schloss, verlangt aber Ihr Passwort. Was tun Sie?',
      options: [
        'Sie tippen es nicht ein. Sie suchen eine Seite, die mit https:// beginnt und ein Schloss hat',
        'Sie tippen es schnell ein, bevor es jemand bemerkt',
        'Sie tippen ein kürzeres Passwort, damit weniger zu lesen ist',
      ],
      explanation: 'Auf einer http://-Seite können andere im Netzwerk lesen, was Sie tippen. Geben Sie Passwörter nur auf https://-Seiten ein.',
    },
    {
      id: 3,
      text: 'Ein Freund möchte, dass Sie posten, wo Sie gerade sind, damit alle kommen. Was ist am sichersten?',
      options: [
        'Den Live-Standort ausschalten und das Foto später teilen, wenn Sie schon weg sind',
        'Ihn nur 5 Minuten lang posten',
        'Ihn so posten, dass ihn alle sehen, auch Fremde',
      ],
      explanation: 'Ein Live-Standort verrät Fremden, wo Sie gerade sind. Teilen Sie Fotos später und nur mit Leuten, die Sie kennen.',
    },
  ],
  finalTitle: 'Angreifer-Denken freigeschaltet!',
  finalPart1Template: 'Teil 1: {n} von {total} Schwachstellen gefunden',
  finalPart2Template: 'Teil 2: {n} von {total} Hinweisen im ersten Versuch',
  finalPart3Template: 'Teil 3: {n} von {total} Fragen im ersten Versuch',
  finalScoreTemplate: 'Insgesamt {n} von {total} Punkten',
  rankGreat: 'Sie denken wie ein Angreifer und handeln wie ein Verteidiger. Tolle Arbeit!',
  rankGood: 'Gute Arbeit! Wiederholen Sie die Teile, die Ihnen schwer fielen.',
  rankPractise: 'Üben Sie weiter. Achten Sie auf kleine Hinweise und fragen Sie: Wie könnte jemand sie zusammensetzen?',
  hotspots: [
    {
      id: 'http',
      label: 'Unverschlüsselte Verbindung (HTTP)',
      explain: 'Diese Website nutzt HTTP statt HTTPS. Was Sie hier eingeben, auch Passwörter, ist nicht verschlüsselt. Jeder im selben Netzwerk kann es lesen.'
    },
    { id: 'avatar',
      label: 'Profilbild',
      explain: 'Profilfotos sind ein Standardteil sozialer Medien. Sie sind an sich kein Sicherheitsrisiko!'
    },
    {
      id: 'username',
      label: 'Anzeigename / Benutzername',
      explain: 'Name und @Handle zu zeigen ist auf sozialen Plattformen normal. Das ist keine Schwachstelle.'
    },
    {
      id: 'online',
      label: 'Aktivitätsstatus',
      explain: 'Zu zeigen, wann Sie online sind, ist eine gängige Funktion. Es ist ein kleines Datenschutzthema, aber keine echte Schwachstelle.'
    },
    {
      id: 'bio',
      label: 'Bio / Interessen',
      explain: 'Allgemeine Hobbys wie Gaming oder Anime aufzulisten ist in Ordnung. Dies legt keine sensiblen Kontodaten offen.'
    },
    {
      id: 'followers',
      label: 'Follower- / Freundeanzahl',
      explain: 'Freunde- und Followerzahlen sind eine normale Funktion. Keine Schwachstelle!'
    },
    {
      id: 'birthday',
      label: 'Vollständiges Geburtsdatum offengelegt',
      explain: 'Das volle Geburtsdatum zu zeigen ist gefährlich! Angreifer nutzen es, um Passwörter zu erraten (z. B. \'alex2008\'), Sicherheitsfragen zu beantworten und in Konten zu gelangen.'
    },
    {
      id: 'email',
      label: 'E-Mail im Profil',
      explain: 'Eine öffentliche E-Mail kann Spam anziehen, ist aber ein kleineres Problem als ein offenes Passwort oder eine verratene Sicherheitsantwort.'
    },
    {
      id: 'petname',
      label: 'Haustiername offengelegt',
      explain: 'Der Name Ihres Haustiers ist oft eine Sicherheitsantwort. Angreifer können ihn nutzen, um in Konten zu gelangen oder Sie zu täuschen.'
    },
    {
      id: 'location',
      label: 'Echtzeit-Standortübertragung',
      explain: 'Dieser Beitrag zeigt genau, wo Alex gerade ist! Jeder kann es sehen, auch Fremde und Angreifer. Den Live-Standort zu teilen ist ein ernstes Sicherheitsrisiko.'
    },
    {
      id: 'post2',
      label: 'Allgemeiner Beitrag',
      explain: 'Über Alltägliches wie Pizza zu posten ist in Ordnung. Es verrät nichts Sensibles!'
    },
    {
      id: 'like1',
      label: 'Gefällt-mir-Schaltfläche',
      explain: 'Beiträge zu liken ist normal und harmlos!'
    },
    {
      id: 'comment1',
      label: 'Kommentar-Schaltfläche',
      explain: 'Kommentare sind eine normale Funktion. Keine Schwachstelle!'
    },
    {
      id: 'share1',
      label: 'Teilen-Schaltfläche',
      explain: 'Beiträge zu teilen ist eine grundlegende Social-Media-Funktion. Die Schaltfläche selbst ist kein Sicherheitsproblem!'
    },
    {
      id: 'like2',
      label: 'Gefällt-mir-Schaltfläche',
      explain: 'Beiträge zu liken ist normal und harmlos!'
    },
    {
      id: 'comment2',
      label: 'Kommentar-Schaltfläche',
      explain: 'Kommentare sind eine Standard-Social-Media-Funktion!'
    },
    { id: 'navbar', label: 'Menüleiste der Seite', explain: 'Logo, Suchfeld und Menüsymbole sehen auf jeder Seite gleich aus. Hier wird nichts Privates gezeigt.' },
    { id: 'cover', label: 'Titelbild', explain: 'Ein Titelbild ist nur Dekoration. Es verrät nichts über deine Konten.' },
    { id: 'followbtn', label: 'Schaltflächen Folgen und Nachricht', explain: 'Das sind normale Funktionen jedes sozialen Netzwerks. Die Schaltflächen selbst sind keine Schwachstelle.' },
    { id: 'badges', label: 'Spiel-Abzeichen', explain: 'Das Spiel-Level oder eine Tagesserie zu zeigen ist harmlos. Es ist nur ein bisschen Angeberei!' },
    { id: 'tabs', label: 'Profil-Tabs', explain: 'Tabs wie Beiträge, Fotos und Freunde helfen nur beim Navigieren im Profil. Sie sind keine Schwachstelle.' },
    { id: 'joined', label: 'Beitrittsdatum', explain: 'Wann jemand einer Seite beigetreten ist, hilft weder beim Erraten eines Passworts noch beim Finden der Person. Es ist harmlos.' },
    { id: 'interests', label: 'Interessen-Tags', explain: 'Hobbys wie Spiele oder Fußball zu teilen ist in Ordnung. Benutze sie nur nicht als Passwort!' },
    { id: 'friendsPreview', label: 'Freunde-Vorschau', explain: 'Ein paar Freunde zu zeigen ist eine normale Funktion. Eine gute Gewohnheit: nur Leute annehmen, die du wirklich kennst.' },
    { id: 'post3', label: 'Spielbeitrag', explain: 'Ein Beitrag über einen Spielstand teilt ein Hobby, kein Geheimnis. Er zeigt weder, wo Alex ist, noch Kontodaten.' },
  ],
}
