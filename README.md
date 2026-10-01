# Mainframe — Creative Agency Website

An interactive, single-page website for **Mainframe®**, a creative agency. The hero section introduces **A.R.I.A** (Mainframe's Adaptive Response Interface Agent), an animated AI-assistant character that greets visitors with a typewriter-style message and quick-action buttons.

Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**, with animations powered by **Motion** (Framer Motion's successor) and icons from **lucide-react**.

---

## Features

- **Mouse-Scrubbed Video Background** (`ScrubbableVideoBackground.tsx` + `useVideoScrub.ts`) — a fixed background video whose playback position responds to mouse movement, with a fallback video URL if the local file fails to load.
- **Typewriter Hero Intro** (`useTypewriter.ts`) — the hero message types itself out, followed by a set of action pills (e.g. *"Pitch us an idea"*, *"Come work here"*, *"Send a brief hello"*).
- **Studio Section** (`StudioSection.tsx`) — showcases core capabilities and selected case studies, each with a "Start a project" call-to-action that pre-fills the contact form.
- **Labs Section** (`LabsSection.tsx`) — applied R&D / interactive experiments.
- **Openings Section** (`OpeningsSection.tsx`) — studio culture and live job listings, each with an "Apply" action that pre-fills the contact form with the role title.
- **Shop Section** (`ShopSection.tsx`) — product/edition listings.
- **Contact Section** (`ContactSection.tsx`) — a single contact form that adapts its subject/inquiry type (pitch, hello, career) based on which action the visitor clicked elsewhere on the site.
- **Centralized Site Content** (`src/config/siteConfig.ts`) — brand name, nav items, hero copy, capabilities, case studies, labs, openings, and shop items are all defined in one typed config object, so copy and content can be edited without touching component code.
- **Resilient Images** (`ResilientImage.tsx`) — image component with fallback handling.

---

## Project Structure

```
src/
├── components/      # UI sections (Hero, Navbar, Studio, Labs, Openings, Shop, Contact, Footer, etc.)
├── config/
│   └── siteConfig.ts   # All site copy and content in one place
├── hooks/
│   ├── useTypewriter.ts
│   └── useVideoScrub.ts
├── types/
│   └── agency.ts        # Shared TypeScript types for the site config
├── App.tsx
├── main.tsx
└── index.css
```

---

## Getting Started

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the app in development mode:
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:3000`.
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build locally:
   ```bash
   npm run preview
   ```
5. Type-check the project:
   ```bash
   npm run lint
   ```

