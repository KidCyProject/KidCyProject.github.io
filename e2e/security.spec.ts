import { expect, test } from '@playwright/test'
import { isKnownBrowserNoise } from './pages'

// The Content-Security-Policy allows the site's own inline scripts by hash
// (scripts/csp-hashes.mjs) and nothing else.

test('policy lists script hashes and has no unsafe-inline for scripts', async ({ page }) => {
  await page.goto('/')
  const policy = (await page.locator('meta[http-equiv="Content-Security-Policy"]').getAttribute('content')) ?? ''
  const scriptSrc = policy.split(';').find((part) => part.trim().startsWith('script-src')) ?? ''
  expect(scriptSrc).toContain("'sha256-")
  expect(scriptSrc).not.toContain('unsafe-inline')
  expect(policy).not.toContain('__CSP_SCRIPT_HASHES__')
})

test('an injected inline script does not run', async ({ page }) => {
  await page.goto('/')
  const ran = await page.evaluate(() => {
    const script = document.createElement('script')
    script.textContent = 'window.__injected = true'
    document.body.append(script)
    return (window as unknown as { __injected?: boolean }).__injected === true
  })
  expect(ran).toBe(false)
})

test('injected event-handler attributes do not run', async ({ page }) => {
  await page.goto('/')
  const ran = await page.evaluate(() => {
    const holder = document.createElement('div')
    holder.innerHTML = '<img src="/missing.png" onerror="window.__handler = true"><button onclick="window.__handler = true">x</button>'
    document.body.append(holder)
    holder.querySelector('button')?.click()
    return new Promise<boolean>((resolve) =>
      setTimeout(() => resolve((window as unknown as { __handler?: boolean }).__handler === true), 300),
    )
  })
  expect(ran).toBe(false)
})

/**
 * Waits until the page's cross-fade has finished. A click during the fade (under 0.2 s after the
 * page appears) makes Chrome abort the fade and log that as an error — harmless, but not what a
 * person clicking at normal speed sees, so the test waits like a person would.
 */
const settle = async (page: import('@playwright/test').Page) => {
  await page.waitForLoadState('load')
  await page.waitForFunction(
    () =>
      new Promise<boolean>((resolve) =>
        // two frames: the fade has started if it is going to
        requestAnimationFrame(() => requestAnimationFrame(() => {
          let active = false
          try {
            active = document.documentElement.matches(':active-view-transition')
          } catch {
            // browser without view transitions
          }
          resolve(!active)
        })),
      ),
    undefined,
    { polling: 50 },
  )
}

test('following links from page to page breaks no script and logs nothing', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error' && !isKnownBrowserNoise(message.text())) errors.push(message.text())
  })
  page.on('pageerror', (error) => {
    if (!isKnownBrowserNoise(error.message)) errors.push(error.message)
  })

  // every step is a click on a link — an ordinary page load with the browser's own cross-fade
  await page.goto('/')
  await page.locator('.desktop-menu a[data-nav-section="learning-hub"]').click()
  await expect(page).toHaveURL(/learning-hub\/introduction\/$/)
  await settle(page)
  await page.locator('footer a[href$="/learning-hub/malware/content/"]').click()
  await expect(page).toHaveURL(/malware\/content\/$/)
  await settle(page)

  const tabs = page.locator('.mc-tabs__bar').first().getByRole('tab')
  await tabs.nth(1).click()
  await expect(page.locator('#aoo-objectives')).toBeVisible()

  await page.locator('footer a[href$="/learning-hub/my-progress/"]').click()
  await expect(page).toHaveURL(/my-progress\/$/)
  await settle(page)
  await page.locator('footer a[href$="/learning-hub/authentication/content/"]').click()
  await expect(page).toHaveURL(/authentication\/content\/$/)
  await settle(page)
  await page.locator('a[href$="/learning-hub/authentication/challenge/"]').first().click()
  await expect(page).toHaveURL(/authentication\/challenge\/$/)
  await settle(page)
  await page.locator('input[type="text"], input[type="password"]').first().fill('purple tractor sings loudly')
  await expect(page.locator('#criterion-length')).toHaveClass(/met/)

  // back and forward come from the browser's page cache and must still work
  await page.goBack()
  await expect(page).toHaveURL(/authentication\/content\/$/)
  await settle(page)
  await page.locator('.mc-tabs__bar').first().getByRole('tab').nth(2).click()
  await expect(page.locator('#aoo-outcomes')).toBeVisible()
  await page.goForward()
  await expect(page).toHaveURL(/authentication\/challenge\/$/)

  expect(errors).toEqual([])
})

test('the next page is fetched ahead when a link is pointed at', async ({ page }) => {
  await page.goto('/')
  const fetched = page.waitForRequest((request) => request.url().endsWith('/about/'), { timeout: 15_000 })
  await page.locator('.desktop-menu a[data-nav-match="exact"]').hover()
  await fetched
})
