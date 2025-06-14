
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from "lucide-react";
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

  // The 'active' index is the one currently visible to the user.
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

    // Pre-load the content for the face that's about to be revealed.
    if (isFlipped) {
      setFrontIndex(nextItemIndex);
    } else {
      setBackIndex(nextItemIndex);
    }
    
    // Trigger the flip.
    setIsFlipped(!isFlipped);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // This should match the transition duration.
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

        <div className="relative w-full max-w-2xl mx-auto h-[22rem] [perspective:1200px]">
          <div 
            className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-1000"
            style={{ transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)' }}
          >
            {/* Front Face */}
            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <EducationCard item={educationData[frontIndex]} />
            </div>
            {/* Back Face */}
            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <EducationCard item={educationData[backIndex]} />
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button variant="outline" size="icon" onClick={() => handleNavigation('prev')} aria-label="Previous Education" disabled={isAnimating}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="text-sm text-muted-foreground font-mono">
            {currentIndex + 1} / {educationData.length}
            <p className="text-xs text-muted-foreground/70 animate-pulse">Flip the page</p>
          </div>
          <Button variant="outline" size="icon" onClick={() => handleNavigation('next')} aria-label="Next Education" disabled={isAnimating}>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Education;
