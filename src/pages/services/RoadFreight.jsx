import { Truck, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FEATURES = [
  "Full Truck Load (FTL) and Less than Truck Load (LTL)",
  "Door-to-door delivery across Europe and Balkans",
  "Refrigerated and temperature-controlled transport",
  "Hazardous goods transport (ADR certified)",
  "Oversized and heavy cargo",
  "Express and time-critical deliveries",
  "Real-time GPS tracking",
  "Customs brokerage services",
];

export default function RoadFreight() {
  return (
    <div className="font-inter">
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/allroad-transport.com/assets/unsplash/photo-1519003300449-424ad0405076.jpg" alt="Road Freight" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan/20 mb-5">
            <Truck className="w-7 h-7 text-cyan" />
          </div>
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Road Freight</h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Door-to-door road transport solutions across Europe, Balkans, and beyond.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-2">Road Freight</p>
              <h2 className="text-3xl font-bold text-navy mb-4">Reliable Road Transport Network</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Door-to-door delivery is impossible without automobile transport. ALLROAD provides broad geographical coverage across Europe, the Balkans, and Central Asia. Our asset management model allows us to select highly qualified subcontractors in accordance with diverse client requirements.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Security and professionalism are our top priorities. Every vehicle in our network is GPS-tracked, and all drivers meet the highest standards of certification and experience.
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
              <img src="/allroad-transport.com/assets/unsplash/photo-1519003300449-424ad0405076.jpg" alt="Road Freight" className="rounded-2xl shadow-2xl shadow-black/10 w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need road freight?</h2>
          <p className="text-white/60 mb-8">Get a competitive road freight quote from our team today.</p>
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