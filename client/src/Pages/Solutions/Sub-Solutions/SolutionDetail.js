import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import SolutionHero from './components/SolutionHero';
import SolutionFeatures from './components/SolutionFeatures';
import SolutionProcess from './components/SolutionProcess';
import OtherSolutions from './components/OtherSolutions';
import { getSolutionBySlug } from '../../../data/solutionsData';

const SolutionDetail = () => {
  // Get the solution slug from URL (e.g., /solutions/computer-vision)
  const { slug } = useParams();

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  // Get solution data from our central data file
  const solutionData = getSolutionBySlug(slug);

  // If solution doesn't exist, redirect to solutions page
  if (!solutionData) {
    return <Navigate to="/solutions" replace />;
  }

  // Destructure all data sections
  const { hero, features, industries, process, otherSolutions } = solutionData;

  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <SolutionHero 
        category={hero.category}
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        technologies={hero.technologies}
        keyFeatures={hero.keyFeatures}
        description={hero.description}
      />

      {/* Features Section */}
      <SolutionFeatures 
        features={features} 
        industries={industries}
      />

      {/* Process Section */}
      <SolutionProcess process={process} />

      {/* Placeholder for future sections */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center text-gray-400">
          <p className="text-sm uppercase tracking-wider mb-4">Coming Soon</p>
          <p>Additional sections will be added here:</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>• Use Cases & Applications</li>
            <li>• Technologies & Tools</li>
            <li>• Client Testimonials</li>
            <li>• Get Started CTA</li>
          </ul>
        </div>
      </div>

      {/* Other Solutions Section */}
      <OtherSolutions 
        currentSolutionSlug={slug}
        otherSolutions={otherSolutions}
      />

      <Footer />
    </div>
  );
};

export default SolutionDetail;