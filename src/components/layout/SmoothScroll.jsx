import React, { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Premium Smooth Scroll Provider powered by Lenis (used by Linear, Stripe, Apple).
 * Provides 60-120 FPS momentum scrolling, perfectly syncs with Framer Motion,
 * and eliminates mouse-wheel stuttering.
 */
export function SmoothScroll({ children }) {
  useEffect(() => {
    // Disable on devices requesting reduced motion or touch screens if desired
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth exponential deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      infinite: false,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return <>{children}</>;
}
