import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { galleryByYear } from "@/data/gallery";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="section-padding !pt-16">
          <div className="container-narrow">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Memories</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Gallery</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-16">
                Moments captured from our events and community activities.
              </p>
            </ScrollReveal>

            <div className="space-y-16">
              {galleryByYear.map((yearSection, yearIndex) => (
                <section key={yearSection.year} className="space-y-8">
                  <ScrollReveal delay={yearIndex * 0.05}>
                    <div className="flex items-center justify-center">
                      <div className="w-full max-w-3xl flex items-center gap-4">
                        <div className="h-px flex-1 bg-border/60" />
                        <p className="text-3xl md:text-4xl font-display font-bold text-foreground text-center shrink-0">
                          {yearSection.year}
                        </p>
                        <div className="h-px flex-1 bg-border/60" />
                      </div>
                    </div>
                  </ScrollReveal>

                  {yearSection.departmentPhotos.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {yearSection.departmentPhotos.map((photo, photoIndex) => (
                        <ScrollReveal key={`${yearSection.year}-department-${photo.src}`} delay={photoIndex * 0.05}>
                          <button
                            type="button"
                            onClick={() => setSelectedImage(photo)}
                            className={`rounded-2xl bg-card border border-border overflow-hidden text-left ${photoIndex % 3 === 0 ? "aspect-[4/5]" : "aspect-square"}`}
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

                  <div className="space-y-10">
                    {yearSection.events.map((event, eventIndex) => (
                      <div key={`${yearSection.year}-${event.title}`} className="space-y-4">
                        {eventIndex > 0 && (
                          <ScrollReveal delay={eventIndex * 0.05}>
                            <div className="flex items-center justify-center py-2">
                              <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                            </div>
                          </ScrollReveal>
                        )}

                        <ScrollReveal delay={eventIndex * 0.05}>
                          <div>
                            <h2 className="text-2xl font-display font-semibold text-foreground">{event.title}</h2>
                            {event.description && (
                              <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
                            )}
                          </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {event.images.map((image, imageIndex) => (
                            <ScrollReveal key={image.src} delay={imageIndex * 0.05}>
                              <button
                                type="button"
                                onClick={() => setSelectedImage(image)}
                                className={`rounded-2xl bg-card border border-border overflow-hidden text-left ${imageIndex % 3 === 0 ? "aspect-[4/5]" : "aspect-square"}`}
                              >
                                <img
                                  src={image.src}
                                  alt={image.alt}
                                  loading="lazy"
                                  className="h-full w-full object-cover"
                                />
                              </button>
                            </ScrollReveal>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 inline-flex items-center justify-center rounded-full border border-border bg-card/80 p-2 text-foreground transition-colors hover:bg-card"
            aria-label="Close image preview"
          >
            <X size={20} />
          </button>
          <div
            className="max-w-6xl max-h-full overflow-hidden rounded-2xl border border-border bg-card"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
