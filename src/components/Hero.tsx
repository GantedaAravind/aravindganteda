import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const techStack = [
  { name: "React", icon: "</>" },
  { name: "Node.js", icon: "</>" },
  { name: "TypeScript", icon: "</>" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "AWS", icon: "☁️" },
];

const stats = [
  { value: "15+", label: "Projects Built" },
  { value: "3+", label: "Years Exp" },
  { value: "10+", label: "Technologies" },
];

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Floating Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-[20%] w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
        <div className="absolute top-48 right-[35%] w-1.5 h-1.5 rounded-full bg-primary/30" />
        <div className="absolute top-64 right-[15%] w-2.5 h-2.5 rounded-full bg-primary/20" />
        <div className="absolute top-80 right-[40%] w-1.5 h-1.5 rounded-full bg-muted-foreground/20" />
        <div className="absolute top-96 right-[25%] w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[28rem] right-[30%] w-1.5 h-1.5 rounded-full bg-primary/25" />
        <div className="absolute bottom-48 right-[18%] w-2 h-2 rounded-full bg-primary/35" />
        <div className="absolute bottom-32 left-[10%] w-1.5 h-1.5 rounded-full bg-muted-foreground/20" />
        <div className="absolute top-40 left-[5%] w-2 h-2 rounded-full bg-primary/20" />
      </div>

      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/80 border border-border mb-8 animate-fade-up">
              <span className="text-xl">👋</span>
              <span className="text-muted-foreground font-medium text-sm">Available for new opportunities</span>
            </div>
            
            {/* Greeting */}
            <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-4 animate-fade-up-delay-1">
              Hi, I'm
            </p>
            
            {/* Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6 animate-fade-up-delay-1 leading-tight">
              <span className="text-gradient">Aravind</span>
              <br />
              <span className="text-foreground">Ganteda</span>
            </h1>
            
            {/* Role */}
            <h2 className="text-xl md:text-2xl text-foreground font-display font-semibold mb-2 animate-fade-up-delay-2">
              Software Engineer & Full-Stack Developer
            </h2>
            
            {/* Specialty */}
            <p className="text-primary font-medium text-lg mb-6 animate-fade-up-delay-2">
              Scalable Web Solutions Specialist
            </p>
            
            {/* Description */}
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 animate-fade-up-delay-2 leading-relaxed">
              I build scalable web applications and robust backend systems that help businesses grow. 
              Currently engineering solutions that make a real impact.
            </p>
            
            {/* Tech Stack */}
            <div className="mb-8 animate-fade-up-delay-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Working With</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/60 border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                  >
                    <span className="text-primary font-mono text-xs">{tech.icon}</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-up-delay-3">
              <Button size="lg" className="gap-2 rounded-full px-6 shadow-lg shadow-primary/25" asChild>
                <a href="#projects">
                  View My Work
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 rounded-full px-6" asChild>
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  Let's Connect
                </a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 animate-fade-up-delay-3">
              <Button variant="outline" size="sm" className="gap-2 rounded-full" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  Follow on LinkedIn
                </a>
              </Button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border hover:bg-muted/50 hover:border-primary/30 transition-colors text-muted-foreground hover:text-foreground"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@aravindganteda.dev"
                className="p-2.5 rounded-full border border-border hover:bg-muted/50 hover:border-primary/30 transition-colors text-muted-foreground hover:text-foreground"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Code Block & Stats */}
          <div className="relative lg:pl-8">
            {/* Code Block */}
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-2xl shadow-primary/5 overflow-hidden animate-fade-up-delay-2">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">developer.js</span>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <pre className="text-muted-foreground leading-relaxed">
                  <code>
                    <span className="text-primary/80">const</span>{" "}
                    <span className="text-foreground">developer</span>{" "}
                    <span className="text-muted-foreground">=</span>{" "}
                    <span className="text-muted-foreground">{"{"}</span>
                    {"\n"}
                    {"  "}<span className="text-primary/70">name</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-green-400/90">'Aravind Ganteda'</span>
                    <span className="text-muted-foreground">,</span>
                    {"\n"}
                    {"  "}<span className="text-primary/70">role</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-green-400/90">'Full-Stack Developer'</span>
                    <span className="text-muted-foreground">,</span>
                    {"\n"}
                    {"  "}<span className="text-primary/70">skills</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-muted-foreground">[</span>
                    <span className="text-green-400/90">'React'</span>
                    <span className="text-muted-foreground">,</span>{" "}
                    <span className="text-green-400/90">'Node.js'</span>
                    <span className="text-muted-foreground">,</span>{" "}
                    <span className="text-green-400/90">'TypeScript'</span>
                    <span className="text-muted-foreground">],</span>
                    {"\n"}
                    {"  "}<span className="text-primary/70">passion</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-green-400/90">'Building scalable solutions'</span>
                    <span className="text-muted-foreground">,</span>
                    {"\n"}
                    {"  "}<span className="text-primary/70">status</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-green-400/90">'Open to opportunities'</span>
                    {"\n"}
                    <span className="text-muted-foreground">{"};"}</span>
                    <span className="animate-pulse text-primary">|</span>
                  </code>
                </pre>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 mt-8 animate-fade-up-delay-3">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex flex-col items-center mt-16 animate-fade-up-delay-3">
          <span className="text-sm text-muted-foreground mb-2">Discover More</span>
          <a
            href="#about"
            className="p-2 rounded-full border border-border hover:border-primary/50 hover:bg-muted/50 transition-all animate-bounce"
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
