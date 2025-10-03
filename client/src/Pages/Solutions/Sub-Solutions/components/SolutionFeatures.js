import React from 'react';
import * as LucideIcons from 'lucide-react';

const SolutionFeatures = ({ features, industries }) => {
  // Helper function to get Icon component from Lucide
  const getIconComponent = (iconName) => {
    if (!iconName) return null;
    
    // Handle both PascalCase and kebab-case icon names
    const pascalCaseName = iconName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    
    return LucideIcons[pascalCaseName] || LucideIcons[iconName] || null;
  };

  // Default industries if none provided
  const defaultIndustries = [
    { name: "Healthcare", icon: "Heart" },
    { name: "Manufacturing", icon: "Factory" },
    { name: "Financial", icon: "Landmark" },
    { name: "E-commerce", icon: "ShoppingCart" }
  ];

  const displayIndustries = industries && industries.length > 0 ? industries : defaultIndustries;

  return (
    <section className="w-full mx-auto mb-20 lg:mb-40 pt-16 pb-16 px-5 sm:px-8 xl:px-20 2xl:px-20 max-w-screen-2xl relative">
      <div className="w-full flex flex-wrap gap-6 xl:gap-0">

        {/* Left Side - Sticky Sidebar (33%) */}
        <div className="w-full xl:w-1/3 xl:pr-16">
          <div className="xl:sticky xl:top-8">
            
            {/* Section Tag */}
            <div className="flex items-center gap-5 mb-6">
              <p className="uppercase text-base m-0 text-green-400 font-semibold whitespace-nowrap">
                CAPABILITIES
              </p>
              <hr className="w-20 border-gray-300" />
              <div className="flex flex-row gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Features
            </h2>

            {/* Description */}
            <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
              <p>
                Our solution delivers <strong className="text-gray-900">powerful capabilities</strong> designed to meet your specific needs. Each feature is built with precision and optimized for performance.
              </p>
            </div>

            {/* Ideal For - Industry Cards (3x2 grid for 6 industries) */}
            {displayIndustries && displayIndustries.length > 0 && (
              <div className="space-y-4">
                <p className="uppercase text-sm font-semibold text-gray-500 tracking-wider">
                  IDEAL FOR
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-3">
                  {displayIndustries.map((industry, index) => {
                    const IndustryIcon = getIconComponent(industry.icon);
                    
                    return (
                      <div 
                        key={index}
                        className="bg-gray-50 rounded-lg p-3 hover:bg-green-50 hover:border-green-200 border border-gray-100 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="flex flex-col items-center text-center gap-2">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                            {IndustryIcon ? (
                              <IndustryIcon 
                                className="w-5 h-5 text-gray-600 group-hover:text-green-500" 
                                strokeWidth={2} 
                              />
                            ) : (
                              <LucideIcons.Building2 
                                className="w-5 h-5 text-gray-600 group-hover:text-green-500" 
                                strokeWidth={2} 
                              />
                            )}
                          </div>
                          <span className="text-xs font-medium text-gray-700 leading-tight">
                            {industry.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Features List (67%) */}
        <div className="w-full xl:w-2/3">
          {features && features.length > 0 ? (
            <div className="space-y-12">
              {features.map((feature, index) => {
                const IconComponent = getIconComponent(feature.icon);

                return (
                  <div 
                    key={index}
                    className="flex gap-6 group"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
                        {IconComponent ? (
                          <IconComponent 
                            className="w-6 h-6 text-green-500" 
                            strokeWidth={2}
                          />
                        ) : (
                          <LucideIcons.Star 
                            className="w-6 h-6 text-green-500" 
                            strokeWidth={2}
                          />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center text-gray-400 py-20">
              <p>No features available for this solution.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SolutionFeatures;