import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { trackEvent } from "../../utils/analytics";

const HeroSection = () => {
  // Track page view on component mount
  useEffect(() => {
    trackEvent("Page", "View", "Hero Section");
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

  return (
    <motion.header
      className="w-full py-8 md:py-16 lg:py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background gradient with modern mesh gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 z-0">
        {/* Mesh gradient overlay - simplified for better performance */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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
      <div className="absolute top-1/4 left-1/4 w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-yellow-300 opacity-20 rounded-full blur-xl"></div>
      
      {/* Navigation Menu - Added at the top */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex justify-end py-4">
          <motion.a
            href="#about"
            onClick={scrollToAbout}
            className="text-white text-lg font-medium transition-all hover:text-yellow-100 relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-100 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        </div>
      </div>
      
      {/* Reduced number of animated elements for better performance */}
      <motion.div 
        className="absolute top-1/3 right-1/4 w-6 h-6 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full border-2 border-white opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          borderRadius: ["50%", "30%", "50%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
          {/* Left side - content - improved spacing and scaling */}
          <motion.div 
            className="w-full lg:w-1/2 mt-4 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="backdrop-blur-sm bg-white/10 p-5 md:p-7 lg:p-8 rounded-2xl md:rounded-3xl border border-white/20 shadow-lg">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-5 text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Your Freedom <br />
                <span className="text-yellow-100">to Move</span>
              </motion.h1>
              
              <motion.p 
                className="text-base md:text-lg lg:text-xl font-light mb-5 md:mb-6 lg:mb-7 text-white text-opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                Fast, Affordable, Reliable rides in Ghana
              </motion.p>
              
              <motion.div 
                className="flex flex-row gap-3 md:gap-4 justify-center sm:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                {/* Download buttons with more responsive design */}
                <motion.a
                  href="#"
                  className="flex items-center transition-transform"
                  onClick={() => trackEvent("Download", "Click", "Google Play - Hero")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <img 
                    src="/images/google-play-badge.png" 
                    alt="Get it on Google Play" 
                    className="h-9 md:h-10 lg:h-12"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/api/placeholder/140/42";
                    }}
                  />
                </motion.a>

                <motion.a
                  href="#"
                  className="flex items-center transition-transform"
                  onClick={() => trackEvent("Download", "Click", "App Store - Hero")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <img 
                    src="/images/app-store-badge.png" 
                    alt="Download on the App Store" 
                    className="h-9 md:h-10 lg:h-12"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/api/placeholder/140/42";
                    }}
                  />
                </motion.a>
              </motion.div>
            </div>

            {/* Mobile experience highlights - Better scaling and spacing */}
            <motion.div 
              className="mt-6 md:mt-8 lg:mt-10 grid grid-cols-3 gap-2 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <span className="text-white text-xs md:text-sm font-medium">Fast Pickup</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <span className="text-white text-xs md:text-sm font-medium">Fair Prices</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <span className="text-white text-xs md:text-sm font-medium">Reliable</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Image Carousel - Improved responsive behavior */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-none">
              {/* Glowing background effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 md:w-52 lg:w-64 h-40 md:h-52 lg:h-64 bg-yellow-400 opacity-30 rounded-full blur-3xl"></div>
              
              {/* Image carousel with rider images - improved responsive layout */}
              <motion.div
                className="relative z-10"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative">
                  {/* Main large image - Rider with customer - Always visible */}
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="relative">
                      <img 
                        src="/images/freedom-DriverXRider.jpg" 
                        alt="Freedom motorcycle rider with passenger"
                        className="w-full object-cover h-56 sm:h-64 md:h-72 lg:h-80"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/api/placeholder/800/400";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-3 md:p-4 lg:p-5">
                        <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold">Freedom Riders</h3>
                        <p className="text-white/80 text-xs md:text-sm">Professional and reliable transport in Ghana</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Supporting images - Hidden on mobile, visible on tablet and up */}
                  <div className="hidden md:grid md:grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4">
                    {/* Supporting image 1 - Rider checking app */}
                    <div className="overflow-hidden rounded-xl shadow-xl h-36 lg:h-40">
                      <img 
                        src="/images/Freedom-Rider2.jpg" 
                        alt="Freedom rider checking the app"
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/api/placeholder/400/200";
                        }}
                      />
                    </div>
                    
                    {/* Supporting image 2 - Delivery rider */}
                    <div className="overflow-hidden rounded-xl shadow-xl h-36 lg:h-40">
                      <img 
                        src="/images/Freedom-Rider.jpg" 
                        alt="Freedom delivery rider"
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/api/placeholder/400/200";
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Orange helmet icon overlay - Better responsive sizing */}
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 lg:-top-5 lg:-right-5 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 21h8"></path>
                    <path d="M12 3v4"></path>
                    <path d="M12 7c-3 0-6 2-6 5s3 5 6 5 6-2 6-5-3-5-6-5z"></path>
                    <path d="M8 21a2 2 0 0 1-2-2v-2h12v2a2 2 0 0 1-2 2"></path>
                  </svg>
                </div>
              </motion.div>
              
              {/* Feature callouts with better positioning and sizing for all screens */}
              <motion.div 
                className="absolute -right-3 md:-right-6 lg:-right-8 top-1/4 bg-white rounded-lg md:rounded-xl p-2 md:p-3 shadow-lg z-20 max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2">
                      <path d="M12 2L3 7v9c0 4.97 8 6 9 6 1 0 9-1.03 9-6V7l-9-5z"></path>
                      <path d="M12 16c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium text-xs md:text-sm">Safe Riders</p>
                    <p className="text-gray-500 text-xs">Professional & trained</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Second feature callout with better positioning */}
              <motion.div 
                className="absolute -left-3 md:-left-6 lg:-left-8 bottom-1/4 bg-white rounded-lg md:rounded-xl p-2 md:p-3 shadow-lg z-20 max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2">
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
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Social proof section - Better mobile layout */}
        <motion.div 
          className="mt-8 md:mt-12 lg:mt-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
        >
          <div className="flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-4 md:py-5 lg:py-6 rounded-xl md:rounded-2xl border border-white/10 w-full">
              <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-6 lg:gap-8">
                <div className="text-center md:text-left">
                  <p className="text-white text-base md:text-lg font-medium mb-1">Join thousands of Ghanaians who trust Freedom</p>
                  <p className="text-white/70 text-xs md:text-sm">Easy and reliable transportation at your fingertips</p>
                </div>
                
                <div className="flex gap-4 md:gap-6 lg:gap-8">
                  <div className="flex flex-col items-center">
                    <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white">15K+</span>
                    <span className="text-white/70 text-xs">Daily Rides</span>
                  </div>
                  
                  <div className="w-px h-8 md:h-10 lg:h-12 bg-white/20"></div>
                  
                  <div className="flex flex-col items-center">
                    <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white">600+</span>
                    <span className="text-white/70 text-xs">Riders</span>
                  </div>
                  
                  <div className="w-px h-8 md:h-10 lg:h-12 bg-white/20"></div>
                  
                  <div className="flex flex-col items-center">
                    <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white">4.8</span>
                    <span className="text-white/70 text-xs">Star Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default HeroSection;