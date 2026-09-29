import React from 'react';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { GitHubSection } from '@/components/sections/GitHubSection';

export function ProjectsPage() {
  return (
    <PageWrapper
      title="Featured Projects & Open Source"
      description="Production systems, cloud architectures, and open source contributions by Muneeb Amin."
    >
      <ProjectsSection />
      <GitHubSection />
    </PageWrapper>
  );
}

export default ProjectsPage;
