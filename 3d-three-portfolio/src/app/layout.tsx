import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChakraProviders from "@/components/providers/ChakraProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sadiq Khan | Modern Web Developer & Agentic AI Developer",
    template: "%s | Sadiq Khan",
  },
  description:
    "Portfolio of Sadiq Khan - Modern Web Developer, Agentic AI Developer, and Full-Stack Engineer. Specializing in Next.js, TypeScript, Python, FastAPI, and AI Systems.",
  keywords: [
    "Sadiq Khan",
    "Web Developer",
    "Agentic AI Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "AI Engineer",
    "TypeScript",
    "React",
    "Python",
    "FastAPI",
  ],
  authors: [{ name: "Sadiq Khan" }],
  creator: "Sadiq Khan",
  metadataBase: new URL("https://sadiqkhan.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sadiqkhan.dev",
    title: "Sadiq Khan | Modern Web Developer & Agentic AI Developer",
    description:
      "Portfolio of Sadiq Khan - Modern Web Developer, Agentic AI Developer, and Full-Stack Engineer.",
    siteName: "Sadiq Khan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sadiq Khan - Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadiq Khan | Modern Web Developer & Agentic AI Developer",
    description:
      "Portfolio of Sadiq Khan - Modern Web Developer, Agentic AI Developer, and Full-Stack Engineer.",
    images: ["/og-image.png"],
    creator: "@sadiq_khan_dev",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ChakraProviders>{children}</ChakraProviders>
      </body>
    </html>
  );
}
