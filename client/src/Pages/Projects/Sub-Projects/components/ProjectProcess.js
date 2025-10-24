import { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';

const ProjectProcess = ({ process }) => {
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.dataset.stepIndex);
            if (!visibleSteps.includes(stepIndex)) {
              setVisibleSteps(prev => [...prev, stepIndex]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const stepElements = document.querySelectorAll('.process-step');
    stepElements.forEach((el) => observer.observe(el));

    return () => {
      stepElements.forEach((el) => observer.unobserve(el));
    };
  }, [visibleSteps]);

  if (!process || !process.steps || process.steps.length === 0) {
    return null;
  }

  // Helper function to get Icon component from Lucide
  const getIconComponent = (iconName) => {
    if (!iconName) return null;

    const pascalCaseName = iconName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    return LucideIcons[pascalCaseName] || LucideIcons[iconName] || null;
  };

  return (
    <section className="w-full mx-auto mb-20 lg:mb-40 pt-16 pb-16 px-5 sm:px-8 xl:px-20 2xl:px-20 max-w-screen-2xl relative bg-gray-50">
      <div className="w-full">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-5 mb-6">
            <p className="uppercase text-base m-0 text-red-400 font-semibold">
              {process.title || "DEVELOPMENT PROCESS"}
            </p>
            <div className="flex flex-row gap-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We Built It
          </h2>

          {process.description && (
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              {process.description}
            </p>
          )}
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {process.steps.map((step, index) => {
            const IconComponent = getIconComponent(step.icon);
            const isEven = index % 2 === 0;
            const isVisible = visibleSteps.includes(index);

            return (
              <div
                key={index}
                className="relative process-step"
                data-step-index={index}
              >
                <div className={`flex flex-col md:flex-row gap-8 items-center transition-all duration-700 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-24 h-24 rounded-full bg-white shadow-lg flex flex-col items-center justify-center border-4 border-red-100 relative z-10 transition-all duration-500 ${
                      isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-45'
                    } hover:scale-110 hover:border-red-300`}>
                      {IconComponent ? (
                        <IconComponent className="w-8 h-8 text-red-500 mb-1" strokeWidth={2} />
                      ) : (
                        <LucideIcons.Circle className="w-8 h-8 text-red-500 mb-1" strokeWidth={2} />
                      )}
                      <span className="text-sm font-bold text-gray-500">{step.number}</span>
                    </div>

                    {/* Connecting Line */}
                    {index < process.steps.length - 1 && (
                      <div className="hidden md:block absolute top-24 left-1/2 w-0.5 h-16 bg-gradient-to-b from-red-300 to-gray-300 transform -translate-x-1/2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-102 ${
                    isEven ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-red-500 transition-colors">
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

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default ProjectProcess;
