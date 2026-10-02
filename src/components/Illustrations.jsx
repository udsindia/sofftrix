/**
 * Line illustrations for the home page, drawn in the same hairline style as
 * the rest of the site. Colours come from classes in index.css (.ill-*) so
 * they follow the design tokens: orange = waiting, blue = reached.
 * Decorative only — the text beside each one carries the meaning.
 */

/** Leak 01 — the lead sits in a tab nobody has open. */
export function UnreadTabs() {
  return (
    <svg className="ill" viewBox="0 0 240 140" aria-hidden="true">
      <rect className="ill-paper-2" x="48" y="12" width="150" height="92" rx="6" />
      <rect className="ill-paper-2" x="34" y="22" width="150" height="92" rx="6" />
      <rect className="ill-paper" x="20" y="32" width="160" height="96" rx="6" />
      <path className="ill-line" d="M20 48h160" />
      <circle className="ill-dot" cx="30" cy="40" r="2" />
      <circle className="ill-dot" cx="38" cy="40" r="2" />
      <circle className="ill-dot" cx="46" cy="40" r="2" />

      <rect className="ill-wait-soft" x="28" y="56" width="144" height="16" rx="3" />
      <circle className="ill-wait-fill" cx="38" cy="64" r="3" />
      <rect className="ill-wait-fill" x="48" y="61" width="58" height="6" rx="2" />
      <rect className="ill-bar" x="28" y="80" width="96" height="6" rx="2" />
      <rect className="ill-bar" x="28" y="94" width="120" height="6" rx="2" />
      <rect className="ill-bar" x="28" y="108" width="78" height="6" rx="2" />

      <circle className="ill-wait-fill" cx="180" cy="32" r="11" />
      <text className="ill-badge" x="180" y="36" textAnchor="middle">1</text>

      <circle className="ill-ink" cx="212" cy="98" r="18" />
      <path className="ill-ink" d="M212 86v12l8 5" />
      <text className="ill-label" x="212" y="132" textAnchor="middle">+14h</text>
    </svg>
  )
}

/** Leak 02 — one missed call, then nothing. */
export function MissedOnce() {
  return (
    <svg className="ill" viewBox="0 0 240 140" aria-hidden="true">
      <rect className="ill-paper" x="22" y="10" width="66" height="120" rx="11" />
      <path className="ill-line" d="M46 20h18" />
      <path
        className="ill-wait"
        d="M44 60h7l3 8-4 2.5a18 18 0 0 0 10 10L62 76l8 3v7a3 3 0 0 1-3 3A26 26 0 0 1 41 63a3 3 0 0 1 3-3"
      />
      <path className="ill-wait" d="M66 52a12 12 0 0 1 8 8M68 44a20 20 0 0 1 14 14" />
      <rect className="ill-wait-soft" x="34" y="100" width="42" height="14" rx="7" />
      <text className="ill-label ill-label-wait" x="55" y="110" textAnchor="middle">missed</text>

      <rect className="ill-paper" x="104" y="22" width="126" height="96" rx="6" />
      <text className="ill-label" x="120" y="40">call log</text>
      <path className="ill-line" d="M104 48h126" />
      <circle className="ill-wait-fill" cx="122" cy="62" r="3" />
      <text className="ill-label ill-label-ink" x="132" y="66">15:00 · missed</text>
      <rect className="ill-ghost" x="118" y="76" width="94" height="12" rx="3" />
      <rect className="ill-ghost" x="118" y="96" width="94" height="12" rx="3" />
      <text className="ill-label" x="165" y="105" textAnchor="middle">no retry</text>
    </svg>
  )
}

/** Leak 03 — the conversation leaves with the rep's phone. */
export function ThreadOnPhone() {
  return (
    <svg className="ill" viewBox="0 0 240 140" aria-hidden="true">
      <rect className="ill-paper" x="18" y="8" width="66" height="104" rx="11" />
      <path className="ill-line" d="M42 18h18" />
      <rect className="ill-bubble" x="28" y="28" width="38" height="12" rx="6" />
      <rect className="ill-bubble-out" x="38" y="46" width="38" height="12" rx="6" />
      <rect className="ill-bubble" x="28" y="64" width="30" height="12" rx="6" />
      <rect className="ill-bubble-out" x="44" y="82" width="32" height="12" rx="6" />
      <text className="ill-label" x="51" y="130" textAnchor="middle">rep’s phone</text>

      <path className="ill-wait ill-dash" d="M92 62h46" />
      <path className="ill-wait" d="M132 56l7 6-7 6" />
      <text className="ill-label ill-label-wait" x="115" y="50" textAnchor="middle">on leave</text>

      <rect className="ill-ghost" x="148" y="8" width="76" height="104" rx="6" />
      <text className="ill-label" x="186" y="30" textAnchor="middle">team inbox</text>
      <path className="ill-line ill-dash" d="M160 50h52M160 66h52M160 82h36" />
      <text className="ill-label" x="186" y="130" textAnchor="middle">0 threads</text>
    </svg>
  )
}

/**
 * Four hours against four seconds — the headline, drawn as two lanes on one
 * clock. The top lane cools from orange to grey as the lead waits.
 */
export function FourHoursVsSeconds() {
  const hours = [0, 1, 2, 3, 4]
  const x = (h) => 200 + h * 160

  return (
    <svg className="ill ill-wide" viewBox="0 0 900 210" aria-hidden="true">
      <defs>
        <linearGradient id="ill-cooling" gradientUnits="userSpaceOnUse" x1={x(0)} x2={x(4)} y1="0" y2="0">
          <stop offset="0" style={{ stopColor: 'var(--waiting)' }} />
          <stop offset="1" style={{ stopColor: 'var(--line-strong)' }} />
        </linearGradient>
      </defs>

      {hours.map((h) => (
        <g key={h}>
          <path className="ill-line ill-dash" d={`M${x(h)} 18v160`} />
          <text className="ill-label" x={x(h)} y="200" textAnchor="middle">
            {h === 0 ? '0:00' : `${h}h`}
          </text>
        </g>
      ))}

      {/* Without: the lead waits, cooling, until someone calls. */}
      <text className="ill-lane" x="0" y="64">Usual CRM</text>
      <text className="ill-label" x="0" y="80">waits for a person</text>
      <path d={`M${x(0)} 70H${x(4) - 14}`} stroke="url(#ill-cooling)" strokeWidth="3" fill="none" />
      <circle className="ill-wait-fill" cx={x(0)} cy="70" r="7" />
      <circle className="ill-cold" cx={x(4)} cy="70" r="11" />
      <path className="ill-cold-ink" d={`M${x(4) - 5} 65l10 10M${x(4) + 5} 65l-10 10`} />
      <text className="ill-label" x={x(4) - 18} y="50" textAnchor="end">first call · voicemail</text>

      {/* With VUTrak: contact at 0:04, then a live conversation. */}
      <text className="ill-lane ill-lane-reach" x="0" y="136">VUTrak</text>
      <text className="ill-label" x="0" y="152">replies on WhatsApp</text>
      <path className="ill-reach-thick" d={`M${x(0)} 142H${x(4)}`} />
      <circle className="ill-reach-fill" cx={x(0)} cy="142" r="7" />
      <rect className="ill-reach-tag" x={x(0) + 16} y="108" width="136" height="24" rx="12" />
      <text className="ill-label ill-label-reach" x={x(0) + 84} y="124" textAnchor="middle">0:04 · sent ✓✓</text>
      {[0.6, 1.4, 2.5, 3.5].map((h) => (
        <rect className="ill-reach-dot" key={h} x={x(h) - 9} y="136" width="18" height="12" rx="6" />
      ))}
      <text className="ill-label ill-label-reach" x={x(4) - 4} y="168" textAnchor="end">deal in progress</text>
    </svg>
  )
}
