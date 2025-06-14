
import { GraduationCap } from "lucide-react";
import EducationCard from "@/components/EducationCard";

const educationData = [
  {
    institution: 'Sies Graduate School of Technology, Nerul',
    degree: 'B.Tech in Computer Engineering',
    duration: '2020 - 2023',
    description: 'Focused on advanced topics in computer science and artificial intelligence, laying the foundation for a career in tech.',
  },
  {
    institution: 'Mucchala Polytechnic College',
    degree: 'Diploma in Computer Engineering',
    duration: '2017 - 2020',
    description: 'Gained comprehensive knowledge in computer engineering principles and practical skills over a three-year diploma program.',
  },
  {
    institution: 'Vasant Vihar High School and Junior College',
    degree: 'High School & Junior College',
    duration: '2005 - 2017',
    description: 'Completed primary and secondary education, building a strong academic base.',
  }
];

const Education = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-display font-bold text-primary animate-glow sm:text-5xl lg:text-6xl">
          My Academic Path
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          From foundational schooling to specialized technical education.
        </p>
      </div>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-4 h-full w-1 bg-gradient-to-b from-transparent via-primary/30 to-primary/60 md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />

        <div className="space-y-12">
          {educationData.map((item, index) => {
            const isRightAligned = index % 2 === 1;
            return (
              <div key={index} className="relative group">
                <div className="absolute left-4 top-1 -translate-x-1/2 md:left-1/2">
                   <div className="z-10 w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(var(--primary))]">
                    <GraduationCap className="w-4 h-4 text-primary-foreground transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                </div>
                <div className={`pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-x-8`}>
                  <div className={isRightAligned ? 'md:col-start-2' : ''}>
                    <EducationCard 
                      item={item} 
                      align={isRightAligned ? 'left' : 'right'}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
