import { Shield, Lock, Server, Eye, AlertTriangle, Mail } from "lucide-react";

const SECTIONS = [
  {
    icon: Shield,
    title: "Our Security Commitment",
    content: "ALLROAD d.o.o. is committed to protecting the security of your personal data and our information systems. We implement industry-standard security measures to safeguard all data processed through our website and services.",
  },
  {
    icon: Lock,
    title: "Data Encryption",
    content: "All data transmitted between your browser and our website is encrypted using TLS (Transport Layer Security) with a minimum of 256-bit encryption. Sensitive information, including form submissions and personal data, is always transmitted over secure HTTPS connections.",
  },
  {
    icon: Server,
    title: "Data Storage & Infrastructure",
    content: "Your data is stored on secure servers located within the European Union, compliant with GDPR requirements. Our hosting infrastructure employs firewalls, intrusion detection systems, and regular security audits to prevent unauthorized access.",
  },
  {
    icon: Eye,
    title: "Access Controls",
    content: "Access to personal data is strictly limited to authorized ALLROAD employees who need it to perform their job functions. All staff with access to personal data are bound by confidentiality obligations and receive regular data protection training.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    content: "In the event of a personal data breach, ALLROAD will notify the relevant supervisory authority within 72 hours of becoming aware of the breach, where required by applicable law. Affected individuals will be notified without undue delay where the breach is likely to result in a high risk to their rights and freedoms.",
  },
  {
    icon: Mail,
    title: "Reporting Security Issues",
    content: "If you discover a security vulnerability in our systems, please report it responsibly to info@allroad-transport.com. We take all security reports seriously and will investigate and address any reported issues promptly.",
  },
];

export default function SecurityPolicy() {
  return (
    <div className="font-inter">
      <section className="relative py-24 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">Trust & Safety</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Security Policy</h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            How ALLROAD protects your data and our systems.
          </p>
          <p className="mt-2 text-white/40 text-sm">Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {SECTIONS.map((s, i) => (
              <div key={s.title} className="flex gap-5">
                <div className="w-11 h-11 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0 mt-1">
                  <s.icon className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <h2 className="text-navy font-bold text-lg mb-2">{i + 1}. {s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{s.content}</p>
                </div>
              </div>
            ))}

            <div className="bg-muted/40 rounded-2xl p-6 border border-black/[0.04] mt-10">
              <h3 className="text-navy font-bold mb-2">Contact Our Security Team</h3>
              <p className="text-muted-foreground text-sm">
                For security-related inquiries, contact us at{" "}
                <a href="mailto:info@allroad-transport.com" className="text-cyan hover:underline">info@allroad-transport.com</a>{" "}
                or by post at: ALLROAD d.o.o., Pavla Papa 14, 21000 Novi Sad, Serbia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}