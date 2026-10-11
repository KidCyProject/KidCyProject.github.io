// ---------------------------------------------------------------------------
// Shared across all challenges: saved progress, certificate and where to get help
// ---------------------------------------------------------------------------
//
// progress → toast after a finished challenge, "My progress" page, certificate
// help     → "Need to talk to someone?" box (child helpline numbers differ per country)
// ---------------------------------------------------------------------------

export const progress = {
  title: 'Můj postup',
  subtitle: 'Přehled dokončených výzev a certifikát k vytištění.',
  privacyNote: 'Výsledky se ukládají jen v tomto prohlížeči, v tomto zařízení. Nic se nikam neodesílá, ani jméno.',
  storageOffNote: 'Tento prohlížeč si postup mezi návštěvami nepamatuje (může jít o anonymní okno). Výsledky zůstanou jen do zavření stránky.',
  overallTemplate: 'Dokončeno {n} z {total} výzev',
  listTitle: 'Seznam výzev',
  statusNotStarted: 'Zatím nezačato',
  statusDone: 'Dokončeno',
  bestTemplate: 'Nejlepší výsledek: {best} %',
  runsTemplate: 'Dokončeno {n}×',
  lastTemplate: 'Naposledy: {date}',
  starsTemplate: '{n} ze 3 hvězdiček',
  openCta: 'Spustit',
  replayCta: 'Hrát znovu',
  certificateTitle: 'Certifikát',
  certificateHint: 'Napište své jméno (neukládá se) a stránku vytiskněte nebo uložte jako PDF.',
  nameLabel: 'Jméno',
  namePlaceholder: 'Jméno',
  printButton: '🖨️ Vytisknout nebo uložit jako PDF',
  needOne: 'Dokončete aspoň jednu výzvu a certifikát bude k dispozici.',
  certHeading: 'Certifikát o splnění',
  certIntro: 'Potvrzujeme, že',
  certBodyTemplate: 'dokončil(a) {n} ze {total} interaktivních výzev kybernetické bezpečnosti ve vzdělávacím centru KidCy:',
  certResultTemplate: '{title} — nejlepší výsledek {best} %',
  certDateLabel: 'Datum',
  certNote: 'Vystaveno webem z výsledků uložených v tomto prohlížeči. Nejde o oficiální osvědčení.',
  resetButton: 'Smazat můj postup',
  resetConfirm: 'Opravdu? Stiskněte znovu pro smazání.',
  resetDone: 'Postup byl smazán.',
  savedTitle: 'Výsledek uložen',
  savedTemplate: 'Výsledek: {percent} %.',
  newBest: 'Nový osobní rekord!',
  yourBestTemplate: 'Dosud nejlepší: {best} %',
  notStoredNote: 'Tento prohlížeč si postup nepamatuje, výsledek zůstane jen do zavření stránky.',
  viewProgress: 'Můj postup →',
  closeLabel: 'Zavřít',
  badgeTemplate: '✓ Dokončeno · nejlepší {best} %',
  footerLink: 'Můj postup',
}

export const help = {
  title: 'Potřebuješ si s někým promluvit?',
  subtitle: 'S tím nejsi nikdy sám',
  items: [
    { icon: '🤝', text: 'Řekni to dospělému, kterému věříš: rodiči, učiteli nebo školnímu poradci.' },
    { icon: '📞', text: 'Linka bezpečí: 116 111. Volání je zdarma. Chat najdeš na linkabezpeci.cz.' },
    { icon: '🚨', text: 'Jsi právě teď v ohrožení? Volej 112.' },
  ],
  note: 'Říct to někomu není žalování. Tak se problémy řeší.',
}
