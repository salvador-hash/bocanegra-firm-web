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
    <section id="team" className="section-padding bg-background">
      <div className="section-container">
        <div ref={ref} className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
              Our Team
            </p>
            <h2 className="text-foreground mb-6">
              Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              An experienced team united by a shared commitment to excellence 
              and delivering results for our investors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="card-institutional group"
              >
                <div className="flex items-start gap-6">
                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 rounded-sm bg-secondary flex-shrink-0 flex items-center justify-center">
                    <span className="text-xl font-semibold text-muted-foreground">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-foreground text-lg mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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
