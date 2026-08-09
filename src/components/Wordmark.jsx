/**
 * The Sofftrix company mark, rebuilt as live text.
 *
 * public/logo.jpg has a baked-in navy background with a vignette, so it can
 * never sit cleanly on a surface. Setting the wordmark in type keeps the
 * brand's three colours and its wide, thin letterforms, stays crisp at any
 * size, and lets it sit on light or dark. The JPG is still used as the
 * favicon and social image.
 *
 * The mark stands for the company only. Products live in the Products menu.
 */
export default function Wordmark() {
  return (
    <span className="wordmark">
      <span className="wordmark-text">
        <span className="wm-a">SO</span>
        <span className="wm-b">FFT</span>
        <span className="wm-c">RIX</span>
      </span>
    </span>
  )
}
