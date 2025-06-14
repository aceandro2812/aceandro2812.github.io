
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  tech: string[];
}

interface TimelineCardProps {
  item: ExperienceItem;
  align: 'left' | 'right';
}

const TimelineCard = ({ item, align }: TimelineCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { triggerOnce: true, rootMargin: '-100px 0px' });

  return (
    <div
      ref={cardRef}
      className={cn(
        "opacity-0",
        isInView && 'animate-slide-in-from-top'
      )}
    >
      <Card className={`text-left shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-border/20 hover:border-primary bg-card/50 backdrop-blur-sm ${align === 'right' ? 'md:text-right' : ''}`}>
        <CardHeader className={align === 'right' ? 'md:items-end' : ''}>
          <CardTitle className="text-xl font-bold">{item.role}</CardTitle>
          <CardDescription>{item.company} &bull; {item.duration}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{item.description}</p>
          <div className={`flex flex-wrap gap-2 ${align === 'right' ? 'md:justify-end' : 'justify-start'}`}>
            {item.tech.map((techItem) => (
              <Badge key={techItem} variant="secondary">{techItem}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimelineCard;
