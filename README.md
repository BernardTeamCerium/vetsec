# Vet-Sec Protection Agency — Website

A clean, fast, accessible website for **Vet-Sec Protection Agency**, a 100%
veteran-owned security-services company (founded 1994) providing uniformed
officers, mobile patrol, alarm response, camera towers, remote video
monitoring, and access-control installation across Phoenix, Tucson, Las Vegas,
and Albuquerque — backed by a 24/7 National Dispatch Center.

Static site — plain HTML, CSS, and a little vanilla JavaScript. No build step,
no framework; it deploys anywhere (Netlify, GitHub Pages, Cloudflare Pages, S3,
any web server).

## Design

A **command-center / field-operations** aesthetic that avoids the generic
"AI site" look:

- **Palette** — midnight navy, signal red accent, steel neutrals, and a sparing
  gold "veteran" star.
- **Type** — Montserrat throughout (bold uppercase headings, regular body,
  letter-spaced labels/stats).
- **Details** — red edge bars, a live "dispatch status" panel, sector icons,
  hairline grids on dark sections, restrained motion. Responsive; respects
  `prefers-reduced-motion`; skip-link + ARIA throughout.

All colors, spacing, and type live as CSS custom properties in
`assets/css/styles.css` (`:root`) — **the placeholder brand palette is one block
to swap** for the official Vet-Sec colors.

## Pages

```
index.html        Home (hero, services, dispatch, sectors, process, CTA)
services.html     Services detail (officers, patrol, alarm, towers, monitoring, systems)
about.html        About (1994 founding, Army MP founders, values, timeline)
why-vetsec.html   Why choose Vet-Sec (6 differentiators)
locations.html    Phoenix HQ, Tucson, Las Vegas, Albuquerque + dispatch
careers.html      Careers + application form
contact.html      Contact / Request a Quote form
assets/css/styles.css   Design system
assets/js/main.js       Nav toggle, scroll reveal, form handling
assets/img/             SVG logo (placeholder), light logo, favicon
```

## Forms — operational

The Quote (contact) and Careers forms validate inline (accessible), block spam
with a honeypot, and submit via the first applicable path:

1. **Netlify Forms** — wired with `data-netlify` + hidden `form-name`; captured
   automatically with zero config if deployed on Netlify.
2. **Custom endpoint** — set `data-endpoint` to a Formspree/Getform/your-own URL.
3. **Email fallback** — works anywhere (e.g. GitHub Pages); opens a pre-filled
   email. A failed Netlify/endpoint POST also falls back here.

> The fallback email is set to `info@vetsec.com` (`data-mailto`) as a
> placeholder — change it to the real inbound address on `contact.html` and
> `careers.html`.

## ⚠️ Brand assets — placeholders to replace

This environment's network policy blocks `vetsec.com`, so the **official logo,
brand colors, and photos/videos could not be pulled from the live site**. What's
here is a tasteful stand-in:

- `assets/img/logo.svg`, `logo-light.svg`, `favicon.svg` — placeholder shield
  mark. Drop in the official logo (same filenames) to swap site-wide.
- Palette in `:root` is a placeholder; replace with the official hex values.
- No photography/video is included. To use the real site's media, either add
  `vetsec.com` (and any image/video host) to the environment's network egress
  allowlist so it can be fetched, or provide the files.

Content (services, history, founders, locations, phone) reflects public
information about Vet-Sec Protection Agency; verify details before launch.

## Running locally

```bash
python3 -m http.server 8080   # then open http://localhost:8080
```

## Deploying

`.nojekyll` is included for GitHub Pages. Point Pages (or Netlify) at the branch
root and the site is live.
