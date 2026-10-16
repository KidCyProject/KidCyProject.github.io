/**
 * Data Privacy challenge ("Digital Footprint Sorter") — game mechanics.
 *
 * Only language-neutral facts live here: the right zone / action for every card and how a game is dealt.
 * All text is in the translation files (`challengeDP`, matched by `id`).
 *
 * Stage 1 — sort activities into three zones (from the video "What is a digital footprint?"):
 *   purpose    — active footprint: you post, send, like or sign up on purpose
 *   background — passive footprint: websites and apps record it quietly (visits, searches, watching, location, payments)
 *   none       — nothing is recorded online
 *   "Tricky" cards look offline but leave a trace (paying by card, location on, smartwatch) — always dealt.
 *
 * Stage 2 — "Fix this profile!" (Part 4 of the module): delete, hide, change or keep each part of a profile.
 */

export type DpZone = 'purpose' | 'background' | 'none'
export const DP_ZONES: ReadonlyArray<DpZone> = ['purpose', 'background', 'none']

export interface DpActivityRule {
  id: number
  zone: DpZone
  /** Looks like it leaves no trace, or like something else — always dealt. */
  tricky?: boolean
}

export const DP_ACTIVITIES: ReadonlyArray<DpActivityRule> = [
  // on purpose (active)
  { id: 1, zone: 'purpose' }, // photo post
  { id: 5, zone: 'purpose' }, // chat message
  { id: 7, zone: 'purpose' }, // creating a game account
  { id: 11, zone: 'purpose' }, // like
  { id: 13, zone: 'purpose' }, // online quiz
  { id: 15, zone: 'purpose' }, // blog comment
  { id: 22, zone: 'purpose' }, // e-mail to the teacher
  { id: 23, zone: 'purpose' }, // homework upload
  { id: 24, zone: 'purpose' }, // link in the class chat
  // in the background (passive)
  { id: 3, zone: 'background' }, // search
  { id: 9, zone: 'background' }, // watching videos
  { id: 16, zone: 'background' }, // just reading a website
  { id: 17, zone: 'background' }, // public Wi-Fi
  { id: 18, zone: 'background', tricky: true }, // paying by card
  { id: 19, zone: 'background', tricky: true }, // walking with location on
  { id: 20, zone: 'background', tricky: true }, // smartwatch
  { id: 21, zone: 'background' }, // ads after looking at trainers
  // no footprint
  { id: 2, zone: 'none' }, // paper book
  { id: 4, zone: 'none' }, // football
  { id: 6, zone: 'none' }, // crayons
  { id: 8, zone: 'none' }, // bike
  { id: 10, zone: 'none' }, // paper diary
  { id: 12, zone: 'none' }, // board game
  { id: 14, zone: 'none' }, // talking at school
]

/** How many cards of each zone one game deals (tricky cards first, then random). */
export const DP_DECK_PLAN: Readonly<Record<DpZone, number>> = { purpose: 4, background: 6, none: 5 }
export const DP_ACTIVITIES_PER_GAME = Object.values(DP_DECK_PLAN).reduce((sum, n) => sum + n, 0)

export type DpAction = 'delete' | 'hide' | 'change' | 'keep'
export const DP_ACTIONS: ReadonlyArray<DpAction> = ['delete', 'hide', 'change', 'keep']

export interface DpProfileRule {
  id: number
  /** The action the guide recommends. */
  best: DpAction
  /** Every action that protects the person well enough to score. */
  accept: ReadonlyArray<DpAction>
}

export const DP_PROFILE: ReadonlyArray<DpProfileRule> = [
  { id: 1, best: 'change', accept: ['change'] }, // real full name as profile name
  { id: 2, best: 'hide', accept: ['hide', 'delete'] }, // birthday
  { id: 3, best: 'delete', accept: ['delete', 'change'] }, // photo with house number
  { id: 4, best: 'hide', accept: ['hide', 'delete'] }, // school name
  { id: 5, best: 'keep', accept: ['keep'] }, // hobbies
  { id: 6, best: 'delete', accept: ['delete'] }, // home address
  { id: 7, best: 'delete', accept: ['delete'] }, // old unkind comment
  { id: 8, best: 'delete', accept: ['delete'] }, // phone number
  { id: 9, best: 'keep', accept: ['keep'] }, // pet photo
  { id: 10, best: 'delete', accept: ['delete'] }, // live location on every post
]

/** One profile clean-up: how many parts of each recommended action (random pick, then shuffled). */
export const DP_PROFILE_PLAN: Readonly<Record<DpAction, number>> = { delete: 2, hide: 1, change: 1, keep: 2 }
export const DP_PROFILE_PER_GAME = Object.values(DP_PROFILE_PLAN).reduce((sum, n) => sum + n, 0)

type Random = () => number

export const shuffle = <T>(items: ReadonlyArray<T>, random: Random = Math.random): T[] => {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const pick = <T extends { tricky?: boolean }>(pool: ReadonlyArray<T>, count: number, random: Random): T[] => {
  const tricky = shuffle(pool.filter((item) => item.tricky), random)
  const plain = shuffle(pool.filter((item) => !item.tricky), random)
  return [...tricky, ...plain].slice(0, count)
}

/** Stage 1: a balanced, shuffled set of activities. */
export const dealActivities = (random: Random = Math.random): DpActivityRule[] => {
  const dealt: DpActivityRule[] = []
  for (const zone of DP_ZONES) {
    dealt.push(...pick(DP_ACTIVITIES.filter((item) => item.zone === zone), DP_DECK_PLAN[zone], random))
  }
  return shuffle(dealt, random)
}

/** Stage 2: a balanced, shuffled set of profile parts. */
export const dealProfile = (random: Random = Math.random): DpProfileRule[] => {
  const dealt: DpProfileRule[] = []
  for (const action of DP_ACTIONS) {
    dealt.push(...shuffle(DP_PROFILE.filter((item) => item.best === action), random).slice(0, DP_PROFILE_PLAN[action]))
  }
  return shuffle(dealt, random)
}

export const isProfileRight = (rule: DpProfileRule, choice: DpAction): boolean => rule.accept.includes(choice)

export type DpRank = 'great' | 'good' | 'practise'

/** Based on the share answered right on the first try, over both stages. */
export const rankFor = (firstTry: number, total: number): DpRank => {
  const share = total > 0 ? firstTry / total : 0
  if (share >= 0.85) return 'great'
  if (share >= 0.55) return 'good'
  return 'practise'
}
