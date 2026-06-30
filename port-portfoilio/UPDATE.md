# Portfolio Customization Guide

This file contains all the updates you need to make to customize your portfolio website.

---

## 1. Personal Information Updates

### Update Your Name and Branding

**File: `src/components/layout/Navbar.tsx`**
- Line 48-52: Change "Your Name" to your actual name
```typescript
Your<span className="text-primary">Name</span>
// Change to:
Muhammad<span className="text-primary">Sadiq</span>
```

**File: `src/app/layout.tsx`**
- Line 18: Update title with your name
- Line 22: Update description with your actual bio
- Line 36: Update author name
- Line 37: Update creator name
- Line 42: Update OpenGraph title
- Line 48: Update Twitter creator handle

**File: `src/components/layout/Footer.tsx`**
- Line 42: Update copyright text with your name

---

## 2. Contact Information

### Update Email, Phone, and Social Links

**File: `src/components/layout/Footer.tsx`**
- Line 7-10: Update social media links
```typescript
{ name: 'GitHub', icon: LinkIcon, href: 'https://github.com/YOUR_USERNAME' },
{ name: 'LinkedIn', icon: LinkIcon, href: 'https://linkedin.com/in/YOUR_USERNAME' },
{ name: 'Twitter', icon: LinkIcon, href: 'https://twitter.com/YOUR_USERNAME' },
{ name: 'Email', icon: Mail, href: 'mailto:YOUR_EMAIL@example.com' },
```

**File: `src/components/sections/Contact.tsx`**
- Line 48-62: Update contact information
```typescript
{
  icon: Mail,
  label: 'Email',
  value: 'your.email@example.com',  // Update this
  href: 'mailto:your.email@example.com',  // Update this
},
{
  icon: Phone,
  label: 'WhatsApp',
  value: '+1 234 567 8900',  // Update this
  href: 'https://wa.me/1234567890',  // Update this (remove + and spaces)
},
```

- Line 95: Update WhatsApp link
- Line 97: Update WhatsApp button link

---

## 3. About Section Content

**File: `src/components/sections/About.tsx`**
- Line 10-13: Update highlights/specializations
- Line 30: Update name display
- Line 31: Update role/title
- Line 40-41: Update main heading
- Line 43-47: Update first paragraph about yourself
- Line 48-52: Update second paragraph about your expertise

---

## 4. Hero Section Content

**File: `src/components/sections/Hero.tsx`**
- Line 27-32: Update main headline
- Line 37-40: Update subtext/tagline
- Line 60-62: Update stats (projects completed, years experience)

---

## 5. Projects Data

**File: `src/lib/data/projects.ts`**

Update all 6 projects with your actual projects:
- `title`: Project name
- `description`: Short description
- `longDescription`: Detailed description
- `image`: Path to project image (add images to `/public/projects/`)
- `tags`: Project tags
- `techStack`: Technologies used
- `demoUrl`: Live demo link
- `githubUrl`: GitHub repository link
- `category`: 'web', 'mobile', 'ai', or 'saas'

**Example:**
```typescript
{
  id: '1',
  title: 'Your Project Name',
  description: 'Brief description',
  longDescription: 'Detailed description of what you built',
  image: '/projects/your-project.jpg',  // Add this image
  tags: ['Featured', 'Your Tag'],
  techStack: ['Next.js', 'TypeScript', 'etc'],
  demoUrl: 'https://your-demo.com',
  githubUrl: 'https://github.com/yourusername/project',
  featured: true,
  category: 'web',
}
```

---

## 6. Skills Data

**File: `src/lib/data/skills.ts`**

Update skills in all 4 categories:
- Frontend
- Backend / API
- AI & Tools
- Other

Add or remove skills based on your actual expertise. Update skill levels:
- `'expert'` - Blue badge
- `'advanced'` - Pink badge
- `'intermediate'` - Gray badge
- `'beginner'` - Default badge

---

## 7. Services Data

**File: `src/lib/data/services.ts`**

Update all 6 services you offer:
- `title`: Service name
- `description`: Service description
- `icon`: Icon name (Layout, Layers, MessageSquare, BarChart3, Copy, Plug)
- `features`: List of features included in this service

Add or remove services based on what you actually offer.

---

## 8. Experience Data

**File: `src/lib/data/experience.ts`**

Update your work experience:
- `role`: Your job title
- `company`: Company name
- `type`: 'freelance', 'contract', or 'full-time'
- `startDate`: Start date (format: 'YYYY-MM')
- `endDate`: End date or 'present'
- `description`: Job description
- `achievements`: List of achievements
- `technologies`: Technologies used

Add or remove experience entries as needed.

---

## 9. Testimonials Data

**File: `src/lib/data/testimonials.ts`**

Update client testimonials:
- `name`: Client name
- `role`: Client role
- `company`: Client company
- `content`: Testimonial text
- `avatar`: Path to avatar image (optional)
- `rating`: Rating (1-5)
- `platform`: 'upwork', 'fiverr', 'linkedin', or 'other'

Replace with real testimonials from your clients.

---

## 10. Images to Add

Create these folders and add images:

### Project Images
- Create folder: `/public/projects/`
- Add images for each project (recommended size: 1200x630px)
- Update image paths in `src/lib/data/projects.ts`

### Testimonial Avatars (Optional)
- Create folder: `/public/testimonials/`
- Add client avatar images
- Update avatar paths in `src/lib/data/testimonials.ts`

### Open Graph Image
- Create: `/public/og-image.jpg` (1200x630px)
- This will be used when sharing your portfolio on social media

### Favicon (Optional)
- Replace: `/public/favicon.ico` with your own favicon

---

## 11. SEO & Metadata

**File: `src/app/layout.tsx`**

Update metadata for better SEO:
- Line 18-20: Update title
- Line 22-23: Update description
- Line 25-35: Update keywords (add relevant keywords for your niche)
- Line 40-41: Update URL to your actual domain
- Line 42-43: Update OpenGraph title and description
- Line 48-52: Update Twitter card info

**Add metadataBase (Optional):**
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  // ... rest of metadata
}
```

---

## 12. Color Scheme (Optional)

**File: `src/app/globals.css`**

If you want to change the color scheme:
- Line 4-16: Light mode colors
- Line 19-31: Dark mode colors

Current colors:
- Primary: Indigo (99 102 241)
- Accent: Pink (236 72 153)

To change, update RGB values in CSS variables.

---

## 13. Domain and Deployment

### Before Deploying:

1. **Update all URLs** from `yourdomain.com` to your actual domain
2. **Update social media links** to your actual profiles
3. **Test all links** to ensure they work
4. **Add real project images**
5. **Test contact form** (currently just shows success message)

### Deploy to Vercel:

```bash
# Build the project first
npm run build

# Deploy to Vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

---

## 14. Optional Enhancements

### Add Real Contact Form Backend

The contact form currently just shows a success message. To make it functional:

1. **Option 1: Use Formspree**
   - Sign up at formspree.io
   - Update form action in `Contact.tsx`

2. **Option 2: Use EmailJS**
   - Sign up at emailjs.com
   - Add EmailJS SDK
   - Update form submission logic

3. **Option 3: Create API Route**
   - Create `/src/app/api/contact/route.ts`
   - Use Nodemailer or SendGrid to send emails

### Add Google Analytics

Add to `src/app/layout.tsx`:
```typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

---

## 15. Testing Checklist

Before going live, test:

- [ ] All navigation links work
- [ ] Theme toggle works and persists
- [ ] All external links open in new tabs
- [ ] Mobile menu works on small screens
- [ ] All sections display correctly on mobile
- [ ] Contact form validation works
- [ ] WhatsApp button opens WhatsApp
- [ ] Social media links are correct
- [ ] Project demo/code links work
- [ ] Images load properly
- [ ] No console errors
- [ ] Page loads fast (run Lighthouse audit)

---

## Quick Start Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## Support

If you need help with any updates, refer to:
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- Framer Motion docs: https://www.framer.com/motion/

---

**Last Updated:** May 2026
