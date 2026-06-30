import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';
import { motion } from 'framer-motion';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    const baseStyles = 'bg-card text-card-foreground rounded-xl border border-border p-6 shadow-md transition-all duration-300';
    const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';

    return (
      <motion.div
        ref={ref}
        className={cn(baseStyles, hoverStyles, className)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
