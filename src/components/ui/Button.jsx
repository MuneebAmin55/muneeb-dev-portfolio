import React from 'react';
import { cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none active:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-glow-primary',
        glow:
          'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-semibold shadow-glow-primary hover:opacity-95 hover:shadow-glow-accent',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline:
          'border border-input bg-background/50 backdrop-blur-sm hover:bg-accent/10 hover:text-accent hover:border-accent/40',
        ghost:
          'hover:bg-muted/80 hover:text-foreground',
        glass:
          'glass text-foreground hover:bg-white/10 dark:hover:bg-white/5 border border-white/10',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        link:
          'text-primary underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        default: 'h-11 px-5 py-2.5 text-sm',
        sm: 'h-9 px-3.5 text-xs rounded-md',
        lg: 'h-13 px-8 text-base rounded-xl font-semibold',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

/**
 * Production-ready Button component with CVA variants, icon slots, loading spinner, and safe default button type
 */
export const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      type = 'button',
      isLoading = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        {!isLoading && LeftIcon && <LeftIcon className="h-4 w-4 shrink-0" />}
        {children}
        {!isLoading && RightIcon && <RightIcon className="h-4 w-4 shrink-0" />}
      </button>
    );
  }
);

Button.displayName = 'Button';
