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
      id: 1,
      title: "Gen AI",
      slug: "gen-ai",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1676277791608-ac54525aa94b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      technologies: [
        { name: "GPT-4", icon: "🤖" },
        { name: "Gemini", icon: "✨" },
        { name: "LangChain", icon: "🔗" },
        { name: "Python", icon: "🐍" },
        { name: "TensorFlow", icon: "🧠" }
      ],
      services: ["Lead Generation", "AI Chatbots", "Predictive Analytics"],
      description: "Advanced AI platform for intelligent lead generation, personalized customer engagement, and automated sales optimization",
      fullDescription: "Advanced Generative AI platform for intelligent lead generation, personalized customer engagement, and automated sales optimization. Leverages cutting-edge AI models to identify, qualify, and nurture prospects.",
      status: "Completed",
      duration: "8 months",
      githubUrl: "#",
      demoUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "LiDAR",
      slug: "lidar",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      technologies: [
        { name: "Python", icon: "🐍" },
        { name: "PCL", icon: "☁️" },
        { name: "CloudCompare", icon: "📊" },
        { name: "PDAL", icon: "🗺️" }
      ],
      services: ["LiDAR", "3D Mapping", "Point Cloud"],
      description: "Advanced 3D point cloud processing for autonomous vehicles and mapping applications",
      fullDescription: "Developed a comprehensive LiDAR point cloud processing pipeline that enables real-time 3D environmental mapping for autonomous vehicles. The system processes massive datasets efficiently, extracting meaningful features and terrain information crucial for navigation and obstacle detection.",
      status: "Completed",
      duration: "6 months",
      completionDate: "March 2024",
      features: [
        "Real-time point cloud processing with sub-centimeter accuracy",
        "Automatic object detection and classification",
        "Terrain analysis and digital elevation model generation",
        "Integration with existing mapping workflows"
      ],
      testimonial: {
        quote: "The LiDAR processing solution transformed our autonomous vehicle development. The accuracy and speed exceeded our expectations.",
        author: "Dr. Sarah Mitchell",
        role: "Chief Technology Officer",
        company: "AutoDrive Innovations",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
      },
      githubUrl: "#",
      demoUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Enterprise Web Application",
      slug: "enterprise-web-application",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      technologies: [
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Docker", icon: "🐳" }
      ],
      services: ["Web Development", "Real-time Analytics", "Cloud"],
      description: "Full-stack enterprise application with real-time data processing and analytics dashboard",
      fullDescription: "Built a scalable enterprise web application featuring real-time data processing, comprehensive analytics dashboards, and multi-tenant architecture. The platform handles millions of transactions daily while maintaining high performance and security standards.",
      status: "In Progress",
      duration: "8 months",
      features: [
        "Real-time analytics with WebSocket integration",
        "Multi-tenant architecture with role-based access control",
        "Microservices architecture for scalability",
        "Automated CI/CD pipeline with Docker containers"
      ],
      githubUrl: "#",
      demoUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Mobile App Testing Suite",
      slug: "mobile-app-testing-suite",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: ["https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
      technologies: [
        { name: "Selenium", icon: "🌐" },
        { name: "Appium", icon: "📱" },
        { name: "Jest", icon: "🃏" },
        { name: "Cypress", icon: "🌲" }
      ],
      services: ["Testing", "QA Automation", "Mobile"],
      description: "Comprehensive automated testing framework for mobile applications across iOS and Android",
      fullDescription: "Comprehensive automated testing framework for mobile applications across iOS and Android",
      status: "Completed",
      duration: "4 months",
      githubUrl: "#",
      demoUrl: "#",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "Financial Data Analytics Platform",
      slug: "financial-data-analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
      technologies: [
        { name: "Python", icon: "🐍" },
        { name: "Pandas", icon: "🐼" },
        { name: "TensorFlow", icon: "🧠" },
        { name: "Tableau", icon: "📊" }
      ],
      services: ["Data Analysis", "Predictive Analytics", "Finance"],
      description: "Advanced financial data processing and predictive analytics for investment decisions",
      status: "Completed",
      duration: "5 months",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 6,
      title: "E-commerce Platform Development",
      slug: "ecommerce-platform-development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
      technologies: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "Stripe", icon: "💳" },
        { name: "MongoDB", icon: "🍃" }
      ],
      services: ["E-commerce", "Payments", "Web Development"],
      description: "Modern e-commerce platform with advanced product management and payment processing",
      status: "Completed",
      duration: "6 months",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 7,
      title: "Healthcare Data Analytics",
      slug: "healthcare-data-analytics",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: ["https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
      technologies: [
        { name: "R", icon: "📊" },
        { name: "Python", icon: "🐍" },
        { name: "Power BI", icon: "📈" },
        { name: "SQL", icon: "🗄️" }
      ],
      services: ["Healthcare", "Machine Learning", "Analytics"],
      description: "Patient outcome prediction and hospital efficiency analysis using machine learning",
      status: "In Progress",
      duration: "9 months",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 8,
      title: "Custom Software Development",
      slug: "custom-software-development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
      technologies: [
        { name: "Vue.js", icon: "💚" },
        { name: "Laravel", icon: "🔷" },
        { name: "MySQL", icon: "🐬" },
        { name: "AWS", icon: "☁️" }
      ],
      services: ["Custom Development", "Workflow Automation", "Cloud"],
      description: "Tailored software solutions designed to meet specific business requirements and optimize workflows",
      status: "Completed",
      duration: "10 months",
      githubUrl: "#",
      demoUrl: "#"
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
      {/* Custom Cursor */}
      {isHoveringProjects && (
        <div
          className="fixed w-24 h-24 pointer-events-none z-50"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
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
                onClick={() => {
                  navigate(`/projects/${project.slug}`);
                  window.scrollTo(0, 0);
                }}
                className="flex-shrink-0 w-[360px] h-[520px] relative group cursor-pointer overflow-hidden rounded-xl shadow-xl"
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
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <h3 className="text-xl font-bold mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
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