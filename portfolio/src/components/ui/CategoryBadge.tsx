'use client';

import { cn } from '@/lib/utils';
import { getCategoryColor } from '@/lib/utils';

interface CategoryBadgeProps {
  category: string;
  featured?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function CategoryBadge({ 
  category, 
  featured = false, 
  size = 'md', 
  className 
}: CategoryBadgeProps) {
  const color = getCategoryColor(category);
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-3 py-1 text-sm gap-1.5',
    lg: 'px-4 py-1.5 text-base gap-2',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        'bg-gray-800 border',
        'text-white',
        sizeClasses[size],
        className
      )}
      style={{ 
        borderColor: color,
        backgroundColor: `${color}15`,
      }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      {category}
      {featured && (
        <span
          className={cn(
            'ml-1 px-1.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider',
            'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
          )}
        >
          Featured
        </span>
      )}
    </span>
  );
}