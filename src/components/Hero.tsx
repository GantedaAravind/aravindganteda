import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Projects Built" },
  { value: "400+", label: "DSA Problems" },
  { value: "3+", label: "Years Coding" },
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

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-8 relative overflow-hidden">
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
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
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-green-500/10 border border-green-500/30 mb-6 shadow-lg shadow-green-500/5"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-400 font-semibold text-sm tracking-wide">Available for new opportunities</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-3xl text-muted-foreground font-light mb-3"
            >
              Hi, I'm
            </motion.p>

            {/* Name with animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-4 leading-tight"
            >
              <span className="text-gradient inline-block">Aravind</span>
              <br />
              <span className="text-foreground inline-block">Ganteda</span>
            </motion.h1>

            {/* Tagline - More specific */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-foreground font-display font-semibold mb-2"
            >
              Full-Stack Developer | Building Performant Web Apps
            </motion.h2>

            {/* Specialty */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-primary font-medium text-lg mb-4"
            >
              React & Node.js Expert • Performance Optimizer • Clean Code Advocate
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-muted-foreground text-lg md:text-xl max-w-xl mb-6 leading-relaxed"
            >
              I transform ideas into <span className="text-foreground font-medium">scalable web applications</span>. 
              Passionate about crafting <span className="text-primary font-medium">user-centric experiences</span> with 
              modern technologies and optimized performance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 mb-6"
            >
              <Button size="lg" className="gap-2 rounded-full px-8 shadow-lg shadow-primary/25 hover:scale-105 transition-transform" asChild>
                <a href="#projects">
                  <ExternalLink className="w-4 h-4" />
                  View Projects
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 rounded-full px-8 hover:bg-primary/5 hover:scale-105 transition-all" asChild>
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="gap-2 rounded-full px-6 border border-border hover:border-primary/30" asChild>
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
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-3"
            >
              <a
                href="https://www.linkedin.com/in/aravind-ganteda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 text-muted-foreground group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/aravindganteda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:bg-foreground hover:border-foreground hover:text-background transition-all duration-300 text-muted-foreground group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:aravindganteda@gmail.com"
                className="p-3 rounded-full border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 text-muted-foreground group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
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
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-2xl shadow-primary/5 overflow-hidden hover:border-primary/30 transition-colors duration-500">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">developer.js</span>
              </div>

              <div className="p-6 font-mono text-sm min-h-[260px]">
                <pre className="leading-relaxed whitespace-pre-wrap">
                  <SyntaxHighlightedCode code={displayedText} showCursor={showCursor} />
                </pre>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-8 mt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center group cursor-default"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
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
          className="flex flex-col items-center mt-8"
        >
          <a href="#about" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-sm font-medium">Discover More</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
