
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
      <div className="text-center mb-12">
        <h1 className="text-4xl font-display font-bold text-primary animate-glow">
          My Professional Journey
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A timeline of my work experience and growth as a developer.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border/40" aria-hidden="true"></div>
        <div className="relative flex flex-col gap-y-12">
          {experienceData.map((item, index) => (
            <div key={index} className="flex items-center w-full">
              <div className={`flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  {index % 2 !== 0 && (
                    <TimelineCard item={item} index={index} />
                  )}
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-primary-foreground" />
              </div>
              <div className={`flex w-full items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                  {index % 2 === 0 && (
                     <TimelineCard item={item} index={index} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineCard = ({ item, index }: { item: typeof experienceData[0], index: number }) => (
  <div className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
    <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{item.role}</CardTitle>
        <CardDescription>{item.company} &bull; {item.duration}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tech.map((techItem) => (
            <Badge key={techItem} variant="secondary">{techItem}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default Experience;
