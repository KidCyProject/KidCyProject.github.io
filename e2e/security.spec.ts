import { expect, test } from '@playwright/test'
import { isIgnoredConsoleError } from './pages'

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

test('moving between pages without reload breaks no script', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error' && !isIgnoredConsoleError(message.text()) && !message.text().includes('404')) errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))

  // every step is a click on a link, so the view-transition router swaps the page in place
  await page.goto('/')
  await page.locator('.desktop-menu a[data-nav-section="learning-hub"]').click()
  await expect(page).toHaveURL(/learning-hub\/introduction\/$/)
  await page.locator('footer a[href$="/learning-hub/malware/content/"]').click()
  await expect(page).toHaveURL(/malware\/content\/$/)

  // scripts of the swapped-in page work: tabs react
  const tabs = page.locator('.mc-tabs__bar').first().getByRole('tab')
  await tabs.nth(1).click()
  await expect(page.locator('#aoo-objectives')).toBeVisible()

  await page.locator('footer a[href$="/learning-hub/my-progress/"]').click()
  await expect(page).toHaveURL(/my-progress\/$/)
  await page.locator('footer a[href$="/learning-hub/authentication/content/"]').click()
  await page.locator('a[href$="/learning-hub/authentication/challenge/"]').first().click()
  await expect(page).toHaveURL(/authentication\/challenge\/$/)
  // the challenge swapped in this way is alive: typing updates the rule list
  await page.locator('input[type="text"], input[type="password"]').first().fill('purple tractor sings loudly')
  await expect(page.locator('#criterion-length')).toHaveClass(/met/)

  expect(errors).toEqual([])
})
