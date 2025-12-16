import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-8 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-green-400 font-medium text-sm">Open to Work</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-up-delay-1 leading-tight">
              I'm{" "}
              <span className="text-gradient">Aravind Ganteda</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground font-display font-semibold mb-4 animate-fade-up-delay-2">
              Full-Stack Developer Who Builds Products That Scale
            </p>
            
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-up-delay-2 leading-relaxed">
              I turn complex problems into elegant, high-performance web applications. 
              From architecting robust backends to crafting pixel-perfect interfaces—I deliver 
              <span className="text-foreground font-medium"> clean code</span>, 
              <span className="text-foreground font-medium"> scalable systems</span>, and 
              <span className="text-foreground font-medium"> measurable results</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-up-delay-3">
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">
                  <Code2 className="w-5 h-5 mr-2" />
                  View My Work
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-10 animate-fade-up-delay-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:hello@aravindganteda.dev" 
                className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex justify-center items-center animate-fade-up-delay-2">
            <div className="relative">
              {/* Main code block visual */}
              <div className="w-[400px] h-[400px] relative">
                {/* Glowing ring */}
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" />
                <div className="absolute inset-4 rounded-full border border-primary/10" />
                <div className="absolute inset-8 rounded-full border border-primary/5" />
                
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="card-glass rounded-2xl p-8 w-[280px]">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-destructive/80" />
                      <div className="w-3 h-3 rounded-full bg-primary/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="space-y-3 font-mono text-sm">
                      <div className="flex gap-2">
                        <span className="text-primary">const</span>
                        <span className="text-foreground">developer</span>
                        <span className="text-muted-foreground">=</span>
                        <span className="text-muted-foreground">{"{"}</span>
                      </div>
                      <div className="pl-4 text-muted-foreground">
                        name: <span className="text-green-400">"Aravind"</span>,
                      </div>
                      <div className="pl-4 text-muted-foreground">
                        skills: <span className="text-primary">["React",</span>
                      </div>
                      <div className="pl-8 text-primary">
                        "Node", "TypeScript"]
                      </div>
                      <div className="pl-4 text-muted-foreground">
                        passion: <span className="text-green-400">"Building"</span>
                      </div>
                      <div className="text-muted-foreground">{"}"}</div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute top-8 right-0 px-3 py-1.5 rounded-lg bg-primary/20 border border-primary/30 text-primary text-xs font-medium animate-float">
                  React
                </div>
                <div className="absolute bottom-20 -left-4 px-3 py-1.5 rounded-lg bg-secondary border border-border text-foreground text-xs font-medium animate-float" style={{ animationDelay: '1s' }}>
                  TypeScript
                </div>
                <div className="absolute bottom-8 right-8 px-3 py-1.5 rounded-lg bg-secondary border border-border text-foreground text-xs font-medium animate-float" style={{ animationDelay: '2s' }}>
                  Node.js
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
