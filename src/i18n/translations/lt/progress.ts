// ---------------------------------------------------------------------------
// Shared across all challenges: saved progress, certificate and where to get help
// ---------------------------------------------------------------------------
//
// progress → toast after a finished challenge, "My progress" page, certificate
// help     → "Need to talk to someone?" box (child helpline numbers differ per country)
// ---------------------------------------------------------------------------

export const progress = {
  title: 'Mano pažanga',
  subtitle: 'Pažiūrėk, kuriuos iššūkius jau įveikei, ir atsispausdink pažymėjimą.',
  privacyNote: 'Tavo rezultatai saugomi tik šioje naršyklėje, šiame įrenginyje. Niekas niekur nesiunčiama, net vardas.',
  storageOffNote: 'Ši naršyklė nesaugo pažangos tarp apsilankymų (gal tai privatus langas). Rezultatai išliks tik iki puslapio uždarymo.',
  overallTemplate: 'Įveikta {n} iš {total} iššūkių',
  listTitle: 'Iššūkių sąrašas',
  statusNotStarted: 'Dar nepradėta',
  statusDone: 'Įveikta',
  bestTemplate: 'Geriausias rezultatas: {best} %',
  runsTemplate: 'Baigta {n} k.',
  lastTemplate: 'Paskutinį kartą: {date}',
  starsTemplate: '{n} iš 3 žvaigždučių',
  openCta: 'Pradėti',
  replayCta: 'Žaisti dar kartą',
  certificateTitle: 'Tavo pažymėjimas',
  certificateHint: 'Įrašyk savo vardą (jis nesaugomas), tada atsispausdink puslapį arba išsaugok kaip PDF.',
  nameLabel: 'Tavo vardas',
  namePlaceholder: 'Vardas',
  printButton: '🖨️ Spausdinti arba išsaugoti kaip PDF',
  needOne: 'Įveik bent vieną iššūkį, kad gautum pažymėjimą.',
  certHeading: 'Pasiekimų pažymėjimas',
  certIntro: 'Šiuo pažymėjimu patvirtinama, kad',
  certBodyTemplate: 'įveikė {n} iš {total} interaktyvių kibernetinio saugumo iššūkių KidCy mokymosi centre:',
  certResultTemplate: '{title} — geriausias rezultatas {best} %',
  certDateLabel: 'Data',
  certNote: 'Sukurta svetainės pagal šioje naršyklėje išsaugotus rezultatus. Tai nėra oficialus kvalifikacijos dokumentas.',
  resetButton: 'Ištrinti mano pažangą',
  resetConfirm: 'Ar tikrai? Paspausk dar kartą.',
  resetDone: 'Pažanga ištrinta.',
  savedTitle: 'Rezultatas išsaugotas',
  savedTemplate: 'Tavo rezultatas: {percent} %.',
  newBest: 'Naujas asmeninis rekordas!',
  yourBestTemplate: 'Geriausias iki šiol: {best} %',
  notStoredNote: 'Ši naršyklė nesaugo pažangos, todėl rezultatas išliks tik iki puslapio uždarymo.',
  viewProgress: 'Mano pažanga →',
  closeLabel: 'Uždaryti',
  badgeTemplate: '✓ Įveikta · geriausias {best} %',
  footerLink: 'Mano pažanga',
}

export const help = {
  title: 'Reikia su kuo nors pasikalbėti?',
  subtitle: 'Su tuo niekada nesi vienas',
  items: [
    { icon: '🤝', text: 'Pasakyk patikimam suaugusiajam: tėvams, mokytojui ar mokyklos psichologui.' },
    { icon: '📞', text: 'Vaikų linija: 116 111. Skambinti nemokama.' },
    { icon: '🚨', text: 'Esi pavojuje dabar? Skambink 112.' },
  ],
  note: 'Papasakoti kam nors nėra skundimas. Taip išsprendžiamos problemos.',
}
