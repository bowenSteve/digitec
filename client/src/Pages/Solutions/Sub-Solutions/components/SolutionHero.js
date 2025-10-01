import React from 'react';

const SolutionHero = ({ 
  category, 
  title, 
  subtitle,
  image, 
  technologies, 
  keyFeatures,
  description 
}) => {
  return (
    <section className="w-full mx-auto mb-20 lg:mb-40 pt-32 pb-25 px-5 sm:px-8 xl:px-20 2xl:px-20 max-w-screen-2xl relative">
      <div className="w-full h-full flex flex-col-reverse xl:flex-row gap-12 xl:gap-0 -mt-[35px]">
        
        {/* Gradient Overlay (Desktop Only) */}
        <div className="hidden xl:block w-1/3 h-full absolute -mx-20 bg-gradient-to-r from-green-400/10 to-transparent left-10"></div>
        
        {/* Left Side - Image */}
        <div className="hidden xl:block xl:w-1/2 h-[40vh] xl:h-auto relative">
          <figure className="relative w-full h-full">
            <img
              src={image}
              alt={title}
              className="absolute w-[90%] h-[110%] z-50 object-cover xl:-mt-32 imgProjectCover rounded-lg shadow-2xl"
              style={{ marginTop: "2px" }}
              loading="eager"
            />
          </figure>
        </div>

        {/* Right Side - Content */}
        <div className="w-full xl:w-1/2 h-fit md:pl-5 md:pr-[50px] pt-[50px]">
          
          {/* Category Tag */}
          <div className="overflow-hidden w-full flex items-center gap-5 pt-10 md:pt-20">
            <div className="flex items-center gap-5">
              <p className="uppercase text-base m-0 text-green-400 font-semibold whitespace-nowrap">
                {category}
              </p>
              <hr className="flex-1 border-gray-300" />
              <div className="flex flex-row gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full opacity-80"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="flex py-5 gap-5 relative">
            <h1 className="w-full md:w-3/4 text-4xl md:text-5xl 2xl:text-6xl uppercase mb-0">
              <span className="w-full flex flex-col text-wrap h-full">
                <span className="font-normal">{title}</span>
                {subtitle && <span className="font-bold">{subtitle}</span>}
              </span>
            </h1>
          </div>

          {/* Technologies & Key Features */}
          <div className="flex flex-col gap-3 mt-10 md:mt-10">
            <div className="w-full flex flex-wrap gap-8">
              
              {/* Technologies */}
              {technologies && (
                <div className="w-full md:w-[45%]">
                  <p className="text-gray-500 opacity-50 mb-2 uppercase text-sm font-semibold">
                    Technologies
                  </p>
                  <hr className="border-gray-300 mb-3" />
                  <p className="text-gray-700">{technologies}</p>
                </div>
              )}

              {/* Key Features */}
              {keyFeatures && (
                <div className="w-full md:w-[45%]">
                  <p className="text-gray-500 opacity-50 mb-2 uppercase text-sm font-semibold">
                    Key Capabilities
                  </p>
                  <hr className="border-gray-300 mb-3" />
                  <p className="text-gray-700">{keyFeatures}</p>
                </div>
              )}
            </div>

            {/* Description */}
            {description && (
              <div className="w-full flex flex-col mt-6">
                <p className="text-gray-500 opacity-50 mb-2 uppercase text-sm font-semibold">
                  Overview
                </p>
                <hr className="border-gray-300 mb-3" />
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <p>{description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;