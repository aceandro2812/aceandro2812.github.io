
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

interface ProjectHighlightCardProps {
  project: Project;
  reverse?: boolean;
}

const ProjectHighlightCard = ({ project, reverse = false }: ProjectHighlightCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-2 border-primary/20 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        <div className="lg:w-1/2 relative overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-48 sm:h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="lg:w-1/2 flex flex-col p-4 sm:p-6 relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 pattern-dots opacity-5"></div>
          
          <CardHeader className="text-left p-0 mb-4 relative z-10">
            <CardTitle className="text-2xl sm:text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent group-hover:from-accent group-hover:to-secondary transition-all duration-300">
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-between text-left space-y-4 p-0 relative z-10">
            <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="text-xs sm:text-sm bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="self-start">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-sm border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300 group/btn"
              >
                <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                View on GitHub 
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Button>
            </a>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default ProjectHighlightCard;
