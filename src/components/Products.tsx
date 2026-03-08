import { motion } from "framer-motion";
import {
  Heart,
  Smartphone,
  Brain,
  Search,
  BarChart3,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Heart,
    name: "Universal Health Profile",
    description:
      "A longitudinal, patient-owned record capturing all health events across time — visits, labs, imaging, prescriptions, procedures, and outcomes.",
    tags: ["Clinical History", "Care Coordination", "Cross-Provider"],
  },
  {
    icon: Smartphone,
    name: "MyHealth App",
    description:
      "Patient application connecting individuals to their health record — track symptoms, manage medications, report adverse effects, and access AI guidance.",
    tags: ["Patient App", "Symptom Diary", "AI Guidance"],
  },
  {
    icon: Brain,
    name: "ICura Agent",
    description:
      "Clinical decision support engine analyzing the full health record to identify risk factors, contraindications, and drug interactions.",
    tags: ["Decision Support", "Risk Analysis", "Prescribing Safety"],
  },
  {
    icon: Search,
    name: "Atlas Agent",
    description:
      "Research-focused AI detecting early patterns signaling future diseases by analyzing longitudinal changes across clinical events, labs, and symptoms.",
    tags: ["Predictive AI", "Early Detection", "Preventive Care"],
  },
  {
    icon: BarChart3,
    name: "Nexus",
    description:
      "Analytics and intelligence layer transforming real-world health data into insights for research, surveillance, pharmacovigilance, and policy.",
    tags: ["Real-World Evidence", "Pharmacovigilance", "Public Health"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Products = () => {
  return (
    <section id="products" className="py-28 lg:py-36 bg-card">
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
            Ecosystem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight max-w-3xl">
            The Icura Platform
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl leading-relaxed">
            A connected healthcare ecosystem that turns everyday care into continuity,
            clinical intelligence, and system-wide learning.
          </p>
        </motion.div>

        {/* Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className={`group p-7 rounded-2xl bg-background border border-border hover:border-primary/20 transition-all duration-300 ${
                i >= 3 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/12 transition-colors">
                <product.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-serif text-foreground mb-3">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-primary/5 text-primary/80 border border-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="https://dime-eg.com/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-primary-foreground hover:bg-primary-dark rounded-full px-8 py-6 text-base font-medium group">
              Explore DIME Platform
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
