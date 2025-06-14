
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  animationDelay: number;
  isInView: boolean;
}

const SkillCard = ({ name, icon, animationDelay, isInView }: SkillCardProps) => {
  const iconWithHover = React.isValidElement(icon)
    ? React.cloneElement(icon, {
        // @ts-ignore - className is a valid prop for lucide icons
        className: cn(icon.props.className, 'group-hover:text-primary transition-colors duration-300'),
      })
    : icon;

  return (
    <Card 
      className={cn(
        "group bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20",
        isInView ? "animate-fade-in-up" : "opacity-0"
      )}
      style={{ animationDelay: `${animationDelay}ms`, willChange: 'transform, opacity' }}
    >
      <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
        {iconWithHover}
        <span className="font-medium text-center text-foreground">{name}</span>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
