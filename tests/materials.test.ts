import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { modulePartsData } from '../src/data/moduleParts'
import { modules, introMaterials } from '../src/data/modules'
import { VIDEO_META, isoDuration } from '../src/data/videoMeta'
import { hubGame, moduleGames, getGameVideos, getHubVideo, GUIDE_IDS, getGuideFiles } from '../src/data/games'

/**
 * Every file the site links to must exist in public/.
 *
 * ZIP packages are skipped: they are not committed, scripts/generate-zips.sh builds
 * them at deploy time (scripts/check-links.mjs checks them in the built site).
 */

const PUBLIC_DIR = join(process.cwd(), 'public')

/** All strings in a data structure that look like a site-absolute file path. */
const collectPaths = (value: unknown, found = new Set<string>()): Set<string> => {
  if (typeof value === 'string') {
    if (/^\/(materials|images|fonts)\//.test(value)) found.add(value)
  } else if (Array.isArray(value)) {
    value.forEach((item) => collectPaths(item, found))
  } else if (value !== null && typeof value === 'object') {
    Object.values(value).forEach((child) => collectPaths(child, found))
  }
  return found
}

const missingFiles = (value: unknown): string[] =>
  [...collectPaths(value)]
    .filter((path) => !path.endsWith('.zip'))
    .filter((path) => !existsSync(join(PUBLIC_DIR, decodeURI(path))))
    .sort()

describe('linked files exist in public/', () => {
  it.each(Object.keys(modulePartsData))('module parts: %s', (moduleId) => {
    expect(missingFiles(modulePartsData[moduleId as keyof typeof modulePartsData])).toEqual([])
  })

  it('module list (teaching guides, images)', () => {
    expect(missingFiles(modules)).toEqual([])
    expect(missingFiles(introMaterials)).toEqual([])
  })

  it('games (place files, videos, guides)', () => {
    const gameData = [
      hubGame,
      moduleGames,
      getHubVideo(),
      modules.map((mod) => getGameVideos(mod.id)),
      GUIDE_IDS.map((id) => getGuideFiles(id)),
    ]
    expect(missingFiles(gameData)).toEqual([])
  })
})

describe('video facts for structured data', () => {
  const videos = Object.values(modulePartsData)
    .flat()
    .map((part) => part.assets?.featuredVideo?.videoSrc)
    .filter((src): src is string => !!src)

  it('every lesson video has a publication date and a length', () => {
    expect(videos.length).toBeGreaterThan(0)
    expect(videos.filter((src) => !VIDEO_META[src])).toEqual([])
    for (const meta of Object.values(VIDEO_META)) {
      expect(meta.published).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(meta.seconds).toBeGreaterThan(30)
    }
  })

  it('no entry is left over for a video that is gone', () => {
    expect(Object.keys(VIDEO_META).filter((src) => !videos.includes(src))).toEqual([])
  })

  it('writes durations the ISO 8601 way', () => {
    expect(isoDuration(251)).toBe('PT4M11S')
    expect(isoDuration(360)).toBe('PT6M0S')
  })
})
