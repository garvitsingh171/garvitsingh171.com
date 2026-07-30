# Garvit Singh — Personal Website

This is the official personal website and portfolio of Garvit Singh.

## Purpose

The website showcases my projects, open-source contributions, writing, resume, and software engineering journey.

## Live Website

[garvitsingh171.com](https://www.garvitsingh171.com)

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Vercel

## Website Sections

- Home
- About
- Projects
- Open Source
- Writing
- Resume
- Contact

## Development

```bash
npm install
npm run dev
```

## Project Structure

- `src/App.tsx` is the application shell.
- `src/providers` contains app-level providers.
- `src/routes` contains route constants and route configuration.
- `src/pages` contains route-level `*Page.tsx` files that compose sections, connect route state, and render SEO.
- `src/components/ui` contains domain-independent primitives such as buttons, cards, badges, headings, and empty states.
- `src/components/layout` contains the shared navigation, mobile menu, footer, and page shell pieces.
- `src/components/animation` contains reusable motion wrappers for route transitions, scroll management, section reveals, and staggered reveals.
- Domain-specific section and card components live in grouped folders such as `src/components/home`, `src/components/projects`, `src/components/openSource`, and `src/components/writing`.
- `src/data`, `src/types`, and `src/constants` hold portfolio content, typed data models, navigation, and site metadata.
- `src/lib` contains stable shared helpers such as `cn`, SEO helpers, link helpers, theme helpers, and project-image resolution.
- Public assets that need stable URLs live under `public`; project thumbnails are grouped under `public/images/projects/<project>/`, profile images under `public/images/profile/`, and Open Graph images under `public/og/`.
- Imports inside the React app can use the `@/` alias for `src`, configured in `vite.config.ts` and `tsconfig.app.json`.

## SEO Metadata

The canonical production URL is `https://www.garvitsingh171.com`.

Site-wide metadata defaults live in `src/data/site.ts`. Page metadata and
structured data for indexable static routes lives in `src/data/seo.ts`, and
each page renders it through the reusable `SEO` component. Project case-study
metadata is derived from `src/data/projects.ts`; a project can optionally
provide `seo.title`, `seo.description`, or `seo.image` when the derived values
need an override.

When adding a new public route, add the route constant and React Router entry,
then add its title, description, canonical path, and any supported structured
data in `src/data/seo.ts`. Add the public canonical URL to `public/sitemap.xml`
only when the route is complete, public, canonical, and indexable. The
production build also regenerates `dist/sitemap.xml` from the route metadata
and project slugs.

The default social preview image is stored at `public/og/garvit-singh.png`.
External search setup, including Google Search Console, Bing Webmaster Tools,
domain verification, and sitemap submission, is handled outside this
repository.

The production build runs `scripts/generate-static-seo.mjs` after Vite. That
script creates route-specific static HTML files and `dist/sitemap.xml` from the
static route metadata plus the centralized project slugs. Vercel still serves
the React app as a client-side application, but known public routes have
pre-rendered head metadata for non-JavaScript crawlers.

## Site Icons

`public/favicon.svg` is the source of truth for the site icon system. Run
`npm run generate:icons` after changing it to regenerate `public/favicon.ico`,
`public/favicon-16x16.png`, `public/favicon-32x32.png`,
`public/apple-touch-icon.png`, `public/icon-192x192.png`, and
`public/icon-512x512.png`; these generated assets should be committed. The
icon uses `171` as Garvit Singh's visual signature, but the written brand name
remains "Garvit Singh." Keep the mark recognizable at 16x16 before shipping
new icon artwork.

## Deployment

The website is deployed on Vercel and connected to a custom domain.
