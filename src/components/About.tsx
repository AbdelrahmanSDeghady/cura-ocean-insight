import { motion } from "framer-motion";
import aboutFragmented from "@/assets/about-fragmented.png";
import aboutConnected from "@/assets/about-connected.png";

const About = () => {
  return (
    <section id="about" className="py-28 lg:py-36 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              The Problem
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight max-w-3xl mx-auto">
              Healthcare data is broken. Icura is how it starts to heal.
            </h2>
          </motion.div>

          {/* Problem — with illustration */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={aboutFragmented}
                alt="Fragmented healthcare data illustration"
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {[
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
              ].map((problem, i) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <span className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-2 block">
                    {problem.label}
                  </span>
                  <h3 className="text-xl font-serif text-foreground mb-2 leading-snug">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Solution — reversed layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
                The Response
              </p>
              <h3 className="text-2xl md:text-3xl font-serif text-foreground leading-tight mb-6">
                A different way to think about clinical intelligence.
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                Instead of treating each visit as an isolated event, Icura is built to create
                continuity — supporting care today and enabling learning tomorrow.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                What if clinical data was structured once — and then allowed to travel, accumulate, 
                and remain useful over time? This is how healthcare begins to remember.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <img
                src={aboutConnected}
                alt="Connected healthcare AI ecosystem"
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
