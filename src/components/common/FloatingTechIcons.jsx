import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

const techBadges = [
  { name: "React.js",      color: "#38bdf8", x: "6%",  y: "14%", delay: 0 },
  { name: "Redux Toolkit", color: "#a855f7", x: "82%", y: "12%", delay: 1.5 },
  { name: "Django REST",   color: "#22c55e", x: "80%", y: "62%", delay: 0.8 },
  { name: "Node.js",       color: "#4ade80", x: "8%",  y: "64%", delay: 2.2 },
  { name: "PostgreSQL",    color: "#60a5fa", x: "90%", y: "38%", delay: 1.2 },
  { name: "Express.js",    color: "#cbd5e1", x: "4%",  y: "38%", delay: 2.7 },
  { name: "MySQL",         color: "#f59e0b", x: "50%", y: "5%",  delay: 1.8 },
  { name: "Tailwind CSS",  color: "#06b6d4", x: "72%", y: "86%", delay: 0.5 },
  { name: "Git",           color: "#f97316", x: "22%", y: "88%", delay: 3.0 },
  { name: "GitHub",        color: "#e2e8f0", x: "2%",  y: "82%", delay: 2.1 },
  { name: "JavaScript",    color: "#facc15", x: "88%", y: "78%", delay: 1.0 },
  { name: "DRF",           color: "#34d399", x: "46%", y: "92%", delay: 0.3 },
];

/**
 * Floating Tech Icons / Badges - ambient decorative elements with Framer Motion.
 * Pauses oscillation if prefers-reduced-motion is active.
 */
export const FloatingTechIcons = React.memo(function FloatingTechIcons({ className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none overflow-hidden hidden lg:block select-none -z-0",
        className
      )}
    >
      {techBadges.map((badge, i) => (
        <motion.div
          key={badge.name}
          initial={{ opacity: 0, y: 20 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.6, y: 0, x: 0 }
              : {
                  opacity: [0.35, 0.75, 0.35],
                  y: [0, -(12 + (i % 3) * 5), 0],
                  x: [0, i % 2 === 0 ? 6 : -6, 0],
                }
          }
          transition={{
            duration: 6 + (i % 3) * 2,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
            delay: badge.delay,
          }}
          style={{ left: badge.x, top: badge.y }}
          className="absolute inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0F172A]/70 px-3.5 py-1.5 backdrop-blur-md shadow-soft-sm transform-gpu will-change-transform"
        >
          <span
            className="h-2 w-2 rounded-full shadow-sm"
            style={{ backgroundColor: badge.color, boxShadow: `0 0 6px ${badge.color}80` }}
          />
          <span className="font-mono text-xs font-medium text-slate-200">{badge.name}</span>
        </motion.div>
      ))}
    </div>
  );
});
