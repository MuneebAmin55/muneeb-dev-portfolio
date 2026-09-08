import React from 'react';
import { motion } from 'framer-motion';

/**
 * Lightweight Route Transition Loader for React Suspense
 */
export function SuspenseLoader() {
  return (
    <div
      role="status"
      aria-label="Loading page content"
      className="min-h-[60vh] flex flex-col items-center justify-center p-8 select-none"
    >
      {/* Top indeterminate progress line */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 overflow-hidden bg-slate-900/50">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="h-full w-1/2 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"
        />
      </div>

      {/* Center ambient pulsing indicator */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0F172A] shadow-glow-primary">
          <span className="font-mono text-sm font-bold text-gradient">MA</span>
          <span className="absolute -inset-1 rounded-xl bg-cyan-500/20 blur-md animate-pulse -z-10" />
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
          Loading Module...
        </span>
      </div>
    </div>
  );
}
