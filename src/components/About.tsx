import { GraduationCap, Briefcase, Code, Award, Sparkles, Rocket, Target, Cpu, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const timeline = [
  { year: "2022", event: "Started B.Tech at RGUKT", icon: GraduationCap },
  { year: "2023", event: "MERN Stack Certified", icon: Award },
  { year: "2024", event: "400+ DSA Problems", icon: Code },
  { year: "2025", event: "Software Engineer @ Gridlex", icon: Briefcase },
];

const stats = [
  { icon: GraduationCap, value: "9.4", label: "CGPA", color: "from-primary to-primary/70" },
  { icon: Code, value: "400+", label: "DSA Problems", color: "from-blue-500 to-cyan-500" },
  { icon: Briefcase, value: "1+", label: "Years Exp", color: "from-green-500 to-emerald-500" },
  { icon: Award, value: "MERN", label: "Certified", color: "from-purple-500 to-pink-500" },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-4">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Turning Ideas into Scalable Digital Solutions
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Journey Timeline + Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Visual Card */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl card-glass p-1 relative overflow-hidden">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/10 via-background to-primary/5 flex items-center justify-center relative">
                  {/* Floating Elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                      className="absolute top-10 left-10 w-20 h-20 rounded-full border border-primary/20"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute bottom-20 right-8 w-16 h-16 rounded-full bg-primary/5"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute top-1/3 right-16 w-12 h-12 rounded-lg border border-primary/30 rotate-45"
                      animate={{ rotate: [45, 90, 45] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    />
                    
                    {/* Tech icons floating */}
                    <motion.div
                      className="absolute top-8 right-12 p-3 rounded-xl bg-primary/10 border border-primary/20"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <Code className="w-5 h-5 text-primary" />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-16 left-12 p-3 rounded-xl bg-green-500/10 border border-green-500/20"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    >
                      <Rocket className="w-5 h-5 text-green-500" />
                    </motion.div>
                    <motion.div
                      className="absolute top-1/2 left-8 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 2.8, repeat: Infinity, delay: 1 }}
                    >
                      <Target className="w-5 h-5 text-blue-500" />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-8 right-20 p-3 rounded-xl bg-orange-500/10 border border-orange-500/20"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3.2, repeat: Infinity, delay: 0.3 }}
                    >
                      <Cpu className="w-5 h-5 text-orange-500" />
                    </motion.div>
                  </div>

                  {/* Center Content */}
                  <div className="text-center p-8 relative z-10">
                    <div className="w-28 h-28 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-2xl shadow-primary/30 relative">
                      <span className="text-3xl font-display font-bold text-primary-foreground">AG</span>
                      <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-yellow-500 animate-pulse" />
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
                <Calendar className="w-4 h-4 text-primary" />
                <h3 className="font-display font-semibold">My Journey</h3>
              </div>
              <div className="relative">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-500 to-green-500" />
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4 pl-8 relative"
                    >
                      <div className="absolute left-0 p-1.5 rounded-lg bg-background border border-border">
                        <item.icon className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm font-bold text-primary">{item.year}</span>
                      <span className="text-sm text-muted-foreground">{item.event}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
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
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <div className="card-glass rounded-xl p-4 hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-1">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-2xl font-display font-bold group-hover:text-primary transition-colors">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
