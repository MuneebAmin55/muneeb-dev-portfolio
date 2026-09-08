import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollProgress } from '@/components/feedback/ScrollProgress';
import { BackToTop } from '@/components/feedback/BackToTop';
import { LoadingScreen } from '@/components/feedback/LoadingScreen';
import { AnimatedBackground } from '@/components/common/AnimatedBackground';
import { FloatingShapes } from '@/components/common/FloatingShapes';
import { CustomCursor } from '@/components/common/CustomCursor';

export function MainLayout() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#020617] text-foreground selection:bg-blue-500/25 selection:text-cyan-400">
      <LoadingScreen />
      <CustomCursor />
      <AnimatedBackground />
      <FloatingShapes />
      <ScrollProgress />
      <Navbar />

      <div className="flex-grow">
        <Outlet />
      </div>

      <Footer />
      <BackToTop />
      <ScrollRestoration />
    </div>
  );
}
