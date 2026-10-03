export interface UpcomingEvent {
  title: string;
  date: string;
  location: string;
  desc: string;
  highlight?: boolean;
  registrationLink?: string;
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    title: "CSI Club Interviews - 2026",
    date: "5th & 6th october 2026",
    location: "325 classroom",
    desc: "An opportunity for students to join the Computer Society of India (CSI) club and be a part of a community of like-minded individuals who are passionate about technology and innovation.",
    highlight: true,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf5TVyOhQ744xoVCfmoxDG2SV2iSmHJ7ryDWPi_KBSmmnVcxQ/viewform",
  },
  {
    title: "Techtrek 3.0",
    date: "To be updated soon",
    location: "To be updated soon",
    desc: "An introductory session on computer engineering fundamentals , Technologies , and career paths.",
    highlight: true,
    registrationLink: "",
  },
  {
    title: "Code Fiesta 2027",
    date: "To be updated soon",
    location: "To be updated soon",
    desc: "A session to help students explore different career paths and make informed decisions about their future.",
    registrationLink: "",
  },
  {
    title: "Aspire 2027",
    date: "To be updated soon",
    location: "To be updated soon",
    desc: "A coding competition where participants can showcase their programming skills and compete for prizes.",
    registrationLink: "",
  }

];
