import React from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

/**
 * High-performance floating Back-to-Top button.
 * Uses Framer Motion's useScroll() pathLength directly on the SVG element,
 * eliminating 100% of React component re-renders during active scrolling.
 */
export function BackToTop() {
  const { isScrolled } = useScrollPosition(300);
  const { scrollYProgress } = useScroll();

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.1 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg shadow-black/10 transition-all hover:scale-110 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transform-gpu"
          aria-label="Scroll back to top"
          title="Back to top"
        >
          {/* Circular Progress Ring animated via MotionValue with 0 React re-renders */}
          <svg className="absolute inset-0 -rotate-90" width="48" height="48">
            <circle
              cx="24"
              cy="24"
              r="18"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="transparent"
              className="text-muted/30"
            />
            <motion.circle
              cx="24"
              cy="24"
              r="18"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="transparent"
              style={{ pathLength: scrollYProgress }}
              strokeLinecap="round"
              className="text-primary"
            />
          </svg>

          <ArrowUp className="h-5 w-5 text-foreground relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
