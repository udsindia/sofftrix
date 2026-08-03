const values = [
  {
    title: 'Built for consultancies',
    desc: 'Every feature is designed around how a study-abroad consultancy actually works day to day, not generic CRM boilerplate.',
  },
  {
    title: 'One workspace, your brand',
    desc: 'Each consultancy runs in its own isolated, branded workspace — your data stays yours, separate from every other tenant on the platform.',
  },
  {
    title: 'From lead to enrollment',
    desc: 'We cover the whole journey — capturing a lead, tracking their application, and matching them to the right university — in one connected system.',
  },
]

export default function About() {
  return (
    <div className="page">
      <section className="page-hero">
        <h1>About Softtrix</h1>
        <p className="hero-sub">
          Softtrix builds the platform that overseas education consultancies run their business on —
          from the first student inquiry to the offer letter.
        </p>
      </section>

      <section className="about-body">
        <div className="about-text">
          <h2>What we do</h2>
          <p>
            Study-abroad consultancies juggle student leads, university partnerships, course catalogs,
            and a growing team — often across scattered spreadsheets and tools. Softtrix brings all of
            that into one platform: leads flow in from Facebook, Instagram, Google Ads, and WhatsApp;
            staff track each student&apos;s application from first contact through to enrollment; and
            admins keep an always-current catalog of partner universities and courses, with entry
            requirements and intake dates built in.
          </p>
          <h2>Our approach</h2>
          <p>
            We build for how consultancies actually operate — multiple staff, multiple universities,
            and leads arriving from every direction at once. That means multi-tenant workspaces with
            proper roles and permissions, bulk tools so admins aren&apos;t entering data one row at a
            time, and a dashboard that gives owners a real-time read on the business, not just a
            historical report.
          </p>
        </div>

        <div className="values-grid">
          {values.map((v) => (
            <div className="value-card" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
