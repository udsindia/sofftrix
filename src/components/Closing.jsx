import { SecBar } from './Frame.jsx'

/**
 * The dark call-to-action band that ends every page. The panel on the right
 * is the same lead the hero animates, written out as its activity log — the
 * 4.0s gap between lead.created and whatsapp.sent is the whole pitch.
 */
const LOG = [
  { t: '12:41:07.0', ev: 'lead.created', state: 'waiting', note: 'Priya Nair · Meta lead ad' },
  { t: '12:41:07.9', ev: 'template.queued', state: 'waiting', note: 'welcome_interiors · en' },
  { t: '12:41:11.0', ev: 'whatsapp.sent', state: 'reached', note: 't+4.0s · delivered ✓✓' },
  { t: '12:43:02.4', ev: 'whatsapp.reply', state: 'reached', note: '“Can you call me at 6?”' },
  { t: '12:43:02.6', ev: 'lead.assigned', state: 'reached', note: 'Rahul · callback 18:00' },
]

export default function Closing({ title, body, children, num = '→', label = 'Next step' }) {
  return (
    <section className="closing">
      <SecBar num={num} label={label} aside="30 min · no slides" />
      <div className="closing-grid">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
          <div className="closing-actions">{children}</div>
          <ul className="closing-notes">
            <li>Official WhatsApp Business API</li>
            <li>Your own leads, live</li>
            <li>Hyderabad · IST</li>
          </ul>
        </div>

        <div className="log" aria-label="Activity log for one lead, answered on WhatsApp four seconds after it arrived.">
          <div className="log-head">
            <span className="log-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>activity · lead #4821</span>
          </div>
          <ol className="log-body">
            {LOG.map((row) => (
              <li key={row.t} className={'log-row is-' + row.state}>
                <span className="log-t">{row.t}</span>
                <span className="log-ev">{row.ev}</span>
                <span className="log-note">{row.note}</span>
              </li>
            ))}
          </ol>
          <div className="log-foot">
            <span>● stage · contacted</span>
            <span>first reply 0:04</span>
          </div>
        </div>
      </div>
    </section>
  )
}
