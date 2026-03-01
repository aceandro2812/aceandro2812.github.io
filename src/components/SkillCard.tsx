
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
        "group relative w-36 h-36 cursor-pointer overflow-hidden p-4 flex flex-col items-center justify-center gap-4",
        "cyber-card font-mono text-center transition-all duration-300 hover:scale-110 shadow-lg",
      )}
      style={{ '--skill-color': color } as React.CSSProperties}
    >
      <Icon className="w-10 h-10 text-primary-green/50 transition-colors duration-300 group-hover:text-[--skill-color] drop-shadow-[0_0_8px_rgba(0,255,65,0.5)] group-hover:drop-shadow-[0_0_12px_var(--skill-color)] relative z-10" />
      <span className="text-xs text-primary-green/80 group-hover:text-text-base transition-colors duration-300 relative z-10 uppercase tracking-widest">
        {name}
      </span>
      {/* Glitch Overlay on Hover */}
      <div className="absolute inset-0 bg-primary-green/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-0" />
    </div>
  );
};

export default SkillCard;
