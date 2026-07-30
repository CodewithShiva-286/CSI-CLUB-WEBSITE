import type { LightboxImage } from "@/components/ImageLightbox";

export interface TeamPortrait {
  src?: string;
  alt: string;
}

export interface TeamSectionPhotos {
  name: string;
  showcase: LightboxImage[];
  leadership: {
    head: TeamPortrait;
    coHead: TeamPortrait;
  };
}

// ── Group Photos ──────────────────────────────────────────────
import groupPhoto1 from "@/assets/Team_Photos/Group_Photos/IMG20260402141722_result.webp";
import groupPhoto2 from "@/assets/Team_Photos/Group_Photos/IMG20260402141746_result.webp";
import groupPhoto3 from "@/assets/Team_Photos/Group_Photos/IMG20260402142358_result.webp";
import groupPhoto4 from "@/assets/Team_Photos/Group_Photos/IMG20260402161119_result.webp";

// ── Core Team ─────────────────────────────────────────────────
import coreTeam1 from "@/assets/Team_Photos/Core Team/Team_1_result.webp";
import coreTeam2 from "@/assets/Team_Photos/Core Team/Team_2_result.webp";
import president from "@/assets/Team_Photos/Core Team/President_result.webp";
import vicePresident from "@/assets/Team_Photos/Core Team/Vice-President_result.webp";
import secretary from "@/assets/Team_Photos/Core Team/Secretary_result.webp";

// ── Tech Team ─────────────────────────────────────────────────
import techTeam1 from "@/assets/Team_Photos/Team_photos/Tech_Team/Tech_Team_1_result.webp";
import techTeam2 from "@/assets/Team_Photos/Team_photos/Tech_Team/Tech_Team_2_result.webp";
import techHead from "@/assets/Team_Photos/Team_photos/Tech_Team/Head_Cohead/Tech_Head_result.webp";
import techCoHead from "@/assets/Team_Photos/Team_photos/Tech_Team/Head_Cohead/Tech_Co-head_result.webp";

// ── Event Management ──────────────────────────────────────────
import eventTeam1 from "@/assets/Team_Photos/Team_photos/Event_Management/Team_1_result.webp";
import eventTeam2 from "@/assets/Team_Photos/Team_photos/Event_Management/Team_2_result.webp";
import eventHead from "@/assets/Team_Photos/Team_photos/Event_Management/head_co-head/head_result.webp";
import eventCoHead from "@/assets/Team_Photos/Team_photos/Event_Management/head_co-head/co-head_result.webp";

// ── Marketing Team ────────────────────────────────────────────
import marketingTeam1 from "@/assets/Team_Photos/Team_photos/Marketing_Team/Team_1_result.webp";
import marketingTeam2 from "@/assets/Team_Photos/Team_photos/Marketing_Team/team_2_result.webp";
import marketingHead from "@/assets/Team_Photos/Team_photos/Marketing_Team/head_cohead/Head_result.webp";
import marketingCoHead from "@/assets/Team_Photos/Team_photos/Marketing_Team/head_cohead/co_head_result.webp";

// ── Design Team ───────────────────────────────────────────────
import designTeam1 from "@/assets/Team_Photos/Team_photos/Design_Team/team_1_result.webp";
import designTeam2 from "@/assets/Team_Photos/Team_photos/Design_Team/Team_2_result.webp";
import designHead from "@/assets/Team_Photos/Team_photos/Design_Team/Head_co-head/Head_result.webp";
import designCoHead from "@/assets/Team_Photos/Team_photos/Design_Team/Head_co-head/co-head_result.webp";

// ── Documentation Team ────────────────────────────────────────
import docsTeam1 from "@/assets/Team_Photos/Team_photos/Documentation_Team/Team_1_result.webp";
import docsTeam2 from "@/assets/Team_Photos/Team_photos/Documentation_Team/Team_2_result.webp";
import docsHead from "@/assets/Team_Photos/Team_photos/Documentation_Team/Head_co-head/Head_result.webp";
import docsCoHead from "@/assets/Team_Photos/Team_photos/Documentation_Team/Head_co-head/co-head_result.webp";

// ── Social Media Team ─────────────────────────────────────────
import socialTeam1 from "@/assets/Team_Photos/Team_photos/Social_Media_Team/Team_1_result.webp";
import socialTeam2 from "@/assets/Team_Photos/Team_photos/Social_Media_Team/Team_2_result.webp";
import socialHead from "@/assets/Team_Photos/Team_photos/Social_Media_Team/Head_Co-head/Head_result.webp";
import socialCoHead from "@/assets/Team_Photos/Team_photos/Social_Media_Team/Head_Co-head/co_head_result.webp";

// ══════════════════════════════════════════════════════════════
// Data Exports
// ══════════════════════════════════════════════════════════════

export const teamPhotoshootImages: LightboxImage[] = [
  { src: groupPhoto1, alt: "CSI team photoshoot 1" },
  { src: groupPhoto2, alt: "CSI team photoshoot 2" },
  { src: groupPhoto3, alt: "CSI team photoshoot 3" },
  { src: groupPhoto4, alt: "CSI team photoshoot 4" },
];

export const coreTeamShowcaseImages: LightboxImage[] = [
  { src: coreTeam1, alt: "Core team group photo 1" },
  { src: coreTeam2, alt: "Core team group photo 2" },
];

export const coreTeamPortraits: Record<string, TeamPortrait> = {
  President: {
    src: president,
    alt: "President portrait",
  },
  "Vice President": {
    src: vicePresident,
    alt: "Vice President portrait",
  },
  Secretary: {
    src: secretary,
    alt: "Secretary portrait",
  },
};

export const teamSectionPhotos: TeamSectionPhotos[] = [
  {
    name: "Tech Team",
    showcase: [
      { src: techTeam1, alt: "Tech Team showcase 1" },
      { src: techTeam2, alt: "Tech Team showcase 2" },
    ],
    leadership: {
      head: { src: techHead, alt: "Tech Team head portrait" },
      coHead: { src: techCoHead, alt: "Tech Team co-head portrait" },
    },
  },
  {
    name: "Event Management",
    showcase: [
      { src: eventTeam1, alt: "Event Management showcase 1" },
      { src: eventTeam2, alt: "Event Management showcase 2" },
    ],
    leadership: {
      head: { src: eventHead, alt: "Event Management head portrait" },
      coHead: { src: eventCoHead, alt: "Event Management co-head portrait" },
    },
  },
  {
    name: "Marketing Team",
    showcase: [
      { src: marketingTeam1, alt: "Marketing Team showcase 1" },
      { src: marketingTeam2, alt: "Marketing Team showcase 2" },
    ],
    leadership: {
      head: { src: marketingHead, alt: "Marketing Team head portrait" },
      coHead: { src: marketingCoHead, alt: "Marketing Team co-head portrait" },
    },
  },
  {
    name: "Design Team",
    showcase: [
      { src: designTeam1, alt: "Design Team showcase 1" },
      { src: designTeam2, alt: "Design Team showcase 2" },
    ],
    leadership: {
      head: { src: designHead, alt: "Design Team head portrait" },
      coHead: { src: designCoHead, alt: "Design Team co-head portrait" },
    },
  },
  {
    name: "Documentation Team",
    showcase: [
      { src: docsTeam1, alt: "Documentation Team showcase 1" },
      { src: docsTeam2, alt: "Documentation Team showcase 2" },
    ],
    leadership: {
      head: { src: docsHead, alt: "Documentation Team head portrait" },
      coHead: { src: docsCoHead, alt: "Documentation Team co-head portrait" },
    },
  },
  {
    name: "Social Media Team",
    showcase: [
      { src: socialTeam1, alt: "Social Media Team showcase 1" },
      { src: socialTeam2, alt: "Social Media Team showcase 2" },
    ],
    leadership: {
      head: { src: socialHead, alt: "Social Media Team head portrait" },
      coHead: { src: socialCoHead, alt: "Social Media Team co-head portrait" },
    },
  },
];
