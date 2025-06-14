
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  animationDelay: number;
}

const SkillCard = ({ name, icon, animationDelay }: SkillCardProps) => {
  return (
    <Card 
      className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
        {icon}
        <span className="font-medium text-center text-foreground">{name}</span>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
