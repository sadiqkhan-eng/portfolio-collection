import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Modern Web & AI Developer',
    company: 'Freelance',
    type: 'freelance',
    startDate: '2023-01',
    endDate: 'present',
    description: 'Building modern web applications and AI-powered solutions for international clients on platforms like Upwork, Fiverr, and LinkedIn.',
    achievements: [
      'Delivered 30+ projects with 5-star ratings',
      'Maintained 100% client satisfaction rate',
      'Specialized in Next.js and AI integration',
      'Built SaaS dashboards for multiple startups',
      'Developed AI chatbots for customer service',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Node.js'],
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'Various Clients',
    type: 'contract',
    startDate: '2022-06',
    endDate: '2022-12',
    description: 'Worked on multiple contract projects focusing on web development and UI/UX design.',
    achievements: [
      'Developed e-commerce platforms',
      'Created responsive landing pages',
      'Implemented payment integrations',
      'Optimized website performance',
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'WordPress', 'Stripe'],
  },
  {
    id: '3',
    role: 'Frontend Developer',
    company: 'Startup Projects',
    type: 'contract',
    startDate: '2021-09',
    endDate: '2022-05',
    description: 'Contributed to early-stage startup projects, building MVPs and prototypes.',
    achievements: [
      'Built MVP for 3 different startups',
      'Implemented modern UI designs',
      'Collaborated with remote teams',
      'Rapid prototyping and iteration',
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'Figma', 'Git'],
  },
];
