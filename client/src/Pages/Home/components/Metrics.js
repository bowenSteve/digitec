import React, { useState, useEffect, useRef } from 'react';

const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    dataPoints: 0,
    aiModels: 0,
    documents: 0,
    clients: 0
  });
  const sectionRef = useRef(null);

  const metrics = [
    {
      value: 500,
      suffix: 'M+',
      label: 'Data Points Processed',
      key: 'dataPoints'
    },
    {
      value: 10,
      suffix: 'K+',
      label: 'AI Models Trained',
      key: 'aiModels'
    },
    {
      value: 2,
      suffix: 'M+',
      label: 'Documents Digitized',
      key: 'documents'
    },
    {
      value: 150,
      suffix: '+',
      label: 'Enterprise Clients Served',
      key: 'clients'
    }
  ];

  // Intersection Observer for triggering animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Number animation
  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      metrics.forEach((metric) => {
        let currentStep = 0;
        const increment = metric.value / steps;

        const timer = setInterval(() => {
          currentStep++;
          const currentValue = Math.min(increment * currentStep, metric.value);
          
          setAnimatedNumbers(prev => ({
            ...prev,
            [metric.key]: Math.floor(currentValue)
          }));

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, stepDuration);
      });
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gray-900 overflow-hidden"
    >
      {/* Code Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute top-10 left-10 text-green-400 text-xs font-mono">
            function processData() {'{'}
          </div>
          <div className="absolute top-16 left-16 text-blue-400 text-xs font-mono">
            const result = await api.analyze();
          </div>
          <div className="absolute top-22 left-10 text-green-400 text-xs font-mono">
            {'}'}
          </div>
          <div className="absolute top-32 right-20 text-purple-400 text-xs font-mono">
            class ModelTrainer:
          </div>
          <div className="absolute top-40 right-24 text-blue-400 text-xs font-mono">
            def train(self, data):
          </div>
          <div className="absolute bottom-32 left-20 text-yellow-400 text-xs font-mono">
            SELECT * FROM datasets
          </div>
          <div className="absolute bottom-20 right-32 text-red-400 text-xs font-mono">
            &lt;annotation&gt;label&lt;/annotation&gt;
          </div>
          <div className="absolute top-1/2 left-1/4 text-cyan-400 text-xs font-mono">
            import tensorflow as tf
          </div>
        </div>
      </div>

      {/* Geometric Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 border border-green-400/20 rotate-45"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 border border-blue-400/20 rotate-12"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-purple-400/20 rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : ''
              }}
            >
              <div className="text-5xl lg:text-6xl font-bold text-white mb-4 font-mono">
                {animatedNumbers[metric.key]}{metric.suffix}
              </div>
              <div className="text-gray-300 text-sm font-medium uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Metrics;