import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink, Code2, Zap, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Projects Built" },
  { value: "500+", label: "DSA Problems" },
  { value: "3+", label: "Years Coding" },
];

const roles = [
  "Full-Stack Developer",
  "React Specialist", 
  "Node.js Expert",
  "Problem Solver"
];

// Letter by letter typing animation hook
const useTypingAnimation = (typingSpeed = 30, startDelay = 500) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const fullCode = `const developer = {
  name: "Aravind Ganteda",
  role: "Full-Stack Developer",
  skills: ["React", "Node.js", "TypeScript"],
  experience: "Gridlex - Software Engineer",
  education: "B.Tech CSE - RGUKT",
  status: "Open to opportunities"
};`;

    let currentIndex = 0;
    let timeout: NodeJS.Timeout;

    const typeNextChar = () => {
      if (currentIndex <= fullCode.length) {
        setDisplayedText(fullCode.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeNextChar, typingSpeed);
      } else {
        setIsComplete(true);
      }
    };

    timeout = setTimeout(typeNextChar, startDelay);

    return () => clearTimeout(timeout);
  }, [typingSpeed, startDelay]);

  return { displayedText, isComplete };
};

// Role cycling hook
const useRoleCycle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return roles[currentIndex];
};

// Syntax highlighter - renders proper React elements
const SyntaxHighlightedCode = ({ code, showCursor }: { code: string; showCursor: boolean }) => {
  const renderHighlightedCode = () => {
    const elements: React.ReactNode[] = [];
    let i = 0;
    let key = 0;

    while (i < code.length) {
      if (code.slice(i, i + 5) === 'const') {
        elements.push(<span key={key++} className="text-purple-400">const</span>);
        i += 5;
        continue;
      }

      if (code.slice(i, i + 9) === 'developer') {
        elements.push(<span key={key++} className="text-blue-400">developer</span>);
        i += 9;
        continue;
      }

      const keyMatch = code.slice(i).match(/^(name|role|skills|experience|education|status)(?=:)/);
      if (keyMatch) {
        elements.push(<span key={key++} className="text-cyan-400">{keyMatch[1]}</span>);
        i += keyMatch[1].length;
        continue;
      }

      if (code[i] === '"') {
        let j = i + 1;
        while (j < code.length && code[j] !== '"') j++;
        const str = code.slice(i, j + 1);
        elements.push(<span key={key++} className="text-green-400">{str}</span>);
        i = j + 1;
        continue;
      }

      if ('[]{}'.includes(code[i])) {
        elements.push(<span key={key++} className="text-yellow-500">{code[i]}</span>);
        i++;
        continue;
      }

      if (code[i] === '=') {
        elements.push(<span key={key++} className="text-pink-400">=</span>);
        i++;
        continue;
      }

      if (code[i] === ':') {
        elements.push(<span key={key++} className="text-muted-foreground">:</span>);
        i++;
        continue;
      }

      if (code[i] === ';') {
        elements.push(<span key={key++} className="text-muted-foreground">;</span>);
        i++;
        continue;
      }

      if (code[i] === ',') {
        elements.push(<span key={key++} className="text-muted-foreground">,</span>);
        i++;
        continue;
      }

      elements.push(<span key={key++} className="text-foreground">{code[i]}</span>);
      i++;
    }

    elements.push(
      <span key={key++} className={`text-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
    );

    return elements;
  };

  return <>{renderHighlightedCode()}</>;
};

const Hero = () => {
  const { displayedText } = useTypingAnimation(25, 500);
  const [showCursor, setShowCursor] = useState(true);
  const currentRole = useRoleCycle();

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section 
      className="min-h-screen pt-44 pb-8 relative overflow-hidden" 
      aria-labelledby="hero-heading"
      itemScope 
      itemType="https://schema.org/Person"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background pointer-events-none" aria-hidden="true" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-80" style={{ background: 'var(--gradient-hero)' }} aria-hidden="true" />

      {/* GPU-accelerated floating orbs - uses CSS animations for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none gpu-accelerate" aria-hidden="true">
        <div className="floating-orb floating-orb-1" />
        <div className="floating-orb floating-orb-2" />
        <div className="floating-orb floating-orb-3" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8"
              role="status"
              aria-label="Currently available for work"
            >
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-green-500 dark:text-green-400 font-medium text-sm">Open to work</span>
            </motion.div>

            {/* Main Heading */}
            <div className="mb-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="text-sm md:text-base text-muted-foreground font-medium tracking-widest uppercase">
                  Hello, I'm
                </span>
              </motion.div>

              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-3 flex flex-wrap items-baseline gap-x-4"
              >
                <span className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-gradient" itemProp="givenName">
                  Aravind
                </span>
                <span className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-foreground" itemProp="familyName">
                  Ganteda
                </span>
              </motion.h1>
            </div>

            {/* Role with cycling animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6"
            >
              <div className="flex flex-wrap items-center gap-3 text-lg md:text-xl">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Code2 className="w-5 h-5 text-primary" aria-hidden="true" />
                  <motion.span
                    key={currentRole}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="font-display font-semibold text-primary"
                    itemProp="jobTitle"
                    aria-live="polite"
                  >
                    {currentRole}
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Skills pills */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-6"
              aria-label="Key skills and focus areas"
            >
              {[
                { icon: Zap, text: "Performance" },
                { icon: Sparkles, text: "Clean Code" },
                { icon: Code2, text: "TypeScript" },
              ].map((item, index) => (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
                >
                  <item.icon className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-muted-foreground text-base md:text-lg max-w-lg mb-8 leading-relaxed"
              itemProp="description"
            >
              I craft <span className="text-foreground font-medium">scalable web applications</span> with 
              modern tech stacks. Passionate about building products that make a 
              <span className="text-primary font-medium"> real impact</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-3 mb-8"
              role="group"
              aria-label="Call to action buttons"
            >
              <Button 
                size="lg" 
                className="gap-2 rounded-full px-8 py-6 text-base font-semibold btn-glow instant-hover" 
                style={{ background: 'var(--gradient-primary)' }}
                asChild
              >
                <a href="#projects" aria-label="View my projects">
                  <ExternalLink className="w-5 h-5" aria-hidden="true" />
                  View Projects
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 rounded-full px-8 py-6 text-base font-semibold border-2 border-primary/30 hover:bg-primary/10 hover:border-primary instant-hover" 
                asChild
              >
                <a href="#contact" aria-label="Contact me">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  Contact Me
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="gap-2 rounded-full px-6 py-6 text-base border border-border hover:border-primary/40 hover:bg-primary/5 instant-hover" 
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download my resume (opens in new tab)">
                  <Download className="w-5 h-5" aria-hidden="true" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-2"
              aria-label="Social media links"
            >
              <span className="text-sm text-muted-foreground mr-2">Find me on</span>
              <a
                href="https://www.linkedin.com/in/ganteda-aravind-113b2427a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-muted/30 border border-border/50 hover:bg-[#0077B5] hover:border-[#0077B5] hover:text-white transition-all duration-300 text-muted-foreground group"
                aria-label="LinkedIn profile (opens in new tab)"
                itemProp="sameAs"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/GantedaAravind"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-muted/30 border border-border/50 hover:bg-foreground hover:border-foreground hover:text-background transition-all duration-300 text-muted-foreground group"
                aria-label="GitHub profile (opens in new tab)"
                itemProp="sameAs"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              </a>
              <a
                href="mailto:aravindganteda@gmail.com"
                className="p-2.5 rounded-xl bg-muted/30 border border-border/50 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 text-muted-foreground group"
                aria-label="Send email to aravindganteda@gmail.com"
                itemProp="email"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              </a>
            </motion.nav>
          </div>

          {/* Right Content - Code Block & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative lg:pl-6"
            aria-hidden="true"
          >
            {/* Code Block with Letter by Letter Typing Animation */}
            <div className="relative card-glass rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300 gradient-border">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">developer.js</span>
              </div>

              <div className="p-6 font-mono text-sm min-h-[260px] bg-slate-900/95 dark:bg-slate-950/90">
                <pre className="leading-relaxed whitespace-pre-wrap text-slate-100">
                  <SyntaxHighlightedCode code={displayedText} showCursor={showCursor} />
                </pre>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6" role="list" aria-label="Key statistics">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="text-center p-4 rounded-xl card-glass hover:border-primary/40 instant-hover cursor-default group"
                  role="listitem"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-col items-center mt-12"
        >
          <a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            aria-label="Scroll down to About section"
          >
            <span className="text-xs font-medium tracking-wider uppercase">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1" aria-hidden="true">
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-current"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
