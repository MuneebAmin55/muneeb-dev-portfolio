import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

export const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none',
  {
    variants: {
      variant: {
        default:
          'border border-transparent bg-primary/10 text-primary hover:bg-primary/20',
        secondary:
          'border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border border-transparent bg-destructive/10 text-destructive',
        outline:
          'border border-border text-foreground/80 hover:bg-accent/10 hover:text-accent',
        glass:
          'glass border border-white/10 text-foreground/90 backdrop-blur-md',
        accent:
          'border border-accent/20 bg-accent/10 text-accent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export function Badge({ className, variant, children, ...props }) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </span>
  );
}
