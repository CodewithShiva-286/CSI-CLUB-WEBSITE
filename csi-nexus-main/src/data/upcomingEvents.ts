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
    title: "Beyond Algorithms : Building intelligent solutions wit ML",
    date: "28 september 2026",
    location: "Online Lab",
    desc: "Exploring how Machine Learning goes beyond algorithems to build intellient, practical and impactful solutions",
    highlight: true,
    registrationLink: "https://forms.gle/74uJzcPc8evqNJgFA",
  },
  {
    title: "Techtrek 3.0 - The basics of Computer Engineering",
    date: "Sept, 2026",
    location: "Online",
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
