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
    <section id="careers" className="section-padding border-t border-border/30">
      <div className="section-container">
        <div ref={ref} className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <span className="text-xs tracking-widest text-muted-foreground uppercase mb-8 block">
              Careers
            </span>
            <h2 className="text-foreground">
              Join Our Team
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6 mb-12"
          >
            <p className="text-secondary-foreground leading-loose">
              We are always looking for exceptional individuals who share our passion 
              for investing and commitment to excellence. At Bocanegra, you'll work 
              alongside experienced professionals in a collaborative environment that 
              values intellectual curiosity and rigorous analysis.
            </p>

            <p className="text-muted-foreground leading-loose">
              We offer competitive compensation, meaningful responsibility from day one, 
              and the opportunity to contribute to a growing firm with a strong culture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <button onClick={scrollToContact} className="btn-primary">
              Get in Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 pt-10 border-t border-border/30"
          >
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xl">
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
