import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroWaves from "@/assets/hero-waves.png";
import icuraLogoFull from "@/assets/icura-logo-full.png";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col bg-background overflow-hidden">
      {/* Floating teal gradient orbs */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-5 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-32 pb-4">
        {/* Full logo with tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 sm:mb-10"
        >
          <img
            src={icuraLogoFull}
            alt="Icura - Care Through Technology"
            className="h-16 sm:h-20 md:h-28 lg:h-36 w-auto mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-foreground leading-[1.1] tracking-tight mb-4 sm:mb-6 px-2">
            Smarter clinical decisions.{" "}
            <span className="italic text-primary">Built for real care.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2"
          >
            Icura analyzes patient data, symptoms, and labs to provide evidence-based
            suggestions that enhance clinical decision-making.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <Button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary text-primary-foreground hover:bg-primary-dark rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium group"
            >
              Get Early Access
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium border-border hover:bg-muted"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Full-width animated wave — pinned to bottom */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full mt-auto"
      >
        {/* Gentle floating animation on the wave */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={heroWaves}
            alt=""
            aria-hidden="true"
            className="w-full h-auto block object-cover min-h-[120px] sm:min-h-[180px] md:min-h-[250px] lg:min-h-[350px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
