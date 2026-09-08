import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, Star, GitFork, ExternalLink, Flame, Trophy, Copy, Check } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { GithubIcon } from '@/components/common/Icons';
import { githubData } from '@/data/github';
import { slideUp } from '@/utils/animations';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Mon', 'Wed', 'Fri'];
const HEATMAP_COLORS = [
  'bg-slate-800/40 border border-white/[0.03]',
  'bg-emerald-950/60 border border-emerald-900/30',
  'bg-emerald-800/70 border border-emerald-700/40',
  'bg-emerald-600 border border-emerald-500/40',
  'bg-emerald-400 border border-emerald-300/40',
];


export function GitHubSection() {
  const [hoveredCell, setHoveredCell] = useState(null);
  const [copiedRepo, setCopiedRepo] = useState(null);

  const weeks = 36;
  const daysPerWeek = 7;

  const gridData = useMemo(() => {
    return Array.from({ length: 36 }).map((_, weekIdx) =>
      Array.from({ length: 7 }).map((_, dayIdx) => {
        const seed = (weekIdx * 7 + dayIdx * 3) % 17;
        const intensity = seed % 5;
        const count = intensity * 3 + (seed % 2);
        return { weekIdx, dayIdx, count, intensity };
      })
    );
  }, []);

  const copyCloneUrl = (repoName, url) => {
    navigator.clipboard.writeText(`git clone ${url}.git`);
    setCopiedRepo(repoName);
    setTimeout(() => setCopiedRepo(null), 2000);
  };

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <Container size="xl">
        <SectionTitle
          badge="Open Source & Activity"
          title="GitHub"
          highlight="Contributions"
          subtitle="A continuous track record of building open-source developer tooling, code reviews, and high-frequency delivery."
        />

        {/* Streak & Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          <div className="flex items-center gap-3.5 p-4 rounded-2xl border border-white/10 bg-[#0F172A]/70 backdrop-blur-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Flame className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Current Streak
              </span>
              <span className="text-lg font-bold text-white font-mono">
                42 Days Active
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl border border-white/10 bg-[#0F172A]/70 backdrop-blur-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Longest Streak
              </span>
              <span className="text-lg font-bold text-white font-mono">
                118 Days
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl border border-white/10 bg-[#0F172A]/70 backdrop-blur-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <GitBranch className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Annual Contributions
              </span>
              <span className="text-lg font-bold text-gradient font-mono">
                {githubData.stats.totalContributions}
              </span>
            </div>
          </div>
        </div>

        {/* GitHub Contribution Heatmap Card */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <Card
            hover
            glass
            className="p-7 sm:p-8 border-white/10 bg-[#0F172A]/75 backdrop-blur-xl hover:border-emerald-500/40 relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white">
                  <GithubIcon className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      @{githubData.username}
                    </h3>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      Verified Contributor
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Continuous shipping across open-source and client architectures
                  </p>
                </div>
              </div>

              <a
                href={githubData.profileUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" size="sm" rightIcon={ExternalLink} className="text-xs">
                  View Full Profile
                </Button>
              </a>
            </div>

            {/* Months Label Header */}
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mb-2 px-1">
              {months.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>

            {/* Simulated Interactive Contribution Heatmap */}
            <div className="relative overflow-x-auto pb-4">
              <div className="flex gap-1.5 min-w-[700px]">
                {gridData.map((week, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-1.5">
                    {week.map(({ dayIdx, count, intensity }) => {
                      const isHovered =
                        hoveredCell?.week === weekIdx && hoveredCell?.day === dayIdx;

                      return (
                        <div
                          key={dayIdx}
                          onMouseEnter={() =>
                            setHoveredCell({ week: weekIdx, day: dayIdx, count })
                          }
                          onMouseLeave={() => setHoveredCell(null)}
                          className={`h-3.5 w-3.5 rounded-sm ${HEATMAP_COLORS[intensity]} transition-all duration-150 cursor-pointer ${
                            isHovered ? 'scale-150 z-20 ring-2 ring-white shadow-glow-accent' : 'hover:scale-125'
                          }`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Hover Tooltip Indicator */}
              <div className="h-6 mt-3 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>
                  {hoveredCell
                    ? `${hoveredCell.count} contributions on week ${hoveredCell.week + 1}`
                    : 'Hover over activity squares to inspect frequency'}
                </span>
                <div className="flex items-center gap-1 text-[10px]">
                  <span>Less</span>
                  <span className="h-2.5 w-2.5 rounded-sm bg-slate-800/40" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-emerald-950/60" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-emerald-800/70" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-emerald-600" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-emerald-400" />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Language Breakdown */}
            <div className="mt-6 pt-6 border-t border-white/[0.08]">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                <span>Primary Language Distribution</span>
                <span>Production Repositories</span>
              </div>
              <div className="h-2 w-full rounded-full overflow-hidden flex bg-slate-800">
                {githubData.topLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color,
                    }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-3">
                {githubData.topLanguages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span>{lang.name}</span>
                    <span className="text-slate-500">({lang.percentage}%)</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Pinned Repositories Grid with Quick Copy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
          {githubData.pinnedRepositories.map((repo, i) => (
            <motion.div
              key={repo.name}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.15 + i * 0.1 }}
            >
              <Card
                hover
                glass
                className="p-6 border-white/10 bg-[#0F172A]/70 backdrop-blur-xl h-full flex flex-col justify-between hover:border-blue-500/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <GitBranch className="h-4 w-4 text-blue-400" />
                      <h4 className="text-sm font-bold text-white font-mono truncate max-w-[140px]">
                        {repo.name}
                      </h4>
                    </div>
                    <button
                      onClick={() => copyCloneUrl(repo.name, repo.url)}
                      title="Copy clone command"
                      className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {copiedRepo === repo.name ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-amber-400" /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3 w-3 text-slate-400" /> {repo.forks}
                    </span>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    <span>View</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
