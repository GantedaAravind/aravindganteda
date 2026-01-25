import { GraduationCap, Briefcase, Code, Award, Sparkles, Rocket, Target, Cpu, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const timeline = [
  { year: "2022", event: "Started B.Tech at RGUKT", icon: GraduationCap },
  { year: "2023", event: "MERN Stack Certified", icon: Award },
  { year: "2024", event: "500+ DSA Problems", icon: Code },
  { year: "2025", event: "Software Engineer @ Gridlex", icon: Briefcase },
];

const stats = [
  { icon: GraduationCap, value: "9.4", label: "CGPA", color: "from-primary to-accent" },
  { icon: Code, value: "500+", label: "DSA Problems", color: "from-blue-500 to-cyan-500" },
  { icon: Briefcase, value: "1+", label: "Years Exp", color: "from-green-500 to-emerald-500" },
  { icon: Award, value: "MERN", label: "Certified", color: "from-pink-500 to-rose-500" },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden" ref={ref} aria-labelledby="about-heading">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="floating-orb floating-orb-1 opacity-50" />
        <div className="floating-orb floating-orb-2 opacity-50" />
      </div>

      <div className="container max-w-6xl relative">
        <header
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-4">
            About Me
          </p>
          <h2 id="about-heading" className="text-3xl md:text-4xl font-display font-bold mb-4">
            Turning Ideas into <span className="text-gradient">Scalable Solutions</span>
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Journey Timeline + Visual */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            {/* Visual Card */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl card-glass p-1 relative overflow-hidden">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/10 via-background to-accent/5 flex items-center justify-center relative">
                  {/* Floating Elements - CSS animations for performance */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-10 w-20 h-20 rounded-full border border-primary/30 animate-pulse" />
                    <div className="absolute bottom-20 right-8 w-16 h-16 rounded-full bg-accent/10 animate-float" />
                    <div className="absolute top-1/3 right-16 w-12 h-12 rounded-lg border border-primary/30 rotate-45" />
                    
                    {/* Tech icons floating */}
                    <div className="absolute top-8 right-12 p-3 rounded-xl bg-primary/10 border border-primary/20 animate-float" style={{ animationDelay: '0s' }}>
                      <Code className="w-5 h-5 text-primary" />
                    </div>
                    <div className="absolute bottom-16 left-12 p-3 rounded-xl bg-green-500/10 border border-green-500/20 animate-float" style={{ animationDelay: '0.5s' }}>
                      <Rocket className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="absolute top-1/2 left-8 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 animate-float" style={{ animationDelay: '1s' }}>
                      <Target className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="absolute bottom-8 right-20 p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 animate-float" style={{ animationDelay: '0.3s' }}>
                      <Cpu className="w-5 h-5 text-orange-500" />
                    </div>
                  </div>

                  {/* Center Content */}
                  <div className="text-center p-8 relative z-10">
                    <div className="w-28 h-28 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden" style={{ background: 'var(--gradient-primary)' }}>
                      <span className="text-3xl font-display font-bold text-white relative z-10">AG</span>
                      <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-yellow-300 animate-pulse" />
                      {/* Shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer" />
                    </div>
                    <p className="text-foreground font-semibold text-lg">Aravind Ganteda</p>
                    <p className="text-primary font-medium text-sm">Full-Stack Developer</p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="px-3 py-1 text-xs bg-green-500/10 text-green-500 rounded-full font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        Available for work
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="card-glass rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-primary" aria-hidden="true" />
                <h3 className="font-display font-semibold">My Journey</h3>
              </div>
              <ol className="relative" aria-label="Career timeline">
                <div className="absolute left-3 top-0 bottom-0 w-0.5" style={{ background: 'var(--gradient-primary)' }} aria-hidden="true" />
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <li
                      key={item.year}
                      className={`flex items-center gap-4 pl-8 relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <div className="absolute left-0 p-1.5 rounded-lg bg-background border border-primary/30" aria-hidden="true">
                        <item.icon className="w-3 h-3 text-primary" />
                      </div>
                      <time className="text-sm font-bold text-gradient">{item.year}</time>
                      <span className="text-sm text-muted-foreground">{item.event}</span>
                    </li>
                  ))}
                </div>
              </ol>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Hey there! I'm <span className="text-foreground font-medium">Aravind Ganteda</span>, 
                a Full-Stack Developer currently engineering solutions at{" "}
                <span className="text-gradient font-semibold">Gridlex</span>. I specialize in building 
                performant, user-centric web applications using the{" "}
                <span className="text-foreground font-medium">MERN stack</span>, with a strong focus 
                on code quality and performance optimization.
              </p>
              <p>
                Pursuing my B.Tech in Computer Science at{" "}
                <span className="text-foreground font-medium">RGUKT Nuzvid</span> with a{" "}
                <span className="text-gradient font-semibold">9.4 CGPA</span>, I've developed a solid 
                foundation in both theoretical concepts and practical application. From building 
                full-stack e-commerce platforms to solving{" "}
                <span className="text-foreground font-medium">500+ DSA problems</span>, I thrive on 
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
            <ul className="grid grid-cols-2 gap-4" aria-label="Quick statistics">
              {stats.map((stat, index) => (
                <li
                  key={stat.label}
                  className={`group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="card-glass rounded-xl p-4 hover:border-primary/40 instant-hover hover-lift group-hover:shadow-lg">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`} aria-hidden="true">
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-2xl font-display font-bold text-gradient">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;