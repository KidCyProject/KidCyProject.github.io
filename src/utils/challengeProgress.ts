/**
 * Progress of the seven interactive challenges, kept in the browser only.
 *
 * What is stored: for each challenge the best result (percent and points), how many times it was finished
 * and the first and last date. No name, no answers, nothing is sent anywhere. Everything is wrapped in
 * try/catch: in a private window, or with site data blocked, the challenges still work and the result is
 * only kept for the current visit.
 *
 * Challenges call `recordResult(id, points, max)` when a run ends. A `kidcy:progress` event tells the
 * shared toast (ChallengeProgress.astro) to say that the result was saved.
 */

export const CHALLENGE_IDS = ['dc', 'ap', 'at', 'dp', 'se', 'mw', 'dm'] as const
export type ChallengeId = (typeof CHALLENGE_IDS)[number]

export interface ChallengeRecord {
  /** Best result, in percent (0–100). */
  best: number
  /** Points and maximum of that best run. */
  points: number
  max: number
  /** How many runs were finished. */
  plays: number
  /** First and last time a run was finished (YYYY-MM-DD). */
  first: string
  last: string
}

export interface ProgressData {
  v: 1
  records: Partial<Record<ChallengeId, ChallengeRecord>>
}

export interface ProgressEventDetail {
  id: ChallengeId
  record: ChallengeRecord
  /** Percent of this run. */
  percent: number
  /** The best percent before this run (null the first time). */
  previousBest: number | null
  /** True when this run is the best so far. */
  isBest: boolean
  /** False when the browser would not store anything. */
  stored: boolean
}

export const STORAGE_KEY = 'kidcy-progress-v1'
export const PROGRESS_EVENT = 'kidcy:progress'

const empty = (): ProgressData => ({ v: 1, records: {} })

// Fallback for the current visit when storage is blocked
let memory: ProgressData = empty()

const isRecord = (value: unknown): value is ChallengeRecord => {
  if (!value || typeof value !== 'object') return false
  const record = value as Record<string, unknown>
  return (
    typeof record.best === 'number' &&
    typeof record.points === 'number' &&
    typeof record.max === 'number' &&
    typeof record.plays === 'number' &&
    typeof record.first === 'string' &&
    typeof record.last === 'string'
  )
}

/** Reads the saved progress. Anything that does not look right is ignored. */
export const readProgress = (): ProgressData => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return memory
    const parsed = JSON.parse(raw) as { v?: number; records?: Record<string, unknown> }
    if (parsed?.v !== 1 || typeof parsed.records !== 'object' || parsed.records === null) return memory
    const records: ProgressData['records'] = {}
    for (const id of CHALLENGE_IDS) {
      const candidate = parsed.records[id]
      if (isRecord(candidate)) records[id] = candidate
    }
    return { v: 1, records }
  } catch {
    return memory
  }
}

const writeProgress = (data: ProgressData): boolean => {
  memory = data
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    return true
  } catch {
    return false
  }
}

const today = (): string => new Date().toISOString().slice(0, 10)

const toPercent = (points: number, max: number): number => (max > 0 ? Math.round((points / max) * 100) : 0)

/** Stars for a percent: 3 from 85 %, 2 from 60 %, otherwise 1. */
export const starsFor = (percent: number): 1 | 2 | 3 => (percent >= 85 ? 3 : percent >= 60 ? 2 : 1)

export const completedCount = (data: ProgressData): number =>
  CHALLENGE_IDS.filter((id) => data.records[id] !== undefined).length

/** Saves a finished run and announces it. Returns the updated record. */
export const recordResult = (id: ChallengeId, points: number, max: number): ChallengeRecord => {
  const data = readProgress()
  const previous = data.records[id]
  const percent = toPercent(Math.max(0, Math.min(points, max)), max)
  const isBest = !previous || percent >= previous.best
  const record: ChallengeRecord = {
    best: isBest ? percent : previous.best,
    points: isBest ? points : previous.points,
    max: isBest ? max : previous.max,
    plays: (previous?.plays ?? 0) + 1,
    first: previous?.first ?? today(),
    last: today(),
  }
  const stored = writeProgress({ v: 1, records: { ...data.records, [id]: record } })
  window.dispatchEvent(
    new CustomEvent<ProgressEventDetail>(PROGRESS_EVENT, {
      detail: { id, record, percent, previousBest: previous?.best ?? null, isBest, stored },
    }),
  )
  return record
}

export const clearProgress = (): void => {
  memory = empty()
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    /* storage blocked: nothing to clear */
  }
}

/** True when the browser lets the site keep progress between visits. */
export const canStoreProgress = (): boolean => {
  try {
    const probe = `${STORAGE_KEY}-probe`
    window.localStorage.setItem(probe, '1')
    window.localStorage.removeItem(probe)
    return true
  } catch {
    return false
  }
}
