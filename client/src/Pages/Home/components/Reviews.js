import React from 'react';
import CommentButton from '../../../Components/CommentButton';

const Reviews = () => {
  const testimonials = [
    {
      name: "Sarah",
      company: "HealthTech Solutions",
      initial: "S",
      review: "Outstanding data annotation services! InfoBridge helped us train our medical imaging AI with 99.8% accuracy. Their attention to detail in healthcare data is unmatched."
    },
    {
      name: "Michael",
      company: "FinanceCore Analytics",
      initial: "M",
      review: "Exceptional team with deep financial data expertise. They processed our transaction datasets flawlessly and delivered actionable insights that boosted our ROI by 40%."
    },
    {
      name: "Jennifer",
      company: "AgriTech Innovations",
      initial: "J",
      review: "InfoBridge transformed our agricultural data into powerful predictive models. Their quality assurance is phenomenal - every data point perfectly labeled and verified."
    },
    {
      name: "David",
      company: "AutoDrive Systems",
      initial: "D",
      review: "Incredible work on our autonomous vehicle datasets. They handled millions of image annotations with precision, helping us achieve breakthrough performance in object detection."
    },
    {
      name: "Lisa",
      company: "EcoEnergy Corp",
      initial: "L",
      review: "Professional, efficient, and reliable. InfoBridge's renewable energy data analysis helped us optimize our wind farms, increasing efficiency by 25%. Highly recommended!"
    },
    {
      name: "Robert",
      company: "RetailFlow Analytics",
      initial: "R",
      review: "Amazing customer behavior analysis and data processing. Their business intelligence dashboards gave us insights we never had before. Sales improved significantly!"
    },
    {
      name: "Amanda",
      company: "BioResearch Labs",
      initial: "A",
      review: "Top-tier data scientists with exceptional attention to detail. InfoBridge handled our complex genomic datasets with expertise and delivered results ahead of schedule."
    },
    {
      name: "James",
      company: "SmartCity Solutions",
      initial: "J",
      review: "Excellent urban data analysis and IoT data processing. They helped us build predictive models for city traffic optimization. Outstanding service and results!"
    }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 lg:py-20 bg-gray-50 overflow-hidden">
      {/* Header Container - Constrained Width */}
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-20">
        <div className="w-full pl-10 pr-10 pb-10 mx-auto mt-5 lg:flex flex-row justify-between items-center">
          <div className="w-full lg:w-2/3 h-auto">
            {/* Section Tag */}
            <div className="flex items-center gap-5 mb-6">
              <p className="uppercase text-base m-0 text-red-500 font-semibold whitespace-nowrap">
                WHAT THEY SAY
              </p>
              <hr className="flex-1 border-gray-300" />
              <div className="flex flex-row gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full opacity-80"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              <span className="font-normal">Our </span>
              <span className="font-bold">reviews</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              Discover what our clients have to say about their experience with InfoBridge NiaTech. 
              Their success is our priority, and their testimonials show how we help each 
              business achieve its data-driven goals. Get inspired by their stories, and let's start 
              your digital transformation together!
            </p>
          </div>

          {/* Enhanced Leave Comment Button */}
          <div className="hidden lg:block">
            <div className="relative w-fit inline-block p-[2px] rounded-full bg-gradient-to-tr from-red-600 to-transparent transition-all duration-500 hover:bg-gradient-to-br hover:from-red-500 hover:to-transparent animate-gradient">
              <CommentButton />
            </div>
          </div>
        </div>

        {/* Mobile Leave Comment Button */}
        <div className="lg:hidden mt-12 text-center">
          <CommentButton />
        </div>
      </div>

      {/* Full Width Scrolling Testimonials - Edge to Edge */}
      <div className="w-full">
        {/* First Row - Scrolling Left to Right */}
        <div className="w-full h-[20%] overflow-hidden mb-8">
          <div className="flex w-max hover:[animation-play-state:paused] animate-scroll-left">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={`row1-${index}`} className="flex items-center h-64 p-4 w-[550px]">
                <div className="w-full h-full bg-white border border-gray-200 border-opacity-10 p-8 rounded-md">
                  <div className="w-full">
                    {/* Avatar and Info */}
                    <div className="flex gap-3 items-center mb-4">
                      <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-md font-semibold text-lg uppercase">
                        {testimonial.initial}
                      </div>
                      <div>
                        <p className="font-semibold text-lg mb-0 text-gray-900">{testimonial.name}</p>
                        <div>
                          <p className="mb-0 text-gray-600 hover:text-red-500 transition-colors duration-200 cursor-pointer">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-gray-700">{testimonial.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Right to Left */}
        <div className="w-full h-[20%] overflow-hidden">
          <div className="flex w-max hover:[animation-play-state:paused] animate-scroll-right">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={`row2-${index}`} className="flex items-center h-64 p-4 w-[550px]">
                <div className="w-full h-full bg-white border border-gray-200 border-opacity-10 p-8 rounded-md">
                  <div className="w-full">
                    {/* Avatar and Info */}
                    <div className="flex gap-3 items-center mb-4">
                      <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-md font-semibold text-lg uppercase">
                        {testimonial.initial}
                      </div>
                      <div>
                        <p className="font-semibold text-lg mb-0 text-gray-900">{testimonial.name}</p>
                        <div>
                          <p className="mb-0 text-gray-600 hover:text-red-500 transition-colors duration-200 cursor-pointer">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-gray-700">{testimonial.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .hover\\:[animation-play-state\\:paused]:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Reviews;