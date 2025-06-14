
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  description: string;
  link?: string;
}

interface EducationCardProps {
  item: EducationItem;
}

const EducationCard = ({ item }: EducationCardProps) => {
  const cardElement = (
    <Card className="group relative text-left shadow-xl transition-all duration-300 border-2 border-primary/30 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm h-full flex flex-col justify-center p-4 sm:p-6 [backface-visibility:hidden] hover:shadow-2xl hover:shadow-primary/20">
      {/* Enhanced decorative corner borders */}
      <div className="absolute top-2 left-2 w-6 h-6 sm:w-8 sm:h-8 border-t-3 border-l-3 border-primary/50 rounded-tl-lg"></div>
      <div className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 border-t-3 border-r-3 border-accent/50 rounded-tr-lg"></div>
      <div className="absolute bottom-2 left-2 w-6 h-6 sm:w-8 sm:h-8 border-b-3 border-l-3 border-secondary/50 rounded-bl-lg"></div>
      <div className="absolute bottom-2 right-2 w-6 h-6 sm:w-8 sm:h-8 border-b-3 border-r-3 border-primary/50 rounded-br-lg"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-4 pattern-dots opacity-5"></div>
      
      <CardHeader className="p-2 z-10 relative">
        <CardTitle className="flex justify-between items-start text-lg sm:text-xl md:text-2xl font-serif font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{item.degree}</span>
          {item.link && <ExternalLink className="w-4 h-4 text-accent/70 group-hover:text-primary transition-colors shrink-0 ml-2 mt-1" />}
        </CardTitle>
        <CardDescription className="text-foreground/80 pt-2 text-sm sm:text-base font-medium">
          <span className="text-accent">{item.institution}</span> 
          <span className="mx-2 text-primary">•</span> 
          <span className="text-secondary">{item.duration}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2 pt-0 z-10 relative">
        <p className="text-foreground/90 text-sm sm:text-base md:text-lg leading-relaxed">
          {item.description}
        </p>
      </CardContent>
    </Card>
  );

  if (item.link) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {cardElement}
      </a>
    )
  }

  return cardElement;
};

export default EducationCard;
