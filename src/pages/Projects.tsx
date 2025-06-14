
import ProjectHighlightCard from "@/components/ProjectHighlightCard";
import GithubProjects from "@/components/GithubProjects";
import { Code2, Sparkles } from "lucide-react";

const highlightedProjects = [
  {
    title: 'SwasthyaSetu',
    description: 'An innovative healthcare platform connecting patients with doctors for seamless virtual consultations and health record management. Built with modern web technologies for a responsive and secure user experience.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'Healthcare', 'Web App'],
    link: 'https://github.com/gaurav-g-404/Swasthya-setu'
  },
  {
    title: 'kachraBOT',
    description: 'An IoT-based smart waste management system. kachraBOT aims to optimize garbage collection routes and schedules using sensor data, contributing to cleaner cities and efficient resource management.',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop',
    tags: ['IoT', 'Python', 'Arduino', 'Smart City'],
    link: 'https://github.com/gaurav-g-404/KachraBOT'
  }
];

const Projects = () => {
  return (
    <div className="bg-background py-8 sm:py-12 flex flex-col items-center justify-center min-h-[calc(100vh-theme(space.14)-6rem)] animate-fade-in relative">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 pattern-diagonal opacity-10"></div>
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto text-center max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="mb-8 sm:mb-12 animate-slide-in-from-top">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-8 h-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-glow">
              My Creations
            </h1>
            <Sparkles className="w-8 h-8 text-accent animate-pulse" />
          </div>
          <div className="relative">
            <p className="mt-4 text-base sm:text-lg text-foreground/80 max-w-3xl mx-auto px-4 leading-relaxed">
              A showcase of my passion for building 
              <span className="text-primary font-semibold"> innovative solutions</span> that make a difference.
            </p>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 blur-lg -z-10 rounded-lg"></div>
          </div>
        </div>

        <div className="space-y-12 sm:space-y-16 mb-16 sm:mb-20">
          {highlightedProjects.map((project, index) => (
            <div key={project.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms`}}>
              <ProjectHighlightCard project={project} reverse={index % 2 !== 0} />
            </div>
          ))}
        </div>
        
        <GithubProjects username="gaurav-g-404" />
      </div>
    </div>
  );
};

export default Projects;
