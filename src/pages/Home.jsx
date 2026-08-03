import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Lead Capture & CRM',
    desc: 'Pulls in student inquiries from Facebook/Instagram, Google Lead Ads, and WhatsApp — plus manual entry — and tracks every lead through its stages.',
  },
  {
    title: 'Student Application Tracking',
    desc: 'Converts qualified leads into student profiles and manages their university applications end to end, so staff always know where each student stands.',
  },
  {
    title: 'University & Course Catalog',
    desc: 'A searchable database of partner universities and courses, including entry requirements and intake dates, to quickly match students to the right programs.',
  },
  {
    title: 'Bulk Data Import',
    desc: 'Spreadsheet-style bulk upload for universities and courses, instead of entering every record manually.',
  },
  {
    title: 'Team, Roles & Permissions',
    desc: 'Lets consultancy owners manage staff accounts and control exactly what each team member can see or do.',
  },
  {
    title: 'Multi-Tenant Workspace',
    desc: 'Each consultancy gets its own isolated, branded workspace with guided onboarding — with a central layer to manage every workspace.',
  },
  {
    title: 'WhatsApp & Ads Integration',
    desc: 'Native WhatsApp messaging and Meta/Google ad account configuration, tying marketing spend directly into the lead pipeline.',
  },
  {
    title: 'Owner Dashboard & Analytics',
    desc: 'A real-time view of leads, applications, and team performance to guide day-to-day decisions.',
  },
]

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <img src="/logo.jpg" alt="Softtrix" className="hero-logo" />
        <h1>One platform to run your study-abroad consultancy.</h1>
        <p className="hero-sub">
          Softtrix builds the platform overseas education consultancies use to capture leads, track
          student applications, manage their university &amp; course catalog, and run their team —
          all in one place.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          <Link to="/about" className="btn btn-outline">About Us</Link>
        </div>
      </section>

      <section className="services">
        <h2>What Our Platform Does</h2>
        <div className="service-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-strip">
        <h2>Ready to see it in action?</h2>
        <p>Let&apos;s talk about how Softtrix can help you run your consultancy.</p>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </section>
    </div>
  )
}
