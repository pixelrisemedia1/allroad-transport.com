import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";
import AccessibilityWidget from "./AccessibilityWidget";
import AIChatbot from "../AIChatbot";

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-background">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
      <AccessibilityWidget />
      <AIChatbot />
    </div>
  );
}