import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const CONTACT_INFO = [
  { icon: MapPin, label: "Address", value: "Novi Sad, Pavla Papa 14, Serbia" },
  { icon: Phone, label: "Phone", value: "+381 63 1206764", href: "tel:+381631206764" },
  { icon: Mail, label: "Email", value: "info@allroad-transport.com", href: "mailto:info@allroad-transport.com" },

  { icon: Clock, label: "Working Hours", value: "Mon–Fri: 9:00 – 18:00" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <div className="font-inter">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/allroad-transport.com/assets/unsplash/photo-1570710891163-6d3b5c47248b.jpg"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-navy mb-6">Contact Information</h2>
              {CONTACT_INFO.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-navy font-medium hover:text-cyan transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-navy font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-muted/40 rounded-2xl p-8 border border-black/[0.04]">
                <h2 className="text-2xl font-bold text-navy mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-sm text-muted-foreground">Full Name</Label>
                      <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-sm text-muted-foreground">Email</Label>
                      <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="subject" className="text-sm text-muted-foreground">Subject</Label>
                    <Input id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required placeholder="How can we help?" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-sm text-muted-foreground">Message</Label>
                    <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required placeholder="Your message..." rows={5} />
                  </div>
                  <Button type="submit" disabled={sending} className="bg-cyan hover:bg-cyan-dark text-white gap-2 px-8 h-11">
                    <Send className="w-4 h-4" />
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Google Maps */}
      <section className="h-80 w-full">
        <iframe
          title="ALLROAD Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.123456789!2d19.8396!3d45.2517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b11f6a0b46c35%3A0x4b5a6a73d1e0d1c!2sPavla%20Papa%2014%2C%20Novi%20Sad!5e0!3m2!1sen!2srs!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </section>
    </div>
  );
}