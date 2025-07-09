import { Shield, AlertTriangle, Phone, MapPin, Eye, Users, Bike, Package, Lock, CheckCircle, UserCheck, Mail } from 'lucide-react';

const SafetyGuidelines = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex justify-center mb-3 sm:mb-4">
              <Shield className="text-orange-500" size={40} />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
              Freedom Safety Guidelines
            </h1>
            <p className="text-sm sm:text-base text-gray-600 flex items-center justify-center mb-3 sm:mb-4">
              <Bike className="mr-2" size={14} />
              Your safety is our top priority
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              At Freedom, we are committed to providing safe motorcycle ride-hailing and delivery services across Ghana. 
              These guidelines help ensure everyone's safety on the road.
            </p>
          </div>

          {/* Emergency Notice */}
          <div className="bg-red-50 border-2 border-red-200 p-4 sm:p-6 mb-6 sm:mb-8 rounded-xl sm:rounded-2xl">
            <div className="flex flex-col sm:flex-row items-start">
              <AlertTriangle className="text-red-500 mb-3 sm:mb-0 sm:mr-4 sm:mt-1 flex-shrink-0" size={20} />
              <div className="w-full">
                <h2 className="text-lg sm:text-xl font-bold text-red-800 mb-3">Emergency Contacts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base">
                  <div className="space-y-1">
                    <p className="text-red-700 font-semibold">🚨 Police Emergency: 191</p>
                    <p className="text-red-700 font-semibold">🏥 Ambulance: 193</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-red-700 font-semibold">📞 Freedom Support: +233 275 663 090</p>
                    <p className="text-red-700 font-semibold">📧 Emergency: emergency@freedomghana.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            {/* Rider Safety Guidelines */}
            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center">
                <Users className="mb-2 sm:mb-0 sm:mr-3 text-orange-500" size={28} />
                <span>Passenger Safety Guidelines</span>
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-blue-50 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mb-3 sm:mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={18} />
                    Before Your Ride
                  </h3>
                  <ul className="list-disc list-inside text-blue-700 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <li>Verify the rider's name, photo, and motorcycle details in the app</li>
                    <li>Check the motorcycle license plate matches the app</li>
                    <li>Share your trip details with trusted contacts</li>
                    <li>Ensure your phone is charged and has data/airtime</li>
                    <li>Wait in a safe, well-lit location for pickup</li>
                    <li>Wear bright or reflective clothing, especially at night</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-green-800 mb-3 sm:mb-4 flex items-center">
                    <Bike className="mr-2" size={18} />
                    During Your Ride
                  </h3>
                  <ul className="list-disc list-inside text-green-700 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <li>Always wear the provided helmet - it's the law in Ghana</li>
                    <li>Hold on securely to the designated handles or rider</li>
                    <li>Keep both feet on the footrests at all times</li>
                    <li>Avoid sudden movements that could affect balance</li>
                    <li>Don't use your phone while the motorcycle is moving</li>
                    <li>Trust your instincts - if something feels wrong, speak up</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-purple-800 mb-3 sm:mb-4 flex items-center">
                    <Eye className="mr-2" size={18} />
                    Safety Tips
                  </h3>
                  <ul className="list-disc list-inside text-purple-700 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <li>Follow the route on your app's GPS tracking</li>
                    <li>Report unsafe driving immediately through the app</li>
                    <li>Use the in-app emergency button if needed</li>
                    <li>Don't share personal information beyond what's necessary</li>
                    <li>Keep valuables secure and out of sight</li>
                    <li>Rate your rider honestly to help maintain safety standards</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-orange-800 mb-3 sm:mb-4 flex items-center">
                    <Lock className="mr-2" size={18} />
                    Personal Security
                  </h3>
                  <ul className="list-disc list-inside text-orange-700 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <li>Trust your instincts about riders and situations</li>
                    <li>Avoid rides late at night in unfamiliar areas</li>
                    <li>Keep emergency contacts easily accessible</li>
                    <li>Don't accept rides from unverified riders</li>
                    <li>Stay alert and aware of your surroundings</li>
                    <li>Report suspicious behavior immediately</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Delivery Safety */}
            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center">
                <Package className="mb-2 sm:mb-0 sm:mr-3 text-orange-500" size={28} />
                <span>Delivery Safety Guidelines</span>
              </h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-6 mb-4 sm:mb-6 rounded-r-lg">
                <h3 className="text-base sm:text-lg font-semibold text-yellow-800 mb-3">Package Guidelines</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-yellow-700 mb-2 text-sm sm:text-base">✅ Allowed Items:</h4>
                    <ul className="list-disc list-inside text-yellow-700 text-xs sm:text-sm space-y-1">
                      <li>Food and beverages (properly packaged)</li>
                      <li>Documents and letters</li>
                      <li>Small electronics and gadgets</li>
                      <li>Clothing and accessories</li>
                      <li>Books and educational materials</li>
                      <li>Personal items (non-hazardous)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-700 mb-2 text-sm sm:text-base">❌ Prohibited Items:</h4>
                    <ul className="list-disc list-inside text-yellow-700 text-xs sm:text-sm space-y-1">
                      <li>Illegal drugs or substances</li>
                      <li>Weapons or explosives</li>
                      <li>Hazardous chemicals</li>
                      <li>Live animals</li>
                      <li>Fragile items without proper packaging</li>
                      <li>Items exceeding weight/size limits</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-indigo-50 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-indigo-800 mb-3 sm:mb-4">📦 For Senders</h3>
                  <ul className="list-disc list-inside text-indigo-700 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <li>Package items securely to prevent damage</li>
                    <li>Provide accurate recipient contact information</li>
                    <li>Be available for pickup confirmation</li>
                    <li>Declare any special handling requirements</li>
                    <li>Don't send prohibited or illegal items</li>
                    <li>Track your delivery through the app</li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-teal-800 mb-3 sm:mb-4">📥 For Recipients</h3>
                  <ul className="list-disc list-inside text-teal-700 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <li>Be available at the delivery location</li>
                    <li>Verify rider identity before accepting packages</li>
                    <li>Inspect packages for damage before signing</li>
                    <li>Report any issues immediately through the app</li>
                    <li>Provide a safe delivery location</li>
                    <li>Have identification ready if required</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Rider Safety Requirements */}
            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center">
                <UserCheck className="mb-2 sm:mb-0 sm:mr-3 text-orange-500" size={28} />
                <span>Motorcycle Rider Safety Standards</span>
              </h2>

              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">🏍️ Rider Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">Documentation</h4>
                    <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm space-y-1">
                      <li>Valid motorcycle license</li>
                      <li>Motorcycle registration</li>
                      <li>Insurance coverage</li>
                      <li>Background verification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">Safety Equipment</h4>
                    <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm space-y-1">
                      <li>DOT-approved helmet</li>
                      <li>Reflective vest</li>
                      <li>First aid kit</li>
                      <li>Working lights and signals</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">Motorcycle Standards</h4>
                    <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm space-y-1">
                      <li>Regular maintenance checks</li>
                      <li>Roadworthy condition</li>
                      <li>Passenger seat and footrests</li>
                      <li>Secure storage for deliveries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Weather and Road Safety */}
            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">🌦️ Weather and Road Safety</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-blue-50 p-4 sm:p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-3">Rainy Season Precautions</h3>
                  <ul className="list-disc list-inside text-blue-700 text-xs sm:text-sm space-y-1 sm:space-y-2">
                    <li>Reduce speed on wet roads</li>
                    <li>Increase following distance</li>
                    <li>Use rain gear and waterproof covers</li>
                    <li>Avoid riding through flood-prone areas</li>
                    <li>Check weather conditions before booking</li>
                    <li>Cancel trips if conditions are unsafe</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 sm:p-6 rounded-xl border-l-4 border-red-400">
                  <h3 className="text-base sm:text-lg font-semibold text-red-800 mb-3">Night Riding Safety</h3>
                  <ul className="list-disc list-inside text-red-700 text-xs sm:text-sm space-y-1 sm:space-y-2">
                    <li>Ensure all lights are working properly</li>
                    <li>Wear reflective clothing</li>
                    <li>Avoid poorly lit or dangerous areas</li>
                    <li>Stay extra vigilant for other vehicles</li>
                    <li>Share location with emergency contacts</li>
                    <li>Consider alternative transport in very dangerous areas</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Emergency Procedures */}
            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center">
                <Phone className="mb-2 sm:mb-0 sm:mr-3 text-orange-500" size={28} />
                <span>Emergency Procedures</span>
              </h2>

              <div className="bg-red-50 border-2 border-red-200 p-4 sm:p-6 rounded-xl mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-red-800 mb-3 sm:mb-4">🚨 In Case of Accident</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">Immediate Actions:</h4>
                    <ol className="list-decimal list-inside text-red-700 text-xs sm:text-sm space-y-1">
                      <li>Ensure everyone's safety first</li>
                      <li>Move to a safe location if possible</li>
                      <li>Call emergency services (191/193)</li>
                      <li>Contact Freedom support immediately</li>
                      <li>Don't move injured persons unless in immediate danger</li>
                      <li>Take photos of the scene if safe to do so</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">Information to Provide:</h4>
                    <ul className="list-disc list-inside text-red-700 text-xs sm:text-sm space-y-1">
                      <li>Exact location of the accident</li>
                      <li>Nature and severity of injuries</li>
                      <li>Number of people involved</li>
                      <li>Your Freedom trip ID</li>
                      <li>Rider and vehicle details</li>
                      <li>Any witnesses present</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-orange-50 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-base sm:text-lg font-semibold text-orange-800 mb-3">📱 Using In-App Emergency Features</h3>
                  <ul className="list-disc list-inside text-orange-700 text-xs sm:text-sm space-y-1 sm:space-y-2">
                    <li>Emergency button connects you to support instantly</li>
                    <li>Location sharing with emergency contacts</li>
                    <li>Trip tracking allows monitoring by others</li>
                    <li>Audio recording feature during emergencies</li>
                    <li>Direct connection to local emergency services</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-base sm:text-lg font-semibold text-green-800 mb-3">🏥 Medical Emergencies</h3>
                  <ul className="list-disc list-inside text-green-700 text-xs sm:text-sm space-y-1 sm:space-y-2">
                    <li>Call ambulance services immediately (193)</li>
                    <li>Provide first aid if trained to do so</li>
                    <li>Stay with the injured person until help arrives</li>
                    <li>Notify Freedom support of the situation</li>
                    <li>Cooperate with medical personnel</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">📞 Safety Support Contacts</h2>
              <div className="bg-orange-50 p-4 sm:p-6 rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-orange-800 mb-3">Freedom Safety Team</h3>
                    <div className="space-y-2">
                      <p className="text-orange-700 flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm">
                        <Phone className="mb-1 sm:mb-0 sm:mr-2" size={14} />
                        <span><strong>24/7 Safety Hotline:</strong> +233 275 663 090</span>
                      </p>
                      <p className="text-orange-700 flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm">
                        <Mail className="mb-1 sm:mb-0 sm:mr-2" size={14} />
                        <span><strong>Safety Email:</strong> safety@freedomghana.com</span>
                      </p>
                      <p className="text-orange-700 flex flex-col sm:flex-row sm:items-start text-xs sm:text-sm">
                        <MapPin className="mb-1 sm:mb-0 sm:mr-2 sm:mt-0.5 flex-shrink-0" size={14} />
                        <span><strong>Office:</strong> Zender Street Akweley Cross River, Accra, Ghana</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-orange-800 mb-3">Ghana Emergency Services</h3>
                    <div className="space-y-1 text-xs sm:text-sm">
                      <p className="text-orange-700"><strong>Police Emergency:</strong> 191</p>
                      <p className="text-orange-700"><strong>Ambulance/Medical:</strong> 193</p>
                      <p className="text-orange-700"><strong>Fire Service:</strong> 192</p>
                      <p className="text-orange-700"><strong>Emergency (All Services):</strong> 999</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Note */}
            <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gray-100 rounded-lg border-l-4 border-orange-500">
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                <strong>Remember:</strong> Safety is a shared responsibility. By following these guidelines, we can all contribute to making motorcycle transportation safer across Ghana. If you have safety concerns or suggestions for improvement, please contact our safety team. Together, we can ensure that Freedom remains the safest way to travel and deliver in Ghana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyGuidelines;