// ---------------------------------------------------------------------------
// Social Engineering (SE) — module content and challenge translations
// ---------------------------------------------------------------------------
//
// Edit this file to update all translatable text for the Social Engineering module.
// Non-translatable data (file paths, IDs, subtitle tracks) → src/data/moduleParts.ts
// ---------------------------------------------------------------------------

export const contentSE = {
  aim: 'Grundlegende Kenntnisse darüber zu vermitteln, was Social Engineering ist, mit Schwerpunkt auf den damit verbundenen Risiken und den Prinzipien zum Schutz davor.',
  objectives: [
    'Das Konzept des Social Engineering einzuführen, mit Fokus auf die Ziele von Angreifern.',
    'Verschiedene Formen des Social Engineering und die Situationen zu erklären, in denen sie auftreten können.',
    'Fähigkeiten zu entwickeln, Social-Engineering-Techniken zu erkennen und sich davor zu schützen.',
  ],
  outcomes: [
    'Ich kann beschreiben, was Social Engineering ist und welche Arten es gibt.',
    'Ich kann erklären, warum Angreifer Social Engineering einsetzen.',
    'Ich kann Beispiele für Situationen nennen, in denen Social-Engineering-Angriffe wahrscheinlich vorkommen.',
    'Ich kann Social-Engineering-Angriffe in gegebenen Szenarien erkennen.',
    'Ich kann in gegebenen Szenarien demonstrieren, wie man sich vor Social Engineering schützt, und begründen, warum ich diese Entscheidungen getroffen habe.',
  ],
  parts: [
    {
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, was Social Engineering ist, indem sie zunächst erkennen, wie Menschen in alltäglichen Situationen beeinflusst oder manipuliert werden können, und dieses Verständnis dann mit digitalen Umgebungen und dem Verhalten von Angreifern verbinden.',
      bundle: {
        filename: 'Social Engineering - Paket - Teil 1',
      },
      included: {
        materials: [
          {
            // ID: 5.1.2
            kind: 'Bild',
            name: 'Systeme hacken vs. Menschen täuschen',
            filename: 'Bild - Systeme hacken vs. Menschen täuschen',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.1.3
            kind: 'Bild',
            name: 'Ziele eines Angreifers',
            filename: 'Bild - Ziele eines Angreifers',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.1.4
            kind: 'Szenariokarten',
            name: 'Was will ein Angreifer?',
            filename: 'Szenariokarten - Was will ein Angreifer',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.1.5
            kind: 'Lösungskarten',
            name: 'Was will ein Angreifer?',
            filename: 'Lösungskarten - Was will ein Angreifer',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.1.6
            kind: 'Arbeitsblatt',
            name: 'Social Engineering verstehen',
            filename: 'Arbeitsblatt - Social Engineering verstehen',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Einführung des Konzepts Social Engineering',
          },
          {
            title: 'Was wollen Angreifer?',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 5.1.1
        title: 'Was ist Social Engineering?',
        supportText:
          'Verwenden Sie dieses Video, um Social Engineering als Technik einzuführen, die menschliches Vertrauen anstatt technischer Systeme ausnutzt. Halten Sie inne und fragen Sie die Schülerinnen und Schüler, ob sie sich an eine Situation erinnern, in der jemand versucht hat, sie online zu täuschen.',
        downloads: {
          video: {
            filename: 'Was ist Social Engineering',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Was ist Social Engineering - Untertitel',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      goal: 'Den Schülerinnen und Schülern helfen zu verstehen, warum Angreifer Social Engineering einsetzen, indem sie die psychologischen und emotionalen Hebel erkunden, die Menschen verwundbar machen, und üben, wie man kritisch denkt, wenn man Druck spürt.',
      bundle: {
        filename: 'Social Engineering - Paket - Teil 2',
      },
      included: {
        materials: [
          {
            // ID: 5.2.1
            kind: 'Szenariokarten',
            name: 'Taktiken von Angreifern',
            filename: 'Szenariokarten - Taktiken von Angreifern',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.2.2
            kind: 'Szenariokarten',
            name: 'Puzzle zur emotionalen Manipulation',
            filename: 'Szenariokarten - Puzzle zur emotionalen Manipulation',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.2.3
            kind: 'Arbeitsblatt',
            name: 'Warum Social Engineering funktioniert',
            filename: 'Arbeitsblatt - Warum Social Engineering funktioniert',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Wie ein Angreifer denken',
          },
          {
            title: 'Alltagssituationen, in denen Social Engineering vorkommen kann',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
    },
    {
      goal: 'Den Schülerinnen und Schülern helfen, Social-Engineering-Versuche zu erkennen, indem sie häufige Warnsignale identifizieren und die verschiedenen Kontexte verstehen, in denen diese Angriffe auftreten können, sowohl online als auch offline.',
      bundle: {
        filename: 'Social Engineering - Paket - Teil 3',
      },
      included: {
        materials: [
          {
            // ID: 5.3.2
            kind: 'Arbeitsblatt',
            name: 'Verbinde die Punkte',
            filename: 'Arbeitsblatt - Verbinde die Punkte',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Arten von Social Engineering',
          },
          {
            title: 'Social Engineering erkennen üben',
          },
          {
            title: 'Plenarsitzung – Zusammenfassung und informelle Beurteilung',
          },
        ],
      },
      featuredVideo: {
        // ID: 5.3.1
        title: 'Arten von Social Engineering',
        supportText:
          'Verwenden Sie dieses Video, um Schülerinnen und Schülern zu helfen, die verschiedenen Formen zu erkennen, die Social Engineering annehmen kann, von Phishing-E-Mails bis zu telefonischer Identitätsvortäuschung. Halten Sie inne, um zu diskutieren, welche Art ihrer Meinung nach am schwierigsten zu erkennen wäre und warum.',
        downloads: {
          video: {
            filename: 'Arten von Social Engineering',
            ariaLabel: 'Video herunterladen',
          },
          subtitles: {
            filename: 'Arten von Social Engineering - Untertitel',
            ariaLabel: 'Untertitel herunterladen',
          },
        },
      },
    },
    {
      goal: 'Den Schülerinnen und Schülern helfen, das Überprüfen von Informationen und die Wahl sicherer Reaktionen zu üben, und sie zu befähigen, andere zu unterstützen, wenn sie auf Social-Engineering-Versuche stoßen.',
      bundle: {
        filename: 'Social Engineering - Paket - Teil 4',
      },
      included: {
        materials: [
          {
            // ID: 5.4.1
            kind: 'Bild',
            name: 'Stopp, denk nach, prüf, frag',
            filename: 'Bild - Stopp, denk nach, prüf, frag',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.4.2
            kind: 'Arbeitsblatt',
            name: 'Stopp, denk nach, prüf, frag',
            filename: 'Arbeitsblatt - Stopp, denk nach, prüf, frag',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.4.3
            kind: 'Szenariokarten',
            name: 'Was würdest du tun?',
            filename: 'Szenariokarten - Was würdest du tun',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.4.4
            kind: 'Rollenkarten',
            name: 'Prosoziales Verhalten oder Zuschauereffekt',
            filename: 'Rollenkarten - Prosoziales Verhalten oder Zuschauereffekt',
            ariaLabel: 'Material herunterladen',
          },
          {
            // ID: 5.4.5
            kind: 'Arbeitsblatt',
            name: 'Mich und andere schützen',
            filename: 'Arbeitsblatt - Mich und andere schützen',
            ariaLabel: 'Material herunterladen',
          },
        ],
        activityPlan: [
          {
            title: 'Einführung',
          },
          {
            title: 'Ein einfaches Modell für sichere Entscheidungen',
          },
          {
            title: 'Sichere Reaktionen üben',
          },
          {
            title: 'Andere schützen und als verantwortungsvolle Bürger handeln',
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
  title: 'Phishing-Fallakten',
  subtitle: 'Werde ein Nachrichten-Detektiv! Kannst du Betrug in E-Mails, Chats, SMS, Anrufen und sogar im echten Leben erkennen? Entscheide: Vertrauen, Stopp & Erwachsene fragen oder Ignorieren / Melden.',
  howItWorks: 'So funktioniert es',
  instruction: 'Lies jede Fallakte. Kannst du ihr vertrauen? Solltest du stoppen und eine vertrauenswürdige erwachsene Person fragen? Oder ignorieren und melden? Achte auf Druck, seltsame Links und Fragen nach privaten Informationen. Dann entlarve den Trick des Angreifers.',
  tip: 'Wenn du dir bei einer Nachricht unsicher bist, schau dir die Detektivnotizen mit Tipps zur Erkennung von Betrug an.',
  tipLabel: 'Tipp',
  startTitle: 'Willkommen, Detektiv!',
  startDescription: 'Du untersuchst gleich {n} Fälle: E-Mails, Chats, SMS, Anrufe und sogar Besucher. Entscheide jedes Mal: vertrauen, stoppen und eine erwachsene Person fragen, oder ignorieren / melden. Dann entlarve den Trick. Viel Glück!',
  startButton: 'Ermittlung starten',
  caseProgress: 'Fallfortschritt',
  trustButton: '👍 Vertrauen',
  ignoreButton: '⚠️ Ignorieren / Melden',
  nextCase: 'Nächster Fall →',
  completedTitle: 'Ermittlung abgeschlossen!',
  completedDescription: 'Hier ist dein Ergebnis:',
  casesIdentified: 'von {n} Fällen bestmöglich gelöst',
  detectiveRankLabel: 'Detektiv-Rang',
  defaultRank: 'Anfänger-Detektiv',
  defaultRankMessage: 'Übe weiter, um aufzusteigen!',
  performanceSummary: 'Leistungsübersicht',
  playAgain: 'Nochmal spielen',
  detectiveNotes: 'Detektivnotizen',
  detectiveTipsTitle: 'Tipps, um online sicher zu bleiben',
  redFlags: [
    '🚩 Fragt nach Passwörtern',
    '🚩 Gefälschte E-Mail-Adressen',
    '🚩 Zu-gut-um-wahr-zu-sein-Preise',
    '🚩 Dringende Fristen & Drohungen',
    '🚩 Verdächtige Downloads',
    '🚩 Emotionale Manipulation',
    '🚩 Seltsame Nachrichten von Bekannten',
  ],
  proTip: 'Profi-Tipp: Im Zweifelsfall frag einen vertrauenswürdigen Erwachsenen, bevor du auf Links klickst oder Informationen teilst!',
  caseLabel: 'Fall',
  ofLabel: 'von',
  fromLabel: 'Von',
  subjectLabel: 'Betreff',
  messageLabel: 'Nachricht',
  rankRookie: '🥉 Anfänger-Detektiv',
  rankRookieMsg: 'Du beginnst gerade deine Ermittlung. Übe weiter, um die Warnsignale zu erkennen!',
  rankJunior: '🥈 Junior-Detektiv',
  rankJuniorMsg: 'Du wirst besser darin, verdächtige Nachrichten zu erkennen. Gut gemacht!',
  rankSenior: '🥇 Senior-Detektiv',
  rankSeniorMsg: 'Du bist großartig darin, Phishing und Betrug zu identifizieren. Schöne Arbeit!',
  rankMaster: '👑 Meister-Detektiv',
  rankMasterMsg: 'Du bist ein Phishing-Experte! Du hast fast alle Tricks entlarvt. Ausgezeichnet!',
  correctLabel: 'Richtig',
  incorrectLabel: 'Falsch',
  emailBadge: 'E-Mail',
  chatBadge: 'Chat',
  smsBadge: 'SMS',
  callBadge: 'Anruf',
  personBadge: 'Persönlich',
  checkButton: '🛑 Stopp & Erwachsene fragen',
  actionTrust: 'Vertrauen',
  actionCheck: 'Stopp & Erwachsene fragen',
  actionReport: 'Ignorieren / Melden',
  bestLabel: 'Beste Antwort!',
  safeLabel: 'Sichere Wahl',
  bestAnswerTemplate: 'Beste Antwort: {action}',
  safeNoteOverCautious: 'Vorsicht schadet nie. Diesmal war die Nachricht in Ordnung, du hättest ihr vertrauen können.',
  safeNoteAskOnScam: 'Eine erwachsene Person zu fragen ist klug. Hier noch besser: nicht antworten und es melden.',
  safeNoteReportOnCheck: 'Es zu ignorieren ist sicher. Noch besser: eine erwachsene Person prüfen lassen, ob es echt ist.',
  quizTitle: 'Entlarve den Trick! Welchen Trick nutzt die Nachricht?',
  quizCorrectTemplate: '🔍 Genau! Der Trick ist: {tactic}.',
  quizWrongTemplate: '🔍 Diesmal nicht. Der Trick ist: {tactic}.',
  trickLabel: 'Verwendeter Trick',
  wantLabel: 'Was der Angreifer wollte',
  tricksSpottedTemplate: '🔍 Entlarvte Tricks: {n} von {total}',
  safeCountTemplate: '🛡️ Sichere Wahl (nicht die beste Antwort): {n}',
  stcaTitle: 'Stopp, denk nach, prüf, frag',
  stca: [
    { icon: '🛑', label: 'Stopp', text: 'Halte inne, bevor du antwortest oder klickst.' },
    { icon: '🤔', label: 'Denk nach', text: 'Was wollen sie? Welches Gefühl wollen sie in dir auslösen?' },
    { icon: '🔍', label: 'Prüf', text: 'Suche nach Warnsignalen. Prüfe auf einem anderen Weg bei der echten Person oder Webseite nach.' },
    { icon: '🧑‍🏫', label: 'Frag', text: 'Sprich mit Eltern, Lehrkraft oder einer anderen vertrauenswürdigen erwachsenen Person.' },
  ],
  tactics: {
    urgency: { label: 'Zeitdruck', desc: 'Sie wollen, dass du dich beeilst und nicht nachdenkst.' },
    fear: { label: 'Angst', desc: 'Sie machen dir Angst, damit du handelst, bevor du nachdenkst.' },
    trust: { label: 'Vertrauen & Freundschaft', desc: 'Sie tun so, als wären sie Freund oder Helfer, damit du unvorsichtig wirst.' },
    reward: { label: 'Gewinn oder Neugier', desc: 'Ein Gewinn oder eine Überraschung macht dich neugierig oder gierig, also klickst du.' },
    authority: { label: 'Falsche Autorität', desc: 'Sie tun so, als hätten sie das Sagen, damit du gehorchst.' },
    pity: { label: 'Mitleid', desc: 'Sie wecken Mitleid, damit du hilfst, ohne zu prüfen.' },
  },
  wants: { information: 'Informationen', access: 'Zugang', money: 'Geld' },

  scenarios: [
    {
      id: 1,
      from: 'Prize Center <winner@free-prizes.net>',
      subject: 'Sie haben 1.000 $ gewonnen!',
      message: 'Herzlichen Glückwunsch! Sie wurden als unser Glücksgewinner ausgewählt! Klicken Sie hier, um Ihren Preis von 1.000 $ zu beanspruchen. Geben Sie einfach die Bankdaten Ihrer Eltern ein.',
      explanation: 'Das ist ein klassischer Betrug! Echte Preise verlangen keine Bankdaten. Die E-Mail-Adresse sieht auch gefälscht aus.',
    },
    {
      id: 2,
      from: 'BestFriend_99',
      message: 'Hey! Schau dir diese coole Website an, die ich gefunden habe: www.free-vbucks-4real.com — du kannst unbegrenzte V-Bucks bekommen!',
      explanation: 'Auch wenn es aussieht, als käme es von einem Freund, könnte dessen Konto gehackt worden sein. Seiten mit kostenlosen V-Bucks sind immer Betrug.',
    },
    {
      id: 3,
      from: 'School Admin <admin@your-school.edu>',
      subject: 'Hausaufgaben-Erinnerung',
      message: 'Nur eine Erinnerung, dass dein Naturwissenschaftsprojekt bis nächsten Freitag abgegeben werden muss. Bitte schau für Details im Klassenportal nach.',
      explanation: 'Das ist eine normale Schul-E-Mail. Sie kommt von einer echten Schuladresse, fragt nicht nach persönlichen Daten und enthält keine seltsamen Links.',
    },
    {
      id: 4,
      from: 'CoolGamer99',
      message: 'Ich bin Spieleentwickler! Schick mir deine Anmeldedaten und ich füge deinem Konto kostenlos 1000 Münzen hinzu!',
      explanation: 'Echte Spieleentwickler verlangen niemals dein Passwort. Diese Person versucht, deinen Account zu stehlen!',
    },
    {
      id: 5,
      from: 'Security Team <alert@g00gle-security.com>',
      subject: 'DRINGEND: Ihr Konto wird gelöscht!',
      message: 'Ihr Konto wird in 24 Stunden dauerhaft gelöscht, wenn Sie Ihr Passwort nicht JETZT bestätigen!',
      explanation: 'Beachte die gefälschte Domain \'g00gle\' (mit Nullen). Echte Unternehmen drohen niemals per E-Mail mit der Löschung deines Kontos oder verlangen Passwörter.',
    },
    {
      id: 6,
      from: 'Mama 💕',
      message: 'Hey Schatz, kannst du auf dem Weg nach Hause Milch kaufen? Ich liebe dich!',
      explanation: 'Das ist eine normale Nachricht von einem Familienmitglied. Keine seltsamen Links und keine Fragen nach persönlichen Daten.',
    },
    {
      id: 7,
      from: 'Charity Helper <donate@kids-help-now.org>',
      subject: 'Helfen Sie bedürftigen Kindern!',
      message: 'Bitte spenden Sie jetzt! Kinder leiden! Schicken Sie die Kreditkartennummer Ihrer Eltern, um sofort zu helfen!',
      explanation: 'Echte Wohltätigkeitsorganisationen verlangen niemals Kreditkartennummern per E-Mail. Hier werden Emotionen eingesetzt, um dich zu täuschen.',
    },
    {
      id: 8,
      from: 'Unbekannter Nutzer',
      message: 'Hallo! Ich bin neu an deiner Schule. Was ist deine Heimadresse, damit ich vorbeikommen und abhängen kann?',
      explanation: 'Teile niemals deine Adresse mit Fremden online, auch wenn sie behaupten, dich zu kennen. Ein echter neuer Schüler würde in der Schule fragen.',
    },
    {
      id: 9,
      from: 'Cloud Drive Alerts <alerts@cloud-drive-help.com>',
      subject: 'Geteiltes Dokument gesperrt',
      message: 'Jemand hat versucht, deine Datei zu öffnen. Bestätige jetzt deine Anmeldung, um den Zugriff auf deine Cloud-Dokumente zu behalten.',
      explanation: 'Diese Nachricht erzeugt Panik und drängt dich dazu, dich über einen verdächtigen Link anzumelden. Öffne stattdessen die echte App direkt.',
    },
    {
      id: 10,
      from: 'Schulbüro',
      message: 'Erinnerung: Die Schule schließt morgen früh um 13:00 Uhr wegen Lehrerfortbildung. Siehe die Mitteilung im Elternportal.',
      explanation: 'Das ist eine normale Schulinformation und fragt nicht nach Passwörtern, Geld oder privaten Kontoinformationen.',
    },
    {
      id: 11,
      from: 'App Store Security <security@app-store-verify.net>',
      subject: 'Quittungsproblem: Karte jetzt bestätigen',
      message: 'Dein letzter Kauf ist fehlgeschlagen. Bestätige deine vollständige Kartennummer und CVV innerhalb von 10 Minuten, um eine Kontosperrung zu vermeiden.',
      explanation: 'Echte App-Stores verlangen niemals vollständige Kartendaten und CVV per E-Mail. Dringende Fristen sind ein verbreiteter Betrugs trick.',
    },
    {
      id: 12,
      from: 'School Library <library@your-school.edu>',
      subject: 'Leseclub-Treffen morgen',
      message: 'Erinnerung: Der Leseclub trifft sich morgen zur Mittagspause in Raum 12. Bring dein aktuelles Buch mit, wenn du kannst.',
      explanation: 'Das ist eine normale Schulerinnerung von einer vertrauenswürdigen Adresse. Sie fragt nicht nach Passwörtern oder privaten Kontodaten.',
    },
    {
      id: 13,
      from: 'Coach Rivera',
      message: 'Das Training beginnt heute 15 Minuten später wegen des Wetters. Bring deine Wasserflasche mit.',
      explanation: 'Das ist eine normale Terminänderung. Sie fragt nicht nach privaten Daten und will nichts Seltsames von dir.',
    },
    {
      id: 14,
      from: 'Student Portal <noreply@districtschools.org>',
      subject: 'Neue Noten veröffentlicht',
      message: 'Neue Noten sind jetzt im Schülerportal verfügbar. Öffne das Portal über dein übliches Schullesezeichen, um sie einzusehen.',
      explanation: 'Diese Nachricht führt dich zu deinem üblichen Schulportal. Sie fragt nicht nach Passwörtern, Zahlungen oder privaten Daten.',
    },
    {
      id: 15,
      from: 'Unbekannte Nummer',
      message: 'Paketbenachrichtigung: Wir konnten dein Paket nicht zustellen. Zahle innerhalb von 24 Stunden eine Gebühr von 1,99 €, um die Zustellung neu zu buchen: parcel-pay-now.net/fee',
      explanation: 'Du kannst nicht wissen, ob wirklich ein Paket unterwegs ist, und der Link führt zu einer seltsamen Webseite. Nicht klicken und nicht zahlen. Bitte eine erwachsene Person, das Paket auf der echten Webseite oder App des Lieferdienstes zu prüfen.',
    },
    {
      id: 16,
      from: 'Unbekannte Nummer (Anruf)',
      message: '„Hallo! Hier ist der Spiel-Support. Dein Konto wurde gehackt! Um es zu retten, schicke ich dir einen Code per SMS. Lies ihn mir sofort vor, schnell, bevor die Hacker hineinkommen!“',
      explanation: 'Der echte Spiel-Support ruft nie an und fragt nach einem Code. Dieser Code ist der Schlüssel zu deinem Konto. Leg auf und sag es einer erwachsenen Person.',
    },
    {
      id: 17,
      from: 'Ein Fremder an der Schultür',
      message: '„Hallo! Ich soll das WLAN reparieren. Die Tür ist zu. Kannst du mich reinlassen? Schnell, ich bin spät dran!“',
      explanation: 'Du kennst diese Person nicht, und sie drängt dich. Einen Fremden hereinzulassen ist ein Trick namens Tailgating. Öffne nicht. Sag es einer Lehrkraft, die prüfen kann, ob der Reparaturbesuch echt ist.',
    },
    {
      id: 18,
      from: 'IT-Helpdesk <helpdesk@your-school.edu>',
      subject: 'Dein Schulpasswort läuft in 2 Tagen ab',
      message: 'Hallo, dein Schulpasswort läuft in 2 Tagen ab. Damit du dein Konto behältst, wähle hier ein neues Passwort: your-school.edu/new-password',
      explanation: 'Das könnte echt sein, aber sicher bist du nicht, und die Nachricht drängt dich zum Klick auf einen Link. Benutze den Link nicht. Öffne das Schulportal über dein gewohntes Lesezeichen oder frage eine Lehrkraft, ob die Nachricht echt ist.',
    },
    {
      id: 19,
      from: 'Mia 😄 (Mitschülerin)',
      message: 'omg bist du das in diesem Video?? 😂😂 schau mal: vid-clips-now.net/mia',
      explanation: 'Freunde können gehackte Konten haben. Die Nachricht macht dich neugierig, damit du schnell klickst. Frag Mia persönlich oder in einer anderen App, bevor du irgendetwas anklickst.',
    },
    {
      id: 20,
      from: 'Herr Evans <evans@your-school.edu>',
      subject: 'Museumsausflug: Einverständniserklärung',
      message: 'Hallo zusammen, bitte lasst die Einverständniserklärung für den Museumsausflug von euren Eltern unterschreiben und bringt sie bis Freitag mit in die Schule. Ohne sie können wir niemanden mitnehmen. Danke!',
      explanation: 'Eine Frist allein ist kein Warnsignal. Diese E-Mail kommt von einer Schuladresse, verlangt einen Zettel auf Papier und will weder Passwörter noch Geld oder private Daten.',
    },
    {
      id: 21,
      from: 'Sam (Mitschüler)',
      message: 'Hey! Hast du die Mathehausaufgaben fertig? Ich bringe morgen meine Notizen mit, dann vergleichen wir sie 😊',
      explanation: 'Das ist ein ganz normaler Chat unter Freunden. Es wird nichts Privates verlangt und es gibt keine seltsamen Links.',
    },
  ],
}
