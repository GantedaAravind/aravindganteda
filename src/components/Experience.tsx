import { Briefcase, GraduationCap, Award, MapPin, Calendar, TrendingUp, School, BookOpen } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Gridlex",
    period: "Aug 2025 - Present",
    location: "Remote",
    tech: ["React", "Django", "PostgreSQL"],
    achievements: [
      { text: "Engineered dynamic card view system with 4+ configurable properties supporting recursive group hierarchies", metric: null },
      { text: "Optimized email notification system with role-based filtering", metric: "100%" },
      { text: "Resolved critical UI bugs in state management, reducing selection errors", metric: "40%" },
      { text: "Implemented pagination architecture, improving page load performance", metric: "60%" },
    ],
  },
];

const education = [
  {
    title: "B.Tech in Computer Science",
    institution: "RGUKT Nuzvid",
    period: "2022 - 2026",
    grade: "9.4",
    gradeLabel: "CGPA",
    icon: GraduationCap,
    iconBg: "from-primary to-primary/70",
    coursework: ["DSA", "Web Dev", "OOP", "ML", "Databases"],
  },
  {
    title: "Pre-University Course",
    institution: "RGUKT Nuzvid",
    period: "2020 - 2022",
    grade: "9.93",
    gradeLabel: "CGPA",
    icon: BookOpen,
    iconBg: "from-blue-500 to-cyan-500",
  },
  {
    title: "SSC Board Examination",
    institution: "Z.P.H. School, Garugubilli",
    period: "2019 - 2020",
    grade: "99%",
    gradeLabel: "594/600",
    icon: School,
    iconBg: "from-green-500 to-emerald-500",
  },
];

const certifications = [
  {
    title: "MERN Stack Development",
    issuer: "Udemy",
    date: "Aug 2023",
    icon: "🎓",
  },
  {
    title: "400+ DSA Problems",
    issuer: "LeetCode & GFG",
    icon: "🏆",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl relative">
        <div className="text-center mb-16">
          <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-4">
            Background
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Experience & Education
          </h2>
        </div>

        {/* Work Experience - Featured Card */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-display font-semibold">Work Experience</h3>
          </div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative card-glass rounded-2xl p-6 md:p-8 border-primary/20">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-2xl font-display font-bold">{exp.title}</h4>
                      <span className="px-3 py-1 text-xs bg-green-500/10 text-green-500 rounded-full font-medium animate-pulse">
                        Current
                      </span>
                    </div>
                    <p className="text-xl text-primary font-semibold">{exp.company}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary/80 transition-colors group/item"
                    >
                      <div className="p-1.5 rounded-lg bg-primary/10 text-primary mt-0.5">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground/90 leading-relaxed">
                          {achievement.text}
                        </p>
                        {achievement.metric && (
                          <span className="inline-block mt-2 px-2 py-0.5 text-xs font-bold bg-primary/20 text-primary rounded">
                            {achievement.metric} improvement
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Education - 3 columns */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-semibold">Education</h3>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-500 to-green-500 hidden md:block" />
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="group relative flex gap-6"
                  >
                    {/* Timeline Icon */}
                    <div className="hidden md:flex flex-col items-center">
                      <div className={`relative z-10 p-3 rounded-xl bg-gradient-to-br ${edu.iconBg} text-white shadow-lg`}>
                        <edu.icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 card-glass rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group-hover:translate-x-1">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          {/* Mobile Icon */}
                          <div className={`md:hidden p-2.5 rounded-lg bg-gradient-to-br ${edu.iconBg} text-white inline-flex mb-3`}>
                            <edu.icon className="w-4 h-4" />
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {edu.period}
                          </div>
                          <h4 className="text-lg font-display font-semibold group-hover:text-primary transition-colors">
                            {edu.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">{edu.institution}</p>

                          {edu.coursework && (
                            <div className="flex flex-wrap gap-1.5 mt-3">
                              {edu.coursework.map((course) => (
                                <span
                                  key={course}
                                  className="px-2 py-0.5 text-xs bg-secondary/80 text-muted-foreground rounded hover:bg-primary/10 hover:text-primary transition-colors"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Grade Badge */}
                        <div className="text-center shrink-0">
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${edu.iconBg} p-[2px] shadow-lg`}>
                            <div className="w-full h-full rounded-[10px] bg-background flex flex-col items-center justify-center">
                              <span className="text-lg font-display font-bold text-foreground">{edu.grade}</span>
                              <span className="text-[9px] text-muted-foreground">{edu.gradeLabel}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications - 2 columns */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-semibold">Achievements</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="card-glass rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{cert.icon}</span>
                    <div>
                      <h4 className="font-display font-semibold group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      {cert.date && (
                        <span className="inline-block mt-2 text-xs text-primary/80">{cert.date}</span>
                      )}
                    </div>
                  </div>
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