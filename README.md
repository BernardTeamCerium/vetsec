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
block spam with a honeypot field, and submit through the first of three paths
that applies — each one degrading gracefully to the next:

1. **Netlify Forms (zero config, already wired).** The forms carry
   `data-netlify="true"` and a hidden `form-name` field, so if the site is
   deployed on [Netlify](https://docs.netlify.com/forms/setup/) submissions are
   captured automatically — no account keys, no code changes. Submissions show
   up in your Netlify dashboard and can email/Slack-notify you.

2. **Custom endpoint (Formspree / Getform / your own).** Set the `data-endpoint`
   attribute on the `<form>` to a handler URL and it `POST`s there via `fetch`
   instead. Useful if you're not on Netlify.

   ```html
   <form data-form data-endpoint="https://formspree.io/f/yourid" ...>
   ```

3. **Email fallback (works anywhere, no setup).** On any host where the above
   aren't available (e.g. GitHub Pages), the form opens the visitor's email
   client with a pre-filled message to `info@vetsec.org` (the `data-mailto`
   address). The forms are therefore **functional immediately**, and a failed
   Netlify/endpoint POST also falls back here so a visitor is never stuck.

> Not using Netlify? Either drop a Formspree endpoint into `data-endpoint` on
> `join.html` and `contact.html`, or remove the `data-netlify` attribute to use
> the email fallback directly.

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
