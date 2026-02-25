# Project Handover Documentation

## 1. Executive Summary

This project is the current frontend implementation of the CSI PES MCOE club website.

Current state:
- Status: Frontend MVP implemented and deployable as a static SPA.
- Backend: Not implemented in this repository.
- Content source: Local hardcoded data modules and inline static content.
- Routing: Client-side routing with React Router v6.
- Build system: Vite.

Business readiness:
- Suitable for UI review, stakeholder demos, and static deployment.
- Not yet suitable for production operations requiring dynamic CMS, admin workflows, or persistent data.

## 2. Scope Delivered So Far

Implemented pages:
- Home (`/`)
- About (`/about`)
- Team (`/team`)
- Gallery (`/gallery`)
- Past Events (`/past-events`)
- Upcoming Events (`/upcoming-events`)
- Contact (`/contact`)
- Not Found (`*`)

Implemented shared UX:
- Responsive top navigation with mobile overlay menu
- Intro animation on first load
- Scroll reveal animations
- Section-level visual styling system
- Toast notifications
- Error boundary fallback screen
- Route-based document title management

## 3. Current Tech Stack

Runtime:
- React 18
- React DOM 18
- React Router DOM 6

Build and tooling:
- Vite 5
- TypeScript (project is TS/TSX-based)
- Tailwind CSS
- PostCSS + Autoprefixer
- ESLint (flat config)
- Vitest + Testing Library (basic setup present)

UI and UX libraries:
- Framer Motion
- Radix UI primitives
- shadcn-style UI component set under `src/components/ui`
- Lucide icons
- TanStack Query (available, currently not used for remote fetching)

## 4. Repository Structure

Top-level:
- `index.html` - HTML entry document and metadata
- `src/main.tsx` - React mount point
- `src/App.tsx` - route tree and providers
- `public/` - static files served directly
- `docs/` - handover documentation

Source modules:
- `src/pages` - route-level pages
- `src/components` - shared components and home sections
- `src/components/ui` - reusable UI primitives
- `src/data` - hardcoded data extracted from pages
- `src/hooks` - custom hooks
- `src/test` - test setup and sample test

## 5. Functional Architecture

Application root:
- `src/main.tsx`
  - Mounts app
  - Wraps app in `ErrorBoundary`

Routing and providers:
- `src/App.tsx`
  - QueryClientProvider
  - TooltipProvider
  - Toaster and Sonner notification hosts
  - BrowserRouter routes
  - Route title manager hook

Navigation model:
- `src/components/Navbar.tsx`
  - Desktop navigation links
  - Mobile full-screen animated menu
  - Active route highlighting and `aria-current`

Page composition:
- `src/pages/Index.tsx`
  - Home sections from `src/components/sections/*`
- Other pages use reusable shell pattern:
  - `Navbar` + page `<main>` + `Footer`

## 6. Route Inventory and Behavior

`/`:
- Intro overlay plays once per initial render (stateful in component)
- Hero and content sections render in sequence

`/about`:
- Static organization and mission content

`/team`:
- Renders cards from `src/data/teamMembers.ts`

`/gallery`:
- Placeholder gallery blocks (no uploaded gallery assets yet)

`/past-events`:
- Renders list from `src/data/pastEvents.ts`

`/upcoming-events`:
- Renders list from `src/data/upcomingEvents.ts`
- Includes non-wired "Register" CTA buttons (UI-only)

`/contact`:
- Local form state only
- Submit triggers toast
- No API request or persistence

`*`:
- Not Found screen

## 7. Data Layer Status

Current data sources:
- `src/data/teamMembers.ts`
- `src/data/pastEvents.ts`
- `src/data/upcomingEvents.ts`
- Additional static text remains inline in section components/pages

Current limitations:
- No API integration
- No admin panel
- No dynamic content updates without code changes
- No data validation pipeline

## 8. Styling and Design System

Core style files:
- `src/index.css` - CSS variables, utility classes, base styling
- `tailwind.config.ts` - theme extension, fonts, color tokens, animations

Typography:
- Google Fonts loaded in `index.html`: Orbitron + Space Grotesk
- Tailwind currently maps:
  - `font-sans` to Inter
  - `font-display` to Space Grotesk

Notes:
- Orbitron is loaded but not actively mapped in Tailwind typography at present.

## 9. Metadata and SEO

Implemented in `index.html`:
- Basic title and description
- Open Graph tags
- Twitter Card tags

Current gaps:
- `og:url` is placeholder (`https://example.com`) and must be replaced with real domain.
- Metadata is globally static; route-specific metadata is not implemented.

## 10. Asset Management

Primary asset:
- `src/assets/logo.png`

Fallback strategy:
- Navbar and intro logo image include runtime fallback to `/placeholder.svg`

Current gap:
- Footer logo currently does not include fallback logic.

## 11. Accessibility Status

Implemented:
- Active navigation exposes `aria-current="page"`
- Mobile menu toggle has `aria-label`

Pending improvements:
- Contact form labels are visual but not `htmlFor` linked IDs.
- Some icon-only social links in footer should include explicit accessible labels.

## 12. Quality, Testing, and Tooling Status

Linting:
- ESLint configured (`eslint.config.js`)
- Script available: `npm run lint`

Testing:
- Vitest configured (`vitest.config.ts`)
- Setup file present (`src/test/setup.ts`)
- Only a minimal sample test exists (`src/test/example.test.ts`)
- No page/component behavior tests yet

Code quality posture:
- Build and tooling baseline exists
- Automated confidence remains low due to limited test coverage

## 13. Environment Setup and Runbook

Prerequisites:
- Node.js 18+ recommended
- npm 9+ recommended

Install:
```bash
npm install
```

Development:
```bash
npm run dev
```

Production build:
```bash
npm run build
```

Local preview of production bundle:
```bash
npm run preview
```

Lint:
```bash
npm run lint
```

Test:
```bash
npm run test
```

## 14. Deployment Notes

Deployment type:
- Static frontend deployment (Netlify, Vercel, Cloudflare Pages, S3+CDN, Nginx static host)

Required pre-deploy checks:
- Build succeeds
- Router rewrite configured to serve `index.html` for client routes
- Replace metadata placeholders (`og:url`, image URLs if needed)
- Confirm production environment variables if future API integration is added

## 15. Audit Issue Register and Resolution Status

Reference source:
- `CSI_Codebase_Audit_Report.docx` (provided separately by project owner)

Status matrix:

| ID | Issue | Status | Notes |
|---|---|---|---|
| C-1 | BOM characters in source files | Resolved | BOM removed from text source files. |
| C-2 | CRLF line endings in source files | Resolved (current state) | LF normalized; `.gitattributes` still missing for enforcement. |
| C-3 | Google Fonts not loaded | Resolved | Fonts linked in `index.html`. |
| H-1 | Hardcoded content | Partially resolved | Moved major lists to `src/data/*`; still static and non-CMS. |
| H-2 | Missing asset references | Partially resolved | Key logo fallback added in navbar/intro; footer fallback not added. |
| H-3 | Missing `.gitignore` | Resolved | `.gitignore` present and expanded. |
| H-4 | No route-based titles | Resolved | Centralized in `useRouteTitle`. |
| M-1 | ESLint/Prettier absent | Partially resolved | ESLint added; Prettier not configured. |
| M-2 | No 404/Error boundary | Resolved | NotFound route + ErrorBoundary implemented. |
| M-3 | CursorTrail mobile handling | Not applicable in current codebase | CursorTrail component is not present now. |
| M-4 | Parallax responsiveness | Resolved in current hero implementation | Orb sizing uses viewport-aware constraints. |
| M-5 | Space in folder name | Resolved | Current folder naming uses hyphenated form. |
| M-6 | Open Graph metadata missing | Resolved (baseline) | Tags present; production values still needed. |
| L-1 | Legacy React default imports | Resolved | Removed where unnecessary. |
| L-2 | Missing `aria-current` | Resolved | Added in navbar links. |
| L-3 | Inadequate README | Resolved | Reworked and linked to full docs. |

## 16. Current Known Gaps and Risks

High priority:
- No backend/API integration
- No persistent data storage
- No authentication or admin workflow
- No submission endpoint for contact form

Medium priority:
- Social links in footer use placeholder `#` URLs for some platforms
- `og:url` still placeholder
- Gallery uses placeholder tiles rather than managed media
- Minimal automated tests

Low priority:
- Text encoding artifacts are still visible in footer copy (`â€”`, `Â©`)
- Orbitron font is loaded but not actively used in typography mapping

## 17. Recommended Next Phase Plan

Phase 1 (stabilization, 1 sprint):
- Add `.gitattributes` to enforce LF going forward
- Fix footer text encoding artifacts
- Replace placeholder URLs in footer and metadata
- Add baseline integration tests for route rendering and critical flows

Phase 2 (data enablement, 1-2 sprints):
- Define backend schema for team, events, gallery, contact submissions
- Introduce API layer and replace static data modules
- Wire contact form to backend endpoint

Phase 3 (operations, 1 sprint):
- Add CI pipeline (lint, test, build)
- Add environment strategy and secrets policy
- Add monitoring/observability hooks for production

## 18. Handover Checklist

Before transferring to a new implementation team:
- Confirm business owner for content and approvals
- Confirm production domain and social preview assets
- Confirm final stack decision (keep React or replatform)
- Freeze UI scope and route contract for migration
- Export this documentation with repository snapshot

## 19. Primary Reference Files

Core:
- `src/main.tsx`
- `src/App.tsx`
- `index.html`
- `src/index.css`
- `tailwind.config.ts`

Pages:
- `src/pages/*.tsx`

Data:
- `src/data/*.ts`

Shared components:
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/IntroAnimation.tsx`
- `src/components/ScrollReveal.tsx`
- `src/components/ErrorBoundary.tsx`
