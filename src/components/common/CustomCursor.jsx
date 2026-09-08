import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

/**
 * Premium Custom Cursor with dual-ring spring physics and hover scale expansion.
 * Pauses closest() scanning during active scrolling for 60fps responsiveness.
 */
export function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Raw mouse coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for trailing ring
  const springConfig = { damping: 28, stiffness: 300, mass: 0.4 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    if (!isPointerFine) return;
    setIsEnabled(true);

    let isScrolling = false;
    let scrollTimer = null;

    const handleScroll = () => {
      isScrolling = true;
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        isScrolling = false;
      }, 100);
    };

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Track hover on interactive elements (skipped during active scroll for 60 FPS)
    const handleMouseOver = (e) => {
      if (isScrolling) return;
      const target = e.target;
      if (!target || !target.closest) return;

      const isInteractive =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.interactive-hover');

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseover', handleMouseOver);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, [cursorX, cursorY]);

  if (!isEnabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Outer Lagging Glow Ring (Hardware accelerated with translate3d) */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.75 : isHovered ? 1.5 : 1,
          borderColor: isHovered
            ? 'rgba(6, 182, 212, 0.85)'
            : 'rgba(59, 130, 246, 0.45)',
          backgroundColor: isHovered
            ? 'rgba(6, 182, 212, 0.08)'
            : 'rgba(59, 130, 246, 0.02)',
        }}
        transition={{ duration: 0.12 }}
        className="fixed top-0 left-0 h-9 w-9 rounded-full border border-blue-500/40 shadow-glow-primary transform-gpu"
      />

      {/* Inner Precision Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.6 : isHovered ? 0.4 : 1,
          backgroundColor: isHovered ? '#06b6d4' : '#3b82f6',
        }}
        transition={{ duration: 0.08 }}
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-blue-500 shadow-sm transform-gpu"
      />
    </div>
  );
}
