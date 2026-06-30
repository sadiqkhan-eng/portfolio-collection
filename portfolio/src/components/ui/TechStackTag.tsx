'use client';

import { cn } from '@/lib/utils';

interface TechStackTagProps {
  tech: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export function TechStackTag({ tech, size = 'md', className }: TechStackTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        'bg-gray-800 text-gray-200 border border-gray-700',
        'hover:bg-gray-700 hover:border-gray-600 transition-colors',
        sizeClasses[size],
        className
      )}
    >
      {tech}
    </span>
  );
}

interface TechStackListProps {
  techStack: string[];
  size?: 'sm' | 'md' | 'lg';
  maxVisible?: number;
  className?: string;
}

export function TechStackList({ 
  techStack, 
  size = 'md', 
  maxVisible = 6,
  className 
}: TechStackListProps) {
  const visibleTech = techStack.slice(0, maxVisible);
  const remaining = techStack.length - maxVisible;

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {visibleTech.map((tech) => (
        <TechStackTag key={tech} tech={tech} size={size} />
      ))}
      {remaining > 0 && (
        <span className={cn(
          'inline-flex items-center justify-center font-medium rounded-full',
          'bg-gray-800 text-gray-400 border border-gray-700',
          sizeClasses[size]
        )}>
          +{remaining}
        </span>
      )}
    </div>
  );
}