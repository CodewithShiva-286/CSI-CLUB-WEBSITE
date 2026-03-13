import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { teamMembers } from "@/data/teamMembers";
import { User } from "lucide-react";

const Team = () => {
  // Separate core team and teams
  const coreTeam = teamMembers.slice(0, 4);
  const teams = [
    {
      name: "Tech Team",
      members: [teamMembers[4], teamMembers[5]], // Technical Head, Co-Technical Head
    },
    {
      name: "Events Team",
      members: [teamMembers[6], teamMembers[7]], // Event Coordinator, Assistant Event Coordinator
    },
    {
      name: "Design Team",
      members: [teamMembers[8], teamMembers[9]], // Creative Head, Assistant Creative Head
    },
    {
      name: "Social Media Team",
      members: [teamMembers[10], teamMembers[11]], // Social Media Manager, Assistant Social Media Manager
    },
    {
      name: "Marketing Team",
      members: [teamMembers[12], teamMembers[13]], // Marketing Manager, Assistant Marketing Manager
    },
    {
      name: "Documentation Team",
      members: [teamMembers[14], teamMembers[15]], // Documentation Manager, Assistant Documentation Manager
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="section-padding !pt-16 !pb-12">
          <div className="container-narrow">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Our People</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">The Team</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Meet the passionate individuals driving CSI PES MCOE forward.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Core Team */}
        <section className="section-padding !py-16 bg-card/30">
          <div className="container-narrow">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-12 text-center">Core Team</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreTeam.map((member, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
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

        {/* Teams */}
        <section className="section-padding !py-16">
          <div className="container-narrow">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-12 text-center">Teams</h2>
            </ScrollReveal>
            <div className="space-y-12">
              {teams.map((team, teamIndex) => (
                <ScrollReveal key={teamIndex} delay={teamIndex * 0.15}>
                  <div className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground text-center">{team.name}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                      {team.members.map((member, i) => (
                        <div key={i} className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300">
                          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                            <User size={24} className="text-muted-foreground" />
                          </div>
                          <h4 className="font-display font-semibold text-foreground text-sm">{member.name}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                        </div>
                      ))}
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

export default Team;
