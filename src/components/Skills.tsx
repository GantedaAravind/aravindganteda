import { Code, Layout, Server, Database, TestTube, GitBranch, Brain, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "HTML", "CSS"],
  },
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["ReactJS", "React Router", "Redux Toolkit", "Tailwind CSS", "DaisyUI", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "Django", "RESTful APIs", "JWT Auth", "Postman"],
  },
  {
    title: "Database Management",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Testing & QA",
    icon: TestTube,
    skills: ["Jest", "Vitest", "Unit Testing", "Integration Testing"],
  },
  {
    title: "Tools & Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "Terminal"],
  },
];

const highlights = [
  { icon: Brain, label: "400+ DSA Problems", desc: "LeetCode & GeeksforGeeks" },
  { icon: Zap, label: "Performance Expert", desc: "40-60% load time reduction" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-4">
            Skills & Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Constantly learning and expanding my toolkit to deliver the best solutions.
          </p>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-5 py-3 card-glass rounded-xl border border-primary/20 bg-primary/5"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <div>
                <p className="font-semibold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="card-glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary/50 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-3">Currently Exploring</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js", "GraphQL", "AWS", "Docker", "System Design"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm border border-dashed border-primary/30 rounded-lg text-primary/80 hover:border-primary hover:text-primary transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
