import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Zap,
  Users,
  GitBranch,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Card } from "@/components/ui/Card";
import { personalData } from "@/data/personal";
import { slideUp, fadeIn } from "@/utils/animations";

const corePillars = [
  {
    icon: Layout,
    title: "Clean User Interfaces",
    description:
      "Designing intuitive, responsive, and accessible client-side architectures using React.js, Redux Toolkit, and Tailwind CSS.",
    tag: "Frontend Engineering",
    borderGlow: "hover:border-blue-500/40",
    colSpan: "md:col-span-1",
  },
  {
    icon: Server,
    title: "Scalable Backend Systems",
    description:
      "Constructing robust asynchronous servers, micro-services, and REST APIs using Node.js, Express.js, and Django REST Framework.",
    tag: "Backend Architecture",
    borderGlow: "hover:border-cyan-500/40",
    colSpan: "md:col-span-1",
  },
  {
    icon: Database,
    title: "Database-Driven Apps",
    description:
      "Architecting relational database schemas, complex query pipelines, and data consistency models with PostgreSQL and MySQL.",
    tag: "Data Modeling",
    borderGlow: "hover:border-emerald-500/40",
    colSpan: "md:col-span-1",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication & RBAC",
    description:
      "Implementing hardened authentication infrastructures: JWT token workflows, Google OAuth login, role-based authorization, and password reset flows.",
    tag: "Security & Auth",
    borderGlow: "hover:border-indigo-500/40",
    colSpan: "md:col-span-3",
  },
];

const aboutStats = [
  { value: "3+", label: "Production Projects", icon: Code2, color: "text-blue-400" },
  { value: "15+", label: "Technologies Used", icon: Zap, color: "text-cyan-400" },
  { value: "100%", label: "REST API Development", icon: GitBranch, color: "text-emerald-400" },
  { value: "Full", label: "Stack Development", icon: Users, color: "text-amber-400" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-1/3 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-cyan-500/10 blur-[40px] sm:blur-[80px] rounded-full pointer-events-none transform-gpu" style={{ contain: "paint" }} />

      <Container size="xl">
        <SectionTitle
          badge="About Muneeb"
          title="Passion For Building"
          highlight="End-To-End"
          subtitle="Experienced in transforming complex product requirements into robust, high-performance web systems."
        />

        {/* ─── Two-column: Photo | Content ─── */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-5xl mx-auto mb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Profile Photo */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              {/* Gradient border ring */}
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-tr from-blue-500 via-cyan-400 to-emerald-400 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                <div className="w-full h-full rounded-[14px] bg-[#0F172A]" />
              </div>

              {/* Glass shimmer frame */}
              <div className="absolute inset-[3px] rounded-[13px] overflow-hidden border border-white/10 group">
                <picture>
                  <source srcSet="/images/muneeb-amin.webp" type="image/webp" />
                  <img
                    src="/images/muneeb-amin.jpg"
                    alt="Muneeb Amin"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                {/* Subtle bottom glass overlay */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0F172A]/70 to-transparent" />
              </div>

              {/* Open to work badge */}
              <div className="absolute -bottom-4 -right-4 flex items-center gap-2 px-3 py-1.5 rounded-xl border border-emerald-500/30 bg-[#0F172A]/95 backdrop-blur-xl shadow-soft-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-semibold text-emerald-400 font-mono whitespace-nowrap">
                  Open to Work
                </span>
              </div>
            </div>
          </div>

          {/* About Text Content */}
          <Card
            hover
            glass
            className="lg:col-span-8 p-8 sm:p-10 border-white/10 bg-[#0F172A]/70 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              <p>{personalData.aboutParagraphs[0]}</p>
              <p className="text-slate-400">{personalData.aboutParagraphs[1]}</p>
            </div>

            {/* Core competency chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "React.js", "Redux Toolkit", "Node.js", "Express.js",
                "Django REST Framework", "PostgreSQL", "MySQL",
                "JWT Authentication", "REST APIs", "Tailwind CSS",
                "Git & GitHub", "Postman",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:border-blue-500/40 hover:text-blue-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Production Ready Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                <span>Modern Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
                <span>Security First Principles</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* ─── Animated Statistics Strip ─── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-14"
        >
          {aboutStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={slideUp}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-5 rounded-2xl border border-white/[0.07] bg-[#0F172A]/50 backdrop-blur-md hover:border-blue-500/30 transition-all group"
              >
                <Icon className={`h-5 w-5 mb-2 ${stat.color} group-hover:scale-110 transition-transform`} />
                <span className="text-2xl font-extrabold text-gradient font-mono">{stat.value}</span>
                <span className="text-xs text-slate-400 mt-1 font-medium text-center">{stat.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ─── Bento Grid of Pillars ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {corePillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
                className={item.colSpan}
              >
                <Card
                  hover
                  glass
                  className={`h-full border-white/10 bg-[#0F172A]/70 backdrop-blur-xl p-7 relative overflow-hidden transition-all duration-300 ${item.borderGlow}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 border border-white/10 rounded-full px-2.5 py-0.5 bg-white/5">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
