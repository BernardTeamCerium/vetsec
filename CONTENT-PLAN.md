# Vet-Sec Protection Agency — Content & Growth Plan

This document captures the site's information architecture and the content
roadmap it's built to support. The current build establishes the structure so
new pages can be added consistently as copy, imagery, and assets are finalized.

## Brand & design system

- **Palette:** shield **navy** leads (dominant brand color); **red** is reserved
  for strategic emphasis (primary CTAs, active states, "priority"/"hot" markers,
  link underlines); **steel/silver** metallic accents add polish; gold star is
  used sparingly for the veteran mark. Tokens live in `assets/css/styles.css`
  under `:root`.
- **Type:** Montserrat for body and most headings (clean readability); the
  **Sanchez** slab-serif display face is used selectively (H1s, stat numbers)
  to echo the "VET·SEC PROTECTION AGENCY" logo wordmark without feeling heavy.
- **CTAs:** consistent treatment — `.btn--primary` (red) is the single high-value
  action; `.btn--navy` / `.btn--ghost` / `.btn--light` are secondary.
- **Reusable components** (in `styles.css`): `.pillars`, `.s3grid`/`.s3card`,
  `.speclist`, `.download-card`, `.placeholder` (pending-assets callout),
  `.loc.soon` (coming-soon), `.pill` / `.pill--red`.

## Primary navigation & highest-value paths

Nav is intentionally lean to surface the paths that matter most:
**Services · Technology · About · Locations · Careers · Contact**, plus a
persistent **Call** and **Request a Quote** in the header. The five priority
visitor journeys — request a quote, call, review services, explore Technology
Solutions, apply for careers — are all reachable in one click from every page.

## Service architecture (three pillars)

1. **Guard Services** — `security-officers.html`
2. **Mobile Patrol** — `mobile-patrol.html`
3. **Security Technology** — `technology-solutions.html` (priority growth area)
   - Smart Sentry Stations (S3) — `smart-sentry-stations.html` *(priority)*
   - Monitoring & SOC — `monitoring.html` *(priority)*
   - Camera Implementation — `camera-implementation.html`
   - Access Control — `access-control.html`

Each pillar has a clear homepage summary and expands into a dedicated,
SEO-oriented page. Smart Sentry Stations and monitoring are featured most
prominently because they are the current priority sales areas.

> Terminology: "dispatch" has been replaced by **SOC / Security Operations
> Center** site-wide. "Alarm response" has been retired in favor of
> **emergency response** coordinated by the SOC.

## Local presence (local-market SEO pages)

Structure is live and ready to scale:

- `phoenix.html` (HQ) · `tucson.html` · `las-vegas.html` · `albuquerque.html`
- `florida.html` — **coming soon** placeholder, structured for launch

All are linked from `locations.html`. Each city page follows one template
(local intro, office/licensing, three pillars, industries, SOC band, CTA), so
new markets can be added by copying the pattern. **Next markets** slot in the
same way as Vet-Sec expands (e.g., additional AZ/NV/NM metros, then Florida
metros: Miami, Orlando, Tampa, Jacksonville).

## Recruiting

- `careers.html` — benefits, open roles, qualifications, and an **online
  application**. The client's new application (built on the existing site) wires
  in at the clearly-marked `<!-- ONLINE APPLICATION -->` block / `#apply`
  anchor; until the ATS URL or embed is supplied, the built-in form is fully
  functional (Netlify Forms + mailto fallback to HR).
- **Future recruiting pages:** role-specific landing pages (Armed Officer,
  Unarmed Officer, Mobile Patrol Driver, SOC Operator, Supervisor), a
  guard-card training page, and per-market hiring pages that link from each
  city page.

## Placeholders (pending final assets)

Marked in-page with the `.placeholder` component and held until final assets:

- **Professional Affiliations** (`professional-affiliations.html`) — additional
  partner/affiliation logos and badges.
- **Technology Solutions** detail — partner/product logos, additional
  photography, integration diagrams, and **QR-code destinations** for the S3
  sell sheet and demo booking.
- **Florida** — office address, local licensing, market copy.

## Future content streams

- **SEO service pages:** deepen each Technology subpage; add
  industry-by-service pages (e.g., "construction site security", "HOA patrol").
- **Local market pages:** one per metro as coverage grows (template above).
- **News & updates:** company announcements, new market launches, awards
  (suggested path: `news/` index + dated posts).
- **Educational posts:** security guidance (e.g., "when to choose an S3 vs.
  a guard", "reducing false alarms", "securing a construction site")
  (suggested path: `resources/` or `blog/`). These build topical authority and
  feed the priority Technology pages.

## Assets

- Brand: `assets/img/brand/` (logo, NaVOBA, favicon).
- Photography: `assets/img/photos/` (site) and `assets/img/photos/tech/`
  (S3 product shots, field deployments, and the S3 hexagon mark, pulled from
  the S3 sell sheet).
- Documents: `assets/docs/vetsec-s3-sell-sheet.pdf` (linked from the Smart
  Sentry page's "Download info" button).
