import React from 'react';
import * as LucideIcons from 'lucide-react';

const SolutionProcess = ({ process }) => {
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

  // Default process if none provided
  const defaultProcess = {
    title: "Our Process",
    description: "A proven methodology that ensures successful delivery from concept to deployment.",
    steps: [
      {
        number: "01",
        icon: "MessageSquare",
        title: "Discovery",
        description: "Understanding your requirements and objectives"
      },
      {
        number: "02",
        icon: "FileText",
        title: "Planning",
        description: "Creating a comprehensive strategy and roadmap"
      },
      {
        number: "03",
        icon: "Code",
        title: "Development",
        description: "Building your solution with best practices"
      },
      {
        number: "04",
        icon: "TestTube",
        title: "Testing",
        description: "Rigorous quality assurance and validation"
      },
      {
        number: "05",
        icon: "Rocket",
        title: "Deployment",
        description: "Launch with support and documentation"
      }
    ]
  };

  const displayProcess = process || defaultProcess;
  const { title, description, steps } = displayProcess;

  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <section className="w-full mb-20 lg:mb-40 pt-16 pb-16 bg-gray-50">
      
      {/* Content Container with max-width */}
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 xl:px-20 2xl:px-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">
              HOW WE DELIVER
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            
            {/* Top Row - Numbers and Connecting Lines */}
            <div className="relative mb-12">
              <div className="grid gap-0" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
                {steps.map((step, index) => {
                  const isLast = index === steps.length - 1;
                  
                  return (
                    <div key={index} className="relative flex justify-center">
                      {/* Number Circle - Centered */}
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white font-bold text-xl shadow-lg transition-transform duration-300 hover:scale-110 group">
                        {step.number}
                        {/* Pulse effect on hover */}
                        <div className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:opacity-30 group-hover:animate-ping"></div>
                      </div>
                      
                      {/* Connecting Arrow Line */}
                      {!isLast && (
                        <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 flex items-center justify-end" style={{ width: '100%', paddingLeft: '2rem', paddingRight: '2rem' }}>
                          <div className="flex-1 h-1 bg-gradient-to-r from-green-500 to-green-300"></div>
                          <svg className="w-6 h-6 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Row - Icons, Titles, and Descriptions */}
            <div className="grid gap-8" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
              {steps.map((step, index) => {
                const IconComponent = getIconComponent(step.icon);
                
                return (
                  <div key={index} className="flex flex-col items-center text-center group">
                    {/* Icon Container */}
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-green-100 flex items-center justify-center mb-4 group-hover:border-green-500 group-hover:bg-green-50 transition-all duration-300 shadow-md">
                      {IconComponent ? (
                        <IconComponent 
                          className="w-8 h-8 text-green-500" 
                          strokeWidth={2}
                        />
                      ) : (
                        <LucideIcons.Circle 
                          className="w-8 h-8 text-green-500" 
                          strokeWidth={2}
                        />
                      )}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="block lg:hidden">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = getIconComponent(step.icon);
              const isLast = index === steps.length - 1;
              
              return (
                <div key={index} className="relative">
                  <div className="flex gap-6">
                    {/* Left Side - Number and Icon */}
                    <div className="flex flex-col items-center">
                      {/* Number Circle */}
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white font-bold text-lg shadow-lg mb-3">
                        {step.number}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-green-100 flex items-center justify-center shadow-md">
                        {IconComponent ? (
                          <IconComponent 
                            className="w-6 h-6 text-green-500" 
                            strokeWidth={2}
                          />
                        ) : (
                          <LucideIcons.Circle 
                            className="w-6 h-6 text-green-500" 
                            strokeWidth={2}
                          />
                        )}
                      </div>
                      
                      {/* Connecting Line */}
                      {!isLast && (
                        <div className="w-1 flex-1 bg-gradient-to-b from-green-300 to-green-100 mt-3" style={{ minHeight: '40px' }}></div>
                      )}
                    </div>
                    
                    {/* Right Side - Content */}
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default SolutionProcess;