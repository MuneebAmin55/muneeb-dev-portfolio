import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, Database, Shield, Cloud, Wrench, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Card } from '@/components/ui/Card';
import { skillsData } from '@/data/skills';
import { cn } from '@/utils/cn';

const categories = [
  { key: 'all', label: 'All Skills', icon: null },
  { key: 'frontend', label: 'Frontend', icon: Code },
  { key: 'backend', label: 'Backend', icon: Server },
  { key: 'database', label: 'Databases', icon: Database },
  { key: 'authentication', label: 'Auth & Security', icon: Shield },
  { key: 'apiAndDeployment', label: 'APIs & Cloud', icon: Cloud },
  { key: 'tools', label: 'Tools', icon: Wrench },
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const allSkills = useMemo(() => [
    ...skillsData.frontend,
    ...skillsData.backend,
    ...skillsData.database,
    ...skillsData.authentication,
    ...skillsData.apiAndDeployment,
    ...skillsData.tools,
  ], []);

  const displayedSkills = useMemo(
    () => (activeCategory === 'all' ? allSkills : skillsData[activeCategory] || []),
    [activeCategory, allSkills]
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#0F172A]/20 to-transparent">
      <Container size="xl">
        <SectionTitle
          badge="Technical Arsenal"
          title="Core Engineering &"
          highlight="Proficiencies"
          subtitle="A comprehensive overview of full stack technologies, frameworks, and architecture tools utilized in production applications."
        />

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-12 mb-12">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.key;

            return (
              <button
                type="button"
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer select-none',
                  isActive
                    ? 'bg-blue-600 text-white shadow-glow-primary border border-blue-400/40'
                    : 'bg-[#0F172A]/70 text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
                )}
              >
                {IconComponent && <IconComponent className="h-3.5 w-3.5" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.2) }}
              >
                <Card
                  hover
                  glass
                  className="p-5 border-white/10 bg-[#0F172A]/70 backdrop-blur-xl relative group hover:border-cyan-500/40 transform-gpu"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-400 group-hover:bg-cyan-400 transition-colors" />
                      <h4 className="text-sm font-semibold text-white tracking-tight">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 font-medium">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated Progress Bar (ScaleX GPU transform instead of layout-reflowing width) */}
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      style={{ width: `${skill.level}%` }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.04 }}
                      className="h-full origin-left bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-full transform-gpu"
                    />
                  </div>

                  <div className="flex items-center justify-between mt-3 text-[11px] text-slate-400 font-mono">
                    <span>{skill.category}</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> Proficient
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
