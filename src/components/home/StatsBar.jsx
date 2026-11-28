import { motion } from "framer-motion";
import { Ship, Route, Weight, Globe } from "lucide-react";

const STATS = [
  { icon: Ship, value: "3,000+", label: "Shipments Completed" },
  { icon: Route, value: "15,000", label: "km Routes" },
  { icon: Weight, value: "220K+", label: "Tons Delivered" },
  { icon: Globe, value: "Global", label: "Network" },
];

export default function StatsBar() {
  return (
    <section className="relative z-20 -mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-5 sm:p-6 shadow-xl shadow-black/5 border border-black/[0.04] text-center"
            >
              <stat.icon className="w-6 h-6 text-cyan mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}