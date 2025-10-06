import React from 'react';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { BookOpen, Bell, Sparkles, FileText, Video, Lightbulb } from 'lucide-react';

function Resources() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'}}>
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
            <Sparkles className="w-5 h-5 text-red-400" />
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
              COMING SOON
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            Knowledge Hub & Resources
            <br />
            <span className="text-red-400">Learn, Grow, and Innovate</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-slide-up-delayed">
            We're building a comprehensive resource center with guides, tutorials, case studies,
            whitepapers, and industry insights to help you succeed in the digital world.
          </p>

          {/* Coming Soon Card */}
          <div className="mt-12 inline-block animate-fade-in-up">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <BookOpen className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Under Construction</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Our resource library is being curated with valuable content to accelerate your learning journey.
              </p>

              {/* Notify Me Form */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap">
                  <Bell className="w-4 h-4" />
                  Notify Me
                </button>
              </div>
            </div>
          </div>
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
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
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
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out 0.6s both;
          }
        `}</style>
      </section>

      {/* Feature Preview Section */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What's Coming
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access a wealth of knowledge to help you make informed decisions and stay ahead
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Case Studies",
                description: "Real-world success stories and implementation examples from our clients"
              },
              {
                icon: BookOpen,
                title: "Guides & Tutorials",
                description: "Step-by-step guides to help you understand and implement solutions"
              },
              {
                icon: Video,
                title: "Video Content",
                description: "Webinars, demos, and educational videos from industry experts"
              },
              {
                icon: Lightbulb,
                title: "Blog & Insights",
                description: "Latest trends, tips, and thought leadership in data and AI"
              },
              {
                icon: FileText,
                title: "Whitepapers",
                description: "In-depth research and analysis on emerging technologies"
              },
              {
                icon: BookOpen,
                title: "Documentation",
                description: "Technical documentation and API references for developers"
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <resource.icon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Resources;
