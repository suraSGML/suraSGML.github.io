import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
