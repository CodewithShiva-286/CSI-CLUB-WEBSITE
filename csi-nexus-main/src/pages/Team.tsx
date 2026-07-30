import { useState, useCallback, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { teamMembers } from "@/data/teamMembers";
import {
  teamPhotoshootImages,
  coreTeamShowcaseImages,
  coreTeamPortraits,
  teamSectionPhotos,
} from "@/data/teamPhotos";
import type { LightboxImage } from "@/components/ImageLightbox";
import ImageLightbox from "@/components/ImageLightbox";
import { User } from "lucide-react";

const Team = () => {
  // Lightbox state
  const [lightboxImages, setLightboxImages] = useState<LightboxImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const openLightbox = useCallback((images: LightboxImage[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(-1);
    setLightboxImages([]);
  }, []);

  // Team data
  const coreTeam = teamMembers.slice(0, 3);

  const teams = useMemo(
    () => [
      {
        name: "Tech Team",
        description: "Building, maintaining and innovating CSI's technical ecosystem.",
        members: [teamMembers[3], teamMembers[4]],
      },
      {
        name: "Event Management",
        description: "Planning, coordinating and executing all CSI events, workshops and hackathons.",
        members: [teamMembers[5], teamMembers[6]],
      },
      {
        name: "Marketing Team",
        description: "Driving outreach, partnerships and brand visibility across campus and beyond.",
        members: [teamMembers[11], teamMembers[12]],
      },
      {
        name: "Design Team",
        description: "Crafting visual identities, posters and creative assets that define CSI's brand.",
        members: [teamMembers[7], teamMembers[8]],
      },
      {
        name: "Documentation Team",
        description: "Recording, archiving and publishing CSI's activities, reports and knowledge base.",
        members: [teamMembers[13], teamMembers[14]],
      },
      {
        name: "Social Media Team",
        description: "Managing CSI's online presence and community engagement across all platforms.",
        members: [teamMembers[9], teamMembers[10]],
      },
    ],
    []
  );

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
                Meet the passionate individuals driving CSI PES MCOE forward , with a shared vision of fostering innovation, collaboration, and growth in the tech community.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ========== 1. TEAM PHOTOSHOOT ========== */}
        <section className="section-padding !py-16 bg-card/30">
          <div className="container-narrow">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-12 text-center">
                Team Photoshoot
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {teamPhotoshootImages.map((photo, index) => (
                <ScrollReveal key={photo.alt} delay={index * 0.1}>
                  <button
                    type="button"
                    onClick={() => openLightbox(teamPhotoshootImages, index)}
                    className="w-full rounded-2xl bg-card border border-border overflow-hidden aspect-[4/3] hover:border-primary/30 transition-all duration-300"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center justify-center py-2">
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* ========== 2. CORE TEAM ========== */}
        <section className="section-padding !py-16">
          <div className="container-narrow">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-12 text-center">
                Core Team
              </h2>
            </ScrollReveal>

            {/* Core Team Group Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {coreTeamShowcaseImages.map((photo, index) => (
                <ScrollReveal key={photo.alt} delay={index * 0.1}>
                  <button
                    type="button"
                    onClick={() => openLightbox(coreTeamShowcaseImages, index)}
                    className="w-full rounded-2xl bg-card border border-border overflow-hidden aspect-[4/3] hover:border-primary/30 transition-all duration-300"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </button>
                </ScrollReveal>
              ))}
            </div>

            {/* Core Team Member Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreTeam.map((member, i) => {
                const portrait = coreTeamPortraits[member.role];
                return (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 flex flex-col items-center">
                      {portrait?.src ? (
                        <div className="w-full max-w-[240px] aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-border/50 shadow-sm">
                          <img
                            src={portrait.src}
                            alt={portrait.alt}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      ) : (
                        <div className="w-full max-w-[240px] aspect-[3/4] rounded-xl bg-secondary flex items-center justify-center mb-4 border border-border/50">
                          <User size={48} className="text-muted-foreground" />
                        </div>
                      )}
                      <h3 className="font-display font-semibold text-foreground text-base">{member.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center justify-center py-2">
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* ========== 3. SUB TEAMS ========== */}
        <section className="section-padding !py-16">
          <div className="container-narrow">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-12 text-center">
                Teams
              </h2>
            </ScrollReveal>

            <div className="space-y-0">
              {teams.map((team, teamIndex) => {
                const sectionPhotos = teamSectionPhotos.find(
                  (s) => s.name === team.name
                );

                return (
                  <div key={teamIndex}>
                    <div className="space-y-8 py-12">
                      {/* A. Team Name */}
                      <ScrollReveal delay={0.05}>
                        <div className="text-center">
                          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                            {team.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
                            {team.description}
                          </p>
                        </div>
                      </ScrollReveal>

                      {/* B. Team Showcase — Two group photos */}
                      {sectionPhotos && sectionPhotos.showcase.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {sectionPhotos.showcase.map((photo, photoIndex) => (
                            <ScrollReveal key={photo.alt} delay={photoIndex * 0.1}>
                              <button
                                type="button"
                                onClick={() =>
                                  openLightbox(sectionPhotos.showcase, photoIndex)
                                }
                                className="w-full rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 aspect-[4/3]"
                              >
                                <img
                                  src={photo.src}
                                  alt={photo.alt}
                                  loading="lazy"
                                  className="h-full w-full object-cover"
                                />
                              </button>
                            </ScrollReveal>
                          ))}
                        </div>
                      )}

                      {/* C. Leadership Cards — Head & Co-Head */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        {team.members.map((member, i) => {
                          const isHead = i === 0;
                          const portrait = sectionPhotos
                            ? isHead
                              ? sectionPhotos.leadership.head
                              : sectionPhotos.leadership.coHead
                            : undefined;

                          return (
                            <ScrollReveal key={i} delay={i * 0.1}>
                              <div className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 flex flex-col items-center">
                                {portrait?.src ? (
                                  <div className="w-full max-w-[240px] aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-border/50 shadow-sm">
                                    <img
                                      src={portrait.src}
                                      alt={portrait.alt}
                                      className="w-full h-full object-cover object-top"
                                    />
                                  </div>
                                ) : (
                                  <div className="w-full max-w-[240px] aspect-[3/4] rounded-xl bg-secondary flex items-center justify-center mb-4 border border-border/50">
                                    <User size={48} className="text-muted-foreground" />
                                  </div>
                                )}
                                <h4 className="font-display font-semibold text-foreground text-base">
                                  {member.name}
                                </h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {member.role}
                                </p>
                              </div>
                            </ScrollReveal>
                          );
                        })}
                      </div>
                    </div>

                    {/* Divider between team sections (not after the last) */}
                    {teamIndex < teams.length - 1 && (
                      <ScrollReveal delay={0.05}>
                        <div className="flex items-center justify-center py-2">
                          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                        </div>
                      </ScrollReveal>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      {lightboxIndex >= 0 && lightboxImages.length > 0 && (
        <ImageLightbox
          currentIndex={lightboxIndex}
          images={lightboxImages}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
};

export default Team;
