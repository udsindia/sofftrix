import { Link } from 'react-router-dom'
import { SecBar } from '../components/Frame.jsx'

/**
 * Unknown URLs used to render the home page, which search engines read as
 * duplicate content. This page is marked noindex (see src/seo.js) and the
 * build writes it to dist/404.html for hosts that serve one.
 */
export default function NotFound() {
  return (
    <section className="page-head">
      <SecBar num="404" label="Not found" />
      <div className="page-head-inner">
        <h1>
          This page does not exist.{' '}
          <span className="muted">The lead did, though.</span>
        </h1>
        <p>The link may be old, or the address may have a typo.</p>
        <nav className="jump" aria-label="Where to go instead">
          <Link to="/">Home</Link>
          <Link to="/product">VUTrak features</Link>
          <Link to="/contact">Book a demo</Link>
        </nav>
      </div>
    </section>
  )
}
