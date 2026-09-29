import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Card } from '@/components/ui/Card';
import { educationData } from '@/data/education';
import { slideUp } from '@/utils/animations';

export function EducationSection() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#0F172A]/20 to-transparent">
      <Container size="xl">
        <SectionTitle
          badge="Academic & Certifications"
          title="Education &"
          highlight="Credentials"
          subtitle="Rigorous foundations in computer science theory paired with verified enterprise cloud architecture certifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                hover
                glass
                className="h-full border-white/10 bg-[#0F172A]/70 backdrop-blur-xl p-7 flex flex-col justify-between hover:border-cyan-500/40 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      {index === 0 ? (
                        <GraduationCap className="h-5 w-5" />
                      ) : (
                        <Award className="h-5 w-5" />
                      )}
                    </div>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                    {item.degree}
                  </h3>

                  <p className="text-xs font-medium text-slate-400 mb-3">
                    {item.institution} &bull;{' '}
                    <span className="text-emerald-400">{item.grade}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
