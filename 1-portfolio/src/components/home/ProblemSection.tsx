// src/components/home/ProblemSection.tsx
import React from 'react';
import SpotlightCard from '../ui/SpotlightCard'; // Import SpotlightCard

const problems = [
  {
    title: 'Outdated Websites & Slow Performance',
    description: 'Many businesses struggle with legacy websites that are slow, not mobile-friendly, and fail to engage modern users.',
  },
  {
    title: 'Poor UI/UX & Weak Branding',
    description: 'Lackluster user interfaces and inconsistent branding lead to high bounce rates and a poor first impression.',
  },
  {
    title: 'No AI Integrations & Missed Opportunities',
    description: 'Businesses are missing out on the power of AI to automate tasks, personalize experiences, and gain valuable insights.',
  },
  {
    title: 'Unscalable Systems & High Maintenance Costs',
    description: 'Inefficient architectures and technical debt result in systems that are costly to maintain and cannot grow with the business.',
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Facing These Challenges?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <SpotlightCard key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="relative z-10"> {/* Ensure content is above the spotlight */}
                <h3 className="text-xl font-semibold mb-3 text-violet-300">{problem.title}</h3>
                <p className="text-gray-400">{problem.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;