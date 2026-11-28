import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const SERVICE_LINKS = [
  { label: "Sea Freight", path: "/services/sea" },
  { label: "Road Freight", path: "/services/road" },
  { label: "Rail Freight", path: "/services/rail" },
  { label: "Multimodal Transport", path: "/services/multimodal" },
  { label: "Cargo Insurance", path: "/services/insurance" },
];

const COMPANY_LINKS = [
  { label: "About Us", path: "/About" },
  { label: "Our Services", path: "/Services" },
  { label: "Blog", path: "/Blog" },
  { label: "Get A Quote", path: "/GetQuote" },
  { label: "Contact Us", path: "/Contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", path: "/PrivacyPolicy" },
  { label: "Terms & Conditions", path: "/TermsConditions" },
  { label: "Cookie Policy", path: "/CookiePolicy" },
  { label: "Accessibility", path: "/Accessibility" },
];

function FooterLinkList({ items }) {
  return (
    <ul className="space-y-2.5 text-sm">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            to={item.path}
            className="hover:text-cyan transition-colors flex items-center gap-1.5 group"
          >
            <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand + Contact */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img
                src="/allroad-transport.com/assets/source-image-01.png"
                alt="ALLROAD"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Full range of freight forwarding and chartering services around the world. Professionally. Reliably. On time.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                <span>Novi Sad, Pavla Papa 14, Serbia</span>
              </li>
              <li>
                <a
                  href="tel:+381631206764"
                  className="flex items-center gap-2.5 hover:text-cyan transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan shrink-0" />
                  +381 63 1206764
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@allroad-transport.com"
                  className="flex items-center gap-2.5 hover:text-cyan transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan shrink-0" />
                  info@allroad-transport.com
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Services</h4>
            <FooterLinkList items={SERVICE_LINKS} />
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Company</h4>
            <FooterLinkList items={COMPANY_LINKS} />
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Legal</h4>
            <FooterLinkList items={LEGAL_LINKS} />
          </div>

        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} ALLROAD d.o.o. All rights reserved.</span>
          <span>Transport and Logistics Services · Novi Sad, Serbia</span>
        </div>
      </div>
    </footer>
  );
}