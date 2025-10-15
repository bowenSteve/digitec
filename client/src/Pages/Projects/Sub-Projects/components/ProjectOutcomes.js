import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const ProjectOutcomes = ({ outcomes }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('outcomes-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  if (!outcomes) {
    return null;
  }

  const { title, results, testimonial } = outcomes;

  return (
    <section
      id="outcomes-section"
      className="w-full mx-auto mb-20 lg:mb-40 pt-16 pb-16 px-5 sm:px-8 xl:px-20 2xl:px-20 max-w-screen-2xl relative"
    >
      <div className="w-full">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center gap-5 mb-6">
            <p className="uppercase text-base m-0 text-red-400 font-semibold">
              {title || "RESULTS"}
            </p>
            <div className="flex flex-row gap-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Project Impact
          </h2>
        </div>

        {/* Results Grid */}
        {results && results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {results.map((result, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-red-50 to-white rounded-xl p-8 text-center hover:shadow-lg hover:scale-105 transition-all duration-500 border border-red-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-red-500 mb-3">
                  {result.value}
                </div>
                <div className="text-gray-600 font-medium uppercase text-sm tracking-wider">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonial */}
        {testimonial && (
          <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="bg-gray-900 rounded-2xl p-10 md:p-12 relative overflow-hidden hover:shadow-2xl transition-shadow duration-500">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 opacity-10 rounded-full -mr-32 -mt-32 animate-pulse"></div>

              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-12 h-12 text-red-400 animate-bounce-slow" strokeWidth={1.5} />
              </div>

              {/* Quote Text */}
              <blockquote className="text-white text-xl md:text-2xl leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-red-400 rounded-full"></div>
                <div>
                  <p className="text-white font-semibold text-lg">
                    {testimonial.author}
                  </p>
                  {testimonial.role && (
                    <p className="text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProjectOutcomes;
