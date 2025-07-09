import React, { useEffect, useState } from "react";
import { trackEvent, trackCTAClick, trackSectionView } from "../../utils/analytics";

const HeroSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState({
    main: false,
    rider2: false,
    rider: false,
    googlePlay: false,
    appStore: false
  });

  // Track page view on component mount
  useEffect(() => {
    const cleanup = trackSectionView("Hero Section");
    trackEvent("Page", "View", "Hero Section");
    
    // Preload critical images with proper error handling
    const preloadImages = [
      "/images/freedom-DriverXRider.jpg",
      "/images/google-play-badge.png", 
      "/images/app-store-badge.png"
    ];

    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.loading = "eager";
    });

    return cleanup;
  }, []);

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

  // Handle image load events
  const handleImageLoad = (imageKey) => {
    setImagesLoaded(prev => ({ ...prev, [imageKey]: true }));
  };

  // Enhanced CTA click handlers with conversion tracking
  const handleAppDownload = (platform, source = "Hero") => {
    trackCTAClick(`Download App ${platform}`, source, "app-download");
    trackEvent("Conversion", "App Download Intent", `${platform} - ${source}`);
    
    // In a real app, redirect to actual store URLs
    const storeUrls = {
      'Google Play': 'https://play.google.com/store/apps/details?id=com.freedomghana.app',
      'App Store': 'https://apps.apple.com/app/freedom-ghana/id123456789'
    };
    
    // For now, just log - replace with actual navigation
    console.log(`Navigate to ${platform}: ${storeUrls[platform]}`);
  };

  return (
    <header
      className="w-full py-8 md:py-16 lg:py-24 relative overflow-hidden"
      // SEO: Add semantic HTML structure
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
        {/* Mesh gradient overlay - simplified for better performance */}
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

      {/* Decorative elements - responsive sizing with better positioning */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-white opacity-10 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-1/4 w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-yellow-300 opacity-20 rounded-full blur-xl" aria-hidden="true"></div>
      
      {/* Navigation Menu - Added at the top */}
      <nav className="container mx-auto px-4 relative z-20" aria-label="Quick navigation">
        <div className="flex justify-end py-4">
          <a
            href="#about"
            onClick={scrollToAbout}
            className="text-white text-lg font-medium transition-all hover:text-yellow-100 relative group"
            aria-label="Learn more about Freedom Ghana"
          >
            {/* About Us */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-100 transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      
      {/* Simple decorative element without animation */}
      <div 
        className="absolute top-1/3 right-1/4 w-6 h-6 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full border-2 border-white opacity-20"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
          {/* Left side - content - improved spacing and scaling */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <div className="backdrop-blur-sm bg-white/10 p-5 md:p-7 lg:p-8 rounded-2xl md:rounded-3xl border border-white/20 shadow-lg">
              {/* SEO: Main heading with proper hierarchy */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-5 text-white leading-tight">
                Your Freedom <br />
                <span className="text-yellow-100">to Move</span>
              </h1>
              
              {/* SEO: Descriptive subtitle with keywords */}
              <p className="text-base md:text-lg lg:text-xl font-light mb-5 md:mb-6 lg:mb-7 text-white text-opacity-90">
                Fast, Affordable, Reliable motorcycle taxi and delivery rides across Ghana
              </p>
              
              {/* SEO: App download CTAs with proper aria labels */}
              <div 
                className="flex flex-row gap-3 md:gap-4 justify-center sm:justify-start"
                role="group"
                aria-label="Download Freedom Ghana mobile app"
              >
                {/* Google Play download button */}
                <button
                  onClick={() => handleAppDownload('Google Play', 'Hero')}
                  className="flex items-center transition-transform hover:scale-105 active:scale-98 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
                  aria-label="Download Freedom Ghana app from Google Play Store"
                >
                  <div className="relative">
                    {!imagesLoaded.googlePlay && (
                      <div className="h-9 md:h-10 lg:h-12 w-32 md:w-36 lg:w-40 bg-gray-300 rounded animate-pulse" aria-hidden="true"></div>
                    )}
                    <img 
                      src="/images/google-play-badge.png" 
                      alt="Get Freedom Ghana on Google Play" 
                      className={`h-9 md:h-10 lg:h-12 transition-opacity duration-300 ${imagesLoaded.googlePlay ? 'opacity-100' : 'opacity-0 absolute top-0'}`}
                      loading="eager"
                      fetchPriority="high"
                      onLoad={() => handleImageLoad('googlePlay')}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/api/placeholder/140/42";
                        e.target.alt = "Download on Google Play";
                        handleImageLoad('googlePlay');
                      }}
                    />
                  </div>
                </button>

                {/* App Store download button */}
                <button
                  onClick={() => handleAppDownload('App Store', 'Hero')}
                  className="flex items-center transition-transform hover:scale-105 active:scale-98 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
                  aria-label="Download Freedom Ghana app from Apple App Store"
                >
                  <div className="relative">
                    {!imagesLoaded.appStore && (
                      <div className="h-9 md:h-10 lg:h-12 w-32 md:w-36 lg:w-40 bg-gray-300 rounded animate-pulse" aria-hidden="true"></div>
                    )}
                    <img 
                      src="/images/app-store-badge.png" 
                      alt="Download Freedom Ghana on the App Store" 
                      className={`h-9 md:h-10 lg:h-12 transition-opacity duration-300 ${imagesLoaded.appStore ? 'opacity-100' : 'opacity-0 absolute top-0'}`}
                      loading="eager"
                      fetchPriority="high"
                      onLoad={() => handleImageLoad('appStore')}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/api/placeholder/140/42";
                        e.target.alt = "Download on the App Store";
                        handleImageLoad('appStore');
                      }}
                    />
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile experience highlights - Better scaling and spacing with semantic HTML */}
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
          
          {/* Right side - Image Carousel - Improved responsive behavior with optimized loading */}
          <aside 
            className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
            aria-label="Freedom Ghana service images"
          >
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-none">
              {/* Glowing background effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 md:w-52 lg:w-64 h-40 md:h-52 lg:h-64 bg-yellow-400 opacity-30 rounded-full blur-3xl" aria-hidden="true"></div>
              
              {/* Image carousel with rider images - improved responsive layout */}
              <div className="relative z-10">
                <div className="relative">
                  {/* Main large image - Rider with customer - Always visible with skeleton loading */}
                  <figure className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="relative">
                      {!imagesLoaded.main && (
                        <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 bg-gray-300 animate-pulse rounded-2xl" aria-hidden="true"></div>
                      )}
                      <img 
                        src="/images/freedom-DriverXRider.jpg" 
                        alt="Professional Freedom Ghana motorcycle rider providing safe transport to customer in Accra"
                        className={`w-full object-cover h-56 sm:h-64 md:h-72 lg:h-80 transition-opacity duration-500 ${imagesLoaded.main ? 'opacity-100' : 'opacity-0 absolute top-0'}`}
                        loading="eager"
                        fetchPriority="high"
                        onLoad={() => handleImageLoad('main')}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/api/placeholder/800/400";
                          e.target.alt = "Freedom Ghana motorcycle taxi service";
                          handleImageLoad('main');
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true"></div>
                      <figcaption className="absolute bottom-0 left-0 p-3 md:p-4 lg:p-5">
                        <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold">Freedom Riders</h3>
                        <p className="text-white/80 text-xs md:text-sm">Professional and reliable transport in Ghana</p>
                      </figcaption>
                    </div>
                  </figure>
                  
                  {/* Supporting images - Hidden on mobile, visible on tablet and up with lazy loading */}
                  <div className="hidden md:grid md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
                    {/* Supporting image 1 - Rider checking app */}
                    <figure className="overflow-hidden rounded-xl shadow-xl h-36 lg:h-40 relative">
                      {!imagesLoaded.rider2 && (
                        <div className="w-full h-full bg-gray-300 animate-pulse rounded-xl" aria-hidden="true"></div>
                      )}
                      <img 
                        src="/images/Freedom-Rider2.jpg" 
                        alt="Freedom Ghana rider using mobile app for ride requests and navigation"
                        className={`w-full h-full object-cover object-center transition-opacity duration-500 ${imagesLoaded.rider2 ? 'opacity-100' : 'opacity-0 absolute top-0'}`}
                        loading="lazy"
                        onLoad={() => handleImageLoad('rider2')}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/api/placeholder/400/200";
                          e.target.alt = "Freedom Ghana mobile app interface";
                          handleImageLoad('rider2');
                        }}
                      />
                    </figure>
                    
                    {/* Supporting image 2 - Delivery rider */}
                    <figure className="overflow-hidden rounded-xl shadow-xl h-36 lg:h-40 relative">
                      {!imagesLoaded.rider && (
                        <div className="w-full h-full bg-gray-300 animate-pulse rounded-xl" aria-hidden="true"></div>
                      )}
                      <img 
                        src="/images/Freedom-Rider.jpg" 
                        alt="Freedom Ghana delivery rider ready for package and food delivery service"
                        className={`w-full h-full object-cover object-center transition-opacity duration-500 ${imagesLoaded.rider ? 'opacity-100' : 'opacity-0 absolute top-0'}`}
                        loading="lazy"
                        onLoad={() => handleImageLoad('rider')}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/api/placeholder/400/200";
                          e.target.alt = "Freedom Ghana delivery service";
                          handleImageLoad('rider');
                        }}
                      />
                    </figure>
                  </div>
                </div>
                
                {/* Orange helmet icon overlay - Better responsive sizing */}
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 lg:-top-5 lg:-right-5 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M8 21h8"></path>
                    <path d="M12 3v4"></path>
                    <path d="M12 7c-3 0-6 2-6 5s3 5 6 5 6-2 6-5-3-5-6-5z"></path>
                    <path d="M8 21a2 2 0 0 1-2-2v-2h12v2a2 2 0 0 1-2 2"></path>
                  </svg>
                </div>
              </div>
              
              {/* Feature callouts with better positioning and sizing for all screens */}
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
              
              {/* Second feature callout with better positioning */}
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
        
        {/* Social proof section - Better mobile layout with structured data */}
        <section 
          className="mt-8 md:mt-12 lg:mt-16 relative z-10"
          aria-label="Freedom Ghana user statistics and social proof"
        >
          {/* Structured data for social proof stats */}
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
  );
};

export default HeroSection;