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
    <section id="careers" className="section-padding border-t border-border/10">
      <div className="section-container">
        <div ref={ref} className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            <h2 className="text-foreground mb-12">
              Careers
            </h2>
            
            <p className="text-secondary-foreground text-lg leading-loose mb-8">
              We are always looking for exceptional individuals who share our 
              passion for investing and commitment to excellence.
            </p>

            <p className="text-muted-foreground leading-loose mb-12">
              At Bocanegra, you'll work alongside experienced professionals 
              in a collaborative environment that values intellectual curiosity 
              and rigorous analysis.
            </p>

            <button onClick={scrollToContact} className="btn-primary">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
