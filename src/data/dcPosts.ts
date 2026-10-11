/**
 * Digital Citizenship challenge ("Good or bad content to post?") — game mechanics.
 *
 * Only language-neutral facts live here: which zone a post belongs to and how a game is dealt.
 * All text (post, explanation, zone names) is in the translation files (`challengeDC`, matched by `id`).
 *
 * Four zones, built on the handbook's three questions — Is it safe? Is it kind? Is it about someone else?
 *   good    — kind, safe and about you
 *   private — personal details that could help a stranger find, contact or trick you      (safe)
 *   unkind  — could hurt, shame or leave someone out                                       (respect)
 *   ask     — about another person: post only if they agree, and respect a "no"            (responsible)
 */

export type DcZone = 'good' | 'private' | 'unkind' | 'ask'

export const DC_ZONES: ReadonlyArray<DcZone> = ['good', 'private', 'unkind', 'ask']

export interface DcPostRule {
  id: number
  zone: DcZone
}

export const DC_POSTS: ReadonlyArray<DcPostRule> = [
  // good to post
  { id: 2, zone: 'good' }, // hobby
  { id: 4, zone: 'good' }, // good grade
  { id: 7, zone: 'good' }, // school play
  { id: 8, zone: 'good' }, // own drawing
  { id: 10, zone: 'good' }, // favourite film
  { id: 12, zone: 'good' }, // learned to ride a bike
  { id: 14, zone: 'good' }, // new puppy
  { id: 18, zone: 'good' }, // kind birthday wish
  { id: 19, zone: 'good' }, // team win
  { id: 20, zone: 'good' }, // book tip
  // keep private
  { id: 1, zone: 'private' }, // home address
  { id: 3, zone: 'private' }, // password
  { id: 5, zone: 'private' }, // phone number
  { id: 6, zone: 'private' }, // home alone
  { id: 9, zone: 'private' }, // parent's card number
  { id: 11, zone: 'private' }, // full name
  { id: 13, zone: 'private' }, // locker code
  { id: 15, zone: 'private' }, // daily route
  { id: 16, zone: 'private' }, // house empty on holiday
  { id: 17, zone: 'private' }, // school name in a photo
  // not kind
  { id: 21, zone: 'unkind' }, // insulting a haircut
  { id: 22, zone: 'unkind' }, // leaving the new kid out
  { id: 23, zone: 'unkind' }, // sharing a secret told in trust
  { id: 24, zone: 'unkind' }, // mean comment on a drawing
  { id: 25, zone: 'unkind' }, // fake account to mock someone
  { id: 26, zone: 'unkind' }, // mocking how someone talks
  // ask first
  { id: 27, zone: 'ask' }, // party photo with friends
  { id: 28, zone: 'ask' }, // brother dancing
  { id: 29, zone: 'ask' }, // class photo
  { id: 30, zone: 'ask' }, // friend with spaghetti on her face
  { id: 31, zone: 'ask' }, // screenshot of a private chat
  { id: 32, zone: 'ask' }, // friend's own goal
]

/** How many posts of each zone one game deals (random pick, then shuffled). */
export const DC_DECK_PLAN: Readonly<Record<DcZone, number>> = { good: 4, private: 4, unkind: 4, ask: 4 }
export const DC_POSTS_PER_GAME = Object.values(DC_DECK_PLAN).reduce((sum, n) => sum + n, 0)

type Random = () => number

export const shuffle = <T>(items: ReadonlyArray<T>, random: Random = Math.random): T[] => {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

/** A balanced, shuffled set of posts for one game. */
export const dealPosts = (random: Random = Math.random): DcPostRule[] => {
  const dealt: DcPostRule[] = []
  for (const zone of DC_ZONES) {
    dealt.push(...shuffle(DC_POSTS.filter((post) => post.zone === zone), random).slice(0, DC_DECK_PLAN[zone]))
  }
  return shuffle(dealt, random)
}

export type DcRank = 'great' | 'good' | 'practise'

/** Based on posts sorted right on the first try. */
export const rankFor = (firstTry: number, total: number): DcRank => {
  const share = total > 0 ? firstTry / total : 0
  if (share >= 0.85) return 'great'
  if (share >= 0.55) return 'good'
  return 'practise'
}
