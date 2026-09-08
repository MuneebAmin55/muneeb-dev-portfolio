import React from 'react';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { EducationSection } from '@/components/sections/EducationSection';

export function ExperiencePage() {
  return (
    <PageWrapper
      title="Career & Education"
      description="Professional timeline, leadership milestones, and education of Muneeb Amin."
    >
      <ExperienceSection />
      <EducationSection />
    </PageWrapper>
  );
}

export default ExperiencePage;
