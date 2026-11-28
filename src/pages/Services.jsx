import { motion } from "framer-motion";
import { Ship, Truck, TrainFront, Shuffle, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: Ship,
    title: "Sea Freight",
    image: "/allroad-transport.com/assets/unsplash/photo-1494412574643-ff11b0a5c1c3.jpg",
    description: "Our vast sea transport experience allows us to offer our clients a full service for different types of cargo: transportation in containers, bulk, oversize and overweight cargo. A wide range of counterparties and long-term relations with shipping lines allow us to provide access to the global portfolio of carriers, covering major ports worldwide. We provide constant tracking of freight rates and transit time evaluation to ensure the best possible shipment cost optimization.",
  },
  {
    icon: Truck,
    title: "Road Freight",
    image: "/allroad-transport.com/assets/unsplash/photo-1519003300449-424ad0405076.jpg",
    description: "Door-to-door delivery is impossible without automobile transport. We provide the broad geographical spread around the world. Our asset management model allows us to choose highly-qualified subcontractors in accordance with diverse client requirements emphasizing on security and professionalism.",
  },
  {
    icon: TrainFront,
    title: "Rail Freight",
    image: "/allroad-transport.com/assets/unsplash/photo-1474487548417-781cb71495f3.jpg",
    description: "ALLROAD rail transport solutions provide cargo delivery across the US, Europe and Asia. Our rail department always seeks to offer our clients the most cost-efficient solutions and estimate the precise delivery time. We monitor container locations every day of rail transportation.",
  },
  {
    icon: Shuffle,
    title: "Multimodal Transportation",
    image: "/allroad-transport.com/assets/unsplash/photo-1619468129361-605ebea04b44.jpg",
    description: "We are ready to offer several methods of transportation coordinating different modes of transport, fulfilling client's request. It could be either the fastest or the cheapest way. Ability to choose from ocean and feeder carriers, direct contracts with railway, automobile transport companies, seaports and information systems.",
  },
  {
    icon: Shield,
    title: "Cargo Insurance",
    image: "/allroad-transport.com/assets/unsplash/photo-1570710891163-6d3b5c47248b.jpg",
    description: "It is very convenient to have all freight transportation relating procedures under control of one company. It facilitates document and information interchange, and streamlines the organization of deliveries. For this reason and at customer's option, we maintain all-risk cargo insurance for complete peace of mind.",
  },
];

export default function Services() {
  return (
    <div className="font-inter">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/allroad-transport.com/assets/unsplash/photo-1605745341112-85968b19335b.jpg"
            alt="Container ship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Logistics Solutions
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            We are constantly optimizing business processes and expanding our range of services to meet the needs of the modern market.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Need a custom logistics solution?
          </h2>
          <p className="text-white/60 mb-8">
            Contact us today and let our team find the perfect freight solution for your business.
          </p>
          <Link
            to="/GetQuote"
            className="inline-flex items-center gap-2 bg-cyan hover:bg-cyan-dark text-white font-semibold text-sm px-8 py-3 rounded-lg transition-colors shadow-lg shadow-cyan/25"
          >
            Get A Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}