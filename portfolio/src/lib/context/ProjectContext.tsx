'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Project } from '@/types/project';

interface ProjectContextType {
  projects: Project[];
  activeProjectId: string | null;
  setActiveProject: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setProjects: (projects: Project[]) => void;
  filteredProjects: Project[];
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const setActiveProject = useCallback((id: string) => {
    setActiveProjectId(id);
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.category.toLowerCase().includes(query) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(query)) ||
      project.shortDescription.toLowerCase().includes(query)
    );
  });

  return (
    <ProjectContext.Provider
      value={{
        projects,
        activeProjectId,
        setActiveProject,
        searchQuery,
        setSearchQuery,
        setProjects,
        filteredProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
}
