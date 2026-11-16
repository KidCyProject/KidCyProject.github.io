#!/usr/bin/env node
// Checks every internal link of the built site (dist/): pages, downloads, images,
// videos, subtitles. Run after `npm run build`:  npm run check:links
//
// ZIP packages are built by scripts/generate-zips.sh at deploy time. When they are
// present in dist/ they are checked like any other file. When they are not (a local
// build), the script works out whether the zip *would* be created, using the same
// rule as generate-zips.sh: a language zip exists when its folder holds at least one
// file that is not inside another language's folder.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const DIST = 'dist'
const LANGS = ['en', 'cs', 'no', 'lt', 'de']

if (!existsSync(DIST)) {
  console.error('dist/ not found — run "npm run build" first.')
  process.exit(2)
}

const walk = (dir, out = []) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) walk(path, out)
    else out.push(path)
  }
  return out
}

/** Does `dir` hold a file that would go into the `lang` zip? */
const hasFilesFor = (dir, lang) => {
  if (!existsSync(dir)) return false
  const visit = (current) =>
    readdirSync(current).some((name) => {
      const path = join(current, name)
      if (statSync(path).isDirectory()) return LANGS.includes(name) && name !== lang ? false : visit(path)
      return !name.endsWith('.zip') && name !== '.DS_Store'
    })
  return visit(dir)
}

/** Would generate-zips.sh create this zip? `path` is site-absolute, e.g. /materials/malware/part1/part1-de.zip */
const zipWouldExist = (path) => {
  const match = path.match(/^\/materials\/([^/]+)\/(?:([^/]+)\/)?([^/]+)-(en|cs|no|lt|de)\.zip$/)
  if (!match) return false
  const [, module, folder, name, lang] = match
  const moduleDir = join(DIST, 'materials', module)
  if (folder) return name === folder && hasFilesFor(join(moduleDir, folder), lang)
  if (name !== module) return false
  if (module === 'introduction') return hasFilesFor(moduleDir, lang)
  // "all materials" zip = the language's part zips + teaching guide zip
  return (
    existsSync(moduleDir) &&
    readdirSync(moduleDir).some(
      (entry) => (/^part\d+$/.test(entry) || entry === 'teaching-guide') && hasFilesFor(join(moduleDir, entry), lang),
    )
  )
}

const targetExists = (path) => {
  const file = join(DIST, decodeURIComponent(path))
  if (existsSync(file)) return statSync(file).isFile() || existsSync(join(file, 'index.html'))
  if (path.endsWith('.zip')) return zipWouldExist(path)
  return false
}

const ATTRIBUTE = /\s(?:href|src|poster|data-src)=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g
const broken = new Map() // target → pages
let checked = 0

const pages = walk(DIST).filter((file) => file.endsWith('.html'))
for (const page of pages) {
  const html = readFileSync(page, 'utf8')
  const targets = new Set()
  for (const match of html.matchAll(ATTRIBUTE)) {
    const raw = (match[1] ?? match[2] ?? match[3] ?? '').replaceAll('&amp;', '&')
    if (!raw.startsWith('/') || raw.startsWith('//')) continue // external, relative, mailto:, #anchor
    targets.add(raw.split('#')[0].split('?')[0])
  }
  for (const target of targets) {
    checked++
    if (!targetExists(target)) {
      if (!broken.has(target)) broken.set(target, [])
      broken.get(target).push('/' + relative(DIST, page))
    }
  }
}

console.log(`Checked ${checked} internal links on ${pages.length} pages.`)
if (broken.size === 0) {
  console.log('No broken links.')
  process.exit(0)
}

console.error(`\n${broken.size} broken link target(s):\n`)
for (const [target, from] of [...broken].sort(([a], [b]) => a.localeCompare(b))) {
  console.error(`  ${target}`)
  console.error(`      linked from ${from.length} page(s), e.g. ${from[0]}`)
}
process.exit(1)
