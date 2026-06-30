// src/components/home/ProjectsShowcase.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SpotlightCard from '../ui/SpotlightCard'; // Import SpotlightCard

const projects = [
  {
    id: '1',
    title: 'AI-Powered Chatbot',
    category: 'AI Apps',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
    description: 'A sophisticated chatbot integrated with advanced AI models for natural language processing and dynamic responses.',
    imageUrl: '/placeholder-project.jpg', // Placeholder image
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'E-commerce Platform',
    category: 'E-Commerce',
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    description: 'A scalable e-commerce solution with secure payment processing and robust product management features.',
    imageUrl: '/placeholder-project.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '3',
    title: 'SaaS Dashboard',
    category: 'SaaS',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    description: 'An intuitive and visually appealing SaaS dashboard for analytics and user management.',
    imageUrl: '/placeholder-project.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '4',
    title: 'Automation System',
    category: 'Automation Systems',
    techStack: ['Node.js', 'Python', 'AWS Lambda'],
    description: 'Automated data processing and workflow management system to enhance operational efficiency.',
    imageUrl: '/placeholder-project.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const ProjectsShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">My Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <SpotlightCard
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden"
            >
              <div className="relative z-10"> {/* Ensure content is above the spotlight */}
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={500}
                  height={300}
                  objectFit="cover"
                  className="w-full h-48"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2 text-violet-300">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{project.category}</p>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link href={project.liveUrl} className="text-electric-blue hover:underline text-sm">
                      Live Demo
                    </Link>
                    <Link href={project.githubUrl} className="text-gray-400 hover:text-white text-sm">
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/projects" className="px-8 py-3 bg-violet-600 text-white text-lg rounded-full shadow-lg hover:bg-violet-700 transition duration-300 transform hover:scale-105">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;