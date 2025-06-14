
import EducationCard from '@/components/EducationCard';
import { GraduationCap, Sparkles, BookOpen, Award } from 'lucide-react';

const educationData = [
  {
    institution: "Indian Institute of Technology",
    degree: "Master of Technology in Computer Science",
    duration: "2020 - 2022",
    description: "Specialized in Artificial Intelligence and Machine Learning with focus on deep learning architectures and neural networks."
  },
  {
    institution: "University of California, Berkeley",
    degree: "Bachelor of Science in Electrical Engineering",
    duration: "2016 - 2020",
    description: "Focused on embedded systems, control systems, and robotics. Graduated with honors."
  },
];

const certificationData = [
  {
    institution: "Harvard University",
    degree: "Certification in Quantum Computing",
    duration: "2023",
    description: "Completed an intensive certification program focused on quantum algorithms and quantum information theory."
  },
  {
    institution: "Coursera",
    degree: "Deep Learning Specialization",
    duration: "2021",
    description: "Mastered the foundations of Deep Learning, understood how to build neural networks, and led successful machine learning projects."
  },
  {
    institution: "AWS",
    degree: "Certified Solutions Architect - Associate",
    duration: "2022",
    description: "Demonstrated knowledge of how to architect and deploy secure and robust applications on AWS technologies."
  }
];

const Education = () => {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative min-h-[calc(100vh-theme(space.14))]">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 pattern-diagonal opacity-15"></div>
      <div className="absolute top-20 left-1/4 w-20 h-20 border-2 border-accent/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-16 h-16 border-2 border-primary/20 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-primary animate-pulse" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Educational Journey
            </h1>
            <BookOpen className="w-6 h-6 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="relative">
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Building the foundation for <span className="text-primary font-semibold">innovation</span> and 
              <span className="text-accent font-semibold"> technological excellence</span>
            </p>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 blur-lg -z-10 rounded-lg"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {educationData.map((item, index) => (
            <EducationCard key={index} item={item} />
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-6 h-6 text-primary animate-pulse" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                Certifications & Specializations
              </h2>
              <Sparkles className="w-6 h-6 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Validating expertise and commitment to continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {certificationData.map((item, index) => (
              <EducationCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
