/**
 * Single place for the details you'll want to change without touching layout.
 */

/** The live address. Canonical links, the sitemap, and share previews use it. */
export const SITE_URL = 'https://www.sofftrix.com'

/**
 * Sofftrix is the company; VUTrak is a product it sells. Add future products
 * here and they appear in the nav and footer automatically.
 */
export const PRODUCTS = [
  {
    name: 'VUTrak',
    tagline: 'Lead CRM with WhatsApp as the first connect',
    to: '/product',
  },
]

export const CONTACT = {
  email: 'udsindiateam@gmail.com',
  phone: '+91 97043 56075',
  phoneHref: '+919704356075',
  address: 'Flat No. 285, Jal Vayu Vihar, KPHB, Hyderabad 500072',
  city: 'HYDERABAD, INDIA',
  // The same address split into fields, for search engines (structured data).
  street: 'Flat No. 285, Jal Vayu Vihar, KPHB',
  locality: 'Hyderabad',
  region: 'Telangana',
  postalCode: '500072',
  country: 'IN',
}
