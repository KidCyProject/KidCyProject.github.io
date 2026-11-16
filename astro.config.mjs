import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import sitemap from '@astrojs/sitemap'
import cspHashes from './scripts/csp-hashes.mjs'
import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://kidcyproject.github.io/',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cs', 'de', 'lt', 'no'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  output: 'static',
  integrations: [
    icon(),
    // sitemap-index.xml with every page in every language, cross-linked with hreflang
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', cs: 'cs', de: 'de', lt: 'lt', no: 'no' },
      },
    }),
    compress(),
    // keep last: fills the inline-script hashes into the Content-Security-Policy of the final HTML
    cspHashes(),
  ],
  vite: {
    build: {
      cssCodeSplit: false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          logger: {
            warn: () => {},
          },
        },
      },
    },
    plugins: [tailwindcss()],
    // Pin the tsconfig Vite 8 / oxc uses for transforms. Without this, oxc auto-discovers a
    // tsconfig per transformed file by walking up the directory tree (into node_modules and
    // above the project root) and hard-fails on any it finds whose "extends" it can't resolve
    // through a package exports map -- e.g. "astro/tsconfigs/base".
    // See https://github.com/vitejs/vite/issues/23459
    tsconfig: './tsconfig.json',
    resolve: {
      // Same discovery walk, for path-alias resolution. All aliases below are explicit,
      // so turning it off doesn't affect module resolution.
      tsconfigPaths: false,
      alias: {
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@i18n': fileURLToPath(new URL('./src/i18n', import.meta.url)),
        'src/i18n': fileURLToPath(new URL('./src/i18n', import.meta.url)),
        'src/data': fileURLToPath(new URL('./src/data', import.meta.url)),
      },
    },
  },
})
