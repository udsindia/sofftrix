import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * `npm start` serves the build with `vite preview`. Answer unknown URLs with
 * the pre-rendered 404 page and a real 404 status, so search engines drop
 * them instead of indexing a copy of the home page.
 */
function notFoundPage() {
  return {
    name: 'sofftrix-404-page',
    configurePreviewServer(server) {
      const dist = resolve(server.config.root, server.config.build.outDir)
      // Vite serves the page HTML after plugin middleware runs, so step aside
      // for any URL that has a pre-rendered page or a file behind it.
      const exists = (pathname) => {
        const clean = decodeURIComponent(pathname).replace(/\/+$/, '')
        return [clean, `${clean}.html`, `${clean}/index.html`].some(
          (p) => p && existsSync(resolve(dist, `.${p}`))
        )
      }

      return () => {
        server.middlewares.use((req, res, next) => {
          const file = resolve(dist, '404.html')
          const { pathname } = new URL(req.url, 'http://localhost')
          const wantsHtml = (req.headers.accept || '').includes('text/html')
          if (pathname === '/' || !wantsHtml || exists(pathname) || !existsSync(file)) {
            return next()
          }
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(readFileSync(file))
        })
      }
    },
  }
}

export default defineConfig(({ isPreview }) => ({
  plugins: [react(), notFoundPage()],
  // Every page is pre-rendered to its own HTML file (scripts/prerender.js),
  // so the production server must not fall back to index.html for unknown
  // URLs. Dev keeps the SPA fallback so client-side routes reload normally.
  appType: isPreview ? 'mpa' : 'spa',
  preview: {
    host: true,
    port: Number(process.env.PORT) || 4173,
    allowedHosts: true,
  },
}))
