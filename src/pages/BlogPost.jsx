import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, User, ThumbsUp, Star } from "lucide-react";
import { motion } from "framer-motion";

// We load from localStorage so posts created on Blog page are accessible here
function getAllPosts() {
  try {
    const saved = localStorage.getItem("allroad_blog_posts");
    return saved ? JSON.parse(saved) : null;
  } catch { return null; }
}

const INITIAL_POSTS = [
  {
    id: "sea-freight-trends-2025",
    title: "Sea Freight Trends in 2025: What Shippers Need to Know",
    excerpt: "The global shipping industry is evolving rapidly. We explore key trends shaping container shipping, port congestion solutions, and what to expect in the year ahead.",
    content: `The global shipping industry is undergoing a period of rapid transformation. From new environmental regulations to geopolitical disruptions, shippers need to stay informed to make smart decisions about their supply chains.\n\n**Key Trends Shaping 2025**\n\n**1. Green Shipping Regulations**\nThe IMO's CII (Carbon Intensity Indicator) regulations are now in full effect. Carriers are investing in LNG-powered vessels, wind-assisted propulsion, and slow-steaming strategies to meet emission targets. As a shipper, expect to see green surcharges appear on your freight invoices.\n\n**2. Port Congestion & Alternative Routing**\nMajor hubs like Rotterdam, Shanghai, and Los Angeles continue to face bottlenecks. ALLROAD's approach is to proactively route cargo through secondary ports where applicable, reducing transit time variability.\n\n**3. Digital Freight Platforms**\nReal-time tracking, digital documentation, and AI-driven rate optimization are now industry standards. ALLROAD's clients benefit from instant shipment visibility and proactive notifications.\n\n**4. Container Equipment Imbalances**\nEquipment shortages remain a challenge on certain trade lanes. Our long-standing relationships with shipping lines ensure our clients get priority container allocation.\n\n**What Should Shippers Do?**\n\n- Book space early, especially on peak-season lanes\n- Consider cargo insurance for all high-value shipments\n- Explore multimodal alternatives for time-sensitive cargo\n- Work with a freight forwarder who has direct carrier contracts\n\nAt ALLROAD, we monitor market conditions daily so our clients always have the most competitive options available. Contact us at info@allroad-transport.com for a personalized consultation.`,
    category: "Industry News",
    date: "March 10, 2026",
    author: "ALLROAD Team",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80",
    likes: 24,
    rating: 5,
  },
  {
    id: "road-freight-balkans",
    title: "Road Freight in the Balkans: Opportunities and Challenges",
    excerpt: "Serbia's strategic position in Southeast Europe makes it a key logistics hub. We look at how ALLROAD navigates the Balkans road freight landscape.",
    content: `Serbia sits at the crossroads of Europe and the Western Balkans, making it one of the most strategically important logistics hubs in the region. The country's network of Corridor X and Corridor XI highways connects Central Europe with Greece, Turkey, and the Adriatic coast.\n\n**Why the Balkans Matter**\n\nThe Western Balkans region is experiencing sustained economic growth. Foreign direct investment is rising, manufacturing is expanding, and e-commerce is booming — all of which drive demand for reliable road freight services.\n\n**ALLROAD's Balkan Network**\n\nOur road freight operations cover all Western Balkan countries:\n- Serbia, Bosnia & Herzegovina, Montenegro\n- North Macedonia, Kosovo, Albania\n- Croatia, Slovenia (EU access)\n- Bulgaria, Romania, Greece\n\n**Key Challenges We Navigate**\n\n**Border Crossings**: While EU trucks enjoy free movement, non-EU border crossings require careful documentation. Our customs experts ensure smooth transitions at all border points.\n\n**Infrastructure Variability**: Road quality varies significantly across the region. Our local knowledge helps us plan optimal routes.\n\n**Seasonal Disruptions**: Alpine passes and mountain roads can be affected by winter weather. We plan contingency routes proactively.\n\n**Our Commitment**\n\nWith over a decade of experience in Balkan road freight, ALLROAD offers reliable door-to-door delivery across the entire region. Our vetted carrier network, combined with real-time tracking, gives you complete visibility of your cargo from pickup to delivery.`,
    category: "Company",
    date: "February 25, 2026",
    author: "ALLROAD Team",
    image: "https://images.unsplash.com/photo-1519003300449-424ad0405076?w=1200&q=80",
    likes: 18,
    rating: 4,
  },
  {
    id: "multimodal-transport-benefits",
    title: "5 Benefits of Multimodal Transport for Your Supply Chain",
    excerpt: "Combining sea, road, and rail transport can dramatically reduce costs and transit times. Discover how multimodal logistics can transform your supply chain.",
    content: `Multimodal transport — the seamless integration of two or more modes of transport under a single contract — is rapidly becoming the preferred solution for companies looking to optimize their supply chains.\n\n**Benefit 1: Cost Optimization**\nBy combining sea freight's low cost per unit with road freight's flexibility, multimodal solutions can reduce total logistics costs by 15-30% compared to single-mode transport.\n\n**Benefit 2: Reduced Transit Times**\nStrategic modal combinations can actually reduce total transit time. For example, rail freight from China to Europe is significantly faster than sea freight while being much more affordable than air.\n\n**Benefit 3: Environmental Benefits**\nShifting cargo from road to rail or sea reduces carbon emissions significantly. Companies with sustainability targets increasingly prefer multimodal solutions.\n\n**Benefit 4: Single Point of Contact**\nWith ALLROAD managing your entire multimodal shipment, you have one contact for documentation, tracking, and issue resolution — regardless of how many carriers are involved.\n\n**Benefit 5: Risk Distribution**\nUsing multiple transport modes reduces dependency on any single carrier or route, providing resilience against disruptions.\n\n**Real-World Example**\n\nA Serbian manufacturer shipping goods to a Japanese buyer: Road freight from the factory to the port of Koper, sea freight via the Suez Canal to Yokohama, and local delivery in Japan — all coordinated by ALLROAD under a single house bill of lading.\n\nContact us to explore how multimodal transport can benefit your specific supply chain.`,
    category: "Logistics Tips",
    date: "February 8, 2026",
    author: "ALLROAD Team",
    image: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=1200&q=80",
    likes: 31,
    rating: 5,
  },
  {
    id: "cargo-insurance-guide",
    title: "The Complete Guide to Cargo Insurance",
    excerpt: "Protecting your goods during transit is essential. This guide covers everything from all-risk policies to what to do when a claim arises.",
    content: `Every year, billions of dollars worth of cargo is damaged, lost, or stolen during international transit. Cargo insurance is not just a nice-to-have — it's an essential component of responsible supply chain management.\n\n**Types of Cargo Insurance**\n\n**All-Risk Coverage (Institute Cargo Clauses A)**\nThe most comprehensive form of cargo insurance, covering all physical loss or damage from any external cause. Exceptions include inherent vice, improper packing, and war/nuclear risks (which can be added separately).\n\n**Named Perils Coverage (ICC B & C)**\nLess comprehensive, these policies cover only specific listed perils such as fire, explosion, stranding, and collision. Suitable for lower-risk, lower-value cargo.\n\n**What Carrier Liability Covers — And Doesn't**\n\nMany shippers mistakenly believe that carrier liability provides sufficient protection. In reality, carrier liability is severely limited:\n- Sea freight: ~2 SDR per kg under Hague-Visby Rules\n- Road freight: ~8.33 SDR per kg under CMR Convention\n\nFor high-value goods, this is a fraction of the actual value.\n\n**How to File a Claim**\n\n1. Note exceptions on delivery receipts immediately\n2. Document damage with photographs\n3. Notify the insurer within 3 days of discovery\n4. Preserve all packing materials\n5. Submit formal claim with supporting documents\n\n**ALLROAD's Cargo Insurance Service**\n\nWe offer competitive all-risk cargo insurance as part of our integrated logistics service. Coverage is based on CIF value + 10%, and premiums are typically 0.1-0.5% of the insured value depending on commodity and routing.\n\nContact info@allroad-transport.com for a cargo insurance quotation.`,
    category: "Logistics Tips",
    date: "January 20, 2026",
    author: "ALLROAD Team",
    image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=1200&q=80",
    likes: 15,
    rating: 4,
  },
  {
    id: "rail-europe-asia",
    title: "Rail Freight Between Europe and Asia: A Growing Alternative",
    excerpt: "With sea freight delays and air freight costs rising, Europe-Asia rail corridors are gaining traction. We analyze the current state and future prospects.",
    content: `The China-Europe rail freight market has grown from a handful of trains per week to over 15,000 train services per year. What started as a novelty has become a genuine alternative to sea and air freight for many commodity types.\n\n**Key Rail Corridors**\n\n**Trans-Siberian Route**\nThrough Russia and Kazakhstan to Europe. Currently facing restrictions due to geopolitical developments.\n\n**Middle Corridor (Trans-Caspian)**\nThrough Kazakhstan, the Caspian Sea, Azerbaijan, Georgia, and Turkey to Europe. This route is gaining significant investment and traffic as an alternative to the Northern Corridor.\n\n**China-Europe Express Trains**\nOver 80 Chinese cities now have direct rail connections to European destinations, including Warsaw, Hamburg, Duisburg, and increasingly, destinations in Southeast Europe.\n\n**Transit Times & Costs**\n\n| Mode | China to Serbia | Cost per CBM |\n|------|----------------|---------------|\n| Sea | 35-45 days | $80-150 |\n| Rail | 18-22 days | $150-250 |\n| Air | 5-7 days | $800-1500 |\n\nRail occupies a sweet spot between sea and air for time-sensitive cargo that cannot justify air freight rates.\n\n**What Can Travel by Rail?**\n\n- Electronics and high-tech goods\n- Automotive parts\n- Consumer goods\n- Food products (with temperature-controlled wagons)\n- Industrial machinery (project cargo)\n\n**ALLROAD's Rail Freight Service**\n\nOur rail department has direct relationships with rail operators on the Middle Corridor, providing competitive transit times and rates for cargo moving between China/Central Asia and Serbia/Balkans.`,
    category: "Industry News",
    date: "January 5, 2026",
    author: "ALLROAD Team",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&q=80",
    likes: 22,
    rating: 5,
  },
  {
    id: "sustainability-logistics",
    title: "Sustainability in Logistics: Reducing Our Carbon Footprint",
    excerpt: "The logistics industry accounts for a significant portion of global CO₂ emissions. Here's what we're doing to build a more sustainable freight operation.",
    content: `The logistics industry is responsible for approximately 8% of global CO₂ emissions. As awareness grows and regulations tighten, both freight forwarders and their clients are under increasing pressure to reduce the environmental impact of their supply chains.\n\n**ALLROAD's Sustainability Commitments**\n\n**Carrier Selection Criteria**\nWe actively prefer carriers who invest in fuel-efficient vessels, eco-trucks, and emission reduction technologies. Our carrier audit process includes environmental performance metrics.\n\n**Modal Shift Recommendations**\nWhen evaluating shipment solutions, we always present clients with the environmental impact of each option alongside cost and transit time data. Rail and sea freight have significantly lower carbon footprints than road and air.\n\n**Digital Documentation**\nWe have moved to paperless operations wherever possible, eliminating thousands of printed documents annually. Electronic bills of lading, digital customs declarations, and online invoicing are standard practice.\n\n**Consolidated Shipments**\nWe actively encourage clients to consolidate shipments, reducing the number of half-empty containers and trucks on the road.\n\n**Carbon Offsetting**\nFor clients who require carbon-neutral shipping, we partner with certified offset providers to compensate for unavoidable emissions.\n\n**What Can You Do as a Shipper?**\n\n- Choose sea or rail over air freight when transit time allows\n- Optimize packaging to reduce space and weight\n- Consolidate shipments rather than shipping frequently in small quantities\n- Work with forwarders who prioritize sustainability\n\nSustainability and profitability are not opposites. Often, the most efficient logistics solution is also the most environmentally friendly one. Contact ALLROAD to explore your green logistics options.`,
    category: "Company",
    date: "December 18, 2025",
    author: "ALLROAD Team",
    image: "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?w=1200&q=80",
    likes: 19,
    rating: 5,
  },
];

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const saved = getAllPosts();
    const all = saved || INITIAL_POSTS;
    const found = all.find((p) => p.id === id || p.id === String(id));
    setPost(found || null);
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) return (
    <div className="min-h-screen flex flex-col items-center justify-center font-inter gap-4">
      <p className="text-navy text-xl font-bold">Post not found</p>
      <Link to="/Blog" className="text-cyan hover:underline flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </Link>
    </div>
  );

  return (
    <div className="font-inter">
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-10 w-full">
            <span className="inline-block text-xs font-semibold text-cyan bg-cyan/20 px-3 py-1 rounded-full mb-3">
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-8 pb-6 border-b border-black/[0.06]">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
            <span className="flex items-center gap-1.5">
              {Array.from({ length: post.rating }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              ))}
            </span>
            <span className="flex items-center gap-1.5"><ThumbsUp className="w-3.5 h-3.5" /> {post.likes}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none prose-headings:text-navy prose-p:text-gray-700 prose-strong:text-navy prose-a:text-cyan"
          >
            {(post.content || post.excerpt).split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return <h2 key={i} className="text-xl font-bold text-navy mt-8 mb-3">{para.replace(/\*\*/g, "")}</h2>;
              }
              if (para.startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc ml-6 space-y-1 text-gray-700 my-3">
                    {para.split("\n").map((line, j) => (
                      <li key={j}>{line.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              // Bold inline text
              const parts = para.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} className="text-gray-700 leading-relaxed my-4">
                  {parts.map((part, j) =>
                    part.startsWith("**") && part.endsWith("**")
                      ? <strong key={j} className="text-navy">{part.replace(/\*\*/g, "")}</strong>
                      : part
                  )}
                </p>
              );
            })}
          </motion.div>

          <div className="mt-10 pt-8 border-t border-black/[0.06]">
            <Link to="/Blog" className="inline-flex items-center gap-2 text-cyan font-semibold text-sm hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}