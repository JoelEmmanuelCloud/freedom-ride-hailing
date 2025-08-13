import React from 'react';
import { motion } from 'framer-motion';
import { trackEvent } from '../../utils/analytics';

const AppDownload = () => {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.freedomghana.app.user&pcampaignid=web_share";

  return (
    <section id="download" className={`py-8 sm:py-16 px-4 sm:px-6 bg-gray-100 text-gray-800`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Download the <span className="text-orange-500">Freedom App</span>
            </h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              Experience the best of Freedom with our mobile app! Easily book rides, schedule deliveries, track in real time, and enjoy seamless payments—anywhere in Ghana.
            </p>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-start">
                <div className="p-2 rounded-full mr-3 sm:mr-4" style={{ backgroundColor: 'rgba(255, 107, 0, 0.1)' }}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#FF6B00' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Quick Booking</h3>
                  <p className="text-sm sm:text-base text-gray-600">Book a ride or delivery in just a few taps—fast, easy, and hassle-free.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full mr-3 sm:mr-4" style={{ backgroundColor: 'rgba(255, 107, 0, 0.1)' }}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#FF6B00' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Live Tracking</h3>
                  <p className="text-sm sm:text-base text-gray-600">Monitor your driver's location and delivery status in real time on the map.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full mr-3 sm:mr-4" style={{ backgroundColor: 'rgba(255, 107, 0, 0.1)' }}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#FF6B00' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <line x1="12" y1="12" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12" y2="16"/>
                    <line x1="8" y1="16" x2="8" y2="16"/>
                    <line x1="16" y1="16" x2="16" y2="16"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Multiple Payment Options</h3>
                  <p className="text-sm sm:text-base text-gray-600">Pay conveniently with card, mobile money, or cash.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-row flex-wrap gap-4 mb-6">
              {/* Google Play Store Button */}
              <motion.a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 sm:h-16 w-40 sm:w-44 flex items-center justify-center"
                onClick={() => trackEvent('Download', 'Click', 'Google Play - Download Section')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src="/images/google-play-badge.png" 
                  alt="Get it on Google Play" 
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 70' preserveAspectRatio='xMidYMid meet'%3E%3Cg fill='%23fff'%3E%3Crect width='240' height='70' rx='10' fill='%23000'/%3E%3Cpath d='M130.24 28.76c-3.28 0-5.96 2.5-5.96 5.94 0 3.42 2.68 5.94 5.96 5.94 3.3 0 5.98-2.52 5.98-5.94 0-3.44-2.68-5.94-5.98-5.94zm0 9.53c-1.72 0-3.2-1.42-3.2-3.6 0-2.2 1.48-3.6 3.2-3.6 1.74 0 3.22 1.4 3.22 3.6 0 2.18-1.48 3.6-3.22 3.6zm-12.45-9.53c-3.28 0-5.96 2.5-5.96 5.94 0 3.42 2.68 5.94 5.96 5.94 3.3 0 5.98-2.52 5.98-5.94 0-3.44-2.68-5.94-5.98-5.94zm0 9.53c-1.72 0-3.2-1.42-3.2-3.6 0-2.2 1.48-3.6 3.2-3.6 1.74 0 3.22 1.4 3.22 3.6 0 2.18-1.48 3.6-3.22 3.6zm-14.82-7.7v2.54h6.08c-.18 1.43-.66 2.47-1.4 3.2-.9.9-2.28 1.9-4.68 1.9-3.72 0-6.64-3-6.64-6.72s2.92-6.72 6.64-6.72c2.02 0 3.48.8 4.56 1.82l1.78-1.8c-1.5-1.45-3.5-2.56-6.34-2.56-5.1 0-9.4 4.16-9.4 9.26 0 5.1 4.3 9.26 9.4 9.26 2.76 0 4.84-.9 6.48-2.62 1.68-1.68 2.2-4.04 2.2-5.94 0-.6-.04-1.14-.14-1.6h-8.54zm64.12 1.96c-.5-1.34-2.02-3.8-5.14-3.8-3.1 0-5.66 2.44-5.66 5.94 0 3.34 2.54 5.94 5.96 5.94 2.76 0 4.34-1.68 5-2.66l-2.04-1.36c-.68 1-1.6 1.66-2.96 1.66-1.34 0-2.3-.62-2.92-1.82l8.04-3.34-.28-.56zm-8.2 2c-.06-2.3 1.78-3.48 3.1-3.48.92 0 1.7.46 1.96 1.12l-5.06 2.36zm-6.54 5.84h2.76V22.91h-2.76v19.48zm-4.52-11.4h-.1c-.62-.74-1.8-1.4-3.3-1.4-3.14 0-6.02 2.76-6.02 6.3 0 3.52 2.88 6.28 6.02 6.28 1.5 0 2.68-.66 3.3-1.42h.1v.88c0 2.4-1.28 3.68-3.34 3.68-1.68 0-2.72-1.2-3.14-2.22l-2.38.98c.68 1.66 2.5 3.7 5.52 3.7 3.2 0 5.9-1.88 5.9-6.46V29.08h-2.56v1.08zm-3.16 9.2c-1.72 0-3.16-1.44-3.16-3.42 0-2 1.44-3.44 3.16-3.44 1.7 0 3.04 1.44 3.04 3.44 0 1.98-1.34 3.42-3.04 3.42zm32.94-17.36H168v19.48h2.76V33.54l2.4 2.36 5.38-5.34v11.84h2.76V22.91h-2.76v11.4l-6.5 6.64-4.24-4.24V22.91z' fill='%23fff'/%3E%3Cpath fill='%2300DFFF' d='M71.37 35.53l-14-8.07 14-8.09z'/%3E%3Cpath fill='%2300F076' d='M52.74 47.5V19.36l14.63 8.45z'/%3E%3Cpath fill='%23FFD900' d='M52.74 19.36L71.37 35.5l-5.02 5.02z'/%3E%3Cpath fill='%23FF3C4A' d='M52.74 47.5l13.61-6.98 5.02 5.01z'/%3E%3C/g%3E%3C/svg%3E";
                  }}
                />
              </motion.a>

              {/* App Store Button - Coming Soon */}
              <motion.div
                className="h-14 sm:h-16 w-40 sm:w-44 flex items-center justify-center opacity-60 cursor-not-allowed relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src="/images/app-store-badge.png" 
                  alt="Coming Soon to App Store" 
                  className="h-full w-full object-contain grayscale"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 70' preserveAspectRatio='xMidYMid meet'%3E%3Crect width='240' height='70' rx='10' fill='%23666'/%3E%3Cpath fill='%23999' d='M49.66 35.96c-.02-3.78 3.1-5.62 3.24-5.7-1.76-2.57-4.5-2.93-5.48-2.97-2.33-.23-4.55 1.38-5.74 1.38-1.18 0-3.01-1.34-4.95-1.3-2.55.04-4.9 1.48-6.2 3.76-2.65 4.6-.68 11.4 1.9 15.14 1.26 1.82 2.76 3.88 4.73 3.8 1.9-.07 2.62-1.23 4.92-1.23 2.3 0 2.95 1.23 4.96 1.2 2.05-.04 3.35-1.86 4.6-3.7 1.46-2.13 2.05-4.2 2.08-4.3-.04-.02-4-1.53-4.04-6.08zm-3.8-11.16c1.05-1.27 1.75-3.03 1.56-4.8-1.5.06-3.33 1.01-4.42 2.27-.97 1.12-1.82 2.92-1.59 4.64 1.68.14 3.38-.86 4.45-2.11z' /%3E%3Ctext x='85' y='30' fill='%23999' font-size='10' font-family='Arial'%3EComing Soon%3C/text%3E%3Ctext x='85' y='45' fill='%23999' font-size='12' font-family='Arial' font-weight='bold'%3EApp Store%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-2 py-1 rounded-full transform translate-x-2 -translate-y-2">
                  Soon
                </div>
              </motion.div>
            </div>
            
            <div className="mt-4 sm:mt-6">
              <p className="text-xs sm:text-sm font-medium mb-2 sm:mb-3">Or scan the QR code to download:</p>
              
              {/* Real QR Code using QR Server API */}
              <motion.a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block p-2 bg-white rounded-xl shadow-lg border-2 border-gray-200 hover:border-orange-300 transition-colors duration-200 cursor-pointer"
                onClick={() => trackEvent('Download', 'Click', 'QR Code - Download Section')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=${encodeURIComponent(playStoreUrl)}`}
                  alt="QR Code for Freedom App Download"
                  className="w-24 h-24 sm:w-32 sm:h-32"
                  onError={(e) => {
                    // Fallback to another QR code service if the first one fails
                    e.target.onerror = null;
                    e.target.src = `https://chart.googleapis.com/chart?chs=128x128&cht=qr&chl=${encodeURIComponent(playStoreUrl)}`;
                  }}
                />
              </motion.a>
              
              <p className="text-xs text-gray-500 mt-2">Scan to download or tap to open Play Store</p>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-orange-500 rounded-full opacity-20"></div>
            {/* Regular div instead of motion.div */}
            <div className="relative z-10">
              {/* Made the app screenshot image smaller */}
              <img 
                src="/images/app-screenshot.png" 
                alt="Freedom App Preview" 
                className="relative z-10 mx-auto max-w-xs rounded-3xl shadow-2xl border-8 border-black"
              />
              
              {/* Screen glare effect */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white to-transparent opacity-10 rounded-t-3xl"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;