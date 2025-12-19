import { GraduationCap, Briefcase, Code, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl card-glass p-1 relative overflow-hidden">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 via-secondary to-primary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center">
                    <span className="text-5xl font-display font-bold text-primary">AG</span>
                  </div>
                  <p className="text-foreground font-semibold text-lg">Aravind Ganteda</p>
                  <p className="text-muted-foreground text-sm">Full-Stack Developer</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Turning Ideas into Scalable Digital Solutions
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Hey there! I'm <span className="text-foreground font-medium">Aravind Ganteda</span>, 
                a Full-Stack Developer currently engineering solutions at{" "}
                <span className="text-primary font-medium">Gridlex</span>. I specialize in building 
                performant, user-centric web applications using the{" "}
                <span className="text-foreground font-medium">MERN stack</span>, with a strong focus 
                on code quality and performance optimization.
              </p>
              <p>
                Pursuing my B.Tech in Computer Science at{" "}
                <span className="text-foreground font-medium">RGUKT Nuzvid</span> with a{" "}
                <span className="text-primary font-medium">9.4 CGPA</span>, I've developed a solid 
                foundation in both theoretical concepts and practical application. From building 
                full-stack e-commerce platforms to solving{" "}
                <span className="text-foreground font-medium">400+ DSA problems</span>, I thrive on 
                tackling complex challenges.
              </p>
              <p>
                What sets me apart? A relentless focus on{" "}
                <span className="text-foreground font-medium">performance optimization</span>—I've 
                achieved 40-60% improvements in load times across projects. When I'm not coding, 
                you'll find me exploring new technologies, contributing to open source, or diving 
                deep into system design concepts.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="card-glass rounded-xl p-4 text-center hover-lift">
                <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xl font-display font-bold">9.4</p>
                <p className="text-xs text-muted-foreground">CGPA</p>
              </div>
              <div className="card-glass rounded-xl p-4 text-center hover-lift">
                <Code className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xl font-display font-bold">400+</p>
                <p className="text-xs text-muted-foreground">DSA Problems</p>
              </div>
              <div className="card-glass rounded-xl p-4 text-center hover-lift">
                <Briefcase className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xl font-display font-bold">1+</p>
                <p className="text-xs text-muted-foreground">Years Exp</p>
              </div>
              <div className="card-glass rounded-xl p-4 text-center hover-lift">
                <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xl font-display font-bold">MERN</p>
                <p className="text-xs text-muted-foreground">Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
