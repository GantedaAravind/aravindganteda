import { Github, ExternalLink, ShoppingCart, FileText, ArrowUpRight, Star, Zap, Code2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    features: ["Debounced Search", "Cart System", "Auth", "Responsive"],
  },
  {
    title: "BlogBazzar",
    subtitle: "Blogging Platform",
    description: "Full-stack blogging platform with optimized API interactions using debouncing, lazy loading, and Shimmer UI loaders. Supports rich text editing, comments, and user profiles.",
    tech: ["MERN", "Redux", "Tailwind CSS", "Bootstrap"],
    github: "https://github.com/aravindganteda",
    demo: "https://blogbazzar-demo.com",
    icon: FileText,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
    stats: { label: "Performance", value: "A+", icon: Star },
    features: ["Rich Editor", "Lazy Loading", "Comments", "Profiles"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      <div className="container max-w-6xl relative">
        <div className="text-center mb-16">
          <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing full-stack expertise and performance optimization.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative"
            >
              {/* Card Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Main Card */}
              <div className="relative card-glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-br ${project.bgGradient} p-6 pb-4 border-b border-border/50`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}>
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-medium`}>
                      <project.stats.icon className="w-3.5 h-3.5" />
                      {project.stats.value}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 text-xs bg-secondary/80 backdrop-blur rounded-full text-muted-foreground">
                      {project.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2.5 py-1 text-xs bg-primary/5 border border-primary/10 rounded-lg text-primary/80"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-secondary/50 rounded-lg text-sm font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors duration-200 flex items-center gap-1.5"
                      >
                        <Code2 className="w-3 h-3" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="flex-1 group/btn" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-y-0 group-hover/btn:translate-x-0 transition-all" />
                      </a>
                    </Button>
                    <Button size="sm" className={`flex-1 bg-gradient-to-r ${project.gradient} text-white border-0 hover:opacity-90 hover:scale-105 transition-all`} asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/50">
            <Layers className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">More projects coming soon...</span>
            <a
              href="https://github.com/aravindganteda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4 font-medium group"
            >
              <Github className="w-4 h-4" />
              View GitHub
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;