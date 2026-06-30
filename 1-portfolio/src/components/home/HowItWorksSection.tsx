// src/components/home/HowItWorksSection.tsx
import React, { useState } from 'react';
import SpotlightCard from '../ui/SpotlightCard'; // Import SpotlightCard

const steps = [
  {
    id: 'step-1',
    title: 'Discovery & Strategy',
    description: 'We begin with a deep dive into your vision, goals, and target audience to craft a tailored development strategy.',
  },
  {
    id: 'step-2',
    title: 'Development & Iteration',
    description: 'Bringing the strategy to life with agile development, continuous feedback, and iterative improvements.',
  },
  {
    id: 'step-3',
    title: 'Launch & Scale',
    description: 'Deploying your solution with meticulous care, followed by ongoing support and optimization for future growth.',
  },
];

const HowItWorksSection: React.FC = () => {
  const [openStep, setOpenStep] = useState<string | null>('step-1'); // Default open first step

  const toggleStep = (stepId: string) => {
    setOpenStep(openStep === stepId ? null : stepId);
  };

  return (
    <section className="py-16 bg-black text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">My Process: How It Works</h2>
        <ol className="relative border-l-2 border-gray-700 ml-4 md:ml-12 list-none p-0"> {/* Removed list-style, using custom styling */}
          {steps.map((item, index) => {
            const isExpanded = openStep === item.id;
            return (
              <li key={item.id} className="mb-12 ml-4 md:ml-12">
                <div className="absolute w-4 h-4 rounded-full bg-violet-600 -left-2 top-0 z-10 border-2 border-black"></div>
                <div className="flex flex-col items-start text-left relative z-10">
                <SpotlightCard className="w-full">
                  <button
                    id={`accordion-header-${item.id}`}
                    aria-expanded={isExpanded}
                    aria-controls={`accordion-panel-${item.id}`}
                    onClick={() => toggleStep(item.id)}
                    className="flex justify-between items-center w-full p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-600 text-white text-lg font-bold mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-electric-blue">{item.title}</h3>
                    </div>
                    <span className="text-2xl">{isExpanded ? '-' : '+'}</span>
                  </button>
                </SpotlightCard>
                  <div
                    id={`accordion-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`accordion-header-${item.id}`}
                    hidden={!isExpanded}
                    className={`ml-2 p-4 bg-gray-900 text-gray-300 border-t border-gray-700 rounded-b-lg w-full max-w-lg text-left transition-all duration-300 ease-in-out ${isExpanded ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}
                  >
                    <p>{item.description}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorksSection;