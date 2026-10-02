import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Closing from '../components/Closing.jsx'
import Icon from '../components/Icon.jsx'
import { Hatch, SecBar } from '../components/Frame.jsx'

/**
 * AI automation on WhatsApp and Instagram. Same layout as the Product page:
 * every section is one entry in `blocks`.
 */
const blocks = [
  {
    id: 'whatsapp',
    icon: 'message',
    eyebrow: 'WhatsApp',
    title: 'An assistant on your WhatsApp number that never leaves a chat unread.',
    body: 'The AI answers on your verified business number through the official WhatsApp Business Platform, any hour of the day, in the same thread your team picks up later.',
    points: [
      {
        name: 'Answers from your own information',
        desc: 'Prices, timings, locations, and policies come from the knowledge base you give it, not from guesswork.',
      },
      {
        name: 'Qualifies before it hands over',
        desc: 'It asks the questions your team would — budget, timeline, location, requirement — and writes the answers onto the lead record.',
      },
      {
        name: 'Books the next step',
        desc: 'It shares a booking link, a location pin, or a brochure, and confirms the site visit or callback in the chat.',
      },
      {
        name: 'Follows WhatsApp’s rules',
        desc: 'Free-form replies inside the 24-hour window, approved templates outside it, and opt-outs respected on every message.',
      },
    ],
  },
  {
    id: 'instagram',
    icon: 'smartphone',
    eyebrow: 'Instagram',
    title: 'Turn comments and DMs into conversations, not a backlog.',
    body: 'Connect your Instagram professional account and the AI handles direct messages, story replies, and comments through Instagram’s official API.',
    points: [
      {
        name: 'Direct messages and story replies',
        desc: 'Someone replies to a story or asks “price?” in a DM — they get a real answer in seconds instead of the next morning.',
      },
      {
        name: 'Comment to DM',
        desc: 'A comment with a keyword like “details” gets a private message with the information, so the conversation moves out of the comments.',
      },
      {
        name: 'Every DM becomes a lead',
        desc: 'Instagram conversations land in the same pipeline as your WhatsApp and ad leads, with the post or story they came from.',
      },
      {
        name: 'Move to WhatsApp when it suits',
        desc: 'When a lead shares a phone number, the AI can continue on WhatsApp, where follow-ups and reminders work best.',
      },
    ],
  },
  {
    id: 'handoff',
    icon: 'route',
    eyebrow: 'Handoff',
    title: 'It knows when a person should take over.',
    body: 'Automation is for the first replies and the repetitive questions. The moment a conversation needs judgement, a person gets it, with the whole thread in front of them.',
    points: [
      {
        name: 'Rules you set',
        desc: 'Hand over on a keyword, a hot lead, a complaint, a high-value enquiry, or any time the lead asks for a person.',
      },
      {
        name: 'Routed to the right rep',
        desc: 'The same ownership rules as the rest of VUTrak — by source, territory, product, or round-robin.',
      },
      {
        name: 'A summary, not a scroll',
        desc: 'The rep sees a short summary of what the lead wants and what the AI has already told them.',
      },
      {
        name: 'The AI steps back',
        desc: 'Once a person replies, the assistant stops answering in that chat until they hand it back.',
      },
    ],
  },
  {
    id: 'control',
    icon: 'shield',
    eyebrow: 'Control',
    title: 'You decide what it can say.',
    body: 'An assistant speaking for your business needs limits. You set them, and you can see every message it sends.',
    points: [
      {
        name: 'Your tone and language',
        desc: 'Formal or friendly, English, Hindi, Telugu, or the language the lead writes in.',
      },
      {
        name: 'Topics it stays away from',
        desc: 'Mark subjects it must not answer — discounts, legal questions, anything you would rather a person handle.',
      },
      {
        name: 'Every reply on the record',
        desc: 'All AI messages are logged on the lead, marked as automated, so you can review and improve them.',
      },
      {
        name: 'Your data stays yours',
        desc: 'Your conversations and customer data are not used to train AI models for anyone else.',
      },
    ],
  },
]

export default function AiAutomation() {
  return (
    <>
      <section className="page-head">
        <SecBar num="00" label="AI automation" aside="WhatsApp · Instagram" />
        <div className="page-head-inner">
          <h1>
            AI that replies on WhatsApp and Instagram{' '}
            <span className="muted">while your team is busy.</span>
          </h1>
          <p>
            Leads message at night, at lunch, and in the middle of a site
            visit. The AI answers their questions, qualifies them, and books
            the next step — then hands the conversation to a person when it
            matters.
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
        num="05"
        title="Send your own business a message and watch the AI answer."
        body="In the demo we connect a test WhatsApp number or Instagram account, load a few of your FAQs, and you message it yourself."
      >
        <Link to="/contact" className="btn btn-invert">
          Book a demo <span className="btn-arrow">→</span>
        </Link>
        <Link to="/product" className="btn btn-ghost-dark">
          See VUTrak
        </Link>
      </Closing>
    </>
  )
}
