import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Closing from '../components/Closing.jsx'
import Icon from '../components/Icon.jsx'
import { Hatch, SecBar } from '../components/Frame.jsx'

const blocks = [
  {
    id: 'capture',
    icon: 'inbox',
    eyebrow: 'Capture',
    title: 'One inbox for every lead you paid for.',
    body: 'A lead is only as good as the speed it reaches a person. VUTrak connects to the places leads already arrive so none of them wait in a tab nobody has open.',
    points: [
      {
        name: 'Meta and Google lead ads',
        desc: 'Connect the ad account once. Form submissions arrive in VUTrak in real time with the campaign, ad set, and creative attached.',
      },
      {
        name: 'Website and landing page forms',
        desc: 'Drop in an endpoint or embed the form. Hidden fields carry UTM parameters through to the lead record.',
      },
      {
        name: 'Click-to-WhatsApp and missed calls',
        desc: 'Anyone who messages or calls your business number becomes a lead automatically, with the message thread already attached.',
      },
      {
        name: 'Bulk import',
        desc: 'Bring in existing lists by spreadsheet with column mapping, duplicate detection, and merge on phone number.',
      },
    ],
  },
  {
    id: 'whatsapp',
    icon: 'message',
    eyebrow: 'Engage',
    title: 'WhatsApp as the first connect, not the last resort.',
    body: 'VUTrak runs on the official WhatsApp Business API, so messages come from your verified business number with delivery and read receipts — not from a rep’s personal phone.',
    points: [
      {
        name: 'Instant first message',
        desc: 'A pre-approved template goes out within seconds of the lead arriving, personalised with their name, enquiry, and the source they came from.',
      },
      {
        name: 'Shared team inbox',
        desc: 'Every conversation lives on the lead record, visible to the whole team. When a rep leaves, the history stays with the business.',
      },
      {
        name: 'Sequences that know when to stop',
        desc: 'Follow-ups continue on a schedule you set and halt the moment the lead replies, so nobody is chased after they have already answered.',
      },
      {
        name: 'Rich messages',
        desc: 'Send brochures, price lists, images, location pins, and booking links in the thread instead of asking the lead to check email.',
      },
      {
        name: 'Consent and opt-out',
        desc: 'Opt-outs are recorded against the contact and respected everywhere, which is what keeps your number in good standing.',
      },
    ],
  },
  {
    id: 'track',
    icon: 'route',
    eyebrow: 'Track',
    title: 'A pipeline your team actually works out of.',
    body: 'Most CRMs get abandoned because updating them is extra work. In VUTrak the work and the record are the same action — the conversation moves the deal.',
    points: [
      {
        name: 'Stages you define',
        desc: 'Name your pipeline after how you actually sell. Drag a lead across, or let a reply move it for you.',
      },
      {
        name: 'Ownership and routing',
        desc: 'Assign by source, territory, product, or round-robin. Every lead has exactly one owner and one next step.',
      },
      {
        name: 'Response-time SLAs',
        desc: 'Set the window a lead must be answered in. Breaches escalate rather than quietly ageing in a list.',
      },
      {
        name: 'Tasks and reminders',
        desc: 'Callbacks and site visits sit on the record and on the rep’s day, with reminders that reach them on WhatsApp too.',
      },
    ],
  },
  {
    id: 'grow',
    icon: 'chart',
    eyebrow: 'Grow',
    title: 'The numbers an owner asks for on Monday.',
    body: 'Because source and timing ride along from the first second, reporting answers business questions rather than describing CRM activity.',
    points: [
      {
        name: 'Source to revenue',
        desc: 'See which campaign and channel produced closed business, not just which produced the most leads.',
      },
      {
        name: 'Time to first contact',
        desc: 'Tracked as a headline metric per source and per rep, because it is the number that moves everything else.',
      },
      {
        name: 'Stage leakage',
        desc: 'Find the stage where leads stop moving, and how long they sit before they die.',
      },
      {
        name: 'Team performance',
        desc: 'Volume, response time, conversion, and open follow-ups per rep, without anyone filing a report.',
      },
    ],
  },
  {
    id: 'platform',
    icon: 'shield',
    eyebrow: 'Platform',
    title: 'Every tenant gets its own workspace.',
    body: 'VUTrak is multi-tenant by design. Your workspace, your data, your branding, separate from every other business on the platform.',
    points: [
      {
        name: 'Isolated tenant data',
        desc: 'Each business runs in its own workspace with its own users, pipeline, templates, and WhatsApp number.',
      },
      {
        name: 'Roles and permissions',
        desc: 'Owners decide what each role can see and do — down to whether a rep can view leads that are not theirs.',
      },
      {
        name: 'Guided onboarding',
        desc: 'Connecting the WhatsApp number, ad accounts, and first pipeline is a walkthrough, not a support ticket.',
      },
      {
        name: 'Audit trail',
        desc: 'Who changed a stage, who messaged a lead, and when — recorded on the record.',
      },
    ],
  },
]

export default function Product() {
  return (
    <>
      <section className="page-head">
        <SecBar num="00" label="VUTrak" aside="Capture · Engage · Track · Grow" />
        <div className="page-head-inner">
          <h1>
            The CRM built around{' '}
            <span className="muted">the first four seconds.</span>
          </h1>
          <p>
            Capture the lead, engage it on WhatsApp before it cools, track it
            through a pipeline your team will actually use, and grow on the
            numbers that come out the other end.
          </p>
          <nav className="jump" aria-label="On this page">
            {blocks.map((block, i) => (
              <a href={`#${block.id}`} key={block.id}>
                <span>0{i + 1}</span>
                {block.eyebrow}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {blocks.map((block, i) => (
        <div key={block.id}>
          <Hatch />
          <section className="feature-block" id={block.id}>
            <SecBar
              num={`0${i + 1}`}
              label={block.eyebrow}
              aside={`${block.points.length} capabilities`}
            />
            <div className="feature-grid">
              <div className="feature-intro">
                <span className="cell-icon">
                  <Icon name={block.icon} size={22} />
                </span>
                <h2>{block.title}</h2>
                <p>{block.body}</p>
              </div>

              <Reveal as="ul" className="feature-points">
                {block.points.map((point) => (
                  <li key={point.name}>
                    <span className="fp-mark">
                      <Icon name="check" size={16} />
                    </span>
                    <span>
                      <strong>{point.name}</strong>
                      <span className="fp-desc">{point.desc}</span>
                    </span>
                  </li>
                ))}
              </Reveal>
            </div>
          </section>
        </div>
      ))}

      <Closing
        num="06"
        title="The fastest way to understand VUTrak is to watch it answer."
        body="We will connect a test number, send a lead through, and you will see the WhatsApp message arrive while we are still talking."
      >
        <Link to="/contact" className="btn btn-invert">
          Book a demo <span className="btn-arrow">→</span>
        </Link>
      </Closing>
    </>
  )
}
