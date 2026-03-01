
import GlobeCanvas from '@/components/AnimatedGlobe';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrambleText } from '@/components/ScrambleText';
import { motion } from 'framer-motion';

const HologramImage = () => (
  <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto group cursor-pointer">
    {/* Base glow */}
    <div className="absolute inset-0 bg-cyber-blue/20 rounded-full blur-3xl group-hover:bg-primary-green/30 transition-colors duration-700" />

    {/* Hologram Container */}
    <div className="relative w-full h-full rounded-full overflow-hidden border border-primary-green/50 bg-black/50 [box-shadow:0_0_40px_rgba(0,255,65,0.4)_inset]">
      <img
        src="/Gemini_Generated_Image_2w2bx32w2bx32w2b.png"
        alt="Agent Profile"
        className="w-full h-full object-cover filter contrast-[1.2] brightness-125 sepia-[.5] hue-rotate-[130deg] saturate-[2]"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://github.com/aceandro2812.png';
        }}
      />
      {/* Scanline overlay specific to hologram */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.15)_50%)] bg-[length:100%_4px]" />

      {/* Sweeping bar */}
      <motion.div
        className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-primary-green/30 to-transparent blur-sm"
        animate={{ top: ['-10%', '110%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
    </div>

    {/* Decorative nodes */}
    <div className="absolute -left-6 top-1/2 w-3 h-3 bg-primary-green rounded-full shadow-[0_0_15px_#00FF41] animate-pulse" />
    <div className="absolute -right-6 top-1/2 w-3 h-3 bg-primary-green rounded-full shadow-[0_0_15px_#00FF41] animate-pulse" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-12 h-1 bg-cyber-blue rounded-full shadow-[0_0_10px_#0DF0E3]" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-12 h-1 bg-cyber-blue rounded-full shadow-[0_0_10px_#0DF0E3]" />

    {/* Data Rings */}
    <div className="absolute inset-[-20%] border border-primary-green/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
    <div className="absolute inset-[-40%] border border-cyber-blue/10 rounded-full border-dotted animate-[spin_30s_linear_infinite_reverse]" />
  </div>
);

const Index = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-theme(space.14))] overflow-hidden px-4 sm:px-6 pt-20 pb-32">
      <GlobeCanvas />

      <div className="relative z-10 w-full max-w-7xl mx-auto font-mono grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-10">

        {/* Left Column: Text & CTA */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

          {/* Boot Sequence */}
          <div className="mb-10 text-primary-green/80 text-xs md:text-sm flex flex-col items-start gap-1 w-full max-w-md bg-black/60 p-4 border-l-2 border-primary-green/50 rounded backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,65,0.1)]">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-primary-green/20 w-full">
              <Terminal className="w-4 h-4" />
              <span className="text-text-muted">TERMINAL_SECURE_BOOT</span>
            </div>
            <ScrambleText text="[SYSTEM INITIALIZATION]..." className="block w-full text-left" />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="w-full text-left">
              <ScrambleText text="[AUTHORIZING AGENT JATIN]..." className="block text-cyber-blue" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="w-full text-left">
              <ScrambleText text="[ACCESS GRANTED]" className="block font-bold text-primary-green" />
            </motion.div>
          </div>

          <div className="animate-fade-in-up mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text-base mb-2 drop-shadow-[0_0_15px_rgba(0,255,65,0.3)] tracking-wider">
              <ScrambleText text="AGENT_ID:" />
              <br />
              <span className="text-primary-green"><ScrambleText text="JATIN_2812" /></span>
            </h1>
          </div>

          <div className="relative mb-8">
            <h2 className="text-base sm:text-lg md:text-xl font-mono text-text-muted uppercase tracking-widest border-l-4 border-cyber-blue pl-4 py-1">
              SPECIALIZATION:<br />
              <span className="text-cyber-blue font-bold drop-shadow-[0_0_8px_rgba(13,240,227,0.5)] mt-1 block">AGENTIC AI & AUTONOMOUS SYSTEMS</span>
            </h2>
            <p className="mt-6 text-sm sm:text-base text-primary-green/70 max-w-lg leading-relaxed bg-primary-green/5 p-3 border border-primary-green/20">
              <span className="text-primary-green font-bold">&gt; PROFILE_SUMMARY:</span> I build high-performance, intelligent software systems and seamless full-stack applications designed for scale and autonomy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up w-full lg:w-auto px-4 lg:px-0">
            <Button asChild size="lg" className="cyber-card group relative overflow-hidden bg-primary-green/10 text-primary-green hover:bg-primary-green hover:text-black border border-primary-green transition-all duration-300 rounded-none h-14 px-8 w-full sm:w-auto">
              <Link to="/projects" className="flex items-center justify-center font-bold tracking-widest text-sm uppercase">
                <span className="relative z-10 flex items-center">
                  Initiate Protocol <span className="text-cyber-blue ml-2 opacity-80 group-hover:text-black transition-colors">[VIEW_PROJECTS]</span> <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Sweeping shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </Link>
            </Button>

            {/* Secondary subtle action or status indicator */}
            <div className="hidden sm:flex items-center gap-3 px-6 h-14 border border-cyber-blue/30 bg-cyber-blue/5 cyber-card">
              <div className="w-2 h-2 bg-cyber-blue rounded-full animate-ping" />
              <span className="text-xs uppercase tracking-widest text-cyber-blue font-bold">Systems<br />Online</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hologram */}
        <div className="order-1 lg:order-2 flex justify-center items-center relative">
          <HologramImage />
        </div>

      </div>
    </div>
  );
};

export default Index;
