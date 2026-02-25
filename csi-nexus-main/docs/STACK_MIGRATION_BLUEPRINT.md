# Stack Migration Blueprint

## 1. Purpose

This document defines a stack-agnostic migration plan for taking the current frontend MVP to a production-grade full-stack platform.

It is written so the incoming team can:
- Keep the same product behavior and route contract
- Rebuild on a different frontend or backend stack
- Introduce dynamic content and operational maturity

## 2. Migration Objectives

Primary objectives:
- Preserve UX parity for all public pages
- Replace hardcoded data with managed backend content
- Add secure admin workflow for content updates
- Add auditability, testing, and deployment standards

Non-objectives (unless explicitly approved):
- Visual redesign
- Route path changes
- Information architecture changes

## 3. Product Contract to Preserve

Routes to preserve:
- `/`
- `/about`
- `/team`
- `/gallery`
- `/past-events`
- `/upcoming-events`
- `/contact`
- `*` (404)

Core UX behavior to preserve:
- Mobile and desktop navigation parity
- Home intro and section reveal animations (or equivalent perceived behavior)
- Team and events listing pages
- Contact form with success feedback
- 404 fallback page

## 4. Domain Model (Stack-Agnostic)

### 4.1 TeamMember

Suggested fields:
- `id` (string/uuid)
- `name` (string)
- `role` (string)
- `photoUrl` (string, nullable)
- `displayOrder` (number)
- `isActive` (boolean)
- `createdAt` (datetime)
- `updatedAt` (datetime)

### 4.2 Event

Suggested fields:
- `id` (string/uuid)
- `title` (string)
- `description` (text)
- `category` (enum: `past`, `upcoming`)
- `startDate` (datetime)
- `endDate` (datetime, nullable)
- `location` (string)
- `isHighlighted` (boolean)
- `bannerUrl` (string, nullable)
- `createdAt` (datetime)
- `updatedAt` (datetime)

### 4.3 GalleryItem

Suggested fields:
- `id` (string/uuid)
- `title` (string, nullable)
- `imageUrl` (string)
- `thumbnailUrl` (string, nullable)
- `eventId` (string/uuid, nullable)
- `displayOrder` (number)
- `isPublished` (boolean)
- `createdAt` (datetime)
- `updatedAt` (datetime)

### 4.4 ContactSubmission

Suggested fields:
- `id` (string/uuid)
- `name` (string)
- `email` (string)
- `message` (text)
- `status` (enum: `new`, `in_progress`, `closed`)
- `source` (string, nullable)
- `createdAt` (datetime)
- `updatedAt` (datetime)

### 4.5 SiteSetting (optional)

Suggested fields:
- `key` (string, unique)
- `value` (json/text)
- `updatedAt` (datetime)

Use cases:
- Social URLs
- Contact email
- Metadata defaults

## 5. API Contract Proposal (REST)

Public read endpoints:
- `GET /api/public/team`
- `GET /api/public/events?category=past|upcoming`
- `GET /api/public/gallery`
- `GET /api/public/site-settings`

Public write endpoint:
- `POST /api/public/contact-submissions`

Admin endpoints (authenticated):
- `GET/POST/PATCH/DELETE /api/admin/team`
- `GET/POST/PATCH/DELETE /api/admin/events`
- `GET/POST/PATCH/DELETE /api/admin/gallery`
- `GET/PUT /api/admin/site-settings`
- `GET /api/admin/contact-submissions`
- `PATCH /api/admin/contact-submissions/:id`

Response standards:
- Use stable IDs
- Include pagination for list endpoints
- Include consistent error envelope:
  - `code`
  - `message`
  - `details` (optional)

## 6. Migration Strategy

### Phase A: Foundation

- Finalize domain model and API schema
- Choose stack and infrastructure
- Establish CI and environments (`dev`, `staging`, `prod`)

### Phase B: Backend First

- Implement database schema and migrations
- Build public read APIs
- Build contact submission API
- Seed data from current static datasets

### Phase C: Frontend Integration

- Introduce API client layer
- Replace `src/data/*` dependencies with API calls
- Keep route paths and existing behavior
- Add loading, empty, and error states

### Phase D: Admin Operations

- Build admin auth and role access
- Build CRUD for team/events/gallery/settings
- Add media upload workflow

### Phase E: Hardening

- Add E2E tests for critical paths
- Add accessibility and performance checks
- Add observability, alerting, and rollback process

## 7. Data Migration from Current Codebase

Initial source files:
- `src/data/teamMembers.ts`
- `src/data/pastEvents.ts`
- `src/data/upcomingEvents.ts`
- Static text blocks in page components

Suggested process:
- Export these datasets to seed JSON
- Normalize dates to ISO format during import
- Backfill required fields (`id`, timestamps, status flags)

## 8. Frontend Replacement Notes (If Replatforming)

If changing frontend framework:
- Preserve route paths exactly
- Preserve text content and section order
- Preserve responsive behavior and core animations
- Keep metadata contract (title, description, OG)
- Keep accessibility contract (`aria-current`, keyboard navigation)

If changing styling system:
- Recreate current token set:
  - background/foreground
  - primary/accent
  - border/input/ring
  - radius
- Validate parity against current screenshots before release

## 9. Security and Compliance Baseline

Minimum baseline:
- Input validation on all write endpoints
- Rate limiting on contact submissions
- Output encoding and XSS protection
- CSRF protection for admin operations
- Secure secret management
- Access logging for admin actions

## 10. Quality Gates for Production

Mandatory checks per release:
- Lint passes
- Unit/integration tests pass
- Build passes
- Route-level smoke tests pass
- Lighthouse/performance threshold approved
- Accessibility checks pass for key pages

## 11. Suggested Delivery Timeline

Indicative plan:
- Week 1: Architecture finalization + schema + CI setup
- Week 2-3: Backend public/admin APIs + seed and validation
- Week 4: Frontend API integration + content parity
- Week 5: Admin panel and workflows
- Week 6: Hardening, QA, staging signoff, production cutover

## 12. Signoff Criteria

Migration is complete when:
- All public routes serve dynamic backend content
- Admin can update team/events/gallery without code deploy
- Contact submissions are persisted and manageable
- Observability and CI/CD are active
- UX parity accepted by stakeholders
