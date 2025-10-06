import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const projectsAreaRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isHoveringProjects, setIsHoveringProjects] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScrollLeft, setMaxScrollLeft] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const projects = [
    {
      title: "AI Healthcare Analytics",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      services: ["data analysis", "machine learning", "healthcare"],
      description: "Advanced medical data processing and patient outcome prediction models"
    },
    {
      title: "Financial Risk Assessment",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      services: ["data processing", "risk analysis", "automation"],
      description: "Automated risk scoring and fraud detection for financial institutions"
    },
    {
      title: "E-commerce Intelligence",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      services: ["data collection", "market research", "analytics"],
      description: "Customer behavior analysis and inventory optimization systems"
    },
    {
      title: "Manufacturing Optimization",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      services: ["process automation", "quality control", "data visualization"],
      description: "Smart factory data integration and production efficiency analytics"
    },
    {
      title: "Transportation Logistics",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      services: ["route optimization", "data tracking", "predictive analysis"],
      description: "Fleet management and delivery route optimization platform"
    },
    {
      title: "Energy Grid Management",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      services: ["smart grid", "data monitoring", "renewable energy"],
      description: "Real-time energy consumption monitoring and grid optimization"
    },
    {
      title: "Agricultural Intelligence",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      services: ["crop monitoring", "data analysis", "precision farming"],
      description: "Satellite imagery analysis for crop yield prediction and optimization"
    },
    {
      title: "Smart City Infrastructure",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      services: ["urban planning", "data integration", "IoT analytics"],
      description: "Comprehensive urban data platform for city planning and management"
    }
  ];

  // Calculate max scroll position
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setMaxScrollLeft(container.scrollWidth - container.clientWidth);
    }
  }, []);

  // Track cursor position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    if (isHoveringProjects) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHoveringProjects]);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handle wheel events - lock scroll when in view and hovering
  const handleWheel = (e) => {
    // Only hijack scroll when section is in view AND hovering over projects area
    if (isInView && isHoveringProjects && scrollContainerRef.current) {
      const currentScrollLeft = scrollContainerRef.current.scrollLeft;
      
      // Check if we've reached the end of horizontal scroll
      const isAtEnd = currentScrollLeft >= maxScrollLeft;
      const isAtStart = currentScrollLeft <= 0;
      
      // Allow normal scroll if at boundaries and scrolling in direction that would go further
      if ((isAtEnd && e.deltaY > 0) || (isAtStart && e.deltaY < 0)) {
        return; // Allow normal page scroll
      }
      
      e.preventDefault();
      
      // Convert vertical scroll to horizontal
      const scrollAmount = e.deltaY * 2;
      
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  // Add wheel event listener to document when conditions are met
  useEffect(() => {
    if (isInView && isHoveringProjects) {
      document.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [isInView, isHoveringProjects, maxScrollLeft]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white overflow-hidden"
      style={{ 
        cursor: isHoveringProjects ? 'none' : 'default' 
      }}
    >
      {/* Custom Cursor Circle */}
      {isHoveringProjects && (
        <div
          className="fixed pointer-events-none z-50 w-16 h-16 border-2 border-red-500 rounded-full mix-blend-difference"
          style={{
            left: cursorPos.x - 32,
            top: cursorPos.y - 32,
            transition: 'transform 0.1s ease-out'
          }}
        />
      )}

      <div className="max-w-none px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">
              OUR PROJECTS
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex justify-between items-start">
            <div className="max-w-4xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Projects
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                We deliver comprehensive <strong>data solutions</strong> including AI model training, data processing, 
                business intelligence dashboards, document digitization, quality assurance, workflow automation, 
                CRM management, content moderation, strategic insights, and custom research services.
              </p>
              <p className="text-gray-800 font-medium">
                Discover our implementations!
              </p>
            </div>
            
            <button
              onClick={() => {
                navigate('/projects');
                window.scrollTo(0, 0);
              }}
              className="flex-shrink-0 border-2 border-red-500 text-red-500 px-6 py-3 rounded-full font-medium hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Projects Grid - Horizontal Scroll */}
        <div 
          ref={projectsAreaRef}
          onMouseEnter={() => setIsHoveringProjects(true)}
          onMouseLeave={() => setIsHoveringProjects(false)}
          className="relative"
        >
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            onScroll={() => {
              if (scrollContainerRef.current) {
                setScrollPosition(scrollContainerRef.current.scrollLeft);
              }
            }}
          >
            {projects.map((project, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[480px] h-[700px] relative group cursor-pointer overflow-hidden rounded-xl shadow-xl"
              >
                {/* Project Image */}
                <div className="w-full h-full relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <h3 className="text-2xl font-bold mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      {project.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="flex items-center gap-1 text-xs bg-white bg-opacity-20 px-2 py-1 rounded backdrop-blur-sm"
                        >
                          <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {service}
                        </span>
                      ))}
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200 text-gray-200">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom scrollbar hiding */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;