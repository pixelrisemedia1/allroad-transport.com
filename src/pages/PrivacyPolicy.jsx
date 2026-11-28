export default function PrivacyPolicy() {
  return (
    <div className="font-inter">
      <section className="relative py-24 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-white/40 text-sm">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-muted-foreground leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">1. Data Controller</h2>
            <p>ALLROAD d.o.o., registered in the Republic of Serbia, Pavla Papa 14, 21000 Novi Sad, Serbia (hereinafter "ALLROAD", "we", "us", or "our"), is the data controller for personal data processed through this website.</p>
            <p className="mt-2">Contact: <a href="mailto:info@allroad-transport.com" className="text-cyan hover:underline">info@allroad-transport.com</a> | +381 63 1206764</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">2. What Data We Collect</h2>
            <p>We collect the following categories of personal data:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Contact data:</strong> name, email address, phone number when you submit a contact or quote request form</li>
              <li><strong>Communication data:</strong> messages and inquiries you send us</li>
              <li><strong>Technical data:</strong> IP address, browser type and version, time zone, operating system (via cookies and analytics)</li>
              <li><strong>Usage data:</strong> pages visited, time spent, referring URLs</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">3. Legal Basis for Processing</h2>
            <p>We process your personal data on the following legal bases:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Contractual necessity:</strong> to respond to quote requests and service inquiries</li>
              <li><strong>Legitimate interests:</strong> to operate and improve our website and services</li>
              <li><strong>Consent:</strong> for non-essential cookies and marketing communications</li>
              <li><strong>Legal obligation:</strong> where required by Serbian law or EU regulations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">4. How We Use Your Data</h2>
            <p>We use your personal data to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Respond to inquiries and provide freight and logistics services</li>
              <li>Process quote requests and send relevant commercial proposals</li>
              <li>Improve our website functionality and user experience</li>
              <li>Comply with legal obligations under Serbian and EU law</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">5. Data Sharing</h2>
            <p>We do not sell your personal data. We may share your data with:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Our logistics partners and subcontractors, only as necessary to fulfill services</li>
              <li>IT service providers and hosting companies under data processing agreements</li>
              <li>Public authorities where required by law</li>
            </ul>
            <p className="mt-2">Any international transfers of personal data are made in accordance with GDPR Chapter V requirements.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">6. Data Retention</h2>
            <p>We retain personal data for no longer than necessary for the purposes for which it was collected. Contact and inquiry data is retained for up to 5 years. Technical and analytical data is retained for up to 2 years.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">7. Your Rights</h2>
            <p>Under the General Data Protection Regulation (GDPR) and Serbian data protection law, you have the right to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Erase your data ("right to be forgotten")</li>
              <li>Restrict processing</li>
              <li>Data portability</li>
              <li>Object to processing based on legitimate interests</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-2">To exercise any of these rights, contact us at <a href="mailto:info@allroad-transport.com" className="text-cyan hover:underline">info@allroad-transport.com</a>.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">8. Cookies</h2>
            <p>We use cookies to improve your browsing experience. Please see our <a href="/CookiePolicy" className="text-cyan hover:underline">Cookie Policy</a> for details.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website. The date at the top of this policy indicates when it was last revised.</p>
          </div>

          <div className="bg-muted/40 rounded-2xl p-6 border border-black/[0.04]">
            <h3 className="text-navy font-bold mb-2">Contact Us</h3>
            <p className="text-sm">ALLROAD d.o.o. · Pavla Papa 14, 21000 Novi Sad, Serbia<br />
            Email: <a href="mailto:info@allroad-transport.com" className="text-cyan hover:underline">info@allroad-transport.com</a> · Phone: +381 63 1206764</p>
          </div>
        </div>
      </section>
    </div>
  );
}