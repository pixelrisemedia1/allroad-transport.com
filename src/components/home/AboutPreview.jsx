import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

const HIGHLIGHTS = ["Verified Sources", "Global Network", "Competitive Pricing", "Quality Assured"];

export default function AboutPreview() {
  return (
    <section className="py-24 bg-muted/40 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-2">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mb-4">
              Your Trusted Freight Partner
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              ALLROAD offers a full range of services in forwarding and chartering around the world.
              We deal with international sea, auto, rail, and multimodal transport. We are constantly
              optimizing business processes and expanding the range of services to meet the needs of
              the modern market.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {HIGHLIGHTS.map((h) => (
                <div key={h} className="flex items-center gap-2 text-sm text-navy font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan shrink-0" />
                  {h}
                </div>
              ))}
            </div>
            <Link
              to="/About"
              className="inline-flex items-center gap-2 text-cyan font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Learn more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >
            <img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&q=80"
              alt="Shipping"
              className="rounded-xl shadow-lg h-40 sm:h-48 object-cover w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1519003300449-424ad0405076?w=400&q=80"
              alt="Road transport"
              className="rounded-xl shadow-lg h-40 sm:h-48 object-cover w-full mt-6"
            />
            <img
              src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&q=80"
              alt="Rail freight"
              className="rounded-xl shadow-lg h-40 sm:h-48 object-cover w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=400&q=80"
              alt="Coastal"
              className="rounded-xl shadow-lg h-40 sm:h-48 object-cover w-full mt-6"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}