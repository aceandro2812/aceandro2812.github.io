import Marquee from '@/components/Marquee';
import SkillCard from '@/components/SkillCard';
import { usePortfolio } from '@/context/PortfolioContext';
import { Skill, SkillCategory } from '@/config/types';

// Fallback skills data in case context is not available
const fallbackSkills: SkillCategory[] = [
  {
    title: "Loading Skills...",
    skills: [
      { name: "Loading...", icon: "SiReact", color: "#61DAFB" },
    ]
  }
];

const Skills = () => {
  const { skills } = usePortfolio();
  const skillsData: SkillCategory[] = skills?.length ? skills : fallbackSkills;
  
  console.log('Rendering Skills with data:', skillsData); // Debug log
  
  if (!skillsData || skillsData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading Skills...</h1>
          <p>Please wait while we load your skills data.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="relative overflow-hidden">
      {/* Full width background */}
      <div className="fixed inset-0 -z-10 w-screen">
        <div className="absolute inset-0 bg-background bg-[linear-gradient(to_right,hsl(var(--primary)_/_0.1),transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)_/_0.1),transparent_1px)] bg-[size:2rem_2rem]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-side_at_50%_100%,hsl(var(--primary)_/_0.15),transparent)]"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto py-12 px-4 relative">

      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-5xl font-display font-bold text-primary animate-glow">My Technical Arsenal</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          From crafting beautiful front-ends to architecting intelligent AI systems, here's a look at the tools and technologies I command.
        </p>
      </div>

      <div className="space-y-8">
        {skillsData.map((category, index) => (
          <div key={category.title}>
            <h2 className="text-3xl font-display font-bold text-primary mb-4 text-center">
              {category.title}
            </h2>
            <Marquee pauseOnHover reverse={index % 2 === 1}>
              {category.skills.map((skill) => ({
                ...skill,
                key: skill.name
              })).map((skill) => (
                <SkillCard 
                  key={skill.key} 
                  name={skill.name} 
                  icon={skill.icon} 
                  color={skill.color} 
                />
              ))}
            </Marquee>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Skills;
