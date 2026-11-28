import { useState, useEffect } from "react";
import { User, Mail, Phone, Building, Save, LogOut, Package, FileText, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { base44 } from "@/api/base44Client";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export default function Account() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ full_name: "", phone: "", company: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    base44.auth.me().then((u) => {
      if (u) {
        setUser(u);
        setForm({ full_name: u.full_name || "", phone: u.phone || "", company: u.company || "" });
      }
    }).catch(() => {
      base44.auth.redirectToLogin();
    });
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    await base44.auth.updateMe(form);
    toast.success("Profile updated successfully.");
    setSaving(false);
  };

  const handleLogout = () => base44.auth.logout();

  if (!user) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-cyan border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="font-inter">
      <section className="relative py-24 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">My Account</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Welcome, {user.full_name?.split(" ")[0] || "User"}</h1>
          <p className="mt-3 text-white/60 text-lg">{user.email}</p>
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="space-y-3">
              {[
                { Icon: Package, label: "My Shipments", path: "/TrackOrder" },
                { Icon: FileText, label: "Get A Quote", path: "/GetQuote" },
                { Icon: MessageSquare, label: "Contact Support", path: "/Contact" },
              ].map(({ Icon, label, path }) => (
                <Link key={label} to={path} className="flex items-center gap-3 p-4 rounded-xl border border-black/[0.06] hover:border-cyan/40 hover:bg-cyan/5 transition-all group">
                  <div className="w-9 h-9 rounded-lg bg-cyan/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-cyan" />
                  </div>
                  <span className="text-navy font-medium text-sm group-hover:text-cyan transition-colors">{label}</span>
                </Link>
              ))}
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 p-4 rounded-xl border border-red-100 hover:bg-red-50 transition-all group text-left"
              >
                <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center">
                  <LogOut className="w-4 h-4 text-red-500" />
                </div>
                <span className="text-red-500 font-medium text-sm">Sign Out</span>
              </button>
            </div>

            {/* Profile Form */}
            <div className="lg:col-span-2">
              <div className="bg-muted/40 rounded-2xl p-8 border border-black/[0.04]">
                <h2 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-cyan" /> Profile Information
                </h2>
                <form onSubmit={handleSave} className="space-y-5">
                  <div className="space-y-1.5">
                    <Label className="text-sm text-muted-foreground">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} className="pl-9" placeholder="Your full name" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm text-muted-foreground">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input value={user.email} disabled className="pl-9 opacity-60 cursor-not-allowed" />
                    </div>
                    <p className="text-xs text-muted-foreground">Email cannot be changed.</p>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm text-muted-foreground">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="pl-9" placeholder="+381 ..." />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm text-muted-foreground">Company Name</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="pl-9" placeholder="Your company" />
                    </div>
                  </div>
                  <Button type="submit" disabled={saving} className="bg-cyan hover:bg-cyan-dark text-white gap-2">
                    <Save className="w-4 h-4" />
                    {saving ? "Saving..." : "Save Changes"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}