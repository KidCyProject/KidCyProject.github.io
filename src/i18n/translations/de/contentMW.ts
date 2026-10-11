// ---------------------------------------------------------------------------
// Malware (MW) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Malware module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentMW = {
  aim: 'Grundlegende Kenntnisse darüber zu vermitteln, was Malware ist, welche Risiken sie birgt und nach welchen Prinzipien man sich davor schützt.',
  objectives: [
    'Einzuführen, was Malware ist und welche Arten von Malware es gibt.',
    'Zu erklären, wie sich Malware verhält und woran man erkennt, dass ein Gerät infiziert wurde.',
    'Fähigkeiten zu entwickeln, um sich vor Risiken durch Malware zu schützen.',
  ],
  outcomes: [
    'Ich kann beschreiben, was Malware ist, und sie in gegebenen Szenarien erkennen.',
    'Ich kann verschiedene Arten von Malware, ihr Verhalten und Anzeichen dafür erklären, dass mein Gerät infiziert wurde.',
    'Ich kann in gegebenen Szenarien demonstrieren, wie man sich vor einer Infektion mit Malware schützt, und begründen, warum ich diese Entscheidungen getroffen habe.',
  ],
  parts: [
    {
      goal: 'Den Lernenden helfen, das Konzept Malware zu verstehen.',
      bundle: {
        filename: 'Malware - Paket - Teil 1',
      },
      included: {
        materials: [
          {
            // ID: 6.1.1
            kind: 'Bild',
            name: 'Schädlich + Software = Malware',
            filename: 'Bild - Schädlich + Software = Malware',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 6.1.2
            kind: 'Bild',
            name: 'Was ist schädlich?',
            filename: 'Bild - Was ist schädlich',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 6.1.4
            kind: 'Arbeitsblatt',
            name: 'Hat es mit Malware zu tun oder nicht',
            filename: 'Arbeitsblatt - Hat es mit Malware zu tun oder nicht',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Malware definieren',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.1.3
        title: 'Was ist Malware?',
        supportText:
          'Nutze dieses Video, um Malware als Software einzuführen, die darauf ausgelegt ist, Schaden anzurichten. Es gibt den Lernenden eine Grundlage, bevor sie spezifische Typen genauer erkunden. Halte das Video an und frage, was sie bereits über Computerviren wissen oder gehört haben.',
        downloads: {
          video: {
            filename: 'Was ist Malware',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Was ist Malware - Untertitel',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      goal: 'Gängige Malware-Typen vorstellen.',
      bundle: {
        filename: 'Malware - Paket - Teil 2',
      },
      included: {
        materials: [
          {
            // ID: 6.2.2
            kind: 'Schema',
            name: 'Münzset',
            filename: 'Schema - Münzset',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 6.2.3
            kind: 'Schema',
            name: 'Spielbrett: Knote die Bänder',
            filename: 'Schema - Spielbrett Knote die Bänder',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Malware-Typen',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 6.2.1
        title: 'Malware-Typen im Überblick',
        supportText:
          'Nutze dieses Video, um den Lernenden einen klaren Überblick über die verschiedenen Malware-Kategorien und ihre Besonderheiten zu geben. Halte das Video an für eine kurze Diskussion, welchen Typ sie für am gefährlichsten halten und warum.',
        downloads: {
          video: {
            filename: 'Malware-Typen im Überblick',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Malware-Typen im Überblick - Untertitel',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      goal: 'Einen Überblick über die Merkmale von Malware geben, um sie zu erkennen und zu entdecken.',
      bundle: {
        filename: 'Malware - Paket - Teil 3',
      },
      included: {
        materials: [
          {
            // ID: 6.3.1
            kind: 'Lektüre',
            name: 'Malware erkennen',
            filename: 'Lektüre - Malware erkennen',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 6.3.2
            kind: 'Poster',
            name: 'Sieben Indikatoren',
            filename: 'Poster - Sieben Indikatoren',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 6.3.3
            kind: 'Arbeitsblatt',
            name: 'Liste der Indikatoren',
            filename: 'Arbeitsblatt - Liste der Indikatoren',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Malware untersuchen',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
    },
    {
      goal: 'Den Lernenden helfen, Schutzmaßnahmen gegen Malware zu verstehen.',
      bundle: {
        filename: 'Malware - Paket - Teil 4',
      },
      included: {
        materials: [
          {
            // ID: 6.4.1
            kind: 'Situation',
            name: 'Malware und Datendiebstahl',
            filename: 'Situation - Malware und Datendiebstahl',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 6.4.2
            kind: 'Poster',
            name: 'DOs und DON\'Ts',
            filename: 'Poster - DOs und DON\'Ts',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 6.4.3
            kind: 'Bilder',
            name: 'Assoziative Bilder: Sei aufmerksam',
            filename: 'Bilder - Assoziative Bilder Sei aufmerksam',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 6.4.4
            kind: 'Arbeitsblatt',
            name: 'Ein Schutzschild gegen Malware',
            filename: 'Arbeitsblatt - Ein Schutzschild gegen Malware',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Die Umstände einer Malware-Infektion analysieren',
          },
          {
            title: 'Grundlegende Schutzmaßnahmen erlernen',
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
      moduleId: 'dm',
      brand: 'DM',
      href: '/learning-hub/digital-misuse/content',
      imageSrc: '/images/learning-hub/07_digital-misuse.webp',
    },
  ],
}

export const challengeMW = {
  title: 'Malware-Detektiv',
  subtitle: 'Du bist Cybersicherheitsanalyst. Du untersuchst Dateien, liest E-Mails, gehst mit Pop-ups um und prüfst App-Berechtigungen. Dann benennst du Malware-Arten, erkennst Anzeichen einer Infektion und wählst den richtigen Schutz — in 7 Levels. Kannst du das System sauber halten?',
  howItWorks: 'So funktioniert es',
  instruction: 'Arbeite dich durch 7 Levels auf deinem virtuellen Computer. In Level 1–4 entscheidest du, ob eine Datei, E-Mail, ein Pop-up oder eine App sicher oder eine Bedrohung ist. In Level 5 nennst du die Art der Malware. In Level 6 entscheidest du, ob ein Computerproblem normal oder ein Anzeichen einer Infektion ist. In Level 7 wählst du den besten Schutz. Lies nach jeder Antwort die Erklärung.',
  tip: 'Malware tarnt sich oft als etwas Harmloses. Achte darauf, woher eine Datei oder Nachricht kommt, nicht nur darauf, wie sie aussieht. Manches Harmlose sieht gruselig aus (zum Beispiel ein Countdown), und manches Gefährliche wirkt freundlich.',
  tipLabel: 'Tipp',
  welcomeTitle: 'Willkommen, Cyber-Analyst!',
  welcomeDescription: 'Dein Computer hat verdächtige Dateien, E-Mails und Pop-ups erhalten. Arbeite dich durch 7 Levels: Finde die Bedrohungen, benenne die Malware, erkenne Anzeichen einer Infektion und wähle den richtigen Schutz.',
  levels: [
    '💻 Level 1 — Datei-Scanner',
    '📧 Level 2 — E-Mail-Posteingang',
    '🌐 Level 3 — Browser-Pop-ups',
    '🔒 Level 4 — App-Berechtigungen',
    '🔬 Level 5 — Malware-Arten',
    '🩺 Level 6 — Anzeichen einer Infektion',
    '🛡️ Level 7 — Schutz',
  ],
  bootButton: 'Computer starten →',
  scoreLabel: 'Punkte',
  correctLabel: 'Richtig',
  threatsCaughtLabel: 'Bedrohungen erkannt',
  keepFile: '✓ Datei behalten',
  quarantine: '🗑️ Quarantäne',
  safeKeep: '✓ Sicher / Behalten',
  threatRemove: '⚠️ Bedrohung / Entfernen',
  nextButton: 'Weiter →',
  malwareTypesTitle: 'Malware-Typen',
  malwareTypesSubtitle: 'Häufige Malware-Typen, auf die man achten sollte',
  malwareTypes: [
    '🦠 Virus — hängt sich an Dateien und verbreitet sich',
    '🪱 Wurm — repliziert sich selbst über Netzwerke',
    '🐴 Trojaner — tarnt sich als nützliche Software',
    '🔐 Ransomware — sperrt Dateien bis zur Zahlung',
    '👁️ Spyware — überwacht heimlich Aktivitäten',
    '📢 Adware — überflutet dich mit Werbung',
  ],
  securityGuideTitle: 'Sicherheitsleitfaden',
  securityGuideSubtitle: 'Warnsignale, auf die man achten sollte',
  securityRedFlags: [
    '🚩 .exe, .bat, .vbs aus unbekannten Quellen',
    '🚩 Falsch geschriebene oder gefälschte Absender-Domains',
    '🚩 Gefälschte Viruswarnungen im Browser',
    '🚩 Apps, die unnötige Berechtigungen anfordern',
    '🚩 Preise, kostenloses Geld oder dringende Bedrohungen',
    '🚩 Countdown-Timer, die Panik erzeugen',
    '🚩 Ein Dateiname mit zwei Endungen, wie foto.jpg.exe',
  ],
  goldenRule: 'Im Zweifel nicht klicken. Wende dich stattdessen an den IT-Support oder eine vertrauenswürdige erwachsene Person.',
  levelCompleteTitle: 'Level abgeschlossen!',
  levelCompleteSubtitle: 'Weiter so!',
  levelResultLabel: 'Level-Ergebnis',
  correctDecisionsLabel: 'richtige Entscheidungen',
  continueButton: 'Weiter →',
  nextLevelButtonTemplate: 'Weiter zu Level {n} →',
  viewResultsButton: 'Endergebnis ansehen →',
  itemProgressTemplate: 'Fall {n} von {total}',
  finalSummaryTemplate: 'Punkte · {correct} von {total} Entscheidungen richtig',
  permsRequestingLabel: 'Diese App fordert die folgenden Berechtigungen an:',
  correctFeedback: '✅ Richtig!',
  incorrectFeedback: '❌ Nicht ganz!',
  markLegitimate: '✓ Als legitim markieren',
  reportPhishing: '⚠️ Als Phishing melden',
  allowInstall: '✓ Erlauben & installieren',
  denyRemove: '🚫 Ablehnen & entfernen',
  closeDismiss: '✕ Pop-up schließen',
  fileSourceLabel: 'Quelle',
  fileSizeLabel: 'Größe',
  fileAddedLabel: 'Hinzugefügt',
  folderInbox: '📥 Posteingang',
  folderSent: '📤 Gesendet',
  folderTrash: '🗑️ Papierkorb',
  levelDone: [
    { title: 'Datei-Scanner — Level 1 geschafft!', sub: 'Du hast alle Dateien auf dem Desktop gescannt.' },
    { title: 'E-Mail-Posteingang — Level 2 geschafft!', sub: 'Du hast jede E-Mail im Posteingang geprüft.' },
    { title: 'Browser-Pop-ups — Level 3 geschafft!', sub: 'Du hast alle Browser-Pop-ups bearbeitet.' },
    { title: 'App-Berechtigungen — Level 4 geschafft!', sub: 'Du hast alle Berechtigungsanfragen geprüft.' },
    { title: 'Malware-Arten — Level 5 geschafft!', sub: 'Du hast die Malware-Arten benannt.' },
    { title: 'Anzeichen einer Infektion — Level 6 geschafft!', sub: 'Du hast alle Geräteprobleme geprüft.' },
    { title: 'Schutz — Level 7 geschafft!', sub: 'Du hast die passenden Schutzmaßnahmen gewählt.' },
  ],
  resultsTitle: 'System gesichert! 🛡️',
  resultsDescription: 'Dein Cybersicherheitsbericht ist fertig.',
  accuracyLabel: 'Genauigkeit',
  threatsCaughtStat: 'Bedrohungen erkannt',
  threatsMissedStat: 'Bedrohungen übersehen',
  analystRankLabel: 'Analysten-Rang',
  rankTrainee: '📘 Auszubildender',
  rankTraineeMsg: 'Bleib dran! Öffne die Hilfefelder und versuche es erneut — du wirst besser!',
  rankJunior: '🔍 Junior-Analyst',
  rankJuniorMsg: 'Gute Arbeit! Du baust solide Malware-Erkennungsfähigkeiten auf. Übung macht den Meister.',
  rankSenior: '🔐 Senior-Analyst',
  rankSeniorMsg: 'Toll gemacht! Du hast die meisten Bedrohungen erkannt. Schärfe weiter deinen Blick für subtile Warnsignale.',
  rankElite: '🛡️ Elite-Cyber-Analyst',
  rankEliteMsg: 'Hervorragende Arbeit! Du hast fast jede Bedrohung erkannt. Dein Instinkt für digitale Sicherheit ist ausgezeichnet.',
  playAgain: 'Nochmal spielen',
  signNormal: '✓ Sieht normal aus',
  signWarning: '⚠️ Warnzeichen',
  verdictSafe: 'Das hier ist sicher.',
  verdictThreat: 'Das hier ist eine Bedrohung.',
  verdictNormal: 'Das ist normal.',
  verdictWarning: 'Das ist ein Warnzeichen.',
  rightAnswerTemplate: 'Richtige Antwort: {answer}',
  typeNames: {
    virus: '🦠 Virus',
    worm: '🪱 Wurm',
    trojan: '🐴 Trojaner',
    ransomware: '🔐 Ransomware',
    spyware: '👁️ Spyware',
    adware: '📢 Adware',
  },
  measures: {
    links: {
      label: '🔗 Klicke nicht auf seltsame Links',
      why: 'Ein Link kann zu einer gefälschten Seite führen oder einen Download starten.',
    },
    trusted: {
      label: '🏪 Lade nur von vertrauenswürdigen Orten herunter',
      why: 'Nutze offizielle Websites und App-Stores, nie „kostenlose“ Kopien.',
    },
    update: { label: '🔄 Halte Computer und Apps aktuell', why: 'Updates schließen die Lücken, die Malware nutzt.' },
    antivirus: { label: '🛡️ Installiere Antivirensoftware', why: 'Sie sucht nach Malware und warnt dich.' },
    adult: {
      label: '🙋 Frag vor jeder Installation eine erwachsene Person',
      why: 'Eine vertrauenswürdige erwachsene Person hilft zu prüfen, ob ein Programm sicher ist.',
    },
    attachment: {
      label: '📎 Sei vorsichtig mit E-Mail-Anhängen',
      why: 'Öffne einen Anhang nur, wenn du ihn erwartest und den Absender kennst.',
    },
  },
  measuresTitle: 'Schutzmaßnahmen',
  measuresSubtitle: 'Sechs Gewohnheiten, die die meiste Malware stoppen',
  infectionSignsTitle: 'Anzeichen einer Infektion',
  infectionSignsSubtitle: 'Hinweise, dass ein Gerät Malware haben könnte',
  infectionSigns: [
    '🪟 Pop-up-Fenster erscheinen aus dem Nichts',
    '🐌 Der Bildschirm wird superlangsam',
    '❓ Seltsame neue Symbole oder Programme erscheinen',
    '🌀 Der Lüfter dreht laut auf oder der Computer macht komische Geräusche',
    '💥 Dein Lieblingsspiel oder deine App schließt sich plötzlich',
    '📂 Hausaufgaben-Dateien verschwinden oder lassen sich nicht öffnen',
    '✉️ Freunde sagen, sie hätten E-Mails von dir bekommen',
  ],
  infectionSignsNote: 'Ein Anzeichen ist ein Hinweis, kein Beweis. Ein Computer kann auch langsam sein, weil er ein Update installiert. Schau dir die ganze Geschichte an.',
  perLevelTitle: 'Dein Ergebnis in jedem Level',
  practiceTemplate: '💡 Übe als Nächstes: {level}',
  practicePerfect: '🌟 Ein perfekter Durchlauf — alle Levels!',
  typeCases: [
    {
      id: 1,
      icon: '🦠',
      text: 'Nina öffnet eine Datei, die ihr ein Freund geschickt hat. Bald sind auch andere Dateien auf ihrem Laptop beschädigt. Das Problem wandert von Datei zu Datei, und zwar nur, wenn sie sie öffnet.',
      explanation: 'Ein Virus versteckt sich in einer Datei und kopiert sich in andere Dateien. Er braucht eine Wirtsdatei und jemanden, der sie öffnet.',
      tip: 'Ein Virus startet erst, wenn du die infizierte Datei öffnest. Öffne keine Dateien, die du nicht erwartet hast.',
    },
    {
      id: 2,
      icon: '🪱',
      text: 'In der Schule wird ein Computer infiziert. Niemand klickt etwas an, aber nach ein paar Minuten sind Computer im ganzen WLAN infiziert und langsam.',
      explanation: 'Ein Wurm verbreitet sich von selbst über Netzwerke. Er braucht keine Datei zum Verstecken und niemanden, der ihn öffnet.',
      tip: 'Updates schließen die Lücken, durch die Würmer hereinkommen.',
    },
    {
      id: 3,
      icon: '🐴',
      text: 'Leo installiert einen kostenlosen „Spiele-Beschleuniger“. Er sieht nützlich aus, öffnet aber heimlich einen Zugang zu seinem Computer für einen Hacker. Er kopiert sich nicht selbst.',
      explanation: 'Ein Trojaner gibt sich als nützliche Software aus. Er verbreitet sich nicht von selbst. Du lässt ihn selbst herein.',
      tip: 'Installiere Programme nur von offiziellen Quellen. Und frag vorher eine erwachsene Person.',
    },
    {
      id: 4,
      icon: '🔐',
      text: 'Evas Fotos und Hausaufgaben lassen sich nicht öffnen. Eine Meldung sagt: „Deine Dateien sind gesperrt. Zahle Geld, um sie zurückzubekommen.“',
      explanation: 'Ransomware sperrt oder löscht deine Dateien und verlangt Lösegeld. Zahlen garantiert nicht, dass du deine Dateien zurückbekommst.',
      tip: 'Mach Kopien (Backups) wichtiger Dateien. Sag sofort einer erwachsenen Person Bescheid und zahle nicht.',
    },
    {
      id: 5,
      icon: '👁️',
      text: 'Ein verstecktes Programm auf Toms Laptop zeichnet heimlich alles auf, was er tippt, sogar seine Passwörter, und schickt es an einen Fremden.',
      explanation: 'Spyware beobachtet heimlich, was du tust, und stiehlt private Daten. Ein Programm, das jede gedrückte Taste aufzeichnet, heißt Keylogger.',
      tip: 'Fühlst du dich beobachtet? Sag es einer erwachsenen Person und starte einen Virenscan.',
    },
    {
      id: 6,
      icon: '📢',
      text: 'Nachdem Mia eine kostenlose App installiert hat, poppt den ganzen Tag Werbung auf: auf dem Desktop, in jedem Fenster, sogar wenn die App geschlossen ist.',
      explanation: 'Adware überflutet dich mit Werbung, oft damit ihr Hersteller Geld verdient. Sie nervt und kann dich auf unsichere Seiten führen.',
      tip: 'Lies, was eine kostenlose App installieren will. Entferne Apps, die den Bildschirm mit Werbung füllen.',
    },
  ],
  signCases: [
    {
      id: 1,
      icon: '🪟',
      text: 'Auf Ninas Bildschirm poppen immer wieder Fenster mit Werbung und Gewinnen auf. Sie hat keines davon geöffnet. Sie kommen sogar wieder, wenn sie den Browser schließt.',
      explanation: 'Pop-ups, die aus dem Nichts erscheinen, sind ein klassisches Anzeichen für Adware oder andere Malware.',
      tip: 'Klicke sie nicht an. Sag es einer erwachsenen Person und starte einen Virenscan.',
    },
    {
      id: 2,
      icon: '❓',
      text: 'Leo findet auf seinem Desktop Symbole von Programmen, die er nie installiert und noch nie gesehen hat.',
      explanation: 'Programme, die du nicht installiert hast, können Malware sein, die sich selbst dorthin gesetzt hat. Seltsame neue Symbole sind ein Warnzeichen.',
      tip: 'Öffne unbekannte Programme nicht. Bitte eine erwachsene Person, sie zu prüfen.',
    },
    {
      id: 3,
      icon: '📂',
      text: 'Evas Hausaufgaben-Dateien sind verschwunden. Die übrigen lassen sich nicht öffnen und zeigen einen Fehler.',
      explanation: 'Gelöschte oder beschädigte Dateien, die du nicht angefasst hast, sind ein Warnzeichen. Ransomware und manche Viren beschädigen Dateien.',
      tip: 'Sag sofort einer erwachsenen Person Bescheid. Backups deiner Dateien können deine Arbeit retten.',
    },
    {
      id: 4,
      icon: '✉️',
      text: 'Toms Freunde sagen: „Wir haben eine komische E-Mail von dir mit einem Link bekommen!“ Tom hat sie nie geschickt.',
      explanation: 'Wenn E-Mails ohne dich von deinem Konto verschickt werden, kontrolliert vielleicht jemand anderes es, oder Malware auf deinem Gerät verschickt sie.',
      tip: 'Sag deinen Freunden, dass sie nicht klicken sollen. Dann sag es einer erwachsenen Person und ändere dein Passwort.',
    },
    {
      id: 5,
      icon: '🌀',
      text: 'Mias Laptop ist langsam und der Lüfter ist sehr laut, obwohl sie kein Programm geöffnet hat. Es fing an, nachdem sie eine Datei von einem Fremden ausgeführt hat.',
      explanation: 'Ein Computer, der stark arbeitet, obwohl du nichts tust, führt vielleicht im Hintergrund Malware aus.',
      tip: 'Sei misstrauisch, wenn ein langsamer, lauter Computer „nichts tut“. Bitte eine erwachsene Person, ihn zu prüfen.',
    },
    {
      id: 6,
      icon: '🐌',
      text: 'Sams Laptop ist sehr langsam. In einem Fenster steht „Updates werden installiert… 63 %“.',
      explanation: 'Das ist normal. Die Langsamkeit hat einen klaren Grund: Der Laptop installiert Updates. Ein langsamer Computer allein ist kein Beweis für Malware.',
      tip: 'Warte, bis das Update fertig ist. Überlege, was sonst noch los ist, bevor du dir Sorgen machst.',
    },
    {
      id: 7,
      icon: '🎮',
      text: 'Ella spielt eine Stunde lang ein großes 3D-Spiel. Ihr Laptop wird warm und der Lüfter dreht laut auf.',
      explanation: 'Das ist normal. Anspruchsvolle Spiele lassen den Computer auf Hochtouren arbeiten, deshalb wird er warm und der Lüfter dreht schnell.',
      tip: 'Lauter Lüfter und ein klarer Grund = normal. Lauter Lüfter und nichts geöffnet = verdächtig.',
    },
    {
      id: 8,
      icon: '🆕',
      text: 'Jans Papa hat ihm geholfen, eine neue Mal-App aus dem offiziellen App-Store zu installieren. Jetzt ist ein neues Symbol auf dem Bildschirm.',
      explanation: 'Das ist normal. Jan weiß, woher das Symbol kommt, denn er hat die App mit Hilfe einer erwachsenen Person installiert.',
      tip: 'Ein neues Symbol, das du erklären kannst, ist in Ordnung. Ein neues Symbol, das du nicht erklären kannst, solltest du prüfen lassen.',
    },
  ],
  shieldCases: [
    {
      id: 1,
      icon: '🔗',
      text: 'Ein Fremder schreibt dir: „Sieh nach, wer dein Profil angesehen hat! Klick hier!“',
      explanation: 'Seltsame Links können zu gefälschten Seiten führen oder einen Malware-Download starten. Die beste Gewohnheit ist, sie nicht anzuklicken.',
      tip: 'Unsicher bei einem Link? Nicht klicken. Frag eine erwachsene Person.',
    },
    {
      id: 2,
      icon: '🏪',
      text: 'Du willst ein neues Spiel. Eine Website, von der du noch nie gehört hast, bietet es kostenlos an, ohne Bezahlung.',
      explanation: 'Kostenlose Kopien bezahlter Spiele verstecken oft Malware. Hol Spiele nur von der offiziellen Website oder aus einem vertrauenswürdigen App-Store.',
      tip: '„Kostenlose“ Kopien von Bezahlsachen sind ein Köder.',
    },
    {
      id: 3,
      icon: '🔄',
      text: 'Dein Tablet meldet seit Wochen „Updates verfügbar“. Du tippst immer auf „Später erinnern“.',
      explanation: 'Updates beheben Sicherheitslücken, die Malware nutzt. Installiere sie so bald wie möglich.',
      tip: 'Wenn eine erwachsene Person einverstanden ist, schalte automatische Updates ein.',
    },
    {
      id: 4,
      icon: '🙋',
      text: 'Ein Fenster auf dem Familienlaptop will ein Programm installieren, das du nicht kennst. Deine Mama ist im Nebenzimmer.',
      explanation: 'Bevor du etwas installierst, frag eine erwachsene Person. Sie kann prüfen, ob das Programm sicher ist und aus einer vertrauenswürdigen Quelle stammt.',
      tip: 'Eine erwachsene Person zu fragen, ist nie eine dumme Frage.',
    },
    {
      id: 5,
      icon: '📎',
      text: 'Eine E-Mail sagt, sie sei von einem Paketdienst. Im Anhang ist eine Datei „Rechnung.zip“. Du erwartest kein Paket.',
      explanation: 'Unerwartete Anhänge können Malware verstecken. Öffne einen Anhang nur, wenn du ihn erwartest und den Absender kennst.',
      tip: 'Unerwarteter Anhang? Nicht öffnen. Frag den Absender auf anderem Weg oder eine erwachsene Person.',
    },
    {
      id: 6,
      icon: '🛡️',
      text: 'Auf dem Familiencomputer ist überhaupt kein Schutzprogramm. Du willst etwas, das Dateien scannt und vor Malware warnt.',
      explanation: 'Antivirensoftware sucht nach Malware und warnt dich. Sie ist eine der Schichten, die deinen Computer schützen.',
      tip: 'Antivirus hilft, ersetzt aber keine vorsichtigen Gewohnheiten.',
    },
  ],
  levelMeta: [
    {
      title: 'Level 1 von 7 — Datei-Scanner',
      short: 'Datei-Scanner',
      task: 'Ist diese Datei sicher, oder kommt sie in Quarantäne?',
      app: '📁 Datei-Explorer',
      msg: '🔍 Datei wird gescannt…',
    },
    {
      title: 'Level 2 von 7 — E-Mail-Posteingang',
      short: 'E-Mail-Posteingang',
      task: 'Ist diese E-Mail echt, oder ist es Phishing?',
      app: '📧 Mail',
      msg: '📧 E-Mail wird gelesen…',
    },
    {
      title: 'Level 3 von 7 — Browser-Pop-ups',
      short: 'Browser-Pop-ups',
      task: 'Auf den Button klicken oder das Pop-up schließen?',
      app: '🌐 Browser',
      msg: '⚠️ Pop-up erkannt!',
    },
    {
      title: 'Level 4 von 7 — App-Berechtigungen',
      short: 'App-Berechtigungen',
      task: 'Diese App erlauben oder ablehnen?',
      app: '⚙️ App-Manager',
      msg: '⚙️ Berechtigungen werden geprüft…',
    },
    {
      title: 'Level 5 von 7 — Malware-Arten',
      short: 'Malware-Arten',
      task: 'Welche Art von Malware ist das?',
      app: '🔬 Malware-Labor',
      msg: '🔬 Verhalten wird untersucht…',
    },
    {
      title: 'Level 6 von 7 — Anzeichen einer Infektion',
      short: 'Anzeichen einer Infektion',
      task: 'Ist das normal, oder ein Warnzeichen für Malware?',
      app: '🩺 Geräte-Check',
      msg: '🩺 Gerät wird geprüft…',
    },
    {
      title: 'Level 7 von 7 — Schutz',
      short: 'Schutz',
      task: 'Welche Schutzmaßnahme passt am besten?',
      app: '🛡️ Sicherheitscenter',
      msg: '🛡️ Schutz wird gewählt…',
    },
  ],
  files: [
    {
      id: 1,
      icon: '⚙️',
      name: 'FreeMinecraft_Crack.exe',
      type: 'Ausführbare Datei (.exe)',
      source: 'Heruntergeladen von: crack-games-free.ru',
      size: '14,2 MB',
      date: 'Heute, 15:41 Uhr',
      description: 'Ein Installationsprogramm, das angeblich kostenloses Minecraft bietet. Von einer inoffiziellen russischen Website heruntergeladen.',
      explanation: 'Gecrackte Spiel-Installer verstecken oft Trojaner und Ransomware. Die .exe-Datei, die komische Webseite und das Versprechen „Crack gratis“ sind Warnsignale.',
      tip: 'Lade Software nur von offiziellen Webseiten herunter.',
    },
    {
      id: 2,
      icon: '📄',
      name: 'History_Essay_Draft.docx',
      type: 'Word-Dokument (.docx)',
      source: 'Lokal auf diesem Gerät erstellt',
      size: '48 KB',
      date: 'Gestern, 19:15 Uhr',
      description: 'Ein Word-Dokument, das du selbst für deinen Geschichtsunterricht erstellt hast.',
      explanation: 'Ein kleines, lokal erstelltes Word-Dokument ist sicher. Es hat eine Standardendung, eine kleine Dateigröße und einen lokalen Ursprung.',
      tip: 'Sei vorsichtig mit .docx-Dateien von Fremden — sie können schädliche Makros enthalten. Selbst erstellte Dateien sind jedoch sicher.',
    },
    {
      id: 3,
      icon: '📜',
      name: 'speedup_your_pc.bat',
      type: 'Batch-Skript (.bat)',
      source: 'Per Discord-DM erhalten von: xX_h4ck3r_Xx',
      size: '3,1 KB',
      date: 'Heute, 11:02 Uhr',
      description: 'Ein Batch-Skript, das per Discord von einem unbekannten Benutzer gesendet wurde und angeblich deinen PC beschleunigt.',
      explanation: '.bat-Dateien können jeden Befehl auf deinem Computer ausführen. Sie können Malware installieren oder Dateien löschen. Führe nie Skripte von Fremden aus.',
      tip: 'Führe niemals .bat- oder .vbs-Skripte von Personen aus, die du nicht kennst und denen du nicht vollständig vertraust, auch wenn sie behaupten, es sei harmlos.',
    },
    {
      id: 4,
      icon: '🎵',
      name: 'Summer_Playlist.mp3',
      type: 'Audiodatei (.mp3)',
      source: 'Aus der Spotify-Desktop-App gespeichert',
      size: '8,7 MB',
      date: 'Vor 3 Tagen',
      description: 'Eine Musikdatei, die über die offizielle Spotify-App gespeichert wurde.',
      explanation: 'Das ist eine normale Musikdatei aus einer vertrauenswürdigen App. .mp3-Dateien führen keine Programme aus, deshalb sind sie sicher.',
      tip: 'Standard-Mediendateien (.mp3, .jpg, .mp4) sind im Allgemeinen sicher. Achte nur auf Dateien, die ihre Endung verschleiern, z. B. „song.mp3.exe".',
    },
    {
      id: 5,
      icon: '⚙️',
      name: 'RegFix_Pro_Setup.exe',
      type: 'Ausführbare Datei (.exe)',
      source: 'Per Browser-Pop-up-Werbung geliefert',
      size: '2,1 MB',
      date: 'Heute, 14:18 Uhr',
      description: 'Ein „Registry-Reparaturtool", das durch eine Pop-up-Anzeige angeboten wurde, die behauptet, dein PC sei beschädigt.',
      explanation: 'Falsche „PC-Reparatur“-Tools aus Pop-up-Werbung verstecken oft Adware und Spyware. Echte Reparatur-Tools werden nicht so beworben.',
      tip: 'Echte Antivirenprogramme werden nie in zufälligen Pop-ups beworben.',
    },
    {
      id: 6,
      icon: '📸',
      name: 'Birthday_Party.jpg',
      type: 'Bilddatei (.jpg)',
      source: 'Per WhatsApp erhalten von: Oma',
      size: '2,9 MB',
      date: 'Letzte Woche',
      description: 'Ein Foto von deiner Geburtstagsfeier, das deine Großmutter geschickt hat.',
      explanation: 'Ein .jpg-Foto von einem bekannten Familienmitglied ist sicher. Standardbilder von vertrauenswürdigen Kontakten sind keine Malware.',
      tip: 'Achte auf doppelte Endungen wie „photo.jpg.exe“. Der letzte Teil zeigt den echten Dateityp.',
    },
    {
      id: 7,
      icon: '📜',
      name: 'FREE_ROBUX_GENERATOR.vbs',
      type: 'VBScript (.vbs)',
      source: 'Link aus einem YouTube-Kommentar',
      size: '1,8 KB',
      date: 'Heute, 09:55 Uhr',
      description: 'Ein Skript aus einem YouTube-Kommentar, das angeblich unbegrenzte Robux für Roblox generiert.',
      explanation: '„Gratis-Robux“-Generatoren gibt es nicht. Sie sind Betrug. Ein .vbs-Skript kann schädliche Befehle auf deinem Computer ausführen.',
      tip: 'Generatoren für kostenlose Spielwährung sind immer Betrug. Sie existieren nur, um Accounts zu stehlen, Malware zu installieren oder beides.',
    },
    {
      id: 8,
      icon: '📊',
      name: 'Science_Project_Data.xlsx',
      type: 'Excel-Tabelle (.xlsx)',
      source: 'Per E-Mail erhalten von: johnson.s@westridge-school.edu',
      size: '156 KB',
      date: 'Gestern, 10:33 Uhr',
      description: 'Eine Excel-Datei mit Projektdaten aus dem Naturwissenschaftsunterricht, gesendet von deiner verifizierten Schullehrerin.',
      explanation: 'Diese Tabelle kommt von deiner Lehrerin von einer echten Schuladresse. Dateityp und Größe sind normal.',
      tip: 'Office-Dateien von Fremden können schädliche Makros enthalten. Prüfe, wer eine Datei geschickt hat, bevor du sie öffnest.',
    },
    {
      id: 9,
      icon: '📸',
      name: 'Urlaubsfotos.jpg.exe',
      type: 'Programm (.exe)',
      source: 'In einem Chat von jemandem geschickt, den du nur online kennst',
      size: '1,4 MB',
      date: 'Heute, 16:07 Uhr',
      description: 'Die Datei sieht aus wie ein Urlaubsfoto. Ihr Name hat zwei Endungen: „.jpg“ und „.exe“.',
      explanation: 'Nur die letzte Endung zählt. Diese Datei endet auf .exe, ist also ein Programm und kein Foto. Angreifer setzen „.jpg“ nach vorn, damit sie wie ein Bild aussieht.',
      tip: 'Lies den ganzen Dateinamen bis zum Ende. Endet er auf .exe, ist es ein Programm.',
    },
    {
      id: 10,
      icon: '⚙️',
      name: 'Minecraft_Launcher_Setup.exe',
      type: 'Installationsprogramm (.exe)',
      source: 'Heruntergeladen von: minecraft.net (die offizielle Website)',
      size: '2,4 MB',
      date: 'Heute, 17:30 Uhr',
      description: 'Das Installationsprogramm des Spiels. Dein Papa hat es von der offiziellen Website heruntergeladen.',
      explanation: 'Eine .exe-Datei ist nicht immer schlecht. Diese stammt von der offiziellen Website des Herstellers, und ein Erwachsener hat sie heruntergeladen. Es zählt, woher eine Datei kommt.',
      tip: 'Auch bei einem sicheren Installationsprogramm gilt: Frag vor jeder Installation eine erwachsene Person.',
    },
  ],
  emails: [
    {
      id: 1,
      fromName: 'IT-Sicherheitsteam',
      fromAddr: 'security-alert@school-itsupport.xyz',
      subject: 'DRINGEND: Dein Schulkonto wurde gehackt — setze dein Passwort JETZT zurück',
      body: `Liebe/r Schüler/in,

Unsere Systeme haben unbefugten Zugriff auf dein Schulkonto von einem unbekannten Standort erkannt.

Du musst dein Passwort SOFORT zurücksetzen, indem du das beigefügte Tool ausführst. Wenn du nicht innerhalb von 30 Minuten handelst, wird dein Konto dauerhaft gesperrt.

— IT-Sicherheitsabteilung`,
      attachment: 'PasswordReset_Tool.exe',
      explanation: 'Viele Warnsignale: eine seltsame „.xyz“-Adresse, Zeitdruck und eine .exe-Datei. Eine echte IT-Abteilung schickt einen Link zu einer Anmeldeseite, kein Programm.',
      tip: 'Eine unheimliche Sicherheitswarnung bekommen? Ruf die IT unter einer Nummer an, die du schon kennst. Nutze nicht die Kontaktdaten aus der E-Mail.',
    },
    {
      id: 2,
      fromName: 'Ms. Johnson',
      fromAddr: 'johnson.s@westridge-school.edu',
      subject: 'Wissenschaftsmesse — Projektbeschreibung im Anhang',
      body: `Hallo Klasse,

im Anhang findet ihr die offizielle Projektbeschreibung für die bevorstehende Wissenschaftsmesse. Sie enthält die erforderlichen Abschnitte, Formatierungsrichtlinien und den Abgabetermin.

Bringt euer fertiges Poster und euren Bericht bis Freitag in Raum 14.

Bei Fragen könnt ihr euch gerne melden!

Ms. Johnson
Naturwissenschaftliche Abteilung, Westridge School`,
      attachment: 'Science_Fair_Project_Brief.docx',
      explanation: 'Das ist eine echte Schul-E-Mail. Sie kommt von einer Schuladresse, das Word-Dokument passt zum Thema und niemand fragt nach privaten Daten.',
      tip: 'Eine .docx-Datei von der Schuladresse deiner Lehrerin ist sicher. Prüfe trotzdem immer die ganze Absenderadresse, bevor du etwas öffnest.',
    },
    {
      id: 3,
      fromName: 'Lucas (Gaming-Freund)',
      fromAddr: 'lucas.gamer99@gmail.com',
      subject: 'Alter, führ das aus, das gibt dir unendlich Münzen im Spiel!!',
      body: `Hey!!

Hab online dieses kranke Skript gefunden, das dir unbegrenzte Münzen in Clash Royale gibt. Führ einfach die .bat-Datei aus und sie patcht das Spiel automatisch lol

Mein Bruder hat's probiert und es hat funktioniert. Sag aber niemandem was

– Lucas`,
      attachment: 'coin_hack_v3_FINAL.bat',
      explanation: 'Auch die Nachricht eines Freundes kann Malware enthalten. Lucas\' Konto kann gehackt sein, oder er weiß nicht, dass die Datei schädlich ist. Eine .bat-Datei, die ein Spiel „hackt“, ist ein Trojaner-Trick. Ein Angreifer könnte die Kontrolle über deinen Computer bekommen.',
      tip: 'Führe niemals .bat- oder .vbs-Skripte von irgendjemandem aus, auch nicht von Freunden. „Cheat"-Skripte für Online-Spiele sind fast immer getarnte Malware.',
    },
    {
      id: 4,
      fromName: 'Schulbibliothek',
      fromAddr: 'library@westridge-school.edu',
      subject: 'Sommerleseprogramm — deine Leseliste',
      body: `Hallo,

vielen Dank für deine Anmeldung zum Sommerleseprogramm! Im Anhang findest du deine personalisierte Leseliste basierend auf deiner Altersgruppe und deinen Interessen.

Du kannst alle diese Titel aus der Schulbibliothek ausleihen oder sie über das Schülerportal anfordern.

Viel Spaß beim Lesen!

Bibliotheksteam der Westridge School`,
      attachment: 'Summer_Reading_List.pdf',
      explanation: 'Eine echte E-Mail der Schulbibliothek von der Schuladresse. Die .pdf-Datei ist eine Leseliste. Niemand fragt nach privaten Daten.',
      tip: 'PDFs von Menschen, die du kennst, sind meistens sicher. Sei vorsichtig bei PDFs von Fremden. Sie können Skripte verstecken.',
    },
    {
      id: 5,
      fromName: 'PREISBENACHRICHTIGUNGS-CENTER',
      fromAddr: 'winner@free-prize-claim.net',
      subject: 'DU WURDEST AUSGEWÄHLT — FORDERE DEIN iPHONE JETZT AN!!!',
      body: `HERZLICHEN GLÜCKWUNSCH!!!

Du wurdest zufällig als unser Glücksgewinner ausgewählt! Um dein neues iPhone zu beanspruchen, fülle das beigefügte Antragsformular mit deinen persönlichen Daten und einer Versandgebühr von 4,99 € aus und sende es zurück.

Antworte innerhalb von 12 STUNDEN oder dein Preis verfällt!

[MEINEN PREIS BEANSPRUCHEN →]`,
      attachment: 'WINNER_ClaimForm_URGENT.html',
      explanation: 'Ein Gewinn-Betrug mit einer .html-Datei. Beim Öffnen erscheint eine falsche Seite, die deine Daten und Zahlungsinfos stiehlt. Warnsignale: ein Preis, bei dem du nie mitgemacht hast, Zeitdruck, eine seltsame Adresse und GROSSBUCHSTABEN.',
      tip: 'Eine .html-Datei in einer E-Mail kann eine falsche Anmelde- oder Zahlungsseite direkt auf deinem Gerät öffnen. Web-Filter erkennen sie vielleicht nicht.',
    },
  ],
  popups: [
    {
      id: 1,
      browserUrl: 'https://free-movies-unlimited.pirate',
      appName: 'SICHERHEITSWARNUNG',
      icon: '🚨',
      message: '⚠️ VIRUS ERKANNT! Dein Computer ist mit 47 Viren infiziert! Ruf sofort 1-800-FIX-NOW an oder dein System wird dauerhaft beschädigt!',
      subtext: 'Windows Defender hat kritische Bedrohungen erkannt. Jetzt handeln!',
      primaryBtnText: '📞 Jetzt anrufen & reparieren',
      explanation: 'Das ist „Scareware“: eine falsche Virenwarnung, die dir Angst macht, damit du einen Betrüger anrufst oder falsche Antivirensoftware installierst. Echte Sicherheitsprogramme warnen dich nie in einer Webseite.',
      tip: 'Schließe verdächtige Browser-Pop-ups mit dem X-Button. Ruf niemals Telefonnummern an, die in Browser-Pop-ups angezeigt werden — das sind immer Betrugs-Hotlines.',
    },
    {
      id: 2,
      browserUrl: 'https://school-portal.edu',
      appName: 'Schulportal',
      icon: '🍪',
      message: 'Diese Website verwendet Cookies, um deine Anmeldung zu speichern und deine Erfahrung zu verbessern.',
      subtext: 'Wir verwenden nur notwendige Cookies. Es werden keine persönlichen Daten an Dritte weitergegeben.',
      primaryBtnText: '✓ Cookies akzeptieren',
      explanation: 'Das ist ein echter Cookie-Hinweis deines Schulportals. Er sagt, wofür die Cookies da sind, und verlangt nichts Seltsames. Notwendige Cookies auf einer vertrauenswürdigen Seite zu akzeptieren ist in Ordnung.',
      tip: 'Cookie-Hinweise auf Seiten, die du kennst und denen du vertraust, sind normal. In vielen Ländern sind sie Pflicht.',
    },
    {
      id: 3,
      browserUrl: 'https://gaming-news-blog.com',
      appName: 'Herzlichen Glückwunsch!!!',
      icon: '🎉',
      message: 'DU BIST DER 1.000.000. BESUCHER! Du hast eine KOSTENLOSE PlayStation 5 gewonnen! Klicke unten, um deinen Preis sofort zu beanspruchen!',
      subtext: '⏱️ Angebot läuft ab in: 00:59 — Beanspruche es, bevor die Zeit abläuft!',
      primaryBtnText: '🎮 KOSTENLOSE PS5 beanspruchen!',
      explanation: 'Ein falsches Gewinn-Pop-up. Keine Webseite verschenkt an Besucher eine PlayStation 5. Der Button führt zu einer Betrugsseite, die deine Daten oder dein Geld will. Der Countdown soll dich hetzen.',
      tip: 'Countdown-Timer in Pop-ups sollen verhindern, dass du nachdenkst. Echte Preise werden niemals durch zufällige Browser-Pop-ups verteilt.',
    },
    {
      id: 4,
      browserUrl: 'https://youtube.com',
      appName: 'YouTube',
      icon: '🔔',
      message: 'Möchtest du YouTube erlauben, dir Benachrichtigungen über neue Videos von Kanälen zu senden, die du abonniert hast?',
      subtext: 'Du kannst dies später in deinen Browser-Einstellungen ändern.',
      primaryBtnText: 'Benachrichtigungen erlauben',
      explanation: 'YouTube ist eine echte Seite, aber am sichersten ist es, Benachrichtigungen zu blockieren, auch bei vertrauenswürdigen Seiten. Wenn du sie einmal erlaubst, können sie missbraucht werden oder zu Spam werden.',
      tip: 'Überlege, bevor du Benachrichtigungen erlaubst. Die meisten Webseiten funktionieren auch ohne sie.',
    },
    {
      id: 5,
      browserUrl: 'https://download-cracked-software.cc',
      appName: 'Download-Manager',
      icon: '⬇️',
      message: 'Datei bereit: „Adobe_Photoshop_FULL_CRACK.exe" (87 MB). Unsere KI hat diese Datei als SICHER verifiziert.',
      subtext: 'Powered by VirusSafe™ — gescannt und genehmigt. Klicke zum sofortigen Download.',
      primaryBtnText: '✓ Jetzt herunterladen',
      explanation: 'Warnsignale: eine seltsame „.cc“-Adresse, ein gecracktes (raubkopiertes) Programm, das fast immer Malware versteckt, und ein „SICHER“-Siegel, das sich die Seite selbst gegeben hat. „VirusSafe™“ ist erfunden, um dich zu täuschen.',
      tip: 'Gecrackte oder raubkopierte Software versteckt fast immer Malware. Lade Programme nur von der offiziellen Webseite des Herstellers herunter.',
    },
    {
      id: 6,
      browserUrl: 'https://school-portal.edu',
      appName: 'Schulportal',
      icon: '⏱️',
      message: 'Du wirst in 2 Minuten abgemeldet, weil du nichts angeklickt hast. Angemeldet bleiben?',
      subtext: 'Das schützt dein Konto auf gemeinsam genutzten Computern.',
      primaryBtnText: 'Angemeldet bleiben',
      explanation: 'Ein Countdown ist nicht immer ein Trick. Diese Meldung steht in deinem eigenen Schulportal. Sie fragt nur, ob du angemeldet bleiben willst, und verlangt weder Geld noch private Daten.',
      tip: 'Prüfe die Website und was das Pop-up von dir will, nicht nur, ob es einen Timer hat.',
    },
    {
      id: 7,
      browserUrl: 'https://fast-news-today.net',
      appName: 'Player-Update',
      icon: '🔄',
      message: 'Dein Videoplayer ist veraltet! Installiere jetzt das Update, um weiterzuschauen.',
      subtext: 'Lade VideoPlayer_Update.exe (1,2 MB) herunter. Es dauert nur 10 Sekunden!',
      primaryBtnText: 'Jetzt aktualisieren',
      explanation: 'Echte Updates kommen vom Programm selbst oder aus den Einstellungen deines Geräts, nicht aus einem Pop-up auf einer Website. Ein falsches „Player-Update“ ist ein häufiger Trick, damit man Malware installiert.',
      tip: 'Aktualisiere nur über die Geräteeinstellungen oder die offizielle Seite des Herstellers. Nie über ein Pop-up.',
    },
  ],
  permissions: [
    {
      id: 1,
      appIcon: '🔦',
      appName: 'Flashlight Pro',
      source: 'Herausgeber: Unbekannter Entwickler · ⭐ 2,1 · 500 Downloads',
      description: 'Eine einfache Taschenlampen-App.',
      permissions: [
        { icon: '📷', name: 'Kamera', reason: 'Zum Aktivieren der Flash-LED', suspicious: false },
        { icon: '📍', name: 'Genaue Position (GPS)', reason: 'Kein Grund angegeben', suspicious: true },
        { icon: '📞', name: 'Anrufliste lesen', reason: 'Kein Grund angegeben', suspicious: true },
        { icon: '💾', name: 'Auf alle Dateien zugreifen', reason: 'Kein Grund angegeben', suspicious: true },
      ],
      explanation: 'Eine Taschenlampen-App braucht die Kamera nur für ihr Licht. Sie braucht weder deinen Standort noch deine Anrufliste noch alle deine Dateien. Spyware fragt nach so etwas, um deine Daten zu sammeln.',
      tip: 'Frag dich immer: „Warum braucht diese App das?“ Eine Taschenlampe hat keinen Grund, dein GPS oder deine Kontakte zu nutzen.',
    },
    {
      id: 2,
      appIcon: '📷',
      appName: 'School Photo Editor',
      source: 'Herausgeber: Creative Tools Ltd · ⭐ 4,7 · 2M+ Downloads',
      description: 'Fotos für Schulprojekte bearbeiten und verbessern.',
      permissions: [
        { icon: '📷', name: 'Kamera', reason: 'Um neue Fotos zum Bearbeiten aufzunehmen', suspicious: false },
        { icon: '🖼️', name: 'Zugriff auf Fotos', reason: 'Um vorhandene Fotos zu öffnen', suspicious: false },
        { icon: '💾', name: 'Im Speicher speichern', reason: 'Um bearbeitete Fotos zu speichern', suspicious: false },
      ],
      explanation: 'Alle drei Berechtigungen passen zu einem Foto-Editor: Kamera zum Fotografieren, Fotos zum Bearbeiten, Speicher zum Sichern. Mehr will er nicht.',
      tip: 'Wenn jede Berechtigung zu dem passt, was die App tut, ist die App wahrscheinlich ehrlich.',
    },
    {
      id: 3,
      appIcon: '🎮',
      appName: 'SuperRun Adventure',
      source: 'Herausgeber: FastGame Studio · ⭐ 4,1 · 800K Downloads',
      description: 'Ein schnelles Side-Scrolling-Plattformspiel.',
      permissions: [
        { icon: '🔊', name: 'Audio abspielen', reason: 'Für Soundeffekte im Spiel', suspicious: false },
        { icon: '📳', name: 'Vibration', reason: 'Für haptisches Feedback beim Spielen', suspicious: false },
        { icon: '📍', name: 'Genaue GPS-Position', reason: 'Kein Grund angegeben', suspicious: true },
        { icon: '📱', name: 'Geräte-ID & -Info lesen', reason: 'Kein Grund angegeben', suspicious: true },
      ],
      explanation: 'Ton und Vibration sind bei einem Spiel normal. Aber ein Jump-and-Run braucht kein GPS und keine Geräte-ID. Damit wirst du verfolgt, und Daten werden an Werbefirmen verkauft.',
      tip: 'Selbst Apps mit guten Bewertungen können unnötige Berechtigungen anfordern. Verweigere immer Berechtigungen, die keinen klaren Bezug zum Zweck der App haben.',
    },
    {
      id: 4,
      appIcon: '📚',
      appName: 'CsHub Learning',
      source: 'Herausgeber: CsHub Education · ⭐ 4,9 · 50K Downloads',
      description: 'Interaktives Cybersicherheitslernen für Schüler.',
      permissions: [
        { icon: '🌐', name: 'Internetzugang', reason: 'Zum Laden von Lektionen und Quizfragen', suspicious: false },
        {
          icon: '💾',
          name: 'Lokaler Speicher',
          reason: 'Um deinen Fortschritt offline zu speichern',
          suspicious: false,
        },
      ],
      explanation: 'Eine Lern-App braucht das Internet, um Lektionen zu laden, und Speicher, um deinen Fortschritt zu sichern. Sie fragt nur nach dem, was sie braucht. Das ist guter Datenschutz.',
      tip: 'Apps, die nur nach den nötigen Berechtigungen fragen, achten auf deine Privatsphäre.',
    },
  ],
}
