import TimelineCard from '@/components/TimelineCard';
import { Network, Terminal } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const { experience } = usePortfolio();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative min-h-[calc(100vh-theme(space.14))] font-mono pb-32" ref={containerRef}>
      {/* Enhanced AI-themed background elements */}
      <div className="absolute top-20 right-1/4 w-32 h-32 border-[3px] border-funky-accent/20 rounded-full animate-[spin_10s_linear_infinite] border-dashed" />
      <div className="absolute top-40 right-[20%] w-24 h-24 border border-cyber-blue/30 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse] bg-cyber-blue/5 backdrop-blur-sm -skew-x-12">
        <div className="w-12 h-12 border border-primary-green/40 shadow-[0_0_15px_rgba(0,255,65,0.2)]" />
      </div>
      <div className="absolute bottom-40 left-10 w-64 h-64 bg-primary-green/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-funky-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-24 mt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-primary-green animate-pulse" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-base uppercase tracking-widest drop-shadow-[0_0_10px_rgba(0,255,65,0.3)] flex flex-col items-center gap-2">
              Mission Logs
              <span className="text-xl sm:text-2xl text-cyber-blue opacity-80">[EXPERIENCE]</span>
            </h1>
          </div>
          <div className="relative mt-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-funky-accent via-primary-green to-cyber-blue blur opacity-20"></div>
            <p className="relative text-sm sm:text-base text-text-base max-w-2xl mx-auto uppercase tracking-widest bg-black/80 px-6 py-2 border border-text-muted/20">
              [DECRYPTING_PAST_OPERATIONS] // <span className="text-funky-accent font-bold drop-shadow-[0_0_8px_rgba(255,0,60,0.6)]">ACCESS_LEVEL: ALPHA</span>
            </p>
          </div>
        </div>

        <div className="relative pb-24">
          {/* Fiber-optic connecting line */}
          <div className="absolute left-1/2 top-4 hidden h-full w-1 -translate-x-1/2 bg-black md:block overflow-hidden" aria-hidden="true">
            <div className="h-full w-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,255,65,0.1)_50%,transparent_100%)] bg-[length:100%_4px]" />
            <motion.div
              className="absolute top-0 w-full origin-top shadow-[0_0_15px_#00FF41,0_0_30px_#0DF0E3] bg-gradient-to-b from-primary-green via-cyber-blue to-funky-accent border-l border-r border-white/20"
              style={{ scaleY, height: '100%' }}
            />
          </div>

          <div className="space-y-16 md:space-y-32 mt-12">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative md:grid md:grid-cols-2 md:items-center md:gap-x-16">

                  {/* Glowing Node Crosshairs */}
                  <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center justify-center z-20">
                    <div className="w-10 h-10 bg-black rotate-45 border-2 border-funky-accent flex items-center justify-center shadow-[0_0_20px_rgba(255,0,60,0.5)] group-hover:rotate-90 transition-transform">
                      <div className="w-3 h-3 bg-cyber-blue rounded-full animate-ping -rotate-45" />
                    </div>
                  </div>

                  {/* Timeline Card */}
                  <div className={isLeft ? 'md:col-start-1' : 'md:col-start-2'}>
                    <TimelineCard
                      item={item}
                      align={isLeft ? 'left' : 'right'}
                      isActive={index === 0}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
