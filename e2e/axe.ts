import AxeBuilder from '@axe-core/playwright'
import { test } from '@playwright/test'
import type { Page } from '@playwright/test'
import { GAME_MODULES, MODULES, PAGE_TYPES } from './pages'

/** Every page of the English site (the other languages share the same templates). */
export const ALL_ROUTES = [
  ...new Set([
    ...PAGE_TYPES.map((entry) => entry.route),
    ...MODULES.map((module) => `/learning-hub/${module}/content/`),
    ...MODULES.map((module) => `/learning-hub/${module}/challenge/`),
    ...GAME_MODULES.map((module) => `/learning-hub/${module}/game/`),
  ]),
]

// Colour contrast has known open problems (white text on the module brand colours,
// faded rules in the Password Lab, some muted texts in dark mode). The rule is reported
// in the test output but does not stop a deploy. Empty this list once they are fixed.
export const REPORT_ONLY = ['color-contrast']

const WCAG_21_AA = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']

/** axe scan of the page as it is now; returns the violations that must be fixed. */
export const scan = async (page: Page, extraTags: string[] = []) => {
  const { violations } = await new AxeBuilder({ page }).withTags([...WCAG_21_AA, ...extraTags]).analyze()
  const summary = violations.map((violation) => ({
    rule: violation.id,
    impact: violation.impact,
    count: violation.nodes.length,
    example: violation.nodes[0]?.target.join(' '),
  }))
  for (const known of summary.filter((entry) => REPORT_ONLY.includes(entry.rule))) {
    test.info().annotations.push({ type: 'known issue', description: `${known.rule}: ${known.count} element(s), e.g. ${known.example}` })
  }
  return summary.filter((entry) => !REPORT_ONLY.includes(entry.rule))
}
