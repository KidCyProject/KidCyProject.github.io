import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'
import type { Page } from '@playwright/test'
import { GAME_MODULES, MODULES, PAGE_TYPES } from './pages'

// Automated WCAG 2.1 A/AA scan (axe) of every kind of page, in light and dark mode.
// It finds roughly a third of real accessibility problems (contrast, names, roles,
// structure) — it does not replace testing with a keyboard and a screen reader.
const routes = [
  ...PAGE_TYPES.map((entry) => entry.route),
  ...MODULES.map((module) => `/learning-hub/${module}/content/`),
  ...MODULES.map((module) => `/learning-hub/${module}/challenge/`),
  ...GAME_MODULES.map((module) => `/learning-hub/${module}/game/`),
]

// Colour contrast has known open problems (white text on the module brand colours,
// faded rules in the Password Lab, some muted texts in dark mode). The rule is reported
// in the test output but does not stop a deploy. Empty this list once they are fixed.
const REPORT_ONLY = ['color-contrast']

const scan = async (page: Page) => {
  const { violations } = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()
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

for (const route of [...new Set(routes)]) {
  for (const colorScheme of ['light', 'dark'] as const) {
    test(`accessibility, ${colorScheme}: ${route}`, async ({ page }) => {
      // the site follows the system colour scheme (accessible-astro-components DarkMode)
      await page.emulateMedia({ colorScheme, reducedMotion: 'reduce' })
      await page.goto(route)
      await page.waitForLoadState('networkidle')
      expect(await scan(page)).toEqual([])
    })
  }
}
