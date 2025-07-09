import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RiderApplicationForm from './RiderApplicationForm';

const DriverRecruitment = () => {
  const [showForm, setShowForm] = useState(false);

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <section id="driver-recruitment" className="py-12 sm:py-16 px-4 sm:px-6 bg-white text-gray-800 overflow-hidden relative">
        {/* Orange decorative circles */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500 rounded-full opacity-10"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-orange-500 rounded-full opacity-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
          >
            {/* Left Column - Text Content */}
            <motion.div variants={fadeIn} className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">
                Earn With <span className="text-orange-500">Every Ride & Delivery</span>
              </h2>
              
              <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-600 leading-relaxed">
                Are you a skilled and motivated driver or rider looking for an exciting opportunity to boost your earnings? 
                Join Freedom and secure your future with our flexible delivery service.
              </p>
              
              <div className="space-y-4 mb-8">
                {/* Benefit items */}
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start"
                >
                  <div className="p-2 rounded-full mr-3 sm:mr-4 flex-shrink-0" style={{ backgroundColor: 'rgba(255, 107, 0, 0.1)' }}>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#FF6B00' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-gray-800">Sign up as an in-house or external rider</h3>
                    <p className="text-sm sm:text-base text-gray-600">Choose the working model that best fits your lifestyle and goals.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start"
                >
                  <div className="p-2 rounded-full mr-3 sm:mr-4 flex-shrink-0" style={{ backgroundColor: 'rgba(255, 107, 0, 0.1)' }}>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#FF6B00' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-gray-800">Competitive compensation</h3>
                    <p className="text-sm sm:text-base text-gray-600">Earn more with our fair and rewarding payment structure.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start"
                >
                  <div className="p-2 rounded-full mr-3 sm:mr-4 flex-shrink-0" style={{ backgroundColor: 'rgba(255, 107, 0, 0.1)' }}>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#FF6B00' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-gray-800">Monthly bonuses</h3>
                    <p className="text-sm sm:text-base text-gray-600">Increase your earnings with performance-based incentives.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start"
                >
                  <div className="p-2 rounded-full mr-3 sm:mr-4 flex-shrink-0" style={{ backgroundColor: 'rgba(255, 107, 0, 0.1)' }}>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#FF6B00' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-gray-800">Insurance coverage</h3>
                    <p className="text-sm sm:text-base text-gray-600">Work with peace of mind knowing you're protected on the road.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start"
                >
                  <div className="p-2 rounded-full mr-3 sm:mr-4 flex-shrink-0" style={{ backgroundColor: 'rgba(255, 107, 0, 0.1)' }}>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#FF6B00' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-gray-800">Gender equality in recruitment</h3>
                    <p className="text-sm sm:text-base text-gray-600">Equal opportunities for all qualified riders regardless of gender.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start"
                >
                  <div className="p-2 rounded-full mr-3 sm:mr-4 flex-shrink-0" style={{ backgroundColor: 'rgba(255, 107, 0, 0.1)' }}>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#FF6B00' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 6v6l3 3" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-gray-800">Flexible working hours</h3>
                    <p className="text-sm sm:text-base text-gray-600">Choose when you work and maintain your work-life balance.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="flex items-start"
                >
                  <div className="p-2 rounded-full mr-3 sm:mr-4 flex-shrink-0" style={{ backgroundColor: 'rgba(255, 107, 0, 0.1)' }}>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#FF6B00' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 5v2M15 11v2M15 17v2M5 5h14M5 11h14M5 17h14" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-gray-800">Motorbike ownership program</h3>
                    <p className="text-sm sm:text-base text-gray-600">Work towards owning your motorbike in just 12 months.</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                variants={fadeIn}
                className="mt-6"
              >
                <motion.button
                  onClick={() => setShowForm(true)}
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join Our Team
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Image Collage */}
            <motion.div 
              variants={fadeIn}
              className="order-1 lg:order-2 grid grid-cols-12 gap-2 sm:gap-3"
            >
              {/* Main large image on the left */}
              <div className="col-span-7 row-span-2 relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/FreedomGroupDriver.jpg" 
                  alt="Freedom riders in orange uniform"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Join Our Team</h3>
                  <p className="text-sm opacity-90">Start earning today</p>
                </div>
              </div>
              
              {/* Top right image */}
              <div className="col-span-5 row-span-1 relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/FreedomDriverWithDeliveryBox.jpg" 
                  alt="Freedom rider with delivery box"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bottom right image */}
              <div className="col-span-5 row-span-1 relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="images/Freedom-Rider-and-Driver.jpg" 
                  alt="Freedom riders lineup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs font-medium">Reliable rides across Ghana</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rider Application Form Modal */}
      <RiderApplicationForm 
        isOpen={showForm}
        onClose={() => setShowForm(false)}
      />
    </>
  );
};

export default DriverRecruitment;