// src/app/projects/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SpotlightCard from '@/components/ui/SpotlightCard';

const projects = [
  {
    id: '1',
    title: 'AI-Powered Chatbot',
    category: 'AI Apps',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
    description: 'A sophisticated chatbot integrated with advanced AI models for natural language processing and dynamic responses.',
    imageUrl: '/placeholder-project.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
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
    featured: false,
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
    featured: true,
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
    featured: false,
  },
  {
    id: '5',
    title: 'AI Content Generator',
    category: 'AI Apps',
    techStack: ['Python', 'Flask', 'GPT-3', 'React'],
    description: 'An application that generates engaging content using advanced AI language models.',
    imageUrl: '/placeholder-project.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: '6',
    title: 'Mobile Recipe App',
    category: 'Full Stack Apps',
    techStack: ['React Native', 'Node.js', 'MongoDB'],
    description: 'A mobile application for discovering and managing recipes with a user-friendly interface.',
    imageUrl: '/placeholder-project.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

const ProjectsPage: React.FC = () => {
  // Placeholder for filtering and search logic
  const filteredProjects = projects; 

  return (
    <div className="container mx-auto px-4 py-16 text-white">
      <h1 className="text-5xl font-bold text-center mb-12 text-violet-400">My Projects</h1>

      {/* Placeholder for Filters and Search */}
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        <input
          type="text"
          placeholder="Search projects..."
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-electric-blue"
        />
        <select className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-electric-blue">
          <option value="">All Categories</option>
          <option value="AI Apps">AI Apps</option>
          <option value="SaaS">SaaS</option>
          <option value="E-Commerce">E-Commerce</option>
          {/* ... more categories */}
        </select>
        {/* Placeholder for tech stack tags */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
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

      {/* Placeholder for Pagination */}
      <div className="flex justify-center mt-12">
        <button className="px-4 py-2 mx-1 rounded-lg bg-gray-800 text-white hover:bg-violet-600">Prev</button>
        <button className="px-4 py-2 mx-1 rounded-lg bg-violet-600 text-white">1</button>
        <button className="px-4 py-2 mx-1 rounded-lg bg-gray-800 text-white hover:bg-violet-600">2</button>
        <button className="px-4 py-2 mx-1 rounded-lg bg-gray-800 text-white hover:bg-violet-600">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;