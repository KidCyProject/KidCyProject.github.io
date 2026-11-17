#!/usr/bin/env node
// Minimal static server for dist/, used by the browser tests (playwright.config.ts).
// Behaves like GitHub Pages: folders serve their index.html, unknown addresses get
// 404.html with status 404, and video requests with a Range header are answered in parts.
//   node scripts/serve-dist.mjs [port]
import { createReadStream, existsSync, readFileSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve } from 'node:path'

const ROOT = resolve('dist')
const PORT = Number(process.argv[2] ?? 4329)

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.vtt': 'text/vtt; charset=utf-8',
  '.pdf': 'application/pdf',
  '.zip': 'application/zip',
}

const findFile = (urlPath) => {
  const path = join(ROOT, normalize(decodeURIComponent(urlPath)))
  if (!path.startsWith(ROOT)) return null // no escaping dist/
  if (existsSync(path) && statSync(path).isFile()) return path
  const index = join(path, 'index.html')
  return existsSync(index) ? index : null
}

if (!existsSync(ROOT)) {
  console.error('dist/ not found — run "npm run build" first.')
  process.exit(2)
}

createServer((request, response) => {
  const urlPath = new URL(request.url ?? '/', 'http://localhost').pathname
  let file = findFile(urlPath)
  let status = 200
  if (!file) {
    file = join(ROOT, '404.html')
    status = 404
  }

  // The pages ask browsers to load everything over https (`upgrade-insecure-requests` in their
  // security policy). Right on the live site, but this server speaks plain http, and Safari
  // applies the rule to localhost too — every stylesheet and script would fail. So that one
  // directive is taken out of the pages served here; the rest of the policy stays as built.
  if (file.endsWith('.html')) {
    const html = Buffer.from(readFileSync(file, 'utf8').replace(/;\s*upgrade-insecure-requests/, ''))
    response.writeHead(status, { 'Content-Type': TYPES['.html'], 'Content-Length': html.length })
    response.end(request.method === 'HEAD' ? undefined : html)
    return
  }

  const { size } = statSync(file)
  const headers = { 'Content-Type': TYPES[extname(file).toLowerCase()] ?? 'application/octet-stream', 'Accept-Ranges': 'bytes' }
  const range = status === 200 ? /^bytes=(\d*)-(\d*)$/.exec(request.headers.range ?? '') : null

  if (range) {
    const start = range[1] ? Number(range[1]) : 0
    const end = range[2] ? Math.min(Number(range[2]), size - 1) : size - 1
    response.writeHead(206, { ...headers, 'Content-Range': `bytes ${start}-${end}/${size}`, 'Content-Length': end - start + 1 })
    createReadStream(file, { start, end }).pipe(response)
    return
  }

  response.writeHead(status, { ...headers, 'Content-Length': size })
  if (request.method === 'HEAD') response.end()
  else createReadStream(file).pipe(response)
}).listen(PORT, () => console.log(`Serving dist/ at http://localhost:${PORT}`))
