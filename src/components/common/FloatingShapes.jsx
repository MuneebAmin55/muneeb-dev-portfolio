import React from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Ambient geometric floating shapes with hardware-accelerated CSS GPU compositor drift.
 * Completely off the main thread so scrolling never stutters.
 */
export function FloatingShapes() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden select-none -z-5 hidden sm:block"
      style={{ contain: 'strict', isolation: 'isolate' }}
    >
      {/* Upper Right Frosted Ring */}
      <div
        className="absolute top-[18%] right-[8%] h-48 w-48 rounded-full border border-blue-500/10 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-[2px] opacity-70 animate-floating-shape-1 transform-gpu"
      />

      {/* Mid Left Geometric Hexagon Pill */}
      <div
        className="absolute top-[52%] left-[4%] h-36 w-36 rounded-3xl border border-cyan-500/15 bg-gradient-to-tr from-cyan-500/5 to-emerald-500/5 backdrop-blur-[2px] opacity-60 animate-floating-shape-2 transform-gpu"
      />

      {/* Lower Right Diamond */}
      <div
        className="absolute top-[78%] right-[12%] h-32 w-32 rounded-2xl border border-emerald-500/15 bg-gradient-to-bl from-emerald-500/5 to-blue-500/5 backdrop-blur-[2px] opacity-50 animate-floating-shape-3 transform-gpu"
      />
    </div>
  );
}
