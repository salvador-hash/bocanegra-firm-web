import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div ref={ref} className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <span className="text-xs tracking-widest text-muted-foreground uppercase mb-8 block">
              About
            </span>
            <h2 className="text-foreground">
              A Foundation Built on Conviction
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            <div className="space-y-6">
              <p className="text-secondary-foreground leading-loose">
                Bocanegra Asset Management was founded with a singular vision: to deliver 
                exceptional risk-adjusted returns through deep fundamental research and 
                disciplined investment processes.
              </p>
              <p className="text-secondary-foreground leading-loose">
                We believe that thorough analysis, patience, and conviction are the 
                cornerstones of successful investing.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-secondary-foreground leading-loose">
                Our approach is rooted in understanding businesses at their core—their 
                competitive advantages, management quality, and long-term value creation 
                potential.
              </p>
              <p className="text-secondary-foreground leading-loose">
                We seek to identify opportunities where the market price diverges 
                significantly from intrinsic value.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-24 pt-16 border-t border-border/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {[
                {
                  title: "Fundamental Focus",
                  description: "Deep, proprietary research drives every investment decision we make.",
                },
                {
                  title: "Long-Term Orientation",
                  description: "We invest with patience, allowing our convictions to compound over time.",
                },
                {
                  title: "Risk Discipline",
                  description: "Rigorous risk management is embedded in our investment process.",
                },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-foreground text-lg mb-4 font-serif">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
