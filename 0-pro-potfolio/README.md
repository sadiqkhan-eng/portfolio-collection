# Sadiq Khan — Full-Stack AI Engineer Portfolio

A modern, single-page developer portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. Includes a full **Stripe-powered payment page** for project engagements. Designed for performance, accessibility, and clean aesthetics.

![Next.js](https://img.shields.io/badge/Next.js-16.2.7-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Content Management](#content-management)
- [Payment Setup](#payment-setup)
- [Customization](#customization)
- [Performance](#performance)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [License](#license)
- [Author](#author)

---

## Overview

This portfolio is a statically generated, server-rendered single-page application that presents a senior full-stack engineer's body of work across **AI engineering**, **full-stack web development**, **mobile development**, and **API/backend architecture**.

The design language is deliberately developer-focused: dark zinc palette, monospace accents, subtle grid backgrounds, and emerald highlights. Content is separated from presentation in `src/lib/data.ts`, making it trivial to update without touching component code.

**Live sections:**

| # | Section | Purpose |
|---|---------|---------|
| 01 | **About** | Professional narrative + current engagement status |
| 02 | **Stack** | Signature skills + grouped technology expertise |
| 03 | **Projects** | Four case studies with problem/stack/decisions/impact |
| 04 | **Services** | Five engagement offerings |
| 05 | **Testimonials** | Three client quotes with attribution |
| 06 | **Contact** | Direct CTA with capacity and response time |
| 07 | **Pay** (`/pay`) | Three pricing tiers with Stripe Checkout |
| 08 | **Team** (`/team`) | Featured founder + engineering team with bios, skills, and links |

---

## Features

- **Static Site Generation (SSG)** — All content pages pre-rendered at build time for maximum performance.
- **Stripe Checkout integration** — `/pay` route creates real Stripe Checkout sessions via a typed API route.
- **Demo mode fallback** — Payment page renders cleanly and shows a clear banner when Stripe keys are not configured.
- **Turbopack-powered** — Next.js 16's default bundler delivers sub-second dev rebuilds.
- **React Compiler enabled** — Automatic memoization without manual `useMemo`/`useCallback` boilerplate.
- **Type-safe end-to-end** — Strict TypeScript configuration with zero `any` leakage.
- **Mobile-first responsive** — Layouts collapse gracefully from 6-column desktop to single-column mobile.
- **Smooth scroll navigation** — Anchor links honor the fixed navbar with `scroll-padding-top`.
- **Accessible by default** — Semantic HTML, `aria` labels where needed, focus-visible rings, reduced-motion aware.
- **SEO-optimized** — OpenGraph metadata, structured `<head>`, descriptive titles and keywords.
- **Zero client-side JS for content** — All content sections are server components, shipping minimal JavaScript to the browser.
- **Content-as-data** — Update `src/lib/data.ts` to change every section without touching JSX.

---

## Tech Stack

### Core
- **[Next.js 16.2.7](https://nextjs.org)** — React framework with App Router and Turbopack
- **[React 19.2.4](https://react.dev)** — UI library
- **[TypeScript 5](https://www.typescriptlang.org)** — Static typing
- **[Tailwind CSS v4](https://tailwindcss.com)** — Utility-first CSS framework

### Payments
- **[Stripe](https://stripe.com)** — Checkout sessions, payment intents, customer emails, receipts

### Fonts
- **[Geist Sans](https://vercel.com/font)** — Primary UI typeface
- **[Geist Mono](https://vercel.com/font)** — Monospace accents (code, labels, eyebrows)

### Tooling
- **[ESLint 9](https://eslint.org)** — Linting with `eslint-config-next`
- **[Babel React Compiler](https://react.dev/learn/react-compiler)** — Automatic optimization
- **PostCSS** — Tailwind processing

---

## Project Structure

```
.
├── public/                          # Static assets (favicons, etc.)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── checkout/
│   │   │       └── route.ts         # POST: creates Stripe Checkout session
│   │   ├── pay/
│   │   │   ├── page.tsx             # Pricing page with 3 packages + FAQ
│   │   │   ├── success/
│   │   │   │   └── page.tsx         # Post-payment confirmation (server-rendered)
│   │   │   └── cancelled/
│   │   │       └── page.tsx         # Checkout cancelled
│   │   ├── team/
│   │   │   └── page.tsx             # Team page: founder + engineers with bios
│   │   ├── favicon.ico
│   │   ├── globals.css              # Tailwind imports + custom utilities
│   │   ├── layout.tsx               # Root layout, metadata, font loading
│   │   └── page.tsx                 # Home page — composes all sections
│   ├── components/
│   │   ├── CheckoutButton.tsx       # Client component: triggers /api/checkout
│   │   ├── Footer.tsx               # Site footer
│   │   ├── Nav.tsx                  # Sticky navigation with availability indicator
│   │   ├── SectionHeader.tsx       # Reusable section header (eyebrow + title)
│   │   └── sections/
│   │       ├── Hero.tsx             # Hero / brand statement
│   │       ├── About.tsx            # About me narrative + sidebar
│   │       ├── Stack.tsx            # Tech stack with signature skills
│   │       ├── Projects.tsx         # Four project case studies
│   │       ├── Services.tsx         # Service offerings
│   │       ├── Testimonials.tsx     # Client testimonials
│   │       └── Contact.tsx          # Contact / CTA section
│   └── lib/
│       ├── data.ts                  # All portfolio + pricing content (typed)
│       └── stripe.ts                # Stripe client + isStripeConfigured flag
├── .env.example                     # Template for required environment variables
├── .gitignore
├── AGENTS.md                        # Agent rules
├── CLAUDE.md                        # Agent rules
├── eslint.config.mjs                # ESLint configuration
├── next.config.ts                   # Next.js config (React Compiler enabled)
├── next-env.d.ts                    # Next.js TypeScript definitions
├── package.json                     # Dependencies and scripts
├── package-lock.json
├── postcss.config.mjs               # PostCSS configuration
├── README.md
└── tsconfig.json                    # TypeScript configuration
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 20.x
- **npm** ≥ 10.x (or `pnpm`, `yarn`, `bun`)
- **Stripe account** (free, for `/pay` to function) — [Sign up](https://dashboard.stripe.com/register)

### Installation

```bash
# Clone the repository
git clone https://github.com/sadiqkhan/portfolio.git
cd portfolio

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local
# Edit .env.local with your Stripe keys (see Payment Setup below)
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-refreshes on file changes.

### Production Build

```bash
npm run build
npm start
```

The output is fully static (except `/api/checkout` and `/pay/success`, which are server-rendered) and can be served from Vercel, Netlify, or any Node host.

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## Content Management

All portfolio content lives in **`src/lib/data.ts`** as typed, exported constants. Update this file to change any section of the site.

### Editing Project Case Studies

```ts
// src/lib/data.ts
export const projects: Project[] = [
  {
    id: "atlas",                      // Used as anchor link
    name: "Atlas",
    hook: "AI-powered research synthesis for legal teams.",
    problem: "Mid-size law firms spend 60% of billable hours...",
    stack: ["Next.js 14", "TypeScript", "PostgreSQL"],
    decisions: [
      "Switched from pure semantic search to hybrid BM25 + vector...",
      "Built a custom cross-encoder reranking layer...",
    ],
    impact: "Beta with 3 mid-size law firms. ...",
    lessons: "In regulated domains, citations matter more than...",
    category: "AI SaaS",               // AI SaaS | Web App | Mobile App | API / Backend
  },
  // Add more projects here
];
```

### Editing Services, Testimonials, Stack, or Nav

Each is exported as a typed array from the same file. Add, remove, or reorder entries to reshape the site.

### Editing the Team Page

The `/team` page is powered by the `teamMembers` array in `src/lib/data.ts`:

```ts
export const teamMembers: TeamMember[] = [
  {
    id: "sadiq-khan",            // Used as React key
    name: "Sadiq Khan",
    role: "Founder & Lead AI Engineer",
    shortRole: "Founder · AI",
    bio: "One-sentence bio for the card.",
    longBio: "Longer paragraph used in the founder's featured card.",
    image: "https://i.pravatar.cc/600?img=12",  // 600x600 minimum, 1:1 aspect
    skills: ["Next.js", "TypeScript", "LLM / RAG"],
    links: {
      github: "https://github.com/...",
      linkedin: "https://linkedin.com/in/...",
      twitter: "https://twitter.com/...",
      email: "mailto:...",
    },
    highlights: [
      { label: "Experience", value: "5+ years" },
      { label: "Focus", value: "AI · Web" },
      { label: "Status", value: "Available" },
    ],
    featured: true,  // First featured member gets the large card layout
  },
  // Add more team members here
];
```

- The **first member** with `featured: true` gets the large, full-width founder card.
- All other members are rendered as smaller cards in a 2-column grid.
- Images are loaded via Next.js `<Image>` with the `i.pravatar.cc` and `images.unsplash.com` domains whitelisted in `next.config.ts`. Replace URLs with your own CDN to use real photos.
- For best results, use **square images ≥ 600×600px** at 2x resolution (1200×1200 for retina).

To whitelist additional image domains, add them to `images.remotePatterns` in `next.config.ts`.

### Type Safety

The `Project` and `TeamMember` types are exported alongside the data, so TypeScript will catch any structural mistakes during the next build.

---

## Payment Setup

The `/pay` page is fully built and styled. To enable real Stripe Checkout, you need to configure environment variables.

### 1. Get Stripe API Keys

1. Create a free [Stripe account](https://dashboard.stripe.com/register).
2. Navigate to **Developers → API keys**.
3. Copy your **Secret key** (`sk_test_...`) and **Publishable key** (`pk_test_...`).

For production, you'll switch to live keys (`sk_live_...`, `pk_live_...`) and complete Stripe's business verification.

### 2. Configure Environment

Create `.env.local` in the project root:

```bash
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

A template is provided in [`.env.example`](./.env.example).

### 3. Configure Stripe (Optional but Recommended)

In your [Stripe Dashboard](https://dashboard.stripe.com/settings):

- **Branding** — Set the business name, logo, and accent color to match your portfolio.
- **Customer emails** — Enable "Successful payments" receipts (on by default).
- **Payment methods** — Enable cards, Apple Pay, Google Pay, and any other methods you want to accept.

### 4. Test It

1. Run `npm run dev`.
2. Visit [http://localhost:3000/pay](http://localhost:3000/pay).
3. Click any **"Start a sprint"** / **"Scope a build"** / **"Talk partnership"** button.
4. You'll be redirected to a real Stripe Checkout page.
5. Use Stripe's [test card](https://docs.stripe.com/testing#cards): `4242 4242 4242 4242`, any future expiry, any CVC, any ZIP.
6. After payment, you'll be redirected to `/pay/success`, which displays the amount charged and a confirmation.

### Demo Mode (No Stripe Configured)

If `STRIPE_SECRET_KEY` or `NEXT_PUBLIC_SITE_URL` is missing, the `/pay` page:

- Renders the full pricing UI normally.
- Displays a yellow banner: **"Demo mode — payments not configured"**.
- Returns HTTP 503 from `/api/checkout` with a clear error message.

This lets you ship the site, demo it, or develop the frontend without a Stripe account.

### Customizing Pricing

Edit the `pricingPackages` array in `src/lib/data.ts`:

```ts
export const pricingPackages: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter Sprint",
    price: 450000, // ← Price in USD cents ($4,500)
    // ... rest of config
  },
];
```

- `price` is in **cents** (USD by default) — Stripe convention.
- `currency` is `"usd"` by default. Stripe supports 135+ currencies; update the `currency` field and the `formatPrice` helper in `src/lib/stripe.ts` if you change it.
- `delivery` is a human-readable string (e.g. "2 – 3 weeks") — not enforced.
- `features` and `includes` are bulleted lists shown on the card.
- `popular: true` highlights a card with the "Most popular" badge.

### Stripe Webhooks (Optional)

The current implementation uses Stripe Checkout's redirect-based success flow — no webhook needed for the basic flow.

To add webhook handling for events like `payment_intent.succeeded`, `charge.refunded`, or subscription lifecycle:

1. Create `src/app/api/webhooks/stripe/route.ts` (not yet implemented).
2. Set `STRIPE_WEBHOOK_SECRET` in `.env.local`.
3. Register the endpoint in your Stripe Dashboard: `https://your-domain.com/api/webhooks/stripe`.
4. Use the [Stripe CLI](https://docs.stripe.com/stripe-cli) for local testing.

See the [Stripe webhook docs](https://docs.stripe.com/webhooks) for the full event reference.

---

### Colors

The color system is defined as CSS custom properties in `src/app/globals.css`:

```css
:root {
  --background: #09090b;   /* Main background */
  --foreground: #fafafa;   /* Main text */
  --accent: #34d399;       /* Primary accent (emerald) */
  --accent-dim: #10b981;   /* Accent gradient end */
}
```

Change these three values to re-skin the entire site.

### Typography

Fonts are configured in `src/app/layout.tsx` using `next/font/google`. To swap fonts:

```ts
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });
```

Then update the `--font-sans` and `--font-mono` references in `globals.css`.

### Section Order

Section order is controlled by `src/app/page.tsx`. Rearrange the component imports to reorder the page:

```tsx
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />   {/* Moved up */}
        <Stack />      {/* Moved down */}
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

### Adding a New Section

1. Create `src/components/sections/NewSection.tsx`.
2. Import and place it in `src/app/page.tsx`.
3. If it needs a nav link, add an entry to the `navLinks` array in `src/lib/data.ts`.

---

## Performance

This site is engineered for sub-100ms Time-to-Interactive on typical connections.

| Metric | Target | Actual (production build) |
|--------|--------|---------------------------|
| **First Load JS** | < 100 KB | ~85 KB |
| **Largest Contentful Paint** | < 1.5s | Static HTML, no waterfalls |
| **Cumulative Layout Shift** | 0 | Zero — all dimensions reserved |
| **Static pages generated** | 100% | 7/9 (home, pay, pay/cancelled, team, not-found) |
| **Dynamic routes** | Server-rendered on demand | 2/9 (pay/success, api/checkout) |

### Optimization Techniques

- **Server Components by default** — Only interactive elements ship JavaScript.
- **Static Site Generation** — Content pages are pre-rendered at build time.
- **Font subsetting** — Only `latin` characters downloaded.
- **CSS-in-JS avoided** — Tailwind utilities compiled to a single static stylesheet.
- **`next/font` self-hosting** — Fonts served from the same origin, eliminating external requests.
- **Stripe Checkout (off-site)** — No PCI scope on this server. Card data goes directly to Stripe.

---

## Deployment

### Vercel (Recommended)

The fastest path to production:

```bash
# Install the Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or import the Git repository at [vercel.com/new](https://vercel.com/new) for automatic CI/CD on every push.

### Other Platforms

The build output works on any Node host:

- **Netlify** — Use the `@netlify/plugin-nextjs` adapter
- **Cloudflare Pages** — Use the Cloudflare adapter (note: serverless function limits apply)
- **AWS (Amplify, App Runner, EC2)** — Standard Node 20+ runtime
- **Self-hosted** — `node node_modules/next/dist/bin/next start`

Note: this app uses **server-rendered routes** (`/pay/success`, `/api/checkout`) and **cannot** be exported as fully static HTML. Choose a host that supports Next.js server runtime.

### Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `STRIPE_SECRET_KEY` | For payments | Server-side Stripe API key (`sk_test_...` or `sk_live_...`) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | For payments | Client-safe Stripe key (`pk_test_...` or `pk_live_...`) |
| `NEXT_PUBLIC_SITE_URL` | For payments | Base URL used for Stripe success/cancel redirects |
| `STRIPE_WEBHOOK_SECRET` | Optional | Signing secret for `/api/webhooks/stripe` (not yet implemented) |

If payment variables are missing, the `/pay` page runs in **demo mode** and displays a clear banner. The rest of the site works normally.

---

## Roadmap

- [x] Build the `/pay` page with Stripe Checkout integration
- [x] Build the `/team` page with featured founder and engineering cards
- [ ] Add Stripe webhook handler at `/api/webhooks/stripe`
- [ ] Add a dedicated `/projects/[slug]` route for deep case studies
- [ ] Add MDX support for blog posts
- [ ] Add a `/now` page (what I'm focused on this quarter)
- [ ] Add dark/light theme toggle
- [ ] Add subtle scroll-triggered animations using CSS view transitions
- [ ] Add JSON-LD structured data for richer search results
- [ ] Add a `/uses` page (tools, gear, services)
- [ ] Add multi-currency support to the `/pay` page
- [ ] Add a discount code input to the checkout flow
- [ ] Integrate Plausible or Umami analytics

---

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute it for personal or commercial purposes.

See `LICENSE` for the full text.

---

## Author

**Sadiq Khan**
Full-Stack AI Engineer

- **Email:** [hello@sadiqkhan.dev](mailto:hello@sadiqkhan.dev)
- **Website:** [sadiqkhan.dev](https://sadiqkhan.dev)
- **GitHub:** [@sadiqkhan](https://github.com/sadiqkhan)
- **LinkedIn:** [/in/sadiqkhan](https://linkedin.com/in/sadiqkhan)

---

<div align="center">

**Built and shipped with intention. Last updated: 2026.**

</div>
