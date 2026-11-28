import { useState } from "react";
import { Search, Package, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const MOCK_RESULT = {
  id: "AR-2024-00892",
  status: "In Transit",
  origin: "Hamburg, Germany",
  destination: "Novi Sad, Serbia",
  estimatedDelivery: "March 22, 2026",
  steps: [
    { label: "Order Received", date: "Mar 10, 2026", done: true },
    { label: "Cargo Picked Up", date: "Mar 12, 2026", done: true },
    { label: "In Transit", date: "Mar 15, 2026", done: true },
    { label: "Customs Clearance", date: "Mar 19, 2026", done: false },
    { label: "Out for Delivery", date: "Mar 21, 2026", done: false },
    { label: "Delivered", date: "Mar 22, 2026", done: false },
  ],
};

export default function TrackOrder() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
    if (query.trim()) setResult(MOCK_RESULT);
    else setResult(null);
  };

  return (
    <div className="font-inter">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/allroad-transport.com/assets/unsplash/photo-1605745341112-85968b19335b.jpg"
            alt="Tracking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">Track & Trace</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Track Your Shipment
          </h1>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Enter your shipment reference number to get real-time status updates.
          </p>
          <form onSubmit={handleSearch} className="flex gap-2 max-w-lg mx-auto">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter tracking number (e.g. AR-2024-00892)"
              className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40"
            />
            <Button type="submit" className="bg-cyan hover:bg-cyan-dark text-white h-12 px-6 gap-2 shrink-0">
              <Search className="w-4 h-4" /> Track
            </Button>
          </form>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {!searched && (
            <div className="text-center text-muted-foreground py-10">
              <Package className="w-12 h-12 mx-auto mb-4 text-muted-foreground/40" />
              <p>Enter a tracking number above to see shipment status.</p>
            </div>
          )}
          {searched && !result && (
            <div className="text-center text-muted-foreground py-10">
              <Package className="w-12 h-12 mx-auto mb-4 text-muted-foreground/40" />
              <p>No shipment found for that tracking number.</p>
            </div>
          )}
          {result && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="bg-muted/40 rounded-2xl p-6 sm:p-8 border border-black/[0.04] mb-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Tracking Number</p>
                    <p className="text-xl font-bold text-navy">{result.id}</p>
                  </div>
                  <span className="bg-cyan/10 text-cyan text-sm font-semibold px-4 py-1.5 rounded-full">
                    {result.status}
                  </span>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Origin</p>
                      <p className="font-medium text-navy">{result.origin}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Destination</p>
                      <p className="font-medium text-navy">{result.destination}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Est. Delivery</p>
                      <p className="font-medium text-navy">{result.estimatedDelivery}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <h3 className="text-lg font-bold text-navy mb-4">Shipment Timeline</h3>
              <div className="space-y-0">
                {result.steps.map((step, i) => (
                  <div key={step.label} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        step.done ? "bg-cyan" : "bg-muted border-2 border-border"
                      }`}>
                        {step.done
                          ? <CheckCircle2 className="w-4 h-4 text-white" />
                          : <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                        }
                      </div>
                      {i < result.steps.length - 1 && (
                        <div className={`w-0.5 h-8 mt-0.5 ${step.done ? "bg-cyan/30" : "bg-border"}`} />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className={`text-sm font-semibold ${step.done ? "text-navy" : "text-muted-foreground"}`}>
                        {step.label}
                      </p>
                      <p className="text-xs text-muted-foreground">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}