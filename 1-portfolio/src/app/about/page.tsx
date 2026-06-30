// src/app/about/page.tsx
import React from 'react';
import Image from 'next/image';
import SpotlightCard from '@/components/ui/SpotlightCard'; // Import SpotlightCard

const AboutPage: React.FC = () => {
  const skills = [
    'Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Node.js', 'Express.js',
    'Python', 'FastAPI', 'Machine Learning', 'AI/MLOps', 'AWS', 'Docker',
    'Kubernetes', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs', 'Framer Motion'
  ];

  const experience = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'InnovateTech Solutions',
      years: '2022 - Present',
      description: 'Leading the development of scalable web applications and integrating advanced AI solutions for various clients.',
    },
    {
      title: 'UI/UX Engineer',
      company: 'Creative Design Studio',
      years: '2019 - 2022',
      description: 'Specialized in crafting intuitive and visually appealing user interfaces for diverse digital products.',
    },
  ];

  const certifications = [
    { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: 2023 },
    { name: 'Google Cloud Professional Machine Learning Engineer', issuer: 'Google Cloud', year: 2024 },
  ];

  const timeline = [
    { year: 2018, event: 'Graduated with a B.Sc. in Computer Science' },
    { year: 2019, event: 'Started professional career as a UI/UX Engineer' },
    { year: 2022, event: 'Transitioned to Senior Full-Stack Developer, focusing on AI-powered solutions' },
    { year: 2024, event: 'Deep dive into Agentic AI Applications and MLOps' },
  ];

  return (
    <div className="container mx-auto px-4 py-16 text-white">
      <h1 className="text-5xl font-bold text-center mb-12 text-violet-400">About Me</h1>

      {/* Developer Story */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-electric-blue">My Story</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/placeholder-avatar.png" // Placeholder image for developer
              alt="Developer Profile"
              width={300}
              height={300}
              className="rounded-full mx-auto border-4 border-violet-600 shadow-lg"
            />
          </div>
          <div className="md:w-2/3 text-lg leading-relaxed">
            <p className="mb-4">
              I am a passionate Senior Full-Stack Engineer with a knack for crafting robust, scalable, and visually stunning web applications. My journey in tech began with a fascination for user interfaces, evolving into a comprehensive expertise in both front-end aesthetics and back-end logic.
            </p>
            <p className="mb-4">
              In recent years, my focus has shifted towards the exciting realm of Agentic AI Applications and AI Automations. I thrive on building intelligent systems that not only solve complex problems but also enhance user experiences through innovative machine learning integrations.
            </p>
            <p>
              My goal is to blend cutting-edge technology with intuitive design, creating products that are not just functional but truly delightful to use. I am constantly exploring new frameworks and methodologies to stay at the forefront of modern web development.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-electric-blue">My Journey</h2>
        <div className="relative border-l-2 border-gray-700 ml-4 md:ml-12">
          {timeline.map((item, index) => (
            <div key={index} className="mb-8 flex items-center w-full">
              <div className="absolute w-4 h-4 rounded-full bg-violet-600 -left-2 z-10 border-2 border-black"></div>
              <div className="ml-8 p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700 w-full md:w-2/3">
                <p className="font-semibold text-xl text-violet-300">{item.year}</p>
                <p className="text-gray-300">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Tech Stack */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-electric-blue">Skills & Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="px-5 py-2 bg-gray-800 rounded-full text-lg font-medium text-gray-200 border border-gray-700 shadow-md hover:bg-violet-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-electric-blue">Experience</h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <SpotlightCard key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="relative z-10"> {/* Ensure content is above the spotlight */}
                <h3 className="text-2xl font-semibold text-violet-300">{job.title}</h3>
                <p className="text-gray-400 text-lg mb-2">{job.company} | {job.years}</p>
                <p className="text-gray-300">{job.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10 text-electric-blue">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <SpotlightCard key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <div className="relative z-10"> {/* Ensure content is above the spotlight */}
                <h3 className="text-xl font-semibold text-violet-300">{cert.name}</h3>
                <p className="text-gray-400">{cert.issuer}, {cert.year}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;