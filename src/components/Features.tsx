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
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Shield,
    title: "Secure Data Handling",
    description: "Enterprise-grade security with HIPAA compliance for patient data protection.",
    color: "bg-accent-light text-primary",
  },
  {
    icon: BarChart3,
    title: "Real-Time AI Insights",
    description: "Instant analysis of patient data with dynamic visualization and trends.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Clock,
    title: "Seamless Workflow",
    description: "Integrates smoothly with existing EMR systems and clinical workflows.",
    color: "bg-accent-light text-primary",
  },
  {
    icon: Database,
    title: "Comprehensive Analysis",
    description: "Processes symptoms, lab results, and patient history for holistic insights.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: CheckCircle,
    title: "Clinical Validation",
    description: "All suggestions reviewed and validated by medical professionals.",
    color: "bg-accent-light text-primary",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-28 lg:py-36 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight max-w-3xl mx-auto">
            Built to support every clinical decision.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Six pillars of intelligent clinical support — from evidence to validation.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
            >
              {/* Large icon background */}
              <div className="absolute top-6 right-6 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
                <feature.icon className="h-24 w-24 text-primary" />
              </div>

              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-serif text-foreground mb-3">
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
