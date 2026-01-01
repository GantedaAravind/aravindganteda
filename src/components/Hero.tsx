import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink, Code2, Zap, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Projects Built" },
  { value: "400+", label: "DSA Problems" },
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
    <section className="min-h-screen pt-28 pb-8 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background pointer-events-none" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background pointer-events-none" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
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
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-green-500 dark:text-green-400 font-medium text-sm">Open to work</span>
            </motion.div>

            {/* Main Heading */}
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="overflow-hidden"
              >
                <span className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide">
                  Hello, I'm
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-2"
              >
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight">
                  <span className="relative inline-block">
                    <span className="relative z-10 text-gradient">Aravind</span>
                    {/* Underline decoration */}
                    <motion.span 
                      className="absolute -bottom-2 left-0 h-3 md:h-4 bg-primary/20 -z-10 rounded-sm"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    />
                  </span>
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight text-foreground mt-1">
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
                  <Code2 className="w-5 h-5 text-primary" />
                  <motion.span
                    key={currentRole}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="font-display font-semibold text-primary"
                  >
                    {currentRole}
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Skills pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {[
                { icon: Zap, text: "Performance" },
                { icon: Sparkles, text: "Clean Code" },
                { icon: Code2, text: "TypeScript" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
                >
                  <item.icon className="w-3.5 h-3.5" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-muted-foreground text-base md:text-lg max-w-lg mb-8 leading-relaxed"
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
            >
              <Button 
                size="lg" 
                className="gap-2 rounded-full px-6 bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300" 
                asChild
              >
                <a href="#projects">
                  <ExternalLink className="w-4 h-4" />
                  View Projects
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 rounded-full px-6 hover:bg-primary/5 hover:border-primary/50 hover:scale-105 transition-all duration-300" 
                asChild
              >
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="gap-2 rounded-full px-6 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300" 
                asChild
              >
                <a href="/resume.pdf" target="_blank">
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-2"
            >
              <span className="text-sm text-muted-foreground mr-2">Find me on</span>
              <a
                href="https://www.linkedin.com/in/aravind-ganteda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-muted/30 border border-border/50 hover:bg-[#0077B5] hover:border-[#0077B5] hover:text-white transition-all duration-300 text-muted-foreground group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/aravindganteda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-muted/30 border border-border/50 hover:bg-foreground hover:border-foreground hover:text-background transition-all duration-300 text-muted-foreground group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:aravindganteda@gmail.com"
                className="p-2.5 rounded-xl bg-muted/30 border border-border/50 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 text-muted-foreground group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Content - Code Block & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative lg:pl-6"
          >
            {/* Code Block with Letter by Letter Typing Animation */}
            <div className="relative bg-slate-900 dark:bg-card/80 backdrop-blur-sm rounded-2xl border border-slate-700 dark:border-border shadow-2xl shadow-primary/10 overflow-hidden hover:border-primary/50 dark:hover:border-primary/30 transition-colors duration-500">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700 dark:border-border bg-slate-800/50 dark:bg-muted/30">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-slate-400 dark:text-muted-foreground font-mono ml-2">developer.js</span>
              </div>

              <div className="p-6 font-mono text-sm min-h-[260px]">
                <pre className="leading-relaxed whitespace-pre-wrap text-slate-100 dark:text-foreground">
                  <SyntaxHighlightedCode code={displayedText} showCursor={showCursor} />
                </pre>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all cursor-default group"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
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
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs font-medium tracking-wider uppercase">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
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
