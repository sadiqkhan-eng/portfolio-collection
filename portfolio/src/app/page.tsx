'use client';

import { useEffect } from 'react';
import useSWR from 'swr';
import { ProjectProvider, useProjectContext } from '@/lib/context/ProjectContext';
import { LeftPanel } from '@/components/left-panel/LeftPanel';
import { ProjectDetail } from '@/components/right-panel/ProjectDetail';
import { CategoryBadge } from '@/components/ui/CategoryBadge';
import { ProjectDetailSkeleton } from '@/components/ui/Skeleton';
import { AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ProjectsResponse } from '@/types/project';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function PortfolioContent() {
  const { data, error, isLoading } = useSWR<ProjectsResponse>(
    '/api/projects',
    fetcher
  );

  const {
    projects,
    setProjects,
    activeProjectId,
    setActiveProject,
    searchQuery,
    setSearchQuery,
    filteredProjects,
  } = useProjectContext();

  useEffect(() => {
    if (data?.projects) {
      setProjects(data.projects);
      if (!activeProjectId && data.projects.length > 0) {
        setActiveProject(data.projects[0].id);
      }
    }
  }, [data, activeProjectId, setProjects, setActiveProject]);

  const activeProject = projects.find((p) => p.id === activeProjectId);

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center p-8">
          <p className="text-red-400 font-medium text-lg">Failed to load projects</p>
          <p className="text-gray-500 mt-2 text-sm">
            Please check your connection and try again
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden flex flex-col bg-gray-900 border-b border-gray-800">
        <div className="flex items-center justify-between px-4 py-3">
          <h2 className="text-lg font-bold text-white">Projects</h2>
          <span className="text-sm text-gray-500">
            {projects.length} project{projects.length !== 1 ? 's' : ''}
          </span>
        </div>
        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={cn(
                'w-full pl-10 pr-4 py-2 rounded-xl text-sm',
                'bg-gray-800 border border-gray-700 text-gray-200',
                'placeholder:text-gray-500',
                'focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50'
              )}
            />
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto px-4 pb-3 scrollbar-thin snap-x">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="shrink-0 w-48 h-20 bg-gray-800/50 rounded-xl animate-pulse"
                />
              ))
            : filteredProjects.map((project) => {
                const isActive = activeProjectId === project.id;
                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(project.id)}
                    className={cn(
                      'shrink-0 snap-start w-52 p-3 rounded-xl text-left transition-all duration-200 border',
                      isActive
                        ? 'bg-blue-500/10 border-blue-500/30'
                        : 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800'
                    )}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: project.color || '#6B7280' }}
                      />
                      <CategoryBadge
                        category={project.category}
                        featured={project.featured}
                        size="sm"
                      />
                    </div>
                    <p className="text-sm font-semibold text-white truncate">
                      {project.title}
                    </p>
                    <p className="text-xs text-gray-500 truncate mt-0.5">
                      {project.shortDescription}
                    </p>
                  </button>
                );
              })}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="flex h-full">
        {/* Left Panel - Desktop */}
        <div className="hidden lg:flex w-[30%] shrink-0 h-full">
          <LeftPanel isLoading={isLoading} />
        </div>

        {/* Right Panel */}
        <div className="flex-1 h-full overflow-y-auto scrollbar-thin bg-gray-900">
          {isLoading ? (
            <ProjectDetailSkeleton />
          ) : activeProject ? (
            <AnimatePresence mode="wait">
              <ProjectDetail key={activeProject.id} project={activeProject} />
            </AnimatePresence>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p>Select a project to view details</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <ProjectProvider>
      <PortfolioContent />
    </ProjectProvider>
  );
}
