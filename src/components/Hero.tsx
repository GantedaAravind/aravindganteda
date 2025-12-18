import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { value: "15+", label: "Projects Built" },
  { value: "400+", label: "DSA Problems" },
  { value: "3+", label: "Years Coding" },
];

// Letter by letter typing animation hook
const useTypingAnimation = (typingSpeed = 30, startDelay = 500) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const codeLines = [
    { text: 'const ', className: 'text-primary/80' },
    { text: 'developer', className: 'text-foreground' },
    { text: ' = {', className: 'text-muted-foreground' },
  ];

  const dataLines = [
    { key: 'name', value: '"Aravind Ganteda"' },
    { key: 'role', value: '"Full-Stack Developer"' },
    { key: 'skills', value: '["React", "Node.js", "TypeScript"]' },
    { key: 'experience', value: '"Gridlex - Software Engineer"' },
    { key: 'education', value: '"B.Tech CSE - RGUKT"' },
    { key: 'status', value: '"Open to opportunities"' },
  ];

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
        const currentText = fullCode.slice(0, currentIndex);
        setDisplayedLines(currentText.split('\n'));
        currentIndex++;
        timeout = setTimeout(typeNextChar, typingSpeed);
      } else {
        setIsComplete(true);
      }
    };

    timeout = setTimeout(typeNextChar, startDelay);

    return () => clearTimeout(timeout);
  }, [typingSpeed, startDelay]);

  return { displayedLines, isComplete };
};

// Syntax highlighter component
const SyntaxHighlightedLine = ({ line }: { line: string }) => {
  // Highlight const keyword
  let highlighted = line.replace(/^(const)/, '<span class="text-primary/80">$1</span>');
  
  // Highlight developer variable
  highlighted = highlighted.replace(/(developer)/, '<span class="text-foreground font-semibold">$1</span>');
  
  // Highlight property keys
  highlighted = highlighted.replace(/(\s+)(name|role|skills|experience|education|status)(:)/g, 
    '$1<span class="text-primary/70">$2</span><span class="text-muted-foreground">$3</span>');
  
  // Highlight string values
  highlighted = highlighted.replace(/"([^"]+)"/g, '<span class="text-green-400">"$1"</span>');
  
  // Highlight brackets and braces
  highlighted = highlighted.replace(/(\[|\]|\{|\})/g, '<span class="text-muted-foreground">$1</span>');
  
  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
};

const Hero = () => {
  const { displayedLines, isComplete } = useTypingAnimation(25, 500);
  const [showCursor, setShowCursor] = useState(true);

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

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Availability Badge - Green Attractive */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-green-500/10 border border-green-500/30 mb-6 shadow-lg shadow-green-500/5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-400 font-semibold text-sm tracking-wide">Available for new opportunities</span>
            </div>

            {/* Greeting */}
            <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-3">
              Hi, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-4 leading-tight">
              <span className="text-gradient inline-block">Aravind</span>
              <br />
              <span className="text-foreground inline-block">Ganteda</span>
            </h1>

            {/* Role */}
            <h2 className="text-xl md:text-2xl text-foreground font-display font-semibold mb-2">
              Software Engineer & Full-Stack Developer
            </h2>

            {/* Specialty */}
            <p className="text-primary font-medium text-lg mb-4">
              Scalable Web Solutions Specialist
            </p>

            {/* Description - Made Attractive */}
            <div className="text-muted-foreground text-base md:text-lg max-w-xl mb-6 leading-relaxed space-y-2">
              <p>
                <span className="text-foreground font-medium">B.Tech CSE</span> student at{" "}
                <span className="text-primary font-medium">RGUKT</span> with an excellent academic record.
              </p>
              <p>
                Building <span className="text-foreground font-medium">scalable web applications</span> with{" "}
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-md font-medium">React</span>,{" "}
                <span className="bg-green-500/10 text-green-500 px-2 py-0.5 rounded-md font-medium">Node.js</span>, and{" "}
                <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-md font-medium">Django</span>.
              </p>
              <p>
                Former <span className="text-foreground font-medium">Software Engineer Intern</span> at{" "}
                <span className="text-primary font-semibold">Gridlex</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button size="lg" className="gap-2 rounded-full px-6 shadow-lg shadow-primary/25" asChild>
                <a href="#projects">View My Work</a>
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
          <div className="relative lg:pl-6">
            {/* Code Block with Letter by Letter Typing Animation */}
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
              <div className="p-6 font-mono text-sm min-h-[260px]">
                <pre className="text-muted-foreground leading-relaxed">
                  {displayedLines.map((line, index) => (
                    <div key={index}>
                      <SyntaxHighlightedLine line={line} />
                      {index === displayedLines.length - 1 && (
                        <span className={`text-primary ml-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                      )}
                    </div>
                  ))}
                </pre>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-8 mt-6">
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

        {/* Scroll Indicator - Positioned higher with faster animation */}
        <div className="flex flex-col items-center mt-2">
          <a href="#about" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-sm font-medium">Discover More</span>
            <ArrowDown className="w-5 h-5 animate-[bounce_0.6s_infinite]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
