import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ship, Truck, TrainFront, Shuffle, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    id: "sea",
    label: "Sea Freight",
    icon: Ship,
    image: "/allroad-transport.com/assets/unsplash/photo-1494412574643-ff11b0a5c1c3.jpg",
    title: "Our vast sea transport experience allows us to offer a full service for different types of cargo.",
    description: "Transportation in containers, bulk, oversize and overweight cargo. A wide range of counterparties and long-term relations with shipping lines allow us to provide access to the global portfolio of carriers, covering major ports worldwide.",
  },
  {
    id: "road",
    label: "Road Freight",
    icon: Truck,
    image: "/allroad-transport.com/assets/unsplash/photo-1519003300449-424ad0405076.jpg",
    title: "Door-to-door delivery with broad geographical spread around the world.",
    description: "Our asset management model allows us to choose highly-qualified subcontractors in accordance with diverse client requirements, emphasizing security and professionalism.",
  },
  {
    id: "rail",
    label: "Rail Freight",
    icon: TrainFront,
    image: "/allroad-transport.com/assets/unsplash/photo-1474487548417-781cb71495f3.jpg",
    title: "Rail transport solutions provide cargo delivery across the US, Europe and Asia.",
    description: "Our rail department always seeks to offer our clients the most cost-efficient solutions and estimate the precise delivery time. We monitor container locations every day of rail transportation.",
  },
  {
    id: "multi",
    label: "Multimodal",
    icon: Shuffle,
    image: "/allroad-transport.com/assets/unsplash/photo-1619468129361-605ebea04b44.jpg",
    title: "Several methods of transportation coordinating different modes of transport.",
    description: "We fulfill client's requests — whether it's the fastest or the cheapest way. Ability to choose from ocean and feeder carriers, direct contracts with railway, automobile transport companies, seaports, and information systems.",
  },
  {
    id: "insurance",
    label: "Cargo Insurance",
    icon: Shield,
    image: "/allroad-transport.com/assets/unsplash/photo-1570710891163-6d3b5c47248b.jpg",
    title: "All freight transportation procedures under control of one company.",
    description: "It facilitates document and information interchange, and streamlines the organization of deliveries. At customer's option, we maintain all-risk cargo insurance for complete peace of mind.",
  },
];

export default function ServicesTabsSection() {
  const [active, setActive] = useState("sea");
  const current = SERVICES.find((s) => s.id === active);

  return (
    <section className="py-24 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-2">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            Comprehensive Logistics Solutions
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            From sea to road, rail to multimodal — we deliver your cargo with precision across every major trade route worldwide.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === s.id
                  ? "bg-cyan text-white shadow-lg shadow-cyan/20"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <s.icon className="w-4 h-4" />
              {s.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <img
                src={current.image}
                alt={current.label}
                className="w-full h-72 sm:h-96 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy mb-4 leading-tight">
                {current.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {current.description}
              </p>
              <Link
                to="/Services"
                className="inline-flex items-center gap-2 text-cyan font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Learn more about {current.label} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}