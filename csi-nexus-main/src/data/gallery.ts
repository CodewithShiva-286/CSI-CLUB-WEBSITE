export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryEvent {
  title: string;
  description: string;
  images: GalleryImage[];
}

export interface GalleryYear {
  year: string;
  departmentPhotos: GalleryImage[];
  events: GalleryEvent[];
}

const galleryModules = import.meta.glob("@/assets/gallery/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const formatAltText = (value: string) => value.replace(/\.[^/.]+$/, "");

const galleryMap = new Map<string, GalleryYear>();

for (const [path, src] of Object.entries(galleryModules)) {
  const segments = path.split("/");
  const galleryIndex = segments.indexOf("gallery");

  if (galleryIndex === -1) {
    continue;
  }

  const year = segments[galleryIndex + 1];
  const nextSegment = segments[galleryIndex + 2];
  const fileName = segments[segments.length - 1];
  const image: GalleryImage = {
    src,
    alt: formatAltText(fileName),
  };

  if (!year) {
    continue;
  }

  const yearEntry = galleryMap.get(year) ?? {
    year,
    departmentPhotos: [],
    events: [],
  };

  const isStandaloneYearPhoto = segments.length === galleryIndex + 3;

  if (isStandaloneYearPhoto) {
    yearEntry.departmentPhotos.push(image);
  } else if (nextSegment) {
    const existingEvent = yearEntry.events.find((event) => event.title === nextSegment);

    if (existingEvent) {
      existingEvent.images.push(image);
    } else {
      yearEntry.events.push({
        title: nextSegment,
        description: "",
        images: [image],
      });
    }
  }

  galleryMap.set(year, yearEntry);
}

export const galleryByYear: GalleryYear[] = Array.from(galleryMap.values())
  .sort((a, b) => Number(b.year) - Number(a.year))
  .map((yearEntry) => ({
    ...yearEntry,
    events: yearEntry.events.sort((a, b) => a.title.localeCompare(b.title)),
  }));
