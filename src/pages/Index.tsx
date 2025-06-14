
import GlobeCanvas from '@/components/AnimatedGlobe';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-theme(space.14))] overflow-hidden px-4 sm:px-6">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pattern-grid opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <GlobeCanvas />
      
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        <div className="animate-fade-in-up mb-4 sm:mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-foreground mb-2">
              Hi, I'm
            </h2>
            <Sparkles className="w-6 h-6 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-glow">
            Jatin Iyer
          </h1>
        </div>
        
        <div className="relative">
          <h3 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary animate-fade-in-up mb-4 sm:mb-6"
            style={{ animationDelay: '0.1s' }}
          >
            AI & Backend Architect
          </h3>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg -z-10 rounded-lg"></div>
        </div>
        
        <p 
          className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-foreground/90 animate-fade-in-up px-4 leading-relaxed" 
          style={{ animationDelay: '0.2s' }}
        >
          Crafting intelligent agents and robust systems. Exploring the confluence of 
          <span className="text-accent font-semibold"> modern technology</span> and 
          <span className="text-primary font-semibold"> ancient wisdom</span>.
        </p>
        
        <div 
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up px-4"
          style={{ animationDelay: '0.4s' }}
        >
          <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
            <Link to="/experience" className="flex items-center justify-center">
              Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-2 border-secondary/50 hover:bg-secondary/10 hover:border-secondary transition-all duration-300">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
