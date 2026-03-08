import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Brain, Shield } from "lucide-react";
import heroWaves from "@/assets/hero-waves.png";
import icuraLogo from "@/assets/icura-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroWaves})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 wave-animation opacity-40" />
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center min-h-screen py-24">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img 
              src={icuraLogo} 
              alt="Icura" 
              className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto opacity-95 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            />
          </div>

          {/* Animated Icons */}
          <div className="flex justify-center space-x-8 mb-10 opacity-80">
            <div className="animate-bounce" style={{ animationDelay: "0ms" }}>
              <Activity className="h-7 w-7 text-white/70" />
            </div>
            <div className="animate-bounce" style={{ animationDelay: "150ms" }}>
              <Brain className="h-7 w-7 text-white/70" />
            </div>
            <div className="animate-bounce" style={{ animationDelay: "300ms" }}>
              <Shield className="h-7 w-7 text-white/70" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Smarter Clinical Decisions,{" "}
            <span className="text-accent-light drop-shadow-sm">Faster</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            Icura analyzes patient data, symptoms, and labs to provide
            evidence-based suggestions that enhance clinical decision-making
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToContact}
              className="group shadow-xl"
            >
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={scrollToAbout}
              className="bg-white/10 border-white/25 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
