import { useState, useEffect } from 'react';
import { ArrowLeft, Home } from 'lucide-react';

// Your existing components
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AppDownload from './components/sections/AppDownload';
import WhyChooseFreedom from './components/sections/WhyChooseFreedom';
import HowItWorks from './components/sections/HowItWorks';
import Testimonials from './components/sections/Testimonials';
import AboutSection from './components/sections/AboutSection';
import DriverRecruitment from './components/sections/DriverRecruitment';
import Footer from './components/layout/Footer';

// Legal pages components
import TermsConditions from './components/pages/TermsConditions';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import SafetyGuidelines from './components/pages/SafetyGuidelines';

import { initializeAnalytics, trackPageView, trackEvent, setupScrollDepthTracking } from './utils/analytics';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Initialize analytics
    initializeAnalytics();
    
    // Track page view
    trackPageView();
    
    // Setup scroll depth tracking
    const cleanup = setupScrollDepthTracking(trackEvent);
    
    return cleanup;
  }, []);

  // Function to handle page navigation
  const navigateToPage = (page) => {
    setCurrentPage(page);
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Track page navigation
    trackEvent('Navigation', 'Page Change', `Navigate to ${page}`);
  };

  // Function to go back to home
  const goHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    trackEvent('Navigation', 'Page Change', 'Return to Home');
  };

  // Update document title and meta tags based on current page
  useEffect(() => {
    const updateMetaTags = () => {
      switch (currentPage) {
        case 'terms':
          document.title = 'Terms & Conditions - Freedom Ghana';
          updateMetaDescription('Read Freedom Ghana\'s terms and conditions for ride-hailing and delivery services.');
          break;
        case 'privacy':
          document.title = 'Privacy Policy - Freedom Ghana';
          updateMetaDescription('Learn how Freedom Ghana protects your privacy and handles your personal data.');
          break;
        case 'safety':
          document.title = 'Safety Guidelines - Freedom Ghana';
          updateMetaDescription('Important safety guidelines for motorcycle ride-hailing and delivery services in Ghana. Your safety is our priority.');
          break;
        case 'home':
        default:
          document.title = 'Freedom - Ghana\'s Premier Ride-Hailing & Delivery Service';
          updateMetaDescription('Fast, affordable, and reliable rides and deliveries across Ghana. Download the Freedom app today for quick transportation and deliveries.');
          break;
      }
    };

    const updateMetaDescription = (description) => {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    };

    updateMetaTags();
  }, [currentPage]);

  // Render the main home page content
  const renderHomePage = () => (
    <>
      {/* Document metadata tags */}
      <meta name="description" content="Fast, affordable, and reliable rides and deliveries across Ghana. Download the Freedom app today for quick transportation and deliveries." />
      <meta name="keywords" content="ride-hailing, Ghana, taxi, transportation, delivery service, motorcycle taxi, Accra, Kumasi, Tamale" />
      
      {/* Open Graph / Social Media Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.freedomride.com.gh/" />
      <meta property="og:title" content="Freedom - Ghana's Premier Ride-Hailing & Delivery Service" />
      <meta property="og:description" content="Fast, affordable, and reliable rides and deliveries across Ghana." />
      <meta property="og:image" content="https://www.freedomride.com.gh/images/og-image.jpg" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Freedom - Ghana's Premier Ride-Hailing & Delivery Service" />
      <meta name="twitter:description" content="Fast, affordable, and reliable rides and deliveries across Ghana." />
      <meta name="twitter:image" content="https://www.freedomride.com.gh/images/twitter-image.jpg" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.freedomride.com.gh/" />

      <Navbar onNavigateToPage={navigateToPage} />
      <HeroSection />
      <DriverRecruitment />
      <AppDownload />
      <WhyChooseFreedom />
      <HowItWorks />
      <Testimonials />
      <AboutSection />
      <Footer onNavigateToPage={navigateToPage} />
    </>
  );

  // Render legal pages with header
const renderLegalPage = () => {
  const pageComponents = {
    terms: <TermsConditions />,
    privacy: <PrivacyPolicy />,
    safety: <SafetyGuidelines />
  };

  return (
    <>
      {/* Legal Page Header - Simplified with only "Back to Home" */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <button
            onClick={goHome}
            className="flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-200 font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Page Content with top padding */}
      <div className="pt-20">
        {pageComponents[currentPage]}
      </div>

      {/* Simplified footer for legal pages */}
      <footer className="py-8 px-6 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/images/FreedomLogo.svg" 
              alt="Freedom Logo" 
              className="h-6 w-auto mr-2"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className="text-lg font-bold text-orange-500">Freedom</span>
          </div>
          <p className="text-gray-400 mb-4">
            Your ride-hailing and delivery service in Ghana.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <a 
              href="#safety" 
              className={`text-gray-400 hover:text-white transition-colors duration-200 ${currentPage === 'safety' ? 'text-orange-400' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                navigateToPage('safety');
              }}
            >
              Safety Guidelines
            </a>
            <a 
              href="#terms" 
              className={`text-gray-400 hover:text-white transition-colors duration-200 ${currentPage === 'terms' ? 'text-orange-400' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                navigateToPage('terms');
              }}
            >
              Terms & Conditions
            </a>
            <a 
              href="#privacy" 
              className={`text-gray-400 hover:text-white transition-colors duration-200 ${currentPage === 'privacy' ? 'text-orange-400' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                navigateToPage('privacy');
              }}
            >
              Privacy Policy
            </a>
            <a 
              href="mailto:support@freedomghana.com" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact Support
            </a>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            &copy; {new Date().getFullYear()} Freedom Ghana. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

  // Main render logic
  return (
    <div className="min-h-screen">
      {currentPage === 'home' ? renderHomePage() : renderLegalPage()}
    </div>
  );
};

export default App;