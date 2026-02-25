import { ScrollReveal } from "@/components/ScrollReveal";
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      text: "To foster a collaborative environment where students enhance technical skills, engage in innovative projects, and contribute to technological development.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      text: "To be a leading hub for technological innovation and excellence, empowering students to become industry-ready professionals with a global approach.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-widest text-primary font-medium text-center mb-3">Purpose</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-16">
            Mission & Vision
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.15}>
              <div className="glass rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-all duration-300 group h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <card.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
