import React, { lazy, Suspense } from 'react';

// Eager load Home page for better initial load (LCP optimization)
import Home from "../Pages/Home/Home"

// Lazy load all other routes for code splitting (FID optimization)
const About = lazy(() => import("../Pages/About/About"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));
const Projects = lazy(() => import("../Pages/Projects/Projects"));
const ProjectDetail = lazy(() => import("../Pages/Projects/Sub-Projects/ProjectDetail"));
const Services = lazy(() => import("../Pages/Services/Services"));
const ServiceDetail = lazy(() => import("../Pages/Services/Sub-Services/ServiceDetail"));
const Solutions = lazy(() => import("../Pages/Solutions/Solutions"));
const SolutionDetail = lazy(() => import("../Pages/Solutions/Sub-Solutions/SolutionDetail"));
const Industries = lazy(() => import("../Pages/Industries/Industries"));
const Resources = lazy(() => import("../Pages/Resources/Resources"));
const TermsOfUse = lazy(() => import("../Pages/Legal/TermsOfUse"));
const PrivacyPolicy = lazy(() => import("../Pages/Legal/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("../Pages/Legal/CookiePolicy"));

// Loading component for suspense fallback
const PageLoader = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9fafb'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '48px',
        height: '48px',
        border: '4px solid #e5e7eb',
        borderTop: '4px solid #4ade80',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 16px'
      }}></div>
      <p style={{ color: '#6b7280', fontSize: '14px' }}>Loading...</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  </div>
);

// Wrapper to add Suspense to lazy-loaded components
const withSuspense = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: withSuspense(About)
    },
    {
        path: '/contact',
        element: withSuspense(Contact)
    },
    {
        path: '/projects',
        element: withSuspense(Projects)
    },
    {
        path: '/projects/:slug',
        element: withSuspense(ProjectDetail)
    },
    {
        path: '/services',
        element: withSuspense(Services)
    },
    {
        path: '/services/:slug',
        element: withSuspense(ServiceDetail)
    },
    {
        path: '/solutions',
        element: withSuspense(Solutions)
    },
    {
        path: '/solutions/:slug',
        element: withSuspense(SolutionDetail)
    },
    {
        path: '/industries',
        element: withSuspense(Industries)
    },
    {
        path: '/resources',
        element: withSuspense(Resources)
    },
    {
        path: '/terms-of-use',
        element: withSuspense(TermsOfUse)
    },
    {
        path: '/privacy-policy',
        element: withSuspense(PrivacyPolicy)
    },
    {
        path: '/cookie-policy',
        element: withSuspense(CookiePolicy)
    }
]

export default routes;

