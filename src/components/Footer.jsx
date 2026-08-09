import { Link } from 'react-router-dom'
import Wordmark from './Wordmark.jsx'
import { CONTACT, PRODUCTS } from '../siteData.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <Wordmark />
            <p className="footer-blurb">
              Sofftrix builds VUTrak — the CRM that opens the conversation on
              WhatsApp the moment a lead arrives, so nothing goes cold waiting
              for someone to notice it.
            </p>
          </div>

          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              {PRODUCTS.map((product) => (
                <li key={product.to}>
                  <Link to={product.to}>{product.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/product#whatsapp">WhatsApp Business API</Link>
              </li>
              <li>
                <Link to="/contact">Book a demo</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About Sofftrix</Link>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} SOFFTRIX · ALL RIGHTS RESERVED</span>
          <span>{CONTACT.city}</span>
        </div>
      </div>
    </footer>
  )
}
