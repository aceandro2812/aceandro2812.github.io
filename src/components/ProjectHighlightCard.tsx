import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import "./ProjectHighlightCard.css";

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
  const isListLayout = layout === 'list' || layout === 'horizontal';
  const isVertical = layout === 'vertical' || layout === 'grid';
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  if (isListLayout) {
    return (
      <div 
        ref={cardRef}
        className={cn('project-card-wrapper', className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="project-card">
          <div className="flex flex-col sm:flex-row h-full">
            <div className="sm:w-1/3 h-48 sm:h-auto">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex-1 flex flex-col p-6 project-card-content">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                {project.githubLink && (
                  <Button size="sm" variant="ghost" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default grid/vertical layout
  return (
    <div 
      ref={cardRef}
      className={cn('project-card-wrapper', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-card">
        <div className="relative h-48">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-6 project-card-content">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="project-card-actions">
            <div className="flex gap-2">
              <Button size="sm" variant="outline" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              {project.githubLink && (
                <Button size="sm" variant="ghost" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHighlightCard;
