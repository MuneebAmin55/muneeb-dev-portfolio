import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Terminal, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/constants/routes';

export function NotFoundPage() {
  return (
    <PageWrapper
      title="404 - Page Not Located"
      description="The route you are searching for does not exist."
    >
      <Container size="md">
        <Section spacing="lg" className="text-center flex flex-col items-center pt-24 pb-24">
          {/* Animated 404 Glitch Glow */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
            <span className="relative font-mono text-8xl sm:text-9xl font-black text-gradient select-none">
              404
            </span>
          </motion.div>

          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-3.5 py-1 text-xs text-rose-400 mt-4">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>HTTP Status: 404 Not Found</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Destination Unreachable
          </h1>
          <p className="mt-3 text-sm text-slate-400 max-w-md leading-relaxed">
            The endpoint you requested does not map to any active route in Muneeb Amin&apos;s portfolio architecture.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to={ROUTES.HOME}>
              <Button variant="glow" leftIcon={Home} className="h-11 px-6 rounded-xl">
                Return to Architecture
              </Button>
            </Link>
            <Button
              variant="outline"
              leftIcon={ArrowLeft}
              onClick={() => window.history.back()}
              className="h-11 px-6 rounded-xl"
            >
              Previous Page
            </Button>
          </div>
        </Section>
      </Container>
    </PageWrapper>
  );
}

export default NotFoundPage;
