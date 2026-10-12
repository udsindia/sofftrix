import { Link } from 'react-router-dom'
import LegalPage from '../components/LegalPage.jsx'
import { CONTACT } from '../siteData.js'

/**
 * Terms of service. Meta asks for this URL alongside the privacy policy when
 * Sofftrix is onboarded as a WhatsApp Business Platform tech provider, so
 * keep it at /terms.
 *
 * When the terms change, update UPDATED.
 * 12 Oct 2026: full legal name, vutrak.com in scope, templates submitted to Meta.
 */
const UPDATED = '12 October 2026'

const email = <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>

const sections = [
  {
    id: 'agreement',
    title: 'The agreement',
    body: (
      <>
        <p>
          These terms are an agreement between Sofftrix Private Limited, of{' '}
          {CONTACT.address}, India ("Sofftrix", "we", "us"), and the business
          that signs up for or uses VUTrak or our AI automation ("you", "the
          customer"). They cover this website, the VUTrak application at{' '}
          <a href="https://vutrak.com" target="_blank" rel="noreferrer">
            vutrak.com
          </a>
          , and all of our services (together, "the service").
        </p>
        <p>
          By creating an account, connecting a WhatsApp or Instagram account,
          or using the service, you accept these terms. If you accept them for
          a company, you confirm you are authorised to bind it. If you have
          signed a separate written agreement or order form with us, that
          document takes priority where it differs from these terms.
        </p>
      </>
    ),
  },
  {
    id: 'service',
    title: 'The service',
    body: (
      <p>
        VUTrak is a lead CRM that captures leads from ads, forms, and other
        sources and lets your team message them through the official WhatsApp
        Business Platform. Our AI automation answers and qualifies
        conversations on WhatsApp and Instagram on your behalf. We may
        improve, change, or remove features over time; if we remove something
        you rely on, we will tell you in advance where we reasonably can.
      </p>
    ),
  },
  {
    id: 'accounts',
    title: 'Accounts',
    body: (
      <ul className="legal-list">
        <li>You must be a business and at least 18 years old to use the service.</li>
        <li>Keep login details secure. You are responsible for everything done through your account and your users' accounts.</li>
        <li>Give us accurate information, and tell us if you suspect unauthorised access.</li>
      </ul>
    ),
  },
  {
    id: 'meta',
    title: 'WhatsApp, Instagram, and Meta',
    body: (
      <>
        <p>
          Messaging runs on platforms owned by Meta. When you connect a
          WhatsApp Business Account or Instagram professional account, you
          also agree to, and must follow:
        </p>
        <ul className="legal-list">
          <li>the WhatsApp Business Terms of Service, WhatsApp Business Messaging Policy, and WhatsApp Commerce Policy;</li>
          <li>Instagram's Terms of Use and Community Guidelines;</li>
          <li>Meta's Platform Terms and Developer Policies.</li>
        </ul>
        <p>
          You connect your WhatsApp Business Account to VUTrak through Meta's
          signup, and message templates you create in VUTrak are submitted to
          Meta for review on your behalf.
        </p>
        <p>
          Meta decides message pricing, template approval, messaging limits,
          and whether an account stays active. We do not control those
          decisions and are not responsible if Meta restricts, suspends, or
          bans your number or account. Meta's conversation charges are passed
          on to you as described in your plan.
        </p>
      </>
    ),
  },
  {
    id: 'responsibilities',
    title: 'Your responsibilities',
    body: (
      <>
        <p>You are responsible for the contacts you message and what you send them. In particular, you must:</p>
        <ul className="legal-list">
          <li>have each person's consent (opt-in) before messaging them on WhatsApp, and honour opt-out requests straight away;</li>
          <li>have a lawful basis, under the laws that apply to you, for every piece of personal data you bring into the service;</li>
          <li>publish your own privacy policy telling your leads and customers how you use their data, including that you use VUTrak;</li>
          <li>make sure your message templates, AI instructions, and knowledge base are accurate and lawful.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    body: (
      <>
        <p>You must not use the service to:</p>
        <ul className="legal-list">
          <li>send spam, or message people who have not opted in or have opted out;</li>
          <li>send anything illegal, misleading, harassing, hateful, or sexually explicit;</li>
          <li>sell or promote products and services that WhatsApp or Instagram prohibit;</li>
          <li>impersonate another person or business, or hide who is sending a message;</li>
          <li>break into, overload, reverse engineer, or resell the service without our written permission.</li>
        </ul>
        <p>
          We may suspend an account that breaks these rules or puts our
          platform, other customers, or our standing with Meta at risk. Where
          we can, we will warn you first and give you a chance to fix it.
        </p>
      </>
    ),
  },
  {
    id: 'ai',
    title: 'AI automation',
    body: (
      <>
        <p>
          AI replies are generated automatically from the instructions and
          information you give us. They can be wrong, incomplete, or
          misunderstand a message. You are responsible for:
        </p>
        <ul className="legal-list">
          <li>reviewing how the assistant is set up and what it is allowed to say;</li>
          <li>not letting it give medical, legal, financial, or other professional advice, or make commitments on prices or terms you have not approved;</li>
          <li>telling people they are talking to an automated assistant where the law or Meta's policies require it, and offering a way to reach a person.</li>
        </ul>
        <p>
          We do not use your conversations or customer data to train AI
          models for anyone else.
        </p>
      </>
    ),
  },
  {
    id: 'data',
    title: 'Your data',
    body: (
      <p>
        You own the data you and your contacts put into the service. You give
        us permission to store and process it only to provide the service to
        you. How we handle personal data is set out in our{' '}
        <Link to="/privacy">privacy policy</Link>. You can export your data
        while your account is active, and we delete it after the account is
        closed as described there.
      </p>
    ),
  },
  {
    id: 'fees',
    title: 'Fees and payment',
    body: (
      <p>
        Fees are as set out in your plan, quote, or invoice. Unless agreed
        otherwise, fees are billed in advance in Indian rupees, exclude GST
        and other taxes, and are not refundable for partial periods. Meta's
        messaging charges are billed separately. If an invoice stays unpaid
        for more than 15 days after its due date, we may suspend the service
        after notifying you.
      </p>
    ),
  },
  {
    id: 'ip',
    title: 'Our intellectual property',
    body: (
      <p>
        The service, its software, and the Sofftrix and VUTrak names and logos
        belong to Sofftrix Private Limited. You get a limited, non-exclusive,
        non-transferable right to use the service for your own business while
        your account is active. If you send us suggestions, we may use them
        without any obligation to you.
      </p>
    ),
  },
  {
    id: 'availability',
    title: 'Availability',
    body: (
      <p>
        We work to keep the service running, but we do not promise it will be
        uninterrupted or error-free. It depends on third parties such as Meta,
        hosting providers, and AI model providers, and their outages can
        affect it. We will try to schedule maintenance outside Indian business
        hours.
      </p>
    ),
  },
  {
    id: 'termination',
    title: 'Ending the agreement',
    body: (
      <p>
        You can stop using the service and close your account at any time by
        emailing {email}. We can end these terms with 30 days' notice, or
        straight away if you seriously or repeatedly break them. When the
        agreement ends, your access stops, we disconnect your WhatsApp and
        Instagram accounts and revoke our access to them, and your data is
        deleted as described in the privacy policy.
      </p>
    ),
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    body: (
      <p>
        Apart from what these terms expressly say, the service is provided
        "as is". To the extent the law allows, we disclaim all other
        warranties, including fitness for a particular purpose. We do not
        guarantee any particular number of leads, replies, or sales.
      </p>
    ),
  },
  {
    id: 'liability',
    title: 'Limits on liability',
    body: (
      <>
        <p>
          To the extent the law allows, neither side is liable to the other
          for indirect or consequential loss, or for lost profits, revenue, or
          data. Our total liability under these terms is limited to the fees
          you paid us in the 12 months before the claim arose.
        </p>
        <p>
          Nothing in these terms limits liability that cannot be limited by
          law, such as for fraud.
        </p>
      </>
    ),
  },
  {
    id: 'indemnity',
    title: 'Indemnity',
    body: (
      <p>
        You will cover our costs, including reasonable legal costs, if a third
        party brings a claim against us because of messages you sent, data
        you brought into the service without a lawful basis, or your breach
        of these terms or Meta's policies.
      </p>
    ),
  },
  {
    id: 'law',
    title: 'Governing law',
    body: (
      <p>
        These terms are governed by the laws of India. The courts at
        Hyderabad, Telangana have exclusive jurisdiction over any dispute
        about them. Before going to court, both sides will try in good faith
        to resolve the dispute by talking for at least 30 days.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    body: (
      <p>
        We may update these terms. We will change the date at the top of this
        page and, for significant changes, email customers at least 15 days
        before they take effect. Using the service after that means you
        accept the new terms.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <p>
        Questions about these terms: {email}, or call{' '}
        <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>. Post:
        Sofftrix Private Limited, {CONTACT.address}, India.
      </p>
    ),
  },
]

export default function Terms() {
  return (
    <LegalPage
      label="Terms of service"
      updated={UPDATED}
      title="Terms of service"
      titleMuted="for Sofftrix and VUTrak."
      lede="The rules for using our software, including WhatsApp, Instagram, and AI automation."
      sections={sections}
    />
  )
}
