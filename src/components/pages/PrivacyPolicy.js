import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, Globe, MapPin, Phone, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          {...fadeInUp}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Shield className="text-orange-500" size={48} />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Freedom App – Privacy Policy</h1>
            <p className="text-gray-600 flex items-center justify-center">
              <Lock className="mr-2" size={16} />
              Last updated: December 2024
            </p>
          </div>

          {/* Privacy Commitment */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-2xl mb-8">
            <div className="flex items-start">
              <Shield className="mr-4 mt-1 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-2xl font-bold mb-3">Our Privacy Commitment</h2>
                <p className="text-lg leading-relaxed">
                  At Freedom, we are committed to protecting your privacy and ensuring the security 
                  of your personal information. This policy explains how we collect, use, and protect your data 
                  when you use our motorcycle ride-hailing and delivery services in Ghana.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Database className="mr-3 text-orange-500" size={28} />
                1. Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">1.1 Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect information you provide when you create an account or use our services:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Name, email address, and phone number</li>
                  <li>Profile photo and emergency contact information</li>
                  <li>Payment information (mobile money details for MTN Mobile Money, Vodafone Cash, AirtelTigo Money)</li>
                  <li>Driver documentation (motorcycle license, registration, insurance)</li>
                  <li>Identification documents for verification</li>
                  <li>Communication preferences and feedback</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">1.2 Location Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect precise location data when you use our services to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Connect you with nearby motorcycle riders</li>
                <li>Navigate to pickup and destination locations</li>
                <li>Provide real-time trip tracking for safety</li>
                <li>Calculate accurate fares based on distance</li>
                <li>Improve our services and routing within Ghana</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">1.3 Usage Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We automatically collect information about your app usage:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Trip details (pickup/drop-off locations, duration, distance)</li>
                <li>App usage patterns and service preferences</li>
                <li>Device information (model, operating system, unique identifiers)</li>
                <li>Log data (IP address, access times, features used)</li>
                <li>Payment transaction records</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Eye className="mr-3 text-orange-500" size={28} />
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use your information to provide, maintain, and improve our motorcycle ride-hailing and delivery services:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">🏍️ Service Delivery</h4>
                  <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                    <li>Process ride and delivery requests</li>
                    <li>Connect passengers with motorcycle riders</li>
                    <li>Calculate fares and process mobile money payments</li>
                    <li>Provide customer support</li>
                    <li>Send trip confirmations and updates</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">🛡️ Safety & Security</h4>
                  <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                    <li>Verify rider identity and motorcycle documentation</li>
                    <li>Monitor for fraud and suspicious activity</li>
                    <li>Investigate safety incidents</li>
                    <li>Comply with Ghanaian transport regulations</li>
                    <li>Emergency contact and location sharing</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-3">📈 Service Improvement</h4>
                <ul className="list-disc list-inside text-orange-700 space-y-2">
                  <li>Analyze usage patterns to improve user experience in Ghana</li>
                  <li>Develop new features for motorcycle transportation</li>
                  <li>Optimize routing for Ghanaian cities and traffic patterns</li>
                  <li>Send service updates and promotional offers (with your consent)</li>
                  <li>Improve rider-passenger matching algorithms</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Globe className="mr-3 text-orange-500" size={28} />
                3. Information Sharing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share your information only in these specific circumstances:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 With Motorcycle Riders</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We share limited information with our verified motorcycle riders to fulfill your service requests, 
                including your pickup location, destination, and contact information for coordination.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 With Service Partners</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Mobile money providers (MTN, Vodafone, AirtelTigo) for payment processing</li>
                <li>Mapping services for navigation within Ghana</li>
                <li>SMS and notification services for communication</li>
                <li>Analytics providers for service improvement (anonymized data only)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Legal Requirements</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may disclose information when required by Ghanaian law, court order, or government request, 
                or to protect the safety of our users and the public.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Lock className="mr-3 text-orange-500" size={28} />
                4. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement robust security measures to protect your personal information:
              </p>
              
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                <h4 className="font-semibold text-red-800 mb-3">🔐 Security Measures:</h4>
                <ul className="list-disc list-inside text-red-700 space-y-2">
                  <li>End-to-end encryption of sensitive data</li>
                  <li>Secure mobile money payment processing</li>
                  <li>Regular security audits and system updates</li>
                  <li>Multi-factor authentication for rider accounts</li>
                  <li>Employee background checks and data protection training</li>
                  <li>Secure data centers with 24/7 monitoring</li>
                </ul>
              </div>
              <p className="text-gray-600 leading-relaxed">
                While we implement strong security measures, no system is 100% secure. We encourage you to use 
                strong passwords and keep your account information confidential.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <UserCheck className="mr-3 text-orange-500" size={28} />
                5. Your Rights and Choices
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-3">📱 Account Control</h4>
                  <ul className="list-disc list-inside text-purple-700 space-y-1 text-sm">
                    <li>Access and view your personal information</li>
                    <li>Update or correct your profile data</li>
                    <li>Download your trip history and data</li>
                    <li>Delete your account permanently</li>
                    <li>Request data correction or removal</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-3">⚙️ Privacy Settings</h4>
                  <ul className="list-disc list-inside text-indigo-700 space-y-1 text-sm">
                    <li>Opt out of promotional messages</li>
                    <li>Manage notification preferences</li>
                    <li>Control location sharing settings</li>
                    <li>Adjust privacy and visibility options</li>
                    <li>Choose communication preferences</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> If you are under 18 years old, you must have parental consent to use our services. 
                  Our minimum age requirement is 15 years with guardian approval.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We retain your information only as long as necessary for service provision and legal compliance:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Account information:</strong> Until you delete your account</li>
                  <li><strong>Trip and delivery data:</strong> 7 years for tax and legal compliance</li>
                  <li><strong>Location data:</strong> 6 months for service improvement</li>
                  <li><strong>Payment records:</strong> 7 years as required by Ghanaian financial regulations</li>
                  <li><strong>Communication records:</strong> 2 years for customer service</li>
                  <li><strong>Safety incident reports:</strong> 5 years for legal protection</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Children's Privacy</h2>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <p className="text-blue-800 leading-relaxed">
                  Our services have a minimum age requirement of <strong>15 years</strong> with parental consent. 
                  We do not knowingly collect personal information from children under 15 without parental approval. 
                  If we discover we have collected information from a child under 15 without consent, we will 
                  immediately delete such information.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your information is primarily stored and processed within Ghana. If we need to transfer data 
                internationally for technical or business reasons, we ensure appropriate safeguards are in place 
                to protect your information in accordance with this privacy policy and Ghanaian data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this privacy policy to reflect changes in our practices or legal requirements. 
                We will notify you of material changes through the app, SMS, or email. Your continued use of 
                Freedom services after receiving notice constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our app may contain links to third-party services or integrate with external platforms. 
                We are not responsible for their privacy practices. Please review their privacy policies 
                before sharing any information with third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about this privacy policy or our privacy practices, please contact us:
              </p>
              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <Mail className="mr-3 text-orange-500" size={20} />
                      <div>
                        <p className="text-gray-700 font-semibold">Email Support</p>
                        <p className="text-gray-600 text-sm">support@freedomghana.com</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      <Phone className="mr-3 text-orange-500" size={20} />
                      <div>
                        <p className="text-gray-700 font-semibold">Phone Support</p>
                        <p className="text-gray-600 text-sm">+233 275 663 090</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start">
                      <MapPin className="mr-3 text-orange-500 mt-1" size={20} />
                      <div>
                        <p className="text-gray-700 font-semibold">Office Address</p>
                        <p className="text-gray-600 text-sm">
                          Zender Street Akweley Cross River<br />
                          Accra, Ghana
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg border border-orange-200">
                  <p className="text-gray-700 text-sm">
                    <strong>Data Protection Officer:</strong> For specific privacy concerns or data protection 
                    inquiries, you can reach our Data Protection Officer at privacy@freedomghana.com
                  </p>
                </div>
              </div>
            </section>

            {/* Footer Note */}
            <div className="mt-12 p-6 bg-gray-100 rounded-lg border-l-4 border-orange-500">
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Transparency Commitment:</strong> This privacy policy is designed to be clear and transparent 
                about our data practices. We believe in earning your trust through honest communication about how we 
                handle your personal information. If you have any concerns or questions, please don't hesitate to 
                contact us – we're here to help and ensure your privacy is protected.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;