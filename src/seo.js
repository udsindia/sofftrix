import { CONTACT, SITE_URL } from './siteData.js'
import { FAQS } from './faqs.js'

/**
 * Everything search engines and link previews read about each page.
 *
 * headTags() is the single source of truth. The build (scripts/prerender.js)
 * writes its output into each page's static HTML, and <PageMeta> in App.jsx
 * swaps the same tags in when the visitor navigates client-side. Every tag it
 * emits carries data-seo so the swap can find and replace them.
 *
 * Keep titles under ~60 characters and descriptions under ~155, or Google
 * truncates them in results.
 */

const OG_IMAGE = `${SITE_URL}/og.png`

const ORG_ID = `${SITE_URL}/#organization`

const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Sofftrix',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.jpg`,
  email: CONTACT.email,
  telephone: CONTACT.phoneHref,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.street,
    addressLocality: CONTACT.locality,
    addressRegion: CONTACT.region,
    postalCode: CONTACT.postalCode,
    addressCountry: CONTACT.country,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: CONTACT.phoneHref,
    email: CONTACT.email,
    areaServed: 'IN',
    availableLanguage: ['en'],
  },
}

const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'Sofftrix',
  publisher: { '@id': ORG_ID },
}

const software = {
  '@type': 'SoftwareApplication',
  '@id': `${SITE_URL}/product#software`,
  name: 'VUTrak',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'CRM',
  operatingSystem: 'Web',
  url: `${SITE_URL}/product`,
  description:
    'A lead CRM that sends every new lead a WhatsApp message within seconds of arriving, through the official WhatsApp Business API, and keeps every conversation in one shared pipeline.',
  publisher: { '@id': ORG_ID },
}

const faqPage = {
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faq`,
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

function breadcrumb(name, path) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
    ],
  }
}

/** The indexable pages. The sitemap is generated from this list. */
export const PAGES = {
  '/': {
    path: '/',
    title: 'VUTrak — WhatsApp CRM for Instant Lead Response | Sofftrix',
    description:
      'VUTrak is a lead CRM that messages every new lead on WhatsApp within seconds, from Meta and Google ads, web forms and calls, in one shared pipeline.',
    priority: '1.0',
    schema: [organization, website, software, faqPage],
  },
  '/product': {
    path: '/product',
    title: 'VUTrak Features: Lead Capture, WhatsApp & Pipeline',
    description:
      'Capture leads from ads and forms, reply on the official WhatsApp Business API in seconds, route them to reps, and see which campaigns become revenue.',
    priority: '0.9',
    schema: [organization, software, breadcrumb('VUTrak', '/product')],
  },
  '/about': {
    path: '/about',
    title: 'About Sofftrix — The Hyderabad Team Behind VUTrak',
    description:
      'Sofftrix is a Hyderabad software company building VUTrak, a WhatsApp-first lead CRM for businesses that lose leads to slow replies.',
    priority: '0.6',
    schema: [organization, breadcrumb('About Sofftrix', '/about')],
  },
  '/contact': {
    path: '/contact',
    title: 'Book a VUTrak Demo | Sofftrix',
    description:
      'Book a 30-minute VUTrak demo. We connect one of your lead sources and you watch the first WhatsApp message go out. Based in Hyderabad, India.',
    priority: '0.8',
    schema: [organization, breadcrumb('Book a demo', '/contact')],
  },
}

export const NOT_FOUND = {
  path: null,
  title: 'Page not found | Sofftrix',
  description: 'This page does not exist. Head back to the VUTrak home page.',
  noindex: true,
  schema: [],
}

/** Look up a route, ignoring a trailing slash. Unknown routes are 404s. */
export function pageFor(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return PAGES[clean] ?? NOT_FOUND
}

function esc(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/** The <head> tags for one page, as an HTML string. */
export function headTags(page) {
  const url = page.path ? `${SITE_URL}${page.path === '/' ? '/' : page.path}` : null
  const tags = [
    `<title data-seo>${esc(page.title)}</title>`,
    `<meta data-seo name="description" content="${esc(page.description)}" />`,
    `<meta data-seo name="robots" content="${page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />`,
    url && `<link data-seo rel="canonical" href="${url}" />`,
    `<meta data-seo property="og:type" content="website" />`,
    `<meta data-seo property="og:site_name" content="Sofftrix" />`,
    `<meta data-seo property="og:locale" content="en_IN" />`,
    `<meta data-seo property="og:title" content="${esc(page.title)}" />`,
    `<meta data-seo property="og:description" content="${esc(page.description)}" />`,
    url && `<meta data-seo property="og:url" content="${url}" />`,
    `<meta data-seo property="og:image" content="${OG_IMAGE}" />`,
    `<meta data-seo property="og:image:width" content="1200" />`,
    `<meta data-seo property="og:image:height" content="630" />`,
    `<meta data-seo property="og:image:alt" content="VUTrak by Sofftrix: reach every new lead on WhatsApp in four seconds." />`,
    `<meta data-seo name="twitter:card" content="summary_large_image" />`,
    `<meta data-seo name="twitter:title" content="${esc(page.title)}" />`,
    `<meta data-seo name="twitter:description" content="${esc(page.description)}" />`,
    `<meta data-seo name="twitter:image" content="${OG_IMAGE}" />`,
  ]

  if (page.schema.length) {
    // "<" is escaped so no string in the data can close the script tag.
    const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': page.schema })
    tags.push(`<script data-seo type="application/ld+json">${json.replace(/</g, '\\u003c')}</script>`)
  }

  return tags.filter(Boolean).join('\n    ')
}
