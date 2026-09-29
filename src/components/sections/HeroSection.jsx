import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Mail,
  MessageCircle,
  CheckCircle2,
  Download,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { FloatingTechIcons } from "@/components/common/FloatingTechIcons";
import { personalData } from "@/data/personal";
import { slideUp, fadeIn } from "@/utils/animations";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export function HeroSection() {

  /* Parallax tilt for the terminal card (only on fine pointer / desktop devices) */
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const boundsRef = useRef(null);
  const handleMouseEnter = (e) => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    boundsRef.current = e.currentTarget.getBoundingClientRect();
  };
  const handleMouseMove = (e) => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (!boundsRef.current) {
      boundsRef.current = e.currentTarget.getBoundingClientRect();
    }
    const rect = boundsRef.current;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    boundsRef.current = null;
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden min-h-screen flex items-center">
      {/* Ambient background glows with responsive blur for mobile GPU speed */}
      <div className="absolute inset-0 pointer-events-none -z-10" style={{ contain: "paint", isolation: "isolate" }}>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[350px] sm:w-[700px] h-[250px] sm:h-[400px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-transparent blur-[35px] sm:blur-[70px] rounded-full transform-gpu" />
        <div className="absolute bottom-24 left-1/4 w-[220px] sm:w-[350px] h-[220px] sm:h-[350px] bg-emerald-500/10 blur-[30px] sm:blur-[60px] rounded-full transform-gpu" />
        <div className="absolute top-20 right-10 w-[180px] sm:w-[280px] h-[180px] sm:h-[280px] bg-indigo-600/10 blur-[30px] sm:blur-[50px] rounded-full transform-gpu" />
        {/* Fine grid */}
        <div className="absolute inset-0 bg-grid-subtle [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_65%,transparent_100%)]" />
      </div>

      <FloatingTechIcons />

      <Container size="xl" className="relative z-10 w-full">
        {/* ─── Two-column layout: left content | right photo ─── */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── LEFT COLUMN: Text Content ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl w-full">
            {/* Status Badge */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#0F172A]/80 px-4 py-1.5 backdrop-blur-xl shadow-soft-sm mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-300 tracking-wide">
                {personalData.status.message}
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.05 }}
              className="text-sm sm:text-base font-semibold font-mono text-cyan-400 uppercase tracking-widest mb-2"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-3"
            >
              {personalData.name}
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gradient mb-6"
            >
              {personalData.title}
            </motion.h2>

            {/* Tagline */}
            <motion.p
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-10"
            >
              {personalData.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.28 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
            >
              <Button
                variant="glow"
                size="lg"
                rightIcon={ArrowRight}
                onClick={() => scrollTo("projects")}
                className="h-12 px-7 rounded-xl font-semibold shadow-glow-primary cursor-pointer"
              >
                View Projects
              </Button>
              <a
                href={personalData.resumeUrl || "/resume.pdf"}
                download="Muneeb_Amin_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="glass"
                  size="lg"
                  leftIcon={Download}
                  className="h-12 px-7 rounded-xl font-medium border-white/10 hover:border-blue-500/40 cursor-pointer"
                >
                  Download CV
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                leftIcon={MessageCircle}
                onClick={() => scrollTo("contact")}
                className="h-12 px-7 rounded-xl font-medium cursor-pointer"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.35 }}
              className="flex items-center gap-3"
            >
              {[
                { href: personalData.github, icon: GithubIcon, label: "GitHub", color: "hover:border-slate-400/60 hover:text-white" },
                { href: personalData.linkedin, icon: LinkedinIcon, label: "LinkedIn", color: "hover:border-blue-500/60 hover:text-blue-400" },
                { href: `mailto:${personalData.email}`, icon: Mail, label: "Email", color: "hover:border-cyan-500/60 hover:text-cyan-400" },
              ].map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-[#0F172A]/80 backdrop-blur-sm text-slate-400 transition-all duration-200 ${color} shadow-soft-sm`}
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
              <span className="ml-1 text-xs font-mono text-slate-500">
                {personalData.email}
              </span>
            </motion.div>

            {/* Tech Stack Badge Row */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-1.5 max-w-lg"
            >
              {["React.js", "Redux Toolkit", "Node.js", "Express.js", "Django REST", "PostgreSQL", "MySQL", "Tailwind CSS", "Git", "GitHub", "JavaScript"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-slate-300 bg-[#0F172A]/80 border border-white/10 px-2.5 py-1 rounded-lg backdrop-blur-md hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Professional Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative flex-shrink-0 w-72 h-72 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px]"
          >
            {/* Outer animated gradient ring (Compositor-thread GPU animation) */}
            <div
              className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-tr from-blue-500 via-cyan-400 to-emerald-400 animate-spin-slow transform-gpu"
              style={{ borderRadius: "9999px" }}
            >
              <div className="w-full h-full rounded-full bg-[#020617]" />
            </div>

            {/* Static secondary ring */}
            <div className="absolute inset-[6px] rounded-full border border-white/10" />

            {/* Glow pulse behind */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl -z-10"
            />

            {/* Floating oscillation wrapper */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[4px] rounded-full overflow-hidden shadow-[0_24px_60px_rgba(59,130,246,0.35)]"
            >
              <picture>
                <source srcSet="/images/muneeb-amin.webp" type="image/webp" />
                <img
                  src="/images/muneeb-amin.jpg"
                  alt="Muneeb Amin — Full Stack Developer"
                  className="w-full h-full object-cover object-top rounded-full"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width="400"
                  height="400"
                />
              </picture>
              {/* Subtle glass overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent" />
            </motion.div>

            {/* Developer Role Badge — bottom-center of photo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#0F172A]/90 backdrop-blur-xl shadow-soft-md whitespace-nowrap"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-200 font-mono">Full Stack Developer</span>
            </motion.div>

            {/* Floating mini stat — left */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-12 top-1/3 flex flex-col items-center justify-center w-20 h-20 rounded-2xl border border-white/10 bg-[#0F172A]/90 backdrop-blur-xl shadow-soft-md"
            >
              <span className="text-xl font-extrabold text-gradient font-mono">1+</span>
              <span className="text-[10px] text-slate-400 text-center leading-tight mt-0.5">Years Exp.</span>
            </motion.div>

            {/* Floating mini stat — right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute -right-12 top-1/4 flex flex-col items-center justify-center w-20 h-20 rounded-2xl border border-white/10 bg-[#0F172A]/90 backdrop-blur-xl shadow-soft-md"
            >
              <span className="text-xl font-extrabold text-gradient font-mono">5+</span>
              <span className="text-[10px] text-slate-400 text-center leading-tight mt-0.5">Projects</span>
            </motion.div>
          </motion.div>
        </div>

        {/* ─── Animated Statistics Row ─── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.48 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-3xl mx-auto lg:mx-0"
        >
          {[
            { label: "Years Experience", value: personalData.yearsOfExperience },
            { label: "Shipped Systems", value: personalData.completedProjects },
            { label: "Satisfied Clients", value: personalData.satisfiedClients },
            { label: "GitHub Commits", value: personalData.codeCommits },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center p-4 rounded-2xl border border-white/[0.07] bg-[#0F172A]/50 backdrop-blur-md shadow-soft-sm hover:border-blue-500/30 transition-colors group"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-gradient font-mono group-hover:scale-105 transition-transform">
                <AnimatedCounter value={stat.value} duration={1600} />
              </span>
              <span className="text-xs text-slate-400 mt-1 font-medium text-center">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ─── Parallax Terminal Card ─── */}
        <motion.div
          ref={cardRef}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={slideUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.55 }}
          className="mt-12 w-full max-w-2xl mx-auto lg:mx-0 rounded-2xl border border-white/10 bg-[#0F172A]/90 p-5 backdrop-blur-2xl shadow-soft-lg text-left overflow-hidden cursor-crosshair group"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2">muneeb-amin-dev.js</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>production-ready</span>
            </div>
          </div>
          <pre className="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto">
            <code>
              <span className="text-blue-400">const</span>{" "}
              <span className="text-cyan-300">developer</span> = {"{\n"}
              {"  "}name: <span className="text-emerald-400">&apos;Muneeb Amin&apos;</span>,{"  "}
              {"  "}role: <span className="text-emerald-400">&apos;Full Stack Developer&apos;</span>,{"\n"}
              {"  "}frontend: [<span className="text-emerald-400">&apos;React.js&apos;</span>, <span className="text-emerald-400">&apos;Redux Toolkit&apos;</span>, <span className="text-emerald-400">&apos;Tailwind CSS&apos;</span>],{"\n"}
              {"  "}backend: [<span className="text-emerald-400">&apos;Node.js&apos;</span>, <span className="text-emerald-400">&apos;Express.js&apos;</span>, <span className="text-emerald-400">&apos;Django REST&apos;</span>],{"\n"}
              {"  "}databases: [<span className="text-emerald-400">&apos;PostgreSQL&apos;</span>, <span className="text-emerald-400">&apos;MySQL&apos;</span>],{"\n"}
              {"  "}authentication: [<span className="text-cyan-300">&apos;JWT&apos;</span>, <span className="text-cyan-300">&apos;Google OAuth&apos;</span>, <span className="text-cyan-300">&apos;Role-Based&apos;</span>]{"\n"}
              {"}"};
            </code>
          </pre>
        </motion.div>
      </Container>

    </section>
  );
}


