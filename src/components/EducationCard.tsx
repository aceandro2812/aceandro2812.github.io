
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
    <Card className="text-left shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-primary/20 hover:border-primary bg-card h-full flex flex-col justify-center p-2 [backface-visibility:hidden]">
      <CardHeader>
        <CardTitle className="text-2xl font-serif font-bold text-primary">{item.degree}</CardTitle>
        <CardDescription className="text-muted-foreground pt-1">{item.institution} &bull; {item.duration}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-card-foreground text-lg">{item.description}</p>
      </CardContent>
    </Card>
  );
};

export default EducationCard;

