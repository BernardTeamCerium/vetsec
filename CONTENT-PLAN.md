# Vet-Sec Protection Agency — Site Structure & Content Growth Plan

This document maps the site as it stands and the roadmap for growth. The
design system (`assets/css/styles.css`) and page templates are built so new
local-market, recruiting, service, and article pages can be added quickly
with consistent chrome (top bar, nav, footer) and components.

## Brand & design system

- **Colors** — Shield **navy** leads; **red** is reserved for strategic
  emphasis (primary CTAs, active nav, priority dots, key accents);
  **steel/silver** metallic accents (hairlines, gradients) add polish; gold
  star used sparingly for the veteran mark. Tokens live in `:root`.
- **Type** — Montserrat for body and most headings; **Sanchez** slab-serif
  for H1 display, echoing the VET·SEC logo wordmark. `.display` opt-in class.
- **Components** — `.pillars`, `.s3card`/`.s3grid`, `.speclist`,
  `.download-card`, `.placeholder` (pending-assets), `.loc`/`.loc.soon`,
  `.pill`, metallic helpers (`.metal-rule`, `.metal-top`, `.band-steel`).

## Primary navigation (highest-value paths)

`Services · Technology · About · Locations · Careers · Contact` + **Request a
Quote** (red CTA) and **Call 1-800-909-3628** in the header/top bar. These
surface the money paths: quote, call, services, Technology Solutions, careers.

## Current pages

### Services (3 pillars)
- `services.html` — Guard Services · Mobile Patrol · Security Technology
- `security-officers.html` (Guard Services), `mobile-patrol.html`

### Technology Solutions (priority sales area)
- `technology-solutions.html` — overview
- `smart-sentry-stations.html` — **S3** (images, models, specs, sell-sheet download) ← priority
- `monitoring.html` — Monitoring & 24/7 SOC ← priority
- `camera-implementation.html`
- `access-control.html`
- Redirects: `camera-towers.html`→S3, `video-monitoring.html`→monitoring,
  `alarm-response.html`→services (alarm response retired).

### Local presence
- `locations.html` — hub
- `phoenix.html`, `tucson.html`, `las-vegas.html`, `albuquerque.html`
- `florida.html` — **now licensed statewide (FL Lic. #B3600063)**; positioned
  as the newest market while local office/team details are finalized.

### Company / Resources / Recruiting
- `about.html`, `team.html`, `why-vetsec.html`, `industries.html`
- `training.html`, `supervision.html`, `uniforms-equipment.html`,
  `customer-service.html`, `national-accounts.html`
- `careers.html` — online application (see "Open items" re: ATS URL)
- `professional-affiliations.html` — **placeholder** (partner logos pending)
- `news.html` — **placeholder** for news & educational posts

## Growth roadmap

1. **Local market pages** — add city pages as markets expand (Florida metros:
   Miami, Orlando, Tampa, Jacksonville). Duplicate a city page, swap the
   hero image, address/phone, license #, and coverage-area list. Link from
   `locations.html` and the footer.
2. **SEO service pages** — expand each pillar into deeper pages
   (e.g. "Construction Site Security", "HOA Security", "Retail Loss
   Prevention"), cross-linked from `industries.html` and the service pillars.
3. **Recruiting pages** — role-specific landing pages (Security Officer,
   Mobile Patrol Driver, SOC Operator) feeding the online application; state
   guard-card / licensing info per market.
4. **News & educational posts** — `news.html` is the hub; add article pages
   (company news, new-market announcements, security best-practice guides,
   S3 use-cases). Use `.card`/`.cardgrid` for the index listing.
5. **Technology deep-dives** — per-S3-model pages, monitoring case studies,
   and integration guides as sales assets mature.

## Open items (pending client assets)

- **Brand logo files** — the metallic VET·SEC shield, the "30 Years in
  Business" badge, the Florida "now licensed" graphic, and the clean S3
  hexagon were shared as images in chat but not as files. Provide the
  PNG/SVG source files to wire into the header, footer, favicon, and the S3 /
  Florida pages. (Current header uses `assets/img/brand/vetsec-logo.jpg`.)
- **Careers online application** — the new application added to the existing
  site in the last few weeks. Provide its URL/embed; the "Open the full online
  application" button in `careers.html` (see `data-apply-url` / HTML comment)
  is ready to point at it. A working quick-apply form is in place meanwhile.
- **Technology Solutions final assets** — final copy sign-off, partner logos,
  additional site photography, and **QR-code destinations**. Placeholders are
  marked with the `.placeholder` "In progress" callout.
- **Professional Affiliations** — membership/partner logos and links.
