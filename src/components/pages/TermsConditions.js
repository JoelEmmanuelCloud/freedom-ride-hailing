import { FileText, Calendar, AlertTriangle } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex justify-center mb-3 sm:mb-4">
              <FileText className="text-orange-500" size={40} />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
              Freedom App – Terms and Conditions of Use
            </h1>
            <p className="text-sm sm:text-base text-gray-600 flex items-center justify-center">
              <Calendar className="mr-2" size={14} />
              Last updated: December 2024
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 sm:p-6 mb-6 sm:mb-8 rounded-r-lg">
              <div className="flex flex-col sm:flex-row items-start">
                <AlertTriangle className="text-orange-500 mb-2 sm:mb-0 sm:mr-3 sm:mt-1 flex-shrink-0" size={18} />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-orange-800 mb-2">Welcome to Freedom</h3>
                  <p className="text-orange-700 mb-0 text-xs sm:text-sm">
                    Welcome to <strong>Freedom</strong>, a mobile platform that connects passengers and customers with professional motorcycle riders for ride-hailing and delivery services. These Terms and Conditions ("Terms") govern your use of the Freedom mobile application and services provided in Ghana. Please read them carefully.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">1. Acceptance of Terms</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                By accessing or using the Freedom App, you confirm that you have read, understood, and agreed to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">2. Services Provided</h2>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-3 sm:mb-4">
                <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Freedom offers two main services:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-orange-600 mb-2 text-sm sm:text-base">🏍️ Ride-Hailing</h5>
                    <p className="text-gray-600 text-xs sm:text-sm">Transport services using motorcycles within various cities in Ghana.</p>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <h5 className="font-semibold text-orange-600 mb-2 text-sm sm:text-base">📦 Delivery</h5>
                    <p className="text-gray-600 text-xs sm:text-sm">Courier and delivery of packages, food, and documents by motorcycle riders.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">3. User Eligibility</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                To use Freedom:
              </p>
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
                <ul className="list-disc list-inside text-blue-700 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>You must be at least <strong>15 years old</strong>.</li>
                  <li>You must comply with all local Ghanaian transport and safety laws.</li>
                </ul>
              </div>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">4. User Responsibilities</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                Freedom users agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-xs sm:text-sm">
                <li>Provide accurate pickup and drop-off locations.</li>
                <li>Ensure timely availability at pickup points.</li>
                <li>Pay all applicable fares, charges, and fees.</li>
                <li>Avoid using the app for illegal or harmful purposes.</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">5. Payments and Charges</h2>
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-3 sm:mb-4">
                <h4 className="font-semibold text-green-800 mb-3 text-sm sm:text-base">Payment Information:</h4>
                <ul className="list-disc list-inside text-green-700 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>Fares are displayed before ride or delivery confirmation.</li>
                  <li>Payments are made via <strong>cash</strong>, <strong>ATM</strong>, or <strong>mobile money</strong> (e.g., MTN Mobile Money, Vodafone Cash, AirtelTigo Money).</li>
                  <li>Freedom reserves the right to add service fees or penalties for cancellations and damages.</li>
                </ul>
              </div>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">6. Cancellations and Refunds</h2>
              <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-3 text-sm sm:text-base">Cancellation Policy:</h4>
                <ul className="list-disc list-inside text-yellow-700 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>Users may cancel bookings before rider confirmation without charge.</li>
                  <li>Late cancellations or no-shows may result in a cancellation fee.</li>
                  <li>Refunds are handled on a case-by-case basis and may take up to <strong>7 working days</strong>.</li>
                </ul>
              </div>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">7. Privacy Policy</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                Freedom respects your privacy. We only collect essential information for service delivery. Your data is protected and will not be shared without your consent unless required by law.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">8. Limitation of Liability</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                Freedom shall not be liable for:
              </p>
              <div className="bg-red-50 border border-red-200 p-4 sm:p-6 rounded-lg mb-3 sm:mb-4">
                <ul className="list-disc list-inside text-red-700 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>Delays, accidents, or damages occurring during rides or deliveries.</li>
                  <li>Loss or damage of parcels or personal belongings.</li>
                  <li>Misconduct or negligence of third-party riders or users.</li>
                </ul>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                <strong>Use of Freedom is at your own risk</strong>, and you agree to hold Freedom harmless for any direct or indirect damages.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">9. Account Suspension or Termination</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                We reserve the right to suspend or permanently block any user or rider for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li>Violating any of these terms.</li>
                <li>Repeated complaints from other users.</li>
                <li>Fraudulent or illegal activity.</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">10. Modifications</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                Freedom may update these Terms from time to time. Continued use of the app after such updates constitutes acceptance of the revised terms.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">11. Governing Law</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                These Terms are governed by and interpreted in accordance with the laws of the <strong>Republic of Ghana</strong>. Any disputes shall be resolved in the courts of competent jurisdiction in Ghana.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">12. Contact Information</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                For questions, feedback, or support, contact us at:
              </p>
              <div className="bg-orange-50 p-4 sm:p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <p className="text-gray-700 mb-1 sm:mb-2 flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm">
                      <span className="mr-0 sm:mr-2 mb-1 sm:mb-0">📧</span>
                      <span><strong>Email:</strong> support@freedomghana.com</span>
                    </p>
                    <p className="text-gray-700 mb-1 sm:mb-2 flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm">
                      <span className="mr-0 sm:mr-2 mb-1 sm:mb-0">📞</span>
                      <span><strong>Phone:</strong> +233 275663090</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 flex flex-col sm:flex-row sm:items-start text-xs sm:text-sm">
                      <span className="mr-0 sm:mr-2 mb-1 sm:mb-0 sm:mt-0.5">📍</span>
                      <span><strong>Office:</strong> Zender Street Akweley Cross River, Accra Ghana</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Note */}
            <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gray-100 rounded-lg border-l-4 border-orange-500">
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                <strong>Legal Notice:</strong> These terms and conditions constitute a legally binding agreement between you and Freedom Ghana. By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms. If you have any questions about these terms, please contact our support team before using the service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;