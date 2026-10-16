/**
 * Attacker Perspective challenge ("In Hacker's Mind") — parts 2 and 3.
 *
 * Part 1 (find the weak spots on the profile) lives in the page. After it, the player thinks like an attacker:
 *   Part 2 — "Plan the attack": a small clue is only a clue; attackers combine clues into a plan for a goal.
 *   Part 3 — "Why, and how to stop it": which motivation fits the attacker, and which habit breaks the plan.
 *
 * Only language-neutral facts live here (right answers, how a game is dealt). Text is in the translation files
 * (`challengeAP`), matched by `id`. Motivations follow the module image "Attacker motivations".
 */

export type ApGoal = 'account' | 'person' | 'none'
export const AP_GOALS: ReadonlyArray<ApGoal> = ['account', 'person', 'none']

export interface ApClueRule {
  id: string
  goal: ApGoal
}

/** Clues that are on the practice profile, and what an attacker could use each one for. */
export const AP_CLUES: ReadonlyArray<ApClueRule> = [
  { id: 'birthday', goal: 'account' }, // used in passwords and security answers
  { id: 'pet', goal: 'account' }, // popular password and security answer
  { id: 'http', goal: 'account' }, // what is typed on an http:// page can be read
  { id: 'location', goal: 'person' }, // where someone is right now
  { id: 'routine', goal: 'person' }, // "just got back from school"
  { id: 'avatar', goal: 'none' },
  { id: 'bio', goal: 'none' },
  { id: 'friends', goal: 'none' },
]

export type ApMotivation =
  | 'financial'
  | 'reputation'
  | 'revenge'
  | 'espionage'
  | 'error'
  | 'experiment'
  | 'fear'
  | 'beliefs'

export const AP_MOTIVATIONS: ReadonlyArray<ApMotivation> = [
  'financial', 'reputation', 'revenge', 'espionage', 'error', 'experiment', 'fear', 'beliefs',
]

export type ApQuestionKind = 'motive' | 'defend'

export interface ApQuestionRule {
  id: number
  kind: ApQuestionKind
  /** Answers on offer: motivation ids for "motive", `o0`–`o2` (text positions in the translation) for "defend". */
  options: ReadonlyArray<string>
  answer: string
}

export const AP_MOTIVE_QUESTIONS: ReadonlyArray<ApQuestionRule> = [
  { id: 1, kind: 'motive', answer: 'reputation', options: ['reputation', 'financial', 'revenge'] },
  { id: 2, kind: 'motive', answer: 'financial', options: ['financial', 'beliefs', 'error'] },
  { id: 3, kind: 'motive', answer: 'revenge', options: ['revenge', 'espionage', 'experiment'] },
  { id: 4, kind: 'motive', answer: 'experiment', options: ['experiment', 'financial', 'espionage'] },
  { id: 5, kind: 'motive', answer: 'fear', options: ['fear', 'reputation', 'beliefs'] },
]

/** Option `o0` is always the right one in the translation files; the page shuffles what is shown. */
export const AP_DEFEND_QUESTIONS: ReadonlyArray<ApQuestionRule> = [
  { id: 1, kind: 'defend', answer: 'o0', options: ['o0', 'o1', 'o2'] }, // password habits
  { id: 2, kind: 'defend', answer: 'o0', options: ['o0', 'o1', 'o2'] }, // http:// page
  { id: 3, kind: 'defend', answer: 'o0', options: ['o0', 'o1', 'o2'] }, // live location
]

export const AP_MOTIVE_QUESTIONS_PER_GAME = 3

type Random = () => number

export const shuffle = <T>(items: ReadonlyArray<T>, random: Random = Math.random): T[] => {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export interface ApQuestion extends ApQuestionRule {
  /** Position in the shuffled list of the part (0-based). */
  order: number
}

/** Part 3: three "why" questions (random pick of five), then the three "how to stop it" questions. Answers are shuffled. */
export const dealQuestions = (random: Random = Math.random): ApQuestion[] => {
  const motives = shuffle(AP_MOTIVE_QUESTIONS, random).slice(0, AP_MOTIVE_QUESTIONS_PER_GAME)
  const defends = shuffle(AP_DEFEND_QUESTIONS, random)
  return [...motives, ...defends].map((question, order) => ({
    ...question,
    options: shuffle(question.options, random),
    order,
  }))
}

export const AP_TOTAL_QUESTIONS = AP_MOTIVE_QUESTIONS_PER_GAME + AP_DEFEND_QUESTIONS.length

export type ApRank = 'great' | 'good' | 'practise'

/** `points` = weak spots found (0–4) + clues placed right first time (0–8) + questions answered right first time (0–6). */
export const rankFor = (points: number, total: number): ApRank => {
  const share = total > 0 ? points / total : 0
  if (share >= 0.85) return 'great'
  if (share >= 0.55) return 'good'
  return 'practise'
}
