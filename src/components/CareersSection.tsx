import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CareersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="careers" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
              Careers
            </p>
            <h2 className="text-foreground mb-6">
              Join Our Team
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We are always looking for exceptional individuals who share our passion 
              for investing and commitment to excellence. At Bocanegra, you'll work 
              alongside experienced professionals in a collaborative environment that 
              values intellectual curiosity and rigorous analysis.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              We offer competitive compensation, meaningful responsibility from day one, 
              and the opportunity to contribute to a growing firm with a strong culture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-primary/90 transition-all duration-300"
            >
              Get in Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground">
              Bocanegra Asset Management is an equal opportunity employer. We celebrate 
              diversity and are committed to creating an inclusive environment for all employees.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
