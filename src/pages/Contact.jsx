import { useState } from 'react'
import { CONTACT } from '../siteData.js'

const EMPTY = {
  name: '',
  company: '',
  email: '',
  phone: '',
  volume: '',
  message: '',
}

const VOLUMES = [
  'Under 100 leads a month',
  '100 – 500 leads a month',
  '500 – 2,000 leads a month',
  'Over 2,000 leads a month',
]

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  /**
   * No backend on this site yet, so the form hands off to the visitor's mail
   * client with everything already filled in. Swap this for a POST when the
   * API is ready — the field names are the payload.
   */
  function handleSubmit(e) {
    e.preventDefault()

    const subject = encodeURIComponent(
      `VUTrak demo request — ${form.company || form.name}`
    )
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Company: ${form.company}`,
        `Email: ${form.email}`,
        `Phone / WhatsApp: ${form.phone}`,
        `Lead volume: ${form.volume || 'Not specified'}`,
        '',
        'Where leads come from today:',
        form.message,
      ].join('\n')
    )

    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <section className="page-head">
        <div className="shell">
          <p className="eyebrow">Book a demo</p>
          <h1>Thirty minutes, and one of your own leads.</h1>
          <p>
            Tell us where your leads come from today. We will set VUTrak up
            against one of those sources and let you watch the first WhatsApp
            message go out.
          </p>
        </div>
      </section>

      <div className="shell">
        <div className="contact-grid">
          <aside className="contact-aside">
            <h2>What the call looks like</h2>
            <ul className="contact-expect">
              <li>
                <span className="ce-mark" aria-hidden="true">
                  01
                </span>
                <span>
                  Ten minutes on how leads reach you now and where they stall.
                </span>
              </li>
              <li>
                <span className="ce-mark" aria-hidden="true">
                  02
                </span>
                <span>
                  We connect a test source and send a live lead through VUTrak.
                </span>
              </li>
              <li>
                <span className="ce-mark" aria-hidden="true">
                  03
                </span>
                <span>
                  You get the WhatsApp message on your phone, and we talk about
                  what setup would look like.
                </span>
              </li>
            </ul>

            <dl>
              <div className="contact-detail">
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </dd>
              </div>
              <div className="contact-detail">
                <dt>Phone &amp; WhatsApp</dt>
                <dd>
                  <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
                </dd>
              </div>
              <div className="contact-detail">
                <dt>Office</dt>
                <dd>{CONTACT.address}</dd>
              </div>
            </dl>
          </aside>

          {sent ? (
            <div className="demo-form">
              <span className="fs-mark">Request ready</span>
              <p className="demo-form-title">Your email client should be open.</p>
              <p className="form-foot">
                Send the message that opened and we will reply within one
                business day. If nothing opened, write to{' '}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or call{' '}
                {CONTACT.phone}.
              </p>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {
                  setForm(EMPTY)
                  setSent(false)
                }}
              >
                Send another request
              </button>
            </div>
          ) : (
            <form className="demo-form" onSubmit={handleSubmit}>
              <p className="demo-form-title">Request a demo</p>

              <div className="field-row">
                <label className="field">
                  <span>Your name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="field">
                  <span>Company</span>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    required
                  />
                </label>
              </div>

              <div className="field-row">
                <label className="field">
                  <span>Work email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </label>
                <label className="field">
                  <span>Phone / WhatsApp</span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="+91"
                    required
                  />
                </label>
              </div>

              <label className="field">
                <span>Roughly how many leads a month</span>
                <select name="volume" value={form.volume} onChange={handleChange}>
                  <option value="">Select a range</option>
                  {VOLUMES.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span>Where do your leads come from today?</span>
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Meta ads, a website form, walk-ins, referrals…"
                  required
                />
              </label>

              <button type="submit" className="btn btn-primary">
                Request a demo <span className="btn-arrow">→</span>
              </button>

              <p className="form-foot">
                We use these details to run the demo and nothing else. No
                newsletter.
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
