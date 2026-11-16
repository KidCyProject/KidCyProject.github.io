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
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: `node scripts/serve-dist.mjs ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
})
