import Marquee from '@/components/Marquee';
import SkillCard from '@/components/SkillCard';
import {
  SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiFlask, SiTailwindcss, SiLangchain, SiPytorch,
  SiHuggingface, SiMongodb, SiPostgresql, SiFirebase, SiAmazon, SiDocker,
  SiGit, SiGithub, SiVsco, SiPostman, SiLinux, SiVercel
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { BrainCircuit } from 'lucide-react';

const skillsData = [
  {
    title: "Programming & Markup",
    skills: [
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "Java", icon: <FaJava />, color: "#007396" },
      { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
      { name: "SQL", icon: <SiPostgresql />, color: "#4169E1" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Express.js", icon: <SiExpress />, color: "#68A063" },
      { name: "Flask", icon: <SiFlask />, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    ],
  },
  {
    title: "Generative AI & Machine Learning",
    skills: [
      { name: "LLM APIs", icon: <BrainCircuit />, color: "#8B5CF6" },
      { name: "LangChain", icon: <SiLangchain />, color: "#A855F7" },
      { name: "Vector DBs", icon: <SiHuggingface />, color: "#FFD21E" }, // Using HuggingFace as a proxy for Vector DB concept
      { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
      { name: "Hugging Face", icon: <SiHuggingface />, color: "#FFD21E" },
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      { name: "AWS", icon: <SiAmazon />, color: "#FF9900" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF" },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF" },
      { name: "VS Code", icon: <SiVsco />, color: "#007ACC" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Linux", icon: <SiLinux />, color: "#FCC624" },
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

      <div className="space-y-8">
        {skillsData.map((category, index) => (
          <div key={category.title}>
            <h2 className="text-3xl font-display font-bold text-primary mb-4 text-center">
              {category.title}
            </h2>
            <Marquee pauseOnHover reverse={index % 2 === 1}>
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </Marquee>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
