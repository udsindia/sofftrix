import { useState } from 'react'

const CONTACT_EMAIL = 'udsindiateam@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Website enquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <div className="page">
      <section className="page-hero">
        <h1>Contact Us</h1>
        <p className="hero-sub">We&apos;d love to hear about what you&apos;re building.</p>
      </section>

      <section className="contact-body">
        <div className="contact-details">
          <div className="contact-item">
            <h3>Address</h3>
            <p>Flat No: 285, Jal Vayu Vihar, KPHB, Hyderabad – 500072</p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <p><a href="tel:+919704356075">+91 97043 56075</a></p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
          </label>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>
    </div>
  )
}
