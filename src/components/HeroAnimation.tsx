import { motion } from "framer-motion";

const HeroAnimation = () => {
  return (
    <div className="w-full relative overflow-hidden" style={{ aspectRatio: "16/5" }}>
      <svg
        viewBox="0 0 1440 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Animated wave layers */}
        <motion.path
          d="M0 280 Q180 220 360 260 Q540 300 720 250 Q900 200 1080 260 Q1260 320 1440 270 L1440 400 L0 400Z"
          fill="hsl(180 70% 35% / 0.08)"
          animate={{ d: [
            "M0 280 Q180 220 360 260 Q540 300 720 250 Q900 200 1080 260 Q1260 320 1440 270 L1440 400 L0 400Z",
            "M0 260 Q180 300 360 240 Q540 280 720 270 Q900 220 1080 280 Q1260 300 1440 250 L1440 400 L0 400Z",
            "M0 280 Q180 220 360 260 Q540 300 720 250 Q900 200 1080 260 Q1260 320 1440 270 L1440 400 L0 400Z",
          ]}}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 310 Q180 260 360 290 Q540 330 720 280 Q900 240 1080 300 Q1260 340 1440 300 L1440 400 L0 400Z"
          fill="hsl(180 70% 35% / 0.12)"
          animate={{ d: [
            "M0 310 Q180 260 360 290 Q540 330 720 280 Q900 240 1080 300 Q1260 340 1440 300 L1440 400 L0 400Z",
            "M0 290 Q180 330 360 270 Q540 310 720 300 Q900 260 1080 320 Q1260 310 1440 280 L1440 400 L0 400Z",
            "M0 310 Q180 260 360 290 Q540 330 720 280 Q900 240 1080 300 Q1260 340 1440 300 L1440 400 L0 400Z",
          ]}}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 340 Q180 300 360 330 Q540 360 720 320 Q900 290 1080 340 Q1260 370 1440 330 L1440 400 L0 400Z"
          fill="hsl(180 70% 35% / 0.18)"
          animate={{ d: [
            "M0 340 Q180 300 360 330 Q540 360 720 320 Q900 290 1080 340 Q1260 370 1440 330 L1440 400 L0 400Z",
            "M0 330 Q180 360 360 310 Q540 340 720 340 Q900 310 1080 350 Q1260 340 1440 320 L1440 400 L0 400Z",
            "M0 340 Q180 300 360 330 Q540 360 720 320 Q900 290 1080 340 Q1260 370 1440 330 L1440 400 L0 400Z",
          ]}}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated crosses */}
        {[
          { x: 120, y: 80, delay: 0, size: 18 },
          { x: 340, y: 140, delay: 0.5, size: 14 },
          { x: 560, y: 60, delay: 1, size: 20 },
          { x: 780, y: 120, delay: 1.5, size: 16 },
          { x: 980, y: 50, delay: 0.8, size: 22 },
          { x: 1200, y: 100, delay: 1.2, size: 15 },
          { x: 1350, y: 160, delay: 0.3, size: 18 },
          { x: 250, y: 200, delay: 1.8, size: 12 },
          { x: 680, y: 190, delay: 2.2, size: 14 },
          { x: 1100, y: 210, delay: 0.6, size: 16 },
        ].map((cross, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.1, 0.8],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: cross.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ originX: `${cross.x}px`, originY: `${cross.y}px` }}
          >
            <line
              x1={cross.x - cross.size / 2}
              y1={cross.y}
              x2={cross.x + cross.size / 2}
              y2={cross.y}
              stroke="hsl(180 70% 35%)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1={cross.x}
              y1={cross.y - cross.size / 2}
              x2={cross.x}
              y2={cross.y + cross.size / 2}
              stroke="hsl(180 70% 35%)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </motion.g>
        ))}

        {/* Floating dots / particles */}
        {[
          { cx: 200, cy: 100, r: 4, delay: 0 },
          { cx: 450, cy: 170, r: 3, delay: 0.4 },
          { cx: 700, cy: 80, r: 5, delay: 0.8 },
          { cx: 900, cy: 160, r: 3.5, delay: 1.2 },
          { cx: 1150, cy: 70, r: 4.5, delay: 0.6 },
          { cx: 1320, cy: 130, r: 3, delay: 1.6 },
          { cx: 380, cy: 50, r: 3, delay: 2.0 },
          { cx: 820, cy: 220, r: 4, delay: 1.0 },
          { cx: 1050, cy: 180, r: 3, delay: 1.4 },
          { cx: 150, cy: 180, r: 3.5, delay: 0.2 },
        ].map((dot, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill="hsl(180 70% 35% / 0.4)"
            animate={{
              cy: [dot.cy, dot.cy - 20, dot.cy],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Connecting lines / network effect */}
        {[
          { x1: 200, y1: 100, x2: 340, y2: 140, delay: 0 },
          { x1: 560, y1: 60, x2: 700, y2: 80, delay: 0.5 },
          { x1: 780, y1: 120, x2: 900, y2: 160, delay: 1 },
          { x1: 980, y1: 50, x2: 1100, y2: 70, delay: 1.5 },
          { x1: 340, y1: 140, x2: 450, y2: 170, delay: 0.8 },
          { x1: 1150, y1: 70, x2: 1200, y2: 100, delay: 1.2 },
        ].map((line, i) => (
          <motion.line
            key={`line-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="hsl(180 70% 35% / 0.15)"
            strokeWidth="1"
            strokeDasharray="4 4"
            animate={{
              opacity: [0.1, 0.4, 0.1],
              strokeDashoffset: [0, -20],
            }}
            transition={{
              duration: 3,
              delay: line.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Pulsing rings */}
        {[
          { cx: 560, cy: 60, delay: 0 },
          { cx: 980, cy: 50, delay: 1.5 },
          { cx: 250, cy: 200, delay: 3 },
        ].map((ring, i) => (
          <motion.circle
            key={`ring-${i}`}
            cx={ring.cx}
            cy={ring.cy}
            r={8}
            fill="none"
            stroke="hsl(180 70% 35% / 0.25)"
            strokeWidth="1.5"
            animate={{
              r: [8, 28, 8],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 4,
              delay: ring.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default HeroAnimation;
