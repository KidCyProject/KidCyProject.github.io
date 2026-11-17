import { expect, test } from '@playwright/test'
import type { Page } from '@playwright/test'
import { ALL_ROUTES, scan } from './axe'

// The site on a phone: a touch screen 375 px wide (most phones) and 320 px wide
// (the narrowest width WCAG 1.4.10 "Reflow" asks for).
test.use({ viewport: { width: 375, height: 812 }, hasTouch: true, isMobile: true })

/**
 * Elements that stick out of the screen on the right — cut-off text, a button half off screen.
 * `scrollWidth` alone does not show this: the page clips sideways overflow instead of scrolling.
 * Content inside a box that scrolls sideways on its own (tab bars, tables) is fine.
 */
const cutOff = (page: Page) =>
  page.evaluate(() => {
    const limit = document.documentElement.clientWidth + 1
    const scrollsSideways = (el: Element | null): boolean => {
      for (let node = el; node && node !== document.body; node = node.parentElement) {
        const overflow = getComputedStyle(node).overflowX
        if ((overflow === 'auto' || overflow === 'scroll') && node.scrollWidth > node.clientWidth) return true
      }
      return false
    }
    const found: string[] = []
    document.querySelectorAll<HTMLElement>('main *, header *, footer *').forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0 || rect.right <= limit) return
      const style = getComputedStyle(el)
      if (style.visibility === 'hidden' || style.position === 'fixed' || el.closest('[hidden], [aria-hidden="true"], .sr-only')) return
      if (scrollsSideways(el.parentElement)) return
      // report the outermost offender only
      if (el.parentElement && el.parentElement.getBoundingClientRect().right > limit && el.parentElement !== document.body && !['MAIN', 'HEADER', 'FOOTER'].includes(el.parentElement.tagName)) return
      found.push(`${el.tagName.toLowerCase()}.${String(el.className).split(' ').slice(0, 2).join('.')} → ${Math.round(rect.right)}px`)
    })
    return found.slice(0, 8)
  })

for (const width of [375, 320]) {
  for (const route of ALL_ROUTES) {
    test(`${width}px: nothing is cut off on ${route}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 812 })
      await page.emulateMedia({ reducedMotion: 'reduce' })
      await page.goto(route)
      await page.waitForLoadState('networkidle')
      expect(await cutOff(page), 'as loaded').toEqual([])

      // module pages: an opened part with its tabs must fit too
      const part = page.locator('details.mc-module').first()
      if (await part.count()) {
        await part.evaluate((details: HTMLDetailsElement) => (details.open = true))
        expect(await cutOff(page), 'with a part opened').toEqual([])
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth), 'sideways scroll').toBeLessThanOrEqual(0)
    })
  }
}

for (const route of ALL_ROUTES) {
  test(`phone accessibility incl. tap-target size: ${route}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto(route)
    await page.waitForLoadState('networkidle')
    // wcag22aa adds 2.5.8 Target Size: controls at least 24 × 24 px or with enough room around them
    expect(await scan(page, ['wcag22aa'])).toEqual([])
  })
}

test('phone: every page of the menu can be reached by tapping', async ({ page }) => {
  await page.goto('/')
  const toggle = page.locator('.responsive-toggle')
  await expect(page.locator('.desktop-menu')).toBeHidden()

  await toggle.tap()
  await expect(page.locator('.mobile-menu')).toBeVisible()
  await page.locator('.mobile-menu a[data-nav-section="learning-hub"]').tap()
  await expect(page).toHaveURL(/learning-hub\/introduction\/$/)
  // the menu is closed again on the new page
  await expect(page.locator('.mobile-menu')).toBeHidden()

  await page.locator('.responsive-toggle').tap()
  await page.locator('.mobile-menu .language-switcher__toggle').tap()
  await page.locator('.mobile-menu .language-switcher__item[lang="de"]').tap()
  await expect(page).toHaveURL(/\/de\/learning-hub\/introduction\/$/)
})

test('phone: hints start collapsed above the game and open on tap', async ({ page }) => {
  await page.goto('/learning-hub/digital-citizenship/challenge/')
  const panel = page.locator('[data-hint-panel]').first()
  await expect(panel).not.toHaveAttribute('open', '')
  await panel.locator('summary').tap()
  await expect(panel).toHaveAttribute('open', '')
  expect(await cutOff(page)).toEqual([])
})

test('phone: a sorting game is played by tapping', async ({ page }) => {
  await page.goto('/learning-hub/digital-citizenship/challenge/')
  const placed = page.locator('[data-zone-content] [data-post-id]')
  const zones = await page.locator('[data-zone]').count()
  // tap a card, then try the buttons that appear under it
  for (let attempt = 0; attempt < zones && (await placed.count()) === 0; attempt++) {
    const card = page.locator('[data-cards-tray] [data-post-id]').first()
    if ((await card.getAttribute('aria-pressed')) !== 'true') await card.tap()
    const choice = page.locator('[data-cards-tray] [data-choose]:visible').nth(attempt)
    await expect(choice).toBeVisible()
    // big enough for a thumb
    const box = await choice.boundingBox()
    expect(box!.height).toBeGreaterThanOrEqual(40)
    await choice.tap()
    await page.waitForTimeout(800)
  }
  await expect(placed).toHaveCount(1)
  // the explanation of the answer is on screen without scrolling
  await expect(page.locator('[data-feedback]')).toBeInViewport()
})

test('phone: a challenge can be finished by tapping', async ({ page }) => {
  await page.goto('/learning-hub/social-engineering/challenge/')
  await page.locator('#btn-start-game').tap()
  const results = page.locator('#game-results')
  for (let step = 0; step < 80 && !(await results.isVisible()); step++) {
    if (await page.locator('#btn-next-case').isVisible()) await page.locator('#btn-next-case').tap()
    else if (await page.locator('#quiz-options button:enabled').first().isVisible()) await page.locator('#quiz-options button:enabled').first().tap()
    else if (await page.locator('#btn-check').isEnabled()) await page.locator('#btn-check').tap()
    else await page.waitForTimeout(100)
  }
  await expect(results).toBeVisible()
  expect(await cutOff(page)).toEqual([])
})
