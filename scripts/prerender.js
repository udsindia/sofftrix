/**
 * Runs after `vite build`. Renders every page to static HTML so search
 * engines and link previews (WhatsApp, LinkedIn, X) see real content and the
 * right title, description, and share image without running JavaScript.
 *
 *   dist/index.html            home
 *   dist/product.html          one per page, plus product/index.html
 *   dist/404.html              noindex, for hosts that serve it
 *   dist/sitemap.xml
 *   dist/robots.txt
 *
 * Pages come from PAGES in src/seo.js. Add a route there and it is
 * pre-rendered and listed in the sitemap automatically.
 */
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const serverDir = join(root, 'dist-server')

const { render, headTags, PAGES, NOT_FOUND, SITE_URL } = await import(
  pathToFileURL(join(serverDir, 'entry-server.js')).href
)

const template = await readFile(join(dist, 'index.html'), 'utf8')
for (const marker of ['<!--seo-head-->', '<!--seo-body-->']) {
  if (!template.includes(marker)) throw new Error(`index.html is missing ${marker}`)
}

function page(meta, url) {
  return template
    .replace('<!--seo-head-->', headTags(meta))
    .replace('<!--seo-body-->', render(url))
}

async function write(file, html) {
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, html)
  console.log('  prerendered', file.slice(root.length + 1))
}

for (const meta of Object.values(PAGES)) {
  const html = page(meta, meta.path)
  if (meta.path === '/') {
    await write(join(dist, 'index.html'), html)
    continue
  }
  // Both forms, because hosts disagree: `vite preview` (npm start) and
  // Vercel look for product.html, Netlify and GitHub Pages for
  // product/index.html. Without the right one, /product is served the home
  // page's HTML, title, and canonical link.
  await write(join(dist, `${meta.path}.html`), html)
  await write(join(dist, meta.path, 'index.html'), html)
}

await write(join(dist, '404.html'), page(NOT_FOUND, '/404'))

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.values(PAGES)
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`
await write(join(dist, 'sitemap.xml'), sitemap)

await write(
  join(dist, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
)

await rm(serverDir, { recursive: true, force: true })
