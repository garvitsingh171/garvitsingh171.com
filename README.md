# Garvit Singh — Personal Website

This is the official personal website and portfolio of Garvit Singh.

## Purpose

The website showcases my projects, open-source contributions, writing, resume, and software engineering journey.

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

## SEO Metadata

Site-wide metadata defaults live in `src/constants/site.ts`. Page metadata for
indexable static routes lives in `src/data/seo.ts`, and each page renders it
through the reusable `SEO` component. Project case-study metadata is derived
from `src/data/projects.ts`; a project can optionally provide `seo.title`,
`seo.description`, or `seo.image` when the derived values need an override.

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

## Website Structure

The website will include:

- Home
- About
- Projects
- Project Details
- Open Source
- Writing
- Resume
- Contact

The first version focuses on content, structure, and recruiter clarity. Visual polish, animations, and inspiration-based improvements will be added after the content is stable.
