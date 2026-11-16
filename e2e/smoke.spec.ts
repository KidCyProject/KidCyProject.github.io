import { expect, test } from '@playwright/test'
import { LOCALES, MODULES, PAGE_TYPES, isIgnoredConsoleError, localized } from './pages'

// Every kind of page, in every language: loads, is in the right language, has one
// main heading, logs no errors, requests nothing that is missing.
for (const locale of LOCALES) {
  for (const { name, route } of PAGE_TYPES) {
    test(`${name} page loads (${locale})`, async ({ page }) => {
      const errors: string[] = []
      page.on('console', (message) => {
        if (message.type() === 'error' && !isIgnoredConsoleError(message.text())) errors.push(message.text())
      })
      page.on('pageerror', (error) => errors.push(error.message))
      const failed: string[] = []
      page.on('response', (response) => {
        if (response.status() >= 400) failed.push(`${response.status()} ${response.url()}`)
      })

      const response = await page.goto(localized(locale, route))
      expect(response?.status()).toBe(200)
      await expect(page.locator('html')).toHaveAttribute('lang', locale)
      await expect(page.locator('h1')).toHaveCount(1)
      await expect(page.locator('h1')).not.toBeEmpty()
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new RegExp(`${localized(locale, route)}$`))
      await page.waitForLoadState('networkidle')

      expect(failed, 'failed requests').toEqual([])
      expect(errors, 'console errors').toEqual([])
    })
  }
}

// All seven modules render from the shared template.
for (const module of MODULES) {
  test(`module content: ${module}`, async ({ page }) => {
    await page.goto(`/learning-hub/${module}/content/`)
    await expect(page.locator('h1')).not.toBeEmpty()
    expect(await page.locator('details.mc-module').count()).toBeGreaterThan(0)
    // every download option offered points at something
    const hrefs = await page.locator('[data-download-menu] a').evaluateAll((links) => links.map((a) => a.getAttribute('href')))
    expect(hrefs.length).toBeGreaterThan(0)
    expect(hrefs.every((href) => !!href && href.startsWith('/materials/'))).toBe(true)
  })

  test(`challenge starts: ${module}`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    await page.goto(`/learning-hub/${module}/challenge/`)
    await expect(page.locator('h1')).not.toBeEmpty()
    await page.waitForLoadState('networkidle')
    expect(errors).toEqual([])
  })
}

test('language switcher keeps the current page', async ({ page }) => {
  await page.goto('/learning-hub/malware/content/')
  await page.locator('.desktop-menu .language-switcher__toggle').click()
  await page.locator('.desktop-menu .language-switcher__item[lang="cs"]').click()
  await expect(page).toHaveURL(/\/cs\/learning-hub\/malware\/content\/$/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'cs')

  // the choice is remembered: the English address now leads back to Czech
  await page.goto('/about/')
  await expect(page).toHaveURL(/\/cs\/about\/$/)
})

test('a browser set to German is sent to the German pages on the first visit', async ({ browser }) => {
  const context = await browser.newContext({ locale: 'de-DE' })
  const page = await context.newPage()
  await page.goto('/about/')
  await expect(page).toHaveURL(/\/de\/about\/$/)
  await context.close()
})

test('module tabs work with the keyboard', async ({ page }) => {
  await page.goto('/learning-hub/malware/content/')
  const tabs = page.locator('.mc-tabs__bar').first().getByRole('tab')
  await tabs.nth(0).focus()
  await page.keyboard.press('ArrowRight')
  await expect(tabs.nth(1)).toBeFocused()
  await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true')
  await expect(page.locator('#aoo-objectives')).toBeVisible()
  await expect(page.locator('#aoo-aim')).toBeHidden()
  await page.keyboard.press('End')
  await expect(tabs.nth(2)).toBeFocused()
  await page.keyboard.press('ArrowRight')
  await expect(tabs.nth(0)).toBeFocused()
})

test('a link to a module part opens that part', async ({ page }) => {
  await page.goto('/learning-hub/malware/content/')
  const id = await page.locator('details.mc-module').nth(1).getAttribute('id')
  await page.goto(`/learning-hub/malware/content/#${id}`)
  await expect(page.locator(`details#${id}`)).toHaveAttribute('open', '')
})

test('phone: menu opens and the page does not scroll sideways', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  for (const { route } of PAGE_TYPES) {
    await page.goto(route)
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    expect(overflow, `sideways scroll on ${route}`).toBeLessThanOrEqual(0)
  }
  const toggle = page.locator('.responsive-toggle')
  await toggle.click()
  await expect(toggle).toHaveAttribute('aria-expanded', 'true')
  await expect(page.locator('.mobile-menu')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.locator('.mobile-menu')).toBeHidden()
})

test('unknown address shows the 404 page', async ({ page }) => {
  const response = await page.goto('/no-such-page/')
  expect(response?.status()).toBe(404)
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/)
})
