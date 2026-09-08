import React from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Premium Animated Ambient Background inspired by Vercel & Stripe.
 * Uses GPU-accelerated compositor-thread CSS transforms (translate3d)
 * with strict layout containment, zero JS main-thread overhead, and buttery smooth scrolling.
 */
export const AnimatedBackground = React.memo(function AnimatedBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none"
      style={{ contain: 'strict', isolation: 'isolate' }}
    >
      {/* Base Dark Canvas (#020617) */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* Subtle Coordinate Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Primary Cyan/Blue Bloom (Drifting upper left) - lighter blur on mobile */}
      <div
        className={`absolute -top-[15%] -left-[10%] h-[320px] w-[320px] md:h-[550px] md:w-[550px] rounded-full bg-gradient-to-br from-blue-600/15 via-cyan-500/10 to-transparent blur-[40px] md:blur-[80px] transform-gpu ${
          shouldReduceMotion ? '' : 'animate-bloom-1'
        }`}
      />

      {/* Secondary Emerald/Teal Bloom (Drifting upper right) */}
      <div
        className={`absolute top-[20%] -right-[15%] h-[340px] w-[340px] md:h-[600px] md:w-[600px] rounded-full bg-gradient-to-bl from-emerald-500/10 via-cyan-600/10 to-transparent blur-[45px] md:blur-[90px] transform-gpu ${
          shouldReduceMotion ? '' : 'animate-bloom-2'
        }`}
      />

      {/* Center Ambient Subtle Glow */}
      <div
        className={`absolute top-[45%] left-[25%] h-[280px] w-[280px] md:h-[500px] md:w-[500px] rounded-full bg-blue-500/10 blur-[50px] md:blur-[100px] transform-gpu ${
          shouldReduceMotion ? '' : 'animate-bloom-center'
        }`}
      />

      {/* Radial Edge Vignette to keep content crisp and focused */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/40 to-[#020617]" />
    </div>
  );
});
