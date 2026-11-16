import { expect, test } from '@playwright/test'

// Plays "Phishing Case Files" to the end with the always-safe answer ("stop and ask"),
// then checks that the result was saved in this browser and shows on "My progress".
test('social engineering challenge can be played to the end and saves progress', async ({ page }) => {
  await page.goto('/learning-hub/social-engineering/challenge/')
  await page.locator('#btn-start-game').click()
  await expect(page.locator('#game-playing')).toBeVisible()

  const results = page.locator('#game-results')
  const next = page.locator('#btn-next-case')
  const quizOption = page.locator('#quiz-options button:enabled').first()
  const answer = page.locator('#btn-check')

  for (let step = 0; step < 80 && !(await results.isVisible()); step++) {
    if (await next.isVisible()) await next.click()
    else if (await quizOption.isVisible()) await quizOption.click()
    else if (await answer.isEnabled()) await answer.click()
    else await page.waitForTimeout(100)
  }

  await expect(results).toBeVisible()
  await expect(page.locator('#results-title')).toBeFocused()

  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('kidcy-progress-v1') ?? 'null'))
  expect(saved?.records?.se?.plays).toBe(1)
  // nothing else is kept in this browser
  const keys = await page.evaluate(() => Object.keys(localStorage).sort())
  expect(keys.every((key) => key.startsWith('kidcy-'))).toBe(true)

  await page.goto('/learning-hub/my-progress/')
  await expect(page.locator('main')).toContainText('1 of 7')
})

test('challenge sends nothing to other servers', async ({ page }) => {
  const external: string[] = []
  page.on('request', (request) => {
    const url = new URL(request.url())
    if (url.hostname !== 'localhost' && url.protocol.startsWith('http')) external.push(request.url())
  })
  await page.goto('/learning-hub/authentication/challenge/')
  await page.waitForLoadState('networkidle')
  expect(external).toEqual([])
})
