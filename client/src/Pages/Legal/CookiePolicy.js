import React from 'react';
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const CookiePolicy = () => {
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
              TRANSPARENCY IN TRACKING
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Cookie Policy</h1>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Our Use of Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This Cookie Policy explains how InfoBridge NiaTech ("we", "us", or "our") uses cookies and similar
                tracking technologies on our website. This policy helps you understand what cookies are, how we use
                them, and how you can manage your cookie preferences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By continuing to use our website, you consent to our use of cookies in accordance with this Cookie Policy.
                If you do not agree to our use of cookies, you should adjust your browser settings or refrain from using
                our website.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-2xl font-bold text-gray-900">What Are Cookies?</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                Cookies serve various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Remembering your preferences and settings</li>
                <li>Enabling website functionality and features</li>
                <li>Analyzing how visitors use our website</li>
                <li>Delivering personalized content and advertisements</li>
                <li>Improving website performance and user experience</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                Cookies can be "session" cookies (which are deleted when you close your browser) or "persistent" cookies
                (which remain on your device for a set period or until you delete them).
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-2xl font-bold text-gray-900">Types of Cookies We Use</h3>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-4">2.1 Strictly Necessary Cookies</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                These cookies are essential for our website to function properly and cannot be switched off. They are
                usually set in response to actions you take, such as:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Logging into your account</li>
                <li>Setting privacy preferences</li>
                <li>Filling in forms</li>
                <li>Accessing secure areas of the website</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                <strong>Examples:</strong> Authentication cookies, security cookies, session management cookies
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">2.2 Performance and Analytics Cookies</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                These cookies help us understand how visitors interact with our website by collecting and reporting
                information anonymously. They allow us to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Count visits and traffic sources</li>
                <li>Measure and improve website performance</li>
                <li>Identify popular pages and content</li>
                <li>Understand navigation patterns</li>
                <li>Detect and troubleshoot errors</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                <strong>Examples:</strong> Google Analytics, internal analytics tools
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">2.3 Functionality Cookies</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                These cookies enable enhanced functionality and personalization, such as:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Remembering your preferences (language, region, font size)</li>
                <li>Recognizing you when you return to our website</li>
                <li>Providing personalized content and recommendations</li>
                <li>Enabling social media features</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                <strong>Examples:</strong> Preference cookies, language selection cookies, user interface customization
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">2.4 Targeting and Advertising Cookies</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                These cookies are used to deliver advertisements more relevant to you and your interests. They may be
                set by us or by third-party advertising partners. These cookies:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Track your browsing activity across websites</li>
                <li>Build a profile of your interests</li>
                <li>Deliver targeted advertisements</li>
                <li>Measure advertising campaign effectiveness</li>
                <li>Limit the number of times you see an ad</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                <strong>Examples:</strong> Google Ads, Facebook Pixel, LinkedIn Insight Tag, retargeting cookies
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-2xl font-bold text-gray-900">First-Party vs. Third-Party Cookies</h3>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-4">3.1 First-Party Cookies</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                First-party cookies are set directly by InfoBridge NiaTech when you visit our website. We use these
                cookies to operate our website and provide you with our services.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-4">3.2 Third-Party Cookies</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                Third-party cookies are set by domains other than InfoBridge NiaTech. These cookies are typically used
                for analytics, advertising, and social media integration. Third-party service providers we work with include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Website traffic analysis and reporting</li>
                <li><strong>Google Ads:</strong> Advertising and remarketing</li>
                <li><strong>Facebook:</strong> Social media integration and advertising</li>
                <li><strong>LinkedIn:</strong> Professional networking and B2B advertising</li>
                <li><strong>Hotjar:</strong> User behavior analytics and heatmaps</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                Each third-party provider has its own privacy and cookie policies, which we encourage you to review.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <h3 className="text-2xl font-bold text-gray-900">Other Tracking Technologies</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                In addition to cookies, we may use other tracking technologies:
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-4">4.1 Web Beacons (Pixels)</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                Small graphic images (also known as "pixel tags" or "clear GIFs") embedded in web pages or emails that
                work with cookies to identify users and track behavior.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-4">4.2 Local Storage</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                HTML5 local storage allows websites to store data locally in your browser with no expiration date,
                providing more storage capacity than cookies.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-4">4.3 Session Storage</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                Similar to local storage but data is cleared when the browser tab is closed.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-4">4.4 Device Fingerprinting</h4>
              <p className="text-gray-600 leading-relaxed">
                Techniques that collect information about your device configuration to create a unique identifier,
                used for fraud prevention and security purposes.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                <h3 className="text-2xl font-bold text-gray-900">How to Manage Cookies</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                You have several options for managing cookies and tracking technologies:
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-4">5.1 Browser Settings</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Block all cookies</li>
                <li>Accept only first-party cookies</li>
                <li>Delete cookies after each browsing session</li>
                <li>Make exceptions for trusted websites</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                Browser-specific cookie management instructions:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-3 space-y-2">
                <p className="text-gray-600"><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</p>
                <p className="text-gray-600"><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</p>
                <p className="text-gray-600"><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</p>
                <p className="text-gray-600"><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</p>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">5.2 Cookie Preference Center</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                When you first visit our website, you'll see a cookie banner allowing you to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences by category</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                You can change your preferences at any time by clicking the "Cookie Settings" link in our website footer.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">5.3 Opt-Out Tools</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                For advertising cookies, you can use industry opt-out tools:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Network Advertising Initiative (NAI):</strong> optout.networkadvertising.org</li>
                <li><strong>Digital Advertising Alliance (DAA):</strong> optout.aboutads.info</li>
                <li><strong>European Interactive Digital Advertising Alliance (EDAA):</strong> youronlinechoices.eu</li>
                <li><strong>Google Ads Settings:</strong> adssettings.google.com</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">5.4 Do Not Track (DNT)</h4>
              <p className="text-gray-600 leading-relaxed">
                Most browsers have a "Do Not Track" (DNT) feature that signals websites not to track your browsing.
                However, there is no universal standard for how websites should respond to DNT signals, and we currently
                do not respond to DNT signals.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">6</div>
                <h3 className="text-2xl font-bold text-gray-900">Impact of Blocking Cookies</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                While you have the right to block cookies, please be aware that doing so may impact your experience
                on our website:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Some website features and functionality may not work properly</li>
                <li>You may need to re-enter information or preferences on each visit</li>
                <li>Personalized content and recommendations may not be available</li>
                <li>You may still see advertisements, but they will be less relevant to your interests</li>
                <li>We may not be able to remember your cookie preferences</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                Strictly necessary cookies cannot be disabled as they are essential for the website to function.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">7</div>
                <h3 className="text-2xl font-bold text-gray-900">Cookie Retention Periods</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                Different cookies have different retention periods:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div>
                  <p className="text-gray-900 font-semibold">Session Cookies</p>
                  <p className="text-gray-600">Deleted when you close your browser</p>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Short-term Persistent Cookies</p>
                  <p className="text-gray-600">Remain for up to 30 days</p>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Medium-term Persistent Cookies</p>
                  <p className="text-gray-600">Remain for 30 days to 1 year</p>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Long-term Persistent Cookies</p>
                  <p className="text-gray-600">Remain for more than 1 year (up to 2 years maximum)</p>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">8</div>
                <h3 className="text-2xl font-bold text-gray-900">Mobile Devices and Apps</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                If you access our website through a mobile device or app, you can manage tracking technologies through
                your device settings:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>iOS:</strong> Settings → Privacy → Tracking / Advertising</li>
                <li><strong>Android:</strong> Settings → Google → Ads / Privacy</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                You can also reset your advertising identifier or opt out of personalized advertising in your device settings.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">9</div>
                <h3 className="text-2xl font-bold text-gray-900">Updates to This Cookie Policy</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                We may update this Cookie Policy from time to time to reflect changes in:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>The cookies and tracking technologies we use</li>
                <li>Legal or regulatory requirements</li>
                <li>Our business practices and services</li>
                <li>User feedback and industry best practices</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                The "Last Updated" date at the top of this policy indicates when it was last revised. We encourage you
                to review this policy periodically to stay informed about how we use cookies.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">10</div>
                <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-900 font-semibold mb-2">InfoBridge NiaTech - Privacy Team</p>
                <p className="text-gray-600">Email: contact@infobridgenia.com</p>
                <p className="text-gray-600">Address: 207 Bellwood Dr, Pittsburgh, PA 15229, US</p>
              </div>
            </div>

            {/* Related Policies */}
            <div className="mb-10">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Related Policies</h4>
                <p className="text-gray-600 mb-3">
                  For more information about how we protect your privacy, please review:
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="/privacy-policy" className="text-red-500 hover:text-red-600 font-semibold">
                      → Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms-of-use" className="text-red-500 hover:text-red-600 font-semibold">
                      → Terms of Use
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Last Updated */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                This Cookie Policy was last updated on January 2025. Please review it periodically for any changes.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
