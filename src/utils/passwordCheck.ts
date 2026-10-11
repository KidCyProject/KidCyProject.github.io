/**
 * Password Lab rules.
 *
 * Follows the KidCy handbook: a password is strong because of its length, how hard it is to
 * guess, that it is secret and that it is used for one account only — NOT because of how many
 * kinds of characters it contains. A passphrase of several unrelated words is the recommended way
 * to get there.
 *
 * Everything runs in the browser. Nothing typed into the lab is stored or sent anywhere.
 */

export type PasswordCriterion = 'length' | 'personal' | 'common' | 'words' | 'unique'

export const MIN_LENGTH = 15
export const MIN_WORDS = 4

export interface PasswordContext {
  /** Facts about the practice persona (name, pet, birth year…) that must stay out of the password. */
  personalClues: ReadonlyArray<string>
  /** Extra common words for the current language (any case, with or without diacritics). */
  commonWords: ReadonlyArray<string>
  /** Passwords accepted in earlier rounds of this run. */
  previous: ReadonlyArray<string>
}

export interface PasswordResult {
  met: Record<PasswordCriterion, boolean>
  /** The persona fact found in the password, if any (shown in the hint). */
  clue: string | null
}

// Words and patterns attackers try first (language-neutral core; the page adds local ones).
const CORE_COMMON_WORDS = [
  'password', 'qwerty', 'qwertz', 'azerty', 'letmein', 'iloveyou', 'admin', 'welcome', 'login', 'master',
  'dragon', 'monkey', 'football', 'soccer', 'minecraft', 'roblox', 'fortnite', 'princess', 'sunshine',
  'superman', 'batman', 'pokemon', 'starwars', 'hello', 'secret', 'computer', 'summer', 'winter', 'school',
  'freedom', 'shadow',
]

const KEYBOARD_ROWS = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm', 'qwertzuiop', 'yxcvbnm', '1234567890']

const LEET: Record<string, string> = { '0': 'o', '1': 'i', '3': 'e', '4': 'a', '5': 's', '7': 't', '@': 'a', '$': 's', '!': 'i' }

/** Lower-case, without diacritics (ž → z, ß → ss, ø → o …). */
const fold = (text: string): string =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/ß/g, 'ss')
    .replace(/ø/g, 'o')
    .replace(/æ/g, 'ae')

/** Letters and digits only. */
const squash = (text: string): string => fold(text).replace(/[^\p{L}\p{N}]/gu, '')

/** Like squash, but "p@ssw0rd" is read as "password". */
const leetSquash = (text: string): string =>
  fold(text)
    .replace(/[013457@$!]/g, (c) => LEET[c])
    .replace(/[^\p{L}\p{N}]/gu, '')

const markAll = (haystack: string, needle: string, cover: boolean[]): void => {
  if (!needle) return
  let at = haystack.indexOf(needle)
  while (at !== -1) {
    for (let i = at; i < at + needle.length; i++) cover[i] = true
    at = haystack.indexOf(needle, at + 1)
  }
}

const share = (cover: boolean[]): number => (cover.length ? cover.filter(Boolean).length / cover.length : 0)

/** Runs like "aaa", "1234", "dcba" (same character 3+ times, or 4+ steps up or down). */
const markRuns = (text: string, cover: boolean[]): void => {
  for (const match of text.matchAll(/(.)\1{2,}/gu)) {
    for (let i = match.index; i < match.index + match[0].length; i++) cover[i] = true
  }
  for (const step of [1, -1]) {
    let start = 0
    for (let i = 1; i <= text.length; i++) {
      const continues = i < text.length && text.charCodeAt(i) - text.charCodeAt(i - 1) === step
      if (continues) continue
      if (i - start >= 4) for (let k = start; k < i; k++) cover[k] = true
      start = i
    }
  }
}

/** True when the password is mostly made of things that are tried first. */
export const isPredictable = (password: string, extraCommonWords: ReadonlyArray<string> = []): boolean => {
  const plain = squash(password)
  if (!plain) return password.length > 0 // only symbols (e.g. "!!!!!!!!") is predictable too

  // The same unit repeated: "passwordpassword", "abababab"
  if (plain.length >= 4 && plain.length <= 300 && /^(.+?)\1+$/u.test(plain)) return true

  // 1) common words / names (also with 0→o, 1→i, @→a … swaps)
  const leet = leetSquash(password)
  const words = [...CORE_COMMON_WORDS, ...extraCommonWords].map(squash).filter((w) => w.length >= 3)
  const wordCover = new Array<boolean>(leet.length).fill(false)
  words.forEach((w) => markAll(leet, w, wordCover))

  // 2) number and keyboard patterns: 1234, aaaa, 2008, qwerty
  const patternCover = new Array<boolean>(plain.length).fill(false)
  markRuns(plain, patternCover)
  for (const year of plain.matchAll(/(?:19|20)\d{2}/g)) {
    for (let i = year.index; i < year.index + 4; i++) patternCover[i] = true
  }
  for (const row of KEYBOARD_ROWS) {
    for (const line of [row, [...row].reverse().join('')]) {
      for (let len = line.length; len >= 4; len--) {
        for (let from = 0; from + len <= line.length; from++) markAll(plain, line.slice(from, from + len), patternCover)
      }
    }
  }

  return Math.max(share(wordCover), share(patternCover)) >= 0.5
}

/** Number of different words (3+ letters). Words may be separated by anything, or by CamelCase. */
export const countWords = (password: string): number => {
  const tokens = password
    .replace(/(\p{Ll})(\p{Lu})/gu, '$1 $2')
    .split(/[^\p{L}]+/u)
    .map(fold)
    .filter((w) => [...w].length >= 3)
  return new Set(tokens).size
}

/** The first persona fact found in the password (returned as originally written), or null. */
export const findClue = (password: string, clues: ReadonlyArray<string>): string | null => {
  const plain = squash(password)
  const leet = leetSquash(password)
  for (const clue of clues) {
    const needle = squash(clue)
    if (needle.length < 3) continue
    if (plain.includes(needle) || leet.includes(leetSquash(clue))) return clue
  }
  return null
}

const longestCommonSubstring = (a: string, b: string): number => {
  let best = 0
  let previous = new Array<number>(b.length + 1).fill(0)
  for (let i = 1; i <= a.length; i++) {
    const current = new Array<number>(b.length + 1).fill(0)
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        current[j] = previous[j - 1] + 1
        if (current[j] > best) best = current[j]
      }
    }
    previous = current
  }
  return best
}

/** Same password, or the same one with small changes ("violet lantern otter meadow" → "…harbor"). */
export const isTooSimilar = (a: string, b: string): boolean => {
  const x = squash(a)
  const y = squash(b)
  if (!x || !y) return false
  if (x === y) return true
  const shared = longestCommonSubstring(x, y)
  return shared >= 8 || shared / Math.min(x.length, y.length) >= 0.6
}

export const evaluatePassword = (password: string, context: PasswordContext): PasswordResult => {
  const typed = password.length > 0
  const clue = typed ? findClue(password, context.personalClues) : null
  return {
    clue,
    met: {
      length: [...password].length >= MIN_LENGTH,
      personal: typed && clue === null,
      common: typed && !isPredictable(password, context.commonWords),
      words: countWords(password) >= MIN_WORDS,
      unique: typed && !context.previous.some((earlier) => isTooSimilar(password, earlier)),
    },
  }
}
