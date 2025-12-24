import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding border-t border-border/10">
      <div className="section-container">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          {/* Left column - Large number and label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5 }}
            className="lg:col-span-4"
          >
            <span className="text-8xl md:text-9xl font-serif text-foreground/10">
              2024
            </span>
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mt-6">
              Founded
            </p>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="lg:col-span-8 lg:pt-8"
          >
            <h2 className="text-foreground mb-12">
              Conviction-Driven
              <br />
              Investment Management
            </h2>
            
            <div className="max-w-xl space-y-8">
              <p className="text-secondary-foreground text-lg leading-loose">
                Bocanegra Asset Management was founded with a singular vision: 
                to deliver exceptional risk-adjusted returns through deep 
                fundamental research and disciplined investment processes.
              </p>
              <p className="text-muted-foreground leading-loose">
                We believe that thorough analysis, patience, and conviction 
                are the cornerstones of successful investing. Our approach 
                is rooted in understanding businesses at their core.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
