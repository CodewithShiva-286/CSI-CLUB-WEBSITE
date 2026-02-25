import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, hsl(220 80% 55% / 0.1) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-narrow relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Join the CSI Community
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
            Build. Learn. Innovate.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Become a Member <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
