# Alhanif Group — Freight & Logistics Website

A Next.js 14 (App Router) + TypeScript + Tailwind CSS site for Alhanif Group,
a UAE/GCC freight, sourcing, and logistics company.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/                      Route pages (App Router)
    page.tsx                Homepage
    about-us/page.tsx
    services/page.tsx
    services/[slug]/page.tsx Dynamic service detail pages
    blog/page.tsx
    blog/[slug]/page.tsx    Dynamic blog post pages
    faq/page.tsx
    gallery/page.tsx
    contact-us/page.tsx
    privacy-policy/page.tsx
    sitemap.ts
    layout.tsx              Root layout (fonts, header, footer, metadata)
    globals.css
  components/
    layout/                 Header, Footer
    ui/                     Button, SectionHeading, ServiceIcon, RouteLine
    sections/               Homepage/section blocks (Hero, ServicesGrid, etc.)
    forms/                  QuoteForm
  data/                     Editable content — services, blog, FAQ, testimonials, site.ts
  lib/                      Small utility helpers
public/
  images/logo.png           Your uploaded logo
  robots.txt
```

## Before you launch — replace these placeholders

Everything below is clearly marked `[PLACEHOLDER]` in the source so it's
easy to find and search for:

- **`src/data/site.ts`** — phone number, WhatsApp link, email, address,
  legal entity name, founding year, domain, and social media URLs.
- **`src/data/testimonials.ts`** — sample client quotes and names. Replace
  with real client testimonials (with permission).
- **`src/app/gallery/page.tsx`** — gradient placeholder tiles stand in for
  real photography of your fleet, warehouse, and operations.
- **`src/app/privacy-policy/page.tsx`** — generic placeholder text. Have
  this reviewed by legal counsel before publishing.
- **`WEB3FORMS_ACCESS_KEY`** — set this as an environment variable (copy
  `.env.local.example` to `.env.local` locally, and add it under Vercel →
  Settings → Environment Variables for production) to make the quote form
  actually deliver submissions. See "Security notes" below for why it's
  set up this way.
- **`src/app/layout.tsx`** — swap `metadataBase`/domain once you have a
  real production URL.

## Security notes

- The `/admin` area (media manager at `/admin/media`) is password-protected.
  Set `ADMIN_PASSWORD` in `.env.local` locally and in Vercel's Environment
  Variables for production — pick any password you like. Log in at
  `/admin/login`. Without this variable set, the admin area is
  inaccessible (locked out, not open).
- The quote form submits to `src/app/api/quote/route.ts`, a server-side
  API route — the Web3Forms key lives only in a server environment
  variable and is never sent to the browser. Don't move it into
  `src/data/site.ts` or any file read by a `"use client"` component, or
  it'll end up visible in your site's JavaScript again.
- `next.config.mjs` sets standard security headers (clickjacking
  protection, MIME-sniffing protection, HSTS, a restrictive Permissions
  Policy) on every response.
- Nothing in this project talks to a database or holds user credentials,
  so there's no login system or user data store to secure beyond the
  form pipeline above.

## SEO notes

- Every page has its own `<title>` and meta description (see each
  `page.tsx`'s `metadata` export).
- `src/app/sitemap.ts` and `public/robots.txt` are generated
  automatically — update `site.domain` in `src/data/site.ts` once you
  have a real domain, since both derive from it.
- `src/app/layout.tsx` includes Organization structured data (JSON-LD)
  so search engines can associate your name, logo, contact info, and
  social profiles with the site.
- Open Graph/Twitter card metadata is set so links shared on WhatsApp,
  social media, etc. show a proper preview.

## Content already filled in (edit freely)

- 12 services in `src/data/services.ts`, including the four you asked to
  add specifically: **Customs Clearance**, **Sourcing Agent Services**,
  **Documentation & Compliance**, and **Transloading Services** — plus
  the standard freight-forwarder set (air/sea/land freight, door-to-door,
  warehousing, packing, courier, vehicle & truck services).
- 3 sample blog posts in `src/data/blog.ts` (original writing — replace
  or add more any time).
- 6 FAQ entries in `src/data/faq.ts`.

## Design notes

- Palette and type system are defined in `tailwind.config.ts` and
  `src/app/globals.css` — light blue theme with a copper accent, paired
  with Instrument Serif (headlines), Inter (body), and IBM Plex Mono
  (labels/manifest numbers).
- The dashed "trade-route line" (`src/components/ui/RouteLine.tsx`) is
  the site's signature motif, echoing the sweep of the logo's sail sweep.
  It appears in the hero and as a section divider.
- Respects `prefers-reduced-motion`.
- All content (services, blog posts, FAQ, testimonials) lives in plain
  TypeScript files under `src/data/` — edit those directly to change
  what's on the site. No CMS or database is connected.
