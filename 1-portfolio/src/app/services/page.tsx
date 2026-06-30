// src/app/services/page.tsx
import React from 'react';

const services = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end development of web applications, covering both frontend and backend, ensuring seamless functionality and robust performance.',
    icon: '💻', // Placeholder for a relevant icon
  },
  {
    title: 'AI Integrations',
    description: 'Integrating cutting-edge Artificial Intelligence capabilities into your applications, from machine learning models to natural language processing.',
    icon: '🧠',
  },
  {
    title: 'SaaS Development',
    description: 'Building scalable and secure Software-as-a-Service platforms, designed for recurring revenue and efficient user management.',
    icon: '☁️',
  },
  {
    title: 'UI/UX Engineering',
    description: 'Crafting intuitive, engaging, and visually stunning user interfaces (UI) and user experiences (UX) that captivate your audience.',
    icon: '🎨',
  },
  {
    title: 'Automation Systems',
    description: 'Developing custom automation solutions to streamline business processes, reduce manual effort, and improve operational efficiency.',
    icon: '⚙️',
  },
  {
    title: 'API Integrations',
    description: 'Connecting your applications with third-party services and APIs to enhance functionality and data exchange.',
    icon: '🔌',
  },
  {
    title: 'Dashboard Development',
    description: 'Creating interactive and data-rich dashboards that provide valuable insights and a clear overview of your key metrics.',
    icon: '📊',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-white">
      <h1 className="text-5xl font-bold text-center mb-12 text-violet-400">My Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-electric-blue/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-3 text-violet-300">{service.title}</h2>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-6 text-electric-blue">Ready to Start Your Project?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Let's discuss how my expertise can bring your vision to life.
        </p>
        <Link href="/contact" className="px-8 py-3 bg-violet-600 text-white text-lg rounded-full shadow-lg hover:bg-violet-700 transition duration-300 transform hover:scale-105">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage;