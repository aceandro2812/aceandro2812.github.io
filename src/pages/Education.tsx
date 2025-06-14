
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from "lucide-react";
import EducationCard from "@/components/EducationCard";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate-fade-in');

  const handleNavigation = (direction: 'prev' | 'next') => {
    setAnimationClass('animate-fade-out');
    
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % educationData.length);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + educationData.length) % educationData.length);
      }
      setAnimationClass('animate-fade-in');
    }, 300); // Duration should match fade-out animation
  };

  return (
    <div className="bg-background -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-theme(space.14)-6rem)]">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary animate-glow sm:text-5xl lg:text-6xl">
            My Academic Path
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            From foundational schooling to specialized technical education.
          </p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto h-[22rem]">
          <div className={cn("w-full h-full", animationClass)}>
             <EducationCard item={educationData[currentIndex]} />
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button variant="outline" size="icon" onClick={() => handleNavigation('prev')} aria-label="Previous Education" disabled={animationClass === 'animate-fade-out'}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="text-sm text-muted-foreground font-mono">
            {currentIndex + 1} / {educationData.length}
            <p className="text-xs text-muted-foreground/70 animate-pulse">Flip the page</p>
          </div>
          <Button variant="outline" size="icon" onClick={() => handleNavigation('next')} aria-label="Next Education" disabled={animationClass === 'animate-fade-out'}>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Education;
