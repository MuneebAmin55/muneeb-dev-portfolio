import React from 'react';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';

export function AboutPage() {
  return (
    <PageWrapper
      title="About & Engineering Philosophy"
      description="Biography, architectural philosophy, and technical principles of Muneeb Amin."
    >
      <AboutSection />
      <SkillsSection />
    </PageWrapper>
  );
}

export default AboutPage;
