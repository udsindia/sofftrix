import { SecBar } from './Frame.jsx'

/**
 * Shared layout for the policy pages (Privacy, Terms): a page head with the
 * last-updated date, then numbered sections, each linkable by its id.
 */
export default function LegalPage({ label, updated, title, titleMuted, lede, sections }) {
  return (
    <>
      <section className="page-head">
        <SecBar num="00" label={label} aside={`Updated ${updated}`} />
        <div className="page-head-inner">
          <h1>
            {title} <span className="muted">{titleMuted}</span>
          </h1>
          <p>
            {lede} Last updated {updated}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner legal">
          {sections.map((s, i) => (
            <section className="legal-section" id={s.id} key={s.id}>
              <h2>
                <span className="legal-num">{String(i + 1).padStart(2, '0')}</span>
                {s.title}
              </h2>
              <div className="legal-body">{s.body}</div>
            </section>
          ))}
        </div>
      </section>
    </>
  )
}
