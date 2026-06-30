// src/components/home/HeroSection.tsx
import React from 'react';
import Link from 'next/link';
import MagneticButton from '../ui/MagneticButton'; // Import MagneticButton
import AnimatedText from '../ui/AnimatedText'; // Import AnimatedText
import AnimatedBackground from '../ui/AnimatedBackground'; // Import AnimatedBackground
import Image from 'next/image'; // Import Image from next/image

const HeroSection: React.FC = () => {
  const headingText = "Building Modern AI-Powered Web Experiences";
  const subHeadingText = "Senior Full-Stack Engineer, Creative UI/UX Designer, Brand Strategist, and Performance Optimization Expert.";

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <AnimatedBackground variant="grid" className="absolute inset-0 z-0" />
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <AnimatedText
          text={headingText}
          el="h1"
          className="text-5xl md:text-7xl font-bold leading-tight mb-4 text-white drop-shadow-lg"
          animation={{ staggerChildren: 0.03, delayChildren: 0.5 }}
        />
        <AnimatedText
          text={subHeadingText}
          el="p"
          className="text-xl md:text-2xl text-gray-300 mb-8"
          animation={{ staggerChildren: 0.02, delayChildren: 1.0 }}
        />
        {/* Placeholder for Developer Image or Animated AI Illustration */}
        <div className="my-8">
          <Image
            src="/placeholder-ai-illustration.svg" // Replace with actual AI illustration or developer image
            alt="AI Illustration"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <MagneticButton>
            <Link href="/projects" className="px-8 py-3 bg-violet-600 text-white text-lg rounded-full shadow-lg hover:bg-violet-700 transition duration-300 transform hover:scale-105">
              View Projects
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link href="/contact" className="px-8 py-3 border border-violet-600 text-violet-300 text-lg rounded-full shadow-lg hover:bg-violet-600 hover:text-white transition duration-300 transform hover:scale-105">
              Book a Call
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link href="/resume" className="px-8 py-3 border border-gray-600 text-gray-300 text-lg rounded-full shadow-lg hover:bg-gray-700 hover:text-white transition duration-300 transform hover:scale-105">
              Download Resume
            </Link>
          </MagneticButton>
        </div>

        {/* Social Proof & Availability Badge - Placeholder */}
        <div className="mt-8 text-gray-400">
          <p className="mb-2">Trusted by innovative startups and established enterprises.</p>
          <span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full">Available for Freelance</span>
        </div>

        {/* Tech Stack Pills - Placeholder */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">Next.js 14</span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">TypeScript</span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">Tailwind CSS</span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">AI/ML</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;