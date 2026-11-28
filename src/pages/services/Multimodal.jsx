import { Shuffle, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FEATURES = [
  "Sea + Road combinations",
  "Rail + Road combinations",
  "Sea + Rail + Road solutions",
  "Single point of contact for all modes",
  "Optimized cost and transit time",
  "Direct contracts with ocean & feeder carriers",
  "End-to-end cargo tracking",
  "Unified documentation and invoicing",
];

export default function Multimodal() {
  return (
    <div className="font-inter">
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=1920&q=80" alt="Multimodal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan/20 mb-5">
            <Shuffle className="w-7 h-7 text-cyan" />
          </div>
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Multimodal Transport</h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Seamlessly combining sea, rail, and road for optimized end-to-end logistics.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-2">Multimodal</p>
              <h2 className="text-3xl font-bold text-navy mb-4">The Smart Way to Move Cargo</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are ready to offer several methods of transportation coordinating different modes of transport, fulfilling our clients' requests — whether it's the fastest or the most cost-effective way.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our ability to choose from ocean and feeder carriers, combined with direct contracts with railway operators and automobile transport companies, means we can build the perfect logistics solution for any cargo requirement.
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
              <img src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=800&q=80" alt="Multimodal" className="rounded-2xl shadow-2xl shadow-black/10 w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need a multimodal solution?</h2>
          <p className="text-white/60 mb-8">Our experts will design the optimal route for your cargo.</p>
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