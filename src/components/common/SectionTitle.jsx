import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { slideUp } from '@/utils/animations';

/**
 * Reusable Section Header with badge, title, and descriptive subtitle
 * @param {Object} props
 * @param {string} [props.badge] - Category or badge text
 * @param {string} props.title - Primary heading
 * @param {string} [props.highlight] - Accent highlighted word in title
 * @param {string} [props.subtitle] - Supporting description
 * @param {'left' | 'center' | 'right'} [props.align='center']
 * @param {string} [props.className]
 */
export function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={cn(
        'flex flex-col mb-12 sm:mb-16 max-w-3xl',
        alignmentClasses[align] || alignmentClasses.center,
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-3 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
        {title}{' '}
        {highlight && (
          <span className="text-gradient inline-block">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
