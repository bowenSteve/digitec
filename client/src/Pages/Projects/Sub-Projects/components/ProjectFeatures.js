import { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';

const ProjectFeatures = ({ features, industries }) => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    // Stagger animation for features
    features?.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * 150);
    });
  }, [features]);

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
    { name: "Technology", icon: "Cpu" },
    { name: "Enterprise", icon: "Building" },
    { name: "Innovation", icon: "Lightbulb" },
    { name: "Digital", icon: "Globe" }
  ];

  const displayIndustries = industries && industries.length > 0 ? industries : defaultIndustries;

  return (
    <section className="w-full mx-auto mb-20 lg:mb-40 pt-16 pb-16 px-5 sm:px-8 xl:px-20 2xl:px-20 max-w-screen-2xl relative">
      <div className="w-full flex flex-wrap gap-6 xl:gap-0">

        {/* Left Side - Sticky Sidebar (33%) */}
        <div className="w-full xl:w-1/3 xl:pr-16">
          <div className="xl:sticky xl:top-8 animate-fade-in">

            {/* Section Tag */}
            <div className="flex items-center gap-5 mb-6">
              <p className="uppercase text-base m-0 text-red-400 font-semibold whitespace-nowrap">
                KEY FEATURES
              </p>
              <hr className="w-20 border-gray-300" />
              <div className="flex flex-row gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Technical Highlights
            </h2>

            {/* Description */}
            <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
              <p>
                This project showcases <strong className="text-gray-900">advanced technical capabilities</strong> and innovative solutions. Each feature demonstrates expertise and attention to detail in implementation.
              </p>
            </div>

            {/* Applicable Industries */}
            {displayIndustries && displayIndustries.length > 0 && (
              <div className="space-y-4">
                <p className="uppercase text-sm font-semibold text-gray-500 tracking-wider">
                  APPLICABLE TO
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-3">
                  {displayIndustries.map((industry, index) => {
                    const IndustryIcon = getIconComponent(industry.icon);

                    return (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-3 hover:bg-red-50 hover:border-red-200 border border-gray-100 transition-all duration-300 group cursor-pointer transform hover:scale-105"
                        style={{
                          animation: `slideInFromLeft 0.6s ease-out ${index * 0.1}s both`
                        }}
                      >
                        <div className="flex flex-col items-center text-center gap-2">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                            {IndustryIcon ? (
                              <IndustryIcon
                                className="w-5 h-5 text-gray-600 group-hover:text-red-500"
                                strokeWidth={2}
                              />
                            ) : (
                              <LucideIcons.Building2
                                className="w-5 h-5 text-gray-600 group-hover:text-red-500"
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
                const isVisible = visibleItems.includes(index);

                return (
                  <div
                    key={index}
                    className={`flex gap-6 group transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 group-hover:scale-110 transition-all duration-300">
                        {IconComponent ? (
                          <IconComponent
                            className="w-6 h-6 text-red-500"
                            strokeWidth={2}
                          />
                        ) : (
                          <LucideIcons.Star
                            className="w-6 h-6 text-red-500"
                            strokeWidth={2}
                          />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-red-500 transition-colors">
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
              <p>No features available for this project.</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ProjectFeatures;
