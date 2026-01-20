import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Palette, 
  Globe, 
  Smartphone, 
  Database, 
  Zap,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building responsive, high-performance web applications using modern technologies like React, TypeScript, and Tailwind CSS.",
    features: ["Custom Web Apps", "E-commerce Solutions", "API Integration"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive, visually appealing user interfaces that enhance user experience and drive engagement.",
    features: ["User Research", "Wireframing", "Prototyping"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Full-Stack Solutions",
    description: "End-to-end development from database design to frontend implementation, delivering complete web solutions.",
    features: ["Database Design", "Backend APIs", "Frontend Development"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Ensuring websites look and function perfectly across all devices, from mobile phones to large desktop screens.",
    features: ["Mobile-First", "Cross-Browser", "Adaptive Layouts"],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Designing and implementing efficient database solutions for optimal data storage, retrieval, and security.",
    features: ["SQL/NoSQL", "Data Modeling", "Query Optimization"],
    gradient: "from-rose-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Improving website speed and performance through code optimization, caching strategies, and best practices.",
    features: ["Code Optimization", "Lazy Loading", "SEO Enhancement"],
    gradient: "from-indigo-500 to-violet-500",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase">What I Offer</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I provide comprehensive web development services to help bring your ideas to life with modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card p-6 hover-lift"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight size={14} className="text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Have a project in mind? Let's work together to create something amazing.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Get in Touch
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
