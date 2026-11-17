import { expect, test } from '@playwright/test'
import { ALL_ROUTES, scan } from './axe'

// Automated WCAG 2.1 A/AA scan (axe) of every kind of page, in light and dark mode.
// It finds roughly a third of real accessibility problems (contrast, names, roles,
// structure) — it does not replace testing with a keyboard and a screen reader.
for (const route of ALL_ROUTES) {
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
