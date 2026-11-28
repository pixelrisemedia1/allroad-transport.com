import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, User, Star, ThumbsUp, Plus, X, Image as ImageIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { base44 } from "@/api/base44Client";

const STORAGE_KEY = "allroad_blog_posts";

const INITIAL_POSTS = [
  { id: "sea-freight-trends-2025", title: "Sea Freight Trends in 2025: What Shippers Need to Know", excerpt: "The global shipping industry is evolving rapidly. We explore key trends shaping container shipping, port congestion solutions, and what to expect in the year ahead.", category: "Industry News", date: "March 10, 2026", author: "ALLROAD Team", image: "/allroad-transport.com/assets/unsplash/photo-1494412574643-ff11b0a5c1c3.jpg", likes: 24, rating: 5 },
  { id: "road-freight-balkans", title: "Road Freight in the Balkans: Opportunities and Challenges", excerpt: "Serbia's strategic position in Southeast Europe makes it a key logistics hub. We look at how ALLROAD navigates the Balkans road freight landscape.", category: "Company", date: "February 25, 2026", author: "ALLROAD Team", image: "/allroad-transport.com/assets/unsplash/photo-1519003300449-424ad0405076.jpg", likes: 18, rating: 4 },
  { id: "multimodal-transport-benefits", title: "5 Benefits of Multimodal Transport for Your Supply Chain", excerpt: "Combining sea, road, and rail transport can dramatically reduce costs and transit times. Discover how multimodal logistics can transform your supply chain.", category: "Logistics Tips", date: "February 8, 2026", author: "ALLROAD Team", image: "/allroad-transport.com/assets/unsplash/photo-1619468129361-605ebea04b44.jpg", likes: 31, rating: 5 },
  { id: "cargo-insurance-guide", title: "The Complete Guide to Cargo Insurance", excerpt: "Protecting your goods during transit is essential. This guide covers everything from all-risk policies to what to do when a claim arises.", category: "Logistics Tips", date: "January 20, 2026", author: "ALLROAD Team", image: "/allroad-transport.com/assets/unsplash/photo-1570710891163-6d3b5c47248b.jpg", likes: 15, rating: 4 },
  { id: "rail-europe-asia", title: "Rail Freight Between Europe and Asia: A Growing Alternative", excerpt: "With sea freight delays and air freight costs rising, Europe-Asia rail corridors are gaining traction. We analyze the current state and future prospects.", category: "Industry News", date: "January 5, 2026", author: "ALLROAD Team", image: "/allroad-transport.com/assets/unsplash/photo-1474487548417-781cb71495f3.jpg", likes: 22, rating: 5 },
  { id: "sustainability-logistics", title: "Sustainability in Logistics: Reducing Our Carbon Footprint", excerpt: "The logistics industry accounts for a significant portion of global CO₂ emissions. Here's what we're doing to build a more sustainable freight operation.", category: "Company", date: "December 18, 2025", author: "ALLROAD Team", image: "/allroad-transport.com/assets/unsplash/photo-1606836591695-4d58a73eba1e.jpg", likes: 19, rating: 5 },
];

function loadPosts() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : INITIAL_POSTS;
  } catch { return INITIAL_POSTS; }
}

function savePosts(posts) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(posts)); } catch {}
}

const CATEGORIES = ["All", "Industry News", "Company", "Logistics Tips"];

function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} type="button"
          onMouseEnter={() => onChange && setHovered(star)}
          onMouseLeave={() => onChange && setHovered(0)}
          onClick={() => onChange && onChange(star)}
          className="focus:outline-none"
        >
          <Star className={`w-5 h-5 transition-colors ${star <= (hovered || value) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        </button>
      ))}
    </div>
  );
}

export default function Blog() {
  const [posts, setPosts] = useState(loadPosts);
  const [activeCategory, setActiveCategory] = useState("All");
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [ratedPosts, setRatedPosts] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", category: "Industry News", excerpt: "", content: "", image: "" });
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef(null);

  const filtered = activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);

  const handleLike = (id) => {
    if (likedPosts.has(id)) return;
    setLikedPosts((prev) => new Set([...prev, id]));
    const updated = posts.map((p) => p.id === id ? { ...p, likes: p.likes + 1 } : p);
    setPosts(updated); savePosts(updated);
    toast.success("Thanks for the like!");
  };

  const handleRate = (id, rating) => {
    if (ratedPosts[id]) return;
    setRatedPosts((prev) => ({ ...prev, [id]: rating }));
    const updated = posts.map((p) => p.id === id ? { ...p, rating } : p);
    setPosts(updated); savePosts(updated);
    toast.success(`Rated ${rating} stars!`);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setNewPost((prev) => ({ ...prev, image: file_url }));
    setUploading(false);
    toast.success("Image uploaded!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.title.trim()) return;
    const post = {
      id: Date.now().toString(),
      ...newPost,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      author: "Community",
      image: newPost.image || "/allroad-transport.com/assets/unsplash/photo-1494412574643-ff11b0a5c1c3.jpg",
      likes: 0,
      rating: 0,
    };
    const updated = [post, ...posts];
    setPosts(updated); savePosts(updated);
    setNewPost({ title: "", category: "Industry News", excerpt: "", content: "", image: "" });
    setShowForm(false);
    toast.success("Post published!");
  };

  return (
    <div className="font-inter">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/allroad-transport.com/assets/unsplash/photo-1606836591695-4d58a73eba1e.jpg" alt="Blog" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">Insights & News</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">ALLROAD Blog</h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">Industry insights, company news, and logistics tips — from our team and community.</p>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 bg-muted/40 border-b border-black/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? "bg-cyan text-white shadow" : "bg-white text-navy border border-black/10 hover:border-cyan/40"}`}>
                {cat}
              </button>
            ))}
          </div>
          <Button onClick={() => setShowForm(!showForm)} className="bg-cyan hover:bg-cyan-dark text-white gap-2 shrink-0">
            {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            {showForm ? "Cancel" : "Write a Post"}
          </Button>
        </div>
      </section>

      {/* Write Post Form */}
      {showForm && (
        <section className="py-8 bg-white border-b border-black/[0.06]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-navy mb-5">Submit Your Blog Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label className="text-sm text-muted-foreground">Title *</Label>
                <Input value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} placeholder="Your post title..." required />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm text-muted-foreground">Category</Label>
                <select value={newPost.category} onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                  className="w-full h-9 rounded-md border border-input bg-transparent px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-foreground">
                  {CATEGORIES.filter((c) => c !== "All").map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm text-muted-foreground">Cover Image</Label>
                <input type="file" ref={fileRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
                <div className="flex gap-2 items-center">
                  <Button type="button" variant="outline" onClick={() => fileRef.current?.click()} className="gap-2 text-sm" disabled={uploading}>
                    <ImageIcon className="w-4 h-4" /> {uploading ? "Uploading..." : "Upload Image"}
                  </Button>
                  {newPost.image && <img src={newPost.image} alt="preview" className="h-10 w-16 object-cover rounded-md border" />}
                </div>
                <p className="text-xs text-muted-foreground">Or paste an image URL:</p>
                <Input value={newPost.image} onChange={(e) => setNewPost({ ...newPost, image: e.target.value })} placeholder="https://..." />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm text-muted-foreground">Short Excerpt *</Label>
                <Textarea value={newPost.excerpt} onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })} placeholder="A brief summary of your post..." rows={2} required />
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm text-muted-foreground">Full Content</Label>
                <Textarea value={newPost.content} onChange={(e) => setNewPost({ ...newPost, content: e.target.value })} placeholder="Write your full article here. Use **bold** for headings and - for bullet points." rows={8} />
              </div>
              <Button type="submit" className="bg-cyan hover:bg-cyan-dark text-white gap-2">
                <Plus className="w-4 h-4" /> Publish Post
              </Button>
            </form>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group bg-white border border-black/[0.06] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <Link to={`/Blog/${post.id}`} className="overflow-hidden h-48 block shrink-0">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-block text-xs font-semibold text-cyan bg-cyan/10 px-3 py-1 rounded-full mb-3 self-start">{post.category}</span>
                  <Link to={`/Blog/${post.id}`}>
                    <h2 className="text-navy font-bold text-base leading-tight mb-2 group-hover:text-cyan transition-colors">{post.title}</h2>
                  </Link>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  <StarRating value={ratedPosts[post.id] ?? post.rating} onChange={ratedPosts[post.id] ? null : (r) => handleRate(post.id, r)} />
                  <div className="flex items-center justify-between mt-3">
                    <button onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${likedPosts.has(post.id) ? "text-cyan" : "text-muted-foreground hover:text-cyan"}`}>
                      <ThumbsUp className={`w-3.5 h-3.5 ${likedPosts.has(post.id) ? "fill-cyan text-cyan" : ""}`} />
                      {post.likes} likes
                    </button>
                    <Link to={`/Blog/${post.id}`} className="text-xs text-cyan font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}