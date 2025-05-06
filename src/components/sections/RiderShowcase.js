import React from 'react';
import { motion } from 'framer-motion';

const RiderShowcase = () => {
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
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join the <span className="text-orange-500">Freedom Family</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Be part of Ghana's fastest-growing delivery network. Our riders enjoy competitive earnings, flexible schedules, and a path to financial independence.
          </p>
        </motion.div>

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Feature Card 1 - Team */}
          <motion.div 
            variants={fadeIn}
            className="rounded-2xl overflow-hidden shadow-lg bg-white group"
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Freedom rider team" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Join Our Elite Team</h3>
                <p className="text-sm text-white/80">Become part of our professional fleet of delivery experts</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Our riders represent the Freedom brand with pride, wearing our distinctive orange uniforms and using modern equipment. Join a team that's known for reliability, professionalism, and excellent service.
              </p>
              <div className="flex items-center mt-4">
                <div className="p-2 rounded-full mr-3 bg-orange-100">
                  <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <span className="text-orange-500 font-medium">Professional equipment provided</span>
              </div>
            </div>
          </motion.div>

          {/* Feature Card 2 - Earnings */}
          <motion.div 
            variants={fadeIn}
            className="rounded-2xl overflow-hidden shadow-lg bg-white group"
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Freedom rider with motorbike" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Earn With Every Delivery</h3>
                <p className="text-sm text-white/80">Competitive payment structure with bonuses</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Maximize your earnings with our competitive pay structure. Enjoy base rates plus performance bonuses, busy hour incentives, and special event promotions designed to boost your income.
              </p>
              <div className="flex items-center mt-4">
                <div className="p-2 rounded-full mr-3 bg-orange-100">
                  <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <span className="text-orange-500 font-medium">Monthly performance bonuses</span>
              </div>
            </div>
          </motion.div>

          {/* Feature Card 3 - Ownership */}
          <motion.div 
            variants={fadeIn}
            className="rounded-2xl overflow-hidden shadow-lg bg-white group md:col-span-2 lg:col-span-1"
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Freedom rider with own motorbike" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Own Your Motorbike</h3>
                <p className="text-sm text-white/80">Work your way to full ownership in just 12 months</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Every payment brings you closer to owning your motorbike. Our unique ownership program helps you build assets while you work, setting you free from endless rental payments.
              </p>
              <div className="flex items-center mt-4">
                <div className="p-2 rounded-full mr-3 bg-orange-100">
                  <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <span className="text-orange-500 font-medium">From renting to owning in 12 months</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 bg-orange-50 rounded-3xl overflow-hidden shadow-lg"
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">Hear From Our Riders</h3>
              
              <div className="space-y-6">
                <blockquote className="border-l-4 border-orange-500 pl-4 py-2">
                  <p className="italic text-gray-600 mb-2">
                    "Joining Freedom changed my life. I've been able to support my family and am only 3 months away from owning my motorbike completely!"
                  </p>
                  <footer className="font-medium">
                    - Kwame A., Freedom Rider for 9 months
                  </footer>
                </blockquote>
                
                <blockquote className="border-l-4 border-orange-500 pl-4 py-2">
                  <p className="italic text-gray-600 mb-2">
                    "The flexible schedule allows me to continue my studies while earning. The Freedom team truly cares about our well-being and success."
                  </p>
                  <footer className="font-medium">
                    - Abena M., Freedom Rider for 6 months
                  </footer>
                </blockquote>
              </div>
              
              <div className="mt-8">
                <motion.a
                  href="#apply"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Today
                </motion.a>
              </div>
            </div>
            
            <div className="hidden md:block h-full">
              <img 
                src="/api/placeholder/600/800" 
                alt="Happy Freedom rider" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <motion.div variants={fadeIn} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">500+</div>
            <p className="text-gray-600">Active Riders</p>
          </motion.div>
          
          <motion.div variants={fadeIn} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">12K+</div>
            <p className="text-gray-600">Deliveries Per Day</p>
          </motion.div>
          
          <motion.div variants={fadeIn} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">200+</div>
            <p className="text-gray-600">Motorbike Owners</p>
          </motion.div>
          
          <motion.div variants={fadeIn} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">15</div>
            <p className="text-gray-600">Cities in Ghana</p>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join our team of professional riders today and start your journey toward financial freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#apply"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply Now
            </motion.a>
            
            <motion.a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-orange-500 font-bold py-3 px-8 rounded-full border-2 border-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RiderShowcase;