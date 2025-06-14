
import TimelineCard from '@/components/TimelineCard';
import { Briefcase, Sparkles, Code, Zap } from 'lucide-react';

const experienceData = [
  {
    company: "TechCorp Solutions",
    role: "Senior AI Engineer",
    duration: "2023 - Present",
    description: "Leading AI initiatives and developing machine learning solutions for enterprise clients. Specialized in natural language processing and computer vision applications.",
    tech: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker"]
  },
  {
    company: "Innovatech Labs",
    role: "AI Research Intern",
    duration: "2022",
    description: "Conducted research on generative models and reinforcement learning algorithms. Published a paper on novel approaches to unsupervised learning.",
    tech: ["Python", "Jupyter", "Scikit-learn", "OpenAI Gym", "Research"]
  },
  {
    company: "Global Solutions Inc.",
    role: "Software Engineer",
    duration: "2020 - 2022",
    description: "Developed and maintained backend systems for high-traffic web applications. Focused on optimizing performance and ensuring scalability.",
    tech: ["Node.js", "Express", "MongoDB", "Redis", "Kubernetes"]
  },
  {
    company: "Startup Innovations",
    role: "Full-Stack Developer",
    duration: "2019 - 2020",
    description: "Built full-stack web applications from concept to deployment. Gained experience in front-end and back-end technologies.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "Git"]
  }
];

const Experience = () => {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative min-h-[calc(100vh-theme(space.14))]">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 pattern-grid opacity-15"></div>
      <div className="absolute top-20 right-1/4 w-16 h-16 border-2 border-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-accent/20 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-primary animate-pulse" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-primary">
              Professional Experience
            </h1>
            <Code className="w-6 h-6 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="relative">
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              My journey in building <span className="text-primary font-semibold">intelligent systems</span> and 
              <span className="text-accent font-semibold"> scalable solutions</span>
            </p>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 blur-lg -z-10 rounded-lg"></div>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {experienceData.map((item, index) => (
            <TimelineCard 
              key={index} 
              item={item} 
              align={index % 2 === 0 ? 'left' : 'right'}
              isActive={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
