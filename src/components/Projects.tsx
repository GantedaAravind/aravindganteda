import { Github, ExternalLink, ShoppingCart, FileText, ArrowUpRight, Star, Zap, Play, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "MegaMart",
    subtitle: "E-commerce Platform",
    description: "Full-stack e-commerce platform with debounced search, relevance-based results, and optimized performance. Features include cart management, user authentication, and real-time inventory updates.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    github: "https://github.com/aravindganteda",
    demo: "https://megamart-demo.com",
    icon: ShoppingCart,
    gradient: "from-orange-500 to-rose-500",
    bgGradient: "from-orange-500/10 via-rose-500/5 to-transparent",
    stats: { label: "Load Time", value: "-40%", icon: Zap },
    features: ["Debounced Search", "Cart System", "JWT Auth", "Responsive UI"],
    preview: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
  },
  {
    title: "BlogBazzar",
    subtitle: "Blogging Platform",
    description: "Full-stack blogging platform with optimized API interactions using debouncing, lazy loading, and Shimmer UI loaders. Supports rich text editing, comments, and user profiles.",
    tech: ["MERN Stack", "Redux", "Tailwind CSS", "Bootstrap"],
    github: "https://github.com/aravindganteda",
    demo: "https://blogbazzar-demo.com",
    icon: FileText,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
    stats: { label: "Performance", value: "A+", icon: Star },
    features: ["Rich Editor", "Lazy Loading", "Comments", "User Profiles"],
    preview: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
  },
];

const techIcons: Record<string, string> = {
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "MERN Stack": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
};

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      <div className="container max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing full-stack expertise and performance optimization.
          </p>
        </motion.div>

        {/* Projects - Full Width Cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Main Card */}
              <div className="relative card-glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Preview Image */}
                  <div className={`relative aspect-video lg:aspect-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient}`} />
                    <img
                      src={project.preview}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Overlay with icon */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-4 rounded-full bg-background/90 border border-border shadow-xl cursor-pointer"
                      >
                        <Play className="w-8 h-8 text-primary" />
                      </motion.div>
                    </div>
                    {/* Stats Badge */}
                    <div className={`absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-medium shadow-lg`}>
                      <project.stats.icon className="w-4 h-4" />
                      {project.stats.value}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}>
                        <project.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">{project.subtitle}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs bg-primary/5 border border-primary/10 rounded-full text-primary/80 font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Tech stack with icons */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 px-3 py-1.5 bg-secondary/50 rounded-lg text-sm font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                          {techIcons[tech] && (
                            <img src={techIcons[tech]} alt={tech} className="w-4 h-4" />
                          )}
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1 group/btn" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                          <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-y-0 group-hover/btn:translate-x-0 transition-all" />
                        </a>
                      </Button>
                      <Button className={`flex-1 bg-gradient-to-r ${project.gradient} text-white border-0 hover:opacity-90 hover:scale-105 transition-all`} asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 p-5 rounded-2xl bg-secondary/30 border border-border/50">
            <Image className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">More projects coming soon...</span>
            <a
              href="https://github.com/aravindganteda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity font-medium group"
            >
              <Github className="w-4 h-4" />
              View GitHub
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
