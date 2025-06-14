
import { useState } from 'react';
import { ArrowLeft, ArrowRight, GraduationCap, BookOpen } from "lucide-react";
import EducationCard from "@/components/EducationCard";
import { Button } from '@/components/ui/button';

const educationData = [
  {
    institution: 'Sies Graduate School of Technology, Nerul',
    degree: 'B.Tech in Computer Engineering',
    duration: '2020 - 2023',
    description: 'Focused on advanced topics in computer science and artificial intelligence, laying the foundation for a career in tech.',
  },
  {
    institution: 'Mucchala Polytechnic College',
    degree: 'Diploma in Computer Engineering',
    duration: '2017 - 2020',
    description: 'Gained comprehensive knowledge in computer engineering principles and practical skills over a three-year diploma program.',
  },
  {
    institution: 'Vasant Vihar High School and Junior College',
    degree: 'High School & Junior College',
    duration: '2005 - 2017',
    description: 'Completed primary and secondary education, building a strong academic base.',
  }
];

const Education = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [frontIndex, setFrontIndex] = useState(0);
  const [backIndex, setBackIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentIndex = isFlipped ? backIndex : frontIndex;

  const handleNavigation = (direction: 'prev' | 'next') => {
    if (isAnimating) return;
    setIsAnimating(true);

    const totalItems = educationData.length;
    let nextItemIndex;

    if (direction === 'next') {
        nextItemIndex = (currentIndex + 1) % totalItems;
    } else {
        nextItemIndex = (currentIndex - 1 + totalItems) % totalItems;
    }

    if (isFlipped) {
      setFrontIndex(nextItemIndex);
    } else {
      setBackIndex(nextItemIndex);
    }
    
    setIsFlipped(!isFlipped);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className="bg-background py-8 sm:py-12 flex flex-col items-center justify-center min-h-[calc(100vh-theme(space.14)-6rem)] px-4 relative">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      <div className="absolute top-10 right-20 w-24 h-24 border-2 border-primary/20 rounded-lg rotate-45 animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-20 h-20 border-2 border-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-glow">
              My Academic Path
            </h1>
            <BookOpen className="w-8 h-8 text-accent animate-pulse" />
          </div>
          <div className="relative">
            <p className="mt-4 text-base sm:text-lg text-foreground/80 max-w-3xl mx-auto px-4 leading-relaxed">
              From foundational schooling to 
              <span className="text-primary font-semibold"> specialized technical education</span>.
            </p>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 blur-lg -z-10 rounded-lg"></div>
          </div>
        </div>

        <div className="relative w-full max-w-2xl mx-auto h-[18rem] sm:h-[20rem] md:h-[22rem] [perspective:1200px]">
          <div 
            className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-1000"
            style={{ transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)' }}
          >
            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <EducationCard item={educationData[frontIndex]} />
            </div>
            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <EducationCard item={educationData[backIndex]} />
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => handleNavigation('prev')} 
            aria-label="Previous Education" 
            disabled={isAnimating}
            className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="text-sm text-foreground/70 font-mono px-4 py-2 bg-card/50 rounded-lg border border-primary/20">
            <span className="text-primary font-bold">{currentIndex + 1}</span> / {educationData.length}
            <p className="text-xs text-accent/80 animate-pulse">Flip the page</p>
          </div>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => handleNavigation('next')} 
            aria-label="Next Education" 
            disabled={isAnimating}
            className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Education;
