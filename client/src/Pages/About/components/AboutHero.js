import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
          <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
            ABOUT US
          </span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
          Transforming Data into Intelligence
          <br />
          <span className="text-red-400">Empowering Global Innovation</span>
        </h1>

        <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-slide-up-delayed">
          Empowering businesses across Africa and North America with cutting-edge data solutions,
          AI model training, and intelligent automation services.
        </p>
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-red-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out 0.2s both;
        }
        .animate-slide-up-delayed {
          animation: slideUp 0.8s ease-out 0.4s both;
        }
      `}</style>
    </section>
  );
};

export default AboutHero;