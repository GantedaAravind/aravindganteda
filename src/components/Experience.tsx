import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior Full-Stack Developer",
    company: "Tech Startup Inc.",
    period: "2022 - Present",
    description: "Leading development of core platform features, mentoring junior developers, and implementing CI/CD pipelines.",
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    company: "Digital Agency Co.",
    period: "2020 - 2022",
    description: "Built custom web applications for clients across various industries. Led migration to microservices architecture.",
  },
  {
    type: "work",
    title: "Junior Developer",
    company: "Software Solutions Ltd.",
    period: "2019 - 2020",
    description: "Developed and maintained React applications. Collaborated with design team to implement pixel-perfect UIs.",
  },
];

const education = [
  {
    type: "education",
    title: "B.S. Computer Science",
    company: "University of Technology",
    period: "2015 - 2019",
    description: "Graduated with honors. Focus on software engineering and data structures.",
  },
  {
    type: "education",
    title: "Full-Stack Development Bootcamp",
    company: "Code Academy",
    period: "2019",
    description: "Intensive 12-week program covering modern web development technologies.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-4">
            Background
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Experience & Education
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold">Work Experience</h3>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-10">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-secondary border-2 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    
                    <div className="card-glass rounded-xl p-5 hover-lift">
                      <span className="text-primary text-sm font-medium">{exp.period}</span>
                      <h4 className="text-lg font-display font-semibold mt-1">{exp.title}</h4>
                      <p className="text-muted-foreground text-sm">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold">Education</h3>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-10">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-secondary border-2 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    
                    <div className="card-glass rounded-xl p-5 hover-lift">
                      <span className="text-primary text-sm font-medium">{edu.period}</span>
                      <h4 className="text-lg font-display font-semibold mt-1">{edu.title}</h4>
                      <p className="text-muted-foreground text-sm">{edu.company}</p>
                      <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
