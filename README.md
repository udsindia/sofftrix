# Softtrix Website

A 3-page React site (Home, About Us, Contact Us) built with Vite + React Router.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Replacing the logo

The header/hero logo is `public/logo.svg` — a placeholder recreation of the brand mark.
To use your real logo file instead:

1. Drop your logo image into `public/` (e.g. `public/logo.png`).
2. In `src/components/Navbar.jsx` and `src/pages/Home.jsx`, change `src="/logo.svg"` to `src="/logo.png"`.

## Editing contact details

Address, phone, and email are set directly in `src/pages/Contact.jsx` and `src/components/Footer.jsx`.
