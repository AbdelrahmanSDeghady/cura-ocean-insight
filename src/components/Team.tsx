import { Linkedin, Mail, Globe } from "lucide-react";
import abdelrahmanPhoto from "@/assets/abdelrahman-shaker.png";
import mohamedPhoto from "@/assets/mohamed-gad.png";
import icuraLogo from "@/assets/icura-logo.png";

const Team = () => {
  const teamMembers = [
    {
      name: "Abdelrahman Shaker",
      title: "Research & Development Manager",
      description: "Research & Development Manager with expertise in clinical trials operations and health informatics. Certified in Health Informatics (Johns Hopkins) and Generative AI Strategic Leadership (Vanderbilt). Skilled in strategic planning, clinical research coordination, and data-driven healthcare innovation.",
      image: abdelrahmanPhoto,
      email: "bbnhd3333@gmail.com",
      website: "https://aboda.abdelrahmansdeghady.fanclub.rocks/",
    },
    {
      name: "Mohamed Gad",
      title: "AI Engineer",
      description: "AI engineer specializing in medical data pipelines and machine learning, ensuring reliable AI-driven suggestions for clinical decision support systems.",
      image: mohamedPhoto,
      linkedin: "https://www.linkedin.com/in/mohamed-gad-970a74280",
      email: "mohamed.ahmed04965@gmail.com",
    },
  ];

  return (
    <section id="team" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background Logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
        <img src={icuraLogo} alt="" className="w-[500px] h-auto" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Our People
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate healthcare innovators dedicated to transforming clinical decision-making 
            through advanced AI technology
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="medical-card group text-center"
            >
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary/15 group-hover:border-primary/30 transition-all duration-300 shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent group-hover:from-primary/20 transition-all duration-300" />
                </div>
              </div>

              {/* Member Info */}
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-primary font-semibold mb-4 text-sm tracking-wide uppercase">
                {member.title}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                {member.description}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <a
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 bg-primary/8 rounded-full flex items-center justify-center hover:bg-primary/15 transition-colors group/link"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-5 w-5 text-primary group-hover/link:scale-110 transition-transform" />
                </a>
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/8 rounded-full flex items-center justify-center hover:bg-primary/15 transition-colors group/link"
                    aria-label={`${member.name}'s website`}
                  >
                    <Globe className="h-5 w-5 text-primary group-hover/link:scale-110 transition-transform" />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/8 rounded-full flex items-center justify-center hover:bg-primary/15 transition-colors group/link"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5 text-primary group-hover/link:scale-110 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
