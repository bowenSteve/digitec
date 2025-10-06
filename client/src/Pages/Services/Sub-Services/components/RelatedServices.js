import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const RelatedServices = ({ currentServiceSlug, relatedServices }) => {
  if (!relatedServices || relatedServices.length === 0) {
    return null;
  }

  return (
    <section className="w-full mb-20 lg:mb-40 pt-16 pb-16 bg-white">
      {/* Content Container with max-width */}
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 xl:px-20 2xl:px-20">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">
              EXPLORE MORE
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Related Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover other services that complement your needs and help you achieve your business goals.
          </p>
        </div>

        {/* Related Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.slug}`}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-red-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Category Badge */}
              <div className="p-6 pb-4">
                <div className="inline-block">
                  <span className="bg-red-50 text-red-500 font-bold text-xs uppercase px-3 py-1.5 rounded-lg">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Arrow Icon */}
                <div className="flex items-center text-red-500 font-semibold text-sm">
                  <span className="mr-2">Learn more</span>
                  <ArrowRight
                    className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                    strokeWidth={2.5}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
