import { motion } from "framer-motion";
import { Award, Code, Trophy, Medal, ExternalLink, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const achievements = [
  {
    title: "500+ DSA Problems Solved",
    platform: "LeetCode & GeeksforGeeks",
    icon: Code,
    gradient: "from-orange-500 to-amber-500",
    stats: "Top 10%",
    link: "https://leetcode.com/u/GANTEDAARAVIND/",
    details: ["Arrays & Strings", "Trees & Graphs", "Dynamic Programming", "System Design"],
  },
  {
    title: "MERN Stack Certified Developer",
    platform: "Udemy - Aug 2023",
    icon: Medal,
    gradient: "from-blue-500 to-cyan-500",
    stats: "Certified",
    details: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Academic Excellence",
    platform: "RGUKT Nuzvid",
    icon: Trophy,
    gradient: "from-purple-500 to-pink-500",
    stats: "9.4 CGPA",
    details: ["Top Performer", "Consistent Growth", "Technical Leadership"],
  },
];

const Achievements = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container max-w-6xl relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Recognition & Certifications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Achievements & Milestones
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and consistent performance across platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative card-glass rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.gradient} text-white shadow-lg`}>
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <span className={`px-3 py-1 text-xs font-bold bg-gradient-to-r ${achievement.gradient} text-white rounded-full`}>
                    {achievement.stats}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-display font-bold mb-1 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{achievement.platform}</p>

                {/* Details */}
                <div className="space-y-2">
                  {achievement.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Link */}
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-sm text-primary hover:underline underline-offset-4 font-medium"
                  >
                    View Profile
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
