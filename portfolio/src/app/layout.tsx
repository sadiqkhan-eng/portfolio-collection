import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Showcase",
  description:
    "A showcase of projects built with modern technologies including Next.js, React, TypeScript, and more.",
  keywords: [
    "portfolio",
    "projects",
    "web development",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Developer" }],
  openGraph: {
    title: "Portfolio Showcase",
    description:
      "A showcase of projects built with modern technologies including Next.js, React, TypeScript, and more.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
