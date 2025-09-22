import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Brain, Shield } from "lucide-react";
import heroWaves from "@/assets/hero-waves.png";
import icuraLogo from "@/assets/icura-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and waves */}
      <div className="absolute inset-0 hero-gradient">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroWaves})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 wave-animation opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen py-20">
          {/* Huge Logo */}
          <div className="flex justify-center mb-4">
            <img 
              src={icuraLogo} 
              alt="Icura" 
              className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto opacity-95 filter drop-shadow-2xl"
            />
          </div>

          {/* Animated Medical Icons */}
          <div className="flex justify-center space-x-8 mb-8 opacity-80">
            <div className="animate-bounce delay-0">
              <Activity className="h-8 w-8 text-white/80" />
            </div>
            <div className="animate-bounce delay-100">
              <Brain className="h-8 w-8 text-white/80" />
            </div>
            <div className="animate-bounce delay-200">
              <Shield className="h-8 w-8 text-white/80" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Smarter Clinical Decisions,{" "}
            <span className="text-accent-light">Faster</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Icura analyzes patient data, symptoms, and labs to provide
            evidence-based suggestions that enhance clinical decision-making
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToContact}
              className="group"
            >
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={scrollToAbout}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;