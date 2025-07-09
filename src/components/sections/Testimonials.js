import React from 'react';

const Testimonials = () => {

  return (
    <section className={`py-16 px-6 bg-gray-100`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What Our Customers Say
        </h2>
        
        <div className={`p-8 rounded-xl bg-white shadow-lg mb-8`}>
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                <img src="/images/Grace.png" alt="Customer" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Grace Asante</h3>
              <p className={`text-gray-600`}>Tamale</p>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <blockquote className="text-lg italic">
            "Freedom Ride is a lifesaver during rush hour in Tamale. The app is user-friendly, and I love scheduling rides in advance. Their customer support is always responsive. Highly recommended!"
          </blockquote>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`p-6 rounded-xl bg-white shadow-lg hover:-translate-y-2 transition-transform duration-300`}>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="italic mb-2">
              "The delivery service is incredibly fast. I sent documents across town and they arrived within 30 minutes. Perfect for urgent deliveries!"
            </p>
            <div className="flex items-center">
              <p className="font-semibold">Kofi Mensah</p>
              <span className="mx-2">•</span>
              <p className={`text-gray-600`}>Accra</p>
            </div>
          </div>
          
          <div className={`p-6 rounded-xl bg-white shadow-lg hover:-translate-y-2 transition-transform duration-300`}>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="italic mb-2">
              "I use Freedom for my daily commute to work. The drivers are professional and always on time. The mobile money payment option is super convenient!"
            </p>
            <div className="flex items-center">
              <p className="font-semibold">Ama Darko</p>
              <span className="mx-2">•</span>
              <p className={`text-gray-600`}>Kumasi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;