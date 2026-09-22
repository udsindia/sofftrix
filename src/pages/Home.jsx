import { Link } from 'react-router-dom'
import LeadInbox from '../components/LeadInbox.jsx'
import Reveal from '../components/Reveal.jsx'
import Closing from '../components/Closing.jsx'
import Icon from '../components/Icon.jsx'
import { Corners, Hatch, SecBar } from '../components/Frame.jsx'
import { FAQS } from '../faqs.js'

/* Where leads actually go missing. No invented statistics — these are the
   failure modes, which is what an owner recognises anyway. */
const leaks = [
  {
    icon: 'eyeOff',
    title: 'Nobody saw it',
    body: 'The lead lands in an ad account, a form inbox, or a spreadsheet nobody has open. It is not lost, it is just unread until tomorrow.',
  },
  {
    icon: 'phoneMissed',
    title: 'Somebody called once',
    body: 'One missed call at 3pm and the lead quietly becomes a row that no one owns. There is no second attempt because there is no record of the first.',
  },
  {
    icon: 'smartphone',
    title: 'The thread lives on a phone',
    body: 'The conversation happens on a rep’s personal WhatsApp. When they are busy, on leave, or gone, the history goes with them.',
  },
]

/* The lifecycle of one lead. This is a real sequence, so it is numbered by
   the only unit that matters here: time since the lead arrived. */
const timeline = [
  {
    stamp: '0:00',
    unit: 'lead lands',
    reached: false,
    title: 'Every source feeds one pipeline',
    body: 'Meta and Google lead ads, your website forms, landing pages, missed calls, and your WhatsApp business number all arrive in the same place, tagged with where they came from and what campaign paid for them.',
    tags: ['Meta lead ads', 'Google ads', 'Web forms', 'Click-to-WhatsApp', 'CSV import'],
  },
  {
    stamp: '0:04',
    unit: 'first contact',
    reached: true,
    title: 'VUTrak opens the conversation on WhatsApp',
    body: 'Before anyone on your team has picked up a phone, the lead has a message from your business number — sent through the official WhatsApp Business API, from an approved template, in their language. This is the moment leaks stop.',
    tags: ['WhatsApp Business API', 'Approved templates', 'Business number', 'Delivery receipts'],
  },
  {
    stamp: '0:40',
    unit: 'qualified',
    reached: true,
    title: 'The reply routes itself to an owner',
    body: 'When the lead answers, VUTrak scores and assigns them by source, territory, or round-robin. The rep gets the whole thread, not a name and a number. Every lead has an owner and a next step from the first minute.',
    tags: ['Auto-assignment', 'Lead scoring', 'Shared team inbox', 'SLA timers'],
  },
  {
    stamp: 'Day 2',
    unit: 'nurture',
    reached: true,
    title: 'Follow-ups happen whether or not anyone remembers',
    body: 'Sequences keep quiet leads warm on WhatsApp — a reminder, a brochure, a price list, a booking link. Anything a human replies to stops the sequence immediately, so nobody gets messaged after they have already answered.',
    tags: ['Drip sequences', 'Media & documents', 'Reminders', 'Auto-stop on reply'],
  },
  {
    stamp: 'Day 9',
    unit: 'closed',
    reached: true,
    title: 'You can see which spend actually became revenue',
    body: 'Because the source rode along from the first second, the dashboard answers the question owners actually ask: which campaign, which rep, and which stage is losing people. Response time is tracked as a first-class number.',
    tags: ['Pipeline dashboard', 'Source attribution', 'Rep performance', 'Response-time report'],
  },
]

const verticals = [
  {
    lead: 'Education',
    title: 'Consultancies and institutes',
    body: 'Enquiry to counselling session to enrolment, with brochures and document requests going out over WhatsApp instead of email nobody opens.',
  },
  {
    lead: 'Real estate',
    title: 'Developers and brokers',
    body: 'Portal and ad leads reach a rep in seconds, with site-visit reminders and floor plans sent straight into the chat.',
  },
  {
    lead: 'Healthcare',
    title: 'Clinics and diagnostics',
    body: 'Appointment enquiries get answered instantly and confirmed on WhatsApp, which cuts the no-shows that phone-only booking creates.',
  },
  {
    lead: 'Services',
    title: 'Agencies, interiors, finance',
    body: 'High-consideration sales where the first business to reply is usually the one that gets the meeting.',
  },
]

/* Where leads come in from. These are real integrations, so they take the
   place a customer-logo wall would have — no invented logos. */
const sources = [
  'Meta lead ads',
  'Google ads',
  'Website forms',
  'Landing pages',
  'Click-to-WhatsApp',
  'Missed calls',
  'WhatsApp inbox',
  'CSV import',
]

/* Things that are true of the platform, shown beside the four-second clock. */
const guarantees = [
  { k: 'Messaging', v: 'Official WhatsApp Business API' },
  { k: 'First message', v: 'Pre-approved template' },
  { k: 'Receipts', v: 'Delivered & read, per message' },
  { k: 'Tenancy', v: 'Isolated workspace per business' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <SecBar num="01" label="Lead CRM" aside="WhatsApp · Meta · Google · Web" />

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-chips">
              <span className="chip">
                <span className="chip-dot is-waiting" /> A lead just landed
              </span>
              <span className="chip">Official WhatsApp Business API</span>
            </div>
            <h1>
              Reach every new lead in <span className="hl">four seconds</span>,
              not four hours.
            </h1>
            <p className="hero-sub">
              VUTrak is a CRM that does not wait for your team to notice. The
              moment a lead arrives from an ad, a form, or a call, it opens the
              conversation on WhatsApp — then keeps the whole thread, the owner,
              and the next step in one pipeline.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Book a demo <span className="btn-arrow">→</span>
              </Link>
              <Link to="/product" className="btn btn-ghost">
                See how it works
              </Link>
            </div>

            <dl className="hero-stats">
              <div>
                <dt>First message</dt>
                <dd>
                  0:04<small>sec</small>
                </dd>
              </div>
              <div>
                <dt>Lead sources</dt>
                <dd>
                  {sources.length}
                  <small>built in</small>
                </dd>
              </div>
              <div>
                <dt>Pipeline</dt>
                <dd>
                  1<small>shared</small>
                </dd>
              </div>
            </dl>
          </div>

          <Corners className="hero-visual">
            <LeadInbox />
          </Corners>
        </div>

        <div className="sources">
          <p className="sources-label">Leads arrive from</p>
          <ul className="sources-grid">
            {sources.map((source) => (
              <li key={source}>{source}</li>
            ))}
          </ul>
        </div>
      </section>

      <Hatch />

      <section className="section">
        <SecBar num="02" label="The problem" aside="Three leaks" />
        <div className="section-inner">
          <Reveal className="section-head">
            <h2 className="section-title">
              Leads rarely go to a competitor.{' '}
              <span className="muted">They go unanswered.</span>
            </h2>
            <p className="section-lede">
              You already pay for the lead. What decides whether it becomes
              revenue is usually just how long it sat there — and that gap is
              almost never a strategy problem. It is one of these three.
            </p>
          </Reveal>

          <div className="cells cells-3">
            {leaks.map((leak, i) => (
              <Reveal className="cell" key={leak.title}>
                <div className="cell-top">
                  <span className="cell-icon is-waiting">
                    <Icon name={leak.icon} />
                  </span>
                  <span className="cell-idx">leak / 0{i + 1}</span>
                </div>
                <h3>{leak.title}</h3>
                <p>{leak.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Hatch />

      <section className="section">
        <SecBar num="03" label="How it works" aside="The clock starts when the lead arrives" />
        <div className="section-inner">
          <Reveal className="section-head">
            <h2 className="section-title">
              What VUTrak does,{' '}
              <span className="muted">in the order it does it.</span>
            </h2>
            <p className="section-lede">
              Every feature below is pinned to the moment it fires.
            </p>
          </Reveal>

          <ol className="timeline">
            {timeline.map((item) => (
              <Reveal
                as="li"
                className={'tl-row' + (item.reached ? ' is-reached' : '')}
                key={item.stamp}
              >
                <div className="tl-stamp">
                  {item.stamp}
                  <small>{item.unit}</small>
                </div>
                <div className="tl-body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <ul className="tl-tags">
                  {item.tags.map((tag) => (
                    <li className="tl-tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Hatch />

      <section className="section">
        <SecBar num="04" label="Speed" aside="Tracked per source and per rep" />
        <div className="section-inner">
          <Reveal className="section-head">
            <h2 className="section-title">
              Built around <span className="muted">one number.</span>
            </h2>
          </Reveal>

          <div className="speed">
            <div className="speed-main">
              <div className="speed-clock" aria-label="Four seconds">
                <span className="is-waiting">0:0</span>
                <span className="is-reached">4</span>
              </div>
              <p>
                seconds between a lead arriving and your business number
                opening the conversation on WhatsApp.
              </p>
            </div>
            <dl className="speed-cells">
              {guarantees.map((g) => (
                <div key={g.k}>
                  <dt>{g.k}</dt>
                  <dd>{g.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Hatch />

      <section className="section">
        <SecBar num="05" label="Who it is for" aside="General-purpose lead CRM" />
        <div className="section-inner">
          <Reveal className="section-head">
            <h2 className="section-title">
              Any business where{' '}
              <span className="muted">the first reply wins the deal.</span>
            </h2>
            <p className="section-lede">
              These are the places where speed to first contact changes the
              number at the end of the month the most.
            </p>
          </Reveal>

          <div className="cells cells-2">
            {verticals.map((v, i) => (
              <Reveal className="cell" key={v.title}>
                <div className="cell-top">
                  <span className="cell-idx">vertical / 0{i + 1}</span>
                  <span className="cell-tag">{v.lead}</span>
                </div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Hatch />

      <section className="section">
        <SecBar num="06" label="FAQ" aside="Straight answers" />
        <div className="section-inner faq-wrap">
          <h2 className="section-title">Questions teams ask first.</h2>
          <div className="faq">
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Closing
        num="07"
        title="See VUTrak answer a lead of your own."
        body="Send us one real enquiry in the demo and watch the WhatsApp message land. Thirty minutes, no slides."
      >
        <Link to="/contact" className="btn btn-invert">
          Book a demo <span className="btn-arrow">→</span>
        </Link>
        <Link to="/product" className="btn btn-ghost-dark">
          Read the product detail
        </Link>
      </Closing>
    </>
  )
}

