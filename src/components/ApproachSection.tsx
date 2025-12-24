import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    number: "01",
    title: "Research",
    description:
      "Comprehensive fundamental analysis through deep-dive research into industries, competitive dynamics, and individual companies.",
  },
  {
    number: "02",
    title: "Risk",
    description:
      "Disciplined risk management as a source of competitive advantage, protecting capital while maintaining exposure to opportunities.",
  },
  {
    number: "03",
    title: "Portfolio",
    description:
      "Concentrated portfolios with conviction, focusing capital in highest-quality ideas while maintaining appropriate diversification.",
  },
];

const ApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approach" className="section-padding border-t border-border/10">
      <div className="section-container">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5 }}
            className="mb-24 lg:mb-32"
          >
            <h2 className="text-foreground max-w-3xl">
              Investment Process
            </h2>
          </motion.div>

          <div className="space-y-0">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.3 + index * 0.2 }}
                className="py-16 lg:py-20 border-t border-border/10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  <div className="lg:col-span-2">
                    <span className="text-5xl md:text-6xl font-serif text-foreground/15">
                      {pillar.number}
                    </span>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <h3 className="text-foreground font-serif text-3xl">{pillar.title}</h3>
                  </div>

                  <div className="lg:col-span-7">
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
