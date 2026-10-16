/**
 * Malware Detective challenge — game mechanics.
 *
 * Only language-neutral facts live here: which item is dangerous, which answer is right and how a game
 * is dealt. All text (names, stories, explanations) is in the translation files (`challengeMW`, matched
 * by `id`), so every language is graded by the same answer key.
 *
 * Seven levels:
 *   1 files · 2 emails · 3 pop-ups · 4 app permissions   → safe or dangerous?
 *   5 malware types                                       → which type is it?
 *   6 signs of infection                                  → normal, or a warning sign?
 *   7 protection measures                                 → which measure fits?
 *
 * Some items are "tricky" on purpose: an official .exe installer that is safe, a countdown that is
 * harmless, a "photo" that is really a program. Tricky items are always dealt, so the lesson is
 * "look at the source, not only at the look".
 */

export type MwLevelKey = 'files' | 'emails' | 'popups' | 'perms' | 'types' | 'signs' | 'shield'
export type MwMalwareType = 'virus' | 'worm' | 'trojan' | 'ransomware' | 'spyware' | 'adware'
export type MwMeasure = 'links' | 'trusted' | 'update' | 'antivirus' | 'adult' | 'attachment'

/** Yes/no levels: the left button is the calm answer, the right one the alarm answer. */
export type MwBinaryAnswer = 'safe' | 'danger'

export const MW_LEVEL_KEYS: ReadonlyArray<MwLevelKey> = ['files', 'emails', 'popups', 'perms', 'types', 'signs', 'shield']
export const MW_LEVEL_COUNT = MW_LEVEL_KEYS.length

export const MW_MALWARE_TYPES: ReadonlyArray<MwMalwareType> = ['virus', 'worm', 'trojan', 'ransomware', 'spyware', 'adware']
export const MW_MEASURES: ReadonlyArray<MwMeasure> = ['links', 'trusted', 'update', 'antivirus', 'adult', 'attachment']

interface BinaryRule {
  id: number
  /** True when the item is a threat (or, on level 6, a warning sign). */
  danger: boolean
  /** Looks different from what it is — always dealt. */
  tricky?: boolean
}

interface ChoiceRule<T extends string> {
  id: number
  answer: T
  /** The three answers offered (the right one is among them). */
  options: ReadonlyArray<T>
}

export const MW_FILES: ReadonlyArray<BinaryRule> = [
  { id: 1, danger: true }, // cracked game installer
  { id: 2, danger: false }, // own essay
  { id: 3, danger: true }, // .bat from a stranger
  { id: 4, danger: false }, // mp3 from a music app
  { id: 5, danger: true }, // "repair tool" from a pop-up ad
  { id: 6, danger: false }, // photo from grandma
  { id: 7, danger: true }, // free Robux script
  { id: 8, danger: false }, // spreadsheet from the teacher
  { id: 9, danger: true, tricky: true }, // "photo.jpg.exe"
  { id: 10, danger: false, tricky: true }, // official .exe installer
]

export const MW_EMAILS: ReadonlyArray<BinaryRule> = [
  { id: 1, danger: true },
  { id: 2, danger: false },
  { id: 3, danger: true },
  { id: 4, danger: false },
  { id: 5, danger: true },
]

export const MW_POPUPS: ReadonlyArray<BinaryRule> = [
  { id: 1, danger: true }, // fake virus alert
  { id: 2, danger: false }, // cookie notice on the school portal
  { id: 3, danger: true }, // fake prize with countdown
  { id: 4, danger: true }, // notification request (even from a real site)
  { id: 5, danger: true }, // cracked software "scanned as safe"
  { id: 6, danger: false, tricky: true }, // harmless countdown: "stay logged in?"
  { id: 7, danger: true, tricky: true }, // fake "player update"
]

export const MW_PERMS: ReadonlyArray<BinaryRule> = [
  { id: 1, danger: true },
  { id: 2, danger: false },
  { id: 3, danger: true },
  { id: 4, danger: false },
]

export const MW_TYPE_CASES: ReadonlyArray<ChoiceRule<MwMalwareType>> = [
  { id: 1, answer: 'virus', options: ['virus', 'worm', 'spyware'] },
  { id: 2, answer: 'worm', options: ['worm', 'virus', 'ransomware'] },
  { id: 3, answer: 'trojan', options: ['trojan', 'worm', 'adware'] },
  { id: 4, answer: 'ransomware', options: ['ransomware', 'spyware', 'virus'] },
  { id: 5, answer: 'spyware', options: ['spyware', 'adware', 'trojan'] },
  { id: 6, answer: 'adware', options: ['adware', 'spyware', 'worm'] },
]

/** Level 6: `danger` = a warning sign of infection; otherwise it is normal computer behaviour. */
export const MW_SIGN_CASES: ReadonlyArray<BinaryRule> = [
  { id: 1, danger: true }, // pop-ups out of nowhere
  { id: 2, danger: true }, // strange new icons
  { id: 3, danger: true }, // homework files gone
  { id: 4, danger: true }, // friends get e-mails you never sent
  { id: 5, danger: true }, // loud fan and slow while doing nothing
  { id: 6, danger: false, tricky: true }, // slow while installing an update
  { id: 7, danger: false, tricky: true }, // loud fan while gaming
  { id: 8, danger: false }, // new icon after a parent-approved install
]

export const MW_SHIELD_CASES: ReadonlyArray<ChoiceRule<MwMeasure>> = [
  { id: 1, answer: 'links', options: ['links', 'antivirus', 'update'] },
  { id: 2, answer: 'trusted', options: ['trusted', 'attachment', 'update'] },
  { id: 3, answer: 'update', options: ['update', 'links', 'adult'] },
  { id: 4, answer: 'adult', options: ['adult', 'update', 'attachment'] },
  { id: 5, answer: 'attachment', options: ['attachment', 'links', 'update'] },
  { id: 6, answer: 'antivirus', options: ['antivirus', 'links', 'attachment'] },
]

/** How many cases of each kind one game deals (random pick, then shuffled). */
export const MW_DECK_PLAN = {
  files: { danger: 3, safe: 3 },
  emails: { danger: 3, safe: 2 },
  popups: { danger: 3, safe: 2 },
  perms: { danger: 2, safe: 2 },
  types: 5,
  signs: { danger: 3, safe: 3 },
  shield: 4,
} as const

export interface MwCase {
  /** 1-based level number */
  level: number
  /** Matches the `id` of the item in the translation file. */
  id: number
  /** Answers in the order they are shown. Yes/no levels: ['safe', 'danger']. */
  options: string[]
  right: string
  /** True for a threat / warning sign (counts as a "threat caught" when answered right). */
  danger: boolean
}

type Random = () => number

export const shuffle = <T>(items: ReadonlyArray<T>, random: Random = Math.random): T[] => {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

/** Tricky items first (they are always dealt), then random ones. */
const pick = <T extends { tricky?: boolean }>(pool: ReadonlyArray<T>, count: number, random: Random): T[] => {
  const tricky = shuffle(pool.filter((item) => item.tricky), random)
  const plain = shuffle(pool.filter((item) => !item.tricky), random)
  return [...tricky, ...plain].slice(0, count)
}

const binaryCases = (
  level: number,
  rules: ReadonlyArray<BinaryRule>,
  plan: { danger: number; safe: number },
  random: Random,
): MwCase[] => {
  const dealt = [
    ...pick(rules.filter((rule) => rule.danger), plan.danger, random),
    ...pick(rules.filter((rule) => !rule.danger), plan.safe, random),
  ]
  return shuffle(dealt, random).map((rule) => ({
    level,
    id: rule.id,
    options: ['safe', 'danger'],
    right: rule.danger ? 'danger' : 'safe',
    danger: rule.danger,
  }))
}

const choiceCases = <T extends string>(
  level: number,
  rules: ReadonlyArray<ChoiceRule<T>>,
  count: number,
  random: Random,
): MwCase[] =>
  shuffle(rules, random)
    .slice(0, count)
    .map((rule) => ({ level, id: rule.id, options: shuffle(rule.options, random), right: rule.answer, danger: false }))

/** One game: a list of cases per level (index 0 = level 1), each list shuffled. */
export const dealGame = (random: Random = Math.random): MwCase[][] => [
  binaryCases(1, MW_FILES, MW_DECK_PLAN.files, random),
  binaryCases(2, MW_EMAILS, MW_DECK_PLAN.emails, random),
  binaryCases(3, MW_POPUPS, MW_DECK_PLAN.popups, random),
  binaryCases(4, MW_PERMS, MW_DECK_PLAN.perms, random),
  choiceCases(5, MW_TYPE_CASES, MW_DECK_PLAN.types, random),
  binaryCases(6, MW_SIGN_CASES, MW_DECK_PLAN.signs, random),
  choiceCases(7, MW_SHIELD_CASES, MW_DECK_PLAN.shield, random),
]

export const MW_CASES_PER_GAME = Object.values(MW_DECK_PLAN).reduce(
  (sum, plan) => sum + (typeof plan === 'number' ? plan : plan.danger + plan.safe),
  0,
)

export const isRight = (entry: MwCase, choice: string): boolean => choice === entry.right

export type MwRank = 'trainee' | 'junior' | 'senior' | 'elite'

export const rankFor = (correct: number, total: number): MwRank => {
  const share = total > 0 ? correct / total : 0
  if (share >= 0.9) return 'elite'
  if (share >= 0.75) return 'senior'
  if (share >= 0.55) return 'junior'
  return 'trainee'
}
