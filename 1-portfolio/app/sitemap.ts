export function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-portfolio-url.com/</loc> {/* Replace with your actual domain */}
    <lastmod>2024-05-11T00:00:00+00:00</lastmod> {/* Update with actual last modification date */}
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://your-portfolio-url.com/about</loc> {/* Replace with actual domain */}
    <lastmod>2024-05-11T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://your-portfolio-url.com/projects</loc> {/* Replace with actual domain */}
    <lastmod>2024-05-11T00:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://your-portfolio-url.com/services</loc> {/* Replace with actual domain */}
    <lastmod>2024-05-11T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://your-portfolio-url.com/contact</loc> {/* Replace with actual domain */}
    <lastmod>2024-05-11T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  {/* Add URLs for dynamic project pages here if they exist */}
</urlset>
`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
