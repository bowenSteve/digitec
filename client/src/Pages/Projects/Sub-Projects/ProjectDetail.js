import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import ProjectHero from './components/ProjectHero';
import ProjectFeatures from './components/ProjectFeatures';
import ProjectProcess from './components/ProjectProcess';
import ProjectOutcomes from './components/ProjectOutcomes';
import { getProjectBySlug, getAllProjectSlugs } from '../../../data/projectsData';

const ProjectDetail = () => {
  // Get the project slug from URL (e.g., /projects/lidar-point-cloud-processing)
  const { slug } = useParams();

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Get project data from our central data file
  const projectData = getProjectBySlug(slug);

  // Get all project slugs for navigation
  const allSlugs = getAllProjectSlugs();
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  // If project doesn't exist, redirect to projects page
  if (!projectData) {
    return <Navigate to="/projects" replace />;
  }

  // Destructure all data sections
  const { hero, features, industries, process, outcomes } = projectData;

  return (
    <div className="bg-white">
      <Navbar />

      {/* Back to Projects Button */}
      <div className="w-full max-w-screen-2xl mx-auto px-5 sm:px-8 xl:px-20 pt-24">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-red-500 transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Back to Projects</span>
        </Link>
      </div>

      {/* Hero Section */}
      <ProjectHero
        category={hero.category}
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        images={hero.images}
        technologies={hero.technologies}
        keyFeatures={hero.keyFeatures}
        description={hero.description}
      />

      {/* Features Section */}
      <ProjectFeatures
        features={features}
        industries={industries}
      />

      {/* Process Section */}
      <ProjectProcess process={process} />

      {/* Outcomes Section */}
      <ProjectOutcomes outcomes={outcomes} />

      {/* Project Navigation */}
      <section className="w-full max-w-screen-2xl mx-auto px-5 sm:px-8 xl:px-20 py-16 mb-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-200 pt-10">

          {/* Previous Project */}
          {prevSlug ? (
            <Link
              to={`/projects/${prevSlug}`}
              className="group flex items-center gap-3 px-6 py-4 bg-gray-50 hover:bg-red-50 rounded-xl transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full group-hover:bg-red-100 transition-colors">
                <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-red-500" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Previous</p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-red-500 transition-colors">
                  Previous Project
                </p>
              </div>
            </Link>
          ) : (
            <div className="w-full sm:w-auto"></div>
          )}

          {/* Back to Projects - Center */}
          <Link
            to="/projects"
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Projects
          </Link>

          {/* Next Project */}
          {nextSlug ? (
            <Link
              to={`/projects/${nextSlug}`}
              className="group flex items-center gap-3 px-6 py-4 bg-gray-50 hover:bg-red-50 rounded-xl transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
            >
              <div className="text-right">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Next</p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-red-500 transition-colors">
                  Next Project
                </p>
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full group-hover:bg-red-100 transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-red-500" />
              </div>
            </Link>
          ) : (
            <div className="w-full sm:w-auto"></div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
