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
    useCases: [
      {
        featured: true,
        category: "HEALTHCARE",
        title: "AI-Powered Patient Record Analysis",
        description: "Major hospital network uses computer vision to digitize and analyze 500,000+ patient records, reducing processing time by 80% and improving diagnostic accuracy.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["80% faster processing", "99.5% accuracy", "500K+ records processed"]
      },
      {
        featured: false,
        category: "MANUFACTURING",
        title: "Automated Quality Control",
        description: "Automotive manufacturer implements real-time defect detection system, identifying product flaws with 99.9% accuracy on production lines.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["99.9% accuracy", "40% cost reduction", "Zero defects shipped"]
      },
      {
        featured: false,
        category: "RETAIL",
        title: "Smart Inventory Management",
        description: "Global retailer deploys computer vision to track shelf inventory in real-time across 1,200+ stores, preventing stockouts and optimizing supply chain operations.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["35% reduction in stockouts", "1,200+ stores automated", "Real-time inventory tracking"]
      },
      {
        featured: false,
        category: "SECURITY",
        title: "Advanced Surveillance System",
        description: "International airport implements facial recognition and object detection to enhance security screening, processing 100,000+ passengers daily while reducing wait times.",
        image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["100K+ passengers daily", "60% faster screening", "Enhanced threat detection"]
      },
      {
        featured: false,
        category: "AGRICULTURE",
        title: "Precision Crop Monitoring",
        description: "Agricultural cooperative uses drone-based computer vision to monitor crop health across 50,000 acres, detecting diseases early and optimizing yield by 25%.",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["25% yield increase", "50K acres monitored", "Early disease detection"]
      }
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
    useCases: [
      {
        featured: true,
        category: "FINANCIAL SERVICES",
        title: "Intelligent Fraud Detection & Analysis",
        description: "Leading bank deploys NLP to analyze transaction narratives and customer communications, detecting fraudulent patterns across 10 million+ daily transactions with 96% accuracy.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["96% fraud detection accuracy", "10M+ transactions daily", "75% reduction in false positives"]
      },
      {
        featured: false,
        category: "E-COMMERCE",
        title: "AI-Powered Customer Review Analysis",
        description: "E-commerce platform uses sentiment analysis to process 500,000+ product reviews monthly, automatically categorizing feedback and improving product recommendations by 40%.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["500K+ reviews analyzed monthly", "40% better recommendations", "Real-time sentiment tracking"]
      },
      {
        featured: false,
        category: "CUSTOMER SUPPORT",
        title: "Multilingual Chatbot Platform",
        description: "Global telecommunications company implements NLP chatbot supporting 27 languages, handling 2 million+ customer queries monthly and reducing support costs by 60%.",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["27 languages supported", "2M+ queries monthly", "60% cost reduction"]
      },
      {
        featured: false,
        category: "LEGAL",
        title: "Automated Contract Intelligence",
        description: "Law firm uses NLP to extract key clauses and analyze risk from legal documents, reviewing 10,000+ contracts annually and reducing review time by 70%.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["70% faster contract review", "10K+ contracts processed", "Enhanced risk identification"]
      },
      {
        featured: false,
        category: "HEALTHCARE",
        title: "Clinical Notes Processing System",
        description: "Healthcare provider implements NLP to extract medical entities from 200,000+ clinical notes monthly, improving diagnostic coding accuracy and reducing billing errors by 85%.",
        image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["85% fewer billing errors", "200K+ notes processed", "Improved coding accuracy"]
      }
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
    useCases: [
      {
        featured: true,
        category: "MARKETING & ADVERTISING",
        title: "AI-Generated Marketing Campaign Content",
        description: "Digital marketing agency uses generative AI to create personalized ad copy and visuals for 200+ clients, reducing content production time by 85% while maintaining brand consistency.",
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["85% faster content creation", "200+ clients served", "3x more variations tested"]
      },
      {
        featured: false,
        category: "HEALTHCARE",
        title: "Synthetic Medical Data Generation",
        description: "Research hospital generates realistic synthetic patient data for ML model training, enabling privacy-compliant development of diagnostic AI systems without exposing real patient information.",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["100% HIPAA compliant", "5M+ synthetic records", "Accelerated AI development"]
      },
      {
        featured: false,
        category: "GAMING",
        title: "Procedural Game Asset Creation",
        description: "Game studio leverages generative AI to create unique character designs, textures, and environments, producing 10,000+ game assets and reducing art production costs by 60%.",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["10K+ unique assets", "60% cost reduction", "Faster iteration cycles"]
      },
      {
        featured: false,
        category: "EDUCATION",
        title: "Personalized Learning Content Generator",
        description: "Online education platform uses AI to generate customized lesson plans, quizzes, and study materials for 50,000+ students, adapting content to individual learning styles and pace.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["50K+ students served", "40% better engagement", "Personalized learning paths"]
      },
      {
        featured: false,
        category: "TECHNOLOGY",
        title: "Automated Code Documentation & Testing",
        description: "Software company implements AI to automatically generate code documentation, unit tests, and API examples, improving developer productivity by 45% and code coverage by 30%.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["45% productivity boost", "30% more code coverage", "Automated documentation"]
      }
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
    useCases: [
      {
        featured: true,
        category: "HEALTHCARE",
        title: "Medical Image Annotation Pipeline",
        description: "Healthcare AI startup leverages expert radiologists to annotate 250,000+ medical images for training diagnostic AI models, achieving 98% inter-annotator agreement and FDA approval pathway.",
        image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["250K+ images annotated", "98% agreement rate", "FDA approval pathway"]
      },
      {
        featured: false,
        category: "FINANCE & BANKING",
        title: "Financial Document Digitization",
        description: "Investment firm digitizes and structures 15 years of paper records into searchable database, processing 3 million+ documents with 99.8% accuracy for regulatory compliance.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["3M+ documents processed", "99.8% accuracy", "Full compliance achieved"]
      },
      {
        featured: false,
        category: "RESEARCH & ACADEMIA",
        title: "Scientific Literature Data Extraction",
        description: "Research institute extracts structured data from 50,000+ scientific papers, building comprehensive database for meta-analysis and accelerating research discovery by 6 months.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["50K+ papers processed", "6 months saved", "Comprehensive meta-analysis"]
      },
      {
        featured: false,
        category: "TECHNOLOGY",
        title: "AI Training Dataset Curation",
        description: "Tech company curates and labels 5 million+ diverse data points for computer vision model, covering 100+ categories and achieving state-of-the-art model performance.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["5M+ data points", "100+ categories", "SOTA model performance"]
      },
      {
        featured: false,
        category: "INSURANCE",
        title: "Claims Document Processing",
        description: "Insurance provider automates claims document data extraction, processing 100,000+ claims monthly with 95% straight-through processing rate and 70% faster settlement times.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["100K+ claims monthly", "95% auto-processing", "70% faster settlements"]
      }
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
    useCases: [
      {
        featured: true,
        category: "MANUFACTURING",
        title: "End-to-End Production Automation",
        description: "Electronics manufacturer deploys RPA across 15 factories to automate inventory management, quality reporting, and order processing, reducing operational costs by 45% and processing 50,000+ orders weekly.",
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["45% cost reduction", "50K+ orders weekly", "15 factories automated"]
      },
      {
        featured: false,
        category: "FINANCE & BANKING",
        title: "Automated Loan Processing System",
        description: "Regional bank implements workflow automation for loan applications, reducing processing time from 5 days to 2 hours and handling 10,000+ applications monthly with 99% accuracy.",
        image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["From 5 days to 2 hours", "10K+ applications monthly", "99% accuracy"]
      },
      {
        featured: false,
        category: "HEALTHCARE",
        title: "Patient Appointment & Billing Automation",
        description: "Healthcare network automates appointment scheduling, insurance verification, and billing processes across 30 clinics, serving 100,000+ patients annually and reducing administrative overhead by 60%.",
        image: "https://images.unsplash.com/photo-1519494140681-8b17d830a3ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["60% admin cost reduction", "100K+ patients served", "30 clinics connected"]
      },
      {
        featured: false,
        category: "LOGISTICS & SUPPLY CHAIN",
        title: "Smart Warehouse Operations",
        description: "Logistics company automates warehouse picking, packing, and shipping workflows with IoT integration, processing 200,000+ shipments monthly with 98% on-time delivery rate.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["200K+ shipments monthly", "98% on-time delivery", "50% faster processing"]
      },
      {
        featured: false,
        category: "RETAIL",
        title: "Omnichannel Order Fulfillment",
        description: "Retail chain automates order routing between online and physical stores, synchronizing inventory in real-time across 500+ locations and improving fulfillment speed by 65%.",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["500+ stores connected", "65% faster fulfillment", "Real-time inventory sync"]
      }
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
    useCases: [
      {
        featured: true,
        category: "TECHNOLOGY STARTUPS",
        title: "MVP Development for AI-Powered SaaS Platform",
        description: "Early-stage startup launches full-featured SaaS platform in 3 months with React, Node.js, and AWS infrastructure, securing $2M seed funding and onboarding 500+ beta users.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["3-month launch timeline", "$2M funding secured", "500+ beta users"]
      },
      {
        featured: false,
        category: "E-COMMERCE",
        title: "Headless Commerce Platform Rebuild",
        description: "Fashion retailer migrates to modern headless architecture with Next.js and Shopify, achieving 3x faster page loads, 45% conversion increase, and $10M additional annual revenue.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["3x faster page loads", "45% conversion boost", "$10M revenue increase"]
      },
      {
        featured: false,
        category: "FINANCE & FINTECH",
        title: "Mobile Banking Application",
        description: "Digital bank develops feature-rich mobile app for iOS and Android supporting 100,000+ users, with biometric authentication, real-time transactions, and PCI-DSS compliance.",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["100K+ active users", "Bank-grade security", "4.8-star rating"]
      },
      {
        featured: false,
        category: "HEALTHCARE & MEDTECH",
        title: "Telemedicine Platform with HIPAA Compliance",
        description: "Healthcare provider builds secure telemedicine platform connecting 200+ doctors with 50,000+ patients, featuring video consultations, e-prescriptions, and EHR integration.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["200+ doctors onboarded", "50K+ patients served", "HIPAA compliant"]
      },
      {
        featured: false,
        category: "EDUCATION & E-LEARNING",
        title: "Interactive Learning Management System",
        description: "EdTech company develops comprehensive LMS with live classes, AI-powered assessments, and progress tracking, serving 25,000+ students across 100+ educational institutions.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        results: ["25K+ students", "100+ institutions", "95% satisfaction rate"]
      }
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