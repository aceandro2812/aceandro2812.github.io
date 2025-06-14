
import ProjectHighlightCard from "@/components/ProjectHighlightCard";
import GithubProjects from "@/components/GithubProjects";

const highlightedProjects = [
  {
    title: 'SwasthyaSetu',
    description: 'An innovative healthcare platform connecting patients with doctors for seamless virtual consultations and health record management. Built with modern web technologies for a responsive and secure user experience.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'Healthcare', 'Web App'],
    link: 'https://github.com/gaurav-g-404/Swasthya-setu'
  },
  {
    title: 'kachraBOT',
    description: 'An IoT-based smart waste management system. kachraBOT aims to optimize garbage collection routes and schedules using sensor data, contributing to cleaner cities and efficient resource management.',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop',
    tags: ['IoT', 'Python', 'Arduino', 'Smart City'],
    link: 'https://github.com/gaurav-g-404/KachraBOT'
  }
];

const Projects = () => {
  return (
    <div className="bg-background py-8 sm:py-12 flex flex-col items-center justify-center min-h-[calc(100vh-theme(space.14)-6rem)] animate-fade-in">
      <div className="container mx-auto text-center max-w-6xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 animate-slide-in-from-top">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary animate-glow">
            My Creations
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            A showcase of my passion for building innovative solutions.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 mb-16 sm:mb-20">
          {highlightedProjects.map((project, index) => (
            <div key={project.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms`}}>
              <ProjectHighlightCard project={project} reverse={index % 2 !== 0} />
            </div>
          ))}
        </div>
        
        <GithubProjects username="gaurav-g-404" />

      </div>
    </div>
  );
};

export default Projects;
