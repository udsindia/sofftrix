import { Link } from 'react-router-dom'
import LeadInbox from '../components/LeadInbox.jsx'
import Reveal from '../components/Reveal.jsx'

/* Where leads actually go missing. No invented statistics — these are the
   failure modes, which is what an owner recognises anyway. */
const leaks = [
  {
    title: 'Nobody saw it',
    body: 'The lead lands in an ad account, a form inbox, or a spreadsheet nobody has open. It is not lost, it is just unread until tomorrow.',
  },
  {
    title: 'Somebody called once',
    body: 'One missed call at 3pm and the lead quietly becomes a row that no one owns. There is no second attempt because there is no record of the first.',
  },
  {
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

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <p className="eyebrow is-waiting">A lead just landed</p>
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
            <p className="hero-note">
              BUILT ON THE OFFICIAL WHATSAPP BUSINESS API · BY SOFFTRIX
            </p>
          </div>

          <LeadInbox />
        </div>
      </section>

      <section className="leak">
        <div className="shell">
          <Reveal className="leak-head">
            <p className="eyebrow is-waiting">The problem</p>
            <h2 className="section-title">
              Leads rarely go to a competitor. They go unanswered.
            </h2>
            <p className="section-lede">
              You already pay for the lead. What decides whether it becomes
              revenue is usually just how long it sat there — and that gap is
              almost never a strategy problem. It is one of these three.
            </p>
          </Reveal>

          <div className="leak-list">
            {leaks.map((leak) => (
              <Reveal className="leak-item" key={leak.title}>
                <h3>{leak.title}</h3>
                <p>{leak.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">One lead, start to finish</p>
            <h2 className="section-title">
              What VUTrak does, in the order it does it.
            </h2>
            <p className="section-lede">
              Every feature below is pinned to the moment it fires. The clock
              starts when the lead arrives.
            </p>
          </Reveal>

          <div className="timeline">
            {timeline.map((item) => (
              <Reveal
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
                  <div className="tl-tags">
                    {item.tags.map((tag) => (
                      <span className="tl-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="verticals">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Who it is for</p>
            <h2 className="section-title">
              Any business where the first reply wins the deal.
            </h2>
            <p className="section-lede">
              VUTrak is a general-purpose lead CRM. These are the places where
              speed to first contact changes the number at the end of the month
              the most.
            </p>
          </Reveal>

          <div className="vertical-grid">
            {verticals.map((v) => (
              <Reveal className="vertical-card" key={v.title}>
                <span className="vertical-lead">{v.lead}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="shell">
          <h2>See VUTrak answer a lead of your own.</h2>
          <p>
            Send us one real enquiry in the demo and watch the WhatsApp message
            land. Thirty minutes, no slides.
          </p>
          <div className="closing-actions">
            <Link to="/contact" className="btn btn-primary">
              Book a demo <span className="btn-arrow">→</span>
            </Link>
            <Link to="/product" className="btn btn-ghost">
              Read the product detail
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
