import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { trackEvent } from '../../utils/analytics';

const Navbar = () => {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    
    // Track the click event
    trackEvent('Navigation', 'Click', `${sectionId} Link`);
    
    // Handle service-specific navigation
    if (sectionId === 'ride-service' || sectionId === 'delivery-service') {
      const serviceType = sectionId === 'ride-service' ? 'ride' : 'delivery';
      
      // Dispatch custom event to switch service tab
      window.dispatchEvent(new CustomEvent('switchService', { 
        detail: { serviceType } 
      }));
      
      // Navigate to how-it-works section
      const section = document.getElementById('how-it-works');
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      className="fixed w-full z-50 bg-opacity-90 py-4 px-6 flex justify-between items-center shadow-md" 
      style={{ backgroundColor: 'rgba(255, 255, 255)' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" className="flex items-center" onClick={() => trackEvent('Navigation', 'Click', 'Logo')}>
          <img 
            src="/images/FreedomLogo.svg" 
            alt="Freedom Logo" 
            className="h-10 w-auto mr-2"
          />
          <div className="text-2xl font-bold" style={{ color: '#FF6B00' }}>Freedom</div>
        </a>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
        <a 
          href="#ride-service" 
          className="px-3 py-2 font-medium transition-colors duration-200 hover:text-orange-600"
          style={{ color: '#FF6B00' }}
          onClick={(e) => scrollToSection('ride-service', e)}
        >
          Ride Service
        </a>
        <a 
          href="#delivery-service" 
          className="px-3 py-2 font-medium transition-colors duration-200 hover:text-orange-600"
          style={{ color: '#FF6B00' }}
          onClick={(e) => scrollToSection('delivery-service', e)}
        >
          Delivery Service
        </a>
        <a 
          href="#about" 
          className="px-3 py-2 font-medium transition-colors duration-200 hover:text-orange-600"
          style={{ color: '#FF6B00' }}
          onClick={(e) => scrollToSection('about', e)}
        >
          About Us
        </a>
        <a 
          href="#contact" 
          className="px-3 py-2 font-medium transition-colors duration-200 hover:text-orange-600"
          style={{ color: '#FF6B00' }}
          onClick={(e) => scrollToSection('contact', e)}
        >
          Contact Us
        </a>
      </div>
      
      <div className="hidden md:block">
        <a 
          href="#download" 
          className="px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors duration-200"
          onClick={() => trackEvent('Navigation', 'Click', 'Download App Button')}
        >
          Download App
        </a>
      </div>
      
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-500 hover:text-orange-500 focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
          <div className="px-4 py-3">
            <a 
              href="#ride-service" 
              className="block py-2 font-medium hover:text-orange-600"
              style={{ color: '#FF6B00' }}
              onClick={(e) => scrollToSection('ride-service', e)}
            >
              Ride Service
            </a>
            <a 
              href="#delivery-service" 
              className="block py-2 font-medium hover:text-orange-600"
              style={{ color: '#FF6B00' }}
              onClick={(e) => scrollToSection('delivery-service', e)}
            >
              Delivery Service
            </a>
            <a 
              href="#about" 
              className="block py-2 font-medium hover:text-orange-600"
              style={{ color: '#FF6B00' }}
              onClick={(e) => scrollToSection('about', e)}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="block py-2 font-medium hover:text-orange-600"
              style={{ color: '#FF6B00' }}
              onClick={(e) => scrollToSection('contact', e)}
            >
              Contact Us
            </a>
            <a 
              href="#download" 
              className="block py-2 mt-2 text-center rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors duration-200"
              onClick={() => {
                trackEvent('Navigation', 'Click', 'Download App Button Mobile');
                setMobileMenuOpen(false);
              }}
            >
              Download App
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;