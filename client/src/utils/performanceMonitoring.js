/**
 * Performance Monitoring Utility
 * Tracks Core Web Vitals and reports to console/analytics
 *
 * Core Web Vitals:
 * - LCP (Largest Contentful Paint): ≤ 2.5s
 * - FID (First Input Delay): ≤ 100ms
 * - CLS (Cumulative Layout Shift): ≤ 0.1
 */

import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Threshold configurations
const THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 },
  FID: { good: 100, needsImprovement: 300 },
  CLS: { good: 0.1, needsImprovement: 0.25 },
  FCP: { good: 1800, needsImprovement: 3000 },
  TTFB: { good: 800, needsImprovement: 1800 }
};

// Get rating based on value and thresholds
const getRating = (metricName, value) => {
  const threshold = THRESHOLDS[metricName];
  if (!threshold) return 'unknown';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
};

// Format metric value for display
const formatValue = (metricName, value) => {
  if (metricName === 'CLS') {
    return value.toFixed(3);
  }
  return Math.round(value);
};

// Get color for console output
const getColor = (rating) => {
  switch (rating) {
    case 'good':
      return '#0cce6b';
    case 'needs-improvement':
      return '#ffa400';
    case 'poor':
      return '#ff4e42';
    default:
      return '#000000';
  }
};

// Log metric to console with styling
const logMetric = ({ name, value, rating, delta, id }) => {
  const formattedValue = formatValue(name, value);
  const color = getColor(rating);
  const unit = name === 'CLS' ? '' : 'ms';

  console.log(
    `%c${name}%c ${formattedValue}${unit} %c(${rating})`,
    'font-weight: bold; font-size: 12px;',
    `color: ${color}; font-weight: bold; font-size: 14px;`,
    `color: ${color}; font-size: 11px;`
  );

  // Log details for debugging
  if (process.env.NODE_ENV === 'development') {
    console.log({
      metric: name,
      value: formattedValue + unit,
      rating,
      delta: formatValue(name, delta) + unit,
      id
    });
  }
};

// Send metric to analytics (customize for your analytics provider)
const sendToAnalytics = ({ name, value, rating, delta, id }) => {
  // Example: Google Analytics 4
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, {
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      event_category: 'Web Vitals',
      event_label: id,
      non_interaction: true,
      metric_rating: rating
    });
  }

  // Example: Custom analytics endpoint
  if (process.env.REACT_APP_ANALYTICS_ENDPOINT) {
    fetch(process.env.REACT_APP_ANALYTICS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        value,
        rating,
        delta,
        id,
        url: window.location.href,
        timestamp: Date.now()
      })
    }).catch(console.error);
  }
};

// Main handler for web vitals
const handleMetric = (metric) => {
  const { name, value, id, delta } = metric;
  const rating = getRating(name, value);

  const enrichedMetric = {
    name,
    value,
    rating,
    delta,
    id
  };

  // Log to console
  logMetric(enrichedMetric);

  // Send to analytics
  sendToAnalytics(enrichedMetric);
};

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  // Core Web Vitals
  getCLS(handleMetric);
  getFID(handleMetric);
  getLCP(handleMetric);

  // Additional metrics
  getFCP(handleMetric);
  getTTFB(handleMetric);

  // Log summary
  console.log(
    '%c⚡ Performance Monitoring Active',
    'background: #4ade80; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;'
  );
  console.log(
    '%cCore Web Vitals Thresholds:',
    'font-weight: bold; font-size: 12px; margin-top: 8px;'
  );
  console.table({
    'LCP (Largest Contentful Paint)': { Good: '≤2.5s', 'Needs Improvement': '≤4.0s', Poor: '>4.0s' },
    'FID (First Input Delay)': { Good: '≤100ms', 'Needs Improvement': '≤300ms', Poor: '>300ms' },
    'CLS (Cumulative Layout Shift)': { Good: '≤0.1', 'Needs Improvement': '≤0.25', Poor: '>0.25' }
  });
};

// Export individual metric trackers for custom usage
export const trackLCP = () => getLCP(handleMetric);
export const trackFID = () => getFID(handleMetric);
export const trackCLS = () => getCLS(handleMetric);
export const trackFCP = () => getFCP(handleMetric);
export const trackTTFB = () => getTTFB(handleMetric);

export default initPerformanceMonitoring;
