
import { useRef, useState, useEffect } from 'react';
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
  isActive: boolean;
}

const TimelineCard = ({ item, align, isActive }: TimelineCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { rootMargin: '-100px 0px' });
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasBeenInView(true);
    }
  }, [isInView]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative w-full",
        !hasBeenInView && "opacity-0",
        isInView && "animate-slide-in-from-top",
        !isInView && hasBeenInView && "animate-slide-out-to-top"
      )}
    >
      <div className={cn(
        "cyber-card p-6 md:p-8 text-left transition-all duration-300 group font-mono relative overflow-hidden bg-black/70 backdrop-blur-xl",
        "border border-primary-green/30 hover:border-funky-accent/80",
        "hover:-translate-y-2 hover:translate-x-1 hover:shadow-[10px_10px_0px_rgba(255,0,60,0.3)]",
        align === 'right' ? 'md:text-right border-r-4 border-r-cyber-blue' : 'border-l-4 border-l-funky-accent',
        isActive && "shadow-[0_0_30px_rgba(0,255,65,0.2)]"
      )}>
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,65,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,65,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />

        {/* Content Wrapper for z-index */}
        <div className="relative z-10">
          <div className={cn("mb-6", align === 'right' ? 'md:items-end flex flex-col' : '')}>
            <div className="inline-flex items-center gap-2 bg-funky-accent/10 border border-funky-accent/30 text-funky-accent px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 transform -skew-x-12">
              <span className="w-2 h-2 rounded-full bg-funky-accent animate-pulse" />
              {item.duration}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-text-base flex flex-wrap items-center gap-2 uppercase tracking-wider drop-shadow-md group-hover:text-primary-green transition-colors">
              {item.role}
            </h3>
            <div className="text-cyber-blue text-sm mt-1 uppercase tracking-widest font-bold">
              @ {item.company}
            </div>
          </div>

          <div>
            <p className="text-text-muted mb-6 text-sm leading-relaxed border-l border-primary-green/20 pl-4 bg-primary-green/5 p-3 group-hover:bg-primary-green/10 transition-colors">
              {item.description}
            </p>
            <div className={`flex flex-wrap gap-2 ${align === 'right' ? 'md:justify-end' : 'justify-start'}`}>
              {item.tech.map((techItem, i) => (
                <span
                  key={techItem}
                  className={cn(
                    "text-xs px-2 py-1 transform skew-x-[-10deg] font-bold tracking-wider",
                    i % 3 === 0 ? "text-primary-green bg-primary-green/10 border border-primary-green/30" :
                      i % 3 === 1 ? "text-cyber-blue bg-cyber-blue/10 border border-cyber-blue/30" :
                        "text-funky-accent bg-funky-accent/10 border border-funky-accent/30"
                  )}
                >
                  <span className="inline-block transform skew-x-[10deg]">{techItem}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-funky-accent/20 to-transparent -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default TimelineCard;
