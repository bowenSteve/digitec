import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="InfoBridge NiaTech team working together"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">
                WHO WE ARE
              </span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              YOUR DATA SOLUTIONS PARTNER
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Our <strong className="text-gray-900">data solutions company</strong> operates on a human scale, combining <strong className="text-gray-900">professionalism</strong> and <strong className="text-gray-900">close collaboration</strong> to bring your digital ambitions to life. At InfoBridge NiaTech, every project is unique and tailor-made, thanks to <strong className="text-gray-900">active listening</strong> and <strong className="text-gray-900">hands-on teamwork</strong>. Whether it's <strong className="text-gray-900">data processing</strong>, <strong className="text-gray-900">AI model training</strong>, or <strong className="text-gray-900">business intelligence</strong>, our <strong className="text-gray-900">expert team</strong> is committed to delivering real results while staying responsive and available.
              </p>

              <p>
                Our approach focuses on quality and <strong className="text-gray-900">transparency</strong>. We support you at every stage, from strategy to execution. Trust our expertise for a service that <strong className="text-gray-900">fits your needs</strong>, whether you're planning a data migration or a powerful <strong className="text-gray-900">automation strategy</strong>. Discover why InfoBridge NiaTech is often considered one of the <strong className="text-gray-900">best data solution providers</strong>, thanks to our <strong className="text-gray-900">inspiring portfolio</strong>, <strong className="text-gray-900">competitive pricing</strong>, and ability to turn your ideas into measurable success.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;