
import { Briefcase, Code, Zap } from "lucide-react";
import TimelineCard from "@/components/TimelineCard";
import { useState, useEffect, useRef } from "react";

const experienceData = [
  {
    company: 'Mettler Toledo International',
    role: 'AI Automation & Full Stack Developer',
    duration: 'Dec 2023 - Present',
    description: 'Implemented AI from scratch, hosting LLMs using Vllm on internal GPUs using docker and nginx. Developed full-stack AI applications and AI agents for core financial processes right from development to devops.',
    tech: ['Python', 'Django', 'FastAPI', 'PyTorch', 'CrewAI', 'LangGraph', 'Docker', 'Nginx']
  },
  {
    company: 'Mettler Toledo International',
    role: 'Developer Intern',
    duration: 'Oct 2023 - Dec 2023',
    description: 'Internship leading to a full-time role, focused on laying the groundwork for AI automation projects and full-stack development.',
    tech: ['Python', 'FastAPI', 'Docker']
  },
  {
    company: 'Sahacharya Digital Solutions',
    role: 'AI Implementation Intern',
    duration: '2023 (3 months)',
    description: 'Explored and integrated various LLM APIs to enhance and automate internal company processes using Python and FastAPI.',
    tech: ['Python', 'FastAPI', 'LLM APIs']
  },
  {
    company: 'Sahacharya Digital Solutions',
    role: 'Solutions Architect Intern',
    duration: 'Jun 2021 - Jun 2022',
    description: 'Co-developed a comprehensive society management system deployed on the cloud using Express.js.',
    tech: ['Express.js', 'HTML', 'CSS', 'Node.js']
  },
  {
    company: 'Vedant SoftSolutions PVT LTD',
    role: 'Web Dev Intern',
    duration: '2018 (3 months)',
    description: 'Gained foundational experience in web development, working on enterprise-level applications with Java Spring Boot.',
    tech: ['Java', 'Spring Boot']
  }
];

const Experience = () => {
  const [pulseY, setPulseY] = useState(4);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.scrollHeight;

      // Calculate scroll progress from 0 to 1 as the component scrolls through the viewport
      const progress = Math.max(0, Math.min(1, -top / (height - window.innerHeight)));
      
      // Update pulse position
      const newY = progress * (scrollHeight - 40); // Travel most of the scroll height
      setPulseY(newY < 4 ? 4 : newY); // Ensure it doesn't go above the start
      
      // Update active card index
      let newActiveIndex = Math.floor(progress * experienceData.length);
      if (progress >= 1) {
        newActiveIndex = experienceData.length - 1;
      }
      setActiveIndex(newActiveIndex);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Set initial position on load

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8 relative">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 pattern-grid opacity-10"></div>
      <div className="absolute top-20 left-10 w-16 h-16 border border-accent/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-12 h-12 border border-primary/30 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="text-center mb-16 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Code className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-glow sm:text-5xl lg:text-6xl">
            My Professional Journey
          </h1>
          <Zap className="w-8 h-8 text-accent animate-pulse" />
        </div>
        <div className="relative">
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            A timeline of my work experience and 
            <span className="text-primary font-semibold"> growth as a developer</span>.
          </p>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 blur-lg -z-10 rounded-lg"></div>
        </div>
      </div>
      
      <div ref={containerRef} className="relative max-w-5xl mx-auto">
        <div className="absolute left-4 h-full w-1 bg-gradient-to-b from-primary/20 via-accent/30 to-secondary/40 md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
        
        {/* Enhanced scroll-driven pulse */}
        <div
          className="absolute left-4 w-3 h-24 -translate-x-1/2 md:left-1/2 pointer-events-none"
          style={{
            top: `${pulseY}px`,
            background: 'radial-gradient(ellipse at center, hsl(var(--primary)) 0%, hsl(var(--accent)) 30%, transparent 70%)',
            filter: 'blur(8px)',
            opacity: 0.9,
            transition: 'top 200ms linear',
          }}
          aria-hidden="true"
        />

        <div className="space-y-12">
          {experienceData.map((item, index) => {
            const isRightAligned = index % 2 === 1;
            return (
              <div key={index} className="relative group">
                <div className="absolute left-4 top-1 -translate-x-1/2 md:left-1/2">
                   <div className="z-10 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-background flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_30px_hsl(var(--primary))]">
                    <Briefcase className="w-5 h-5 text-primary-foreground transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                </div>
                <div className={`pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-x-8`}>
                  <div className={isRightAligned ? 'md:col-start-2' : ''}>
                    <TimelineCard 
                      item={item} 
                      align={isRightAligned ? 'left' : 'right'}
                      isActive={index === activeIndex}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
