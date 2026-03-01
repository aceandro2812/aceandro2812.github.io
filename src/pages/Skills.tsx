import SkillCard from '@/components/SkillCard';
import { usePortfolio } from '@/context/PortfolioContext';
import { SkillCategory } from '@/config/types';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ScrambleText } from '@/components/ScrambleText';
import React, { useRef } from 'react';
import { Terminal } from 'lucide-react';

const fallbackSkills: SkillCategory[] = [
  {
    title: "[LOADING_MODULES...]",
    skills: [
      { name: "Loading...", icon: "SiReact", color: "#61DAFB" },
    ]
  }
];

const MagneticWrapper = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2); // Repel/attract factor
    y.set(middleY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Give a continuous slow float when not hovering
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ x: springX, y: springY }}
      className="p-2"
    >
      {children}
    </motion.div>
  );
};

const Skills = () => {
  const { skills } = usePortfolio();
  const skillsData: SkillCategory[] = skills?.length ? skills : fallbackSkills;

  if (!skillsData || skillsData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-primary-green">
        <Terminal className="animate-pulse mr-2" /> [LOADING_SKILL_MODULES...]
      </div>
    );
  }
  return (
    <div className="relative min-h-screen overflow-hidden font-mono pb-32">
      {/* Container background mapping */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.05)_0%,transparent_100%)]" />

      <div className="container mx-auto py-16 px-4 relative z-10 w-full">

        <div className="text-center mb-16 mt-8 border-b border-primary-green/20 pb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-base flex flex-col justify-center items-center gap-3">
            <div className="flex items-center gap-3">
              <Terminal className="text-primary-green w-8 h-8" />
              <ScrambleText text="CORE_CAPABILITIES" />
            </div>
            <span className="text-xl text-cyber-blue opacity-80 tracking-widest">[SKILLS]</span>
          </h1>
          <p className="mt-6 text-sm text-primary-green/70 max-w-2xl mx-auto uppercase tracking-widest bg-primary-green/10 border border-primary-green/30 p-2 animate-pulse inline-block">
            [USER_INTERACTION_REQUIRED] // HOVER_OVER_NODES_TO_ENGAGE_MAGNETICS
          </p>
        </div>

        <div className="space-y-16">
          {skillsData.map((category, index) => (
            <div key={category.title} className="relative">
              <div className="absolute inset-0 bg-primary-green/5 blur-3xl -z-10 rounded-full" />
              <h2 className="text-xl font-bold text-primary-green mb-8 text-center bg-black/50 border border-primary-green/30 inline-block px-6 py-2 mx-auto left-1/2 relative -translate-x-1/2">
                {category.title}
              </h2>

              <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                {category.skills.map((skill) => (
                  <MagneticWrapper key={skill.name}>
                    <SkillCard
                      name={skill.name}
                      icon={skill.icon}
                      color={skill.color}
                    />
                  </MagneticWrapper>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
