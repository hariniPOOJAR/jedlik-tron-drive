import { Sparkles } from "lucide-react";

const team = [
  {
    name: "Raguram SK",
    role: "Founder & CEO",
    initials: "RS",
    photo: "/Raguram.jpg",
    gradient: "from-primary to-accent",
    description: "Visionary leader driving the future of urban mobility.",
  },
  {
    name: "Muthuram",
    role: "Co-Founder & CTO",
    initials: "MU",
    photo: "/Muthuram.jpg",
    gradient: "from-accent to-tron-glow",
    description: "Technology architect building next-gen EV systems.",
  },
  {
    name: "Nishanth Raj",
    role: "Co-Founder & COO",
    initials: "NR",
    photo: "/Nishanth.jpg",
    gradient: "from-tron-glow to-primary",
    description: "Operations expert scaling Jedlik's growth journey.",
  },
  {
    name: "Vishnu",
    role: "R&D Operations",
    initials: "VI",
    photo: "/Vishnu.jpg",
    gradient: "from-primary to-tron-glow",
    description: "Driving research operations for breakthrough innovations.",
  },
  {
    name: "Mano",
    role: "R&D Design",
    initials: "MA",
    photo: "/Mano.jpg",
    gradient: "from-accent to-primary",
    description: "Crafting the aesthetic and functional design of e-POD.",
  },
  {
    name: "Mohan",
    role: "R&D Manufacturing",
    initials: "MO",
    photo: "/Mohan.jpg",
    gradient: "from-tron-glow to-accent",
    description: "Overseeing precision manufacturing processes.",
  },
  {
    name: "Akash",
    role: "Embedded Systems Architect",
    initials: "AK",
    photo: "/Akash.jpg",
    gradient: "from-primary to-accent",
    description: "Building the intelligent embedded systems powering e-POD.",
  },
  {
    name: "Prathiba",
    role: "Embedded Systems Architect",
    initials: "PR",
    photo: "/Prathiba.jpg",
    gradient: "from-accent to-tron-glow",
    description: "Designing robust firmware and embedded solutions.",
  },
  {
    name: "Shri Harini",
    role: "Chief of Staff",
    initials: "SH",
    photo: "/Harini.jpg",
    gradient: "from-tron-glow to-primary",
    description: "Orchestrating strategy and cross-team coordination.",
  },
];

const OurTeamPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animation: "grid-flow 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-tron-grid/30 via-accent/5 to-transparent"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 border border-accent/30 mb-8 hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/20">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-semibold text-accent">The People Behind the Mission</span>
            <Sparkles className="w-4 h-4 text-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r from-primary via-accent to-tron-glow bg-clip-text text-transparent drop-shadow-2xl">
              Our Team
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto font-light leading-relaxed">
            A passionate team of <span className="text-primary font-semibold">innovators</span> and{" "}
            <span className="text-accent font-semibold">engineers</span> redefining urban mobility.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-tron-glow rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>

                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-background/90 to-background/50 border-2 border-primary/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 text-center">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/40 rounded-tl-3xl"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/40 rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/40 rounded-bl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/40 rounded-br-3xl"></div>

                  {/* Avatar — photo or initials */}
                  <div className="relative mx-auto mb-6 w-28 h-28">
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full blur-xl opacity-50 animate-pulse`}></div>
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="relative w-28 h-28 rounded-full object-cover border-2 border-primary/30 group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center border-2 border-primary/30 group-hover:scale-110 transition-transform duration-500`}>
                        <span className="text-3xl font-bold text-white">{member.initials}</span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 relative text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-tron-glow bg-clip-text text-transparent">
            Together, We Redefine the Class.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jedlik Motors is built by dreamers, engineers, and leaders who believe the future of mobility starts today.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurTeamPage;
