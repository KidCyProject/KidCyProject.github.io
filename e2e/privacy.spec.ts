import { expect, test } from '@playwright/test'

// The privacy page lists everything the site keeps in the browser. This test uses the
// site (language switch, dark mode, a finished challenge, the sensitive-stories switch)
// and checks that nothing is stored that the page does not name — and no cookie at all.
test('the browser holds only what the privacy page lists', async ({ page, context }) => {
  await page.goto('/privacy/')
  const listed = await page.locator('[data-storage-key]').allTextContents()
  expect(listed.length).toBeGreaterThan(0)

  // dark mode
  await page.locator('.darkmode-toggle').first().click()

  // finish a challenge
  await page.goto('/learning-hub/social-engineering/challenge/')
  await page.locator('#btn-start-game').click()
  const results = page.locator('#game-results')
  for (let step = 0; step < 80 && !(await results.isVisible()); step++) {
    if (await page.locator('#btn-next-case').isVisible()) await page.locator('#btn-next-case').click()
    else if (await page.locator('#quiz-options button:enabled').first().isVisible()) await page.locator('#quiz-options button:enabled').first().click()
    else if (await page.locator('#btn-check').isEnabled()) await page.locator('#btn-check').click()
    else await page.waitForTimeout(100)
  }
  await expect(results).toBeVisible()

  // switch on sensitive stories
  await page.goto('/learning-hub/digital-misuse/challenge/')
  const sensitive = page.locator('input[type="checkbox"]').first()
  if (await sensitive.count()) await sensitive.check({ force: true })

  // choose a language
  await page.goto('/about/')
  await page.locator('.desktop-menu .language-switcher__toggle').click()
  await page.locator('.desktop-menu .language-switcher__item[lang="cs"]').click()
  await expect(page).toHaveURL(/\/cs\/about\/$/)

  const stored = await page.evaluate(() => ({ local: Object.keys(localStorage), session: Object.keys(sessionStorage) }))
  expect(stored.local.filter((key) => !listed.includes(key)), 'localStorage keys missing from the privacy page').toEqual([])
  expect(stored.local.length).toBeGreaterThanOrEqual(3)
  expect(stored.session).toEqual([])
  expect(await context.cookies()).toEqual([])
})

test('no page asks another server for anything', async ({ page }) => {
  const external: string[] = []
  page.on('request', (request) => {
    const url = new URL(request.url())
    if (url.protocol.startsWith('http') && url.hostname !== 'localhost') external.push(request.url())
  })
  for (const route of ['/', '/about/', '/learning-hub/introduction/', '/learning-hub/malware/content/', '/learning-hub/authentication/game/', '/learning-hub/my-progress/', '/privacy/']) {
    await page.goto(route)
    await page.waitForLoadState('networkidle')
  }
  expect(external).toEqual([])
})
