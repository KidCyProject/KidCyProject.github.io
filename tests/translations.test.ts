import { describe, expect, it } from 'vitest'
import { en } from '../src/i18n/translations/en'
import { cs } from '../src/i18n/translations/cs'
import { de } from '../src/i18n/translations/de'
import { lt } from '../src/i18n/translations/lt'
import { no } from '../src/i18n/translations/no'

/**
 * Every language must have the same shape as English.
 *
 * - A key missing in a language silently falls back to English on the site.
 * - A key that exists only in a language is dead text (usually a typo or a renamed key).
 * - Lists must have the same length: module parts, materials and activity steps are
 *   paired with their files by position, so a missing item shifts everything after it.
 */

type Shape = Map<string, 'string' | 'number' | 'boolean' | 'other' | `list:${number}`>

const shapeOf = (value: unknown, path = '', out: Shape = new Map()): Shape => {
  if (Array.isArray(value)) {
    out.set(path, `list:${value.length}`)
    value.forEach((item, i) => shapeOf(item, `${path}[${i}]`, out))
  } else if (value !== null && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) shapeOf(child, path ? `${path}.${key}` : key, out)
  } else {
    const type = typeof value
    out.set(path, type === 'string' || type === 'number' || type === 'boolean' ? type : 'other')
  }
  return out
}

// Keys that languages are allowed to add or drop: plural forms and the Password Lab's
// list of common words both differ per language.
const OPTIONAL = [/^pages\.hub\.counts\./, /^challengeAT\.commonWords/]
const isOptional = (path: string) => OPTIONAL.some((pattern) => pattern.test(path))

const english = shapeOf(en)
const locales = { cs, de, lt, no }

describe.each(Object.entries(locales))('translations: %s', (_code, translations) => {
  const local = shapeOf(translations)

  it('has every English key', () => {
    const missing = [...english.keys()].filter((path) => !local.has(path) && !isOptional(path))
    expect(missing).toEqual([])
  })

  it('has no keys that English does not have', () => {
    const extra = [...local.keys()].filter((path) => !english.has(path) && !isOptional(path))
    expect(extra).toEqual([])
  })

  it('has lists of the same length and values of the same type', () => {
    const different = [...english.entries()]
      .filter(([path, kind]) => local.has(path) && local.get(path) !== kind && !isOptional(path))
      .map(([path, kind]) => `${path}: en ${kind}, here ${local.get(path)}`)
    expect(different).toEqual([])
  })

  it('has no empty texts where English has text', () => {
    const empty = [...english.entries()]
      .filter(([path, kind]) => kind === 'string' && (resolve(en, path) as string).trim() !== '')
      .filter(([path]) => local.get(path) === 'string' && (resolve(translations, path) as string).trim() === '')
      .map(([path]) => path)
    expect(empty).toEqual([])
  })
})

function resolve(source: unknown, path: string): unknown {
  return path
    .replace(/\[(\d+)\]/g, '.$1')
    .split('.')
    .reduce<unknown>((current, key) => (current as Record<string, unknown> | undefined)?.[key], source)
}
