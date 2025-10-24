import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectHero = ({
  category,
  title,
  subtitle,
  image,
  images,
  technologies,
  keyFeatures,
  description
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = images || [image];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <section className="w-full mx-auto mb-20 lg:mb-40 pt-32 pb-25 px-5 sm:px-8 xl:px-20 2xl:px-20 max-w-screen-2xl relative">
      <div className="w-full h-full flex flex-col-reverse xl:flex-row gap-12 xl:gap-0 -mt-[35px]">

        {/* Gradient Overlay (Desktop Only) */}
        <div className={`hidden xl:block w-1/3 h-full absolute -mx-20 bg-gradient-to-r from-red-500 to-red-400 left-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}></div>

        {/* Left Side - Image Gallery */}
        <div className={`w-full xl:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] xl:h-auto relative transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <figure className="relative w-full h-full group">
            {/* Main Image */}
            <img
              src={projectImages[currentImageIndex]}
              alt={`${title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full xl:absolute xl:w-[90%] xl:h-[110%] z-40 object-cover xl:-mt-32 imgProjectCover rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              style={{ marginTop: "0px" }}
              loading="eager"
            />

            {/* Image Navigation */}
            {projectImages.length > 1 && (
              <>
                {/* Previous Button */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>

                {/* Next Button */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 xl:right-[12%] top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-red-500 w-8'
                          : 'bg-white/70 hover:bg-white'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Image Counter */}
            {projectImages.length > 1 && (
              <div className="absolute top-4 right-4 z-50 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {projectImages.length}
              </div>
            )}
          </figure>

          {/* Thumbnail Gallery */}
          {projectImages.length > 1 && (
            <div className="mt-4 xl:w-[90%] flex gap-2 overflow-x-auto pb-2">
              {projectImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'border-red-500 scale-105'
                      : 'border-gray-300 hover:border-red-300 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side - Content */}
        <div className={`w-full xl:w-1/2 h-fit md:pl-5 md:pr-[50px] pt-[50px] transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>

          {/* Category Tag */}
          <div className="overflow-hidden w-full flex items-center gap-3 sm:gap-5 pt-5 sm:pt-10 md:pt-20">
            <div className="flex items-center gap-3 sm:gap-5 w-full">
              <p className="uppercase text-sm sm:text-base m-0 text-red-400 font-semibold whitespace-nowrap">
                {category}
              </p>
              <hr className="flex-1 border-gray-300" />
              <div className="flex flex-row gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full opacity-80"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="flex py-3 sm:py-5 gap-3 sm:gap-5 relative">
            <h1 className="w-full text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl uppercase mb-0">
              <span className="w-full flex flex-col text-wrap h-full">
                <span className="font-normal">{title}</span>
                {subtitle && <span className="font-bold text-red-500">{subtitle}</span>}
              </span>
            </h1>
          </div>

          {/* Technologies & Key Features */}
          <div className="flex flex-col gap-3 mt-6 sm:mt-10 md:mt-10">
            <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-8">

              {/* Technologies */}
              {technologies && (
                <div className="w-full md:w-[45%] transform hover:scale-105 transition-transform duration-300">
                  <p className="text-gray-500 opacity-50 mb-2 uppercase text-xs sm:text-sm font-semibold">
                    Technologies
                  </p>
                  <hr className="border-gray-300 mb-3" />
                  <p className="text-gray-700 text-sm sm:text-base">{technologies}</p>
                </div>
              )}

              {/* Key Features */}
              {keyFeatures && (
                <div className="w-full md:w-[45%] transform hover:scale-105 transition-transform duration-300">
                  <p className="text-gray-500 opacity-50 mb-2 uppercase text-xs sm:text-sm font-semibold">
                    Key Features
                  </p>
                  <hr className="border-gray-300 mb-3" />
                  <p className="text-gray-700 text-sm sm:text-base">{keyFeatures}</p>
                </div>
              )}
            </div>

            {/* Description */}
            {description && (
              <div className="w-full flex flex-col mt-4 sm:mt-6">
                <p className="text-gray-500 opacity-50 mb-2 uppercase text-xs sm:text-sm font-semibold">
                  Project Overview
                </p>
                <hr className="border-gray-300 mb-3" />
                <div className="prose max-w-none text-gray-700 leading-relaxed text-sm sm:text-base">
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

export default ProjectHero;
