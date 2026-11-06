# PIXELINT — Independent Digital Design & Technology Studio

> *"Ideas deserve better execution."*  
> A product-minded creative studio for brands, businesses and ambitious founders.

Redesigned in high fidelity inspired by the visual design language, section sequencing, editorial typography, and minimalist aesthetic of [WINTR](https://wintr.gr/).

---

## 🏛️ Design Language & Aesthetics

- **Background**: Deep Pure Black (`#000000`)
- **Card Surfaces**: Technical Charcoal (`#0E0F14`) with hairline borders (`rgba(255, 255, 255, 0.08)`) and subtle corner registration accents
- **Typography Hierarchy**:
  - Headings & Interface: **Urbanist** (Geometric modern sans-serif)
  - Editorial Accents & Emphasis: **Arapey** (High-contrast editorial serif italic)
  - Telemetry & Technical Tags: **Space Grotesk** (Monospace)
- **Signature Section Badges**: 4-point geometric cross/star pill badges (`✦ ABOUT PIXELINT`, `✦ SERVICES & ADD-ONS`, `✦ HOW IT WORKS // TIMELINE`, `✦ WHY WE EXIST`, `✦ LET'S CONNECT`)
- **No generic AI clutter**: Replaced glowing neon orbs and particle fields with architectural geometric wireframes, clean editorial rhythm, and generous whitespace.

---

## ⚡ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + `@tailwindcss/postcss`
- **Animations**: Motion (`motion/react`)
- **Icons**: Lucide React

---

## 📐 Sections Implemented

1. **Header & Navigation**:
   - `PIXELINT` uppercase tracking wordmark
   - Links: `About`, `Services`, `Process`, `Contact`
   - High-contrast `Let's Talk` pill CTA with arrow micro-interaction
   - Mobile responsive drawer
2. **Hero Section**:
   - Brand Intro: `PIXELINT — INDEPENDENT DIGITAL DESIGN & TECHNOLOGY STUDIO`
   - Headline: `Ideas deserve better execution.` (with editorial italic serif)
   - Supporting statement: *"We transform ambitious ideas into meaningful digital experiences through design, technology and innovation."*
   - Positioning: *"A product-minded creative studio for brands, businesses and ambitious founders."*
   - Dual CTAs: `Let's Connect` & `Explore Our Studio` + downward scroll trigger
   - Right: Bespoke `EditorialHeroGraphic` architectural geometric sculpture with telemetry metadata
3. **Introduction / About Section**:
   - Small badge: `✦ ABOUT PIXELINT`
   - Large statement: *"A digital studio built for ideas that move the world forward."*
   - Description: *"PixelInt combines strategic thinking, thoughtful design and modern technology to create digital products, brands and experiences that make a difference."*
   - Supporting ethos: *"One studio. Multiple disciplines. Meaningful outcomes."*
   - 3 highlight cards: *Strategy & Direction*, *Design Architecture*, *Engineering & Innovation*
4. **Services Section**:
   - Heading: `What we bring to the table.`
   - 6 minimal cards with corner accents, numbers `01 —` to `06 —`, descriptions, and hover interactions:
     1. Digital Product Design
     2. UI/UX Design
     3. Brand Identity
     4. Web Development
     5. AI Experiences
     6. Creative Technology
5. **How We Work (Timeline & Process)**:
   - Heading: `From first thought to final experience.`
   - 4 numbered stages with clear hierarchy and key outcome checklists:
     - STAGE 01 — Discover
     - STAGE 02 — Define
     - STAGE 03 — Design & Build
     - STAGE 04 — Launch & Evolve
6. **Why PIXELINT**:
   - Heading: `Good ideas deserve more than ordinary execution.`
   - Supporting paragraph on bridging strategy, design, and technology
   - 3 editorial cards:
     1. *Design without direction is decoration.*
     2. *Technology should create possibilities.*
     3. *Experiences should create impact.*
7. **Contact Section (Let's Connect)**:
   - Heading: `Have something in mind?`
   - Description & direct studio email context
   - Clean contact form (Name, Email, Phone, Company/Brand, Project Type, Message)
   - Form validation & honest client feedback (formats message and provides one-click email client launch + copy inquiry)
8. **Footer**:
   - `PIXELINT` wordmark, studio tagline, navigation links, GitHub link, dynamic copyright year (`© 2026`).

---

## 🚀 Running Locally

```bash
npm run dev
# or
npm run build && npm run start
```

Visit [http://localhost:3000](http://localhost:3000) to review the website.
