
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const SkillCard = ({ name, icon, color }: SkillCardProps) => {
  return (
    <figure
      className={cn(
        "group relative w-36 h-36 cursor-pointer overflow-hidden rounded-lg border p-4",
        "border-primary/20 bg-card/50 backdrop-blur-sm",
        "hover:border-[var(--skill-color)] !bg-card/80 hover:shadow-lg hover:shadow-[var(--skill-color)]/20",
        "transition-all duration-300"
      )}
      style={{ '--skill-color': color } as React.CSSProperties}
    >
      <div className="flex flex-col items-center justify-center gap-4 h-full">
        {React.cloneElement(icon as React.ReactElement, {
            className: "w-10 h-10 text-foreground/80 transition-colors duration-300 group-hover:text-[var(--skill-color)]",
        })}
        <figcaption className="text-sm font-medium text-center text-foreground">{name}</figcaption>
      </div>
    </figure>
  );
};

export default SkillCard;
