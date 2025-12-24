const pillars = [
  {
    number: "01",
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
    number: "02",
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
    number: "03",
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
  return (
    <section id="approach" className="section-padding border-t border-border/30">
      <div className="section-container">
        <div className="max-w-4xl">
          <div className="mb-20">
            <span className="text-xs tracking-widest text-muted-foreground uppercase mb-8 block">
              Approach
            </span>
            <h2 className="text-foreground mb-8">
              Our Investment Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              A structured, repeatable process that combines rigorous analysis 
              with experienced judgment.
            </p>
          </div>

          <div className="space-y-0">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="py-12 border-t border-border/30 first:border-t-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-1">
                    <span className="text-xs text-muted-foreground tracking-widest">
                      {pillar.number}
                    </span>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <h3 className="text-foreground font-serif">{pillar.title}</h3>
                  </div>

                  <div className="lg:col-span-8">
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {pillar.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pillar.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="text-sm text-secondary-foreground"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
