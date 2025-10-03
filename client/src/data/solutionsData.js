// solutionsData.js - Central data file for all solution pages

export const solutionsData = {
  'computer-vision': {
    hero: {
      category: "AI SOLUTIONS",
      title: "Computer",
      subtitle: "Vision",
      image: "https://www.peopleforai.com/wp-content/uploads/2025/03/tiny-featured-image.png",
      technologies: "TensorFlow, PyTorch, OpenCV, YOLO",
      keyFeatures: "Object detection, Image segmentation, Facial recognition",
      description: "Advanced image recognition and analysis powered by state-of-the-art AI models. Our computer vision solutions enable autonomous systems, quality control automation, and intelligent surveillance applications that transform how businesses process visual data."
    },
    industries: [
      { name: "Healthcare", icon: "Heart" },
      { name: "Manufacturing", icon: "Factory" },
      { name: "Retail", icon: "ShoppingBag" },
      { name: "Automotive", icon: "Car" },
      { name: "Security", icon: "Shield" },
      { name: "Agriculture", icon: "Sprout" }
    ],
    features: [
      {
        icon: "Eye",
        title: "Real-time Object Detection",
        description: "Identify and track multiple objects simultaneously with millisecond precision using advanced neural networks and edge computing capabilities."
      },
      {
        icon: "Scan",
        title: "Image Segmentation",
        description: "Precisely isolate and classify different regions within images for detailed analysis, enabling pixel-level understanding of visual content."
      },
      {
        icon: "UserCheck",
        title: "Facial Recognition",
        description: "Secure authentication and identification systems with 99.9% accuracy, supporting access control and security applications."
      },
      {
        icon: "Layers",
        title: "3D Scene Reconstruction",
        description: "Convert 2D images into detailed 3D models for spatial analysis, architectural visualization, and augmented reality experiences."
      },
      {
        icon: "Zap",
        title: "Quality Control Automation",
        description: "Automated defect detection and quality assurance for manufacturing processes, reducing errors and improving product consistency."
      }
    ],
    process: {
      title: "Our Process",
      description: "A proven methodology that ensures successful delivery of computer vision solutions from concept to deployment.",
      steps: [
        {
          number: "01",
          icon: "MessageSquare",
          title: "Discovery & Consultation",
          description: "We begin by understanding your specific use case, technical requirements, and business objectives through detailed consultation sessions."
        },
        {
          number: "02",
          icon: "FileText",
          title: "Data Collection & Preparation",
          description: "Gather and annotate training data, ensuring high-quality datasets that reflect your real-world scenarios and edge cases."
        },
        {
          number: "03",
          icon: "Cpu",
          title: "Model Development",
          description: "Design and train custom computer vision models using state-of-the-art architectures optimized for your specific requirements."
        },
        {
          number: "04",
          icon: "TestTube",
          title: "Testing & Validation",
          description: "Rigorous testing across diverse scenarios to ensure accuracy, reliability, and performance meet your quality standards."
        },
        {
          number: "05",
          icon: "Rocket",
          title: "Deployment & Support",
          description: "Seamless integration into your systems with comprehensive training, documentation, and ongoing technical support."
        }
      ]
    },
    otherSolutions: [
      {
        title: "Natural Language Processing",
        slug: "natural-language-processing",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tags: ["sentiment analysis", "entity extraction", "text classification"],
        category: "NLP"
      },
      {
        title: "Generative AI",
        slug: "generative-ai",
        image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tags: ["content generation", "data synthesis"],
        category: "GEN AI"
      },
      {
        title: "Automation Solutions",
        slug: "automation-solutions",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tags: ["workflow automation", "RPA"],
        category: "AUTOMATION"
      }
    ]
  },

  'natural-language-processing': {
    hero: {
      category: "AI SOLUTIONS",
      title: "Natural Language",
      subtitle: "Processing",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      technologies: "spaCy, BERT, GPT, Transformers",
      keyFeatures: "Sentiment analysis, Entity extraction, Text classification",
      description: "Sophisticated text analysis and language understanding systems that power chatbots, content moderation, and automated translation. Our NLP solutions help businesses extract meaningful insights from unstructured text data and automate customer interactions."
    },
    industries: [
      { name: "Financial Services", icon: "Landmark" },
      { name: "E-commerce", icon: "ShoppingCart" },
      { name: "Media & Publishing", icon: "Newspaper" },
      { name: "Customer Support", icon: "Headphones" },
      { name: "Legal", icon: "Scale" },
      { name: "Healthcare", icon: "Heart" }
    ],
    features: [
      {
        icon: "MessageSquare",
        title: "Sentiment Analysis",
        description: "Understand customer emotions and opinions from text data, enabling data-driven decisions for product development and customer service improvements."
      },
      {
        icon: "Search",
        title: "Named Entity Recognition",
        description: "Automatically identify and extract people, organizations, locations, and other entities from large volumes of text with high accuracy."
      },
      {
        icon: "FileText",
        title: "Text Classification",
        description: "Categorize and organize documents, emails, and content automatically based on custom taxonomies and business rules."
      },
      {
        icon: "Languages",
        title: "Machine Translation",
        description: "Break language barriers with accurate, context-aware translation supporting over 100 languages for global communication."
      },
      {
        icon: "Bot",
        title: "Conversational AI",
        description: "Deploy intelligent chatbots and virtual assistants that understand context, maintain conversation flow, and provide human-like interactions."
      },
      {
        icon: "Briefcase",
        title: "Document Understanding",
        description: "Extract structured information from invoices, contracts, and reports, automating data entry and document processing workflows."
      }
    ],
    process: {
      title: "Our Process",
      description: "A systematic approach to building NLP solutions that understand and process human language with precision and context awareness.",
      steps: [
        {
          number: "01",
          icon: "Target",
          title: "Requirement Analysis",
          description: "Identify your language processing needs, target languages, and specific use cases to define project scope and objectives."
        },
        {
          number: "02",
          icon: "Database",
          title: "Data Collection & Annotation",
          description: "Gather relevant text data and create high-quality training datasets with expert linguistic annotation and labeling."
        },
        {
          number: "03",
          icon: "Brain",
          title: "Model Training & Fine-tuning",
          description: "Train specialized NLP models or fine-tune pre-trained transformers to achieve optimal performance for your domain."
        },
        {
          number: "04",
          icon: "CheckCircle",
          title: "Validation & Testing",
          description: "Comprehensive testing across linguistic variations, edge cases, and real-world scenarios to ensure accuracy and reliability."
        },
        {
          number: "05",
          icon: "Rocket",
          title: "Integration & Deployment",
          description: "Deploy NLP models into your applications with API integration, ongoing monitoring, and continuous improvement."
        }
      ]
    },
    otherSolutions: [
      {
        title: "Computer Vision",
        slug: "computer-vision",
        image: "https://www.peopleforai.com/wp-content/uploads/2025/03/tiny-featured-image.png",
        tags: ["object detection", "image segmentation", "facial recognition"],
        category: "CV"
      },
      {
        title: "Data & Content Services",
        slug: "data-content-services",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tags: ["data collection", "annotation"],
        category: "DATA"
      },
      {
        title: "Development Solutions",
        slug: "development-solutions",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tags: ["web development", "system integration"],
        category: "DEVELOPMENT"
      }
    ]
  },

  'generative-ai': {
    hero: {
      category: "AI SOLUTIONS",
      title: "Generative",
      subtitle: "AI",
      image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      technologies: "GPT-4, Stable Diffusion, DALL-E, LangChain",
      keyFeatures: "Content generation, Data synthesis, Model training",
      description: "Create synthetic data, generate high-quality content, and build intelligent systems that learn and adapt to your specific business needs. Our generative AI solutions unlock new possibilities for automation, creativity, and innovation."
    },
    industries: [
      { name: "Marketing & Advertising", icon: "Megaphone" },
      { name: "Creative & Design", icon: "Palette" },
      { name: "Healthcare", icon: "Heart" },
      { name: "Technology", icon: "Cpu" },
      { name: "Gaming", icon: "Gamepad2" },
      { name: "Education", icon: "GraduationCap" }
    ],
    features: [
      {
        icon: "Sparkles",
        title: "Content Generation",
        description: "Automatically create marketing copy, product descriptions, reports, and creative content at scale while maintaining brand voice and quality."
      },
      {
        icon: "Database",
        title: "Synthetic Data Creation",
        description: "Generate realistic training data for AI models when real data is scarce, expensive, or sensitive, accelerating development cycles."
      },
      {
        icon: "Image",
        title: "Visual Content Creation",
        description: "Produce custom images, graphics, and designs from text descriptions for marketing, product visualization, and creative projects."
      },
      {
        icon: "Code",
        title: "Code Generation",
        description: "Accelerate software development with AI-powered code completion, documentation generation, and automated testing."
      },
      {
        icon: "Brain",
        title: "Custom Model Fine-tuning",
        description: "Adapt pre-trained models to your specific use cases and domain knowledge for superior performance on specialized tasks."
      }
    ],
    process: {
      title: "Our Process",
      description: "A creative and technical process that harnesses generative AI to deliver innovative solutions tailored to your unique needs.",
      steps: [
        {
          number: "01",
          icon: "Lightbulb",
          title: "Discovery & Ideation",
          description: "Explore your creative and technical requirements, identify use cases, and define the scope of generative AI applications."
        },
        {
          number: "02",
          icon: "Settings",
          title: "Model Selection & Setup",
          description: "Choose the right generative models (GPT, DALL-E, Stable Diffusion) and configure them for your specific requirements."
        },
        {
          number: "03",
          icon: "Wrench",
          title: "Customization & Fine-tuning",
          description: "Train and fine-tune models on your domain-specific data to ensure outputs align with your brand and requirements."
        },
        {
          number: "04",
          icon: "TestTube",
          title: "Testing & Quality Control",
          description: "Extensive testing to ensure generated content meets quality standards, brand guidelines, and ethical considerations."
        },
        {
          number: "05",
          icon: "Rocket",
          title: "Deployment & Optimization",
          description: "Launch your generative AI solution with API access, user interfaces, and continuous monitoring for improvement."
        }
      ]
    },
    otherSolutions: [
      {
        title: "Computer Vision",
        slug: "computer-vision",
        image: "https://www.peopleforai.com/wp-content/uploads/2025/03/tiny-featured-image.png",
        tags: ["object detection", "image segmentation"],
        category: "CV"
      },
      {
        title: "Natural Language Processing",
        slug: "natural-language-processing",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tags: ["sentiment analysis", "entity extraction"],
        category: "NLP"
      },
      {
        title: "Data & Content Services",
        slug: "data-content-services",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tags: ["data collection", "annotation"],
        category: "DATA"
      }
    ]
  },

  'data-content-services': {
    hero: {
      category: "DATA SERVICES",
      title: "Data & Content",
      subtitle: "Services",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      technologies: "Python, Pandas, SQL, Power BI",
      keyFeatures: "Data collection, Annotation, Processing & validation",
      description: "Comprehensive data collection, annotation, processing, and management services that power your AI and business intelligence initiatives. From data entry to quality assurance, we ensure your data is accurate, organized, and ready for analysis."
    },
    industries: [
      { name: "Healthcare", icon: "Heart" },
      { name: "Finance & Banking", icon: "DollarSign" },
      { name: "Research & Academia", icon: "FlaskConical" },
      { name: "Technology", icon: "Cpu" },
      { name: "Government", icon: "Building" },
      { name: "Insurance", icon: "FileText" }
    ],
    features: [
      {
        icon: "Download",
        title: "Data Collection & Research",
        description: "Gather high-quality data from web sources, APIs, and databases to build comprehensive datasets for your business needs."
      },
      {
        icon: "Tag",
        title: "Data Annotation & Labeling",
        description: "Expert annotation services for images, text, and video to train machine learning models with precision and consistency."
      },
      {
        icon: "Database",
        title: "Data Processing & Cleansing",
        description: "Transform raw data into structured, analysis-ready formats with validation, deduplication, and standardization."
      },
      {
        icon: "ShieldCheck",
        title: "Quality Assurance",
        description: "Multi-layer validation processes ensuring data accuracy, completeness, and reliability for critical business decisions."
      },
      {
        icon: "FileSpreadsheet",
        title: "Data Entry & Migration",
        description: "Efficient digitization of physical documents and seamless migration of data between systems with zero data loss."
      },
      {
        icon: "BarChart",
        title: "Data Visualization",
        description: "Create compelling dashboards and visual reports that transform complex data into actionable insights for stakeholders."
      }
    ],
    process: {
      title: "Our Process",
      description: "A meticulous approach to data handling that ensures accuracy, security, and compliance at every stage of the workflow.",
      steps: [
        {
          number: "01",
          icon: "ClipboardList",
          title: "Requirements Gathering",
          description: "Understand your data needs, quality standards, formatting requirements, and compliance considerations in detail."
        },
        {
          number: "02",
          icon: "Database",
          title: "Data Collection & Sourcing",
          description: "Gather data from multiple sources using web scraping, APIs, manual research, or existing database extraction."
        },
        {
          number: "03",
          icon: "Edit",
          title: "Processing & Annotation",
          description: "Clean, structure, and annotate data according to your specifications with expert validation and quality checks."
        },
        {
          number: "04",
          icon: "ShieldCheck",
          title: "Quality Assurance",
          description: "Multi-layer validation through automated checks and manual review to ensure 99%+ accuracy and completeness."
        },
        {
          number: "05",
          icon: "Send",
          title: "Delivery & Support",
          description: "Deliver processed data in your preferred format with comprehensive documentation and ongoing support."
        }
      ]
    },
    otherSolutions: [
      {
        title: "Automation Solutions",
        slug: "automation-solutions",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tags: ["workflow automation", "RPA"],
        category: "AUTOMATION"
      },
      {
        title: "Development Solutions",
        slug: "development-solutions",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tags: ["web development", "custom software"],
        category: "DEVELOPMENT"
      },
      {
        title: "Generative AI",
        slug: "generative-ai",
        image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tags: ["content generation", "data synthesis"],
        category: "GEN AI"
      }
    ]
  },

  'automation-solutions': {
    hero: {
      category: "AUTOMATION",
      title: "Workflow",
      subtitle: "Automation",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      technologies: "UiPath, Power Automate, Zapier, Python",
      keyFeatures: "RPA, Process optimization, Integration automation",
      description: "Streamline your operations with intelligent workflow automation, robotic process automation (RPA), and process optimization solutions that reduce manual work, eliminate errors, and boost operational efficiency across your organization."
    },
    industries: [
      { name: "Manufacturing", icon: "Factory" },
      { name: "Finance & Banking", icon: "DollarSign" },
      { name: "Healthcare", icon: "Heart" },
      { name: "Logistics & Supply Chain", icon: "Truck" },
      { name: "Telecommunications", icon: "Radio" },
      { name: "Retail", icon: "ShoppingBag" }
    ],
    features: [
      {
        icon: "Cpu",
        title: "Robotic Process Automation",
        description: "Deploy software robots to handle repetitive tasks across applications, reducing manual effort and eliminating human error in routine operations."
      },
      {
        icon: "Workflow",
        title: "Business Process Optimization",
        description: "Analyze and redesign workflows to eliminate bottlenecks, reduce cycle times, and maximize operational efficiency."
      },
      {
        icon: "GitMerge",
        title: "System Integration",
        description: "Connect disparate systems and applications to create seamless data flow and automated workflows across your technology stack."
      },
      {
        icon: "Clock",
        title: "Task Scheduling & Orchestration",
        description: "Automate complex multi-step processes with intelligent scheduling, dependency management, and error handling."
      },
      {
        icon: "Bell",
        title: "Automated Notifications",
        description: "Keep teams informed with smart alerts and notifications triggered by specific events, thresholds, or conditions."
      }
    ],
    process: {
      title: "Our Process",
      description: "A proven methodology for identifying automation opportunities and implementing solutions that drive measurable efficiency gains.",
      steps: [
        {
          number: "01",
          icon: "Search",
          title: "Process Assessment",
          description: "Analyze your current workflows to identify automation opportunities, bottlenecks, and areas with high ROI potential."
        },
        {
          number: "02",
          icon: "FileText",
          title: "Solution Design",
          description: "Design automation workflows, select appropriate tools (RPA, API, custom scripts), and create implementation roadmap."
        },
        {
          number: "03",
          icon: "Code",
          title: "Development & Configuration",
          description: "Build and configure automation solutions with robust error handling, logging, and security measures."
        },
        {
          number: "04",
          icon: "TestTube",
          title: "Testing & Validation",
          description: "Comprehensive testing in staging environments to ensure automation handles edge cases and integrates smoothly."
        },
        {
          number: "05",
          icon: "Rocket",
          title: "Deployment & Training",
          description: "Roll out automation with user training, documentation, monitoring dashboards, and continuous optimization support."
        }
      ]
    },
    otherSolutions: [
      {
        title: "Data & Content Services",
        slug: "data-content-services",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tags: ["data collection", "annotation", "processing"],
        category: "DATA"
      },
      {
        title: "Computer Vision",
        slug: "computer-vision",
        image: "https://www.peopleforai.com/wp-content/uploads/2025/03/tiny-featured-image.png",
        tags: ["object detection", "image segmentation"],
        category: "CV"
      },
      {
        title: "Development Solutions",
        slug: "development-solutions",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tags: ["web development", "system integration"],
        category: "DEVELOPMENT"
      }
    ]
  },

  'development-solutions': {
    hero: {
      category: "DEVELOPMENT",
      title: "Custom",
      subtitle: "Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      technologies: "React, Node.js, Python, PostgreSQL",
      keyFeatures: "Web applications, System integration, Custom software",
      description: "Custom web applications, enterprise systems, and software development services tailored to your unique business requirements. We build scalable, secure, and performant solutions that integrate seamlessly with your existing technology stack."
    },
    industries: [
      { name: "Technology Startups", icon: "Laptop" },
      { name: "E-commerce", icon: "ShoppingCart" },
      { name: "Finance & Fintech", icon: "DollarSign" },
      { name: "Healthcare & Medtech", icon: "Heart" },
      { name: "Education & E-learning", icon: "GraduationCap" },
      { name: "Real Estate & PropTech", icon: "Home" }
    ],
    features: [
      {
        icon: "Globe",
        title: "Web Application Development",
        description: "Build responsive, high-performance web applications using modern frameworks and best practices for exceptional user experiences."
      },
      {
        icon: "Smartphone",
        title: "Mobile App Development",
        description: "Create native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices."
      },
      {
        icon: "Server",
        title: "API Development & Integration",
        description: "Design and implement robust RESTful and GraphQL APIs for system integration and third-party service connectivity."
      },
      {
        icon: "Cloud",
        title: "Cloud Infrastructure",
        description: "Deploy and manage scalable cloud infrastructure on AWS, Azure, or Google Cloud with automated DevOps pipelines."
      },
      {
        icon: "Package",
        title: "Custom Software Solutions",
        description: "Develop bespoke software applications tailored to your specific business processes, industry requirements, and workflows."
      },
      {
        icon: "Shield",
        title: "Security & Compliance",
        description: "Implement enterprise-grade security measures, data encryption, and compliance frameworks to protect your systems and data."
      }
    ],
    process: {
      title: "Our Process",
      description: "An agile development approach that delivers high-quality software through iterative cycles, continuous feedback, and collaboration.",
      steps: [
        {
          number: "01",
          icon: "Users",
          title: "Requirements & Planning",
          description: "Collaborate with stakeholders to define functional requirements, technical specifications, and project milestones."
        },
        {
          number: "02",
          icon: "Pencil",
          title: "Design & Architecture",
          description: "Create user interface designs, system architecture, database schemas, and technical documentation for development."
        },
        {
          number: "03",
          icon: "Code",
          title: "Agile Development",
          description: "Build features in iterative sprints with continuous integration, code reviews, and regular stakeholder demos."
        },
        {
          number: "04",
          icon: "TestTube",
          title: "Testing & QA",
          description: "Comprehensive testing including unit tests, integration tests, security audits, and user acceptance testing."
        },
        {
          number: "05",
          icon: "Rocket",
          title: "Deployment & Maintenance",
          description: "Launch your application with CI/CD pipelines, monitoring, documentation, and ongoing maintenance and support."
        }
      ]
    },
    otherSolutions: [
      {
        title: "Automation Solutions",
        slug: "automation-solutions",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tags: ["workflow automation", "RPA", "optimization"],
        category: "AUTOMATION"
      },
      {
        title: "Natural Language Processing",
        slug: "natural-language-processing",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tags: ["sentiment analysis", "text classification"],
        category: "NLP"
      },
      {
        title: "Data & Content Services",
        slug: "data-content-services",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tags: ["data collection", "processing"],
        category: "DATA"
      }
    ]
  }
};

// Helper functions remain the same
export const getSolutionBySlug = (slug) => {
  return solutionsData[slug] || null;
};

export const getAllSolutionSlugs = () => {
  return Object.keys(solutionsData);
};

export const getSolutionTitle = (slug) => {
  const solution = solutionsData[slug];
  if (!solution) return '';
  const { title, subtitle } = solution.hero;
  return subtitle ? `${title} ${subtitle}` : title;
};