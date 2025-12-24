import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TeamMember {
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Carlos Bocanegra",
    role: "Founder & Chief Investment Officer",
  },
  {
    name: "María del Valle",
    role: "Partner & Portfolio Manager",
  },
  {
    name: "Andrés Mendoza",
    role: "Partner & Head of Research",
  },
  {
    name: "Laura Espinoza",
    role: "Chief Operating Officer",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-padding border-t border-border/10">
      <div className="section-container">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5 }}
            className="lg:col-span-4"
          >
            <span className="text-8xl md:text-9xl font-serif text-foreground/10">
              4
            </span>
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mt-6">
              Partners
            </p>
          </motion.div>

          {/* Right column - Team list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="lg:col-span-8 lg:pt-8"
          >
            <h2 className="text-foreground mb-16 lg:mb-24">
              Leadership
            </h2>
            
            <div className="space-y-0">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                  className="py-8 border-t border-border/10"
                >
                  <h3 className="text-foreground text-xl md:text-2xl font-serif mb-2">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
