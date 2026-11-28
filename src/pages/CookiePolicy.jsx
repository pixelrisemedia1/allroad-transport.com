export default function CookiePolicy() {
  return (
    <div className="font-inter">
      <section className="relative py-24 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Cookie Policy</h1>
          <p className="mt-2 text-white/40 text-sm">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-muted-foreground leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">1. What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They allow the website to recognize your device and remember information about your visit. Cookies help us provide you with a better experience and allow us to improve our site.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">2. Cookies We Use</h2>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left px-4 py-3 text-navy font-semibold">Cookie Name</th>
                    <th className="text-left px-4 py-3 text-navy font-semibold">Type</th>
                    <th className="text-left px-4 py-3 text-navy font-semibold">Purpose</th>
                    <th className="text-left px-4 py-3 text-navy font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["cookie_consent", "Essential", "Stores your cookie consent preference", "1 year"],
                    ["session", "Essential", "Maintains your session state", "Session"],
                    ["_ga", "Analytics", "Google Analytics — identifies unique visitors", "2 years"],
                    ["_gid", "Analytics", "Google Analytics — distinguishes users", "24 hours"],
                    ["_fbp", "Marketing", "Facebook Pixel — tracks conversions", "3 months"],
                  ].map(([name, type, purpose, duration]) => (
                    <tr key={name}>
                      <td className="px-4 py-3 font-mono text-xs">{name}</td>
                      <td className="px-4 py-3">{type}</td>
                      <td className="px-4 py-3">{purpose}</td>
                      <td className="px-4 py-3">{duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">3. Types of Cookies</h2>
            <div className="space-y-4">
              {[
                { type: "Essential Cookies", desc: "These cookies are necessary for the website to function properly. They enable core features such as page navigation, consent management, and security. You cannot opt out of these cookies." },
                { type: "Analytics Cookies", desc: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the structure and content of our website." },
                { type: "Marketing Cookies", desc: "These cookies track your online activity to help us deliver more relevant advertising or limit how many times you see an ad. They are usually placed by advertising networks with our permission." },
              ].map(({ type, desc }) => (
                <div key={type}>
                  <h3 className="text-navy font-semibold mb-1">{type}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">4. Managing Cookies</h2>
            <p>You can control and/or delete cookies at any time. You can delete all cookies already on your device and set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our site.</p>
            <p className="mt-2">For more information about managing cookies in your browser, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">allaboutcookies.org</a>.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">5. Your Consent</h2>
            <p>When you first visit our website, a cookie banner will appear asking for your consent to non-essential cookies. You can change your preferences at any time by clearing your browser cookies and revisiting the site.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">6. Contact</h2>
            <p>If you have questions about our use of cookies, please contact us at <a href="mailto:info@allroad-transport.com" className="text-cyan hover:underline">info@allroad-transport.com</a>.</p>
          </div>

        </div>
      </section>
    </div>
  );
}