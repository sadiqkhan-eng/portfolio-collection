export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  images: string[];
  features: string[];
  category: string;
  featured?: boolean;
  color?: string;
}

export interface ProjectsResponse {
  projects: Project[];
  total: number;
}

export interface ApiError {
  message: string;
  statusCode: number;
}