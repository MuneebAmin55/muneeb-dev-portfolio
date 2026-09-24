import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Layout, Server, Database, Wrench } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { TechIcon } from '@/components/common/TechIcon';
import { skillCategories } from '@/data/skills';
import { cn } from '@/utils/cn';

const categoryIconMap = {
  frontend: Layout,
  backend: Server,
  databases: Database,
  'tools-deployment': Wrench,
};

const categoryStyling = {
  frontend: {
    badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    iconWrapper: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    hoverBorder: 'hover:border-blue-500/40 dark:hover:border-blue-400/40',
    hoverGlow: 'hover:shadow-[0_12px_36px_-6px_rgba(59,130,246,0.12)]',
    ambientGlow: 'from-blue-500/15 via-blue-500/5 to-transparent',
    dot: 'bg-blue-500',
  },
  backend: {
    badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    iconWrapper: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    hoverBorder: 'hover:border-emerald-500/40 dark:hover:border-emerald-400/40',
    hoverGlow: 'hover:shadow-[0_12px_36px_-6px_rgba(16,185,129,0.12)]',
    ambientGlow: 'from-emerald-500/15 via-emerald-500/5 to-transparent',
    dot: 'bg-emerald-500',
  },
  databases: {
    badge: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    iconWrapper: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    hoverBorder: 'hover:border-cyan-500/40 dark:hover:border-cyan-400/40',
    hoverGlow: 'hover:shadow-[0_12px_36px_-6px_rgba(6,182,212,0.12)]',
    ambientGlow: 'from-cyan-500/15 via-cyan-500/5 to-transparent',
    dot: 'bg-cyan-500',
  },
  'tools-deployment': {
    badge: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    iconWrapper: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    hoverBorder: 'hover:border-purple-500/40 dark:hover:border-purple-400/40',
    hoverGlow: 'hover:shadow-[0_12px_36px_-6px_rgba(168,85,247,0.12)]',
    ambientGlow: 'from-purple-500/15 via-purple-500/5 to-transparent',
    dot: 'bg-purple-500',
  },
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
          badge="Technical Arsenal"
          title="Skills &"
          highlight="Technologies"
          subtitle="A categorized showcase of modern frontend, backend, database, and devops tooling I leverage to construct robust, high-performance web applications."
        />

        {/* 4 Category Containers: Balanced 2-column grid on desktop, single-column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-12 sm:mt-16">
          {skillCategories.map((category, index) => {
            const IconComponent = categoryIconMap[category.id] || Layout;
            const styling = categoryStyling[category.id] || categoryStyling.frontend;

            return (
              <motion.div
                key={category.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className={cn(
                  'group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-8',
                  'bg-white/80 dark:bg-[#0F172A]/75 backdrop-blur-xl',
                  'border border-slate-200/80 dark:border-white/10',
                  'shadow-soft-sm dark:shadow-soft-md',
                  'transition-[transform,border-color,box-shadow] duration-300',
                  styling.hoverBorder,
                  styling.hoverGlow
                )}
              >
                {/* Subtle ambient accent glow in top corner */}
                <div
                  className={cn(
                    'pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full blur-3xl opacity-50 dark:opacity-30 bg-gradient-to-br transition-opacity duration-300 group-hover:opacity-75',
                    styling.ambientGlow
                  )}
                  aria-hidden="true"
                />

                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={cn(
                          'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-200',
                          styling.iconWrapper
                        )}
                      >
                        <IconComponent className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                          {category.title}
                        </h3>
                        <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                          {category.skills.length} Technologies
                        </p>
                      </div>
                    </div>

                    {/* Category pill indicator */}
                    <span
                      className={cn(
                        'hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium border select-none',
                        styling.badge
                      )}
                    >
                      <span className={cn('h-1.5 w-1.5 rounded-full', styling.dot)} />
                      Active Stack
                    </span>
                  </div>

                  {/* Category Description */}
                  <p className="mt-3.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Divider */}
                  <div className="my-5 h-px w-full bg-slate-200/70 dark:bg-white/5" />

                  {/* Technologies Grid */}
                  <div
                    role="list"
                    aria-label={`${category.title} technologies`}
                    className={cn(
                      'grid gap-2.5 sm:gap-3.5',
                      category.skills.length <= 4
                        ? 'grid-cols-3'
                        : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4'
                    )}
                  >
                    {category.skills.map((tech) => (
                      <motion.div
                        key={tech.name}
                        whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        tabIndex={0}
                        role="listitem"
                        aria-label={tech.name}
                        className={cn(
                          'group/tech relative flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-xl text-center',
                          'bg-slate-50/80 hover:bg-white dark:bg-slate-900/50 dark:hover:bg-slate-800/80',
                          'border border-slate-200/70 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20',
                          'shadow-xs hover:shadow-md cursor-default select-none transition-colors duration-200',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 dark:focus-visible:ring-offset-slate-950'
                        )}
                      >
                        {/* Technology Icon Wrapper */}
                        <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg bg-white dark:bg-slate-800/90 p-1.5 shadow-xs border border-slate-200/60 dark:border-white/10 group-hover/tech:scale-110 transition-transform duration-200">
                          <TechIcon name={tech.name} className="h-6 w-6 sm:h-6.5 sm:w-6.5" />
                        </div>

                        {/* Technology Label */}
                        <span className="mt-2 text-xs sm:text-[13px] font-medium text-slate-700 dark:text-slate-200 group-hover/tech:text-slate-900 dark:group-hover/tech:text-white transition-colors duration-200 tracking-tight leading-tight line-clamp-2">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
