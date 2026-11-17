import { describe, expect, it } from 'vitest'
import { MIN_LENGTH, countWords, evaluatePassword, isPredictable, isTooSimilar } from '../src/data/challengeAT'
import { DC_DECK_PLAN, DC_POSTS, DC_POSTS_PER_GAME, dealPosts, rankFor as dcRank } from '../src/data/challengeDC'
import { SE_CASES_PER_GAME, SE_DECK_PLAN, SE_SCENARIOS, dealDeck, evaluateChoice, quizOptions, rankFor as seRank } from '../src/data/challengeSE'
import { MW_CASES_PER_GAME, MW_LEVEL_COUNT, dealGame, isRight } from '../src/data/challengeMW'
import { DP_ACTIVITIES_PER_GAME, DP_DECK_PLAN, DP_PROFILE_PER_GAME, dealActivities, dealProfile, isProfileRight } from '../src/data/challengeDP'
import { AP_TOTAL_QUESTIONS, dealQuestions } from '../src/data/challengeAP'
import { DM_STORY_STRUCTURE } from '../src/data/challengeDM'
import { shuffle, threeStepRank } from '../src/data/challengeShared'
import { fmt } from '../src/utils/challenge/text'

/** Repeatable "random" numbers, so a failing deal can be reproduced. */
const seeded = (seed: number) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296
  return seed / 4294967296
}
const SEEDS = [1, 2, 3, 42, 2026]

const countBy = <T, K extends string>(items: ReadonlyArray<T>, key: (item: T) => K) =>
  items.reduce<Record<string, number>>((acc, item) => ({ ...acc, [key(item)]: (acc[key(item)] ?? 0) + 1 }), {})

describe('Password Lab (authentication)', () => {
  const context = { personalClues: ['Alex', 'Rex', '2014'], commonWords: [], previous: [] }

  it('accepts a long passphrase of unrelated words', () => {
    const { met } = evaluatePassword('purple tractor sings loudly', context)
    expect(met).toEqual({ length: true, personal: true, common: true, words: true, unique: true })
  })

  it('rejects the "BlueTiger!92" model: character types do not replace length', () => {
    const { met } = evaluatePassword('BlueTiger!92', context)
    expect(met.length).toBe(false)
    expect('BlueTiger!92'.length).toBeLessThan(MIN_LENGTH)
  })

  it('finds facts about the persona', () => {
    const result = evaluatePassword('alex loves green apples daily', context)
    expect(result.met.personal).toBe(false)
    expect(result.clue?.toLowerCase()).toBe('alex')
  })

  it('flags predictable passwords', () => {
    expect(isPredictable('password')).toBe(true)
    expect(isPredictable('qwertyuiop')).toBe(true)
    expect(isPredictable('purple tractor sings loudly')).toBe(false)
  })

  it('counts words and spots reuse across rounds', () => {
    expect(countWords('purple tractor sings loudly')).toBe(4)
    expect(isTooSimilar('purple tractor sings loudly', 'purple tractor sings loudly!')).toBe(true)
    expect(isTooSimilar('purple tractor sings loudly', 'seven clouds drink lemonade')).toBe(false)
    const again = evaluatePassword('purple tractor sings loudly', { ...context, previous: ['purple tractor sings loudly'] })
    expect(again.met.unique).toBe(false)
  })

  it('an empty field meets nothing', () => {
    expect(Object.values(evaluatePassword('', context).met).some(Boolean)).toBe(false)
  })
})

describe('deals follow their plan', () => {
  it.each(SEEDS)('digital citizenship, seed %i', (seed) => {
    const deck = dealPosts(seeded(seed))
    expect(deck).toHaveLength(DC_POSTS_PER_GAME)
    expect(new Set(deck.map((post) => post.id)).size).toBe(deck.length)
    expect(countBy(deck, (post) => post.zone)).toEqual(DC_DECK_PLAN)
  })

  it.each(SEEDS)('social engineering, seed %i', (seed) => {
    const deck = dealDeck(seeded(seed))
    expect(deck).toHaveLength(SE_CASES_PER_GAME)
    expect(new Set(deck.map((scenario) => scenario.id)).size).toBe(deck.length)
    expect(countBy(deck, (scenario) => scenario.best)).toEqual(SE_DECK_PLAN)
  })

  it.each(SEEDS)('malware, seed %i', (seed) => {
    const levels = dealGame(seeded(seed))
    expect(levels).toHaveLength(MW_LEVEL_COUNT)
    expect(levels.flat()).toHaveLength(MW_CASES_PER_GAME)
    // every case can be answered correctly
    levels.flat().forEach((entry) => expect(isRight(entry, entry.right)).toBe(true))
  })

  it.each(SEEDS)('data privacy, seed %i', (seed) => {
    const activities = dealActivities(seeded(seed))
    expect(activities).toHaveLength(DP_ACTIVITIES_PER_GAME)
    expect(countBy(activities, (activity) => activity.zone)).toEqual(DP_DECK_PLAN)
    const profile = dealProfile(seeded(seed))
    expect(profile).toHaveLength(DP_PROFILE_PER_GAME)
    // every profile part has at least one accepted answer
    profile.forEach((rule) => expect(rule.accept.some((choice) => isProfileRight(rule, choice))).toBe(true))
  })

  it.each(SEEDS)('attacker perspective, seed %i', (seed) => {
    const questions = dealQuestions(seeded(seed))
    expect(questions).toHaveLength(AP_TOTAL_QUESTIONS)
    // ids are numbered per kind ("motive 1", "defend 1")
    expect(new Set(questions.map((question) => `${question.kind}-${question.id}`)).size).toBe(questions.length)
    questions.forEach((question) => expect(question.options).toContain(question.answer))
  })
})

describe('answer pools are large enough for their plans', () => {
  it('digital citizenship', () => {
    for (const [zone, needed] of Object.entries(DC_DECK_PLAN)) {
      expect(DC_POSTS.filter((post) => post.zone === zone).length).toBeGreaterThanOrEqual(needed)
    }
  })
  it('social engineering', () => {
    for (const [action, needed] of Object.entries(SE_DECK_PLAN)) {
      expect(SE_SCENARIOS.filter((scenario) => scenario.best === action).length).toBeGreaterThanOrEqual(needed)
    }
  })
})

describe('scoring', () => {
  it('social engineering: asking an adult is never wrong', () => {
    for (const rule of SE_SCENARIOS) {
      expect(evaluateChoice(rule, rule.best)).toBe('best')
      expect(evaluateChoice(rule, 'check')).not.toBe('wrong')
    }
    const trick = SE_SCENARIOS.find((rule) => rule.best === 'report')!
    expect(evaluateChoice(trick, 'trust')).toBe('wrong')
    const normal = SE_SCENARIOS.find((rule) => rule.best === 'trust')!
    expect(evaluateChoice(normal, 'report')).toBe('wrong')
  })

  it('social engineering: quiz offers the right trick plus two others', () => {
    const options = quizOptions('fear', seeded(7))
    expect(options).toHaveLength(3)
    expect(new Set(options).size).toBe(3)
    expect(options).toContain('fear')
  })

  it('ranks rise with the score', () => {
    expect([0, 6, 9, 12].map((best) => seRank(best, 12))).toEqual(['rookie', 'junior', 'senior', 'master'])
    expect([0, 10, 16].map((firstTry) => dcRank(firstTry, 16))).toEqual(['practise', 'good', 'great'])
    expect(seRank(0, 0)).toBe('rookie')
  })
})

describe('Real Talk Stories (digital misuse) story graphs', () => {
  it.each(DM_STORY_STRUCTURE.map((story) => [story.id, story] as const))('story %i is complete', (_id, story) => {
    expect(story.nodes.start).toBeDefined()
    for (const [name, node] of Object.entries(story.nodes)) {
      if (node.ending) {
        expect(node.choices ?? [], `${name} is an ending`).toHaveLength(0)
        expect(node.type, `${name} needs a type`).toBeDefined()
      } else {
        expect(node.choices?.length ?? 0, `${name} needs choices`).toBeGreaterThan(0)
        // every choice leads to a node that exists
        node.choices!.forEach((choice) => expect(story.nodes[choice.next], `${name} → ${choice.next}`).toBeDefined())
      }
    }
    // every node can be reached from the start
    const reached = new Set<string>()
    const visit = (name: string) => {
      if (reached.has(name)) return
      reached.add(name)
      story.nodes[name].choices?.forEach((choice) => visit(choice.next))
    }
    visit('start')
    expect(Object.keys(story.nodes).filter((name) => !reached.has(name))).toEqual([])
  })
})

describe('shared helpers', () => {
  it('shuffle keeps every item and leaves the original alone', () => {
    const original = [1, 2, 3, 4, 5, 6, 7, 8]
    const mixed = shuffle(original, seeded(11))
    expect(original).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
    expect([...mixed].sort((a, b) => a - b)).toEqual(original)
    expect(mixed).not.toEqual(original)
    // same seed, same order
    expect(shuffle(original, seeded(11))).toEqual(mixed)
  })

  it('three-step rank: 85 % great, 55 % good', () => {
    expect([0, 54, 55, 84, 85, 100].map((points) => threeStepRank(points, 100))).toEqual([
      'practise', 'practise', 'good', 'good', 'great', 'great',
    ])
    expect(threeStepRank(5, 0)).toBe('practise')
  })

  it('fmt fills placeholders and drops unknown ones', () => {
    expect(fmt('{n} of {total}', { n: 3, total: 7 })).toBe('3 of 7')
    expect(fmt('Hello {name}!', {})).toBe('Hello !')
    expect(fmt(undefined, { n: 1 })).toBe('')
    expect(fmt('no placeholders')).toBe('no placeholders')
  })
})
