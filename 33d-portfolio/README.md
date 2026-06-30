# 33D Portfolio

A premium, interactive portfolio website built with Next.js 16, featuring 3D visuals, fluid animations, and AI/engineering-focused branding.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js](https://nextjs.org) 16 (App Router, Webpack) |
| Language | TypeScript 5 |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 |
| Animation | [Framer Motion](https://motion.dev) 12 |
| 3D Graphics | [Three.js](https://threejs.org) + [React Three Fiber](https://r3f.docs.pmnd.rs) 9 + [Drei](https://github.com/pmndrs/drei) 10 |
| UI Primitives | [Radix UI](https://radix-ui.com) (Dialog, Tabs, Slot, Separator) |
| Icons | [Lucide React](https://lucide.dev) |
| Class Utilities | `clsx` + `tailwind-merge` (via `cn()`) |

## Sections

1. **Hero** — Full-screen 3D scene with rotating role titles, gradient text, and magnetic CTA buttons
2. **About** — Bio, stat highlights, education timeline, current learning, achievements
3. **Skills** — 25 skills across 4 categories (Frontend, Backend, AI & ML, Tools) with animated progress bars
4. **Projects** — Filterable project grid (AI & ML / Full Stack) with detail dialog
5. **Experience** — Vertical timeline of education and work history
6. **AI Showcase** — AI capability cards with interactive 3D node graph
7. **GitHub Stats** — Contribution counters and language distribution bars
8. **Testimonials** — Infinite marquee of client/colleague quotes
9. **Contact** — Multi-field form with project type selector

## Features

- **3D Visuals** — Interactive WebGL scenes throughout (hero, particles, node graph, skill cards)
- **Fluid Animations** — Scroll-triggered reveals, parallax, staggered entrances, magnetic buttons, tilt cards
- **Dark Theme** — Immersive `#0a0a1a` dark background with aurora and grid ambient effects
- **Custom Cursor** — Spring-physics cursor follower with hover detection
- **Scroll Progress** — Fixed gradient progress bar at viewport top
- **Loading Screen** — Animated full-screen loading overlay with progress indicator
- **Responsive** — Mobile hamburger nav, adaptive layouts
- **Accessible** — `prefers-reduced-motion` support across all animations
- **SEO Optimized** — Metadata, Open Graph, Twitter cards, JSON-LD schema, sitemap, robots.txt
- **Error Resilient** — Error boundaries catch 3D rendering failures gracefully

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Output is in `.next/`.

## Project Structure

```
src/
├── app/              # Next.js App Router (layout, pages, metadata)
├── components/
│   ├── animations/   # Framer Motion animation primitives
│   ├── layout/       # Navbar, Footer, LoadingScreen
│   ├── sections/     # 9 page sections (Hero, About, Skills, etc.)
│   ├── shared/       # Container, SectionWrapper
│   ├── three/        # React Three Fiber 3D components
│   └── ui/           # Radix-based UI primitives (Button, Card, Dialog, etc.)
└── lib/              # Types, constants, hooks, utilities
```
