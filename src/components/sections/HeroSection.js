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
      className="w-full py-12 md:py-20 lg:py-32 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background gradient with modern mesh gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 z-0">
        {/* Mesh gradient overlay */}
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

      {/* Decorative elements - Reduced size for mobile */}
      <div className="absolute top-20 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/3 w-16 md:w-32 h-16 md:h-32 bg-yellow-300 opacity-20 rounded-full blur-xl"></div>
      
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
            {/* About */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-100 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        </div>
      </div>
      
      {/* Animated shape 1 - Reduced size for mobile */}
      <motion.div 
        className="absolute top-1/3 right-1/4 w-8 md:w-16 h-8 md:h-16 rounded-full border-2 border-white opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
          borderRadius: ["50%", "30%", "50%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
      
      {/* Animated shape 2 - Reduced size for mobile */}
      <motion.div 
        className="absolute bottom-1/4 left-1/5 w-6 md:w-10 h-6 md:h-10"
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                fill="white" fillOpacity="0.5" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-8 lg:gap-16">
          {/* Left side - content */}
          <motion.div 
            className="w-full lg:w-1/2 mt-6 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="backdrop-blur-sm bg-white/10 p-6 md:p-8 lg:p-10 rounded-3xl border border-white/20 shadow-lg">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Your Freedom <br />
                <span className="text-yellow-100">to Move</span>
              </motion.h1>
              
              <motion.p 
                className="text-base md:text-lg lg:text-xl font-light mb-6 md:mb-8 text-white text-opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                Fast, Affordable, Reliable rides in Ghana
              </motion.p>
              
              <motion.div 
                className="flex flex-row gap-4 justify-center sm:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                {/* Download buttons with modern design - Made side by side for mobile */}
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
                    className="h-10 md:h-12"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/api/placeholder/160/48";
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
                    className="h-10 md:h-12"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/api/placeholder/160/48";
                    }}
                  />
                </motion.a>
              </motion.div>
            </div>

            {/* Mobile experience highlights - Improved for small screens */}
            <motion.div 
              className="mt-8 md:mt-12 grid grid-cols-3 gap-2 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 md:mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <span className="text-white text-xs md:text-sm font-medium">Fast Pickup</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 md:mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <span className="text-white text-xs md:text-sm font-medium">Fair Prices</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 md:mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <span className="text-white text-xs md:text-sm font-medium">Reliable</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Rest of the component remains unchanged */}
          {/* Right side - Image Carousel */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {/* Content preserved from original */}
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Glowing background effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-yellow-400 opacity-30 rounded-full blur-3xl"></div>
              
              {/* Image carousel with rider images */}
              <motion.div
                className="relative z-10"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 relative">
                  {/* Main large image - Rider with customer */}
                  <div className="col-span-1 lg:col-span-2">
                    <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
                      <motion.div
                        initial={{ scale: 1.05 }}
                        animate={{ scale: [1.05, 1, 1.05] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="relative"
                      >
                        <img 
                          src="/images/freedom-DriverXRider.jpg" 
                          alt="Freedom motorcycle rider with passenger"
                          className="w-full object-cover aspect-[4/3] md:aspect-auto"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500' preserveAspectRatio='xMidYMid slice'%3E%3Crect width='800' height='500' fill='%23f5f5f5'/%3E%3Ctext x='400' y='250' font-family='Arial' font-size='20' text-anchor='middle' fill='%23aaa'%3ETwo Freedom riders with orange helmets%3C/text%3E%3C/svg%3E";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-3 md:p-4 lg:p-6">
                          <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold">Freedom Riders</h3>
                          <p className="text-white/80 text-xs md:text-sm lg:text-base">Professional and reliable transport in Ghana</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Supporting images in a row for mobile */}
                  <div className="col-span-1">
                    <div className="overflow-hidden rounded-xl md:rounded-2xl shadow-xl h-32 sm:h-36 md:h-40 lg:h-48">
                      <img 
                        src="/images/Freedom-Rider2.jpg" 
                        alt="Freedom rider checking the app"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' preserveAspectRatio='xMidYMid slice'%3E%3Crect width='400' height='300' fill='%23f5f5f5'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='20' text-anchor='middle' fill='%23aaa'%3ERider with smartphone app%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Supporting image 2 - Delivery rider */}
                  <div className="col-span-1">
                    <div className="overflow-hidden rounded-xl md:rounded-2xl shadow-xl h-32 sm:h-36 md:h-40 lg:h-48">
                      <img 
                        src="/images/Freedom-Rider.jpg" 
                        alt="Freedom delivery rider"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' preserveAspectRatio='xMidYMid slice'%3E%3Crect width='400' height='300' fill='%23f5f5f5'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='20' text-anchor='middle' fill='%23aaa'%3EDelivery rider with orange bag%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Orange helmet icon overlay - Adjusted for better mobile visibility */}
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-12 h-12 md:w-16 md:h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 21h8"></path>
                    <path d="M12 3v4"></path>
                    <path d="M12 7c-3 0-6 2-6 5s3 5 6 5 6-2 6-5-3-5-6-5z"></path>
                    <path d="M8 21a2 2 0 0 1-2-2v-2h12v2a2 2 0 0 1-2 2"></path>
                  </svg>
                </div>
              </motion.div>
              
              {/* Feature callouts preserved */}
              <motion.div 
                className="absolute -right-4 md:-right-8 top-1/4 bg-white rounded-lg md:rounded-xl p-2 md:p-3 shadow-lg z-20 max-w-[160px] md:max-w-[200px]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2">
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
              
              {/* Second feature callout preserved */}
              <motion.div 
                className="absolute -left-4 md:-left-8 bottom-1/4 bg-white rounded-lg md:rounded-xl p-2 md:p-3 shadow-lg z-20 max-w-[160px] md:max-w-[200px]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2">
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
        
        {/* Social proof section - Optimized for mobile */}
        <motion.div 
          className="mt-10 md:mt-16 px-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
        >
          <div className="flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-5 md:py-6 rounded-xl md:rounded-2xl border border-white/10 w-full">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                <div className="text-center md:text-left">
                  <p className="text-white text-base md:text-lg font-medium mb-1">Join thousands of Ghanaians who trust Freedom</p>
                  <p className="text-white/70 text-xs md:text-sm">Easy and reliable transportation at your fingertips</p>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-xl md:text-2xl lg:text-3xl font-bold text-white">15K+</span>
                    <span className="text-white/70 text-xs">Daily Rides</span>
                  </div>
                  
                  <div className="w-px h-10 md:h-12 bg-white/20"></div>
                  
                  <div className="flex flex-col items-center">
                    <span className="text-xl md:text-2xl lg:text-3xl font-bold text-white">600+</span>
                    <span className="text-white/70 text-xs">Riders</span>
                  </div>
                  
                  <div className="w-px h-10 md:h-12 bg-white/20"></div>
                  
                  <div className="flex flex-col items-center">
                    <span className="text-xl md:text-2xl lg:text-3xl font-bold text-white">4.8</span>
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