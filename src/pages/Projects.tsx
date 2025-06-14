
import ProjectHighlightCard from '@/components/ProjectHighlightCard';
import GithubProjects from '@/components/GithubProjects';
import { Code, Sparkles, Rocket, Zap } from 'lucide-react';

const Projects = () => {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative min-h-[calc(100vh-theme(space.14))]">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 pattern-dots opacity-15"></div>
      <div className="absolute top-20 right-1/4 w-24 h-24 border-2 border-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-accent/20 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-6 h-6 text-primary animate-pulse" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Featured Projects
            </h1>
            <Code className="w-6 h-6 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="relative">
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Exploring the boundaries of <span className="text-primary font-semibold">AI innovation</span> and 
              <span className="text-accent font-semibold"> software engineering</span>
            </p>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 blur-lg -z-10 rounded-lg"></div>
          </div>
        </div>

        <div className="space-y-12 sm:space-y-16">
          <ProjectHighlightCard />
          <GithubProjects />
        </div>
      </div>
    </div>
  );
};

export default Projects;
