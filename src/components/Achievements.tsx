import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Trophy, Users, Code, Rocket, Target, Zap } from "lucide-react";

const achievements = [
  {
    icon: Code,
    value: "5,000+",
    label: "Lines of Code",
    description: "Written across various projects",
  },
  {
    icon: Rocket,
    value: "3",
    label: "Live Projects",
    description: "Successfully deployed applications",
  },
  {
    icon: Users,
    value: "100+",
    label: "Happy Users",
    description: "Using my applications daily",
  },
  {
    icon: Trophy,
    value: "10+",
    label: "Technologies",
    description: "Mastered and actively using",
  },
  {
    icon: Target,
    value: "95%",
    label: "Client Satisfaction",
    description: "Based on project feedback",
  },
  {
    icon: Zap,
    value: "Fast",
    label: "Delivery Time",
    description: "Efficient project completion",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 via-primary/10 to-violet-500/5" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 glass-card hover-lift"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {achievement.value}
                </div>
                <div className="font-medium text-sm mb-1">{achievement.label}</div>
                <div className="text-muted-foreground text-xs">
                  {achievement.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
