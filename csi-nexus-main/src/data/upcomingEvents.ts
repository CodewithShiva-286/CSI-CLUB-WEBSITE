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
    title: "Orientation Session for New CSI Members",
    date: "To be updated soon",
    location: "To be updated soon",
    desc: "Get started with club CSI and learn about our initiatives.",
    highlight: true,
    registrationLink: "https://forms.gle/Dwj9VPHfuv3q19Q39",
  },
  {
    title: "The basics of Computer Engineering",
    date: "Sept, 2026",
    location: "To be updated soon",
    desc: "An introductory session on computer engineering fundamentals , Technologies , and career paths.",
    registrationLink: "",
  },
  {
    title: "Hands-On Python Workshop",
    date: "sept 2026",
    location: "To be updated soon",
    desc: "Learn the fundamentals of Python programming.By the end of this workshop, you'll be able to write basic Python programs and understand its applications in various domains.",
    registrationLink: "",
  },
  {
    title: "Techtrek 3.0 - A Journey into the World of Technology",
    date: "To be updated soon",
    location: "To be updated soon",
    desc: "Learn about the latest trends and innovations in technology.",
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
