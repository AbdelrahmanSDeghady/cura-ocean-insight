import { Target, Zap, Lock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Clinical Accuracy",
      description: "Evidence-based suggestions backed by medical research and clinical guidelines",
    },
    {
      icon: Zap,
      title: "Workflow Efficiency", 
      description: "Seamlessly integrates into existing workflows to enhance productivity",
    },
    {
      icon: Lock,
      title: "Secure & Compliant",
      description: "HIPAA-compliant platform ensuring patient data privacy and security",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Revolutionizing Clinical Decision Support
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Icura leverages advanced AI to analyze complex patient data, providing healthcare 
            professionals with intelligent insights that support better clinical outcomes. Our 
            platform transforms how medical decisions are made, ensuring accuracy, efficiency, 
            and confidence in every diagnosis.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="medical-card group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;