import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "./providers";
import FramerMotionWrapper from "@/components/FramerMotionWrapper";
import AnimatedCursor from "@/components/ui/AnimatedCursor"; // Import AnimatedCursor
import ScrollProgressIndicator from "@/components/ui/ScrollProgressIndicator"; // Import ScrollProgressIndicator

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Doe | Senior Full-Stack Engineer & AI Developer",
  description: "Portfolio of a Senior Full-Stack Engineer specializing in AI-powered web experiences, modern SaaS products, and UI engineering. Built with Next.js, Tailwind CSS, and AI integrations.",
  openGraph: {
    title: "John Doe | Senior Full-Stack Engineer & AI Developer",
    description: "Portfolio of a Senior Full-Stack Engineer specializing in AI-powered web experiences, modern SaaS products, and UI engineering.",
    url: "https://your-portfolio-url.com", // Replace with actual URL
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.png", // Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "John Doe Portfolio",
      },
    ],
    type: "website",
    siteName: "John Doe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe | Senior Full-Stack Engineer & AI Developer",
    description: "Portfolio of a Senior Full-Stack Engineer specializing in AI-powered web experiences, modern SaaS products, and UI engineering.",
    images: ["https://your-portfolio-url.com/twitter-image.png"], // Replace with actual Twitter image URL
    site: "@yourtwitterhandle", // Replace with your Twitter handle
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark"> {/* Wrap with ThemeProvider */}
          <MainLayout>
            <Header />
            <FramerMotionWrapper> {/* Wrap children with FramerMotionWrapper */}
              {children}
            </FramerMotionWrapper>
            <Footer />
          </MainLayout>
        </ThemeProvider>
        <AnimatedCursor /> {/* Add AnimatedCursor here */}
        <ScrollProgressIndicator /> {/* Add ScrollProgressIndicator here */}
      </body>
    </html>
  );
}
