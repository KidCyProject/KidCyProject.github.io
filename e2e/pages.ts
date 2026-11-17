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
 * Console messages that are not a fault of the site:
 * - "Transition was aborted … ViewTransition opt-in disabled": Chrome sometimes skips the
 *   page-to-page cross-fade (@view-transition in _general.scss) and reports that as an error.
 *   The page itself loads normally, just without the fade. Seen in headless Chrome on about one
 *   page change in three on full pages, never on minimal test pages; the cause is inside Chrome.
 */
export const isKnownBrowserNoise = (text: string) => /Transition was aborted because of invalid state\. ViewTransition opt-in disabled/.test(text)
