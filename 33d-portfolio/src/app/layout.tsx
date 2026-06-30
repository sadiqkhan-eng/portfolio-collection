import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { CursorFollower } from "@/components/animations/cursor-follower";
import { ScrollProgress } from "@/components/animations/scroll-progress";
import { AuroraBackground } from "@/components/animations/aurora-background";
import { AnimatedGrid } from "@/components/animations/animated-grid";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sadiqkhan.dev"),
  title: {
    default: "Sadiq Khan | Full Stack Developer & AI Engineer",
    template: "%s | Sadiq Khan",
  },
  description:
    "Premium portfolio of Sadiq Khan — Full Stack Developer, AI Engineer, and Agentic AI Developer specializing in modern web applications, AI-powered systems, and scalable software solutions.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "Agentic AI",
    "Next.js Developer",
    "TypeScript",
    "React",
    "Node.js",
    "LangChain",
    "RAG Systems",
    "Sadiq Khan",
  ],
  authors: [{ name: "Sadiq Khan" }],
  creator: "Sadiq Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sadiqkhan.dev",
    siteName: "Sadiq Khan Portfolio",
    title: "Sadiq Khan | Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer, AI Engineer, and Agentic AI Developer specializing in modern web applications, AI-powered systems, and scalable software solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sadiq Khan - Full Stack Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadiq Khan | Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer, AI Engineer, and Agentic AI Developer specializing in modern web applications, AI-powered systems, and scalable software solutions.",
    images: ["/og-image.png"],
    creator: "@sadiqkhan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sadiq Khan",
              url: "https://sadiqkhan.dev",
              jobTitle: "Full Stack Developer & AI Engineer",
              knowsAbout: [
                "Full Stack Development",
                "Artificial Intelligence",
                "Agentic AI",
                "Next.js",
                "TypeScript",
                "React",
                "Node.js",
                "LangChain",
                "RAG Systems",
                "Machine Learning",
              ],
              sameAs: [
                "https://github.com/sadiqkhan",
                "https://linkedin.com/in/sadiqkhan",
                "https://x.com/sadiqkhan",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <LoadingScreen />
        <CursorFollower />
        <ScrollProgress />
        <AuroraBackground />
        <AnimatedGrid />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
