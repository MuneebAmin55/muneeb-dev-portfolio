import React from 'react';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { ContactSection } from '@/components/sections/ContactSection';

export function ContactPage() {
  return (
    <PageWrapper
      title="Contact & Consultation"
      description="Connect directly with Muneeb Amin for architecture consulting, freelance development, or full-time roles."
    >
      <ContactSection />
    </PageWrapper>
  );
}

export default ContactPage;
