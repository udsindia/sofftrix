# Sofftrix — VUTrak website

Marketing site for **VUTrak**, the lead CRM built by Sofftrix that opens the
first conversation with a new lead on WhatsApp within seconds of it arriving.

Vite + React + React Router. Four pages: Home, Product, Company, Contact.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the build
```

## How the site is put together

| Path | What it is |
| --- | --- |
| `src/pages/Home.jsx` | Landing page. The feature copy lives in the `leaks`, `timeline`, and `verticals` arrays at the top. |
| `src/pages/Product.jsx` | Feature detail. Every section is one entry in the `blocks` array. |
| `src/pages/About.jsx` | Company page. |
| `src/pages/Contact.jsx` | Demo request form. |
| `src/components/LeadInbox.jsx` | The hero animation. |
| `src/components/Wordmark.jsx` | The SOFFTRIX company wordmark, set in type. |
| `src/siteData.js` | The product list, plus address, phone, and email. |

### Company vs product

Sofftrix is the company; VUTrak is a product it sells. The wordmark stands for
the company alone, and products live in the **Products** menu. Adding an entry
to `PRODUCTS` in `src/siteData.js` puts it in both the nav menu and the footer
automatically — only the page itself needs building.

The Products menu opens on click, not hover, so it behaves the same with a
mouse, a touchscreen, and a keyboard. It closes on Escape, on a click outside,
and on navigation.

### The hero animation

`LeadInbox.jsx` plays a lead arriving and being answered, in real time. The
clock counts real seconds up to `SEND_AT` (4000ms), then freezes and flips from
orange to cyan. The whole sequence is the `SCRIPT` array — each entry is an
offset in milliseconds from the moment the lead lands, so retiming it is just
changing numbers. It respects `prefers-reduced-motion` by rendering the final
state immediately.

### The colour rule

Two accents carry meaning and are not used decoratively anywhere:

- **Orange `--waiting`** — a lead that has arrived and not been answered.
- **Cyan `--reached`** — a lead that has been contacted.

That is why the hero clock changes colour at four seconds and why the timeline
rail on the home page switches colour at the `0:04` row. If you add sections,
keep the rule.

Green appears in exactly one place: the delivered/read ticks in the chat
bubble, where it is doing a real job.

## Things to fill in

- **The demo form has no backend.** `handleSubmit` in `src/pages/Contact.jsx`
  opens the visitor's mail client with the fields pre-filled. Replace it with a
  `POST` when the API exists — the field names are already the payload shape.
- **No customer logos, testimonials, or metrics are on the site**, because
  inventing them would be worse than leaving them out. The home page argues
  from the failure modes instead. Add real ones when you have them.

## Brand notes

The wordmark is set in live text (`Wordmark.jsx`) rather than using
`public/logo.jpg`, because that file has a baked-in navy background with a
vignette and cannot sit cleanly on any surface. The JPG is still used as the
favicon and the social preview image.

If you get a transparent PNG or SVG of the mark, drop it in `public/` and swap
the contents of `Wordmark.jsx` for an `<img>`.

Type: Bricolage Grotesque (headings), Figtree (body), JetBrains Mono
(timestamps, labels, the clock), loaded from Google Fonts in `index.html`.
