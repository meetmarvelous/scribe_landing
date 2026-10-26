 # SCRIBE Landing Page & Commercial Operating Experience

A modern, responsive, enterprise-grade landing page for the **SCRIBE Windows Desktop Commerce, Publishing & AI Revenue Workspace**, implemented in strict alignment with `SCRIBE_Landing_Page_Design_Brief.md` and `SCRIBE_Windows_MVP_PRD.md`.

## Key Architectural & Design Decisions

### 1. Zero AI Gimmicks
- **No Emojis as Icons:** All visual symbology utilizes crisp, pixel-perfect Lucide SVG stroke icons.
- **No Generic Oval Pill Spam:** Eliminates floating capsule badges and generic sparkle icons. Instead, uses structured, architectural labels (`font-mono`, `border`, `rounded-md`/`rounded-lg`) matching high-end developer and financial terminals (Linear, Bloomberg, Stripe, Raycast).
- **Restrained Editorial Palette:** Strict adherence to the specification palette:
  - Ink / Midnight: `#0B1020`
  - Deep Navy: `#111A2E`
  - Slate: `#344054`
  - Off-White: `#F7F8FA`
  - Electric Blue: `#4F7DFF` (Primary action)
  - Teal Accent: `#29C7B8` (Verification, margins, and positive telemetry)
  - Soft Violet: `#8B7CFF` (Agent orchestration telemetry, used sparingly)
  - Muted Slate: `#667085` / `#94A3B8`
- **Honest Claims & Provenance:** No fabricated metrics, testimonials, or claims of guaranteed sales. Clear labeling of release stages (`Available in MVP`, `In Development`, `Planned`).

### 2. High-Fidelity Windows Desktop Mockups
- **Realistic Windows App Shell:** Window title bar with minimize/maximize/close controls, workspace title, search shortcut (`Ctrl + K`), connection indicators (WordPress REST API, local encrypted SQLite).
- **Interactive Opportunity Pipeline:** Real commercial data rows with SKU codes, verified sources, demand signals, FOB COGS, retail MSRP, contribution margins, and action triggers.
- **Interactive Tabbed Product Showcase:** Deep walkthrough covering Opportunity Workspace, Content Studio & WordPress publishing, Supplier Review dossiers, Agent Governance, and Revenue Analytics.
- **Interactive Connected Workflow:** 7-stage interactive stepper (Discover &rarr; Verify &rarr; Evaluate &rarr; Create &rarr; Review &rarr; Publish &rarr; Measure) displaying real inputs, outputs, system logic, and cryptographic provenance trails.
- **Live Human Approval Gate Simulator:** Demonstrates SCRIBE's policy-enforced human-in-the-loop governance where visitors can test authorising or rejecting high-impact actions.
- **Interactive Unit Economics Sandbox:** Live slider-based calculator computing landed COGS, platform fees, return buffers, net contribution margins ($ and %), and break-even ROAS.
- **Filterable Integrations Directory:** Transparent status badges (`Available in MVP`, `Beta`, `Planned`) with authentication and protocol specifications.

### 3. Mobile-First & Responsive
- Fully responsive across mobile (360px+), tablet (768px+), and desktop (1024px-1440px+).
- Touch target sizes meet or exceed 44×44 CSS pixels.
- Accessible hamburger drawer with high-contrast navigation links.
- Keyboard accessible accordion, tabs, and escape-key handling for modals.

## Tech Stack
- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + `@tailwindcss/vite`
- **Icons:** Lucide React (crisp SVG stroke icons)
- **Bundler:** Vite 6 with production build optimization

## Getting Started

### Development Server
```bash
cd landing
npm run dev
```

### Production Build
```bash
cd landing
npm run build
npm run preview
```
