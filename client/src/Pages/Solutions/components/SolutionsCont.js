import React, { useState, useEffect } from 'react';

const SolutionsCont = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const solutions = [
    {
      title: "Computer Vision",
      image: "https://www.peopleforai.com/wp-content/uploads/2025/03/tiny-featured-image.png",
      description: "Advanced image recognition and analysis for autonomous systems, quality control, and intelligent surveillance applications.",
      tags: ["object detection", "image segmentation", "facial recognition"],
      category: "CV"
    },
    {
      title: "Natural Language Processing",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Sophisticated text analysis, sentiment detection, and language understanding for chatbots, content moderation, and automated translation.",
      tags: ["sentiment analysis", "entity extraction", "text classification"],
      category: "NLP"
    },
    {
      title: "Generative AI",
      image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Create synthetic data, generate content, and build intelligent systems that learn and adapt to your specific business needs.",
      tags: ["content generation", "data synthesis", "model training"],
      category: "GEN AI"
    },
    {
      title: "Data & Content Services",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Comprehensive data collection, annotation, processing, and management services to power your AI and business intelligence initiatives.",
      tags: ["data collection", "annotation", "processing"],
      category: "DATA"
    },
    {
      title: "Automation Solutions",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Streamline your operations with intelligent workflow automation, RPA, and process optimization solutions that reduce manual work and boost efficiency.",
      tags: ["workflow automation", "RPA", "process optimization"],
      category: "AUTOMATION"
    },
    {
      title: "Development Solutions",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Custom web applications, enterprise systems, and software development services tailored to your unique business requirements and technical needs.",
      tags: ["web development", "system integration", "custom software"],
      category: "DEVELOPMENT"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Custom Cursor */}
      {isHovering && (
        <div 
          className="fixed w-24 h-24 pointer-events-none z-50 transition-all duration-200"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="w-full h-full bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <svg 
              className="w-8 h-8 text-white transform -rotate-45" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">
              OUR SOLUTIONS
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 uppercase">
            Data & AI Solutions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-600">
            <p>
              <strong className="text-gray-900">Empowering businesses with cutting-edge technology and data-driven solutions.</strong> From AI model training to custom software development, we deliver comprehensive services that transform how you work with data and technology.
            </p>
            <p>
              Our expertise spans <strong className="text-gray-900">artificial intelligence, automation, and enterprise development</strong>, helping organizations across Africa and North America unlock the full potential of their data. Explore our solution offerings below.
            </p>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative cursor-none overflow-hidden"
              style={{
                marginTop: index % 2 === 1 ? '160px' : '0',
                marginBottom: index % 2 === 0 ? '160px' : '0'
              }}
              onMouseEnter={() => {
                setHoveredIndex(index);
                setIsHovering(true);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setIsHovering(false);
              }}
            >
              {/* Image Container */}
              <div className="rounded-2xl overflow-hidden mb-6">
                <div className="relative w-full h-[450px]">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:scale-105"
                  />
                  
                  {/* Tags that slide in on hover */}
                  <div className={`absolute top-6 right-0 flex flex-col gap-3 transition-all duration-500 ${
                    hoveredIndex === index ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                  }`}>
                    <div className="bg-white dark:bg-gray-800 rounded-l-2xl shadow-lg p-4">
                      {solution.tags.map((tag, tagIndex) => (
                        <div 
                          key={tagIndex}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2 last:mb-0"
                          style={{
                            transitionDelay: `${tagIndex * 100}ms`
                          }}
                        >
                          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z" />
                          </svg>
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 font-bold text-xs uppercase px-3 py-2 rounded-lg shadow-lg">
                      {solution.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-4xl font-semibold uppercase text-gray-900 transition-colors duration-300 group-hover:text-red-500">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .cursor-none {
          cursor: none !important;
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
};

export default SolutionsCont;