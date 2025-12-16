import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with real-time inventory, secure payments, and admin dashboard. Built for scalability and performance.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, drag-and-drop interface, and team analytics.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "AI Content Generator",
    description: "Leveraging GPT-4 to generate marketing copy, blog posts, and social media content with customizable tone.",
    tech: ["Python", "FastAPI", "OpenAI", "React"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    title: "Finance Dashboard",
    description: "Personal finance tracker with budgeting tools, expense categorization, and beautiful data visualizations.",
    tech: ["React", "D3.js", "Firebase", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building great products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`card-glass rounded-2xl p-6 hover-lift group ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              {/* Project preview placeholder */}
              <div className="aspect-video rounded-xl bg-secondary mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Project Preview</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-secondary rounded-md text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
