import { motion } from "framer-motion";
import { Linkedin, Mail, Globe } from "lucide-react";
import abdelrahmanPhoto from "@/assets/abdelrahman-shaker.png";
import mohamedPhoto from "@/assets/mohamed-gad.png";

const teamMembers = [
  {
    name: "Abdelrahman Shaker",
    title: "Research & Development Manager",
    description:
      "Research & Development Manager with expertise in clinical trials operations and health informatics. Certified in Health Informatics (Johns Hopkins) and Generative AI Strategic Leadership (Vanderbilt).",
    image: abdelrahmanPhoto,
    email: "bbnhd3333@gmail.com",
    website: "https://aboda.abdelrahmansdeghady.fanclub.rocks/",
  },
  {
    name: "Mohamed Gad",
    title: "AI Engineer",
    description:
      "AI engineer specializing in medical data pipelines and machine learning, ensuring reliable AI-driven suggestions for clinical decision support systems.",
    image: mohamedPhoto,
    linkedin: "https://www.linkedin.com/in/mohamed-gad-970a74280",
    email: "mohamed.ahmed04965@gmail.com",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-28 lg:py-36 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              Our People
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight max-w-3xl">
              Meet the team behind Icura.
            </h2>
          </motion.div>

          {/* Team cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover mx-auto border-2 border-border group-hover:border-primary/30 transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-4 tracking-wide">
                  {member.title}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.description}
                </p>
                <div className="flex justify-center gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4 text-muted-foreground" />
                  </a>
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                      aria-label={`${member.name}'s website`}
                    >
                      <Globe className="h-4 w-4 text-muted-foreground" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4 text-muted-foreground" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
