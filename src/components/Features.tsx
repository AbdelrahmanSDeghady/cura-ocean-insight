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
      gradient: "from-accent to-accent-light",
    },
    {
      icon: Shield,
      title: "Secure Data Handling",
      description: "Enterprise-grade security with HIPAA compliance for patient data protection",
      gradient: "from-medical-success to-accent",
    },
    {
      icon: BarChart3,
      title: "Real-Time AI Insights",
      description: "Instant analysis of patient data with dynamic visualization and trends",
      gradient: "from-primary to-accent",
    },
    {
      icon: Clock,
      title: "Seamless Workflow",
      description: "Integrates smoothly with existing EMR systems and clinical workflows",
      gradient: "from-accent-light to-primary-light",
    },
    {
      icon: Database,
      title: "Comprehensive Analysis",
      description: "Processes symptoms, lab results, and patient history for holistic insights",
      gradient: "from-primary to-medical-success",
    },
    {
      icon: CheckCircle,
      title: "Clinical Validation",
      description: "All suggestions reviewed and validated by medical professionals",
      gradient: "from-medical-success to-accent-light",
    },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Powerful Features for Modern Healthcare
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the next generation of clinical decision support with advanced AI 
            capabilities designed specifically for healthcare professionals
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="medical-card group relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient}`} />
              
              {/* Icon Container */}
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mr-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
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