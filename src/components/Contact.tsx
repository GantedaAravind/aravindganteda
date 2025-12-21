import { Mail, MapPin, Github, Linkedin, Send, MessageCircle, Sparkles, ArrowUpRight, Code, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/aravindganteda",
    icon: Github,
    username: "@aravindganteda",
    color: "group-hover:text-foreground",
    bg: "group-hover:bg-foreground/10",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aravind-ganteda",
    icon: Linkedin,
    username: "aravind-ganteda",
    color: "group-hover:text-blue-500",
    bg: "group-hover:bg-blue-500/10",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/aravindganteda",
    icon: Code,
    username: "aravindganteda",
    color: "group-hover:text-orange-500",
    bg: "group-hover:bg-orange-500/10",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-5xl relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Let's Connect</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Ready to Build Something{" "}
            <span className="text-gradient">Amazing?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you have a project in mind or just want to chat about technology, 
            I'm always open to new opportunities and connections.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl opacity-50" />
          
          <div className="relative card-glass rounded-3xl p-8 md:p-12">
            {/* Profile Section */}
            <div className="flex flex-col items-center text-center mb-10">
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-4xl shadow-2xl shadow-primary/30 rotate-3 group-hover:rotate-0 transition-transform">
                  AG
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">👋</span>
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-1">Aravind Ganteda</h3>
              <p className="text-primary font-medium mb-2">Full-Stack Developer</p>
              <span className="px-3 py-1 text-xs bg-green-500/10 text-green-500 rounded-full font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for opportunities
              </span>
            </div>

            {/* Contact Options Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <a 
                href="mailto:aravindganteda@gmail.com" 
                className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/30 hover:from-primary/10 hover:to-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">aravindganteda@gmail.com</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/30 border border-transparent">
                <div className="p-3 rounded-xl bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                  <p className="font-medium text-foreground">Andhra Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button size="lg" className="gap-2 rounded-full px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow" asChild>
                <a href="mailto:aravindganteda@gmail.com">
                  <Send className="w-4 h-4" />
                  Send an Email
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 rounded-full px-8 hover:bg-primary/5 hover:border-primary/30" asChild>
                <a href="https://www.linkedin.com/in/aravind-ganteda" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Message on LinkedIn
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="border-t border-border/50 pt-8">
              <p className="text-center text-sm text-muted-foreground mb-6">Find me on</p>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-border transition-all duration-300 ${social.bg}`}
                  >
                    <social.icon className={`w-5 h-5 text-muted-foreground transition-colors ${social.color}`} />
                    <div className="text-left">
                      <p className="text-sm font-medium text-foreground">{social.name}</p>
                      <p className="text-xs text-muted-foreground">{social.username}</p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm">
            I typically respond within <span className="text-primary font-medium">24 hours</span>. Looking forward to connecting with you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;