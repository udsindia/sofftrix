import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Wordmark from './Wordmark.jsx'
import { PRODUCTS } from '../siteData.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const { pathname } = useLocation()
  const productsRef = useRef(null)

  // Close both menus whenever the route changes.
  useEffect(() => {
    setOpen(false)
    setProductsOpen(false)
  }, [pathname])

  // Escape closes the products menu; a click outside dismisses it.
  useEffect(() => {
    if (!productsOpen) return undefined

    function onKeyDown(e) {
      if (e.key === 'Escape') setProductsOpen(false)
    }
    function onPointerDown(e) {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setProductsOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [productsOpen])

  const onProductPage = PRODUCTS.some((p) => p.to === pathname)

  return (
    <header className={'nav' + (open ? ' is-open' : '')}>
      <div className="nav-inner">
        <Link to="/" aria-label="Sofftrix — home">
          <Wordmark />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav className="nav-links">
          {/* Click to open rather than hover: hover menus open by accident,
              and a tap fires mouseenter then click, which cancels itself. */}
          <div
            className={'nav-item' + (productsOpen ? ' is-showing' : '')}
            ref={productsRef}
          >
            <button
              type="button"
              className={'nav-link nav-menu-btn' + (onProductPage ? ' is-active' : '')}
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen((v) => !v)}
            >
              Products
              <span className="nav-caret" aria-hidden="true">
                ▾
              </span>
            </button>

            <div className="nav-menu">
              {PRODUCTS.map((product) => (
                <NavLink key={product.to} to={product.to} className="nav-menu-item">
                  <span className="nmi-name">{product.name}</span>
                  <span className="nmi-desc">{product.tagline}</span>
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink
            to="/about"
            className={({ isActive }) => 'nav-link' + (isActive ? ' is-active' : '')}
          >
            Company
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => 'nav-link' + (isActive ? ' is-active' : '')}
          >
            Contact
          </NavLink>
        </nav>

        <div className="nav-cta">
          <Link to="/contact" className="btn btn-primary">
            Book a demo
          </Link>
        </div>
      </div>
    </header>
  )
}
