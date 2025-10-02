import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const OtherSolutions = ({ currentSolutionSlug, otherSolutions }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="w-full mx-auto mb-20 lg:mb-40 pt-16 pb-16 px-5 sm:px-8 xl:px-20 2xl:px-20 max-w-[1736px] relative">
      
      {/* Custom Cursor - only shows when hovering over cards */}
      {isHovering && (
        <button
          className="fixed p-10 cursor-none rounded-full bg-red-500 text-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`
          }}
        >
          <svg 
            className="text-5xl -rotate-45" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            width="40"
            height="40"
          >
            <path d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z" />
          </svg>
        </button>
      )}

      <div className="w-full flex flex-wrap pb-16 gap-6 xl:gap-0">
        
        {/* Left Side - Header Content (50%) */}
        <div className="w-full xl:w-1/2 space-y-8">
          
          {/* Section Tag */}
          <div className="flex items-center gap-5">
            <p className="uppercase text-base m-0 text-red-500 font-semibold whitespace-nowrap">
              DISCOVER MORE
            </p>
            <hr className="w-20 border-gray-300" />
            <div className="flex flex-row gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-semibold text-4xl uppercase my-4">
            OTHER SOLUTIONS
          </h2>

          {/* See All Button - Outlined with arrow in circle */}
          <Link 
            to="/solutions"
            className="inline-flex items-center gap-3 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold px-6 py-3 pr-3 rounded-full transition-all duration-300"
          >
            <span className="pl-4">See all</span>
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <svg 
                className="w-5 h-5 text-white transform transition-transform duration-300 hover:-rotate-45" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Right Side - Description (50%) */}
        <div className="w-full xl:w-1/2 text-gray-600 leading-relaxed">
          <p>
            Our work reflects our expertise in <strong className="text-gray-900">AI solutions</strong>, 
            data services, and <strong className="text-gray-900">custom development</strong>. 
            Each solution is designed to deliver a <strong className="text-gray-900">seamless experience</strong>, 
            an <strong className="text-gray-900">innovative approach</strong>, and 
            <strong className="text-gray-900"> measurable results</strong>. With a results-driven methodology, 
            we help you reach your business and technology goals. Explore our solutions and get inspired.
          </p>
        </div>
      </div>

      {/* Project Cards Container - Responsive height */}
      <div className="w-full h-auto lg:h-[500px]">
        <div className="w-full h-full flex flex-col lg:flex-row gap-5">

          {otherSolutions.map((solution, index) => {
            // Calculate dynamic width based on hover state with elastic behavior (desktop only)
            let cardWidth;

            if (hoveredIndex === null) {
              // Default state: first card large, others small
              cardWidth = index === 0 ? 'lg:w-[60%]' : 'lg:w-[20%]';
            } else if (hoveredIndex === 0) {
              // Hover on card 1: shrinks slightly, others grow
              cardWidth = index === 0 ? 'lg:w-[45%]' : 'lg:w-[27.5%]';
            } else if (hoveredIndex === 1) {
              // Hover on card 2: card 2 becomes dominant
              if (index === 0) cardWidth = 'lg:w-[30%]';
              else if (index === 1) cardWidth = 'lg:w-[50%]';
              else cardWidth = 'lg:w-[20%]';
            } else if (hoveredIndex === 2) {
              // Hover on card 3: card 3 becomes dominant
              if (index === 0) cardWidth = 'lg:w-[27%]';
              else if (index === 1) cardWidth = 'lg:w-[23%]';
              else cardWidth = 'lg:w-[50%]';
            }

            return (
              <Link
                key={index}
                to={`/solutions/${solution.slug}`}
                className={`w-full h-[400px] lg:h-full ${cardWidth} bg-transparent flex items-center justify-center rounded-xl group relative overflow-hidden cursor-none transition-all duration-500 ease-in-out`}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setIsHovering(true);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setIsHovering(false);
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                  
                  {/* Image with zoom + translate effect */}
                  <figure className="relative w-full h-full">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="object-cover w-full h-full rounded transition-transform duration-500 ease-out group-hover:scale-105 group-hover:translate-x-2"
                    />
                  </figure>

                  {/* Dark Gradient Overlay */}
                  <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900 p-6 flex flex-col justify-between">
                    
                    {/* Top Section - Tags and Corner Bracket */}
                    <div className="w-full flex justify-between">
                      
                      {/* Tags */}
                      <div className="flex flex-nowrap gap-3 overflow-hidden mb-4 w-full">
                        {solution.tags.map((tag, tagIndex) => (
                          <div 
                            key={tagIndex}
                            className="flex flex-row items-center gap-1 px-3 py-1 text-gray-700 text-xs bg-white rounded-md shrink-0"
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
                            </svg>
                            {tag}
                          </div>
                        ))}
                      </div>

                      {/* Corner Bracket Decoration */}
                      <div className="border-t-2 border-r-2 border-white h-6 w-6 shrink-0"></div>
                    </div>

                    {/* Bottom Section - Title and Buttons */}
                    <div className="w-full flex justify-between items-center">
                      
                      {/* Project Title */}
                      <h3 className="text-2xl text-white mb-0 w-40 font-semibold">
                        {solution.title}
                      </h3>

                      {/* Button Container */}
                      <div className="relative">
                        {/* Regular Arrow Button - always visible */}
                        <div className={`w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                          <svg 
                            className="w-5 h-5" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z" />
                          </svg>
                        </div>

                        {/* Explore Button - appears on hover */}
                        <div className={`absolute bottom-0 right-0 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                          <div className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full flex items-center gap-2 whitespace-nowrap">
                            <span>Explore</span>
                            <svg 
                              className="w-4 h-4" 
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .cursor-none {
          cursor: none !important;
        }
      `}</style>
    </section>
  );
};

export default OtherSolutions;