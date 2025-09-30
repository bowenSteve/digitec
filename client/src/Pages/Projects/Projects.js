import React from 'react'
import React, { useState, useEffect, useMemo } from 'react'
import { ChevronDown, Search, Calendar, User, Tag, ExternalLink } from 'lucide-react'
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"

function Projects() {
  return (
    <div>
      <Navbar/>
      <Footer/>
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [showFilters, setShowFilters] = useState(false);

  const projects = [
    {
      id: 1,
      title: "LiDAR Point Cloud Processing",
      category: "lidar",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "PCL", "CloudCompare", "PDAL"],
      description: "Advanced 3D point cloud processing for autonomous vehicles and mapping applications",
      status: "Completed",
      duration: "6 months",
      featured: true,
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 2,
      title: "Enterprise Web Application",
      category: "software-development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      description: "Full-stack enterprise application with real-time data processing and analytics dashboard",
      status: "In Progress",
      duration: "8 months",
      featured: false,
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 3,
      title: "Mobile App Testing Suite",
      category: "software-testing",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Selenium", "Appium", "Jest", "Cypress"],
      description: "Comprehensive automated testing framework for mobile applications across iOS and Android",
      status: "Completed",
      duration: "4 months",
      featured: false,
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 4,
      title: "Financial Data Analytics Platform",
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
      category: "data-analysis",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["R", "Python", "Power BI", "SQL"],
      description: "Patient outcome prediction and hospital efficiency analysis using machine learning",
      status: "In Progress",
      duration: "9 months",
      featured: true,
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

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by category
    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => project.category === activeFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
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
  }, [activeFilter, searchTerm, sortBy]);

  const getStatusColor = (status) => {
    return status === 'Completed' ? 'bg-green-100 text-green-800 border-green-200' : 'bg-blue-100 text-blue-800 border-blue-200';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-red-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                OUR PORTFOLIO
              </span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-red-200 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
              Our Projects
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-2">
              Explore our comprehensive portfolio of innovative solutions spanning LiDAR processing,
              software development, testing automation, and advanced data analytics.
            </p>
            <div className="flex flex-col gap-4 justify-center items-center max-w-2xl mx-auto">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-sm sm:text-base rounded-full text-gray-900 bg-white/90 backdrop-blur focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors text-sm sm:text-base"
                >
                  Filters
                  <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
                {showFilters && (
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 sm:left-auto sm:right-0 sm:transform-none bg-white rounded-lg shadow-xl p-4 z-10 min-w-48">
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Sort by:</label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md text-gray-900 text-sm"
                      >
                        <option value="title">Title</option>
                        <option value="status">Status</option>
                        <option value="featured">Featured</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-6 sm:mb-8 flex justify-between items-center">
            <p className="text-gray-600 text-sm sm:text-base">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group relative ${
                  project.featured ? 'ring-2 ring-red-200' : ''
                }`}
              >
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
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

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <div className="text-sm text-gray-500">
                      Duration: {project.duration}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2.5 sm:py-3 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                    View Details
                  </button>
                </div>
              </div>
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
      <section className="py-16 sm:py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your goals and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <button className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-white hover:text-red-600 transition-colors">
              View Our Services
            </button>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}


export default Projects
