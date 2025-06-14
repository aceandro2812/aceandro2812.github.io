
import GlobeCanvas from '@/components/AnimatedGlobe';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Brain, Cpu, Zap, Code, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-theme(space.14))] overflow-hidden px-4 sm:px-6">
      {/* Enhanced AI-themed background elements */}
      <div className="absolute inset-0 pattern-grid opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* AI Circuit Pattern */}
      <div className="absolute top-20 left-10 opacity-20">
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-primary">
          <path d="M20 20 L80 20 L80 80 L20 80 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="20" cy="20" r="3" fill="currentColor"/>
          <circle cx="80" cy="20" r="3" fill="currentColor"/>
          <circle cx="80" cy="80" r="3" fill="currentColor"/>
          <circle cx="20" cy="80" r="3" fill="currentColor"/>
          <path d="M50 20 L50 80" stroke="currentColor" strokeWidth="1"/>
          <path d="M20 50 L80 50" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>
      
      {/* Floating AI Icons */}
      <div className="absolute top-32 right-20 animate-bounce" style={{ animationDelay: '0.5s' }}>
        <Brain className="w-8 h-8 text-accent/40" />
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce" style={{ animationDelay: '1.5s' }}>
        <Cpu className="w-6 h-6 text-primary/40" />
      </div>
      <div className="absolute top-1/2 right-10 animate-bounce" style={{ animationDelay: '2.5s' }}>
        <Bot className="w-7 h-7 text-secondary/40" />
      </div>
      
      <GlobeCanvas />
      
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        <div className="animate-fade-in-up mb-4 sm:mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-display font-medium text-foreground/90 mb-1">
              Hi, I'm
            </h2>
            <Sparkles className="w-5 h-5 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-glow">
            Jatin Iyer
          </h1>
        </div>
        
        <div className="relative mb-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Zap className="w-6 h-6 text-primary animate-pulse" />
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary animate-fade-in-up">
              AI & Backend Architect
            </h3>
            <Code className="w-6 h-6 text-accent animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 blur-lg -z-10 rounded-lg"></div>
        </div>
        
        <p 
          className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-foreground/80 animate-fade-in-up px-4 leading-relaxed" 
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
