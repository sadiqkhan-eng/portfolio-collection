import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/shared/scroll-progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevPortfolio - Modern AI-Powered Web Development",
  description: "Full-stack developer specializing in AI integrations, SaaS products, and premium UI engineering. Building modern web experiences that drive results.",
  keywords: ["web development", "AI integration", "SaaS", "full-stack developer", "Next.js", "React"],
  authors: [{ name: "DevPortfolio" }],
  openGraph: {
    title: "DevPortfolio - Modern AI-Powered Web Development",
    description: "Full-stack developer specializing in AI integrations, SaaS products, and premium UI engineering.",
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <ScrollProgress />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
