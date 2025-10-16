import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Search, User, Tag, ExternalLink } from 'lucide-react'
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import ProjectModal from "../../Components/ProjectModal"

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTechFilter, setActiveTechFilter] = useState(null);

  const projects = [
    {
      id: 1,
      title: "LiDAR Point Cloud Processing",
      slug: "lidar-point-cloud-processing",
      category: "lidar",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      description: "Advanced 3D point cloud processing for autonomous vehicles and mapping applications",
      shortDescription: "Advanced 3D point cloud processing for autonomous vehicles and mapping applications",
      fullDescription: "Developed a comprehensive LiDAR point cloud processing pipeline that enables real-time 3D environmental mapping for autonomous vehicles. The system processes massive datasets efficiently, extracting meaningful features and terrain information crucial for navigation and obstacle detection.",
      status: "Completed",
      duration: "6 months",
      completionDate: "March 2024",
      featured: true,
      githubUrl: "#",
      demoUrl: "#",
      liveUrl: "#",
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
      }
    },
    {
      id: 2,
      title: "Enterprise Web Application",
      slug: "enterprise-web-application",
      category: "software-development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      description: "Full-stack enterprise application with real-time data processing and analytics dashboard",
      shortDescription: "Full-stack enterprise application with real-time data processing and analytics",
      fullDescription: "Built a scalable enterprise web application featuring real-time data processing, comprehensive analytics dashboards, and multi-tenant architecture. The platform handles millions of transactions daily while maintaining high performance and security standards.",
      status: "In Progress",
      duration: "8 months",
      featured: false,
      githubUrl: "#",
      demoUrl: "#",
      liveUrl: "#",
      features: [
        "Real-time analytics with WebSocket integration",
        "Multi-tenant architecture with role-based access control",
        "Microservices architecture for scalability",
        "Automated CI/CD pipeline with Docker containers"
      ]
    },
    {
      id: 3,
      title: "Mobile App Testing Suite",
      slug: "mobile-app-testing-suite",
      category: "software-testing",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: ["https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
      technologies: [
        { name: "Selenium", icon: "🌐" },
        { name: "Appium", icon: "📱" },
        { name: "Jest", icon: "🃏" },
        { name: "Cypress", icon: "🌲" }
      ],
      description: "Comprehensive automated testing framework for mobile applications across iOS and Android",
      shortDescription: "Comprehensive automated testing framework for mobile applications",
      fullDescription: "Comprehensive automated testing framework for mobile applications across iOS and Android",
      status: "Completed",
      duration: "4 months",
      featured: false,
      githubUrl: "#",
      demoUrl: "#",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "Financial Data Analytics Platform",
      slug: "financial-data-analytics",
      category: "data-analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Pandas", "TensorFlow", "Tableau"],
      description: "Advanced financial data processing and predictive analytics for investment decisions",
      status: "Completed",
      duration: "5 months",
      featured: true,
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 5,
      title: "3D Terrain Mapping System",
      slug: "3d-terrain-mapping-system",
      category: "lidar",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["LiDAR", "GIS", "Python", "QGIS"],
      description: "High-precision terrain mapping using aerial LiDAR data for construction planning",
      status: "In Progress",
      duration: "7 months",
      featured: false,
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 6,
      title: "E-commerce Platform Development",
      slug: "ecommerce-platform-development",
      category: "software-development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Next.js", "Stripe", "MongoDB"],
      description: "Modern e-commerce platform with advanced product management and payment processing",
      status: "Completed",
      duration: "6 months",
      featured: false,
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 7,
      title: "API Testing Automation",
      slug: "api-testing-automation",
      category: "software-testing",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Postman", "Newman", "Jest", "REST Assured"],
      description: "Comprehensive API testing framework with automated validation and performance testing",
      status: "Completed",
      duration: "3 months",
      featured: false,
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 8,
      title: "Healthcare Data Analytics",
      slug: "healthcare-data-analytics",
      category: "data-analysis",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["R", "Python", "Power BI", "SQL"],
      description: "Patient outcome prediction and hospital efficiency analysis using machine learning",
      status: "In Progress",
      duration: "9 months",
      featured: true,
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 9,
      title: "Custom Software Development",
      slug: "custom-software-development",
      category: "software-development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      description: "Tailored software solutions designed to meet specific business requirements and optimize workflows",
      status: "Completed",
      duration: "10 months",
      featured: false,
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'lidar', label: 'LiDAR', count: projects.filter(p => p.category === 'lidar').length },
    { key: 'software-development', label: 'Software Development', count: projects.filter(p => p.category === 'software-development').length },
    { key: 'software-testing', label: 'Software Testing', count: projects.filter(p => p.category === 'software-testing').length },
    { key: 'data-analysis', label: 'Data Analysis', count: projects.filter(p => p.category === 'data-analysis').length }
  ];

  // Enhance projects with default values if missing
  const enhancedProjects = projects.map(project => ({
    ...project,
    thumbnail: project.thumbnail || project.image,
    images: project.images || [project.image],
    technologies: project.technologies.map(tech =>
      typeof tech === 'string' ? { name: tech, icon: null } : tech
    ),
    shortDescription: project.shortDescription || project.description,
    fullDescription: project.fullDescription || project.description,
    liveUrl: project.liveUrl || project.demoUrl
  }));

  const filteredProjects = useMemo(() => {
    let filtered = enhancedProjects;

    // Filter by category
    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => project.category === activeFilter);
    }

    // Filter by technology
    if (activeTechFilter) {
      filtered = filtered.filter(project =>
        project.technologies.some(tech => {
          const techName = typeof tech === 'string' ? tech : tech.name;
          return techName.toLowerCase() === activeTechFilter.toLowerCase();
        })
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => {
          const techName = typeof tech === 'string' ? tech : tech.name;
          return techName.toLowerCase().includes(searchTerm.toLowerCase());
        })
      );
    }

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'status':
          return a.status.localeCompare(b.status);
        case 'featured':
          return b.featured - a.featured;
        default:
          return 0;
      }
    });

    return filtered;
  }, [activeFilter, searchTerm, sortBy, activeTechFilter]);

  const getStatusColor = (status) => {
    return status === 'Completed' ? 'bg-green-100 text-green-800 border-green-200' : 'bg-blue-100 text-blue-800 border-blue-200';
  };

  const ProjectCard = ({ project, index }) => {
    // First row (first 3 cards) should be visible immediately
    const [isVisible, setIsVisible] = useState(index < 3);

    useEffect(() => {
      // If it's in the first row, keep it visible
      if (index < 3) {
        setIsVisible(true);
        return;
      }

      const handleScroll = () => {
        const element = document.getElementById(`project-${project.id}`);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate which row this card is in (assuming 3 cards per row)
        const rowIndex = Math.floor(index / 3);

        // Check if we've scrolled 75% past the previous row
        const shouldShow = rect.top < windowHeight * 0.75 + (rowIndex * 100);

        setIsVisible(shouldShow);
      };

      // Initial check
      handleScroll();

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [index, project.id]);

    return (
      <Link
        to={`/projects/${project.slug}`}
        id={`project-${project.id}`}
        className={`block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 group relative transition-all duration-300 no-underline ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        style={{ transitionDuration: '800ms' }}
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.demoUrl}
              className="p-2 bg-white/90 backdrop-blur rounded-full hover:bg-white transition-colors"
              title="View Demo"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
            </a>
            <a
              href={project.githubUrl}
              className="p-2 bg-white/90 backdrop-blur rounded-full hover:bg-white transition-colors"
              title="View Code"
            >
              <Tag className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
            </a>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors leading-tight">
            {project.title}
          </h3>

          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Interactive Technology Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, techIndex) => {
              const techName = typeof tech === 'string' ? tech : tech.name;
              const isActive = activeTechFilter === techName;
              return (
                <button
                  key={techIndex}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTechFilter(isActive ? null : techName);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-2 py-1 text-xs rounded-md font-medium transition-all duration-200 hover:scale-110 ${
                    isActive
                      ? 'bg-red-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600'
                  }`}
                >
                  {techName}
                </button>
              );
            })}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-md">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">
            <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 relative pr-14">
              <span>See more</span>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-sm transition-transform duration-500 group-hover:rotate-[-45deg]">
                →
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'}}>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
              OUR PORTFOLIO
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            Innovative Projects & Solutions
            <br />
            <span className="text-red-400">Built with Precision & Expertise</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-slide-up-delayed">
            Explore our comprehensive portfolio of innovative solutions spanning LiDAR processing,
            software development, testing automation, and advanced data analytics.
          </p>
        </div>

        {/* Animated Blobs */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>

        {/* Animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out;
          }
          .animate-slide-up {
            animation: slideUp 0.8s ease-out 0.2s both;
          }
          .animate-slide-up-delayed {
            animation: slideUp 0.8s ease-out 0.4s both;
          }
        `}</style>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white py-6 sm:py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.key
                    ? 'bg-red-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 border-2 border-transparent hover:border-red-500 hover:text-red-500 hover:bg-red-50'
                }`}
              >
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs rounded-full ${
                  activeFilter === category.key
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Active Filter Badge */}
          {activeTechFilter && (
            <div className="mb-6 flex items-center gap-3 animate-fade-in">
              <span className="text-sm text-gray-600">Filtering by:</span>
              <div className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium text-sm">
                <Tag className="w-4 h-4" />
                {activeTechFilter}
                <button
                  onClick={() => setActiveTechFilter(null)}
                  className="ml-2 hover:bg-red-200 rounded-full p-1 transition-colors"
                >
                  <span className="text-xs">✕</span>
                </button>
              </div>
            </div>
          )}

          <div className="mb-6 sm:mb-8 flex justify-between items-center">
            <p className="text-gray-600 text-sm sm:text-base">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(345px, 1fr))' }}>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-[1000px] mx-auto my-20 -mb-8 px-5 py-14 bg-white rounded-2xl shadow-xl relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex-1">
            <div className="flex items-center gap-5 mb-4">
              <p className="uppercase text-base m-0 text-red-500 font-semibold whitespace-nowrap">
                START YOUR PROJECT
              </p>
              <hr className="flex-1 border-gray-300" />
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold uppercase mb-4 text-gray-900">
              READY TO BUILD SOMETHING GREAT?
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Let's discuss how our expertise can help you achieve your goals. From initial
              consultation to final delivery, we're committed to bringing your vision to life
              with precision and innovation.
            </p>
          </div>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg relative pr-16 whitespace-nowrap no-underline"
          >
            <span>Let's talk</span>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-base">
              →
            </div>
          </Link>
        </div>
      </section>

      <Footer/>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

export default Projects