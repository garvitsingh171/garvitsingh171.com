# Design Implementation Map

| Design concern | Implementation location |
|---|---|
| Canonical visual reference | `docs/design/portfolio-visual-direction.md` |
| Current audit and migration notes | `docs/design/current-ui-audit.md` |
| Global tokens and Tailwind semantic mappings | `src/index.css` |
| Shared surface utilities | `src/index.css` |
| Class composition helper | `src/lib/cn.ts` |
| Base typography, selection, focus, reduced motion | `src/index.css` |
| Motion tokens, variants, and section reveal wrapper | `src/config/animations.ts`, `src/components/animation/*` |
| Route transitions and scroll restoration | `src/components/animation/PageTransition.tsx`, `src/components/animation/RouteScrollManager.tsx`, `src/layouts/MainLayout.tsx` |
| Staggered reveal helper | `src/components/animation/StaggeredReveal.tsx` |
| Theme initialization | `index.html` |
| App providers and routes | `src/App.tsx`, `src/providers/providers.tsx`, `src/routes/router.tsx`, `src/routes/routes.ts` |
| App-level route shell and page container | `src/layouts/MainLayout.tsx` |
| Primary navigation and mobile menu | `src/components/layout/Navbar.tsx`, `src/components/layout/MobileNavigation.tsx` |
| Footer | `src/components/layout/Footer.tsx` |
| Theme toggle | `src/components/ui/ThemeToggle.tsx` |
| Buttons | `src/components/ui/Button.tsx` |
| Cards and surfaces | `src/components/ui/Card.tsx` |
| Section and page headings | `src/components/ui/SectionHeading.tsx`, `src/components/ui/PageHeader.tsx` |
| Badges and tags | `src/components/ui/Badge.tsx`, `src/components/projects/ProjectStatusBadge.tsx`, `src/components/projects/TechnologyList.tsx` |
| Homepage hierarchy | `src/pages/HomePage.tsx`, `src/components/home/*`, `src/data/home.ts` |
| Project data source | `src/data/projects.ts`, `src/types/project.ts` |
| Project cards | `src/components/projects/ProjectCard.tsx` |
| Project filters | `src/components/projects/ProjectFilters.tsx` |
| Project case-study layout | `src/pages/ProjectDetailsPage.tsx`, `src/components/projects/*` |
| About page sections | `src/pages/AboutPage.tsx`, `src/components/about/*`, `src/data/about.ts` |
| Skills presentation | `src/components/skills/*`, `src/data/skills.ts` |
| Resume page | `src/pages/ResumePage.tsx`, `src/components/resume/*`, `src/data/resume.ts` |
| Open-source page | `src/pages/OpenSourcePage.tsx`, `src/components/openSource/*`, `src/data/openSource.ts` |
| Contact page and social links | `src/pages/ContactPage.tsx`, `src/components/social-links/*`, `src/data/contact.ts`, `src/data/socialLinks.ts` |
| Writing page | `src/pages/WritingPage.tsx`, `src/components/writing/*`, `src/data/writing.ts` |
| Empty and 404 states | `src/components/ui/EmptyState.tsx`, `src/pages/NotFoundPage.tsx`, `src/data/fallbackStates.ts` |
| Site and navigation data | `src/data/site.ts`, `src/data/navigation.ts`, `src/constants/sections.ts` |

## Validation Locations

- Build: `npm run build`
- Lint: `npm run lint`
- Type-check: `./node_modules/.bin/tsc -b --pretty false`
- Tests: no test script currently exists
- Manual QA routes: `/`, `/about`, `/projects`, `/projects/pravaah`, `/projects/beathub-api`, `/open-source`, `/writing`, `/experience`, `/resume`, `/contact`, and an unknown route
