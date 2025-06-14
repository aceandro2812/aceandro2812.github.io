
import GlobeCanvas from '@/components/AnimatedGlobe';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-theme(space.14))] overflow-hidden">
      <GlobeCanvas />
      <div className="relative z-10 text-center px-4">
        <h1 
          className="text-5xl md:text-7xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-fade-in-up"
        >
          AI & Backend Architect
        </h1>
        <p 
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 animate-fade-in-up" 
          style={{ animationDelay: '0.2s' }}
        >
          Crafting intelligent agents and robust systems. Exploring the confluence of modern technology and ancient wisdom.
        </p>
        <div 
          className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <Button asChild size="lg">
            <Link to="/experience">
              Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
