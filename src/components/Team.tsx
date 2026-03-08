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
    <section id="team" className="py-16 sm:py-20 md:py-28 lg:py-36 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              Our People
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight max-w-3xl mx-auto">
              Meet the team behind Icura.
            </h2>
          </motion.div>

          {/* Team cards */}
          <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 text-center"
              >
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-32 h-32 rounded-full object-cover mx-auto border-3 border-border group-hover:border-primary/30 transition-colors duration-300"
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
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:scale-110 transition-all"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4 text-muted-foreground" />
                  </a>
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:scale-110 transition-all"
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
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:scale-110 transition-all"
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
