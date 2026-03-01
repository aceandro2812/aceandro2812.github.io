import { useState } from 'react';
import ProjectHighlightCard from '@/components/ProjectHighlightCard';
import GithubProjects from '@/components/GithubProjects';
import { Terminal, Grid3x3, List } from 'lucide-react';
import { usePortfolio } from '@/context/PortfolioContext';
import { cn } from '@/lib/utils';
import { ScrambleText } from '@/components/ScrambleText';

const Projects = () => {
  const { projects, personalInfo } = usePortfolio();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen font-mono pb-32">
      {/* Hero Section */}
      <div className="relative">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold tracking-widest text-text-base sm:text-5xl md:text-6xl uppercase flex justify-center items-center gap-4">
              <Terminal className="text-primary-green w-10 h-10" />
              DEPLOYED_PROTOCOLS
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-primary-green/70 uppercase">
              <ScrambleText text="[INDEXING_LIVE_MODULES_AND_OPEN_SOURCE_CONTRIBUTIONS...]" />
            </p>
          </div>

          <p className="text-text-muted max-w-2xl mx-auto font-mono text-sm border-l-2 border-primary-green/30 pl-4 bg-black/40 p-4 shadow-[0_0_15px_rgba(0,255,65,0.1)]">
            <span className="text-primary-green font-bold">&gt; REPOSITORY_ACCESS:</span> Archival of autonomous agents, AI integrations, and full-stack systems I've architected. Hover over project nodes for technical specifications and deployment logs.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="mb-10 flex flex-col items-center justify-between gap-6 sm:flex-row border-b border-primary-green/20 pb-6">
          <div className="bg-primary-green/5 backdrop-blur-md p-4 border border-primary-green/30 cyber-card">
            <h2 className="text-lg font-bold tracking-wider text-primary-green uppercase">
              CORE_SYSTEMS
            </h2>
            <p className="mt-1 text-xs text-text-muted">
              ARCHIVES OF RECENT ARCHITECTURES
            </p>
          </div>
          <div className="inline-flex border border-primary-green/30 bg-black/50 p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={cn(
                'inline-flex items-center justify-center px-4 py-2 text-xs font-bold transition-colors uppercase tracking-widest',
                viewMode === 'grid'
                  ? 'bg-primary-green text-black shadow-[0_0_10px_#00FF41]'
                  : 'text-primary-green/60 hover:bg-primary-green/10 hover:text-primary-green'
              )}
            >
              <Grid3x3 className="mr-2 h-4 w-4" />
              MATRIX
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={cn(
                'inline-flex items-center justify-center px-4 py-2 text-xs font-bold transition-colors uppercase tracking-widest',
                viewMode === 'list'
                  ? 'bg-primary-green text-black shadow-[0_0_10px_#00FF41]'
                  : 'text-primary-green/60 hover:bg-primary-green/10 hover:text-primary-green'
              )}
            >
              <List className="mr-2 h-4 w-4" />
              LINEAR
            </button>
          </div>
        </div>

        <div
          className={cn(
            'transition-all duration-500 w-full',
            viewMode === 'grid'
              ? 'columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6'
              : 'flex flex-col gap-6'
          )}
        >
          {projects.map((project) => (
            <div key={project.title} className="break-inside-avoid">
              <ProjectHighlightCard
                project={project}
                layout={viewMode === 'list' ? 'horizontal' : 'grid'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Projects */}
      <div className="border-t border-primary-green/20 py-16 bg-primary-green/5 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,65,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-widest text-primary-green sm:text-3xl uppercase">
                &lt; OPEN_SOURCE_CONTRIBUTIONS /&gt;
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-xs text-text-muted uppercase tracking-widest">
                [PULLING_GITHUP_API_DATA...]
              </p>
            </div>
            <GithubProjects username={personalInfo.github} className="max-w-7xl" />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Projects;
