import { 
  Stethoscope, 
  Shield, 
  BarChart3, 
  Clock, 
  Database, 
  CheckCircle 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Stethoscope,
      title: "Evidence-Based Suggestions",
      description: "AI-powered recommendations based on latest medical research and clinical guidelines",
    },
    {
      icon: Shield,
      title: "Secure Data Handling",
      description: "Enterprise-grade security with HIPAA compliance for patient data protection",
    },
    {
      icon: BarChart3,
      title: "Real-Time AI Insights",
      description: "Instant analysis of patient data with dynamic visualization and trends",
    },
    {
      icon: Clock,
      title: "Seamless Workflow",
      description: "Integrates smoothly with existing EMR systems and clinical workflows",
    },
    {
      icon: Database,
      title: "Comprehensive Analysis",
      description: "Processes symptoms, lab results, and patient history for holistic insights",
    },
    {
      icon: CheckCircle,
      title: "Clinical Validation",
      description: "All suggestions reviewed and validated by medical professionals",
    },
  ];

  return (
    <section id="features" className="py-24 bg-accent-light/50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Powerful Features for Modern Healthcare
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the next generation of clinical decision support with advanced AI 
            capabilities designed specifically for healthcare professionals
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="medical-card group relative overflow-hidden"
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-t-xl opacity-50 group-hover:opacity-100 transition-opacity" />
              
              {/* Icon + Title */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary-dark/10 flex items-center justify-center mr-4 group-hover:from-primary/20 group-hover:to-primary-dark/20 transition-all">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
