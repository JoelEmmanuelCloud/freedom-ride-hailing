// utils/analytics.js - Complete analytics implementation with SEO tracking

// Configuration
const GA_MEASUREMENT_ID ='G-107ZYDMH0R';
const FB_PIXEL_ID = process.env.REACT_APP_FB_PIXEL_ID || 'YOUR_FB_PIXEL_ID';
const CLARITY_PROJECT_ID ='s8hzvmtz9d';
const HOTJAR_ID ='6451968';

// Environment check
const isProduction = process.env.NODE_ENV === 'production';

// Initialize analytics
export const initializeAnalytics = () => {
  console.log('🔧 Initializing analytics...');
  
  if (typeof window === 'undefined') {
    console.log('⚠️ Window not available - skipping analytics initialization');
    return;
  }

  // Initialize Google Analytics 4
  initializeGoogleAnalytics();
  
  // Initialize Microsoft Clarity (user behavior analytics)
  initializeClarity();
  
  // Initialize Facebook Pixel (for ads and conversion tracking)
  initializeFacebookPixel();
  
  // Initialize Hotjar (optional - for heatmaps and user recordings)
  initializeHotjar();
  
  // Initialize Google Search Console verification
  initializeSearchConsole();
  
  // Set up performance monitoring
  setupPerformanceMonitoring();
  
  console.log('✅ Analytics initialization complete');
};

// Google Analytics 4 setup
const initializeGoogleAnalytics = () => {
  if (!isProduction) return;
  
  try {
    // Load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      // Enhanced ecommerce settings
      send_page_view: true,
      allow_enhanced_conversions: true,
      allow_google_signals: true,
      allow_ad_personalization_signals: true,
      
      // Privacy settings
      anonymize_ip: true,
      
      // Custom parameters
      custom_map: {
        'custom_parameter_1': 'page_type',
        'custom_parameter_2': 'user_journey_stage',
        'custom_parameter_3': 'content_category'
      },
      
      // Site-specific settings
      site_speed_sample_rate: 100,
      sample_rate: 100
    });

    console.log('✅ Google Analytics initialized');
  } catch (error) {
    console.error('❌ Error initializing Google Analytics:', error);
  }
};

// Microsoft Clarity setup
const initializeClarity = () => {
  if (!isProduction || !CLARITY_PROJECT_ID || CLARITY_PROJECT_ID === 'YOUR_CLARITY_ID') return;
  
  try {
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
    
    console.log('✅ Microsoft Clarity initialized');
  } catch (error) {
    console.error('❌ Error initializing Microsoft Clarity:', error);
  }
};

// Facebook Pixel setup
const initializeFacebookPixel = () => {
  if (!isProduction || !FB_PIXEL_ID || FB_PIXEL_ID === 'YOUR_FB_PIXEL_ID') return;
  
  try {
    // Facebook Pixel IIFE - properly formatted
    (function(f,b,e,v,n,t,s) {
      if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s);
    })(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
    
    window.fbq('init', FB_PIXEL_ID);
    window.fbq('track', 'PageView');
    
    console.log('✅ Facebook Pixel initialized');
  } catch (error) {
    console.error('❌ Error initializing Facebook Pixel:', error);
  }
};

// Hotjar setup (optional)
const initializeHotjar = () => {
  if (!isProduction || !HOTJAR_ID || HOTJAR_ID === 'YOUR_HOTJAR_ID') return;
  
  try {
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:HOTJAR_ID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    
    console.log('✅ Hotjar initialized');
  } catch (error) {
    console.error('❌ Error initializing Hotjar:', error);
  }
};

// Google Search Console verification
const initializeSearchConsole = () => {
  const gscCode = process.env.REACT_APP_GSC_VERIFICATION_CODE;
  if (!gscCode) return;
  
  const existingMeta = document.querySelector('meta[name="google-site-verification"]');
  if (existingMeta) return;
  
  const meta = document.createElement('meta');
  meta.name = 'google-site-verification';
  meta.content = gscCode;
  document.head.appendChild(meta);
  
  console.log('✅ Google Search Console verification added');
};

// Enhanced page view tracking with SEO data
export const trackPageView = (pageTitle, pagePath, additionalData = {}) => {
  if (typeof window === 'undefined') return;
  
  const currentPage = {
    title: pageTitle || document.title,
    path: pagePath || window.location.pathname,
    url: window.location.href,
    referrer: document.referrer,
    ...additionalData
  };

  // Google Analytics page view
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: currentPage.title,
      page_location: currentPage.url,
      page_path: currentPage.path,
      content_group1: additionalData.contentCategory || 'General',
      content_group2: additionalData.userJourneyStage || 'Unknown'
    });
  }

  // Facebook Pixel page view
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', 'PageView', {
      content_name: currentPage.title,
      content_category: additionalData.contentCategory || 'General'
    });
  }

  // Track SEO-specific metrics
  trackSEOMetrics();
  
  // Track performance metrics
  setTimeout(trackPagePerformance, 1000);
  
  console.log('📊 Page view tracked:', currentPage.title);
};

// Track SEO-specific metrics
const trackSEOMetrics = () => {
  if (typeof window === 'undefined') return;
  
  // Track traffic source
  const referrer = document.referrer;
  const searchEngines = [
    { name: 'Google', domain: 'google' },
    { name: 'Bing', domain: 'bing' },
    { name: 'Yahoo', domain: 'yahoo' },
    { name: 'DuckDuckGo', domain: 'duckduckgo' }
  ];
  
  const searchEngine = searchEngines.find(engine => referrer.includes(engine.domain));
  if (searchEngine) {
    trackEvent('SEO', 'Organic Traffic', searchEngine.name);
  }
  
  // Track if user came from social media
  const socialPlatforms = [
    { name: 'Facebook', domain: 'facebook' },
    { name: 'Twitter', domain: 'twitter' },
    { name: 'Instagram', domain: 'instagram' },
    { name: 'LinkedIn', domain: 'linkedin' }
  ];
  
  const socialPlatform = socialPlatforms.find(platform => referrer.includes(platform.domain));
  if (socialPlatform) {
    trackEvent('Social Media', 'Traffic', socialPlatform.name);
  }
  
  // Track mobile vs desktop
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  trackEvent('Device', 'Type', isMobile ? 'Mobile' : 'Desktop');
  
  // Track page load source
  if (window.performance && window.performance.navigation) {
    const navigationType = window.performance.navigation.type;
    const navigationTypes = {
      0: 'Direct/Bookmark',
      1: 'Reload',
      2: 'Back/Forward',
      255: 'Other'
    };
    trackEvent('Navigation', 'Type', navigationTypes[navigationType] || 'Unknown');
  }
};

// Enhanced event tracking
export const trackEvent = (category, action, label = null, value = null, additionalData = {}) => {
  if (typeof window === 'undefined') return;
  
  const eventData = {
    event_category: category,
    event_label: label,
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname,
    ...additionalData
  };

  if (value !== null && value !== undefined) {
    eventData.value = Number(value);
  }

  // Google Analytics event tracking
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, eventData);
  }

  // Facebook Pixel custom events
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', 'CustomEvent', {
      category: category,
      action: action,
      label: label,
      value: value
    });
  }

  // Clarity custom events
  if (typeof window.clarity !== 'undefined') {
    window.clarity('event', `${category}_${action}`, label);
  }

  console.log('🎯 Event tracked:', { category, action, label, value });
};

// Track conversion events with enhanced data
export const trackConversion = (conversionType, value = null, additionalData = {}) => {
  const conversions = {
    'app_download_android': {
      ga_event: 'app_download',
      ga_category: 'Engagement',
      fb_event: 'CompleteRegistration',
      clarity_event: 'app_download_android'
    },
    'app_download_ios': {
      ga_event: 'app_download',
      ga_category: 'Engagement',
      fb_event: 'CompleteRegistration',
      clarity_event: 'app_download_ios'
    },
    'driver_signup': {
      ga_event: 'sign_up',
      ga_category: 'Engagement',
      fb_event: 'Lead',
      clarity_event: 'driver_signup'
    },
    'contact_form': {
      ga_event: 'generate_lead',
      ga_category: 'Engagement',
      fb_event: 'Lead',
      clarity_event: 'contact_form'
    },
    'cta_click': {
      ga_event: 'click',
      ga_category: 'CTA',
      fb_event: 'ViewContent',
      clarity_event: 'cta_click'
    }
  };

  const conversion = conversions[conversionType];
  if (!conversion) {
    console.warn(`Unknown conversion type: ${conversionType}`);
    return;
  }

  // Google Analytics conversion
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', conversion.ga_event, {
      event_category: conversion.ga_category,
      event_label: conversionType,
      value: value || 1,
      currency: 'GHS',
      ...additionalData
    });
  }

  // Facebook Pixel conversion
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', conversion.fb_event, {
      content_category: conversion.ga_category,
      content_name: conversionType,
      value: value || 1,
      currency: 'GHS',
      ...additionalData
    });
  }

  // Clarity conversion
  if (typeof window.clarity !== 'undefined') {
    window.clarity('event', conversion.clarity_event);
  }

  console.log('💰 Conversion tracked:', conversionType, value);
};

// Track CTA clicks with conversion data
export const trackCTAClick = (ctaName, ctaLocation, ctaType = 'button', additionalData = {}) => {
  trackEvent('CTA', 'Click', `${ctaName} - ${ctaLocation}`, null, {
    cta_type: ctaType,
    cta_location: ctaLocation,
    ...additionalData
  });
  
  // Track as conversion for key CTAs
  const keyCTAs = ['Download App', 'Become Driver', 'Book Ride', 'Contact Us'];
  if (keyCTAs.some(key => ctaName.includes(key))) {
    trackConversion('cta_click', 1, {
      cta_name: ctaName,
      cta_location: ctaLocation,
      cta_type: ctaType
    });
  }
};

// Enhanced scroll depth tracking with engagement scoring
export const setupScrollDepthTracking = (trackEventCallback) => {
  if (typeof window === 'undefined') return () => {};
  
  const scrollDepths = [10, 25, 50, 75, 90, 100];
  const triggeredDepths = new Set();
  let maxScroll = 0;
  let scrollStartTime = Date.now();
  let isScrolling = false;
  let scrollTimer;
  
  const handleScroll = () => {
    const winScroll = window.pageYOffset || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((winScroll / height) * 100);
    
    // Track max scroll reached
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
    }
    
    // Track scroll depth milestones
    scrollDepths.forEach(depth => {
      if (scrollPercent >= depth && !triggeredDepths.has(depth)) {
        triggeredDepths.add(depth);
        trackEventCallback('Engagement', 'Scroll Depth', `${depth}%`, depth);
        
        // Enhanced tracking for high engagement
        if (depth >= 75) {
          trackEvent('Engagement', 'High Engagement', 'Deep Scroll', depth, {
            max_scroll: maxScroll,
            time_to_depth: Date.now() - scrollStartTime
          });
        }
      }
    });
    
    // Track scroll velocity (for engagement quality)
    if (!isScrolling) {
      isScrolling = true;
      scrollStartTime = Date.now();
    }
    
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      isScrolling = false;
      const scrollDuration = Date.now() - scrollStartTime;
      
      // Track reading behavior based on scroll patterns
      if (scrollDuration > 3000 && maxScroll > 50) {
        trackEvent('Engagement', 'Reading Behavior', 'Slow Scroll', scrollDuration);
      } else if (scrollDuration < 1000 && maxScroll > 75) {
        trackEvent('Engagement', 'Reading Behavior', 'Fast Scroll', scrollDuration);
      }
    }, 150);
  };

  const throttledScroll = throttle(handleScroll, 300);
  
  // Initialize scroll tracking
  window.scrollDepthMarkers = {};
  scrollDepths.forEach(depth => {
    window.scrollDepthMarkers[depth.toString()] = false;
  });
  
  window.addEventListener('scroll', throttledScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', throttledScroll);
    clearTimeout(scrollTimer);
  };
};

// Track section visibility with Intersection Observer
export const trackSectionView = (sectionName, threshold = 0.5) => {
  if (typeof window === 'undefined' || !window.IntersectionObserver) {
    return () => {};
  }
  
  const startTime = Date.now();
  let isVisible = false;
  let visibilityStartTime = 0;
  let totalVisibleTime = 0;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible) {
          isVisible = true;
          visibilityStartTime = Date.now();
          trackEvent('Section View', 'Section Entered', sectionName);
        } else if (!entry.isIntersecting && isVisible) {
          isVisible = false;
          const visibleDuration = Date.now() - visibilityStartTime;
          totalVisibleTime += visibleDuration;
          
          trackEvent('Section Engagement', 'Section Exit', sectionName, Math.round(visibleDuration / 1000));
        }
      });
    },
    { threshold: threshold }
  );
  
  // Find the section element
  const sectionElement = document.getElementById(sectionName.toLowerCase().replace(/\s+/g, '-')) 
    || document.querySelector(`[data-section="${sectionName}"]`)
    || document.querySelector(`[aria-label*="${sectionName}"]`);
  
  if (sectionElement) {
    observer.observe(sectionElement);
  }
  
  return () => {
    observer.disconnect();
    if (isVisible) {
      totalVisibleTime += Date.now() - visibilityStartTime;
    }
    
    const totalTime = Date.now() - startTime;
    const engagementRate = totalVisibleTime / totalTime;
    
    trackEvent('Section Engagement', 'Total Time', sectionName, Math.round(totalVisibleTime / 1000), {
      engagement_rate: Math.round(engagementRate * 100),
      total_page_time: Math.round(totalTime / 1000)
    });
  };
};

// Track Core Web Vitals and performance metrics
const trackPagePerformance = () => {
  if (typeof window === 'undefined' || !window.performance) return;
  
  // Basic performance timing
  if (window.performance.timing) {
    const timing = window.performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    const domContentLoaded = timing.domContentLoadedEventEnd - timing.navigationStart;
    const firstPaint = timing.responseEnd - timing.requestStart;
    
    if (loadTime > 0) {
      trackEvent('Performance', 'Page Load Time', 'Total', Math.round(loadTime));
    }
    if (domContentLoaded > 0) {
      trackEvent('Performance', 'DOM Content Loaded', 'Time', Math.round(domContentLoaded));
    }
    if (firstPaint > 0) {
      trackEvent('Performance', 'First Paint', 'Time', Math.round(firstPaint));
    }
  }
  
  // Core Web Vitals tracking
  if ('PerformanceObserver' in window) {
    // Largest Contentful Paint (LCP)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        const lcp = Math.round(lastEntry.startTime);
        
        trackEvent('Core Web Vitals', 'LCP', getLCPRating(lcp), lcp);
        
        // Send to Google Analytics as custom metric
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: lcp,
            custom_parameter_1: getLCPRating(lcp)
          });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.log('LCP tracking not supported');
    }

    // First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fid = Math.round(entry.processingStart - entry.startTime);
          
          trackEvent('Core Web Vitals', 'FID', getFIDRating(fid), fid);
          
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FID',
              value: fid,
              custom_parameter_1: getFIDRating(fid)
            });
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.log('FID tracking not supported');
    }

    // Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        const clsScore = Math.round(clsValue * 1000) / 1000;
        trackEvent('Core Web Vitals', 'CLS', getCLSRating(clsValue), clsScore);
        
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'CLS',
            value: clsScore,
            custom_parameter_1: getCLSRating(clsValue)
          });
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.log('CLS tracking not supported');
    }
  }
};

// Performance monitoring setup
const setupPerformanceMonitoring = () => {
  if (typeof window === 'undefined') return;
  
  // Track JavaScript errors
  window.addEventListener('error', (event) => {
    trackEvent('Error', 'JavaScript Error', event.message, null, {
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno
    });
  });
  
  // Track unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    trackEvent('Error', 'Unhandled Promise Rejection', event.reason?.message || 'Unknown', null, {
      stack: event.reason?.stack
    });
  });
  
  // Track resource loading errors
  window.addEventListener('error', (event) => {
    if (event.target !== window) {
      trackEvent('Error', 'Resource Loading Error', event.target.src || event.target.href || 'Unknown resource');
    }
  }, true);
};

// Utility functions for Web Vitals ratings
const getLCPRating = (lcp) => {
  if (lcp <= 2500) return 'Good';
  if (lcp <= 4000) return 'Needs Improvement';
  return 'Poor';
};

const getFIDRating = (fid) => {
  if (fid <= 100) return 'Good';
  if (fid <= 300) return 'Needs Improvement';
  return 'Poor';
};

const getCLSRating = (cls) => {
  if (cls <= 0.1) return 'Good';
  if (cls <= 0.25) return 'Needs Improvement';
  return 'Poor';
};

// Throttle utility function
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Analytics object for export
const Analytics = {
  initializeAnalytics,
  trackPageView,
  trackEvent,
  trackConversion,
  trackCTAClick,
  trackSectionView,
  setupScrollDepthTracking,
  setupPerformanceMonitoring
};

// Default export
export default Analytics;