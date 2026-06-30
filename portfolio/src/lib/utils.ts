import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'Full Stack': '#3B82F6',
    'SaaS': '#10B981',
    'Web App': '#F59E0B',
    'Template': '#8B5CF6',
    'Mobile': '#EC4899',
    'Analytics': '#06B6D4',
  };
  return colors[category] || '#6B7280';
}

export function formatTechStack(tech: string[]): string {
  return tech.join(', ');
}
