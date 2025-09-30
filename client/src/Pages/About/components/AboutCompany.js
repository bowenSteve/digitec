import React from 'react';

const AboutCompany = () => {
  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="relative -ml-0 lg:-ml-20">
            {/* Background Shape */}
            <div className="absolute -right-8 top-8 w-48 h-48 lg:w-64 lg:h-64 bg-red-100 rounded-full opacity-50"></div>
            
            {/* Main Image */}
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="InfoBridge NiaTech Team"
                className="w-full h-64 sm:h-80 lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Section Tag */}
            <div className="flex items-center gap-3">
              <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">
                ABOUT US
              </span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full opacity-80"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full opacity-60"></div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 lg:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                DATA <span className="text-red-500">SOLUTIONS</span>
                <br />
                <span className="text-red-500 font-outline">GLOBAL</span>
              </h2>
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                Digital Intelligence Craft Studio
              </h3>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-4 lg:space-y-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                Step into the heart of innovation with InfoBridge NiaTech, the rising star among{' '}
                <strong className="text-gray-900">global data solution providers</strong>. Founded by forward-thinking
                data scientists and engineers, InfoBridge is more than just a tech company. It's a hub of creativity
                dedicated to turning your raw data into a powerful driver of growth.
              </p>

              <p>
                With offices in Kenya and Pittsburgh, US, we bridge African innovation with global expertise,
                giving us a unique perspective on both regional and international markets,
                while our outward-looking approach allows us to anticipate and embrace the latest
                digital trends on a global scale.
              </p>
            </div>

            {/* Location Badges */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="inline-flex items-center gap-2 bg-red-50 px-3 py-2 lg:px-4 lg:py-2 rounded-full">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-red-600 font-semibold text-sm">Nairobi, Kenya</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-2 lg:px-4 lg:py-2 rounded-full">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-blue-600 font-semibold text-sm">Pittsburgh, PA, US</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .font-outline {
          -webkit-text-stroke: 2px #ef4444;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default AboutCompany;
