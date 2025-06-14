
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
    <Card className="bg-card/50 border-border/20 overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
      <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:w-1/2">
          <img src={project.imageUrl} alt={project.title} className="w-full h-64 md:h-full object-cover" />
        </div>
        <div className="md:w-1/2 flex flex-col">
          <CardHeader className="text-left">
            <CardTitle className="text-3xl font-serif text-primary">{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-between text-left space-y-4">
            <p className="text-card-foreground text-lg">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="self-start">
              <Button variant="outline">
                View on GitHub <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default ProjectHighlightCard;
