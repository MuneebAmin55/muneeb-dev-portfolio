import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { DEFAULT_SEO } from '@/constants/seo';
import { fadeIn } from '@/utils/animations';
import { cn } from '@/utils/cn';

/**
 * Wraps page routes with SEO meta tags and smooth entrance transitions
 * @param {Object} props
 * @param {string} [props.title] - Page title
 * @param {string} [props.description] - Page meta description
 * @param {React.ReactNode} props.children - Page contents
 * @param {string} [props.className]
 */
export function PageWrapper({
  title,
  description = DEFAULT_SEO.description,
  children,
  className = '',
}) {
  const fullTitle = title
    ? `${title} | ${DEFAULT_SEO.author}`
    : DEFAULT_SEO.title;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
      </Helmet>

      <motion.main
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className={cn('min-h-screen pt-24 pb-16', className)}
      >
        {children}
      </motion.main>
    </>
  );
}
