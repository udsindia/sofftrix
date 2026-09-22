/**
 * The blueprint pieces every page is built from.
 *
 * The whole site sits inside two thin vertical rails. Sections are stacked
 * between them and separated by hatched strips, and each one opens with a
 * mono label bar — "02 / THE PROBLEM" on the left, a short note on the right.
 */

/** Diagonal-hatched divider between sections. */
export function Hatch() {
  return <div className="hatch" aria-hidden="true" />
}

/** The numbered label strip that opens a section. */
export function SecBar({ num, label, aside }) {
  return (
    <div className="sec-bar">
      <span>
        {num && <span className="sec-num">{num}</span>}
        {label}
      </span>
      {aside && <span className="sec-aside">{aside}</span>}
    </div>
  )
}

/** Corner brackets around a piece of UI, like a selection in a design tool. */
export function Corners({ children, className = '' }) {
  return <div className={'corners' + (className ? ` ${className}` : '')}>{children}</div>
}
