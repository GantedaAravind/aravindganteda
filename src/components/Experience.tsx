import { Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Gridlex",
    period: "Aug 2025 - Present",
    tech: ["React", "Django", "PostgreSQL"],
    achievements: [
      "Engineered dynamic card view system with 4+ configurable properties supporting recursive group hierarchies and real-time UI updates",
      "Optimized email notification system with role-based filtering, eliminating 100% of notifications to inactive users",
      "Resolved critical UI bugs in state management, reducing selection errors by 40%",
      "Implemented pagination architecture, expanding accessibility from 5 to unlimited campaigns and improving load performance by 60%",
    ],
  },
];

const education = [
  {
    title: "B.Tech in Computer Science",
    institution: "RGUKT Nuzvid",
    period: "2022 - 2026",
    grade: "9.4 CGPA",
    coursework: ["Data Structures & Algorithms", "Web Development", "OOP", "Machine Learning", "Databases"],
  },
  {
    title: "Pre-University Course",
    institution: "RGUKT Nuzvid",
    period: "2020 - 2022",
    grade: "9.93 CGPA",
  },
  {
    title: "SSC Board Examination",
    institution: "Z.P.H. School, Garugubilli",
    period: "2019 - 2020",
    grade: "594/600 (99%)",
  },
];

const certifications = [
  {
    title: "MERN Stack Development",
    issuer: "Udemy",
    date: "Aug 2023",
    description: "Full-stack development with MongoDB, Express.js, React.js, and Node.js",
  },
  {
    title: "400+ DSA Problems Solved",
    issuer: "LeetCode & GeeksforGeeks",
    description: "Arrays, Trees, Graphs, DP, Sliding Window techniques",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-4">
            Background
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Experience & Education
          </h2>
        </div>

        {/* Work Experience - Full Width */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold">Work Experience</h3>
          </div>

          {experiences.map((exp, index) => (
            <div key={index} className="card-glass rounded-xl p-6 hover-lift">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-xl font-display font-semibold">{exp.title}</h4>
                    <span className="px-2 py-0.5 text-xs bg-green-500/10 text-green-500 rounded-full">
                      Current
                    </span>
                  </div>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-muted-foreground text-sm">{exp.period}</span>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Achievements */}
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold">Education</h3>
            </div>

            <div className="relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-secondary border-2 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>

                    <div className="card-glass rounded-xl p-5 hover-lift">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className="text-primary text-sm font-medium">{edu.period}</span>
                        <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full font-semibold">
                          {edu.grade}
                        </span>
                      </div>
                      <h4 className="text-lg font-display font-semibold">{edu.title}</h4>
                      <p className="text-muted-foreground text-sm">{edu.institution}</p>

                      {edu.coursework && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-0.5 text-xs bg-secondary/80 text-muted-foreground rounded"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold">Certifications & Achievements</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="card-glass rounded-xl p-5 hover-lift">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display font-semibold">{cert.title}</h4>
                      <p className="text-primary text-sm">{cert.issuer}</p>
                    </div>
                    {cert.date && (
                      <span className="text-muted-foreground text-xs">{cert.date}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
