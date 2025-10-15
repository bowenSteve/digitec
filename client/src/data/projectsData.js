// projectsData.js - Central data file for all project pages

export const projectsData = {
  'lidar-point-cloud-processing': {
    hero: {
      category: "LIDAR PROJECT",
      title: "LiDAR Point Cloud",
      subtitle: "Processing",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      technologies: "Python, PCL, CloudCompare, PDAL",
      keyFeatures: "3D point cloud processing, Autonomous vehicle mapping, Real-time processing",
      description: "Advanced 3D point cloud processing system designed for autonomous vehicles and high-precision mapping applications. This project demonstrates cutting-edge LiDAR technology implementation with real-time processing capabilities and seamless integration with autonomous navigation systems."
    },
    industries: [
      { name: "Automotive", icon: "Car" },
      { name: "Mapping & Surveying", icon: "Map" },
      { name: "Construction", icon: "HardHat" },
      { name: "Robotics", icon: "Bot" }
    ],
    features: [
      {
        icon: "Layers",
        title: "3D Point Cloud Analysis",
        description: "Advanced algorithms for processing millions of 3D points per second, enabling accurate object detection and terrain mapping with sub-centimeter precision."
      },
      {
        icon: "Zap",
        title: "Real-time Processing",
        description: "Optimized pipeline for processing LiDAR data in real-time, crucial for autonomous navigation and dynamic environment mapping."
      },
      {
        icon: "Target",
        title: "Object Classification",
        description: "Machine learning-powered classification system that identifies and categorizes objects from point cloud data including vehicles, pedestrians, and infrastructure."
      },
      {
        icon: "Map",
        title: "High-Precision Mapping",
        description: "Generate detailed 3D maps with centimeter-level accuracy for navigation, construction planning, and environmental monitoring."
      }
    ],
    process: {
      title: "Development Process",
      description: "A systematic approach to building robust LiDAR processing solutions from data acquisition to deployment.",
      steps: [
        {
          number: "01",
          icon: "Target",
          title: "Requirements Analysis",
          description: "Defined technical requirements including processing speed, accuracy thresholds, and integration needs with existing autonomous systems."
        },
        {
          number: "02",
          icon: "Database",
          title: "Data Collection & Preparation",
          description: "Gathered diverse LiDAR datasets covering various environments and conditions for comprehensive testing and validation."
        },
        {
          number: "03",
          icon: "Code",
          title: "Algorithm Development",
          description: "Developed custom point cloud processing algorithms optimized for performance and accuracy using PCL and PDAL libraries."
        },
        {
          number: "04",
          icon: "TestTube",
          title: "Testing & Validation",
          description: "Rigorous testing across multiple scenarios including urban environments, highways, and challenging weather conditions."
        },
        {
          number: "05",
          icon: "Rocket",
          title: "Deployment & Integration",
          description: "Seamlessly integrated the solution with autonomous vehicle systems and mapping platforms with comprehensive documentation."
        }
      ]
    },
    outcomes: {
      title: "Project Outcomes",
      results: [
        { label: "Processing Speed", value: "5M+ points/sec" },
        { label: "Accuracy", value: "< 2cm error" },
        { label: "Project Duration", value: "6 months" },
        { label: "Status", value: "Completed" }
      ],
      testimonial: {
        quote: "The LiDAR processing system exceeded our expectations in both accuracy and performance. It's now a critical component of our autonomous navigation stack.",
        author: "Technical Lead, Autonomous Vehicles Division"
      }
    }
  },

  'enterprise-web-application': {
    hero: {
      category: "SOFTWARE DEVELOPMENT",
      title: "Enterprise Web",
      subtitle: "Application",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      technologies: "React, Node.js, PostgreSQL, Docker",
      keyFeatures: "Real-time analytics, Microservices architecture, Scalable infrastructure",
      description: "Full-stack enterprise application featuring real-time data processing, comprehensive analytics dashboard, and microservices architecture. Built to handle high-volume transactions with robust security and seamless integration capabilities."
    },
    industries: [
      { name: "Enterprise", icon: "Building" },
      { name: "Technology", icon: "Cpu" },
      { name: "Financial Services", icon: "DollarSign" },
      { name: "Healthcare", icon: "Heart" }
    ],
    features: [
      {
        icon: "BarChart",
        title: "Real-time Analytics Dashboard",
        description: "Interactive dashboard providing real-time insights into business metrics with customizable visualizations and automated reporting capabilities."
      },
      {
        icon: "Server",
        title: "Microservices Architecture",
        description: "Scalable microservices design enabling independent deployment, better resource utilization, and improved system reliability."
      },
      {
        icon: "Shield",
        title: "Enterprise Security",
        description: "Multi-layered security implementation including OAuth2, role-based access control, and end-to-end encryption for sensitive data."
      },
      {
        icon: "GitMerge",
        title: "Third-party Integrations",
        description: "Seamless integration with popular enterprise tools including CRM systems, payment gateways, and analytics platforms."
      },
      {
        icon: "Zap",
        title: "High Performance",
        description: "Optimized for handling 10,000+ concurrent users with sub-second response times and 99.9% uptime guarantee."
      }
    ],
    process: {
      title: "Development Process",
      description: "Agile development methodology ensuring continuous delivery and stakeholder collaboration throughout the project lifecycle.",
      steps: [
        {
          number: "01",
          icon: "Users",
          title: "Discovery & Planning",
          description: "Conducted extensive stakeholder interviews and workshops to define functional requirements and technical architecture."
        },
        {
          number: "02",
          icon: "Pencil",
          title: "Design & Prototyping",
          description: "Created high-fidelity mockups and interactive prototypes validated through user testing sessions."
        },
        {
          number: "03",
          icon: "Code",
          title: "Agile Development",
          description: "Implemented features in 2-week sprints with continuous integration and regular stakeholder demos."
        },
        {
          number: "04",
          icon: "TestTube",
          title: "QA & Security Audits",
          description: "Comprehensive testing including automated tests, security audits, and performance optimization."
        },
        {
          number: "05",
          icon: "Rocket",
          title: "Deployment & Support",
          description: "Deployed on containerized infrastructure with CI/CD pipeline and ongoing maintenance support."
        }
      ]
    },
    outcomes: {
      title: "Project Outcomes",
      results: [
        { label: "Users Supported", value: "10,000+ concurrent" },
        { label: "Uptime", value: "99.9%" },
        { label: "Project Duration", value: "8 months" },
        { label: "Status", value: "In Production" }
      ],
      testimonial: {
        quote: "The application has transformed how we manage our operations. The real-time analytics alone have saved us countless hours of manual reporting.",
        author: "CTO, Enterprise Client"
      }
    }
  },

  'mobile-app-testing-suite': {
    hero: {
      category: "SOFTWARE TESTING",
      title: "Mobile App Testing",
      subtitle: "Suite",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      technologies: "Selenium, Appium, Jest, Cypress",
      keyFeatures: "Cross-platform testing, Automated regression, CI/CD integration",
      description: "Comprehensive automated testing framework for mobile applications spanning iOS and Android platforms. Features parallel test execution, visual regression testing, and seamless integration with popular CI/CD pipelines."
    },
    industries: [
      { name: "Mobile Apps", icon: "Smartphone" },
      { name: "E-commerce", icon: "ShoppingCart" },
      { name: "FinTech", icon: "Landmark" },
      { name: "Gaming", icon: "Gamepad2" }
    ],
    features: [
      {
        icon: "CheckCircle",
        title: "Cross-platform Testing",
        description: "Unified testing framework supporting both iOS and Android with shared test scripts and parallel execution capabilities."
      },
      {
        icon: "Eye",
        title: "Visual Regression Testing",
        description: "Automated visual comparison to detect UI inconsistencies and regressions across different devices and screen sizes."
      },
      {
        icon: "Zap",
        title: "Performance Testing",
        description: "Comprehensive performance monitoring including app launch times, memory usage, and network request optimization."
      },
      {
        icon: "GitMerge",
        title: "CI/CD Integration",
        description: "Seamless integration with Jenkins, GitHub Actions, and GitLab CI for automated testing on every code commit."
      },
      {
        icon: "FileText",
        title: "Detailed Reporting",
        description: "Rich test reports with screenshots, video recordings, and detailed logs for quick issue identification and resolution."
      }
    ],
    process: {
      title: "Development Process",
      description: "Systematic approach to building a comprehensive testing framework that ensures mobile app quality and reliability.",
      steps: [
        {
          number: "01",
          icon: "Target",
          title: "Test Strategy Definition",
          description: "Identified critical user flows, edge cases, and performance benchmarks for comprehensive test coverage."
        },
        {
          number: "02",
          icon: "Settings",
          title: "Framework Setup",
          description: "Configured testing infrastructure with device farms, emulators, and continuous integration pipelines."
        },
        {
          number: "03",
          icon: "Code",
          title: "Test Development",
          description: "Created reusable test scripts covering functional, UI, and performance testing scenarios."
        },
        {
          number: "04",
          icon: "Play",
          title: "Execution & Optimization",
          description: "Optimized test execution time through parallel testing and smart test selection strategies."
        },
        {
          number: "05",
          icon: "BarChart",
          title: "Monitoring & Maintenance",
          description: "Established ongoing test maintenance process and dashboard for tracking test metrics and coverage."
        }
      ]
    },
    outcomes: {
      title: "Project Outcomes",
      results: [
        { label: "Test Coverage", value: "95%+" },
        { label: "Execution Time", value: "< 30 mins" },
        { label: "Project Duration", value: "4 months" },
        { label: "Status", value: "Completed" }
      ],
      testimonial: {
        quote: "This testing suite has been a game-changer for our mobile app quality. We've reduced bugs in production by 80% since implementation.",
        author: "QA Manager, Mobile Team"
      }
    }
  },

  'financial-data-analytics': {
    hero: {
      category: "DATA ANALYSIS",
      title: "Financial Data",
      subtitle: "Analytics Platform",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      technologies: "Python, Pandas, TensorFlow, Tableau",
      keyFeatures: "Predictive analytics, Risk assessment, Real-time dashboards",
      description: "Advanced financial data processing and predictive analytics platform designed for investment decision-making. Features machine learning models for risk assessment, market trend prediction, and portfolio optimization with real-time data integration."
    },
    industries: [
      { name: "Financial Services", icon: "Landmark" },
      { name: "Investment Banking", icon: "TrendingUp" },
      { name: "Hedge Funds", icon: "DollarSign" },
      { name: "FinTech", icon: "Cpu" }
    ],
    features: [
      {
        icon: "TrendingUp",
        title: "Predictive Analytics",
        description: "Machine learning models analyzing historical data to predict market trends and investment opportunities with high accuracy."
      },
      {
        icon: "ShieldCheck",
        title: "Risk Assessment Engine",
        description: "Automated risk evaluation system providing real-time risk scores and portfolio exposure analysis across multiple asset classes."
      },
      {
        icon: "BarChart",
        title: "Interactive Dashboards",
        description: "Real-time visualization of financial metrics, market data, and portfolio performance with customizable views and alerts."
      },
      {
        icon: "Brain",
        title: "AI-Powered Insights",
        description: "Natural language processing of financial news and reports to extract actionable insights and sentiment analysis."
      },
      {
        icon: "Lock",
        title: "Secure Data Handling",
        description: "Enterprise-grade security with encrypted data transmission, audit trails, and compliance with financial regulations."
      }
    ],
    process: {
      title: "Development Process",
      description: "Data-driven approach combining financial domain expertise with advanced analytics and machine learning techniques.",
      steps: [
        {
          number: "01",
          icon: "Target",
          title: "Requirements & Data Discovery",
          description: "Collaborated with financial analysts to understand key metrics, data sources, and analytical requirements."
        },
        {
          number: "02",
          icon: "Database",
          title: "Data Pipeline Development",
          description: "Built robust ETL pipelines for integrating multiple financial data sources with real-time and historical data."
        },
        {
          number: "03",
          icon: "Brain",
          title: "Model Development",
          description: "Trained and validated machine learning models for predictive analytics and risk assessment using historical data."
        },
        {
          number: "04",
          icon: "BarChart",
          title: "Dashboard Creation",
          description: "Designed interactive dashboards in Tableau providing intuitive access to complex financial analytics."
        },
        {
          number: "05",
          icon: "Rocket",
          title: "Deployment & Monitoring",
          description: "Deployed on secure infrastructure with continuous model monitoring and performance optimization."
        }
      ]
    },
    outcomes: {
      title: "Project Outcomes",
      results: [
        { label: "Prediction Accuracy", value: "87%" },
        { label: "Data Sources", value: "15+ integrated" },
        { label: "Project Duration", value: "5 months" },
        { label: "Status", value: "Completed" }
      ],
      testimonial: {
        quote: "The analytics platform has revolutionized our investment decision-making process. The predictive models have been remarkably accurate.",
        author: "Head of Quantitative Analysis"
      }
    }
  }
};

// Helper functions
export const getProjectBySlug = (slug) => {
  return projectsData[slug] || null;
};

export const getAllProjectSlugs = () => {
  return Object.keys(projectsData);
};

export const getProjectTitle = (slug) => {
  const project = projectsData[slug];
  if (!project) return '';
  const { title, subtitle } = project.hero;
  return subtitle ? `${title} ${subtitle}` : title;
};
