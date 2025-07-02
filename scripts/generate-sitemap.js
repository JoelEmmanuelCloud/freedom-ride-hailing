// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.freedomghana.com';

// Define your routes with metadata
const routes = [
  {
    path: '/',
    priority: 1.0,
    changefreq: 'weekly',
    images: [
      {
        loc: `${BASE_URL}/images/freedom-DriverXRider.jpg`,
        title: 'Freedom Ghana Motorcycle Taxi Service',
        caption: 'Professional motorcycle taxi riders providing safe transportation across Ghana'
      },
      {
        loc: `${BASE_URL}/images/FreedomLogo.svg`,
        title: 'Freedom Ghana Logo',
        caption: 'Official logo of Freedom Ghana ride-hailing and delivery service'
      }
    ]
  },
  {
    path: '/terms',
    priority: 0.7,
    changefreq: 'monthly'
  },
  {
    path: '/privacy',
    priority: 0.7,
    changefreq: 'monthly'
  },
  {
    path: '/safety',
    priority: 0.8,
    changefreq: 'monthly'
  }
];

// Generate main sitemap
function generateMainSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
`;

  routes.forEach(route => {
    sitemap += `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
`;

    // Add image information if available
    if (route.images && route.images.length > 0) {
      route.images.forEach(image => {
        sitemap += `    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>
`;
      });
    }

    sitemap += `  </url>
`;
  });

  sitemap += `</urlset>`;
  return sitemap;
}

// Generate image sitemap
function generateImageSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  // Collect all images from routes
  const allImages = [];
  routes.forEach(route => {
    if (route.images) {
      route.images.forEach(image => {
        allImages.push({
          ...image,
          pageLoc: `${BASE_URL}${route.path}`
        });
      });
    }
  });

  // Add other important images
  const additionalImages = [
    {
      loc: `${BASE_URL}/images/google-play-badge.png`,
      title: 'Download Freedom Ghana on Google Play',
      caption: 'Download button for Freedom Ghana mobile app on Google Play Store',
      pageLoc: `${BASE_URL}/`
    },
    {
      loc: `${BASE_URL}/images/app-store-badge.png`,
      title: 'Download Freedom Ghana on App Store',
      caption: 'Download button for Freedom Ghana mobile app on Apple App Store',
      pageLoc: `${BASE_URL}/`
    },
    {
      loc: `${BASE_URL}/images/Freedom-Rider.jpg`,
      title: 'Freedom Ghana Delivery Rider',
      caption: 'Professional delivery rider ready for package and food delivery service',
      pageLoc: `${BASE_URL}/`
    },
    {
      loc: `${BASE_URL}/images/Freedom-Rider2.jpg`,
      title: 'Freedom Ghana Rider with Mobile App',
      caption: 'Motorcycle taxi rider using Freedom Ghana mobile application',
      pageLoc: `${BASE_URL}/`
    }
  ];

  allImages.push(...additionalImages);

  // Group images by page
  const imagesByPage = {};
  allImages.forEach(image => {
    if (!imagesByPage[image.pageLoc]) {
      imagesByPage[image.pageLoc] = [];
    }
    imagesByPage[image.pageLoc].push(image);
  });

  // Generate sitemap entries
  Object.keys(imagesByPage).forEach(pageLoc => {
    sitemap += `  <url>
    <loc>${pageLoc}</loc>
    <lastmod>${currentDate}</lastmod>
`;
    
    imagesByPage[pageLoc].forEach(image => {
      sitemap += `    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>
`;
    });
    
    sitemap += `  </url>
`;
  });

  sitemap += `</urlset>`;
  return sitemap;
}

// Generate sitemap index
function generateSitemapIndex() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-images.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;
}

// Generate robots.txt
function generateRobotsTxt() {
  return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Allow important pages
Allow: /terms
Allow: /privacy
Allow: /safety

# Block common admin and development paths
Disallow: /admin/
Disallow: /api/
Disallow: /test/
Disallow: /_next/
Disallow: /node_modules/
Disallow: /.env
Disallow: /package.json
Disallow: /yarn.lock

# Block common WordPress paths (if not using WordPress)
Disallow: /wp-admin/
Disallow: /wp-content/
Disallow: /wp-includes/

# Allow CSS, JS, and image files for proper indexing
Allow: /*.css$
Allow: /*.js$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$
Allow: /*.svg$
Allow: /*.webp$

# Crawl delay for politeness (optional)
Crawl-delay: 1

# Sitemap location
Sitemap: ${BASE_URL}/sitemap-index.xml
Sitemap: ${BASE_URL}/sitemap.xml
Sitemap: ${BASE_URL}/sitemap-images.xml

# For specific search engines (optional)
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Block bad bots (optional)
User-agent: SemrushBot
Disallow: /

User-agent: AhrefsBot
Disallow: /`;
}

// Main execution
function generateSitemaps() {
  const buildDir = path.join(__dirname, '..', 'build');
  const publicDir = path.join(__dirname, '..', 'public');
  
  // Ensure directories exist
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir, { recursive: true });
  }
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  try {
    // Generate sitemaps
    const mainSitemap = generateMainSitemap();
    const imageSitemap = generateImageSitemap();
    const sitemapIndex = generateSitemapIndex();
    const robotsTxt = generateRobotsTxt();

    // Write to build directory (for production)
    fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), mainSitemap);
    fs.writeFileSync(path.join(buildDir, 'sitemap-images.xml'), imageSitemap);
    fs.writeFileSync(path.join(buildDir, 'sitemap-index.xml'), sitemapIndex);
    fs.writeFileSync(path.join(buildDir, 'robots.txt'), robotsTxt);

    // Also write to public directory (for development)
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), mainSitemap);
    fs.writeFileSync(path.join(publicDir, 'sitemap-images.xml'), imageSitemap);
    fs.writeFileSync(path.join(publicDir, 'sitemap-index.xml'), sitemapIndex);
    fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);

    console.log('✅ Sitemaps generated successfully!');
    console.log('📝 Files created:');
    console.log('   - sitemap.xml (main sitemap)');
    console.log('   - sitemap-images.xml (image sitemap)');
    console.log('   - sitemap-index.xml (sitemap index)');
    console.log('   - robots.txt (updated robots file)');
    console.log(`🌐 Total URLs: ${routes.length}`);
    console.log(`🖼️ Total Images: ${routes.reduce((acc, route) => acc + (route.images ? route.images.length : 0), 0) + 4}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemaps:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  generateSitemaps();
}

module.exports = {
  generateSitemaps,
  generateMainSitemap,
  generateImageSitemap,
  generateSitemapIndex,
  generateRobotsTxt
};