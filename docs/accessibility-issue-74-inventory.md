# Accessibility Issue 74 Inventory

Audit scope: public routes, shared layout, navigation, footer, theme toggle,
project cards, project-detail pages, open-source sections, writing cards, skills,
resume sections, social links, reusable cards/buttons, images, and route focus.

## Images

- Meaningful images: profile portrait, project thumbnails, project-detail hero
  media, project screenshots, and architecture diagrams. These are rendered
  through `PortraitCard`, `ProjectMedia`, `ProjectDetailsPage`,
  `ProjectScreenshotsSection`, and `ProjectArchitectureSection`, all with
  contextual `alt` text supplied by data.
- Decorative visuals: brand mark, menu icons, theme icons, social/link companion
  icons, contribution disclosure chevron, decorative portrait border, and
  connector arrows are hidden with `aria-hidden` or presentation semantics.
- Functional icons: theme toggle and mobile-menu trigger are named by their
  parent buttons. Social and external icon links are named by link data.

## Structure

- The shared layout owns the only primary `main` landmark through
  `MainLayout`, with `id="main-content"` for skip navigation.
- Site header, primary navigation, mobile navigation, and footer use native
  landmarks.
- Desktop and mobile navigation are list-based.
- Project cards, featured projects, skills, writing entries, learning cards,
  open-source contributions, project action groups, and project architecture
  layers use semantic list or article structures where they represent
  collections.
- Project detail pages use one `article` for the case study and section
  headings for major case-study regions.

## Interactive Elements

- Buttons are retained for state-changing actions: theme toggle, mobile menu,
  category filters, project filters, and empty-state reset actions.
- Links are used for internal navigation, project case studies, social profiles,
  repositories, live projects, email, downloads, and external resources.
- Project cards do not wrap the full card in a link. Titles and action buttons
  are separate controls, avoiding nested interactive elements.
- Icon-only controls have accessible names and decorative child SVGs are hidden.

## Keyboard and Focus

- A skip-to-content link is available before navigation and targets the shared
  `main`.
- Global focus-visible styles and component focus classes remain intact.
- Route changes skip initial load, respect hashes, and focus the new route's
  `h1` when available, falling back to `main`.
- The mobile menu has stable `aria-controls`, stateful `aria-expanded`, Escape
  handling, scroll restoration, and focus moves to the first menu link on open.

## Validation

- `npm run lint`
- `npm run build`

