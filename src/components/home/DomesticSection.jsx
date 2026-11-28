import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function DomesticSection() {
  return (
    <section className="py-20 bg-white font-inter overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-2">Domestic & Multimodal</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mb-4">
              Comprehensive domestic and international freight options
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our multimodal transport services interlink different modes of freight to optimize delivery costs and timings. These services encompass sea freight options coupled with land-based services such as road or rail — fully coordinated end-to-end.
            </p>
            <Link
              to="/Services"
              className="inline-flex items-center gap-2 text-cyan font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              View more about our services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10"
          >
            <img
              src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=800&q=80"
              alt="Coastal shipping"
              className="w-full h-72 sm:h-96 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}