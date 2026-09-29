import { useState, useEffect } from 'react';

/**
 * High-performance hook to track scroll state against a threshold.
 * Uses requestAnimationFrame and boolean comparison to ensure ZERO unnecessary
 * component re-renders during active scrolling.
 *
 * @param {number} threshold - Scroll Y position threshold in pixels
 * @returns {{ isScrolled: boolean }}
 */
export function useScrollPosition(threshold = 20) {
  const [isScrolled, setIsScrolled] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.scrollY > threshold;
    }
    return false;
  });

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const current = window.scrollY > threshold;
      setIsScrolled((prev) => (prev !== current ? current : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { isScrolled };
}
