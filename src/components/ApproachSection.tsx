import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Shield, Layers } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Research",
    description:
      "Our investment process begins with comprehensive fundamental analysis. We conduct deep-dive research into industries, competitive dynamics, and individual companies to develop differentiated insights.",
    points: [
      "Proprietary fundamental research",
      "Direct engagement with management",
      "Industry expert network",
      "Rigorous financial modeling",
    ],
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "We view risk management not as a constraint, but as a source of competitive advantage. Our disciplined approach helps protect capital while maintaining exposure to attractive opportunities.",
    points: [
      "Position sizing discipline",
      "Portfolio diversification",
      "Continuous monitoring",
      "Stress testing & scenario analysis",
    ],
  },
  {
    icon: Layers,
    title: "Portfolio Construction",
    description:
      "We construct portfolios with conviction, concentrating capital in our highest-quality ideas while maintaining appropriate diversification to manage risk.",
    points: [
      "Concentrated, high-conviction positions",
      "Risk-adjusted position weighting",
      "Dynamic portfolio optimization",
      "Correlation awareness",
    ],
  },
];

const ApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approach" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div ref={ref} className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
              Investment Approach
            </p>
            <h2 className="text-foreground mb-6">
              Our Investment Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured, repeatable process that combines rigorous analysis 
              with experienced judgment.
            </p>
          </motion.div>

          <div className="space-y-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="card-institutional"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center">
                      <pillar.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-foreground mb-4">{pillar.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {pillar.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pillar.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-center gap-3 text-sm text-secondary-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
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
