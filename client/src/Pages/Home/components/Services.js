import React, { useState } from 'react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      letter: "D",
      category: "DATA RESEARCH",
      title: "Data Collection & Research",
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["web research", "lead generation", "market analysis"],
      description: "Comprehensive data collection from multiple sources with expert research methodologies to support your business intelligence needs."
    },
    {
      letter: "A",
      category: "AI TRAINING",
      title: "AI Model Training & Annotation",
      backgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["machine learning", "data labeling", "model training"],
      description: "Professional data annotation and labeling services to train high-performance AI models with precision and accuracy."
    },
    {
      letter: "B",
      category: "INTELLIGENCE",
      title: "Business Intelligence Dashboards",
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["visualization", "analytics", "reporting"],
      description: "Custom dashboard creation that transforms complex data into actionable insights for strategic business decisions."
    },
    {
      letter: "D",
      category: "DIGITIZATION",
      title: "Document Digitization",
      backgroundImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["scanning", "ocr", "data entry"],
      description: "Convert physical documents into searchable digital formats with high accuracy and secure processing workflows."
    },
    {
      letter: "W",
      category: "AUTOMATION", 
      title: "Workflow Automation",
      backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["process automation", "efficiency", "optimization"],
      description: "Streamline business processes through intelligent automation solutions that reduce manual work and increase productivity."
    },
    {
      letter: "Q",
      category: "QUALITY",
      title: "Quality Assurance & Validation",
      backgroundImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["validation", "testing", "compliance"],
      description: "Rigorous quality control processes ensuring data accuracy, compliance, and reliability across all deliverables."
    },
    {
      letter: "C",
      category: "MANAGEMENT",
      title: "CRM & Database Management",
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["database", "crm", "maintenance"],
      description: "Professional database administration and CRM management to keep your customer data organized and accessible."
    },
    {
      letter: "S",
      category: "INSIGHTS",
      title: "Strategic Data Insights",
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["strategy", "analysis", "consulting"],
      description: "Expert analysis and strategic recommendations based on comprehensive data interpretation and market trends."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-5 lg:px-20 w-full">
        
        {/* Mobile: Stacked Layout */}
        <div className="block lg:hidden">
          {/* Mobile Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">
                WHAT WE OFFER
              </span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Our Services
            </h2>
            <div className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              <p className="mb-4">
                With over <strong className="text-gray-900">5 years of experience</strong> in the data industry, InfoBridge NiaTech puts its expertise at the service of businesses seeking high-quality solutions.
              </p>
              <p className="font-medium text-gray-900">
                One conversation is all it takes to bring your project to life.
              </p>
            </div>
            {/* Mobile CTA */}
            <div className="flex justify-center mb-12">
              <button className="group w-32 h-32 border-2 border-red-500 rounded-full flex flex-col items-center justify-center text-center hover:bg-red-500 hover:text-white transition-all duration-300 bg-white">
                <span className="text-xs font-semibold mb-1">See our</span>
                <span className="text-xs font-semibold mb-2">services</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="h-[400px] shadow-lg relative p-4 rounded-lg border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 cursor-pointer select-none"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Mobile Header */}
                <div className="flex flex-row justify-between mb-4">
                  <div 
                    className="text-6xl font-thin bg-clip-text bg-center bg-no-repeat bg-cover -mt-2 text-transparent"
                    style={{
                      backgroundImage: `url('${service.backgroundImage}')`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text'
                    }}
                  >
                    {service.letter}
                  </div>
                  <p className="text-gray-400 text-sm font-bold uppercase text-end mb-0 opacity-60">
                    {service.category}
                  </p>
                </div>

                {/* Mobile Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {service.title}
                </h3>

                {/* Mobile Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 2).map((tag, tagIndex) => (
                    <div 
                      key={tagIndex} 
                      className="flex items-center gap-1 px-2 py-1 text-gray-600 text-xs bg-gray-100 rounded-md"
                    >
                      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      {tag}
                    </div>
                  ))}
                </div>

                {/* Mobile Description */}
                <p className="text-gray-600 leading-relaxed text-sm mb-4 line-clamp-4">
                  {service.description}
                </p>

                {/* Mobile See More Button */}
                <div className="absolute bottom-4 right-4">
                  <button className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-red-600 transition-colors duration-300">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Side-by-Side Layout */}
        <div className="hidden lg:flex flex-row gap-12 mt-16 h-auto">
          
          {/* Desktop Left Sticky Content */}
          <div className="w-1/3 pr-16">
            <div className="lg:sticky top-8">
              {/* Section Tag */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">
                  WHAT WE OFFER
                </span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Our Services
              </h2>

              {/* Description */}
              <div className="space-y-4 text-gray-600 leading-relaxed mb-12">
                <p>
                  With over <strong className="text-gray-900">5 years of experience</strong> in the data industry, InfoBridge NiaTech - based in Kenya - puts its expertise at the service of businesses seeking <strong className="text-gray-900">high-quality, high-performance solutions</strong> tailored to their needs.
                </p>
                
                <p>
                  Our team specializes in <strong className="text-gray-900">creating data-driven solutions</strong>, building platforms that combine technical precision, visual appeal, and strong performance. Our goal: to deliver powerful digital solutions that boost your online visibility.
                </p>
                
                <p className="font-medium text-gray-900">
                  One conversation is all it takes to bring your project to life.
                </p>
              </div>

              {/* CTA Button */}
              <div className="relative">
                <button className="group w-40 h-40 border-2 border-red-500 rounded-full flex flex-col items-center justify-center text-center hover:bg-red-500 hover:text-white transition-all duration-300 bg-white">
                  <span className="text-sm font-semibold mb-1">See our</span>
                  <span className="text-sm font-semibold mb-2">services</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Right Scrollable Content */}
          <div className="w-2/3">
            <div className="grid grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="h-[480px] lg:h-[540px] shadow-custom relative p-5 rounded-md border border-gray border-opacity-10 bg-white group hover:shadow-lg hover:border-white duration-100 cursor-pointer select-none"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Header with large letter and category */}
                  <div className="flex flex-row justify-between mb-6 lg:mb-8">
                    <div 
                      className="text-9xl font-bold bg-clip-text bg-center bg-no-repeat bg-cover -mt-2 text-transparent"
                      style={{
                        backgroundImage: `url('${service.backgroundImage}')`,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text'
                      }}
                    >
                      {service.letter}
                    </div>
                    <p className="text-gray-400 text-lg font-bold uppercase text-end mb-0 opacity-60">
                      {service.category}
                    </p>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight min-h-[60px] max-w-[85%]">
                    {service.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-nowrap gap-3 overflow-hidden mb-4">
                    {service.tags.map((tag, tagIndex) => (
                      <div 
                        key={tagIndex} 
                        className="flex flex-row items-center gap-1 px-3 py-1 text-gray text-sm bg-gray-100 rounded-md shrink-0"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
                        </svg>
                        {tag}
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Hover Button */}
                  {hoveredCard === index && (
                    <div className="absolute bottom-8 right-8 animate-fade-in">
                      <button className="group/btn bg-white border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2">
                        See more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}

                  {/* Corner Button */}
                  <div className="absolute top-6 right-6">
                    <button className="w-8 h-8 bg-transparent hover:bg-gray-100 rounded transition-all duration-300 flex items-center justify-center group/corner">
                      <svg className="w-4 h-4 text-gray-400 group-hover/corner:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .shadow-custom {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeInUp 0.3s ease-out;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Services;