interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
} 

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Giacomo Bocanegra",
    role: "Partner & Portfolio Manager",
    bio: "Giacomo Bocanegra is the Founder and Portfolio Manager of Bocanegra Asset Management LP (“BAM”). Prior to founding BAM in 2023, Mr. Bocanegra held equity research roles at Lucerne Capital Management and Wells Fargo. He holds a bachelor’s degree in Economics from Lawrence University.",
  },
  {
    id: "2",
    name: "Gianluca Bocanegra",
    role: "Partner & Portfolio Manager",
    bio: "Gianluca Bocanegra is a Senior Analyst at Bocanegra Asset Management LP (“BAM”). Prior to joining the firm in 2024, Mr. Bocanegra worked as an investment analyst at Ingalls & Snyder and Nobska Capital Management. He holds a bachelor’s degree in Economics from Kenyon College.",
  },
  {
    id: "3",
    name: "Salvador Bocanegra",
    role: "Partner & Analyst",
    bio: "Salvador Bocanegra is a Junior Analyst at Bocanegra Asset Management LP (“BAM”). He joined the firm in 2025. Mr. Bocanegra supports the firm with research on industrials, materials, and energy. He attended Wharton Global Youth Program at the University of Pennsylvania.",
  },
  ,
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding border-t border-border/30">
      <div className="section-container">
        <div className="max-w-4xl">
          <div className="mb-20">
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
          </div>

          <div className="space-y-0">
            {teamMembers.map((member) => (
              <div
                key={member.id}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
