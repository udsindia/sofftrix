import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import { headTags, pageFor } from './seo.js'

/** Start each route at the top, unless the link pointed at an anchor. */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

/**
 * Keep the <head> in step with the route. The build already wrote the right
 * tags into each page's HTML, so this only matters after in-app navigation.
 */
function PageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove())
    document.head.insertAdjacentHTML('beforeend', headTags(pageFor(pathname)))
  }, [pathname])

  return null
}

export default function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <PageMeta />
      {/* The frame draws the two vertical rails the whole site sits between. */}
      <div className="frame">
        <Navbar />
        <main className="app-main" id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}
