import { motion } from "framer-motion";
import {
  Stethoscope,
  Shield,
  BarChart3,
  Clock,
  Database,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Evidence-Based Suggestions",
    description: "AI-powered recommendations based on latest medical research and clinical guidelines.",
  },
  {
    icon: Shield,
    title: "Secure Data Handling",
    description: "Enterprise-grade security with HIPAA compliance for patient data protection.",
  },
  {
    icon: BarChart3,
    title: "Real-Time AI Insights",
    description: "Instant analysis of patient data with dynamic visualization and trends.",
  },
  {
    icon: Clock,
    title: "Seamless Workflow",
    description: "Integrates smoothly with existing EMR systems and clinical workflows.",
  },
  {
    icon: Database,
    title: "Comprehensive Analysis",
    description: "Processes symptoms, lab results, and patient history for holistic insights.",
  },
  {
    icon: CheckCircle,
    title: "Clinical Validation",
    description: "All suggestions reviewed and validated by medical professionals.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Features = () => {
  return (
    <section id="features" className="py-28 lg:py-36 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            The Response
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight max-w-3xl">
            A different way to think about clinical intelligence.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Instead of treating each visit as an isolated event, Icura is built to create
            continuity — supporting care today and enabling learning tomorrow.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/12 transition-colors">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-serif text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
