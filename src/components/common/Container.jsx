import React from 'react';
import { cn } from '@/utils/cn';

/**
 * Reusable fluid container with max-width constraints
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'} [props.size='xl']
 */
export function Container({
  children,
  className = '',
  size = 'xl',
  ...props
}) {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeClasses[size] || sizeClasses.xl,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
