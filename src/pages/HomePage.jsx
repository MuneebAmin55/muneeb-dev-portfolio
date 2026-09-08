import React, { lazy, Suspense } from 'react';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { personalData } from '@/data/personal';

// Code-split below-the-fold sections for maximum mobile speed, instant LCP, and low TBT
const SkillsSection = lazy(() => import('@/components/sections/SkillsSection').then(m => ({ default: m.SkillsSection })));
const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const ExperienceSection = lazy(() => import('@/components/sections/ExperienceSection').then(m => ({ default: m.ExperienceSection })));
const EducationSection = lazy(() => import('@/components/sections/EducationSection').then(m => ({ default: m.EducationSection })));
const GitHubSection = lazy(() => import('@/components/sections/GitHubSection').then(m => ({ default: m.GitHubSection })));
const ContactSection = lazy(() => import('@/components/sections/ContactSection').then(m => ({ default: m.ContactSection })));

export function HomePage() {
  return (
    <PageWrapper
      title={`${personalData.name} | Senior Full Stack Developer & Architect`}
      description={personalData.tagline}
      className="pt-0 pb-0"
    >
      <HeroSection />
      <AboutSection />
      <Suspense fallback={<div className="py-12" />}>
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <GitHubSection />
        <ContactSection />
      </Suspense>
    </PageWrapper>
  );
}

export default HomePage;
