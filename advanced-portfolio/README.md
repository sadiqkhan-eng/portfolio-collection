# 🚀 Premium AI Developer Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern, premium portfolio website featuring AI-powered design, glassmorphism effects, and smooth animations. Built with Next.js 14, TypeScript, and Tailwind CSS.

[View Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🎨 Design & UI
- **Premium Dark Theme** - Custom color palette with purple, blue, and violet gradients
- **Glassmorphism Effects** - Modern glass-morphic cards with backdrop blur
- **Smooth Animations** - Framer Motion animations on scroll and interactions
- **Responsive Design** - Mobile-first approach, works on all devices
- **Interactive Elements** - Hover effects, spotlight effects, animated particles
- **Custom Components** - Reusable design system components

### 📄 Pages
- **Home** - Complete landing page with multiple sections
  - Hero with animated background
  - Trust/Technology section
  - Problem/Solution showcase
  - Features grid
  - Projects showcase
  - Testimonials
  - How It Works timeline
  - Call-to-action sections
- **About** - Developer story, journey timeline, skills, achievements
- **Projects** - Filterable gallery with search and category filters
- **Project Details** - Dynamic pages with gallery, tech stack, challenges, results
- **Services** - Service offerings with pricing and features
- **Contact** - Functional form with validation and success states

### 🚀 Technical Features
- **SEO Optimized** - Meta tags, OpenGraph, sitemap.xml, robots.txt
- **Type Safe** - Full TypeScript coverage
- **Performance** - Static generation, optimized builds
- **Accessibility** - Semantic HTML, ARIA labels
- **Modern Stack** - Next.js 14 App Router, React Server Components
- **Developer Experience** - ESLint, TypeScript, hot reload

### 🎯 Advanced Features
- Scroll progress indicator
- Theme toggle (dark/light mode)
- Page transitions
- Loading states
- Form validation
- Search functionality
- Category filtering
- Dynamic routing

---

## 🛠 Tech Stack

### Core
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[React 19](https://react.dev/)** - UI library

### Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **Custom CSS** - Glassmorphism, gradients, effects

### UI Components
- **[ShadCN UI](https://ui.shadcn.com/)** - Base component library
- **[Lucide Icons](https://lucide.dev/)** - Modern icon system
- **Custom Components** - Built from scratch

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Zod](https://zod.dev/)** - Schema validation

### Database (Optional)
- **[Prisma](https://www.prisma.io/)** - ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Database (NeonDB recommended)

### Authentication (Optional)
- **[Clerk](https://clerk.com/)** - User authentication

### Additional Tools
- **[Zustand](https://zustand-demo.pmnd.rs/)** - State management
- **[clsx](https://github.com/lukeed/clsx)** - Conditional classes
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn** or **pnpm**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/advanced-portfolio.git
   cd advanced-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
advanced-portfolio/
├── public/                 # Static files
│   ├── resume.pdf         # Your resume (add this)
│   └── projects/          # Project images (add these)
├── prisma/
│   └── schema.prisma      # Database schema
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── projects/      # Projects pages
│   │   │   ├── [slug]/    # Dynamic project details
│   │   │   └── page.tsx   # Projects listing
│   │   ├── services/      # Services page
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   ├── globals.css    # Global styles
│   │   ├── robots.ts      # SEO robots
│   │   └── sitemap.ts     # SEO sitemap
│   ├── components/
│   │   ├── layout/        # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── section.tsx
│   │   │   └── container.tsx
│   │   ├── sections/      # Home page sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── features-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   └── ...
│   │   ├── shared/        # Shared components
│   │   │   ├── glass-card.tsx
│   │   │   ├── gradient-text.tsx
│   │   │   ├── animated-button.tsx
│   │   │   ├── particles.tsx
│   │   │   └── ...
│   │   └── ui/            # Base UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── textarea.tsx
│   └── lib/
│       └── utils.ts       # Utility functions
├── .env.example           # Environment variables template
├── .gitignore
├── next.config.ts         # Next.js configuration
├── package.json
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── PROJECT_SUMMARY.md     # Detailed project summary
└── README.md              # This file
```

---

## 🎨 Customization

### 1. Personal Information

#### Update Hero Section
**File:** `src/components/sections/hero-section.tsx`

```tsx
// Change your headline
<h1>Building Modern AI-Powered Web Experiences</h1>

// Update your description
<p>Full-stack developer specializing in...</p>

// Update tech stack pills
{["Next.js", "TypeScript", "AI/ML", ...].map(...)}
```

#### Update About Page
**File:** `src/app/about/page.tsx`

```tsx
// Update your story
const journey = [
  {
    year: "2024",
    title: "Your Title",
    description: "Your experience...",
  },
  // Add more timeline items
];

// Update skills
const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", ...],
  },
  // Add more skill categories
];
```

### 2. Projects

**File:** `src/app/projects/page.tsx`

```tsx
const projects = [
  {
    id: 1,
    title: "Your Project",
    slug: "your-project",
    description: "Project description",
    category: "SaaS",
    techStack: ["Next.js", "TypeScript"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",
  },
  // Add more projects
];
```

### 3. Services & Pricing

**File:** `src/app/services/page.tsx`

```tsx
const services = [
  {
    title: "Your Service",
    description: "Service description",
    features: ["Feature 1", "Feature 2"],
    pricing: "Starting at $X,XXX",
  },
  // Add more services
];
```

### 4. Contact Information

**File:** `src/app/contact/page.tsx`

```tsx
// Update email
<a href="mailto:your@email.com">your@email.com</a>

// Update phone
<a href="tel:+1234567890">+1 (234) 567-890</a>

// Update location
<p>Your City, Country</p>
```

### 5. Colors & Theme

**File:** `src/app/globals.css`

```css
:root {
  --primary: 263 70% 50%;      /* Purple - change HSL values */
  --secondary: 217 91% 60%;    /* Blue */
  --accent: 280 100% 70%;      /* Pink/Violet */
}
```

**Popular color schemes:**
- **Green:** `--primary: 142 76% 36%`
- **Orange:** `--primary: 24 95% 53%`
- **Cyan:** `--primary: 189 94% 43%`
- **Red:** `--primary: 0 84% 60%`

### 6. Add Your Resume

1. Add your resume PDF to `/public/resume.pdf`
2. The download button will automatically work

### 7. Add Project Images

1. Create folder: `/public/projects/`
2. Add images: `project-1.jpg`, `project-2.jpg`, etc.
3. Update image paths in project data
4. Use Next.js Image component:

```tsx
import Image from "next/image";

<Image 
  src="/projects/project-1.jpg"
  alt="Project name"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

### 8. Social Media Links

**File:** `src/components/layout/footer.tsx`

```tsx
const navigation = {
  social: [
    { name: "GitHub", href: "https://github.com/yourusername" },
    { name: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
    { name: "Twitter", href: "https://twitter.com/yourusername" },
    { name: "Email", href: "mailto:your@email.com" },
  ],
};
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Done!** Your site is live at `your-project.vercel.app`

### Deploy to Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `.next`
3. **Deploy**

### Deploy to Other Platforms

Build the project:
```bash
npm run build
```

The output will be in the `.next` folder. Follow your hosting provider's instructions for deploying Next.js applications.

---

## ⚡ Performance

### Lighthouse Scores (Target)

- **Performance:** 95+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

### Optimization Features

- ✅ Static Site Generation (SSG)
- ✅ Image optimization with Next.js Image
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Font optimization
- ✅ CSS optimization
- ✅ Minification
- ✅ Compression

### Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress images before uploading
   - Use appropriate sizes

2. **Lazy Load Components**
   ```tsx
   import dynamic from 'next/dynamic';
   
   const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
     loading: () => <p>Loading...</p>
   });
   ```

3. **Add Analytics**
   ```bash
   npm install @vercel/analytics
   ```

---

## 🗄️ Database Setup (Optional)

### Using NeonDB (Recommended)

1. **Sign up at [neon.tech](https://neon.tech)**

2. **Create a new project**

3. **Copy connection string**

4. **Add to `.env`**
   ```env
   DATABASE_URL="postgresql://user:password@host/database"
   ```

5. **Generate Prisma Client**
   ```bash
   npx prisma generate
   ```

6. **Push schema to database**
   ```bash
   npx prisma db push
   ```

7. **Open Prisma Studio (optional)**
   ```bash
   npx prisma studio
   ```

### Database Features

The Prisma schema includes models for:
- Projects
- Testimonials
- Contact submissions
- Newsletter subscribers
- Admin users

---

## 🔐 Authentication Setup (Optional)

### Using Clerk

1. **Sign up at [clerk.com](https://clerk.com)**

2. **Create application**

3. **Add API keys to `.env`**
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   ```

4. **Wrap app with ClerkProvider**
   ```tsx
   import { ClerkProvider } from '@clerk/nextjs';
   
   export default function RootLayout({ children }) {
     return (
       <ClerkProvider>
         {children}
       </ClerkProvider>
     );
   }
   ```

---

## 📧 Contact Form Setup (Optional)

### Using Resend

1. **Sign up at [resend.com](https://resend.com)**

2. **Get API key**

3. **Add to `.env`**
   ```env
   RESEND_API_KEY=re_...
   ```

4. **Create API route**
   ```tsx
   // src/app/api/contact/route.ts
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   export async function POST(request: Request) {
     const { name, email, message } = await request.json();
     
     await resend.emails.send({
       from: 'onboarding@resend.dev',
       to: 'your@email.com',
       subject: 'New Contact Form Submission',
       html: `<p>From: ${name} (${email})</p><p>${message}</p>`
     });
     
     return Response.json({ success: true });
   }
   ```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon system
- [ShadCN UI](https://ui.shadcn.com/) - Component library

---

## 📞 Support

If you have any questions or need help, feel free to:

- Open an issue
- Contact via email
- Connect on social media

---

## 🌟 Show Your Support

If you found this project helpful, please give it a ⭐️!

---

<div align="center">

**Built with ❤️ using Next.js and modern web technologies**

[⬆ Back to Top](#-premium-ai-developer-portfolio)

</div>
