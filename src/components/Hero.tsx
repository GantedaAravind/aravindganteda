import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const techStack = [
  { name: "React", icon: "</>" },
  { name: "Node.js", icon: "</>" },
  { name: "TypeScript", icon: "</>" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "AWS", icon: "☁️" },
];

const stats = [
  { value: 15, suffix: "+", label: "Projects Built" },
  { value: 3, suffix: "+", label: "Years Exp" },
  { value: 10, suffix: "+", label: "Technologies" },
];

// Counter component for stats
const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 800;
      const steps = 20;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const codeCardVariants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const, delay: 0.3 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.6 + i * 0.08, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

const Hero = () => {
  const [codeLines, setCodeLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCodeLines((prev) => (prev < 6 ? prev + 1 : prev));
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
            style={{
              top: `${15 + i * 10}%`,
              right: `${15 + (i % 4) * 8}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            className="text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/80 border border-border mb-8"
            >
              <motion.span
                className="text-xl"
                animate={{ rotate: [0, 14, -8, 14, 0] }}
                transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
              >
                👋
              </motion.span>
              <span className="text-muted-foreground font-medium text-sm">Available for new opportunities</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl text-muted-foreground font-light mb-4"
            >
              Hi, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6 leading-tight"
            >
              <motion.span
                className="text-gradient inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Aravind
              </motion.span>
              <br />
              <motion.span
                className="text-foreground inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Ganteda
              </motion.span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl text-foreground font-display font-semibold mb-2"
            >
              Software Engineer & Full-Stack Developer
            </motion.h2>

            {/* Specialty */}
            <motion.p
              variants={itemVariants}
              className="text-primary font-medium text-lg mb-6"
            >
              Scalable Web Solutions Specialist
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 leading-relaxed"
            >
              I build scalable web applications and robust backend systems that help businesses grow.
              Currently engineering solutions that make a real impact.
            </motion.p>

            {/* Tech Stack */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Working With</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech.name}
                    custom={i}
                    variants={pillVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/60 border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
                  >
                    <span className="text-primary font-mono text-xs">{tech.icon}</span>
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="gap-2 rounded-full px-6 shadow-lg shadow-primary/25 group" asChild>
                  <a href="#projects">
                    View My Work
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.span>
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="outline" size="lg" className="gap-2 rounded-full px-6 hover:bg-primary/5" asChild>
                  <a href="#contact">
                    <Mail className="w-4 h-4" />
                    Let's Connect
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm" className="gap-2 rounded-full" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    Follow on LinkedIn
                  </a>
                </Button>
              </motion.div>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border hover:bg-muted/50 hover:border-primary/30 transition-colors text-muted-foreground hover:text-foreground"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:hello@aravindganteda.dev"
                className="p-2.5 rounded-full border border-border hover:bg-muted/50 hover:border-primary/30 transition-colors text-muted-foreground hover:text-foreground"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Code Block & Stats */}
          <div className="relative lg:pl-8">
            {/* Code Block */}
            <motion.div
              variants={codeCardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ rotateY: 2, rotateX: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-2xl shadow-primary/5 overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">developer.js</span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <pre className="text-muted-foreground leading-relaxed">
                  <code>
                    {codeLines >= 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-primary/80">const</span>{" "}
                        <span className="text-foreground">developer</span>{" "}
                        <span className="text-muted-foreground">=</span>{" "}
                        <span className="text-muted-foreground">{"{"}</span>
                      </motion.div>
                    )}
                    {codeLines >= 2 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {"  "}<span className="text-primary/70">name</span>
                        <span className="text-muted-foreground">:</span>{" "}
                        <span className="text-green-400/90">'Aravind Ganteda'</span>
                        <span className="text-muted-foreground">,</span>
                      </motion.div>
                    )}
                    {codeLines >= 3 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {"  "}<span className="text-primary/70">role</span>
                        <span className="text-muted-foreground">:</span>{" "}
                        <span className="text-green-400/90">'Full-Stack Developer'</span>
                        <span className="text-muted-foreground">,</span>
                      </motion.div>
                    )}
                    {codeLines >= 4 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {"  "}<span className="text-primary/70">skills</span>
                        <span className="text-muted-foreground">:</span>{" "}
                        <span className="text-muted-foreground">[</span>
                        <span className="text-green-400/90">'React'</span>
                        <span className="text-muted-foreground">,</span>{" "}
                        <span className="text-green-400/90">'Node.js'</span>
                        <span className="text-muted-foreground">,</span>{" "}
                        <span className="text-green-400/90">'TypeScript'</span>
                        <span className="text-muted-foreground">],</span>
                      </motion.div>
                    )}
                    {codeLines >= 5 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {"  "}<span className="text-primary/70">passion</span>
                        <span className="text-muted-foreground">:</span>{" "}
                        <span className="text-green-400/90">'Building scalable solutions'</span>
                        <span className="text-muted-foreground">,</span>
                      </motion.div>
                    )}
                    {codeLines >= 6 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {"  "}<span className="text-primary/70">status</span>
                        <span className="text-muted-foreground">:</span>{" "}
                        <span className="text-green-400/90">'Open to opportunities'</span>
                        {"\n"}
                        <span className="text-muted-foreground">{"};"}</span>
                        <motion.span
                          className="text-primary inline-block"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          |
                        </motion.span>
                      </motion.div>
                    )}
                  </code>
                </pre>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex justify-center gap-8 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-sm text-muted-foreground mb-2">Discover More</span>
          <motion.a
            href="#about"
            className="p-2 rounded-full border border-border hover:border-primary/50 hover:bg-muted/50 transition-all"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
