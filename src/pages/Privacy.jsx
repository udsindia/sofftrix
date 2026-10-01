import { Link } from 'react-router-dom'
import { SecBar } from '../components/Frame.jsx'
import { CONTACT } from '../siteData.js'

/**
 * Privacy policy. Meta asks for a public URL to this page when Sofftrix is
 * onboarded as a WhatsApp Business Platform tech provider, so keep it at
 * /privacy and keep the data-deletion section in it.
 *
 * When the policy changes, update UPDATED and describe what changed.
 */
const UPDATED = '1 October 2026'

const email = (
  <a href={`mailto:${CONTACT.email}`}>
    {CONTACT.email}
  </a>
)

const sections = [
  {
    id: 'who',
    title: 'Who we are',
    body: (
      <>
        <p>
          Sofftrix ("we", "us") is a software company based in Hyderabad,
          India. We build and operate VUTrak, a lead CRM that lets businesses
          capture leads and message them through the official WhatsApp
          Business Platform. This policy covers this website (
          <Link to="/">sofftrix.com</Link>) and the
          VUTrak service.
        </p>
        <p>
          Registered address: {CONTACT.address}, {CONTACT.region}, India.
        </p>
      </>
    ),
  },
  {
    id: 'roles',
    title: 'Our role: controller and processor',
    body: (
      <>
        <p>
          For information about our own customers — the businesses that sign
          up for VUTrak and their users — and for visitors to this website,
          Sofftrix decides how the data is used.
        </p>
        <p>
          For the leads and contacts a business manages in VUTrak, that
          business is in control of the data and we process it on its behalf,
          following its instructions. If you are a lead or customer of a
          business that uses VUTrak, that business's own privacy policy also
          applies, and you can contact it directly about your data.
        </p>
      </>
    ),
  },
  {
    id: 'collect',
    title: 'What we collect',
    body: (
      <ul className="legal-list">
        <li>
          <strong>Account information.</strong> Name, business name, email
          address, phone number, and login details of the people who use
          VUTrak.
        </li>
        <li>
          <strong>Lead and contact data.</strong> Information a business
          brings into VUTrak, such as a lead's name, phone number, email,
          and the answers they gave on a form or ad.
        </li>
        <li>
          <strong>WhatsApp messages.</strong> Messages sent and received
          through a business's connected WhatsApp Business number, with
          delivery and read status, timestamps, and any media attached.
        </li>
        <li>
          <strong>Data from Meta and other platforms.</strong> When a business
          connects its accounts, we receive data through Meta's APIs (such as
          the WhatsApp Business Platform and Meta lead ads) and other lead
          sources like Google Ads and website forms. This includes the
          WhatsApp Business Account ID, phone number ID, message templates,
          and access tokens needed to send and receive messages for that
          business.
        </li>
        <li>
          <strong>Demo requests.</strong> The details you type into our demo
          form, which reach us by email.
        </li>
        <li>
          <strong>Technical data.</strong> IP address, browser type, device
          information, and logs our servers record when you use the service.
        </li>
      </ul>
    ),
  },
  {
    id: 'use',
    title: 'How we use it',
    body: (
      <ul className="legal-list">
        <li>To provide VUTrak: receive leads, send and receive WhatsApp messages on a business's behalf, route conversations, and show reports.</li>
        <li>To set up and manage a business's WhatsApp Business Account and phone number through Meta's onboarding.</li>
        <li>To respond to demo requests and support questions.</li>
        <li>To keep the service secure, prevent abuse, and fix problems.</li>
        <li>To meet legal obligations and Meta's platform requirements.</li>
      </ul>
    ),
  },
  {
    id: 'meta',
    title: 'Data from Meta Platforms',
    body: (
      <>
        <p>
          Data we receive through Meta's APIs is used only to provide VUTrak
          to the business that connected its account, and only as Meta's
          Platform Terms and WhatsApp Business policies allow. We do not:
        </p>
        <ul className="legal-list">
          <li>sell, license, or rent it to anyone;</li>
          <li>use it for advertising, or to build profiles of people for anyone other than the business that owns it;</li>
          <li>share it with data brokers;</li>
          <li>use it to decide anyone's eligibility for housing, employment, credit, insurance, or similar.</li>
        </ul>
        <p>
          A business can disconnect its WhatsApp or Meta accounts from VUTrak
          at any time. When it does, we stop collecting data through those
          connections and revoke the access tokens we held.
        </p>
      </>
    ),
  },
  {
    id: 'share',
    title: 'Who we share it with',
    body: (
      <>
        <p>We do not sell personal data. We share it only with:</p>
        <ul className="legal-list">
          <li>
            <strong>Meta (WhatsApp).</strong> Messages a business sends are
            delivered through the WhatsApp Business Platform, run by Meta.
          </li>
          <li>
            <strong>Service providers.</strong> Hosting, database, and email
            providers who store or process data for us under contract and
            only on our instructions.
          </li>
          <li>
            <strong>The authorities</strong>, when the law requires it.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Storage and security',
    body: (
      <p>
        Every business runs in its own isolated workspace. Data is encrypted
        in transit, access tokens are stored encrypted, and access by our
        staff is limited to what is needed to run and support the service.
        No system is perfectly secure, but we work to protect data against
        loss, misuse, and unauthorised access.
      </p>
    ),
  },
  {
    id: 'retention',
    title: 'How long we keep it',
    body: (
      <p>
        We keep a business's data for as long as its VUTrak account is
        active. When an account is closed, we delete its data, including
        leads, messages, and Meta access tokens, within 30 days, except where
        the law requires us to keep something for longer.
      </p>
    ),
  },
  {
    id: 'deletion',
    title: 'Deleting your data',
    body: (
      <>
        <p>To ask us to delete your data, email {email} with:</p>
        <ul className="legal-list">
          <li>the subject line "Data deletion request";</li>
          <li>your name, and the phone number or email address the data is linked to;</li>
          <li>the business name, if you are a VUTrak customer.</li>
        </ul>
        <p>
          We will confirm the request and delete the data within 30 days. If
          you are a lead of a business that uses VUTrak, we may pass your
          request to that business, since it controls your data, and act on
          its instructions.
        </p>
        <p>
          You can also stop receiving WhatsApp messages from a business at any
          time by replying STOP or blocking its number in WhatsApp.
        </p>
      </>
    ),
  },
  {
    id: 'rights',
    title: 'Your rights',
    body: (
      <p>
        Under India's Digital Personal Data Protection Act, 2023 and other
        laws that apply to you, you can ask to see the personal data we hold
        about you, correct it, delete it, or withdraw consent you gave
        earlier. Email {email} and we will reply within 30 days.
      </p>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    body: (
      <p>
        VUTrak is a business tool and is not meant for anyone under 18. We do
        not knowingly collect data from children.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        If we change this policy, we will update the date at the top of this
        page. If the change is significant, we will tell VUTrak customers by
        email before it takes effect.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <p>
        Questions or complaints about privacy: {email}, or call{' '}
        <a href={`tel:${CONTACT.phoneHref}`}>
          {CONTACT.phone}
        </a>
        . Post: Sofftrix, {CONTACT.address}, India.
      </p>
    ),
  },
]

export default function Privacy() {
  return (
    <>
      <section className="page-head">
        <SecBar num="00" label="Privacy policy" aside={`Updated ${UPDATED}`} />
        <div className="page-head-inner">
          <h1>
            Privacy policy{' '}
            <span className="muted">for Sofftrix and VUTrak.</span>
          </h1>
          <p>
            What we collect, why, who sees it, and how to have it deleted.
            Last updated {UPDATED}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner legal">
          {sections.map((s, i) => (
            <section className="legal-section" id={s.id} key={s.id}>
              <h2>
                <span className="legal-num">{String(i + 1).padStart(2, '0')}</span>
                {s.title}
              </h2>
              <div className="legal-body">{s.body}</div>
            </section>
          ))}
        </div>
      </section>
    </>
  )
}
