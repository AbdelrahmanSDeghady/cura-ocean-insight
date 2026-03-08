import { motion } from "framer-motion";

const problems = [
  {
    label: "Meaning",
    title: "Fragmented Clinical Data",
    description:
      "Clinical information is captured across clinics, hospitals, and systems — with no reliable way to follow the patient over time. Each encounter stands alone.",
  },
  {
    label: "Insight",
    title: "Lost Clinical Context",
    description:
      "Even when records are digitized, they rarely grow into understanding. History remains scattered instead of cumulative, and insight fades between encounters.",
  },
  {
    label: "Impact",
    title: "Decisions Without Intelligence",
    description:
      "When clinical data isn't structured and continuous, healthcare systems struggle to retain knowledge. Improvement depends on individual effort rather than shared learning.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-28 lg:py-36 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              The Problem
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight max-w-3xl">
              Healthcare data is broken. Icura is how it starts to heal.
            </h2>
          </motion.div>

          {/* Problem cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {problems.map((problem, i) => (
              <motion.div
                key={problem.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="group"
              >
                <span className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-3 block">
                  {problem.label}
                </span>
                <h3 className="text-xl font-serif text-foreground mb-4 leading-snug">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
