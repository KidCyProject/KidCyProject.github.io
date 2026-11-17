import { expect, test } from '@playwright/test'
import type { Locator, Page } from '@playwright/test'
import { isKnownBrowserNoise } from './pages'

// Every challenge is played from the first click to the result screen. The "player"
// does not know the right answers — it tries the offered answers one after another —
// so these tests check that a game can always be finished, that the result is saved,
// and that no script error happens on the way. Right/wrong logic is covered by the
// unit tests in tests/challenges.test.ts.

// Whole games take a while, more so when three browsers run side by side
test.describe.configure({ timeout: 120_000 })

const saved = (page: Page, id: string) =>
  page.evaluate((key) => JSON.parse(localStorage.getItem('kidcy-progress-v1') ?? '{}')?.records?.[key] ?? null, id)

const watchErrors = (page: Page) => {
  const errors: string[] = []
  page.on('pageerror', (error) => !isKnownBrowserNoise(error.message) && errors.push(error.message))
  return errors
}

/** Clicks the first usable control from `controls` (in order of priority) until `done` shows. */
const play = async (page: Page, done: Locator, controls: Locator[], maxSteps = 400) => {
  for (let step = 0; step < maxSteps; step++) {
    if (await done.isVisible()) return
    let acted = false
    for (const control of controls) {
      const target = control.first()
      if ((await target.isVisible()) && (await target.isEnabled())) {
        await target.click()
        acted = true
        break
      }
    }
    if (!acted) await page.waitForTimeout(100)
  }
  await expect(done, 'the game did not reach its result screen').toBeVisible()
}

/**
 * Sorting games, played with the keyboard only (Enter on a card opens its zone buttons,
 * Enter on a zone button places it): takes the first card left in the tray and tries the
 * zones in turn.
 */
const sortCards = async (page: Page, cardSelector: string, idAttribute: string, done: Locator) => {
  const tries = new Map<string, number>()
  for (let step = 0; step < 300; step++) {
    if (await done.isVisible()) return
    const card = page.locator(`[data-cards-tray] ${cardSelector}`).first()
    if (!(await card.isVisible())) {
      await page.waitForTimeout(100)
      continue
    }
    const id = (await card.getAttribute(idAttribute)) ?? ''
    const attempt = tries.get(id) ?? 0
    tries.set(id, attempt + 1)
    // Enter on an already selected card would close its buttons again
    if ((await card.getAttribute('aria-pressed')) !== 'true') await card.press('Enter')
    const choices = page.locator('[data-cards-tray] [data-choose]:visible')
    const count = await choices.count()
    if (count > 0) await choices.nth(attempt % count).press('Enter')
    // the game ignores input while it shows the answer (0.6–0.7 s)
    await page.waitForTimeout(750)
  }
  await expect(done, 'cards were left unsorted').toBeVisible()
}

test('digital citizenship: every post can be sorted', async ({ page }) => {
  test.slow() // up to four tries per card, each followed by the game's pause
  const errors = watchErrors(page)
  await page.goto('/learning-hub/digital-citizenship/challenge/')
  await sortCards(page, '[data-post-id]', 'data-post-id', page.locator('[data-win]'))
  await expect(page.locator('#win-title')).toBeFocused()
  expect((await saved(page, 'dc'))?.plays).toBe(1)
  expect(errors).toEqual([])
})

test('data privacy: footprint sorted, profile cleaned up', async ({ page }) => {
  test.slow()
  const errors = watchErrors(page)
  await page.goto('/learning-hub/data-privacy/challenge/')
  const toCleanup = page.locator('[data-to-cleanup]')
  await sortCards(page, '[data-activity-id]', 'data-activity-id', toCleanup)
  await toCleanup.click()

  // Step 2: for each profile part try the four actions until one is accepted
  const win = page.locator('[data-win]')
  const next = page.locator('[data-cleanup-next]')
  let attempt = 0
  for (let step = 0; step < 120 && !(await win.isVisible()); step++) {
    if (await next.isVisible()) {
      await next.click()
      attempt = 0
      continue
    }
    const actions = page.locator('[data-action]:enabled')
    const count = await actions.count()
    if (count > 0) await actions.nth(attempt++ % count).click()
    await page.waitForTimeout(50)
  }
  await expect(win).toBeVisible()
  expect((await saved(page, 'dp'))?.plays).toBe(1)
  expect(errors).toEqual([])
})

test('malware: all seven levels can be finished', async ({ page }) => {
  const errors = watchErrors(page)
  await page.goto('/learning-hub/malware/challenge/')
  await play(page, page.locator('#btn-play-again'), [
    page.locator('#btn-start'),
    page.locator('#btn-next-item'),
    page.locator('#btn-continue-level'),
    page.locator('#btn-action-a'),
  ])
  const record = await saved(page, 'mw')
  expect(record?.plays).toBe(1)
  expect(record?.max).toBeGreaterThan(0)
  expect(errors).toEqual([])
})

test('digital misuse: every story can be read to an ending', async ({ page }) => {
  test.slow() // twelve stories, each with a typing pause; close to the normal time limit in Firefox
  const errors = watchErrors(page)
  await page.goto('/learning-hub/digital-misuse/challenge/')
  await play(page, page.locator('#final-overlay'), [
    page.locator('#all-done-btn'),
    page.locator('#next-story-btn'),
    page.locator('#start-btn'),
    page.locator('#choices-container .choice-btn'),
  ])
  expect((await saved(page, 'dm'))?.plays).toBe(1)
  expect(errors).toEqual([])
})

test('authentication: four passphrases open the vault', async ({ page }) => {
  const errors = watchErrors(page)
  await page.goto('/learning-hub/authentication/challenge/')
  const input = page.locator('#passwordInput')
  const next = page.locator('#nextRoundBtn')
  await expect(next).toBeDisabled()

  // one new, unrelated passphrase per round (the last round rejects reused ones)
  const passphrases = ['purple tractor sings loudly', 'seven clouds drink lemonade', 'quiet marble jumps sideways', 'frozen pencil climbs mountains']
  for (const passphrase of passphrases) {
    await input.fill(passphrase)
    await expect(next).toBeEnabled()
    await next.click()
  }
  await expect(page.locator('#completionSection')).toBeVisible()
  expect((await saved(page, 'at'))?.plays).toBe(1)

  // a weak password never unlocks the button
  await page.locator('#restartBtn').click()
  await input.fill('password')
  await expect(next).toBeDisabled()
  expect(errors).toEqual([])
})

test('attacker perspective: profile, plan and questions', async ({ page }) => {
  const errors = watchErrors(page)
  await page.goto('/learning-hub/attacker-perspective/challenge/')

  // Part 1: click through the profile until the round ends (all found, or lives used up)
  const overlay = page.locator('#game-overlay')
  const hotspots = page.locator('.hotspot-btn')
  const total = await hotspots.count()
  expect(total).toBeGreaterThan(0)
  for (let i = 0; i < total && !(await overlay.isVisible()); i++) {
    const hotspot = hotspots.nth(i)
    if (await hotspot.isVisible()) await hotspot.click({ force: true })
  }
  await expect(overlay).toBeVisible()
  await page.locator('#continue-btn').click()

  // Part 2: put every clue somewhere, trying the three goals in turn
  const toQuiz = page.locator('[data-to-quiz]')
  const tries = new Map<string, number>()
  for (let step = 0; step < 120 && !(await toQuiz.isVisible()); step++) {
    const chip = page.locator('[data-plan-tray] .plan-chip').first()
    if (!(await chip.isVisible())) {
      await page.waitForTimeout(100)
      continue
    }
    const label = (await chip.textContent()) ?? ''
    const attempt = tries.get(label) ?? 0
    tries.set(label, attempt + 1)
    await chip.press('Enter')
    await page.locator('[data-goal]').nth(attempt % 3).press('Enter')
    await page.waitForTimeout(150)
  }
  await toQuiz.click()

  // Part 3: answer until the result shows
  await play(page, page.locator('[data-part-area="4"]'), [
    page.locator('[data-quiz-next]'),
    page.locator('[data-quiz-options] button:enabled'),
  ])
  await expect(page.locator('#final-title')).toBeFocused()
  expect((await saved(page, 'ap'))?.plays).toBe(1)
  expect(errors).toEqual([])
})

// The sort board (src/utils/challenge/sortBoard.ts) accepts three kinds of input.
// The keyboard is covered by the two full games above; here one card is placed with
// the mouse in each of the other two ways.
for (const game of [
  { name: 'digital citizenship', route: '/learning-hub/digital-citizenship/challenge/', card: '[data-post-id]' },
  { name: 'data privacy', route: '/learning-hub/data-privacy/challenge/', card: '[data-activity-id]' },
]) {
  test(`${game.name}: a card can be placed by clicking a zone`, async ({ page }) => {
    await page.goto(game.route)
    const placed = page.locator(`[data-zone-content] ${game.card}`)
    const zones = page.locator('[data-zone]')
    const zoneCount = await zones.count()
    for (let i = 0; i < zoneCount && (await placed.count()) === 0; i++) {
      const card = page.locator(`[data-cards-tray] ${game.card}`).first()
      if ((await card.getAttribute('aria-pressed')) !== 'true') await card.click()
      await zones.nth(i).locator('[data-zone-content]').click({ position: { x: 5, y: 5 } })
      await page.waitForTimeout(800)
    }
    await expect(placed).toHaveCount(1)
  })

  test(`${game.name}: a card can be dragged into a zone`, async ({ page }) => {
    await page.goto(game.route)
    const placed = page.locator(`[data-zone-content] ${game.card}`)
    const zoneCount = await page.locator('[data-zone]').count()
    for (let i = 0; i < zoneCount && (await placed.count()) === 0; i++) {
      // the browser's own drag events, fired in the order a real drag produces them
      await page.evaluate(
        ([cardSelector, index]) => {
          const card = document.querySelector(`[data-cards-tray] ${cardSelector}`)!
          const target = document.querySelectorAll('[data-zone]')[index as number].querySelector('[data-zone-content]')!
          const dataTransfer = new DataTransfer()
          const fire = (element: Element, type: string) =>
            element.dispatchEvent(new DragEvent(type, { bubbles: true, cancelable: true, dataTransfer }))
          fire(card, 'dragstart')
          fire(target, 'dragover')
          fire(target, 'drop')
          fire(card, 'dragend')
        },
        [game.card, i] as const,
      )
      await page.waitForTimeout(800)
    }
    await expect(placed).toHaveCount(1)
    await expect(page.locator('.drop-zone--active')).toHaveCount(0)
  })
}
