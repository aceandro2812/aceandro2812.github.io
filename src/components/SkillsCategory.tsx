
import React from 'react';
import SkillCard from './SkillCard';

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
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-display font-bold text-primary mb-6 text-center animate-fade-in-up" style={{ animationDelay: `${baseAnimationDelay}ms` }}>
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.name} 
            name={skill.name} 
            icon={skill.icon}
            animationDelay={baseAnimationDelay + (index + 1) * 100} 
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsCategory;
