import React from 'react';

const ContactHero = () => {
  return (
    <section className="w-full mx-auto mb-20 lg:mb-40 pt-20 pb-25 px-5 sm:px-8 xl:px-20 2xl:px-20 3xl:px-40 4xl:px-60 max-w-screen-2xl relative">
      <div className="w-full h-auto flex flex-row justify-between gap-12 mt-8">
        
        {/* Left Side - Red Gradient Block with Overlapping Image */}
        <div className="hidden xl:block xl:w-1/2 relative">
          {/* Red Gradient Background */}
          <div className="absolute left-0 top-0 w-3/5 h-[400px] bg-gradient-to-r from-red-500 to-red-400 -mx-20"></div>
          
          {/* Overlapping Team Image */}
          <figure className="relative w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
              alt="InfoBridge NiaTech team ready to discuss your data project"
              className="w-4/5 h-[300px] absolute top-8 left-20 object-cover rounded-lg shadow-xl z-10"
            />
          </figure>
        </div>

        {/* Right Side - Contact Information */}
        <div className="w-full xl:w-1/2 pt-[20px] xl:pt-[60px] lg:pr-20">
          
          {/* Section Tag */}
          <div className="flex items-center gap-5 justify-end flex-row-reverse xl:flex-row mb-8">
            <div className="flex flex-row gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full opacity-80"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
            </div>
            <hr className="flex-1 border-gray-300" />
            <p className="uppercase text-base m-0 text-red-500 font-semibold whitespace-nowrap">
              TELL US EVERYTHING
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl lg:text-5xl font-semibold my-4 uppercase xl:text-end text-gray-900 leading-tight mb-8">
            Contact our<br />data experts
          </h1>

          {/* Description */}
          <div className="w-full h-auto pt-5 flex flex-col xl:justify-end xl:items-end xl:text-end mb-10">
            <p className="text-gray-600 leading-relaxed text-base max-w-lg">
              A quote for AI model development, a data audit of your current systems, 
              a question about analytics strategy, or you just want to tell us about your data challenges? 
              Contact us by phone or email and we will get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="xl:text-end space-y-4">
            <div className="space-y-3">
              <div className="flex items-center xl:justify-end gap-3">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700">hello@infobridgeniatech.com</span>
              </div>


              <div className="flex items-center xl:justify-end gap-3">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700">Nairobi, Kenya</span>
              </div>

              <div className="flex items-center xl:justify-end gap-3">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700">207 Bellwood Dr, Pittsburgh, PA 15229, US</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;