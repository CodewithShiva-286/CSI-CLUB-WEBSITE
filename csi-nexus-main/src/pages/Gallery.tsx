import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Image } from "lucide-react";

const Gallery = () => {
  const placeholders = Array.from({ length: 9 }, (_, i) => i);

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="section-padding !pt-16">
          <div className="container-narrow">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Memories</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Gallery</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-16">
                Moments captured from our events and community activities.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {placeholders.map((_, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className={`rounded-2xl bg-card border border-border flex items-center justify-center ${i % 3 === 0 ? 'aspect-[4/5]' : 'aspect-square'}`}>
                    <Image size={32} className="text-muted-foreground/30" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
