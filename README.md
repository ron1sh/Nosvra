# Nosvra — company website

Marketing and case-study site for Nosvra, a software development and technology
consultancy. Built with Next.js (App Router), React, TypeScript and Tailwind CSS.

---

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build
npm run start        # serve the production build
npm run typecheck    # tsc --noEmit, no output artefacts
npm run lint         # next lint
```

Copy `.env.example` to `.env.local` and set the public site URL. It is used for
canonical URLs, the sitemap and Open Graph tags:

```
NEXT_PUBLIC_SITE_URL=https://www.nosvra.com
```

---

## Editing content — start here

**No copy is hardcoded inside a component.** Everything that changes over time
lives in `lib/data/`. To update the site, edit one of these files:

| File | What it controls |
| --- | --- |
| `site.ts` | Company name, email, phone, address, social links, `PLACEHOLDER_MODE` |
| `navigation.ts` | Header and footer menus |
| `services.ts` | The eight services, their deliverables and accent colours |
| `pricing.ts` | Pricing packages, features, delivery times, add-ons |
| `projects.ts` | Case studies (also drives `/projects/[slug]` and the sitemap) |
| `company.ts` | Testimonials, team, statistics, clients, awards |
| `catalog.ts` | Industries, technology stack, FAQ |
| `process.ts` | Process steps, growth path, problem signals, values |
| `content.ts` | Job openings and articles |

Adding a case study or an article to its array is enough — the index page, the
detail route, `generateStaticParams` and the sitemap all pick it up
automatically. Types live in `types/index.ts`; TypeScript will tell you if a
required field is missing.

### Placeholder content

Every value currently in `lib/data/` is **realistic sample data**, marked with
`// SAMPLE` comments. Small dashed "Sample" chips render next to demo content
throughout the site so nobody mistakes it for approved client material.

When the real content is in, set one flag:

```ts
// lib/data/site.ts
export const PLACEHOLDER_MODE = false;
```

Every sample chip and the "template document" warning on the legal pages
disappear. Search the repo for `SAMPLE` to find anything still needing
replacement.

### Before launch checklist

- [ ] Replace all `// SAMPLE` values in `lib/data/`
- [ ] Set `PLACEHOLDER_MODE = false`
- [ ] Have a lawyer review `/privacy` and `/terms`
- [ ] Wire up the contact form (see below)
- [ ] Set `NEXT_PUBLIC_SITE_URL` in the hosting environment
- [ ] Swap `app/icon.svg` and `app/apple-icon.svg` if the logo changes

### Wiring up the contact form

`components/contact/contact-form.tsx` validates on the client and currently
simulates the request. Replace the marked block in `submit()` with a POST to a
route handler (`app/api/enquiry/route.ts`), a form service, or a server action.
Nothing else needs to change — states, validation and markup stay as they are.

---

## Design system

The palette is taken from the company pitch deck rather than invented, so the
site and the deck read as one identity:

| Token | Hex | Role |
| --- | --- | --- |
| `ink-800` | `#162238` | Primary navy — text, primary button, dark sections |
| `harbor-600` | `#1C7293` | Primary accent (light mode) |
| `mint-400` | `#4FD9C7` | Primary accent (dark mode), highlights |
| `muted` | `#5B6B82` | Body copy |
| `subtle` | `#8AA0B8` | Metadata, mono labels |

**Surfaces** are CSS custom properties declared in `styles/globals.css`
(`--color-background`, `--color-surface`, `--color-border`, …) and exposed to
Tailwind as `bg-background`, `bg-surface`, `border-border` and so on. Light and
dark themes swap by changing the variables — never by duplicating classes.

**Category accents.** Services, industries, projects, jobs and articles each
carry an `accent` key. `lib/accents.ts` maps that key to a fixed set of class
strings (`tile`, `text`, `border`, `fill`, `wash`, `chip`). Class names are
written out in full so Tailwind's scanner can see them — **never build an accent
class by string interpolation**, it will be purged from the production build.

**Typography.** Inter Tight for headings (tighter widths let large type sit
close), Inter for body, JetBrains Mono for every label, index and metadata
string. Loaded through `next/font`, so there is no layout shift and no external
font request.

**Light mode** uses the fine dotted grid from the brand reference, applied once
to `body::before` with a radial mask so it fades out down the page.
**Dark mode** is a cool charcoal (`#0E131A`) rather than pure black, with soft
borders and muted contrast.

---

## Theme switching

Hand-rolled in ~90 lines, no dependency:

- `components/layout/theme-script.tsx` runs before first paint, so there is no
  flash of the wrong theme.
- `components/layout/theme-toggle.tsx` offers light / dark / **system**, stores
  the choice in `localStorage`, and follows the OS while set to system.

---

## Project structure

```
app/                    routes, metadata, sitemap, robots, OG image
  [page]/page.tsx       one file per route
  projects/[slug]/      case study detail (statically generated)
  blog/[slug]/          article detail (statically generated)
components/
  layout/               header, footer, logo, theme controls
  sections/             composable page sections (hero, growth path, FAQ, CTA…)
  ui/                   primitives: button, badge, section, reveal, icon tile
  projects/ pricing/ contact/   feature-specific components
lib/
  data/                 ← all editable content
  accents.ts            accent → class map
  seo.ts                metadata factory + schema.org helpers
  utils.ts              cn(), date and index formatting
styles/globals.css      theme tokens, dot grid, motion utilities
types/index.ts          shared types for every collection
```

---

## Performance and accessibility

The site is server-rendered by default. Only four components are client
components: the header (mobile menu), the theme toggle, the scroll-reveal
wrapper and the contact form. Everything else — including the FAQ, which uses
native `<details>` — ships zero JavaScript.

- Scroll reveals render **visible** and are only hidden once JavaScript confirms
  `IntersectionObserver` support, so crawlers and no-JS users see the full page.
- `prefers-reduced-motion` disables every transition and reveal.
- Semantic landmarks, a skip link, visible focus rings, labelled form controls
  with `aria-invalid` / `aria-describedby`, and `aria-current` on the active nav
  item.
- Metadata, Open Graph, Twitter cards, canonical URLs, `sitemap.xml`,
  `robots.txt`, and Organization / WebSite / Article / Breadcrumb / FAQ JSON-LD.

---

## Adding a new page

1. Create `app/<route>/page.tsx`.
2. Export metadata via the shared factory:

   ```ts
   export const metadata: Metadata = pageMetadata({
     title: 'Page title',
     description: 'One clear sentence.',
     path: '/route',
   });
   ```

3. Open with `<PageHeader />`, compose `<Section>` blocks, close with
   `<CallToAction />`.
4. Add the route to `staticRoutes` in `app/sitemap.ts`.
