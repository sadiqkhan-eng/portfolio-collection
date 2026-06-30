export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "ai" | "fullstack" | "automation";
  featured: boolean;
}

export interface Skill {
  name: string;
  percentage: number;
  category: "frontend" | "backend" | "ai" | "tools";
  icon?: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  description: string;
  startDate: string;
  endDate?: string;
  type: "education" | "work" | "certification";
  highlights?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
