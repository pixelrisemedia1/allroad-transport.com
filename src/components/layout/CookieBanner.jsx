import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "all");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy border-t border-white/10 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-white font-semibold text-sm mb-1">We use cookies</p>
          <p className="text-white/60 text-xs leading-relaxed">
            ALLROAD d.o.o. uses cookies to improve your experience and analyze site usage. By clicking "Accept All", you agree to our{" "}
            <Link to="/CookiePolicy" className="text-cyan hover:underline">Cookie Policy</Link>
            {", "}
            <Link to="/PrivacyPolicy" className="text-cyan hover:underline">Privacy Policy</Link>
            {" and "}
            <Link to="/TermsConditions" className="text-cyan hover:underline">Terms & Conditions</Link>.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={decline}
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white text-xs h-8"
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={accept}
            className="bg-cyan hover:bg-cyan-dark text-white text-xs h-8 px-4"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
}