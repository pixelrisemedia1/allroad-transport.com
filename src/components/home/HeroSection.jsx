import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1920&q=80"
          alt="Container ship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
            All roads
            <br />
            will meet.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-lg">
            Full range of freight forwarding services around the world. Professionally. Reliably. On time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-cyan hover:bg-cyan-dark text-white gap-2 px-8 h-12 text-sm font-semibold rounded-lg shadow-lg shadow-cyan/25">
              <Link to="/GetQuote">
                Get A Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/40 bg-white/10 text-white hover:bg-white/20 h-12 px-8 text-sm font-semibold rounded-lg">
              <Link to="/Services">Our Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Slide dots decoration */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-8 h-1 rounded-full bg-cyan" />
        <div className="w-8 h-1 rounded-full bg-white/20" />
        <div className="w-8 h-1 rounded-full bg-white/20" />
      </div>
    </section>
  );
}