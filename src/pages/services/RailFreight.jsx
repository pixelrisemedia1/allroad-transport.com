import { TrainFront, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FEATURES = [
  "Europe–Asia rail corridors (New Silk Road)",
  "Container block trains and single wagon shipments",
  "Intermodal rail-sea and rail-road combinations",
  "Oversize and project cargo by rail",
  "Daily location updates throughout transit",
  "Competitive transit times vs. sea freight",
  "Cost-efficient for long-distance bulk cargo",
  "Full customs documentation support",
];

export default function RailFreight() {
  return (
    <div className="font-inter">
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/allroad-transport.com/assets/unsplash/photo-1474487548417-781cb71495f3.jpg" alt="Rail Freight" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan/20 mb-5">
            <TrainFront className="w-7 h-7 text-cyan" />
          </div>
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Rail Freight</h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Cost-efficient rail transport connecting Europe, the Balkans, and Asia.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-2">Rail Freight</p>
              <h2 className="text-3xl font-bold text-navy mb-4">Pan-Continental Rail Solutions</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                ALLROAD rail transport solutions provide cargo delivery across Europe and Asia. Our rail department always seeks to offer our clients the most cost-efficient solutions and estimate precise delivery times.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We monitor container locations every day of rail transportation, providing our clients with transparency and peace of mind throughout the entire transit.
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
              <img src="/allroad-transport.com/assets/unsplash/photo-1474487548417-781cb71495f3.jpg" alt="Rail Freight" className="rounded-2xl shadow-2xl shadow-black/10 w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ship by rail?</h2>
          <p className="text-white/60 mb-8">Get a competitive rail freight quote from our team today.</p>
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