import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

      {/* Hero illustration with animated overlay */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full mt-4"
      >
        <div className="relative w-full">
          <img
            src={heroIllustration}
            alt="Healthcare AI visualization"
            className="w-full h-auto"
          />
          {/* Animated SVG overlay — crosses, particles, rings */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1440 400"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            {[
              { x: 150, y: 70, size: 16, delay: 0 },
              { x: 380, y: 130, size: 12, delay: 0.6 },
              { x: 600, y: 50, size: 18, delay: 1.2 },
              { x: 820, y: 110, size: 14, delay: 0.3 },
              { x: 1050, y: 60, size: 20, delay: 0.9 },
              { x: 1260, y: 100, size: 14, delay: 1.5 },
              { x: 280, y: 200, size: 10, delay: 2.0 },
              { x: 720, y: 180, size: 12, delay: 1.8 },
              { x: 1150, y: 190, size: 14, delay: 0.5 },
            ].map((c, i) => (
              <motion.g
                key={i}
                animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.8, 1.15, 0.8], rotate: [0, 90, 0] }}
                transition={{ duration: 4 + i * 0.3, delay: c.delay, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: `${c.x}px ${c.y}px` }}
              >
                <line x1={c.x - c.size / 2} y1={c.y} x2={c.x + c.size / 2} y2={c.y} stroke="hsl(180 70% 35%)" strokeWidth="2" strokeLinecap="round" />
                <line x1={c.x} y1={c.y - c.size / 2} x2={c.x} y2={c.y + c.size / 2} stroke="hsl(180 70% 35%)" strokeWidth="2" strokeLinecap="round" />
              </motion.g>
            ))}
            {[
              { cx: 220, cy: 90, r: 3.5, delay: 0 },
              { cx: 500, cy: 160, r: 3, delay: 0.5 },
              { cx: 750, cy: 70, r: 4, delay: 1 },
              { cx: 950, cy: 150, r: 3, delay: 1.5 },
              { cx: 1180, cy: 60, r: 4, delay: 0.7 },
              { cx: 1340, cy: 120, r: 3, delay: 1.2 },
            ].map((d, i) => (
              <motion.circle
                key={`p-${i}`}
                cx={d.cx}
                cy={d.cy}
                r={d.r}
                fill="hsl(180 70% 35% / 0.5)"
                animate={{ cy: [d.cy, d.cy - 18, d.cy], opacity: [0.15, 0.6, 0.15] }}
                transition={{ duration: 3.5 + i * 0.4, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
            {[
              { cx: 600, cy: 50, delay: 0 },
              { cx: 1050, cy: 60, delay: 2 },
            ].map((r, i) => (
              <motion.circle
                key={`r-${i}`}
                cx={r.cx}
                cy={r.cy}
                r={10}
                fill="none"
                stroke="hsl(180 70% 35% / 0.3)"
                strokeWidth="1.5"
                animate={{ r: [10, 30], opacity: [0.5, 0] }}
                transition={{ duration: 3, delay: r.delay, repeat: Infinity, ease: "easeOut" }}
              />
            ))}
          </svg>
        </div>

        {/* Animated flowing waves with floating crosses */}
        <div className="relative w-full overflow-hidden -mt-1">
          {/* Floating crosses around the waves */}
          {[
            { x: "5%", y: "-10px", size: 14, delay: 0, dur: 6, drift: 30 },
            { x: "15%", y: "20px", size: 10, delay: 1.2, dur: 5, drift: -20 },
            { x: "25%", y: "-5px", size: 16, delay: 0.5, dur: 7, drift: 25 },
            { x: "35%", y: "30px", size: 11, delay: 2.0, dur: 5.5, drift: -15 },
            { x: "45%", y: "5px", size: 18, delay: 0.8, dur: 6.5, drift: 20 },
            { x: "55%", y: "-15px", size: 12, delay: 1.5, dur: 5, drift: -25 },
            { x: "65%", y: "25px", size: 15, delay: 0.3, dur: 7, drift: 30 },
            { x: "75%", y: "10px", size: 10, delay: 1.8, dur: 6, drift: -20 },
            { x: "85%", y: "-8px", size: 17, delay: 0.6, dur: 5.5, drift: 22 },
            { x: "92%", y: "15px", size: 13, delay: 2.2, dur: 6.5, drift: -18 },
            { x: "10%", y: "50px", size: 9, delay: 1.0, dur: 4.5, drift: 15 },
            { x: "50%", y: "60px", size: 11, delay: 0.2, dur: 5, drift: -22 },
            { x: "80%", y: "55px", size: 14, delay: 1.7, dur: 6, drift: 18 },
          ].map((c, i) => (
            <motion.div
              key={`wc-${i}`}
              className="absolute pointer-events-none"
              style={{ left: c.x, top: c.y }}
              animate={{
                y: [0, c.drift, 0],
                x: [0, c.drift * 0.5, 0],
                rotate: [0, 180, 360],
                opacity: [0.15, 0.5, 0.15],
              }}
              transition={{
                duration: c.dur,
                delay: c.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg width={c.size} height={c.size} viewBox="0 0 20 20" fill="none">
                <line x1="10" y1="2" x2="10" y2="18" stroke="hsl(180 70% 35%)" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="10" x2="18" y2="10" stroke="hsl(180 70% 35%)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.div>
          ))}

          {/* Sparkle dots around waves */}
          {[
            { x: "8%", y: "40px", delay: 0, dur: 3 },
            { x: "22%", y: "10px", delay: 0.8, dur: 2.5 },
            { x: "38%", y: "50px", delay: 1.5, dur: 3.5 },
            { x: "52%", y: "15px", delay: 0.4, dur: 2.8 },
            { x: "68%", y: "45px", delay: 1.2, dur: 3.2 },
            { x: "82%", y: "8px", delay: 0.6, dur: 2.6 },
            { x: "95%", y: "35px", delay: 1.8, dur: 3 },
          ].map((s, i) => (
            <motion.div
              key={`spark-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
              style={{ left: s.x, top: s.y, background: "hsl(180 70% 35%)" }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: s.dur,
                delay: s.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Wave SVG */}
          <svg
            viewBox="0 0 2880 120"
            className="w-[200%] h-auto relative z-10"
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.path
              d="M0 40 Q180 10 360 40 Q540 70 720 40 Q900 10 1080 40 Q1260 70 1440 40 Q1620 10 1800 40 Q1980 70 2160 40 Q2340 10 2520 40 Q2700 70 2880 40 L2880 120 L0 120Z"
              fill="hsl(180 70% 35% / 0.06)"
              animate={{ x: [0, -720] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M0 55 Q180 30 360 55 Q540 80 720 55 Q900 30 1080 55 Q1260 80 1440 55 Q1620 30 1800 55 Q1980 80 2160 55 Q2340 30 2520 55 Q2700 80 2880 55 L2880 120 L0 120Z"
              fill="hsl(180 70% 35% / 0.10)"
              animate={{ x: [0, -720] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M0 70 Q180 50 360 70 Q540 90 720 70 Q900 50 1080 70 Q1260 90 1440 70 Q1620 50 1800 70 Q1980 90 2160 70 Q2340 50 2520 70 Q2700 90 2880 70 L2880 120 L0 120Z"
              fill="hsl(180 70% 35% / 0.15)"
              animate={{ x: [0, -720] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M0 85 Q180 70 360 85 Q540 100 720 85 Q900 70 1080 85 Q1260 100 1440 85 Q1620 70 1800 85 Q1980 100 2160 85 Q2340 70 2520 85 Q2700 100 2880 85 L2880 120 L0 120Z"
              fill="hsl(180 70% 35% / 0.20)"
              animate={{ x: [0, -720] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
