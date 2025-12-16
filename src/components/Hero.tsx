import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container max-w-5xl text-center relative z-10">
        <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-6 animate-fade-up">
          Full-Stack Developer
        </p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-up-delay-1">
          Hi, I'm <span className="text-gradient">Aravind Ganteda</span>
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up-delay-2 leading-relaxed">
          I'm a passionate Full-Stack Developer who loves turning ideas into seamless, user-friendly digital experiences. 
          Building innovative web solutions that solve real problems and create lasting impact.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up-delay-3">
          <Button variant="hero" size="xl" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <div className="flex gap-6 justify-center mt-12 animate-fade-up-delay-3">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:hello@aravindganteda.dev" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
