import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Ship, Truck, TrainFront, Shuffle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const SERVICE_OPTIONS = [
  { value: "sea", label: "Sea Freight", icon: Ship },
  { value: "road", label: "Road Freight", icon: Truck },
  { value: "rail", label: "Rail Freight", icon: TrainFront },
  { value: "multimodal", label: "Multimodal Transport", icon: Shuffle },
  { value: "insurance", label: "Cargo Insurance", icon: Shield },
];

export default function GetQuote() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    service: "", origin: "", destination: "",
    cargoType: "", weight: "", details: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Quote request submitted! We'll contact you within 24 hours.");
      setForm({ name: "", email: "", phone: "", company: "", service: "", origin: "", destination: "", cargoType: "", weight: "", details: "" });
      setSending(false);
    }, 1200);
  };

  return (
    <div className="font-inter">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/allroad-transport.com/assets/unsplash/photo-1605745341112-85968b19335b.jpg"
            alt="Shipping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">Request A Quote</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get A Quote
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Fill in the details below and our team will get back to you with an approximate price for your shipment.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4 sm:px-6"
        >
          <div className="bg-muted/40 rounded-2xl p-8 sm:p-10 border border-black/[0.04]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal */}
              <div>
                <h3 className="text-lg font-bold text-navy mb-4">Your Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-sm text-muted-foreground">Full Name *</Label>
                    <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm text-muted-foreground">Email *</Label>
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="john@company.com" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm text-muted-foreground">Phone</Label>
                    <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+1 234 567 890" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm text-muted-foreground">Company</Label>
                    <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company name" />
                  </div>
                </div>
              </div>

              {/* Cargo */}
              <div>
                <h3 className="text-lg font-bold text-navy mb-4">Cargo Details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label className="text-sm text-muted-foreground">Service Type *</Label>
                    <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                      <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                      <SelectContent>
                        {SERVICE_OPTIONS.map((s) => (
                          <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm text-muted-foreground">Origin *</Label>
                    <Input value={form.origin} onChange={(e) => setForm({ ...form, origin: e.target.value })} required placeholder="City / Port" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm text-muted-foreground">Destination *</Label>
                    <Input value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} required placeholder="City / Port" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm text-muted-foreground">Cargo Type</Label>
                    <Input value={form.cargoType} onChange={(e) => setForm({ ...form, cargoType: e.target.value })} placeholder="e.g. Electronics, Machinery" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm text-muted-foreground">Estimated Weight</Label>
                    <Input value={form.weight} onChange={(e) => setForm({ ...form, weight: e.target.value })} placeholder="e.g. 5,000 kg" />
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-1.5">
                <Label className="text-sm text-muted-foreground">Additional Details</Label>
                <Textarea value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} rows={4} placeholder="Any specific requirements, timelines, or special handling instructions..." />
              </div>

              <Button type="submit" disabled={sending} className="w-full sm:w-auto bg-cyan hover:bg-cyan-dark text-white gap-2 px-10 h-12 text-sm font-semibold">
                <Send className="w-4 h-4" />
                {sending ? "Submitting..." : "Submit Quote Request"}
              </Button>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
}