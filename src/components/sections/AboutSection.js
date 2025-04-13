import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <motion.section 
      id="about" // Add this ID for navigation targeting
      className="py-16 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Freedom</h2>
        <div className={`p-8 rounded-xl bg-white shadow-lg`}>
          <p className="text-lg mb-6 leading-relaxed">
            Freedom is Ghana's leading motorcycle ride-hailing and delivery service, offering fast, affordable, and safe transportation across major cities.
          </p>
          
          <div className="flex items-center mb-6">
            <div className="p-2 rounded-full mr-4" style={{ backgroundColor: 'rgba(255, 107, 0, 0.1)' }}>
              <svg className="w-6 h-6" style={{ color: '#FF6B00' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="font-bold">Quick. Safe. Reliable.</p>
          </div>
          
          <p className="text-lg mb-6 leading-relaxed">
            We connect riders with drivers for quick transportation and businesses with customers for fast deliveries. Our mission is to transform urban mobility in Ghana through technology and exceptional service.
          </p>
          
          <p className="text-lg leading-relaxed">
            Join thousands of riders who trust Freedom for their daily commutes and delivery needs!
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;