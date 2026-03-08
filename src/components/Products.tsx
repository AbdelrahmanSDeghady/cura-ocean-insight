import { 
  Heart, 
  Smartphone, 
  Brain, 
  Search, 
  BarChart3, 
  ExternalLink 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
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
        "Clinical decision support engine analyzing the full health record to identify risk factors, contraindications, and drug interactions for informed decisions.",
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

  return (
    <section id="products" className="py-24 bg-accent-light relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The DIME Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A connected healthcare ecosystem that turns everyday care into continuity, 
            clinical intelligence, and system-wide learning
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className={`medical-card group relative ${
                index >= 3 ? "lg:col-span-1 lg:last:col-start-2" : ""
              }`}
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-t-xl opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary-dark/10 flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-primary-dark/20 transition-all duration-300">
                <product.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                {product.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-primary/8 text-primary border border-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="https://dime-eg.com/" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl" className="group">
              Explore DIME Platform
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
