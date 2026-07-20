---
title: "Garvit Singh Portfolio - Complete Visual Direction and Design Specification"
author: "Design planning document"
date: "20 July 2026"
---

# Garvit Singh Portfolio

## Complete Visual Direction and Design Specification

**Working direction:** Editorial Product Engineer  
**Primary purpose:** Define the final visual language before homepage and project-card UI work begins.  
**Applies to:** Homepage, project listing, project case studies, About, Skills, Open Source, Resume, Contact, navigation, footer, responsive states, light theme, and dark theme.  
**Status:** Design foundation and implementation handoff.

---

# Document Purpose

This document converts the selected portfolio inspiration into a complete, reusable design system for Garvit Singh's personal website. It is intended to prevent isolated visual decisions, inconsistent components, repeated redesign, and accidental copying of the reference portfolio.

The goal is not to reproduce the reference page. The goal is to identify why the reference feels premium, then adapt those principles to a software product engineer's portfolio.

The final website should communicate four things quickly:

1. Garvit builds complete software products, not only isolated UI screens.
2. Garvit can explain engineering decisions, architecture, trade-offs, and outcomes.
3. Garvit has credible proof through deployed projects, leadership, academics, and open-source work.
4. Garvit is a thoughtful early-career engineer with a clear direction and professional standards.

This document is the design source of truth. The later UI issues should apply these rules instead of inventing new fonts, colors, spacing, card styles, and interaction patterns component by component.

---

# Table of Contents

1. Executive Summary
2. Inspiration Reference Review
3. Final Visual Direction
4. Brand Strategy and Positioning
5. Information Architecture
6. Color System
7. Typography System
8. Layout, Grid, and Spacing
9. Shape, Border, Shadow, and Surface Language
10. Iconography and Decorative Motifs
11. Image and Screenshot Art Direction
12. Navigation System
13. Buttons, Links, and Interactive Controls
14. Section Header Pattern
15. Card System
16. Project Card Specification
17. Homepage Visual Hierarchy
18. Project Case Study Direction
19. About, Skills, Open Source, Resume, and Contact Pages
20. Motion and Interaction
21. Responsive Behavior
22. Dark Theme
23. Accessibility
24. Content and Copy Direction
25. Performance-Aware Design
26. Implementation Handoff
27. Quality Assurance Checklists
28. Issue Scope and Acceptance Criteria
29. Decision Log
30. Appendices

---

# 1. Executive Summary

## 1.1 Final Direction

The recommended visual direction is called **Editorial Product Engineer**.

It combines:

- The calm whitespace and expressive typography of an editorial portfolio
- The clarity and evidence-based communication of a product case study
- The structure and precision expected from a software engineer
- A personal, approachable tone suitable for an early-career developer

The website should feel premium without feeling expensive, corporate, or overly artistic. It should feel technical without looking like a terminal, code editor, dashboard, or hacker-themed template.

## 1.2 Visual Character

The design should feel:

- Calm
- Intentional
- Technical
- Credible
- Human
- Spacious
- Modern
- Understated

It should not feel:

- Flashy
- Neon
- Cyberpunk
- Template-like
- Over-animated
- Card-heavy
- Resume-like
- Empty for the sake of minimalism
- Decorative without purpose

## 1.3 Main Design Decisions

| Area | Decision |
|---|---|
| Overall style | Editorial product-engineering portfolio |
| Main type contrast | Serif display headings plus highly readable sans-serif body text |
| Technical type | Monospace only for labels, metadata, routes, and architecture annotations |
| Color | Warm neutrals with one cobalt-blue accent |
| Layout | Wide editorial grid with controlled asymmetry |
| Cards | Border-led surfaces with minimal shadow |
| Imagery | Real project screenshots and a restrained personal portrait |
| Motion | Small, quick, functional transitions |
| Content priority | Projects and decisions before skill-logo collections |
| Mobile | Clear linear hierarchy, not a compressed desktop composition |
| Dark mode | Equal-quality alternate theme using the same semantic tokens |

## 1.4 The Most Important Rule

**The design must make the work easier to understand.**

A beautiful layout that hides project context, makes text tiny, weakens accessibility, or delays navigation is not successful.

---

# 2. Inspiration Reference Review

## 2.1 Reference A - Hero and Full Composition

![Reference hero composition](assets/reference-hero-composition.jpg)

### Observed Structure

The reference hero uses a large, central portrait as the visual anchor. Supporting content is distributed around the portrait rather than placed in one conventional left-aligned column.

The visual structure is approximately:

```text
Small biography         Main portrait         Experience statistics
Contact information     Central identity      Client/project figures
Services                Large headline        Supporting proof
```

### Why It Works

#### Strong focal point

The portrait immediately gives the page identity. It is large enough to become memorable without covering the full viewport.

#### Editorial balance

The composition uses negative space as an active design element. The content does not fill every available area. This makes the design feel intentional and expensive.

#### Typographic contrast

The large serif headline is visually distinct from the smaller sans-serif metadata. The typography establishes hierarchy before color or effects are needed.

#### Fine line work

The thin outline around the portrait and the very light decorative waves add structure without visual noise.

#### Restrained palette

The reference relies on white, black, grey, and subtle warmth. The portrait and project images provide most of the color.

#### Distributed information

Biography, services, statistics, and contact details are visible without becoming separate heavy cards.

### What Should Be Adapted

- The central focal point concept
- The balanced three-part composition
- Large serif statement
- Small uppercase or monospace labels
- Fine lines and outlines
- Generous space around content
- Subtle decorative texture
- Neutral surfaces

### What Should Not Be Copied

- The exact portrait shape and placement
- The exact three-column layout
- The exact typography pairing
- The same decorative wave pattern
- The same navigation placement
- The same statistics structure
- The same project-image treatment

### Suitability for Garvit's Portfolio

The hero is visually strong, but it is optimized for an experienced visual designer. Garvit's hero must communicate product engineering more directly.

The portfolio should prioritize:

1. Clear professional identity
2. What kind of products are built
3. Featured work
4. Evidence of engineering depth
5. Direct next actions

The portrait should support the introduction rather than become the only reason the hero works.

---

## 2.2 Reference B - Education, Experience, and Projects

![Reference education and project composition](assets/reference-education-projects.jpg)

### Observed Structure

The page uses a large section title, three clean content columns, a horizontal divider, and a row of image-first project previews.

### Why It Works

#### Clear section rhythm

The education and experience area has a distinct beginning and ending. The divider creates a deliberate transition into projects.

#### Minimal alignment system

Columns share common top alignment and spacing. There are no unnecessary cards behind each item.

#### Strong image row

Project images create visual momentum after a text-heavy section.

#### Calm content density

The section contains a lot of information but does not feel dense because spacing and type size create separation.

### Weaknesses to Avoid

#### Small supporting text

Several labels and descriptions are too small for comfortable reading, particularly on typical laptops.

#### Low information value in project previews

The project thumbnails are attractive, but the user cannot quickly understand the project problem, role, technical scope, or outcome.

#### Desktop dependency

The wide multi-column layout does not provide a clear mobile strategy by itself.

#### Decorative minimalism can become vague

A minimal page still needs enough contextual information for recruiters and collaborators.

---

## 2.3 Reference Evaluation Matrix

| Quality | Reference Strength | Use in Final Direction | Required Adaptation |
|---|---:|---:|---|
| Whitespace | Excellent | High | Preserve clarity on smaller screens |
| Typography | Excellent | High | Increase body readability and accessibility |
| Composition | Excellent | Medium-High | Rebuild around engineering content |
| Project communication | Moderate | Medium | Add problem, role, stack, status, and outcome |
| Navigation clarity | Moderate | Medium | Use clearer active and focus states |
| Mobile readiness | Unclear | Low as-is | Design mobile independently |
| Accessibility | Weak in places | Principles only | Larger text, stronger contrast, visible focus |
| Developer relevance | Moderate | Medium | Add architecture and technical proof |
| Originality potential | High | High | Use principles, not exact layout |

---

## 2.4 Final Inspiration Conclusions

### Borrow

- Generous whitespace
- Editorial heading typography
- Thin separators
- Central visual focus
- Asymmetric but balanced layout
- Neutral color system
- Image-led project presentation
- Limited decoration
- Clear section breaks

### Improve

- Text size
- CTA clarity
- Project context
- Mobile hierarchy
- Keyboard and focus states
- Color contrast
- Technical storytelling
- Component consistency

### Reject

- Meaningless vanity statistics
- Tiny grey labels
- Image-only project cards
- Decoration that has no content purpose
- A layout that only works at one desktop width
- Direct copying of the composition

---

# 3. Final Visual Direction

## 3.1 Direction Name

**Editorial Product Engineer**

The name is useful because it gives the team a simple test for future decisions.

When evaluating a component, ask:

- Does it feel editorial enough to be distinctive?
- Does it remain clear enough for a product engineer's portfolio?
- Does it communicate evidence instead of generic claims?
- Does it support reading and decision-making?

## 3.2 Design Statement

The portfolio will use expressive serif typography, precise sans-serif interface text, restrained cobalt accents, warm neutral backgrounds, thin borders, real product imagery, structured engineering metadata, and generous spacing.

The work should appear confident without exaggeration. The interface should appear polished without becoming a design experiment that slows visitors down.

## 3.3 Design Principles

### Principle 1 - Evidence before decoration

Every major visual area should contain useful information. Decorative layers must never reduce readability.

### Principle 2 - Projects before tool lists

The website should show what was built, why it was built, and how decisions were made. Technology names support the story.

### Principle 3 - One clear focal point per section

Each section should have one primary heading, statement, image, or card. Avoid multiple elements competing at the same visual weight.

### Principle 4 - Space creates hierarchy

Use spacing before adding borders, background colors, and shadows.

### Principle 5 - Technical information can be elegant

Architecture diagrams, metadata, and engineering decisions should be presented with deliberate typography and structure.

### Principle 6 - Mobile is a new composition

Do not compress desktop layouts until they fit. Reorder content based on what mobile users need first.

### Principle 7 - Motion confirms interaction

Animation should clarify state changes, hover targets, and navigation. It should not become content.

### Principle 8 - Accessibility is visual quality

Readable type, good contrast, visible focus, and predictable interactions are part of the aesthetic.

---

# 4. Brand Strategy and Positioning

## 4.1 Primary Positioning

Garvit Singh is a software product engineering student who builds and documents complete web products, with particular strength in backend structure, APIs, data modeling, authentication, and product-focused full-stack development.

## 4.2 Supporting Proof

The portfolio should prioritize real proof such as:

- Pravaah clinic-management system
- BeatHub API
- MERN and backend projects
- Open-source contributions to Mathesar and TLDR Pages
- Team leadership
- 9+ CGPA
- Deployment and production debugging experience
- Structured service, repository, validation, and data layers

## 4.3 Target Visitors

### Recruiters and hiring managers

They need to answer:

- Can this person build useful software?
- Can this person explain their contribution?
- Is the work real and deployed?
- Does the person understand engineering structure?
- Is the person ready for an internship?

### Engineers and maintainers

They need to answer:

- Does this person understand code quality and architecture?
- Can this person work in an existing codebase?
- Are the contributions credible?
- Can this person communicate trade-offs?

### Collaborators and clients

They need to answer:

- What kind of projects does Garvit take seriously?
- Is he reliable and easy to contact?
- Can he turn a problem into a working product?

## 4.4 Brand Personality

| Attribute | Expression in Design | Avoid |
|---|---|---|
| Calm | Open layouts, controlled colors, short motion | Empty pages with no guidance |
| Technical | Architecture labels, code-aware metadata | Terminal-themed decoration everywhere |
| Credible | Specific outcomes, real links, honest status | Inflated statistics and vague claims |
| Human | Personal photo, first-person writing, working style | Corporate stock language |
| Ambitious | Strong project storytelling, clear learning direction | Claiming senior-level expertise |
| Organized | Consistent grid, design tokens, predictable patterns | Different styles on every page |

## 4.5 Brand Voice

The writing should be:

- Direct
- Specific
- Honest
- First-person where appropriate
- Confident without exaggeration
- Clear to non-specialists

Avoid phrases such as:

- Passionate developer
- Coding enthusiast
- Hardworking individual
- Creative problem solver
- Tech lover
- Ninja
- Rockstar
- Expert in everything

Use proof instead:

> I build full-stack products with a strong focus on backend architecture, data modeling, and clear user flows.

> I designed Pravaah around clinic, doctor, patient, appointment, and queue workflows using PostgreSQL, Prisma, and service-layer rules.

---

# 5. Information Architecture

## 5.1 Primary Navigation

Recommended primary navigation:

1. Work
2. About
3. Open Source
4. Resume
5. Contact

The logo or name returns to the homepage.

The Skills page can be included in the About section or used as a standalone route depending on existing site structure. Do not add a top-level link only because a page exists. Navigation should reflect visitor priorities.

## 5.2 Recommended Routes

```text
/
/projects
/projects/:slug
/about
/skills
/open-source
/resume
/contact
```

## 5.3 Homepage Content Order

Recommended hierarchy:

1. Navigation
2. Hero introduction
3. Selected work
4. Credibility strip or concise proof row
5. About preview
6. Engineering strengths or skills overview
7. Open-source preview
8. Current learning or working focus
9. Contact call-to-action
10. Footer

This order places proof near the top and personal context after visitors understand the work.

## 5.4 Page-Level Rhythm

Each page should generally follow:

```text
Page label
Large page title
Short introduction
Primary content sections
Supporting proof
Closing CTA
Footer
```

This creates consistency while allowing individual pages to have different layouts.

## 5.5 Content Widths

Use three main content widths:

| Width Type | Purpose | Recommended Maximum |
|---|---|---:|
| Full container | Hero compositions, project grids, screenshots | 1280px |
| Standard content | Most sections and cards | 1120px |
| Reading width | Long paragraphs and case-study prose | 720px |

Do not place long paragraphs across the entire 1280px container.

---

# 6. Color System

## 6.1 Color Strategy

The personal brand should use warm neutrals and one controlled accent. Project screenshots should provide secondary color naturally.

The accent color should be visible enough to identify interaction, but it should not cover large sections unnecessarily.

## 6.2 Light Theme Tokens

| Token | Value | Use |
|---|---|---|
| `--bg-page` | `#F7F7F3` | Primary page background |
| `--bg-surface` | `#FFFFFF` | Cards, navigation, raised content |
| `--bg-subtle` | `#F0F1EC` | Secondary panels, chips, quiet sections |
| `--bg-inverse` | `#171817` | Dark CTA or inverse section |
| `--text-primary` | `#171817` | Main headings and body text |
| `--text-secondary` | `#62655F` | Supporting paragraphs and metadata |
| `--text-tertiary` | `#858880` | Small labels and timestamps |
| `--text-inverse` | `#F7F7F3` | Text on inverse surfaces |
| `--border-default` | `#D9DBD4` | Standard borders and separators |
| `--border-strong` | `#BFC2BA` | Emphasized controls and active states |
| `--accent` | `#3157D5` | Primary interactive color |
| `--accent-hover` | `#2748B8` | Hovered accent controls |
| `--accent-active` | `#203C9A` | Pressed controls |
| `--accent-soft` | `#E8ECFC` | Accent-tinted surface |
| `--accent-border` | `#BAC7F7` | Accent outline and selected state |
| `--success` | `#217A55` | Available, live, completed |
| `--success-soft` | `#E7F4ED` | Success background |
| `--warning` | `#9A5D12` | In progress, beta, caution |
| `--warning-soft` | `#F8EEDC` | Warning background |
| `--danger` | `#B53D3D` | Error and destructive action |
| `--danger-soft` | `#F9E7E7` | Error background |
| `--focus` | `#4D70E8` | Keyboard focus ring |
| `--overlay` | `rgba(15,16,15,0.56)` | Modal and image overlay |

## 6.3 Dark Theme Tokens

| Token | Value | Use |
|---|---|---|
| `--bg-page` | `#10110F` | Primary page background |
| `--bg-surface` | `#171816` | Cards and navigation |
| `--bg-subtle` | `#1E201D` | Secondary panels and chips |
| `--bg-inverse` | `#F3F3EE` | Light inverse section |
| `--text-primary` | `#F3F3EE` | Main text |
| `--text-secondary` | `#A9ACA4` | Supporting text |
| `--text-tertiary` | `#858980` | Small metadata |
| `--text-inverse` | `#151614` | Text on light inverse surface |
| `--border-default` | `#33362F` | Standard borders |
| `--border-strong` | `#4C5147` | Active controls |
| `--accent` | `#8297FF` | Primary interactive color |
| `--accent-hover` | `#9EAEFF` | Hovered controls |
| `--accent-active` | `#B2BEFF` | Pressed controls |
| `--accent-soft` | `#20294A` | Accent-tinted surface |
| `--accent-border` | `#43579E` | Accent outline |
| `--success` | `#64C898` | Available, live, completed |
| `--success-soft` | `#173829` | Success background |
| `--warning` | `#E4AF62` | In progress and beta |
| `--warning-soft` | `#3D2D16` | Warning background |
| `--danger` | `#F08B8B` | Error and destructive action |
| `--danger-soft` | `#412020` | Error background |
| `--focus` | `#A9B6FF` | Keyboard focus ring |
| `--overlay` | `rgba(0,0,0,0.68)` | Modal and image overlay |

## 6.4 Accent Usage Rules

Use the accent for:

- Primary buttons
- Active navigation indicators
- Text-link arrows or underlines
- Keyboard focus rings
- Selected chips or filters
- Small highlights in diagrams
- Important status indicators when blue is semantically appropriate

Do not use the accent for:

- Every heading
- Every border
- Large page backgrounds on multiple sections
- Decorative gradients behind all content
- Technology badges of unrelated meaning
- Body paragraphs

## 6.5 Neutral Usage Rules

- Main body text must use `text-primary` or `text-secondary`.
- `text-tertiary` is only for non-critical information.
- Essential labels must never rely on very light grey.
- Borders should be visible without appearing dark or heavy.
- The page background and surface background should remain distinguishable in both themes.

## 6.6 Status Color Semantics

| Status | Color | Example |
|---|---|---|
| Live / Available / Completed | Success | Project deployed, available for work |
| In progress / Beta | Warning | Wanderlust in progress, private beta |
| Archived | Neutral | Older learning project |
| Error / Unavailable | Danger | Broken link, failed form submission |
| Featured / Selected | Accent | Featured case study |

Do not use red, green, or orange only as decoration. These colors should retain semantic meaning.

## 6.7 Color Contrast Targets

- Normal text: minimum 4.5:1
- Large text: minimum 3:1
- Focus indicators: minimum 3:1 against adjacent colors
- Essential icons: minimum 3:1
- Disabled states may be lower contrast only when clearly non-interactive

---

# 7. Typography System

## 7.1 Font Roles

### Display Serif

Preferred: **Instrument Serif**  
Fallbacks: Georgia, Times New Roman, serif

Use for:

- Hero headline
- Page titles
- Major section headings
- Featured project names
- Large quotations or outcome statements

Do not use for:

- Long paragraphs
- Buttons
- Form labels
- Navigation
- Dense metadata

### Interface Sans-Serif

Preferred: **Manrope** or **Inter**  
Fallbacks: system-ui, Arial, sans-serif

Use for:

- Body text
- Navigation
- Buttons
- Project summaries
- Labels
- Metadata
- Forms
- Footer

### Technical Monospace

Preferred: **JetBrains Mono**  
Fallbacks: ui-monospace, SFMono-Regular, Consolas, monospace

Use for:

- Small category labels
- Technology metadata
- Routes
- API names
- Architecture annotations
- Dates when a technical treatment is useful

Do not use monospace for large paragraphs or all navigation items.

## 7.2 Desktop Type Scale

| Token | Size | Line Height | Weight | Typical Use |
|---|---:|---:|---:|---|
| `display-1` | 76px | 0.96 | 400 serif | Homepage hero |
| `display-2` | 60px | 1.00 | 400 serif | Page title |
| `heading-1` | 50px | 1.06 | 400 serif | Major section title |
| `heading-2` | 38px | 1.12 | 400 serif | Section title |
| `heading-3` | 28px | 1.20 | 500 sans or 400 serif | Card group title |
| `heading-4` | 22px | 1.30 | 600 sans | Card title |
| `body-xl` | 22px | 1.55 | 400 sans | Hero supporting text |
| `body-lg` | 18px | 1.65 | 400 sans | Section introduction |
| `body-md` | 16px | 1.65 | 400 sans | Standard paragraph |
| `body-sm` | 14px | 1.55 | 400 sans | Metadata and card support |
| `label` | 12px | 1.40 | 600 mono/sans | Uppercase section label |
| `micro` | 11px | 1.35 | 600 mono | Rare compact annotations |

## 7.3 Tablet Type Scale

| Token | Size |
|---|---:|
| `display-1` | 62px |
| `display-2` | 52px |
| `heading-1` | 44px |
| `heading-2` | 34px |
| `heading-3` | 26px |
| `heading-4` | 21px |
| `body-xl` | 20px |
| `body-lg` | 18px |
| `body-md` | 16px |

## 7.4 Mobile Type Scale

| Token | Size | Line Height |
|---|---:|---:|
| `display-1` | 46px | 1.00 |
| `display-2` | 42px | 1.02 |
| `heading-1` | 38px | 1.08 |
| `heading-2` | 30px | 1.14 |
| `heading-3` | 24px | 1.22 |
| `heading-4` | 20px | 1.30 |
| `body-xl` | 19px | 1.55 |
| `body-lg` | 17px | 1.60 |
| `body-md` | 16px | 1.65 |
| `body-sm` | 14px | 1.55 |
| `label` | 12px | 1.40 |

## 7.5 Responsive Type Implementation

Use `clamp()` for large editorial headings so they scale smoothly.

Example:

```css
.hero-title {
  font-size: clamp(2.875rem, 6vw, 4.75rem);
  line-height: 0.98;
  letter-spacing: -0.035em;
}
```

Do not use `clamp()` for all small text. Body text should remain stable and predictable.

## 7.6 Letter Spacing

- Large serif headings: `-0.02em` to `-0.04em`
- Large sans headings: `-0.015em` to `-0.025em`
- Body text: `0`
- Uppercase labels: `0.08em` to `0.14em`
- Monospace labels: `0.04em` to `0.08em`

## 7.7 Paragraph Rules

- Reading width: 55 to 75 characters per line
- Standard paragraph bottom spacing: 16px to 24px
- Do not center long body paragraphs
- Use left alignment for explanations and case studies
- Avoid fully justified text
- Avoid more than three consecutive long paragraphs without a visual break

## 7.8 Heading Rules

- Only one `h1` per page
- Do not skip heading levels
- Section labels are not replacements for semantic headings
- A heading should describe the section without depending on decorative context
- Avoid using all-uppercase for large headings

## 7.9 Font Loading Rules

- Use `font-display: swap`
- Preload only the most important font files
- Limit the number of weights
- Prefer one serif regular weight and two or three sans weights
- Prevent layout shift by selecting similar fallback metrics
- Do not load decorative fonts that are used in one tiny element

---

# 8. Layout, Grid, and Spacing

## 8.1 Breakpoints

Recommended breakpoints:

| Name | Width | Purpose |
|---|---:|---|
| `xs` | 480px | Small mobile adjustments |
| `sm` | 640px | Larger mobile and small tablet |
| `md` | 768px | Tablet layout |
| `lg` | 1024px | Desktop layout begins |
| `xl` | 1280px | Full editorial composition |
| `2xl` | 1536px | Large desktop breathing room |

Breakpoints should be chosen when content needs them, not because a device category exists.

## 8.2 Container System

```css
--container-full: 1280px;
--container-standard: 1120px;
--container-reading: 720px;
```

Recommended horizontal padding:

| Viewport | Padding |
|---|---:|
| Below 640px | 20px |
| 640px to 767px | 24px |
| 768px to 1023px | 32px |
| 1024px to 1279px | 48px |
| 1280px and above | 64px |

## 8.3 Grid

### Desktop

- 12 columns
- 24px to 32px gaps
- Full container maximum 1280px

### Tablet

- 6 columns
- 20px to 24px gaps

### Mobile

- 4 conceptual columns for internal alignment
- Most content rendered as one visible column
- 16px gaps

## 8.4 Spacing Scale

| Token | Value |
|---|---:|
| `space-0` | 0 |
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |
| `space-20` | 80px |
| `space-24` | 96px |
| `space-28` | 112px |
| `space-32` | 128px |
| `space-40` | 160px |

## 8.5 Section Spacing

| Context | Top/Bottom Spacing |
|---|---:|
| Desktop primary sections | 112px to 144px |
| Desktop compact sections | 80px to 96px |
| Tablet primary sections | 80px to 104px |
| Mobile primary sections | 56px to 72px |
| Mobile compact sections | 40px to 56px |

## 8.6 Internal Spacing Rules

- Section label to title: 12px to 16px
- Title to introduction: 20px to 28px
- Introduction to content grid: 40px to 64px
- Card image to content: 20px to 28px
- Card title to description: 8px to 12px
- Metadata item gap: 12px to 20px
- Button group gap: 12px
- Tag group gap: 8px

## 8.7 Alignment Rules

- Major headings may be centered only when the section is intentionally editorial.
- Project descriptions, technical content, and long text remain left-aligned.
- Avoid alternating alignment for every section.
- The visual system should use shared left edges across labels, headings, and content.
- Asymmetry is allowed only when underlying grid alignment remains clear.

## 8.8 Whitespace Rules

Do not fill space with:

- Additional statistics
- Decorative icons
- More skill badges
- Background blobs
- Unnecessary subtitles
- Duplicate CTAs

Whitespace should communicate confidence and improve grouping.

---

# 9. Shape, Border, Shadow, and Surface Language

## 9.1 Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| `radius-xs` | 6px | Small labels and technical chips |
| `radius-sm` | 10px | Buttons and inputs |
| `radius-md` | 16px | Standard cards |
| `radius-lg` | 24px | Large media and featured cards |
| `radius-xl` | 32px | Rare hero visuals |
| `radius-pill` | 999px | Status and availability pills only |

Do not make every component fully rounded.

## 9.2 Border System

| Token | Definition | Use |
|---|---|---|
| `border-hairline` | 1px solid default border | Dividers and cards |
| `border-strong` | 1px solid strong border | Inputs and active components |
| `border-accent` | 1px solid accent border | Selected state |
| `border-focus` | 2px solid focus | Keyboard focus |

## 9.3 Shadow System

Use shadows rarely.

```css
--shadow-xs: 0 1px 2px rgba(15, 16, 15, 0.06);
--shadow-sm: 0 8px 24px rgba(15, 16, 15, 0.08);
--shadow-lg: 0 20px 60px rgba(15, 16, 15, 0.12);
```

Recommended use:

- `shadow-xs`: floating navigation in light theme
- `shadow-sm`: modal, menu, or hovered featured image when necessary
- `shadow-lg`: rare overlay or dialog

Do not add shadows to every card.

## 9.4 Surface Hierarchy

1. Page background
2. Standard surface
3. Subtle surface
4. Inverse surface
5. Modal or overlay surface

A section should not use a new background color unless it creates a meaningful content transition.

## 9.5 Divider Rules

- Use 1px borders
- Use full-width dividers only at major transitions
- Use partial dividers to preserve editorial composition
- Dividers should have enough vertical space around them
- Do not place a divider directly against text

---

# 10. Iconography and Decorative Motifs

## 10.1 Icon Style

Use one consistent icon family with:

- Rounded or neutral stroke ends
- 1.5px to 2px stroke
- No mixed filled and outlined styles without reason
- 16px, 20px, and 24px standard sizes

Recommended uses:

- External link
- GitHub
- LinkedIn
- Email
- Download
- Arrow
- Theme toggle
- Menu
- Close

## 10.2 Icon Button Rules

- Minimum touch target: 44px by 44px
- Visible focus ring
- Accessible label
- Tooltip for unfamiliar icons
- Hover background or border change
- Never rely on icon color alone

## 10.3 Decorative Motif

Use a restrained system based on one of these options:

### Preferred motif - Technical flow lines

Thin, low-contrast curved or flowing lines that suggest systems, movement, and the idea of Pravaah without becoming a project-specific logo.

Rules:

- Maximum opacity around 4% to 8%
- Never behind body text at full strength
- Used in hero, section transitions, or image frames
- Hidden or simplified on small screens

### Secondary motif - Coordinate labels

Small monospace labels such as:

```text
01 / SELECTED WORK
02 / ABOUT
03 / OPEN SOURCE
```

This reinforces structure and engineering precision.

## 10.4 Decoration Limits

A single viewport should generally contain no more than:

- One primary decorative motif
- One secondary line or outline treatment
- One accent-colored focus area

Avoid combining grids, blobs, gradients, dots, waves, and noise in the same section.

---

# 11. Image and Screenshot Art Direction

## 11.1 Image Priorities

1. Real product interfaces
2. Architecture diagrams
3. Personal portrait
4. Open-source contribution evidence
5. Supporting illustrations only when necessary

## 11.2 Project Screenshot Style

Screenshots should:

- Use consistent viewport dimensions
- Avoid showing browser clutter unless browser context is useful
- Use realistic project content
- Avoid placeholder names and lorem ipsum
- Use a consistent light or dark presentation inside one card
- Include enough UI to identify the product
- Be sharp at high-density displays

## 11.3 Recommended Screenshot Ratios

| Use | Ratio |
|---|---|
| Featured project | 16:10 or 3:2 |
| Standard project card | 4:3 |
| Mobile product screen | 9:16 inside a composed frame |
| Architecture diagram | Flexible, maximum reading width |
| Case-study full-width image | 16:9 or natural interface ratio |

## 11.4 Project Image Frames

Featured images may use:

- 24px radius
- 1px border
- Subtle neutral background
- 16px to 32px internal padding when showing a browser mockup
- No excessive 3D perspective

## 11.5 Portrait Direction

Recommended portrait characteristics:

- Natural expression
- Neutral or softly textured background
- Good light on face
- Simple clothing
- No aggressive color filters
- No AI-styled corporate appearance

Recommended treatment:

- Oval or softly rounded rectangle
- Thin offset outline
- Quiet neutral tint
- Optional small availability indicator nearby

The portrait should support trust. It should not overpower project evidence.

## 11.6 Image Optimization Targets

| Asset | Target |
|---|---:|
| Hero portrait | Under 200KB where practical |
| Featured screenshot | Under 300KB |
| Standard card image | Under 180KB |
| Decorative image | Under 100KB |
| Logo/icon SVG | Under 20KB |

Prefer AVIF or WebP with an appropriate fallback when required.

## 11.7 Alternative Text

Alt text should explain meaningful content, not repeat the filename.

Good:

> Pravaah clinic dashboard showing today's appointments, queue status, and activity summary.

Weak:

> Screenshot of project.

Decorative images should use empty alternative text.

---

# 12. Navigation System

## 12.1 Desktop Navigation

Recommended structure:

```text
Garvit Singh / GS       Work  About  Open Source  Resume       Contact CTA  Theme
```

### Dimensions

- Height: 72px to 80px
- Container: standard or full container
- Link gap: 28px to 36px
- Top offset when floating: 12px to 20px
- Horizontal padding inside floating surface: 16px to 20px

### Behavior

- Sticky after the initial hero area or sticky from top with subtle background
- Use `backdrop-filter` only as enhancement
- Add a border when content scrolls beneath navigation
- Preserve a solid fallback background

### Active State

Use one of:

- Small underline
- Accent dot
- Stronger text plus quiet underline

Do not use a large filled pill for every active navigation item.

### Contact CTA

Use a compact button, not a huge hero-style button.

Label options:

- Contact
- Let's talk
- Get in touch

Use one label consistently.

## 12.2 Mobile Navigation

### Header

- Height: 64px
- Name or monogram on left
- Menu button and theme toggle on right
- Both controls at least 44px square

### Menu Panel

- Full-width or near-full-width panel
- Large readable links
- Clear close button
- Contact CTA at bottom
- Social links optional at bottom
- Lock body scroll while open
- Escape key closes menu
- Focus remains inside menu while open

## 12.3 Scroll Behavior

- Anchor navigation should account for sticky header height
- Do not hide navigation aggressively on small scrolls
- Optional hide-on-scroll-down behavior is acceptable only if it returns immediately on upward scroll

## 12.4 Logo/Wordmark

Use `Garvit Singh` as the default wordmark. A simple `GS` monogram may appear in compact contexts.

Avoid designing a complex standalone logo unless it adds clear value.

---

# 13. Buttons, Links, and Interactive Controls

## 13.1 Button Sizes

| Size | Height | Horizontal Padding | Use |
|---|---:|---:|---|
| Small | 36px | 14px | Compact card actions |
| Medium | 44px | 18px | Standard UI |
| Large | 50px | 22px | Hero CTA |

## 13.2 Primary Button

- Accent background
- White or theme-appropriate high-contrast text
- 10px radius
- 600 sans weight
- Optional arrow icon
- Hover: darker or brighter accent depending on theme
- Active: slight scale or lower elevation
- Focus: 2px ring plus 2px offset

## 13.3 Secondary Button

- Transparent or surface background
- Standard border
- Primary text
- Hover: subtle background
- Same dimensions as primary button

## 13.4 Tertiary Action

Text link with:

- Underline or arrow
- Clear hover movement
- Visible focus state
- No button-shaped container unless needed

## 13.5 Button State Matrix

| State | Visual Treatment |
|---|---|
| Default | Standard color and border |
| Hover | Color shift and optional 1px to 2px translation |
| Focus-visible | Strong focus ring |
| Active | Reduced translation or subtle scale to 0.98 |
| Disabled | Lower contrast, no hover, `cursor: not-allowed` |
| Loading | Stable width, spinner plus clear label |

## 13.6 Link Rules

- Body links should be visibly distinct without requiring hover
- External links use an external-arrow icon when context benefits
- Avoid ambiguous labels such as `Click here`
- Underlines should have sufficient offset
- Text links should not use the same styling as non-interactive accent text

## 13.7 Chips and Tags

Use tags for:

- Project status
- Role
- Selected technologies
- Category

Rules:

- Maximum 3 to 5 visible tags on cards
- Additional technologies belong on detail pages
- Tags should be 28px to 32px high
- Use sentence case or standard technology names
- Avoid rainbow colors per technology

---

# 14. Section Header Pattern

## 14.1 Standard Structure

```text
01 / SELECTED WORK
Projects built around real product problems.
Short supporting explanation or link.
```

## 14.2 Alignment Variants

### Left-aligned

Best for technical and content-heavy sections.

### Split header

Heading on left, explanation or action on right. Use on desktop only when both sides remain readable.

### Centered editorial

Use sparingly for a major transition or closing CTA.

## 14.3 Spacing

- Label to title: 12px
- Title to description: 20px
- Header to content: 48px to 64px desktop, 32px to 40px mobile

## 14.4 Section Numbering

Use numbering only if applied consistently across major homepage sections. Do not number minor subsections.

Recommended format:

```text
01 / SELECTED WORK
```

Not:

```text
#01.
```

---

# 15. Card System

## 15.1 Card Philosophy

Cards should organize content, not become the default container for everything.

Use a card when:

- Content is a standalone item
- The entire surface is interactive
- A distinct visual group improves scanning
- The item needs a border, background, or image frame

Do not use a card when:

- Spacing and typography can create enough separation
- The content is part of one continuous narrative
- The page becomes a dashboard of boxes

## 15.2 Standard Card Anatomy

```text
Optional label/status
Image or icon
Title
Short description
Metadata
Action
```

## 15.3 Standard Card Dimensions

- Padding: 24px desktop, 20px mobile
- Radius: 16px
- Border: 1px
- Background: surface
- Gap between card elements: 12px to 20px

## 15.4 Hover Treatment

- Border becomes slightly stronger
- Image scales 1.01 to 1.03
- Arrow shifts 2px to 4px
- Card may move upward 2px
- No dramatic rotation
- No large shadow jump

## 15.5 Click Target

When the whole card is clickable:

- Preserve semantic link behavior
- Avoid nested interactive links unless carefully structured
- Ensure focus outline follows the full card
- Keep text selectable where possible

---

# 16. Project Card Specification

## 16.1 Goals

A project card must answer the following quickly:

1. What is the project?
2. What problem does it solve?
3. What was Garvit's role?
4. What is technically notable?
5. What is the current status?
6. Where can the visitor learn more?

## 16.2 Featured Project Card

### Desktop Composition

Recommended split:

- Image: 7 columns
- Content: 5 columns

Alternate direction can be used for visual rhythm, but do not alternate simply for decoration if the reading order becomes inconsistent.

### Content Order

1. Status and category
2. Project title
3. One-sentence product summary
4. Role and timeline
5. Three high-value technical highlights
6. Selected technology tags
7. Case study action
8. Optional live and repository links

### Example

```text
FEATURED CASE STUDY    LIVE
Pravaah
A clinic appointment and queue-management platform designed around real
clinic, doctor, patient, and appointment workflows.

Role: Product engineer and team lead
Highlights: Transaction-safe booking rules, live queue model, role-based access
Stack: React, Express, PostgreSQL, Prisma

View case study ->
```

## 16.3 Standard Project Card

Use a three-column grid on large desktop, two columns on tablet, and one column on mobile.

Recommended content:

- 4:3 image
- Status label
- Title
- 2-line or 3-line summary
- Role or category
- Maximum 3 technology labels
- Arrow or case-study link

## 16.4 Image Treatment

- Place image first
- Use consistent aspect ratio
- Do not overlay large text on screenshots
- Optional subtle surface behind image
- Screenshot should remain readable at card size

## 16.5 Technical Highlights

Use concise benefit-oriented language:

Good:

- Prevented appointment conflicts with status-aware booking rules
- Modeled queue position per clinic, doctor, and date
- Separated controllers, services, repositories, and validation

Weak:

- Used React
- Used Node.js
- Used MongoDB

## 16.6 Card Metadata

Possible metadata fields:

| Field | Example |
|---|---|
| Status | Live, In Progress, Archived |
| Type | Full-stack product, Backend API, Open-source contribution |
| Role | Team lead, Product engineer, Contributor |
| Timeline | Jun-Jul 2026 |
| Contribution | Architecture, backend, data model, UI |

Only show the fields that help comparison.

## 16.7 Project Card Hover

- Image scale: maximum 1.025
- Arrow movement: 3px
- Border contrast increase
- Card translation: maximum -2px
- Duration: 180ms to 240ms
- Disable motion for reduced-motion users

## 16.8 Project Card Mobile Rules

- Image remains first
- Title appears immediately after status
- Keep summary visible; do not hide it behind hover
- Use full-width card
- Live and repository links may move into a compact action row
- Ensure no horizontally scrolling tag row is required

## 16.9 Project Card Do and Do Not

### Do

- Use real project content
- Emphasize problem and result
- Show honest status
- Keep visuals consistent
- Provide one obvious main action

### Do not

- Display 10 technology badges
- Use generic gradient placeholders
- Hide all information until hover
- Make every project look equally important
- Use browser mockups that are too small to read
- Add fake metrics

---

# 17. Homepage Visual Hierarchy

## 17.1 Homepage Objective

Within the first screen and first short scroll, visitors should understand:

- Garvit's name
- Product-engineering identity
- Primary strengths
- Best project
- Main action

## 17.2 Hero Content Priority

1. Availability or current focus label
2. Main identity statement
3. Supporting product-engineering description
4. Primary CTA
5. Secondary CTA
6. Visual proof or portrait
7. Concise credibility facts

## 17.3 Recommended Hero Copy Structure

### Label

```text
SOFTWARE PRODUCT ENGINEERING STUDENT
```

or

```text
BUILDING FULL-STACK PRODUCTS AND BACKEND SYSTEMS
```

### Headline

A strong direction:

> I build software products around real workflows, clear architecture, and useful outcomes.

Alternative:

> Product-minded engineering for real workflows and reliable systems.

### Supporting Text

> I am Garvit Singh, a computer science student building full-stack products with React, Node.js, PostgreSQL, Prisma, and MongoDB. My work focuses on backend structure, data modeling, APIs, and practical user flows.

### CTAs

Primary: `View selected work`  
Secondary: `About me` or `Download resume`

## 17.4 Hero Desktop Composition

Recommended 12-column structure:

- Text content: columns 1 to 7
- Portrait or selected-product visual: columns 8 to 12
- Proof row: aligned under the main content or around the visual

Alternative editorial layout:

- Small metadata column: 2 columns
- Main statement and visual: 7 columns
- Proof column: 3 columns

Use the alternative only if the content remains immediately clear.

## 17.5 Hero Proof Row

Use no more than three concise proof items:

- 5 merged open-source contributions
- 9+ CGPA
- Full-stack products built and deployed

Do not present these as giant sales statistics. Use smaller, structured proof.

## 17.6 Selected Work Section

- Place immediately after hero or after a short credibility strip
- Feature Pravaah first
- Use BeatHub API as another strong project
- Include one smaller project only if it adds a different capability
- Add `View all projects` at section end

## 17.7 About Preview

Use a two-column layout:

- Large editorial statement or portrait
- Concise background, working style, and current focus

Avoid reproducing the full resume.

## 17.8 Engineering Strengths

Show a small number of capability groups:

1. Backend and APIs
2. Databases and data modeling
3. Full-stack product development
4. Engineering workflow and deployment

Each group should include a short explanation, not only icons.

## 17.9 Open Source Preview

Show:

- Program context
- Contribution count
- Maintainer collaboration
- One or two meaningful contribution examples
- Link to full open-source page

## 17.10 Contact CTA

Use a strong closing statement on an inverse or accent-tinted surface.

Example:

> Building something useful or looking for a product-minded engineering intern?

Primary action: `Email Garvit`  
Secondary action: `View resume`

## 17.11 Homepage Section Rhythm

Recommended sequence of visual energy:

```text
Hero: high visual emphasis
Selected work: high evidence
Credibility: compact
About: calmer narrative
Skills: structured
Open source: evidence
Contact: strong closing emphasis
```

Avoid every section having a large background, oversized title, and animated cards.

---

# 18. Project Case Study Direction

## 18.1 Case Study Objective

A case study should explain the project clearly enough that a recruiter can evaluate thinking, ownership, and engineering ability without reading the repository.

## 18.2 Case Study Structure

1. Project label and status
2. Project title
3. One-sentence summary
4. Hero visual
5. Project metadata
6. Problem
7. Users and workflow
8. Goals and constraints
9. Role and responsibilities
10. Solution overview
11. Architecture
12. Data model
13. Key features
14. Engineering decisions
15. Challenges and trade-offs
16. Testing and reliability
17. Deployment
18. Results and current status
19. What was learned
20. Links and next project navigation

## 18.3 Case Study Hero

Include:

- Large project title
- Product summary
- Status badge
- Role
- Timeline
- Stack summary
- Main screenshot
- Live and repository actions

## 18.4 Metadata Grid

Recommended four-column desktop grid:

| Role | Timeline | Team | Status |
|---|---|---|---|
| Product engineer, team lead | Jun-Jul 2026 | Team project | Live / MVP |

On mobile, use two columns or a vertical definition list.

## 18.5 Problem Section

The problem should be described in user and product terms before technical details.

Example structure:

- Current workflow
- Friction
- Who experiences it
- Why the problem matters
- Scope chosen for the MVP

## 18.6 Architecture Section

Use a simple visual:

```text
Client
  -> Route
  -> Validation
  -> Controller
  -> Service
  -> Repository
  -> PostgreSQL / Prisma
```

Accompany diagrams with explanations. Do not use diagrams as decoration.

## 18.7 Engineering Decision Block

Reusable pattern:

```text
Decision
Use service and repository layers instead of placing database logic in controllers.

Reason
Business rules such as appointment conflicts and queue position require reusable,
testable behavior outside HTTP concerns.

Trade-off
More files and abstraction for a relatively small MVP.

Result
Controllers stay thin and complex rules remain easier to test and change.
```

## 18.8 Challenge Block

```text
Challenge
Two queue entries could attempt to receive the same position.

Approach
Use a transaction and database locking around position calculation.

Outcome
Queue ordering remains reliable under concurrent requests.
```

## 18.9 Case Study Image Rules

- Use captions for meaningful images
- Do not place three unreadably small screenshots in one row
- Provide zoomable images where useful
- Use mobile and desktop screenshots only when both demonstrate different behavior
- Keep architecture diagrams high contrast

## 18.10 Case Study Reading Experience

- Keep body text within 720px
- Use wider containers for screenshots and diagrams
- Alternate between narrative and evidence
- Add a small sticky table of contents only on large screens if the case study becomes long
- Provide previous and next project navigation at the bottom

---

# 19. Supporting Page Directions

## 19.1 About Page

### Purpose

Explain background, education, working style, current focus, and direction without repeating the entire resume.

### Structure

1. Page title and introduction
2. Portrait or personal visual
3. Short biography
4. Education
5. Current learning
6. Working style
7. Leadership and collaboration
8. Personal engineering principles
9. CTA to projects or contact

### Visual Treatment

- Editorial text blocks
- Minimal timeline
- One personal image
- Selected pull quote
- No grid of generic personality cards

## 19.2 Skills Page or Section

### Capability Categories

- Backend
- Databases and ORM
- Frontend
- Tools and deployment
- Programming languages

### Presentation

Use category groups with:

- Skill name
- Short context or evidence
- Optional proficiency label only if clearly defined

Avoid percentages such as `Node.js 90%`. Percentages imply false precision.

Better:

```text
Node.js and Express
Built REST APIs with authentication, service layers, file uploads, and deployment.
```

## 19.3 Open Source Page

### Structure

1. Why open source matters
2. Program overview
3. Contribution timeline
4. Mathesar contributions
5. TLDR Pages contributions
6. Collaboration and review process
7. What was learned
8. Repository and pull-request links

### Visual Direction

- Contribution cards with clear outcome
- Timeline or grouped entries
- Small repository metadata
- Screenshots only when they help explain the change
- Avoid displaying raw GitHub activity as the entire page

## 19.4 Resume Page

### Structure

1. Page title and download CTA
2. Short professional summary
3. Education
4. Experience and open source
5. Projects
6. Technical skills
7. Achievements and certifications
8. Contact details

### Design Rules

- Keep resume content highly scannable
- Use the same typography system
- Use compact spacing compared with homepage
- Ensure the PDF download is obvious
- Do not hide important resume information in accordions

## 19.5 Contact Page

### Purpose

Make contacting Garvit obvious and low friction.

### Structure

1. Clear invitation
2. Email CTA
3. Social links
4. Availability and response expectation
5. Optional short contact form

### Visual Treatment

- One dominant email action
- Reusable social-link component
- Large enough touch targets
- Clear external-link behavior
- Accessible labels

### Contact Form Rules

If a form is used:

- Name
- Email
- Message
- Optional project type
- Inline validation
- Clear success state
- Error recovery
- No unnecessary phone-number field

---

# 20. Motion and Interaction

## 20.1 Motion Principles

- Motion should explain change
- Motion should be fast enough to preserve control
- Motion should not delay reading
- Motion should respect reduced-motion settings
- Motion should be consistent across components

## 20.2 Duration Tokens

| Token | Duration | Use |
|---|---:|---|
| `motion-instant` | 80ms | Press feedback |
| `motion-fast` | 140ms | Icon and color transitions |
| `motion-standard` | 200ms | Buttons, links, card hover |
| `motion-slow` | 320ms | Menus, drawers, section reveal |
| `motion-emphasis` | 480ms | Rare hero entrance |

## 20.3 Easing Tokens

```css
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
--ease-enter: cubic-bezier(0, 0, 0.2, 1);
--ease-exit: cubic-bezier(0.4, 0, 1, 1);
```

## 20.4 Allowed Motion

- Link arrow translation
- Small card lift
- Image scale up to 1.025
- Navigation background transition
- Menu slide and fade
- Theme transition for background and text colors
- Section reveal of 8px to 16px with fade

## 20.5 Avoided Motion

- Continuous floating objects
- Cursor followers
- Large parallax
- Auto-typing text
- Repeated pulsing badges
- Long page-load animation
- Scroll-jacking
- Rotating skill carousels
- Unnecessary 3D card tilts

## 20.6 Reduced Motion

When `prefers-reduced-motion: reduce` is active:

- Remove transform-based reveals
- Remove smooth scrolling
- Keep only immediate color and visibility changes
- Disable large image scaling
- Ensure menus remain understandable without animation

---

# 21. Responsive Behavior

## 21.1 General Rule

The mobile version should preserve content priority, not desktop geometry.

## 21.2 Hero Responsive Order

### Desktop

1. Label
2. Headline
3. Supporting text
4. CTAs
5. Visual
6. Proof

The visual and proof may sit beside the copy.

### Mobile

1. Label
2. Headline
3. Supporting text
4. CTAs
5. Visual
6. Proof list

Do not place proof before the main explanation on mobile.

## 21.3 Project Grid

| Viewport | Layout |
|---|---|
| 1280px+ | Featured split card plus 3-column standard grid |
| 1024px-1279px | Featured split card plus 2-column grid |
| 768px-1023px | Featured card with smaller split or stacked layout; 2-column grid |
| Below 768px | All cards stacked |

## 21.4 Typography on Small Screens

- Large headings should wrap naturally
- Avoid manual line breaks that only work on desktop
- Keep body text at 16px minimum
- Prevent single-word orphan lines where possible
- Avoid centered paragraphs longer than three lines

## 21.5 Navigation on Small Screens

- Use a menu button below the desktop breakpoint
- Ensure menu is fully keyboard operable
- Keep the contact CTA visible in the menu
- Avoid tiny inline navigation links

## 21.6 Tables and Metadata

- Convert wide tables into stacked definition lists
- Do not use horizontal scrolling for important project metadata
- Technology lists may wrap naturally

## 21.7 Image Behavior

- Use `object-fit: cover` only when cropping does not remove important UI
- Use natural aspect ratio for architecture diagrams
- Prevent layout shift with width and height attributes
- Avoid loading desktop-resolution images on mobile

## 21.8 Edge Cases

Test:

- 320px width
- 360px width
- 390px width
- 768px width
- 1024px width
- 1280px width
- 1440px width
- 1920px width
- 200% browser zoom
- Long project title
- Long technology name
- Missing project image
- Very short project description

---

# 22. Dark Theme

## 22.1 Dark Theme Goal

Dark mode should feel deliberately designed, not like light-mode colors inverted.

## 22.2 Surface Separation

Use subtle differences between page, surface, and card backgrounds. Avoid pure black for every surface.

## 22.3 Text Rules

- Use warm off-white rather than pure white
- Use muted grey that still passes contrast
- Avoid low-opacity text for essential information

## 22.4 Image Treatment

- Do not dim all project images by default
- Add a subtle border to separate light screenshots from dark surfaces
- Consider a neutral frame behind screenshots
- Avoid forcing images through heavy color filters

## 22.5 Accent Adjustment

The dark-mode accent should be lighter than the light-mode accent so it remains readable against dark surfaces.

## 22.6 Theme Toggle

- Use an icon plus accessible label
- Preserve user preference
- Respect operating-system preference on first visit
- Prevent a flash of the wrong theme
- Ensure focus and hover states work in both themes

## 22.7 Theme QA

Review every component in both themes:

- Navigation
- Buttons
- Links
- Cards
- Inputs
- Focus rings
- Status badges
- Screenshots
- Diagrams
- Footer
- Mobile menu

---

# 23. Accessibility

## 23.1 Semantic Structure

- Use semantic landmarks: `header`, `nav`, `main`, `section`, `footer`
- Use one `h1` per page
- Maintain heading order
- Use lists for real lists
- Use buttons for actions and links for navigation

## 23.2 Keyboard Access

All interactive elements must:

- Be reachable with Tab
- Show a visible focus state
- Work with Enter or Space as appropriate
- Follow a logical focus order
- Avoid focus traps except inside managed dialogs or menus

## 23.3 Focus Style

Recommended:

```css
outline: 2px solid var(--focus);
outline-offset: 3px;
```

Do not remove the browser outline without providing a stronger replacement.

## 23.4 Touch Targets

- Minimum 44px by 44px
- Maintain enough space between adjacent icon buttons
- Do not rely on tiny text links for primary actions on mobile

## 23.5 Forms

- Every input needs a visible label
- Placeholder text is not a label
- Error messages should describe how to fix the problem
- Associate errors with inputs programmatically
- Preserve user input after validation errors
- Success state should be announced

## 23.6 Images

- Meaningful images need useful alt text
- Decorative images use empty alt text
- Do not place essential text only inside images

## 23.7 Color

- Do not communicate state only through color
- Status badges should include text
- Links should be identifiable without relying only on color where practical

## 23.8 Motion

- Respect reduced-motion preference
- Avoid flashing content
- Do not autoplay motion that cannot be paused when it affects reading

## 23.9 Screen Reader Labels

Provide labels for:

- Theme toggle
- Mobile menu
- Close menu
- Social icons
- External links when context is unclear
- Image gallery controls
- Download resume

## 23.10 Accessibility Acceptance Targets

- WCAG 2.2 AA-oriented implementation
- Lighthouse accessibility score target: 95 or higher
- No critical axe violations
- Full keyboard navigation
- Readable at 200% zoom

---

# 24. Content and Copy Direction

## 24.1 Writing Formula for Projects

Use:

```text
Problem + product + engineering contribution + result/status
```

Example:

> Pravaah is a clinic appointment and queue-management platform. I worked on the product architecture, backend rules, PostgreSQL data model, and deployment workflow for the MVP.

## 24.2 Summary Lengths

| Content | Recommended Length |
|---|---:|
| Hero supporting paragraph | 35 to 55 words |
| Featured project summary | 30 to 60 words |
| Standard project card | 20 to 35 words |
| Section introduction | 25 to 50 words |
| Skill group description | 12 to 30 words |
| CTA supporting text | 15 to 30 words |

## 24.3 CTA Vocabulary

Preferred:

- View case study
- Explore all projects
- Read about my work
- Download resume
- Email Garvit
- View contribution
- Open repository
- Visit live project

Avoid:

- Learn more everywhere
- Click here
- Discover now
- Get started
- Explore more when the destination is unclear

## 24.4 Status Vocabulary

Use a controlled set:

- Live
- In progress
- MVP complete
- Open source
- Archived
- Case study available

Do not use multiple terms for the same status.

## 24.5 Tone by Page

| Page | Tone |
|---|---|
| Homepage | Clear and confident |
| Projects | Product and outcome focused |
| Case studies | Detailed and analytical |
| About | Personal and reflective |
| Skills | Evidence-based |
| Open source | Collaborative and specific |
| Resume | Formal and concise |
| Contact | Warm and direct |

## 24.6 Numbers and Claims

Only use numbers that are:

- Accurate
- Understandable
- Relevant
- Stable enough to maintain

Avoid counts that become outdated quickly unless data is generated dynamically and still meaningful.

---

# 25. Performance-Aware Design

## 25.1 Performance Goal

The premium feeling should come from composition and typography, not heavy animation libraries or oversized assets.

## 25.2 Core Web Vitals Design Support

### Largest Contentful Paint

- Optimize hero image
- Preload critical font carefully
- Avoid autoplay hero video
- Render primary text immediately

### Cumulative Layout Shift

- Set image dimensions
- Reserve space for fonts and dynamic content
- Avoid content injection above existing sections
- Keep button loading states width-stable

### Interaction to Next Paint

- Avoid heavy pointer-tracking effects
- Keep menu and theme interactions lightweight
- Lazy-load non-critical scripts

## 25.3 Asset Rules

- Prefer SVG for icons and simple diagrams
- Use responsive `srcset` for images
- Lazy-load below-the-fold images
- Do not lazy-load the main hero visual if it is above the fold
- Compress screenshots without making text blurry

## 25.4 Animation Budget

- No persistent animation loop unless essential
- Use CSS transitions before JavaScript animation
- Avoid animating layout properties such as width and height when transform or opacity can be used
- Keep entrance animation limited to major areas

## 25.5 Font Budget

Recommended maximum:

- Serif: one style or two files
- Sans: regular, medium, semibold
- Mono: one regular or medium file

Do not load many italic and heavy weights without use.

---

# 26. Implementation Handoff

## 26.1 Suggested File Structure

```text
src/
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      PageContainer.tsx
      Section.tsx
    ui/
      Button.tsx
      IconButton.tsx
      TextLink.tsx
      Badge.tsx
      SectionHeader.tsx
      ThemeToggle.tsx
    project/
      FeaturedProjectCard.tsx
      ProjectCard.tsx
      ProjectMeta.tsx
      ProjectLinks.tsx
  data/
    navigation.ts
    projects.ts
    socialLinks.ts
    skills.ts
  pages/
    HomePage.tsx
    ProjectsPage.tsx
    ProjectDetailPage.tsx
    AboutPage.tsx
    SkillsPage.tsx
    OpenSourcePage.tsx
    ResumePage.tsx
    ContactPage.tsx
  styles/
    tokens.css
    globals.css
    typography.css
    motion.css
```

## 26.2 Semantic Token Example

```css
:root {
  --bg-page: #f7f7f3;
  --bg-surface: #ffffff;
  --bg-subtle: #f0f1ec;
  --text-primary: #171817;
  --text-secondary: #62655f;
  --border-default: #d9dbd4;
  --accent: #3157d5;
  --focus: #4d70e8;
}

.dark {
  --bg-page: #10110f;
  --bg-surface: #171816;
  --bg-subtle: #1e201d;
  --text-primary: #f3f3ee;
  --text-secondary: #a9aca4;
  --border-default: #33362f;
  --accent: #8297ff;
  --focus: #a9b6ff;
}
```

## 26.3 Tailwind Direction

Map semantic tokens to utilities. Avoid scattering raw hex values inside components.

Good:

```tsx
<section className="bg-page text-primary border-border-default" />
```

Weak:

```tsx
<section className="bg-[#F7F7F3] text-[#171817] border-[#D9DBD4]" />
```

## 26.4 Component Rules

- Components should accept variants rather than copied class strings
- Project content should come from centralized data
- Social links should come from centralized data
- Buttons should share size and focus behavior
- Cards should use shared image and metadata patterns
- Page sections should use shared container and spacing utilities

## 26.5 Project Data Shape

```ts
export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  status: "live" | "in-progress" | "archived" | "open-source";
  category: string;
  role: string;
  timeline: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
};
```

## 26.6 Visual Sandbox Before Full Implementation

Create a temporary design-test page containing:

- Hero heading
- Body text
- Label
- Primary button
- Secondary button
- Text link
- Standard card
- Featured card
- Input
- Status badges
- Divider
- Light and dark themes

Use real content from Pravaah and BeatHub API.

Do not proceed to large UI changes until the sandbox feels coherent.

## 26.7 Design Token Freeze

After approval, lock:

- Font pairing
- Accent hue
- Main backgrounds
- Type scale
- Container widths
- Spacing scale
- Radius scale
- Border language
- Motion durations

Later issues may refine component usage but should not repeatedly replace the foundation.

---

# 27. Quality Assurance Checklists

## 27.1 Visual QA

- [ ] Only one clear primary focal point per section
- [ ] All major text aligns to the grid
- [ ] Whitespace is consistent
- [ ] Serif headings are used selectively
- [ ] Body text remains easy to read
- [ ] Accent color is not overused
- [ ] Borders are visible in both themes
- [ ] Shadows are rare and consistent
- [ ] Images share deliberate ratios
- [ ] Cards do not become a wall of boxes
- [ ] Section transitions are visually clear

## 27.2 Content QA

- [ ] Hero explains what Garvit builds
- [ ] Project cards explain the product problem
- [ ] Role and status are clear
- [ ] Technology lists remain concise
- [ ] Claims have evidence
- [ ] No generic filler language
- [ ] No fake percentages
- [ ] CTA labels describe destinations
- [ ] Project status is honest

## 27.3 Responsive QA

- [ ] Works at 320px
- [ ] Works at 360px
- [ ] Works at 390px
- [ ] Works at 768px
- [ ] Works at 1024px
- [ ] Works at 1280px
- [ ] Works at 1440px
- [ ] Works at 1920px
- [ ] No accidental horizontal scroll
- [ ] Images do not crop important content
- [ ] Buttons remain reachable
- [ ] Navigation remains usable
- [ ] Long titles wrap cleanly

## 27.4 Accessibility QA

- [ ] One `h1` per page
- [ ] Heading order is logical
- [ ] All controls have labels
- [ ] Keyboard focus is visible
- [ ] Menu is keyboard accessible
- [ ] Color contrast passes targets
- [ ] Touch targets are at least 44px
- [ ] Images have correct alt text
- [ ] Reduced motion works
- [ ] Form errors are clear
- [ ] Page works at 200% zoom

## 27.5 Interaction QA

- [ ] Hover does not reveal essential hidden information
- [ ] Focus state matches hover importance
- [ ] External links open safely when a new tab is used
- [ ] Disabled buttons are not clickable
- [ ] Loading states keep layout stable
- [ ] Theme selection persists
- [ ] Mobile menu closes correctly
- [ ] Escape key closes overlays

## 27.6 Performance QA

- [ ] Hero asset optimized
- [ ] Image dimensions provided
- [ ] Below-fold images lazy-loaded
- [ ] Fonts use `font-display: swap`
- [ ] No heavy animation library without need
- [ ] No autoplay background video
- [ ] Minimal layout shift
- [ ] Project screenshots remain sharp after compression

---

# 28. Issue Scope and Acceptance Criteria

## 28.1 Issue 1 - Design: Collect Portfolio Inspiration References

### Completed Inputs

The provided reference establishes:

- Editorial typography
- Large whitespace
- Neutral palette
- Central portrait composition
- Fine borders
- Three-column education layout
- Image-led project previews

### Recommended Additional References

Collect only a few targeted examples:

1. Developer-focused hero with immediate clarity
2. Strong technical case-study page
3. Excellent project card with context
4. Mobile portfolio composition
5. Dark-theme implementation
6. Contact/footer pattern

For each reference, record:

- What is useful
- What is unsuitable
- Which page or component it may influence
- Whether it is a principle or a direct pattern

### Acceptance Criteria

- [ ] References are organized by page or component
- [ ] Each reference has a written takeaway
- [ ] References include desktop and mobile examples
- [ ] References include light and dark examples
- [ ] The collection is limited and intentional
- [ ] No reference is treated as a template to copy

## 28.2 Issue 2 - Design: Define Final Visual Direction

### Deliverables

- Final visual-direction document
- Color tokens for both themes
- Typography roles and scale
- Grid and container rules
- Spacing scale
- Border, radius, and shadow rules
- Image direction
- Motion direction
- Accessibility requirements
- Component-level design rules
- Implementation handoff

### Acceptance Criteria

- [ ] Visual direction has a clear name and purpose
- [ ] Color tokens are defined semantically
- [ ] Typography pairing and fallbacks are selected
- [ ] Desktop, tablet, and mobile scales are documented
- [ ] Layout and spacing rules are consistent
- [ ] Dark mode is planned at token level
- [ ] Interactive states are specified
- [ ] Accessibility is included before implementation
- [ ] Project card requirements are documented
- [ ] The design avoids direct copying of references
- [ ] The team can begin UI work without inventing new foundation rules

## 28.3 Issue 3 - UI: Improve Homepage Visual Hierarchy

This issue should apply the approved system.

### Boundaries

- Do not change the brand direction
- Do not introduce new fonts
- Do not add a second accent color
- Do not redesign project cards independently from Issue 4
- Do not use fake metrics

### Expected Work

- Reorder homepage content by importance
- Strengthen hero statement and actions
- Improve selected-work prominence
- Create clearer section rhythm
- Reduce unnecessary visual competition
- Improve mobile content order

## 28.4 Issue 4 - UI: Improve Project Cards Visually

This issue should implement the project card specifications in Section 16.

### Expected Work

- Featured and standard variants
- Consistent screenshot ratios
- Clear project status
- Product-focused summaries
- Selected technical evidence
- Strong hover and focus states
- Responsive behavior
- Light and dark theme support

---

# 29. Decision Log

## 29.1 Locked Decisions

| Decision | Status | Reason |
|---|---|---|
| Editorial product-engineering direction | Locked | Distinctive and aligned with work |
| Serif display plus sans body | Locked | Creates reference-inspired hierarchy |
| Warm neutral palette | Locked | Calm and premium |
| Cobalt accent | Locked for first implementation | Technical, reliable, flexible across projects |
| Border-led card system | Locked | Cleaner than shadow-heavy template design |
| Project-first hierarchy | Locked | Strongest evidence for target visitors |
| Semantic light/dark tokens | Locked | Consistency and maintainability |
| Minimal motion | Locked | Preserves speed and control |

## 29.2 Flexible Decisions

| Decision | Flexibility |
|---|---|
| Exact serif font | Instrument Serif preferred; compatible serif may replace after testing |
| Portrait shape | Oval or rounded rectangle based on available photo |
| Homepage hero grid | May adjust after real-content prototype |
| Section numbering | Optional if it improves consistency |
| Skills route | May remain section or standalone page |
| Sticky case-study contents | Only for long case studies |

## 29.3 Rejected Directions

- Cyberpunk or terminal visual language
- Bright multi-color gradients as primary identity
- Skill proficiency percentages
- Giant GitHub contribution graph as hero evidence
- All content inside floating cards
- Excessive glassmorphism
- Continuous animations
- Tiny editorial text
- Direct recreation of the reference layout

---

# 30. Appendices

## Appendix A - Quick Design Token Reference

```css
/* Light */
--bg-page: #f7f7f3;
--bg-surface: #ffffff;
--bg-subtle: #f0f1ec;
--text-primary: #171817;
--text-secondary: #62655f;
--text-tertiary: #858880;
--border-default: #d9dbd4;
--border-strong: #bfc2ba;
--accent: #3157d5;
--accent-hover: #2748b8;
--accent-soft: #e8ecfc;
--focus: #4d70e8;

/* Dark */
--bg-page: #10110f;
--bg-surface: #171816;
--bg-subtle: #1e201d;
--text-primary: #f3f3ee;
--text-secondary: #a9aca4;
--text-tertiary: #858980;
--border-default: #33362f;
--border-strong: #4c5147;
--accent: #8297ff;
--accent-hover: #9eaeff;
--accent-soft: #20294a;
--focus: #a9b6ff;
```

## Appendix B - Quick Type Reference

```text
Hero title: Serif, 46-76px, line-height 0.96-1.00
Page title: Serif, 42-60px
Section title: Serif, 30-50px
Card title: Sans 20-22px or serif 24-28px
Hero support: Sans 19-22px
Body: Sans 16px, line-height 1.65
Metadata: Sans 14px
Section labels: Mono/Sans 12px uppercase
```

## Appendix C - Quick Spacing Reference

```text
Mobile page padding: 20px
Tablet page padding: 32px
Desktop page padding: 48-64px
Mobile section spacing: 56-72px
Desktop section spacing: 96-144px
Card padding: 20-24px
Card content gap: 12-20px
```

## Appendix D - Project Card Content Template

```markdown
Status: Live
Category: Full-stack product
Title: Pravaah
Summary: A clinic appointment and queue-management platform built around
real clinic workflows.
Role: Product engineer and team lead
Timeline: Jun-Jul 2026
Highlights:
- Status-aware appointment conflict rules
- Queue position scoped by clinic, doctor, and date
- Layered Express and Prisma architecture
Technologies: React, Express, PostgreSQL, Prisma
Primary action: View case study
Secondary actions: Live project, Repository
```

## Appendix E - Case Study Decision Template

```markdown
### Decision
What was chosen?

### Context
What problem or constraint made the decision necessary?

### Alternatives
What other options were considered?

### Reason
Why was this option selected?

### Trade-off
What complexity or limitation did it introduce?

### Result
What became better or easier?
```

## Appendix F - Final Design Review Questions

Before approving a page, ask:

1. Can a visitor understand the page purpose in five seconds?
2. Is the most important project or statement visually dominant?
3. Does every accent-colored element have a reason?
4. Is any text too small to look elegant?
5. Could spacing solve a problem currently solved with another card?
6. Does the mobile reading order match importance?
7. Can every interaction be used with a keyboard?
8. Does dark mode preserve hierarchy?
9. Are technical details specific and understandable?
10. Does the page look like Garvit's work rather than a copied template?

---

# Final Direction Summary

The portfolio should be a warm, editorial, project-first website that presents Garvit as a product-minded engineer. Its visual identity should come from typography, spacing, structure, real project evidence, and restrained interaction rather than visual effects.

The reference portfolio is valuable because it demonstrates discipline: limited color, strong hierarchy, clean alignment, a memorable focal point, and confidence in whitespace. The final design should keep those qualities while improving readability, project context, mobile behavior, accessibility, technical storytelling, and action clarity.

The implementation should begin only after the visual tokens and component principles in this document are accepted. The homepage hierarchy and project-card issues should then apply the system instead of redefining it.
