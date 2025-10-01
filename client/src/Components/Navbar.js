import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if current page has white background (requires different styling)
  const isWhiteBackgroundPage = window.location.pathname === '/contact' ||
                               window.location.pathname === '/services' ||
                               window.location.pathname.includes('/services') ||
                               /^\/solutions\/[^/]+$/.test(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'SERVICES', href: '/services' },
    { name: 'INDUSTRIES', href: '#industries' },
    { name: 'SOLUTIONS', href: '/solutions' },
    { name: 'RESOURCES', href: '#resources' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'ABOUT', href: '/about' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isWhiteBackgroundPage
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center cursor-pointer">
              <div className={`text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                isScrolled || isWhiteBackgroundPage ? 'text-gray-900' : 'text-white'
              }`}>
                IBN
              </div>
              <div className={`ml-2 text-xs lg:text-sm font-medium transition-colors duration-300 ${
                isScrolled || isWhiteBackgroundPage ? 'text-gray-700' : 'text-white/90'
              }`}>
                InforBridge Niatech
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:opacity-70 ${
                    isScrolled || isWhiteBackgroundPage
                      ? 'text-gray-900 hover:text-gray-700'
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="/contact" className="bg-green-400 hover:bg-green-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block">
              LET'S TALK
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled || isWhiteBackgroundPage
                  ? 'text-gray-900'
                  : 'text-white'
              }`}
              style={{ transition: 'color 0.3s ease' }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div 
              className="px-2 pt-2 pb-3 space-y-1 rounded-lg mt-2"
              style={{
                backgroundColor: (isScrolled || isWhiteBackgroundPage) ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.2)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium rounded-md ${
                    isScrolled || isWhiteBackgroundPage
                      ? 'text-gray-900'
                      : 'text-white'
                  }`}
                  style={{ 
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={(e) => e.target.style.backgroundColor = (isScrolled || isWhiteBackgroundPage) ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <a 
                  href="/contact"
                  className="w-full text-white text-sm font-semibold px-4 py-2 rounded-full inline-block text-center"
                  style={{
                    backgroundColor: '#4ade80',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#22c55e'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#4ade80'}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  LET'S TALK
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;