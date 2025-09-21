import React, { useState, useRef, useEffect } from 'react';

const ValuesSection = () => {
  const [activeValue, setActiveValue] = useState(0);
  const scrollRef = useRef(null);

  const values = [
    {
      title: "Data-Driven Innovation",
      content: "We believe in the power of data to transform businesses. Supporting innovative AI solutions, collaborating with forward-thinking clients, and promoting intelligent automation are all choices that reflect our dedication to technological advancement and a more data-literate society. Our projects are evidence-based, impactful, and transformative."
    },
    {
      title: "Excellence and Quality at Every Level",
      content: "Creating a data solution means aiming for precision down to the smallest detail. To us, every project deserves the best: thoughtful analysis, robust algorithms, seamless user experience, and optimized performance. This commitment drives our daily work to deliver results that are sustainable, accurate, and truly professional."
    },
    {
      title: "Impact-Driven Intelligence",
      content: "Innovation only makes sense when it reflects real business needs. Our AI solutions don't follow trends blindly—they adapt to your data, your challenges, and your goals. We craft unique algorithms designed to strengthen your insights, elevate your decision-making, and reach your objectives with precision."
    },
    {
      title: "Ethical AI Responsibility",
      content: "We choose to support responsible AI development by ensuring our models are transparent, fair, and accountable. This commitment reflects our concrete effort to build trustworthy systems while promoting ethical technology practices. Every model we train is a step toward more responsible artificial intelligence."
    },
    {
      title: "Transparency in Analytics",
      content: "Trust is built on clarity. We're committed to maintaining open and honest communication about our methodologies, model performance, and data processes. From data collection to deployment, you always know how our systems work, what they're analyzing, and why they're making specific recommendations."
    },
    {
      title: "Continuous Learning Culture",
      content: "The field of data science evolves rapidly, and we evolve with it. We invest in continuous learning, staying current with the latest research, tools, and methodologies. Our team regularly updates skills through training, conferences, and collaboration with academic institutions to ensure we deliver cutting-edge solutions."
    }
  ];

  const handleScroll = (e) => {
    const container = e.target;
    const scrollTop = container.scrollTop;
    const itemHeight = container.scrollHeight / values.length;
    const currentIndex = Math.floor(scrollTop / itemHeight);
    setActiveValue(Math.min(currentIndex, values.length - 1));
  };

  return (
    <section className="w-full mx-auto mb-20 lg:mb-40 pt-25 pb-25 px-5 sm:px-8 xl:px-20 2xl:px-20 3xl:px-40 4xl:px-60 max-w-screen-2xl relative overflow-hidden">
      <div className="flex flex-col gap-12 lg:flex-row">
        
        {/* Left Sidebar */}
        <div className="w-full lg:w-2/5">
          {/* Section Tag */}
          <div className="flex items-center gap-5 mb-6">
            <p className="uppercase text-base m-0 text-red-500 font-semibold whitespace-nowrap">
              OUR VALUES
            </p>
            <hr className="flex-1 border-gray-300" />
            <div className="flex flex-row gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full opacity-80"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl font-semibold my-4 uppercase text-gray-900">
            The core principles at InfoBridge
          </h2>

          {/* Description */}
          <div className="prose max-w-none text-base leading-relaxed text-gray-600 mt-4 mb-8">
            <p>
              Our beliefs are at the heart of everything we do. They're not just there to look good on a page — they guide our decisions, our relationships, and the way we build every algorithm, every dashboard, every data solution.
            </p>
            <p>
              They reflect our vision of AI that's purposeful, responsible, and rooted in the real needs of businesses — technology that never compromises on accuracy, ethics, or innovation.
            </p>
          </div>

          {/* Team Image */}
          <figure className="mt-8">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=480&h=350&q=80"
              alt="InfoBridge NiaTech team member during data analysis discussion"
              className="w-full h-[350px] object-cover object-right rounded-lg shadow-md"
            />
            <figcaption className="text-sm text-gray-600 mt-4 leading-relaxed">
              Transparency, precision and trust shape the way we work — delivering thoughtful data insights and human-centered solutions from the first consultation to the final deployment.
            </figcaption>
          </figure>
        </div>

        {/* Right Side - Scrollable Values */}
        <div className="w-full lg:w-3/5 lg:ml-10 h-full relative overflow-hidden">
          
          {/* Top Gradient */}
          <div className="hidden lg:flex w-full h-40 bg-gradient-to-b from-white to-transparent absolute z-20 items-center pointer-events-none">
            <svg className="ml-4 text-red-500 text-3xl animate-bounce" fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em">
              <path d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8z"></path>
            </svg>
          </div>

          {/* Scroll Hint */}
          <div className="swipe-hint rotate-90 absolute top-0 right-4 z-30 lg:block hidden">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-8 h-px bg-gray-300"></div>
              <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.091 11v1m0-1c0-1.105-.868-2-1.94-2c-.535 0-.969.448-.969 1v1v-7.5c0-.828-.652-1.5-1.455-1.5s-1.454.672-1.454 1.5V5m5.818 6c0-.524.456-.922.956-.836l.332.057c.936.161 1.621.995 1.621 1.973v1.473c0 2.173 0 3.26-.321 4.125c-.187.502-.678 1.142-1.07 1.604c-.34.4-.549.908-.549 1.44V22M11.273 5c0-.828-.652-1.5-1.455-1.5S8.364 4.172 8.364 5v8.462l-1.572-1.625a1.6 1.6 0 0 0-2.434.14a1.74 1.74 0 0 0-.03 2.072l3.49 4.598c.668.88 1.03 2.236 1.03 3.353m2.425-17v5" />
              </svg>
            </div>
          </div>

          {/* Scrollable Timeline */}
          <div 
            ref={scrollRef}
            className="w-full h-[650px] mt-10 overflow-y-auto scrollbar-hide"
            onScroll={handleScroll}
          >
            <div className="space-y-0">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-row w-full min-h-[200px] transition-opacity duration-300 ${
                    index === activeValue ? 'opacity-100' : 'opacity-70'
                  }`}
                >
                  {/* Timeline Indicator */}
                  <div className="w-16 flex flex-col items-center">
                    <div className="relative flex justify-center h-full">
                      <div className={`w-4 h-4 rounded-full z-10 mt-1 flex justify-center items-center transition-colors duration-300 ${
                        index === activeValue 
                          ? 'bg-red-500' 
                          : 'bg-red-200'
                      }`}>
                        <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === activeValue ? 'bg-white' : 'bg-red-500'
                        }`}></div>
                      </div>
                      {index < values.length - 1 && (
                        <div className="w-[1px] h-full bg-red-200 absolute top-2"></div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col w-4/5 h-auto pl-4 pb-8">
                    <div className={`text-lg font-semibold pb-4 select-none transition-colors duration-300 ${
                      index === activeValue ? 'text-gray-900' : 'text-gray-600'
                    }`}>
                      {value.title}
                    </div>
                    <div className={`prose max-w-none text-gray-600 select-none transition-opacity duration-300 ${
                      index === activeValue ? 'opacity-100' : 'opacity-80'
                    }`}>
                      <p>{value.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Gradient */}
          <div className="hidden lg:flex w-full h-48 bg-gradient-to-t from-white to-transparent absolute z-20 -bottom-[40px] pointer-events-none"></div>
        </div>

      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0, 0, 0);
          }
          40%, 43% {
            transform: translate3d(0, -10px, 0);
          }
          70% {
            transform: translate3d(0, -5px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default ValuesSection;