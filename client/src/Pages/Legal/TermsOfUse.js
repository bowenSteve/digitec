import React from 'react';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const TermsOfUse = () => {
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
              LEGAL INFORMATION
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Terms of Use</h1>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to InfoBridge NiaTech</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms of Use ("Terms") govern your access to and use of the InfoBridge NiaTech website,
                services, and products (collectively, the "Services"). By accessing or using our Services, you
                agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                By accessing and using InfoBridge NiaTech's Services, you acknowledge that you have read, understood,
                and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all visitors, users,
                and others who access or use the Services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to update or modify these Terms at any time without prior notice. Your continued
                use of the Services following any changes constitutes acceptance of those changes. We encourage you to
                review these Terms periodically.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-2xl font-bold text-gray-900">Services Description</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                InfoBridge NiaTech provides comprehensive technology solutions including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>LiDAR data processing and analysis services</li>
                <li>Custom software development and engineering</li>
                <li>Software quality assurance and testing</li>
                <li>Advanced data analytics and business intelligence</li>
                <li>Consulting and technical support services</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                The specific scope, deliverables, and terms of each project will be defined in separate service
                agreements or statements of work.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-2xl font-bold text-gray-900">User Accounts and Registration</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                To access certain features of our Services, you may be required to create an account. When creating
                an account, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                We reserve the right to suspend or terminate accounts that violate these Terms or engage in
                fraudulent, abusive, or illegal activities.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <h3 className="text-2xl font-bold text-gray-900">Intellectual Property Rights</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                All content, features, and functionality of our Services, including but not limited to text, graphics,
                logos, icons, images, audio clips, video clips, data compilations, software, and the compilation thereof
                (collectively, "Content") are the exclusive property of InfoBridge NiaTech or its licensors and are
                protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                Unless otherwise specified in a separate written agreement, all deliverables, custom software, and work
                products created specifically for clients remain the intellectual property of the respective client upon
                full payment, subject to our retention of underlying proprietary tools, methodologies, and frameworks.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any
                of our proprietary Content without our express written permission.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                <h3 className="text-2xl font-bold text-gray-900">Prohibited Uses</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                You agree not to use our Services:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>In any way that violates any applicable national or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate InfoBridge NiaTech, our employees, or other users</li>
                <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
                <li>To introduce viruses, trojans, worms, logic bombs, or other malicious or technologically harmful material</li>
                <li>To attempt to gain unauthorized access to any portion of our Services, systems, or networks</li>
                <li>To interfere with or disrupt the integrity or performance of our Services</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">6</div>
                <h3 className="text-2xl font-bold text-gray-900">Data Privacy and Security</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                We take data privacy and security seriously. Our collection, use, and protection of your personal
                information is governed by our Privacy Policy. By using our Services, you consent to such processing
                and warrant that all data provided by you is accurate.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For projects involving client data, we implement industry-standard security measures and comply with
                applicable data protection regulations. Specific data handling procedures will be outlined in project-specific
                agreements and may include non-disclosure agreements (NDAs) and data processing agreements (DPAs).
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">7</div>
                <h3 className="text-2xl font-bold text-gray-900">Payment Terms</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                Payment terms for services will be specified in individual service agreements or invoices. Unless
                otherwise agreed in writing:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Payment is due within 30 days of invoice date</li>
                <li>Late payments may incur interest charges at the rate of 1.5% per month or the maximum allowed by law</li>
                <li>We reserve the right to suspend services for accounts with overdue payments</li>
                <li>All fees are non-refundable unless otherwise stated in your service agreement</li>
                <li>Prices are subject to change with 30 days' notice for ongoing services</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">8</div>
                <h3 className="text-2xl font-bold text-gray-900">Warranties and Disclaimers</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                While we strive to provide high-quality services, our Services are provided "AS IS" and "AS AVAILABLE"
                without warranties of any kind, either express or implied, including but not limited to implied warranties
                of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                We do not warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>The Services will be uninterrupted, timely, secure, or error-free</li>
                <li>The results obtained from use of the Services will be accurate or reliable</li>
                <li>Any errors in the Services will be corrected</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                Specific warranties for project deliverables will be outlined in individual service agreements.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">9</div>
                <h3 className="text-2xl font-bold text-gray-900">Limitation of Liability</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                To the maximum extent permitted by applicable law, InfoBridge NiaTech shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
                whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses
                resulting from:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Your access to or use of or inability to access or use the Services</li>
                <li>Any conduct or content of any third party on the Services</li>
                <li>Any content obtained from the Services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                Our total liability for any claims arising from or relating to these Terms or the Services shall not
                exceed the amount paid by you to InfoBridge NiaTech in the twelve (12) months preceding the claim.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">10</div>
                <h3 className="text-2xl font-bold text-gray-900">Indemnification</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                You agree to defend, indemnify, and hold harmless InfoBridge NiaTech, its affiliates, licensors, and
                service providers, and its and their respective officers, directors, employees, contractors, agents,
                licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments,
                awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating
                to your violation of these Terms or your use of the Services.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">11</div>
                <h3 className="text-2xl font-bold text-gray-900">Termination</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                We may terminate or suspend your account and access to the Services immediately, without prior notice
                or liability, for any reason, including without limitation if you breach these Terms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Upon termination, your right to use the Services will immediately cease. All provisions of these Terms
                that by their nature should survive termination shall survive, including ownership provisions, warranty
                disclaimers, indemnity, and limitations of liability.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">12</div>
                <h3 className="text-2xl font-bold text-gray-900">Governing Law and Dispute Resolution</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
                InfoBridge NiaTech is registered, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Any disputes arising out of or relating to these Terms or the Services shall first be attempted to be
                resolved through good-faith negotiation. If negotiations fail, disputes shall be resolved through binding
                arbitration in accordance with the rules of the applicable arbitration association, or through the courts
                of competent jurisdiction in our registered location.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">13</div>
                <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-900 font-semibold mb-2">InfoBridge NiaTech</p>
                <p className="text-gray-600">Email: contact@infobridgenia.com</p>
                <p className="text-gray-600">Address: 207 Bellwood Dr, Pittsburgh, PA 15229, US</p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                These Terms of Use were last updated on January 2025. Please review them periodically for any changes.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
