import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, LogIn, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NAV_ITEMS = [
  { label: "Home", path: "/Home" },
  {
    label: "Services",
    dropdown: [
      { label: "Sea Freight", path: "/services/sea" },
      { label: "Road Freight", path: "/services/road" },
      { label: "Rail Freight", path: "/services/rail" },
      { label: "Multimodal Transport", path: "/services/multimodal" },
      { label: "Cargo Insurance", path: "/services/insurance" },
      { label: "All Services", path: "/Services" },
    ],
  },
  {
    label: "Company",
    dropdown: [
      { label: "About Us", path: "/About" },
      { label: "Blog", path: "/Blog" },
      { label: "Testimonials", path: "/Testimonials" },
      { label: "Track & Trace", path: "/TrackOrder" },
      { label: "Get A Quote", path: "/GetQuote" },
      { label: "Accessibility", path: "/Accessibility" },
      { label: "Security Policy", path: "/SecurityPolicy" },
    ],
  },
  { label: "Contact", path: "/Contact" },
];

function DropdownMenu({ items, onClose }) {
  return (
    <div className="absolute top-full left-0 mt-1 w-52 bg-navy-light border border-white/10 rounded-xl shadow-2xl shadow-black/30 py-1.5 z-50">
      {items.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          onClick={onClose}
          className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

function NavItem({ item, isActive }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (item.dropdown) {
    return (
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 px-4 py-2 text-sm rounded-md transition-all duration-200 text-white/70 hover:text-white hover:bg-white/5"
        >
          {item.label}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>
        {open && <DropdownMenu items={item.dropdown} onClose={() => setOpen(false)} />}
      </div>
    );
  }

  return (
    <Link
      to={item.path}
      className={`px-4 py-2 text-sm rounded-md transition-all duration-200 ${
        isActive ? "text-cyan font-semibold" : "text-white/70 hover:text-white hover:bg-white/5"
      }`}
    >
      {item.label}
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-navy-light/95 backdrop-blur-md border-b border-white/5 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/Home" className="flex items-center shrink-0">
            <img
              src="/allroad-transport.com/assets/source-image-01.png"
              alt="ALLROAD"
              className="h-10 w-auto"
            />
          </Link>

          {/* Center: Search + Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Search bar - left of nav sections */}
            <div className="flex items-center gap-1 mr-2">
              {searchOpen && (
                <Input
                  placeholder="Search..."
                  className="w-40 h-8 bg-white/10 border-white/10 text-white placeholder:text-white/40 text-sm"
                  autoFocus
                  onBlur={() => setSearchOpen(false)}
                />
              )}
              <Button
                variant="ghost"
                size="icon"
                className="text-white/60 hover:text-white hover:bg-white/5 h-8 w-8"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.label}
                item={item}
                isActive={item.path && location.pathname === item.path}
              />
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex border-cyan/30 text-cyan hover:bg-cyan hover:text-white text-xs gap-1.5 h-8"
              onClick={() => window.location.href = '/Account'}
            >
              <LogIn className="w-3.5 h-3.5" />
              My Account
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white/60 hover:text-white h-8 w-8"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-light border-t border-white/5 pb-4">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-6 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="bg-black/20">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className="block px-10 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`block px-6 py-3 text-sm transition-colors ${
                    location.pathname === item.path
                      ? "text-cyan font-semibold bg-white/5"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="px-6 pt-3">
            <Button
              variant="outline"
              size="sm"
              className="w-full border-cyan/30 text-cyan hover:bg-cyan hover:text-white text-xs gap-1.5"
              onClick={() => window.location.href = '/Account'}
            >
              <LogIn className="w-3.5 h-3.5" />
              My Account
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}