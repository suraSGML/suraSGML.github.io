import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { GraduationCap, Briefcase, Award, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "education",
    title: "Bachelor of Science in Software Engineering",
    organization: "Debre Markos University",
    location: "Debre Markos, Ethiopia",
    period: "2022 - Present",
    description: "Pursuing a comprehensive degree in Software Engineering, focusing on full-stack development, database management, and software architecture.",
    highlights: ["Dean's List", "Active in Tech Club", "Project Lead"],
  },
  {
    id: 2,
    type: "work",
    title: "Freelance Web Developer",
    organization: "Self-Employed",
    location: "Remote",
    period: "2024 - Present",
    description: "Developing custom web applications for local businesses, including hotel management systems and e-commerce platforms.",
    highlights: ["3+ Projects Delivered", "Client Satisfaction", "Full-Stack Development"],
  },
  {
    id: 3,
    type: "project",
    title: "Cloud Bookstore Project",
    organization: "Personal Project",
    location: "Lovable Platform",
    period: "2025",
    description: "Built a full-featured online bookstore with inventory management, user authentication, and payment integration.",
    highlights: ["React & TypeScript", "Responsive Design", "Modern UI/UX"],
  },
  {
    id: 4,
    type: "project",
    title: "Hotel Management Systems",
    organization: "Client Projects",
    location: "Gozamen & Meskerem Hotels",
    period: "2025",
    description: "Developed comprehensive hotel management solutions featuring room booking, guest management, and administrative dashboards.",
    highlights: ["Booking System", "Admin Dashboard", "Real-time Updates"],
  },
];

const certifications = [
  {
    name: "React Development",
    issuer: "Online Certification",
    year: "2024",
  },
  {
    name: "Full-Stack Web Development",
    issuer: "Self-Learning Path",
    year: "2024",
  },
  {
    name: "UI/UX Design Fundamentals",
    issuer: "Design Course",
    year: "2025",
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "education":
      return GraduationCap;
    case "work":
      return Briefcase;
    default:
      return Award;
  }
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">MY JOURNEY</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional experiences that have shaped my
            skills as a software developer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              {experiences.map((exp, index) => {
                const Icon = getIcon(exp.type);
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative pl-20 pb-12 last:pb-0"
                  >
                    {/* Icon circle */}
                    <div className="absolute left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                      <Icon size={16} className="text-primary-foreground" />
                    </div>

                    <div className="glass-card p-6 hover-lift">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full uppercase font-medium">
                          {exp.type}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium text-sm mb-2">
                        {exp.organization} • {exp.location}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="text-xs bg-secondary px-3 py-1 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certifications & Stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Award className="text-primary" size={24} />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="border-b border-border/50 pb-4 last:border-0 last:pb-0"
                  >
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-muted-foreground text-sm">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-semibold mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <div className="text-3xl font-bold gradient-text">3+</div>
                  <div className="text-muted-foreground text-sm">Projects</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <div className="text-3xl font-bold gradient-text">2+</div>
                  <div className="text-muted-foreground text-sm">Years</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-muted-foreground text-sm">Technologies</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-muted-foreground text-sm">Dedication</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-card p-6 bg-gradient-to-br from-primary/10 to-violet-500/10"
            >
              <h3 className="text-lg font-semibold mb-2">Open to Opportunities</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Currently seeking internship and freelance opportunities in web development.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Let's Connect →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
