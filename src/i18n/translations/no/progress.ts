// ---------------------------------------------------------------------------
// Shared across all challenges: saved progress, certificate and where to get help
// ---------------------------------------------------------------------------
//
// progress → toast after a finished challenge, "My progress" page, certificate
// help     → "Need to talk to someone?" box (child helpline numbers differ per country)
// ---------------------------------------------------------------------------

export const progress = {
  title: 'Min fremgang',
  subtitle: 'Se hvilke utfordringer du har fullført, og skriv ut et sertifikat.',
  privacyNote: 'Resultatene dine lagres bare i denne nettleseren, på denne enheten. Ingenting sendes noe sted, ikke engang navnet ditt.',
  storageOffNote: 'Denne nettleseren husker ikke fremgangen mellom besøk (det kan være et privat vindu). Resultatene blir bare til du lukker siden.',
  overallTemplate: '{n} av {total} utfordringer fullført',
  listTitle: 'Liste over utfordringer',
  statusNotStarted: 'Ikke startet ennå',
  statusDone: 'Fullført',
  bestTemplate: 'Beste resultat: {best} %',
  runsTemplate: 'Fullført {n} ganger',
  lastTemplate: 'Sist: {date}',
  starsTemplate: '{n} av 3 stjerner',
  openCta: 'Start',
  replayCta: 'Spill igjen',
  certificateTitle: 'Sertifikatet ditt',
  certificateHint: 'Skriv inn navnet ditt (det lagres ikke), og skriv så ut siden eller lagre den som PDF.',
  nameLabel: 'Navnet ditt',
  namePlaceholder: 'Navn',
  printButton: '🖨️ Skriv ut eller lagre som PDF',
  needOne: 'Fullfør minst én utfordring for å få et sertifikat.',
  certHeading: 'Sertifikat for gjennomført',
  certIntro: 'Dette bekrefter at',
  certBodyTemplate: 'har fullført {n} av {total} interaktive utfordringer om digital sikkerhet i KidCy-læringssenteret:',
  certResultTemplate: '{title} — beste resultat {best} %',
  certDateLabel: 'Dato',
  certNote: 'Laget av nettstedet ut fra resultater lagret i denne nettleseren. Ikke en offisiell kvalifikasjon.',
  resetButton: 'Slett fremgangen min',
  resetConfirm: 'Sikker? Trykk igjen for å slette.',
  resetDone: 'Fremgangen er slettet.',
  savedTitle: 'Resultatet er lagret',
  savedTemplate: 'Du fikk {percent} %.',
  newBest: 'Ny personlig rekord!',
  yourBestTemplate: 'Din beste hittil: {best} %',
  notStoredNote: 'Denne nettleseren lagrer ikke fremgang, så resultatet blir bare til du lukker siden.',
  viewProgress: 'Min fremgang →',
  closeLabel: 'Lukk',
  badgeTemplate: '✓ Fullført · beste {best} %',
  footerLink: 'Min fremgang',
}

export const help = {
  title: 'Trenger du å snakke med noen?',
  subtitle: 'Du er aldri alene med dette',
  items: [
    {
      icon: '🤝',
      text: 'Snakk med en voksen du stoler på: en forelder, en lærer eller helsesykepleieren på skolen.',
    },
    { icon: '📞', text: 'Alarmtelefonen for barn og unge: 116 111. Det er gratis.' },
    { icon: '🚨', text: 'I fare akkurat nå? Ring 112.' },
  ],
  note: 'Å fortelle det til noen er ikke å sladre. Slik blir problemer løst.',
}
