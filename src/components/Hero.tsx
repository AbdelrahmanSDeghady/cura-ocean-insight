import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroAnimation from "@/components/HeroAnimation";
import icuraLogoFull from "@/assets/icura-logo-full.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Floating teal gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center pt-32 pb-8">
        {/* Full logo with tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <img
            src={icuraLogoFull}
            alt="Icura - Care Through Technology"
            className="h-20 md:h-28 lg:h-36 w-auto mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] tracking-tight mb-6">
            Smarter clinical decisions.{" "}
            <span className="italic text-primary">Built for real care.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Icura analyzes patient data, symptoms, and labs to provide evidence-based
            suggestions that enhance clinical decision-making.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary text-primary-foreground hover:bg-primary-dark rounded-full px-8 py-6 text-base font-medium group"
            >
              Get Early Access
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full px-8 py-6 text-base font-medium border-border hover:bg-muted"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated hero illustration */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full mt-4"
      >
        <HeroAnimation />
      </motion.div>
    </section>
  );
};

export default Hero;
