import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface ImageLightboxProps {
  currentIndex: number;
  images: LightboxImage[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const ImageLightbox = ({ currentIndex, images, onClose, onNavigate }: ImageLightboxProps) => {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (images.length < 2) {
        return;
      }

      if (event.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }

      if (event.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, images.length, onClose, onNavigate]);

  if (!currentImage) {
    return null;
  }

  const canNavigate = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={currentImage.alt}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 inline-flex items-center justify-center rounded-full border border-border bg-card/80 p-2 text-foreground transition-colors hover:bg-card"
        aria-label="Close image preview"
      >
        <X size={20} />
      </button>

      {canNavigate && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onNavigate((currentIndex - 1 + images.length) % images.length);
          }}
          className="absolute left-4 md:left-6 inline-flex items-center justify-center rounded-full border border-border bg-card/80 p-2 text-foreground transition-colors hover:bg-card"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      <div
        className="max-w-6xl max-h-full overflow-hidden rounded-2xl border border-border bg-card"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-h-[85vh] w-auto max-w-full object-contain"
        />
      </div>

      {canNavigate && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onNavigate((currentIndex + 1) % images.length);
          }}
          className="absolute right-4 md:right-6 inline-flex items-center justify-center rounded-full border border-border bg-card/80 p-2 text-foreground transition-colors hover:bg-card"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
};

export default ImageLightbox;
