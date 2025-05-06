import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import FareEstimator from './components/sections/FareEstimator';
import AppDownload from './components/sections/AppDownload';
import WhyChooseFreedom from './components/sections/WhyChooseFreedom';
import HowItWorks from './components/sections/HowItWorks';
import Testimonials from './components/sections/Testimonials';
import CtaSection from './components/sections/CtaSection';
import AboutSection from './components/sections/AboutSection';
import Footer from './components/layout/Footer';
import { initializeAnalytics, trackPageView, trackEvent, setupScrollDepthTracking } from './utils/analytics';

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
      <div className="min-h-screen">
        <Helmet>
          <title>Freedom - Ghana's Premier Ride-Hailing & Delivery Service</title>
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
          
          {/* Structured Data / JSON-LD */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Freedom",
                "url": "https://www.freedomride.com.gh/",
                "logo": "https://www.freedomride.com.gh/images/logo.png",
                "description": "Fast, affordable, and reliable rides and deliveries across Ghana.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Independence Avenue",
                  "addressLocality": "Accra",
                  "addressRegion": "Greater Accra",
                  "postalCode": "00233",
                  "addressCountry": "GH"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+233-302-123-456",
                  "contactType": "customer service"
                },
                "sameAs": [
                  "https://www.facebook.com/freedomride",
                  "https://www.twitter.com/freedomride",
                  "https://www.instagram.com/freedomride"
                ]
              }
            `}
          </script>
        </Helmet>

        <Navbar />
        <HeroSection />
        <FareEstimator />
        <AppDownload />
        <WhyChooseFreedom />
        <HowItWorks />
        <Testimonials />
        <CtaSection />
        <AboutSection />
        <Footer />
      </div>
  );
};

export default App;