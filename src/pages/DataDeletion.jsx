import { Link } from 'react-router-dom'
import LegalPage from '../components/LegalPage.jsx'
import { CONTACT } from '../siteData.js'

/**
 * User data deletion instructions. Meta asks every app for a public "Data
 * deletion instructions URL" (App settings → Basic → User data deletion), so
 * keep this page at /data-deletion and keep it reachable without logging in.
 *
 * When the steps change, update UPDATED.
 */
const UPDATED = '1 November 2026'

const email = (
  <a href={`mailto:${CONTACT.email}?subject=Data%20deletion%20request`}>
    {CONTACT.email}
  </a>
)

const sections = [
  {
    id: 'summary',
    title: 'In short',
    body: (
      <>
        <p>
          You can have the data Sofftrix holds about you deleted at any time.
          Email {email} with the subject <strong>"Data deletion request"</strong>.
          We confirm within 3 working days and finish the deletion within 30
          days. The sections below say what to include and what else you can do
          yourself, depending on how your data reached us.
        </p>
        <p>
          The full details of what we collect and why are in our{' '}
          <Link to="/privacy">privacy policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'facebook-login',
    title: 'If you connected Facebook, Instagram or WhatsApp to VUTrak',
    body: (
      <>
        <p>
          Businesses connect their Facebook Page, Instagram professional
          account or WhatsApp Business Account to VUTrak with Facebook Login.
          To remove VUTrak's access and have the data deleted:
        </p>
        <ol className="legal-list">
          <li>
            <strong>Remove VUTrak from Facebook.</strong> On Facebook, open{' '}
            <strong>Settings &amp; privacy → Settings → Business integrations</strong>{' '}
            (or <strong>Apps and websites</strong>), select <strong>VUTrak</strong>,
            and click <strong>Remove</strong>. This stops VUTrak's access to your
            Pages, Instagram account and lead forms straight away.
          </li>
          <li>
            <strong>Disconnect inside VUTrak</strong> (optional, if you still have
            access): Settings → Lead Ads or Settings → WhatsApp.
          </li>
          <li>
            <strong>Ask us to delete what we already received.</strong> Email {email}{' '}
            with your business name, your name, and the Facebook Page, Instagram
            account or WhatsApp number that was connected.
          </li>
        </ol>
        <p>
          We then delete the access tokens we held, the leads received from
          your lead forms, the Instagram and WhatsApp conversations stored for
          your account, and the account details, within 30 days.
        </p>
      </>
    ),
  },
  {
    id: 'customer',
    title: 'If your business has a VUTrak account',
    body: (
      <>
        <p>
          To close your account and delete all of its data, email {email} from
          the address registered on the account, with your business name. We
          delete the account, its users, leads, notes, tasks, messages and all
          connected Meta and Google accounts' tokens within 30 days.
        </p>
        <p>
          To delete a single lead or contact, an admin of your account can
          delete it inside VUTrak, or email us and we will do it.
        </p>
      </>
    ),
  },
  {
    id: 'lead',
    title: "If you are a lead or customer of a business that uses VUTrak",
    body: (
      <>
        <p>
          If you filled in a form or ad, or messaged a business on WhatsApp or
          Instagram, and that business uses VUTrak, the business controls your
          data and we hold it on its behalf. You can:
        </p>
        <ul className="legal-list">
          <li>ask the business directly to delete your details; or</li>
          <li>
            email {email} with your name, the phone number, email address or
            Instagram username the data is linked to, and the business's name if
            you know it. We pass the request to the business and delete the
            data on its instructions, normally within 30 days.
          </li>
        </ul>
        <p>
          To stop messages straight away, reply <strong>STOP</strong> to the
          business on WhatsApp, or block it on WhatsApp or Instagram.
        </p>
      </>
    ),
  },
  {
    id: 'what',
    title: 'What is deleted, and what is kept',
    body: (
      <>
        <p>We delete the personal data linked to the request, including:</p>
        <ul className="legal-list">
          <li>names, phone numbers, email addresses and form answers;</li>
          <li>WhatsApp and Instagram messages and media references;</li>
          <li>Facebook Page, Instagram and WhatsApp access tokens and IDs;</li>
          <li>notes, tasks and activity history about the person.</li>
        </ul>
        <p>
          We keep only what the law requires us to keep, such as invoices for
          tax purposes, and only for as long as the law requires. Copies in our
          database backups disappear as those backups expire on their regular
          schedule, and are never restored for any other purpose. Messages already delivered to
          someone's WhatsApp or Instagram stay on their device; Meta and the
          recipient control those copies.
        </p>
      </>
    ),
  },
  {
    id: 'confirm',
    title: 'Confirmation',
    body: (
      <p>
        We reply to every request with a reference number and confirm by email
        when the deletion is complete. If we cannot identify the data from the
        details you sent, we will ask for one more detail, never for a password
        or a one-time code. Questions: {email} or{' '}
        <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>.
      </p>
    ),
  },
]

export default function DataDeletion() {
  return (
    <LegalPage
      label="Data deletion"
      updated={UPDATED}
      title="Delete your data"
      titleMuted="from Sofftrix and VUTrak."
      lede="How to remove VUTrak's access to your Facebook, Instagram or WhatsApp account and have your data deleted."
      sections={sections}
    />
  )
}
