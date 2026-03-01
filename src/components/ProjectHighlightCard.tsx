import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  githubLink?: string;
}

interface ProjectHighlightCardProps {
  project: Project;
  layout?: 'grid' | 'list' | 'horizontal' | 'vertical';
  className?: string;
}

const ProjectHighlightCard = ({
  project,
  layout = 'grid',
  className = ''
}: ProjectHighlightCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.02}
      transitionSpeed={2000}
      className={cn('h-full w-full group', className)}
    >
      <div
        className={cn(
          "h-full cyber-card relative flex flex-col transition-all duration-300",
          "bg-base-bg/80 border border-primary-green/30",
          "group-hover:border-primary-green group-hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]",
          isHovered ? "glitch-hover" : ""
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Fake Status Badge */}
        <div className="absolute top-3 right-4 z-10 flex items-center gap-2 bg-black/80 px-2 py-1 border border-primary-green/50 backdrop-blur-sm text-[10px] uppercase font-mono text-primary-green">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-green animate-pulse" />
          STATUS: ONLINE
        </div>

        <div className="relative h-48 overflow-hidden [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
          <div className="absolute inset-0 bg-primary-green/20 mix-blend-overlay z-[1]" />
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover filter contrast-125 sepia-[.2] hue-rotate-[90deg] transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50"
          />

          {/* Matrix Rain / Tech Stack Fall overlay */}
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[2] p-4">
            <Terminal className="text-primary-green h-8 w-8 mb-2" />
            <motion.div
              className="flex flex-wrap gap-2 justify-center"
              initial={false}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {project.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  className="text-xs font-mono text-primary-green border border-primary-green/30 bg-primary-green/10 px-2 py-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex-1 flex flex-col p-6 z-[3] font-mono">
          <h3 className="text-xl font-bold mb-2 text-text-base flex items-center gap-2">
            <span className="text-primary-green">&gt;</span> {project.title}
          </h3>
          <p className="text-text-muted mb-4 flex-1 text-sm leading-relaxed">{project.description}</p>

          <div className="flex gap-2 mt-auto pt-4 border-t border-primary-green/10">
            <Button size="sm" variant="outline" className="bg-transparent border-primary-green/50 text-primary-green hover:bg-primary-green hover:text-black rounded-none" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center uppercase text-xs">
                EXECUTE
                <ArrowRight className="ml-2 h-3 w-3" />
              </a>
            </Button>
            {project.githubLink && (
              <Button size="sm" variant="outline" className="bg-transparent border-primary-green/50 text-primary-green hover:bg-primary-green hover:text-black rounded-none" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectHighlightCard;
