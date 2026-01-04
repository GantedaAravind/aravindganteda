import { Briefcase, GraduationCap, MapPin, Calendar, TrendingUp, School, BookOpen, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Gridlex",
    companyDesc: "Enterprise software company building unified CRM, ERP & ITSM solutions",
    period: "Aug 2025 - Present",
    location: "Remote",
    tech: ["React", "Django", "PostgreSQL"],
    achievements: [
      { text: "Engineered dynamic card view system with 4+ configurable properties supporting recursive group hierarchies", metric: null },
      { text: "Optimized email notification system with role-based filtering, eliminating notifications to inactive users", metric: "100%" },
      { text: "Resolved critical UI bugs in state management, reducing selection errors significantly", metric: "40%" },
      { text: "Implemented pagination architecture expanding campaign accessibility and improving performance", metric: "60%" },
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
    gradient: "from-primary to-accent",
    coursework: ["Data Structures", "Web Dev", "OOP", "Machine Learning", "Databases"],
    current: true,
  },
  {
    title: "Pre-University Course",
    institution: "RGUKT Nuzvid",
    period: "2020 - 2022",
    grade: "9.93",
    gradeLabel: "CGPA",
    icon: BookOpen,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "SSC Board Examination",
    institution: "Z.P.H. School, Garugubilli",
    period: "2019 - 2020",
    grade: "99%",
    gradeLabel: "594/600",
    icon: School,
    gradient: "from-green-500 to-emerald-500",
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden" ref={ref} aria-labelledby="experience-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="floating-orb floating-orb-1 opacity-30" />
        <div className="floating-orb floating-orb-2 opacity-30" />
      </div>

      <div className="container max-w-6xl relative">
        <header className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-4">
            Background
          </p>
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-display font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </header>

        {/* Work Experience */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl text-white" style={{ background: 'var(--gradient-primary)' }} aria-hidden="true">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-display font-semibold">Work Experience</h3>
          </div>

          {/* Timeline */}
          <ol className="relative" aria-label="Work experience timeline">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block" style={{ background: 'var(--gradient-primary)' }} aria-hidden="true" />

            {experiences.map((exp, index) => (
              <li key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute left-4 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:flex items-center justify-center z-10" aria-hidden="true">
                  <span className="w-2 h-2 rounded-full bg-background animate-pulse" />
                </div>

                <article className="md:ml-16">
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'var(--gradient-primary)', filter: 'blur(20px)', opacity: '0.15' }} aria-hidden="true" />
                  
                  <div className="relative card-glass rounded-2xl p-6 md:p-8 hover:border-primary/40 instant-hover">
                    {/* Header */}
                    <header className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-2xl font-display font-bold">{exp.title}</h4>
                          <span className="px-3 py-1 text-xs bg-green-500/10 text-green-500 rounded-full font-medium flex items-center gap-1.5" role="status">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
                            Current
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Building2 className="w-4 h-4 text-primary" aria-hidden="true" />
                          <p className="text-xl text-gradient font-semibold">{exp.company}</p>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2 max-w-lg">
                          {exp.companyDesc}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" aria-hidden="true" />
                            <time>{exp.period}</time>
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" aria-hidden="true" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                        {exp.tech.map((tech) => (
                          <li
                            key={tech}
                            className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full font-medium border border-primary/20"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </header>

                    {/* Achievements Grid */}
                    <ul className="grid sm:grid-cols-2 gap-4" aria-label="Key achievements">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary/80 instant-hover group/item transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                          style={{ transitionDelay: `${300 + i * 100}ms` }}
                        >
                          <div className="p-1.5 rounded-lg bg-primary/10 text-primary mt-0.5" aria-hidden="true">
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
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>

        {/* Education */}
        <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white" aria-hidden="true">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-display font-semibold">Education</h3>
          </div>

          {/* Timeline */}
          <ol className="relative" aria-label="Education timeline">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block" style={{ background: 'var(--gradient-primary)' }} aria-hidden="true" />
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <li
                  key={index}
                  className={`group relative flex gap-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${500 + index * 150}ms` }}
                >
                  {/* Timeline Icon */}
                  <div className="hidden md:flex flex-col items-center" aria-hidden="true">
                    <div className={`relative z-10 p-3 rounded-xl bg-gradient-to-br ${edu.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <edu.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <article className="flex-1 card-glass rounded-xl p-5 hover:border-primary/40 instant-hover group-hover:translate-x-1 transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        {/* Mobile Icon */}
                        <div className={`md:hidden p-2.5 rounded-lg bg-gradient-to-br ${edu.gradient} text-white inline-flex mb-3`} aria-hidden="true">
                          <edu.icon className="w-4 h-4" />
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                          <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                          <time>{edu.period}</time>
                          {edu.current && (
                            <span className="px-2 py-0.5 text-xs bg-green-500/10 text-green-500 rounded font-medium">
                              Expected
                            </span>
                          )}
                        </div>
                        <h4 className="text-lg font-display font-semibold group-hover:text-gradient transition-colors">
                          {edu.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">{edu.institution}</p>

                        {edu.coursework && (
                          <ul className="flex flex-wrap gap-1.5 mt-3" aria-label="Coursework">
                            {edu.coursework.map((course) => (
                              <li
                                key={course}
                                className="px-2 py-0.5 text-xs bg-secondary/80 text-muted-foreground rounded hover:bg-primary/10 hover:text-primary instant-hover cursor-default"
                              >
                                {course}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Grade Badge */}
                      <div className="text-center shrink-0" aria-label={`Grade: ${edu.grade} ${edu.gradeLabel}`}>
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${edu.gradient} p-[2px] shadow-lg`}>
                          <div className="w-full h-full rounded-[10px] bg-background flex flex-col items-center justify-center">
                            <span className="text-lg font-display font-bold text-gradient">{edu.grade}</span>
                            <span className="text-[9px] text-muted-foreground">{edu.gradeLabel}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </div>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;