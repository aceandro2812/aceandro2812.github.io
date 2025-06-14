import { useState } from 'react';
import ProjectHighlightCard from '@/components/ProjectHighlightCard';
import GithubProjects from '@/components/GithubProjects';
import { Code, Rocket, Code2, Grid3x3, List } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { cn } from '@/lib/utils';

const Projects = () => {
  const { projects, personalInfo } = usePortfolio();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Showcasing my work in AI, web development, and software engineering
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="mb-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Featured Work
            </h2>
            <p className="mt-2 text-muted-foreground">
              A selection of my recent projects and contributions
            </p>
          </div>
          <div className="inline-flex rounded-lg border border-border bg-muted/50 p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={cn(
                'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                viewMode === 'grid' 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:bg-muted/50'
              )}
            >
              <Grid3x3 className="mr-2 h-4 w-4" />
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={cn(
                'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                viewMode === 'list' 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:bg-muted/50'
              )}
            >
              <List className="mr-2 h-4 w-4" />
              List
            </button>
          </div>
        </div>

        <div 
          className={cn(
            'grid gap-6',
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3' 
              : 'grid-cols-1',
            'transition-all duration-300',
            'bg-transparent' // Ensure the grid itself is transparent
          )}
        >
          {projects.map((project) => (
            <ProjectHighlightCard 
              key={project.title} 
              project={project} 
              layout={viewMode === 'list' ? 'horizontal' : 'vertical'}
            />
          ))}
        </div>
      </div>

      {/* GitHub Projects */}
      <div className="border-t border-border/50 py-16 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Open Source Contributions
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Explore my open-source projects and contributions on GitHub
              </p>
            </div>
            <GithubProjects username={personalInfo.github} className="max-w-7xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
