import { defineConfig, devices } from '@playwright/test'

// Browser tests against the built site (npm run build && npm run test:e2e).
// They start their own static server for dist/ (scripts/serve-dist.mjs); set E2E_PORT if 4329 is taken.
const PORT = Number(process.env.E2E_PORT ?? 4329)

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: {
    baseURL: `http://localhost:${PORT}`,
    // English browser: the language auto-redirect in DefaultLayout stays out of the way
    locale: 'en-GB',
    trace: 'retain-on-failure',
  },
  // Three browser engines: Chromium (Chrome, Edge), Firefox, and WebKit (Safari — the only
  // engine allowed on iPads and iPhones). phone.spec.ts emulates a touch phone, which Firefox
  // cannot do, so it runs in Chromium and WebKit.
  projects: [
    // channel 'chromium' = the full browser in headless mode; the lighter default build (headless shell)
    // cannot run page-to-page view transitions and reports each one as aborted
    { name: 'chromium', use: { ...devices['Desktop Chrome'], channel: 'chromium' } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] }, testIgnore: /phone\.spec\.ts/ },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  webServer: {
    command: `node scripts/serve-dist.mjs ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
})
