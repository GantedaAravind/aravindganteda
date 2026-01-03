import { Mail, MapPin, Github, Linkedin, Send, MessageCircle, Sparkles, ArrowUpRight, Code, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/aravindganteda",
    icon: Github,
    username: "@aravindganteda",
    hoverBg: "hover:bg-foreground hover:text-background",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aravind-ganteda",
    icon: Linkedin,
    username: "aravind-ganteda",
    hoverBg: "hover:bg-blue-500 hover:text-white",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/aravindganteda",
    icon: Code,
    username: "aravindganteda",
    hoverBg: "hover:bg-orange-500 hover:text-white",
  },
];

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb floating-orb-1 opacity-40" />
        <div className="floating-orb floating-orb-2 opacity-40" />
        <div className="floating-orb floating-orb-3 opacity-30" />
      </div>

      <div className="container max-w-5xl relative">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
        <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Glow Effect */}
          <div className="absolute -inset-1 rounded-3xl blur-xl opacity-50" style={{ background: 'var(--gradient-primary)', filter: 'blur(40px)' }} />
          
          <div className="relative card-glass rounded-3xl p-8 md:p-12">
            {/* Profile Section */}
            <div className="flex flex-col items-center text-center mb-10">
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-2xl flex items-center justify-center text-white font-bold text-4xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden" style={{ background: 'var(--gradient-primary)' }}>
                  AG
                  {/* Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg">👋</span>
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-1">Aravind Ganteda</h3>
              <p className="text-gradient font-semibold mb-2">Full-Stack Developer</p>
              <span className="px-3 py-1 text-xs bg-green-500/10 text-green-500 rounded-full font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for opportunities
              </span>
            </div>

            {/* Contact Options Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <a 
                href="mailto:aravindganteda@gmail.com" 
                className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/30 hover:from-primary/15 hover:to-primary/5 border border-transparent hover:border-primary/30 instant-hover"
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
              <Button size="lg" className="gap-2 rounded-full px-8 btn-glow instant-hover" style={{ background: 'var(--gradient-primary)' }} asChild>
                <a href="mailto:aravindganteda@gmail.com">
                  <Send className="w-4 h-4" />
                  Send an Email
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 rounded-full px-8 hover:bg-primary/10 hover:border-primary/40 instant-hover" asChild>
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
                    className={`group flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary/30 border border-transparent hover:border-border instant-hover ${social.hoverBg}`}
                  >
                    <social.icon className="w-5 h-5 transition-colors" />
                    <div className="text-left">
                      <p className="text-sm font-medium">{social.name}</p>
                      <p className="text-xs opacity-70">{social.username}</p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className={`text-center mt-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground text-sm">
            I typically respond within <span className="text-gradient font-semibold">24 hours</span>. Looking forward to connecting with you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;