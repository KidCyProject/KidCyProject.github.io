import { en } from './translations/en'
import { cs } from './translations/cs'
import { de } from './translations/de'
import { no } from './translations/no'
import { lt } from './translations/lt'

type DeepString<T> =
  T extends string ? string :
  T extends number ? number :
  T extends boolean ? boolean :
  T extends ReadonlyArray<infer U> ? DeepString<U>[] :
  T extends object ? { [K in keyof T]: DeepString<T[K]> } :
  T
export type Translations = DeepString<typeof en>

// Locales may be partially translated; `t()` will fall back to English per-key.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translationMap: Record<string, Partial<Translations>> = { en, cs, de, lt, no } as any

function resolve(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((cur, key) => {
    if (cur !== null && typeof cur === 'object' && key in (cur as Record<string, unknown>)) {
      return (cur as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)
}

/**
 * Return a translator bound to the given locale.
 *
 * Usage in an Astro component:
 * ```
 * const { t, locale, translations } = useTranslations(Astro.currentLocale)
 * t('nav.home')  // "Home"
 * ```
 */
export function useTranslations(currentLocale: string | undefined) {
  const locale = currentLocale && currentLocale in translationMap ? currentLocale : 'en'
  const translations = translationMap[locale]

  function v<T = unknown>(key: string): T | undefined {
    const value = resolve(translations, key)
    if (value !== undefined) return value as T
    // Fallback to English if the key is missing in the current locale
    const fallback = resolve(en, key)
    if (fallback !== undefined) return fallback as T
    return undefined
  }

  function t(key: string): string {
    const value = v(key)
    if (typeof value === 'string') return value
    return key
  }

  function tHtml(key: string): string {
    return t(key).replace(/\n/g, '<br>')
  }

  /**
   * "5 Parts", "2 části", "1 materiál" — a number plus the correctly inflected noun.
   *
   * Languages with more than one plural form (Czech: 1 / 2–4 / 5+, Lithuanian: 1 / 2–9 / 10+)
   * list their forms in `pages.hub.counts.<noun>` as `{ one, few, many }`; `many` is the
   * form for every whole number that is neither `one` nor `few`. The form is picked with
   * the locale's own plural rules. Everything else falls back to `pages.hub.labels.<noun>`
   * (singular) and `pages.hub.labels.<noun>s` (plural).
   */
  function formatCount(count: number, noun: 'part' | 'material' | 'video' | 'step'): string {
    const forms = v<Partial<Record<'one' | 'few' | 'many', string>>>(`pages.hub.counts.${noun}`)
    if (forms) {
      const category = new Intl.PluralRules(locale).select(count)
      const form = category === 'one' ? forms.one : category === 'few' ? forms.few : forms.many
      if (form) return `${count} ${form}`
    }
    return `${count} ${t(`pages.hub.labels.${count === 1 ? noun : `${noun}s`}`)}`
  }

  return { t, tHtml, v, locale, translations, formatCount }
}
