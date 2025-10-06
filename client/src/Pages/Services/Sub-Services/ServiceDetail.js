import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import ServiceHero from './components/ServiceHero';
import ServiceFeatures from './components/ServiceFeatures';
import ServiceProcess from './components/ServiceProcess';
import RelatedServices from './components/RelatedServices';
import { getServiceBySlug } from '../../../data/servicesData';

const ServiceDetail = () => {
  // Get the service slug from URL (e.g., /services/website-creation)
  const { slug } = useParams();

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Get service data from our central data file
  const serviceData = getServiceBySlug(slug);

  // If service doesn't exist, redirect to services page
  if (!serviceData) {
    return <Navigate to="/services" replace />;
  }

  // Destructure all data sections
  const { hero, features, industries, process, relatedServices } = serviceData;

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <ServiceHero
        category={hero.category}
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        technologies={hero.technologies}
        keyFeatures={hero.keyFeatures}
        description={hero.description}
      />

      {/* Features Section */}
      <ServiceFeatures
        features={features}
        industries={industries}
      />

      {/* Process Section */}
      <ServiceProcess process={process} />

      {/* Related Services Section */}
      <RelatedServices
        currentServiceSlug={slug}
        relatedServices={relatedServices}
      />

      <Footer />
    </div>
  );
};

export default ServiceDetail;
