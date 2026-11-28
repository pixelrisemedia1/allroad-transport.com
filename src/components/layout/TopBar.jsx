import { Mail, Phone, Headphones, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="bg-navy text-white/80 text-xs font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-9">
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="mailto:info@allroad-transport.com" className="flex items-center gap-1.5 hover:text-cyan transition-colors">
            <Mail className="w-3 h-3" />
            <span className="hidden sm:inline">info@allroad-transport.com</span>
          </a>
          <a href="tel:+381631206764" className="flex items-center gap-1.5 hover:text-cyan transition-colors">
            <Phone className="w-3 h-3" />
            <span>+381 63 1206764</span>
          </a>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/Contact" className="flex items-center gap-1.5 hover:text-cyan transition-colors">
            <Headphones className="w-3 h-3" />
            <span className="hidden sm:inline">Support 24/7</span>
          </Link>
          <span className="flex items-center gap-1.5 text-white/60">
            <MapPin className="w-3 h-3" />
            <span className="hidden sm:inline">Novi Sad, Serbia</span>
          </span>
        </div>
      </div>
    </div>
  );
}