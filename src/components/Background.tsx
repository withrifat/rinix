import { motion } from 'motion/react';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background-base">
      {/* Layer 1: Base Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0a0a0f_0%,#050506_50%,#020203_100%)]" />

      {/* Layer 2: Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />

      {/* Layer 3: Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(#ffffff04_1px,transparent_1px),linear-gradient(90deg,#ffffff04_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Layer 4: Animated Gradient Blobs */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/20 blur-[120px] rounded-full"
      />

      <motion.div
        animate={{
          y: [0, 60, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-500/10 blur-[100px] rounded-full"
      />

      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[10%] -right-[5%] w-[700px] h-[700px] bg-purple-500/10 blur-[130px] rounded-full"
      />
      
      {/* Bottom accent glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-linear-to-t from-accent/10 to-transparent pointer-events-none animate-pulse-slow" />
    </div>
  );
}
