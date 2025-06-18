import React, { useState, memo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

// Memoized step components to prevent unnecessary re-renders
const Step = memo(({ number, title, description, isLast, color, imageSrc }) => (
  <div className="relative">
    <div className={`text-5xl font-bold absolute -top-6 -left-3 opacity-10`} style={{ color }}>
      {number}
    </div>
    <div className={`p-6 rounded-xl bg-white shadow-lg h-full`}>
      <h3 className="text-xl font-bold mb-4" style={{ color }}>
        {title}
      </h3>
      <p className={`mb-4 text-gray-600`}>{description}</p>
      <img 
        src={imageSrc || "/api/placeholder/400/200"} 
        alt={title} 
        className="w-full h-auto rounded-lg" 
      />
    </div>
    {!isLast && (
      <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
        <ArrowRight size={24} style={{ color }} />
      </div>
    )}
  </div>
));

// Pre-defined content to avoid recreating on each render
const STEPS_CONTENT = {
  ride: [
    {
      title: "Request a Ride",
      description: "Enter your pickup location and destination in the app.",
      imageSrc: "/images/Ride1.png" // Replace with your image path
    },
    {
      title: "Get Matched",
      description: "Our system matches you with the closest available driver.",
      imageSrc: "/images/Ride2.png" // Replace with your image path
    },
    {
      title: "Safe Trip",
      description: "Count on our professional drivers to pick you up and deliver you to your destination safely.",
      imageSrc: "/images/Freedom-Rider-and-Driver.jpg" // Replace with your image path
    }
  ],
  delivery: [
    {
      title: "Request a Delivery",
      description: "Enter pickup and drop-off locations, then add package details.",
      imageSrc: "/images/Delivery2.png" // Replace with your image path
    },
    {
      title: "Package Pickup",
      description: "Our driver will pick up your package for delivery.",
      imageSrc: "/images/Freedom-Rider.jpg" // Replace with your image path
    },
    {
      title: "Secure Delivery",
      description: "We guarantee on-time deliveries..",
      imageSrc: "/images/happy-client-with-their-box-freedom2.jpg" // Replace with your image path
    }
  ]
};

const HowItWorks = () => {
  const [serviceType, setServiceType] = useState('ride');
  const color = '#FF6B00';
  const steps = STEPS_CONTENT[serviceType];

  // Listen for navigation events from navbar
  useEffect(() => {
    const handleServiceSwitch = (event) => {
      const { serviceType: newServiceType } = event.detail;
      setServiceType(newServiceType);
    };

    window.addEventListener('switchService', handleServiceSwitch);
    
    return () => {
      window.removeEventListener('switchService', handleServiceSwitch);
    };
  }, []);

  const handleTabChange = (type) => {
    if (type === serviceType) return; // Prevent unnecessary state updates
    setServiceType(type);
    trackEvent('Tab', 'Switch', `${type.charAt(0).toUpperCase() + type.slice(1)} Tab`);
  };

  return (
    <section id="how-it-works" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 bg-gray-200 dark:bg-gray-700">
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                serviceType === 'ride' ? 'bg-orange-500 text-white' : 'bg-transparent'
              }`}
              onClick={() => handleTabChange('ride')}
            >
              Ride Service
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                serviceType === 'delivery' ? 'bg-orange-500 text-white' : 'bg-transparent'
              }`}
              onClick={() => handleTabChange('delivery')}
            >
              Delivery Service
            </button>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          How {serviceType === 'ride' ? 'Rides' : 'Deliveries'} Work
        </h2>
        
        {/* Use a simplified animation approach */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          key={serviceType} // Key helps React identify which items have changed
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {steps.map((step, index) => (
            <Step
              key={`${serviceType}-step-${index}`}
              number={index + 1}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
              color={color}
              imageSrc={step.imageSrc}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(HowItWorks);