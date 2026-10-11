import { existsSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { formatFileSize } from '../data/games'

/**
 * File type and size for download lists (read from disk at build time).
 *
 * - `fileSize(href)` — size of one file, e.g. "440 KB". Used next to a language option, where the file is known.
 * - `fileMeta(hrefs)` — type and size of an item that may exist in several versions, e.g. "PDF · 380–440 KB":
 *   one type per distinct extension ("DOCX/PDF") and the size range from the smallest to the largest file.
 *
 * Material packages (zip) are made by scripts/generate-zips.sh when the site is deployed, so locally they are
 * usually missing. Their size is estimated from the folders they are made of (see `estimateZipBytes`).
 *
 * Files that are missing on disk (and cannot be estimated) are left out; when none exists nothing is shown
 * rather than a made-up size.
 */

const LANGS = ['en', 'cs', 'no', 'lt', 'de']
const MATERIALS_DIR = join(process.cwd(), 'public', 'materials')

const folderCache = new Map<string, number>()

/**
 * Total size of the files in a folder that go into the zip of one language. Same rule as
 * scripts/generate-zips.sh: a file is included unless it sits inside a folder named after another language
 * (en/cs/no/lt/de); files outside language folders (videos, shared images, …) count for every language.
 * Zips and .DS_Store are skipped.
 */
const folderBytes = (dir: string, lang: string): number => {
  const key = `${dir}|${lang}`
  const cached = folderCache.get(key)
  if (cached !== undefined) return cached

  let total = 0
  if (existsSync(dir)) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name)
      if (entry.isDirectory()) {
        if (LANGS.includes(entry.name) && entry.name !== lang) continue
        total += folderBytes(path, lang)
      } else if (entry.isFile() && entry.name !== '.DS_Store' && !entry.name.endsWith('.zip')) {
        total += statSync(path).size
      }
    }
  }
  folderCache.set(key, total)
  return total
}

/**
 * Estimated size of a generated package, from its URL:
 *   /materials/introduction/introduction-<lang>.zip            the introduction folder
 *   /materials/<module>/<module>-<lang>.zip                    all parts and the teaching guide of the module
 *   /materials/<module>/teaching-guide/teaching-guide-<lang>.zip   the teaching guide folder
 *   /materials/<module>/part<N>/part<N>-<lang>.zip             the part folder
 * Returns 0 when the URL is not such a package or its folder has nothing for that language.
 */
const estimateZipBytes = (href: string): number => {
  const parts = decodeURIComponent(href.split(/[?#]/)[0]).split('/').filter(Boolean)
  if (parts[0] !== 'materials' || parts.length < 3) return 0
  const lang = parts[parts.length - 1].match(/-([a-z]{2})\.zip$/)?.[1]
  if (!lang || !LANGS.includes(lang)) return 0

  const [, moduleName, ...rest] = parts.slice(0, -1)
  const moduleDir = join(MATERIALS_DIR, moduleName)
  if (rest.length > 0) return folderBytes(join(moduleDir, ...rest), lang)
  if (moduleName === 'introduction') return folderBytes(moduleDir, lang)

  // all materials = the language's part zips + teaching guide zip
  if (!existsSync(moduleDir)) return 0
  return readdirSync(moduleDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && (entry.name === 'teaching-guide' || /^part\d+$/.test(entry.name)))
    .reduce((sum, entry) => sum + folderBytes(join(moduleDir, entry.name), lang), 0)
}

const publicPath = (href: string) => join(process.cwd(), 'public', decodeURIComponent(href.split(/[?#]/)[0]))

/**
 * Size in bytes of a download, or 0 when the file does not exist. Packages (zip) are always estimated from their
 * folders, so the figure is the same locally and on the deployed site (where the zips exist) and a language
 * without any material shows no size. The estimate is a little above the real zip (documents compress slightly).
 */
const bytesOf = (href: string): number => {
  if (href.toLowerCase().split(/[?#]/)[0].endsWith('.zip')) return estimateZipBytes(href)
  const path = publicPath(href)
  return existsSync(path) ? statSync(path).size : 0
}

export const fileSize = (href: string | undefined, locale = 'en'): string => {
  if (!href) return ''
  return formatFileSize(bytesOf(href), locale)
}

/** "380 KB" + "440 KB" → "380–440 KB"; different units keep both ("880 KB–6,1 MB"). */
const sizeRange = (smallest: string, largest: string): string => {
  if (smallest === largest) return smallest
  const [lowNumber, lowUnit] = [smallest.slice(0, smallest.lastIndexOf(' ')), smallest.slice(smallest.lastIndexOf(' ') + 1)]
  const highUnit = largest.slice(largest.lastIndexOf(' ') + 1)
  return lowUnit === highUnit ? `${lowNumber}–${largest}` : `${smallest}–${largest}`
}

export const fileMeta = (hrefs: ReadonlyArray<string | undefined>, locale = 'en'): string => {
  const types: string[] = []
  let smallest = Infinity
  let largest = 0

  for (const href of hrefs) {
    if (!href) continue
    const bytes = bytesOf(href)
    if (bytes <= 0) continue
    const type = href.split(/[?#]/)[0].split('.').pop()?.toUpperCase()
    if (type && !types.includes(type)) types.push(type)
    smallest = Math.min(smallest, bytes)
    largest = Math.max(largest, bytes)
  }

  if (types.length === 0) return ''
  const low = formatFileSize(smallest, locale)
  const high = formatFileSize(largest, locale)
  return low && high ? `${types.join('/')} · ${sizeRange(low, high)}` : types.join('/')
}
