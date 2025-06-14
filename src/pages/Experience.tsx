
import { Briefcase } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experienceData = [
  {
    company: 'Mettler Toledo International',
    role: 'AI Automation & Full Stack Developer',
    duration: 'Dec 2023 - Present',
    description: 'Implemented AI from scratch, hosting LLMs using Vllm on internal GPUs using docker and nginx. Developed full-stack AI applications and AI agents for core financial processes right from development to devops.',
    tech: ['Python', 'Django', 'FastAPI', 'PyTorch', 'CrewAI', 'LangGraph', 'Docker', 'Nginx']
  },
  {
    company: 'Mettler Toledo International',
    role: 'Developer Intern',
    duration: 'Oct 2023 - Dec 2023',
    description: 'Internship leading to a full-time role, focused on laying the groundwork for AI automation projects and full-stack development.',
    tech: ['Python', 'FastAPI', 'Docker']
  },
  {
    company: 'Sahacharya Digital Solutions',
    role: 'AI Implementation Intern',
    duration: '2023 (3 months)',
    description: 'Explored and integrated various LLM APIs to enhance and automate internal company processes using Python and FastAPI.',
    tech: ['Python', 'FastAPI', 'LLM APIs']
  },
  {
    company: 'Sahacharya Digital Solutions',
    role: 'Solutions Architect Intern',
    duration: 'Jun 2021 - Jun 2022',
    description: 'Co-developed a comprehensive society management system deployed on the cloud using Express.js.',
    tech: ['Express.js', 'HTML', 'CSS', 'Node.js']
  },
  {
    company: 'Vedant SoftSolutions PVT LTD',
    role: 'Web Dev Intern',
    duration: '2018 (3 months)',
    description: 'Gained foundational experience in web development, working on enterprise-level applications with Java Spring Boot.',
    tech: ['Java', 'Spring Boot']
  }
];

const Experience = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-display font-bold text-primary animate-glow sm:text-5xl lg:text-6xl">
          My Professional Journey
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          A timeline of my work experience and growth as a developer.
        </p>
      </div>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-4 h-full w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
        <div className="space-y-12">
          {experienceData.map((item, index) => {
            const isRightAligned = index % 2 === 1;
            return (
              <div key={index} className="relative">
                <div className="absolute left-4 top-1 -translate-x-1/2 md:left-1/2">
                   <div className="z-10 w-6 h-6 rounded-full bg-primary border-4 border-background flex items-center justify-center">
                    <Briefcase className="w-3 h-3 text-primary-foreground" />
                  </div>
                </div>
                <div className={`pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-x-8`}>
                  <div className={isRightAligned ? 'md:col-start-2' : 'md:text-right'}>
                    <TimelineCard item={item} index={index} align={isRightAligned ? 'left' : 'right'}/>
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

const TimelineCard = ({ item, index, align }: { item: typeof experienceData[0], index: number, align: 'left' | 'right' }) => (
  <div className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
    <Card className={`text-left shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-border/20 hover:border-primary bg-card/50 backdrop-blur-sm ${align === 'right' ? 'md:text-right' : ''}`}>
      <CardHeader className={align === 'right' ? 'md:items-end' : ''}>
        <CardTitle className="text-xl font-bold">{item.role}</CardTitle>
        <CardDescription>{item.company} &bull; {item.duration}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{item.description}</p>
        <div className={`flex flex-wrap gap-2 ${align === 'right' ? 'md:justify-end' : 'justify-start'}`}>
          {item.tech.map((techItem) => (
            <Badge key={techItem} variant="secondary">{techItem}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default Experience;
