import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RoadBanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519003300449-424ad0405076?w=1920&q=80"
          alt="Road"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/50" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Your trusted partner for fast, safe, and efficient freight services
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl leading-relaxed">
          More than just a carrier — we are your strategic ally, offering customized solutions and dedicated support to keep your supply chain moving.
        </p>
        <Button asChild variant="outline" size="lg" className="border-white/50 bg-white/10 text-white hover:bg-white/20 gap-2 h-12 px-8 text-sm font-semibold rounded-lg">
          <Link to="/Services">
            Discover Our Services <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}