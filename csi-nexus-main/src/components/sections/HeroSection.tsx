import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[min(70vw,500px)] h-[min(70vw,500px)] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(220 80% 55% / 0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/6 w-[min(60vw,400px)] h-[min(60vw,400px)] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(220 70% 50% / 0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], x: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container-narrow relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-xs text-muted-foreground mb-8"
          >
            <Sparkles size={12} className="text-primary" />
            PES Modern College of Engineering, Pune
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Computer Society{" "}
            <span className="text-gradient">of India</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Innovating | Learning | Building the Future Together
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link
              to="/upcoming-events"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Explore Events <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              Join CSI
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
