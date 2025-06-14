
import SkillsCategory from '@/components/SkillsCategory';
import { Code, Database, Wind, Cog, BrainCircuit, PenTool, Server, Cloud, Bot, GitBranch } from 'lucide-react';

const iconProps = {
  className: "w-10 h-10 text-primary/80",
  strokeWidth: 1.5,
};

const skillsData = [
  {
    title: "Programming & Markup",
    baseAnimationDelay: 200,
    skills: [
      { name: "Python", icon: <Code {...iconProps} /> },
      { name: "JavaScript", icon: <Code {...iconProps} /> },
      { name: "TypeScript", icon: <Code {...iconProps} /> },
      { name: "Java", icon: <Code {...iconProps} /> },
      { name: "HTML5", icon: <Code {...iconProps} /> },
      { name: "CSS3", icon: <Code {...iconProps} /> },
      { name: "SQL", icon: <Database {...iconProps} /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    baseAnimationDelay: 400,
    skills: [
      { name: "React", icon: <Code {...iconProps} /> },
      { name: "Node.js", icon: <Server {...iconProps} /> },
      { name: "Express.js", icon: <Server {...iconProps} /> },
      { name: "Flask", icon: <Server {...iconProps} /> },
      { name: "Tailwind CSS", icon: <Wind {...iconProps} /> },
    ],
  },
  {
    title: "Generative AI & Machine Learning",
    baseAnimationDelay: 600,
    skills: [
      { name: "LLM APIs", icon: <BrainCircuit {...iconProps} /> },
      { name: "LangChain", icon: <PenTool {...iconProps} /> },
      { name: "Vector DBs", icon: <Database {...iconProps} /> },
      { name: "PyTorch", icon: <Bot {...iconProps} /> },
      { name: "Hugging Face", icon: <Bot {...iconProps} /> },
    ],
  },
  {
    title: "Databases & Cloud",
    baseAnimationDelay: 800,
    skills: [
      { name: "MongoDB", icon: <Database {...iconProps} /> },
      { name: "PostgreSQL", icon: <Database {...iconProps} /> },
      { name: "Firebase", icon: <Cloud {...iconProps} /> },
      { name: "AWS", icon: <Cloud {...iconProps} /> },
      { name: "Docker", icon: <Server {...iconProps} /> },
    ],
  },
  {
    title: "Developer Tools",
    baseAnimationDelay: 1000,
    skills: [
      { name: "Git & GitHub", icon: <GitBranch {...iconProps} /> },
      { name: "VS Code", icon: <Cog {...iconProps} /> },
      { name: "Postman", icon: <Cog {...iconProps} /> },
      { name: "Linux", icon: <Cog {...iconProps} /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="container mx-auto py-12 px-4 relative overflow-hidden">
      {/* Techy background grid and glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background bg-[linear-gradient(to_right,hsl(var(--primary)_/_0.1),transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)_/_0.1),transparent_1px)] bg-[size:2rem_2rem]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-side_at_50%_100%,hsl(var(--primary)_/_0.15),transparent)]"></div>
      </div>

      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-5xl font-display font-bold text-primary animate-glow">My Technical Arsenal</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          From crafting beautiful front-ends to architecting intelligent AI systems, here's a look at the tools and technologies I command.
        </p>
      </div>

      {skillsData.map((category, index) => (
        <SkillsCategory 
          key={index}
          title={category.title}
          skills={category.skills}
          baseAnimationDelay={category.baseAnimationDelay}
        />
      ))}
    </div>
  );
};

export default Skills;
