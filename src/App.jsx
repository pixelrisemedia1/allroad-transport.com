import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { AuthProvider } from "@/lib/AuthContext";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import SiteLayout from "./components/layout/SiteLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";
import TrackOrder from "./pages/TrackOrder";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import SecurityPolicy from "./pages/SecurityPolicy";
import Accessibility from "./pages/Accessibility";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";
import Account from "./pages/Account";
import BlogPost from "./pages/BlogPost";
import SeaFreight from "./pages/services/SeaFreight";
import RoadFreight from "./pages/services/RoadFreight";
import RailFreight from "./pages/services/RailFreight";
import Multimodal from "./pages/services/Multimodal";
import CargoInsurance from "./pages/services/CargoInsurance";

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router basename="/allroad-transport.com">
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Navigate to="/Home" replace />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/services/sea" element={<SeaFreight />} />
              <Route path="/services/road" element={<RoadFreight />} />
              <Route path="/services/rail" element={<RailFreight />} />
              <Route path="/services/multimodal" element={<Multimodal />} />
              <Route path="/services/insurance" element={<CargoInsurance />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/GetQuote" element={<GetQuote />} />
              <Route path="/TrackOrder" element={<TrackOrder />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Blog/:id" element={<BlogPost />} />
              <Route path="/Testimonials" element={<Testimonials />} />
              <Route path="/SecurityPolicy" element={<SecurityPolicy />} />
              <Route path="/Accessibility" element={<Accessibility />} />
              <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/TermsConditions" element={<TermsConditions />} />
              <Route path="/CookiePolicy" element={<CookiePolicy />} />
              <Route path="/Account" element={<Account />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}
export default App;
