import { Db, Collection, ObjectId } from 'mongodb';
import { Project } from '@/types/project';

const COLLECTION_NAME = 'projects';

export interface ProjectDocument extends Omit<Project, 'id'> {
  _id: ObjectId;
}

export function projectToDocument(project: Omit<Project, 'id'>): ProjectDocument {
  return {
    ...project,
    _id: new ObjectId(),
  };
}

export function documentToProject(doc: ProjectDocument): Project {
  return {
    id: doc._id.toHexString(),
    title: doc.title,
    shortDescription: doc.shortDescription,
    fullDescription: doc.fullDescription,
    techStack: doc.techStack,
    liveUrl: doc.liveUrl,
    githubUrl: doc.githubUrl,
    images: doc.images,
    features: doc.features,
    category: doc.category,
    featured: doc.featured,
    color: doc.color,
  };
}

export async function getProjectsCollection(db: Db): Promise<Collection<ProjectDocument>> {
  return db.collection<ProjectDocument>(COLLECTION_NAME);
}

export async function seedProjects(db: Db): Promise<void> {
  const collection = await getProjectsCollection(db);
  const count = await collection.countDocuments();
  
  if (count > 0) return;

  const sampleProjects: Omit<Project, 'id'>[] = [
    {
      title: 'E-Commerce Platform',
      shortDescription: 'Full-stack e-commerce solution with payment integration',
      fullDescription: 'A comprehensive e-commerce platform built with Next.js 14, featuring user authentication, product management, shopping cart, Stripe payment integration, order tracking, and admin dashboard. Includes real-time inventory updates and email notifications.',
      techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Stripe', 'NextAuth.js'],
      liveUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/example/ecommerce-platform',
      images: [
        '/images/ecommerce-1.jpg',
        '/images/ecommerce-2.jpg',
        '/images/ecommerce-3.jpg',
      ],
      features: [
        'User authentication with NextAuth.js',
        'Product catalog with categories and search',
        'Shopping cart with persistent storage',
        'Stripe payment integration',
        'Order management and tracking',
        'Admin dashboard with analytics',
        'Email notifications for orders',
        'Responsive design for all devices',
      ],
      category: 'Full Stack',
      featured: true,
      color: '#3B82F6',
    },
    {
      title: 'Task Management App',
      shortDescription: 'Collaborative task manager with real-time updates',
      fullDescription: 'A modern task management application inspired by Linear and Notion. Features include project boards, sprint planning, real-time collaboration, drag-and-drop task management, comments, mentions, and comprehensive keyboard shortcuts.',
      techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Socket.io', 'Node.js', 'Express', 'MongoDB', 'Zustand'],
      liveUrl: 'https://demo-taskmanager.example.com',
      githubUrl: 'https://github.com/example/task-manager',
      images: [
        '/images/taskmanager-1.jpg',
        '/images/taskmanager-2.jpg',
        '/images/taskmanager-3.jpg',
      ],
      features: [
        'Kanban boards with drag-and-drop',
        'Real-time collaboration via WebSockets',
        'Sprint planning and burndown charts',
        'Comments, mentions, and notifications',
        'Keyboard shortcuts for power users',
        'Dark/light theme support',
        'Project templates and automation',
        'Mobile-responsive design',
      ],
      category: 'SaaS',
      featured: true,
      color: '#10B981',
    },
    {
      title: 'Weather Dashboard',
      shortDescription: 'Beautiful weather app with forecasts and maps',
      fullDescription: 'A visually stunning weather dashboard providing current conditions, 7-day forecasts, interactive maps, historical data, and severe weather alerts. Built with focus on performance and accessibility.',
      techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'OpenWeatherMap API', 'Mapbox GL'],
      liveUrl: 'https://demo-weather.example.com',
      githubUrl: 'https://github.com/example/weather-dashboard',
      images: [
        '/images/weather-1.jpg',
        '/images/weather-2.jpg',
      ],
      features: [
        'Current weather with detailed metrics',
        '7-day and hourly forecasts',
        'Interactive weather maps',
        'Historical weather data charts',
        'Severe weather alerts',
        'Geolocation support',
        'Multiple unit systems',
        'PWA with offline support',
      ],
      category: 'Web App',
      featured: false,
      color: '#F59E0B',
    },
    {
      title: 'Developer Portfolio Template',
      shortDescription: 'Customizable portfolio template for developers',
      fullDescription: 'A modern, accessible portfolio template designed for developers to showcase their work. Features include project filtering, blog integration, SEO optimization, contact form, and easy customization through configuration files.',
      techStack: ['Astro', 'TypeScript', 'Tailwind CSS', 'MDX', 'Vercel', 'Netlify CMS'],
      liveUrl: 'https://demo-portfolio.example.com',
      githubUrl: 'https://github.com/example/portfolio-template',
      images: [
        '/images/portfolio-1.jpg',
        '/images/portfolio-2.jpg',
        '/images/portfolio-3.jpg',
      ],
      features: [
        'Project showcase with filtering',
        'Blog with MDX support',
        'SEO optimized with meta tags',
        'Contact form with validation',
        'Dark/light mode',
        'Fully responsive',
        'Easy customization',
        'Analytics integration',
      ],
      category: 'Template',
      featured: false,
      color: '#8B5CF6',
    },
    {
      title: 'Real-time Chat Application',
      shortDescription: 'Modern chat app with rooms and direct messages',
      fullDescription: 'A feature-rich real-time chat application supporting channels, direct messages, file sharing, voice messages, message reactions, thread replies, and end-to-end encryption for private conversations.',
      techStack: ['React Native', 'Expo', 'TypeScript', 'Socket.io', 'Node.js', 'Express', 'MongoDB', 'Redis', 'AWS S3'],
      liveUrl: 'https://demo-chat.example.com',
      githubUrl: 'https://github.com/example/realtime-chat',
      images: [
        '/images/chat-1.jpg',
        '/images/chat-2.jpg',
        '/images/chat-3.jpg',
      ],
      features: [
        'Channels and direct messages',
        'File and image sharing',
        'Voice messages',
        'Message reactions and threads',
        'End-to-end encryption',
        'Push notifications',
        'Message search',
        'Custom emojis and stickers',
      ],
      category: 'Mobile',
      featured: true,
      color: '#EC4899',
    },
    {
      title: 'Data Visualization Dashboard',
      shortDescription: 'Interactive analytics dashboard with charts',
      fullDescription: 'A powerful data visualization dashboard for business intelligence. Supports multiple data sources, customizable charts, real-time updates, export functionality, and role-based access control.',
      techStack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'D3.js', 'Chart.js', 'Node.js', 'Express', 'PostgreSQL', 'ClickHouse'],
      liveUrl: 'https://demo-dataviz.example.com',
      githubUrl: 'https://github.com/example/data-viz-dashboard',
      images: [
        '/images/dataviz-1.jpg',
        '/images/dataviz-2.jpg',
      ],
      features: [
        'Multiple chart types (line, bar, pie, scatter, heatmap)',
        'Real-time data streaming',
        'Custom dashboard layouts',
        'Data export (CSV, PDF, PNG)',
        'Role-based access control',
        'SQL query builder',
        'Scheduled reports',
        'Embeddable charts',
      ],
      category: 'Analytics',
      featured: false,
      color: '#06B6D4',
    },
  ];

  const documents = sampleProjects.map(projectToDocument);
  await collection.insertMany(documents);
  console.log('Sample projects seeded successfully');
}