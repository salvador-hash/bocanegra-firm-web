import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Carlos Bocanegra",
    role: "Founder & Chief Investment Officer",
    bio: "Over 20 years of investment experience across global equity markets. Previously led investment teams at major institutional investors.",
  },
  {
    id: "2",
    name: "María del Valle",
    role: "Partner & Portfolio Manager",
    bio: "Extensive experience in fundamental research and portfolio management. Specializes in technology and healthcare sectors.",
  },
  {
    id: "3",
    name: "Andrés Mendoza",
    role: "Partner & Head of Research",
    bio: "Deep expertise in quantitative and fundamental analysis. Previously analyst at leading investment banks.",
  },
  {
    id: "4",
    name: "Laura Espinoza",
    role: "Chief Operating Officer",
    bio: "Proven track record in operational excellence and risk management across financial services.",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-padding border-t border-border/30">
      <div className="section-container">
        <div ref={ref} className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <span className="text-xs tracking-widest text-muted-foreground uppercase mb-8 block">
              Team
            </span>
            <h2 className="text-foreground mb-8">
              Leadership
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              An experienced team united by a shared commitment to excellence 
              and delivering results for our investors.
            </p>
          </motion.div>

          <div className="space-y-0">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                className="py-10 border-t border-border/30 first:border-t-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4">
                    <h3 className="text-foreground text-lg font-serif mb-1">{member.name}</h3>
                    <p className="text-muted-foreground text-sm">{member.role}</p>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-secondary-foreground text-sm leading-relaxed">
                      {member.bio}
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

export default TeamSection;
