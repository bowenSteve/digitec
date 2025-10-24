import React from 'react';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
              YOUR PRIVACY MATTERS
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-300">
            Last Updated: January 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Your Privacy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At InfoBridge NiaTech, we are committed to protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that
                you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with
                this policy, please do not access or use our services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-2xl font-bold text-gray-900">Information We Collect</h3>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-4">1.1 Personal Information</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                We may collect personally identifiable information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Company name and job title</li>
                <li>Account credentials (username and password)</li>
                <li>Billing and payment information</li>
                <li>Professional information relevant to our services</li>
                <li>Communication preferences</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">1.2 Automatically Collected Information</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                When you visit our website, we automatically collect certain information about your device and usage:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>IP address and geographic location</li>
                <li>Browser type and version</li>
                <li>Operating system and device information</li>
                <li>Pages visited, time spent, and navigation patterns</li>
                <li>Referring website or source</li>
                <li>Clickstream data and interaction with our website</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">1.3 Cookies and Tracking Technologies</h4>
              <p className="text-gray-600 leading-relaxed">
                We use cookies, web beacons, and similar tracking technologies to collect information about your
                browsing activities. For detailed information about our use of cookies, please refer to our Cookie Policy.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-2xl font-bold text-gray-900">How We Use Your Information</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our services</li>
                <li><strong>Communication:</strong> To respond to inquiries, send updates, and provide customer support</li>
                <li><strong>Personalization:</strong> To customize your experience and provide relevant content</li>
                <li><strong>Analytics:</strong> To analyze usage patterns and improve our website and services</li>
                <li><strong>Marketing:</strong> To send promotional materials and newsletters (with your consent)</li>
                <li><strong>Security:</strong> To detect, prevent, and address security issues and fraud</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms</li>
                <li><strong>Business Operations:</strong> To process payments, manage accounts, and conduct business activities</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-2xl font-bold text-gray-900">How We Share Your Information</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-4">3.1 Service Providers</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                We may share your information with third-party service providers who perform services on our behalf,
                including payment processing, data analysis, email delivery, hosting services, customer service, and
                marketing assistance. These providers are contractually obligated to protect your information and use
                it only for the purposes for which it was disclosed.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-4">3.2 Business Transfers</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                If we are involved in a merger, acquisition, sale of assets, or bankruptcy, your information may be
                transferred as part of that transaction. We will notify you of any such change and its impact on your data.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-4">3.3 Legal Requirements</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                We may disclose your information if required to do so by law or in response to valid requests by public
                authorities (e.g., court orders, subpoenas, or government agencies).
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-4">3.4 Protection of Rights</h4>
              <p className="text-gray-600 leading-relaxed">
                We may disclose information to protect our rights, property, or safety, or that of our users or others,
                including to enforce our Terms of Use and investigate potential violations.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <h3 className="text-2xl font-bold text-gray-900">Data Security</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                We implement industry-standard security measures to protect your personal information from unauthorized
                access, disclosure, alteration, and destruction. Our security practices include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Encryption of data in transit and at rest using SSL/TLS protocols</li>
                <li>Regular security assessments and vulnerability testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and confidentiality</li>
                <li>Secure data storage and backup procedures</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we
                strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                <h3 className="text-2xl font-bold text-gray-900">Data Retention</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                We retain your personal information only for as long as necessary to fulfill the purposes for which it
                was collected, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Meeting legal, accounting, or reporting requirements</li>
                <li>Resolving disputes and enforcing our agreements</li>
                <li>Maintaining business records for operational purposes</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                When we no longer need your information, we will securely delete or anonymize it in accordance with
                our data retention policy and applicable laws.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">6</div>
                <h3 className="text-2xl font-bold text-gray-900">Your Privacy Rights</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                <li><strong>Restriction:</strong> Request restriction of processing of your information</li>
                <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing where consent was the legal basis</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                To exercise any of these rights, please contact us using the information provided in the "Contact Us" section.
                We will respond to your request within the timeframe required by applicable law.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">7</div>
                <h3 className="text-2xl font-bold text-gray-900">International Data Transfers</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                Your information may be transferred to and processed in countries other than your country of residence.
                These countries may have data protection laws that differ from those of your country.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We ensure that such transfers comply with applicable data protection laws and implement appropriate
                safeguards, such as standard contractual clauses, to protect your information.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">8</div>
                <h3 className="text-2xl font-bold text-gray-900">Children's Privacy</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                information from children under 18. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If we become aware that we have collected personal information from a child under 18 without parental
                consent, we will take steps to delete that information from our servers.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">9</div>
                <h3 className="text-2xl font-bold text-gray-900">Third-Party Links and Services</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                Our website may contain links to third-party websites, applications, or services that are not operated
                by us. This Privacy Policy does not apply to third-party websites or services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are not responsible for the privacy practices of third parties. We encourage you to review the
                privacy policies of any third-party websites or services you visit or use.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">10</div>
                <h3 className="text-2xl font-bold text-gray-900">California Privacy Rights</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act
                (CCPA), including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>The right to know what personal information we collect, use, and disclose</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt-out of the sale of personal information (we do not sell personal information)</li>
                <li>The right to non-discrimination for exercising your privacy rights</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                To exercise these rights, please contact us at privacy@infobridgeniatech.com or call our toll-free number.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">11</div>
                <h3 className="text-2xl font-bold text-gray-900">GDPR Compliance (European Users)</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                If you are located in the European Economic Area (EEA), you have rights under the General Data
                Protection Regulation (GDPR). We process your data based on the following legal grounds:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Consent:</strong> You have given explicit consent for specific purposes</li>
                <li><strong>Contract:</strong> Processing is necessary to fulfill our contractual obligations</li>
                <li><strong>Legal Obligation:</strong> Processing is required by law</li>
                <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                You have the right to lodge a complaint with your local data protection authority if you believe we
                have not complied with applicable data protection laws.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">12</div>
                <h3 className="text-2xl font-bold text-gray-900">Changes to This Privacy Policy</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                legal requirements, or other factors. We will notify you of material changes by:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Posting the updated policy on our website with a new "Last Updated" date</li>
                <li>Sending you an email notification (if you have provided your email address)</li>
                <li>Displaying a prominent notice on our website</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">13</div>
                <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-900 font-semibold mb-2">InfoBridge NiaTech - Privacy Team</p>
                <p className="text-gray-600">Email: contact@infobridgenia.com</p>
                <p className="text-gray-600">Address: 207 Bellwood Dr, Pittsburgh, PA 15229, US</p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                This Privacy Policy was last updated on January 2025. We encourage you to review it periodically.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
