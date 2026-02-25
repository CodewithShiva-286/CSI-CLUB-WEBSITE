import { Link } from "react-router-dom";
import csiLogo from "@/assets/logo.png";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About CSI", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Events", path: "/upcoming-events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container-narrow section-padding !py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={csiLogo} alt="CSI Logo" className="h-8 brightness-0 invert" />
              <span className="font-display font-semibold text-foreground">CSI PES MCOE</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Computer Society of India — PES Modern College of Engineering, Pune. Innovating, learning, and building the future together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Mail, href: "mailto:csi@pesmcoe.edu.in" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              PES Modern College of Engineering, Pune
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CSI PES MCOE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
