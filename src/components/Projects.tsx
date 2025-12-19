import { Github, ExternalLink, Zap, ShoppingCart, FileText, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "MegaMart",
    subtitle: "E-commerce Platform",
    description: "Full-stack e-commerce platform with debounced search, relevance-based results, and optimized performance. Reduced initial load time by 40% using code splitting and lazy loading.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    icon: ShoppingCart,
    gradient: "from-orange-500 to-rose-500",
    stats: { label: "Load Time", value: "-40%" },
  },
  {
    title: "BlogBazzar",
    subtitle: "Blogging Platform",
    description: "Full-stack blogging platform with optimized API interactions using debouncing, lazy loading, and Shimmer UI loaders for enhanced user experience.",
    tech: ["MERN", "Redux", "Tailwind CSS", "Bootstrap"],
    github: "https://github.com",
    demo: "https://demo.com",
    icon: FileText,
    gradient: "from-blue-500 to-cyan-500",
    stats: { label: "Performance", value: "Optimized" },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      <div className="container max-w-5xl relative">
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

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
            >
              {/* Main Card */}
              <div className="card-glass rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="grid md:grid-cols-[1fr,auto] gap-6 relative">
                  {/* Content */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}>
                        <project.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <span className="px-3 py-1 text-xs bg-secondary/80 rounded-full text-muted-foreground">
                            {project.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-secondary/50 rounded-lg text-sm font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" size="sm" className="group/btn" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                          <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-y-0 group-hover/btn:translate-x-0 transition-all" />
                        </a>
                      </Button>
                      <Button size="sm" className={`bg-gradient-to-r ${project.gradient} text-white border-0 hover:opacity-90`} asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Stats Card */}
                  <div className="hidden md:flex flex-col items-center justify-center">
                    <div className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${project.gradient} p-[2px]`}>
                      <div className="w-full h-full rounded-2xl bg-background flex flex-col items-center justify-center">
                        <Zap className="w-5 h-5 text-primary mb-1" />
                        <span className="text-2xl font-display font-bold text-foreground">{project.stats.value}</span>
                        <span className="text-xs text-muted-foreground">{project.stats.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Github className="w-5 h-5" />
            <span>View more projects on GitHub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
