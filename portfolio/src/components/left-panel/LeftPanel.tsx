'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Search, FolderOpen } from 'lucide-react';
import { useProjectContext } from '@/lib/context/ProjectContext';
import { CategoryBadge } from '@/components/ui/CategoryBadge';
import { TechStackList } from '@/components/ui/TechStackTag';
import { ProjectCardSkeleton } from '@/components/ui/Skeleton';
import { cn } from '@/lib/utils';

interface LeftPanelProps {
  isLoading: boolean;
}

export function LeftPanel({ isLoading }: LeftPanelProps) {
  const {
    filteredProjects,
    activeProjectId,
    setActiveProject,
    searchQuery,
    setSearchQuery,
    projects,
  } = useProjectContext();

  const hasResults = filteredProjects.length > 0;

  return (
    <aside className="h-full flex flex-col bg-gray-900/50 border-r border-gray-800">
      <div className="shrink-0 p-4 border-b border-gray-800">
        <h2 className="text-lg font-bold text-white mb-1">Projects</h2>
        <p className="text-sm text-gray-500">
          {projects.length} project{projects.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="shrink-0 p-4 border-b border-gray-800">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search by name, tech, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={cn(
              'w-full pl-10 pr-4 py-2.5 rounded-xl text-sm',
              'bg-gray-800 border border-gray-700 text-gray-200',
              'placeholder:text-gray-500',
              'focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50',
              'transition-all'
            )}
          />
        </div>

        {searchQuery && (
          <p className="text-xs text-gray-500 mt-2">
            {filteredProjects.length} result{filteredProjects.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin">
        {isLoading ? (
          <div className="p-4 space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        ) : !hasResults ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 p-8 text-center">
            <FolderOpen className="w-10 h-10 mb-3 text-gray-600" />
            <p className="font-medium">No projects found</p>
            <p className="text-sm mt-1">
              Try a different search term or category
            </p>
          </div>
        ) : (
          <div className="p-3 space-y-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const isActive = activeProjectId === project.id;
                return (
                  <motion.button
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.03,
                      layout: { duration: 0.2 },
                    }}
                    onClick={() => setActiveProject(project.id)}
                    className={cn(
                      'w-full text-left p-4 rounded-xl transition-all duration-200',
                      'border border-transparent',
                      isActive
                        ? 'bg-blue-500/10 border-blue-500/30 shadow-lg shadow-blue-500/5'
                        : 'hover:bg-gray-800/60 hover:border-gray-700/50'
                    )}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={cn(
                          'w-2.5 h-2.5 rounded-full shrink-0',
                          isActive && 'ring-2 ring-blue-500/30 ring-offset-1 ring-offset-gray-900'
                        )}
                        style={{
                          backgroundColor: project.color || '#6B7280',
                        }}
                      />
                      <CategoryBadge
                        category={project.category}
                        featured={project.featured}
                        size="sm"
                      />
                    </div>

                    <h3
                      className={cn(
                        'font-semibold mb-1 transition-colors',
                        isActive ? 'text-white' : 'text-gray-300'
                      )}
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                      {project.shortDescription}
                    </p>

                    <TechStackList
                      techStack={project.techStack}
                      size="sm"
                      maxVisible={3}
                    />
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </aside>
  );
}
