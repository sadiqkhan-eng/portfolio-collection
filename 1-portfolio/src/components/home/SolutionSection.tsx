// src/components/home/SolutionSection.tsx
import React from 'react';
import SpotlightCard from '../ui/SpotlightCard'; // Import SpotlightCard

const solutions = [
  {
    title: 'Scalable & High-Performance Web Apps',
    description: 'Developing modern, fast, and responsive web applications that scale with your business needs and provide an exceptional user experience.',
  },
  {
    title: 'Seamless AI Integrations',
    description: 'Integrating cutting-edge AI technologies to automate workflows, provide intelligent features, and unlock new possibilities for your products.',
  },
  {
    title: 'Premium UI/UX Engineering',
    description: 'Crafting visually stunning and intuitive user interfaces with a focus on user experience, ensuring engagement and strong brand representation.',
  },
  {
    title: 'Robust Automation Systems',
    description: 'Building efficient automation systems to streamline operations, reduce manual effort, and improve overall productivity.',
  },
];

const SolutionSection: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">My Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <SpotlightCard key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="relative z-10"> {/* Ensure content is above the spotlight */}
                <h3 className="text-xl font-semibold mb-3 text-electric-blue">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;