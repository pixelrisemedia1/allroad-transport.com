import { motion } from "framer-motion";
import { CheckCircle2, Globe, Users, Clock, Shield } from "lucide-react";

const VALUES = [
  { icon: Globe, title: "Global Reach", desc: "Operating across major trade routes connecting markets worldwide." },
  { icon: Users, title: "Client-Focused", desc: "Tailored solutions that match diverse client requirements." },
  { icon: Clock, title: "On Time Delivery", desc: "Precise scheduling and real-time monitoring of every shipment." },
  { icon: Shield, title: "Reliable & Secure", desc: "Emphasis on security and professionalism at every step." },
];

export default function About() {
  return (
    <div className="font-inter">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/allroad-transport.com/assets/unsplash/photo-1494412574643-ff11b0a5c1c3.jpg"
            alt="Shipping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            About ALLROAD
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Full range of freight forwarding and chartering services around the world.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy tracking-tight mb-4">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ALLROAD offers a full range of services in forwarding and chartering around the world. We deal with international sea, auto, rail, and multimodal transport.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are constantly optimizing business processes and expanding the range of services to meet the needs of the modern market. Our team of professionals ensures that every shipment is handled with the utmost care and precision.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With extensive experience in the logistics industry, we have built strong relationships with carriers, ports, and transport companies worldwide, allowing us to offer competitive rates and reliable service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/allroad-transport.com/assets/unsplash/photo-1619468129361-605ebea04b44.jpg"
                alt="Logistics"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-navy tracking-tight mb-3">Our Core Values</h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            The principles that guide our operations and define our commitment to excellence.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-black/[0.04]"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-navy tracking-tight mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To provide comprehensive, reliable, and cost-effective freight forwarding solutions that connect businesses across continents. We strive to be the most trusted logistics partner for our clients by delivering exceptional service, maintaining transparency, and continuously innovating our processes.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {["Professionally", "Reliably", "On Time"].map((w) => (
              <div key={w} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan" />
                <span className="font-semibold text-navy">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}