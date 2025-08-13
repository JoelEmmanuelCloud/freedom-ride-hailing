import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { trackEvent, trackCTAClick, trackSectionView } from "../../utils/analytics";

const HeroSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState({
    main: false,
    rider2: false,
    rider: false,
    googlePlay: false,
    appStore: false
  });

  const [imageErrors, setImageErrors] = useState({
    main: false,
    rider2: false,
    rider: false,
    googlePlay: false,
    appStore: false
  });

  // Google Play Store URL - same as AppDownload component
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.freedomghana.app.user&pcampaignid=web_share";

  // Track page view on component mount
  useEffect(() => {
    const cleanup = trackSectionView("Hero Section");
    trackEvent("Page", "View", "Hero Section");
    
    // Aggressive preloading with proper error handling and priority
    const preloadImages = [
      { src: "/images/freedom-DriverXRider.jpg", priority: true },
      { src: "/images/google-play-badge.png", priority: true },
      { src: "/images/app-store-badge.png", priority: true },
      { src: "/images/Freedom-Rider2.jpg", priority: false },
      { src: "/images/Freedom-Rider.jpg", priority: false }
    ];

    const preloadPromises = preloadImages.map(({ src, priority }) => {
      return new Promise((resolve) => {
        const img = new Image();
        
        // Set loading priority
        if (priority) {
          img.loading = "eager";
          img.fetchPriority = "high";
        } else {
          img.loading = "lazy";
        }
        
        img.onload = () => resolve({ src, success: true });
        img.onerror = () => resolve({ src, success: false });
        
        // Start loading
        img.src = src;
      });
    });

    // Handle preload results
    Promise.allSettled(preloadPromises).then(results => {
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          const { src, success } = result.value;
          const imageKey = getImageKey(src);
          if (imageKey) {
            if (success) {
              setImagesLoaded(prev => ({ ...prev, [imageKey]: true }));
            } else {
              setImageErrors(prev => ({ ...prev, [imageKey]: true }));
            }
          }
        }
      });
    });

    return cleanup;
  }, []);

  // Helper function to get image key from src
  const getImageKey = (src) => {
    if (src.includes('freedom-DriverXRider')) return 'main';
    if (src.includes('Freedom-Rider2')) return 'rider2';
    if (src.includes('Freedom-Rider.jpg')) return 'rider';
    if (src.includes('google-play')) return 'googlePlay';
    if (src.includes('app-store')) return 'appStore';
    return null;
  };

  // Function to handle smooth scrolling to the about section
  const scrollToAbout = (e) => {
    e.preventDefault();
    
    // Track the click event
    trackEvent("Navigation", "Click", "About Section");
    
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle image load events with better error recovery
  const handleImageLoad = (imageKey) => {
    setImagesLoaded(prev => ({ ...prev, [imageKey]: true }));
    setImageErrors(prev => ({ ...prev, [imageKey]: false }));
  };

  const handleImageError = (imageKey, fallbackSrc, fallbackAlt) => {
    setImageErrors(prev => ({ ...prev, [imageKey]: true }));
    // Set a timeout to show the image as loaded even if fallback fails
    setTimeout(() => {
      setImagesLoaded(prev => ({ ...prev, [imageKey]: true }));
    }, 100);
  };

  // Enhanced CTA click handlers with conversion tracking
  const handleAppDownload = (platform, source = "Hero") => {
    trackCTAClick(`Download App ${platform}`, source, "app-download");
    trackEvent("Conversion", "App Download Intent", `${platform} - ${source}`);
    
    // Updated store URLs - use actual Play Store URL
    const storeUrls = {
      'Google Play': playStoreUrl,
      'App Store': '#' // Placeholder until App Store app is approved
    };
    
    // For production, navigate to actual store
    if (typeof window !== 'undefined') {
      if (platform === 'Google Play') {
        window.open(storeUrls[platform], '_blank', 'noopener,noreferrer');
      } else {
        // App Store coming soon - could show a toast or modal
        console.log('App Store version coming soon!');
      }
    }
  };

  // Optimized image component with better loading states
  const OptimizedImage = ({ 
    src, 
    alt, 
    className, 
    imageKey, 
    loading = "lazy", 
    fetchPriority = "auto",
    fallbackSrc = "/api/placeholder/400/300",
    onLoad,
    onError 
  }) => {
    const isLoaded = imagesLoaded[imageKey];
    const hasError = imageErrors[imageKey];
    
    return (
      <div className="relative">
        {/* Loading skeleton */}
        {!isLoaded && (
          <div 
            className={`${className} bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse`}
            style={{
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s ease-in-out infinite'
            }}
            aria-hidden="true"
          />
        )}
        
        {/* Actual image */}
        <img 
          src={hasError ? fallbackSrc : src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
          }`}
          loading={loading}
          fetchPriority={fetchPriority}
          onLoad={() => {
            handleImageLoad(imageKey);
            onLoad?.();
          }}
          onError={(e) => {
            if (!hasError) {
              e.target.src = fallbackSrc;
              handleImageError(imageKey, fallbackSrc, alt);
            }
            onError?.(e);
          }}
          decoding="async"
        />
      </div>
    );
  };

  return (
    <>
      {/* Add shimmer animation styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      <header
        className="w-full py-8 md:py-16 lg:py-24 relative overflow-hidden"
        role="banner"
        aria-label="Freedom Ghana ride-hailing and delivery service hero section"
      >
        {/* SEO: Add structured data for the hero section */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPageElement",
            "name": "Hero Section",
            "description": "Freedom Ghana's main call-to-action section showcasing ride-hailing and delivery services",
            "url": "https://www.freedomghana.com/#hero"
          })}
        </script>

        {/* Background gradient with modern mesh gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 z-0">
          {/* Mesh gradient overlay */}
          <div className="absolute inset-0 opacity-30" aria-hidden="true">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="presentation">
              <defs>
                <radialGradient id="rgrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#FFF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#rgrad)" />
            </svg>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-white opacity-10 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-yellow-300 opacity-20 rounded-full blur-xl" aria-hidden="true"></div>
        
        {/* Navigation Menu */}
        <nav className="container mx-auto px-4 relative z-20" aria-label="Quick navigation">
          <div className="flex justify-end py-4">
            <a
              href="#about"
              onClick={scrollToAbout}
              className="text-white text-lg font-medium transition-all hover:text-yellow-100 relative group"
              aria-label="Learn more about Freedom Ghana"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-100 transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
            </a>
          </div>
        </nav>
        
        {/* Decorative element */}
        <div 
          className="absolute top-1/3 right-1/4 w-6 h-6 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full border-2 border-white opacity-20"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            {/* Left side - content */}
            <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
              <div className="backdrop-blur-sm bg-white/10 p-5 md:p-7 lg:p-8 rounded-2xl md:rounded-3xl border border-white/20 shadow-lg">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-5 text-white leading-tight">
                  Your Freedom <br />
                  <span className="text-yellow-100">to Move</span>
                </h1>
                
                <p className="text-base md:text-lg lg:text-xl font-light mb-5 md:mb-6 lg:mb-7 text-white text-opacity-90">
                  Fast, Affordable, Reliable motorcycle taxi and delivery rides across Ghana
                </p>
                
                {/* App download CTAs with optimized images */}
                <div 
                  className="flex flex-row gap-3 md:gap-4 justify-center sm:justify-start"
                  role="group"
                  aria-label="Download Freedom Ghana mobile app"
                >
                  {/* Google Play download button - EXACT COPY FROM APP DOWNLOAD */}
                  <motion.a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 md:h-10 lg:h-12 w-32 md:w-36 lg:w-40 flex items-center justify-center"
                    onClick={() => trackEvent('Download', 'Click', 'Google Play - Hero Section')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    aria-label="Download Freedom Ghana app from Google Play Store"
                  >
                    <img 
                      src="/images/google-play-badge.png" 
                      alt="Get it on Google Play" 
                      className="h-full w-full object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 70' preserveAspectRatio='xMidYMid meet'%3E%3Cg fill='%23fff'%3E%3Crect width='240' height='70' rx='10' fill='%23000'/%3E%3Cpath d='M130.24 28.76c-3.28 0-5.96 2.5-5.96 5.94 0 3.42 2.68 5.94 5.96 5.94 3.3 0 5.98-2.52 5.98-5.94 0-3.44-2.68-5.94-5.98-5.94zm0 9.53c-1.72 0-3.2-1.42-3.2-3.6 0-2.2 1.48-3.6 3.2-3.6 1.74 0 3.22 1.4 3.22 3.6 0 2.18-1.48 3.6-3.22 3.6zm-12.45-9.53c-3.28 0-5.96 2.5-5.96 5.94 0 3.42 2.68 5.94 5.96 5.94 3.3 0 5.98-2.52 5.98-5.94 0-3.44-2.68-5.94-5.98-5.94zm0 9.53c-1.72 0-3.2-1.42-3.2-3.6 0-2.2 1.48-3.6 3.2-3.6 1.74 0 3.22 1.4 3.22 3.6 0 2.18-1.48 3.6-3.22 3.6zm-14.82-7.7v2.54h6.08c-.18 1.43-.66 2.47-1.4 3.2-.9.9-2.28 1.9-4.68 1.9-3.72 0-6.64-3-6.64-6.72s2.92-6.72 6.64-6.72c2.02 0 3.48.8 4.56 1.82l1.78-1.8c-1.5-1.45-3.5-2.56-6.34-2.56-5.1 0-9.4 4.16-9.4 9.26 0 5.1 4.3 9.26 9.4 9.26 2.76 0 4.84-.9 6.48-2.62 1.68-1.68 2.2-4.04 2.2-5.94 0-.6-.04-1.14-.14-1.6h-8.54zm64.12 1.96c-.5-1.34-2.02-3.8-5.14-3.8-3.1 0-5.66 2.44-5.66 5.94 0 3.34 2.54 5.94 5.96 5.94 2.76 0 4.34-1.68 5-2.66l-2.04-1.36c-.68 1-1.6 1.66-2.96 1.66-1.34 0-2.3-.62-2.92-1.82l8.04-3.34-.28-.56zm-8.2 2c-.06-2.3 1.78-3.48 3.1-3.48.92 0 1.7.46 1.96 1.12l-5.06 2.36zm-6.54 5.84h2.76V22.91h-2.76v19.48zm-4.52-11.4h-.1c-.62-.74-1.8-1.4-3.3-1.4-3.14 0-6.02 2.76-6.02 6.3 0 3.52 2.88 6.28 6.02 6.28 1.5 0 2.68-.66 3.3-1.42h.1v.88c0 2.4-1.28 3.68-3.34 3.68-1.68 0-2.72-1.2-3.14-2.22l-2.38.98c.68 1.66 2.5 3.7 5.52 3.7 3.2 0 5.9-1.88 5.9-6.46V29.08h-2.56v1.08zm-3.16 9.2c-1.72 0-3.16-1.44-3.16-3.42 0-2 1.44-3.44 3.16-3.44 1.7 0 3.04 1.44 3.04 3.44 0 1.98-1.34 3.42-3.04 3.42zm32.94-17.36H168v19.48h2.76V33.54l2.4 2.36 5.38-5.34v11.84h2.76V22.91h-2.76v11.4l-6.5 6.64-4.24-4.24V22.91z' fill='%23fff'/%3E%3Cpath fill='%2300DFFF' d='M71.37 35.53l-14-8.07 14-8.09z'/%3E%3Cpath fill='%2300F076' d='M52.74 47.5V19.36l14.63 8.45z'/%3E%3Cpath fill='%23FFD900' d='M52.74 19.36L71.37 35.5l-5.02 5.02z'/%3E%3Cpath fill='%23FF3C4A' d='M52.74 47.5l13.61-6.98 5.02 5.01z'/%3E%3C/g%3E%3C/svg%3E";
                      }}
                    />
                  </motion.a>

                  {/* App Store download button - Coming Soon */}
                  <div
                    className="h-9 md:h-10 lg:h-12 w-32 md:w-36 lg:w-40 flex items-center justify-center opacity-60 cursor-not-allowed relative transition-transform hover:scale-102"
                    aria-label="Freedom Ghana app coming soon to Apple App Store"
                  >
                    <OptimizedImage
                      src="/images/app-store-badge.png"
                      alt="Coming Soon to App Store"
                      className="h-full w-full object-contain grayscale"
                      imageKey="appStore"
                      loading="eager"
                      fetchPriority="high"
                      fallbackSrc="/api/placeholder/140/42"
                    />
                    <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full transform translate-x-1 -translate-y-1">
                      Soon
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile experience highlights */}
              <section 
                className="mt-6 md:mt-8 lg:mt-10 grid grid-cols-3 gap-2 md:gap-4"
                aria-label="Key features of Freedom Ghana service"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mb-2" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium">Fast Pickup</span>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mb-2" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium">Fair Prices</span>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mb-2" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium">Reliable</span>
                </div>
              </section>
            </div>
            
            {/* Right side - Image Carousel with optimized loading */}
            <aside 
              className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
              aria-label="Freedom Ghana service images"
            >
              <div className="relative w-full max-w-sm md:max-w-md lg:max-w-none">
                {/* Glowing background effect */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 md:w-52 lg:w-64 h-40 md:h-52 lg:h-64 bg-yellow-400 opacity-30 rounded-full blur-3xl" aria-hidden="true"></div>
                
                {/* Image carousel */}
                <div className="relative z-10">
                  <div className="relative">
                    {/* Main large image */}
                    <figure className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <OptimizedImage
                        src="/images/freedom-DriverXRider.jpg"
                        alt="Professional Freedom Ghana motorcycle rider providing safe transport to customer in Accra"
                        className="w-full object-cover h-56 sm:h-64 md:h-72 lg:h-80 rounded-2xl"
                        imageKey="main"
                        loading="eager"
                        fetchPriority="high"
                        fallbackSrc="/api/placeholder/800/400"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" aria-hidden="true"></div>
                      <figcaption className="absolute bottom-0 left-0 p-3 md:p-4 lg:p-5">
                        <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold">Freedom Riders</h3>
                        <p className="text-white/80 text-xs md:text-sm">Professional and reliable transport in Ghana</p>
                      </figcaption>
                    </figure>
                    
                    {/* Supporting images */}
                    <div className="hidden md:grid md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
                      <figure className="overflow-hidden rounded-xl shadow-xl h-36 lg:h-40 relative">
                        <OptimizedImage
                          src="/images/Freedom-Rider2.jpg"
                          alt="Freedom Ghana rider using mobile app for ride requests and navigation"
                          className="w-full h-full object-cover object-center rounded-xl"
                          imageKey="rider2"
                          loading="lazy"
                          fallbackSrc="/api/placeholder/400/200"
                        />
                      </figure>
                      
                      <figure className="overflow-hidden rounded-xl shadow-xl h-36 lg:h-40 relative">
                        <OptimizedImage
                          src="/images/Freedom-Rider.jpg"
                          alt="Freedom Ghana delivery rider ready for package and food delivery service"
                          className="w-full h-full object-cover object-center rounded-xl"
                          imageKey="rider"
                          loading="lazy"
                          fallbackSrc="/api/placeholder/400/200"
                        />
                      </figure>
                    </div>
                  </div>
                  
                  {/* Orange helmet icon overlay */}
                  <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 lg:-top-5 lg:-right-5 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M8 21h8"></path>
                      <path d="M12 3v4"></path>
                      <path d="M12 7c-3 0-6 2-6 5s3 5 6 5 6-2 6-5-3-5-6-5z"></path>
                      <path d="M8 21a2 2 0 0 1-2-2v-2h12v2a2 2 0 0 1-2 2"></path>
                    </svg>
                  </div>
                </div>
                
                {/* Feature callouts */}
                <div 
                  className="absolute -right-3 md:-right-6 lg:-right-8 top-1/4 bg-white rounded-lg md:rounded-xl p-2 md:p-3 shadow-lg z-20 max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px]"
                  role="complementary"
                  aria-label="Safety feature highlight"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" aria-hidden="true">
                        <path d="M12 2L3 7v9c0 4.97 8 6 9 6 1 0 9-1.03 9-6V7l-9-5z"></path>
                        <path d="M12 16c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium text-xs md:text-sm">Safe Riders</p>
                      <p className="text-gray-500 text-xs">Professional & trained</p>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="absolute -left-3 md:-left-6 lg:-left-8 bottom-1/4 bg-white rounded-lg md:rounded-xl p-2 md:p-3 shadow-lg z-20 max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px]"
                  role="complementary"
                  aria-label="Delivery service feature highlight"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" aria-hidden="true">
                        <path d="M9 14l6-6"></path>
                        <path d="M14 9V4"></path>
                        <path d="M14 9H9"></path>
                        <path d="M17 17l-2.5 2.5c-.83.83-2.17.83-3 0 0 0 -8.5-8.5-8.5-8.5"></path>
                        <path d="M16 16l2-2"></path>
                        <path d="M18 22c2.2 0 4-1.8 4-4 0-1.03-.39-1.96-1.03-2.67"></path>
                        <path d="M5.2 17.58c-.51-.55-.82-1.26-.86-2"></path>
                        <path d="M2 12c0-5 5-8 9-8"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium text-xs md:text-sm">Quick Delivery</p>
                      <p className="text-gray-500 text-xs">Get items delivered fast</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          
          {/* Social proof section */}
          <section 
            className="mt-8 md:mt-12 lg:mt-16 relative z-10"
            aria-label="Freedom Ghana user statistics and social proof"
          >
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Freedom Ghana",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "1250"
                },
                "serviceArea": "Ghana"
              })}
            </script>

            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-4 md:py-5 lg:py-6 rounded-xl md:rounded-2xl border border-white/10 w-full">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-6 lg:gap-8">
                  <div className="text-center md:text-left">
                    <h2 className="text-white text-base md:text-lg font-medium mb-1">Join thousands of Ghanaians who trust Freedom</h2>
                    <p className="text-white/70 text-xs md:text-sm">Easy and reliable transportation at your fingertips</p>
                  </div>
                  
                  <div className="flex gap-4 md:gap-6 lg:gap-8" role="group" aria-label="Freedom Ghana service statistics">
                    <div className="flex flex-col items-center">
                      <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white" aria-label="15,000 plus daily rides">15K+</span>
                      <span className="text-white/70 text-xs">Daily Rides</span>
                    </div>
                    
                    <div className="w-px h-8 md:h-10 lg:h-12 bg-white/20" aria-hidden="true"></div>
                    
                    <div className="flex flex-col items-center">
                      <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white" aria-label="600 plus active riders">600+</span>
                      <span className="text-white/70 text-xs">Riders</span>
                    </div>
                    
                    <div className="w-px h-8 md:h-10 lg:h-12 bg-white/20" aria-hidden="true"></div>
                    
                    <div className="flex flex-col items-center">
                      <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white" aria-label="4.8 out of 5 star rating">4.8</span>
                      <span className="text-white/70 text-xs">Star Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>
    </>
  );
};

export default HeroSection;