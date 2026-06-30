// src/components/home/FeaturesSection.tsx
import React from 'react';
import SpotlightCard from '../ui/SpotlightCard'; // Import SpotlightCard

const features = [
  {
    title: 'Fast Development',
    description: 'Rapid prototyping and development cycles to bring your ideas to life quickly and efficiently.',
  },
  {
    title: 'AI Integrations',
    description: 'Seamlessly integrate cutting-edge AI functionalities into your applications for intelligent automation and enhanced user experiences.',
  },
  {
    title: 'Secure Architecture',
    description: 'Building robust and secure backend systems that protect your data and ensure reliable performance.',
  },
  {
    title: 'Mobile Responsive',
    description: 'Applications are designed to look and function flawlessly across all devices, from desktops to mobile phones.',
  },
  {
    title: 'Premium UI',
    description: 'Crafting stunning, intuitive, and engaging user interfaces that captivate your audience and elevate your brand.',
  },
  {
    title: 'Performance Optimized',
    description: 'Ensuring lightning-fast load times and smooth interactions for an unparalleled user experience.',
  },
  {
    title: 'SEO Friendly',
    description: 'Optimizing your web applications for search engines to increase visibility and drive organic traffic.',
  },
  {
    title: 'Scalable Backend',
    description: 'Designing and implementing scalable backend solutions that can grow with your business and handle increasing demands.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Key Features & Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <SpotlightCard key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col justify-between">
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 text-violet-300">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;