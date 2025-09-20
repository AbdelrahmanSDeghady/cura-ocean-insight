import { Linkedin, Mail } from "lucide-react";
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
      linkedin: "#",
      email: "abdelrahman@icura.com",
    },
    {
      name: "Mohamed Gad",
      title: "AI Engineer",
      description: "AI engineer specializing in medical data pipelines and machine learning, ensuring reliable AI-driven suggestions for clinical decision support systems.",
      image: mohamedPhoto,
      linkedin: "#",
      email: "mohamed@icura.com",
    },
  ];

  return (
    <section id="team" className="py-20 bg-secondary/20 relative overflow-hidden">
      {/* Background Logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <img src={icuraLogo} alt="" className="w-96 h-auto" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate healthcare innovators dedicated to transforming clinical decision-making 
            through advanced AI technology
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="medical-card group text-center md:text-left"
            >
              {/* Profile Image */}
              <div className="flex justify-center md:justify-start mb-6">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-accent/20 group-hover:border-accent/40 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent group-hover:from-accent/30 transition-all duration-300" />
                </div>
              </div>

              {/* Member Info */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-accent font-semibold mb-4">
                  {member.title}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start space-x-4">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors group/link"
                  >
                    <Linkedin className="h-5 w-5 text-accent group-hover/link:scale-110 transition-transform" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors group/link"
                  >
                    <Mail className="h-5 w-5 text-accent group-hover/link:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;