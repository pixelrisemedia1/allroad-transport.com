import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function QuoteCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/allroad-transport.com/assets/unsplash/photo-1570710891163-6d3b5c47248b.jpg"
          alt="Logistics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Get a Quick Quote
        </h2>
        <p className="text-white/70 text-lg mb-8 leading-relaxed">
          Getting a delivery quote is simple. Fill out our form with the service you need, your cargo details, and we'll get back to you with an approximate price.
        </p>
        <Button asChild size="lg" className="bg-cyan hover:bg-cyan-dark text-white gap-2 px-10 h-12 text-sm font-semibold rounded-lg shadow-lg shadow-cyan/25">
          <Link to="/GetQuote">
            Get A Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}