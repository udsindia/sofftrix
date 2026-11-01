import { Link } from 'react-router-dom'
import LegalPage from '../components/LegalPage.jsx'
import { CONTACT } from '../siteData.js'

/**
 * Privacy policy. Meta asks for a public URL to this page when Sofftrix is
 * onboarded as a WhatsApp Business Platform tech provider, so keep it at
 * /privacy and keep the data-deletion section in it.
 *
 * When the policy changes, update UPDATED and describe what changed.
 * 12 Oct 2026: full legal name, vutrak.com in scope, template management.
 * 1 Nov 2026: Facebook Login and Page data, lead ad details, WhatsApp
 * Business app history, Instagram unsends and human replies, link to
 * /data-deletion.
 */
const UPDATED = '1 November 2026'

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
          Sofftrix Private Limited ("Sofftrix", "we", "us") is a software
          company based in Hyderabad, India. We build and operate VUTrak, a
          lead CRM that lets businesses capture leads and message them through
          the official WhatsApp Business Platform, and AI automation that
          answers conversations on WhatsApp and Instagram for them. This policy
          covers this website (<Link to="/">sofftrix.com</Link>), the VUTrak
          application at{' '}
          <a href="https://vutrak.com" target="_blank" rel="noreferrer">
            vutrak.com
          </a>
          , and our other services.
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
          <strong>Facebook and Instagram lead ads.</strong> When a business
          connects its Facebook Page, we receive each lead submitted on that
          Page's lead forms: the answers given, the form, and the platform,
          campaign, ad set and ad the lead came from.
        </li>
        <li>
          <strong>Facebook Login and Page data.</strong> When someone at a
          business connects VUTrak with Facebook Login, we receive the list of
          Facebook Pages they manage (ID and name), an access token for the
          Page they choose, the Instagram professional account linked to it,
          and the names of that Page's lead forms. We do not store their
          personal Facebook profile, friends, or posts.
        </li>
        <li>
          <strong>WhatsApp messages.</strong> Messages sent and received
          through a business's connected WhatsApp Business number, with
          delivery and read status, timestamps, and any media attached.
        </li>
        <li>
          <strong>WhatsApp Business app history.</strong> If a business
          connects the number it already uses in the WhatsApp Business app,
          and agrees in Meta's signup to share it, we receive its saved
          contacts (name and number), up to 6 months of past chats, and the
          replies it later types in the app, so its conversations stay
          complete in VUTrak. Group chats are not included.
        </li>
        <li>
          <strong>Instagram messages and comments.</strong> Direct messages,
          story replies and mentions, and comments on posts of a business's
          connected Instagram professional account, with the sender's
          Instagram username and profile ID.
        </li>
        <li>
          <strong>Data from Meta and other platforms.</strong> When a business
          connects its accounts, we receive data through Meta's APIs (such as
          the WhatsApp Business Platform, the Instagram API, and Meta lead
          ads) and other lead
          sources like Google Ads and website forms. This includes the
          WhatsApp Business Account ID, phone number ID, Instagram account
          ID, Facebook Page ID, message templates, and access tokens needed to
          send and receive messages for that business.
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
        <li>To create a lead in the business's VUTrak account from each lead ad submission, show which campaign and ad it came from, assign it to a member of the business's team, and send the business's WhatsApp welcome message.</li>
        <li>To show a business's Instagram Direct messages in its VUTrak inbox and send the replies its team writes. When a person unsends an Instagram message, we remove its text from VUTrak too.</li>
        <li>To generate automated AI replies to WhatsApp and Instagram messages, when a business turns this on, using the instructions and information that business provides.</li>
        <li>To set up and manage a business's WhatsApp Business Account, phone number, and Instagram connection through Meta's onboarding (Embedded Signup).</li>
        <li>To create a business's WhatsApp message templates, submit them to Meta for review, and show their review status.</li>
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
          <li>use it to decide anyone's eligibility for housing, employment, credit, insurance, or similar;</li>
          <li>use it to train AI models.</li>
        </ul>
        <p>
          A business can disconnect its WhatsApp, Instagram, or Meta accounts
          at any time, in VUTrak or by removing VUTrak under Business
          integrations in its Facebook settings. When it does, we stop
          collecting data through those connections and revoke the access
          tokens we held.
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
            <strong>Meta (Instagram).</strong> Replies to Instagram messages
            and comments are sent through Instagram's API.
          </li>
          <li>
            <strong>AI model providers.</strong> To write an automated reply,
            the conversation and the business's instructions are sent to the
            AI model provider we use. They process it only to return the
            reply, under terms that do not let them train their models on it.
          </li>
          <li>
            <strong>Service providers.</strong> Hosting, database, and email
            providers who store or process data for us under contract and
            only on our instructions.
          </li>
          <li>
            <strong>The authorities</strong>, only when the law requires it.
            We review each request for legality, challenge requests we
            consider unlawful, disclose only the minimum data necessary, and
            keep a record of every request and our response.
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
        <p>
          Step-by-step instructions, including how to remove VUTrak from your
          Facebook account, are on our{' '}
          <Link to="/data-deletion">data deletion page</Link>. In short, to ask
          us to delete your data, email {email} with:
        </p>
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
        . Post: Sofftrix Private Limited, {CONTACT.address}, India.
      </p>
    ),
  },
]

export default function Privacy() {
  return (
    <LegalPage
      label="Privacy policy"
      updated={UPDATED}
      title="Privacy policy"
      titleMuted="for Sofftrix and VUTrak."
      lede="What we collect, why, who sees it, and how to have it deleted."
      sections={sections}
    />
  )
}
