import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/allroad-transport.com/assets/unsplash/photo-1606836591695-4d58a73eba1e.jpg"
          alt="Logistics background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center"
      >
        <div className="text-6xl text-cyan/40 mb-4 font-serif">"</div>
        <blockquote className="text-xl sm:text-2xl text-white font-light leading-relaxed italic">
          We don't just move cargo — we build bridges between businesses, connecting markets and opportunities across every continent.
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan font-bold text-sm">
            AR
          </div>
          <div className="text-left">
            <div className="text-white font-semibold text-sm">ALLROAD Team</div>
            <div className="text-white/50 text-xs">Management</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}