import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, PhoneCall } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Function to handle smooth scrolling to the about section
  const scrollToAbout = (e) => {
    e.preventDefault();
    
    // Track the click event - you can add your analytics tracking here
    // Example: trackEvent("Navigation", "Click", "About Section - Footer");
    
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <footer className={`py-12 px-6 bg-gray-800 text-white`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Freedom</h3>
            <p className="text-gray-300 mb-4">Your ride-hailing and delivery service in Ghana.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61575498650961" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/Freedomgh55/status/1911245633924575559" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Twitter size={20} /> {/* Using Twitter icon from lucide for X.com */}
              </a>
              <a href="www.instagram.com/freedomride_ghana" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/freedom-ride-85bb5b352" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  onClick={scrollToAbout} 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div id="contact">
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <PhoneCall size={16} className="mr-2" />
                +233 27 566 3090
              </li>
              <li className="flex items-center text-gray-300">
                <a href="mailto:support@freedomghana.com" className="hover:text-white transition-colors duration-200">
                  support@freedomghana.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} Freedom. All rights reserved.</p>
        </div>
        {/* Analytics Event Tracking Script */}
        <script dangerouslySetInnerHTML={{ __html: `
          // Track outbound links
          document.querySelectorAll('a[href^="http"]').forEach(link => {
            link.addEventListener('click', function(e) {
              // In a real implementation this would trigger an analytics event
              console.log('Outbound link clicked:', link.href);
            });
          });
          
          // Track form submissions
          document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', function(e) {
              // In a real implementation this would trigger an analytics event
              console.log('Form submitted:', form.id || 'unnamed form');
            });
          });
        `}} />
      </div>
    </footer>
  );
};

export default Footer;