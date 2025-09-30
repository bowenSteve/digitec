import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
          Transforming Data into Intelligence
        </h1>
        
        <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Empowering businesses across Africa and North America with cutting-edge data solutions,
          AI model training, and intelligent automation services.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;