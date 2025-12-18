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
      // Check for 'const' keyword
      if (code.slice(i, i + 5) === 'const') {
        elements.push(<span key={key++} className="text-purple-400">const</span>);
        i += 5;
        continue;
      }

      // Check for 'developer' variable name
      if (code.slice(i, i + 9) === 'developer') {
        elements.push(<span key={key++} className="text-blue-400">developer</span>);
        i += 9;
        continue;
      }

      // Check for property keys
      const keyMatch = code.slice(i).match(/^(name|role|skills|experience|education|status)(?=:)/);
      if (keyMatch) {
        elements.push(<span key={key++} className="text-cyan-400">{keyMatch[1]}</span>);
        i += keyMatch[1].length;
        continue;
      }

      // Check for strings (double quotes)
      if (code[i] === '"') {
        let j = i + 1;
        while (j < code.length && code[j] !== '"') j++;
        const str = code.slice(i, j + 1);
        elements.push(<span key={key++} className="text-green-400">{str}</span>);
        i = j + 1;
        continue;
      }

      // Check for brackets and braces
      if ('[]{}'.includes(code[i])) {
        elements.push(<span key={key++} className="text-yellow-500">{code[i]}</span>);
        i++;
        continue;
      }

      // Check for = sign
      if (code[i] === '=') {
        elements.push(<span key={key++} className="text-pink-400">=</span>);
        i++;
        continue;
      }

      // Check for colon
      if (code[i] === ':') {
        elements.push(<span key={key++} className="text-muted-foreground">:</span>);
        i++;
        continue;
      }

      // Check for semicolon
      if (code[i] === ';') {
        elements.push(<span key={key++} className="text-muted-foreground">;</span>);
        i++;
        continue;
      }

      // Check for comma
      if (code[i] === ',') {
        elements.push(<span key={key++} className="text-muted-foreground">,</span>);
        i++;
        continue;
      }

      // Regular character (whitespace or other)
      elements.push(<span key={key++} className="text-foreground">{code[i]}</span>);
      i++;
    }

    // Add cursor at the end
    elements.push(
      <span key={key++} className={`text-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
    );

    return elements;
  };

  return <>{renderHighlightedCode()}</>;
};

const Hero = () => {
  const { displayedText, isComplete } = useTypingAnimation(25, 500);
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
              Performance-Driven • User-Centric • Clean Code Advocate
            </p>

            {/* Description - Professional & Engaging */}
            <div className="text-muted-foreground text-base md:text-lg max-w-xl mb-6 leading-relaxed">
              <p className="mb-3">
                Full-Stack Developer specializing in building{" "}
                <span className="text-foreground font-medium">performant, scalable web applications</span> with{" "}
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-md font-medium">React</span> and{" "}
                <span className="bg-green-500/10 text-green-500 px-2 py-0.5 rounded-md font-medium">Node.js</span>.
              </p>
              <p className="mb-3">
                Currently engineering solutions at{" "}
                <span className="text-primary font-semibold">Gridlex</span> while pursuing{" "}
                <span className="text-foreground font-medium">Computer Science</span> at{" "}
                <span className="text-primary font-medium">RGUKT</span>{" "}
                <span className="text-muted-foreground/80">(9.4 CGPA)</span>.
              </p>
              <p>
                Passionate about crafting{" "}
                <span className="text-foreground font-medium">seamless user experiences</span> through clean code,{" "}
                <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-md font-medium">optimization techniques</span>, and modern web technologies.
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

              <div className="p-6 font-mono text-sm min-h-[260px]">
                <pre className="leading-relaxed whitespace-pre-wrap">
                  <SyntaxHighlightedCode code={displayedText} showCursor={showCursor} />
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
