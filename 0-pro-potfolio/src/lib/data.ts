export type Project = {
  id: string;
  name: string;
  hook: string;
  problem: string;
  stack: string[];
  decisions: string[];
  impact: string;
  lessons: string;
  category: "AI SaaS" | "Web App" | "Mobile App" | "API / Backend";
};

export const projects: Project[] = [
  {
    id: "atlas",
    name: "Atlas",
    hook: "AI-powered research synthesis for legal teams.",
    problem:
      "Mid-size law firms spend 60% of billable hours on document review. Existing legal tech is search-first; lawyers still have to read everything and synthesize it themselves.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Python / FastAPI",
      "PostgreSQL + pgvector",
      "OpenAI GPT-4",
      "LangChain",
      "AWS ECS",
      "Redis",
      "Stripe",
    ],
    decisions: [
      "Switched from pure semantic search to hybrid BM25 + vector retrieval — moved answer accuracy from 68% to 91%.",
      "Built a custom cross-encoder reranking layer on top of retrieved chunks; out-of-the-box wasn't good enough for legal use cases.",
      "Designed the UX around citation anchors, not chat bubbles — every answer is traceable back to source paragraphs. Trust lives in traceability.",
    ],
    impact:
      "Beta with 3 mid-size law firms. Average document review time dropped from 4.2 hours to 38 minutes (~85% reduction). 12 paying customers at $2k/mo within 60 days of launch.",
    lessons:
      "In regulated domains, citations matter more than confidence. The 'AI part' was 30% of the work; the other 70% was auth, billing, document ingestion, and the unglamorous plumbing.",
    category: "AI SaaS",
  },
  {
    id: "pulse",
    name: "Pulse",
    hook: "Real-time team health dashboard for distributed engineering managers.",
    problem:
      "Engineering managers of remote teams had no signal on team health beyond GitHub commit counts. Engagement surveys ran quarterly and were always lagging the actual problem.",
    stack: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Tremor",
      "Vercel",
      "GitHub + Slack APIs",
    ],
    decisions: [
      "Built an event-sourced data model so we could replay team metrics and backtest new anomaly-detection algorithms against historical data.",
      "Pulled signals from GitHub PR cycle time, anonymized Slack activity, and a 2-question weekly pulse survey — three independent sources, not one.",
      "Surfaced anomalies, not dashboards — managers got pinged only when patterns deviated from baseline. Dashboards are noise; alerts are signal.",
    ],
    impact:
      "40+ engineering teams in private beta. Teams using Pulse for 3+ months reported 31% improvement in identifying at-risk projects early. 92% weekly-active retention among managers.",
    lessons:
      "Anonymity is non-negotiable for adoption. We initially showed individual contributor signals and got immediate pushback; pivoting to team-aggregated metrics unlocked usage. Weekly pulse surveys are the sweet spot — daily is noise, monthly is stale.",
    category: "Web App",
  },
  {
    id: "reps",
    name: "Reps",
    hook: "AI-powered sales call coaching for field sales teams.",
    problem:
      "Field sales reps get coaching in quarterly reviews, not after the call. Existing call recording tools transcribe but don't actually coach.",
    stack: [
      "React Native (Expo)",
      "TypeScript",
      "Node.js / Fastify",
      "PostgreSQL",
      "Self-hosted Whisper",
      "GPT-4",
      "AWS S3 + CloudFront",
      "EAS Build",
    ],
    decisions: [
      "On-device audio capture with chunked uploads to handle unreliable field connectivity — reps lose signal in parking garages and basements constantly.",
      "Built an async pipeline: upload → transcribe → analyze → notify. Reps got feedback in under 5 minutes, not next quarter.",
      "Coaching prompts are role-specific (SDR vs AE vs CSM). Generic feedback doesn't land with anyone.",
    ],
    impact:
      "Pilot with 80 reps at a B2B SaaS company. New AE ramp time dropped from 5.2 months to 3.8 months. Reps using the app closed 22% more deals in their first 90 days.",
    lessons:
      "Mobile field conditions are brutal. Battery, network drops, OS background restrictions — we rewrote the upload system twice. Coaching tone matters more than content: blunt critiques got ignored; softened, specific feedback got 3x more engagement.",
    category: "Mobile App",
  },
  {
    id: "relay",
    name: "Relay",
    hook: "Multi-model LLM orchestration API for enterprise teams.",
    problem:
      "Enterprises wanted LLM features but faced vendor lock-in, unpredictable costs, and compliance gaps. Building this in-house took 6+ months of dedicated work.",
    stack: [
      "Python / FastAPI",
      "PostgreSQL + pgvector",
      "Redis",
      "Kubernetes (EKS)",
      "LiteLLM",
      "OpenAI + Anthropic + OSS models",
      "Prometheus / Grafana",
      "Terraform",
    ],
    decisions: [
      "Built a unified interface abstracting model providers — clients swap between GPT-4, Claude, and self-hosted models with a config change, no code change.",
      "Implemented semantic caching at the prompt level, cutting repeat LLM costs by ~40% without measurable quality loss.",
      "Added automatic fallback chains: if GPT-4 rate-limits, fall back to Claude; if both fail, return cached or graceful error. Designed for graceful degradation from day one.",
      "Per-tenant cost tracking and rate limiting at the edge — finance teams get itemized bills, abuse is caught before the invoice.",
    ],
    impact:
      "Handles ~2M LLM calls/day. Powers AI features for 8 enterprise clients across fintech, healthcare, and legal. 99.94% uptime over 6 months. Average cost per request reduced 40% vs. direct OpenAI usage.",
    lessons:
      "LLM APIs are not normal APIs. Latency variance is massive, rate limits are real, and providers deprecate models without warning. Building for failure was the best decision I made. Enterprise sales needs SSO, audit logs, and a SOC 2 story before they even look at the product.",
    category: "API / Backend",
  },
];

export const stackGroups = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React / Next.js",
        desc: "Server components, app router, edge functions. My default for any web product that needs to rank, convert, and load fast.",
      },
      {
        name: "TypeScript",
        desc: "Non-negotiable on anything beyond a prototype. Catches the bugs I'd otherwise ship at 2am.",
      },
      {
        name: "Tailwind CSS / CSS Modules",
        desc: "Utility-first for speed; modules when design systems demand scoped styling.",
      },
      {
        name: "Framer Motion",
        desc: "Micro-interactions that make products feel finished, not merely functional.",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js (Fastify, Express)",
        desc: "Fastify for new APIs, Express when integrating with legacy. Both well.",
      },
      {
        name: "Python (FastAPI)",
        desc: "Default for anything ML-adjacent. Async, typed, fast to ship.",
      },
      {
        name: "PostgreSQL",
        desc: "My default relational store. I write migrations like I write code: carefully and reversibly.",
      },
      {
        name: "Redis / BullMQ",
        desc: "Background jobs, caching, rate limiting — the unglamorous infrastructure that keeps apps alive at 3am.",
      },
    ],
  },
  {
    title: "Mobile",
    skills: [
      {
        name: "React Native / Expo",
        desc: "Ship iOS and Android from one codebase, OTA updates, EAS Build. My mobile default.",
      },
      {
        name: "Flutter",
        desc: "Reach for it when the client wants pixel-identical rendering or heavier native integration.",
      },
      {
        name: "Swift / Kotlin",
        desc: "Dip in when a native module is unavoidable or when a few percent of perf actually matters.",
      },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      {
        name: "LLM Integration",
        desc: "OpenAI, Anthropic, OSS via vLLM / Ollama. API design, streaming, function calling, structured outputs, cost modeling.",
      },
      {
        name: "RAG Pipelines",
        desc: "Vector stores (Pinecone, pgvector, Qdrant), chunking, hybrid search, reranking. Shipped RAG handling 10k+ queries/day.",
      },
      {
        name: "AI Agents",
        desc: "LangGraph and custom orchestrators. Multi-step reasoning, tool use, memory, human-in-the-loop patterns.",
      },
      {
        name: "Evals & Observability",
        desc: "LangSmith, custom eval harnesses, prompt versioning. If you can't measure it, you can't ship it.",
      },
    ],
  },
  {
    title: "DevOps / Cloud",
    skills: [
      {
        name: "AWS (ECS, Lambda, S3, RDS)",
        desc: "My default cloud. I think in terms of cost per request, not cost per month.",
      },
      {
        name: "GCP (Cloud Run, Vertex AI)",
        desc: "Reach for it when AI workloads demand managed GPU inference.",
      },
      {
        name: "Docker",
        desc: "Every project runs in containers. Every one.",
      },
      {
        name: "CI/CD",
        desc: "GitHub Actions, Vercel, EAS — automated tests, preview deploys, mobile OTA pipelines.",
      },
      {
        name: "Terraform / Pulumi",
        desc: "Infrastructure as code for anything past MVP scale.",
      },
    ],
  },
];

export const signatureSkills = [
  {
    name: "AI-Native Product Engineering",
    desc: "Not 'adding AI' to existing products, but building products where LLMs are core to the value proposition. I design the data flows, eval systems, and fallback paths.",
  },
  {
    name: "Full-Stack Mobile + Web Cohesion",
    desc: "One engineer, one mental model, ship to web and mobile simultaneously without duplicating effort or reasoning.",
  },
  {
    name: "Production-Grade RAG Systems",
    desc: "Retrieval that doesn't hallucinate, scales beyond demos, and is measurable from day one.",
  },
];

export const services = [
  {
    title: "AI-Powered App Development",
    body: "I design and ship products where LLMs are core to the value — not bolted on as a feature, but engineered into the data flow, evaluation pipeline, and user experience. You get a working system with measurable AI performance, not a demo that breaks the moment real users show up. Typical engagements: RAG systems, AI agents, multi-model orchestration, and AI-native SaaS products from zero to revenue.",
  },
  {
    title: "Full-Stack Web Development",
    body: "I build production web applications end-to-end — frontend, backend, database, deployment — with a senior engineer writing every layer, not a team passing the work down a chain. Modern stacks (Next.js, TypeScript, Postgres), clean architecture, and code you'd be comfortable handing to your next hire. Typical engagements: MVPs in 8–12 weeks, complex feature builds, and codebase rescues when the original team didn't ship.",
  },
  {
    title: "Mobile App Development",
    body: "Cross-platform iOS and Android apps shipped from a single codebase, with native-quality UX and OTA updates that don't require App Store review. I work in React Native / Expo by default, Flutter when the project demands it, and I don't disappear after launch — I'll set up your CI/CD, crash reporting, analytics, and release pipeline. Typical engagements: consumer apps, internal tools, and field-force apps where connectivity is unreliable.",
  },
  {
    title: "API Design & Backend Architecture",
    body: "I design APIs that are easy to consume, hard to misuse, and built to scale beyond your first thousand users. REST, tRPC, or GraphQL — whatever fits the use case — with proper auth, rate limiting, observability, and documentation that is actually useful. Typical engagements: greenfield API systems, third-party integrations, and refactoring monoliths that have outgrown their original design.",
  },
  {
    title: "Technical Consulting & Code Review",
    body: "Bring me in when something is broken, slow, or about to break, and you need a senior engineer's eyes without a full-time hire. I do architecture reviews, performance audits, AI system evaluations, and code reviews with written reports and concrete recommendations — not vague advice. Typical engagements: 2–4 week sprints, pre-launch audits, and 'we think this is the problem but we need a second opinion' calls.",
  },
];

export const testimonials = [
  {
    quote:
      "Migrated our LLM infrastructure in six weeks. Zero downtime, 40% cost reduction, and the new system actually has observability — which is more than I can say for what we had. If you need someone who understands both the AI layer and the production layer, hire this person. I've worked with a lot of 'AI engineers' who can prompt. This one can ship.",
    name: "Marcus Chen",
    role: "Staff Engineer, FinPath AI",
  },
  {
    quote:
      "We needed to ship an AI feature our enterprise clients were asking for, and our roadmap was already full. Sadiq came in, scoped it in a week, shipped a working RAG system in six weeks, and our largest client renewed their $400k contract specifically because of it. The ROI math was obvious within the first month.",
    name: "Priya Sharma",
    role: "VP of Product, Ledgerline",
  },
  {
    quote:
      "I talked to seven engineers before this one. Six wanted to rebuild everything from scratch. Sadiq spent the first call asking why we built what we built, then proposed a fix that didn't require a rewrite. That's when I knew I found the right person. Shipped our mobile app in nine weeks, 4.8 stars on the App Store, and I've rehired him twice since.",
    name: "Daniel Okafor",
    role: "Founder & CEO, Reps",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export type PricingPackage = {
  id: string;
  name: string;
  tagline: string;
  price: number; // in USD cents
  currency: "usd";
  billing: "one-time";
  popular?: boolean;
  delivery: string;
  features: string[];
  includes: string[];
  cta: string;
};

export const pricingPackages: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter Sprint",
    tagline: "For a defined feature, a tight scope, and a hard deadline.",
    price: 450000, // $4,500
    currency: "usd",
    billing: "one-time",
    delivery: "2 – 3 weeks",
    features: [
      "Single feature or focused build",
      "Frontend + backend, end-to-end",
      "TypeScript / Next.js or React Native",
      "Tests + CI setup",
      "Deployment to your infrastructure",
    ],
    includes: [
      "1 discovery call",
      "Async Slack access during sprint",
      "1 round of revisions",
      "Source code ownership — yours",
      "30 days of bug-fix support",
    ],
    cta: "Start a sprint",
  },
  {
    id: "growth",
    name: "Growth Build",
    tagline: "For MVPs and full product launches that need to ship in 8–12 weeks.",
    price: 1200000, // $12,000
    currency: "usd",
    billing: "one-time",
    popular: true,
    delivery: "8 – 12 weeks",
    features: [
      "Full product build from zero to launch",
      "Web app + mobile app (single codebase)",
      "AI features, if relevant — RAG, agents, evals",
      "Postgres schema + migrations",
      "Auth, billing, and analytics wired in",
      "Staging + production deployment",
    ],
    includes: [
      "Weekly working sessions",
      "Shared Linear board + Loom updates",
      "Unlimited revisions within scope",
      "Architecture documentation",
      "60 days of post-launch support",
      "Handoff playbook for your next hire",
    ],
    cta: "Scope a build",
  },
  {
    id: "partnership",
    name: "Partnership Retainer",
    tagline: "For teams that need a senior engineer embedded, not a vendor.",
    price: 1800000, // $18,000
    currency: "usd",
    billing: "one-time",
    delivery: "Monthly · 3-month minimum",
    features: [
      "Dedicated capacity, ~20 days / month",
      "Slack-embedded, not a black box",
      "AI engineering, full-stack, or mobile",
      "Code review for your in-house team",
      "Architecture decisions + technical hiring input",
    ],
    includes: [
      "Daily async + 2 sync calls / week",
      "Direct access — no account manager",
      "Roadmap co-ownership",
      "Quarterly business reviews",
      "First look at your hardest problems",
    ],
    cta: "Talk partnership",
  },
];

export const payFaqs = [
  {
    q: "Do you take milestone-based payments?",
    a: "Yes. Standard structure is 30% on signature, 40% at midpoint, 30% on delivery. For retainers it's monthly. All terms are in the SOW before any work starts.",
  },
  {
    q: "What if my project doesn't fit a package?",
    a: "Most don't, and that's fine. Packages are anchors, not rules. Reach out and we'll scope a custom engagement based on your actual problem.",
  },
  {
    q: "Do you handle invoicing and taxes?",
    a: "Yes. Stripe Checkout handles receipts automatically. For larger engagements I can issue a proper invoice and work with your finance team on NET-30 terms.",
  },
  {
    q: "What's your refund policy?",
    a: "If the first week of work isn't a fit, you pay only for time spent and walk away with everything I built. I don't do disappearing acts, and I don't hold code hostage.",
  },
  {
    q: "Can I pay in a currency other than USD?",
    a: "Stripe Checkout supports 135+ currencies. Reach out and I'll enable the one you need.",
  },
  {
    q: "Is my payment information secure?",
    a: "All payment data goes directly to Stripe. I never see, store, or transmit your card details. The site is PCI-compliant by default via Stripe Checkout.",
  },
];

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  shortRole: string;
  bio: string;
  longBio: string;
  image: string;
  skills: string[];
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  highlights: { label: string; value: string }[];
  featured?: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    id: "sadiq-khan",
    name: "Sadiq Khan",
    role: "Founder & Lead AI Engineer",
    shortRole: "Founder · AI",
    bio: "Full-stack engineer shipping AI-native products end-to-end. 5+ years turning ambiguous ideas into production systems.",
    longBio:
      "Sadiq started coding at 25 to build a Discord bot. That instinct — figure it out, ship it, iterate — has shaped everything since. He leads AI engineering and architecture decisions across all client engagements, with a focus on systems that scale past demos and produce measurable results.",
    image: "/team/sadiq.jpg",
    skills: [
      "Next.js",
      "TypeScript",
      "LLM / RAG",
      "AI Agents",
      "System Design",
    ],
    links: {
      github: "https://github.com/sadiqkhan",
      linkedin: "https://linkedin.com/in/sadiqkhan",
      twitter: "https://twitter.com/sadiqkhan",
      email: "mailto:hello@sadiqkhan.dev",
    },
    highlights: [
      { label: "Experience", value: "2+ years" },
      { label: "Focus", value: "AI · Web" },
      { label: "Status", value: "Available" },
    ],
    featured: true,
  },
  {
    id: "haseeb-khalid",
    name: "Haseeb Khalid",
    role: "Senior Full-Stack Engineer",
    shortRole: "Full-Stack",
    bio: "Backend-leaning full-stack engineer specializing in APIs, databases, and the unglamorous infrastructure that keeps apps alive at 3am.",
    longBio:
      "Haseeb designs and ships the data layers, APIs, and infrastructure that power everything we build. He's the person who turns 'it works on my machine' into 'it works at 50,000 requests per second.' Postgres tuning, queue design, and observability are where he does his best work.",
    image: "https://avatars.githubusercontent.com/u/101590284?v=4",
    skills: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "Redis",
      "AWS",
      "System Design",
    ],
    links: {
      github: "https://github.com/haseebkhalid",
      linkedin: "https://linkedin.com/in/haseebkhalid",
      email: "mailto:haseeb@sadiqkhan.dev",
    },
    highlights: [
      { label: "Experience", value: "4+ years" },
      { label: "Focus", value: "Backend · Infra" },
      { label: "Status", value: "Available" },
    ],
  },
  {
    id: "shariq",
    name: "Shariq",
    role: "Mobile & DevOps Engineer",
    shortRole: "Mobile · DevOps",
    bio: "React Native specialist and AWS-native DevOps engineer. Ships pixel-identical apps and the pipelines that deploy them.",
    longBio:
      "Shariq owns the mobile and infrastructure layers of every engagement. He builds React Native apps that survive field conditions — bad networks, dying batteries, OS background restrictions — and the CI/CD pipelines that ship them to the App Store without 3am pages. Docker, EAS, and Terraform are second nature.",
    image: "https://avatars.githubusercontent.com/u/210170860?v=4",
    skills: [
      "React Native",
      "Expo",
      "TypeScript",
      "Docker",
      "Terraform",
      "AWS",
    ],
    links: {
      github: "https://github.com/shariq",
      linkedin: "https://linkedin.com/in/shariq",
      email: "mailto:shariq@sadiqkhan.dev",
    },
    highlights: [
      { label: "Experience", value: "3+ years" },
      { label: "Focus", value: "Mobile · DevOps" },
      { label: "Status", value: "Available" },
    ],
  },
];
