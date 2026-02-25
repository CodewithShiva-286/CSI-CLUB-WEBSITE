import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { teamMembers } from "@/data/teamMembers";
import { User } from "lucide-react";

const Team = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="section-padding !pt-16">
          <div className="container-narrow">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Our People</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">The Team</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-16">
                Meet the passionate individuals driving CSI PES MCOE forward.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {teamMembers.map((member, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                      <User size={24} className="text-muted-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-sm">{member.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
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

export default Team;
