import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { fadeIn } from '@/utils/animations';

/**
 * Semantic section with spacing presets and optional viewport entrance motion
 * @param {Object} props
 * @param {string} [props.id] - Anchor ID
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {'sm' | 'md' | 'lg' | 'none'} [props.spacing='lg']
 * @param {boolean} [props.animate=true]
 */
export function Section({
  id,
  children,
  className = '',
  spacing = 'lg',
  animate = true,
  ...props
}) {
  const spacingClasses = {
    none: 'py-0',
    sm: 'py-12 sm:py-16',
    md: 'py-16 sm:py-20',
    lg: 'py-20 sm:py-28',
  };

  const Component = animate ? motion.section : 'section';
  const motionProps = animate
    ? {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, margin: '-80px' },
        variants: fadeIn,
      }
    : {};

  return (
    <Component
      id={id}
      className={cn('relative w-full overflow-hidden', spacingClasses[spacing] || spacingClasses.lg, className)}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}
