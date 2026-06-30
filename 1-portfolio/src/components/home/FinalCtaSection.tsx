// src/components/home/FinalCtaSection.tsx
import React from 'react';
import Link from 'next/link';
import AnimatedBackground from '../ui/AnimatedBackground'; // Import AnimatedBackground

const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative py-20 text-white text-center overflow-hidden">
      <AnimatedBackground variant="gradient" className="absolute inset-0 z-0 opacity-70" />
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Ready to Build Your Next Big Thing?
        </h2>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Let's collaborate on innovative web applications and AI solutions that drive impact and growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/contact" className="px-10 py-4 bg-white text-black text-lg font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            Book a Consultation
          </Link>
          <Link href="/contact" className="px-10 py-4 border border-white text-white text-lg font-semibold rounded-full shadow-lg hover:bg-white hover:text-black transition duration-300 transform hover:scale-105">
            Get in Touch
          </Link>
        </div>
        <p className="mt-8 text-lg text-green-300 font-semibold">
          Currently available for freelance projects and new partnerships.
        </p>
      </div>
    </section>
  );
};

export default FinalCtaSection;