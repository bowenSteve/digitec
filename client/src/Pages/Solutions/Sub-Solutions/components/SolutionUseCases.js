import React from 'react';
import { Link } from 'react-router-dom';

const SolutionUseCases = ({ useCases }) => {
  // Default use cases if none provided
  const defaultUseCases = [
    {
      featured: true,
      category: "HEALTHCARE",
      title: "AI-Powered Patient Record Analysis",
      description: "Major hospital network uses advanced technology to digitize and analyze patient records, reducing processing time significantly.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      results: ["80% faster processing", "99.5% accuracy"]
    },
    {
      featured: false,
      category: "MANUFACTURING",
      title: "Automated Quality Control",
      description: "Real-time defect detection system identifying product flaws with high accuracy on production lines.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      featured: false,
      category: "RETAIL",
      title: "Customer Behavior Analytics",
      description: "Enhanced shopping experience through intelligent customer insights and personalization.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      featured: false,
      category: "FINANCE",
      title: "Fraud Detection System",
      description: "Real-time transaction monitoring preventing fraudulent activities with advanced algorithms.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      featured: false,
      category: "LOGISTICS",
      title: "Supply Chain Optimization",
      description: "Streamlined logistics operations with predictive analytics and route optimization.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const displayUseCases = useCases && useCases.length > 0 ? useCases : defaultUseCases;
  const featuredCase = displayUseCases.find(useCase => useCase.featured) || displayUseCases[0];
  const regularCases = displayUseCases.filter(useCase => !useCase.featured).slice(0, 4);

  if (!displayUseCases || displayUseCases.length === 0) {
    return null;
  }

  return (
    <section className="w-full mb-20 lg:mb-40 pt-16 pb-16 bg-white">
      
      {/* Content Container */}
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 xl:px-0 2xl:px-0">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">
              USE CASES
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Real-World Applications
          </h2>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Discover how organizations across industries are leveraging our solutions to solve complex challenges, improve efficiency, and drive measurable business outcomes.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Featured Large Card - Takes up 2 rows and more columns */}
          <div className="lg:col-span-6 lg:row-span-2">
            <div className="h-full group cursor-pointer">
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 h-[400px] lg:h-[600px]">
                <img
                  src={featuredCase.image}
                  alt={featuredCase.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div>
                <p className="text-green-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  {featuredCase.category}
                </p>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-green-600 transition-colors duration-300">
                  {featuredCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {featuredCase.description}
                </p>
                
                {/* Results */}
                {featuredCase.results && featuredCase.results.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {featuredCase.results.map((result, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Regular Cards - 4 smaller cards in 2x2 grid */}
          {regularCases.map((useCase, index) => (
            <div 
              key={index}
              className="lg:col-span-6 xl:col-span-3"
            >
              <div className="h-full group cursor-pointer">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 h-[250px]">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Content */}
                <div>
                  <p className="text-green-500 text-xs font-semibold uppercase tracking-wider mb-2">
                    {useCase.category}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-green-600 transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {useCase.description}
                  </p>
                  
                  {/* Results for regular cards */}
                  {useCase.results && useCase.results.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {useCase.results.slice(0, 2).map((result, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default SolutionUseCases;