import React from 'react';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { GitHubSection } from '@/components/sections/GitHubSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { personalData } from '@/data/personal';

export function HomePage() {
  return (
    <PageWrapper
      title={`${personalData.name} | Senior Full Stack Developer & Architect`}
      description={personalData.tagline}
      className="pt-0 pb-0"
    >
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <GitHubSection />
      <ContactSection />
    </PageWrapper>
  );
}

export default HomePage;
