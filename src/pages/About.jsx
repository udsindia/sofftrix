import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { CONTACT } from '../siteData.js'

export default function About() {
  return (
    <>
      <section className="about-lead">
        <div className="shell">
          <p className="eyebrow">Sofftrix</p>
          <h1>A software company with one product and one obsession.</h1>
          <p>
            Sofftrix builds VUTrak. We are based in Hyderabad and we work with
            businesses whose growth is limited less by how many leads they buy
            than by how quickly those leads get a reply.
          </p>
        </div>
      </section>

      <section className="shell">
        <div className="about-cols">
          <div>
            <h2>Why we built VUTrak</h2>
            <p>
              We kept meeting businesses that were spending real money on ads
              and losing most of it after the click. The lead arrived. It sat.
              Someone called it a day later, got voicemail, and moved on. The
              CRM they owned was a place to record that failure, not prevent it.
            </p>
            <p>
              The fix was not a better pipeline view. It was removing the human
              delay from the very first touch. So VUTrak sends the first message
              itself, on WhatsApp, in seconds — and only then hands a warm
              conversation to a person.
            </p>

            <h2>How we build</h2>
            <p>
              We use the official WhatsApp Business API rather than unofficial
              automation, because a business number that gets banned is worse
              than no automation at all. Every tenant runs in an isolated
              workspace with its own data, users, and number.
            </p>
            <p>
              We would rather ship one product that a team opens every morning
              than a suite nobody finishes setting up.
            </p>
          </div>

          <div>
            <h2>At a glance</h2>
            <Reveal as="dl" className="stat-strip">
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
            </Reveal>

            <div className="about-stack">
              <h2>What we believe</h2>
              <p>
                <strong>Speed is the whole strategy.</strong> Nothing else in a
                sales process compounds the way time to first contact does.
              </p>
              <p>
                <strong>The conversation belongs to the business.</strong> Not
                to the rep who happened to answer, and not to their personal
                phone.
              </p>
              <p>
                <strong>Software should not need a champion.</strong> If a team
                has to be nagged into updating the CRM, the CRM is wrong.
              </p>
            </div>

            <div className="about-stack">
              <Link to="/contact" className="btn btn-primary">
                Talk to us <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="shell">
          <h2>Come and tell us where your leads are going.</h2>
          <p>
            We are in Hyderabad and happy to meet. A call works just as well —
            reach us on {CONTACT.phone}.
          </p>
          <div className="closing-actions">
            <Link to="/contact" className="btn btn-primary">
              Book a demo <span className="btn-arrow">→</span>
            </Link>
            <Link to="/product" className="btn btn-ghost">
              See the product
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
