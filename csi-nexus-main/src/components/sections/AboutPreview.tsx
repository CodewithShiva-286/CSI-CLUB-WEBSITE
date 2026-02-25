import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-widest text-primary font-medium">About Us</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                A community of passionate technologists
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We are a community dedicated to advancing computer science and technology. CSI focuses on innovation, technical growth, and real-world learning through conferences, workshops, projects, and training programs.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all duration-200"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-border flex items-center justify-center">
                <div className="text-center space-y-3 p-8">
                  <div className="text-6xl font-display font-bold text-gradient">CSI</div>
                  <p className="text-sm text-muted-foreground">Since 1965</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/10 border border-primary/20" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
