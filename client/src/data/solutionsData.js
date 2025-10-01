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
    }
    // Add more sections here later: features, useCases, process, etc.
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
    }
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
    }
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
    }
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
    }
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
    }
  }
};

// Helper function to get solution data by slug
export const getSolutionBySlug = (slug) => {
  return solutionsData[slug] || null;
};

// Helper function to get all solution slugs (useful for navigation)
export const getAllSolutionSlugs = () => {
  return Object.keys(solutionsData);
};

// Helper function to get solution title for navigation
export const getSolutionTitle = (slug) => {
  const solution = solutionsData[slug];
  if (!solution) return '';
  const { title, subtitle } = solution.hero;
  return subtitle ? `${title} ${subtitle}` : title;
};