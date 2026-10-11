// ---------------------------------------------------------------------------
// Shared across all challenges: saved progress, certificate and where to get help
// ---------------------------------------------------------------------------
//
// progress → toast after a finished challenge, "My progress" page, certificate
// help     → "Need to talk to someone?" box (child helpline numbers differ per country)
// ---------------------------------------------------------------------------

export const progress = {
  title: 'Mein Fortschritt',
  subtitle: 'Sieh, welche Herausforderungen du geschafft hast, und drucke ein Zertifikat.',
  privacyNote: 'Deine Ergebnisse werden nur in diesem Browser auf diesem Gerät gespeichert. Es wird nichts versendet, nicht einmal dein Name.',
  storageOffNote: 'Dieser Browser speichert den Fortschritt nicht zwischen Besuchen (vielleicht ein privates Fenster). Die Ergebnisse bleiben nur, bis du die Seite schließt.',
  overallTemplate: '{n} von {total} Herausforderungen geschafft',
  listTitle: 'Liste der Herausforderungen',
  statusNotStarted: 'Noch nicht begonnen',
  statusDone: 'Geschafft',
  bestTemplate: 'Bestes Ergebnis: {best} %',
  runsTemplate: '{n}× abgeschlossen',
  lastTemplate: 'Zuletzt: {date}',
  starsTemplate: '{n} von 3 Sternen',
  openCta: 'Starten',
  replayCta: 'Nochmal spielen',
  certificateTitle: 'Dein Zertifikat',
  certificateHint: 'Gib deinen Namen ein (er wird nicht gespeichert), dann drucke die Seite oder speichere sie als PDF.',
  nameLabel: 'Dein Name',
  namePlaceholder: 'Name',
  printButton: '🖨️ Drucken oder als PDF speichern',
  needOne: 'Schließe mindestens eine Herausforderung ab, um ein Zertifikat zu bekommen.',
  certHeading: 'Zertifikat',
  certIntro: 'Hiermit wird bestätigt, dass',
  certBodyTemplate: '{n} von {total} interaktiven Cybersicherheits-Herausforderungen des KidCy-Lernzentrums abgeschlossen hat:',
  certResultTemplate: '{title} — bestes Ergebnis {best} %',
  certDateLabel: 'Datum',
  certNote: 'Von der Website aus den in diesem Browser gespeicherten Ergebnissen erstellt. Kein offizieller Abschluss.',
  resetButton: 'Meinen Fortschritt löschen',
  resetConfirm: 'Wirklich löschen? Drücke noch einmal.',
  resetDone: 'Fortschritt gelöscht.',
  savedTitle: 'Ergebnis gespeichert',
  savedTemplate: 'Du hast {percent} % erreicht.',
  newBest: 'Neuer persönlicher Rekord!',
  yourBestTemplate: 'Dein bisher bestes: {best} %',
  notStoredNote: 'Dieser Browser speichert keinen Fortschritt, das Ergebnis bleibt nur, bis du die Seite schließt.',
  viewProgress: 'Mein Fortschritt →',
  closeLabel: 'Schließen',
  badgeTemplate: '✓ Geschafft · bestes Ergebnis {best} %',
  footerLink: 'Mein Fortschritt',
}

export const help = {
  title: 'Möchtest du mit jemandem sprechen?',
  subtitle: 'Du bist damit nie allein',
  items: [
    {
      icon: '🤝',
      text: 'Sprich mit einer erwachsenen Person, der du vertraust: Eltern, Lehrkraft oder Schulsozialarbeit.',
    },
    {
      icon: '📞',
      text: 'Nummer gegen Kummer: 116 111 (kostenlos, Deutschland). In Österreich hilft Rat auf Draht unter 147.',
    },
    { icon: '🚨', text: 'In akuter Gefahr? Ruf 112 an.' },
  ],
  note: 'Sich jemandem anzuvertrauen ist kein Petzen. So werden Probleme gelöst.',
}
