import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectBookstore from "@/assets/project-bookstore.jpg";
import projectGozamen from "@/assets/project-gozamen.jpg";
import projectMeskerem from "@/assets/project-meskerem.jpg";

const projects = [
  {
    title: "Cloud Bookstore",
    description:
      "A modern online bookstore platform with a clean UI, allowing users to browse, search, and purchase books with ease. Features a comprehensive catalog and seamless shopping experience.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://cloudbookstoreproject.lovable.app",
    githubUrl: "https://github.com/suraSGML/cloudbookstoreproject",
    image: projectBookstore,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Gozamen Hotel",
    description:
      "A professional hotel website showcasing rooms, amenities, and booking capabilities. Designed to provide visitors with an immersive preview of the hotel experience.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://gozamenhotelproject.lovable.app",
    githubUrl: "https://github.com/suraSGML/gozamenhotelproject",
    image: projectGozamen,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Meskerem Hotel",
    description:
      "An elegant hotel management website featuring room displays, service information, and reservation functionality. Built with modern design principles for optimal user engagement.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://meskeremhotelproject.lovable.app",
    githubUrl: "https://github.com/suraSGML/meskeremhotelproject",
    image: projectMeskerem,
    gradient: "from-orange-500 to-amber-500",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development and design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group glass-card overflow-hidden hover-lift"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    asChild
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-border hover:bg-secondary"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View source code">
                      <Github size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
