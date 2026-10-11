// ---------------------------------------------------------------------------
// Shared across all challenges: saved progress, certificate and where to get help
// ---------------------------------------------------------------------------
//
// progress → toast after a finished challenge, "My progress" page, certificate
// help     → "Need to talk to someone?" box (child helpline numbers differ per country)
// ---------------------------------------------------------------------------

export const progress = {
  title: 'My progress',
  subtitle: 'See which challenges you have finished, and print a certificate.',
  privacyNote: 'Your results are saved only in this browser, on this device. Nothing is sent anywhere, not even your name.',
  storageOffNote: 'This browser does not keep progress between visits (it may be a private window). Results are kept only until you close the page.',
  overallTemplate: '{n} of {total} challenges finished',
  listTitle: 'List of challenges',
  statusNotStarted: 'Not started yet',
  statusDone: 'Finished',
  bestTemplate: 'Best result: {best} %',
  runsTemplate: 'Finished {n}×',
  lastTemplate: 'Last time: {date}',
  starsTemplate: '{n} of 3 stars',
  openCta: 'Start',
  replayCta: 'Play again',
  certificateTitle: 'Your certificate',
  certificateHint: 'Type your name (it is not saved), then print the page or save it as a PDF.',
  nameLabel: 'Your name',
  namePlaceholder: 'Name',
  printButton: '🖨️ Print or save as PDF',
  needOne: 'Finish at least one challenge to get a certificate.',
  certHeading: 'Certificate of achievement',
  certIntro: 'This certifies that',
  certBodyTemplate: 'has finished {n} of {total} interactive cybersecurity challenges of the KidCy learning hub:',
  certResultTemplate: '{title} — best result {best} %',
  certDateLabel: 'Date',
  certNote: 'Made by the website from results saved in this browser. It is not an official qualification.',
  resetButton: 'Delete my progress',
  resetConfirm: 'Are you sure? Press again to delete.',
  resetDone: 'Progress deleted.',
  savedTitle: 'Result saved',
  savedTemplate: 'You got {percent} %.',
  newBest: 'New personal best!',
  yourBestTemplate: 'Your best so far: {best} %',
  notStoredNote: 'This browser does not keep progress, so the result is kept only until you close the page.',
  viewProgress: 'My progress →',
  closeLabel: 'Close',
  badgeTemplate: '✓ Finished · best {best} %',
  footerLink: 'My progress',
}

export const help = {
  title: 'Need to talk to someone?',
  subtitle: 'You are never alone with this',
  items: [
    { icon: '🤝', text: 'Tell a trusted adult: a parent, a teacher or a school counsellor.' },
    {
      icon: '📞',
      text: 'Child helpline: 116 111. It is free. This is the number in many European countries. Ask a teacher for the number in your country.',
    },
    { icon: '🚨', text: 'In danger right now? Call 112.' },
  ],
  note: 'Telling someone is not snitching. It is how problems get solved.',
}
