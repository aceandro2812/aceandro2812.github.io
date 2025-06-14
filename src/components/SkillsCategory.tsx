
import React, { useRef } from 'react';
import SkillCard from './SkillCard';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillsCategoryProps {
  title: string;
  skills: Skill[];
  baseAnimationDelay: number;
}

const SkillsCategory = ({ title, skills, baseAnimationDelay }: SkillsCategoryProps) => {
  const ref = useRef(null);
  // Animate when the category is 10% in view, and only animate once.
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="mb-12">
      <h2 
        className={cn(
          "text-3xl font-display font-bold text-primary mb-6 text-center",
          isInView ? "animate-fade-in-up" : "opacity-0"
        )}
        style={{ animationDelay: `${baseAnimationDelay}ms` }}
      >
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.name} 
            name={skill.name} 
            icon={skill.icon}
            isInView={isInView}
            animationDelay={baseAnimationDelay + (index + 1) * 100} 
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsCategory;
