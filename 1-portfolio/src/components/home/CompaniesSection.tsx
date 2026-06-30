// src/components/home/CompaniesSection.tsx
import React from 'react';
import Image from 'next/image';

const companies = [
  { name: 'Company A', logo: '/vercel.svg' },
  { name: 'Company B', logo: '/next.svg' },
  { name: 'Company C', logo: '/tailwind-logo.svg' }, // Assuming a tailwind logo exists or can be created/downloaded
  { name: 'Company D', logo: '/openai-logo.svg' }, // Assuming an openai logo exists or can be created/downloaded
];

const CompaniesSection: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Trusted by Leading Innovators</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {companies.map((company) => (
          <div key={company.name} className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            {/* Replace with actual company logos, adjust width/height as needed */}
            <Image
              src={company.logo}
              alt={company.name}
              width={120}
              height={40}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;