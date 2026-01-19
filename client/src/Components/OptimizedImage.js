import React, { useState, useEffect, useRef } from 'react';

/**
 * OptimizedImage Component
 * Implements lazy loading, WebP format support, and proper dimensions for CLS prevention
 *
 * Features:
 * - Lazy loading with Intersection Observer
 * - WebP format with fallback
 * - Blur placeholder while loading
 * - Proper width/height to prevent layout shifts
 * - Responsive images with srcset
 */

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  objectFit = 'cover',
  sizes,
  onLoad,
  style = {}
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (priority) return; // Skip lazy loading for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  // Convert Unsplash URLs to WebP format
  const getOptimizedSrc = (originalSrc) => {
    if (!originalSrc) return '';

    // If it's an Unsplash image, add WebP format and optimization parameters
    if (originalSrc.includes('unsplash.com')) {
      const url = new URL(originalSrc);
      url.searchParams.set('fm', 'webp'); // WebP format
      url.searchParams.set('q', '80'); // Quality 80
      if (width) url.searchParams.set('w', width);
      if (height) url.searchParams.set('h', height);
      url.searchParams.set('fit', 'crop');
      return url.toString();
    }

    return originalSrc;
  };

  // Generate srcset for responsive images
  const generateSrcSet = (originalSrc) => {
    if (!originalSrc || !originalSrc.includes('unsplash.com')) return '';

    const widths = [320, 640, 768, 1024, 1280, 1536];
    return widths
      .map((w) => {
        const url = new URL(originalSrc);
        url.searchParams.set('fm', 'webp');
        url.searchParams.set('q', '80');
        url.searchParams.set('w', w);
        url.searchParams.set('fit', 'crop');
        return `${url.toString()} ${w}w`;
      })
      .join(', ');
  };

  const optimizedSrc = getOptimizedSrc(src);
  const srcSet = generateSrcSet(src);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        aspectRatio: width && height ? `${width} / ${height}` : 'auto',
        ...style
      }}
    >
      {/* Blur placeholder */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            backdropFilter: 'blur(10px)',
            background: 'linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
          }}
        />
      )}

      {/* Actual image - only load when in view or priority */}
      {isInView && (
        <img
          src={optimizedSrc}
          srcSet={srcSet}
          sizes={sizes || '100vw'}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: objectFit
          }}
        />
      )}

      {/* Shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default OptimizedImage;
