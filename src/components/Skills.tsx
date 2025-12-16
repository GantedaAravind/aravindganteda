const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "PostgreSQL", level: 85 },
  { name: "AWS / Cloud", level: 75 },
];

const tools = [
  "Git", "Docker", "Figma", "VS Code", "Tailwind CSS", "GraphQL", 
  "Redis", "MongoDB", "Jest", "Cypress", "GitHub Actions", "Vercel"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-4">
            Skills & Tools
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm constantly learning and expanding my toolkit to deliver the best solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-6">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span 
                  key={tool}
                  className="px-4 py-2 card-glass rounded-lg text-sm font-medium hover:border-primary/50 transition-colors duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Soft Skills */}
            <h3 className="text-xl font-display font-semibold mt-10 mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {["Problem Solving", "Team Collaboration", "Communication", "Leadership"].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
