import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { upcomingEvents } from "@/data/upcomingEvents";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

const UpcomingEvents = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="section-padding !pt-16">
          <div className="container-narrow">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Upcoming</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Upcoming Events</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-16">Don't miss out on our upcoming activities.</p>
            </ScrollReveal>

            <div className="space-y-5">
              {upcomingEvents.map((e, i) => (
                <ScrollReveal key={e.title} delay={i * 0.1}>
                  <div className={`glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 ${e.highlight ? 'border-primary/20 glow-border' : ''}`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><CalendarDays size={12} className="text-primary" />{e.date}</span>
                          <span className="flex items-center gap-1"><MapPin size={12} />{e.location}</span>
                        </div>
                        <h3 className="text-xl font-display font-semibold text-foreground">{e.title}</h3>
                        <p className="text-sm text-muted-foreground">{e.desc}</p>
                      </div>
                      <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shrink-0 self-start">
                        Register <ArrowRight size={14} />
                      </button>
                    </div>
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

export default UpcomingEvents;
