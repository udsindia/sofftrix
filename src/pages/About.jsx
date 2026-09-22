import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Closing from '../components/Closing.jsx'
import { Hatch, SecBar } from '../components/Frame.jsx'
import { CONTACT } from '../siteData.js'

const beliefs = [
  {
    title: 'Speed is the whole strategy.',
    body: 'Nothing else in a sales process compounds the way time to first contact does.',
  },
  {
    title: 'The conversation belongs to the business.',
    body: 'Not to the rep who happened to answer, and not to their personal phone.',
  },
  {
    title: 'Software should not need a champion.',
    body: 'If a team has to be nagged into updating the CRM, the CRM is wrong.',
  },
]

export default function About() {
  return (
    <>
      <section className="page-head">
        <SecBar num="00" label="Sofftrix" aside="Hyderabad, India" />
        <div className="page-head-inner">
          <h1>
            A software company with one product{' '}
            <span className="muted">and one obsession.</span>
          </h1>
          <p>
            Sofftrix builds VUTrak. We are based in Hyderabad and we work with
            businesses whose growth is limited less by how many leads they buy
            than by how quickly those leads get a reply.
          </p>
        </div>

        <dl className="stat-strip">
          <div className="stat-cell">
            <dt>Product</dt>
            <dd>VUTrak CRM</dd>
          </div>
          <div className="stat-cell">
            <dt>Messaging</dt>
            <dd>WhatsApp Business API</dd>
          </div>
          <div className="stat-cell">
            <dt>Model</dt>
            <dd>Multi-tenant SaaS</dd>
          </div>
          <div className="stat-cell">
            <dt>Based in</dt>
            <dd>Hyderabad, India</dd>
          </div>
        </dl>
      </section>

      <Hatch />

      <section className="section">
        <SecBar num="01" label="Story" aside="Why and how" />
        <div className="section-inner">
          <div className="cells cells-2">
            <Reveal className="cell prose-cell">
              <span className="cell-idx">why / we built it</span>
              <h3>Why we built VUTrak</h3>
              <p>
                We kept meeting businesses that were spending real money on ads
                and losing most of it after the click. The lead arrived. It
                sat. Someone called it a day later, got voicemail, and moved
                on. The CRM they owned was a place to record that failure, not
                prevent it.
              </p>
              <p>
                The fix was not a better pipeline view. It was removing the
                human delay from the very first touch. So VUTrak sends the
                first message itself, on WhatsApp, in seconds — and only then
                hands a warm conversation to a person.
              </p>
            </Reveal>

            <Reveal className="cell prose-cell">
              <span className="cell-idx">how / we build</span>
              <h3>How we build</h3>
              <p>
                We use the official WhatsApp Business API rather than
                unofficial automation, because a business number that gets
                banned is worse than no automation at all. Every tenant runs in
                an isolated workspace with its own data, users, and number.
              </p>
              <p>
                We would rather ship one product that a team opens every
                morning than a suite nobody finishes setting up.
              </p>
              <Link to="/product" className="text-link">
                See the product <span className="btn-arrow">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Hatch />

      <section className="section">
        <SecBar num="02" label="Principles" aside="What we believe" />
        <div className="section-inner">
          <div className="cells cells-3">
            {beliefs.map((b, i) => (
              <Reveal className="cell" key={b.title}>
                <span className="cell-idx">principle / 0{i + 1}</span>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Closing
        num="03"
        title="Come and tell us where your leads are going."
        body={`We are in Hyderabad and happy to meet. A call works just as well — reach us on ${CONTACT.phone}.`}
      >
        <Link to="/contact" className="btn btn-invert">
          Book a demo <span className="btn-arrow">→</span>
        </Link>
        <Link to="/product" className="btn btn-ghost-dark">
          See the product
        </Link>
      </Closing>
    </>
  )
}
