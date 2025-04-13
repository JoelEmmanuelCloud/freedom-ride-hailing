import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Clock, Shield } from 'lucide-react';

const WhyChooseFreedom = () => {

  return (
    <motion.section 
      className="py-16 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Freedom</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className={`p-6 rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-105`}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(255, 107, 0, 0.1)' }}>
                <CreditCard size={32} style={{ color: '#FF6B00' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Affordable Fares</h3>
            <p className={`text-center text-gray-600`}>
              Enjoy the best rates in town with transparent pricing and no hidden fees.
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-105`}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(255, 107, 0, 0.1)' }}>
                <Clock size={32} style={{ color: '#FF6B00' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Fast Ride Matching</h3>
            <p className={`text-center text-gray-600`}>
              Get matched with the nearest driver in seconds, minimizing your wait time.
            </p>
          </motion.div>
          
          <motion.div 
            className={`p-6 rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-105`}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(255, 107, 0, 0.1)' }}>
                <Shield size={32} style={{ color: '#FF6B00' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Safe & Professional</h3>
            <p className={`text-center text-gray-600`}>
              All our drivers are thoroughly vetted and trained to ensure your safety.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseFreedom;