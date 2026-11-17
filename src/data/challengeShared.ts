// Helpers shared by the challenge answer keys (src/data/challenge*.ts).

/** Source of random numbers in [0, 1). Tests pass a seeded one to get the same deal every time. */
export type Random = () => number

/** A shuffled copy (Fisher–Yates); the original list is left untouched. */
export const shuffle = <T>(items: ReadonlyArray<T>, random: Random = Math.random): T[] => {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

/** Result wording used by the sorting and quiz challenges. */
export type ThreeStepRank = 'great' | 'good' | 'practise'

/** 85 % or more → great, 55 % or more → good, otherwise practise. */
export const threeStepRank = (points: number, total: number): ThreeStepRank => {
  const share = total > 0 ? points / total : 0
  if (share >= 0.85) return 'great'
  if (share >= 0.55) return 'good'
  return 'practise'
}
