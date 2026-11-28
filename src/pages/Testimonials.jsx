import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const INITIAL_TESTIMONIALS = [
  {
    id: 1,
    name: "Marko Jovanović",
    company: "Jovanović Export d.o.o.",
    country: "Serbia",
    rating: 5,
    text: "ALLROAD has been our logistics partner for over 3 years. Their sea freight service from Hamburg to Novi Sad is always on time and the communication is exceptional. We wouldn't trust anyone else with our cargo.",
    avatar: "MJ",
  },
  {
    id: 2,
    name: "Klaus Weber",
    company: "Weber Manufacturing GmbH",
    country: "Germany",
    rating: 5,
    text: "We ship machinery parts from Germany to Southeast Europe regularly. ALLROAD's road freight team handles everything professionally — customs, documentation, door-to-door delivery. Highly recommended.",
    avatar: "KW",
  },
  {
    id: 3,
    name: "Ana Petrović",
    company: "Petrović Trade",
    country: "Serbia",
    rating: 5,
    text: "The team at ALLROAD is incredibly responsive. When we had an urgent shipment, they arranged rail freight from China to Serbia within days. Their multimodal expertise is unmatched in the region.",
    avatar: "AP",
  },
  {
    id: 4,
    name: "Ivan Nikolić",
    company: "Balkans Distribution Ltd",
    country: "Serbia",
    rating: 5,
    text: "We've tried many freight forwarders over the years. ALLROAD stands out for their transparency, competitive pricing, and the cargo insurance they offer. Our goods always arrive in perfect condition.",
    avatar: "IN",
  },
  {
    id: 5,
    name: "Sophie Leroux",
    company: "Leroux & Fils",
    country: "France",
    rating: 5,
    text: "Shipping wine to Serbia seemed complicated, but ALLROAD made it effortless. Their knowledge of customs regulations in the Balkans saved us a lot of time and money. Excellent service.",
    avatar: "SL",
  },
  {
    id: 6,
    name: "Dragana Milosević",
    company: "Milosević Pharma",
    country: "Serbia",
    rating: 5,
    text: "For pharmaceutical cargo that requires careful handling and documentation, ALLROAD is our go-to partner. They understand the regulatory requirements and always deliver on time.",
    avatar: "DM",
  },
];

function StarPicker({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
          className="focus:outline-none"
        >
          <Star
            className={`w-6 h-6 transition-colors ${
              star <= (hovered || value) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(INITIAL_TESTIMONIALS);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", country: "", rating: 5, text: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;
    const initials = form.name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
    const newT = {
      id: Date.now(),
      ...form,
      avatar: initials,
    };
    setTestimonials((prev) => [newT, ...prev]);
    setForm({ name: "", company: "", country: "", rating: 5, text: "" });
    setShowForm(false);
    toast.success("Thank you for your testimonial!");
  };

  return (
    <div className="font-inter">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?w=1920&q=80" alt="Testimonials" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">What Our Clients Say</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Client Testimonials</h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from the businesses that trust ALLROAD every day.
          </p>
        </div>
      </section>

      {/* Add testimonial button */}
      <section className="py-8 bg-muted/40 border-b border-black/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-end">
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-cyan hover:bg-cyan-dark text-white gap-2"
          >
            {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            {showForm ? "Cancel" : "Share Your Experience"}
          </Button>
        </div>
      </section>

      {/* Form */}
      {showForm && (
        <section className="py-8 bg-white border-b border-black/[0.06]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-navy mb-5">Share Your Experience</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-sm text-muted-foreground">Your Name *</Label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" required />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-sm text-muted-foreground">Company</Label>
                  <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company name" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm text-muted-foreground">Country</Label>
                <Input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} placeholder="e.g. Serbia" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm text-muted-foreground">Rating</Label>
                <StarPicker value={form.rating} onChange={(r) => setForm({ ...form, rating: r })} />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm text-muted-foreground">Your Review *</Label>
                <Textarea
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  placeholder="Tell us about your experience with ALLROAD..."
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="bg-cyan hover:bg-cyan-dark text-white gap-2">
                <Plus className="w-4 h-4" /> Submit Testimonial
              </Button>
            </form>
          </div>
        </section>
      )}

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-muted/40 rounded-2xl p-7 border border-black/[0.04]"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-navy/80 leading-relaxed text-sm mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan font-bold text-sm shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.company}{t.country ? ` · ${t.country}` : ""}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to join our satisfied clients?</h2>
          <p className="text-white/60 mb-8">Get in touch today and discover how ALLROAD can streamline your logistics.</p>
          <a href="/GetQuote" className="inline-flex items-center gap-2 bg-cyan hover:bg-cyan-dark text-white font-semibold text-sm px-8 py-3 rounded-lg transition-colors shadow-lg shadow-cyan/25">
            Get A Free Quote
          </a>
        </div>
      </section>
    </div>
  );
}