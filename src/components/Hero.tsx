import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "TypeScript", icon: "📘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "MySQL", icon: "🐬" },
  { name: "Python", icon: "🐍" },
];

const stats = [
  { value: "15+", label: "Projects Built" },
  { value: "400+", label: "DSA Problems" },
  { value: "9.4", label: "CGPA" },
];

// Typing animation hook
const useTypingAnimation = (lines: string[], typingSpeed = 50, lineDelay = 500) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsComplete(true);
      return;
    }

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, lineDelay);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, lines, typingSpeed, lineDelay]);

  return { displayedLines, isComplete };
};

const Hero = () => {
  const codeLines = [
    'const developer = {',
    '  name: "Aravind Ganteda",',
    '  role: "Full-Stack Developer",',
    '  skills: ["React", "Node.js", "TypeScript"],',
    '  experience: "Gridlex - Software Engineer",',
    '  education: "B.Tech CSE - CGPA: 9.4/10",',
    '  status: "Open to opportunities"',
    '};',
  ];

  const { displayedLines, isComplete } = useTypingAnimation(codeLines, 30, 300);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background pointer-events-none" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Availability Badge - Green Attractive */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-green-500/10 border border-green-500/30 mb-8 shadow-lg shadow-green-500/5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-400 font-semibold text-sm tracking-wide">Available for new opportunities</span>
            </div>

            {/* Greeting */}
            <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-4">
              Hi, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="text-gradient inline-block">Aravind</span>
              <br />
              <span className="text-foreground inline-block">Ganteda</span>
            </h1>

            {/* Role */}
            <h2 className="text-xl md:text-2xl text-foreground font-display font-semibold mb-2">
              Software Engineer & Full-Stack Developer
            </h2>

            {/* Specialty */}
            <p className="text-primary font-medium text-lg mb-6">
              Scalable Web Solutions Specialist
            </p>

            {/* Description */}
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              B.Tech CSE student at RGUKT with 9.4 CGPA. Experienced in building scalable web applications 
              with React, Node.js, and Django. Former Software Engineer Intern at Gridlex.
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Working With</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/60 border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
                  >
                    <span className="text-sm">{tech.icon}</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button size="lg" className="gap-2 rounded-full px-6 shadow-lg shadow-primary/25" asChild>
                <a href="#projects">
                  View My Work
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 rounded-full px-6 hover:bg-primary/5" asChild>
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  Let's Connect
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2 rounded-full" asChild>
                <a href="https://www.linkedin.com/in/aravind-ganteda" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  Follow on LinkedIn
                </a>
              </Button>
              <a
                href="https://github.com/aravindganteda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border hover:bg-muted/50 hover:border-primary/30 transition-colors text-muted-foreground hover:text-foreground"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:aravindganteda@gmail.com"
                className="p-2.5 rounded-full border border-border hover:bg-muted/50 hover:border-primary/30 transition-colors text-muted-foreground hover:text-foreground"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Code Block & Stats */}
          <div className="relative lg:pl-8">
            {/* Code Block with Typing Animation */}
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-2xl shadow-primary/5 overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">developer.js</span>
              </div>

              {/* Code Content with Typing Animation */}
              <div className="p-6 font-mono text-sm min-h-[280px]">
                <pre className="text-muted-foreground leading-relaxed">
                  <code>
                    {displayedLines.map((line, index) => (
                      <div key={index} className="whitespace-pre">
                        {line.includes('const developer') && (
                          <>
                            <span className="text-primary/80">const</span>{" "}
                            <span className="text-foreground">developer</span>{" "}
                            <span className="text-muted-foreground">=</span>{" "}
                            <span className="text-muted-foreground">{"{"}</span>
                          </>
                        )}
                        {line.includes('name:') && (
                          <>
                            {"  "}<span className="text-primary/70">name</span>
                            <span className="text-muted-foreground">:</span>{" "}
                            <span className="text-green-400/90">"Aravind Ganteda"</span>
                            <span className="text-muted-foreground">,</span>
                          </>
                        )}
                        {line.includes('role:') && (
                          <>
                            {"  "}<span className="text-primary/70">role</span>
                            <span className="text-muted-foreground">:</span>{" "}
                            <span className="text-green-400/90">"Full-Stack Developer"</span>
                            <span className="text-muted-foreground">,</span>
                          </>
                        )}
                        {line.includes('skills:') && (
                          <>
                            {"  "}<span className="text-primary/70">skills</span>
                            <span className="text-muted-foreground">:</span>{" "}
                            <span className="text-muted-foreground">[</span>
                            <span className="text-green-400/90">"React"</span>
                            <span className="text-muted-foreground">,</span>{" "}
                            <span className="text-green-400/90">"Node.js"</span>
                            <span className="text-muted-foreground">,</span>{" "}
                            <span className="text-green-400/90">"TypeScript"</span>
                            <span className="text-muted-foreground">],</span>
                          </>
                        )}
                        {line.includes('experience:') && (
                          <>
                            {"  "}<span className="text-primary/70">experience</span>
                            <span className="text-muted-foreground">:</span>{" "}
                            <span className="text-green-400/90">"Gridlex - Software Engineer"</span>
                            <span className="text-muted-foreground">,</span>
                          </>
                        )}
                        {line.includes('education:') && (
                          <>
                            {"  "}<span className="text-primary/70">education</span>
                            <span className="text-muted-foreground">:</span>{" "}
                            <span className="text-green-400/90">"B.Tech CSE - CGPA: 9.4/10"</span>
                            <span className="text-muted-foreground">,</span>
                          </>
                        )}
                        {line.includes('status:') && (
                          <>
                            {"  "}<span className="text-primary/70">status</span>
                            <span className="text-muted-foreground">:</span>{" "}
                            <span className="text-green-400/90">"Open to opportunities"</span>
                          </>
                        )}
                        {line === '};' && (
                          <span className="text-muted-foreground">{"};"}</span>
                        )}
                      </div>
                    ))}
                    {/* Blinking Cursor */}
                    <span className={`text-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-8 mt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Positioned higher */}
        <div className="flex flex-col items-center mt-8">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-sm font-medium">Discover More</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
