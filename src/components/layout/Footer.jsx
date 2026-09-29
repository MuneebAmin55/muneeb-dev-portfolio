import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, TwitterXIcon, MailIcon } from '@/components/common/Icons';
import { Container } from '@/components/common/Container';
import { SOCIAL_LINKS } from '@/constants/navigation';
import { personalData } from '@/data/personal';

const iconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Twitter: TwitterXIcon,
  Mail: MailIcon,
};

const IN_PAGE_LINKS = [
  { label: 'Hero', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.1 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToAnchor = (e, href) => {
    e.preventDefault();

    const scrollTarget = (el) => {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -80, duration: 1.1 });
      } else {
        const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => {
        const targetEl = document.querySelector(href);
        if (targetEl) scrollTarget(targetEl);
      }, 150);
    } else {
      const el = document.querySelector(href);
      if (el) scrollTarget(el);
    }
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#020617]/90 backdrop-blur-2xl">
      <Container size="xl" className="py-14 sm:py-18">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14 mb-14">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <a
              href="#hero"
              onClick={(e) => scrollToAnchor(e, '#hero')}
              className="flex items-center gap-2.5 focus:outline-none"
              aria-label="Return to top of portfolio"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 p-[1.5px] shadow-glow-primary">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#020617]">
                  <span className="font-mono text-xs font-extrabold text-gradient">
                    MA
                  </span>
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                {personalData.name}
              </span>
            </a>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {personalData.tagline}
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {personalData.status.message}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Sections
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {IN_PAGE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToAnchor(e, link.href)}
                    className="text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect & Socials */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = iconMap[social.icon] || MailIcon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0F172A] text-slate-400 transition-all duration-200 hover:border-blue-500/40 hover:text-white hover:scale-105"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/[0.06] pt-8 text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {personalData.name}. Designed & engineered with modern full stack standards.
          </p>
          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors focus:outline-none cursor-pointer"
          >
            <span>Return to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
