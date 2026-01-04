import { Github, Linkedin, Code, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border" role="contentinfo">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
          <a href="#" className="text-xl font-display font-bold" aria-label="Go to top of page">
            <span className="text-gradient">Aravind Ganteda</span>
          </a>
            <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1 justify-center md:justify-start">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" aria-label="love" /> © {currentYear}
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex gap-6 text-sm" aria-label="Footer navigation">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <nav className="flex gap-4" aria-label="Social media links">
            <a
              href="https://github.com/GantedaAravind"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub profile (opens in new tab)"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/ganteda-aravind-113b2427a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://leetcode.com/u/GANTEDAARAVIND/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LeetCode profile (opens in new tab)"
            >
              <Code className="w-5 h-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
