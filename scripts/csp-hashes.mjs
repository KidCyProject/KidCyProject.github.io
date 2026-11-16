// Astro integration: finishes the Content-Security-Policy after the build.
//
// DefaultLayout.astro writes the policy into every page with the token
// __CSP_SCRIPT_HASHES__ where the allowed inline scripts belong. This step reads the
// finished pages, takes the SHA-256 hash of every inline script that would run, and puts
// the list in place of the token. The browser then runs exactly these scripts and refuses
// any other inline script (for example one injected through a text) — no 'unsafe-inline'.
//
// All pages get the same list: with view transitions the policy of the first page stays
// in force while other pages are swapped in, so it has to know their scripts too.
//
// Must be the LAST integration, after astro-compress: hashes are taken from the final,
// minified HTML.
import { createHash } from 'node:crypto'
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

export const CSP_HASH_TOKEN = '__CSP_SCRIPT_HASHES__'

const SCRIPT = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi
// Scripts with these types are data, the browser never runs them
const isData = (attributes) => /\btype=["']?(?:application\/(?:ld\+)?json|text\/(?:plain|template))/i.test(attributes)

const htmlFiles = (dir, out = []) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) htmlFiles(path, out)
    else if (name.endsWith('.html')) out.push(path)
  }
  return out
}

export default function cspHashes() {
  return {
    name: 'kidcy-csp-hashes',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const files = htmlFiles(fileURLToPath(dir))
        const pages = files.map((file) => ({ file, html: readFileSync(file, 'utf8') }))

        const hashes = new Set()
        for (const { html } of pages) {
          for (const [, attributes, body] of html.matchAll(SCRIPT)) {
            if (/\bsrc=/i.test(attributes) || isData(attributes) || body === '') continue
            hashes.add(`'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`)
          }
        }

        const list = [...hashes].sort().join(' ')
        let written = 0
        for (const { file, html } of pages) {
          if (!html.includes(CSP_HASH_TOKEN)) continue
          writeFileSync(file, html.replaceAll(CSP_HASH_TOKEN, list))
          written++
        }

        if (written !== pages.length) {
          throw new Error(`CSP: ${pages.length - written} page(s) have no ${CSP_HASH_TOKEN} token — is DefaultLayout used everywhere?`)
        }
        logger.info(`CSP: ${hashes.size} inline script hashes written to ${written} pages`)
      },
    },
  }
}
