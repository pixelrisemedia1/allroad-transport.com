import { Eye, Type, Monitor, Headphones, Keyboard, Globe } from "lucide-react";

const FEATURES = [
  { icon: Type, title: "Text Resizing", description: "You can increase or decrease text size using the accessibility widget (eye icon) on the right side of every page. Text can be scaled from 80% to 150% of the default size." },
  { icon: Monitor, title: "High Contrast Mode", description: "Our accessibility widget offers a high contrast mode that improves readability for users with visual impairments or color blindness." },
  { icon: Keyboard, title: "Keyboard Navigation", description: "All interactive elements on our website are fully accessible via keyboard. You can navigate using Tab, Enter, and arrow keys without requiring a mouse." },
  { icon: Headphones, title: "Screen Reader Support", description: "Our website is built with semantic HTML5 and ARIA labels to ensure compatibility with popular screen readers including NVDA, JAWS, and VoiceOver." },
  { icon: Globe, title: "Language & Clarity", description: "All content is written in clear, plain language. We avoid unnecessary jargon and provide clear calls to action throughout the site." },
  { icon: Eye, title: "Color & Visual Design", description: "We maintain sufficient color contrast ratios throughout the site in accordance with WCAG 2.1 Level AA standards, ensuring readability for users with low vision." },
];

export default function Accessibility() {
  return (
    <div className="font-inter">
      <section className="relative py-24 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">Inclusive Design</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Accessibility Statement</h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            ALLROAD is committed to making our website accessible to everyone.
          </p>
          <p className="mt-2 text-white/40 text-sm">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground leading-relaxed text-lg">
              ALLROAD d.o.o. is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-navy mb-8">Accessibility Features</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex gap-4 p-5 bg-muted/40 rounded-2xl border border-black/[0.04]">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <h3 className="text-navy font-semibold mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-navy mb-2">Conformance Status</h2>
              <p>We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible to people with disabilities.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy mb-2">Known Limitations</h2>
              <p>While we strive for full accessibility, some older content or third-party embedded tools may not yet meet all WCAG 2.1 Level AA criteria. We are working to address these limitations.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy mb-2">Feedback & Contact</h2>
              <p>
                If you experience any accessibility barriers on our website, please contact us at{" "}
                <a href="mailto:info@allroad-transport.com" className="text-cyan hover:underline">info@allroad-transport.com</a>{" "}
                or call <a href="tel:+381631206764" className="text-cyan hover:underline">+381 63 1206764</a>.
                We will make every effort to provide the information in an accessible format.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}