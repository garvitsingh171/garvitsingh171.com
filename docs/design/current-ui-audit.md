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

## 2026-07-22 Design-System Follow-Up

### Audit Findings

- The repository already had a semantic-token foundation, theme toggle, shared buttons, shared badges, card primitives, and current design documentation.
- Remaining drift was concentrated in hardcoded brand/button/status colors, repeated card and metadata surface recipes, open-source contribution badges, social-link surfaces, and the homepage/contact CTA treatment.
- Dark mode was functional, but the grading still leaned too close between page and surface layers and had a few inverse-token combinations that could feel visually unrelated to the rest of the theme.
- Contact and CTA surfaces needed stronger token alignment so button text never depended on inherited foreground colors.

### Implemented Decisions

- Dark theme page, surface, elevated, subtle, border, text, accent, focus, and button tokens were refined in `src/index.css`.
- Added semantic Tailwind color mappings for foreground, muted foreground, accent foreground, primary foreground, secondary foreground, and focus ring.
- Added global `.surface-card`, `.surface-elevated`, `.surface-muted`, `.interactive-surface`, and `.focus-ring` utilities for repeated UI recipes.
- Added `src/lib/cn.ts` for typed class composition without adding a dependency.
- Button variants now include `link`, `destructive`, and `icon` support, and the legacy `project` variant maps to semantic tokens instead of hardcoded hex values.
- Open-source status badges now use the shared `Badge` component and success tokens.
- The homepage contact CTA now uses an elevated semantic surface instead of inverse color tokens.

### Validation

| Check | Result |
|---|---|
| `npm run lint` | Passed |
| `./node_modules/.bin/tsc -b --pretty false` | Passed |
| `npm run build` | Passed, with the existing Vite chunk-size warning |
| Raw Tailwind palette scan in `src` | No component/CSS matches for old slate/blue/gray palette utilities |

### Remaining Limitations

- No test script, browser automation, or visual regression setup exists.
- Several zero-byte `.gitkeep` deletions were present in the working tree during the final diff review and were left untouched as unrelated workspace changes.

## 2026-07-22 Motion-System Follow-Up

### Motion Audit Findings

- Motion was already centralized in `src/config/animations.ts`, but the system covered only section reveals, hero reveals, card hover, and media hover.
- Route navigation had no global scroll manager, so route changes could inherit stale scroll positions.
- Hash navigation was not explicitly protected from a global top reset.
- Page transitions were absent; individual sections animated, but complete route changes did not have a cohesive entrance.
- The mobile menu used a hard show/hide state instead of an animated open and close sequence.
- Hero motion was readable but subtle, with the main heading using the same reveal as supporting content.
- Project grids, skill grids, and case-study feature grids did not have deliberate staggered entrance behavior.
- Theme toggle state changed instantly at the icon level, making theme changes feel less connected to the rest of the interface.

### Implemented Motion Architecture

- Expanded `src/config/animations.ts` with page, exit, hero-heading, stagger, menu, theme-icon, viewport, card, media, and button-related motion tokens.
- Added `PageTransition` for route-level fade/rise transitions through `AnimatePresence`.
- Added `RouteScrollManager` to centralize route scroll behavior, set browser scroll restoration to manual, handle top resets, preserve valid hash scrolling, and move focus after client-side navigation.
- Added `StaggeredReveal` and `StaggeredRevealItem` for reusable grid/list reveals.
- Converted mobile navigation to an animated `AnimatePresence` panel with short link stagger and reduced-motion fallback.
- Strengthened homepage hero sequencing with a more prominent heading reveal and delayed visual entrance.
- Applied staggered reveals to project grids, featured project support cards, feature grids, and skill-card groups.
- Added a centralized `.button-motion` utility and short `.theme-transition` utility in `src/index.css`.
- Added a reduced-motion-safe theme-toggle icon transition and external-link icon microinteraction.

### Scroll And Hash Behavior

- No hash: route changes reset to `top: 0` and `left: 0` with `behavior: "auto"`.
- Valid hash: the target element is scrolled into view, using smooth scrolling unless reduced motion is enabled.
- Invalid or malformed hash: navigation safely falls back to the top.
- After client-side route changes, focus moves to the main content or hash target without forcing an extra scroll jump.
- Initial page load does not programmatically move focus.

### Motion Validation

| Check | Result |
|---|---|
| `npm run lint` | Passed |
| `./node_modules/.bin/tsc -b --pretty false` | Passed |
| `npm run build` | Passed, with the existing Vite chunk-size warning |
| Local dev route response | `curl -I http://127.0.0.1:5173/projects` returned `200 OK` |

### Remaining Motion Limitations

- Playwright is not installed, so automated browser assertions for scroll position, reduced-motion rendering, mobile menu animation, and visual flicker were not run.
- Browser-based route checks should still be manually reviewed at `/`, `/projects`, `/projects/pravaah`, `/about#skills-heading`, `/open-source`, `/resume`, and `/contact`.

## 2026-07-22 Structure Follow-Up

### Structure Audit Findings

- Route configuration lived directly in `src/App.tsx`, mixing providers, router setup, route definitions, and page imports.
- Route-level files used short names such as `Home.tsx` and `ProjectDetail.tsx` rather than a consistent `Page` suffix.
- Stable shared helpers lived in `src/utils`, while the requested architecture distinguishes reusable app helpers as `src/lib`.
- Global site and navigation data lived under `src/constants`, even though they are content/configuration data rather than implementation constants.
- Public project and profile images were duplicated at the public root and under `public/images`.
- Root-level project image paths were still used in project data, which made the asset structure harder to extend by project.
- Imports from route pages to app-wide modules relied on relative paths instead of a predictable source-root alias.

### Implemented Structure Decisions

- Added `src/App.tsx`, `src/providers/providers.tsx`, `src/routes/router.tsx`, and `src/routes/routes.ts`.
- Moved route files to consistent `*Page.tsx` names in `src/pages`.
- Added the `@/` import alias in `vite.config.ts` and `tsconfig.app.json`.
- Moved stable helpers from `src/utils` to `src/lib`.
- Moved `site.ts` and `navigation.ts` into `src/data`, leaving `src/constants` for implementation constants.
- Grouped public project thumbnails by project under `public/images/projects/<project>/`.
- Grouped profile images under `public/images/profile/`.
- Removed duplicated root-level project thumbnail files after updating all references.
- Updated README structure documentation and the design implementation map.

### Structure Validation

| Check | Result |
|---|---|
| `npm run lint` | Passed |
| `./node_modules/.bin/tsc -b --pretty false` | Passed |
| Empty directory scan | No empty directories remain under `src` or `public` |

### Remaining Structure Limitations

- Feature code remains in domain folders under `src/components/*` instead of a full `src/features/*` migration. This was kept intentional to avoid a large, low-value move while the current domain grouping is already understandable.
- The favicon and manifest files remain at the public root because browser and generation-script paths currently depend on stable root URLs.
