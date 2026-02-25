import { useState, type FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="section-padding !pt-16">
          <div className="container-narrow">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Get in Touch</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Contact Us</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-16">
                Have questions or want to join CSI? Reach out to us.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12">
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
                  >
                    Send Message <Send size={14} />
                  </button>
                </form>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-8">
                  <div className="glass rounded-2xl p-6">
                    <Mail size={20} className="text-primary mb-3" />
                    <h3 className="font-display font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">csi@pesmcoe.edu.in</p>
                  </div>
                  <div className="glass rounded-2xl p-6">
                    <MapPin size={20} className="text-primary mb-3" />
                    <h3 className="font-display font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">PES Modern College of Engineering, Shivajinagar, Pune, Maharashtra</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
