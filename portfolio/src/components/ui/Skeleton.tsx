'use client';

import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

export function Skeleton({
  className,
  variant = 'text',
  width,
  height,
  animation = 'pulse',
}: SkeletonProps) {
  const baseStyles = 'bg-gray-700/50 dark:bg-gray-600/50';
  const animationStyles = {
    pulse: 'animate-pulse',
    wave: 'animate-[shimmer_2s_infinite]',
    none: '',
  };

  const variantStyles = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        animationStyles[animation],
        className
      )}
      style={{
        width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
        height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
      }}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
      <div className="flex items-center gap-3 mb-3">
        <Skeleton variant="circular" width={10} height={10} className="bg-blue-500/30" />
        <Skeleton variant="text" width="40%" height={6} />
      </div>
      <Skeleton variant="text" width="80%" height={20} className="mb-2" />
      <Skeleton variant="text" width="60%" height={16} className="mb-3" />
      <div className="flex flex-wrap gap-2">
        <Skeleton variant="rectangular" width={60} height={24} />
        <Skeleton variant="rectangular" width={80} height={24} />
        <Skeleton variant="rectangular" width={50} height={24} />
      </div>
    </div>
  );
}

export function ProjectDetailSkeleton() {
  return (
    <div className="space-y-6">
      <div className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 py-4 px-6">
        <Skeleton variant="text" width="50%" height={32} className="mb-2" />
        <div className="flex flex-wrap gap-2">
          <Skeleton variant="rectangular" width={80} height={24} />
          <Skeleton variant="rectangular" width={100} height={24} />
          <Skeleton variant="rectangular" width={80} height={24} />
        </div>
      </div>
      
      <div className="space-y-8 px-6 py-6">
        <div className="aspect-video rounded-2xl bg-gray-800/50" />
        
        <div className="space-y-4">
          <Skeleton variant="text" width="30%" height={24} className="text-xl" />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="80%" height={20} />
        </div>

        <div className="space-y-4">
          <Skeleton variant="text" width="25%" height={20} className="text-lg" />
          <div className="flex flex-wrap gap-2">
            <Skeleton variant="rectangular" width={100} height={28} />
            <Skeleton variant="rectangular" width={120} height={28} />
            <Skeleton variant="rectangular" width={80} height={28} />
            <Skeleton variant="rectangular" width={100} height={28} />
          </div>
        </div>

        <div className="space-y-4">
          <Skeleton variant="text" width="20%" height={20} className="text-lg" />
          <div className="space-y-3">
            <Skeleton variant="text" width="100%" height={18} />
            <Skeleton variant="text" width="100%" height={18} />
            <Skeleton variant="text" width="100%" height={18} />
            <Skeleton variant="text" width="80%" height={18} />
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-gray-800">
          <Skeleton variant="text" width="25%" height={20} className="text-lg" />
          <div className="flex gap-4">
            <Skeleton variant="rectangular" width={160} height={44} />
            <Skeleton variant="rectangular" width={160} height={44} />
          </div>
        </div>
      </div>
    </div>
  );
}