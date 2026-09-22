import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'

export { PAGES, NOT_FOUND, headTags } from './seo.js'
export { SITE_URL } from './siteData.js'

/** Render one route to HTML at build time. Used only by scripts/prerender.js. */
export function render(url) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  )
}
