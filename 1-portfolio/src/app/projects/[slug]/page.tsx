// src/app/projects/[slug]/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Dummy project data for demonstration
const dummyProjects = [
  {
    id: 'ai-chatbot',
    title: 'AI-Powered Chatbot Platform',
    category: 'AI Apps',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Node.js', 'PostgreSQL'],
    description: 'A sophisticated chatbot integrated with advanced AI models for natural language processing and dynamic responses, designed to enhance customer service and automate interactions.',
    imageUrl: '/placeholder-project.jpg', // Placeholder image
    gallery: [
      '/placeholder-gallery-1.jpg',
      '/placeholder-gallery-2.jpg',
      '/placeholder-gallery-3.hpg',
    ],
    problemSolved: 'Businesses struggled with slow customer support and repetitive queries. This chatbot provides instant, accurate responses, freeing up human agents for complex issues.',
    architecture: 'Built with Next.js for a performant frontend, Node.js/Express backend, and a PostgreSQL database. Leverages OpenAI API for natural language understanding and generation.',
    features: [
      'Natural Language Understanding (NLU)',
      'Dynamic Response Generation',
      'Integration with CRM systems',
      'Scalable Microservices Architecture',
      'Real-time Analytics Dashboard',
    ],
    challenges: 'Integrating various AI models and ensuring low-latency responses were key challenges, overcome by optimizing API calls and employing caching strategies.',
    results: 'Reduced customer support response time by 70%, increased customer satisfaction by 25%, and saved operational costs by automating routine inquiries.',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'e-commerce-platform',
    title: 'Modern E-commerce Solution',
    category: 'E-Commerce',
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Cloudinary'],
    description: 'A robust and scalable e-commerce platform designed for high traffic, offering a seamless shopping experience with secure payment processing and efficient product management.',
    imageUrl: '/placeholder-project.jpg',
    gallery: [
      '/placeholder-gallery-ecom1.jpg',
      '/placeholder-gallery-ecom2.jpg',
    ],
    problemSolved: 'Small businesses needed an affordable yet powerful e-commerce presence with easy product management and secure transactions. This platform provides an all-in-one solution.',
    architecture: 'Frontend developed with Next.js for SEO and performance, a GraphQL API powered by Node.js, and a PostgreSQL database. Payment processing handled by Stripe, and image assets by Cloudinary.',
    features: [
      'Product Catalog Management',
      'Secure Checkout with Stripe',
      'User Authentication & Authorization',
      'Order Tracking & History',
      'Responsive Design',
    ],
    challenges: 'Ensuring PCI compliance and optimizing image delivery for global users were critical. Solved by integrating Stripe Elements and Cloudinary CDN.',
    results: 'Enabled small businesses to launch online stores quickly, increased sales by an average of 30% for early adopters, and provided a secure shopping environment.',
    liveUrl: '#',
    githubUrl: '#',
  },
];

interface ProjectDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({ params }) => {
  const { slug } = params;
  const project = dummyProjects.find((p) => p.id === slug);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-lg text-gray-400">The project you are looking for does not exist.</p>
        <Link href="/projects" className="mt-8 inline-block px-8 py-3 bg-violet-600 text-white text-lg rounded-full hover:bg-violet-700 transition duration-300">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 text-white">
      <h1 className="text-5xl font-bold text-center mb-12 text-violet-400">{project.title}</h1>

      {/* Gallery */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-electric-blue">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.gallery.map((img, index) => (
            <div key={index} className="relative w-full h-60 rounded-lg overflow-hidden shadow-lg border border-gray-700">
              <Image
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-electric-blue">Overview</h2>
        <p className="text-lg leading-relaxed text-gray-300">{project.description}</p>
      </section>

      {/* Problem Solved */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-electric-blue">Problem Solved</h2>
        <p className="text-lg leading-relaxed text-gray-300">{project.problemSolved}</p>
      </section>

      {/* Architecture */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-electric-blue">Architecture</h2>
        <p className="text-lg leading-relaxed text-gray-300">{project.architecture}</p>
      </section>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-electric-blue">Key Features</h2>
        <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Challenges */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-electric-blue">Challenges & Solutions</h2>
        <p className="text-lg leading-relaxed text-gray-300">{project.challenges}</p>
      </section>

      {/* Results */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-electric-blue">Results & Impact</h2>
        <p className="text-lg leading-relaxed text-gray-300">{project.results}</p>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-electric-blue">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech, index) => (
            <span key={index} className="px-4 py-2 bg-gray-700 rounded-full text-md text-gray-200">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mt-12">
        <Link href={project.liveUrl} className="px-8 py-3 bg-violet-600 text-white text-lg rounded-full shadow-lg hover:bg-violet-700 transition duration-300 transform hover:scale-105">
          Live Demo
        </Link>
        <Link href={project.githubUrl} className="px-8 py-3 border border-gray-600 text-gray-300 text-lg rounded-full shadow-lg hover:bg-gray-700 hover:text-white transition duration-300 transform hover:scale-105">
          GitHub Repo
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;