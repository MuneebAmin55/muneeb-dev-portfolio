import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { SuspenseLoader } from '@/components/feedback/SuspenseLoader';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { ROUTES } from '@/constants/routes';

const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'));
const ExperiencePage = lazy(() => import('@/pages/ExperiencePage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<SuspenseLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<SuspenseLoader />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'projects',
        element: (
          <Suspense fallback={<SuspenseLoader />}>
            <ProjectsPage />
          </Suspense>
        ),
      },
      {
        path: 'experience',
        element: (
          <Suspense fallback={<SuspenseLoader />}>
            <ExperiencePage />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<SuspenseLoader />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<SuspenseLoader />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
