import React from 'react';

const WhyUs = () => {
  const reasons = [
    {
      title: "Advanced Data Processing at Scale",
      description: "Our cutting-edge infrastructure processes millions of data points daily with 99.9% accuracy. We leverage the latest AI/ML technologies to handle complex datasets that others can't, ensuring your business gets the insights it needs when it needs them."
    },
    {
      title: "Proven AI/ML Expertise",
      description: "With over 5 years specializing in artificial intelligence and machine learning solutions, our team has successfully trained thousands of models across various industries. We understand the nuances of data annotation and model optimization."
    },
    {
      title: "Industry-Specific Knowledge",
      description: "From healthcare to finance, automotive to agriculture - we've worked across diverse sectors. Our domain expertise means we understand your industry's unique challenges and compliance requirements, delivering solutions that actually work."
    },
    {
      title: "Quality Assurance Excellence",
      description: "Every data point is validated through our multi-tier quality control process. Our QA specialists ensure 100% accuracy in data labeling, annotation, and processing - because your models are only as good as the data they're trained on."
    },
    {
      title: "Scalable Cloud Infrastructure",
      description: "Built on enterprise-grade cloud platforms, our solutions scale seamlessly from startup MVPs to enterprise-level deployments. We handle traffic spikes, data surges, and growing complexity without missing a beat."
    },
    {
      title: "Custom Analytics & Insights",
      description: "Beyond data processing, we create bespoke analytics dashboards and insight reports tailored to your business KPIs. Transform raw data into actionable strategies that drive growth and competitive advantage."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-[1640px] mx-auto px-5 lg:px-20 w-full">
        <div className="xl:flex flex-row gap-12 h-auto">
          
          {/* Left Sticky Sidebar */}
          <div className="w-full xl:w-1/3 pt-0 xl:pt-20 h-auto">
            <div className="xl:sticky xl:top-8">
              {/* Section Tag */}
              <div className="flex items-center gap-5 mb-6">
                <p className="uppercase text-base m-0 text-red-500 font-semibold whitespace-nowrap">
                  Why us ?
                </p>
                <hr className="flex-1 border-gray-300" />
                <div className="flex flex-row gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full opacity-80"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full opacity-60"></div>
                </div>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl font-semibold my-4 mb-8 text-gray-900">
                <span className="font-normal">A </span>
                <span className="font-bold">global data solutions partner?</span>
              </h2>

              {/* Description */}
              <div className="prose max-w-none text-gray-600 leading-relaxed mb-12">
                <p className="mb-6">
                  Choosing the right data partner is key to ensuring the success of your AI and analytics projects. With offices in Kenya and Pittsburgh, US, our global team delivers high-quality, scalable data solutions and intelligent automation tools essential to compete in today's data-driven market.
                </p>
                
                <p>
                  A skilled data partner goes far beyond simply <strong className="text-gray-900">processing information</strong>. We ensure data quality, model accuracy, and long-term scalability to help transform your business. Making the right choice means investing in solutions that strengthen your competitive edge, boost insights accuracy, and maximize your AI ROI.
                </p>
              </div>

              {/* CTA Button */}
              <div className="inline-block mt-10">
                <div className="flex space-x-4 justify-center md:justify-start">
                  <button className="group relative h-[185px] w-[185px] rounded-full bg-white border-2 border-red-500 text-lg font-medium hover:bg-red-500 hover:text-white transition-all duration-300">
                    <span className="absolute top-16 left-8 w-20 text-center">
                      <span className="font-normal">See our</span>
                      <br />
                      <span className="font-bold">services</span>
                    </span>
                    <svg 
                      className="absolute w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" 
                      style={{ transform: 'rotate(-45deg)', top: '40%', right: '15%' }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Scrollable Content */}
          <div className="w-full xl:w-2/3 xl:pl-24">
            <div className="grid gap-8 mt-8 xl:mt-20 grid-cols-1 md:grid-cols-2">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className={`relative p-5 group transition-all duration-100 ${
                    index % 4 === 0 || index % 4 === 2 
                      ? 'xl:-mt-[50px]' 
                      : index % 4 === 1 || index % 4 === 3 
                        ? 'xl:mt-[50px]' 
                        : ''
                  }`}
                >
                  <div className="relative flex-1">
                    <h3 className="mb-5 text-xl font-semibold text-gray-900 leading-tight">
                      {reason.title}
                    </h3>
                    <div className="prose max-w-none text-gray-600 leading-relaxed">
                      <p>{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;