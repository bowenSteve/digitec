import React from 'react';

const TeamSection = () => {
  return (
     <section className="w-full mb-20 lg:mb-40 pt-10 lg:pt-20 pb-20 relative bg-gray-50">
      <div className="w-full max-w-[1920px] py-10 mx-auto px-5 md:px-20 flex gap-20">
        
        {/* Left Content */}
        <div className="w-full items-center justify-center flex flex-col 2xl:w-3/5">
          
          {/* Mobile Title */}
          <div className="w-full xl:hidden">
            <h2 className="font-semibold mb-5 text-2xl">
              Welcome to InfoBridge NiaTech team of data experts Kenya
            </h2>
          </div>

          {/* Desktop Interactive Title */}
          <div className="xl:min-w-[800px] m-auto mb-10 hidden xl:block">
            <div className="uppercase font-semibold text-md md:text-xl xl:text-4xl mb-8 flex items-center gap-2">
              Welcome to 
              <a href="/contact" className="w-20 md:w-28 h-6 md:h-8 mx-2 rounded-full button-wrapper text-sm relative cursor-pointer overflow-hidden">
                <div className="absolute inset-0 flex justify-center items-center z-10 text-transparent hover:text-white transition duration-300 hover:bg-black hover:bg-opacity-70">
                  <p className="text-sm mb-0">Let's talk</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=112&h=32&q=80"
                  alt="InfoBridge NiaTech"
                  className="w-full h-full object-cover object-center cursor-pointer"
                />
              </a>
              <span className="text-red-500">InfoBridge</span>
            </div>
            
            <div className="uppercase font-semibold text-md md:text-xl xl:text-4xl md:ml-10 xl:ml-4 mb-8 flex justify-end items-center gap-2">
              team of data 
              <a href="/projects" className="w-20 md:w-28 h-6 md:h-8 bg-gray-200 mx-2 rounded-full button-wrapper text-sm relative cursor-pointer overflow-hidden">
                <div className="absolute inset-0 flex justify-center items-center z-10 text-transparent hover:text-white transition duration-300 hover:bg-black hover:bg-opacity-70">
                  <p className="text-sm mb-0">Projects</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=112&h=32&q=80"
                  alt="Data Analytics"
                  className="w-full h-full object-cover object-center cursor-pointer"
                />
              </a>
              <span className="text-red-500">experts Kenya</span>
            </div>
          </div>

          {/* Content Paragraphs */}
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              We combine <strong className="text-gray-900">active listening, cutting-edge technologies</strong>, and <strong className="text-gray-900">tailored strategy</strong> to craft data solutions that leave a lasting impression. Each project is designed as a sustainable tool, one that truly reflects your business needs while meeting today's AI and analytics standards. Here, data processing isn't just a service — it's a field of innovation we refine every day to help your business stand out with precision and impact.
            </p>

            <p className="mb-6">
              <strong className="text-gray-900">Our data scientists</strong> bring deep technical expertise in machine learning and AI model development, while <strong className="text-gray-900">our business analysts</strong> take a human-centered approach to designing intuitive, insight-driven dashboards. Their complementary skills create a strong, structured dynamic that leads a versatile team — where each member contributes focused expertise to build cohesive, meaningful data solutions.
            </p>

            <p className="mb-6">
              Our approach begins with a simple question: <strong className="text-gray-900">how can your data become a useful, dynamic asset that actively supports your goals every day?</strong> Whether you're a startup, a growing business, or leading an ambitious AI project, our support adapts to your reality, grows with you, and helps build a data infrastructure that's credible, scalable, and aligned with your values.
            </p>

            <p>
              More than just a service provider, we are <strong className="text-gray-900">your local partner in Kenya</strong>, committed to crafting a data strategy that's clear, human, and effective — <strong className="text-gray-900">built to make a difference, today and in the future</strong>.
            </p>
          </div>
        </div>

        {/* Right Images - Hidden on smaller screens, shown on 2xl+ */}
        <div className="hidden 2xl:block w-2/5 h-full relative pt-10">
          {/* Top Image */}
          <div className="w-3/5 h-80">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=320&q=80"
              alt="Data team collaboration"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Overlapping Bottom Image */}
          <div className="w-3/5 h-64 absolute -bottom-16 right-0">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=256&q=80"
              alt="Data analytics workspace"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
export default TeamSection;