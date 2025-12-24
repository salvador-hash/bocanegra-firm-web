import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
              About Us
            </p>
            <h2 className="text-foreground mb-8">
              A Foundation Built on Conviction
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-secondary-foreground leading-relaxed">
              Bocanegra Asset Management was founded with a singular vision: to deliver 
              exceptional risk-adjusted returns through deep fundamental research and 
              disciplined investment processes. We believe that thorough analysis, 
              patience, and conviction are the cornerstones of successful investing.
            </p>

            <p className="text-lg text-secondary-foreground leading-relaxed">
              Our approach is rooted in understanding businesses at their core—their 
              competitive advantages, management quality, and long-term value creation 
              potential. We seek to identify opportunities where the market price 
              diverges significantly from intrinsic value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Fundamental Focus",
                description:
                  "Deep, proprietary research drives every investment decision we make.",
              },
              {
                title: "Long-Term Orientation",
                description:
                  "We invest with patience, allowing our convictions to compound over time.",
              },
              {
                title: "Risk Discipline",
                description:
                  "Rigorous risk management is embedded in our investment process.",
              },
            ].map((item, index) => (
              <div key={index} className="card-institutional">
                <h3 className="text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
