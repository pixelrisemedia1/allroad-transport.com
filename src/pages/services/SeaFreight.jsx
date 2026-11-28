import { Ship, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FEATURES = [
  "Full Container Load (FCL) & Less than Container Load (LCL)",
  "Bulk and breakbulk cargo",
  "Oversize and overweight cargo",
  "Reefer and temperature-controlled containers",
  "Hazardous goods (IMO classes)",
  "Port-to-port and door-to-door delivery",
  "Customs clearance assistance",
  "Real-time freight rate monitoring",
];

export default function SeaFreight() {
  return (
    <div className="font-inter">
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80" alt="Sea Freight" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan/20 mb-5">
            <Ship className="w-7 h-7 text-cyan" />
          </div>
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Sea Freight</h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Global ocean freight solutions connecting your cargo to ports worldwide.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-2">Sea Freight</p>
              <h2 className="text-3xl font-bold text-navy mb-4">Full-Service Ocean Freight Forwarding</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our vast sea transport experience allows us to offer a full service for different types of cargo. A wide range of counterparties and long-term relationships with major shipping lines give us access to a global portfolio of carriers, covering all major ports worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We provide constant tracking of freight rates and transit time evaluation to ensure the best possible shipment cost optimization for your business.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {FEATURES.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                    <span className="text-sm text-navy/80">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80" alt="Sea Freight" className="rounded-2xl shadow-2xl shadow-black/10 w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to ship by sea?</h2>
          <p className="text-white/60 mb-8">Get a competitive sea freight quote from our team today.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/GetQuote" className="inline-flex items-center gap-2 bg-cyan hover:bg-cyan-dark text-white font-semibold text-sm px-8 py-3 rounded-lg transition-colors shadow-lg shadow-cyan/25">
              Get A Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/Services" className="inline-flex items-center gap-2 border border-white/20 bg-white/10 text-white hover:bg-white/20 font-semibold text-sm px-8 py-3 rounded-lg transition-colors">
              All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}