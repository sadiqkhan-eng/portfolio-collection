# 🚀 Quick Start Guide

## Getting Started

Your premium AI developer portfolio is ready! Here's how to use it:

### 1. Start the Development Server

```bash
npm run dev
```

Visit **http://localhost:3000** to see your portfolio.

### 2. Customize Your Content

#### Update Personal Information

**Header & Footer** (`src/components/layout/`)
- Edit `header.tsx` - Update logo and navigation
- Edit `footer.tsx` - Update social links and contact info

**Home Page** (`src/components/sections/`)
- `hero-section.tsx` - Your headline, tagline, and tech stack
- `trust-section.tsx` - Technologies you work with
- `projects-section.tsx` - Featured projects preview
- `testimonials-section.tsx` - Client testimonials

**About Page** (`src/app/about/page.tsx`)
- Update your story in the Story Section
- Modify the journey timeline with your experience
- Update skills and tech stack
- Change achievement numbers

**Projects** (`src/app/projects/page.tsx`)
- Replace the `projects` array with your real projects
- Add project images to `/public/projects/`
- Update categories to match your work

**Services** (`src/app/services/page.tsx`)
- Modify the `services` array with your offerings
- Update pricing
- Customize features lists

**Contact** (`src/app/contact/page.tsx`)
- Update contact information (email, phone, location)
- Update social media links

### 3. Add Your Images

Create these folders in `/public/`:
```
public/
├── projects/
│   ├── project-1.jpg
│   ├── project-2.jpg
│   └── ...
└── avatar.jpg (your photo)
```

Replace placeholder emojis with real images using Next.js Image component:
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

### 4. Customize Colors & Styling

**Colors** (`src/app/globals.css`)
```css
:root {
  --primary: 263 70% 50%;      /* Purple */
  --secondary: 217 91% 60%;    /* Blue */
  --accent: 280 100% 70%;      /* Pink/Violet */
}
```

**Fonts** (`src/app/layout.tsx`)
- Currently using Geist Sans and Geist Mono
- Change to any Google Font

### 5. Deploy to Vercel

```bash
# 1. Push to GitHub
git add .
git commit -m "Initial portfolio setup"
git push origin main

# 2. Go to vercel.com
# 3. Import your repository
# 4. Deploy (it's automatic!)
```

Your portfolio will be live at `your-project.vercel.app`

## 📝 Content Checklist

Before going live, update:

- [ ] Personal name and branding
- [ ] Hero headline and tagline
- [ ] About page story
- [ ] Journey timeline with your experience
- [ ] Skills and tech stack
- [ ] Real project data (at least 3-6 projects)
- [ ] Project images
- [ ] Services and pricing
- [ ] Contact information
- [ ] Social media links
- [ ] Email address
- [ ] Resume/CV link
- [ ] Favicon (`src/app/favicon.ico`)

## 🎨 Customization Tips

### Change the Color Scheme
Edit HSL values in `globals.css` for a different look:
- **Green theme**: `--primary: 142 76% 36%`
- **Orange theme**: `--primary: 24 95% 53%`
- **Cyan theme**: `--primary: 189 94% 43%`

### Add More Animations
Use Framer Motion in any component:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

### Add New Pages
```bash
# Create a new page
mkdir src/app/blog
touch src/app/blog/page.tsx
```

## 🔧 Optional Enhancements

### Add Contact Form Email (Resend)
1. Sign up at resend.com
2. Add `RESEND_API_KEY` to `.env`
3. Create API route at `src/app/api/contact/route.ts`

### Add Database (NeonDB)
1. Sign up at neon.tech
2. Add `DATABASE_URL` to `.env`
3. Run: `npx prisma generate && npx prisma db push`
4. Create API routes for dynamic content

### Add Analytics
```bash
npm install @vercel/analytics
```

Add to `layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

// In body
<Analytics />
```

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- -p 3001
```

**Build errors?**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

**Styling not working?**
- Check Tailwind classes are correct
- Verify `globals.css` is imported in `layout.tsx`

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 🎉 You're Ready!

Your portfolio has:
- ✅ 6 complete pages
- ✅ Premium dark theme
- ✅ Smooth animations
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Production-ready build

Now customize it with your content and deploy!
