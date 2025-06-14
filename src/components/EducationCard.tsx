
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

interface EducationCardProps {
  item: EducationItem;
}

const EducationCard = ({ item }: EducationCardProps) => {
  return (
    <Card className="relative text-left shadow-lg transition-all duration-300 border border-primary/20 bg-card h-full flex flex-col justify-center p-6 [backface-visibility:hidden]">
      {/* Decorative corner borders */}
      <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary/30 rounded-tl-md"></div>
      <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary/30 rounded-tr-md"></div>
      <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-primary/30 rounded-bl-md"></div>
      <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary/30 rounded-br-md"></div>
      
      <CardHeader className="p-2 z-10">
        <CardTitle className="text-2xl font-serif font-bold text-primary">{item.degree}</CardTitle>
        <CardDescription className="text-muted-foreground pt-1">{item.institution} &bull; {item.duration}</CardDescription>
      </CardHeader>
      <CardContent className="p-2 pt-0 z-10">
        <p className="text-card-foreground text-lg leading-relaxed">{item.description}</p>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
