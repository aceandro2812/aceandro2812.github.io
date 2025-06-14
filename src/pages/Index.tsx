
import GlobeCanvas from '@/components/AnimatedGlobe';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-theme(space.14))] overflow-hidden px-4 sm:px-6">
      <GlobeCanvas />
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        <div className="animate-fade-in-up mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-foreground/90 mb-2">
            Hi, I'm
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Jatin Iyer
          </h1>
        </div>
        <h3 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground/80 animate-fade-in-up mb-4 sm:mb-6"
          style={{ animationDelay: '0.1s' }}
        >
          AI & Backend Architect
        </h3>
        <p 
          className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-foreground/80 animate-fade-in-up px-4" 
          style={{ animationDelay: '0.2s' }}
        >
          Crafting intelligent agents and robust systems. Exploring the confluence of modern technology and ancient wisdom.
        </p>
        <div 
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up px-4"
          style={{ animationDelay: '0.4s' }}
        >
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/experience">
              Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
