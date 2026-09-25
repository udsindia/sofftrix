import { Link } from 'react-router-dom'
import Wordmark from './Wordmark.jsx'
import { CONTACT, PRODUCTS, SOCIAL } from '../siteData.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Wordmark />
          <p className="footer-blurb">
            Sofftrix builds VUTrak — the CRM that opens the conversation on
            WhatsApp the moment a lead arrives, so nothing goes cold waiting
            for someone to notice it.
          </p>
        </div>

        <div className="footer-col">
          <h2>Products</h2>
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
              <Link to="/product#track">Pipeline &amp; routing</Link>
            </li>
            <li>
              <Link to="/product#grow">Reporting</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h2>Company</h2>
          <ul>
            <li>
              <Link to="/about">About Sofftrix</Link>
            </li>
            <li>
              <Link to="/contact">Book a demo</Link>
            </li>
            <li>
              <a href={SOCIAL.linkedin} rel="me noopener" target="_blank">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h2>Contact</h2>
          <ul>
            <li>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
            </li>
            <li>
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Sofftrix · All rights reserved</span>
        <span>{CONTACT.city}</span>
      </div>
    </footer>
  )
}
