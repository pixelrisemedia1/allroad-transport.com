export default function TermsConditions() {
  return (
    <div className="font-inter">
      <section className="relative py-24 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Terms & Conditions</h1>
          <p className="mt-2 text-white/40 text-sm">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-muted-foreground leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">1. Introduction</h2>
            <p>These Terms and Conditions ("Terms") govern the use of the website operated by ALLROAD d.o.o. ("ALLROAD", "we", "us"), a company registered in the Republic of Serbia with its registered office at Pavla Papa 14, 21000 Novi Sad, Serbia. By accessing or using our website, you agree to be bound by these Terms.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">2. Services</h2>
            <p>ALLROAD provides freight forwarding and logistics services including sea freight, road freight, rail freight, multimodal transport, and cargo insurance. Service agreements are governed by separate contracts and the applicable General Conditions of the International Federation of Freight Forwarders Associations (FIATA).</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">3. Website Use</h2>
            <p>You may use our website for lawful purposes only. You must not:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Transmit any unsolicited or unauthorized advertising material</li>
              <li>Attempt to gain unauthorized access to any part of the website or its related systems</li>
              <li>Reproduce, duplicate, copy, or resell any part of the website content without our written consent</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">4. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, images, and software, is the property of ALLROAD d.o.o. or its content suppliers and is protected by Serbian and international copyright laws. Unauthorized use is strictly prohibited.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">5. Quote Requests</h2>
            <p>Quote requests submitted through our website are not binding offers. Any quote provided by ALLROAD is subject to availability, current market conditions, and formal acceptance by both parties. ALLROAD reserves the right to decline any request without obligation.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">6. Limitation of Liability</h2>
            <p>To the fullest extent permitted by applicable law, ALLROAD d.o.o. shall not be liable for any indirect, incidental, or consequential damages arising from the use of, or inability to use, this website or any information contained therein. Our total liability to you for any claim arising from use of the website shall not exceed €100.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">7. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage arising from your use of them.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">8. Privacy</h2>
            <p>Your use of this website is also governed by our <a href="/PrivacyPolicy" className="text-cyan hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">9. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the Republic of Serbia. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the competent courts in Novi Sad, Serbia.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy mb-3">10. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following any changes constitutes your acceptance of the new Terms.</p>
          </div>

          <div className="bg-muted/40 rounded-2xl p-6 border border-black/[0.04]">
            <h3 className="text-navy font-bold mb-2">Contact</h3>
            <p className="text-sm">ALLROAD d.o.o. · Pavla Papa 14, 21000 Novi Sad, Serbia<br />
            Email: <a href="mailto:info@allroad-transport.com" className="text-cyan hover:underline">info@allroad-transport.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}