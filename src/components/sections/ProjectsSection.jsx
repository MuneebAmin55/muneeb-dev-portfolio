import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ExternalLink,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
  Eye,
} from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { projectsData } from "@/data/projects";
import { slideUp } from "@/utils/animations";
import { cn } from "@/utils/cn";

/* Reusable Quick-View Modal using accessible Modal component */
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <Modal
      isOpen={!!project}
      onClose={onClose}
      ariaLabel={`Project details for ${project.title}`}
      maxWidth="max-w-4xl"
      className="p-0 overflow-hidden"
    >
      {/* Screenshot banner */}
      <div className="relative w-full h-64 sm:h-80 bg-slate-950 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/40" />
        <div className="absolute bottom-4 left-6 right-14">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-2">
            {project.subtitle}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-8 space-y-6 text-slate-300">
        <p className="text-sm sm:text-base leading-relaxed">{project.description}</p>

        <div>
          <h4 className="text-xs uppercase font-mono font-semibold text-slate-400 mb-3">Key Features</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs bg-white/[0.03] border border-white/[0.06] px-3 py-2 rounded-lg">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase font-mono font-semibold text-slate-400 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-800 text-slate-200 border border-white/5">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
          <a
            href={project.githubUrl}
            onClick={(e) => { if (project.githubUrl === "#") { e.preventDefault(); alert("GitHub coming soon!"); }}}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-white/10 transition-colors"
          >
            <GithubIcon className="h-4 w-4" /> View Code
          </a>
          <a
            href={project.liveUrl}
            onClick={(e) => { if (project.liveUrl === "#") { e.preventDefault(); alert("Live demo coming soon!"); }}}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-md transition-all"
          >
            Live Demo <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </Modal>
  );
}

/* Featured (Large) Project Card */
const FeaturedProjectCard = React.memo(function FeaturedProjectCard({ project, onView }) {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="group relative rounded-2xl border border-white/10 bg-[#0F172A]/80 backdrop-blur-xl overflow-hidden shadow-soft-lg hover:border-blue-500/50 transition-all duration-500 mb-8"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/10 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Screenshot */}
        <div className="relative overflow-hidden h-72 lg:h-auto min-h-[320px]">
          <picture>
            <source srcSet={project.image.replace(/\.(png|jpg)$/, '.webp')} type="image/webp" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 lg:bg-gradient-to-r from-transparent via-transparent to-[#0F172A]/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent lg:hidden" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-amber-300 bg-amber-500/15 border border-amber-500/30 backdrop-blur-md">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {project.category}
            </span>
          </div>

          {/* Quick view button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              type="button"
              onClick={() => onView(project)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/90 hover:bg-blue-500 text-white text-xs font-semibold backdrop-blur-md shadow-lg transition-colors"
            >
              <Eye className="h-4 w-4" /> Quick View
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                <Sparkles className="h-3 w-3" /> {project.badge}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm font-semibold text-cyan-300/90 font-mono mb-4">{project.subtitle}</p>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">{project.description}</p>

            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">Key Features:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1.5 rounded-lg">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-8">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-slate-800/80 text-slate-200 border-white/5 text-[11px]">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-5 border-t border-white/[0.08]">
            <a
              href={project.githubUrl}
              onClick={(e) => { if (project.githubUrl === "#") { e.preventDefault(); alert(`GitHub coming soon for ${project.title}!`); }}}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold transition-colors"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <a
              href={project.liveUrl}
              onClick={(e) => { if (project.liveUrl === "#") { e.preventDefault(); alert(`Live Demo coming soon for ${project.title}!`); }}}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-glow-primary transition-all"
            >
              Live Demo <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

/* Standard Project Card */
const ProjectCard = React.memo(function ProjectCard({ project, index, onView }) {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.08 }}
      className="group relative rounded-2xl border border-white/10 bg-[#0F172A]/75 backdrop-blur-xl overflow-hidden flex flex-col shadow-soft-md hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none bg-gradient-to-tr from-blue-600/8 to-cyan-500/5" />
      <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />

      {/* Screenshot container */}
      <div className="relative overflow-hidden h-52 sm:h-56 flex-shrink-0 bg-slate-950">
        <picture>
          <source srcSet={project.image.replace(/\.(png|jpg)$/, '.webp')} type="image/webp" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full backdrop-blur-md">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full backdrop-blur-md">
            <Sparkles className="h-2.5 w-2.5" /> {project.badge}
          </span>
        </div>

        {/* Quick view overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            onClick={() => onView(project)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg transition-colors"
          >
            <Eye className="h-3.5 w-3.5" /> Quick View
          </button>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-white tracking-tight mb-1 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-medium text-cyan-300/90 font-mono mb-3">{project.subtitle}</p>
          <p className="text-sm text-slate-300 leading-relaxed mb-5">{project.description}</p>

          <div className="mb-5">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">Key Features:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1.5 rounded-lg">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-slate-800/80 text-slate-200 border-white/5 text-[11px]">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-5 mt-4 border-t border-white/[0.08] flex items-center justify-between">
          <a
            href={project.githubUrl}
            onClick={(e) => { if (project.githubUrl === "#") { e.preventDefault(); alert(`GitHub coming soon for ${project.title}!`); }}}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
          <a
            href={project.liveUrl}
            onClick={(e) => { if (project.liveUrl === "#") { e.preventDefault(); alert(`Live Demo coming soon for ${project.title}!`); }}}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            Live Demo <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
});

/* Main Section */
export function ProjectsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [viewProject, setViewProject] = useState(null);

  const filterTags = ["All", "Full Stack", "Web Application", "E-Commerce Platform", "Featured Project"];

  const featuredProject = projectsData.find((p) => p.isLargeFeatured);
  const otherProjects = projectsData.filter((p) => !p.isLargeFeatured);

  const filteredOthers = useMemo(() => {
    return otherProjects.filter((p) => {
      const matchTag = selectedTag === "All" || p.category === selectedTag;
      const matchSearch =
        !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchTag && matchSearch;
    });
  }, [selectedTag, searchQuery, otherProjects]);

  const resetFilters = () => { setSearchQuery(""); setSelectedTag("All"); };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-600/10 blur-[70px] rounded-full pointer-events-none transform-gpu" style={{ contain: "paint" }} />

      <Container size="xl">
        <SectionTitle
          badge="Production Portfolio"
          title="Featured Full Stack"
          highlight="Applications"
          subtitle="Live web platforms built with React, Django REST Framework, Node.js, and SQL databases - each production-deployed."
        />

        {/* Featured Hero Project */}
        {featuredProject && (
          <FeaturedProjectCard project={featuredProject} onView={setViewProject} />
        )}

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
          <div className="relative w-full sm:w-72 flex-shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, title (e.g. Django)..."
              aria-label="Search projects by title, description, or technology"
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-[#0F172A]/80 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-md"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
              <SlidersHorizontal className="h-3 w-3" /> Filter:
            </span>
            {filterTags.map((tag) => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  type="button"
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={cn(
                    "text-xs px-3 py-1 rounded-lg border transition-all duration-200 cursor-pointer",
                    isSelected
                      ? "bg-blue-500/20 border-blue-500/50 text-white font-medium shadow-glow-primary"
                      : "bg-[#0F172A]/60 border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                  )}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Standard Project Cards Grid */}
        <AnimatePresence mode="popLayout">
          {filteredOthers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredOthers.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} onView={setViewProject} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 px-4 rounded-2xl border border-dashed border-white/10 bg-[#0F172A]/40 max-w-xl mx-auto"
            >
              <Search className="h-8 w-8 text-slate-500 mx-auto mb-3" />
              <h4 className="text-base font-bold text-white mb-1">No matching projects found</h4>
              <p className="text-xs text-slate-400 mb-6">
                No projects matched &quot;{searchQuery}&quot; with filter &quot;{selectedTag}&quot;.
              </p>
              <Button variant="outline" size="sm" onClick={resetFilters}>Reset Filters</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>

      {/* Quick-View Modal */}
      {viewProject && (
        <ProjectModal project={viewProject} onClose={() => setViewProject(null)} />
      )}
    </section>
  );
}
