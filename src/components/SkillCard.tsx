
import React from 'react';
import { cn } from '@/lib/utils';
import { SiReact } from 'react-icons/si';

// Import all icons we might use
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import * as LucideIcons from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: string;
  color: string;
}

// Helper function to safely get an icon component
const getIcon = (iconName: string): React.ComponentType<{ className?: string }> => {
  // Try to find the icon in the icon libraries
  const icon = 
    (SiIcons as any)[iconName] || 
    (FaIcons as any)[iconName] ||
    (LucideIcons as any)[iconName];
  
  // If icon is not found, return a default icon
  return icon || SiReact;
};

const SkillCard = ({ name, icon, color }: SkillCardProps) => {
  const Icon = getIcon(icon);

  return (
    <div
      className={cn(
        "group relative w-36 h-36 cursor-pointer overflow-hidden rounded-lg border p-4",
        "border-primary/20 bg-card/50 backdrop-blur-sm",
        "hover:border-[--skill-color] !bg-card/80 hover:shadow-lg hover:shadow-[--skill-color]/20",
        "transition-all duration-300"
      )}
      style={{ '--skill-color': color } as React.CSSProperties}
    >
      <div className="flex flex-col items-center justify-center gap-4 h-full">
        <Icon className="w-10 h-10 text-foreground/80 transition-colors duration-300 group-hover:text-[--skill-color]" />
        <span className="text-sm font-medium text-center text-foreground">
          {name}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
