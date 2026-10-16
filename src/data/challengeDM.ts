/**
 * Digital Misuse challenge ("Choose your path" stories) — game mechanics.
 *
 * Only language-neutral facts live here: the branching of every story, the mood of each step, the stars
 * and the live points of each choice. All text (titles, story steps, choices, lessons) is in the
 * translation files (`challengeDM.stories`), matched by position, so every language plays the same story.
 */

export type DmStructChoice = { next: string; points: number }
export type DmStructStory = { id: number; sensitive?: true; nodes: Record<string, DmStructNode> }
export type DmStructNode = {
  mood: string
  ending?: true
  type?: 'good' | 'okay' | 'bad'
  stars?: number
  choices?: DmStructChoice[]
}

export type DmChoice = { text: string; next: string; points: number }
export type DmStoryNode = {
  text: string
  mood: string
  choices?: DmChoice[]
  ending?: true
  type?: 'good' | 'okay' | 'bad'
  stars?: number
  title?: string
  lesson?: string
}
export type DmStory = {
  id: number
  sensitive?: true
  title: string
  emoji: string
  topic: string
  nodes: Record<string, DmStoryNode>
}

// ── Story structure (game mechanics — not translated) ──────────────────────
// Star rule: good = 3, okay = 2, bad = 1. 0 stars only when the player hands over photos, an address
// or a password. `points` is live per-choice feedback ("Points this run"); it does not decide the stars.
// `sensitive` stories (private photos, strangers asking for your address) are left out unless the player
// switches them on, and they open with a content note.
export const DM_STORY_STRUCTURE: DmStructStory[] = [
  { id: 1, nodes: {
    start:  { mood: 'worried',   choices: [{ next: 'end_a',  points: 0 }, { next: 'mid_b',  points: 1 }, { next: 'mid_c',  points: 2 }] },
    end_a:  { mood: 'bad',       ending: true, type: 'bad',  stars: 1 },
    mid_b:  { mood: 'worried',   choices: [{ next: 'end_b1', points: 0 }, { next: 'end_b2', points: 2 }] },
    end_b1: { mood: 'bad',       ending: true, type: 'bad',  stars: 1 },
    end_b2: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    mid_c:  { mood: 'supportive',choices: [{ next: 'end_c1', points: 2 }, { next: 'end_c2', points: 0 }] },
    end_c1: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    end_c2: { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
  }},
  { id: 2, nodes: {
    start:  { mood: 'worried',   choices: [{ next: 'end_a',  points: 0 }, { next: 'mid_b',  points: 1 }, { next: 'mid_c',  points: 2 }] },
    end_a:  { mood: 'bad',       ending: true, type: 'bad',  stars: 1 },
    mid_b:  { mood: 'worried',   choices: [{ next: 'end_b1', points: 0 }, { next: 'end_b2', points: 2 }] },
    end_b1: { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
    end_b2: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    mid_c:  { mood: 'supportive',choices: [{ next: 'end_c1', points: 2 }, { next: 'end_c2', points: 1 }] },
    end_c1: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    end_c2: { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
  }},
  { id: 3, nodes: {
    start:  { mood: 'worried',   choices: [{ next: 'end_a',  points: 0 }, { next: 'mid_b',  points: 1 }, { next: 'mid_c',  points: 2 }] },
    end_a:  { mood: 'bad',       ending: true, type: 'bad',  stars: 1 },
    mid_b:  { mood: 'worried',   choices: [{ next: 'end_b1', points: 0 }, { next: 'end_b2', points: 2 }] },
    end_b1: { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
    end_b2: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    mid_c:  { mood: 'supportive',choices: [{ next: 'end_c1', points: 2 }, { next: 'end_c2', points: 0 }] },
    end_c1: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    end_c2: { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
  }},
  { id: 4, nodes: {
    start:  { mood: 'worried',   choices: [{ next: 'end_a',  points: 0 }, { next: 'mid_b',  points: 1 }, { next: 'mid_c',  points: 2 }] },
    end_a:  { mood: 'bad',       ending: true, type: 'bad',  stars: 1 },
    mid_b:  { mood: 'worried',   choices: [{ next: 'end_b1', points: 2 }, { next: 'end_b2', points: 0 }] },
    end_b1: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    end_b2: { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
    mid_c:  { mood: 'supportive',choices: [{ next: 'end_c1', points: 2 }, { next: 'end_c2', points: 1 }] },
    end_c1: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    end_c2: { mood: 'good',      ending: true, type: 'good', stars: 3 },
  }},
  { id: 5, nodes: {
    start:  { mood: 'sad',       choices: [{ next: 'end_a',  points: 0 }, { next: 'end_b',  points: 0 }, { next: 'mid_c',  points: 2 }] },
    end_a:  { mood: 'bad',       ending: true, type: 'bad',  stars: 1 },
    end_b:  { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
    mid_c:  { mood: 'supportive',choices: [{ next: 'end_c1', points: 2 }, { next: 'end_c2', points: 2 }] },
    end_c1: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    end_c2: { mood: 'good',      ending: true, type: 'good', stars: 3 },
  }},
  { id: 6, sensitive: true, nodes: {
    start:  { mood: 'worried',   choices: [{ next: 'end_a',  points: 0 }, { next: 'mid_b',  points: 1 }, { next: 'mid_c',  points: 2 }] },
    end_a:  { mood: 'bad',       ending: true, type: 'bad',  stars: 0 },
    mid_b:  { mood: 'worried',   choices: [{ next: 'end_b1', points: 0 }, { next: 'end_b2', points: 2 }] },
    end_b1: { mood: 'bad',       ending: true, type: 'bad',  stars: 0 },
    end_b2: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    mid_c:  { mood: 'supportive',choices: [{ next: 'end_c1', points: 2 }, { next: 'end_c2', points: 1 }] },
    end_c1: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    end_c2: { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
  }},
  { id: 7, sensitive: true, nodes: {
    start:  { mood: 'worried',   choices: [{ next: 'end_a',  points: 0 }, { next: 'mid_b',  points: 1 }, { next: 'mid_c',  points: 2 }] },
    end_a:  { mood: 'bad',       ending: true, type: 'bad',  stars: 0 },
    mid_b:  { mood: 'worried',   choices: [{ next: 'end_b1', points: 0 }, { next: 'end_b2', points: 2 }] },
    end_b1: { mood: 'bad',       ending: true, type: 'bad',  stars: 1 },
    end_b2: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    mid_c:  { mood: 'supportive',choices: [{ next: 'end_c1', points: 2 }, { next: 'end_c2', points: 0 }] },
    end_c1: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    end_c2: { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
  }},
  { id: 8, nodes: {
    start:  { mood: 'worried',   choices: [{ next: 'end_a',  points: 0 }, { next: 'mid_b',  points: 1 }, { next: 'mid_c',  points: 2 }] },
    end_a:  { mood: 'bad',       ending: true, type: 'bad',  stars: 1 },
    mid_b:  { mood: 'worried',   choices: [{ next: 'end_b1', points: 2 }, { next: 'end_b2', points: 0 }] },
    end_b1: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    end_b2: { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
    mid_c:  { mood: 'supportive',choices: [{ next: 'end_c1', points: 2 }, { next: 'end_c2', points: 1 }] },
    end_c1: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    end_c2: { mood: 'good',      ending: true, type: 'good', stars: 3 },
  }},
  { id: 9, nodes: {
    start:  { mood: 'worried',   choices: [{ next: 'mid_a',  points: 0 }, { next: 'end_b',  points: 0 }, { next: 'mid_c',  points: 2 }] },
    mid_a:  { mood: 'worried',   choices: [{ next: 'end_a1', points: 0 }, { next: 'end_a2', points: 1 }] },
    end_a1: { mood: 'bad',       ending: true, type: 'bad',  stars: 1 },
    end_a2: { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
    end_b:  { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
    mid_c:  { mood: 'supportive',choices: [{ next: 'end_c1', points: 2 }, { next: 'end_c2', points: 1 }] },
    end_c1: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    end_c2: { mood: 'good',      ending: true, type: 'good', stars: 3 },
  }},
  { id: 10, nodes: {
    start:  { mood: 'worried',   choices: [{ next: 'end_a',  points: 0 }, { next: 'mid_b',  points: 0 }, { next: 'mid_c',  points: 2 }] },
    end_a:  { mood: 'bad',       ending: true, type: 'bad',  stars: 0 },
    mid_b:  { mood: 'worried',   choices: [{ next: 'end_b1', points: 0 }, { next: 'end_b2', points: 2 }] },
    end_b1: { mood: 'bad',       ending: true, type: 'bad',  stars: 0 },
    end_b2: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    mid_c:  { mood: 'worried',   choices: [{ next: 'end_c1', points: 2 }, { next: 'end_c2', points: 0 }] },
    end_c1: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    end_c2: { mood: 'bad',       ending: true, type: 'bad',  stars: 0 },
  }},
  // 11 disinformation · 12 misinformation · 13 harmful influencer · 14 algorithm and fake news
  { id: 11, nodes: {
    start:  { mood: 'worried',   choices: [{ next: 'end_a',  points: 0 }, { next: 'mid_b',  points: 1 }, { next: 'mid_c',  points: 2 }] },
    end_a:  { mood: 'bad',       ending: true, type: 'bad',  stars: 1 },
    mid_b:  { mood: 'worried',   choices: [{ next: 'end_b1', points: 0 }, { next: 'end_b2', points: 2 }] },
    end_b1: { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
    end_b2: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    mid_c:  { mood: 'supportive',choices: [{ next: 'end_c1', points: 2 }, { next: 'end_c2', points: 1 }] },
    end_c1: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    end_c2: { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
  }},
  { id: 12, nodes: {
    start:  { mood: 'worried',   choices: [{ next: 'end_a',  points: 0 }, { next: 'mid_b',  points: 1 }, { next: 'mid_c',  points: 2 }] },
    end_a:  { mood: 'bad',       ending: true, type: 'bad',  stars: 1 },
    mid_b:  { mood: 'worried',   choices: [{ next: 'end_b1', points: 0 }, { next: 'end_b2', points: 2 }] },
    end_b1: { mood: 'bad',       ending: true, type: 'bad',  stars: 1 },
    end_b2: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    mid_c:  { mood: 'supportive',choices: [{ next: 'end_c1', points: 2 }, { next: 'end_c2', points: 1 }] },
    end_c1: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    end_c2: { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
  }},
  { id: 13, nodes: {
    start:  { mood: 'worried',   choices: [{ next: 'end_a',  points: 0 }, { next: 'mid_b',  points: 1 }, { next: 'mid_c',  points: 2 }] },
    end_a:  { mood: 'bad',       ending: true, type: 'bad',  stars: 1 },
    mid_b:  { mood: 'worried',   choices: [{ next: 'end_b1', points: 0 }, { next: 'end_b2', points: 2 }] },
    end_b1: { mood: 'bad',       ending: true, type: 'bad',  stars: 1 },
    end_b2: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    mid_c:  { mood: 'supportive',choices: [{ next: 'end_c1', points: 2 }, { next: 'end_c2', points: 1 }] },
    end_c1: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    end_c2: { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
  }},
  { id: 14, nodes: {
    start:  { mood: 'worried',   choices: [{ next: 'end_a',  points: 0 }, { next: 'mid_b',  points: 1 }, { next: 'mid_c',  points: 2 }] },
    end_a:  { mood: 'bad',       ending: true, type: 'bad',  stars: 1 },
    mid_b:  { mood: 'worried',   choices: [{ next: 'end_b1', points: 1 }, { next: 'end_b2', points: 0 }] },
    end_b1: { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
    end_b2: { mood: 'bad',       ending: true, type: 'bad',  stars: 1 },
    mid_c:  { mood: 'supportive',choices: [{ next: 'end_c1', points: 2 }, { next: 'end_c2', points: 1 }] },
    end_c1: { mood: 'good',      ending: true, type: 'good', stars: 3 },
    end_c2: { mood: 'okay',      ending: true, type: 'okay', stars: 2 },
  }},
]
