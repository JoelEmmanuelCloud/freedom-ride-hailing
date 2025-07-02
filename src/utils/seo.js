// utils/seo.js - Comprehensive SEO utilities

// Generate dynamic sitemap based on routes
export const generateSitemap = () => {
  const baseUrl = 'https://www.freedomride.com.gh';
  const routes = [
    { path: '/', priority: 1.0, changefreq: 'weekly' },
    { path: '/terms', priority: 0.7, changefreq: 'monthly' },
    { path: '/privacy', priority: 0.7, changefreq: 'monthly' },
    { path: '/safety', priority: 0.8, changefreq: 'monthly' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    ${route.path === '/' ? `<image:image>
      <image:loc>${baseUrl}/images/freedom-hero-image.jpg</image:loc>
      <image:title>Freedom Ghana Ride-Hailing Service</image:title>
      <image:caption>Fast and reliable motorcycle taxi service across Ghana</image:caption>
    </image:image>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Enhanced meta tag management
export class SEOManager {
  constructor() {
    this.defaultConfig = {
      siteName: 'Freedom Ghana',
      baseUrl: 'https://www.freedomghana.com',
      defaultImage: '/images/freedom-og-default.jpg',
      twitterHandle: '@freedomghana',
      fbAppId: 'YOUR_FB_APP_ID' // Replace with actual Facebook App ID
    };
  }

  // Update all meta tags for a page
  updatePageMeta(config) {
    const finalConfig = { ...this.defaultConfig, ...config };
    
    // Basic meta tags
    this.updateMetaTag('title', finalConfig.title);
    this.updateMetaTag('description', finalConfig.description);
    this.updateMetaTag('keywords', finalConfig.keywords);
    this.updateMetaTag('author', 'Freedom Ghana');
    this.updateMetaTag('robots', finalConfig.robots || 'index, follow');
    
    // Open Graph tags
    this.updateMetaProperty('og:type', finalConfig.type || 'website');
    this.updateMetaProperty('og:site_name', finalConfig.siteName);
    this.updateMetaProperty('og:title', finalConfig.title);
    this.updateMetaProperty('og:description', finalConfig.description);
    this.updateMetaProperty('og:url', finalConfig.canonicalUrl);
    this.updateMetaProperty('og:image', finalConfig.ogImage || finalConfig.defaultImage);
    this.updateMetaProperty('og:image:width', '1200');
    this.updateMetaProperty('og:image:height', '630');
    this.updateMetaProperty('og:locale', 'en_GH');
    
    if (finalConfig.fbAppId) {
      this.updateMetaProperty('fb:app_id', finalConfig.fbAppId);
    }
    
    // Twitter Card tags
    this.updateMetaName('twitter:card', 'summary_large_image');
    this.updateMetaName('twitter:site', finalConfig.twitterHandle);
    this.updateMetaName('twitter:creator', finalConfig.twitterHandle);
    this.updateMetaName('twitter:title', finalConfig.title);
    this.updateMetaName('twitter:description', finalConfig.description);
    this.updateMetaName('twitter:image', finalConfig.twitterImage || finalConfig.ogImage || finalConfig.defaultImage);
    
    // Additional mobile and app-related meta tags
    this.updateMetaName('apple-mobile-web-app-capable', 'yes');
    this.updateMetaName('apple-mobile-web-app-status-bar-style', 'black-translucent');
    this.updateMetaName('apple-mobile-web-app-title', 'Freedom');
    this.updateMetaName('mobile-web-app-capable', 'yes');
    this.updateMetaName('application-name', 'Freedom Ghana');
    
    // Geographic meta tags for Ghana
    this.updateMetaName('geo.region', 'GH');
    this.updateMetaName('geo.placename', 'Ghana');
    this.updateMetaName('geo.position', '7.9465;-1.0232'); // Ghana coordinates
    this.updateMetaName('ICBM', '7.9465, -1.0232');
    
    // Update canonical URL
    this.updateCanonicalUrl(finalConfig.canonicalUrl);
    
    // Update document title
    document.title = finalConfig.title;
  }

  // Helper method to update meta tags by name
  updateMetaTag(name, content) {
    if (!content) return;
    
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  // Helper method to update meta tags by property (for Open Graph)
  updateMetaProperty(property, content) {
    if (!content) return;
    
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  // Helper method to update meta tags by name (for Twitter)
  updateMetaName(name, content) {
    if (!content) return;
    
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  // Update canonical URL
  updateCanonicalUrl(url) {
    if (!url) return;
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }

  // Add hreflang tags for international SEO (if expanding to other countries)
  addHreflangTags(alternatives) {
    // Remove existing hreflang tags
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(tag => tag.remove());
    
    alternatives.forEach(alt => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', alt.hreflang);
      link.setAttribute('href', alt.href);
      document.head.appendChild(link);
    });
  }
}

// Structured data schemas for different page types
export const structuredDataSchemas = {
  organization: (data = {}) => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": data.name || "Freedom Ghana",
    "alternateName": "Freedom",
    "url": "https://www.freedomghana.com",
    "logo": "https://www.freedomghana.com/images/FreedomLogo.svg",
    "description": data.description || "Ghana's premier motorcycle taxi and delivery service offering fast, affordable rides and deliveries across major cities.",
    "foundingDate": "2024",
    "areaServed": {
      "@type": "Country",
      "name": "Ghana"
    },
    "serviceArea": {
      "@type": "Country", 
      "name": "Ghana"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "support@freedomghana.com",
        "availableLanguage": ["English", "Twi", "Ga"]
      },
      {
        "@type": "ContactPoint",
        "contactType": "technical support",
        "email": "tech@freedomghana.com",
        "availableLanguage": "English"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/freedomghana",
      "https://www.instagram.com/freedomghana", 
      "https://twitter.com/freedomghana",
      "https://www.linkedin.com/company/freedomghana"
    ]
  }),

  localBusiness: (data = {}) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Freedom Ghana",
    "description": "Ghana's premier motorcycle taxi and delivery service",
    "url": "https://www.freedomghana.com",
    "telephone": data.phone || "+233-XXX-XXXX",
    "email": "support@freedomghana.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GH",
      "addressRegion": "Greater Accra",
      "addressLocality": "Accra"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "5.6037",
      "longitude": "-0.1870"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "₵₵",
    "paymentAccepted": ["Mobile Money", "Cash", "Credit Card"],
    "currenciesAccepted": "GHS",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Transportation and Delivery Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Motorcycle Taxi Service",
            "description": "Fast and affordable motorcycle taxi rides across Ghana",
            "areaServed": "Ghana"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Food Delivery Service", 
            "description": "Quick food delivery from restaurants to your location",
            "areaServed": "Ghana"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Package Delivery Service",
            "description": "Reliable package and document delivery service",
            "areaServed": "Ghana"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": data.rating || "4.8",
      "reviewCount": data.reviewCount || "1250",
      "bestRating": "5",
      "worstRating": "1"
    }
  }),

  mobileApplication: () => ({
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Freedom Ghana",
    "applicationCategory": "Travel",
    "operatingSystem": ["Android", "iOS"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GHS"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    },
    "downloadUrl": [
      "https://play.google.com/store/apps/details?id=com.freedomghana.app",
      "https://apps.apple.com/app/freedom-ghana/id123456789"
    ]
  }),

  webPage: (pageData) => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageData.title,
    "description": pageData.description,
    "url": pageData.url,
    "inLanguage": "en-GH",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Freedom Ghana",
      "url": "https://www.freedomghana.com"
    },
    "breadcrumb": pageData.breadcrumb
  }),

  breadcrumbList: (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }),

  faqPage: (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  })
};

// Utility to add structured data to page
export const addStructuredData = (schema, id = 'structured-data') => {
  // Remove existing structured data with the same ID
  const existing = document.querySelector(`script[data-schema-id="${id}"]`);
  if (existing) {
    existing.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-schema-id', id);
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

// Performance optimization for SEO
export const optimizePagePerformance = () => {
  // Preload critical resources
  const criticalResources = [
    { href: '/images/FreedomLogo.svg', as: 'image' },
    { href: '/images/hero-background.jpg', as: 'image' },
    { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', as: 'style' }
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.crossorigin) {
      link.crossOrigin = resource.crossorigin;
    }
    document.head.appendChild(link);
  });

  // Add DNS prefetch for external domains
  const dnsPrefetch = [
    '//fonts.googleapis.com',
    '//fonts.gstatic.com',
    '//www.google-analytics.com',
    '//www.googletagmanager.com'
  ];

  dnsPrefetch.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
};

// Ghana-specific SEO optimizations
export const ghanaLocalSEO = {
  cities: [
    'Accra', 'Kumasi', 'Tamale', 'Cape Coast', 'Sekondi-Takoradi',
    'Sunyani', 'Koforidua', 'Ho', 'Bolgatanga', 'Wa'
  ],
  
  generateLocalKeywords: (baseKeyword) => {
    const keywords = [];
    ghanaLocalSEO.cities.forEach(city => {
      keywords.push(`${baseKeyword} ${city}`);
      keywords.push(`${baseKeyword} in ${city}`);
      keywords.push(`${city} ${baseKeyword}`);
    });
    return keywords;
  },

  localBusinessSchema: (city, coordinates) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Freedom Ghana - ${city}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressCountry": "GH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coordinates.lat,
      "longitude": coordinates.lng
    },
    "areaServed": city
  })
};

// Social media optimization
export const socialMediaOptimization = {
  generateSocialTags: (config) => {
    return {
      // Facebook specific
      'fb:app_id': config.fbAppId,
      'og:type': config.type || 'website',
      'og:site_name': 'Freedom Ghana',
      'og:title': config.title,
      'og:description': config.description,
      'og:image': config.image,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:url': config.url,
      'og:locale': 'en_GH',
      
      // Twitter specific
      'twitter:card': 'summary_large_image',
      'twitter:site': '@freedomghana',
      'twitter:creator': '@freedomghana',
      'twitter:title': config.title,
      'twitter:description': config.description,
      'twitter:image': config.image,
      
      // LinkedIn specific
      'og:image:alt': config.imageAlt || 'Freedom Ghana - Ride-hailing and Delivery Service'
    };
  }
};

// SEO utilities object for export
const SEOUtils = {
  SEOManager,
  structuredDataSchemas,
  addStructuredData,
  optimizePagePerformance,
  ghanaLocalSEO,
  socialMediaOptimization,
  generateSitemap
};

export default SEOUtils;