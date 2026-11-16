// Shared lists for the browser tests.

export const LOCALES = ['en', 'cs', 'de', 'lt', 'no'] as const
export type Locale = (typeof LOCALES)[number]

/** One page of every kind (English route, without language prefix). */
export const PAGE_TYPES = [
  { name: 'home', route: '/' },
  { name: 'about', route: '/about/' },
  { name: 'learning hub', route: '/learning-hub/introduction/' },
  { name: 'module content', route: '/learning-hub/malware/content/' },
  { name: 'challenge', route: '/learning-hub/social-engineering/challenge/' },
  { name: 'game', route: '/learning-hub/authentication/game/' },
  { name: 'my progress', route: '/learning-hub/my-progress/' },
  { name: 'privacy', route: '/privacy/' },
] as const

export const MODULES = [
  'digital-citizenship',
  'attacker-perspective',
  'authentication',
  'data-privacy',
  'social-engineering',
  'malware',
  'digital-misuse',
] as const

/** Modules that have a Roblox game page. */
export const GAME_MODULES = ['authentication', 'data-privacy', 'social-engineering', 'malware', 'digital-misuse'] as const

export const localized = (locale: Locale, route: string) => (locale === 'en' ? route : `/${locale}${route}`)

/**
 * Console noise that is not a page error:
 * - Astro's view-transition router swaps scripts that already ran for an empty
 *   `data:application/javascript,` script; the policy refuses it (as it should refuse any
 *   data: script) and nothing is lost, because the script was empty.
 */
export const isIgnoredConsoleError = (text: string) => text.includes("Loading the script 'data:application/javascript,'")
