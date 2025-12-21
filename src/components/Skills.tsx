import { motion } from "framer-motion";
import { Brain, Zap, Filter } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

// Technology icons mapping
const techIcons: Record<string, string> = {
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "ReactJS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React Router": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
  "Redux Toolkit": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Jest": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  "Vitest": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
};

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "HTML", "CSS"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Frontend",
    skills: ["ReactJS", "React Router", "Redux Toolkit", "Tailwind CSS", "Bootstrap"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Django"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Testing",
    skills: ["Jest", "Vitest"],
    color: "from-red-500 to-rose-500",
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "AWS", "Linux", "VS Code"],
    color: "from-indigo-500 to-purple-500",
  },
];

const highlights = [
  { icon: Brain, label: "400+ DSA Problems", desc: "LeetCode & GeeksforGeeks" },
  { icon: Zap, label: "Performance Expert", desc: "40-60% load time reduction" },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredCategories = activeFilter
    ? skillCategories.filter(cat => cat.title === activeFilter)
    : skillCategories;

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-4">
            Skills & Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Constantly learning and expanding my toolkit to deliver the best solutions.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-5 py-3 card-glass rounded-xl border border-primary/20 bg-primary/5 hover:border-primary/40 transition-colors"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <div>
                <p className="font-semibold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          <button
            onClick={() => setActiveFilter(null)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === null
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveFilter(cat.title)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat.title
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * catIndex }}
              className="group"
            >
              <div className="card-glass rounded-xl p-6 h-full hover:border-primary/50 transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color}`} />
                  <h3 className="font-display font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2.5 px-3 py-2.5 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-colors group/skill cursor-default"
                    >
                      {techIcons[skill] ? (
                        <img
                          src={techIcons[skill]}
                          alt={skill}
                          className="w-5 h-5 object-contain"
                        />
                      ) : (
                        <div className="w-5 h-5 rounded bg-primary/20" />
                      )}
                      <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors truncate">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-3">Currently Exploring</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Next.js", icon: techIcons["Next.js"] },
              { name: "GraphQL", icon: techIcons["GraphQL"] },
              { name: "Kubernetes", icon: techIcons["Kubernetes"] },
              { name: "Microservices", icon: null },
              { name: "System Design", icon: null },
            ].map((tech) => (
              <motion.span
                key={tech.name}
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                className="flex items-center gap-2 px-4 py-2 text-sm border border-dashed border-primary/30 rounded-lg text-primary/80 hover:text-primary transition-colors cursor-default"
              >
                {tech.icon && (
                  <img src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain" />
                )}
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
