/**
 * Social Engineering challenge ("Phishing Case Files") — game mechanics.
 *
 * Only language-neutral facts live here: the channel, the best action, the manipulation trick and
 * what the attacker wanted. All text (sender, message, explanation) is in the translation files
 * (`challengeSE.scenarios`, matched by `id`), so every language is graded by the same answer key.
 *
 * The model comes from the handbook: Stop – Think – Check – Ask. Suspicious-looking messages can be
 * real, so "stop and ask an adult" is always a safe move; it is the *best* move when a message
 * cannot be judged from the text alone.
 */

export type SeChannel = 'email' | 'chat' | 'sms' | 'call' | 'person'
/** trust = it is fine · check = stop and ask an adult / verify another way · report = ignore and report */
export type SeAction = 'trust' | 'check' | 'report'
export type SeTactic = 'urgency' | 'fear' | 'trust' | 'reward' | 'authority' | 'pity'
export type SeWant = 'information' | 'access' | 'money'
export type SeOutcome = 'best' | 'safe' | 'wrong'

export interface SeScenarioRule {
  id: number
  channel: SeChannel
  best: SeAction
  /** Manipulation trick (absent for legitimate messages). */
  tactic?: SeTactic
  /** What the attacker is after (absent for legitimate messages). */
  want?: SeWant
}

export const SE_TACTICS: ReadonlyArray<SeTactic> = ['urgency', 'fear', 'trust', 'reward', 'authority', 'pity']

export const SE_SCENARIOS: ReadonlyArray<SeScenarioRule> = [
  // clear scams → ignore / report
  { id: 1, channel: 'email', best: 'report', tactic: 'reward', want: 'money' },
  { id: 2, channel: 'chat', best: 'report', tactic: 'trust', want: 'access' },
  { id: 4, channel: 'chat', best: 'report', tactic: 'authority', want: 'access' },
  { id: 5, channel: 'email', best: 'report', tactic: 'fear', want: 'access' },
  { id: 7, channel: 'email', best: 'report', tactic: 'pity', want: 'money' },
  { id: 8, channel: 'chat', best: 'report', tactic: 'trust', want: 'information' },
  { id: 9, channel: 'email', best: 'report', tactic: 'fear', want: 'access' },
  { id: 11, channel: 'email', best: 'report', tactic: 'urgency', want: 'money' },
  { id: 16, channel: 'call', best: 'report', tactic: 'authority', want: 'access' },
  // normal messages → trust
  { id: 3, channel: 'email', best: 'trust' },
  { id: 6, channel: 'chat', best: 'trust' },
  { id: 10, channel: 'chat', best: 'trust' },
  { id: 12, channel: 'email', best: 'trust' },
  { id: 13, channel: 'chat', best: 'trust' },
  { id: 14, channel: 'email', best: 'trust' },
  { id: 20, channel: 'email', best: 'trust' },
  { id: 21, channel: 'chat', best: 'trust' },
  // cannot be judged from the text alone → stop, check, ask
  { id: 15, channel: 'sms', best: 'check', tactic: 'urgency', want: 'money' },
  { id: 17, channel: 'person', best: 'check', tactic: 'authority', want: 'access' },
  { id: 18, channel: 'email', best: 'check', tactic: 'urgency', want: 'access' },
  { id: 19, channel: 'chat', best: 'check', tactic: 'reward', want: 'access' },
]

/** How many cases of each kind one game deals (random pick, then shuffled). */
export const SE_DECK_PLAN: Readonly<Record<SeAction, number>> = { report: 5, trust: 4, check: 3 }
export const SE_CASES_PER_GAME = Object.values(SE_DECK_PLAN).reduce((sum, n) => sum + n, 0)

type Random = () => number

export const shuffle = <T>(items: ReadonlyArray<T>, random: Random = Math.random): T[] => {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

/** A balanced, shuffled set of cases for one game. */
export const dealDeck = (random: Random = Math.random): SeScenarioRule[] => {
  const deck: SeScenarioRule[] = []
  for (const action of Object.keys(SE_DECK_PLAN) as SeAction[]) {
    const pool = SE_SCENARIOS.filter((s) => s.best === action)
    deck.push(...shuffle(pool, random).slice(0, SE_DECK_PLAN[action]))
  }
  return shuffle(deck, random)
}

/**
 * best  — the answer the handbook recommends for this case
 * safe  — not the best, but it keeps you out of trouble ("stop and ask" is never wrong; ignoring a
 *         message that only an adult can judge is fine too)
 * wrong — trusting a trick, or reporting a normal message
 */
export const evaluateChoice = (rule: SeScenarioRule, choice: SeAction): SeOutcome => {
  if (choice === rule.best) return 'best'
  if (choice === 'check') return 'safe'
  if (rule.best === 'check' && choice === 'report') return 'safe'
  return 'wrong'
}

/** Three answers for the "which trick?" question: the right one plus two different ones, shuffled. */
export const quizOptions = (correct: SeTactic, random: Random = Math.random): SeTactic[] => {
  const others = shuffle(SE_TACTICS.filter((t) => t !== correct), random).slice(0, 2)
  return shuffle([correct, ...others], random)
}

export type SeRank = 'rookie' | 'junior' | 'senior' | 'master'

export const rankFor = (best: number, total: number): SeRank => {
  const share = total > 0 ? best / total : 0
  if (share >= 0.9) return 'master'
  if (share >= 0.7) return 'senior'
  if (share >= 0.45) return 'junior'
  return 'rookie'
}
