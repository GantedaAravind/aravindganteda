import { useState, useEffect } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm" : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <nav className="container max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg shadow-primary/25">
              AG
            </div>
            <span className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
              ARAVIND.DEV
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2 rounded-full" asChild>
              <a href="/resume.pdf" download="Aravind_Ganteda_Resume.pdf">
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
            <button
              onClick={toggleTheme}
              className={`relative p-2.5 rounded-full hover:bg-muted/50 transition-all duration-300 text-muted-foreground hover:text-foreground overflow-hidden ${
                isAnimating ? 'scale-110' : 'scale-100'
              }`}
              aria-label="Toggle theme"
            >
              <div className={`transition-all duration-500 ${isAnimating ? 'rotate-[360deg]' : 'rotate-0'}`}>
                {isDark ? (
                  <Sun className={`w-5 h-5 transition-all duration-300 ${isAnimating ? 'text-yellow-400 scale-125' : ''}`} />
                ) : (
                  <Moon className={`w-5 h-5 transition-all duration-300 ${isAnimating ? 'text-primary scale-125' : ''}`} />
                )}
              </div>
              {isAnimating && (
                <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border shadow-lg">
            <div className="container px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg px-4 py-3 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="gap-2 flex-1" asChild>
                  <a href="/resume.pdf" download="Aravind_Ganteda_Resume.pdf" onClick={() => setIsMobileMenuOpen(false)}>
                    <Download className="w-4 h-4" />
                    Resume
                  </a>
                </Button>
                <button
                  onClick={toggleTheme}
                  className={`relative p-2.5 rounded-lg hover:bg-muted/50 transition-all duration-300 overflow-hidden ${
                    isAnimating ? 'scale-110' : 'scale-100'
                  }`}
                  aria-label="Toggle theme"
                >
                  <div className={`transition-all duration-500 ${isAnimating ? 'rotate-[360deg]' : 'rotate-0'}`}>
                    {isDark ? (
                      <Sun className={`w-5 h-5 transition-all duration-300 ${isAnimating ? 'text-yellow-400 scale-125' : ''}`} />
                    ) : (
                      <Moon className={`w-5 h-5 transition-all duration-300 ${isAnimating ? 'text-primary scale-125' : ''}`} />
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;