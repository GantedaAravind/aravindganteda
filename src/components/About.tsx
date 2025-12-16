import { User, Target, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl card-glass p-1 relative overflow-hidden">
              <div className="w-full h-full rounded-xl bg-secondary flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">Your photo here</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Passionate about creating impactful digital solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a Full-Stack Developer with 5+ years of experience building web applications 
              that solve real-world problems. My journey started with curiosity about how things 
              work on the internet, and it has evolved into a career dedicated to crafting 
              exceptional user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge through tech blog posts and mentoring.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="card-glass rounded-xl p-4 hover-lift">
                <Target className="w-8 h-8 text-primary mb-2" />
                <p className="text-2xl font-display font-bold">50+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="card-glass rounded-xl p-4 hover-lift">
                <Sparkles className="w-8 h-8 text-primary mb-2" />
                <p className="text-2xl font-display font-bold">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
