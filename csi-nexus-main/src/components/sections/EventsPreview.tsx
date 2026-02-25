import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";

const events = [
  { title: "Web Dev Workshop", date: "Mar 2026", desc: "Build modern web apps with React and TypeScript" },
  { title: "AI/ML Hackathon", date: "Apr 2026", desc: "24-hour innovation sprint on AI solutions" },
  { title: "Cloud Computing Talk", date: "May 2026", desc: "Expert session on AWS and cloud architecture" },
];

const EventsPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Events</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Featured Events</h2>
            </div>
            <Link to="/upcoming-events" className="hidden md:inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
              View all <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {events.map((e, i) => (
            <ScrollReveal key={e.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <CalendarDays size={14} className="text-primary" />
                  {e.date}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{e.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{e.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <Link to="/upcoming-events" className="inline-flex items-center gap-2 text-sm text-primary">
            View all events <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
