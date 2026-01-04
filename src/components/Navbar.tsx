import { useState, useEffect } from "react";
import { Menu, X, Download, Sun, Moon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeSection, setActiveSection] = useState("#");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / docHeight) * 100;
      setScrollProgress(progress);

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

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      if (!savedTheme) localStorage.setItem('theme', 'dark');
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
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-transparent" role="progressbar" aria-valuenow={Math.round(scrollProgress)} aria-valuemin={0} aria-valuemax={100} aria-label="Page scroll progress">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary via-accent to-primary"
          style={{ width: `${scrollProgress}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-2" 
            : "py-4"
        }`}
        role="banner"
      >
        <div className="container max-w-7xl mx-auto px-4">
          <nav className={`relative rounded-2xl transition-all duration-500 ${
            isScrolled 
              ? "bg-background/60 backdrop-blur-2xl border border-border/50 shadow-lg shadow-primary/5 px-4 py-2" 
              : "bg-transparent px-2 py-2"
          }`} role="navigation" aria-label="Main navigation">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a 
                href="#" 
                onClick={(e) => handleNavClick(e, '#')}
                className="flex items-center gap-3 group"
              >
                <div className="relative">
                  {/* Outer glow ring */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-xl opacity-0 group-hover:opacity-70 blur transition-opacity duration-500" />
                  
                  {/* Logo container */}
                  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg overflow-hidden">
                    <span className="relative z-10 font-display">AG</span>
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-base font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    ARAVIND
                  </span>
                  <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em] uppercase">
                    Developer
                  </span>
                </div>
              </a>

              {/* Desktop Nav - Floating pill style */}
              <div className="hidden lg:flex items-center">
                <ul className="relative flex items-center gap-1 bg-muted/40 backdrop-blur-md rounded-full px-1.5 py-1.5 border border-border/30" role="menubar">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href;
                    const isHovered = hoveredLink === link.href;
                    
                    return (
                      <li key={link.name} role="none">
                        <a
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          onMouseEnter={() => setHoveredLink(link.href)}
                          onMouseLeave={() => setHoveredLink(null)}
                          className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 z-10 block"
                          role="menuitem"
                          aria-current={isActive ? "page" : undefined}
                        >
                          {/* Background pill animation */}
                          {(isActive || isHovered) && (
                            <motion.div
                              layoutId="navPill"
                              className={`absolute inset-0 rounded-full ${
                                isActive 
                                  ? 'bg-primary shadow-lg shadow-primary/30' 
                                  : 'bg-muted/60'
                              }`}
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          <span className={`relative z-10 transition-colors duration-200 ${
                            isActive 
                              ? 'text-primary-foreground' 
                              : isHovered 
                                ? 'text-foreground' 
                                : 'text-muted-foreground'
                          }`}>
                            {link.name}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Right Side - Actions */}
              <div className="hidden lg:flex items-center gap-2">
                {/* Resume Button */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="gap-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300" 
                  asChild
                >
                  <a href="/resume.pdf" download="Aravind_Ganteda_Resume.pdf">
                    <Download className="w-4 h-4" />
                    <span className="hidden xl:inline">Resume</span>
                  </a>
                </Button>

                {/* Divider */}
                <div className="w-px h-6 bg-border/50" />
                
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className={`relative p-2.5 rounded-full transition-all duration-300 overflow-hidden group ${
                    isAnimating ? 'scale-110' : 'scale-100 hover:scale-105'
                  } bg-muted/40 hover:bg-muted/60 border border-border/30`}
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isDark ? 'sun' : 'moon'}
                      initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isDark ? (
                        <Sun className="w-4 h-4 text-yellow-500" />
                      ) : (
                        <Moon className="w-4 h-4 text-primary" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </button>

                {/* CTA Button */}
                <Button 
                  size="sm" 
                  className="gap-2 rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:scale-105" 
                  asChild
                >
                  <a href="#contact">
                    <Sparkles className="w-4 h-4" />
                    <span>Hire Me</span>
                  </a>
                </Button>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="flex lg:hidden items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-muted/40 border border-border/30"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-primary" />}
                </button>
                
                <button
                  className="p-2 text-foreground bg-muted/40 border border-border/30 rounded-full transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <div className="relative w-5 h-5">
                    <Menu className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                    }`} />
                    <X className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                    }`} />
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="lg:hidden overflow-hidden"
                >
                  <div className="py-4 flex flex-col gap-1 mt-4 border-t border-border/30">
                    {navLinks.map((link, index) => {
                      const isActive = activeSection === link.href;
                      return (
                        <motion.a
                          key={link.name}
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className={`flex items-center justify-between text-base font-medium rounded-xl px-4 py-3 transition-all duration-300 ${
                            isActive 
                              ? 'bg-primary text-primary-foreground' 
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                          }`}
                        >
                          {link.name}
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-primary-foreground" />
                          )}
                        </motion.a>
                      );
                    })}
                    
                    <div className="flex gap-2 mt-4 pt-4 border-t border-border/30">
                      <Button variant="outline" size="sm" className="flex-1 gap-2 rounded-xl" asChild>
                        <a href="/resume.pdf" download="Aravind_Ganteda_Resume.pdf" onClick={() => setIsMobileMenuOpen(false)}>
                          <Download className="w-4 h-4" />
                          Resume
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1 gap-2 rounded-xl bg-gradient-to-r from-primary to-accent" asChild>
                        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                          <Sparkles className="w-4 h-4" />
                          Hire Me
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
