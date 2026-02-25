import { ScrollReveal } from "@/components/ScrollReveal";
import { Code, Users, Lightbulb, Cpu, GraduationCap, Calendar } from "lucide-react";

const activities = [
  { icon: Code, title: "Workshops", desc: "Hands-on sessions on cutting-edge technologies" },
  { icon: Cpu, title: "Hackathons", desc: "Competitive coding and innovation challenges" },
  { icon: Lightbulb, title: "Technical Talks", desc: "Expert sessions on industry trends" },
  { icon: GraduationCap, title: "Training Programs", desc: "Skill development for career readiness" },
  { icon: Users, title: "Projects", desc: "Collaborative real-world project development" },
  { icon: Calendar, title: "Community Events", desc: "Networking and knowledge sharing meets" },
];

const ActivitiesSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-widest text-primary font-medium text-center mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-16">
            Our Activities
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="group rounded-2xl border border-border bg-card/50 p-6 hover:border-primary/30 hover:bg-card transition-all duration-300 cursor-default">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_-5px_hsl(var(--glow)/0.3)] transition-all duration-300">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
