import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { value: 500, suffix: "+", label: "Students Empowered" },
  { value: 50, suffix: "+", label: "Events Organized" },
  { value: 20, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Years Active" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-display font-bold text-foreground">
      {count}{suffix}
    </div>
  );
};

const ImpactSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-widest text-primary font-medium text-center mb-3">Impact</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-16">
            Community Impact
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1}>
              <div className="text-center space-y-2">
                <Counter target={s.value} suffix={s.suffix} />
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
