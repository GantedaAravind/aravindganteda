import { useState, useEffect } from "react";
import { Menu, X, Download, Sun, Moon, Home, User, Code2, Briefcase, FolderOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState("#");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / docHeight) * 100;
      setScrollProgress(progress);

      // Detect active section
      const sections = navLinks.map(link => link.href.replace('#', '')).filter(Boolean);
      let current = '#';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = `#${section}`;
          }
        }
      }
      setActiveSection(current || '#');
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
    
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-border/30">
        <div 
          className="h-full bg-gradient-to-r from-primary via-primary to-primary/70 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/70 backdrop-blur-2xl border-b border-border/50 shadow-lg shadow-background/20" 
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <nav className="container max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, '#')}
              className="flex items-center gap-2 group"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg shadow-primary/25 overflow-hidden group-hover:shadow-primary/40 transition-shadow duration-300">
                <span className="relative z-10">AG</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </div>
              <span className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                ARAVIND.DEV
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 bg-muted/30 backdrop-blur-sm rounded-full px-2 py-1.5 border border-border/30">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href;
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 group ${
                      isActive 
                        ? 'text-primary-foreground bg-primary shadow-lg shadow-primary/25' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <Icon className={`w-4 h-4 transition-transform duration-300 ${!isActive && 'group-hover:scale-110'}`} />
                    <span>{link.name}</span>
                    {!isActive && (
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 rounded-full border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300" 
                asChild
              >
                <a href="/resume.pdf" download="Aravind_Ganteda_Resume.pdf">
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </Button>
              
              {/* Theme Toggle with Enhanced Animation */}
              <button
                onClick={toggleTheme}
                className={`relative p-2.5 rounded-full transition-all duration-500 overflow-hidden group ${
                  isAnimating ? 'scale-110' : 'scale-100 hover:scale-105'
                } ${isDark ? 'bg-muted/50 hover:bg-muted' : 'bg-primary/10 hover:bg-primary/20'}`}
                aria-label="Toggle theme"
              >
                {/* Ripple effect on click */}
                {isAnimating && (
                  <span className={`absolute inset-0 rounded-full animate-ping ${
                    isDark ? 'bg-yellow-400/30' : 'bg-primary/30'
                  }`} />
                )}
                
                {/* Icon container with rotation */}
                <div className={`relative transition-all duration-500 ${
                  isAnimating ? 'rotate-[360deg] scale-125' : 'rotate-0 scale-100'
                }`}>
                  {isDark ? (
                    <Sun className={`w-5 h-5 transition-colors duration-300 ${
                      isAnimating ? 'text-yellow-400' : 'text-muted-foreground group-hover:text-yellow-500'
                    }`} />
                  ) : (
                    <Moon className={`w-5 h-5 transition-colors duration-300 ${
                      isAnimating ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                    }`} />
                  )}
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${
                  isAnimating ? 'opacity-100' : 'opacity-0'
                } ${isDark ? 'shadow-[0_0_20px_rgba(250,204,21,0.5)]' : 'shadow-[0_0_20px_rgba(var(--primary),0.5)]'}`} />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`relative p-2 rounded-full transition-all duration-300 ${
                  isDark ? 'bg-muted/50' : 'bg-primary/10'
                }`}
                aria-label="Toggle theme"
              >
                <div className={`transition-transform duration-500 ${isAnimating ? 'rotate-[360deg]' : ''}`}>
                  {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-primary" />}
                </div>
              </button>
              
              <button
                className="p-2 text-foreground hover:bg-muted/50 rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`} />
                  <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 flex flex-col gap-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href;
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center gap-3 text-base font-medium rounded-xl px-4 py-3 transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary text-primary-foreground shadow-lg' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                    style={{ 
                      transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                      opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                    {link.name}
                  </a>
                );
              })}
              <div className="mt-4 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="gap-2 w-full rounded-xl" asChild>
                  <a href="/resume.pdf" download="Aravind_Ganteda_Resume.pdf" onClick={() => setIsMobileMenuOpen(false)}>
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
