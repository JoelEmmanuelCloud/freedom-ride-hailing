import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, PhoneCall, Mail, MapPin } from 'lucide-react';

const Footer = ({ onNavigateToPage }) => {
  const currentYear = new Date().getFullYear();
  
  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    
    // Track the click event if analytics is available
    if (window.trackEvent) {
      window.trackEvent('Navigation', 'Click', `${sectionId} Section - Footer`);
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Function to handle navigation to legal pages
  const handleLegalPageNavigation = (page, e) => {
    e.preventDefault();
    
    // Track the click event if analytics is available
    if (window.trackEvent) {
      window.trackEvent('Navigation', 'Click', `${page} Page - Footer`);
    }
    
    // If onNavigateToPage function is provided, use it
    if (onNavigateToPage) {
      onNavigateToPage(page);
    } else {
      // Fallback: log to console for development
      console.log(`Navigate to ${page} page`);
    }
  };

  // Handle external link clicks with tracking
  const handleExternalLink = (platform, url) => {
    if (window.trackEvent) {
      window.trackEvent('Social Media', 'Click', platform);
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <footer className="py-12 px-6 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/images/FreedomLogo.svg" 
                alt="Freedom Logo" 
                className="h-8 w-auto mr-2"
                onError={(e) => {
                  // Hide logo if it fails to load
                  e.target.style.display = 'none';
                }}
              />
              <h3 className="text-xl font-bold text-orange-500">Freedom</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your reliable ride-hailing and delivery service in Ghana. Fast, safe, and affordable transportation at your fingertips.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <button
                onClick={() => handleExternalLink('Facebook', 'https://www.facebook.com/profile.php?id=61575498650961')}
                className="text-gray-300 hover:text-white hover:bg-orange-500 p-2 rounded-full transition-all duration-200"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} />
              </button>
              <button
                onClick={() => handleExternalLink('Twitter/X', 'https://x.com/Freedomgh55/status/1911245633924575559')}
                className="text-gray-300 hover:text-white hover:bg-orange-500 p-2 rounded-full transition-all duration-200"
                aria-label="Visit our X (Twitter) page"
              >
                <Twitter size={20} />
              </button>
              <button
                onClick={() => handleExternalLink('Instagram', 'https://www.instagram.com/freedomride_ghana')}
                className="text-gray-300 hover:text-white hover:bg-orange-500 p-2 rounded-full transition-all duration-200"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={20} />
              </button>
              <button
                onClick={() => handleExternalLink('LinkedIn', 'https://www.linkedin.com/in/freedom-ride-85bb5b352')}
                className="text-gray-300 hover:text-white hover:bg-orange-500 p-2 rounded-full transition-all duration-200"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin size={20} />
              </button>
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => scrollToSection('about', e)} 
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => scrollToSection('how-it-works', e)} 
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 block"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal & Safety Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Legal & Safety</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#safety" 
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 block"
                  onClick={(e) => handleLegalPageNavigation('safety', e)}
                >
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a 
                  href="#terms" 
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 block"
                  onClick={(e) => handleLegalPageNavigation('terms', e)}
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a 
                  href="#privacy" 
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 block"
                  onClick={(e) => handleLegalPageNavigation('privacy', e)}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div id="contact">
            <h3 className="text-lg font-medium mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <PhoneCall size={16} className="mr-3 text-orange-400 flex-shrink-0" />
                <a 
                  href="tel:+233275663090" 
                  className="hover:text-orange-400 transition-colors duration-200"
                >
                  +233 275 663 090
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-3 text-orange-400 flex-shrink-0" />
                <a 
                  href="mailto:support@freedomghana.com" 
                  className="hover:text-orange-400 transition-colors duration-200"
                >
                  support@freedomghana.com
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin size={16} className="mr-3 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Zender Street Akweley Cross River<br />
                  Accra, Ghana
                </span>
              </div>
              
              {/* Business Hours */}
              <div className="mt-4 p-3 bg-gray-700 rounded-lg">
                <h4 className="text-sm font-semibold text-orange-400 mb-2">Business Hours</h4>
                <div className="text-xs text-gray-300 space-y-1">
                  <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                  <div>Sat - Sun: 9:00 AM - 5:00 PM</div>
                  <div className="text-orange-300 font-medium">24/7 App Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {currentYear} Freedom Ghana. All rights reserved.
            </p>
            
            {/* Quick Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a 
                href="#safety" 
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                onClick={(e) => handleLegalPageNavigation('safety', e)}
              >
                Safety
              </a>
              <a 
                href="#terms" 
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                onClick={(e) => handleLegalPageNavigation('terms', e)}
              >
                Terms
              </a>
              <a 
                href="#privacy" 
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                onClick={(e) => handleLegalPageNavigation('privacy', e)}
              >
                Privacy
              </a>
              <a 
                href="#accessibility" 
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Navigate to accessibility page');
                }}
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;