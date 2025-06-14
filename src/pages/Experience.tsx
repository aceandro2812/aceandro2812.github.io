import TimelineCard from '@/components/TimelineCard';
import { Briefcase, Code } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';

const Experience = () => {
  const { experience } = usePortfolio();
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

        <div className="relative">
          {/* Vertical line for timeline - hidden on mobile */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-primary/20 md:block" aria-hidden="true"></div>

          <div className="space-y-12 md:space-y-16">
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative md:grid md:grid-cols-2 md:items-start md:gap-x-16">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-8 hidden -translate-x-1/2 md:block">
                    <div className="h-4 w-4 rounded-full bg-background ring-4 ring-primary"></div>
                  </div>
                  
                  {/* Timeline Card */}
                  <div className={isLeft ? 'md:col-start-1' : 'md:col-start-2'}>
                    <TimelineCard 
                      item={item} 
                      align={isLeft ? 'left' : 'right'}
                      isActive={index === 0}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
