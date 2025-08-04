import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// components
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

// SEO utility functions
const updateDocumentHead = (title, description, keywords, canonicalUrl, ogImage) => {
  // Update title
  document.title = title;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
  
  // Update meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', keywords);
  
  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', canonicalUrl);
  
  // Update Open Graph tags
  const ogTags = [
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:image', content: ogImage }
  ];
  
  ogTags.forEach(tag => {
    let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
    if (!ogTag) {
      ogTag = document.createElement('meta');
      ogTag.setAttribute('property', tag.property);
      document.head.appendChild(ogTag);
    }
    ogTag.setAttribute('content', tag.content);
  });
  
  // Update Twitter tags
  const twitterTags = [
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage }
  ];
  
  twitterTags.forEach(tag => {
    let twitterTag = document.querySelector(`meta[name="${tag.name}"]`);
    if (!twitterTag) {
      twitterTag = document.createElement('meta');
      twitterTag.setAttribute('name', tag.name);
      document.head.appendChild(twitterTag);
    }
    twitterTag.setAttribute('content', tag.content);
  });
};

// Add structured data for specific pages
const addStructuredData = (pageType, data) => {
  // Remove existing structured data
  const existingScript = document.querySelector('script[data-page-structured-data]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-page-structured-data', 'true');
  
  let structuredData = {};
  
  switch (pageType) {
    case 'home':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Freedom Ghana",
        "alternateName": "Freedom",
        "description": "Ghana's premier motorcycle taxi and delivery service offering fast, affordable rides and deliveries across major cities.",
        "url": "https://www.freedomghana.com",
        "telephone": "+233-275-663-090",
        "email": "support@freedomghana.com",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "GH",
          "addressRegion": "Greater Accra",
          "addressLocality": "Accra",
          "streetAddress": "Zender Street Akweley Cross River"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "5.6037",
          "longitude": "-0.1870"
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "priceRange": "₵₵",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Transportation and Delivery Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Motorcycle Taxi Service",
                "description": "Fast and affordable motorcycle taxi rides"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Delivery Service",
                "description": "Quick delivery for packages and food"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1250"
        }
      };
      break;
      
    case 'terms':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms & Conditions - Freedom Ghana",
        "description": "Terms and conditions for using Freedom Ghana's ride-hailing and delivery services.",
        "url": "https://www.freedomghana.com/terms",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Freedom Ghana",
          "url": "https://www.freedomghana.com"
        }
      };
      break;
      
    case 'privacy':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy - Freedom Ghana",
        "description": "Privacy policy explaining how Freedom Ghana handles and protects user data.",
        "url": "https://www.freedomghana.com/privacypolicy",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Freedom Ghana",
          "url": "https://www.freedomghana.com"
        }
      };
      break;
      
    case 'safety':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Safety Guidelines - Freedom Ghana",
        "description": "Important safety guidelines for motorcycle ride-hailing and delivery services.",
        "url": "https://www.freedomghana.com/safety",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Freedom Ghana",
          "url": "https://www.freedomghana.com"
        }
      };
      break;
  }
  
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

// SEO configurations for different pages
const seoConfig = {
  home: {
    title: 'Freedom Ghana - Fast & Reliable Ride-Hailing & Delivery Service',
    description: 'Ghana\'s premier motorcycle taxi and delivery service. Get fast, affordable rides and deliveries in Accra, Kumasi, and beyond. Download the Freedom app today!',
    keywords: 'ride-hailing Ghana, motorcycle taxi Ghana, delivery service Ghana, Freedom app, transportation Accra, taxi Kumasi, okada service, Ghana transport',
    canonicalUrl: 'https://www.freedomghana.com/',
    ogImage: 'https://www.freedomghana.com/images/freedom-og-home.jpg'
  },
  terms: {
    title: 'Terms & Conditions - Freedom Ghana Ride-Hailing Service',
    description: 'Read Freedom Ghana\'s comprehensive terms and conditions for motorcycle taxi and delivery services. Understand your rights and responsibilities.',
    keywords: 'Freedom Ghana terms, ride-hailing terms, motorcycle taxi conditions, delivery service agreement',
    canonicalUrl: 'https://www.freedomghana.com/terms',
    ogImage: 'https://www.freedomghana.com/images/freedom-og-legal.jpg'
  },
  privacy: {
    title: 'Privacy Policy - Freedom Ghana | Data Protection & Privacy',
    description: 'Learn how Freedom Ghana protects your privacy and handles personal data. Our commitment to data security and user privacy in Ghana.',
    keywords: 'Freedom Ghana privacy, data protection Ghana, ride-hailing privacy policy, personal information security',
    canonicalUrl: 'https://www.freedomghana.com/privacypolicy',
    ogImage: 'https://www.freedomghana.com/images/freedom-og-privacy.jpg'
  },
  safety: {
    title: 'Safety Guidelines - Freedom Ghana | Motorcycle Taxi Safety',
    description: 'Essential safety guidelines for motorcycle ride-hailing and delivery services in Ghana. Your safety is our top priority at Freedom Ghana.',
    keywords: 'motorcycle safety Ghana, ride-hailing safety, okada safety guidelines, Freedom Ghana safety, transport safety tips',
    canonicalUrl: 'https://www.freedomghana.com/safety',
    ogImage: 'https://www.freedomghana.com/images/freedom-og-safety.jpg'
  }
};

// Component to handle SEO updates based on route
const SEOUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    // Determine page type from pathname
    let pageType = 'home';
    if (location.pathname === '/terms') pageType = 'terms';
    else if (location.pathname === '/privacypolicy') pageType = 'privacy';
    else if (location.pathname === '/safety') pageType = 'safety';

    // Update SEO meta tags
    const config = seoConfig[pageType];
    if (config) {
      updateDocumentHead(
        config.title,
        config.description,
        config.keywords,
        config.canonicalUrl,
        config.ogImage
      );
      
      // Add structured data
      addStructuredData(pageType);
    }

    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Track page view
    trackEvent('Navigation', 'Page Change', `Navigate to ${pageType}`);
  }, [location.pathname]);

  return null;
};

// Home Page Component
const HomePage = () => (
  <>
    <Navbar />
    <HeroSection />
    <DriverRecruitment />
    <AppDownload />
    <WhyChooseFreedom />
    <HowItWorks />
    <Testimonials />
    <AboutSection />
    <Footer />
  </>
);

// Legal Page Layout Component
const LegalPageLayout = ({ children, pageTitle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    navigate('/');
    trackEvent('Navigation', 'Page Change', 'Return to Home');
  };

  return (
    <>
      {/* Legal Page Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4">
          {/* Breadcrumb navigation for SEO */}
          <nav aria-label="Breadcrumb" className="mb-2">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <button
                  onClick={goHome}
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-gray-800 font-medium">
                  {pageTitle}
                </span>
              </li>
            </ol>
          </nav>
          
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
      <div className="pt-24">
        {children}
      </div>

      {/* Simplified footer for legal pages */}
      <footer className="py-8 px-6 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/images/FreedomLogo.svg" 
              alt="Freedom Ghana Logo" 
              className="h-6 w-auto mr-2"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className="text-lg font-bold text-orange-500">Freedom</span>
          </div>
          <p className="text-gray-400 mb-4">
            Your trusted ride-hailing and delivery service in Ghana.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <button 
              className={`text-gray-400 hover:text-white transition-colors duration-200 ${location.pathname === '/safety' ? 'text-orange-400' : ''}`}
              onClick={() => navigate('/safety')}
            >
              Safety Guidelines
            </button>
            <button 
              className={`text-gray-400 hover:text-white transition-colors duration-200 ${location.pathname === '/terms' ? 'text-orange-400' : ''}`}
              onClick={() => navigate('/terms')}
            >
              Terms & Conditions
            </button>
            <button 
              className={`text-gray-400 hover:text-white transition-colors duration-200 ${location.pathname === '/privacypolicy' ? 'text-orange-400' : ''}`}
              onClick={() => navigate('/privacypolicy')}
            >
              Privacy Policy
            </button>
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

const App = () => {
  useEffect(() => {
    // Initialize analytics
    initializeAnalytics();
    
    // Track page view
    trackPageView();
    
    // Setup scroll depth tracking
    const cleanup = setupScrollDepthTracking(trackEvent);
    
    return cleanup;
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <SEOUpdater />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />
          
          {/* Legal Pages Routes */}
          <Route 
            path="/terms" 
            element={
              <LegalPageLayout pageTitle="Terms & Conditions">
                <TermsConditions />
              </LegalPageLayout>
            } 
          />
          <Route 
            path="/privacypolicy" 
            element={
              <LegalPageLayout pageTitle="Privacy Policy">
                <PrivacyPolicy />
              </LegalPageLayout>
            } 
          />
          <Route 
            path="/safety" 
            element={
              <LegalPageLayout pageTitle="Safety Guidelines">
                <SafetyGuidelines />
              </LegalPageLayout>
            } 
          />
          
          {/* Catch-all route - redirects to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;