import { Mail, MapPin, Github, Linkedin, Send, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="card-glass rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-3xl shadow-xl shadow-primary/25 mb-4">
              AG
            </div>
            <h3 className="text-2xl font-display font-bold mb-1">Aravind Ganteda</h3>
            <p className="text-muted-foreground">Full-Stack Developer</p>
          </div>

          {/* Contact Options Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <a 
              href="mailto:aravindganteda@gmail.com" 
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
            >
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">aravindganteda@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
              <div className="p-3 rounded-xl bg-primary/10">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                <p className="font-medium text-foreground">Andhra Pradesh, India</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button size="lg" className="gap-2 rounded-full px-8" asChild>
              <a href="mailto:aravindganteda@gmail.com">
                <Send className="w-4 h-4" />
                Send an Email
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 rounded-full px-8" asChild>
              <a href="https://www.linkedin.com/in/aravind-ganteda" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Message on LinkedIn
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground mb-4">Connect with me</p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/aravindganteda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <Github className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/aravind-ganteda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a 
                href="mailto:aravindganteda@gmail.com"
                className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <Mail className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <p className="text-center text-muted-foreground mt-8 text-sm">
          I typically respond within 24 hours. Looking forward to connecting with you!
        </p>
      </div>
    </section>
  );
};

export default Contact;