import { useEffect, useRef, useState } from 'react'

/**
 * The one bold element on the site.
 *
 * A lead lands, a clock starts counting in orange, and at exactly four
 * seconds VUTrak sends the first WhatsApp message — the clock freezes and
 * flips to blue. It runs in real time, so the four seconds on screen are
 * four actual seconds.
 */

// Offsets in ms from the moment the lead lands.
const SEND_AT = 4000
const SCRIPT = [
  { at: 0, kind: 'landed' },
  { at: 900, kind: 'typing' },
  { at: SEND_AT, kind: 'outbound' },
  { at: 7200, kind: 'inbound' },
  { at: 9000, kind: 'assigned' },
]

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export default function LeadInbox() {
  // How many script steps have fired.
  const [step, setStep] = useState(0)
  // Elapsed ms since the lead landed, frozen once the message goes out.
  const [elapsed, setElapsed] = useState(0)
  const [runId, setRunId] = useState(0)
  const frame = useRef(0)
  const timers = useRef([])

  useEffect(() => {
    if (prefersReducedMotion()) {
      setStep(SCRIPT.length)
      setElapsed(SEND_AT)
      return undefined
    }

    setStep(0)
    setElapsed(0)

    const start = performance.now()

    const tick = (now) => {
      const ms = Math.min(now - start, SEND_AT)
      setElapsed(ms)
      if (ms < SEND_AT) {
        frame.current = requestAnimationFrame(tick)
      }
    }
    frame.current = requestAnimationFrame(tick)

    timers.current = SCRIPT.map((_, i) =>
      setTimeout(() => setStep(i + 1), SCRIPT[i].at)
    )

    return () => {
      cancelAnimationFrame(frame.current)
      timers.current.forEach(clearTimeout)
    }
  }, [runId])

  const reached = elapsed >= SEND_AT && step >= 3
  const seconds = Math.floor(elapsed / 1000)
  const clock = `0:${String(seconds).padStart(2, '0')}`

  // The typing indicator only exists between the "typing" and "outbound" steps.
  const showTyping = step >= 2 && step < 3

  return (
    <div
      className={'inbox' + (reached ? ' is-reached' : '')}
      role="img"
      aria-label="VUTrak inbox: a lead from a Meta lead ad arrives and is answered on WhatsApp four seconds later, then assigned to a rep with a callback scheduled."
    >
      <div className="inbox-head">
        <span className="inbox-avatar" aria-hidden="true">
          PN
        </span>
        <span className="inbox-who">
          <span className="inbox-name">Priya Nair</span>
          <span className="inbox-meta">+91 98••• ••210 · Meta lead ad</span>
        </span>
        <span className="inbox-clock">
          {clock}
          <span className="inbox-clock-label">
            {reached ? 'answered' : 'waiting'}
          </span>
        </span>
      </div>

      <div className="inbox-body" aria-hidden="true">
        {step >= 1 && (
          <div
            className={'row row-event ' + (reached ? 'is-reached' : 'is-waiting')}
          >
            <span className="dot" />
            New lead · &ldquo;Interior design consultation&rdquo;
          </div>
        )}

        {showTyping && (
          <div className="row typing">
            <span />
            <span />
            <span />
          </div>
        )}

        {step >= 3 && (
          <div className="row bubble bubble-out">
            <span className="bubble-tag">VUTrak · WhatsApp</span>
            Hi Priya — thanks for your enquiry. I&apos;m Rahul from Kestrel
            Interiors. Is now a good time to talk through what you have in mind?
            <span className="bubble-time">
              12:41
              <span className="bubble-ticks">✓✓</span>
            </span>
          </div>
        )}

        {step >= 4 && (
          <div className="row bubble bubble-in">
            That was quick! Can you call me at 6 this evening?
            <span className="bubble-time">12:43</span>
          </div>
        )}

        {step >= 5 && (
          <div className="row row-event is-reached">
            <span className="dot" />
            Assigned to Rahul · Call scheduled 6:00 PM
          </div>
        )}
      </div>

      <div className="inbox-foot">
        <span>{reached ? 'STAGE · CONTACTED' : 'STAGE · NEW'}</span>
        <button
          type="button"
          className="inbox-replay"
          onClick={() => setRunId((n) => n + 1)}
        >
          Replay
        </button>
      </div>
    </div>
  )
}
