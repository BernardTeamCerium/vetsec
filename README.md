# VetSec — Website

A clean, fast, accessible redesign of the VetSec website. VetSec is a 501(c)(3)
nonprofit with the mission of *creating a world where no veteran pursuing a
career in cybersecurity goes unemployed.*

This is a **static site** — plain HTML, CSS, and a small amount of vanilla
JavaScript. There is no build step and no framework, so it deploys anywhere
(GitHub Pages, Netlify, Cloudflare Pages, S3, any web server).

## Design

The look intentionally avoids the generic "AI site" template (purple gradients,
glassmorphism, floating blobs). Instead it uses a restrained **field-manual /
dossier** aesthetic:

- **Palette** — deep ink navy, warm paper off-white, and a single
  challenge-coin gold accent.
- **Type** — IBM Plex Serif for headlines (editorial, trustworthy), IBM Plex
  Sans for body, IBM Plex Mono for labels and stats (technical/security feel).
- **Details** — hairline rules, monospace eyebrow labels, subtle stencil grid
  on dark sections, no gratuitous motion. Respects `prefers-reduced-motion`.

All colors, spacing, and type are defined as CSS custom properties in
`assets/css/styles.css` (`:root`), so the theme is easy to retune.

## Structure

```
index.html             Home
our-story.html         Our Story (founding, mission, timeline)
programs.html          Programs (orientation → training → careers)
partners.html          Partners & Sponsors (+ #donate section)
team.html              Our Team
global-network.html    Veterans Global Tech Network
join.html              Join Us (membership request form)
contact.html           Contact Us (contact form)
assets/
  css/styles.css       Design system + all components
  js/main.js           Nav toggle, scroll reveal, form handling
  img/                 SVG logo, light logo, favicon
```

## Forms — operational by design

Both forms (Join and Contact) validate inline (accessible, no-JS-safe markup),
block spam with a honeypot field, and submit in one of two ways:

1. **Backend endpoint (recommended for production).** Set the `data-endpoint`
   attribute on the `<form>` to your form handler URL. The form then `POST`s
   the data there via `fetch` and shows a success message. Works out of the box
   with [Formspree](https://formspree.io), Netlify Forms, Basin, Getform, or
   any endpoint that accepts `multipart/form-data`.

   ```html
   <form data-form data-endpoint="https://formspree.io/f/yourid" ...>
   ```

2. **Email fallback (zero config).** With `data-endpoint` left empty, the form
   opens the visitor's email client with a pre-filled message to
   `info@vetsec.org` (the address in `data-mailto`). This means the forms are
   **functional immediately** with no server setup, and upgrade to silent
   server-side delivery the moment you add an endpoint.

If a configured endpoint ever errors, the form automatically falls back to the
email path so a visitor is never left stuck.

> To wire up Formspree: create a form, copy the endpoint, and paste it into the
> `data-endpoint` attribute on `join.html` and `contact.html`.

## Running locally

No tooling required — open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Content & assets note

Copy reflects the content currently published by VetSec (mission, programs,
partners, team, and the Veterans Global Tech Network). The logo and favicon in
`assets/img/` are clean SVG recreations of the VetSec brand mark; drop in the
official logo files (same filenames) to swap them without touching markup.

## Deploying to GitHub Pages

A `.nojekyll` file is included so asset folders are served as-is. Point Pages at
the branch root and the site is live.
