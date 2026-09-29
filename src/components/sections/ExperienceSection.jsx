import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { experienceData } from '@/data/experience';
import { slideUp } from '@/utils/animations';
import { cn } from '@/utils/cn';

export function ExperienceSection() {
  const [activeExpId, setActiveExpId] = useState(experienceData[0]?.id);
  const [expandedAchievements, setExpandedAchievements] = useState({});

  const toggleAchievements = (id) => {
    setExpandedAchievements((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <Container size="xl">
        <SectionTitle
          badge="Track Record"
          title="Career"
          highlight="Milestones"
          subtitle="Delivering reliable distributed platforms, leading technical teams, and scaling modern web apps."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12 pl-6 sm:pl-10">
          {/* Glowing Vertical Timeline Track */}
          <div className="absolute left-2 sm:left-3.5 top-3 bottom-3 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500 opacity-40" />

          <div className="space-y-8">
            {experienceData.map((exp, index) => {
              const isActive = activeExpId === exp.id;
              const isExpanded = expandedAchievements[exp.id] !== false; // default expanded

              return (
                <motion.div
                  key={exp.id}
                  variants={slideUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index * 0.12 }}
                  className="relative"
                >
                  {/* Timeline Milestone Node */}
                  <div
                    onClick={() => setActiveExpId(exp.id)}
                    className={cn(
                      'absolute -left-6 sm:-left-10 top-6 flex h-7 w-7 items-center justify-center rounded-full border cursor-pointer transition-all duration-300 z-10',
                      isActive
                        ? 'border-blue-400 bg-[#020617] shadow-glow-primary scale-110'
                        : 'border-white/20 bg-[#0F172A] hover:border-cyan-400'
                    )}
                  >
                    <span
                      className={cn(
                        'h-2.5 w-2.5 rounded-full transition-colors',
                        isActive ? 'bg-cyan-400 animate-pulse' : 'bg-slate-500'
                      )}
                    />
                  </div>

                  <Card
                    hover
                    glass
                    onClick={() => setActiveExpId(exp.id)}
                    className={cn(
                      'p-6 sm:p-8 border bg-[#0F172A]/70 backdrop-blur-xl transition-all duration-300 cursor-pointer relative',
                      isActive
                        ? 'border-blue-500/50 shadow-soft-lg bg-[#0F172A]/90'
                        : 'border-white/10 hover:border-white/20'
                    )}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-white tracking-tight">
                            {exp.role}
                          </h3>
                          {isActive && (
                            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                              Active Selection
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-blue-400 font-medium mt-0.5">
                          <Briefcase className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                          <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                          <MapPin className="h-3 w-3 text-emerald-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements Toggle Header */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAchievements(exp.id);
                        }}
                        className="flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-cyan-300 transition-colors mb-3 focus:outline-none cursor-pointer"
                      >
                        <span>{isExpanded ? 'Hide Key Achievements' : 'Show Key Achievements'}</span>
                        {isExpanded ? (
                          <ChevronUp className="h-3.5 w-3.5" />
                        ) : (
                          <ChevronDown className="h-3.5 w-3.5" />
                        )}
                      </button>

                      {/* Expandable Achievements */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2 mb-4 overflow-hidden"
                          >
                            {exp.achievements.map((item, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-white/[0.02] p-2 rounded-lg border border-white/[0.04]"
                              >
                                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Tech Stack Used */}
                    <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-slate-800 text-slate-300 text-[11px]"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
