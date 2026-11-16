import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'

// Unit and data-integrity tests (npm test). Aliases mirror astro.config.mjs.
export default defineConfig({
  resolve: {
    alias: {
      'src/i18n': fileURLToPath(new URL('./src/i18n', import.meta.url)),
      'src/data': fileURLToPath(new URL('./src/data', import.meta.url)),
    },
  },
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node',
  },
})
