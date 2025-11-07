// projectsData.js - Central data file for all project pages

export const projectsData = {
  'lidar': {
    hero: {
      category: "LIDAR ANNOTATION PROJECT",
      title: "LiDAR",
      subtitle: "",
      image: "/images/lidar-annotation-interface.png",
      images: [
        "/images/lidar-annotation-interface.png"
      ],
      technologies: "Segments.ai, CVAT, CloudCompare, Dataloop, Labelbox, Deepen AI,Python, mindkosh,Super Annotate",
      keyFeatures: "Multi-sensor fusion, 3D cuboid annotation, Semantic segmentation, Model-assisted labeling, Real-time 2D-3D projection",
      description: "Advanced multi-modal LiDAR annotation platform leveraging industry-leading tools like Segments.ai, CVAT, and CloudCompare for 3D point cloud processing, multi-sensor data fusion, and automated labeling. Combines 2D-3D projection, semantic segmentation, and model-assisted annotation for autonomous vehicles, robotics, and high-precision mapping applications with comprehensive capabilities for training machine learning models."
    },
    industries: [
      { name: "Autonomous Vehicles", icon: "Car" },
      { name: "Mapping & Surveying", icon: "Map" },
      { name: "Construction", icon: "HardHat" },
      { name: "Robotics", icon: "Bot" },
      { name: "Infrastructure", icon: "Building2" }
    ],
    features: [
      {
        icon: "Box",
        title: "3D Bounding Boxes (Cuboids)",
        description: "Precise 3D cuboid annotation for vehicles, pedestrians, and obstacles. Draw boxes around objects to define position, size, and orientation with sub-centimeter accuracy for autonomous vehicle training datasets."
      },
      {
        icon: "Video",
        title: "Video Annotation",
        description: "Frame-by-frame video annotation with object tracking across sequences. Link annotations across consecutive frames to track movement and behavior of dynamic objects over time."
      },
      {
        icon: "Layers",
        title: "2D Image Annotation",
        description: "Comprehensive 2D annotation tools for camera images synchronized with LiDAR data. Support for bounding boxes, polygons, and semantic segmentation to create multi-modal training datasets."
      },
      {
        icon: "MapPin",
        title: "3D and 2D Keypoint Annotation",
        description: "Mark specific reference points on objects such as wheel centers, door handles, and traffic sign corners to improve accuracy of motion prediction and object recognition models."
      },
      {
        icon: "Mountain",
        title: "3D Terrain Mapping",
        description: "High-precision aerial and ground-based terrain mapping with centimeter-level accuracy. Generate detailed topographical models for construction planning and environmental analysis covering 500+ hectares."
      },
      {
        icon: "Target",
        title: "Semantic Segmentation",
        description: "Label each point in the cloud with specific classes such as 'road,' 'sidewalk,' 'building,' or 'vegetation' for detailed point-level scene understanding and environmental perception."
      },
      {
        icon: "Users",
        title: "Instance Segmentation",
        description: "Advanced segmentation that differentiates between individual instances of the same class (e.g., 'pedestrian A' and 'pedestrian B') for multi-object tracking applications."
      },
      {
        icon: "Route",
        title: "Polyline Annotation",
        description: "Trace linear features like lane boundaries, road markings, and power lines to aid navigation and path planning systems with precise geometric information."
      },
      {
        icon: "Zap",
        title: "Real-time Processing",
        description: "Optimized pipeline processing 5M+ points per second with GPU acceleration for efficient annotation workflows and instant feedback during labeling tasks."
      },
      {
        icon: "GitBranch",
        title: "Object Tracking",
        description: "Advanced multi-object tracking across LiDAR frames and video sequences. Maintains consistent IDs for moving objects through occlusions, enabling behavior analysis and trajectory prediction for autonomous navigation systems."
      },
      {
        icon: "Scan",
        title: "Sensor Fusion & Calibration",
        description: "Precise calibration and fusion of multiple sensor modalities including LiDAR, cameras, radar, and IMU using Segments.ai and Deepen. Ensures accurate spatial alignment and temporal synchronization for comprehensive scene understanding and robust perception."
      },
      {
        icon: "Sparkles",
        title: "Zero-Shot & Model-Assisted Labeling",
        description: "Leverage pre-trained models and zero-shot capabilities for automated pre-labeling across 80+ standard classes. Upload custom models to accelerate annotation workflows with AI-powered predictions, significantly reducing manual labeling time."
      },
      {
        icon: "Eye",
        title: "2D-3D Projection & Overlay",
        description: "Real-time synchronized visualization overlaying camera images with point clouds. Enables context-aware labeling with automatic projection of 3D annotations to 2D views and vice versa, ensuring consistency across all sensor modalities."
      },
      {
        icon: "Database",
        title: "Data Curation & Management",
        description: "Advanced dataset curation tools for organizing, filtering, and grouping point cloud data before annotation. Supports multiple formats including KITTI, handles clouds up to 500M points, with intelligent data selection for optimal model training."
      }
    ],
    process: {
      title: "Development Process",
      description: "Comprehensive approach to building a multi-modal LiDAR annotation platform from data acquisition to AI model deployment.",
      steps: [
        {
          number: "01",
          icon: "Target",
          title: "Requirements Analysis & Tool Selection",
          description: "Evaluated leading annotation platforms (Segments.ai, CVAT, Deepen) and processing tools (CloudCompare, LAStools, FME). Identified requirements for multi-sensor fusion, 3D cuboids, semantic segmentation, model-assisted labeling, and 2D-3D projection capabilities for autonomous vehicle and robotics applications."
        },
        {
          number: "02",
          icon: "Database",
          title: "Data Collection & Processing",
          description: "Gathered multi-modal datasets including LiDAR scans (up to 500M points), camera images, and video sequences. Processed point clouds using CloudCompare and LAStools, converted formats with FME, and implemented precise temporal and spatial synchronization for accurate sensor fusion."
        },
        {
          number: "03",
          icon: "Code",
          title: "Annotation Tools Development",
          description: "Built custom annotation interfaces supporting 3D cuboids, 2D bounding boxes, video tracking, keypoint marking, terrain modeling, semantic/instance segmentation, and polyline tracing with real-time visualization."
        },
        {
          number: "04",
          icon: "Layers",
          title: "Multi-Modal Annotation Workflow",
          description: "Executed comprehensive annotation campaigns using Segments.ai for multi-sensor fusion labeling and CVAT for flexible annotation workflows. Leveraged zero-shot models and automated pre-labeling for 80+ classes, covering 3D cuboids, semantic segmentation, 2D image labels, and video sequences with quality assurance and inter-annotator validation."
        },
        {
          number: "05",
          icon: "TestTube",
          title: "Validation & Quality Control",
          description: "Rigorous validation of annotations across all modalities with automated consistency checks, outlier detection, and manual review processes to ensure high-quality training data."
        },
        {
          number: "06",
          icon: "Rocket",
          title: "Model Training & Deployment",
          description: "Utilized annotated datasets to train machine learning models for object detection, semantic segmentation, and motion prediction. Deployed models for real-time inference in autonomous systems."
        }
      ]
    },
    outcomes: {
      title: "Project Outcomes",
      results: [
        { label: "Processing Speed", value: "5M+ points/sec" },
        { label: "3D Annotation Accuracy", value: "< 2cm error" },
        { label: "Terrain Mapping Precision", value: "< 5cm" },
        { label: "Objects Annotated", value: "100,000+" },
        { label: "Video Frames Labeled", value: "50,000+" },
        { label: "Area Mapped", value: "500+ hectares" }
      ],
      testimonial: {
        quote: "This comprehensive LiDAR annotation platform has revolutionized our autonomous vehicle development. The multi-modal approach combining 3D, 2D, video, terrain, and keypoint annotations provides the rich training data our ML models need. The accuracy and efficiency gains have been extraordinary.",
        author: "Director of AI/ML, Autonomous Vehicles Division"
      }
    }
  },

  'gen-ai': {
    hero: {
      category: "AI & AUTOMATION",
      title: "Data Enrichment",
      subtitle: "",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      technologies: "HubSpot, Salesforce, CRM, zoominfo, clay.com, Apollo,maps",
      keyFeatures: "Lead generation, Conversational AI, Predictive analytics, Automated outreach",
      description: "Advanced Generative AI platform for intelligent lead generation, personalized customer engagement, and automated sales optimization. Leverages cutting-edge AI models to identify, qualify, and nurture prospects through intelligent automation, conversational interfaces and predictive analytics that drive revenue growth."
    },
    industries: [
      { name: "Sales & Marketing", icon: "TrendingUp" },
      { name: "E-commerce", icon: "ShoppingCart" },
      { name: "B2B Services", icon: "Briefcase" },
      { name: "Technology", icon: "Cpu" },
      { name: "Real Estate", icon: "Building2" }
    ],
    features: [
      {
        icon: "Mail",
        title: "Personalized Email Campaigns",
        description: "AI-generated personalized email outreach messages tailored to each prospect's industry, pain points, and behavior patterns. Automatically creates compelling subject lines, body content, and follow-up sequences with high conversion rates."
      },
      {
        icon: "Target",
        title: "Prospect Research & Identification",
        description: "Intelligent analysis of customer data to identify ideal customer profiles (ICP) and discover lookalike audiences. AI-powered lead scoring prioritizes prospects based on conversion likelihood, engagement history, and behavioral signals."
      },
      {
        icon: "MessageSquare",
        title: "24/7 Conversational AI Chatbots",
        description: "Smart chatbots that engage website visitors, qualify leads round-the-clock, answer product questions, schedule demos automatically, and seamlessly hand off qualified prospects to sales teams with complete conversation context."
      },
      {
        icon: "Bot",
        title: "AI Sales Assistants",
        description: "Virtual assistants that handle initial discovery calls, provide instant product information, schedule meetings with sales reps, and maintain consistent follow-up with prospects through multiple channels including email, SMS, and chat."
      },
      {
        icon: "Brain",
        title: "Predictive Lead Scoring",
        description: "Machine learning models that analyze hundreds of data points to predict which leads are most likely to convert. Provides real-time scoring updates based on engagement patterns, demographic data, and behavioral triggers."
      },
      {
        icon: "BarChart3",
        title: "Campaign Performance Analytics",
        description: "Deep analysis of campaign effectiveness with AI-powered recommendations for optimization. Identifies winning messaging patterns, optimal send times, best-performing channels, and suggests A/B testing strategies."
      },
      {
        icon: "Users",
        title: "Lookalike Audience Generation",
        description: "Advanced algorithms that analyze your best customers to find similar prospects in external databases. Expands your addressable market by identifying companies and individuals matching your ideal customer profile."
      },
      {
        icon: "Sparkles",
        title: "Content Generation & Personalization",
        description: "Automatically creates customized landing pages, ad copy, social media posts, and sales collateral tailored to specific audience segments. Generates thousands of personalized variations while maintaining brand voice."
      },
      {
        icon: "TrendingUp",
        title: "Conversion Pattern Recognition",
        description: "AI identifies patterns in successful conversions across your entire funnel. Recognizes which touchpoints, messages, and timing combinations lead to closed deals, then replicates winning strategies automatically."
      },
      {
        icon: "Clock",
        title: "Automated Lead Nurturing",
        description: "Intelligent drip campaigns that adapt to prospect behavior in real-time. Automatically adjusts messaging, timing, and channel selection based on engagement signals to move leads through the pipeline efficiently."
      },
      {
        icon: "Database",
        title: "Data Enrichment & Validation",
        description: "Automatically enriches lead records with firmographic data, social profiles, technology stack information, and contact details. Validates and cleanses data to ensure high-quality prospect information for outreach."
      },
      {
        icon: "Workflow",
        title: "Multi-Channel Orchestration",
        description: "Coordinates personalized outreach across email, LinkedIn, phone, SMS, and retargeting ads. AI determines the optimal channel mix and sequence for each prospect based on their preferences and response patterns."
      }
    ],
    process: {
      title: "Development Process",
      description: "Comprehensive approach to building an intelligent AI-powered lead generation system from strategy to deployment and optimization.",
      steps: [
        {
          number: "01",
          icon: "Target",
          title: "Strategy & ICP Definition",
          description: "Collaborated with sales and marketing teams to define ideal customer profiles, key pain points, and conversion goals. Analyzed historical data to identify patterns in successful deals and customer acquisition costs."
        },
        {
          number: "02",
          icon: "Database",
          title: "Data Integration & Preparation",
          description: "Integrated multiple data sources including CRM, marketing automation, web analytics, and third-party databases. Built comprehensive data pipelines for real-time prospect scoring and enrichment with quality validation."
        },
        {
          number: "03",
          icon: "Brain",
          title: "AI Model Development & Training",
          description: "Developed custom machine learning models for lead scoring, content generation, and conversation intelligence. Trained models on historical conversion data and continuously refined using reinforcement learning from ongoing campaigns."
        },
        {
          number: "04",
          icon: "MessageSquare",
          title: "Conversational AI Implementation",
          description: "Built intelligent chatbots and voice assistants with natural language understanding, context retention, and multi-turn conversation capabilities. Integrated with calendar systems, CRM, and communication platforms for seamless handoffs."
        },
        {
          number: "05",
          icon: "Mail",
          title: "Personalization Engine Development",
          description: "Created dynamic content generation system that produces personalized emails, landing pages, and ad copy at scale. Implemented A/B testing framework to continuously improve messaging effectiveness across segments."
        },
        {
          number: "06",
          icon: "BarChart",
          title: "Analytics & Optimization Dashboard",
          description: "Built comprehensive analytics platform tracking campaign performance, lead quality metrics, conversion rates, and ROI. Implemented AI-powered recommendations for continuous optimization of targeting and messaging."
        },
        {
          number: "07",
          icon: "Rocket",
          title: "Deployment & Continuous Learning",
          description: "Deployed system with gradual rollout strategy, A/B testing against existing processes. Implemented feedback loops for continuous model improvement and regular retraining based on new conversion data and market changes."
        }
      ]
    },
    outcomes: {
      title: "Project Outcomes",
      results: [
        { label: "Lead Quality Improvement", value: "73%" },
        { label: "Conversion Rate Increase", value: "2.8x" },
        { label: "Sales Cycle Reduction", value: "40%" },
        { label: "Cost Per Lead Decrease", value: "58%" },
        { label: "Email Open Rate", value: "68%" },
        { label: "Lead Response Time", value: "< 2 mins" },
        { label: "Qualified Leads/Month", value: "5,000+" },
        { label: "Automation Coverage", value: "85%" }
      ],
      testimonial: {
        quote: "This Gen AI lead generation platform has completely transformed our sales pipeline. The quality of leads has improved dramatically, and our sales team now focuses on closing deals rather than prospecting. The personalized outreach at scale was previously impossible with our team size. ROI has been exceptional.",
        author: "VP of Sales & Marketing, B2B SaaS Company"
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
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
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
        { label: "Uptime", value: "99.9%" }
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
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
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
        { label: "Execution Time", value: "< 30 mins" }
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
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
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
        { label: "Data Sources", value: "15+ integrated" }
      ],
      testimonial: {
        quote: "The analytics platform has revolutionized our investment decision-making process. The predictive models have been remarkably accurate.",
        author: "Head of Quantitative Analysis"
      }
    }
  },

  'ecommerce-platform-development': {
    hero: {
      category: "SOFTWARE DEVELOPMENT",
      title: "E-commerce Platform",
      subtitle: "Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      technologies: "React, Next.js, Stripe, MongoDB",
      keyFeatures: "Payment integration, Product management, Order tracking",
      description: "Modern e-commerce platform with advanced product management and payment processing capabilities."
    },
    industries: [
      { name: "Retail", icon: "ShoppingCart" },
      { name: "E-commerce", icon: "Store" }
    ],
    features: [
      { icon: "CreditCard", title: "Payment Integration", description: "Secure payment processing with Stripe integration." },
      { icon: "Package", title: "Product Management", description: "Comprehensive product catalog and inventory management." }
    ],
    process: {
      title: "Development Process",
      steps: [
        { number: "01", icon: "Pencil", title: "Design", description: "UI/UX design for seamless shopping experience." },
        { number: "02", icon: "Code", title: "Development", description: "Full-stack development with modern technologies." }
      ]
    },
    outcomes: {
      results: [
        { label: "Conversion Rate", value: "12%" },
        { label: "Page Load", value: "< 2s" }
      ],
      testimonial: {
        quote: "Our sales increased by 40% after launching this platform.",
        author: "CEO, Retail Company"
      }
    }
  },

  'api-testing-automation': {
    hero: {
      category: "SOFTWARE TESTING",
      title: "API Testing",
      subtitle: "Automation",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      technologies: "Postman, Newman, Jest, REST Assured",
      keyFeatures: "Automated validation, Performance testing, CI/CD integration",
      description: "Comprehensive API testing framework with automated validation and performance testing."
    },
    industries: [
      { name: "Software Testing", icon: "TestTube" },
      { name: "Quality Assurance", icon: "CheckCircle" }
    ],
    features: [
      { icon: "Zap", title: "Automated Testing", description: "Fully automated API testing with continuous integration." }
    ],
    process: {
      steps: [
        { number: "01", icon: "Code", title: "Test Creation", description: "Develop comprehensive test suites." }
      ]
    },
    outcomes: {
      results: [
        { label: "Test Coverage", value: "98%" },
        { label: "Bugs Detected", value: "150+" }
      ],
      testimonial: {
        quote: "Significantly improved our API reliability.",
        author: "QA Lead"
      }
    }
  },

  'healthcare-data-analytics': {
    hero: {
      category: "DATA ANALYTICS",
      title: "Healthcare Data",
      subtitle: "Analytics",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      technologies: "R, Python, Power BI, SQL",
      keyFeatures: "Patient outcome prediction, Hospital efficiency analysis",
      description: "Patient outcome prediction and hospital efficiency analysis using machine learning."
    },
    industries: [
      { name: "Healthcare", icon: "Heart" },
      { name: "Medical", icon: "Activity" }
    ],
    features: [
      { icon: "TrendingUp", title: "Predictive Analytics", description: "ML-powered patient outcome predictions." }
    ],
    process: {
      steps: [
        { number: "01", icon: "Database", title: "Data Collection", description: "Gather patient and hospital data." }
      ]
    },
    outcomes: {
      results: [
        { label: "Prediction Accuracy", value: "91%" },
        { label: "Efficiency Gain", value: "25%" }
      ],
      testimonial: {
        quote: "Transformed our patient care approach.",
        author: "Hospital Director"
      }
    }
  },

  'custom-software-development': {
    hero: {
      category: "SOFTWARE DEVELOPMENT",
      title: "Custom Software",
      subtitle: "Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      technologies: "Vue.js, Laravel, MySQL, AWS",
      keyFeatures: "Custom workflows, Business automation, Cloud hosting",
      description: "Tailored software solutions designed to meet specific business requirements and optimize workflows."
    },
    industries: [
      { name: "Enterprise", icon: "Building" },
      { name: "Business", icon: "Briefcase" }
    ],
    features: [
      { icon: "Settings", title: "Custom Workflows", description: "Tailored to your specific business processes." }
    ],
    process: {
      steps: [
        { number: "01", icon: "Users", title: "Requirements", description: "Understand business needs." }
      ]
    },
    outcomes: {
      results: [
        { label: "Time Saved", value: "40%" },
        { label: "ROI", value: "300%" }
      ],
      testimonial: {
        quote: "Perfect solution for our unique needs.",
        author: "Business Owner"
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
