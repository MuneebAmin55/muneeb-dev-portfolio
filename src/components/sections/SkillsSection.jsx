import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { skillCategories } from '@/data/skills';
import { cn } from '@/utils/cn';

const categoryDotColor = {
  frontend: 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]',
  backend: 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]',
  databases: 'bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]',
  'tools-deployment': 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]',
};

const categoryHoverBorder = {
  frontend: 'hover:border-blue-500/40 dark:hover:border-blue-400/40',
  backend: 'hover:border-emerald-500/40 dark:hover:border-emerald-400/40',
  databases: 'hover:border-cyan-500/40 dark:hover:border-cyan-400/40',
  'tools-deployment': 'hover:border-purple-500/40 dark:hover:border-purple-400/40',
};

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-label="Skills & Technologies"
      className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#0F172A]/10 dark:via-[#0F172A]/30 to-transparent"
    >
      <Container size="xl">
        <SectionTitle
          badge="Technical Stack"
          title="Core Technologies &"
          highlight="Skills"
          subtitle="A clean overview of programming languages, frameworks, databases, and deployment tools I utilize across full stack projects."
        />

        {/* 2x2 Grid on Desktop / Tablet, 1 Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12 sm:mt-16">
          {skillCategories.map((category, index) => {
            const dotClass = categoryDotColor[category.id] || categoryDotColor.frontend;
            const hoverBorder = categoryHoverBorder[category.id] || categoryHoverBorder.frontend;

            return (
              <motion.div
                key={category.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                className={cn(
                  'group relative flex flex-col justify-start rounded-2xl p-6 sm:p-7',
                  'bg-white/80 dark:bg-[#0F172A]/75 backdrop-blur-xl',
                  'border border-slate-200/80 dark:border-white/10',
                  'shadow-soft-sm dark:shadow-soft-md',
                  'transition-all duration-300',
                  hoverBorder
                )}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className={cn('h-2 w-2 rounded-full', dotClass)} aria-hidden="true" />
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-200/60 dark:border-white/10 select-none">
                    {category.skills.length} Technologies
                  </span>
                </div>

                {/* Technology Names Only (Text Badges / Pills) */}
                <div
                  role="list"
                  aria-label={`${category.title} technologies`}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-2.5"
                >
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      role="listitem"
                      tabIndex={0}
                      className={cn(
                        'flex items-center justify-center text-center px-3 py-2.5 rounded-xl',
                        'text-xs sm:text-sm font-medium tracking-tight leading-snug',
                        'bg-slate-100/75 hover:bg-white dark:bg-slate-900/60 dark:hover:bg-slate-800/90',
                        'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white',
                        'border border-slate-200/70 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20',
                        'shadow-xs hover:shadow-sm transition-all duration-200 cursor-default select-none',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 dark:focus-visible:ring-offset-slate-950'
                      )}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
