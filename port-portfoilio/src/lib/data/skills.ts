import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Next.js', level: 'expert' },
      { name: 'React', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'Tailwind CSS', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'HTML5', level: 'expert' },
      { name: 'CSS3', level: 'expert' },
      { name: 'Responsive Design', level: 'expert' },
    ],
  },
  {
    category: 'Backend / API',
    skills: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'REST APIs', level: 'advanced' },
      { name: 'Database Integration', level: 'advanced' },
      { name: 'API Development', level: 'advanced' },
      { name: 'Authentication', level: 'advanced' },
    ],
  },
  {
    category: 'AI & Tools',
    skills: [
      { name: 'AI Chatbot Integration', level: 'advanced' },
      { name: 'OpenAI API', level: 'advanced' },
      { name: 'Automation Tools', level: 'advanced' },
      { name: 'AI-Powered Apps', level: 'advanced' },
    ],
  },
  {
    category: 'Other',
    skills: [
      { name: 'UI/UX Design', level: 'advanced' },
      { name: 'Git & GitHub', level: 'expert' },
      { name: 'WordPress', level: 'intermediate' },
      { name: 'Vercel Deployment', level: 'expert' },
      { name: 'Performance Optimization', level: 'advanced' },
    ],
  },
];
