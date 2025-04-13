// Initialize analytics
export const initializeAnalytics = () => {
    // This is where you would initialize your analytics provider
    // Example for Google Analytics:
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      console.log('Analytics initialized');
      // In a real implementation, you would add Google Analytics or other tracking code here
    }
  };
  
  // Track page view
  export const trackPageView = () => {
    // Track page view
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      console.log('Page view tracked');
      // In a real implementation: window.gtag('event', 'page_view')
    }
  };
  
  // Track custom events
  export const trackEvent = (category, action, label = null) => {
    // Track custom events
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      console.log(`Event tracked: ${category} - ${action} - ${label}`);
      // In a real implementation: window.gtag('event', action, { event_category: category, event_label: label })
    }
  };
  
  // Setup scroll depth tracking
  export const setupScrollDepthTracking = (trackEvent) => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      if (scrolled >= 25 && !window.scrollDepthMarkers?.['25']) {
        trackEvent('Scroll', 'Depth', '25%');
        window.scrollDepthMarkers = { ...window.scrollDepthMarkers, '25': true };
      }
      if (scrolled >= 50 && !window.scrollDepthMarkers?.['50']) {
        trackEvent('Scroll', 'Depth', '50%');
        window.scrollDepthMarkers = { ...window.scrollDepthMarkers, '50': true };
      }
      if (scrolled >= 75 && !window.scrollDepthMarkers?.['75']) {
        trackEvent('Scroll', 'Depth', '75%');
        window.scrollDepthMarkers = { ...window.scrollDepthMarkers, '75': true };
      }
      if (scrolled >= 99 && !window.scrollDepthMarkers?.['100']) {
        trackEvent('Scroll', 'Depth', '100%');
        window.scrollDepthMarkers = { ...window.scrollDepthMarkers, '100': true };
      }
    };
  
    // Initialize scroll depth markers
    window.scrollDepthMarkers = {
      '25': false,
      '50': false,
      '75': false,
      '100': false
    };
  
    window.addEventListener('scroll', handleScroll);
    
    // Return cleanup function
    return () => window.removeEventListener('scroll', handleScroll);
  };