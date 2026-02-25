import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { pastEvents } from "@/data/pastEvents";
import { CalendarDays, MapPin } from "lucide-react";

const PastEvents = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="section-padding !pt-16">
          <div className="container-narrow">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Past Events</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Event Archive</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-16">A look back at our impactful events.</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-5">
              {pastEvents.map((e, i) => (
                <ScrollReveal key={e.title} delay={i * 0.08}>
                  <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><CalendarDays size={12} className="text-primary" />{e.date}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} />{e.location}</span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">{e.title}</h3>
                    <p className="text-sm text-muted-foreground">{e.desc}</p>
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

export default PastEvents;
