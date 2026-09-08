import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/common/Container';
import { cn } from '@/utils/cn';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { isScrolled } = useScrollPosition(20);
  const location = useLocation();
  const navigate = useNavigate();

  // High-performance IntersectionObserver Scroll Spy (zero layout reflows)
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sectionIds = ['hero', ...NAV_ITEMS.map((item) => item.href.substring(1))];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          const topOffset = targetEl.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
      }, 150);
    } else {
      const targetEl = document.querySelector(href);
      if (targetEl) {
        const topOffset = targetEl.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 transform-gpu',
        isScrolled
          ? 'bg-[#020617]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-soft-sm'
          : 'bg-transparent py-5'
      )}
    >
      <Container size="xl">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Return to top of portfolio"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-glow-primary">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#020617]">
                <span className="font-mono text-sm font-extrabold text-gradient">
                  MA
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white transition-colors group-hover:text-blue-400">
                Muneeb Amin
              </span>
              <span className="font-mono text-[10px] text-slate-400">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-[#0F172A]/70 px-4 py-1.5 backdrop-blur-xl shadow-soft-sm"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    'relative px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full tracking-wide',
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-100'
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-full bg-blue-500/20 border border-blue-500/40 -z-10 shadow-glow-primary"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <Button
                variant="glow"
                size="sm"
                rightIcon={ArrowUpRight}
                className="font-medium text-xs h-9 px-4 rounded-xl"
              >
                Let&apos;s Connect
              </Button>
            </a>
          </div>

          {/* Mobile Menu & Theme Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0F172A] text-slate-200 transition-colors hover:bg-slate-800 focus:outline-none"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-b border-white/10 bg-[#020617]/95 backdrop-blur-2xl px-6 py-6"
          >
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      'flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30 font-semibold'
                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />}
                  </a>
                );
              })}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block w-full"
                >
                  <Button variant="glow" className="w-full h-11 rounded-xl">
                    Let&apos;s Connect
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
