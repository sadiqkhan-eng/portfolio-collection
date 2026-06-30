'use client';

import { motion } from 'framer-motion';
import { ExternalLink, GitFork, CheckCircle2 } from 'lucide-react';
import { CategoryBadge } from '@/components/ui/CategoryBadge';
import { TechStackList } from '@/components/ui/TechStackTag';
import { ImageCarousel } from './ImageCarousel';
import type { Project } from '@/types/project';
import { cn } from '@/lib/utils';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 py-6 px-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <CategoryBadge
                category={project.category}
                featured={project.featured}
                size="sm"
              />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 space-y-10">
        <ImageCarousel images={project.images} title={project.title} />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">About</h2>
          <p className="text-gray-400 leading-relaxed text-base">
            {project.fullDescription}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Tech Stack</h2>
          <TechStackList techStack={project.techStack} size="md" />
        </section>

        {project.features.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Key Features</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className={cn(
                    'flex items-start gap-3 p-3 rounded-xl',
                    'bg-gray-800/40 border border-gray-700/40',
                    'hover:bg-gray-800/60 transition-colors'
                  )}
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="flex flex-wrap gap-4 pt-4 border-t border-gray-800">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
                'bg-white text-gray-900 font-medium',
                'hover:bg-gray-200 transition-all',
                'hover:shadow-lg hover:shadow-white/10'
              )}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
                'border border-gray-700 text-gray-300 font-medium',
                'hover:bg-gray-800 hover:text-white transition-all',
                'hover:shadow-lg hover:shadow-black/20'
              )}
            >
              <GitFork className="w-4 h-4" />
              View Source
            </a>
          )}
        </section>
      </div>
    </motion.div>
  );
}
