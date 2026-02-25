import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Target, Eye, Building, Users } from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="section-padding !pt-16 !pb-12">
          <div className="container-narrow">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">About</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">About CSI PES MCOE</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A community of passionate individuals dedicated to advancing computer science and technology.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* CSI Info */}
        <section className="section-padding !py-16 bg-card/30">
          <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Computer Society of India</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Computer Society of India (CSI) at PES Modern College of Engineering is a community of passionate individuals dedicated to advancing computer science and technology. CSI promotes IT as a profession and regularly organizes conferences, conventions, lectures, projects, and awards.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  CSI ensures regular training and skill updating for IT professionals, helps physically challenged citizens through the 'Punarjani' program, and works towards a global approach by seeking alliances with international organizations. CSI also assists governments in formulating IT strategy and planning.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 border border-border flex items-center justify-center">
                <div className="text-7xl font-display font-bold text-gradient">CSI</div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding !py-16">
          <div className="container-narrow grid md:grid-cols-2 gap-6">
            {[
              { icon: Target, title: "Mission", text: "To foster a collaborative environment where students can enhance their technical skills, engage in innovative projects, and contribute to the technological development of society." },
              { icon: Eye, title: "Vision", text: "To be a leading hub for technological innovation and excellence in the region, producing industry-ready professionals with a global perspective." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="glass rounded-2xl p-8 h-full">
                  <item.icon size={24} className="text-primary mb-4" />
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* College */}
        <section className="section-padding !py-16 bg-card/30">
          <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-muted border border-border flex items-center justify-center">
                <Building size={64} className="text-muted-foreground" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">PES Modern College of Engineering</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Modern College of Engineering offers quality programs integrating academic inputs and professional skills to empower students for developing their personal and career potential. The Institute provides assistance through training, seminars, workshops and counseling sessions to make graduates employable.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
