import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Premium Initial Loading Screen with brand monogram, gradient line, and session management
 */
export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(() => {
    // Only show on first visit in session
    if (typeof window !== 'undefined') {
      const alreadyLoaded = sessionStorage.getItem('muneeb_intro_loaded');
      return !alreadyLoaded;
    }
    return true;
  });

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
      try {
        sessionStorage.setItem('muneeb_intro_loaded', 'true');
      } catch (e) {}
    }, 1100);

    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="initial-loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020617] backdrop-blur-2xl"
        >
          <div className="relative flex flex-col items-center">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-emerald-500/20 blur-2xl animate-pulse" />

            {/* Monogram Box */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-[#0F172A] shadow-glow-primary backdrop-blur-md"
            >
              <span className="text-3xl font-extrabold tracking-wider text-gradient font-mono">
                MA
              </span>
            </motion.div>

            {/* Loading text & progress line */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-xs font-mono uppercase tracking-widest text-slate-400"
              >
                Initializing Experience
              </motion.span>
              <div className="h-1 w-32 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.9,
                    ease: 'easeInOut',
                  }}
                  className="h-full w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
