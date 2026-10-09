import { existsSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { getModule } from './modules'
import type { ModuleId } from './modules'
import { MATERIAL_LANGUAGE_LABELS } from './moduleParts'
import type { MaterialLanguage } from './moduleParts'

/**
 * Downloadable Roblox place files (.rbxl) for the games.
 *
 * All files live flat in public/materials/games-hub/experiences/ (not in a module folder):
 * the hub (`home.rbxl`) links to every game, so it belongs to none of them.
 * Translations are built into each place, so there is one file per game.
 */
const GAMES_DIR = '/materials/games-hub/experiences'

export interface GameFile {
  /** Public URL of the .rbxl file. */
  href: string
  /** Download filename. */
  filename: string
  /** Size in bytes, read from disk at build time. */
  bytes: number
}

const fileSize = (filename: string): number => {
  try {
    return statSync(join(process.cwd(), 'public', GAMES_DIR, filename)).size
  } catch {
    return 0
  }
}

const gameFile = (filename: string): GameFile => ({
  href: `${GAMES_DIR}/${filename}`,
  filename,
  bytes: fileSize(filename),
})

/** The hub place — lets players join the other games. */
export const hubGame: GameFile = gameFile('home.rbxl')

/** One place file per module game. */
export const moduleGames: Partial<Record<ModuleId, GameFile>> = {
  at: gameFile('auth.rbxl'),
  dp: gameFile('data.rbxl'),
  se: gameFile('social.rbxl'),
  mw: gameFile('malware.rbxl'),
  dm: gameFile('abuse.rbxl'),
}

export const formatFileSize = (bytes: number, locale = 'en'): string => {
  if (bytes <= 0) return ''
  const mb = bytes / (1024 * 1024)
  const nf = new Intl.NumberFormat(locale, { maximumFractionDigits: mb < 10 ? 1 : 0 })
  return mb < 0.1 ? `${nf.format(bytes / 1024)} KB` : `${nf.format(mb)} MB`
}

// ── Video walkthroughs ────────────────────────────────────────────────────────
//
// public/materials/games-hub/videos/Roblox-Home.mp4                  hub walkthrough
// public/materials/games-hub/videos/<module slug>/Roblox-<Game>-<Part>.mp4
//   <Part> = Intro | MG<n> (minigame n) | Hints | Finale
//
// Videos are discovered from disk on every render, so adding a file is enough.
// Titles come from the translations (pages.hub.games.resources.videoKinds).

const VIDEOS_DIR = '/materials/games-hub/videos'
const publicPath = (...parts: string[]) => join(process.cwd(), 'public', ...parts)

export type GameVideoKind = 'intro' | 'minigame' | 'hints' | 'finale' | 'other'

export interface GameVideo {
  href: string
  filename: string
  bytes: number
  kind: GameVideoKind
  /** Minigame number (kind `minigame`), or the file name without extension (kind `other`). */
  label: string
}

const KIND_ORDER: Record<GameVideoKind, number> = { intro: 0, minigame: 1, hints: 2, finale: 3, other: 4 }

const parseVideo = (dir: string, filename: string): GameVideo => {
  const part = filename.replace(/\.mp4$/i, '').split('-').pop() ?? ''
  const mg = /^MG(\d+)$/i.exec(part)
  const kind: GameVideoKind = mg
    ? 'minigame'
    : /^intro$/i.test(part) ? 'intro'
    : /^hints$/i.test(part) ? 'hints'
    : /^finale$/i.test(part) ? 'finale'
    : 'other'
  return {
    href: `${dir}/${filename}`,
    filename,
    bytes: statSync(publicPath(dir, filename)).size,
    kind,
    label: mg ? String(Number(mg[1])) : filename.replace(/\.mp4$/i, ''),
  }
}

const listVideos = (dir: string): GameVideo[] => {
  try {
    return readdirSync(publicPath(dir))
      .filter(name => /\.mp4$/i.test(name))
      .map(name => parseVideo(dir, name))
      .sort((a, b) => KIND_ORDER[a.kind] - KIND_ORDER[b.kind] || a.label.localeCompare(b.label, 'en', { numeric: true }))
  } catch {
    return []
  }
}

/** Walkthrough videos of one module's game (empty if the module has none). */
export const getGameVideos = (moduleId: ModuleId): GameVideo[] => {
  const slug = getModule(moduleId)?.slug
  return slug ? listVideos(`${VIDEOS_DIR}/${slug}`) : []
}

/** Walkthrough of the Games Hub (`Roblox-Home.mp4`), if present. */
export const getHubVideo = (): GameVideo | undefined => {
  try {
    return statSync(publicPath(VIDEOS_DIR, 'Roblox-Home.mp4')).isFile() ? parseVideo(VIDEOS_DIR, 'Roblox-Home.mp4') : undefined
  } catch {
    return undefined
  }
}

// ── Guides (developer / teacher / student) ────────────────────────────────────
//
// Files go into the introductory materials, one folder per language:
//   public/materials/introduction/<lang>/Roblox_<Developer|Teacher|Student>_Guide[_<LANG>].<pdf|docx>
// English has no suffix; other languages append `_CS`, `_NO`, `_LT`, `_DE` (as the teaching guides do).
// Only files that exist are offered, so the page needs no change when a guide is added.

export const GUIDE_IDS = ['developer', 'teacher', 'student'] as const
export type GuideId = (typeof GUIDE_IDS)[number]

const GUIDE_BASENAMES: Record<GuideId, string> = {
  developer: 'Roblox_Developer_Guide',
  teacher: 'Roblox_Teacher_Guide',
  student: 'Roblox_Student_Guide',
}
const GUIDE_EXTENSIONS = ['pdf', 'docx'] as const
const GUIDES_DIR = '/materials/introduction'

export interface GuideFile {
  lang: MaterialLanguage
  href: string
  filename: string
  /** Upper-case file type, e.g. `PDF`. */
  type: string
}

/** Existing language versions of a guide, in the site's language order. */
export const getGuideFiles = (id: GuideId): GuideFile[] => {
  const files: GuideFile[] = []
  for (const lang of Object.keys(MATERIAL_LANGUAGE_LABELS) as MaterialLanguage[]) {
    const suffix = lang === 'en' ? '' : `_${lang.toUpperCase()}`
    for (const ext of GUIDE_EXTENSIONS) {
      const filename = `${GUIDE_BASENAMES[id]}${suffix}.${ext}`
      if (existsSync(publicPath(GUIDES_DIR, lang, filename))) {
        files.push({ lang, href: `${GUIDES_DIR}/${lang}/${filename}`, filename, type: ext.toUpperCase() })
        break
      }
    }
  }
  return files
}
