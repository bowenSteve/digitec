import React, { useState, useEffect } from 'react'
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import './Services.css'

const servicesData = [
  {
    id: 1,
    letter: 'W',
    category: 'Website',
    title: { normal: 'Website', bold: 'Creation' },
    tags: ['showcase', 'e-commerce', 'wordpress', 'ux/ui design', 'website revamp', 'responsive design'],
    description: 'Build your web project with a committed digital partner. Our websites combine design, performance, and adaptability across all devices for a smooth and optimized experience that propels your business forward.',
    bgImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 2,
    letter: 'S',
    category: 'SEO',
    title: { normal: 'Search', bold: 'Engine Optimization' },
    tags: ['keywords', 'ranking', 'meta link', 'google analytics', 'organic traffic', 'audit seo'],
    description: 'Improving your search engine rankings helps attract qualified, long-lasting traffic. Our advanced Search Engine Optimization expertise ensures we refine your positioning with precision.',
    bgImage: 'url("/images/qreative-seo-google-01-sm.avif")',
  },
  {
    id: 3,
    letter: 'B',
    category: 'Branding',
    title: { normal: 'Branding', bold: '& Visual Design' },
    tags: ['branding', 'design', 'graphism', 'guidelines', 'logo', 'font'],
    description: 'Creating a strong, coherent, and memorable visual identity that reflects the essence of your brand is essential. An original, solid, and impactful visual style allows your business to stand out durably from the competition.',
    bgImage: 'url("https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 4,
    letter: 'S',
    category: 'SEA',
    title: { normal: 'Paid', bold: 'Search (SEA)' },
    tags: ['google ads', 'ads', 'facebook ads', 'campaign', 'web marketing', 'performance'],
    description: 'Boost your online visibility fast with targeted ad campaigns managed by specialists on Google, Facebook, LinkedIn, and other platforms.',
    bgImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 5,
    letter: 'N',
    category: 'Networking',
    title: { normal: 'Social', bold: 'Media Management' },
    tags: ['linkedin', 'facebook', 'instagram', 'community management', 'tiktok', 'online visibility'],
    description: 'Growing and engaging a community requires expert social media management. Content creation and distribution are designed to strengthen your brand image and boost public interaction.',
    bgImage: 'url("https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 6,
    letter: 'D',
    category: 'Digital Strategy',
    title: { normal: 'Digital', bold: 'Strategy' },
    tags: ['ads', 'conversion', 'competition analysis', 'marketing digital', 'leads generation', 'marketing automation'],
    description: 'Benefit from a personalized roadmap covering all digital and communication channels, accelerating your online visibility and helping you reach your business goals.',
    bgImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 7,
    letter: 'C',
    category: 'Content',
    title: { normal: 'Website', bold: 'Content Updates' },
    tags: ['copywriting', 'webmaster', 'articles', 'blogging', 'inbound marketing', 'web redaction'],
    description: 'Delivering optimized and relevant content is key to attracting and converting your audience. Our approach ensures your content stays fresh, visible, and on level with your brand\'s voice and goals.',
    bgImage: 'url("https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 8,
    letter: 'H',
    category: 'Hosting',
    title: { normal: 'Domain', bold: '& Hosting Services' },
    tags: ['security', 'cloud', 'dns', 'data protection', 'ssl certification'],
    description: 'We ensure daily, secure management of your domain name and website hosting. Our hosting solutions are as eco-friendly as possible.',
    bgImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 9,
    letter: 'M',
    category: 'Maintenance',
    title: { normal: 'Website', bold: 'Maintenance' },
    tags: ['optimization', 'updates', 'backups', 'technical support', 'bug fixes', 'web monitoring'],
    description: 'Combine Peace of Mind and Longevity with Our Maintenance Service. Our agency ensures the security, updates, and continuous optimization of your web tools for flawless operation.',
    bgImage: 'url("https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 10,
    letter: 'G',
    category: 'Graphism',
    title: { normal: 'Web', bold: 'Design & Print' },
    tags: ['wireframe', 'trends', 'ergonomics', 'mobile-friendly', 'web model', 'paper support'],
    description: 'We create custom logos, graphic designs, and web designs: unique, modern, and creative creations designed to enhance your brand and effectively communicate your messages to your target audience.',
    bgImage: 'url("https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 11,
    letter: 'D',
    category: 'Dev',
    title: { normal: 'Web', bold: 'Development' },
    tags: ['e-commerce', 'wordpress', 'full stack', 'front end', 'back end', 'cms', 'vuejs', 'api'],
    description: 'We implement high-performing, custom web solutions tailored to your specific needs, whether for complex Vue.js applications or advanced API integrations.',
    bgImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 12,
    letter: 'P',
    category: 'Photo',
    title: { normal: 'Photo', bold: '& Video Production' },
    tags: ['photoshoot', 'corporate', 'events', 'visual storytelling', 'packshot', 'video editing'],
    description: 'Enhance your brand with professional photos and videos. Our agency can create visuals for you that capture attention and reinforce your message for maximum impact.',
    bgImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 13,
    letter: 'A',
    category: 'Audit',
    title: { normal: 'Website', bold: 'Audit' },
    tags: ['audit seo', 'optimization', 'performance', 'bug fixes', 'ergonomics'],
    description: 'Improve your site\'s performance with a comprehensive audit. We pinpoint weaknesses and unveil optimization levers to boost your visibility, user experience, and organic search performance.',
    bgImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 14,
    letter: 'W',
    category: 'Webdesign',
    title: { normal: 'Custom', bold: 'Web Design' },
    tags: ['figma', 'ui-ux', 'wireframe', 'responsive design', 'website revamp'],
    description: 'Bring your visual identity to life with web design tailored to your users. Every interface is carefully crafted to combine aesthetics, usability, and performance across all devices.',
    bgImage: 'url("https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 15,
    letter: 'L',
    category: 'Logo',
    title: { normal: 'Logo', bold: 'Design' },
    tags: ['logo', 'graphism', 'branding', 'design'],
    description: 'A well-designed logo is more than just a graphic element—it\'s a promise, a reference point, and a tool for instant recognition. It embodies your brand, reflects your values, and gives your business a strong presence across all types of media.',
    bgImage: 'url("https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 16,
    letter: 'G',
    category: 'Google',
    title: { normal: 'Google', bold: 'My Business' },
    tags: ['reviews', 'google', 'local', 'business-profile'],
    description: 'Boost your local visibility with an optimized Google My Business profile. We enhance your online image through complete, well-ranked, and up-to-date business listings.',
    bgImage: 'url("https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 17,
    letter: 'P',
    category: 'Print',
    title: { normal: 'Print', bold: 'Design Services' },
    tags: ['design', 'illustrator', 'adobe', 'paper support', 'indesign', 'photoshop'],
    description: 'We design custom print communication materials and graphic creations for you: unique, impactful, and consistent visuals crafted to enhance your brand image and convey your message with clarity.',
    bgImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
  },
  {
    id: 18,
    letter: 'N',
    category: 'Newsletter',
    title: { normal: 'Newsletter', bold: '& Email Marketing' },
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
    <div
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
        <button className="see-more-btn">
          <span>See more</span>
          <div className="btn-arrow">→</div>
        </button>
      </div>
    </div>
  );
};

function Services() {
  return (
    <div className="services-page">
      <Navbar/>

      <main className="services-main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-left">
              <div className="hidden xl:block w-1/3 h-96 absolute -mx-20 bg-gradient-to-r from-red-500 to-red-400 left-10 dark:hidden"></div>
              <div className="hero-decorative"></div>
              <img
                width="768"
                height="802"
                alt="Qreative web agency office in Nivelles"
                crossOrigin="anonymous"
                loading="eager"
                sizes="50vw"
                fetchPriority="high"
                src="/images/qreative-services-cover-en-md.avif"
                className="w-full h-96 absolute -mt-12 object-cover dark:opacity-80 imgServiceCover"
              />
            </div>
            <div className="hero-right">
              <div className="hero-header">
                <div className="hero-dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <hr />
                <p className="hero-subtitle">WHAT WE OFFER</p>
              </div>
              <h1 className="hero-title">TAKE A LOOK</h1>
              <div className="hero-description">
                <p>
                  Discover how our digital agency helps SMEs succeed in the digital world with concrete,
                  accessible solutions tailored to your goals. From effective website creation to
                  high-performing SEO, impactful visual identity, or a custom social media strategy —
                  every service is designed to boost your growth. With us, digital becomes simple,
                  human, and above all, a true source of opportunity for your business.
                </p>
              </div>
            </div>
          </div>
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
            <button className="cta-button">
              <span>Let's talk</span>
              <div className="btn-arrow">→</div>
            </button>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

export default Services
