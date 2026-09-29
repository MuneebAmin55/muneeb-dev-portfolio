import { useState, useEffect } from 'react';

/**
 * High-performance hook to track scroll progress.
 * Uses requestAnimationFrame and a delta threshold to prevent micro re-renders.
 *
 * @returns {number} progress percentage (0 to 100)
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const currentProgress = (window.scrollY / scrollHeight) * 100;
        setProgress((prev) => {
          // Only update if difference > 0.5% to eliminate frame drops
          if (Math.abs(prev - currentProgress) > 0.5) {
            return Math.min(100, Math.max(0, currentProgress));
          }
          return prev;
        });
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return progress;
}
