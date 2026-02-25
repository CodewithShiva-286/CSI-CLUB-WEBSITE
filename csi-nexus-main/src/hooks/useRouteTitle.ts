import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeTitles: Record<string, string> = {
  "/": "CSI CLUB",
  "/about": "About | CSI CLUB",
  "/team": "Team | CSI CLUB",
  "/gallery": "Gallery | CSI CLUB",
  "/past-events": "Past Events | CSI CLUB",
  "/upcoming-events": "Upcoming Events | CSI CLUB",
  "/contact": "Contact | CSI CLUB",
};

export const useRouteTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = routeTitles[pathname] ?? "404 | CSI CLUB";
  }, [pathname]);
};
