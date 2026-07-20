# Current UI Audit

Audit date: 2026-07-20

## Framework And Tooling

- React 19 with Vite 8 and TypeScript.
- Tailwind CSS 4 is enabled through `@tailwindcss/vite`.
- Routing uses `react-router-dom` with routes for Home, About, Projects, Project Detail, Open Source, Writing, Experience, Contact, Resume, and Not Found.
- Styling is mainly Tailwind utility classes plus global base styles in `src/index.css`.
- No CSS modules, test runner script, visual regression tool, or browser automation setup exists.

## Baseline Validation

Commands run before design-system edits:

| Check | Result |
|---|---|
| `npm run build` | Passed |
| `npm run lint` | Passed |
| `./node_modules/.bin/tsc -b --pretty false` | Passed |
| `npm test` | Failed: no `test` script exists |

## Current Visual System

- Typography is Inter/system-sans only. Display headings use bold sans-serif rather than the editorial serif direction.
- Global color is dark-first with slate backgrounds, blue accents, and a radial glow in `src/index.css`.
- Light theme is not implemented. There is no theme toggle, system-preference handling, or persisted theme state.
- Colors are repeated as raw Tailwind palette utilities such as `text-slate-300`, `bg-slate-950`, `border-slate-800`, and `text-blue-300`.
- Spacing mostly uses Tailwind defaults and page-level `space-y-*`, with no documented section/container primitives.
- Borders are frequent and mostly slate-based. Shadows are limited, but cards sometimes add hover shadows.
- Border radius is mostly `rounded-md` and `rounded-lg`, with chips using pills. The pattern is usable but undocumented.
- Navigation is accessible enough for a simple disclosure menu, including `aria-expanded`, `aria-controls`, route-change close, and Escape close.
- Footer is content-rich and should be preserved, but it uses the old dark palette and utility-specific styling.
- Project data is centralized and strong. Cards underrepresent problem, role, and engineering evidence while overemphasizing full technology lists.
- Case-study pages already have strong content structure and should be visually aligned, not rewritten from scratch.

## Accessibility And UX Issues

- No complete light/dark theme support.
- Focus styles are visible but hardcoded to blue palette utilities.
- Many essential labels use small uppercase text with wide tracking. Tracking must be normalized in implementation.
- Mobile menu closes on Escape but does not lock body scroll or manage focus like a dialog.
- Project cards expose multiple full-width actions, which can feel heavy and repetitive on dense grids.
- External links generally use safe `target` and `rel`, but visual external-link treatment is inconsistent.
- No automated a11y or screenshot checks exist.

## Repeated Patterns To Consolidate

- Page headers: label, large title, introduction.
- Section headers: label, title, description.
- Section dividers: `border-t border-slate-800 pt-10 sm:pt-12`.
- Cards: `rounded-lg border border-slate-800 bg-slate-900/60`.
- Chips/tags: rounded border with slate background.
- Buttons: primary, outline, ghost variants in `src/components/ui/Button.tsx`.
- Project metadata blocks and technology lists.

## Migration Boundaries

Preserve:

- Existing routes, data files, project case-study content, social links, resume link, and layout ownership.
- Existing component directory structure.
- Rich project detail architecture sections and open-source content.

Refactor:

- `src/index.css`, `src/layouts/MainLayout.tsx`, layout navigation/footer, shared UI primitives, project cards, status badges, technology tags, page headers, and section rhythm.

Replace:

- Dark-only global background and raw palette dependency with semantic tokens.
- Card-heavy homepage rhythm with a more editorial product-engineering hierarchy.

Delete or ignore:

- `src/App.css` appears to be unused Vite template styling and should not drive production visuals.

## Pages Requiring Major Changes

- Home: needs editorial hero, stronger selected-work hierarchy, proof row, and closing CTA.
- Projects: needs improved filtering surface and project cards that communicate product context.
- Project Detail: content is strong but needs design-system surfaces, typography, and metadata treatment.
- Navigation/Footer: need semantic theme styling and theme toggle integration.

## Pages Requiring Minor Changes

- About, Resume, Open Source, Contact, Writing, Experience, and Not Found mostly need semantic theme alignment, section rhythm, and shared primitive usage.

## Technical Risks

- Large class migration can accidentally leave inaccessible light-mode text.
- Tailwind 4 semantic color mapping must support dark-mode variables without adding brittle raw hex classes.
- Theme initialization must avoid hydration issues and direct-load theme flash.
- No screenshot or browser automation tooling exists, so manual QA is limited unless a dev server is run.

## Recommended Migration Order

1. Add design documentation and implementation map.
2. Define semantic tokens, base typography, focus, motion, and theme behavior.
3. Standardize shared UI primitives.
4. Align navigation, footer, and layout container widths.
5. Improve homepage and selected-work presentation.
6. Redesign project cards and case-study surfaces.
7. Sweep supporting pages for raw palette and responsive issues.
8. Run lint, type-check, build, route review, theme review, and responsive checks.
