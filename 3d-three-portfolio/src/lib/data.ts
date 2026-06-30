export const personalInfo = {
  name: "Sadiq Khan",
  title: "Modern Web Developer | Agentic AI Developer | Full-Stack Engineer",
  tagline: "Building Scalable Web Applications & Intelligent AI Systems",
  about:
    "Passionate developer focused on building scalable web applications, intelligent AI systems, and modern digital experiences. Specialized in Next.js, TypeScript, Python, FastAPI, Agentic AI Systems, OpenAI Agents SDK, AI Automation, and Full-Stack Development.",
  email: "sadiqkhan.dev@gmail.com",
  github: "https://github.com/sadiq-khan",
  linkedin: "https://linkedin.com/in/sadiq-khan",
  twitter: "https://twitter.com/sadiq_khan_dev",
  resumeUrl: "/resume.pdf",
};

export const stats = [
  { label: "Projects Completed", value: 25, suffix: "+" },
  { label: "Technologies Used", value: 30, suffix: "+" },
  { label: "Open Source Contributions", value: 100, suffix: "+" },
  { label: "Learning Hours", value: 2000, suffix: "+" },
];

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Chakra UI", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Python", level: 88 },
      { name: "FastAPI", level: 85 },
      { name: "Node.js", level: 82 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "AI & Automation",
    icon: "Brain",
    skills: [
      { name: "OpenAI Agents SDK", level: 85 },
      { name: "Gemini API", level: 80 },
      { name: "AI Agents", level: 82 },
      { name: "LLM Applications", level: 80 },
      { name: "Agentic Workflows", level: 78 },
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 92 },
      { name: "Postman", level: 85 },
      { name: "Vercel", level: 88 },
      { name: "Docker", level: 75 },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Restaurant Management Platform",
    description:
      "A full-stack restaurant management system with real-time order tracking, menu management, and analytics dashboard.",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/sadiq-khan/restaurant-platform",
    liveUrl: "https://restaurant-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    title: "Logistics & Freight System",
    description:
      "End-to-end logistics management platform with route optimization, shipment tracking, and automated invoicing.",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/sadiq-khan/logistics-system",
    liveUrl: "https://freight-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    title: "Agentic AI Assistant",
    description:
      "An intelligent AI assistant built with OpenAI Agents SDK, capable of autonomous task execution and multi-step reasoning.",
    category: "AI Projects",
    technologies: ["Python", "FastAPI", "OpenAI Agents SDK", "React", "TypeScript"],
    githubUrl: "https://github.com/sadiq-khan/agentic-assistant",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    title: "AI Car Security System",
    description:
      "AI-powered vehicle security system using computer vision and anomaly detection for real-time threat assessment.",
    category: "AI Projects",
    technologies: ["Python", "TensorFlow", "OpenCV", "FastAPI", "React"],
    githubUrl: "https://github.com/sadiq-khan/ai-car-security",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    title: "AI Lie Detector",
    description:
      "Machine learning based sentiment analysis tool that evaluates text for deception patterns using NLP techniques.",
    category: "AI Projects",
    technologies: ["Python", "scikit-learn", "NLP", "Streamlit", "FastAPI"],
    githubUrl: "https://github.com/sadiq-khan/ai-lie-detector",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    title: "Portfolio Websites",
    description:
      "Collection of modern, responsive portfolio websites built for developers and creatives with stunning animations.",
    category: "Web Development",
    technologies: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/sadiq-khan/portfolios",
    liveUrl: "https://portfolio-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    title: "E-Commerce Application",
    description:
      "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/sadiq-khan/ecommerce-app",
    liveUrl: "https://ecommerce-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    title: "AI Automation Tools",
    description:
      "Suite of automation tools leveraging AI for workflow optimization, data processing, and task scheduling.",
    category: "AI Automation",
    technologies: ["Python", "LangChain", "FastAPI", "Docker", "Redis"],
    githubUrl: "https://github.com/sadiq-khan/ai-automation",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    featured: false,
  },
];

export const experiences = [
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2023 - Present",
    description:
      "Building modern web applications for clients worldwide. Specializing in Next.js, React, and full-stack solutions.",
    type: "experience",
  },
  {
    title: "AI Application Developer",
    company: "Independent",
    period: "2024 - Present",
    description:
      "Developing AI-powered applications using OpenAI Agents SDK, building agentic workflows and intelligent automation systems.",
    type: "experience",
  },
  {
    title: "Open Source Contributor",
    company: "Community",
    period: "2023 - Present",
    description:
      "Active contributor to open source projects, building developer tools and contributing to popular repositories.",
    type: "experience",
  },
  {
    title: "Modern Web & App Development",
    company: "SMIT",
    period: "2023",
    description:
      "Completed comprehensive training in modern web development including React, Next.js, Node.js, and database management.",
    type: "education",
  },
  {
    title: "AI Program",
    company: "Governor Initiative",
    period: "2024",
    description:
      "Selected for the prestigious Governor Initiative AI Program, learning cutting-edge AI/ML technologies and applications.",
    type: "education",
  },
];

export const certifications = [
  {
    title: "Modern Web & App Development",
    issuer: "SMIT",
    date: "2023",
    category: "Web Development",
    verificationUrl: "#",
  },
  {
    title: "AI & Machine Learning",
    issuer: "Governor Initiative",
    date: "2024",
    category: "AI",
    verificationUrl: "#",
  },
  {
    title: "OpenAI Agents SDK",
    issuer: "OpenAI",
    date: "2024",
    category: "AI",
    verificationUrl: "#",
  },
];

export const testimonials = [
  {
    text: "Sadiq delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
    author: "Client",
    role: "Tech Startup CEO",
    rating: 5,
  },
  {
    text: "Working with Sadiq was a pleasure. He brought innovative AI solutions to our project and delivered on time with excellent quality.",
    author: "Colleague",
    role: "Senior Developer",
    rating: 5,
  },
  {
    text: "Sadiq's understanding of both web development and AI is impressive. He built a system that transformed our business operations.",
    author: "Client",
    role: "Business Owner",
    rating: 5,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
