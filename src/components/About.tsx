import { GraduationCap, Briefcase, Code, Award, Sparkles, Rocket, Target, Cpu } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual - Creative Code Block */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl card-glass p-1 relative overflow-hidden">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/10 via-background to-primary/5 flex items-center justify-center relative">
                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Animated circles */}
                  <div className="absolute top-10 left-10 w-20 h-20 rounded-full border border-primary/20 animate-pulse" />
                  <div className="absolute bottom-20 right-8 w-16 h-16 rounded-full bg-primary/5 animate-[bounce_3s_infinite]" />
                  <div className="absolute top-1/3 right-16 w-12 h-12 rounded-lg border border-primary/30 rotate-45 animate-[spin_10s_linear_infinite]" />
                  
                  {/* Tech icons floating */}
                  <div className="absolute top-8 right-12 p-3 rounded-xl bg-primary/10 border border-primary/20 animate-[bounce_2s_infinite]">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div className="absolute bottom-16 left-12 p-3 rounded-xl bg-green-500/10 border border-green-500/20 animate-[bounce_2.5s_infinite_0.5s]">
                    <Rocket className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="absolute top-1/2 left-8 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 animate-[bounce_3s_infinite_1s]">
                    <Target className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="absolute bottom-8 right-20 p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 animate-[bounce_2.8s_infinite_0.3s]">
                    <Cpu className="w-5 h-5 text-orange-500" />
                  </div>
                </div>

                {/* Center Content */}
                <div className="text-center p-8 relative z-10">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-2xl shadow-primary/30 relative">
                    <span className="text-4xl font-display font-bold text-primary-foreground">AG</span>
                    <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500 animate-pulse" />
                  </div>
                  <p className="text-foreground font-semibold text-xl">Aravind Ganteda</p>
                  <p className="text-primary font-medium">Full-Stack Developer</p>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <span className="px-3 py-1 text-xs bg-green-500/10 text-green-500 rounded-full font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl -z-10 blur-sm" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary/15 to-transparent rounded-xl -z-10" />
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