import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import './Services.css'

const servicesData = [
  {
    id: 1,
    letter: 'W',
    category: 'Website',
    title: { normal: 'Website', bold: 'Creation' },
    slug: 'website-creation',
    tags: ['showcase', 'e-commerce', 'wordpress', 'ux/ui design', 'website revamp', 'responsive design'],
    description: 'Build your web project with a committed digital partner. Our websites combine design, performance, and adaptability across all devices for a smooth and optimized experience that propels your business forward.',
    bgImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 2,
    letter: 'S',
    category: 'SEO',
    title: { normal: 'Search', bold: 'Engine Optimization' },
    slug: 'search-engine-optimization',
    tags: ['keywords', 'ranking', 'meta link', 'google analytics', 'organic traffic', 'audit seo'],
    description: 'Improving your search engine rankings helps attract qualified, long-lasting traffic. Our advanced Search Engine Optimization expertise ensures we refine your positioning with precision.',
    bgImage: 'url("/images/qreative-seo-google-01-sm.avif")',
  },
  {
    id: 3,
    letter: 'B',
    category: 'Branding',
    title: { normal: 'Branding', bold: '& Visual Design' },
    slug: 'branding-visual-design',
    tags: ['branding', 'design', 'graphism', 'guidelines', 'logo', 'font'],
    description: 'Creating a strong, coherent, and memorable visual identity that reflects the essence of your brand is essential. An original, solid, and impactful visual style allows your business to stand out durably from the competition.',
    bgImage: 'url("https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 4,
    letter: 'S',
    category: 'SEA',
    title: { normal: 'Paid', bold: 'Search (SEA)' },
    slug: 'paid-search-sea',
    tags: ['google ads', 'ads', 'facebook ads', 'campaign', 'web marketing', 'performance'],
    description: 'Boost your online visibility fast with targeted ad campaigns managed by specialists on Google, Facebook, LinkedIn, and other platforms.',
    bgImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 5,
    letter: 'N',
    category: 'Networking',
    title: { normal: 'Social', bold: 'Media Management' },
    slug: 'social-media-management',
    tags: ['linkedin', 'facebook', 'instagram', 'community management', 'tiktok', 'online visibility'],
    description: 'Growing and engaging a community requires expert social media management. Content creation and distribution are designed to strengthen your brand image and boost public interaction.',
    bgImage: 'url("https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 6,
    letter: 'D',
    category: 'Digital Strategy',
    title: { normal: 'Digital', bold: 'Strategy' },
    slug: 'digital-strategy',
    tags: ['ads', 'conversion', 'competition analysis', 'marketing digital', 'leads generation', 'marketing automation'],
    description: 'Benefit from a personalized roadmap covering all digital and communication channels, accelerating your online visibility and helping you reach your business goals.',
    bgImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 7,
    letter: 'C',
    category: 'Content',
    title: { normal: 'Website', bold: 'Content Updates' },
    slug: 'website-content-updates',
    tags: ['copywriting', 'webmaster', 'articles', 'blogging', 'inbound marketing', 'web redaction'],
    description: 'Delivering optimized and relevant content is key to attracting and converting your audience. Our approach ensures your content stays fresh, visible, and on level with your brand\'s voice and goals.',
    bgImage: 'url("https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 8,
    letter: 'H',
    category: 'Hosting',
    title: { normal: 'Domain', bold: '& Hosting Services' },
    slug: 'domain-hosting-services',
    tags: ['security', 'cloud', 'dns', 'data protection', 'ssl certification'],
    description: 'We ensure daily, secure management of your domain name and website hosting. Our hosting solutions are as eco-friendly as possible.',
    bgImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 9,
    letter: 'M',
    category: 'Maintenance',
    title: { normal: 'Website', bold: 'Maintenance' },
    slug: 'website-maintenance',
    tags: ['optimization', 'updates', 'backups', 'technical support', 'bug fixes', 'web monitoring'],
    description: 'Combine Peace of Mind and Longevity with Our Maintenance Service. Our agency ensures the security, updates, and continuous optimization of your web tools for flawless operation.',
    bgImage: 'url("https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 10,
    letter: 'G',
    category: 'Graphism',
    title: { normal: 'Web', bold: 'Design & Print' },
    slug: 'web-design-print',
    tags: ['wireframe', 'trends', 'ergonomics', 'mobile-friendly', 'web model', 'paper support'],
    description: 'We create custom logos, graphic designs, and web designs: unique, modern, and creative creations designed to enhance your brand and effectively communicate your messages to your target audience.',
    bgImage: 'url("https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 11,
    letter: 'D',
    category: 'Dev',
    title: { normal: 'Web', bold: 'Development' },
    slug: 'web-development',
    tags: ['e-commerce', 'wordpress', 'full stack', 'front end', 'back end', 'cms', 'vuejs', 'api'],
    description: 'We implement high-performing, custom web solutions tailored to your specific needs, whether for complex Vue.js applications or advanced API integrations.',
    bgImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 12,
    letter: 'P',
    category: 'Photo',
    title: { normal: 'Photo', bold: '& Video Production' },
    slug: 'photo-video-production',
    tags: ['photoshoot', 'corporate', 'events', 'visual storytelling', 'packshot', 'video editing'],
    description: 'Enhance your brand with professional photos and videos. Our agency can create visuals for you that capture attention and reinforce your message for maximum impact.',
    bgImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 13,
    letter: 'A',
    category: 'Audit',
    title: { normal: 'Website', bold: 'Audit' },
    slug: 'website-audit',
    tags: ['audit seo', 'optimization', 'performance', 'bug fixes', 'ergonomics'],
    description: 'Improve your site\'s performance with a comprehensive audit. We pinpoint weaknesses and unveil optimization levers to boost your visibility, user experience, and organic search performance.',
    bgImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 14,
    letter: 'W',
    category: 'Webdesign',
    title: { normal: 'Custom', bold: 'Web Design' },
    slug: 'custom-web-design',
    tags: ['figma', 'ui-ux', 'wireframe', 'responsive design', 'website revamp'],
    description: 'Bring your visual identity to life with web design tailored to your users. Every interface is carefully crafted to combine aesthetics, usability, and performance across all devices.',
    bgImage: 'url("https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 15,
    letter: 'L',
    category: 'Logo',
    title: { normal: 'Logo', bold: 'Design' },
    slug: 'logo-design',
    tags: ['logo', 'graphism', 'branding', 'design'],
    description: 'A well-designed logo is more than just a graphic element—it\'s a promise, a reference point, and a tool for instant recognition. It embodies your brand, reflects your values, and gives your business a strong presence across all types of media.',
    bgImage: 'url("https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 16,
    letter: 'G',
    category: 'Google',
    title: { normal: 'Google', bold: 'My Business' },
    slug: 'google-my-business',
    tags: ['reviews', 'google', 'local', 'business-profile'],
    description: 'Boost your local visibility with an optimized Google My Business profile. We enhance your online image through complete, well-ranked, and up-to-date business listings.',
    bgImage: 'url("https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 17,
    letter: 'P',
    category: 'Print',
    title: { normal: 'Print', bold: 'Design Services' },
    slug: 'print-design-services',
    tags: ['design', 'illustrator', 'adobe', 'paper support', 'indesign', 'photoshop'],
    description: 'We design custom print communication materials and graphic creations for you: unique, impactful, and consistent visuals crafted to enhance your brand image and convey your message with clarity.',
    bgImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 18,
    letter: 'N',
    category: 'Newsletter',
    title: { normal: 'Newsletter', bold: '& Email Marketing' },
    slug: 'newsletter-email-marketing',
    tags: ['emailing', 'leads', 'conversion', 'editorial-strategy', 'marketing automation', 'leads generation'],
    description: 'Engage your audience with impactful email campaigns. We create custom newsletters that build customer loyalty, boost conversions, and enhance your brand image.',
    bgImage: 'url("https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  }
];

const ServiceCard = ({ service, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(`service-${service.id}`);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate which row this card is in (assuming 3 cards per row)
      const rowIndex = Math.floor(index / 3);

      // Check if we've scrolled 75% past the previous row
      const shouldShow = rect.top < windowHeight * 0.75 + (rowIndex * 100);

      setIsVisible(shouldShow);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [index, service.id]);

  return (
    <Link
      to={service.slug ? `/services/${service.slug}` : '#'}
      id={`service-${service.id}`}
      className={`service-card ${isVisible ? 'fade-in' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="service-header">
        <div
          className="service-letter"
          style={{
            backgroundImage: service.bgImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
        >
          {service.letter}
        </div>
        <p className="service-category">{service.category.toUpperCase()}</p>
      </div>

      <div className="service-content">
        <h2 className="service-title">
          <span className="title-normal">{service.title.normal} </span>
          <span className="title-bold">{service.title.bold}</span>
        </h2>
        <span className="service-arrow"></span>

        <div className="service-tags">
          {service.tags.slice(0, 3).map((tag, tagIndex) => (
            <div key={tagIndex} className="tag">
              <span className="tag-icon">+</span>
              {tag}
            </div>
          ))}
          {service.tags.slice(3).map((tag, tagIndex) => (
            <div key={tagIndex + 3} className="tag tag-hidden">
              <span className="tag-icon">+</span>
              {tag}
            </div>
          ))}
        </div>

        <p className="service-description">
          {service.description}
        </p>
      </div>

      <div className={`service-button ${isHovered ? 'visible' : ''}`}>
        <div className="see-more-btn">
          <span>See more</span>
          <div className="btn-arrow">→</div>
        </div>
      </div>
    </Link>
  );
};

function Services() {
  return (
    <div className="services-page">
      <Navbar/>

      <main className="services-main">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'}}>
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
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="mb-6 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
                WHAT WE OFFER
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
              Our Services
              <br />
              <span className="text-red-400">Driving Your Success</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-slide-up-delayed">
              Discover how our digital agency helps SMEs succeed in the digital world with concrete,
              accessible solutions tailored to your goals. From effective website creation to
              high-performing SEO, impactful visual identity, or a custom social media strategy —
              every service is designed to boost your growth.
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

        {/* Services Grid */}
        <section className="services-section">
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <div className="cta-text">
              <div className="cta-header">
                <p className="cta-subtitle">WRITE TO US</p>
                <hr />
                <div className="hero-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <h2 className="cta-title">TELL US ABOUT YOUR PROJECT</h2>
              <p className="cta-description">
                Bring your digital projects to life with our expertise. Website creation,
                online visibility, or digital strategy — get practical, human-centered support.
                Let's talk about your goals today!
              </p>
            </div>
            <Link to="/contact" className="cta-button" onClick={() => window.scrollTo(0, 0)}>
              <span>Let's talk</span>
              <div className="btn-arrow">→</div>
            </Link>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

export default Services
