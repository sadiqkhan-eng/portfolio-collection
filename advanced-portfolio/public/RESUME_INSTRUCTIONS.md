# Add Your Resume Here

Place your resume PDF file in this directory as `resume.pdf`.

The download button on the homepage will automatically link to `/resume.pdf`.

## How to Add Your Resume

1. Export your resume as a PDF
2. Name it `resume.pdf`
3. Replace this file with your actual resume
4. The download button will work automatically

## Alternative: External Link

If you prefer to host your resume elsewhere (Google Drive, Dropbox, etc.):

1. Open `src/components/sections/hero-section.tsx`
2. Find the Download Resume button
3. Change the href to your external link:

```tsx
<a href="https://your-resume-link.com" target="_blank" rel="noopener noreferrer">
  <AnimatedButton variant="ghost" size="xl">
    <Download className="w-5 h-5" />
    Download Resume
  </AnimatedButton>
</a>
```
