
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

interface EducationCardProps {
  item: EducationItem;
  align: 'left' | 'right';
}

const EducationCard = ({ item, align }: EducationCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { triggerOnce: true, rootMargin: '-100px 0px' });

  return (
    <div
      ref={cardRef}
      className={cn(
        "transition-opacity duration-1000",
        isInView ? "opacity-100 animate-fade-in-up" : "opacity-0"
      )}
    >
      <Card className={cn(
        "text-left shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-border/20 hover:border-primary bg-card/50 backdrop-blur-sm",
        align === 'right' ? 'md:text-right' : ''
      )}>
        <CardHeader className={align === 'right' ? 'md:items-end' : ''}>
          <CardTitle className="text-xl font-bold">{item.degree}</CardTitle>
          <CardDescription>{item.institution} &bull; {item.duration}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{item.description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EducationCard;
