# Design Implementation Map

| Design concern | Implementation location |
|---|---|
| Canonical visual reference | `docs/design/portfolio-visual-direction.md` |
| Current audit and migration notes | `docs/design/current-ui-audit.md` |
| Global tokens and Tailwind semantic mappings | `src/index.css` |
| Base typography, selection, focus, reduced motion | `src/index.css` |
| Theme initialization | `index.html` |
| App-level route shell and page container | `src/layouts/MainLayout.tsx` |
| Primary navigation and mobile menu | `src/components/layout/Navbar.tsx`, `src/components/layout/MobileNavigation.tsx` |
| Footer | `src/components/layout/Footer.tsx` |
| Theme toggle | `src/components/ui/ThemeToggle.tsx` |
| Buttons | `src/components/ui/Button.tsx` |
| Cards and surfaces | `src/components/ui/Card.tsx` |
| Section and page headings | `src/components/ui/SectionHeading.tsx`, `src/components/ui/PageHeader.tsx` |
| Badges and tags | `src/components/ui/Badge.tsx`, `src/components/projects/ProjectStatusBadge.tsx`, `src/components/projects/TechnologyList.tsx` |
| Homepage hierarchy | `src/pages/Home.tsx`, `src/components/home/*`, `src/data/home.ts` |
| Project data source | `src/data/projects.ts`, `src/types/project.ts` |
| Project cards | `src/components/projects/ProjectCard.tsx` |
| Project filters | `src/components/projects/ProjectFilters.tsx` |
| Project case-study layout | `src/pages/ProjectDetail.tsx`, `src/components/projects/*` |
| About page sections | `src/pages/About.tsx`, `src/components/about/*`, `src/data/about.ts` |
| Skills presentation | `src/components/skills/*`, `src/data/skills.ts` |
| Resume page | `src/pages/Resume.tsx`, `src/components/resume/*`, `src/data/resume.ts` |
| Open-source page | `src/pages/OpenSource.tsx`, `src/components/openSource/*`, `src/data/openSource.ts` |
| Contact page and social links | `src/pages/Contact.tsx`, `src/components/social-links/*`, `src/data/contact.ts`, `src/data/socialLinks.ts` |
| Writing page | `src/pages/Writing.tsx`, `src/components/writing/*`, `src/data/writing.ts` |
| Empty and 404 states | `src/components/ui/EmptyState.tsx`, `src/pages/NotFound.tsx`, `src/data/fallbackStates.ts` |

## Validation Locations

- Build: `npm run build`
- Lint: `npm run lint`
- Type-check: `./node_modules/.bin/tsc -b --pretty false`
- Tests: no test script currently exists
- Manual QA routes: `/`, `/about`, `/projects`, `/projects/pravaah`, `/projects/beathub-api`, `/open-source`, `/writing`, `/experience`, `/resume`, `/contact`, and an unknown route
